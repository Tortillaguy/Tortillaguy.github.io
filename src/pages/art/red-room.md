---
layout: ../../layouts/ArtPost.astro
---

A bloom shot close enough that the frame can't hold it. Petals spiral out of a hot coral-pink center and open into long blades that run magenta, then violet, then cool to teal and acid green right where they leave the frame. Every leaf is veined like stained glass, backlit so the tissue between the veins glows while the veins themselves stay dark. Water beads sit scattered across the surfaces, each one carrying a small hard highlight. The plant is cropped past its own edges, so there's no way to tell how big it is or where it sits.

This one is blending more than building. The leaf, the stained glass and the wet plant surface never existed as separate elements waiting to be combined, they arrive already fused, and that fusing is the part of generative work I actually came for. Masking lets a centre hold while everything past it drifts. Cropping past the plant's own edges takes scale out of the picture, so what is left is heat rather than botany.

## Holding one flower together across a sequence

The hard part with a subject like this is not producing one good frame. It is making the next frame belong to the same flower. Diffusion carries no memory from one image to the next, so whatever should persist has to be pinned deliberately rather than assumed, and a graph is what makes pinning it possible at all.

The hard part in generative video isn't getting one good image, it's temporal coherence — keeping a form like this stable so the petals read as the same object moving rather than a new object every frame. Veined, translucent structure is close to the worst case for that. A diffusion model will happily reroute where a vein runs from one frame to the next, and once the veins start wandering the leaf stops reading as a leaf and becomes an animated texture. The control side of the graph is what pushes back: latent continuity, motion modules, frame-to-frame conditioning that carries structure forward while still letting colour and light move.

## Where Resolve comes in

Generative output arrives raw, as image sequences rather than footage, and it has to be cut for rhythm before it can be graded at all. Grading then carries more weight here than it would with camera footage, because diffusion output tends to fight itself on saturation and black level — channels clip in odd places and the shadows sit muddy rather than black. Resolve's node-based colour page is built for exactly that kind of repair work, holding saturated channels short of clipping and separating shadow from mud, before delivering at a size and codec a phone feed will actually respect.
