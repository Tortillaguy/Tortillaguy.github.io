# Adrian Cacho - Portfolio Website

## Project Overview

This is Adrian Cacho's personal portfolio website showcasing his work as a creative technologist, visual artist, and full-stack developer based in Venice, California. The site runs the **"Encore" design** (shipped July 2026): a near-black, poster-style landing page with monumental Anton typography, chromatic-fringe accents, and a disciplined acid-green highlight system, plus a matching case-study template for the `/work/*` pages. The design source of truth is the Pencil file at `~/Downloads/Portfolio Design/portfolio.pen` (frames: "Fable D — Encore", "Encore Mobile", "Encore Case Study" desktop/mobile) — keep code and canvas in sync when making visual changes.

**Live Site:** https://cacho.dev  
**Contact:** hello@cacho.dev  
**LinkedIn:** https://linkedin.com/in/agcacho  
**Instagram:** https://instagram.com/cacho.vibez

---

## About Adrian

Adrian Cacho (also known as "Cacho") is an innovative creative technologist with over 10 years of experience building scalable, high-performance web applications and immersive experiences. He has a proven track record of leading engineering teams to deliver high-impact products, including a content management platform that served over 100,000 digital assets at Looking Glass Factory (blocks.glass).

### Professional Identity

- **Visual Artist** - VJ performances at major events including Proper NYE 2024/2025 hosted by CRSSD
- **Designer** - UI/UX design, product design, and mobile-first design systems
- **Developer** - Full-stack engineer specializing in React, TypeScript, Next.js, and 3D web graphics

### Career Highlights

- **Senior Full-Stack Engineer** at TwelveLabs - April 2026 to August 2026
  - Built the agentic video editor UI for Rodeo, TwelveLabs' first application-layer product
  - Built backend agent tools, GraphQL integrations, and server-side ffmpeg video export
  - Built evaluation systems for the agentic editor and the Rodeo chatbot
- **AI Context Engineer** at First Resonance - December 2025 to April 2026
  - The company's first AI engineer hire
  - Built an MCP server exposing manufacturing/supply-chain operations to identify production bottlenecks
  - Built internal Claude Code infrastructure (skills, rules, automated tooling) for company-wide AI-assisted engineering
  - Built a Python/LangChain LLM agent for the company website on that same MCP server
- **Senior Full-Stack Engineer** at Napster Inc. (formerly Infinite Reality) - March 2025 to July 2025
- **Senior Full-Stack Engineer** at Looking Glass Factory - May 2023 to March 2025
  - Architected blocks.glass, the first-ever content sharing platform for holograms
  - Handled over 100,000 digital asset deployments
  - Optimized complex Postgres queries, reducing page load times by 70%
- **Full-Stack Engineer** at Parcel - March 2022 to January 2023
- **Full-Stack & DevOps Engineer** at Vertebrae (acquired by Snap Inc.) - August 2020 to March 2022
  - Scaled pipelines to deliver 50,000 digital media assets
- **Lead Software Engineer** at PortalsXR - January 2019 to January 2020
  - Led team of 6 to launch 6 mobile AR apps for high-traffic live events; on-site production support at Coachella and Music Midtown, 100% uptime for localized, time-coded AR
- **VR Engineer** at Moving Picture Company - February 2018 to February 2019
  - Collaborated with Magic Leap to develop a Spotify application

### Notable Achievements

- VJ'd for Proper NYE 2024 and 2025 hosted by CRSSD in San Diego
- Developed mobile AR experiences for Coachella 2019
- Created Magic Leap + Spotify app using C++
- Built blocks.glass - first content sharing platform for holograms
- Completed Polkadot Blockchain Academy (September 2025)
- Completed Disguise Virtual Production Accelerator (March 2023)

---

## Technical Stack

### Frontend Technologies
- **Frameworks:** React, Next.js, Astro, Svelte
- **Languages:** TypeScript, JavaScript
- **Styling:** Tailwind CSS, DaisyUI, Emotion
- **3D Graphics:** Three.js, React Three Fiber, OGL, WebGL
- **Animation:** Framer Motion, tailwindcss-animate
- **State Management:** Redux, Nanostores
- **Testing:** Playwright
- **Web3:** Web3.js, ethers.js

