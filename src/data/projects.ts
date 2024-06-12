import type { Project } from "../types";

const portalsXrDescription = `During my tenure at the company, I led a team of four software developers in successfully shipping augmented reality (AR) products on both the Google Play Store and Apple App Store. This role involved coordinating development efforts, ensuring timely releases, and maintaining high standards of quality for our AR applications. My leadership and project management skills were instrumental in delivering innovative AR solutions that reached a broad audience.

In addition to team leadership, I designed game UI and features for white-labeled AR experiences using C#, Android, iOS, and Unity. This work involved creating customizable and engaging AR interfaces that could be tailored to different brands, enhancing user engagement and satisfaction. My expertise in UI design and feature development ensured that our AR products were not only functional but also visually appealing and user-friendly.

I also managed code repositories and build automation processes using Perforce and Jenkins, which streamlined our development workflow and improved efficiency. Furthermore, I provided on-site technical support for high-profile live events and music festivals, including Coachella and Austin City Limits. This support was critical in ensuring the smooth operation of our AR experiences during these major events, demonstrating our commitment to delivering reliable and high-quality AR solutions in dynamic and demanding environments.`;

const projects: Project[] = [
  {
    name: "Looking Glass Factory",
    filename: "lkg.jpg",
    role: "Senior Full-Stack Developer",
    link: "https://lookingglassfactory.com/",
    tags: ["React", "Full-Stack", "AWS", "Postgres", "Typescript", "NextJS"],
    description: `
    During my time at the company, I played a pivotal role in implementing payment processing services, which were essential for enabling our SaaS products and subscriptions through platforms like Webflow and Shopify. This project involved ensuring seamless transactions, enhancing the user experience, and providing robust support for recurring billing and subscription management. My work in this area significantly contributed to the company's revenue stream by facilitating smooth and reliable payment processes.
    I also integrated large language model (LLM) services into our Liteforms platform, employing retrieval-augmented generation (RAG) techniques for efficient data retrieval among documents. This integration not only improved the platform's functionality but also enhanced the accuracy and relevance of information retrieval, leading to better user satisfaction and increased engagement. By leveraging advanced AI techniques, I helped the company stay at the forefront of technological innovation in our industry.
    Additionally, I introduced Storybook and mobile-first design principles to our full-stack application, which, along with closer integration with Figma and Tailwind, streamlined our development process and improved design consistency. I also supported the inclusion of 3D renders and animations on the web using framer-motion, three.js, and React Three Fiber, enriching the visual experience for our users. Furthermore, I designed automated build pipelines for Unity C# code generation using OpenAPI and our Next.js codebase, which enhanced our development efficiency and reduced manual errors, ultimately accelerating our product release cycles.`,
  },
  {
    name: "Parcel",
    filename: "parcel.jpg",
    link: "http://parcel.so",
    role: "Frontend Engineer",
    tags: ["React", "NextJS", "UI/UX Design", "Web3", "Storybook"],

    description: `During my tenure at the company, I made significant contributions to the development of new full-stack features, which catered to over 1,000 daily active users (DAU). I focused on optimizing our ORM using GraphQL, Postgres, and Node.js, ensuring efficient data management and robust backend performance. These enhancements were crucial in maintaining high user engagement and delivering a seamless experience for our growing user base.

    On the frontend, I built reusable components and data stores using React, Redux, and TypeScript, which streamlined the development process and improved code maintainability. My collaboration with the Head of Design was instrumental in creating a cohesive brand system and UI/UX patterns for our Web3 initiatives, using Figma. This effort ensured a consistent and intuitive user interface, aligning with our strategic goals to innovate within the Web3 space.
    
    Additionally, I designed and developed build pipelines with Rollup for several Next.js applications and Storybook, enhancing our deployment efficiency. I automated continuous integration pipelines using Docker, GitHub Actions, NPM, and Yarn scripts, which significantly reduced manual intervention and accelerated our release cycles. Furthermore, I integrated Web3 libraries such as web3-react, web3.js, and ethers.js to facilitate NFT purchases, thereby expanding our platform's capabilities and positioning us competitively in the blockchain technology market.`,
  },
  {
    name: "Vertebrae + Snapchat Acquisition",
    filename: "snap.jpg",
    link: "https://telanganatoday.com/snap-acquires-3d-ar-solutions-provider-vertebrae",
    role: "Asset Pipeline Engineer",
    tags: ["Python", "Blender", "NodeJS", "React", "WebGL", "AWS"],
    description: `During my time at the company, I focused on building automated pipelines using AWS, Docker, and Node.js to prepare over 50,000 3D assets for mobile augmented reality (AR) features. This involved creating robust systems that ensured the efficient processing and optimization of 3D models, making them suitable for mobile AR applications. These pipelines were critical in supporting our AR initiatives, enabling us to deliver high-quality, immersive experiences to users.

    I also developed backend features using Postgres and SQL to support digital assets and conversion jobs for over 100 retail vendors. This work was essential in managing and processing large volumes of digital content, ensuring seamless integration and functionality across our platform. By optimizing the backend infrastructure, I contributed to the scalability and reliability of our services, which were vital for maintaining strong partnerships with our retail vendors.
    
    In addition, I distributed bespoke React applications to support the workflow of several tech artists, utilizing React, Three.js, WebGL, and Electron. This provided a streamlined and efficient toolset for our artists, enhancing their productivity and creativity. Furthermore, I leveraged Blender's Python API and Node.js to automate processes such as decimation, re-meshing, and material re-assignment. This automation significantly reduced manual workload, improved consistency in asset preparation, and accelerated our production timelines.`,
  },
  {
    name: "Magic Leap + Spotify App",
    filename: "magicleap.png",
    link: "https://www.youtube.com/watch?v=Q89wSw-JUyM",
    role: "Lead Unity Developer",
    tags: ["Python", "Unity", "AWS", "MagicLeap", "LuminSDK"],
    description: `During my tenure at the company, I collaborated closely with the internal Magic Leap development team to expand the capabilities of the Lumin SDK using C++. This collaboration involved enhancing the SDK's features, which played a crucial role in developing more advanced and immersive AR experiences. My contributions helped push the boundaries of what was possible with the Magic Leap platform, providing a richer toolkit for developers.

    I also designed reusable game modules and core system architecture for AR and VR experiences using C# and Unity. These modules served as the foundational building blocks for various interactive applications, ensuring a high level of performance and scalability. By focusing on core architecture, I enabled more efficient development processes and facilitated the creation of complex AR and VR experiences.
    
    In addition, I built programmable shader effects and animations using HLSL, ShaderLab, and ShaderGraph. These shaders were integral in creating visually stunning and dynamic effects that enhanced the overall user experience. Moreover, I led a team of three peer developers in paired programming sessions, quality assurance, look development optimizations, and feature implementation. This leadership role involved mentoring and coordinating the team to ensure that our development goals were met effectively and efficiently.`,
  },
  {
    name: "Intel True VR",
    filename: "intel.png",
    link: "https://www.youtube.com/watch?v=-nWddbP-hgo",
    role: "Content Management Specialist",
    tags: ["Python", "Unity", "AWS", "FFMPEG", "VR"],
    description: `During my time at the company, I managed teams of developers in building a comprehensive CMS web application using PHP, jQuery, and Angular. This role involved overseeing the entire development process, from planning to execution, ensuring that the team met project deadlines and maintained high standards of code quality. My leadership was pivotal in delivering a robust and user-friendly CMS that catered to our clients' needs.

    I also developed and enhanced VR features within Unity, working across multiple platforms including Android, iOS, and Windows using C#. This work was essential in expanding our VR offerings and improving the overall user experience. In addition to development, I designed UX, UI, and user stories for both VR and full-stack web applications, ensuring that our products were intuitive and engaging for users.
    
    Leveraging AWS tools, I automated content pipelines between several backend frameworks, which streamlined our processes and improved efficiency. I also automated transcode jobs for VR content using Python and FFmpeg to ensure compatibility across various social media platforms. This automation was crucial in maintaining high-quality VR content distribution and reducing manual workload, thereby enhancing our team's productivity and output.`,
  },
  {
    name: "2019 Coachella AR",
    filename: "coachella.png",
    link: "https://vrscout.com/news/coachella-ar-interactive-stage",
    role: "Project Lead",
    tags: ["Unity", "Swift", "Project Management", "React Native", "AR"],
    description: portalsXrDescription,
  },
  {
    name: "2019 Atlanta Music Midtown",
    filename: "midtown.png",
    link: "https://www.marketingdive.com/news/hyundai-revs-up-ar-experience-in-music-midtown-festival-app/562954/",
    role: "Project Lead",
    tags: ["Unity", "Swift", "Project Management", "React Native", "AR"],
    description: portalsXrDescription,
  },
];

export default projects;
