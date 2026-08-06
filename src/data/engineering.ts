export interface EngRow {
  company: string;
  role: string;
  years: string;
  tags: string[];
  href?: string;
  /** Case-study media in src/assets, rendered as the row's background band. */
  image?: string;
}

export const engQuote =
  "I don't just run the show — I build the software behind it. Holographic content platforms, AR festival stages, realtime asset pipelines.";

export const engMeta = "8+ YRS FULL-STACK / REALTIME / AI";

const engineering: EngRow[] = [
  { company: "TWELVE LABS", role: "SENIOR FULL-STACK ENGINEER — AGENTIC VIDEO EDITOR (RODEO)", years: "2026", tags: ["REACT", "GRAPHQL", "FFMPEG"], href: "/work/twelvelabs", image: "twelvelabs.png" },
  { company: "FIRST RESONANCE", role: "AI CONTEXT ENGINEER — FIRST AI HIRE, MCP + AGENT TOOLING", years: "2025 — 2026", tags: ["MCP", "PYTHON", "LANGCHAIN"], href: "/work/first-resonance", image: "first-resonance.png" },
  { company: "NAPSTER", role: "SENIOR FULL-STACK ENGINEER", years: "2025", tags: ["REACT", "NEXTJS", "AWS"], href: "/work/infinite-reality", image: "infinite-reality.webp" },
  { company: "LOOKING GLASS FACTORY", role: "SENIOR FULL-STACK — BLOCKS.GLASS, 100K+ HOLOGRAMS; AI FOR ACCENTURE + MARRIOTT", years: "2023 — 2025", tags: ["REACT", "WEBGL", "POSTGRES"], href: "/work/lkg", image: "lkg.webp" },
  { company: "VERTEBRAE → SNAPCHAT", role: "FULL-STACK DEVELOPER — ACQUIRED 2021", years: "2020 — 2022", tags: ["PYTHON", "BLENDER", "WEBGL"], href: "/work/vertebrae", image: "snap.jpg" },
  { company: "MPC × MAGIC LEAP", role: "VR ENGINEER — SPOTIFY FOR MAGIC LEAP; AR/VR FOR NATIONAL GEOGRAPHIC", years: "2018 — 2019", tags: ["C++", "MAGIC LEAP SDK"], href: "/work/mpc", image: "magicleap.webp" },
  { company: "INTEL TRUE VR", role: "FULL-STACK ENGINEER — VR SPORTS, ADOPTED FOR NBC'S 2018 OLYMPICS", years: "2017 — 2018", tags: ["UNITY", "FFMPEG", "VR"], href: "/work/intel", image: "intel.png" },
  { company: "COACHELLA AR", role: "LEAD SOFTWARE ENGINEER — PORTALSXR, TEAM OF 6; COACHELLA + MUSIC MIDTOWN", years: "2019", tags: ["UNITY", "AR", "MOBILE"], href: "/work/coachella", image: "coachella.png" },
];

export default engineering;
