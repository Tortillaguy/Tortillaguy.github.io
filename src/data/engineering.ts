export interface EngRow {
  company: string;
  role: string;
  years: string;
  tags: string[];
  href?: string;
}

export const engQuote =
  "I don't just run the show — I build the software behind it. Holographic content platforms, AR festival stages, realtime asset pipelines.";

export const engMeta = "7+ YRS FULL-STACK / REALTIME";

const engineering: EngRow[] = [
  { company: "NAPSTER", role: "SENIOR FULL-STACK ENGINEER", years: "2025", tags: ["REACT", "NEXTJS", "AWS"], href: "/work/infinite-reality" },
  { company: "LOOKING GLASS FACTORY", role: "SENIOR FULL-STACK — BUILT BLOCKS.GLASS, 100K+ HOLOGRAMS", years: "2023 — 2025", tags: ["REACT", "WEBGL", "POSTGRES"], href: "/work/lkg" },
  { company: "VERTEBRAE → SNAPCHAT", role: "ASSET PIPELINE ENGINEER — ACQUIRED 2021", years: "2020 — 2022", tags: ["PYTHON", "BLENDER", "WEBGL"], href: "/work/vertebrae" },
  { company: "MPC × MAGIC LEAP", role: "VR ENGINEER — SPOTIFY APP FOR MAGIC LEAP", years: "2018 — 2019", tags: ["C++", "MAGIC LEAP SDK"], href: "/work/mpc" },
  { company: "INTEL TRUE VR", role: "CONTENT MANAGEMENT SPECIALIST", years: "2018", tags: ["UNITY", "FFMPEG", "VR"], href: "/work/intel" },
  { company: "COACHELLA AR", role: "LEAD SOFTWARE ENGINEER — PORTALSXR, TEAM OF 6", years: "2019", tags: ["UNITY", "AR", "MOBILE"] },
];

export default engineering;
