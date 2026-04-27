---
name: me-war-intel-brief-web
description: |
  Produce the daily Middle East War Intelligence Brief (Operation Epic Fury) for
  publication at mewar.moltbook.com. v1.8 cutover: invoked by Cowork Schedule
  tasks on the local Mac, validates with the local TypeScript validator, and
  performs a direct push to main (no PR, no GitHub Actions, no auto-merge).
  Closes the PR #22 (Day 059) failure modes by enforcing pre-emit word-count
  guardrails (§3.5.13) and URL archive-wrapping (§3.5.12) at draft time.
---

# me-war-intel-brief-web — v1.8

Authoritative source for analytical discipline: `DESIGN_v1.8.md` §3.1–§3.6.
Authoritative source for execution flow: `SPEC.md` §9 (Phase 3) and §10
(Routine prompts).

## When to use this skill

Invoke when the user says any of:

- "Run the morning brief now"
- "Run the evening flash"
- "Re-run today's brief — the validator failed"
- "Catch up the war brief — produce briefs for Apr DD–DD"
- A Cowork Schedule task fires the verbatim morning or evening prompt from
  `SPEC.md` §10.

## Workflow (seven steps + 4a / 4b guardrails)

### Step 1 — Read context
- `cd ~/Documents/MEwar/me-war-intel-brief`
- Read `content/context.md` end-to-end.
- Note the previous day number, the rolling cumulative casualty figures, the
  active deadlines, and the standing analytical threads. Do not draft yet.

### Step 2 — Research
- Use `WebSearch` per the §3.1 sourcing rubric: ≥ 8 sources, ≥ 6 distinct
  source categories (12-category taxonomy in §3.1.x of DESIGN_v1.8.md).
- Prioritize Reuters / AP / Al Jazeera / NPR / Times of Israel / IAEA / DoD;
  cross-check Iranian state media against HRANA for civilian casualty counts.
- Capture the URL, publication, and access timestamp for every source.

### Step 3 — Day count
- Compute today's day number = `(today − 2026-02-28) + 1`.
- Filename: `content/briefs/YYYY-MM-DD-day-NNN.mdx` and the matching
  `.data.ts` sidecar.
- If a gap exists vs. previous brief, set `gap_acknowledged: true` in
  frontmatter; if a casualty figure regressed, set `casualty_revision: true`
  and explain in body.

### Step 4 — Draft files
- Write the `.mdx` body in section order: Executive Summary → Top Developments
  → Analytical Judgment / Strategic Implications → Scenarios and Probabilities
  → Casualties → Taiwan Angle → Sources.
- Write the `.data.ts` sidecar matching the `BriefData` shape in
  `lib/brief-data.ts`. Populate `escalation`, `events`, `casualties`,
  `exec`, `implications`, `casualtyNotes`. Leave `flash` undefined for the
  morning run.
- Append the new entry to `lib/brief-data.ts` (`import` + one-line
  `briefDataBySlug` registration).

### Step 4a — Pre-emit word-count self-check (SPEC §7.1, DESIGN §3.5.13)

Before writing files to disk, count words in:

| Section | Floor | Ceiling |
|---------|-------|---------|
| `## Executive Summary` | 150 | 300 |
| `## Strategic Implications` (all subsections) | 400 | 800 |
| Body + `sidecarProse(data)` | 1200 | 4000 |

`sidecarProse` concatenates `escalation.rationale.{direction,risk7d,spillover}`,
every event's `event/summary/impact/source`, and every actor's
`casualties.cumulative/status`.

If any band is busted:
1. Trim or regenerate the offending section in-process.
2. Repeat the count.
3. Maximum **3 iterations**. If still out-of-band, write the draft to
   `~/Documents/MEwar/needs-review/day-NNN-YYYY-MM-DD/` along with a
   `pre-emit-overshoot.txt` describing which band failed and the iteration
   counts. Do not push. Fire the failure notification (Step 6).

Common culprit on high-event days: each Strategic Implications subsection runs
~330 words and the three subsections sum to ~990, busting the 800 ceiling.
Target ~250 words per subsection.

### Step 4b — URL archive-wrap (SPEC §7.2, DESIGN §3.5.12)

Before writing the `.mdx` to disk, transform every URL in the `## Sources`
section to `https://web.archive.org/web/2026/<original>`. Idempotent: do not
double-wrap URLs that already contain `web.archive.org/web/`.

Two equivalent paths:
- **In-process**: rewrite the source list in the draft string before
  `Write`-ing it.
- **Subprocess**: write the unwrapped draft, then run
  `npx tsx scripts/normalize-sources.ts --in-place content/briefs/<file>.mdx`.

