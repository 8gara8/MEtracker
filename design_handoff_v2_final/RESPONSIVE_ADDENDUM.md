# Handoff Addendum: Responsive / Mobile Pass

**Scope:** Builds on `README.md` (v2 final). This addendum documents the responsive pass layered on top of the desktop design.

**What changed since the v2 spec:**
- Desktop max-width increased (content no longer feels like a narrow column on 1440/1600px monitors).
- Added breakpoints and rules for tablet (≤1024) and mobile (≤720, ≤520) so every grid, the masthead, nav, scrubber, events table, and archive rows reflow instead of overflowing.

> The v2 README said "Desktop-first design (max-width 1280px)" and left responsive behavior mostly to the existing codebase. **That guidance is superseded by this doc.**

---

## Breakpoints

Match Tailwind's defaults; the prototype uses these in raw media queries:

| Breakpoint | Range | Target |
|---|---|---|
| mobile-sm | ≤ 520px | Narrow phones |
| mobile | ≤ 720px | Phones, Tailwind `sm:` and below |
| tablet | 721–1024px | Small tablets, large phones landscape |
| tablet-lg | 1025–1100px | Large tablets, small laptops |
| desktop | ≥ 1101px | Full layout |

Tailwind mapping for the real codebase:
- `≤520` → default (no prefix) up to `sm:`
- `≤720` → `max-sm:` (Tailwind 3.4+) or negate `sm:`
- `721–1024` → `sm:` up to `lg:`
- `≥1101` → `xl:` (or custom `desktop:` breakpoint)

Recommend adding a custom breakpoint for the 1100px cutoff:
```ts
// tailwind.config.ts
screens: {
  sm: '520px',
  md: '720px',
  lg: '1024px',
  xl: '1100px',
  '2xl': '1440px',
},
```

---

## Max content width (desktop bump)

| Density | v1 max-width | v2 max-width |
|---|---|---|
| compact  | 1200px | **1280px** |
| comfortable (default) | 1280px | **1440px** |
| roomy    | 1400px | **1600px** |

On wide monitors (≥1600px), the content now fills a meaningful portion of the viewport instead of forming a skinny centered column. The gutters at 28px/44px (top/sides) still apply.

---

## Per-section responsive rules

These supersede the desktop-only grid specs in the main README. Implement with Tailwind classes; the inline `gridTemplateColumns` in the prototype is just a convenience.

### Masthead

