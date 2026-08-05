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
  /**
   * Provenance line for the homepage mosaic card: was this commissioned client
   * work, or an exploration? One self-contained sentence — the cards are read
   * in any order, so a line must never depend on the one before it. Rendered
   * in the dim body face, deliberately not the accent colour: the card's
   * group-hover already turns the title accent, and a second accent on the
   * same card competes with that signal.
   * Only the six pieces picked into the mosaic in src/sections/Art.astro need
   * one; the rest render as they always have.
   */
  mosaicNote?: string;
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
    mosaicNote: "An exploration in pyrodynamics, built to loop.",
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
    mosaicNote: "Exploring a multi-app simulation and render workflow.",
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
    mosaicNote: "Commissioned realtime visuals for EDM concerts.",
  },
  {
    slug: "oblivion-v2",
    title: "OBLIVION",
    subtitle: "REALTIME CONCERT VISUALS",
    shortTitle: "OBLIVION",
    medium: "REALTIME MOTION",
    tools: ["NOTCH", "DAZ3D"],
    heroImage: "oblivionV2.webp",
    releaseLabel: "VIEW ON INSTAGRAM",
    releaseUrl: "https://www.instagram.com/p/CWyuobGhx3O/",
    mosaicNote: "Commissioned for EDM concerts, the figure reduced to contour and bloom.",
  },
  {
    slug: "oblivion",
    title: "OBLIVION",
    subtitle: "COVER ART — SPOTIFY RELEASE",
    // Distinguished from the realtime piece of the same name, so prev/next
    // navigation doesn't read OBLIVION -> OBLIVION.
    shortTitle: "OBLIVION (COVER ART)",
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
    mosaicNote: "Commissioned alongside the EDM concert visuals, rendered offline as flat art.",
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
    mosaicNote: "Exploring fracture simulation in Houdini.",
  },
];

export default artCaseStudies;
