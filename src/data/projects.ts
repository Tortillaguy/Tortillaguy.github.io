import type { Project } from "../types";

const projects: Project[] = [
  {
    name: "Polkadot Blockchain Academy",
    filename: "pba.webp",
    role: "Student",
    link: "https://polkadot.academy/",
    tags: ["Rust", "Substrate", "Blockchain", "Web3"],
    // postID: "pba",
  },
  {
    name: "Infinite Reality",
    filename: "infinite-reality.webp",
    role: "Senior Full-Stack Developer",
    link: "https://www.ccn.com/news/technology/infinite-reality-startup-bringing-metaverse-back-from-the-dead-in-2025/",
    tags: ["React", "Full-Stack", "AWS", "Postgres", "Typescript", "NextJS"],
    // postID: "infinite-reality",
    imageStyle: {
      objectFit: "contain",
      background: "white",
      objectPosition: "50% 50%",
    },
  },
  {
    name: "Looking Glass Factory",
    filename: "lkg.webp",
    role: "Senior Full-Stack Developer",
    link: "https://lookingglassfactory.com/",
    tags: ["React", "Full-Stack", "AWS", "Postgres", "Typescript", "NextJS"],
    postID: "lkg",
  },
  {
    name: "Vertebrae + Snapchat Acquisition",
    filename: "snap.jpg",
    link: "https://telanganatoday.com/snap-acquires-3d-ar-solutions-provider-vertebrae",
    role: "Asset Pipeline Engineer",
    tags: ["Python", "Blender", "NodeJS", "React", "WebGL", "AWS"],
    postID: "vertebrae",
  },
  {
    name: "Magic Leap + Spotify App",
    filename: "magicleap.webp",
    link: "https://www.youtube.com/watch?v=Q89wSw-JUyM",
    role: "Lead Unity Developer",
    tags: ["Python", "Unity", "AWS", "MagicLeap", "LuminSDK"],
    postID: "mpc",
  },
  {
    name: "Pokemoon NFTs",
    filename: "pokemoon.webp",
    link: "/#",
    role: "Lead Developer",
    tags: ["Web3", "Three.js", "React", "GraphQL"],
    postID: "pokemoon",
  },
  {
    name: "Parcel",
    filename: "parcel3.webp",
    link: "https://www.youtube.com/watch?v=U4Bv1Q-6laA",
    role: "Frontend Engineer",
    tags: ["React", "NextJS", "UI/UX Design", "Web3", "Storybook"],

    postID: "parcel",
  },
  {
    name: "Genies Prototype App",
    filename: "genies.jpg",
    link: "https://genies.com/",
    role: "Unity Developer",
    tags: ["Javascript", "Python", "Unity"],
  },
  {
    name: "Intel True VR",
    filename: "intel.png",
    link: "https://www.youtube.com/watch?v=-nWddbP-hgo",
    role: "Content Management Specialist",
    tags: ["Python", "Unity", "AWS", "FFMPEG", "VR"],
    postID: "intel",
  },
  {
    name: "2019 Coachella AR",
    filename: "coachella.png",
    link: "https://vrscout.com/news/coachella-ar-interactive-stage",
    role: "Project Lead",
    tags: ["Unity", "Swift", "Java", "React Native", "AR"],
  },
  {
    name: "2019 Atlanta Music Midtown",
    filename: "midtown.png",
    link: "https://www.marketingdive.com/news/hyundai-revs-up-ar-experience-in-music-midtown-festival-app/562954/",
    role: "Project Lead",
    tags: ["Unity", "Swift", "Java", "React Native", "AR"],
  },
];

export default projects;
