# Middle East War Daily Intelligence Brief — Build Spec

**For:** Claude Code
**By:** 3D (@8gara8)
**Date:** April 22, 2026
**Repo target:** `me-war-intel-brief` (public, owner `@8gara8` on GitHub)
**Companion design doc:** `me-war-intel-brief DESIGN v1 1 2026-04-22.docx` at the repo root.

-----

## What you're building

A **public daily intelligence website** that publishes one analytical brief per day on the 2026 US-Israeli war on Iran (Operation Epic Fury). The brief is researched and written autonomously by a Claude Code Routine running on Anthropic cloud infrastructure (`claude.ai/code/scheduled`). The site is Next.js on Vercel, statically rebuilt on every commit. The whole loop is **producer (routine) → store (this repo) → presenter (Vercel site)**, with git as the audit trail.

The analyst handles: (1) creating the empty GitHub repo, (2) authorizing Claude Code's GitHub access to it, (3) linking the repo to a new Vercel project, (4) configuring the routine at claude.ai/code/scheduled. Everything else is scaffolded by this repo.

-----

## Scope of this build

Phases 1–3 of a 5-phase plan. Phase 4 (routine goes live) and Phase 5 (later enhancements) are not in scope.

**Phase 1 — Repo skeleton + content schema**
**Phase 2 — Next.js site + cross-brief views**
**Phase 3 — GitHub Actions validation + routine prompt files**

