
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Coleslaw: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current || !mountRef.current) return;
        isInitialized.current = true;

        let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, world: any, effect: any;
        let animationFrameId: number;
        const shreds: { body: any; instanceMesh: THREE.InstancedMesh; instanceId: number; scale: THREE.Vector3; }[] = [];

        const init = async () => {
            const mount = mountRef.current;
            if (!mount) return;

            // Load libraries from local node_modules so Vite bundles them for production
            const [RAPIER, THREE, { OutlineEffect }] = await Promise.all([
                import('@dimforge/rapier3d-compat'),
                import('three'),
                import('three/examples/jsm/effects/OutlineEffect.js')
            ]);

            await RAPIER.init();

            // Scene setup
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x334155); // slate-700

            // Camera setup
            const aspect = mount.clientWidth / mount.clientHeight;
            camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
            camera.position.set(0, 18, 6);
            camera.lookAt(0, 0, 0);

            // Renderer setup
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.shadowMap.enabled = true;
            mount.appendChild(renderer.domElement);

            effect = new OutlineEffect(renderer);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
            directionalLight.position.set(10, 20, 5);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            scene.add(directionalLight);

            // Physics world
            const gravity = { x: 0.0, y: -9.81, z: 0.0 };
            world = new RAPIER.World(gravity);

            // Materials
            const bowlMaterial = new THREE.MeshToonMaterial({ color: 0xf1f5f9 });
            const cabbageMaterial1 = new THREE.MeshToonMaterial({ color: 0xc8e6c9 });
            const cabbageMaterial2 = new THREE.MeshToonMaterial({ color: 0xf1f8e9 });
            const carrotMaterial = new THREE.MeshToonMaterial({ color: 0xffb74d });

            // Create Bowl
            const bowlRadius = 8;
            const bowlHeight = 6;

            // Visual Bowl
            const points = [
                new THREE.Vector2(0.1, 0), // Bottom center (slightly off to avoid artifacts)
                new THREE.Vector2(bowlRadius * 0.7, 0.2), // Curve start
                new THREE.Vector2(bowlRadius, bowlHeight) // Rim
            ];
            const bowlGeo = new THREE.LatheGeometry(points, 40);
            const bowlMesh = new THREE.Mesh(bowlGeo, bowlMaterial);
            bowlMesh.receiveShadow = true;
            scene.add(bowlMesh);

            // Physics Bowl (Trimesh Collider)
            const vertices = bowlGeo.attributes.position.array as Float32Array;
            const indices = bowlGeo.index.array as Uint32Array;
            const bowlBodyDesc = RAPIER.RigidBodyDesc.fixed();
            const bowlBody = world.createRigidBody(bowlBodyDesc);
            const bowlColliderDesc = RAPIER.ColliderDesc.trimesh(vertices, indices);
            world.createCollider(bowlColliderDesc, bowlBody);

            // Create Shreds
            const numCabbage1 = 500;
            const numCabbage2 = 500;
            const numCarrots = 200;

            const shredGeometry = new THREE.BoxGeometry(1, 1, 1);
            const cabbageInstance1 = new THREE.InstancedMesh(shredGeometry, cabbageMaterial1, numCabbage1);
            const cabbageInstance2 = new THREE.InstancedMesh(shredGeometry, cabbageMaterial2, numCabbage2);
            const carrotInstance = new THREE.InstancedMesh(shredGeometry, carrotMaterial, numCarrots);
            cabbageInstance1.castShadow = true;
            cabbageInstance2.castShadow = true;
            carrotInstance.castShadow = true;
            scene.add(cabbageInstance1, cabbageInstance2, carrotInstance);

            const instancedMeshes = [cabbageInstance1, cabbageInstance2, carrotInstance];

            const createShredsForInstance = (instanceMesh: THREE.InstancedMesh, count: number) => {
                for (let i = 0; i < count; i++) {
                    const shredWidth = 1.2 + Math.random() * 0.6;
                    const shredHeight = 0.05;
                    const shredDepth = 0.1 + Math.random() * 0.1;
                    const scale = new THREE.Vector3(shredWidth, shredHeight, shredDepth);

                    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
                        .setTranslation(
                            (Math.random() - 0.5) * (bowlRadius * 0.8),
                            bowlHeight + Math.random() * 5,
                            (Math.random() - 0.5) * (bowlRadius * 0.8)
                        )
                        .setRotation({
                            x: Math.random(), y: Math.random(), z: Math.random(), w: Math.random()
                        });

                    const body = world.createRigidBody(bodyDesc);
                    const colliderDesc = RAPIER.ColliderDesc.cuboid(shredWidth / 2, shredHeight / 2, shredDepth / 2)
                        .setDensity(0.5); // Lighter shreds
                    world.createCollider(colliderDesc, body);

                    shreds.push({ body, instanceMesh, instanceId: i, scale });
                }
            };

            createShredsForInstance(cabbageInstance1, numCabbage1);
            createShredsForInstance(cabbageInstance2, numCabbage2);
            createShredsForInstance(carrotInstance, numCarrots);


            // Mouse interaction
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
            let draggedShred: { body: any; } | null = null;
            const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
            let dragPoint = new THREE.Vector3();
            let lastMousePos = { x: 0, y: 0 };
            let mouseVelocity = { x: 0, y: 0 };

            const onMouseDown = (event: MouseEvent) => {
                mouse.x = (event.clientX / mount.clientWidth) * 2 - 1;
                mouse.y = -(event.clientY / mount.clientHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(instancedMeshes);

                if (intersects.length > 0) {
                    const intersection = intersects[0] as any;
                    const instanceId = intersection.instanceId;
                    const instanceMesh = intersection.object;

                    const foundShred = shreds.find(s => s.instanceMesh === instanceMesh && s.instanceId === instanceId);

                    if (foundShred) {
                        draggedShred = foundShred;
                        draggedShred.body.setBodyType(RAPIER.RigidBodyType.KinematicPositionBased);
                        if (raycaster.ray.intersectPlane(dragPlane, dragPoint)) {
                            // Initial setup if needed
                        }
                    }
                }
            };

            const onMouseMove = (event: MouseEvent) => {
                mouseVelocity = { x: event.clientX - lastMousePos.x, y: event.clientY - lastMousePos.y };
                lastMousePos = { x: event.clientX, y: event.clientY };

                if (draggedShred) {
                    mouse.x = (event.clientX / mount.clientWidth) * 2 - 1;
                    mouse.y = -(event.clientY / mount.clientHeight) * 2 + 1;
                    raycaster.setFromCamera(mouse, camera);

                    const pos = draggedShred.body.translation();
                    dragPlane.set(new THREE.Vector3(0, 1, 0), -pos.y);

                    if (raycaster.ray.intersectPlane(dragPlane, dragPoint)) {
                        draggedShred.body.setNextKinematicTranslation({ x: dragPoint.x, y: dragPoint.y + 1, z: dragPoint.z });
                    }
                }
            };

            const onMouseUp = () => {
                if (draggedShred) {
                    draggedShred.body.setBodyType(RAPIER.RigidBodyType.Dynamic);
                    draggedShred.body.setLinvel({ x: mouseVelocity.x * 2.5, y: 5, z: mouseVelocity.y * 2.5 }, true);
                    draggedShred = null;
                }
            };

            mount.addEventListener('mousedown', onMouseDown);
            mount.addEventListener('mousemove', onMouseMove);
            mount.addEventListener('mouseup', onMouseUp);

            // Animation loop
            const matrix = new THREE.Matrix4();
            const position = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();
            const animate = () => {
                world.step();

                shreds.forEach(shred => {
                    const pos = shred.body.translation();
                    const rot = shred.body.rotation();

                    position.set(pos.x, pos.y, pos.z);
                    quaternion.set(rot.x, rot.y, rot.z, rot.w);

                    matrix.compose(position, quaternion, shred.scale);
                    shred.instanceMesh.setMatrixAt(shred.instanceId, matrix);
                });

                instancedMeshes.forEach(mesh => {
                    mesh.instanceMatrix.needsUpdate = true;
                });

                effect.render(scene, camera);
                animationFrameId = requestAnimationFrame(animate);
            };

            animate();

            const handleResize = () => {
                const w = mount.clientWidth;
                const h = mount.clientHeight;
                effect.setSize(w, h);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', handleResize);

            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
                mount.removeEventListener('mousedown', onMouseDown);
                mount.removeEventListener('mousemove', onMouseMove);
                mount.removeEventListener('mouseup', onMouseUp);
                cancelAnimationFrame(animationFrameId);
                if (mount && renderer.domElement) {
                    mount.removeChild(renderer.domElement);
                }
                world.free();
            };
        };

        let cleanup: (() => void) | undefined;
        init().then(cleanupFn => {
            cleanup = cleanupFn;
        }).catch(console.error);

        return () => {
            if (cleanup) {
                cleanup();
            }
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

export default Coleslaw;