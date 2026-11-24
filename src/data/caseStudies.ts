export interface CaseStudy {
  slug: string;
  /** Uppercase display title rendered by the layout (Anton). */
  title: string;
  /** Optional mono sub-line under the title. */
  subtitle?: string;
  /** Short name for prev/next navigation. */
  shortTitle: string;
  role: string;
  timeline: string;
  stack: string[];
  /** Optional hero image filename in src/assets. */
  heroImage?: string;
  heroCaption?: string;
  /** Optional YouTube video ID embedded as the hero, in place of heroImage. */
  heroVideo?: string;
  /** Optional KEY OUTCOMES panel rows. */
  outcomes?: string[];
  /** Optional mono stack line under the outcomes rows. */
  outcomeStack?: string;
  /** Optional GLB models rendered in the interactive 3D viewer in place of the hero image. */
  models?: { name: string; src: string }[];
  /** Optional page-specific meta description (defaults to the site description). */
  description?: string;
  /** Optional page-specific social preview image path. */
  ogImage?: string;
}

// Ordered reverse-chronologically (newest first). Index 0 renders as "01".
const caseStudies: CaseStudy[] = [
  {
    slug: "othelia",
    title: "TAKING A STORY PLATFORM TO GA",
    subtitle: "OTHELIA — VIDEO INGESTION + LAUNCH",
    shortTitle: "OTHELIA",
    role: "STAFF FULL-STACK ENGINEER (CONTRACT)",
    timeline: "SEPTEMBER 2026 — NOVEMBER 2026",
    stack: ["TANSTACK", "NODE.JS", "GEMINI"],
    outcomes: [
      "Took over the existing video ingestion pipeline with little onboarding, removed its redundant stages, and made it faster and more accurate for the October 2026 GA launch",
      "Built the TanStack server and web app, plus worker-processed jobs that turn footage into Gemini Vision frame descriptions for retrieval",
      "Designed the upload flow: live pipeline-phase status, then a review page where users choose what the pipeline extracted",
      "Set up rubric-based evals for pipeline accuracy and latency, tracked in Langfuse",
      "Built the onboarding flow for new users and moved about 200 sign-ups onto Team plans at launch",
      "Cut page load, navigation and API response times by about 75%",
      "Halved CI deploy time with caching, parallel jobs and tiered unit tests",
    ],
    outcomeStack: "TANSTACK · NODE.JS · GEMINI VISION · LANGFUSE · WORKER QUEUES · RAG",
  },
  {
    slug: "twelvelabs",
    title: "TEACHING AN AGENT TO CUT VIDEO",
    subtitle: "TWELVE LABS — RODEO",
    shortTitle: "TWELVE LABS",
    role: "STAFF FULL-STACK ENGINEER",
    timeline: "APRIL 2026 — AUGUST 2026",
    stack: ["REACT", "NEXTJS", "GRAPHQL", "FFMPEG"],
    heroVideo: "AynkwDn2sXg",
    heroCaption: "THIS IS RODEO — TWELVELABS LAUNCH VIDEO",
    outcomes: [
      "Built Rodeo's editor UI from scratch: 30+ components (playhead, clip segments, labels, clip panels) in React, Next.js, Tailwind and Storybook",
      "Built the agent's OTIO timeline tools (cut, trim, move, split), the GraphQL integrations and server-side ffmpeg export",
      "Built evals that grade the agent's edits against the expected timeline; pass rate rose from about 60% to about 90%",
      "One of four full-stack engineers; 200+ sign-ups after Rodeo went public",
    ],
    outcomeStack: "REACT · NEXT.JS · TAILWIND · STORYBOOK · OTIO · GRAPHQL · FFMPEG",
  },
  {
    slug: "first-resonance",
    title: "BUILDING THE CONTEXT LAYER FOR A FACTORY OS",
    subtitle: "FIRST RESONANCE — FIRST AI ENGINEERING HIRE",
    shortTitle: "FIRST RESONANCE",
    role: "STAFF AI CONTEXT ENGINEER",
    timeline: "DECEMBER 2025 — APRIL 2026",
    stack: ["MCP", "PYTHON", "LANGCHAIN"],
    heroVideo: "PlHbB8KE9y0",
    heroCaption: "INTRODUCING ION INTELLIGENCE — FIRST RESONANCE, JUNE 2025 (BEFORE I JOINED)",
    outcomes: [
      "Joined as the company's first AI engineer",
      "Built an MCP server over ION's parts, inventory, work orders and supply-chain data, used directly by clients",
      "Used it to find bottlenecks: workstations with spare capacity, slow process steps, and gaps in process documentation",
      "Migrated ION's GraphQL operations to MCP one-to-one, then consolidated the resulting 30+ tools",
      "Built a Python/LangChain agent on the same server that reads and updates the user's UI state live, behind a guardrails LLM against prompt injection",
    ],
    outcomeStack: "PYTHON · LANGCHAIN · MCP · CLAUDE CODE · LLM AGENTS",
  },
  {
    slug: "claude-code-rollout",
    description: "How I rolled out Claude Code to an engineering team as its first AI engineer: shared skills, rules and automated tooling, hands-on onboarding for 12 engineers, and the written standards the team worked from.",
    ogImage: "/assets/og-dev.png",
    title: "ROLLING OUT CLAUDE CODE TO AN ENGINEERING TEAM",
    subtitle: "FIRST RESONANCE / AI-ASSISTED ENGINEERING ENABLEMENT",
    shortTitle: "CLAUDE CODE ROLLOUT",
    role: "STAFF AI CONTEXT ENGINEER",
    timeline: "DECEMBER 2025 — APRIL 2026",
    stack: ["CLAUDE CODE", "SKILLS", "RULES"],
    outcomes: [
      "Built the internal Claude Code setup: skills for PR review, UI review, context management and CLAUDE.md upkeep, plus migration and CI rules",
      "Onboarded 12 engineers team by team, roughly 60% of an engineering org of about 20 (estimate)",
      "Wrote the internal docs and guides the team worked from, and set the standards for AI-assisted engineering",
      "Pull-request volume rose about tenfold after the rollout (GitHub stats), over a period when the org was also shrinking",
    ],
    outcomeStack: "CLAUDE CODE · SKILLS · RULES · AUTOMATED TOOLING · ENABLEMENT",
  },
  {
    slug: "pba",
    title: "POLKADOT BLOCKCHAIN ACADEMY IN BALI",
    shortTitle: "POLKADOT ACADEMY",
    role: "D'APPS DEVELOPMENT — GRADUATE",
    timeline: "SEPTEMBER 2025",
    stack: ["RUST", "SUBSTRATE", "POLKADOT"],
    outcomes: [
      "Completed the D'Apps Development track, building custom blockchains with the Substrate framework",
      "Gained proficiency in Rust for systems and blockchain runtime programming",
      "Deepened understanding of consensus mechanisms, cryptography, and blockchain runtime architecture",
      "Built a global network of Polkadot ecosystem developer connections",
    ],
    outcomeStack: "RUST · SUBSTRATE · POLKADOT",
  },
  {
    slug: "infinite-reality",
    title: "INSTANCING AND UI 2.0 FOR IR STUDIO",
    subtitle: "INFINITE REALITY (NOW NAPSTER CORPORATION) — IR STUDIO",
    shortTitle: "NAPSTER",
    role: "SENIOR FULL-STACK ENGINEER",
    timeline: "MARCH 2025 — JULY 2025",
    stack: ["THREE.JS", "REACT", "TYPESCRIPT"],
    heroVideo: "HN5HJmUdb6A",
    heroCaption: "INFINITE REALITY × GOOGLE CLOUD — APRIL 2025",
    outcomes: [
      "Added instancing to the iR Engine, lowering GPU load and speeding up scene loads",
      "Built the glass-morphic UI 2.0 look for iR Studio",
      "One of a team of at most six engine engineers",
    ],
    outcomeStack: "THREE.JS · WEBGL · REACT · TYPESCRIPT",
  },
  {
    slug: "lkg",
    title: "BUILDING THE WORLD'S FIRST HOLOGRAM CMS",
    subtitle: "LOOKING GLASS FACTORY — BLOCKS.GLASS",
    shortTitle: "LOOKING GLASS FACTORY",
    role: "SENIOR FULL-STACK ENGINEER",
    timeline: "MAY 2023 — MARCH 2025",
    stack: ["REACT", "WEBGL", "POSTGRES"],
    heroVideo: "EaBnFMCgxjw",
    heroCaption: "IMAGE TO HOLOGRAM ON BLOCKS — LOOKING GLASS, AUGUST 2023",
    outcomes: [
      "Built blocks.glass, the hologram sharing site, with a team of two and a half engineers; 100,000+ assets deployed",
      "Cut page loads about 70% (5 to 6 seconds down to under 2) through Postgres query, index and schema work",
      "Built payments across Stripe, Webflow and Shopify, plus a ComfyUI + FastAPI text-to-hologram pipeline",
      "Built the Liteforms chatbot service (Python, LangChain, GPT-4, retrieval) that Accenture deployed at Marriott locations",
    ],
    outcomeStack: "REACT · NEXT.JS · TYPESCRIPT · POSTGRESQL · THREE.JS · AWS",
  },
  {
    slug: "parcel",
    title: "A MARKETPLACE FOR VIRTUAL LAND",
    subtitle: "PARCEL — PARCEL.SO",
    shortTitle: "PARCEL",
    role: "FULL-STACK ENGINEER",
    timeline: "MARCH 2022 — JANUARY 2023",
    stack: ["REACT", "WEB3", "ETHERS.JS"],
    heroImage: "parcel-home-2022.png",
    heroCaption: "PARCEL.SO HOMEPAGE, NOVEMBER 2022 (WAYBACK MACHINE)",
    outcomes: [
      "Built the design system for parcel.so, an NFT marketplace for virtual land serving 1,000+ daily active users",
      "Built wallet connections and the transaction UX for buying NFTs with ethers.js and web3.js",
      "One of a team of fewer than five engineers",
    ],
    outcomeStack: "REACT · TYPESCRIPT · FIGMA · ETHERS.JS · WEB3.JS",
  },
  {
    slug: "pokemoon",
    title: "BUILDING 3D NFTS IN THE WILD WEST OF WEB3",
    subtitle: "POKEMOON",
    shortTitle: "POKEMOON",
    role: "LEAD DEVELOPER — 3D NFT PROJECT",
    timeline: "2021 — 2022",
    stack: ["BLENDER", "WEB3"],
    models: [
      { name: "Clobberilla", src: "/models/pokemoon/clobberilla.glb" },
      { name: "Ricky", src: "/models/pokemoon/ricky.glb" },
    ],
    outcomes: [
      "Built a 3D interactive NFT platform with real-time browser rendering using Three.js and React Three Fiber",
      "Launched multiple tokens listed on Coingecko and Binance Smart Chain AMMs",
      "Designed and built DEX and NFT marketplace infrastructure for decentralized trading",
      "Led a remote, cross-functional team of 3D artists, blockchain developers, and marketers",
    ],
    outcomeStack: "REACT · THREE.JS · SOLIDITY · WEB3 · BLENDER",
  },
  {
    slug: "vertebrae",
    title: "SCALING 3D COMMERCE: FROM VERTEBRAE TO SNAP INC.",
    shortTitle: "VERTEBRAE → SNAP",
    role: "FULL-STACK DEVELOPER",
    timeline: "AUGUST 2020 — MARCH 2022",
    stack: ["PYTHON", "BLENDER", "WEBGL"],
    heroVideo: "hpn2RiNkLWI",
    heroCaption: "WHAT'S HERE AND NOW WITH AR SHOPPING — SNAPCHAT FOR BUSINESS",
    outcomes: [
      "Built the 3D pipeline: Blender on EC2, config-driven output to GLB, USDZ/Quick Look and other renderer formats",
      "Automated decimation, re-meshing and material reassignment with Blender's Python API; 50,000+ assets processed",
      "Built the Postgres backend and API for asset tracking and vendor permissions across 100+ retail vendors",
      "Built an Electron + React + Three.js review tool for technical artists, and adapted the pipeline for Snapchat AR after the acquisition",
    ],
    outcomeStack: "PYTHON · BLENDER · AWS EC2 · POSTGRES · ELECTRON · THREE.JS",
  },
  {
    slug: "coachella",
    title: "AR AT FESTIVAL SCALE",
    subtitle: "PORTALSXR — COACHELLA & MUSIC MIDTOWN",
    shortTitle: "COACHELLA AR",
    role: "LEAD SOFTWARE ENGINEER",
    timeline: "2019",
    stack: ["UNITY", "AR", "REACT NATIVE"],
    heroImage: "coachella.png",
    heroCaption: "Mobile AR experiences built for high-traffic live events",
    outcomes: [
      "Led a cross-functional team of 6 shipping 6 mobile AR applications to the app store for high-traffic live events",
      "Built the core 3D graphics and AR interactivity across Unity and C#, with React Native, Java, and Swift on the app side",
      "Ran on-site production support at Coachella and Music Midtown, holding 100% uptime for localized, time-coded AR experiences",
      "Designed every experience to degrade rather than fail, on saturated networks and mid-range devices with no second chance at the deadline",
    ],
    outcomeStack: "UNITY · C# · REACT NATIVE · JAVA · SWIFT · MOBILE AR",
  },
  {
    slug: "mpc",
    title: "SPOTIFY FOR MAGIC LEAP",
    subtitle: "MPC (MOVING PICTURE COMPANY)",
    shortTitle: "MPC × MAGIC LEAP",
    role: "VR ENGINEER",
    timeline: "FEBRUARY 2018 — FEBRUARY 2019",
    stack: ["UNITY", "C#", "MAGIC LEAP"],
    heroImage: "spotify-magic-leap.jpg",
    heroCaption: "SPOTIFY ON MAGIC LEAP — LAUNCH KEY ART, NOVEMBER 2019",
    outcomes: [
      "Built the Unity app and all of its UI for Spotify on Magic Leap, extending the Lumin SDK in C++ to stream Spotify audio",
      "Created custom shaders and music visualizations for the in-room interface",
      "Built a mobile and tablet AR app for National Geographic: a dinosaur placed on real surfaces as an interactive anatomy guide with audio cues and timelines",
      "Led a group of 3 developers on a team of fewer than 10, working directly with Magic Leap's internal team",
    ],
    outcomeStack: "UNITY · C# · C++ · MAGIC LEAP LUMIN SDK · HLSL · MOBILE AR",
  },
  {
    slug: "intel",
    title: "BRINGING VR TO LIVE SPORTS: INTEL TRUE VR",
    shortTitle: "INTEL TRUE VR",
    role: "FULL-STACK ENGINEER",
    timeline: "2017 — 2018",
    stack: ["UNITY", "FFMPEG", "VR"],
    outcomes: [
      "Led a development team building an enterprise CMS for live VR sports content across web and VR platforms, feeding the app adopted for NBC's 2018 Winter Olympics coverage",
      "Built VR applications across Android, iOS, and Windows using Unity and C#",
      "Automated video transcoding pipelines with Python, FFmpeg, and AWS for multi-platform VR distribution",
      "Enabled cross-platform social distribution to Facebook 360 and YouTube VR",
    ],
    outcomeStack: "UNITY · C# · PHP · PYTHON · FFMPEG · AWS",
  },
];

export default caseStudies;