### Backend Technologies
- **Runtime:** Node.js
- **APIs:** GraphQL, REST APIs, tRPC
- **Databases:** PostgreSQL
- **Languages:** Python, Rust
- **Frameworks:** FastAPI, Substrate
- **AI/ML:** RAG, LangChain

### Infrastructure & DevOps
- **Cloud:** AWS (various services)
- **Containers:** Docker
- **CI/CD:** GitHub Actions, Vercel
- **Hosting:** Heroku, Modal

### Creative Tools
- **3D Modeling:** Blender, Unity, Unreal Engine
- **Live Visuals:** Resolume, Notch, TouchDesigner, Disguise
- **Design:** Figma, Adobe Suite (Premiere, Photoshop, After Effects)
- **Video Processing:** FFMPEG

### Other Tools
- Git, Auth0, Electron, Linear

---

## Site Architecture

### Technology Stack
- **Framework:** Astro 7 (Static Site Generator) — no framework JS on the homepage (one inline hero-reel script)
- **Styling:** Tailwind CSS 3 with custom `encore.*` design tokens (`tailwind.config.cjs`), wired via plain PostCSS (`postcss.config.cjs`) — the deprecated `@astrojs/tailwind` integration and DaisyUI were removed in the Astro 7 upgrade (Aug 2026)
- **Images:** `astro:assets` with responsive `widths`/`sizes` throughout
- **Content:** Markdown case studies rendered through a data-driven layout
- **Type Safety:** TypeScript (types at `src/types/index.ts`)

### Encore Design Tokens

- Colors (Tailwind `encore.*`): bg `#0B0B0E`, surface `#121217`, line `#26262E`, fg `#F2F0E9`, dim `#8E8E98`, accent `#BFFF38`, cyan `#4FE3FF`, magenta `#FF4BD8`
- Fonts: Anton (`font-display`), Space Grotesk (`font-grotesk`), Space Mono (`font-smono`), IBM Plex Mono (`font-plex`), Inter (`font-inter`)
- **Green discipline:** `encore.accent` appears ONLY on CTAs, section indexes, years/dates, links, and the hero's `& CODE.` line
- **Chromatic fringe:** cyan/magenta text-shadow pairs (`.fringe-sm` ±1px, `.fringe` ±2px, `.fringe-md` ±3px, `.fringe-lg` ±4px in `global.css`) — offset scales with type size; applied to the hero lockup and all big Anton display type
- No serif, no italic anywhere

### Project Structure

```
   public/
      assets/            # hero.jpg (og:image), PDFs
   src/
      components/
         Header.astro    # Encore nav (root-relative /#anchors)
         Footer.astro    # Three-item mono footer
         SectionHeader.astro  # Poster-header anatomy: rule + green index + Anton title + meta
      sections/          # Homepage sections (mounted by index.astro)
         Hero.astro      # Full-bleed photo, LIGHT,/MOTION,/& CODE. lockup, monumental name at the fold
         Productions.astro    # 01 - featured triptych + gallery cards
         Art.astro       # 02 - asymmetric mosaic
         Engineering.astro    # 03 - quote + credibility rows (link to /work/*)
         About.astro     # 04 - portrait + bio
         Contact.astro   # 05 - LET'S TALK + green CTA
      layouts/
         MainLayout.astro     # Header + slot + Footer (no 3D background)
         BlogPost.astro       # Encore engineering case-study layout (hero, spec strip, outcomes, prev/next, CTA)
         ArtPost.astro        # Encore art case-study layout (hero, MEDIUM/TOOLS strip, WATCH THE PIECE release link, prev/next, CTA)
      pages/
         index.astro     # Homepage: Hero -> Productions -> Art -> Engineering -> About -> Contact
         work/*.md       # Engineering case-study content (content-only; title/meta rendered by layout)
         art/*.md        # Art & motion case-study content (content-only; same rule)
      data/
         caseStudies.ts  # ORDERED engineering case-study registry: slug/title/role/timeline/stack/outcomes -> crumbs + prev/next
         artCaseStudies.ts  # ORDERED art case-study registry: slug/title/medium/tools/heroImage/releaseUrl -> crumbs + prev/next
         engineering.ts  # Homepage credibility rows (source of truth for roles/years where they overlap)
         productions.ts  # Production cards (featured triptych via images[])
         art.ts          # Art mosaic pieces + tags
      styles/global.css  # Fonts, fringe utilities, #case-study prose system (numbered H2s, ruled lists)
      types/index.ts     # Project type (year?, featured?, images?)
   docs/superpowers/plans/   # Implementation plans for the redesign (reference)
   tailwind.config.cjs  # encore.* tokens + font stacks
```

