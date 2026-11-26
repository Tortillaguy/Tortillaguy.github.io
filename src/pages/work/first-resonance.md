---
layout: ../../layouts/BlogPost.astro
---

First Resonance, [founded by former SpaceX engineers](https://techcrunch.com/2020/09/23/founded-by-former-spacex-engineers-first-resonance-pitches-tools-to-make-things-the-spacex-way/), makes ION, a factory operating system used by hardware companies such as [Joby Aviation and Astranis](https://techcrunch.com/2021/12/09/first-resonance-funding-spacex-manufacturing-software/). I joined in December 2025 as the company's first AI engineer. There was no AI team yet, so the job was to build the first pieces and show where AI was useful in a factory.

## The MCP server

The first thing I built was an MCP server that gave a model structured access to ION: parts, inventory, work orders and supply-chain data. Our clients used it directly.

The main job was finding bottlenecks. The server could look across a factory for workstations with slack, meaning stations that had the capacity to take on work. It could also go through the steps of a process and point out the ones holding everything else up. A third use came from the same data: helping users improve their process documentation.

We started with a one-to-one migration: every GraphQL operation in ION became an MCP tool. That left the server with more than 30 narrow tools, so a big part of the work after that was consolidating them into fewer, broader ones.

## An agent that drives the UI

The second piece was an agent built in Python with LangChain, running on the same MCP server. It reads the UI state of the page the user has open and can update that state live. Instead of answering in a chat box, it changes what's on the screen.

The model ran as its own service, and I put a guardrails LLM in front of it to catch prompt injection and other attempts to misuse it before a request reached the agent.

Both pieces used the same server, so a tool added for one was available to the other.

## Claude Code

I also built the company's internal Claude Code setup: shared skills, rules and automated tooling for the engineering team. That rollout has [its own case study](/work/claude-code-rollout).

[firstresonance.io →](https://www.firstresonance.io/)
