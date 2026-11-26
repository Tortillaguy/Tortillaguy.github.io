---
layout: ../../layouts/BlogPost.astro
---

I joined TwelveLabs in April 2026, a couple of months before Rodeo went public. TwelveLabs builds video foundation models, and Rodeo was its first application-layer product: a video editor where an agent makes edits for you.

The team was four full-stack engineers, a product lead and a project manager. I was hired as a frontend engineer and ended up as the de facto tech lead for Rodeo's architecture. I wrote the technical design docs for the editor, the agent-tool interface and the export pipeline, plus the Figma specs and coding standards the other engineers built from. I also designed the integration interface for the Jockey team's features, and mentored an intern through the editor UI.

## The editor

I built the editor UI from scratch in React, Next.js and Tailwind, working from Figma designs. That came to more than 30 components: the playhead, clip segments, labels, clip panels, and the rest of the tools you'd expect if you've used CapCut. I built them in Storybook first, in every state the agent could put them in, including partial results and failed edits.

An agentic editor has a problem a normal editor doesn't. In CapCut you make the change, so you know what happened. In Rodeo the agent makes it, so the UI has to show the change clearly enough that you can check it and undo it.

## The agent's tools

The edits themselves live in an OTIO timeline (OpenTimelineIO, the open interchange format for editorial timelines). I built the tools the agent calls to change it: cut, trim, move and split. Cut operations applied near instantly.

Those tools connect to the rest of the platform through GraphQL. When a user exports, the timeline is rendered server-side with ffmpeg, which I also built.

## Evals

The evals tested editing operations directly. Ask the agent to split a clip in half, then check the resulting OTIO timeline against what the edit should have produced. Because the timeline is structured data, an edit is either right or wrong. For output that isn't, like the chatbot's answers, the evals graded against rubrics and reference sets. Everything ran in Inspect AI, with results tracked in Langfuse.

Over the project, the agent's pass rate on the editing evals went from about 60% to about 90%.

## Launch

TwelveLabs unveiled Rodeo at [NAB Show in April 2026](https://www.prweb.com/releases/twelvelabs-unveils-the-next-era-of-video-intelligence-at-nab-show-2026-302746715.html) and opened it to creators that June. More than 200 people signed up. A month later the company raised a [$100 million Series B](https://siliconangle.com/2026/07/01/twelvelabs-raises-100m-bring-superintelligence-ai-video-models/) co-led by NEA and NAVER Ventures.

[twelvelabs.io →](https://www.twelvelabs.io/)
