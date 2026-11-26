---
layout: ../../layouts/BlogPost.astro
---

A lot of engineering teams now pay for Claude Code. Far fewer have a shared way of working with it. I joined First Resonance in December 2025 as the company's first AI engineer, and one of my jobs was to build that shared way of working from nothing. This page covers how that Claude Code rollout went and what the same engineering enablement work looks like for your team.

First Resonance makes manufacturing execution and supply-chain software for hardware manufacturers. As the first AI hire, I had no existing practice to extend.

## The problem: licenses without a shared practice

Handing engineers a Claude Code license is the easy part. Without shared context, each engineer works with the tool their own way. They re-explain the codebase in every session, the agent writes plausible code that ignores house conventions, and whatever one person figures out stays with that person.

The fix is to give the tool the team's accumulated judgment once, in a form everyone uses, and then to make sure people actually use it.

## What I built

I built the company's internal Claude Code setup: skills, rules and automated tooling shared across the engineering org. The skills covered PR review, UI review, context management and improving CLAUDE.md files. The rules covered migrations and CI.

Because everyone worked from the same skills and rules, an improvement to one of them reached every engineer using it.

During the same period I built an MCP server over the company's manufacturing and supply-chain data, an LLM agent on top of it in Python with LangChain, and evals for it in Inspect AI. That work is covered in the [First Resonance case study](/work/first-resonance). This page is about the team side.

## How adoption happened

Building the infrastructure was the smaller half of the work. The larger half was enablement.

- **Onboarding:** I onboarded 12 engineers in groups, one team at a time. Each session started with how that team already worked, and then I suggested where AI tools could fit into that workflow. I estimate the engineering org at about 20 people, so that is roughly 60% of the team.
- **Documentation:** I wrote the internal docs and guides the team worked from.
- **Standards:** I set the standards that became how AI-assisted engineering was done at the company.

The signal I watched for was use. Over time, engineers were reaching for the skills and rules in their daily work.

## What changed

AI-assisted engineering went from an individual habit to a shared practice with written standards, documentation, and tooling behind it.

Pull-request volume also rose about tenfold after the rollout, going by GitHub's stats. I would not credit that to the rollout alone: the engineering org was shrinking over the same period. I report it as what happened, not as a measured productivity gain.

## What a Claude Code rollout looks like for your team

The engagement runs 2 to 3 weeks and covers the same ground, built for your codebase:

- **Skills, rules and hooks for your stack:** committed to your repos and written for your conventions, so Claude Code works the way your team already works.
- **Automated checks:** guardrails that keep AI-written code within your standards.
- **Onboarding sessions and written guides:** hands-on sessions with your engineers, plus the guides they keep working from after I leave.

The goal is the same as it was at First Resonance: a shared way of working with Claude Code that your engineers use day to day and can extend on their own.

## Talk to me

If your team has Claude Code licenses but no shared way of using them, [get in touch](/dev#contact) or email [hello@cacho.dev](mailto:hello@cacho.dev).
