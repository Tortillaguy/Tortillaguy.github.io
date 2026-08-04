export interface ArtCaseStudy {
  slug: string;
  /** Uppercase display title rendered by the layout (Anton). */
  title: string;
  /** Optional mono sub-line under the title. */
  subtitle?: string;
  /** Short name for prev/next navigation. */
  shortTitle: string;
  /** Form of the piece, e.g. "3D MOTION", "GENERATIVE VIDEO", "COVER ART". */
  medium: string;
  /** Toolchain — mirrors the tags in art.ts. */
  tools: string[];
  /** Hero image filename in src/assets. */
  heroImage: string;
  heroCaption?: string;
  /** Where the piece was published. */
  releaseLabel: string;
  releaseUrl: string;
}

// Ordered to match src/data/art.ts. Index 0 renders as "01".
const artCaseStudies: ArtCaseStudy[] = [
  {
    slug: "left-with-you",
    title: "LEFT WITH YOU",
    shortTitle: "LEFT WITH YOU",
    medium: "GENERATIVE VIDEO",
    tools: ["COMFYUI", "GENERATIVE AI", "DAVINCI RESOLVE"],
    heroImage: "left_with_you.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/DMqt5AIulwS/",
  },
  {
    slug: "adieu",
    title: "ADIEU",
    shortTitle: "ADIEU",
    medium: "GENERATIVE VIDEO",
    tools: ["COMFYUI", "GENERATIVE AI", "DAVINCI RESOLVE"],
    heroImage: "adieu.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/C77rjuayjYA/",
  },
  {
    slug: "red-room",
    title: "RED ROOM",
    shortTitle: "RED ROOM",
    medium: "GENERATIVE VIDEO",
    tools: ["COMFYUI", "GENERATIVE AI", "DAVINCI RESOLVE"],
    heroImage: "red_room.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/C6HAlbTuTT6/",
  },
  {
    slug: "letting-go",
    title: "LETTING GO",
    shortTitle: "LETTING GO",
    medium: "3D MOTION",
    tools: ["OCTANE", "BLENDER", "EMBERGEN"],
    heroImage: "hand_pyro.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/CfDQL0IDLom/",
  },
  {
    slug: "pyro-demo",
    title: "PYRO DEMO",
    shortTitle: "PYRO DEMO",
    medium: "3D MOTION",
    tools: ["OCTANE", "CINEMA4D", "EMBERGEN"],
    heroImage: "sword_pyro.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/Ca838TdjdLt/",
  },
  {
    slug: "hardstyle-visuals",
    title: "HARDSTYLE VISUALS",
    shortTitle: "HARDSTYLE VISUALS",
    medium: "REALTIME MOTION",
    tools: ["NOTCH"],
    heroImage: "hardstyle.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/CWyubrnhLOb/",
  },
  {
    slug: "oblivion-v2",
    title: "OBLIVION V2",
    shortTitle: "OBLIVION V2",
    medium: "REALTIME MOTION",
    tools: ["NOTCH", "DAZ3D"],
    heroImage: "oblivionV2.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/CWyuobGhx3O/",
  },
  {
    slug: "oblivion",
    title: "OBLIVION",
    subtitle: "COVER ART — SPOTIFY RELEASE",
    shortTitle: "OBLIVION",
    medium: "COVER ART",
    tools: ["NOTCH", "DAZ3D"],
    heroImage: "oblivion.jpg",
    releaseLabel: "LISTEN ON SPOTIFY",
    releaseUrl:
      "https://open.spotify.com/album/3zX3v6VEdFIFBqIuWUMEri?si=fM2K0ASZR7SQyiSG7DscOA",
  },
  {
    slug: "spinning",
    title: "SPINNING",
    subtitle: "STRYER & FADEAD — SPOTIFY RELEASE",
    shortTitle: "SPINNING",
    medium: "COVER ART",
    tools: ["NOTCH"],
    heroImage: "spinning.jpg",
    releaseLabel: "LISTEN ON SPOTIFY",
    releaseUrl:
      "https://open.spotify.com/track/6Qbp4oB4pTBFLHeuUp9Gic?si=968498fab2304bf5",
  },
  {
    slug: "light-it-up",
    title: "LIGHT IT UP",
    shortTitle: "LIGHT IT UP",
    medium: "3D MOTION",
    tools: ["EMBERGEN", "CINEMA4D", "PHOTOSHOP", "OCTANE"],
    heroImage: "light_it_up.jpg",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/CDzUCLdpSgX/",
  },
  {
    slug: "chapas-mix-vol-4",
    title: "CHAPAS MIX VOL 4",
    subtitle: "COVER ART — SOUNDCLOUD RELEASE",
    shortTitle: "CHAPAS MIX VOL 4",
    medium: "COVER ART",
    tools: ["OCTANE", "CINEMA4D", "PHOTOSHOP"],
    heroImage: "chapas.jpg",
    releaseLabel: "LISTEN ON SOUNDCLOUD",
    releaseUrl: "https://soundcloud.com/chapas-music/chapas-mix-vol-4",
  },
  {
    slug: "crystals",
    title: "CRYSTALS",
    shortTitle: "CRYSTALS",
    medium: "3D MOTION",
    tools: ["OCTANE", "CINEMA4D", "HOUDINI"],
    heroImage: "crystals.jpg",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/B_tTLXiJ_P2/",
  },
];

export default artCaseStudies;
