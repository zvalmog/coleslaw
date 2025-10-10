import * as RAPIER from '@dimforge/rapier3d-compat';

let world: RAPIER.World;
const shreds: { body: RAPIER.RigidBody }[] = [];
let transformsBuffer: ArrayBuffer | null;
let isAnimating = false;

// State for handling prioritized user interaction
let kinematicShredIndex: number | null = null;
let kinematicTargetPosition: { x: number; y: number; z: number } | null = null;

self.onmessage = async (event) => {
    const { type, payload } = event.data;

    switch (type) {
        case 'init': {
            await RAPIER.init();
            const { bowlRadius, bowlHeight, bowlVertices, bowlIndices, shredDimensions } = payload;
            const totalShreds = shredDimensions.length;
            transformsBuffer = new ArrayBuffer(totalShreds * 7 * 4); // 7 floats per shred, 4 bytes per float

            const gravity = { x: 0.0, y: -9.81, z: 0.0 };
            world = new RAPIER.World(gravity);

            const bowlBodyDesc = RAPIER.RigidBodyDesc.fixed();
            const bowlBody = world.createRigidBody(bowlBodyDesc);
            const bowlColliderDesc = RAPIER.ColliderDesc.trimesh(bowlVertices, bowlIndices);
            world.createCollider(bowlColliderDesc, bowlBody);

            for (let i = 0; i < totalShreds; i++) {
                const { width, height, depth } = shredDimensions[i];
                const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
                    .setTranslation(
                        (Math.random() - 0.5) * (bowlRadius * 0.8),
                        bowlHeight + Math.random() * 5,
                        (Math.random() - 0.5) * (bowlRadius * 0.8)
                    ).setRotation({ x: Math.random(), y: Math.random(), z: Math.random(), w: Math.random() });
                const body = world.createRigidBody(bodyDesc);
                const colliderDesc = RAPIER.ColliderDesc.cuboid(width / 2, height / 2, depth / 2).setDensity(0.5);
                world.createCollider(colliderDesc, body);
                shreds.push({ body });
            }

            isAnimating = true;
            animate();
            break;
        }
        case 'transforms_ack': {
            transformsBuffer = payload;
            break;
        }
        case 'dragStart': {
            const { shredIndex, position } = payload;
            if (shreds[shredIndex]) {
                const body = shreds[shredIndex].body;
                body.setBodyType(RAPIER.RigidBodyType.KinematicPositionBased, true);
                body.setNextKinematicTranslation(position);
                kinematicShredIndex = shredIndex;
            }
            break;
        }
        case 'dragMove': {
            // Instead of applying the move directly, just store the latest position.
            // This prevents message queue buildup and ensures we always use the most recent data.
            kinematicTargetPosition = payload.position;
            break;
        }
        case 'dragEnd': {
            const { shredIndex, linvel, position } = payload;
            if (shreds[shredIndex]) {
                const shred = shreds[shredIndex];
                shred.body.setTranslation(position, true); // Teleport to final position before making dynamic
                shred.body.setBodyType(RAPIER.RigidBodyType.Dynamic, true);
                shred.body.setLinvel(linvel, true);
                // Reset interaction state
                kinematicShredIndex = null;
                kinematicTargetPosition = null;
            }
            break;
        }
        case 'stop': {
            isAnimating = false;
            if (world) {
                world.free();
            }
            self.close();
            break;
        }
    }
};

const animate = () => {
    if (!isAnimating) return;

    // "Just-in-time" application of the latest user input before the physics step.
    if (kinematicShredIndex !== null && kinematicTargetPosition !== null && shreds[kinematicShredIndex]) {
        shreds[kinematicShredIndex].body.setNextKinematicTranslation(kinematicTargetPosition);
    }

    if (transformsBuffer) {
        world.step();

        const transforms = new Float32Array(transformsBuffer);
        for (let i = 0; i < shreds.length; i++) {
            const shred = shreds[i];
            const pos = shred.body.translation();
            const rot = shred.body.rotation();
            const offset = i * 7;
            transforms[offset + 0] = pos.x;
            transforms[offset + 1] = pos.y;
            transforms[offset + 2] = pos.z;
            transforms[offset + 3] = rot.x;
            transforms[offset + 4] = rot.y;
            transforms[offset + 5] = rot.z;
            transforms[offset + 6] = rot.w;
        }

        self.postMessage({ type: 'transforms', payload: transformsBuffer }, { transfer: [transformsBuffer] });
        transformsBuffer = null; // We've transferred ownership
    }

    requestAnimationFrame(animate);
};