---
layout: ../../layouts/BlogPost.astro
---

# Building 3D NFTs in the Wild West of Web3

**~2021 - 2022**

The NFT boom of 2021 was chaotic, exciting, and full of opportunity. Everyone was trying to figure out what digital ownership really meant and how to create value in this new decentralized world. I jumped in as Lead Developer for Pokemoon NFTs, leading a fully remote team to build something genuinely unique: **3D interactive NFTs** that stood out in a market flooded with static JPEGs.

This project was a crash course in Web3 development, token economics, team leadership, and the reality that in crypto, things move *fast*.

<iframe src="https://www.loom.com/embed/9ea39108a5f54634b5733bb5d2a0e839?sid=26880711-b962-4cda-87fb-89103ea0832c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen  width="560" class="m-auto w-full md:w-[560px]" height="315"></iframe>

## Leading a Remote Web3 Team

One of the most rewarding aspects of this project was building and leading a small, multidisciplinary remote team:

- **3D Artists** creating original character designs and animations
- **Blockchain developers** handling smart contract development
- **Marketing professionals** building community and driving launches
- **Me** as Lead Developer, bridging design, development, and blockchain

We were spread across time zones, but the remote-first crypto culture actually made this easier. Discord became our office, GitHub our workspace, and we moved at crypto speed—which is to say, relentlessly fast.

The leadership challenge wasn't just technical—it was about **coordinating very different skill sets** toward a common vision. Artists think in aesthetics, blockchain devs think in gas optimization, marketers think in hype cycles. Making sure everyone stayed aligned while moving quickly taught me a lot about cross-functional team dynamics.

## Building the Web3 Infrastructure

We needed several Web3 platforms to support the NFT ecosystem:

### DEX (Decentralized Exchange) Integration
I designed and built interfaces for decentralized trading, allowing users to:
- Swap tokens directly from their wallets
- Provide liquidity to trading pairs
- View real-time price charts and trading volume

### NFT Marketplace
The marketplace needed to handle:
- **Minting** new NFTs directly from the site
- **Trading** NFTs peer-to-peer without intermediaries
- **Wallet integration** (MetaMask, WalletConnect, etc.)
- **Gas optimization** to minimize transaction costs

All of this had to work seamlessly while maintaining security—in Web3, a bug can mean lost funds, so every smart contract interaction was carefully audited and tested.

The design challenge was making **complex blockchain interactions feel simple**. Most users didn't want to understand gas fees or transaction confirmations—they just wanted to mint their NFT. Abstracting that complexity while maintaining transparency was a constant balancing act.

## The Magic: 3D Interactive NFTs

This is where the project got really fun. Most NFTs at the time were static images or basic animations. We wanted to create **fully interactive 3D characters** that you could rotate, zoom, and explore.

### Tech Stack: Three.js + React Three Fiber

I implemented the 3D rendering using **Three.js** and **React Three Fiber**, creating:

- **Real-time 3D rendering** in the browser (no plugins required)
- **Interactive controls** (orbit camera, zoom, animations)
- **Optimized loading** for 3D models (GLTF/GLB format)
- **Responsive design** that worked on mobile and desktop

Each NFT wasn't just a JPEG—it was a **3D scene** you could interact with. Want to see your character from the back? Rotate it. Want to see the animation? Click to play. The NFT itself still followed standards (ERC-721 on Binance Smart Chain), but the viewing experience was next-level.

### Technical Challenges

Rendering 3D in the browser for NFTs had unique challenges:

1. **File size** - 3D models can be large; we needed aggressive optimization
2. **Loading time** - Users won't wait long; progressive loading was essential
3. **Cross-platform** - Had to work on everything from phones to high-end gaming PCs
4. **IPFS integration** - Decentralized storage meant different loading patterns than traditional CDNs

I worked closely with our 3D artists to establish a pipeline:
- Artists create in Blender
- Export to optimized GLTF format
- I validate file size and polygon count
- Upload to IPFS (decentralized storage)
- Render on-demand in the browser via React Three Fiber

## Token Economics: Launching on Binance Smart Chain

Beyond the NFTs, we launched several **fungible tokens** that powered the ecosystem. This meant:

### Smart Contract Development
- Writing Solidity contracts for token minting and distribution
- Implementing tokenomics (supply, burn mechanisms, fees)
- Auditing for security vulnerabilities

### Exchange Listings
I coordinated launches on **Coingecko** and various **Binance Smart Chain AMMs** (Automated Market Makers like PancakeSwap). Getting listed meant:
- Providing liquidity (locking up capital)
- Submitting to aggregators for visibility
- Coordinating with marketing for launch timing

Seeing our token go live on Coingecko and watching the trading volume come in was a rush. It meant real users were buying into what we'd built.

### The BSC Ecosystem

We chose **Binance Smart Chain** over Ethereum for practical reasons:
- **Lower gas fees** - Minting on ETH was prohibitively expensive in 2021
- **Faster transactions** - BSC's speed made for better UX
- **Active community** - The BSC DeFi community was vibrant and engaged

This was the right call for accessibility, though it came with tradeoffs in terms of decentralization.

## What I Learned

This project was formative in ways I didn't expect:

1. **Web3 development** - Deep dive into smart contracts, wallet integration, IPFS, and blockchain development
2. **Token economics** - Understanding how to design and launch tradable digital assets
3. **3D web optimization** - Making complex 3D content work in browsers at scale
4. **Remote team leadership** - Coordinating across disciplines and time zones
5. **Rapid iteration** - Crypto moves fast; shipping quickly and iterating is essential
6. **Community dynamics** - In Web3, your community *is* your product

## Reflections on the NFT Era

Looking back, the 2021 NFT boom was wild. Some projects were genuine innovation, others were outright scams. We tried to be in the former category—building real technology and creating actual value through interactive art experiences.

The market eventually cooled, as hype cycles do. But the technical skills I gained—**blockchain development, 3D web rendering, decentralized architecture, and token economics**—have remained valuable. Web3 is still evolving, and the fundamentals I learned during this period continue to inform how I think about digital ownership, decentralization, and community-driven products.

Plus, building 3D interactive experiences in the browser? That skill translates directly to the immersive web work I do today, whether it's for NFTs, product visualization, or live visual installations.

The Pokemoon project taught me that the intersection of **art, technology, and economics** can create genuinely new experiences. And sometimes, jumping into the chaos of an emerging field is the best way to learn.

---

**Tech Stack:** React, Three.js, React Three Fiber, Web3, Solidity, Binance Smart Chain, IPFS, GraphQL, MetaMask, WalletConnect

**Project:** Pokemoon NFTs

**Role:** Lead Developer

**Team:** Led remote team of 3D artists, blockchain developers, and marketers

**Key Outcomes:**
- Built 3D interactive NFT platform with real-time browser rendering
- Launched multiple tokens listed on Coingecko and AMMs
- Created DEX and marketplace infrastructure for decentralized trading
- Designed and implemented Web3 UX/UI patterns
- Led cross-functional remote team across multiple time zones
- Implemented automated 3D asset pipeline (Blender to IPFS to Web)

**Blockchain:** Binance Smart Chain (BSC)
