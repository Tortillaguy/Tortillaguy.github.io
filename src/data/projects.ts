import type { Project } from "../types";

const projects: Project[] = [

  {
    name: "Looking Glass Factory",
    filename: "lkg.jpg",
    role: "Senior Full-Stack Developer",
    link: "https://lookingglassfactory.com/",
    tags: ["React", "Full-Stack", "AWS", "Postgres", "Typescript", "NextJS"],
    description: `
    During my time at Looking Glass Factory, I played a pivotal role in implementing payment processing services, which were essential for enabling our SaaS products and subscriptions through platforms like Webflow and Shopify. This project involved ensuring seamless transactions, enhancing the user experience, and providing robust support for recurring billing and subscription management. My work in this area significantly contributed to the company's revenue stream by facilitating smooth and reliable payment processes.

    I also integrated large language model (LLM) services into our Liteforms platform, employing retrieval-augmented generation (RAG) techniques for efficient data retrieval among documents. This integration not only improved the platform's functionality but also enhanced the accuracy and relevance of information retrieval, leading to better user satisfaction and increased engagement. By leveraging advanced AI techniques, I helped the company stay at the forefront of technological innovation in our industry.

    Additionally, I introduced Storybook and mobile-first design principles to our full-stack application, which, along with closer integration with Figma and Tailwind, streamlined our development process and improved design consistency. I also supported the inclusion of 3D renders and animations on the web using framer-motion, three.js, and React Three Fiber, enriching the visual experience for our users. Furthermore, I designed automated build pipelines for Unity C# code generation using OpenAPI and our Next.js codebase, which enhanced our development efficiency and reduced manual errors, ultimately accelerating our product release cycles.`
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
