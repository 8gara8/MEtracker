# Handoff: ME War Intel Brief — Site Redesign (v2)

## Overview

This handoff describes a visual + structural redesign of the **ME War Intel Brief** (`github.com/8gara8/MEtracker`). The existing Next.js 15 / Tailwind site is functional but visually basic; this redesign elevates it to an **editorial intelligence dossier** — broadsheet-grade typography married to SITREP data density.

The redesign keeps the existing information architecture (`/`, `/brief/[slug]`, `/archive`, `/timeline`, `/casualties`, `/clocks`, `/about`), preserves the frontmatter schema, and is compatible with the existing `lib/brief-data.ts` sidecar pattern. No schema changes; no routine/prompt changes. Purely a presenter-layer upgrade.

## About the Design Files

The files in `reference/` are **design references created in HTML/JSX with Babel-transpiled React** — a single-page prototype showing the intended look, interactions, and data behavior. **They are not production code to copy.** The task is to re-implement these designs in the existing Next.js 15 / App Router / Tailwind codebase, using the patterns already established there (server components where possible, `next/font/google`, Tailwind, `next-mdx-remote@6` for MDX, `recharts` for charts).

Key ports:
- Prototype uses inline React style objects → port to Tailwind classes + CSS variables for theming
- Prototype hand-rolls SVG charts → use `recharts` in the real codebase (except the clock dial, which is custom SVG — port as-is into a client component)
- Prototype simulates route switching with state → use real App Router routes
- Prototype has a theme switcher + day scrubber + tweaks panel → **do not port**; those are prototype-only

## Fidelity

**High-fidelity.** Colors, typography, spacing, and the visual system are final. Recreate pixel-perfectly using Tailwind + CSS variables. Where the prototype uses inline styles, the values (hex, px, font sizes) are exact and should be mirrored in Tailwind config.

---

## Design System

### Typography

Three Google Fonts, loaded via `next/font/google` in `app/layout.tsx`:

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Display / editorial | **Newsreader** (optical-size 6–72) | 400, 500, 600, 700, 400italic, 500italic | Headlines, drop caps, executive summary body, large state labels |
| UI / body | **IBM Plex Sans** | 300, 400, 500, 600, 700 | Nav, lists, body copy, buttons |
| Data / mono | **IBM Plex Mono** | 300, 400, 500, 600 | Numbers, tags, URLs, section numbers, clock labels |

**Replace existing Inter + JetBrains Mono imports.** The brief still needs a mono for tabular numerals; Plex Mono is the direct swap.

Recommended Tailwind setup (`tailwind.config.ts`):
```ts
fontFamily: {
  display: ['var(--font-newsreader)', 'Georgia', 'serif'],
  sans:    ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
  mono:    ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
}
```

### Color palette — Paper theme (primary, default)

| Token | Hex | Role |
|-------|-----|------|
| `bg` | `#F3EEE3` | Page background (warm off-white, newsprint feel) |
| `bg-deep` | `#EAE2D0` | Secondary surfaces, scrubber bar |
| `ink` | `#14161A` | Primary text, rules |
| `ink-soft` | `#3B3E45` | Body copy |
| `ink-mute` | `#6B6A62` | Metadata, captions |
| `rule` | `#14161A` | Major rules |
| `rule-soft` | `#C9BFA8` | Minor rules, card borders |
| `accent` | `#B33A2E` | Classified red — primary accent, escalation, stamps |
| `accent-amber` | `#C48416` | Mixed / degraded state |
| `accent-green` | `#3E6B3A` | De-escalating / ample state |
| `badge-esc-bg` | `#F1D9D5` | Red pill background |
| `badge-mix-bg` | `#F3E3C6` | Amber pill background |
| `badge-de-bg` | `#D9E3D3` | Green pill background |
| `card-bg` | `#FBF8F0` | Card surfaces |

**Drop the existing navy `#1B2A4A` / blue `#2E75B6` / `#CC0000`/`#FFE5E5` palette.** The new red is `#B33A2E` (deeper, printed-ink feel). No blue anywhere in v2.

### Color palette — Classified theme (optional dark)

Ship Paper first. Classified is a `[data-theme="classified"]` alternative; defer unless you want a dark mode switcher.

