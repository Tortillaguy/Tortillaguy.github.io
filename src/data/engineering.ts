export interface EngRow {
  company: string;
  role: string;
  years: string;
  tags: string[];
}

export const engQuote =
  "I don't just run the show — I build the software behind it. Holographic content platforms, AR festival stages, realtime asset pipelines.";

export const engMeta = "7+ YRS FULL-STACK / REALTIME";

const engineering: EngRow[] = [
  { company: "NAPSTER", role: "SENIOR FULL-STACK DEVELOPER", years: "2025", tags: ["REACT", "NEXTJS", "AWS"] },
  { company: "LOOKING GLASS FACTORY", role: "SENIOR FULL-STACK — BUILT BLOCKS.GLASS, 100K+ HOLOGRAMS", years: "2023 — 2025", tags: ["REACT", "WEBGL", "POSTGRES"] },
  { company: "VERTEBRAE → SNAPCHAT", role: "ASSET PIPELINE ENGINEER — ACQUIRED 2021", years: "2020 — 2022", tags: ["PYTHON", "BLENDER", "WEBGL"] },
  { company: "MAGIC LEAP × SPOTIFY", role: "LEAD UNITY DEVELOPER", years: "2019", tags: ["UNITY", "LUMIN SDK"] },
  { company: "INTEL TRUE VR", role: "CONTENT MANAGEMENT SPECIALIST", years: "2018", tags: ["UNITY", "FFMPEG", "VR"] },
  { company: "MUSIC MIDTOWN AR", role: "PROJECT LEAD — HYUNDAI AR STAGE", years: "2019", tags: ["UNITY", "AR", "REACT NATIVE"] },
];

export default engineering;
