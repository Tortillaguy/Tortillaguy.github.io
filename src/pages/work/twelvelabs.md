---
layout: ../../layouts/BlogPost.astro
---

I joined TwelveLabs in April 2026, a couple of months before **Rodeo** went public. TwelveLabs builds video foundation models — Marengo for multimodal embedding and retrieval, Pegasus for reasoning across long-form video — and that capability had lived behind an API, consumed by enterprises with engineering teams. Rodeo was the company's first application-layer product: the same understanding, handed directly to the people who cut footage for a living.

The title on my offer letter said Senior Frontend Engineer. Within weeks I was writing agent tools, GraphQL integrations, and server-side export code, and building the eval harnesses that told us whether any of it was working. That drift wasn't scope creep. It's what an agentic product does to the shape of a team — the boundary between "the interface" and "the system" stops being a real boundary, because the interface is where the agent's reasoning becomes visible and the system is where it becomes true.

## The Surface

Every editor I've ever used runs on the same contract: you make a move, the timeline changes, you can see exactly what happened. Direct manipulation, no ambiguity. An agentic editor breaks that contract on purpose. You describe an intent, something goes away for a while, and it comes back having made decisions on your behalf.

I built Rodeo's agentic editor UI in **React** and **Next.js** with **Tailwind**, developing the component layer in **Storybook**. The stack was familiar territory. The design problem was not.

- **Agent output isn't prose** — a chatbot returns a paragraph you can skim and dismiss for free. An editing agent returns a change to your timeline. The interface has to make that change legible, reversible, and arguable, or the user quietly stops trusting it and goes back to doing it by hand.
- **Latency is narrative** — video work is slow by nature. Indexing, retrieval, and render all take real time, and an agent that goes quiet reads as an agent that's broken. What the UI says during the wait is part of the product, not a spinner you bolt on at the end.
- **The operator is still the editor** — the fastest way to ruin a creative tool is to make the person using it feel like an audience member. Every automated decision needed a visible seam where a human could reach in and take the wheel back.
- **Storybook as the shared language** — components built in isolation, in every state the agent could actually put them in, including the unglamorous ones: partial results, failed tool calls, empty retrievals, half-formed cuts.

Years of VJing and cutting my own footage were more useful here than any framework knowledge. I know precisely how it feels when a tool takes a decision away from you at the wrong moment, and how fast that feeling turns into abandonment.

## The Other Half

Then I went underneath it.

An agent is only as capable as the tools you hand it. The model layer could already reason about video; what it couldn't do on its own was act. So I built the backend tool layer — the functions the agent calls to actually reach footage and do something to it — along with the **GraphQL** integrations connecting those tools to the rest of the platform, and the server-side export path that renders a finished cut through **ffmpeg**.

### What the tool layer taught me

- **A tool schema is an API written for a very literal reader** — the model doesn't have a colleague to ask. Argument names, boundaries, and error strings are the entire specification, and every ambiguity you leave in becomes a class of failure later.
- **ffmpeg is unforgiving, and that's the point** — given the same inputs it gives you the same frames. Pushing all the nondeterminism upstream into the agent's decisions, and keeping the render boringly deterministic, is what makes the system debuggable at all.
- **Failure has to be legible twice** — once to the model, so it has a shot at recovering, and once to the human, so they understand what the machine just did to their edit.

Working both ends of the same feature turned out to be the real advantage. When an export came back wrong, I didn't have to file a ticket across a team boundary to learn whether the agent had chosen bad clips or the renderer had mishandled good ones. I could follow the trace from the click to the encoded file.

## Evals Are The Hard Part

The most technically interesting work I did there had the least glamour attached to it.

Conventional software has tests: you assert an output and the assertion is either true or it isn't. Agentic software has evals, and evals are hard because the failures that matter don't arrive as exceptions. They arrive as plausible answers that are slightly, expensively wrong. The agent picks a competent clip instead of the right clip. It calls the correct tool with subtly wrong arguments and gets a result that looks fine. It completes the task you specified and misses the task you meant.

I built evaluation systems for both agentic surfaces — the editor and the Rodeo chatbot. The questions they had to answer:

- **There is no single correct output** — "cut a tight thirty-second tease from this footage" has a wide space of good answers and an unbounded space of bad ones. Grading means rubrics, reference sets, and judged criteria, not equality checks.
- **The trajectory matters as much as the artifact** — an agent that stumbles into a decent cut through a pile of wasted tool calls is a materially worse system than one that reasons straight to it, even when the two outputs are indistinguishable. Score only the artifact and you won't see the regression coming.
- **Everything underneath you moves** — prompts, models, and tools all change, and any of them can silently degrade a behavior nobody was watching. Without a harness, "it feels better this week" is your only signal, and it's worth roughly nothing.
- **Evaluation has a real cost** — running video agents over a reference suite burns time and compute, so the suite has to be designed, not accumulated.

The part I didn't expect: writing evals forces a team to say out loud what "good" actually means. You cannot score an output until someone commits to a definition, and the moment you try, you discover how much of the product was running on shared vibes. Half the value isn't the number at the end of the run — it's the argument you have to have to agree on the rubric.

## Hired Frontend, Shipped Full-Stack

I use **Claude Code** every day, and building an agentic product while living inside an agentic tool gave me a kind of double vision. Every friction I hit as a user of an agent — losing context mid-task, re-explaining intent I'd already stated, wanting to see the plan before it executed, wanting to interrupt without throwing away the work — went straight into the notebook for Rodeo. It's a rare position: the user research is your own workday.

That's also the honest argument for owning a whole vertical rather than a layer of one. An agentic product is a loop — surface, tools, model, evaluation, back to the surface — and the expensive bugs live in the handoffs between those stages, not inside them. Teams split cleanly along those lines spend their time reconstructing what the other half meant.

## What Stays

Rodeo was the first product I've worked on where the software has taste, or at least has to behave as though it does. That reframes the engineering problem. You aren't building a system that computes a correct answer; you're building one that makes defensible creative choices, exposes them clearly enough to be overruled, and gets measurably better instead of anecdotally better.

The thread running through my career is the seam between engineering and creative work — holograms, AR stages, live visuals, real-time 3D. Agentic video editing sits directly on that seam: a hard systems and evaluation problem wearing the clothes of a creative tool. You can't do it well from only one of those directions.

[twelvelabs.io →](https://www.twelvelabs.io/)
