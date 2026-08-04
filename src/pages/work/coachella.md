---
layout: ../../layouts/BlogPost.astro
---

Every other deadline I have worked to has been negotiable. This one was not. The gates open, the crowd walks in, and whatever you built either works in their hands or it does not exist. There is no hotfix window, no "we'll ship it Tuesday." That constraint changed how I think about software more than any other year of my career.

## Six apps, six people, live events

At PortalsXR I led a cross-functional team of six, and together we shipped six mobile AR applications to the app store for high-traffic live events. The team spanned 3D artists, mobile engineers, and backend work, which meant a lot of my job was translation: making sure an artist's intent survived contact with a mobile GPU budget, and that the engineers understood which parts of the visual were load-bearing and which could be cut.

Six apps with six people only works if you are ruthless about what carries over. We built the AR interactivity and core 3D graphics as reusable pieces rather than starting each event from scratch, working across Unity and C# for the AR and rendering layer, React Native for app shells, and Java and Swift where we needed to reach platform APIs directly.

## Localized and time-coded

The interesting technical problem was not "put a 3D object on a camera feed." It was that these experiences were **localized and time-coded**: what you saw depended on where you were standing on the festival grounds, and on when you were standing there.

Both halves are harder than they sound outdoors. Location means you cannot lean on a clean tracking environment — you are dealing with GPS accuracy that degrades in crowds, changing light from midday sun to stage wash after dark, and no control over what the camera sees behind the user. Time-coding means the experience has to agree with a schedule that other people own, so a moment triggers in sync with something happening on a stage rather than whenever the user happens to open the app.

Together they mean the app has to know where it is and what time it is with enough confidence to commit to showing something, and to fail gracefully rather than wrongly when it is not sure. A misplaced AR moment is worse than no AR moment, because it reads as broken rather than absent.

## 100% uptime, and what that actually took

We held 100% uptime for those experiences across the events we supported, including Coachella and Music Midtown. I want to be precise about what that number means, because it is not a story about elegant code.

It means I was on site. It means the work did not end at submission to the app store, it ended when the last set finished. On-site production support is a different discipline from development: you are watching real people hold the thing, on their own phones, on saturated networks, in conditions no simulator reproduces. You learn very quickly which of your assumptions were load-bearing.

The lessons that stuck:

- **Degrade, never fail.** Every path needed a defined behavior for the case where tracking is poor, the network is gone, or the schedule feed is stale. Silence is an acceptable output. A wrong answer is not.
- **Assume the worst device.** Festival crowds do not carry flagship phones with full batteries. Performance targets get set by the oldest device you are willing to support, not the one on your desk.
- **The network is not there.** Tens of thousands of people in one field means cellular capacity is effectively gone. Anything that must work has to already be on the device.
- **Rehearse on the actual site.** Things that behaved perfectly in the office behaved differently on the grounds, under real light, at real distances.

## Why this year still shapes my work

I have spent most of my career since then on platforms rather than events, and the instinct I brought out of PortalsXR is the one I still lean on hardest: build the failure path first, then the feature.

That habit came from a place where failure is public and immediate. When a bug means a confused person lowering their phone at a concert, you stop treating error handling as cleanup work and start treating it as the design. It is also why I still like being in the room when something goes live, whether that room is a polo field or a launch date.
