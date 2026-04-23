# Handoff: ME War — Intel Brief (Daily Brief View)

## Overview

A public, twice-daily open-source intelligence brief on the 2026 US–Israeli war on Iran (Operation Epic Fury). The canonical daily "Today" view synthesizes six analytical clocks, the day's key developments, strategic implications, casualty figures, an evening flash note, and source citations into a single scannable + readable layout.

This handoff documents the latest structural revision (**v3**) of the Today view, which reorganizes the page so that:

1. The **escalation gauge** (six clocks) and its explanations live in the same proximity — both the per-gauge micro-explanations and the overall write-up sit with the dials at the top.
2. **Key developments** is a single combined section that balances color-scan cues (direction badges) with full per-event write-ups (summary + impact).
3. **Casualties details** sits directly below **Casualties snapshot** so the narrative context lives next to the numbers.
4. **Sources** appears at the very bottom of the brief.

## About the Design Files

The files in this bundle are **design references created as a self-contained HTML + inline-JSX prototype**. They are NOT production code to drop into your repo. The task is to recreate this design in the target codebase's existing environment — the original production target is **Next.js 15 on Vercel** with MDX-backed content in `content/briefs/` — using that codebase's established patterns (MDX frontmatter schema, the `.data.ts` sidecar pattern, Tailwind or CSS Modules, and the project's existing type system). If no environment exists yet, Next.js 15 App Router + MDX is the intended target.

## Fidelity

**High-fidelity (hifi).** All colors, typography, spacing, borders, and layout decisions are final and should be reproduced pixel-accurately. The three themes (paper, classified, terminal) are all shipped. Exact hex values, font stacks, and type scales are documented in the **Design Tokens** section below.

## Page Structure (Today view, v3)

The Today view is a single scrolling page. Sections appear in this order top-to-bottom. Each section has a consistent **SectionRule** header (`§NN` number + uppercase label + optional right-side meta).

### Masthead (fixed top)

- Wordmark line: serif display (Newsreader 600, 26px) — italic `ME` + uppercase `WAR`, then muted `· Intel Brief`.
- Right side: mono 10px caption `Twice daily · 3D @8gara8`, then a rotated red stamp `UNCLASSIFIED · OSINT`.
- Double-rule underline (`3px double` in `theme.rule`).
- Sub-bar: tab nav (Today / Archive / Escalation / Casualties / Clocks / About) — 12px uppercase, 0.16em tracking. Active tab inverts (ink background, bg foreground). Right side shows `YYYY-MM-DD · DAY 0NN / 0MM`.

### Dateline + Title

- Dateline: mono 10px accent red, 0.2em tracking — `▮ Daily Brief · Day 0NN · Weekday YYYY-MM-DD`.
- H1: Newsreader 600, 48px, line-height 1.05, letter-spacing -0.025em, `maxWidth: 24ch`, `textWrap: balance`.

### Headline indicators bar

Four-column grid, 1px rule border, 3px accent-red left border, `theme.cardBg` background.

Columns: **Direction** · **7-day risk** · **Spillover** · **Ceasefire · 30d** (as `NN%`).

Each cell: 10px mono label with 8×8 color chip; value rendered in Newsreader 600 / 30px / uppercase (or non-uppercase for the percentage).

Tone mapping (drives chip + value color):
- `esc` (red) ← `critical`, `extreme`, `escalating`
- `mix` (amber) ← `conditional`, `mixed`
- `ok` (green) ← `contained`, `low`, `de-escalating`
- `neutral` (ink) ← anything else
- Ceasefire %: `ok` if ≥20, `mix` if ≥10, else `esc`.

### §01 Escalation gauge *(the key v3 change)*

A single top section that groups three elements:

1. **ClocksStrip** — a 6-column grid of dials, one per clock (see Clock list below). Each dial shows:
   - Label (mono 10px, uppercase, 0.14em tracking, `theme.inkMute`)
   - State word (Newsreader 600, 26px, tone color, uppercase) — the primary signal
   - Trajectory arrow + word (mono 10px, inkMute) — `↗ improving`, `↘ worsening/draining`, `→ stable`
   - A 12-segment 180° arc beneath, filled proportional to the 0–5 state score (with the active color)
   - A 14px sparkline of historical score across all days viewed so far

2. **Overall read** — a two-column band (`160px 1fr`) directly below the dials with a 1px top rule. Left column: small meta ("Overall read" kicker + a 18px italic lead sentence + word count). Right column: the `brief.exec` paragraph rendered in Newsreader 17px with a drop-cap (56px accent red) on the first letter. The goal is that the text explaining how the six gauges compose into today's posture is in the same visual block as the gauges.

3. **Per-gauge micro-explanations** — a second 6-column grid, aligned to the dial grid above, where each cell is a short analytical sentence keyed off the *current state* of that clock. Each cell has a colored top rule matching the dial's tone. Content map lives in the `EXPL` object inside `GaugeExplanations` — one line per (clock, state) pair (see source for full table).

**Rationale:** the v2 build put the clocks at the top and the explanations far below in a separate "escalation gauge section". v3 collocates both.

### §02 Key developments *(combined, v3)*

Single section that merges the old **headlines strip** and the old **events table**. Renders one **DevelopmentRow** per event. Each row is a 3-column grid (`44px 120px 1fr`) with:

- **Left rail** — 2-digit index (mono 11px, inkMute) + a 10×10 color chip matching the event's direction tone.
- **Middle column** — stacked badges: a `RiskPill` for direction, an `importance` label (mono 10px, uppercase; pivotal items render in accent red bold with a `◆` suffix), and a mono 10px italic `source` tag.
- **Right column** — event title (Newsreader 600, 18px, line-height 1.3), summary paragraph (sans 13.5px, inkSoft), and an `Impact →` row (mono 9px tone-colored kicker + sans 13px inkSoft body).

Row chrome: 3px left border in the tone color, `14px` left padding, 1px bottom rule. Pivotal rows tint the background with a 4% wash of the tone color (`${color}0A`).

**Fallback for days 2–14 where `events` is absent:** render from `headlines[]` using the brief's overall direction as each row's tone, importance = `pivotal` for item 0 and `high` for the rest, and omit summary/impact.

### §03 Strategic implications

3-column grid of implication cards. Each card: 2px top rule in `theme.ink`, then `Implication NN` kicker (mono 10px accent red), title (Newsreader 600, 22px, line-height 1.15, balanced wrap), body (sans 13.5px, inkSoft).

Typically 3 threads. Only the Day-1 brief has `implications` populated in the seed fixture; implement this block to no-op when the array is absent.

### §04 Casualties snapshot

4-column grid of actor cards: US / Israel / Iran & Proxies / Other. Each card:

- 3px top border in the actor color (`theme.ink`, `theme.accent`, `theme.accentAmber`, `theme.accentGreen` respectively)
- `CARDBG` background, 1px soft rule
- Label (mono 10px uppercase)
- KIA value (Newsreader 600, 30px) + optional `+Δ` delta in accent red mono 12px
- WIA value (Newsreader 500, 22px, inkSoft) + optional `+Δ` delta in accent amber mono 11px
- A **Sparkbar** — one bar per historical day, heights normalized to the actor's max KIA across history, opacity ramp from 0.35 (oldest) to 0.95 (latest)

Delta is computed against the *previous* brief in the `history` prop.

### §05 Casualties details *(v3 addition, directly below snapshot)*

Two-block layout that gives the snapshot numbers narrative context.

Top: a 3-column strip (`Total KIA all actors` / `Total WIA all actors` / `KIA Δ vs. prior brief`). The delta cell renders `+NN` as accent red and shows a sub-line with percent change and `~24h` marker.

Below: a 2-column grid of per-actor narrative cards (`US`, `Israel`, `Iran & Proxies`, `Other`). Each card: 3px left rule in actor color, label row (`ACTOR · KIA NN+Δ · WIA NN` in mono), then a sans 13px analytical sentence about where the casualties are concentrated (strike sites for Iran, barrage impacts for Israel, Red Sea + Iraq bases for US, civilian third-country + spillover for Other).

Footer: mono 10px `Note — figures are cumulative open-source estimates. Revisions logged via casualty_revision:true in brief frontmatter.`

### §06 Evening flash (18:00 TPE)

A single call-out card (1px soft rule, 3px left accent-red border, cardBg background, Newsreader 15px). Content comes from `brief.flash`. Max width 900px. Only Day 1 has flash content in the fixture.

### §07 Sources *(bottom, v3)*

Two-column list (`columnCount: 2`, `columnGap: 40`). Each entry: `[NN]` index + name (ink) + `↳ url` (inkMute) on two lines. Dotted 1px bottom rule between items. `breakInside: avoid` on each `<li>`.

### Footer + Day scrubber

- Footer: 1px top rule, mono 10px meta — copyright, git trail note, stack note, and a right-aligned brief timestamp `YYYY-MM-DDT01:00Z`.
- Day scrubber: fixed-position bottom bar, full-width. One button per day in the fixture; the active day grows to 36px tall and fills with the day's direction color; hover/click jumps to that day and forces `view = "today"`. Label reads `Day 0NN · YYYY-MM-DD` at the right.

## Design Tokens

Three themes are defined. The default is `paper`.

### Paper (default)

```
bg:        #F3EEE3
bgDeep:    #EAE2D0
ink:       #14161A
inkSoft:   #3B3E45
inkMute:   #6B6A62
rule:      #14161A
ruleSoft:  #C9BFA8
accent:    #B33A2E   (classified red)
amber:     #C48416
green:     #3E6B3A
badgeEscBg:#F1D9D5
badgeMixBg:#F3E3C6
badgeDeBg: #D9E3D3
cardBg:    #FBF8F0
stamp:     #B33A2E
```

### Classified (dark)

```
bg:        #0E0F12
bgDeep:    #17181C
ink:       #E8E6DF
inkSoft:   #B9B6AC
inkMute:   #7C7A72
rule:      #E8E6DF
ruleSoft:  #2A2B30
accent:    #E04A3C
amber:     #D99530
green:     #6BA366
badgeEscBg:#3A1A17
badgeMixBg:#3A2B14
badgeDeBg: #1C2B1A
cardBg:    #15171B
stamp:     #E04A3C
```

### Terminal (mono)

```
bg:        #0A0A0A
bgDeep:    #121212
ink:       #D8FF9B
inkSoft:   #9BC96D
inkMute:   #4F6A3B
rule:      #3E5A2A
ruleSoft:  #1F2D17
accent:    #FF5D4A
amber:     #FFC14A
green:     #9BFF7A
badgeEscBg:#2A1410
badgeMixBg:#2A2310
badgeDeBg: #14240E
cardBg:    #101610
stamp:     #FF5D4A
```

### Typography

| Theme | Display | Sans | Mono |
|---|---|---|---|
| Paper | `'Newsreader', 'Source Serif Pro', Georgia, serif` | `'IBM Plex Sans', 'Söhne', system-ui` | `'IBM Plex Mono', 'JetBrains Mono'` |
| Classified | same | same | same |
| Terminal | `'IBM Plex Mono'` for all three | — | — |

Weights used: Newsreader 400/500/600/700; IBM Plex Sans 300/400/500/600/700; IBM Plex Mono 300/400/500/600.

Google Fonts URL:
```
https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=IBM+Plex+Mono:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap
```

### Type scale (canonical)

- H1 title: 48 / 1.05 / -0.025em / Newsreader 600
- Section body display: 17–20 / 1.5–1.55 / Newsreader
- Event title: 18 / 1.3 / -0.01em / Newsreader 600
- Headline indicator value: 30 / 1.05 / -0.015em / Newsreader 600
- Clock state word: 26 / 1 / Newsreader 600 / uppercase
- Section rule label: 11 / 0.22em / uppercase / sans 600
- `§NN` section number: 10 / 0.14em / mono
- Micro meta / kickers: 10 / 0.14–0.2em / mono / uppercase
- Body sans: 13 / 1.5–1.55
- Tabular numerics: mono, `font-variant-numeric: tabular-nums`

### Spacing & radii

- Content padding (comfortable density): `28px 44px`; compact `18px 28px`; roomy `36px 56px`.
- Max content width: 1280 (comfortable), 1200 (compact), 1400 (roomy).
- Section rule: 36px top margin, 8px top padding under a 1px ink rule, 14px bottom.
- Card padding: 14–18px.
- **No border-radius.** Every box is a hard 0 rectangle. This is load-bearing for the classified-doc aesthetic — do not add rounding.

### Color-coding (tone) rules

```
critical | extreme | escalating → esc → accent (red)
conditional | mixed | neutral   → mix → amber
contained | low | de-escalating → ok  → green
everything else                → neutral → inkMute
```

Two clocks are polarity-inverted because high values are *bad*:
- `political_will` — high = war keeps going, so `ok→esc` and `esc→ok` swap
- `active_deadlines` — high = ticking ultimatums, same swap

## Data Shape

A single `BRIEFS` array of 14 entries. Each brief:

```ts
type Brief = {
  day: number;              // 1..14
  date: string;             // YYYY-MM-DD
  weekday: string;          // 3-letter
  title: string;
  direction: "escalating" | "mixed" | "de-escalating";
  risk7d: "low" | "conditional" | "extreme" | "critical";
  spillover: "low" | "conditional" | "critical";
  ceasefire30d: number;     // 0..100
  quiet: boolean;
  headlines: string[];      // always present
  casualties: {
    us:     [kia: number, wia: number],
    israel: [number, number],
    iran:   [number, number],
    other:  [number, number],
  };
  clocks: Record<ClockKey, ClockState>;
  trajectory: Record<ClockKey, TrajectoryState>;
  // Optional richer fields (Day 1 in fixture):
  exec?: string;
  events?: Event[];
  implications?: { title: string; body: string }[];
  sources?: { name: string; url: string }[];
  flash?: string;
};

type ClockKey =
  | "political_will" | "active_deadlines" | "energy_infrastructure"
  | "interceptor_capacity" | "negotiation_capacity" | "oil_reserves";
type ClockState = "critical" | "low" | "degraded" | "none" | "moderate" | "high" | "ample";
type TrajectoryState = "improving" | "stable" | "worsening" | "draining" | "n/a";

type Event = {
  id: number;
  direction: Brief["direction"] | "neutral" | "pivotal";
  importance: "pivotal" | "high" | "medium" | "low";
  source: string;
  event: string;
  summary: string;
  impact: string;
};
```

Score mapping for dial fill + sparkline:
```
CLOCK_SCORE = { critical:0, low:1, degraded:2, none:2.5, moderate:3, high:4, ample:5 }
```

Ordinal mappings for timeline charts:
```
DIR_SCORE  = { "de-escalating": -1, mixed: 0, escalating: 1 }
RISK_SCORE = { low:1, conditional:2, extreme:3, critical:4 }
```

## State Management

- `themeKey` — `"paper" | "classified" | "terminal"`, persisted to `localStorage` under `mewar:state`.
- `density` — `"compact" | "comfortable" | "roomy"`, persisted.
- `day` — current day (1..briefs.length), persisted. Driven by the bottom scrubber or the Archive view.
- `view` — `"today" | "archive" | "timeline" | "casualties" | "clocks" | "about"`, persisted.
- Tweaks panel state is transient (not persisted).

In production, keep the persistence but move day/view into the URL (`/briefs/YYYY-MM-DD` + tab params) so briefs are linkable.

## Interactions & Behavior

- **Nav tabs** — instant view swap; no transition. Active tab inverts colors.
- **Day scrubber** — clicking any day switches `day` and forces `view="today"`. Hover shows `title={Day N — date — title}`.
- **Archive row click** — sets day, jumps to `today`.
- **Timeline node click** — sets day, jumps to `today`.
- **Tweaks panel** — open/close via the host's edit-mode messages; three groups (Theme, Density, Day slider). Changes are applied live AND posted back via `__edit_mode_set_keys` so they persist in the source file's `TWEAK_DEFAULTS` block.
- No animations beyond the scrubber's `height` transition (120ms). No scroll reveals.

## Cross-view Components (reused)

- **ArchiveView** — table of all briefs with day/date/title/direction/risk/ceasefire columns; active row tinted + left-accented.
- **TimelineView** — SVG line chart of direction score per day + two MiniLine small-multiples (risk ordinal, ceasefire %). Click nodes to open that brief.
- **CasualtiesView** — SVG stacked-area of cumulative KIA by actor across all days; legend; reuses `CasualtiesBlock` for the latest snapshot.
- **ClocksDashboardView** — 3-col grid of all six dials + a 6-row × N-day heatmap using state-score opacity.
- **AboutView** — methodology, cadence cards, contact.

All cross-views should use the same `SectionRule`, `RiskPill`, `Num`, and `Stamp` primitives.

## Files in This Handoff

- `reference/ME War Intel Brief v3.html` — the canonical v3 prototype. Open in any browser; no build step.

## Implementation Notes for Claude Code

- The source is a single HTML file with inline JSX transpiled via Babel Standalone. Do **not** ship Babel in production — port the JSX into proper `.tsx` modules.
- Every `window.X = ...` aggregation is there only because Babel Standalone scripts don't share scope. Replace with real ES imports.
- Style objects are inline `style={{ ... }}`. In the target codebase, migrate these to the project's styling system (Tailwind, CSS Modules, vanilla-extract, etc.). Preserve exact pixel values.
- The `TWEAK_DEFAULTS` / `EDITMODE-BEGIN/END` block is specific to this design environment's live-tweak protocol. Drop it in production; replace with a proper settings store or URL params.
- `.data.ts` sidecar pattern: each day's `Brief` should live in `content/briefs/YYYY-MM-DD-day-NNN.data.ts` and the prose (`exec`, `implications[].body`, `flash`) in the sibling MDX file. The GitHub Actions validators (schema, day continuity, monotonic casualties, source count floor, URL liveness) are already defined in the seed repo — keep them.
- When porting fonts, preconnect to `fonts.gstatic.com` and preload the Newsreader + IBM Plex weights listed above.
- The design assumes a `min-width: 1024px` target. Mobile is out of scope for this revision — see `RESPONSIVE_ADDENDUM.md` in the prior handoff if/when that work is scoped.
