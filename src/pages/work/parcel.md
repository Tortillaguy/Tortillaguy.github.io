---
layout: ../../layouts/BlogPost.astro
---

# Building Web3 Commerce at Parcel

**March 2022 - January 2023**

In early 2022, I joined Parcel as a Frontend Engineer during an exciting time for Web3. Parcel was building a platform that bridged traditional e-commerce with blockchain technology—enabling creators and brands to sell NFTs alongside physical products, all in one seamless checkout experience.

The platform was serving **over 1,000 daily active users**, and I was brought on to help scale the frontend architecture, optimize backend performance, establish design systems, and deepen the Web3 integration. This was full-stack work in the truest sense, touching everything from database optimization to smart contract interactions.

<iframe width="560" class="m-auto w-full md:w-[560px] mt-4" height="315" src="https://www.youtube.com/embed/UfuEfjeWgzY?si=oQmkj7XdWMrHp5Z1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Backend Optimization: GraphQL + Postgres + Node.js

One of my first priorities was optimizing the backend. With 1,000+ DAU and growing, performance bottlenecks were starting to appear.

### The Stack

- **GraphQL** for flexible API queries
- **Postgres** for relational data storage (products, users, orders, NFT metadata)
- **Node.js** for the backend runtime
- **ORM** (TypeORM) for database abstraction

### The Challenge

Users were experiencing slow page loads when browsing product catalogs or viewing order history. The issue? **Inefficient database queries** and **N+1 query problems** in our GraphQL resolvers.

### The Solution

I focused on optimizing the ORM layer:

1. **DataLoader implementation** - Batched database queries to eliminate N+1 problems
2. **Query optimization** - Analyzed slow queries, added indexes, restructured joins
3. **Caching strategies** - Redis caching for frequently accessed data
4. **GraphQL query complexity limits** - Prevented abusive queries from overloading the database

The result was **significantly faster page loads** and a more scalable backend that could handle growing traffic without degrading user experience.

## Frontend Architecture: React + Redux + TypeScript

On the frontend, I was responsible for building a component library and state management system that could support rapid feature development.

### Modern React Stack

- **React** for UI components
- **Redux** for global state management
- **TypeScript** for type safety and better developer experience
- **React Hooks** for cleaner component logic

### Reusable Component Library

I built a comprehensive library of reusable components:

- **Product cards** (with NFT and physical product variants)
- **Checkout flows** (supporting both fiat and crypto payments)
- **Wallet connection UI** (MetaMask, WalletConnect, Coinbase Wallet)
- **NFT galleries** (grid and list views with filtering)
- **Loading states, error handling, modals, forms**

Each component was:

- **Typed with TypeScript** for better IDE support and fewer runtime errors
- **Tested** to ensure reliability
- **Documented** so other developers could use them confidently
- **Styled** to match our design system

### State Management

I designed Redux stores for:

- **User authentication** (wallet connection state, user profiles)
- **Shopping cart** (mixed NFT + physical products)
- **Product catalog** (filters, search, pagination)
- **Transaction status** (blockchain transaction tracking)

The architecture needed to handle both traditional e-commerce state (cart, checkout) and Web3-specific state (wallet connection, pending transactions, gas prices).

## Design Systems: Collaboration with Design

One of the most rewarding aspects was working closely with our Head of Design to establish a **cohesive brand system and UI/UX patterns**.

### Figma to Code Workflow

We used **Figma** as the source of truth for design:

- Designers created components in Figma
- I translated them to React components
- We maintained consistency through design tokens (colors, spacing, typography)
- Storybook (see below) served as the living documentation

### UI/UX Patterns for Web3

Web3 introduces unique UX challenges:

- **Wallet connection** - Making blockchain authentication feel familiar
- **Transaction states** - Pending, confirmed, failed transactions need clear UI
- **Gas fees** - Communicating costs without overwhelming users
- **Error handling** - Blockchain errors can be cryptic; we needed to humanize them

Working with design, we established patterns that made Web3 interactions feel as smooth as traditional web apps.

## Build Pipelines: Rollup + Next.js + Storybook

