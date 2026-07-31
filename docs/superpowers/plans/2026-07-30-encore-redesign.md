# Encore Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the cacho.dev landing page to match the approved "Fable D — Encore" (1440px) and "Encore Mobile" (390px) Pencil designs, on branch `redesign/encore`.

**Architecture:** Keep the existing Astro 4 static-site architecture (data-driven sections in `src/sections/`, data in `src/data/`), replace the visual system: new design tokens in Tailwind, new fonts, new section components. The 3D OGL background is removed on this branch — Encore is a solid near-black page with a photographic hero. A shared `SectionHeader.astro` implements the poster-header anatomy (hairline rule + green mono index + monumental Anton title + mono meta) used by all four sections.

**Tech Stack:** Astro 4, Tailwind 3 (+ DaisyUI retained for blog routes), astro:assets for images, Google Fonts.

## Global Constraints

- Branch: all work on `redesign/encore`; never commit to `main`.
- Design tokens (exact values, from the .pen file): bg `#0B0B0E`, surface `#121217`, line `#26262E`, fg `#F2F0E9`, dim `#8E8E98`, accent `#BFFF38`, cyan `#4FE3FF`, magenta `#FF4BD8`.
- Fonts: Anton (display), Space Grotesk 500/700 (lockup/UI), Space Mono 400/700 (metadata voice), IBM Plex Mono 400/600 (hero meta + nav), Inter 400/500/600 (body/quote).
- Acid green `#BFFF38` is used ONLY for: CTAs, section indexes, years, and the `& CODE.` lockup line. Nowhere else.
- No serif fonts anywhere. No italic. Copy is straight — no light metaphors.
- Chromatic fringe (cyan/magenta text-shadow) appears ONLY on the hero `LIGHT,` line.
- Blog routes (`src/pages/blog*`, `src/pages/work/*`) must keep building — do not remove DaisyUI, typography plugin, or existing color tokens they use.
- Verification: this repo has no test framework. Every task verifies with `pnpm build` (must exit 0) and, for visual tasks, a dev-server screenshot check at 1440px and 390px widths.
- Copy strings come verbatim from the design (reproduced in tasks below). Art/production tags come from `src/data/art.ts` / `src/data/productions.ts` (repo data is the source of truth; the design's per-piece tags were flagged unverified).

---

### Task 1: Branch, design tokens, fonts, hero asset

**Files:**
- Modify: `tailwind.config.cjs` (theme.extend.colors, theme.fontFamily)
- Modify: `src/styles/global.css` (font imports at top, fringe utilities, html background)
- Create: `public/assets/hero.jpg` (downloaded)
- Commit: this plan file (`docs/superpowers/plans/2026-07-30-encore-redesign.md`)

**Interfaces:**
- Produces: Tailwind classes `bg-encore-bg`, `text-encore-fg`, `text-encore-dim`, `text-encore-accent`, `bg-encore-accent`, `border-encore-line`, `bg-encore-surface`; font classes `font-display`, `font-grotesk`, `font-smono`, `font-plex`, `font-inter`; CSS utilities `.fringe`, `.fringe-sm`. All later tasks depend on these exact names.

- [ ] **Step 1: Create the branch**

```bash
cd /Users/cacho/Documents/repos/Tortillaguy.github.io
git checkout -b redesign/encore
```

- [ ] **Step 2: Add encore tokens to Tailwind**

In `tailwind.config.cjs`, inside `theme.extend.colors` (after the existing `"shadow-dark": "#1a1a1a",` entry), add:

```js
        encore: {
          bg: "#0B0B0E",
          surface: "#121217",
          line: "#26262E",
          fg: "#F2F0E9",
          dim: "#8E8E98",
          accent: "#BFFF38",
          cyan: "#4FE3FF",
          magenta: "#FF4BD8",
        },
```

Replace the existing `fontFamily` line (`fontFamily: { oxygen: ['"Oxygen Mono"', "monospace"] },`) with:

```js
    fontFamily: {
      oxygen: ['"Oxygen Mono"', "monospace"],
      display: ["Anton", "sans-serif"],
      grotesk: ['"Space Grotesk"', "sans-serif"],
      smono: ['"Space Mono"', "monospace"],
      plex: ['"IBM Plex Mono"', "monospace"],
      inter: ["Inter", "sans-serif"],
    },
```

- [ ] **Step 3: Fonts + fringe utilities + page background in global.css**

Replace line 1 of `src/styles/global.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Oxygen+Mono&family=Anton&family=Space+Grotesk:wght@500;700&family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500;600&display=swap");
```

In the `@layer base` block, change `html { @apply scroll-smooth bg-[#090909]; }` to:

```css
  html {
    @apply scroll-smooth bg-encore-bg;
  }
```

Append to the `@layer utilities` block:

```css
  /* Encore: chromatic fringe (hero LIGHT, line only) */
  .fringe {
    text-shadow: -2px 0 rgba(79, 227, 255, 0.5), 2px 0 rgba(255, 75, 216, 0.5);
  }
  .fringe-sm {
    text-shadow: -1px 0 rgba(79, 227, 255, 0.5), 1px 0 rgba(255, 75, 216, 0.5);
  }
```

- [ ] **Step 4: Download the hero image**

```bash
curl -L -o public/assets/hero.jpg "https://images.unsplash.com/photo-1474899310722-cb9b0f84bb91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
```

Expected: file exists, > 100KB. (Photo: Robert Bye / Unsplash — the image approved in the design.)

- [ ] **Step 5: Verify build**

Run: `pnpm build`
Expected: exit 0.

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.cjs src/styles/global.css public/assets/hero.jpg docs/superpowers/plans/2026-07-30-encore-redesign.md
git commit -m "feat(encore): design tokens, fonts, hero asset, implementation plan"
```

---

### Task 2: Data layer

**Files:**
- Modify: `src/types.ts` (extend `Project`)
- Modify: `src/data/productions.ts` (years + featured flag)
- Create: `src/data/engineering.ts`

**Interfaces:**
- Consumes: existing `Project` type in `src/types.ts` (fields `name`, `filename`, `link`, `role?`, `tags?`, `imageStyle?`).
- Produces: `Project.year?: string`, `Project.featured?: boolean`; `src/data/engineering.ts` exporting `engQuote: string`, `engMeta: string`, and `default engineering: EngRow[]` with `EngRow = { company: string; role: string; years: string; tags: string[] }`. Tasks 5 and 7 import these.

- [ ] **Step 1: Extend the Project type**

In `src/types.ts`, add to the `Project` interface (do not remove existing fields):

```ts
  year?: string;
  featured?: boolean;
```

- [ ] **Step 2: Update productions data**

In `src/data/productions.ts`, edit these entries in place (all other fields stay):

- `Proper NYE 2025`: add `year: "2025"`, `featured: true`, and change `role` to `"VJ — Resolume / Disguise · Hosted by CRSSD · Also NYE ’24"`.
- `Disguise Training`: add `year: "2023"`.
- `Seismic Events`: add `year: "2023"`.
- `SD Renegade`: add `year: "2023"`.

(`Love Oasis` and `Proper NYE 2024` remain in data for the detail pages but the Encore Productions section renders only `featured` + the three cards listed in Task 5.)

- [ ] **Step 3: Create engineering data**

Create `src/data/engineering.ts`:

```ts
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
```

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/types.ts src/data/productions.ts src/data/engineering.ts
git commit -m "feat(encore): data layer — production years, engineering rows"
```

---

### Task 3: SectionHeader component + Nav + Footer

**Files:**
- Create: `src/components/SectionHeader.astro`
- Modify: `src/components/Header.astro` (full rewrite of its template)
- Modify: `src/components/Footer.astro` (full rewrite of its template)

**Interfaces:**
- Consumes: Task 1 token classes.
- Produces: `SectionHeader.astro` with props `{ index: string; title: string; meta?: string; id?: string }` — used by Tasks 5, 6, 7, 8. Nav anchor ids produced by later tasks: `#home` (hero), `#shows` (productions), `#art`, `#engineering`, `#contact`.

- [ ] **Step 1: Create SectionHeader.astro**

```astro
---
interface Props {
  index: string;
  title: string;
  meta?: string;
  id?: string;
}
const { index, title, meta, id } = Astro.props;
---

<div id={id} class="w-full scroll-mt-16">
  <hr class="border-0 h-px bg-encore-line" />
  <div class="flex items-end justify-between pt-7 pb-6 md:pb-11">
    <div class="flex items-end gap-3 md:gap-5">
      <span class="font-smono text-encore-accent text-sm md:text-base leading-none pb-2 md:pb-4">{index}</span>
      <h2 class="font-display text-encore-fg leading-none text-[52px] md:text-[clamp(80px,9.7vw,140px)]">{title}</h2>
    </div>
    {meta && <span class="hidden md:block font-smono text-encore-dim text-xs tracking-[2px] pb-4">{meta}</span>}
  </div>
  {meta && <span class="md:hidden block font-smono text-encore-dim text-[10px] tracking-[2px] -mt-3 mb-6">{meta}</span>}
</div>
```

- [ ] **Step 2: Rewrite Header.astro**

Replace the entire template of `src/components/Header.astro` with:

```astro
<header class="flex items-center justify-between px-5 py-4 md:px-12 md:py-7">
  <a href="#home" class="font-plex font-semibold text-sm tracking-[2px] text-encore-fg">CACHO.DEV</a>
  <nav class="hidden md:flex items-center gap-9">
    {
      [
        ["LIVE", "#home"],
        ["SHOWS", "#shows"],
        ["ART", "#art"],
        ["ENGINEERING", "#engineering"],
        ["CONTACT", "#contact"],
      ].map(([label, href]) => (
        <a href={href} class="font-plex text-xs tracking-[2px] text-encore-dim hover:text-encore-fg transition-colors">
          {label}
        </a>
      ))
    }
  </nav>
  <a href="#contact" class="md:hidden font-plex text-xs tracking-[2px] text-encore-accent">CONTACT</a>
</header>
```

(Mobile: wordmark + CONTACT only, per the Encore Mobile design which carries no nav links.)

- [ ] **Step 3: Rewrite Footer.astro**

Replace the entire template of `src/components/Footer.astro` with:

```astro
<footer class="flex items-center justify-between px-5 pb-8 pt-16 md:px-12 md:pt-24 font-smono text-[10px] md:text-xs tracking-[2px] text-encore-dim">
  <span>© 2026 ADRIAN CACHO</span>
  <span class="hidden md:inline">VENICE, CA — EVERYWHERE</span>
  <span>VISUALS · MOTION · CODE</span>
</footer>
```

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/SectionHeader.astro src/components/Header.astro src/components/Footer.astro
git commit -m "feat(encore): section header anatomy, nav, footer"
```

---

### Task 4: Hero section

**Files:**
- Modify: `src/sections/Hero.astro` (full rewrite)

**Interfaces:**
- Consumes: `.fringe`/`.fringe-sm` utilities, token classes, `/assets/hero.jpg`.
- Produces: section with `id="home"`.

- [ ] **Step 1: Rewrite Hero.astro**

Replace the entire file with:

```astro
---
---

<section
  id="home"
  class="relative flex flex-col justify-between min-h-[760px] md:min-h-[880px] overflow-hidden"
>
  <img
    src="/assets/hero.jpg"
    alt="Festival stage under light beams with crowd silhouettes"
    class="absolute inset-0 w-full h-full object-cover"
    loading="eager"
    fetchpriority="high"
  />
  <div
    class="absolute inset-0"
    style="background: linear-gradient(180deg, rgba(10,10,10,0) 35%, rgba(10,10,10,0.8) 80%, #0A0A0A 100%);"
  >
  </div>

  <div class="relative flex justify-between px-5 py-4 md:px-12 md:py-6 font-plex text-[9px] md:text-xs tracking-[2px] text-encore-fg">
    <span>VJ — LIGHTING — MEDIA SERVERS</span>
    <span class="hidden md:inline">SAN DIEGO, CA — 32.7157°N</span>
    <span class="md:hidden">SD, CA</span>
  </div>

  <div class="relative px-5 md:px-12 font-grotesk font-medium leading-[0.95] text-[36px] md:text-[64px]">
    <p class="fringe-sm md:fringe text-encore-fg m-0">LIGHT,</p>
    <p class="text-encore-fg m-0">MOTION,</p>
    <p class="text-encore-accent m-0">&amp; CODE.</p>
  </div>

  <h1 class="relative font-display text-encore-fg leading-[0.82] m-0 px-5 pb-7 text-[96px] sm:hidden">
    ADRIAN<br />CACHO
  </h1>
  <h1 class="relative hidden sm:block font-display text-encore-fg leading-[0.82] m-0 text-center text-[clamp(96px,18vw,265px)] whitespace-nowrap">
    ADRIAN CACHO
  </h1>
</section>
```

- [ ] **Step 2: Verify build**

Run: `pnpm build`
Expected: exit 0.

- [ ] **Step 3: Visual check**

Run: `pnpm dev` and view `http://localhost:4321` at 1440px and 390px.
Expected: 1440 — meta row top, lockup mid-left (fringe visible on LIGHT,), single-line monumental name at bottom, photo + scrim behind. 390 — stacked ADRIAN/CACHO left-aligned at 96px, short meta (`SD, CA`), lockup at 36px.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Hero.astro
git commit -m "feat(encore): hero — photo, lockup, monumental name"
```

---

### Task 5: Productions section

**Files:**
- Modify: `src/sections/Productions.astro` (full rewrite)

**Interfaces:**
- Consumes: `SectionHeader.astro`, `productions` data (Task 2), images in `src/assets/` via `import.meta.glob`.
- Produces: section with `id="shows"`.

- [ ] **Step 1: Rewrite Productions.astro**

Replace the entire file with:

```astro
---
import SectionHeader from "../components/SectionHeader.astro";
import { Image } from "astro:assets";
import productions from "../data/productions";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/*.{webp,jpg,jpeg,png}",
  { eager: true }
);
const img = (filename: string) => images[`../assets/${filename}`]?.default;

const featured = productions.find((p) => p.featured);
const cards = ["Disguise Training", "Seismic Events", "SD Renegade"]
  .map((n) => productions.find((p) => p.name === n))
  .filter(Boolean);
---

<section class="px-5 md:px-12 pt-16 md:pt-24">
  <SectionHeader id="shows" index="01" title="PRODUCTIONS" meta="RESOLUME / DISGUISE / NOTCH" />

  {
    featured && (
      <a href={featured.link} target="_blank" rel="noopener noreferrer" class="block group">
        <div class="overflow-hidden border border-encore-line">
          <Image
            src={img(featured.filename)}
            alt={`${featured.name} — ${featured.role}`}
            class="w-full h-[320px] md:h-[560px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            style={featured.imageStyle}
            widths={[390, 800, 1440]}
          />
        </div>
        <div class="flex items-start justify-between gap-4 pt-3 pb-2">
          <div>
            <h3 class="font-grotesk font-bold text-encore-fg text-lg md:text-2xl m-0">PROPER NYE ’25 — SAN DIEGO</h3>
            <p class="font-smono text-encore-dim text-[10px] md:text-xs tracking-[1px] m-0 pt-1 uppercase">{featured.role}</p>
          </div>
          <div class="flex flex-col items-end shrink-0">
            <span class="font-smono text-encore-dim text-[10px] tracking-[2px]">FEATURED</span>
            <span class="font-smono text-encore-accent text-sm md:text-base">{featured.year}</span>
          </div>
        </div>
      </a>
    )
  }

  <div class="grid md:grid-cols-3 gap-5 pt-8">
    {
      cards.map((p) => (
        <a href={p.link} target="_blank" rel="noopener noreferrer" class="block group">
          <div class="overflow-hidden border border-encore-line">
            <Image
              src={img(p.filename)}
              alt={`${p.name} — ${p.role}`}
              class="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              style={p.imageStyle}
              widths={[390, 800]}
            />
          </div>
          <div class="flex items-center justify-between pt-3">
            <span class="font-grotesk font-bold text-encore-fg text-sm md:text-base uppercase">{p.name}</span>
            <span class="font-smono text-encore-accent text-xs">{p.year}</span>
          </div>
          <p class="font-smono text-encore-dim text-[10px] tracking-[1px] uppercase m-0 pt-1">
            {p.role}
            {p.tags ? ` — ${p.tags.join(" / ")}` : ""}
          </p>
        </a>
      ))
    }
  </div>
</section>
```

- [ ] **Step 2: Verify build**

Run: `pnpm build`
Expected: exit 0. (If `astro:assets` errors on a filename, confirm the file exists in `src/assets/` — `proper_2025.webp`, `disguise.webp`, `seismic.webp`, `renegade.webp` are all present.)

- [ ] **Step 3: Visual check**

Dev server at 1440: featured full-width card, caption below image, `FEATURED / 2025` right-aligned, three cards in a row beneath. At 390: everything stacks full-width.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Productions.astro
git commit -m "feat(encore): productions — featured card + gallery cards"
```

---

### Task 6: Art & Motion section

**Files:**
- Modify: `src/sections/Art.astro` (full rewrite)

**Interfaces:**
- Consumes: `SectionHeader.astro`, `art` data, `import.meta.glob` pattern from Task 5.
- Produces: section with `id="art"`.

- [ ] **Step 1: Rewrite Art.astro**

Replace the entire file with:

```astro
---
import SectionHeader from "../components/SectionHeader.astro";
import { Image } from "astro:assets";
import art from "../data/art";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/*.{webp,jpg,jpeg,png}",
  { eager: true }
);
const img = (filename: string) => images[`../assets/${filename}`]?.default;

const pick = (n: string) => art.find((p) => p.name === n);
// Desktop mosaic rows: [wide, narrow], [narrow, wide], [half, half]
const rows = [
  { pieces: [pick("Letting Go"), pick("Pyro Demo")], cols: "md:grid-cols-[2fr_1fr]" },
  { pieces: [pick("Hardstyle Visuals"), pick("Oblivion V2")], cols: "md:grid-cols-[1fr_2fr]" },
  { pieces: [pick("Light It Up"), pick("Crystals")], cols: "md:grid-cols-2" },
];
---

<section class="px-5 md:px-12 pt-16 md:pt-28">
  <SectionHeader id="art" index="02" title="ART & MOTION" meta="NOTCH / TOUCHDESIGNER / BLENDER" />

  <div class="flex flex-col gap-8 md:gap-9">
    {
      rows.map((row) => (
        <div class={`grid grid-cols-1 gap-8 md:gap-5 ${row.cols}`}>
          {row.pieces.filter(Boolean).map((p) => (
            <a href={p.link} target="_blank" rel="noopener noreferrer" class="block group">
              <div class="overflow-hidden border border-encore-line">
                <Image
                  src={img(p.filename)}
                  alt={p.name}
                  class="w-full h-[300px] md:h-[420px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  style={p.imageStyle}
                  widths={[390, 900, 1440]}
                />
              </div>
              <div class="flex items-center justify-between pt-3">
                <span class="font-grotesk font-bold text-encore-fg text-sm md:text-base uppercase">{p.name}</span>
                <span class="font-smono text-encore-dim text-[10px] tracking-[1px] uppercase text-right">
                  {(p.tags ?? []).join(" · ")}
                </span>
              </div>
            </a>
          ))}
        </div>
      ))
    }
  </div>
</section>
```

- [ ] **Step 2: Verify build**

Run: `pnpm build`
Expected: exit 0.

- [ ] **Step 3: Visual check**

1440: three rows with 2fr/1fr → 1fr/2fr → 1fr/1fr asymmetry, captions below, tags right. 390: single column, full-width pieces.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Art.astro
git commit -m "feat(encore): art & motion — asymmetric mosaic"
```

---

### Task 7: Engineering section

**Files:**
- Create: `src/sections/Engineering.astro`

**Interfaces:**
- Consumes: `SectionHeader.astro`; `engineering`, `engQuote`, `engMeta` from `src/data/engineering.ts` (Task 2).
- Produces: section with `id="engineering"`; imported by Task 8's `index.astro`.

- [ ] **Step 1: Create Engineering.astro**

```astro
---
import SectionHeader from "../components/SectionHeader.astro";
import engineering, { engQuote, engMeta } from "../data/engineering";
---

<section class="px-5 md:px-12 pt-16 md:pt-28">
  <SectionHeader id="engineering" index="03" title="ENGINEERING" meta={engMeta} />

  <p class="font-inter font-medium text-encore-fg text-base md:text-[19px] leading-[1.6] max-w-[640px] mx-auto text-center py-6 md:py-10 m-0">
    {engQuote}
  </p>

  <div>
    {
      engineering.map((row) => (
        <div class="border-t border-encore-line py-6 md:py-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <div class="flex items-baseline justify-between md:block">
              <h3 class="font-grotesk font-bold text-encore-fg text-base md:text-xl m-0">{row.company}</h3>
              <span class="md:hidden font-smono text-encore-accent text-xs">{row.years}</span>
            </div>
            <p class="font-smono text-encore-dim text-[10px] md:text-xs tracking-[1px] m-0 pt-2">{row.role}</p>
          </div>
          <div class="hidden md:flex md:flex-col md:items-end md:shrink-0">
            <span class="font-smono text-encore-accent text-sm">{row.years}</span>
            <span class="font-smono text-encore-dim text-xs tracking-[1px] pt-2">{row.tags.join(" / ")}</span>
          </div>
          <span class="md:hidden block font-smono text-encore-dim text-[10px] tracking-[1px] pt-1">{row.tags.join(" / ")}</span>
        </div>
      ))
    }
  </div>
</section>
```

- [ ] **Step 2: Verify build**

Run: `pnpm build`
Expected: exit 0.

- [ ] **Step 3: Visual check**

1440: company+role left, green years + tags right, hairline top rules. 390: two-line stack — company + green year on line 1, role then tags below.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Engineering.astro
git commit -m "feat(encore): engineering — quote + credibility rows"
```

---

### Task 8: Contact section + page assembly

**Files:**
- Modify: `src/sections/Contact.astro` (full rewrite)
- Modify: `src/pages/index.astro` (section list)
- Modify: `src/layouts/MainLayout.astro` (remove 3D background)

**Interfaces:**
- Consumes: `SectionHeader.astro`, `Engineering.astro` (Task 7).
- Produces: final page composition: Hero → Productions → Art → Engineering → Contact.

- [ ] **Step 1: Rewrite Contact.astro**

Replace the entire file with:

```astro
---
import SectionHeader from "../components/SectionHeader.astro";
---

<section class="px-5 md:px-12 pt-16 md:pt-32">
  <SectionHeader id="contact" index="04" title="LET’S TALK" meta="BOOKING SPRING 2026" />

  <div class="md:flex md:items-center md:justify-between md:gap-12 pt-2">
    <p class="font-inter text-encore-dim text-sm md:text-base leading-[1.6] max-w-[440px] m-0">
      Festivals, clubs, tours, installations — or software that doesn't exist yet.
      Based in Venice, CA. Working everywhere.
    </p>
    <a
      href="mailto:hello@cacho.dev"
      class="mt-8 md:mt-0 flex md:inline-flex items-center justify-center bg-encore-accent text-encore-bg font-grotesk font-bold text-sm md:text-base tracking-[1px] px-8 py-4 hover:opacity-90 transition-opacity w-full md:w-auto shrink-0"
    >
      HELLO@CACHO.DEV →
    </a>
  </div>

  <div class="flex flex-col md:flex-row gap-4 md:gap-12 pt-12 md:pt-16 font-smono text-xs tracking-[2px]">
    <a href="https://www.instagram.com/cacho.vibez/" target="_blank" rel="noopener noreferrer" class="text-encore-dim hover:text-encore-fg transition-colors">INSTAGRAM — @CACHO.VIBEZ</a>
    <a href="https://www.linkedin.com/in/agcacho/" target="_blank" rel="noopener noreferrer" class="text-encore-dim hover:text-encore-fg transition-colors">LINKEDIN — /IN/AGCACHO</a>
    <a href="/assets/Resume.pdf" target="_blank" class="text-encore-dim hover:text-encore-fg transition-colors">RESUME ↓</a>
  </div>
</section>
```

- [ ] **Step 2: Rewire index.astro**

Replace the imports and body of `src/pages/index.astro`:

```astro
---
import BaseHead from "../components/BaseHead.astro";
import { SITE_DESCRIPTION } from "../config";
import MainLayout from "../layouts/MainLayout.astro";
import Hero from "../sections/Hero.astro";
import Productions from "../sections/Productions.astro";
import Art from "../sections/Art.astro";
import Engineering from "../sections/Engineering.astro";
import Contact from "../sections/Contact.astro";
import { ViewTransitions } from "astro:transitions";
---

<!doctype html>
<html lang="en" data-theme="cmyk">
  <head>
    <BaseHead
      title={"Adrian Cacho – Live Visuals, Motion & Code"}
      description={SITE_DESCRIPTION}
      image="assets/hero.jpg"
    />
    <ViewTransitions />
  </head>

  <MainLayout>
    <Hero />
    <Productions />
    <Art />
    <Engineering />
    <Contact />
  </MainLayout>
</html>
```

(`Projects`, `About`, `Skills`, `Scripts` imports are removed. The `Projects.astro`/`About.astro`/`Skills.astro` files stay in the repo — blog/work pages may reference shared pieces, and deleting them is not required for the redesign.)

- [ ] **Step 3: Remove the 3D background from MainLayout.astro**

Replace the entire file with:

```astro
---
import Footer from "../components/Footer.astro";
import Header from "../components/Header.astro";
---

<body class="bg-encore-bg">
  <Header />
  <slot />
  <Footer />
</body>
```

(Removes `BGLoader`, `BGSkeleton`, and the noscript banner — the page no longer requires JS for its visuals.)

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: exit 0. Also confirm blog routes built (output contains `dist/blog/index.html` or equivalent — check `ls dist`).

- [ ] **Step 5: Visual check**

Dev server, 1440 and 390: full page flow Hero → 01 → 02 → 03 → 04 → footer, matching the two Pencil frames.

- [ ] **Step 6: Commit**

```bash
git add src/sections/Contact.astro src/pages/index.astro src/layouts/MainLayout.astro
git commit -m "feat(encore): contact, page assembly, remove 3D background"
```

---

### Task 9: Full-page QA pass

**Files:**
- Modify: whatever the QA findings require (expected: spacing/type-size tweaks only)

**Interfaces:**
- Consumes: everything above.
- Produces: the finished branch, ready for review/PR.

- [ ] **Step 1: Build + full visual sweep**

Run: `pnpm build && pnpm preview`
At 1440px and 390px, compare each section against the Pencil frames ("Fable D — Encore", "Encore Mobile") checking, in order:
1. Hero: fringe on LIGHT, only; `& CODE.` green; name contained (not cropped) at both sizes.
2. Section headers: rule + green index + Anton title, meta right (desktop) / below (mobile).
3. Productions: captions below images (never overlaid); green years.
4. Art: asymmetry present at desktop; no stretched/squashed images.
5. Engineering: green years right (desktop) / inline (mobile).
6. Contact: green button full-width on mobile.
7. Green appears nowhere except CTAs/indexes/years/`& CODE.`.
8. No serif, no italic anywhere.

- [ ] **Step 2: Fix anything found, re-verify, commit**

```bash
git add -A
git commit -m "fix(encore): QA pass — visual parity with pencil frames"
```

- [ ] **Step 3: Confirm branch state**

Run: `git log --oneline main..redesign/encore`
Expected: the commits from Tasks 1–9. Do not merge or push without the user's go-ahead.