The validator's `web.archive.org` short-circuit (SPEC §7.1, check 2) means a
fully-wrapped brief never trips the >2 broken-URL ceiling regardless of
publisher health.

### Step 5 — Validate

```bash
npx tsx scripts/validate-brief.ts content/briefs/<YYYY-MM-DD-day-NNN>.mdx
```

- Exit 0 → proceed to Step 6.
- Exit 1 → move drafted files to `~/Documents/MEwar/needs-review/day-NNN-YYYY-MM-DD/`,
  copy validator stdout to `validator-report.txt` in that folder, fire failure
  notification, **do not push**, `rm .lock`, exit.

The skill is responsible for never handing the validator a brief that should
fail. Steps 4a and 4b are the primary length and URL governors; the validator
is a backstop.

### Step 6 — Commit + push (DIRECT TO MAIN — v1.8)

Pre-push checks:
- `gh auth status` succeeds.
- `git status --porcelain` shows only the expected files
  (`content/briefs/<slug>.mdx`, `<slug>.data.ts`, `lib/brief-data.ts`,
  `content/context.md`).

Then:

```bash
git add content/briefs/<slug>.mdx content/briefs/<slug>.data.ts \
        lib/brief-data.ts content/context.md
git commit -m "brief: Day N — YYYY-MM-DD"
git push origin main
```

If `COWORK_BRIEF_DIRECT_PUSH=false` is set, skip the push and deposit the
files in `needs-review/` instead (per SPEC §8.4).

On success, fire:

```bash
osascript -e 'display notification "Day N brief live" with title "ME War Brief"'
```

On failure (validator, push, or any earlier step), fire:

```bash
osascript -e 'display notification "Day N brief FAILED — see needs-review" \
  with title "ME War Brief" sound name "Basso"'
```

### Step 7 — Verify rolling context

After push, re-read `content/context.md` and confirm:
- Day-N developments are reflected in §1 (Current war status), §2 (Cumulative
  state), §3 (Active deadlines), §6 (What to watch tomorrow).
- §7 (Evening flash notes) was reset to `(None yet for today.)` by the morning
  run, or has today's UTC-stamped flash appended by the evening run.
- Total length stays under ~1000 words; if approaching the cap, prune oldest
  evening flash notes (the monthly audit handles this — do not aggressively
  prune mid-cycle).

Always `rm .lock` at the end of the run, regardless of pass/fail.

## Evening-run divergence

The evening run (SPEC §10.2) skips Steps 3 and 4, instead:
- Loads today's existing brief.
- Runs 1–3 `WebSearch` calls scoped to "since 08:00 Taipei today".
- Either appends an `Evening flash notes` subsection to the `.mdx` and a
  timestamped block to `content/context.md` §7, OR exits cleanly with no
  commit if no material change has occurred.
- Steps 4a, 4b, 5, 6, 7 still apply when content is appended.

A material change is defined in `routine/INSTRUCTIONS.md` §6.

## Analytical framework (DESIGN_v1.8.md §3.1–§3.6)

The detailed analytical discipline — 12-category sourcing rubric, six-clock
framework, three-gauge structure, §3.5 hard constraints (including §3.5.12
URL archive-wrapping and §3.5.13 pre-emit word counts) — must be inlined
verbatim from `DESIGN_v1.8.md` §3.1–§3.6 before the skill is considered
production-ready.

> **TODO (analyst):** paste DESIGN_v1.8.md §3.1–§3.6 into this section. Until
> done, the skill defers to `routine/INSTRUCTIONS.md` for editorial discipline
> and to `SPEC.md` §4 for data shapes.

## Examples

Worked examples illustrating voice and structure live in
`.claude/skills/me-war-intel-brief-web/examples/`:

- `day-40-ceasefire.md` — handling a ceasefire-day brief with a probability
  jump > 5 points.
- `day-47-three-track.md` — multi-mediator diplomatic landscape.
- `day-50-deal-architecture.md` — synthesis brief on the deal structure.

Refer to these whenever the §3.5 voice discipline drifts.

## What this skill must never do

- Open a pull request. v1.8 is direct-push.
- Invoke any GitHub Action. The remote validator was retired in Phase 1.
- Hand the validator a brief with un-wrapped URLs in `## Sources` (Step 4b
  must run first).
- Hand the validator a brief whose Exec / Implications / total bands were
  not pre-checked (Step 4a must run first).
- Push without `gh auth status` succeeding.
- Leave `.lock` on disk after the run terminates.
- Invent analytical rules not present in DESIGN_v1.8.md §3.
