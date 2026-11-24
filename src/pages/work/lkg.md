---
layout: ../../layouts/BlogPost.astro
---

Looking Glass Factory makes holographic displays. I joined in May 2023 and built blocks.glass, the company's site for sharing holograms, with a team of two and a half engineers and a project manager who split time with other projects.

## blocks.glass

Blocks is where people upload holograms and share them the way they'd share a GIF: a hologram gets a page, plays in the browser in 3D, and plays properly on a Looking Glass display. I built the website, React and Next.js on the front, Postgres underneath.

More than 100,000 assets went through it. At that size the database was the slow part. Browsing content meant several seconds of waiting, so I rewrote the slow Postgres queries, added indexes and reworked parts of the schema. Page loads went from 5 to 6 seconds down to under 2, about 70% faster.

I also built the payments side, connecting Stripe, Webflow and Shopify for subscriptions and sales.

## Text to hologram

Blocks also got a generation pipeline: a remote ComfyUI server behind a FastAPI backend, so the site could ask for a hologram from a text prompt and get back an asset ready to view.

## Liteforms at Marriott

Liteforms were Looking Glass's conversational holograms, characters on a display that you can talk to. I built the chatbot service behind them in Python with LangChain and GPT-4, using retrieval so answers came from a brand's own material.

Accenture deployed it as an activation at Marriott locations. That's a different bar from a demo. A demo can get something wrong and nobody minds; a hologram talking to hotel guests can't.

[blocks.glass →](https://blocks.glass/)
