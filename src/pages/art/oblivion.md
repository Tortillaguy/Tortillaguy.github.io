---
layout: ../../layouts/ArtPost.astro
---

A body falls head-first through the middle of the frame, one arm thrown up over the head, boots pointed at the sky. The figure is nearly a silhouette — black suit traced in thin orange and magenta rim light — and the helmet is the brightest thing in the image, a small blue-white burst going off right where the face would be. Everything around it is banded: magenta and violet sky, a cream and yellow slab through the middle, deep speckled blue below, then hot pink at the bottom edge. Two black bars cut across the whole thing like dropped scanlines, and the mountain ridgelines ripple as if the signal carrying them is unstable.

This is where the character came from. The DJ who commissioned this work arrived inspired by Ghost Rider, and what I pulled out of that was a falling body with a flare where its face should be, a pairing the rest of the job kept coming back to. Building it in a realtime tool was the point rather than an accident of preference, since it let me put a dozen versions in front of him in the time a render queue would have spent on one.

## The figure has to be anatomy first

Daz3D is where the human comes from — a rigged, poseable figure with real joint limits, which is what makes a freefall pose read as freefall instead of a mannequin dropped on its head. The arms, the arch of the back and the twist in the hips are the whole gesture here. Because the body ends up rendered almost entirely as a dark shape with light on its edges, there's no facial expression and no surface detail left to lean on; the skeleton underneath is doing all of the acting.

## Everything after the figure is signal damage

The treatment is a stack of image-space operations, and Notch is where they live: halftone and dither passes turning gradients into visible dot grids, chromatic aberration splitting the letterforms into cyan and pink fringes, displacement shearing the horizon bands sideways, bloom blowing out the helmet flare. Each of those is a node reading the frame that came before it, so the order they sit in changes the result — dithering before a displacement gets its dots dragged along with the pixels, dithering after leaves the grid clean and square on top of the damage. In this frame the ridgelines wobble while the dot grid across the sky stays square and aligned.

The colour bands are the other half of the read. Flat horizontal slabs of magenta, cream and blue give the falling figure something rigid to fall past, so the body's diagonal registers as motion against a grid that refuses to move with it.
