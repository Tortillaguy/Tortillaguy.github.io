# Encore Case Study Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the 8 `/work/*` case-study pages to the approved "Encore Case Study" pen design (frames `pTbaU` desktop / `pxVKK` mobile), on the existing `redesign/encore` branch.

**Architecture:** `BlogPost.astro` becomes the Encore case-study layout: a data-driven hero (wayfinding, crumb, fringed Anton title, ROLE/TIMELINE/STACK spec strip) + markdown prose styled via a scoped `#case-study` CSS layer (H2s numbered with CSS counters) + end matter (KEY OUTCOMES panel, prev/next, CTA band). Per-page metadata lives in a single ordered registry `src/data/caseStudies.ts` (reverse-chronological, newest first) — md files stay content-only. Nav/footer arrive via the already-shared `MainLayout`.

**Tech Stack:** Astro 4, Tailwind 3, astro:assets, existing encore tokens/fonts (Task 1 of the encore-redesign plan).

## Global Constraints

- Branch: all work on `redesign/encore`; never commit to `main`.
- Encore tokens/fonts as defined in `tailwind.config.cjs` (`encore.bg #0B0B0E`, `surface #121217`, `line #26262E`, `fg #F2F0E9`, `dim #8E8E98`, `accent #BFFF38`; `font-display` Anton, `font-grotesk` Space Grotesk, `font-smono` Space Mono, `font-plex` IBM Plex Mono, `font-inter` Inter). Do not add or change tokens except the one `.fringe-md` utility below.
- Chromatic fringe scales with type size (from the pen frames): title 104px → ±3px (`.fringe-md`, new), title 44px mobile → ±1px (`.fringe-sm`), H2 38px → ±2px, H2 26px mobile → ±1px.
- Acid green ONLY on: `← WORK` link, H2/crumb/outcome indexes, TIMELINE value, prose links, KEY OUTCOMES label, CTA button, hover title color. Nowhere else.
- No serif, no italic anywhere on these pages.
- `src/data/engineering.ts` is the source of truth for role/years/stack where a row exists for the same engagement.
- Do not modify homepage section components (`src/sections/*`) or `Header.astro`/`Footer.astro`.
- Verification contract: this repo has no test framework — `pnpm build` exit 0 (9 pages) per task, plus the dist greps named in each task. Visual QA versus the pen frames is Task 4.
- Copy strings in this plan were extracted from the pen frames — transcribe verbatim (em dashes, `×`, `→` included).

---

### Task 1: Case-study registry + md content migration

**Files:**
- Create: `src/data/caseStudies.ts`
- Modify: all 8 files in `src/pages/work/` (remove H1 title + bold date line from each body)

**Interfaces:**
- Produces: `CaseStudy` interface and default export `caseStudies: CaseStudy[]` ordered reverse-chronologically. Task 2 imports `caseStudies` and relies on: `slug`, `title`, `subtitle?`, `shortTitle`, `role`, `timeline`, `stack: string[]`, `heroImage?`, `heroCaption?`, `outcomes?: string[]`, `outcomeStack?`.

- [ ] **Step 1: Create the registry**

Create `src/data/caseStudies.ts`:

