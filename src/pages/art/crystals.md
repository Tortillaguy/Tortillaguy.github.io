---
layout: ../../layouts/ArtPost.astro
---

A cluster of long, faceted spires erupts from the left edge of the frame and fans out like a shattered bouquet. The shards read pale blue-white at the tips and bruise into deep violet where they overlap, and each one carries a hard specular edge down its length that looks more like a drawn line of light than a surface. A bloom of magenta smoke sits behind and beneath them, soft and slow. One thin shard has broken free and floats mid-frame, tumbling.

<!-- TODO(adrian): your intent / story for this piece goes here -->

## What the frame is doing

The composition is almost entirely diagonal — nothing in the crystal mass stands vertical, and the whole cluster leans right, which is what gives a still image the feel of being caught mid-motion. Form arrives through refraction and through the specular runs along the facets rather than from any surrounding scenery. The smoke is the counterweight: the one soft, volumetric thing in a frame of hard edges, its warm magenta sitting opposite the cool blues so neither collapses into the other.

## The pipeline behind this look

Cinema4D is the natural home for building and animating a cluster like this — laying out the spires, growing them, driving the fan-out over time. Houdini is where the harder simulation work lives: fracturing geometry, scattering shards, and generating volumetric smoke as VDB fields that can be handed downstream. Octane carries the material side of it: refraction with real dispersion, absorption tinting the interior of thick glass so overlapping shards darken toward violet, and volumetric rendering that lets the smoke receive light instead of sitting behind the subject as a flat plate.

## How the light behaves

Faceted glass multiplies whatever it is given — a single source becomes dozens of highlights once there are that many angled surfaces to bounce off, which is the usual way a render like this turns to speckle. In this frame the highlights stay countable. Each bright run down a facet traces back to an origin you can point at, the falloff across the cluster is gradual rather than blown out, and the magenta volume glows within its own limits instead of washing the whole frame. The result is a mass that still reads as glass: transparent where it is thin, saturated where it is thick, and edged wherever two facets meet.
