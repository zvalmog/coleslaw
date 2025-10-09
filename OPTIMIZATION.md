# Performance Optimization

This document details the performance comparison between two rendering methods employed by recent revisions of this project: Standard (individual `THREE.Mesh` objects) and Instanced (`THREE.InstancedMesh`).

## The Two Approaches Explained

To understand the performance difference, it's crucial to understand how each method communicates with the Graphics Processing Unit (GPU).

### 1. Standard Rendering (The "Slow" Way)

-   **How it works:** A unique `THREE.Mesh` object is created for each of the 1200 coleslaw shreds. In each frame, the application loops through all 1200 meshes and updates their individual `position` and `quaternion` properties based on the physics simulation.
-   **Why it's slow:** The primary bottleneck is the number of **draw calls**. A draw call is a command from the CPU to the GPU to render something. In this mode, the application sends ~1200 separate draw calls per frame. This CPU-to-GPU communication has significant overhead. The CPU spends a lot of time telling the GPU what to do instead of performing other tasks like physics calculations.

### 2. Instanced Rendering (The "Faster" Way)

-   **How it works:** Only **one** `THREE.InstancedMesh` object is created for each *type* of shred (e.g., one for green cabbage, one for white cabbage, one for carrots). This single object is a blueprint that tells the GPU: "You are going to draw this same shape 1200 times, but with slight variations." In each frame, instead of updating 1200 objects, we update a single large array (`instanceMatrix`) that contains the position, rotation, and scale data for all 1200 shreds.
-   **Why it's fast:** This method drastically reduces the number of draw calls. Instead of 1200, we now send only **3 draw calls** per frame (one for each `InstancedMesh`). The GPU is designed to be extremely efficient at this type of task—rendering the same geometry many times with different transformations. The CPU overhead is minimized, leading to a massive performance increase.

## Critical Performance Factors

Beyond instancing, two other optimizations were essential for achieving a stable, screen-bound refresh-rate.

### Shadow Optimization

Rendering dynamic shadows for 1,200 individual objects is excessively demanding on the GPU. To manage this, shadow casting has been disabled for the shreds. They still receive shadows from the bowl, which preserves the sense of depth, but they do not cast shadows on each other. This trade-off is critical for performance.

### High-DPI Display (Retina) Optimization

-   **The Problem:** High-resolution screens, like on a MacBook Pro, have a `devicePixelRatio` of 2.0. This means the browser attempts to render **four times** the number of pixels (2.0 width x 2.0 height) compared to a standard screen, which puts additional load on the GPU. This can cause the frame rate to drop, even when the CPU is not busy.
-   **The Solution:** The simulation now **caps the device pixel ratio at 1.5**. This still produces a very sharp image on high-DPI screens but significantly reduces the number of pixels the GPU has to render each frame. This optimization is often the key to unlocking a stable, screen refresh rate-bound animation on modern laptops and monitors.

## How to Measure and Compare Performance

### Use Browser Developer Tools

For a detailed analysis, we can use the browser's built-in performance profiler and contrast individual revisions.

1.  Open the browser's Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
2.  Go to the **"Performance"** tab.
3.  Click the "Record" button and interact with the simulation for a few seconds, then stop the recording.
4.  Analyze the results.
    1.  For the baseline implementation we observe a large portion of each frame's time spent in "Scripting" (yellow color in the flame chart). This is the JavaScript main thread being overworked by looping through 1200 objects. 
    2. In "Instanced" mode we observe the "Scripting" time per frame is decreased. The overall frame time duration is also reduced.