```ts
export interface CaseStudy {
  slug: string;
  /** Uppercase display title rendered by the layout (Anton). */
  title: string;
  /** Optional mono sub-line under the title. */
  subtitle?: string;
  /** Short name for prev/next navigation. */
  shortTitle: string;
  role: string;
  timeline: string;
  stack: string[];
  /** Optional hero image filename in src/assets. */
  heroImage?: string;
  heroCaption?: string;
  /** Optional KEY OUTCOMES panel rows. */
  outcomes?: string[];
  /** Optional mono stack line under the outcomes rows. */
  outcomeStack?: string;
}

// Ordered reverse-chronologically (newest first). Index 0 renders as "01".
const caseStudies: CaseStudy[] = [
  {
    slug: "pba",
    title: "POLKADOT BLOCKCHAIN ACADEMY IN BALI",
    shortTitle: "POLKADOT ACADEMY",
    role: "D'APPS DEVELOPMENT — GRADUATE",
    timeline: "SEPTEMBER 2025",
    stack: ["RUST", "SUBSTRATE", "POLKADOT"],
  },
  {
    slug: "infinite-reality",
    title: "BUILDING THE METAVERSE AT NAPSTER INC.",
    subtitle: "FORMERLY INFINITE REALITY",
    shortTitle: "NAPSTER INC.",
    role: "SENIOR FULL-STACK DEVELOPER",
    timeline: "MARCH 2025 — JULY 2025",
    stack: ["REACT", "NEXTJS", "AWS", "POSTGRES"],
    outcomes: [
      "Built full-stack platform infrastructure for immersive metaverse experiences",
      "Optimized 3D asset delivery and progressive loading for virtual environments",
      "Designed Postgres database architecture for virtual worlds and user state",
    ],
    outcomeStack: "REACT · NEXT.JS · TYPESCRIPT · NODE.JS · POSTGRESQL · AWS",
  },
  {
    slug: "lkg",
    title: "BUILDING THE WORLD'S FIRST HOLOGRAM CMS",
    subtitle: "LOOKING GLASS FACTORY — BLOCKS.GLASS",
    shortTitle: "LOOKING GLASS FACTORY",
    role: "SENIOR FULL-STACK ENGINEER",
    timeline: "MAY 2023 — MARCH 2025",
    stack: ["REACT", "WEBGL", "POSTGRES"],
  },
  {
    slug: "parcel",
    title: "BUILDING WEB3 COMMERCE AT PARCEL",
    shortTitle: "PARCEL",
    role: "FULL-STACK ENGINEER",
    timeline: "MARCH 2022 — JANUARY 2023",
    stack: ["REACT", "WEB3", "ETHERS.JS"],
  },
  {
    slug: "pokemoon",
    title: "BUILDING 3D NFTS IN THE WILD WEST OF WEB3",
    subtitle: "POKEMOON",
    shortTitle: "POKEMOON",
    role: "CREATOR — 3D NFT PROJECT",
    timeline: "2021 — 2022",
    stack: ["BLENDER", "WEB3"],
  },
  {
    slug: "vertebrae",
    title: "SCALING 3D COMMERCE: FROM VERTEBRAE TO SNAP INC.",
    shortTitle: "VERTEBRAE → SNAP",
    role: "ASSET PIPELINE ENGINEER",
    timeline: "AUGUST 2020 — MARCH 2022",
    stack: ["PYTHON", "BLENDER", "WEBGL"],
  },
  {
    slug: "mpc",
    title: "BUILDING THE FUTURE WITH MAGIC LEAP AT MPC",
    shortTitle: "MPC × MAGIC LEAP",
    role: "VR ENGINEER",
    timeline: "FEBRUARY 2018 — FEBRUARY 2019",
    stack: ["C++", "MAGIC LEAP SDK"],
  },
  {
    slug: "intel",
    title: "BRINGING VR TO LIVE SPORTS: INTEL TRUE VR",
    shortTitle: "INTEL TRUE VR",
    role: "CONTENT MANAGEMENT SPECIALIST",
    timeline: "2017 — 2018",
    stack: ["UNITY", "FFMPEG", "VR"],
  },
];

export default caseStudies;
```

(Role/years/stack for infinite-reality, lkg, vertebrae, mpc, intel align with `src/data/engineering.ts`. The pba/parcel/pokemoon strings are sourced from the md titles and CLAUDE.md — flag them for user review in the task report.)

- [ ] **Step 2: Add outcomes for the remaining 7 case studies**

For each of the other 7 entries, read that slug's md file in `src/pages/work/` and add an `outcomes` array of 2–4 rows summarizing accomplishments **stated in that file** (no invention — every row must paraphrase a claim present in the md body). Add `outcomeStack` only when the md names a concrete stack list. If a file genuinely states no outcomes, leave the field off (the panel is optional).

- [ ] **Step 3: Strip H1 + date lines from all 8 md bodies**

In each file below, delete exactly the H1 line and the bold date line (and the blank line between them). The frontmatter block (`layout: ../../layouts/BlogPost.astro`) stays. All other body content stays.