| Token | Hex |
|-------|-----|
| `bg` | `#0E0F12` |
| `bg-deep` | `#17181C` |
| `ink` | `#E8E6DF` |
| `ink-soft` | `#B9B6AC` |
| `ink-mute` | `#7C7A72` |
| `rule-soft` | `#2A2B30` |
| `accent` | `#E04A3C` |
| `accent-amber` | `#D99530` |
| `accent-green` | `#6BA366` |
| `card-bg` | `#15171B` |

### Spacing

Standard Tailwind scale. Key layout rhythms from the prototype:
- Page padding: `28px 44px` (comfortable density), max-width `1280px`, centered
- Section gap between major blocks: `28px`
- Card padding: `14px`
- Table cell padding: `8px 10px` header / `10px` body
- Section rule top-padding: `8px`, bottom-margin `16px`, top-margin `28px`

### Borders & rules

- **Cards**: `1px solid rule-soft` on `card-bg`
- **Section dividers**: `1px solid ink`, 8px padding above section title
- **Masthead double rule**: `3px double ink` below site title (broadsheet cue)
- **Table header**: `2px solid ink` bottom
- **Table rows**: `1px solid rule-soft` bottom
- **Source list items**: `1px dotted rule-soft` bottom (distinguish citations)
- **No shadows. No large border-radii.** Max `0px` — everything is sharp-cornered to reinforce the print/document feel. (Exception: buttons may have `0px` borders too.)

### Iconography

None. The design uses:
- Typography (labels like `§01`, `[01]`, `D07`)
- Rules and double-rules
- Colored filled square bullets (6×6px) before state words
- Unicode trajectory arrows: `↗` improving, `↘` worsening/draining, `→` stable, `·` n/a

Do not introduce Heroicons or Lucide. Do not use emoji.

### Badges / pills

Used for direction, risk, spillover, event direction.

```
inline-flex, align-baseline
padding: 3px 8px
font: mono, 11px, 0.08em tracking, uppercase
color: tone color (accent / accent-amber / accent-green / ink-mute)
background: badge-esc-bg / badge-mix-bg / badge-de-bg / transparent
border: 1px solid <tone-color>/25% alpha
border-radius: 0
leading 6×6px square bullet in tone color
```

Tone mapping:
- `escalating | critical | extreme | pivotal` → **esc** (red)
- `mixed | conditional | degraded | moderate` → **mix** (amber)
- `de-escalating | contained | low | ample | high` → **ok** (green)
- `none | n/a` → **neutral** (ink-mute)

⚠ **Clock polarity inversion**: for `political_will` and `active_deadlines`, "high" is *bad* for peace — so the tone for those clocks inverts (`high` → esc, `low` → ok). The `clockToneFor(key, state)` function in `reference/src/tokens.jsx` encodes this.

### Stamps

The top-right "UNCLASSIFIED · OSINT" stamp:
```
transform: rotate(-3deg)
border: 2px solid accent
color: accent
padding: 4px 10px
font: mono, 11px, 700 weight, 0.16em tracking, uppercase
opacity: 0.9
```

---

## Screens / Views

### 1. Masthead (all pages)

**Layout:** Top of page, full-width within the `1280px` max container.

- **Top strip** (bottom: `3px double ink`, padding-bottom: `8px`, margin-bottom: `14px`):
  - Left: `<span italic>ME</span> WAR — Intel Brief` — Newsreader 32px / weight 600 / letter-spacing -0.02em
  - Left-adjacent (with `1px solid rule-soft` left border, 12px left-padding): two-line mono, 10px, 0.12em tracking, uppercase, `ink-mute`:
    - `Twice daily · Asia/Taipei 09:00 · 18:00`
    - `Autonomous research · Git-audited · 3D @8gara8`
  - Right (margin-left: auto): UNCLASSIFIED · OSINT stamp

- **Nav strip** (bottom: `1px solid rule-soft`, font: sans 12px, 0.16em tracking, uppercase, 600 weight):
  - Tabs: `Today` / `Archive` / `Escalation` / `Casualties` / `Clocks` / `About`
  - Each tab: `10px 16px` padding, `1px solid rule-soft` right divider, transparent bg
  - **Active tab**: `bg: ink; color: bg` (fully inverted block)
  - Right-aligned mono meta: `{date}` · `DAY 014 / 014`

