---
layout: ../../layouts/BlogPost.astro
---

# Building the World's First Hologram CMS at Looking Glass Factory

**May 2023 - March 2025**

When I joined Looking Glass Factory as a Senior Full-Stack Engineer, I knew I was stepping into something unique. This wasn't just another SaaS company—they were building holographic displays and trying to create an entire ecosystem around 3D content. My mission? Architect and build [blocks.glass](https://blocks.glass), the first-ever content sharing platform for holograms.

Think of it as YouTube or Instagram, but for holographic 3D content. No one had done this before. There was no playbook.

<iframe class="m-auto w-full md:w-[560px]" width="560" height="315" src="https://www.youtube.com/embed/wefvzabaxvY?si=qY3oWCb8fy3WrZbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## The Scale: 100,000+ Digital Assets

Over the course of nearly two years, we deployed over **100,000 digital assets** through the platform. Holograms, 3D models, lightfield images, volumetric videos—all kinds of content that needed to be processed, stored, displayed, and delivered to holographic displays around the world.

The technical challenges were fascinating:
- How do you efficiently store and serve multi-gigabyte holographic files?
- How do you create a content discovery system for 3D assets?
- How do you handle IoT device management when users have holographic displays syncing content?
- How do you build a platform that works for both creators and consumers?

## Making It Fast: 70% Performance Improvement

One of my proudest achievements was optimizing our database architecture. We were running complex Postgres queries that were causing page load times to drag. Users would wait several seconds just to browse content—unacceptable for a modern web app.

I dove deep into query optimization, indexing strategies, and database schema redesign. The result? **70% reduction in page load times**. What used to take 5-6 seconds now loaded in under 2 seconds. For a content platform, that kind of performance improvement directly translates to better user engagement and retention.

## Building the Business: Payment Infrastructure

A platform is nothing without a sustainable business model. I implemented our entire payment processing infrastructure, integrating with Webflow and Shopify to support SaaS subscriptions and product sales.

This involved:
- **Stripe integration** for recurring billing and subscription management
- **Webhook handling** for real-time payment events
- **User management** tied to subscription tiers
- **Seamless checkout experiences** that didn't break the immersive nature of browsing holographic content

Getting payments right is critical—it's the foundation of the company's revenue. Every transaction had to be smooth, secure, and reliable.

## AI Integration: RAG for Holographic Content

As AI started exploding in 2023-2024, we saw an opportunity to make content discovery more intelligent. I integrated large language model (LLM) services into our Liteforms platform using **retrieval-augmented generation (RAG)** techniques.

Imagine searching for "realistic ocean waves at sunset" and having the AI understand not just keywords, but the visual and aesthetic qualities you're looking for in 3D content. RAG allowed us to combine the power of LLMs with our existing content database, dramatically improving search relevance and user satisfaction.

This was cutting-edge stuff—implementing RAG before it became mainstream, specifically tailored for 3D asset discovery.

## Revolutionizing the Frontend: Design Systems & 3D Web

I led a major overhaul of our frontend development process by introducing:

### Modern Design Workflow
- **Storybook** for component development and documentation
- **Mobile-first design principles** ensuring our platform worked beautifully on all devices
- **Figma + Tailwind integration** creating a seamless designer-to-developer workflow

### 3D Web Experiences
This is where my background in creative technology really shined. I integrated:
- **Three.js** and **React Three Fiber** for real-time 3D rendering in the browser
- **Framer Motion** for smooth, delightful animations
- **WebGL optimizations** to ensure 3D content loaded quickly even on slower devices

Users could preview holographic content directly in their browser before syncing it to their Looking Glass display. The web app itself became an immersive experience.

## Automation: Unity Code Generation Pipeline

One of the most technically interesting problems was keeping our Unity SDK in sync with our web platform. We had APIs for content management, user authentication, device syncing—and all of it needed C# code on the Unity side.

I designed an **automated build pipeline** that:
1. Read our OpenAPI specifications from the Next.js codebase
2. Automatically generated type-safe C# code for Unity
3. Ran on every deployment, ensuring Unity developers always had up-to-date SDK code

This eliminated manual errors, reduced development friction, and accelerated our release cycles. Developers could trust that the Unity SDK would always match the web API.

## The IoT Challenge: Holographic Displays Everywhere

What made this project particularly complex was the **IoT dimension**. We weren't just building a web app—we were building a platform that had to communicate with thousands of holographic displays, each running custom firmware, each owned by individual users or businesses.

This meant dealing with:
- **Device authentication and pairing**
- **Content synchronization** across unreliable networks
- **Version management** when displays had different firmware
- **Real-time updates** when users published new content

It was full-stack in the truest sense—from React components in the browser to Postgres queries on the backend to firmware communication protocols for hardware devices.

## What I Learned

This role pushed me in every direction:

1. **Architecting at scale** - Designing systems that handle 100k+ assets isn't trivial
2. **Database optimization** - Real performance gains come from understanding your data layer
3. **Product thinking** - Building features that users actually need and enjoy
4. **AI integration** - Practical applications of LLMs beyond chatbots
5. **IoT complexity** - Software + hardware ecosystems are a whole different beast
6. **Design systems** - Establishing processes that help teams move faster
7. **Business impact** - My code directly affected revenue and user growth

## Reflections

Looking Glass Factory was a wild ride. Building the first hologram sharing platform meant solving problems no one had solved before. There were no Stack Overflow answers for "how to optimize lightfield image delivery to IoT holographic displays."

What made it special was the intersection of **cutting-edge hardware** (holographic displays), **modern web development** (React, Next.js, TypeScript), **AI innovation** (RAG, LLMs), and **creative content** (3D art, volumetric video).

It reinforced something I've always believed: the most interesting work happens at the intersections—where technology meets art, where web meets hardware, where engineering meets creativity.

Today, when I'm building immersive installations or working on live visual productions, the systems thinking and full-stack expertise I developed at Looking Glass Factory continue to inform how I approach complex technical challenges.

---

**Tech Stack:** React, Next.js, TypeScript, PostgreSQL, AWS, Three.js, React Three Fiber, Framer Motion, Tailwind CSS, Figma, Storybook, Unity (C#), OpenAPI, Stripe, RAG/LLMs, IoT, WebGL

**Team:** Senior Full-Stack Engineer

**Impact:**
- 100,000+ digital assets deployed
- 70% reduction in page load times
- First-ever hologram content sharing platform

**Location:** Remote / San Francisco
