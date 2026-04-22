# ME War Intel Brief — Editorial Instructions

These are the editorial conventions the routine applies to every brief. The
substantive content of several sections below is **scaffolded**: the analyst
(@8gara8) will paste in the final editorial text from the existing skill at
`/mnt/skills/user/me-war-intel-brief/SKILL.md` after the repo is live. Until
then, the structure and marked placeholders below define what goes where.

## 1. Research conventions

### Priority sources

Prioritize, in approximately this order of analytical weight:

- Reuters
- Al Jazeera
- Associated Press
- NPR
- CBS / NBC / ABC News
- Times of Israel
- Official US DoD / CENTCOM releases
- Wikipedia — Timeline of the 2026 Iran war (as a cross-check index, not primary)
- HRANA (for Iranian civilian casualty counts, alongside official Iranian figures)

<!-- ANALYST: insert full priority-source list and any newly promoted outlets here -->

### Search query patterns

<!-- ANALYST: insert canonical daily search patterns from the existing skill. Examples expected:
  - "Iran strikes [date]"
  - "Israel IDF statement [date]"
  - "Hormuz shipping [date]"
  - "IAEA Iran [date]"
-->

### Dual-sourcing rule

Every factual claim that could be contested (casualty figures, damage
assessments, intent attribution) must be supported by at least two independent
sources of different provenance (e.g., Al Jazeera + Reuters, or HRANA + Iranian
state media). If only one source is available, prefix the claim with
"Unconfirmed:" and note the single-source constraint in the body.

## 2. Multi-clock framework

Six analytical clocks are tracked on every brief. Each has a state (`critical`,
`low`, `degraded`, `moderate`, `high`, `ample`, `none`) and a trajectory
(`improving`, `stable`, `worsening`, `draining`, `n/a`).

1. **Political will** — the willingness of each principal to continue
   military operations. States: how resilient is the domestic coalition?
2. **Active deadlines** — any time-bound commitments (ultimatums, IAEA
   windows, UN resolutions, force-posture expiries). `none` is a valid state.
3. **Energy infrastructure** — Hormuz throughput, refinery status, pipeline
   integrity, Taiwan LNG routing.
4. **Interceptor capacity** — Israeli Arrow / David's Sling / Iron Dome stock
   depletion against US replenishment rate.
5. **Negotiation capacity** — the existence and maturity of mediation tracks
   (Oman, Qatar, Switzerland, China, UN).
6. **Oil reserves** — global / strategic reserves drawable on to offset
   any Hormuz disruption.

<!-- ANALYST: insert the canonical state-change rules and worked examples for each clock -->

## 3. Editorial style

- **Neutrality.** No editorializing on US, Israeli, or Iranian motives. Use
  the actor's own stated position. If you infer motive, label it explicitly.
- **"Analytical judgment:" prefix.** Every judgment that is not directly
  attributable to a source must carry this prefix. This is non-negotiable.
- **Prose density.** Brief paragraphs are dense and declarative. No hedging
  adverbs ("arguably", "seemingly"). When uncertainty exists, name the
  source of uncertainty.
- **Ceasefire probability.** Reported as an integer 0–100 in the frontmatter.
  This is an analytical judgment, not a prediction-market figure. Explain
  any move of more than 5 points day-over-day in the body.
- **Numeric discipline.** Casualty figures are the latest reported cumulative
  total; deltas are explicit 24–48h figures. Round only when a source is
  already rounded.

<!-- ANALYST: insert style-guide examples (good / bad sentences) from the existing skill -->

## 4. Standing analytical threads

These are durable, multi-brief threads tracked across the war. Each should be
referenced when the day's developments touch it; the full list is refreshed
in `content/context.md`.

- **Taiwan LNG vulnerability.** ~50% of Taiwan grid baseload is LNG; track
  Taiwan reserve days, LNG spot, and any TSMC commentary.
- **Israeli interceptor depletion.** Back-solve burn rate per barrage from
  intercept percentages; compare to known US production cycle.
- **US domestic political will.** Track polling, congressional resolutions,
  and 2026 midterm framing.
- **Semiconductor supply chain.** Track any shipping or energy-driven
  disruption to Taiwan or Southeast Asia chip flows.
- **Chinese response posture.** Track Beijing's public statements, Iranian
  oil tanker scheduling, and any private-channel mediation hints.

<!-- ANALYST: insert any newly surfaced threads here as the war evolves -->

## 4.5 Structured component data — sidecar module

Structured data for `<EscalationGauge>`, `<EventsTable>`, and `<CasualtiesTable>`
does **not** live inside the `.mdx` file. For each brief, create a sibling
TypeScript module at `content/briefs/<slug>.data.ts` that default-exports a
`BriefData` object (see `lib/brief-data.ts` for the type). The MDX body
references each component as a bare tag (`<EscalationGauge />`, `<EventsTable />`,
`<CasualtiesTable />`); `components/BriefView.tsx` supplies the props from the
sidecar at render time.

After creating the sidecar, register it in `lib/brief-data.ts` by adding an
`import` and a one-line entry to `briefDataBySlug` keyed by the brief slug. The
build will fail fast if a brief is rendered without a matching sidecar entry.

This is a **security boundary**: `next-mdx-remote@6` ships with
`blockJS: true`, which blocks JavaScript expressions inside MDX to prevent a
prompt-injected source from landing executable code in the rendered output.
Keep the hardening intact — never pass `blockJS: false` to `MDXRemote`, and
never put object or array literals as props on the structural components in the
`.mdx` file.

## 5. Per-section writing guidance

### Executive Summary

- 150–300 words. A single dense paragraph.
- Open with the day's most consequential development.
- Close with the overall escalation posture and the single biggest open question.
- End with exactly one "Analytical judgment:" sentence about the 7-day
  trajectory.

### Escalation Gauge

- Three indicators: direction, 7-day risk, spillover.
- Rationale for each is a single sentence — enough to stand on its own in
  the component's table row.
- A prose paragraph of ~200 words follows the gauge, synthesizing the three
  rationales into the day's overall strategic picture.

### Key Events

- 4–7 rows via `<EventsTable>`.
- Every pivotal-importance event must be covered. Medium/low-importance events
  that don't change the strategic picture can be omitted.
- Each row's `summary` and `impact` fields are one to two sentences each.

### Casualties

- Four actors, in fixed order: US, Israel, Iran & Proxies, Other.
- Dual-source Iranian casualties where possible (HRANA + Iranian state media).
  Use free-text fields to preserve the dual count (e.g.,
  "380 KIA per HRANA / 320 KIA per Iranian state media").
- The `status` field is one sentence describing force or diplomatic posture.

### Strategic Implications

- 400–800 words total, divided into 2–3 numbered, bold-titled analysis sections.
- Each section has one or two dense paragraphs.
- At least one section must tie the day's developments to one or more
  standing analytical threads.
- Close each section with an "Analytical judgment:" sentence where a judgment
  is being made.

<!-- ANALYST: insert any additional per-section guidance from the existing skill -->
