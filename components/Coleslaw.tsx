
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';
import PhysicsWorker from './physics.worker.ts?worker';

const Coleslaw: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current || !mountRef.current) return;
        isInitialized.current = true;

        let camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, effect: any;
        let animationFrameId: number;
        let worker: Worker;

        const init = async () => {
            const mount = mountRef.current;
            if (!mount) return;

            worker = new PhysicsWorker();

            // Scene setup
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x334155); // slate-700

            // Camera setup
            const aspect = mount.clientWidth / mount.clientHeight;
            camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
            camera.position.set(0, 18, 6);
            camera.lookAt(0, 0, 0);

            // Renderer setup
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(mount.clientWidth, mount.clientHeight);
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

            // Materials
            const bowlMaterial = new THREE.MeshToonMaterial({ color: 0xf1f5f9 });
            const cabbageMaterial1 = new THREE.MeshToonMaterial({ color: 0xc8e6c9 });
            const cabbageMaterial2 = new THREE.MeshToonMaterial({ color: 0xf1f8e9 });
            const carrotMaterial = new THREE.MeshToonMaterial({ color: 0xffb74d });

            // Create Bowl
            const bowlRadius = 8;
            const bowlHeight = 6;

            const points = [
                new THREE.Vector2(0.1, 0), // Bottom center (slightly off to avoid artifacts)
                new THREE.Vector2(bowlRadius * 0.7, 0.2), // Curve start
                new THREE.Vector2(bowlRadius, bowlHeight) // Rim
            ];
            const bowlGeo = new THREE.LatheGeometry(points, 40);
            const bowlMesh = new THREE.Mesh(bowlGeo, bowlMaterial);
            bowlMesh.receiveShadow = true;
            scene.add(bowlMesh);

            // Create Shreds
            const numCabbage1 = 500;
            const numCabbage2 = 500;
            const numCarrots = 200;
            const totalShreds = numCabbage1 + numCabbage2 + numCarrots;

            const shredGeometry = new THREE.BoxGeometry(1, 1, 1);
            const cabbageInstance1 = new THREE.InstancedMesh(shredGeometry, cabbageMaterial1, numCabbage1);
            const cabbageInstance2 = new THREE.InstancedMesh(shredGeometry, cabbageMaterial2, numCabbage2);
            const carrotInstance = new THREE.InstancedMesh(shredGeometry, carrotMaterial, numCarrots);
            
            cabbageInstance1.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            cabbageInstance2.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            carrotInstance.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

            cabbageInstance1.receiveShadow = true;
            cabbageInstance2.receiveShadow = true;
            carrotInstance.receiveShadow = true;
            scene.add(cabbageInstance1, cabbageInstance2, carrotInstance);

            const instancedMeshes = [cabbageInstance1, cabbageInstance2, carrotInstance];
            
            const shredDimensions = new Array(totalShreds).fill(0).map(() => ({
                width: 1.2 + Math.random() * 0.6,
                height: 0.05,
                depth: 0.1 + Math.random() * 0.1,
            }));

            const shredScales: THREE.Vector3[] = shredDimensions.map(d => new THREE.Vector3(d.width, d.height, d.depth));


            // Init worker
            worker.postMessage({
                type: 'init',
                payload: {
                    bowlRadius,
                    bowlHeight,
                    bowlVertices: bowlGeo.attributes.position.array as Float32Array,
                    bowlIndices: bowlGeo.index.array as Uint32Array,
                    shredDimensions,
                }
            });

            // Mouse interaction
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
            let draggedShredIndex: number | null = null;
            const dragPlane = new THREE.Plane();
            const dragPoint = new THREE.Vector3();
            const dragOffset = new THREE.Vector3();
            let lastMousePos = { x: 0, y: 0 };
            let mouseVelocity = { x: 0, y: 0 };

            const onMouseDown = (event: { clientX: number, clientY: number }) => {
                mouse.x = (event.clientX / mount.clientWidth) * 2 - 1;
                mouse.y = -(event.clientY / mount.clientHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(instancedMeshes);

                if (intersects.length > 0) {
                    const intersection = intersects[0] as any;
                    const instanceId = intersection.instanceId;
                    const instanceMesh = intersection.object as THREE.InstancedMesh;
                    let shredIndex = 0;

                    if (instanceMesh === cabbageInstance1) shredIndex = instanceId;
                    else if (instanceMesh === cabbageInstance2) shredIndex = numCabbage1 + instanceId;
                    else shredIndex = numCabbage1 + numCabbage2 + instanceId;
                    
                    draggedShredIndex = shredIndex;
                    worker.postMessage({ type: 'dragStart', payload: { shredIndex } });
                    
                    const intersectionPoint = intersection.point.clone();
                    const matrix = new THREE.Matrix4();
                    instanceMesh.getMatrixAt(instanceId, matrix);
                    const shredCenter = new THREE.Vector3().setFromMatrixPosition(matrix);
                    
                    dragOffset.copy(shredCenter).sub(intersectionPoint);

                    const cameraDirection = new THREE.Vector3();
                    camera.getWorldDirection(cameraDirection);
                    dragPlane.setFromNormalAndCoplanarPoint(cameraDirection, intersectionPoint);
                }
            };

            const onMouseMove = (event: { clientX: number, clientY: number }) => {
                mouseVelocity = { x: event.clientX - lastMousePos.x, y: event.clientY - lastMousePos.y };
                lastMousePos = { x: event.clientX, y: event.clientY };

                if (draggedShredIndex !== null) {
                    mouse.x = (event.clientX / mount.clientWidth) * 2 - 1;
                    mouse.y = -(event.clientY / mount.clientHeight) * 2 + 1;
                    raycaster.setFromCamera(mouse, camera);

                    if (raycaster.ray.intersectPlane(dragPlane, dragPoint)) {
                        dragPoint.add(dragOffset);
                        worker.postMessage({
                            type: 'dragMove',
                            payload: {
                                shredIndex: draggedShredIndex,
                                position: { x: dragPoint.x, y: dragPoint.y, z: dragPoint.z }
                            }
                        });
                    }
                }
            };

            const onMouseUp = () => {
                if (draggedShredIndex !== null) {
                    worker.postMessage({
                        type: 'dragEnd',
                        payload: {
                            shredIndex: draggedShredIndex,
                            linvel: { x: mouseVelocity.x * 2.5, y: 5, z: mouseVelocity.y * 2.5 }
                        }
                    });
                    draggedShredIndex = null;
                }
            };
            const onTouchStart = (event: TouchEvent) => {
                event.preventDefault();
                if (event.touches.length > 0) {
                    onMouseDown({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY });
                }
            };
            const onTouchMove = (event: TouchEvent) => {
                event.preventDefault();
                if (event.touches.length > 0) {
                    onMouseMove({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY });
                }
            };
            const onTouchEnd = () => onMouseUp();


            mount.addEventListener('mousedown', onMouseDown);
            mount.addEventListener('mousemove', onMouseMove);
            mount.addEventListener('mouseup', onMouseUp);
            mount.addEventListener('touchstart', onTouchStart, { passive: false });
            mount.addEventListener('touchmove', onTouchMove, { passive: false });
            mount.addEventListener('touchend', onTouchEnd);
            mount.addEventListener('touchcancel', onTouchEnd);


            // Animation loop
            const matrix = new THREE.Matrix4();
            const position = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();

            worker.onmessage = (event) => {
                const { type, payload } = event.data;
                if (type === 'transforms') {
                    const transforms = new Float32Array(payload);
                    let offset = 0;

                    for (let i = 0; i < totalShreds; i++) {
                        position.set(transforms[offset++], transforms[offset++], transforms[offset++]);
                        quaternion.set(transforms[offset++], transforms[offset++], transforms[offset++], transforms[offset++]);
                        
                        const scale = shredScales[i];
                        matrix.compose(position, quaternion, scale);

                        if (i < numCabbage1) {
                            cabbageInstance1.setMatrixAt(i, matrix);
                        } else if (i < numCabbage1 + numCabbage2) {
                            cabbageInstance2.setMatrixAt(i - numCabbage1, matrix);
                        } else {
                            carrotInstance.setMatrixAt(i - numCabbage1 - numCabbage2, matrix);
                        }
                    }

                    instancedMeshes.forEach(mesh => {
                        mesh.instanceMatrix.needsUpdate = true;
                    });

                    // Return buffer to worker for reuse
                    worker.postMessage({ type: 'transforms_ack', payload }, [payload]);
                }
            };

            const animate = () => {
                effect.render(scene, camera);
                animationFrameId = requestAnimationFrame(animate);
            };

            animate();

            const handleResize = () => {
                const w = mount.clientWidth;
                const h = mount.clientHeight;
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
                effect.setSize(w, h);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', handleResize);
            handleResize();

            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
                mount.removeEventListener('mousedown', onMouseDown);
                mount.removeEventListener('mousemove', onMouseMove);
                mount.removeEventListener('mouseup', onMouseUp);
                mount.removeEventListener('touchstart', onTouchStart);
                mount.removeEventListener('touchmove', onTouchMove);
                mount.removeEventListener('touchend', onTouchEnd);
                mount.removeEventListener('touchcancel', onTouchEnd);
                cancelAnimationFrame(animationFrameId);
                worker.postMessage({ type: 'stop' });
                if (mount && renderer.domElement) {
                    mount.removeChild(renderer.domElement);
                }
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
