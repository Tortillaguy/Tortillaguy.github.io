---
layout: ../../layouts/ArtPost.astro
---

An open hand, palm up, floating in pure black. Nothing else in frame — no floor, no horizon, no second light source to explain the scene. Out of the cupped part of the palm a plume of smoke climbs and spreads, magenta where it's densest against the skin, warming into coral through the middle of the cloud, then cooling to a pale teal along its outer edges as it thins out and loses heat. The hand itself is lit almost entirely by that plume: violet rim light along the forearm, a hot pink bounce inside the fingers, the knuckles and fingertips fading down into the black rather than ending on a hard edge.

<!-- TODO(adrian): your intent / story for this piece goes here -->

## The plume

Smoke like this is a volumetric simulation, and EmberGen is the realtime tool for it — you shape a fire or smoke source, watch it resolve at interactive speed instead of waiting on a bake, and export the result as VDB sequences for a renderer to pick up. Working in realtime is the whole point with pyro: plume shape lives or dies on tiny differences in dissipation and turbulence, and the only practical way to find the right one is to be able to nudge it and see it immediately.

The billowing here has that cauliflower structure you only get from actually simulating it — self-similar lobes, a slightly grainy fringe where density falls below the point the renderer can hold detail.

## The render

Blender holds the scene: the hand, the camera, and the imported volume. Octane is the GPU path-tracer that resolves it, and path-tracing is what makes this composition work at all. Everything visible on the hand is light that scattered through the smoke first, so the volume has to be a real emitter and a real participating medium at the same time. The falloff across the forearm, the way the pink stays a soft gradient instead of banding, the teal edges reading as thin rather than merely darker — that's multiple scattering being solved, not faked with a gradient.

On black, that accuracy is unforgiving. There's no set dressing to distract from a plume that doesn't hold up.
