---
layout: ../../layouts/ArtPost.astro
---

The white goes first. Thin, hot lines sit along every petal edge, and they land before you work out you're looking at a lotus — glassy rather than botanical, petals in tight rings spiralling to a violet core wound as densely as a rose. Follow the colour down one petal and it travels: cyan at the tip, cobalt through the middle, magenta where it meets the centre. The same walk happens on the next petal, and the next, so the bloom reads as one gradient bent into a wheel. Look past it and the shapes return — larger, softer, mirrored into a diamond lattice carrying that run into the corners. The frame is all flower and its own blurred echo, which is why the eye keeps going back to those white edges to hold onto.

I came to ComfyUI wanting loops, and wanting shapes that don't survive being modelled. A lotus that is also glass, wound tighter than a real bloom would allow, sitting in front of a blurred lattice of itself. Working inside a graph means I can blend one image toward another quickly instead of constructing that blend as a comp afterward, and attention masks let me push on the composition while the image is still forming rather than fixing it once it has landed. The target is never really a subject. It is a feeling, and the feeling comes out of the music I am listening to, which is mostly DJs.

## How the frames get made

ComfyUI is a node-graph front end for diffusion models, and the graph is the reason work like this can move. Instead of a single prompt box, you get an explicit pipeline — model loader, conditioning, sampler, latent, decode — where any node can be swapped or fed a changing value. For generative video, that changing value is time: the same graph is run across a sequence, with a seed, a latent, or a prompt weight interpolated frame to frame so consecutive images stay related rather than reinventing themselves.

That relationship is the entire craft. Diffusion samples independently by default, so temporal coherence has to be engineered — sampling from a shared latent, keeping denoise strength low enough that structure persists, letting one strong symmetry hold the composition while colour and edge detail are allowed to drift. Radial symmetry is forgiving here in a way a human face never is: a petal that shifts between frames reads as breathing, not as an error.

## Where it becomes a piece

DaVinci Resolve is where a generated image sequence stops being frames and becomes a piece. Sequences come in as clips, and the edit page handles pacing — how long a bloom holds, where it loops, whether the cut lands on a beat. The colour page is what unifies a sequence that was generated rather than shot: matching black levels across clips, holding saturated channels short of clipping, keeping neighbouring hues from muddying into grey. Delivery renders to whatever the destination needs, which for a square frame like this one means an Instagram-shaped export.
