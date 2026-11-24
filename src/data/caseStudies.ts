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
      "Built the company's internal Claude Code infrastructure: skills, rules, and automated tooling for AI-assisted engineering",
      "Personally onboarded 12 engineers, roughly 60% of an engineering org of about 20 (estimate)",
      "Wrote the internal docs and guides the team worked from, and set the standards for AI-assisted engineering",
      "Pull-request volume rose about tenfold after the rollout, over a period when the org was also shrinking",
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
    title: "BUILDING THE METAVERSE AT NAPSTER INC.",
    subtitle: "FORMERLY INFINITE REALITY",
    shortTitle: "NAPSTER INC.",
    role: "SENIOR FULL-STACK ENGINEER",
    timeline: "MARCH 2025 — JULY 2025",
    stack: ["REACT", "NEXTJS", "AWS", "POSTGRES"],
    outcomes: [
      "Built full-stack platform infrastructure for immersive metaverse experiences",
      "Optimized 3D asset delivery and progressive loading for virtual environments",
      "Designed Postgres database architecture for virtual worlds and user state",
    ],
    outcomeStack: "REACT · NEXT.JS · TYPESCRIPT · NODE.JS · POSTGRESQL · AWS",
  },
  {
    slug: "lkg",
    title: "BUILDING THE WORLD'S FIRST HOLOGRAM CMS",
    subtitle: "LOOKING GLASS FACTORY — BLOCKS.GLASS",
    shortTitle: "LOOKING GLASS FACTORY",
    role: "SENIOR FULL-STACK ENGINEER",
    timeline: "MAY 2023 — MARCH 2025",
    stack: ["REACT", "WEBGL", "POSTGRES"],
    outcomes: [
      "Architected blocks.glass, the first-ever content sharing platform for holograms, deploying 100,000+ digital assets",
      "Reduced page load times 70% through Postgres query optimization and schema redesign",
      "Built payment infrastructure integrating Stripe, Webflow, and Shopify for subscriptions and sales",
      "Led integration of RAG-powered conversational AI and a text-to-hologram generation pipeline, delivering immersive experiences for enterprise clients including Accenture and Marriott",
    ],
    outcomeStack: "REACT · NEXT.JS · TYPESCRIPT · POSTGRESQL · THREE.JS · AWS",
  },
  {
    slug: "parcel",
    title: "BUILDING WEB3 COMMERCE AT PARCEL",
    shortTitle: "PARCEL",
    role: "FULL-STACK ENGINEER",
    timeline: "MARCH 2022 — JANUARY 2023",
    stack: ["REACT", "WEB3", "ETHERS.JS"],
    outcomes: [
      "Optimized GraphQL + Postgres backend to support 1,000+ daily active users",
      "Built a reusable React/TypeScript component library and design system with Figma integration",
      "Integrated Web3 libraries (web3.js, ethers.js) for NFT purchasing across Ethereum and Polygon",
      "Automated CI/CD pipelines with Docker and GitHub Actions",
    ],
    outcomeStack: "REACT · TYPESCRIPT · GRAPHQL · NODE.JS · POSTGRES · WEB3",
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
    outcomes: [
      "Built automated pipelines processing 50,000+ 3D assets for mobile AR using AWS, Docker, and Node.js",
      "Supported 100+ retail vendor partnerships converting product catalogs into 3D/AR experiences",
      "Automated 3D optimization (decimation, re-meshing, material re-assignment) via Blender's Python API",
      "Transitioned infrastructure through the Snap Inc. acquisition, adapting pipelines for Snapchat AR",
    ],
    outcomeStack: "PYTHON · BLENDER · AWS · DOCKER · POSTGRES",
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
    title: "BUILDING THE FUTURE WITH MAGIC LEAP AT MPC",
    shortTitle: "MPC × MAGIC LEAP",
    role: "VR ENGINEER",
    timeline: "FEBRUARY 2018 — FEBRUARY 2019",
    stack: ["C++", "MAGIC LEAP SDK"],
    outcomes: [
      "Developed a Spotify application for Magic Leap, extending the Lumin SDK in C++",
      "Built reusable Unity/C# architecture for AR/VR projects",
      "Delivered interactive AR/VR campaign experiences for clients including National Geographic",
      "Created custom shader effects and music visualizations for spatial audio experiences",
      "Led a team of 3 developers, collaborating directly with Magic Leap's internal team",
    ],
    outcomeStack: "C++ · C# · UNITY · MAGIC LEAP LUMIN SDK · HLSL",
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
