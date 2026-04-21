---
name: me-war-intel-brief-web
description: "Generate a daily Middle East War Intelligence Brief (Operation Epic Fury, started Feb 28 2026) as Markdown + JSON for a static web publication. Triggers: 'run update', 'daily brief', 'intel brief', 'war brief', 'war update', 'Iran brief', 'Iran update', 'ME brief', 'Operation Epic Fury', 'Hormuz update', 'what's new in Iran', 'run it', 'update me'. Produces /briefs/YYYY-MM-DD.md + /briefs/YYYY-MM-DD.json, updates /context/rolling.md, commits to a claude/daily-brief-* branch, opens PR to main with auto_merge=true."
---

# Middle East War Daily Intelligence Brief — Web Edition

## Overview

Generates a daily intelligence brief on the 2026 US-Israeli war on Iran (Operation Epic Fury, started Feb 28, 2026). Each brief is published as a Markdown file plus JSON metadata in this GitHub repo. A Next.js static site renders the corpus.

## Workflow

### Step 1 — Load rolling context
Read `/context/rolling.md`. This provides continuity: current day count, cumulative casualties, diplomatic state, standing analytical priors.

### Step 2 — Research
Run 5–10 `web_search` calls. **Source discipline is non-negotiable (see Analytical Framework below, Source Categories section):** every brief must cite sources from at least six of the twelve defined categories — Western mainstream press, international/regional press, Iranian state media, Iranian officials direct, Israeli military/government, Arab/regional governments, Russia/China adversary sources, human rights monitoring, US government/agencies, European leaders/international bodies, think tanks/analysts, market/maritime data. Single-category dominance (e.g., all sources from US cable news) fails the validator. State media claims must be paired with counter-claims from opposing sides when events are contested. Cover: US-Iran ceasefire status, Hormuz shipping, Lebanon violations, Iran internal developments, oil/equity markets, Taiwan energy angle.

### Step 3 — Calculate day count
Day = today − Feb 28, 2026. If ceasefire active, also compute `ceasefire_day` (ceasefire started April 8, 2026).

### Step 4 — Write the brief
Produce the two files per the Output Specification below. Apply all Analytical Framework rules. Reference the three exemplar briefs in `./examples/` as voice anchors before writing.

### Step 5 — Commit
- Save `/briefs/YYYY-MM-DD.md` and `/briefs/YYYY-MM-DD.json`
- Update `/context/rolling.md` with today's developments
- Create branch `claude/daily-brief-YYYY-MM-DD`
- Commit with message `brief: Day N — YYYY-MM-DD`
- Push branch
- Open PR against `main` with `auto_merge: true`
- **If push conflicts on `/context/rolling.md`**: pull remote, re-apply diff, retry once. If still conflicted, commit brief files without context update, add `context-merge-needed` label to PR.

### Step 6 — Update rolling context (already done in Step 5 commit)
Verify the rolling context now reflects: today's casualty deltas, diplomatic movements, energy/economic data, and updated ceasefire probabilities. Retire standing priors only when evidence explicitly invalidates them. Keep total length 600–1000 words.

## Output Specification

### Markdown: `/briefs/YYYY-MM-DD.md`

Frontmatter (YAML) required fields:
- `day`: integer
- `date`: YYYY-MM-DD
- `headline`: single-line summary
- `sources_count`: integer (≥ 8 required, unless `quiet_day: true`)
- `quiet_day`: boolean (default false)

Note: `source_categories` is recorded in the JSON metadata file, not the MD frontmatter.

Optional frontmatter:
- `ceasefire_day`: integer (if ceasefire active)
- `reading_time_minutes`: integer

Body sections, in order (each is `# Heading`):
1. Executive Summary (150–400 words)
2. Top Developments (4–5 numbered items)
3. Analytical Judgment (400–600 words — the voice section)
4. Scenarios and Probabilities (3–5 scenarios)
5. Casualties (Markdown table with 24–48h delta column)
6. Taiwan Angle (200–300 words; if no fresh development, state "No fresh Taiwan-relevant developments today; prior assessments unchanged.")
7. Sources (bulleted URLs)

### JSON: `/briefs/YYYY-MM-DD.json`

See `/briefs/schema.json` for the full specification. Required fields: `day`, `date`, `gauges` (exactly 3 keys), `sources_count`, `source_categories`.

## Analytical Framework

[SKILL AUTHOR: copy §3.1 through §3.6 of /DESIGN_v1.7.md verbatim here. That section defines tone, six-clock framework, three-gauge structure, rolling context mechanism, eleven lessons-learned hard constraints, and the three exemplar briefs.]

## Exemplar Briefs

Read these before writing today's brief:
- `./examples/day-40-ceasefire.md` — pivoting without memory-holing structural risks
- `./examples/day-47-three-track.md` — architectural lens for multi-party negotiations
- `./examples/day-50-deal-architecture.md` — holding multiple assessments in tension
