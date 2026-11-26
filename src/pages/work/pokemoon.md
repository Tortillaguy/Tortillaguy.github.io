---
layout: ../../layouts/BlogPost.astro
---

PokéMoon was a 2021 NFT trading-card project on Binance Smart Chain. Cards were sold in packs, and every card was a 3D model you could pick up and turn over, not a flat image. I was the lead developer on a team of three engineers.

## What I built

Everything except the Solidity contracts. That meant the site where people bought packs and browsed the collection, the wallet and purchase flow, the exchange front end, and the 3D card viewer.

## The card viewer

The viewer above is the one from the original site, ported here. It's React Three Fiber: each card is a GLB model with its own baked animations, lit by three directional lights over a star field, with bloom and a brightness/contrast pass on top. Drag a card to turn it over.

Artists made the cards in Blender and exported them as GLB files, and the viewer loaded each one on demand as you paged through the collection.
