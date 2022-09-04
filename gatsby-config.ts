import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: `VibeLabz`,
        siteUrl: `https://www.vibelabz.xyz`,
        socials: [
            {
                name: 'Linkedin',
                value: 'https://linkedin.com/in/agcacho',
            },
            {
                name: 'Github',
                value: 'https://github.com/Tortillaguy',
            },
            {
                name: 'Instagram',
                value: 'https://instagram.com/cacho.vibez',
            },
            {
                name: 'Mail',
                value: 'mailto:hello@vibelabz.xyz',
            },
        ],
        skills: [
            {
                name: 'Python',
            },
            {
                name: 'React',
            },
            {
                name: 'Adobe Suite',
            },
            {
                name: 'Unity',
            },
            {
                name: 'Blender',
            },
            {
                name: 'UI/UX Design',
            },
            {
                name: 'Node JS',
            },
            {
                name: 'AR/VR',
            },
            {
                name: 'Notch',
            },
            {
                name: 'TouchDesigner',
            },
            {
                name: 'Resolume',
            },
        ],
        projects: [
            {
                name: 'Vertebrae + Snapchat Acquisition',
                image: 'snap.jpg',
                link: 'https://telanganatoday.com/snap-acquires-3d-ar-solutions-provider-vertebrae',
                role: 'Asset Pipeline Engineer',
            },
            {
                name: 'Magic Leap + Spotify App',
                image: 'magicleap.png',
                link: 'https://www.youtube.com/watch?v=Q89wSw-JUyM',
                role: 'Lead Unity Developer',
            },
            {
                name: 'Genies Prototype App',
                image: 'genies.jpg',
                link: 'https://twitter.com/genies/status/1387108982179786753',
                role: 'Unity Developer',
            },
            {
                name: 'Intel True VR',
                image: 'intel.png',
                link: 'https://www.youtube.com/watch?v=-nWddbP-hgo',
                role: 'Content Management Specialist',
            },
            {
                name: '2019 Coachella AR',
                image: 'coachella.png',
                link: 'https://vrscout.com/news/coachella-ar-interactive-stage',
                role: 'Project Lead',
            },
            {
                name: '2019 Atlanta Music Midtown',
                image: 'midtown.png',
                link: 'https://www.marketingdive.com/news/hyundai-revs-up-ar-experience-in-music-midtown-festival-app/562954/',
                role: 'Project Lead',
            },
        ],
        art: [
            {
                name: 'Letting Go',
                image: 'hand_pyro.jpg',
                link: 'https://www.instagram.com/p/CfDQL0IDLom/',
            },
            {
                name: 'Pyro Loop Demo',
                image: 'sword_pyro.jpg',
                link: 'https://www.instagram.com/p/Ca838TdjdLt/',
            },
            {
                name: 'Hardstyle Visuals',
                image: 'hardstyle.jpg',
                link: 'https://www.instagram.com/p/CWyubrnhLOb/',
            },
            {
                name: 'Oblivion - Fadead',
                image: 'oblivion.jpg',
                link: 'https://open.spotify.com/album/3zX3v6VEdFIFBqIuWUMEri?si=fM2K0ASZR7SQyiSG7DscOA',
            },
            {
                name: 'Spinning - Stryer & Fadead',
                image: 'spinning.jpg',
                link: 'https://open.spotify.com/track/6Qbp4oB4pTBFLHeuUp9Gic?si=968498fab2304bf5',
            },
            {
                name: 'Light It Up',
                image: 'light_it_up.jpg',
                link: 'https://www.instagram.com/p/CDzUCLdpSgX/',
            },
            {
                name: 'Chapas Mix Vol 4',
                image: 'chapas.jpg',
                link: 'https://soundcloud.com/chapas-music/chapas-mix-vol-4',
            },
            {
                name: 'Crystals',
                image: 'crystals.jpg',
                link: 'https://www.instagram.com/p/B_tTLXiJ_P2/',
            },
        ],
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // {
        //   resolve: "gatsby-plugin-prettier-eslint",
        //   options: {
        //     prettier: {
        //       patterns: [
        //         // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
        //         "**/*.{css,scss,less}",
        //         "**/*.{json,json5}",
        //         "**/*.{graphql}",
        //         "**/*.{md,mdx}",
        //         "**/*.{html}",
        //         "**/*.{yaml,yml}",
        //       ],
        //     },
        //     eslint: {
        //       patterns: "**/*.{js,jsx,ts,tsx}",
        //       customOptions: {
        //         fix: true,
        //         cache: true,
        //       },
        //     },
        //   },
        // },
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
}

export default config