| File | Delete line 1 | Delete line 2 |
|---|---|---|
| `infinite-reality.md` | `# Building the Metaverse at Napster Inc. <br> (Infinite Reality)` | `**March 2025 - July 2025**` |
| `intel.md` | `# Bringing VR to Live Sports: Intel True VR` | `**~2017 - 2018**` |
| `lkg.md` | `# Building the World's First Hologram CMS at Looking Glass Factory` | `**May 2023 - March 2025**` |
| `mpc.md` | `# Building the Future with Magic Leap at MPC` | `**February 2018 - February 2019**` |
| `parcel.md` | `# Building Web3 Commerce at Parcel` | `**March 2022 - January 2023**` |
| `pba.md` | `# Polkadot Blockchain Academy in Bali` | `**September 2025**` |
| `pokemoon.md` | `# Building 3D NFTs in the Wild West of Web3` | `**~2021 - 2022**` |
| `vertebrae.md` | `# Scaling 3D Commerce: From Vertebrae to Snap Inc.` | `**August 2020 - March 2022**` |

After editing, verify no md body still contains a line starting with `# ` (single hash):

Run: `grep -n "^# " src/pages/work/*.md`
Expected: no output.

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: exit 0, 9 pages.

- [ ] **Step 5: Commit**

```bash
git add src/data/caseStudies.ts src/pages/work/
git commit -m "feat(case-study): registry + md bodies stripped to content-only"
```

---

### Task 2: BlogPost.astro rewrite (hero, prose shell, end matter)

**Files:**
- Modify: `src/layouts/BlogPost.astro` (full rewrite)