**Route mapping:**
- Today → `/`
- Archive → `/archive`
- Escalation → `/timeline`
- Casualties → `/casualties`
- Clocks → `/clocks`
- About → `/about`

Use Next `<Link>` + `usePathname()` to mark the active tab. Delete the current `components/layout/SiteHeader.tsx` in favor of this.

### 2. Today / Brief view (`/` and `/brief/[slug]`)

Home (`/`) should render the latest brief with this treatment. `/brief/[slug]` uses the same layout for the given slug.

**Layout order:**

1. **Dateline + title** (2-col grid, `1fr auto`, 24px gap)
   - Left:
     - Small accent label: `▮ Daily Brief · Day {NNN} · {weekday} {date}` — mono 10px 0.2em tracking uppercase, color `accent`, with a leading red filled block character (U+25AE) then the text. Margin-bottom: 8px.
     - H1 title: Newsreader, **52px**, line-height 1.02, letter-spacing -0.025em, weight 600, `text-wrap: balance`, color `ink`
   - Right (min-width 220px): "Headline indicators" mono label, then 4 rows of `label + pill`:
     - Direction (pill)
     - 7-day risk (pill)
     - Spillover (pill)
     - Ceasefire / 30d (raw mono value like `5%`)

2. **Section rule**: `§01 · MULTI-CLOCK STATE · 6 indicators`

3. **6-clock gauge strip** (see Clocks section below) — 6-column grid, 10px gap

4. **Exec Summary + Key Developments** (2-col grid `1.35fr 1fr`, 40px gap)
   - Left: Section rule `§02 · EXECUTIVE SUMMARY · {N} words`
     - Paragraph: Newsreader **18px**, line-height 1.52, `text-wrap: pretty`
     - First letter is a **drop cap**: `float: left; font-size: 58px; line-height: 0.9; weight 600; margin-right: 8px; margin-top: 6px; color: accent`
   - Right: Section rule `§03 · KEY DEVELOPMENTS · {N} items`
     - `<ol>` with custom styling: each `<li>` is a 2-col grid `auto 1fr`, 12px gap, 10px 0 padding, 1px solid rule-soft bottom
       - Leading number: mono 11px, color `accent`, `01`, `02`... zero-padded
       - Text: sans 14px, line-height 1.45, color `ink`

5. **Section rule**: `§04 · KEY EVENTS (TIMELINE) · {N} entries`

6. **Events table** — full-width, inside a `1px solid rule-soft` card on `card-bg`:
   - Columns: `#` (36px mono) / `Dir.` (110px pill) / `Impt.` (90px mono label, uppercase, accent+700 when "pivotal") / `Source` (120px, italic, ink-mute) / `Event` (flex, ink, weight 500) / `Summary` (flex, ink-soft) / `Impact` (flex, ink-soft)
   - Header: mono 10px, 0.14em tracking, uppercase, ink-mute, 2px solid ink bottom
   - Rows: 1px solid rule-soft bottom, `vertical-align: top`, 10px cell padding
   - **Mobile (`md:` breakpoint)**: collapse to card list (see existing `EventsTable.tsx` for the pattern to port)

7. **Section rule**: `§05 · CASUALTIES SNAPSHOT · Cumulative · ±24–48h Δ`