| Breakpoint | Behavior |
|---|---|
| desktop | Title + cadence meta + stamp on one row (as spec'd). |
| ≤720 | Title **22px** (down from 26/32). Cadence meta **hidden**. Stamp wraps to new row under the title. |

Tailwind:
```tsx
<div className="flex flex-wrap items-center gap-3.5 border-b-[3px] border-double border-paper-ink pb-2 mb-3.5">
  <div className="font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] flex-1 md:flex-none">
    <span className="italic">ME</span> WAR — Intel Brief
  </div>
  <div className="hidden md:block font-mono text-[10px] tracking-[0.12em] uppercase text-paper-ink-mute pl-3 border-l border-paper-rule-soft">
    Twice daily · Asia/Taipei 09:00 · 18:00<br/>
    Autonomous research · Git-audited · 3D @8gara8
  </div>
  <div className="ml-0 md:ml-auto">
    <Stamp text="Unclassified · OSINT" angle={-3} />
  </div>
</div>
```

### Sub-nav (6 tabs + dateline)

| Breakpoint | Behavior |
|---|---|
| desktop | Tabs left, date+DAY counter right-aligned. |
| ≤900 | Container becomes **horizontal-scroll** (`overflow-x: auto`, hide scrollbar). Dateline hidden. Tab padding reduces to `10px 12px`, font to 11px. Tabs `white-space: nowrap`. |

Tailwind:
```tsx
<nav className="flex items-center border-b border-paper-rule-soft overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
  {tabs.map(t => (
    <Link className="whitespace-nowrap px-3 py-2.5 md:px-4 md:py-2.5 text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase border-r border-paper-rule-soft …" />
  ))}
  <div className="hidden md:flex ml-auto items-baseline gap-2.5 py-2 whitespace-nowrap">…dateline…</div>
</nav>
```

### Today hero (title + indicators)

| Breakpoint | Behavior |
|---|---|
| desktop ≥1201 | H1 48px on left, `HeadlineBar` below full-width (see README). |
| 901–1200 | H1 drops to 42px. |
| ≤900 | H1 drops to **32px**, line-height 1.08. If the prototype's older two-column hero still appears in any port, collapse to one column with left-aligned indicators. |

### Key Developments / Executive summary (Today §02/§03)

v2 originally stacked them two-column `1.35fr 1fr`. Responsive:

| Breakpoint | Behavior |
|---|---|
| desktop | Two-column `1.35fr 1fr`, gap 40px. |
| ≤900 | **Single column**, gap 24px. |

### Implications (3-column)

| Breakpoint | Behavior |
|---|---|
| desktop ≥1101 | Three columns, gap 28px. |
| 901–1100 | **Two columns**. |
| ≤900 | **Single column**, gap 20px. |

### Flash + Sources (2-column)

| Breakpoint | Behavior |
|---|---|
| desktop | Two columns, gap 40px. |
| ≤720 | **Single column**, gap 24px. |

### Casualties snapshot (4 actor cards)

| Breakpoint | Behavior |
|---|---|
| desktop | 4 columns, gap 12px. |
| ≤720 | **2 columns** (the sparkbars still read fine at half width). |

### 6-clock strip (Today §01)

| Breakpoint | Behavior |
|---|---|
| desktop ≥1101 | 6 columns, gap 10px. |
| 521–1100 | **3 columns**. |
| ≤520 | **2 columns**. |

### Clocks dashboard (/clocks §01)

Same content, different container (more room per dial since it's the focus page):

| Breakpoint | Behavior |
|---|---|
| desktop | 3 columns, gap 16px. |
| 521–900 | **2 columns**. |
| ≤520 | **1 column**. |

### Archive rows (6-column grid)

Desktop: `70px 100px 1fr 120px 120px 100px` (Day / Date / Title / Direction / Risk / C/F).

**≤900px**: collapse to a compact 3-area layout:

```
grid-template-columns: 50px 1fr auto;
grid-template-areas:
  "day date  date"
  "day title title"
  "day dir   pct";
```

- Day spans all three rows on the left.
- Risk (5th cell) is **hidden** on mobile — keep Direction pill only.
- C/F % right-aligned on the third row.

The archive header row follows the same rules, hiding the Risk column.

### Events table

Stays a full wide table on desktop. **≤900px**: wrap the `<table>` in an overflow-x container with `min-width: 900px` on the table so the user swipes horizontally to see columns. Do NOT collapse to cards here — the analytical value of the 7-column table lies in seeing all dimensions at once.

```tsx
<div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
  <table className="min-w-[900px] w-full …">…</table>
</div>
```

(If a card-collapse pattern already exists in the codebase for this table, keep it; the horizontal-scroll approach is the prototype's choice.)

### Timeline small-multiples (/timeline §01, below main chart)

| Breakpoint | Behavior |
|---|---|
| desktop | Two columns. |
| ≤720 | **Single column**. |

### Cadence cards (/about §02)

Same pattern: 2-col → 1-col at ≤720.

### Day scrubber (fixed bottom)

Desktop: `| Label | 14-day track | Day 014 · 2026-03-13 |` all on one row.

**≤720px**: wrap with the current-day indicator **above** the track (so users see which day is active without the track label squeezing). Label "Day scrubber" hidden. Track button heights reduce from 24/36 → 20/28 so the bar is shorter.

```tsx
<div className="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center gap-2 md:gap-3.5 px-2.5 md:px-5 py-2 md:py-2.5 bg-paper-bg-deep border-t border-paper-rule backdrop-blur-sm">
  <span className="hidden md:inline …">Day scrubber</span>
  <span className="order-first md:order-none w-full md:w-auto md:ml-auto md:min-w-[130px] md:text-right font-mono text-[11px]">
    Day {String(day).padStart(3,'0')} · {date}
  </span>
  <div className="flex gap-0.5 flex-1 min-w-0 items-center">
    {/* day buttons — h-5 / h-7 on mobile, h-6 / h-9 on desktop */}
  </div>
</div>
```

Reserve space for the scrubber at the bottom of the page:
```css
/* Main content wrapper */
padding-bottom: 108px; /* slightly taller than the scrubber */
```

### Tweaks panel (prototype only — don't ship)

This is called out only so it doesn't get copy-pasted: the prototype panel becomes a bottom sheet on ≤520. **Don't port the tweaks panel to production.**

---

## Page gutters

| Breakpoint | Padding |
|---|---|
| desktop | 28px 44px (comfortable), from v2 spec |
| 721–1024 | **22px 24px** |
| ≤720 | **16px 14px** |

---

## Horizontal-overflow guarantees

Before shipping, verify on a 375px viewport:

```js
document.documentElement.scrollWidth <= window.innerWidth + 1
```

Common culprits to audit:
1. Any inline `gridTemplateColumns` that hasn't been class-ified.
2. Fixed-pixel `min-width` on cards or cells.
3. Tables without the overflow-x wrapper.
4. The day scrubber's flex children — ensure track has `min-width: 0` so it can shrink.

---

## Files updated for this pass

```
design_handoff_v2_final/
├── README.md                     ← original v2 desktop spec
├── RESPONSIVE_ADDENDUM.md        ← you are here
└── reference/
    ├── ME War Intel Brief.html   ← now loads src/ via <script src>
    └── src/
        ├── app.jsx                ← maxW bumped; DayScrubber uses .mw-scrubber classes
        ├── today.jsx              ← Masthead, hero, all grids class-ified
        ├── views.jsx              ← Archive row, Timeline multiples, Clocks dashboard class-ified
        ├── clocks.jsx             ← ClocksStrip uses .mw-clocks-strip
        ├── tokens.jsx             ← unchanged
        └── data.jsx               ← unchanged
```

The canonical responsive CSS lives in the `<style>` block at the top of `ME War Intel Brief.html`. When translating to Tailwind, map each `.mw-*` class to its equivalent utility stack.

---

## Acceptance criteria (addendum)

- [ ] At 375px: no horizontal page overflow (`scrollWidth ≤ innerWidth`).
- [ ] Masthead title fits on one line at 375px (22px font).
- [ ] Nav tabs swipeable / scrollable horizontally at ≤900px.
- [ ] 6-clock strip renders 2-wide at ≤520, 3-wide at ≤1100, 6-wide above.
- [ ] Archive rows collapse to a 3-area layout at ≤900; Risk column hidden.
- [ ] Events table scrolls horizontally inside its card on mobile; doesn't bleed off screen.
- [ ] Day scrubber current-day indicator appears above the track on mobile.
- [ ] At 1600px viewport, content fills up to 1440px (comfortable) or 1600px (roomy) — not capped at 1280.
- [ ] Tweaks panel is not shipped to production.
