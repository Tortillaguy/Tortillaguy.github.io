---
layout: ../../layouts/ArtPost.astro
---

A broadsword hangs point-down in a stone alcove, its blade swallowed by flame. The fire runs cold — deep violet at the core, electric blue on the leading edges, magenta where the plume tears loose past the crossguard. Behind it, two green sconces flank a carved gothic relief — the only other light in the frame. Everything else is dark masonry: mortar lines, chipped block faces, a broken floor catching just enough bounce to read as rock rather than silhouette.

The composition leans. The sword runs diagonally from lower-right to upper-left and the flame follows, so the eye travels the blade and keeps going into the smoke.

<!-- TODO(adrian): your intent / story for this piece goes here -->

## Three tools, three jobs

- **EmberGen** produces the flame. A blade-mounted plume is a narrow, fast-moving source, which is a harder shape to keep coherent than a broad column of smoke.
- **Cinema4D** holds the solid world: sword, alcove, camera, timing. An imported volume sequence sits in that scene like any other object.
- **Octane** path-traces it, and that is where fire stops being a picture of fire and becomes a light. The violet wash on the mortar lines, the cool rim along the floor slabs, the falloff behind the plume — none of it is painted in. It falls out of the render because the volume emits.

A flame comped over a plate stays on top of the plate. A flame that lights the room is in the room.

## What the fire is doing to the metal

The interesting read isn't the plume, it's the blade under it, defined mostly by what the fire isn't covering — a hard silver edge where the flame thins near the tip, the crossguard lit violet from above and unlit below, the pommel spikes surviving as sparks and a suggestion of shape. Volumetric fire and thin hard-surface geometry fight each other in a render: the volume eats detail, the metal throws it back. The frame holds because density over the blade stays low enough to keep the silhouette legible while still selling a sword on fire rather than near one.

The green sconces are the counterweight — far enough from violet on the wheel that neither gives up saturation, and they establish the room as lit before the fire says anything.