### Key Features

1. **Encore Design System**
   - Poster-style sections sharing one header anatomy (`SectionHeader.astro`)
   - Viewport-height hero: monumental ADRIAN CACHO lands exactly at the fold
   - Hover language: images scale 1.04 and card titles lerp to accent green, 0.2s ease-in-out

2. **Case-Study System**
   - TWO independent registries, deliberately kept separate so art pieces never renumber the engineering crumbs: `src/data/caseStudies.ts` (jobs, `/work/*`, `BlogPost.astro`, `CASE STUDY — NN / NN`) and `src/data/artCaseStudies.ts` (art, `/art/*`, `ArtPost.astro`, `PIECE — NN / NN`). Each layout imports only its own registry, so prev/next never crosses between the two
   - `src/data/caseStudies.ts` is the ordered registry (reverse-chronological) driving crumb numbers (`CASE STUDY — NN / NN`), prev/next nav, and the ROLE/TIMELINE/STACK spec strip
   - Markdown bodies are content-only; the layout renders title, metadata, KEY OUTCOMES panel, and CTA band
   - Prose styling via `#case-study` in `global.css`: CSS-counter numbered H2s, mono-caps H3s, left-ruled lists

3. **Project Showcases**
   - Featured production renders a 3-photo vertical triptych (`Project.images[]`)
   - Art mosaic keeps deliberate asymmetry (2fr/1fr alternating rows)
   - All data-driven from `src/data/`

4. **Performance**
   - No framework/bundled JS on the homepage (only the inline hero-reel script); no 3D background
   - `astro:assets` responsive images with explicit `widths` AND `sizes` everywhere (missing `sizes` defeats srcset — this was a real shipped bug, keep it)
   - Sitemap generated; dev server serves unoptimized images — judge performance from `pnpm build && pnpm preview`, never dev

---

## Site Sections

### Hero
Full-bleed autoplay sizzle reel (muted/looped/playsinline; AV1-only: `public/assets/sizzle2-wide.av1.mp4` + `sizzle2-portrait.av1.mp4`) layered over the festival photo, which stays underneath as the LCP paint and the fallback for browsers without AV1 decode (Safari needs A17/M3+ hardware — those users get the photo), blocked autoplay (iOS Low Power Mode), and `prefers-reduced-motion`. A small inline script in `Hero.astro` — the homepage's only client JS — gates on `canPlayType` AV1 support, picks the crop at the `sm` breakpoint (≤639px = portrait), swaps live on breakpoint change, skips the download entirely under `prefers-reduced-motion` or Data Saver, crossfades the video in over the photo on first `playing`, and pauses it offscreen via IntersectionObserver; scrim; mono meta (`VENICE, CA`); the `LIGHT, / MOTION, / & CODE.` lockup (fringe on LIGHT, and MOTION,; green & CODE.); monumental ADRIAN CACHO at the fold. Creative-first positioning: visuals lead, engineering is the depth. Reel edit masters (`sizzle*.mov`) and retired H.264 encodes are gitignored in the repo root — re-encode via ffmpeg libsvtav1 (`-an`, `+faststart`, yuv420p; ~1.7 Mbps wide / 800 kbps portrait at 720×1280). When replacing the reel, use new filenames (GitHub Pages caches at `max-age=600` with no immutable control).

### 01 PRODUCTIONS
Featured Proper NYE '25 triptych (three vertical photos) + Disguise VP Accelerator / Seismic / SD Renegade cards. Captions below images, never overlaid; green years.

