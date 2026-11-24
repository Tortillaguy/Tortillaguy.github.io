---
layout: ../../layouts/BlogPost.astro
---

Parcel was a marketplace for virtual land. Every listing was an NFT pointing to a plot in one of six worlds, including The Sandbox and Decentraland, and Parcel was where people went to buy, sell and browse them. It raised a [$4 million seed round led by Framework Ventures](https://www.businesswire.com/news/home/20220607005247/en/Virtual-Real-Estate-Marketplace-Parcel-Raises-4M-in-Round-Led-by-Framework-Ventures) in June 2022. I joined in March 2022, on a team of fewer than five, while the site was serving more than 1,000 daily active users.

## The design system

I built Parcel's design system: the shared components, built from the team's Figma designs, that the marketplace was assembled from.

## Wallets and transactions

The other half of my work was the web3 layer. I built the wallet connections and the transaction UX, everything between a user clicking "buy" and the NFT landing in their wallet, using ethers.js and web3.js.

That part is mostly about waiting and explaining. A purchase needs the user to approve it in their wallet, pay a gas fee they may not understand, and then wait for the chain to confirm. The UI had to say what was happening at each step, show the cost before they committed, and make it clear when something failed and why.