To support rapid development and deployment, I designed modern build pipelines.

### Storybook for Component Development

I set up **Storybook** as our component playground:

- Developers could build components in isolation
- Designers could review components before they were integrated
- We had a living style guide for the entire UI library
- QA could test components independently

### Rollup + Next.js

I configured **Rollup** bundlers for:

- Optimized production builds
- Tree shaking to minimize bundle size
- Code splitting for faster page loads
- Multiple Next.js applications with shared component library

## CI/CD Automation: Docker + GitHub Actions

To accelerate release cycles, I automated the entire deployment pipeline:

### Docker Containerization

- Consistent development and production environments
- Isolated services (frontend, backend, database)
- Easy local setup for new developers

### GitHub Actions CI/CD

- **Automated testing** on every pull request
- **Linting and type checking** to enforce code quality
- **Automated builds** for staging and production
- **NPM/Yarn script automation** for common tasks

This meant developers could push code confidently, knowing that automated checks would catch issues before they reached production.

## Web3 Integration: NFT Purchasing

The core of Parcel's value proposition was seamless NFT purchasing. I integrated multiple Web3 libraries to make this work:

### Libraries

- **web3-react** for wallet connection management
- **web3.js** and **ethers.js** for blockchain interactions
- Support for **Ethereum** and **Polygon** networks

### Features I Built

- **Wallet connection flows** (MetaMask, WalletConnect, Coinbase Wallet)
- **NFT minting** directly from the platform
- **Smart contract interaction** for purchasing NFTs
- **Transaction monitoring** (pending, confirmed, failed states)
- **Gas estimation** to show users costs before confirming
- **Multi-network support** (switching between Ethereum and Polygon)

### The UX Challenge

The hardest part wasn't the technical integration—it was making blockchain interactions feel **normal**. Users shouldn't need to understand gas, nonces, or block confirmations. They just want to buy an NFT.

I focused on:

- Clear transaction status indicators
- Helpful error messages (not raw blockchain errors)
- Optimistic UI updates (assume success, handle failures gracefully)
- Mobile-friendly wallet connection flows

## What I Learned

Parcel was a masterclass in modern web development and Web3 integration:

1. **Full-stack optimization** - Backend performance is just as important as frontend UX
2. **Design systems** - Investing in component libraries and design tools pays off long-term
3. **TypeScript** - Type safety dramatically reduces bugs and improves developer experience
4. **Web3 UX** - Making blockchain feel native to web apps requires thoughtful design
5. **CI/CD** - Automated pipelines enable faster, more confident shipping
6. **Collaboration** - Working closely with designers creates better products

## Reflections

Parcel was at the intersection of **e-commerce, Web3, and modern frontend development**—three areas I'm deeply passionate about. Building features that served 1,000+ daily users taught me the importance of **performance, scalability, and user experience** at every layer of the stack.

The Web3 integration work was particularly valuable. Understanding how to build crypto-native features while maintaining a seamless user experience has informed every blockchain project I've worked on since.

Today, when I'm building immersive web experiences or working on creative tech projects, I still use the component architecture patterns, build pipelines, and design system thinking I developed at Parcel. And the TypeScript + React + GraphQL stack? That's become my go-to for any serious web application.

---

**Tech Stack:** React, Next.js, TypeScript, Redux, GraphQL, Node.js, Postgres, Figma, Storybook, Rollup, Docker, GitHub Actions, Web3 (web3-react, web3.js, ethers.js), Ethereum, Polygon

**Company:** Parcel

**Role:** Frontend Engineer (Full-Stack)

**Key Outcomes:**

- Optimized GraphQL + Postgres backend for 1,000+ daily active users
- Built reusable component library and design system with Figma integration
- Integrated Web3 libraries for seamless NFT purchasing (Ethereum, Polygon)
- Automated CI/CD pipelines with Docker and GitHub Actions
- Collaborated with Head of Design to establish UI/UX patterns
- Configured modern build pipelines (Rollup, Next.js, Storybook)

**Scale:** 1,000+ daily active users (DAU)

**Blockchain Networks:** Ethereum, Polygon