### 02 ART & MOTION
Six pieces in an asymmetric mosaic (Letting Go, Pyro Demo, Hardstyle Visuals, Oblivion V2, Light It Up, Crystals); tags from `art.ts`. Cards link INTERNALLY to `/art/<slug>` case studies (no `target="_blank"`) — the outbound Instagram/Spotify/SoundCloud link now lives on the case-study page's WATCH THE PIECE panel, so a visitor lands on owned content first. All 12 entries in `art.ts` have a page; only these six are surfaced in the mosaic, the other six are reachable via prev/next.

### 03 ENGINEERING
Centered quote + credibility rows (company/role left, green years + tags right) linking to `/work/*` case studies. Linked rows carry an always-visible green `→` (far right; nudges right on hover while the company name lerps to accent). As of Aug 2026 every row is linked — Coachella AR was the last unlinked row and now points at `/work/coachella`. Framing: "the VJ who builds the software behind the show."

### 04 ABOUT
Iceland portrait (top-anchored crop) beside the rewritten bio with pulled-lead treatment; mono meta `VENICE, CA`.

### 05 LET'S TALK
Straight copy, green `HELLO@CACHO.DEV →` CTA, socials (Instagram/LinkedIn/Resume), three-item mono footer.

### /work/* Case Studies
Eleven markdown write-ups in the Encore case-study template (see Case-Study System above). Adding one = add the md file AND a registry entry in `caseStudies.ts` — unregistered slugs render without hero/crumb/nav.

### /art/* Case Studies
Twelve markdown write-ups in the Encore art template, one per `art.ts` piece. Adding one = add `src/pages/art/<slug>.md` (layout `../../layouts/ArtPost.astro`) AND an `artCaseStudies.ts` entry AND point the matching `art.ts` `link` at `/art/<slug>`. Bodies carry `<!-- TODO(adrian): ... -->` placeholders wherever a statement of personal intent belongs — they were written from the image, the toolchain, and the release target only, so intent was deliberately left for Adrian rather than invented.

---

## Development

### Commands

```bash
# Install dependencies
pnpm install

# Start development server (with network access)
pnpm dev

# Alternative dev server
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run Astro CLI commands
pnpm astro
```

### Development Notes

1. **Adding a Case Study**
   - Engineering goes in `src/pages/work/` + `caseStudies.ts`; art goes in `src/pages/art/` + `artCaseStudies.ts`. Never mix the two registries
   - Add `src/pages/work/<slug>.md` (content only — no H1, no date line; the layout renders those)
   - Add a registry entry in `src/data/caseStudies.ts` in the correct chronological position (crumb numbers and prev/next derive from array order)
   - If it's a job, add/update the matching `src/data/engineering.ts` row — roles/years must agree between the two files
   - Trailing "Tech Stack / Role / Key Outcomes" markdown blocks are forbidden — that metadata lives in the registry

2. **Adding Productions or Art**
   - `src/data/productions.ts` / `src/data/art.ts`; images to `src/assets/` (webp preferred); use `images: []` on a production for a multi-photo featured card

3. **Modifying Styles**
   - Tokens in `tailwind.config.cjs` (`encore.*`); utilities and `#case-study` prose in `src/styles/global.css`
   - Respect the green discipline and fringe scale rules (see Encore Design Tokens above)
   - Sync visual changes back to the pen file (`portfolio.pen`) — it is the design spec

4. **Claude Updates**
   - Update this CLAUDE.md accordingly when making notable changes to the codebase
   - Make minimal comments (if any) when making code changes

---

## Design Philosophy

Adrian's portfolio reflects his unique position at the intersection of technology and art:

1. **Light as Material** - chromatic fringe, photographic light, and one acid-green accent doing signal work — effects speak, copy stays straight
2. **Monumental Restraint** - huge Anton type contained within margins; darkness and scale without generic brutalism
3. **Creative-First, Engineering as Depth** - visuals convert event/brand clients; the engineering section is the proof that closes
4. **Performance** - static generation, zero homepage JS, responsive images
5. **Spec Fidelity** - the Pencil frames are the contract; code and canvas stay in agreement

