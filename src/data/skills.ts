export interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Three.js",
      "WebGL",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    name: "Backend & Infrastructure",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GraphQL",
      "FastAPI",
    ],
  },
  {
    name: "Creative Tools",
    skills: [
      "Resolume",
      "Notch",
      "TouchDesigner",
      "Disguise",
      "Blender",
      "Unity",
      "Unreal",
      "Adobe Suite",
    ],
  },
  {
    name: "Specializations",
    skills: [
      "AR/VR",
      "Web3",
      "UI/UX Design",
      "CI/CD",
      "DevOps",
      "Live Events",
    ],
  },
];

const skills = [
  "React",
  "Typescript",
  "Notch",
  "Resolume",
  "Blender",
  "TouchDesigner",
  "Disguise",
  "AR/VR",
  "Three.js",
  "Web3",
  "Node.js",
  "UI/UX Design",
  "Adobe Suite",
  "Python",
  "Unity",
  "Unreal",
];

export { skillCategories };
export default skills;
