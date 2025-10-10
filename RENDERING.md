# WebGL Coleslaw Simulator: Rendering & Physics Deep Dive

This document provides a detailed breakdown of the core rendering and physics simulation logic within the `Coleslaw.tsx` component.

## Overview

The simulation leverages a combination of powerful web technologies to achieve a real-time, interactive 3D experience:

-   **Rendering:** [Three.js](https://threejs.org/) is used for all 3D rendering on the main browser thread, including scene setup, camera, lighting, materials, and object management.
-   **Physics:** [@dimforge/rapier3d-compat](https://rapier.rs/) handles the physics simulation. It runs inside a **Web Worker** via WebAssembly (WASM) for near-native performance, calculating the motion and collision of all coleslaw shreds on a separate CPU core.
-   **Framework:** [React](https://react.dev/) is used to manage the component lifecycle and mount the WebGL canvas. The simulation itself is initialized within a `useEffect` hook to ensure it runs only on the client and only once.

## Core Rendering & Physics Pipeline

The simulation is split between the main browser thread and a dedicated Web Worker to ensure a smooth, non-blocking user experience.

### Physics Thread (Web Worker)

A separate thread is responsible for all physics calculations to prevent them from interfering with rendering.

1.  **Initialization:** The worker receives instructions from the main thread to set up the Rapier3D physics world, including the static bowl and all 1200 dynamic coleslaw shreds.
2.  **Simulation Loop:** The worker runs a continuous loop synchronized with the display's refresh rate (`requestAnimationFrame`). In each tick, it calls `world.step()` to advance the physics simulation.
3.  **Data Transfer:** After each step, the positions and rotations of all 1200 shreds are written into a `Float32Array`. The underlying `ArrayBuffer` is then efficiently transferred to the main thread with zero-copy using the Transferable Objects API. This avoids costly data cloning.

### Main Thread (Rendering)

The main thread handles all user input, rendering, and communication with the physics worker.

1.  **Receive Physics Data:** The main thread listens for messages from the worker. When it receives the `ArrayBuffer` with the latest shred transformations, it immediately uses the data to update the visual representation.
2.  **Synchronize Visuals:** It iterates through the received transformation data, computes a final transformation matrix (combining position, rotation, and scale) for each shred, and updates the `THREE.InstancedMesh` objects. This is a very fast process.
3.  **Return Buffer:** To avoid memory allocation and garbage collection in the physics loop, the main thread transfers ownership of the `ArrayBuffer` back to the worker, allowing it to be reused in the next physics step.
4.  **Render Scene:** In a separate `requestAnimationFrame` loop, the main thread continuously renders the Three.js scene using `effect.render(scene, camera)`. Because the physics calculations are offloaded, this loop is not blocked and can maintain a high frame rate.
5.  **User Interaction:** Mouse and touch events are captured on the main thread. When a user drags a shred, the main thread sends messages to the worker (e.g., `dragStart`, `dragMove`, `dragEnd`) to update the state of the corresponding physics body.

## Design Decisions & Optimizations

Several key decisions were made to balance visual quality, interactivity, and performance.

### 1. Visual Style: Toon Shading

-   **Decision:** Instead of photorealistic rendering, a non-photorealistic (NPR) or "toon" style was chosen. This was implemented using `THREE.MeshToonMaterial` for the objects and `THREE.OutlineEffect` as a post-processing pass.
-   **Rationale:** Toon shading is aesthetically pleasing and generally less computationally expensive than physically-based rendering (PBR). It simplifies lighting calculations, leading to better performance, which is critical when a large portion of the CPU budget is already dedicated to the physics simulation.

### 2. Geometry & Collider Simplification

-   **Decision:** Coleslaw shreds are represented visually by a single shared `THREE.BoxGeometry` (used by the `InstancedMesh`) and physically by individual `RAPIER.ColliderDesc.cuboid` colliders.
-   **Rationale:** Cuboids are one of the most performant shapes for collision detection in a physics engine. Using complex, high-polygon meshes for the 1200 dynamic shreds would be computationally prohibitive. The simple box shape is a highly effective abstraction that runs smoothly in real-time.

-   **Decision:** The static bowl uses a `THREE.LatheGeometry` for a smooth visual appearance, with its physics collider being a `RAPIER.ColliderDesc.trimesh` derived directly from the visual mesh.
-   **Rationale:** Since the bowl does not move, we can afford a more complex and accurate collider. A trimesh (triangle mesh) collider provides a pixel-perfect collision surface for the shreds to interact with, ensuring they don't fall through the bowl.

### 3. High-Performance Instanced Rendering

-   **Decision:** All 1200 shreds are rendered using `THREE.InstancedMesh` instead of individual `THREE.Mesh` objects. Three separate `InstancedMesh` objects are used—one for each <= 500 shred color/material set.
-   **Rationale:** This is the single most important performance optimization in the simulation. Instead of telling the GPU to draw 1200 different objects every frame, we now send only 3 "draw calls". This dramatically reduces the communication overhead between the CPU and GPU, freeing up the main thread and leading to significantly higher and more stable frame rates. In the animation loop, we simply update the transformation matrix for each instance, which is a very fast operation.
-   **Verification:** For a hands-on demonstration and detailed analysis of this performance gain, please see [**OPTIMIZATION.md**](./OPTIMIZATION.md).

### 4. Shadow Optimization

-   **Decision:** Individual coleslaw shreds are set to `receiveShadow` but not `castShadow`.
-   **Rationale:** While instancing solves the CPU bottleneck of draw calls, rendering shadows for 1,200 dynamic objects is demanding on the GPU. Each shadow-casting object must be rendered into a shadow map from the light's perspective. By disabling this for the shreds, we reduce the associated GPU load. The visual impact is minimal, as the shreds still receive shadows from the bowl, preserving the sense of depth.

### 5. High-DPI Display Optimization

-   **Decision:** The renderer's `devicePixelRatio` is capped at a value of `1.5`.
-   **Rationale:** Modern high-resolution displays (like Apple's Retina displays) can have a device pixel ratio of 2.0 or higher. Without a cap, this forces the GPU to render four times as many pixels (2.0 * 2.0) as a standard display, which can prevent the simulation from reaching the screen's refresh rate even on powerful hardware. Capping the ratio at 1.5 provides a significant performance boost while maintaining excellent visual sharpness on these screens.

### 6. User Interaction: The "Scoop" Method for Reliable Grabbing

-   **Decision:** To solve the extreme difficulty of reliably selecting thin, rotating objects, the entire interaction model was re-architected. It abandons traditional 3D raycasting for selection in favor of a much more forgiving and intuitive multi-stage process.
    1.  **"Scoop" Selection via Screen-Space Proximity:** When a user clicks, the system no longer casts a 3D ray. Instead, it projects the 3D center of every shred onto the 2D screen and calculates the pixel distance to the cursor. The shred with the smallest distance is selected, provided it's within a generous pixel radius. This makes selection extremely reliable, as it is independent of the object's angle or thickness—if it looks like you clicked it, you did.
    2.  **Natural Drag Point Calculation:** Once a shred is selected, a precise 3D drag point on the shred's visible surface directly under the cursor is calculated. This ensures the drag feels natural and direct, with no visual "jumping" of the shred away from the cursor.
    3.  **Ghosting for Instant Feedback:** The original instanced shred is hidden and a temporary "ghost" mesh is created on the main thread. This ghost's position is updated in every `mousemove` event, providing immediate, one-to-one visual feedback.
    4.  **Prioritized, Just-in-Time Physics Application:** Communication with the physics worker is highly optimized. `mousemove` events send low-cost messages that only update a target position variable in the worker. Just before each physics step, the worker applies this single, most-recent position to the dragged body, ignoring any stale intermediate updates.
-   **Rationale:** This multi-stage architecture provides the best of all worlds. The **scoop selection** makes grabbing shreds effortless. The **natural drag point** makes the interaction feel precise and direct. The **ghosting** provides instant visual feedback. And the **just-in-time physics update** ensures the underlying simulation is always perfectly synchronized with the user's latest intent. This combination finally makes the interaction feel robust, reliable, and satisfying.

## Performance Characteristics

-   **CPU Load:** The most CPU-intensive task—the Rapier3D physics step (`world.step()`)—is offloaded to a Web Worker. This allows it to run on a separate CPU core, preventing it from blocking the main thread responsible for rendering and user interaction. The main thread's CPU load is now very low, consisting only of rendering commands and message passing, which leads to a significantly smoother and more responsive experience.
-   **GPU Load:** With optimizations in place, the GPU load is well-managed. The primary GPU tasks are rendering the geometry and processing shadows from the bowl. A key factor influencing GPU load is the **Device Pixel Ratio (DPR)**. On high-DPI screens, capping the DPR is crucial to prevent the GPU from becoming a bottleneck due to the sheer number of pixels it must render each frame.
-   **Scalability:** With physics on a separate thread, the simulation can scale to a larger number of shreds before the physics worker's CPU core becomes saturated. The main rendering thread remains responsive, as it is decoupled from the complexity of the physics simulation.