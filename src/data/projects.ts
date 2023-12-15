import type { Project } from "../types";

const projects: Project[] = [
  {
    name: "Disguise Training",
    filename: "disguise.jpg",
    role: "VP Accelerator Program",
    link: "https://www.instagram.com/p/CpwFlCIpFxs",
    tags: ["Disguise", "Unreal Engine"],
  },
  {
    name: "Seismic Events",
    filename: "seismic.png",
    role: "VJ",
    link: "https://www.instagram.com/reel/CsvsjQZMKIQ/",
    tags: ["Resolume"],
    imageStyle: {
      // transform: "scale(1)",
      objectPosition: "50% 50%",
    },
  },
  {
    name: "SD Renegade",
    filename: "renegade.png",
    role: "Busking DMX",
    link: "https://www.instagram.com/p/CpwDLGDpstc",
    tags: ["ShowXpress"],
  },
  {
    name: "Looking Glass Factory",
    filename: "lkg.jpg",
    role: "Senior Full-Stack Developer",
    link: "https://lookingglassfactory.com/",
    tags: ["React", "Full-Stack", "AWS", "Postgres", "Typescript", "NextJS"],
  },
  {
    name: "Parcel",
    filename: "parcel.jpg",
    link: "http://parcel.so",
    role: "Frontend Engineer",
    tags: ["React", "NextJS", "UI/UX Design", "Web3", "Storybook"],
    imageStyle: {
      transform: "scale(1.25)",
      objectPosition: "50% 50%",
      aspectRatio: "1/1",
    },
  },
  {
    name: "Vertebrae + Snapchat Acquisition",
    filename: "snap.jpg",
    link: "https://telanganatoday.com/snap-acquires-3d-ar-solutions-provider-vertebrae",
    role: "Asset Pipeline Engineer",
    tags: ["Python", "Blender", "NodeJS", "React", "WebGL", "AWS"],
  },
  {
    name: "Magic Leap + Spotify App",
    filename: "magicleap.png",
    link: "https://www.youtube.com/watch?v=Q89wSw-JUyM",
    role: "Lead Unity Developer",
    tags: ["Python", "Unity", "AWS", "MagicLeap", "LuminSDK"],
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