---

## Education

- **University of California, Davis** - June 2015
  - Technocultural Studies B.A.
  - Film & Television B.A.
- **Disguise Virtual Production Accelerator** - Los Angeles, CA - March 2023
- **Polkadot Blockchain Academy** - Bali, Indonesia - September 2025
  - D'Apps Development

---

## Industry Knowledge

Augmented Reality, Virtual Reality, Web3, CI/CD, DevOps, LookDev, Art Pipelines, Product Design, Project Management, Live Events, Visual Production, Interactive Installations, AI/ML, RAG

---

## AI Assistant Context

### When working with this codebase:

1. **Respect the Creative Vision**
   - This is a personal portfolio showcasing Adrian's artistic and technical work
   - Maintain the visual aesthetic and animation style
   - Preserve the balance between technical professionalism and creative expression

2. **Technology Choices**
   - Astro static generation; no client JS on the homepage
   - Tailwind with `encore.*` tokens — never hardcode colors that have a token
   - `astro:assets` for all content images (always set `widths` AND `sizes`)

3. **Content Updates**
   - Projects are data-driven from TypeScript files
   - Easy to add new work by updating data files
   - MDX pages allow for rich, detailed project case studies

4. **Performance Considerations**
   - Static site generation is critical for fast load times
   - Images should be optimized before adding
   - Minimize JavaScript bundle size where possible

5. **Deployment**
   - GitHub Pages via the "Github Pages Astro CI" workflow — every push to `main` deploys cacho.dev (~1 min)
   - There is no staging: merging to main IS shipping

### Common Tasks:

- **Add a case study:** md file in `src/pages/work/` + registry entry in `src/data/caseStudies.ts` (+ `engineering.ts` row if it's a job)
- **Add a production/art piece:** `src/data/productions.ts` / `src/data/art.ts`
- **Change colors/type:** `tailwind.config.cjs` tokens + `src/styles/global.css` utilities
- **Change section layout:** the section file in `src/sections/` — then sync the pen file
- **Update the resume:** edit `resumes/site.md`, run `pnpm resume:site` (never edit the PDF)

---

## Notes for Future Development

- On Astro 7 (upgraded from 4 in Aug 2026: `ViewTransitions` → `ClientRouter`, markdown now rendered by Sätteri, Tailwind 3 via `postcss.config.cjs`). Astro 7 requires Node >= 22.12 — the deploy workflow's `withastro/action@v4` defaults to Node 22, keep them compatible
- Site features custom animations that may need performance optimization for mobile
- `pnpm-workspace.yaml` (`allowBuilds` for esbuild/sharp) is required - `pnpm build` fails at the install preflight without it
- `public/assets/Resume.pdf` (linked from Contact) is generated from `resumes/site.md` via `pnpm resume:site`. Edit the markdown, never the PDF. Keep it to 2 pages
- The tailored variants in `resumes/` (`3D.md`, `frontend.md`, `full-stack.md`) are still stale - no TwelveLabs or First Resonance. Note `full-stack.md` also carries a wrong title line ("Senior Unity Developer | 3D Graphics Engineer")
- `public/assets/Experience.pdf` is a LinkedIn profile export, not generated by the converter
- The Aug 2026 dependency refresh deleted all orphaned pre-Encore code (React/Three/Svelte components, Skills/Projects sections, DaisyUI). `About.astro` is live (mounted as section 04). Homepage client JS remains: hero-reel inline script + Astro's ClientRouter/prefetch
- `engQuote` in `src/data/engineering.ts` still frames the work as holograms/AR/realtime only, with no mention of the agentic AI work
- TwelveLabs and First Resonance are fully registered (caseStudies.ts entries 01/02 of 10, engineering rows, clean md) - when adding future case studies, follow the same two-file workflow

---

**Last Updated:** July 2026
**Maintained by:** Adrian Cacho
**AI Assistant:** Feel free to help with code improvements, new features, content updates, or technical documentation. Always maintain the creative and professional tone that reflects Adrian's dual identity as both artist and engineer.