8. **Casualties block** — 4-column grid, 12px gap. One card per actor:
   - `card-bg`, `1px solid rule-soft`, `3px solid <actor-color>` on top
   - Actor label: mono 10px uppercase, ink-mute
   - KIA: Newsreader 30px weight 600 with `+{delta}` in mono 12px accent to the right
   - WIA: Newsreader 22px weight 500 ink-soft, `+{delta}` amber
   - Sparkbar at bottom: 24px tall, one bar per historical day, opacity ramps 0.35→0.95 left-to-right

   Actor colors:
   - US → `ink` (#14161A)
   - Israel → `accent` (#B33A2E)
   - Iran & Proxies → `accent-amber` (#C48416)
   - Other → `accent-green` (#3E6B3A)

9. **Section rule**: `§06 · STRATEGIC IMPLICATIONS · {N} threads`

10. **Implications** — 3-column grid, 28px gap. Each column:
    - `2px solid ink` top border, 12px padding-top
    - Accent label: mono 10px 0.16em uppercase accent: `IMPLICATION 01`
    - H3: Newsreader 22px line-height 1.15 weight 600
    - Body: sans 13.5px line-height 1.55 ink-soft

11. **Flash note + Sources** (2-col grid `1fr 1fr`, 40px gap)
    - Left: Section rule `§07 · EVENING FLASH (18:00 TPE) · +9h delta`
      - Card: `1px solid rule-soft`, **left border `3px solid accent`**, `card-bg`, 14px padding
      - Text: Newsreader 15px line-height 1.55
    - Right: Section rule `§08 · SOURCES · {N} citations`
      - `<ol>` with custom: each `<li>` a `auto 1fr` grid, 10px gap, 6px 0 padding, `1px dotted rule-soft` bottom
        - Leading: mono 11px ink-mute `[01]`
        - Name (ink) + `↳ url` on second line (ink-mute)

### 3. Archive (`/archive`)

- Section rule: `§01 · ARCHIVE · {N} briefs`
- Intro paragraph (sans 13px, ink-soft, max-width 640px, 18px bottom)
- Table with `1px solid rule-soft`:
  - Header row, 6-column grid (`70px 100px 1fr 120px 120px 100px`): `Day` / `Date` / `Title` / `Direction` / `Risk / 7d` / `C/F 30d` — mono 10px 0.14em uppercase ink-mute, 2px solid ink bottom, `card-bg`
  - Rows: 12px 14px padding, 1px solid rule-soft bottom
  - Hover/active: `3px solid accent` left border, `card-bg` background
  - Cells: Day number (mono 13px accent, zero-padded 3-digit), Date (mono 12px ink-soft), Title (Newsreader 16px line-height 1.3 weight 500), two pills, C/F percent

Use `<Link>` per row to `/brief/{slug}`.

### 4. Escalation timeline (`/timeline`)

- Section rule: `§01 · ESCALATION TIMELINE · DIRECTION BY DAY`
- Intro paragraph
- Big chart card (`1px solid rule-soft`, `card-bg`, 14px padding):
  - Recharts `LineChart`, 1000×260 viewBox, padding `{l:50, r:24, t:30, b:40}`
  - Y-axis mapping: `escalating=1`, `mixed=0`, `de-escalating=-1`
  - Background bands: red band for y∈[1,0] (opacity 0.06), amber for [0,-1], green for [-1,-1.5]
  - Band labels in right margin: mono 9px 0.14em uppercase, tone-colored, opacity 0.7
  - Gridlines at y=-1, 0, 1 (dashed `2 3`, rule-soft)
  - Connecting line: `ink`, 1.5px stroke
  - Points: radius 5, filled with direction-tone color, 1px ink stroke, clickable → navigate to `/brief/{slug}`
  - X-axis labels (below points): mono 10px ink-mute, `D01`, `D02`...

- Below the main chart, 2-col grid of small-multiple line charts:
  - `MiniLine`: 480×160 viewBox, `1px solid rule-soft`, `card-bg`, 12px 14px padding
  - Chart 1: 7-day risk (ordinal 1–4), `accent`
  - Chart 2: Ceasefire probability / 30d (%), `accent-green`

### 5. Casualties (`/casualties`)

- Section rule: `§01 · CUMULATIVE CASUALTIES — KIA BY ACTOR · max {totalKIA}`
- Intro paragraph
- Stacked area chart, 1000×320 viewBox, `1px solid rule-soft` card:
  - Stack order (bottom→top): Iran & Proxies (amber) → Israel (red) → Other (green) → US (ink)
  - Each band: opacity 0.5 fill + 1px stroke in actor color
  - 5 horizontal gridlines at 0/25/50/75/100% with mono 9px labels on the left
  - X-axis labels: every 2nd day, `D{n}`
- Legend below: colored 14×14 swatch + actor label + mono "KIA ___ · WIA ___"
- Section rule: `§02 · LATEST BRIEF SNAPSHOT` + repeat the 4-up CasualtiesBlock

### 6. Clocks dashboard (`/clocks`)

- Section rule: `§01 · MULTI-CLOCK DASHBOARD · Day {NNN} state`
- Intro paragraph
- **6 clock dials**, 3-column grid, 16px gap — each is:
  - `1px solid rule-soft` card on `card-bg`, 14px 14px 12px padding
  - Top row: label (mono 10px 0.12em uppercase ink-mute) + trajectory arrow+word right-aligned (mono 10px ink-mute)
  - **Gauge SVG** (viewBox 120×64, 64px tall):
    - 12-segment 180° arc, inner radius 44, outer radius 56, center (60, 56)
    - Segments filled in tone color up to `score/5 * 12` (where score: `critical=0, low=1, degraded=2, none=2.5, moderate=3, high=4, ample=5`)
    - Active segment opacity ramps 0.55→0.95 left-to-right
    - Inactive segments: `rule-soft`, opacity 0.5
    - Needle: black line from center to `40 * (cos(π + pct*π), sin(π + pct*π))`, 1.4px stroke
    - Center dot: 2.5 radius, `ink`
  - State label: Newsreader 22px weight 500, uppercase, letter-spacing -0.01em, colored by tone
  - **Sparkline** underneath: 120×18 viewBox, connected line of scores + 1.2r dots, tone color

- Section rule: `§02 · STATE HISTORY (HEATMAP) · {N} days`
- Heatmap table inside a card:
  - Header: "Clock" col (180px min) + one small col per day (`D01`, `D02`...), 34px wide
  - Rows: clock name + one tinted cell per day
  - Each cell: 28×22px block, tone-colored, opacity `0.25 + 0.65 * (score/5)`, `1px solid <tone>/25%`
  - Title attr shows `{state} · {trajectory}` on hover

### 7. About (`/about`)

Max-width `780px`. Sequential sections separated by section rules:

- `§01 · WHAT THIS IS` → Newsreader 20px paragraph ending with "`Produced by 3D (<mono accent>@8gara8</mono>).`"
- `§02 · CADENCE` → 2-col grid of two cards (`CadenceCard`), each with:
  - Accent-colored mono label
  - Newsreader 22px time line
  - Sans 13.5px body
  - Card 1: "Morning — full brief", "09:00 Asia/Taipei · 01:00 UTC"
  - Card 2: "Evening — flash", "18:00 Asia/Taipei · 10:00 UTC"
- `§03 · WHAT THIS IS NOT` → sans 14px `<ul>` list (paddingLeft 18px, line-height 1.65, ink-soft)
- `§04 · METHODOLOGY` → sans 14px paragraph mentioning MDX schema, `.data.ts` sidecar, GH Actions, auto-merge
- `§05 · CONTACT` → sans 14px, mentions `@8gara8` and the Issues tab

### 8. Footer (all pages)

Margin-top 48px, 16px padding-top, `1px solid rule-soft` top:
- Mono 10px 0.12em uppercase ink-mute
- Left-to-right: `© 2026 3D · @8gara8` · `Git audit trail: /content/briefs/` · `Next.js 15 · Vercel · MIT`
- Right: `Brief timestamp: {date}T01:00Z` in mono

---

## Section rule component

Used everywhere. Reusable primitive:

```tsx
<SectionRule number={1} label="Multi-clock state" right="6 indicators" />
```

Renders as:
- `1px solid ink` top border, `padding-top: 8px`, `margin-top: 28px`, `margin-bottom: 16px`
- Flex row, align-baseline, 12px gap
- `§01` — mono 10px 0.14em tracking, ink-mute
- `MULTI-CLOCK STATE` — sans 11px 0.22em tracking, uppercase, weight 600, ink
- Right (margin-left: auto): `6 INDICATORS` — mono 10px 0.1em uppercase, ink-mute

---

## Interactions & Behavior

- **Nav tabs**: standard `<Link>` navigation, active tab inverted via `usePathname()`.
- **Archive rows**: click → `/brief/{slug}`.
- **Timeline points**: click → `/brief/{slug}`.
- **Hover states**: optional. If added, keep them minimal — `card-bg` tint, no shadows, no animations longer than 120ms.
- **No animations required.** The document should feel printed.

### State management

- All data is statically generated from `content/briefs/*.mdx` at build time (unchanged from current pipeline).
- Home and archive need `generateStaticParams` + `generateMetadata`.
- Derived chart data comes from `scripts/build-data.ts` → `data/*.json`.

### Responsive behavior

- Desktop-first design (max-width 1280px). The current site's mobile treatment (horizontal scroll on tables, card-stack for EventsTable below `md`) carries forward unchanged.
- 6-column clock strip → 2-column below `md`.
- 3-column implications → 1-column below `md`.

---

## Design Tokens (Tailwind config)

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        paper: {
          bg:       '#F3EEE3',
          'bg-deep':'#EAE2D0',
          ink:      '#14161A',
          'ink-soft':'#3B3E45',
          'ink-mute':'#6B6A62',
          rule:     '#14161A',
          'rule-soft':'#C9BFA8',
          card:     '#FBF8F0',
        },
        accent: '#B33A2E',
        'accent-amber': '#C48416',
        'accent-green': '#3E6B3A',
        'badge-esc': '#F1D9D5',
        'badge-mix': '#F3E3C6',
        'badge-de':  '#D9E3D3',
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans:    ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'section':    '0.22em',  // section title
        'label':      '0.14em',  // mono labels
        'metalabel':  '0.12em',  // small ink-mute labels
        'pill':       '0.08em',  // pills
        'stamp':      '0.16em',  // stamps
      },
    }
  }
}
```

### Typography scale (ad-hoc but used consistently)

| Use | Size | Line-height | Weight | Tracking |
|-----|------|-------------|--------|----------|
| Masthead title | 32px display | 1.0 | 600 | -0.02em |
| Brief H1 | **52px display** | 1.02 | 600 | -0.025em |
| Implication H3 | 22px display | 1.15 | 600 | normal |
| Clock state | 22px display | 1.0 | 500 | -0.01em |
| Exec summary body | **18px display** | 1.52 | 400 | normal |
| Drop cap | 58px display | 0.9 | 600 | normal |
| Flash body | 15px display | 1.55 | 400 | normal |
| Nav | 12px sans | 1.0 | 600 | 0.16em upper |
| Body / list | 14px sans | 1.45–1.65 | 400 | normal |
| Section title | 11px sans | 1.0 | 600 | 0.22em upper |
| Pill | 11px mono | 1.0 | 400 | 0.08em upper |
| Mono meta | 10–11px mono | 1.0 | 400 | 0.12–0.14em upper |
| Tabular numbers | 13–30px mono | 1.0 | 400 | `font-variant-numeric: tabular-nums` |

---

## File-by-file porting map

Existing file → what to do:

| Existing file | Action |
|---|---|
| `app/globals.css` | Replace body font, background, and default colors. Add `@font-face`-less `next/font` usage via layout. |
| `app/layout.tsx` | Load Newsreader + Plex Sans + Plex Mono via `next/font/google` with `variable: '--font-…'`. Apply all three variables to `<body>`. |
| `app/page.tsx` | Render latest brief with new layout (see Today). |
| `app/brief/[slug]/page.tsx` | Same layout as home, but bound to slug. |
| `app/archive/page.tsx` | Replace with new Archive table treatment. |
| `app/timeline/page.tsx` | Replace chart usage with new Timeline treatment; keep recharts. |
| `app/casualties/page.tsx` | New stacked area + legend + latest snapshot. |
| `app/clocks/page.tsx` | New 6-dial grid + heatmap. |
| `app/about/page.tsx` | Replace with new About sections + CadenceCards. |
| `components/layout/SiteHeader.tsx` | Replace with `Masthead` (title + cadence meta + stamp + nav bar). |
| `components/layout/SiteFooter.tsx` | Replace with new footer (mono 10px strip). |
| `components/EscalationGauge.tsx` | Replaced by the "Headline indicators" vertical stack on the Today page. Kept as an MDX-facing component — update its styling to match the new pill system. |
| `components/EventsTable.tsx` | Restyle per Events table spec. Keep mobile card-collapse pattern. |
| `components/CasualtiesTable.tsx` | Replace with the 4-up `CasualtiesBlock` pattern. |
| `components/BriefHeader.tsx` | Replace with the Dateline + H1 + Headline-indicators block. |
| `components/BriefFooter.tsx` | Replace with Sources list styling (numbered `[01]`, url on second line). |
| `components/BriefView.tsx` | Compose the Today layout. |
| `components/ContinuitySidebar.tsx` | Remove — superseded by the persistent day-scrubber-free nav and archive. (If you want continuity links, add a small `PreviousBriefStrip` between the title and §01; out of scope for v2.) |
| `components/charts/EscalationTimeline.tsx` | Restyle with new palette + banded background + clickable points. |
| `components/charts/CasualtiesArea.tsx` | Restyle as stacked area per spec. |
| `components/charts/ClocksGrid.tsx` | **Biggest change** — replace the line-chart small multiples with the new 12-segment gauge dial component. The dial is hand-rolled SVG; lift the math directly from `reference/src/clocks.jsx` (`ClockDial`). |

### New components to create

- `components/SectionRule.tsx` — the `§NN · LABEL · right-meta` primitive
- `components/Pill.tsx` — normalized pill (replaces ad-hoc `Badge` inside EscalationGauge)
- `components/Stamp.tsx` — rotated bordered stamp
- `components/Sparkbar.tsx` — the column-bar mini in casualties cards
- `components/MiniLine.tsx` — small line chart (recharts or hand SVG)

### What NOT to port

- Theme switcher (paper/classified/terminal) — prototype only. Ship Paper only for v2.
- Day scrubber — prototype-only navigation aid.
- Tweaks panel — prototype-only authoring tool.

---

## Assets

No images, no icons, no emoji. Everything is type + SVG shapes.

**Google Fonts only** (via `next/font`):
- Newsreader (opsz 6..72, wghts 400/500/600/700, italic 400/500)
- IBM Plex Sans (wghts 300/400/500/600/700)
- IBM Plex Mono (wghts 300/400/500/600)

---

## Files in this bundle

```
design_handoff_site_redesign/
├── README.md                      ← you are here
└── reference/
    ├── ME War Intel Brief.html    ← open this in a browser to see the target design
    └── src/
        ├── data.jsx               ← 14 days of fixture data — shapes mirror brief frontmatter
        ├── tokens.jsx             ← THEMES, tone helpers, SectionRule, Pill, Stamp, Num, trajArrow
        ├── clocks.jsx             ← ClockDial (12-segment gauge SVG) + ClocksStrip
        ├── today.jsx              ← Masthead, TodayView, EventsTable, CasualtiesBlock, Sparkbar
        ├── views.jsx              ← ArchiveView, TimelineView, CasualtiesView, ClocksDashboardView, AboutView, MiniLine
        └── app.jsx                ← App shell wiring — theme switcher + day scrubber + tweaks (PROTOTYPE ONLY; do not port)
```

## Acceptance criteria

- [ ] Fonts: Newsreader + IBM Plex Sans + IBM Plex Mono loaded via `next/font/google`. Inter and JetBrains Mono removed.
- [ ] Palette in `tailwind.config.ts` matches token table. Old navy/blue palette removed.
- [ ] Homepage renders Masthead + Dateline+Title + Headline-indicators + 6-clock strip + 2-col (Exec Summary with drop-cap, Key Developments) + Events table + Casualties 4-up + Implications 3-up + Flash + Sources.
- [ ] `/archive`, `/timeline`, `/casualties`, `/clocks`, `/about` match their specs.
- [ ] Brief H1 is 52px Newsreader weight 600, `text-wrap: balance`.
- [ ] All section dividers use the `§NN · LABEL · right` pattern.
- [ ] Clock dials are 12-segment 180° gauges with needles, state label, and sparkline.
- [ ] No shadows, no border-radii, no emoji, no icons.
- [ ] `npm run build` passes; existing validators still pass; seed Day 1 brief renders.
- [ ] Casualty chart is a stacked area (not just a line).
- [ ] Heatmap on `/clocks` shows state across all days with opacity ramped by score.
