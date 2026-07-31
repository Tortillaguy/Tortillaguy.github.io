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
  /** Optional KEY OUTCOMES panel rows. */
  outcomes?: string[];
  /** Optional mono stack line under the outcomes rows. */
  outcomeStack?: string;
}

// Ordered reverse-chronologically (newest first). Index 0 renders as "01".
const caseStudies: CaseStudy[] = [
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
      "Led integration of RAG-powered conversational AI and a text-to-hologram generation pipeline",
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
    role: "CREATOR — 3D NFT PROJECT",
    timeline: "2021 — 2022",
    stack: ["BLENDER", "WEB3"],
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
    role: "ASSET PIPELINE ENGINEER",
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
    slug: "mpc",
    title: "BUILDING THE FUTURE WITH MAGIC LEAP AT MPC",
    shortTitle: "MPC × MAGIC LEAP",
    role: "VR ENGINEER",
    timeline: "FEBRUARY 2018 — FEBRUARY 2019",
    stack: ["C++", "MAGIC LEAP SDK"],
    outcomes: [
      "Developed a Spotify application for Magic Leap, extending the Lumin SDK in C++",
      "Built reusable Unity/C# architecture for AR/VR projects",
      "Created custom shader effects and music visualizations for spatial audio experiences",
      "Led a team of 3 developers, collaborating directly with Magic Leap's internal team",
    ],
    outcomeStack: "C++ · C# · UNITY · MAGIC LEAP LUMIN SDK · HLSL",
  },
  {
    slug: "intel",
    title: "BRINGING VR TO LIVE SPORTS: INTEL TRUE VR",
    shortTitle: "INTEL TRUE VR",
    role: "CONTENT MANAGEMENT SPECIALIST",
    timeline: "2017 — 2018",
    stack: ["UNITY", "FFMPEG", "VR"],
    outcomes: [
      "Led a development team building an enterprise CMS for live VR sports content across web and VR platforms",
      "Built VR applications across Android, iOS, and Windows using Unity and C#",
      "Automated video transcoding pipelines with Python, FFmpeg, and AWS for multi-platform VR distribution",
      "Enabled cross-platform social distribution to Facebook 360 and YouTube VR",
    ],
    outcomeStack: "UNITY · C# · PHP · PYTHON · FFMPEG · AWS",
  },
];

export default caseStudies;