Backfill of the existing 50-brief DOCX archive (Days 33–51 currently in the analyst's local outputs) is **Phase 1.5**, deferred to a separate one-off conversation with regular Claude (not Claude Code) because converting DOCX requires the docx skill that lives in claude.ai.

-----

## 1. Repository layout

See the root tree. Key rules:

- **`data/` is gitignored.** Regenerated on every build from `content/briefs/*.mdx` frontmatter via `scripts/build-data.ts`. The routine never touches `data/`.
- **`me-war-intel-brief DESIGN v1 1 2026-04-22.docx`** lives at the repo root and is committed by the analyst manually.
- **`routine/examples/README.md`** is a placeholder; few-shot exemplars (Days 40, 47, 50) are added in Phase 1.5.
- **`SPEC.md`** (this file) stays in the repo. Git history preserves prior versions.

-----

## 2. The brief MDX format

Filename pattern: `YYYY-MM-DD-day-NNN.mdx` (zero-padded day, three digits).

### 2.1 Frontmatter schema

```yaml
---
day: 1                              # integer, day count from 2026-02-28 (Day 1)
date: "2026-02-28"                  # ISO date
title: "Operation Epic Fury commences with strikes on Natanz and Fordow"
escalation_direction: "escalating"  # one of: escalating | mixed | de-escalating
escalation_risk_7d: "extreme"       # one of: critical | extreme | conditional | low
spillover_risk: "critical"          # one of: critical | conditional | contained
ceasefire_probability_30d: 5        # integer 0-100
quiet_day: false                    # boolean; if true, sources_count floor is waived
key_developments:
  - "US/Israel joint strikes on Natanz, Fordow, and Isfahan enrichment sites"
  - "Iran retaliates with ballistic missile barrage on Tel Aviv and Haifa"
  - "Hormuz traffic suspended pending damage assessment"
sources:
  - name: "Reuters"
    url: "https://www.reuters.com/..."
    accessed_at: "2026-02-28T22:14:00Z"
casualties_snapshot:
  us:    { killed: 0,    wounded: 0,    delta_24_48h: "+0/+0" }
  israel:{ killed: 142,  wounded: 850,  delta_24_48h: "+142/+850" }
  iran:  { killed: 380,  wounded: 1200, delta_24_48h: "+380/+1200" }
  other: { killed: 0,    wounded: 0,    delta_24_48h: "+0/+0" }
clocks:
  political_will:        { state: "high",     trajectory: "stable" }
  active_deadlines:      { state: "none",     trajectory: "n/a" }
  energy_infrastructure: { state: "degraded", trajectory: "worsening" }
  interceptor_capacity:  { state: "high",     trajectory: "draining" }
  negotiation_capacity:  { state: "low",      trajectory: "stable" }
  oil_reserves:          { state: "ample",    trajectory: "stable" }
---
```

State enums for `clocks.*.state`: `critical | low | degraded | moderate | high | ample | none`. Trajectory enums: `improving | stable | worsening | draining | n/a`.

### 2.2 Body

MDX body uses three custom components: `<EscalationGauge>`, `<EventsTable>`, `<CasualtiesTable>`. Section order: Executive Summary, Escalation Gauge, Key Events, Casualties, Strategic Implications, Sources (auto-rendered from frontmatter).

-----

## 3. Build-time data aggregation

Before `next build` runs, `scripts/build-data.ts` produces:

```
data/
├── index.json
├── escalation-history.json
├── casualties-history.json
└── clocks-history.json
```

These are derived files, gitignored. The routine never reads or writes them.

`package.json` wires this as a `prebuild` hook so `next build` automatically regenerates data first.

-----

## 4. Next.js application

### 4.1 Stack

- Next.js 15 (App Router, TypeScript, RSC)
- Tailwind CSS
- `next-mdx-remote` for MDX rendering with custom components
- `gray-matter` for frontmatter parsing
- `recharts` for charts
- `date-fns`
- `zod` for runtime schema validation
- `@vercel/og` for OpenGraph image generation

### 4.2 Routes

| Route             | Renders                                   |
|-------------------|-------------------------------------------|
| `/`               | Latest brief                              |
| `/brief/[slug]`   | Individual brief                          |
| `/archive`        | Reverse-chron list of all briefs          |
| `/timeline`       | Escalation timeline chart                 |
| `/casualties`     | Casualty stacked-area chart               |
| `/clocks`         | Multi-clock dashboard (6 small multiples) |
| `/about`          | Attribution + methodology + repo link     |
| `/api/og/[slug]`  | OpenGraph card image generation           |

### 4.3 Visual design

- **Colors:** navy `#1B2A4A` (headers), blue `#2E75B6` (accent), red `#CC0000`/bg `#FFE5E5` (escalation), amber `#FFF5E5` (mixed), green `#006600`/bg `#E5FFE5` (de-escalation), body `#333333`, muted `#666666`.
- **Typography:** Inter (UI/body), JetBrains Mono (data), via `next/font/google`.
- **Mobile-first:** tables become horizontally scrollable on narrow viewports.

### 4.4 Continuity sidebar

On `/` and `/brief/[slug]`: link to previous brief (Day N-1), one week ago (Day N-7) if it exists, and archive.

### 4.5 OpenGraph cards

`/api/og/[slug]` returns an OG image via `@vercel/og` showing day number, date, title, escalation badges, and @8gara8 attribution.

-----

## 5. MDX components

Three components do the structural lifting:

- `<EscalationGauge>` — three-row status+rationale table
- `<EventsTable>` — seven-column events table, mobile-expand to cards
- `<CasualtiesTable>` — four-row actor table (US, Israel, Iran & Proxies, Other)

Component props mirror frontmatter to let the validator catch divergence.

-----

## 6. Seed brief

One seed brief at `content/briefs/2026-02-28-day-001.mdx` covering Day 1 (war start). Draws on well-known Day 1 events (US strikes on Natanz/Fordow/Isfahan, Iranian missile retaliation, Hormuz suspension). Approximate figures are flagged as seed content.

-----

## 7. Seed `content/context.md`

Fixed section structure (see `routine/schemas/context.schema.md`): Current war status, Cumulative state, Active deadlines, Diplomatic state, Standing analytical threads, What to watch tomorrow. The routine rewrites this file in full on every run.

-----

## 8. `routine/PROMPT.md`

Short run-time prompt that points at `INSTRUCTIONS.md` and lays out the hard rules:

- No partial commits.
- No silently fabricated data.
- Cite every source.
- Don't touch `data/`.
- Don't edit `app/`, `components/`, `lib/`, or `routine/` unless tasked with a structural change.

-----

## 9. `routine/INSTRUCTIONS.md`

The editorial brain: research conventions, multi-clock framework, editorial style, standing analytical threads, per-section writing guidance. Scaffolded with `<!-- ANALYST: insert content here -->` placeholders to be filled from the existing skill's content.

-----

## 10. GitHub Actions validation

`.github/workflows/validate-brief.yml` runs on every PR to `main` and calls `scripts/validate-brief.ts`.

### 10.1 What gets validated

- **Frontmatter schema** — matches `routine/schemas/brief-frontmatter.schema.json`.
- **Day continuity** — `day` equals `previous_brief.day + 1`, unless `gap_acknowledged: true`.
- **Date/filename match** — date in frontmatter matches filename date and `day-NNN` portion.
- **Casualties non-decreasing** — killed/wounded ≥ previous brief for every actor, unless `casualty_revision: true`.
- **Sources count floor** — `len(sources) >= 8` unless `quiet_day: true`.
- **URLs resolve** — every URL 200s (or is on web.archive.org). Up to 2 broken links pass with warning.
- **Length sanity** — Exec Summary 150–300 words, Strategic Implications 400–800, body 1500–4000.

### 10.2 Pass/fail behavior

- Pass: PR auto-merges (requires GitHub repo auto-merge setting enabled by analyst).
- Fail: PR left open with `needs-review` label.

-----

## 11. `/about` content

Covers: what this is, what this is not, methodology, open source link, contact, disclaimer.

-----

## 12. README

Project description, live URL (placeholder), architecture overview, local dev instructions, routine setup pointer, license.

-----

## 13. Things not done here

- No historical archive backfill (Phase 1.5).
- No Vercel configuration (analyst links repo manually).
- No GitHub repo creation (analyst creates and authorizes).
- No auth, comments, RSS, search, or features beyond the above.

-----

## 14. Definition of done

- `npm install && npm run build` succeeds with zero errors.
- `npm run dev` serves the site; all routes render.
- Seed Day 1 brief renders on homepage.
- Chart routes render with single data point without crashing.
- `npm run validate-brief content/briefs/2026-02-28-day-001.mdx` passes.
- GitHub Actions run completes.
- Repo pushed.
- README explains Vercel link, routine config, first manual run.