**Interfaces:**
- Consumes: `caseStudies` (Task 1), encore tokens, `.fringe-sm`/`.fringe-md` utilities (fringe-md added in Task 3 — until then the class is inert, which is fine for this task's build check).
- Produces: `<article id="case-study">` wrapping the markdown slot — Task 3's CSS targets that id.

- [ ] **Step 1: Rewrite BlogPost.astro**

Replace the entire file with:

```astro
---
import BaseHead from "../components/BaseHead.astro";
import { SITE_DESCRIPTION } from "../config";
import MainLayout from "../layouts/MainLayout.astro";
import { ViewTransitions } from "astro:transitions";
import { Image } from "astro:assets";
import caseStudies from "../data/caseStudies";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/*.{webp,jpg,jpeg,png}",
  { eager: true }
);

const slug = Astro.url.pathname.split("/").filter(Boolean).pop();
const idx = caseStudies.findIndex((c) => c.slug === slug);
const cs = idx >= 0 ? caseStudies[idx] : undefined;
const total = String(caseStudies.length).padStart(2, "0");
const num = (i: number) => String(i + 1).padStart(2, "0");
const prev = cs && idx > 0 ? caseStudies[idx - 1] : undefined;
const next = cs && idx < caseStudies.length - 1 ? caseStudies[idx + 1] : undefined;
const heroImg = cs?.heroImage ? images[`../assets/${cs.heroImage}`]?.default : undefined;
const meta = cs
  ? [
      { label: "ROLE", value: cs.role, green: false },
      { label: "TIMELINE", value: cs.timeline, green: true },
      { label: "STACK", value: cs.stack.join(" / "), green: false },
    ]
  : [];
---

<html lang="en" data-theme="cmyk" class="bg-encore-bg">
  <head>
    <BaseHead
      title={cs ? `Adrian Cacho – ${cs.title}` : "Adrian Cacho – Case Study"}
      description={SITE_DESCRIPTION}
      image="assets/hero.jpg"
    />
    <ViewTransitions />
  </head>
  <MainLayout>
    {
      cs && (
        <section class="px-5 pt-6 md:px-12 md:pt-12">
          <div class="flex items-center justify-between pb-[18px] md:pb-7">
            <a
              href="/#engineering"
              class="font-smono text-encore-accent text-[11px] md:text-[13px] tracking-[2px] hover:text-encore-fg transition-colors"
            >
              ← WORK
            </a>
            <span class="font-smono text-encore-dim text-[11px] md:text-[13px] tracking-[2px]">
              CASE STUDY — {num(idx)} / {total}
            </span>
          </div>
          <hr class="border-0 h-px bg-encore-line" />
          <h1 class="fringe-sm md:fringe-md font-display text-encore-fg leading-[1.05] m-0 pt-6 md:pt-9 text-[44px] md:text-[104px] [text-wrap:balance]">
            {cs.title}
          </h1>
          {cs.subtitle && (
            <p class="font-smono text-encore-dim text-[10px] md:text-[13px] tracking-[3px] m-0 pt-3">{cs.subtitle}</p>
          )}
          <div class="mt-6 md:mt-10 md:grid md:grid-cols-3">
            {meta.map((m) => (
              <div class="border-t border-encore-line py-3 md:py-[18px] md:pr-6 flex items-baseline justify-between gap-4 md:block">
                <span class="font-smono text-encore-dim text-[10px] md:text-[11px] tracking-[2px]">{m.label}</span>
                <span
                  class:list={[
                    "font-smono text-[10px] md:text-[14px] tracking-[1px] text-right md:text-left md:mt-[10px] md:block",
                    m.green ? "text-encore-accent" : "text-encore-fg",
                  ]}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>
      )
    }

    {
      cs && heroImg && (
        <section class="px-5 pt-2 md:px-12">
          <div class="overflow-hidden border border-encore-line">
            <Image
              src={heroImg}
              alt={cs.heroCaption ?? cs.title}
              class="w-full h-[220px] md:h-[440px] object-cover"
              widths={[390, 800, 1440]}
              sizes="100vw"
            />
          </div>
          {cs.heroCaption && (
            <p class="font-smono text-encore-dim text-[10px] md:text-xs tracking-[1px] m-0 pt-2 md:pt-3">{cs.heroCaption}</p>
          )}
        </section>
      )
    }

    <article id="case-study" class="w-full max-w-[720px] mx-auto px-5 md:px-0 pt-8 md:pt-[72px]">
      <slot />
    </article>

    {
      cs?.outcomes && (
        <section class="px-5 md:px-12 pt-10 md:pt-[72px]">
          <div class="bg-encore-surface border border-encore-line p-5 md:p-11 md:pt-10">
            <span class="font-smono text-encore-accent text-[11px] md:text-xs tracking-[3px]">KEY OUTCOMES</span>
            <div class="pt-2 md:pt-3">
              {cs.outcomes.map((o, i) => (
                <div class:list={["flex gap-3 md:gap-[18px] py-3 md:py-[14px]", i > 0 && "border-t border-encore-line"]}>
                  <span class="font-smono text-encore-dim text-[11px] md:text-[13px] pt-[2px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p class="font-inter text-encore-fg text-sm md:text-base leading-relaxed m-0">{o}</p>
                </div>
              ))}
            </div>
            {cs.outcomeStack && (
              <p class="font-smono text-encore-dim text-[10px] md:text-xs tracking-[1px] m-0 pt-3 md:pt-4">{cs.outcomeStack}</p>
            )}
          </div>
        </section>
      )
    }

    {
      cs && (prev || next) && (
        <section class="px-5 md:px-12 pt-10 md:pt-20">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            {prev ? (
              <a href={`/work/${prev.slug}`} class="group border-t border-encore-line pt-4 md:border-0 md:pt-0">
                <span class="font-smono text-encore-dim text-[10px] md:text-xs tracking-[2px] block">← PREVIOUS</span>
                <span class="font-grotesk font-bold text-encore-fg group-hover:text-encore-accent transition-colors duration-200 ease-in-out text-lg md:text-2xl uppercase block pt-2">
                  {prev.shortTitle}
                </span>
              </a>
            ) : (
              <span class="hidden md:block" />
            )}
            {next && (
              <a href={`/work/${next.slug}`} class="group border-t border-encore-line pt-4 md:border-0 md:pt-0 md:text-right">
                <span class="font-smono text-encore-dim text-[10px] md:text-xs tracking-[2px] block">NEXT →</span>
                <span class="font-grotesk font-bold text-encore-fg group-hover:text-encore-accent transition-colors duration-200 ease-in-out text-lg md:text-2xl uppercase block pt-2">
                  {next.shortTitle}
                </span>
              </a>
            )}
          </div>
        </section>
      )
    }

    {
      cs && (
        <section class="px-5 md:px-12 pt-12 md:pt-[72px]">
          <hr class="border-0 h-px bg-encore-line" />
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-8 md:pt-9">
            <p class="font-grotesk font-bold text-encore-fg text-[17px] md:text-xl m-0">NEED THIS KIND OF DEPTH ON YOUR TEAM?</p>
            <a
              href="mailto:hello@cacho.dev"
              class="flex md:inline-flex items-center justify-center bg-encore-accent text-encore-bg font-grotesk font-bold text-sm md:text-[15px] tracking-[1px] px-7 py-4 hover:opacity-90 transition-opacity w-full md:w-auto shrink-0"
            >
              HELLO@CACHO.DEV →
            </a>
          </div>
        </section>
      )
    }
  </MainLayout>
</html>
```

Notes locked in by this code (do not second-guess): PREVIOUS points to the newer neighbor (`idx - 1`, lower number), NEXT to the older (`idx + 1`); ends hide their link. The title wraps naturally with `text-wrap: balance` instead of the pen's pre-broken lines (canvas necessity, not a spec requirement). An unknown slug renders just the styled prose column (defensive fallback, no crash).

- [ ] **Step 2: Verify build + dist**

Run: `pnpm build`
Expected: exit 0. Then:
Run: `grep -l "CASE STUDY —" dist/work/*/index.html | wc -l`
Expected: `8`.
Run: `grep -o "id=\"case-study\"" dist/work/lkg/index.html`
Expected: `id="case-study"`.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BlogPost.astro
git commit -m "feat(case-study): encore layout — hero, spec strip, end matter"
```

---

### Task 3: Markdown prose styling (`#case-study` CSS layer + fringe-md)

**Files:**
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: the `#case-study` article id from Task 2.
- Produces: `.fringe-md` utility (used by Task 2's title — the class is already in the markup).

- [ ] **Step 1: Add the fringe-md utility**

In `src/styles/global.css`, in the `@layer utilities` block directly after the existing `.fringe-lg` rule, add:

```css
  .fringe-md {
    text-shadow: -3px 0 rgba(79, 227, 255, 0.5), 3px 0 rgba(255, 75, 216, 0.5);
  }
```

- [ ] **Step 2: Scope the two leaky legacy selectors**

Still in `global.css` (`@layer components`), the old blog styles leak onto all pages via bare element selectors. Change:

```css
  #blog-post p,
  li {
```
to:
```css
  #blog-post p,
  #blog-post li {
```

and change:

```css
  #blog-post ol,
  ul {
    @apply !my-2;
  }
```
to:
```css
  #blog-post ol,
  #blog-post ul {
    @apply !my-2;
  }
```

- [ ] **Step 3: Add the case-study prose layer**

Append inside the `@layer components` block:

```css
  /* Encore case-study prose (markdown rendered into #case-study) */
  #case-study {
    counter-reset: cs-section;
  }

  #case-study p {
    @apply font-inter text-encore-fg text-base md:text-[18px] leading-[1.65] my-5;
  }

  #case-study strong,
  #case-study b {
    @apply font-semibold text-encore-fg;
  }

  #case-study a {
    @apply text-encore-accent no-underline hover:text-encore-fg transition-colors;
  }

  #case-study h2 {
    counter-increment: cs-section;
    @apply font-display font-normal text-encore-fg text-[26px] md:text-[38px] leading-tight border-t border-encore-line mt-12 md:mt-14 pt-[18px] md:pt-6 mb-5;
    text-shadow: -1px 0 rgba(79, 227, 255, 0.5), 1px 0 rgba(255, 75, 216, 0.5);
  }

  #case-study h2::before {
    content: counter(cs-section, decimal-leading-zero);
    @apply block font-smono text-encore-accent text-xs md:text-sm tracking-[1px] mb-2 md:mb-3;
    text-shadow: none;
  }

  #case-study h3 {
    @apply font-smono font-normal text-encore-fg text-[13px] tracking-[3px] uppercase mt-10 mb-4;
    text-shadow: none;
  }

  #case-study ul {
    @apply list-none p-0 my-6 space-y-3 md:space-y-4;
  }

  #case-study li {
    @apply border-l-2 border-encore-line pl-[14px] font-inter text-encore-dim text-sm md:text-base leading-relaxed m-0;
    text-shadow: none;
  }

  #case-study li strong {
    @apply font-grotesk font-bold uppercase tracking-[1px] text-encore-fg text-[13px] md:text-[15px];
  }

  #case-study img {
    @apply w-full border border-encore-line my-8;
  }

  #case-study code {
    @apply font-smono text-encore-accent bg-encore-surface px-1.5 py-0.5 text-sm;
  }

  #case-study pre {
    @apply bg-encore-surface border border-encore-line p-4 my-6 overflow-x-auto;
  }

  #case-study pre code {
    @apply bg-transparent p-0 text-encore-fg;
  }

  #case-study blockquote {
    @apply border-0 border-l-2 border-solid border-encore-accent pl-4 my-6 not-italic text-encore-fg;
  }
```

Then, after the closing brace of `@layer components` (top level of the file, near the keyframes), add the desktop fringe strength for H2s:

```css
@media (min-width: 768px) {
  #case-study h2 {
    text-shadow: -2px 0 rgba(79, 227, 255, 0.5), 2px 0 rgba(255, 75, 216, 0.5);
  }
}
```

- [ ] **Step 4: Verify build + rendered classes**

Run: `pnpm build`
Expected: exit 0.
Run: `grep -o "fringe-md" dist/work/lkg/index.html | head -1`
Expected: `fringe-md`.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css
git commit -m "feat(case-study): prose styling system — numbered H2s, ruled lists, fringe-md"
```

---

### Task 4: Visual QA versus the pen frames

**Files:**
- Modify: whatever the findings require (expected: spacing/type tweaks only)

**Interfaces:**
- Consumes: everything above; pen frames `pTbaU` (1440) and `pxVKK` (390) in `/Users/cacho/Downloads/Portfolio Design/portfolio.pen`.

- [ ] **Step 1: Build + serve + screenshot sweep**

Run `pnpm build && pnpm preview -- --port 4323`, then with the Playwright MCP tools screenshot `http://localhost:4323/work/infinite-reality` (the specimen page) and one other page (e.g. `/work/lkg`) at 1440×900 and 390×844. Check, in order:

1. Hero: `← WORK` green; crumb `CASE STUDY — 02 / 08` (infinite-reality is 02); fringed Anton title wraps without clipping; subtitle mono; spec strip 3 columns desktop / stacked hairline rows mobile; TIMELINE green, ROLE/STACK off-white.
2. Prose: 720px measure centered; 18px/1.65 body; H2s render rule + green `01`-style counter + fringed Anton (±1 mobile / ±2 desktop); H3s letterspaced mono caps; lists left-ruled with bold Grotesk leads; `strong` off-white semibold; no serif/italic anywhere.
3. End matter: KEY OUTCOMES surface panel (green label, numbered rows, mono stack line) on pages that have outcomes; prev/next with green hover titles and correct neighbors (02's PREVIOUS = POLKADOT ACADEMY, NEXT = LOOKING GLASS FACTORY); CTA band with green button (full-width on mobile); shared footer.
4. Background `#0B0B0E` at all scroll depths; nav links work (root-relative).
5. Green appears nowhere outside the allowed list (Global Constraints).
6. Crumb numbering: spot-check `/work/pba` shows `01 / 08` and `/work/intel` shows `08 / 08` (no NEXT link on intel, no PREVIOUS on pba).

- [ ] **Step 2: Fix findings, re-verify, kill the preview server**

Minimal targeted edits only; re-run `pnpm build` (exit 0) and re-screenshot affected areas.

- [ ] **Step 3: Commit**

```bash
git add -A -- ':!.superpowers' ':!dist'
git commit -m "fix(case-study): QA pass — visual parity with pen frames"
```

(If Step 2 produced no changes, skip the commit.)
