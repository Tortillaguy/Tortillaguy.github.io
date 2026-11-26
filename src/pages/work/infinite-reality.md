---
layout: ../../layouts/BlogPost.astro
---

I joined Infinite Reality in March 2025 to work on iR Studio, the company's tool for building 3D experiences that run in the browser on its own iR Engine. The engine team was small, six engineers at most. The company had signed a [five-year partnership with Google Cloud](https://www.globenewswire.com/news-release/2024/09/05/2941302/0/en/Infinite-Reality-and-Google-Cloud-Ink-Five-Year-Strategic-Partnership-to-Drive-Innovation-Adoption-and-Scale-of-Immersive-Digital-Experiences.html) the year before, and in April 2025 it went live on Google Cloud Marketplace.

## Instancing

My main engine work was instancing. When a scene repeats the same object many times, instancing lets the GPU draw all the copies in one call instead of one call per copy. I built it into the engine with custom Three.js shaders and instanced geometry, and it rendered more than 10,000 3D objects at 60 FPS on mobile while cutting GPU load and speeding up scene loads. That carried virtual concerts and e-commerce spaces with 50+ concurrent users, plus multi-user text and video chat that held 60 FPS while people moved around the scene.

## UI 2.0

I also built the UI 2.0 look for iR Studio, a glass-morphic redesign of the editor's interface: translucent, blurred panels sitting over the 3D scene instead of solid ones blocking it. It came with a library of 40+ React components tested in Storybook, which cut development time about 50% across the full-stack, 3D and design teams.

## The pivot

In March 2025 Infinite Reality [bought Napster for $207 million](https://www.billboard.com/pro/napster-acquired-infinite-reality/), and in May it [renamed itself Napster Corporation](https://www.digitalcommerce360.com/2025/05/16/napster-relaunches-generative-ai-company-agentic/) and refocused on AI. As part of that pivot, the company dropped the iR Engine team.
