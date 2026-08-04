---
layout: ../../layouts/ArtPost.astro
---

Chrome, in profile, coming apart. The skull holds together well enough to read as a skull — brow, socket, cheekbone, a hard row of teeth — and then shreds sideways into horizontal bands of scanline noise, as if something in the signal path gave out halfway across the frame. A hot yellow-gold specular runs along the top of the cranium and cools through steel blue and lavender as it wraps down the jaw. Torn fragments of the same material drift off to the sides: a pink smear to the right, small woven-looking chips scattered top to bottom, all of it moving away from the silhouette.

<!-- TODO(adrian): your intent / story for this piece goes here -->

## Why realtime, and why Notch

Notch is a node-based motion graphics tool built for exactly this situation: the graphics have to exist as a live, running system rather than a finished file. You build a graph — geometry in, deformers and field modifiers and post effects chained after it — and it renders as you touch it, which means the feedback loop is the same length as a musical bar instead of the length of a render queue.

That matters for hardstyle specifically. The genre is built on a hard kick and an abrupt drop, and visuals that respond to it have to be able to snap. In Notch that means parameters are exposed to be driven — audio-reactive modifiers, envelopes — so a displacement amount or a glitch threshold can be tied to the track rather than keyframed against it.

## The look, mechanically

Most of what is visible here is achievable inside a single Notch graph:

- A dense specular material over a hard-edged mesh is what produces the chrome falloff, gold into blue, with no diffuse mid-tone to soften it.
- Notch's post-effect stack is where the scanline tearing, RGB separation, and block displacement come from — image-space distortion applied after the render, so the skull stays readable underneath the damage.
- Particle or field-driven scattering pulls fragments off the silhouette and carries them outward, which is what implies motion in a still frame.

One subject, one lighting idea, and a lot of controlled destruction stacked behind it.
