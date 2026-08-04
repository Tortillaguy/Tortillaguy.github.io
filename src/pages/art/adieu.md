---
layout: ../../layouts/ArtPost.astro
---

A diamond nested inside a diamond, and inside that, a flower. The frame is a set of concentric bevels in warm bone and pale grey, each edge catching light like machined stone, and it steps inward until it arrives at a dark ground where the bloom sits. The petals are ceramic-smooth and slightly translucent — teal, cream, blush, one hot orange wedge cutting across the lower left — arranged in a fourfold symmetry that folds back on itself. At the very center is a small, saturated blue flower, the one place in the frame where the color goes fully electric.

Outside the diamond, the corners are a different painting entirely: soft lozenges of red, cobalt, green and gold, some of them cross-hatched with a fabric-like weave, all of it going nearly black at the edges. The vignette does the work of a stage — everything falls off into darkness so the center reads.

<!-- TODO(adrian): your intent / story for this piece goes here -->

## Holding a symmetry still while it moves

Fourfold symmetry is unforgiving. The eye reads all four quadrants at once, so any drift in one arm registers immediately as a mistake rather than as motion. That is the specific difficulty of an image like this one: the bevels have to stay machined and the mirror has to stay honest even as the interior breathes.

A fourfold symmetry is a brutal thing to ask a generative pipeline for, because the eye catches a broken mirror instantly. In diffusion generally, frame-to-frame stability comes from pinning the parts of the pipeline that define structure and varying only the parts that define change. Symmetry that survives motion comes out of the graph's wiring, not out of luck.

## Where the edit lives

Generated frames arrive as sequences, not as video. Resolve is the last room they pass through, and the grade matters more here than the edit does. Diffusion output tends to sit in a compressed contrast range, and this image depends on real black in the corners for the vignette to function at all. In this frame the corners hold real black while the centre stays hot, and that gap is what makes four coloured corners read as a frame rather than as four separate shapes.
