---
layout: ../../layouts/BlogPost.astro
---

"AI Context Engineer" was not a title I had seen before, and that turned out to be the point. First Resonance brought me on in December 2025 as the company's **first AI engineer**. There was no team to join, no existing practice to extend, no internal conventions to inherit — just a manufacturing software company with a great deal of hard-won operational knowledge locked inside its systems, and an open question about what an AI-native engineering org should actually look like.

The company builds **ION**, a factory operating system — a modern take on the manufacturing execution system (MES) — used by hardware companies in aerospace, space, defense, medical devices, and robotics. It was founded by SpaceX alumni, and it shows in the priorities: as-built traceability, real supply-chain constraints, compliance in industries where a mistake is not a bug report. When a rocket component moves through a factory, every step, every part, and every deviation has to be accounted for. The data is messy, high-stakes, and profoundly real-world.

I came to it from holograms, WebGL, and 3D asset pipelines. Supply chains were new territory. That contrast is a large part of why I took the job.

## What a First AI Hire Actually Does

Being the first is two jobs. One is shipping — building things that work. The other is establishing how the company works with AI at all: what gets automated, what stays human, where a model is allowed near production data, and what "good" even means when nobody at the company has done it before.

The work sorted itself into three layers, and the relationship between them is the part I'm proudest of:

- **Context plumbing** — an MCP server giving a model real, structured access to manufacturing and supply-chain operations
- **Internal enablement** — Claude Code skills, rules, and automated tooling so the whole engineering org compounds on AI, not just me
- **The outward surface** — an LLM agent on the company website, riding that same context layer

Each is useful alone. Together they're a system.

## Context Is the Hard Part

### The bottleneck question

By late 2025 the failure mode of enterprise AI was thoroughly established: a chat box bolted onto a product, fluent and confident and unable to tell you a single thing you couldn't already read off the screen. The model was never the bottleneck. Access was.

So the first thing I built was an **MCP server**. The Model Context Protocol — the open standard Anthropic introduced in late 2024 — is deliberately unglamorous. It's a common interface for exposing tools and data to a model so that every integration doesn't have to be bespoke. What it buys you is leverage: expose your operations properly once, and any MCP-speaking client can use them.

Mine exposed manufacturing and supply-chain operations, with a concrete goal: help identify **production bottlenecks**. Where is work piling up? Which part shortage is actually blocking the line, as opposed to merely being late? Those questions are answerable from operational data, but only if the model can traverse that data, join across it, and follow a thread from a stalled build step back to the purchase order that caused it.

### Designing the surface

Most of the real work here was interface design, not prompting. Which operations belong in the tool surface, and which are noise. How to shape what comes back so a model can reason over it without drowning in rows. Where to draw boundaries so the thing stays legible and safe rather than becoming an unbounded query engine pointed at a factory floor.

A good MCP server looks a lot like good API design. The difference is that the consumer is a model rather than an engineer, and models are more easily distracted.

## Tooling for Everyone Else

The second layer was internal, and it's the one companies most often skip.

An AI hire who only ships AI features is a bottleneck wearing a nicer hat. If the knowledge stays in one person's head, the organization gets exactly one engineer's worth of leverage out of it. So I built internal **Claude Code** infrastructure — skills, rules, and automated tooling — aimed at company-wide AI-assisted engineering.

- **Skills** — packaged, repeatable procedures for the work this codebase actually demanded, so a task gets done the house way by default
- **Rules** — the standing conventions and constraints, encoded once instead of re-explained in every prompt
- **Automated tooling** — the glue that makes the correct path the easy path

The underlying insight is boring and completely true: agentic coding tools are only as good as the context you hand them. Handed nothing, they produce plausible code that quietly ignores your conventions. Handed the accumulated judgment of a team, they produce work that looks like it belongs in the repo.

Naming Claude Code here is deliberate. Standardizing on one agentic toolchain was itself a decision, and it's what made those conventions compound — every skill and rule applied to everyone using it, instead of fragmenting across whatever tool each engineer happened to prefer. Institutional memory is worth more when it has an interface.

## One Context Layer, Two Surfaces

The third piece faced outward: an LLM agent for the company website, built in **Python with LangChain**, connected to that same custom MCP server.

The reuse is the elegant part. The website agent and the internal tooling were never two AI projects — they were two clients of one context layer. Improving the server improved both. A capability added for internal analysis was immediately available to the public-facing surface without a second integration, a second set of assumptions, or a second definition of what an "operation" is.

The common alternative is what you see everywhere: a marketing chatbot on one stack, an internal tool on another, and meaningful drift between them inside of a quarter. Building the context layer first — as a protocol rather than as a feature of one application — is what prevents that. It forces you to define your context surface once, deliberately, somewhere both product and internal tooling can see it.

## The Unglamorous Domain

Most of my portfolio is visual: holographic content platforms, AR stages, real-time 3D. Manufacturing operations are the opposite of visual. Nobody is putting a bill of materials on a reel.

It was also some of the most clarifying work I've done. In creative technology, "good" is partly a matter of taste, and a convincing demo carries you a long way. In manufacturing, a bottleneck is a bottleneck. Schedules slip, parts fail to arrive, hardware doesn't ship. There's a bracing honesty in a domain that refuses to be impressed by a nice demo.

It sharpened how I think about agents generally, too. The interesting questions in agentic systems are almost never about model choice. They're about what the model can see, what it's permitted to do, and how you would know if it were wrong. Those are engineering questions, and they look much the same whether the domain underneath is a factory floor or a video timeline.

## What I Took From It

- **Being first is a design job** — the artifact isn't just the code, it's the practice everyone after you inherits
- **Context beats cleverness** — the hard part of a useful agent is the plumbing, not the prompt
- **Build the layer, not the feature** — one well-designed context surface serving several clients ages far better than several one-off integrations
- **Range compounds** — what I learned about pipelines and messy real-world data at Looking Glass and Vertebrae transferred directly, and manufacturing gave it a rigor creative work rarely demands

Given the choice, I'll take the unfamiliar problem over the comfortable one. It's the same instinct that got me into holograms and live visuals in the first place, just pointed somewhere with fewer pixels and higher consequences.

[firstresonance.io →](https://www.firstresonance.io/)
