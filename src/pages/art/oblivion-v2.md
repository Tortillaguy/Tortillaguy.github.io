---
layout: ../../layouts/ArtPost.astro
---

Two human figures hang upside down at the left and right edges of the frame, mirrored across the centre. They read as edge-lit outlines rather than shaded bodies — thin neon contours in acid green, red and orange tracing the ribs, the arms, the folds of the legs. Where each head should be there's a cold blue-white bloom instead, the brightest thing in the picture and the only light in it that isn't warm.

Behind them sits a landscape in magenta and purple: soft ridges low in the frame, a darker range above, small white specks scattered through it like stars. A band of stacked colour cuts horizontally across the middle — teal, green, gold, orange — wavering along its edges like a signal that won't quite lock. Two hard black bars slice the whole composition, one across the shoulders, one lower through the hands, flattening the depth and reminding you you're looking at a scan rather than through a window.

Same client, same character, pushed further from its source. Across these frames the one thing that survives the Ghost Rider starting point is the head: always the brightest object in the picture, never a face. Here it is gone completely, a cold bloom standing where a face should be, on two bodies mirrored and hung upside down. That is about as far from a hero pose as I could get while still having anatomy left to light.

## Contours, not surfaces

Daz3D supplies the body. It ships rigged, posed human figures with usable topology, which matters more than usual here, because the entire read depends on the silhouette and the interior creases of the mesh. A coherent figure gives clean contour lines; a broken one gives noise that looks like a mistake instead of a style.

The neon outline belongs to the edge-detect-and-glow family of treatments. Rather than lighting a surface, that kind of chain looks for places where depth or surface direction changes sharply across the render, draws a bright line there, and blooms it outward. Push the result through 2D operators further along the same graph in Notch and you get the rest of what's visible: the mirror, the colour banding through the middle, the hard horizontal bars.

## Nothing is baked

In a realtime chain, no stage is ever a finished frame — every value in it stays a parameter, which is what lets the same patch be pushed by audio, by MIDI, or by hand while it's on a screen. The cost is that the whole stack has to resolve fast enough to be performed, which pulls the vocabulary toward operations that are cheap to compute: edges, glows, mirrors, bars, colour ramps. The aesthetic and the constraint are the same thing.
