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

Before writing the `.mdx` to disk, transform every source URL to
`https://web.archive.org/web/2026/<original>`. Idempotent: do not double-wrap
URLs that already contain `web.archive.org/web/`.

Two locations to wrap:

1. **Frontmatter `sources:` array — primary target.** This is what
   `scripts/validate-brief.ts` HEAD-checks; failing to wrap here is what trips
   the `>2 broken URLs` validator failure mode.
2. **Body `## Sources` / `## Sources & Attribution` section.** Current briefs
   use prose-form attribution with no embedded URLs, but wrap any that exist.

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

Inlined verbatim from `ME_DESIGN_v1.8.md` §3 (Apr 27, 2026). Heading levels shifted one deeper so they nest under this H2.

### 3. The Analytical Framework (Preserved From Existing Workflow)

This section codifies the analytical framework that has been refined over 50+ days of manual brief writing (Days 33–51). It is preserved verbatim in the new web workflow. Everything in §3.1 through §3.4 is a hard requirement on the forked skill.

#### 3.1 Core Discipline

- **Neutrality**: Present all sides' claims and actions without editorializing.
- **Analytical judgments**: Prefix with "Analytical judgment:" when offering assessments.
- **Ceasefire probabilities**: Provide percentage estimates for key scenarios, updated daily.
- **Trend tracking**: Compare with previous day's rolling context to identify acceleration or deceleration.
- **Dual sourcing on contested numbers**: Use HRANA (Human Rights Activists News Agency) figures alongside official Iranian figures where available. Extend to other actors: Lebanon Ministry of Health vs. IDF; US self-reported vs. Iran-claimed aircraft losses; Iranian strike damage claims vs. Israeli/Western denials.
- **Source diversity (critical)**: Every brief must draw from a wide spread of source categories — not a single narrative track. This is the core discipline of the exercise, operationalized in the Source Categories subsection below. The *beauty* of this daily brief is looking at all sides simultaneously; a brief sourced only from Western wires fails even if `sources_count ≥ 8`.
- **Cumulative totals**: Track across ALL theaters — Iran, Lebanon, Israel, US, Iraq, Gulf states.
- **Taiwan relevance**: Flag LNG supply, energy security, and semiconductor implications when materially relevant.

##### Source Categories — The Sourcing Rubric

Every brief must cite sources drawn from **at least six distinct categories** below. Twelve categories are defined. Single-category dominance (e.g., all ten sources being US cable news) is a failure mode and the validator will reject the brief. A brief that achieves six categories with eight sources is stronger than a brief that achieves two categories with twelve sources.

| # | Category | Examples |
|---|----------|----------|
| 1 | **Western mainstream press** | CNN, NPR, PBS, CBS, NBC, CNBC, ABC, Fox News, NYT, WSJ, Axios, AP, Reuters, Newsweek, Time, Fortune, The Hill |
| 2 | **International & regional press** | Al Jazeera, BBC, Times of Israel, Kurdistan24, New Arab, Al Bawaba, CSMonitor, Euronews, Haaretz |
| 3 | **Iranian state media** | Tasnim, Fars, IRNA, IRIB, ISNA, Mehr, Press TV, IRGC-linked outlets |
| 4 | **Iranian officials direct** | Pezeshkian, Araghchi, Ghalibaf (X posts), nuclear chief statements, parliament communications |
| 5 | **Israeli military & government** | IDF releases, Netanyahu office, Katz statements, Israeli official readouts |
| 6 | **Arab & regional governments** | Oman FM, Egypt FM, Pakistan PMO, Saudi MOFA, UAE WAM, Iraq government, KUNA, regional press releases |
| 7 | **Russia / China / other adversary sources** | Kremlin, Russian state media, Chinese MOFA, Chinese official readouts |
| 8 | **Human rights & independent monitoring** | HRANA, IFRC, Lebanon Health Ministry, Lebanon Civil Defense, UNIFIL, Amnesty, HRW, NetBlocks |
| 9 | **US government & agencies** | CENTCOM, State Department, White House briefings, BLS, EIA, DoD readouts, Trump Truth Social |
| 10 | **European leaders, Vatican, international bodies** | Merz, Macron, Starmer, Sánchez, Pope Leo XIV, UN, UNSC, IAEA, IATA, IEA, EU statements |
| 11 | **Think tanks & named expert analysts** | CFR (Takeyh), Soufan Center, Alma Center, Parsi, IISS, Brookings, RUSI |
| 12 | **Market & maritime & primary economic data** | MarineTraffic, Kpler, Bloomberg, JPMorgan, Evercore, Goldman, AAA, exchange data, shipping trackers |

**Handling adversarial / state media:** Iranian state media, Russian state media, and Chinese official statements are *not* neutral reporting — but they are indispensable for understanding what the regime is signaling publicly, how it is framing events for its own audience, and what its stated intentions are. Rules:

1. Cite state media AS a statement from that actor, never as a neutral fact. ("Tasnim reported..." not "Iranian forces destroyed...")
2. When the underlying event is contested (casualties, military outcomes, political progress), pair state media claims with counter-claims from the opposing side in the same sentence or adjacent sentence.
3. The analytical value is often in the *divergence* — what Tasnim claims vs. what MarineTraffic shows; what CENTCOM announces vs. what IRNA acknowledges. That gap is itself information worth surfacing.
4. Never rely on a single-source claim for a factual assertion in the Executive Summary or Analytical Judgment sections. Require two-source confirmation, ideally from different categories.

The JSON metadata file records the categories used via a `source_categories` array (see §5.2). The validator enforces the six-category minimum (§7.2, Appendix C.2).

#### 3.2 The Multi-Clock Endgame Framework

Every analytical judgment paragraph invokes this framework explicitly. Six clocks map the war's dynamics:

1. **Active deadline clock** — the specific ultimatum or deadline currently in play (e.g., "April 6 power-plant deadline")
2. **Interceptor clock** — Israel's and allies' defensive missile inventory depletion rate
3. **Oil reserve clock** — IEA SPR releases and strategic reserve drawdowns
4. **Political will clock** — US polls, congressional pressure, domestic approval
5. **Negotiation-capacity clock** — active mediators, interlocutors, backchannel status
6. **Energy-infrastructure clock** — energy-MAD deterrence (Hormuz closure, Ras Laffan damage, Gulf desal)

The framework is invoked by name in every Analytical Judgment section. Brief invocation is fine ("Under the multi-clock framework: the negotiation-capacity clock is now dominant..."). Mechanical enumeration of all six every time is not required.

#### 3.3 The Three-Gauge Structure

Every brief opens with three gauges. The existing workflow used fixed labels:

- Overall Conflict Direction
- Escalation Risk (Next 7 Days)
- Regional Spillover Risk

This worked pre-ceasefire. Post-ceasefire (Day 40 onward), the briefs organically shifted to labels that tracked the actual top-three risk vectors (US-Iran Ceasefire / Islamabad Talks / Hormuz, for example). **The new skill makes this explicit.**

**Rule:** three gauges, labeled to match the three most salient active risk vectors as of today. Default to the fixed labels during pre-war-phase, quiet periods, or whenever no other vectors clearly dominate.

Each gauge has:
- A color-coded level: 🟢 / 🟡 / 🔴
- A 2–3 word assessment (HOLDING, FRAGILE, ESCALATING, STALLED, CLOSED, etc.)
- A one-sentence detail

Emoji conventions:
- 🔴 ESCALATING / CRITICAL / EXTREME
- 🟡 MIXED / CONDITIONAL / FRAGILE / UNCERTAIN
- 🟢 DE-ESCALATING / HOLDING / ADVANCING

Gauge color also maps to cell background in tables (see §4.2 for hex values).

#### 3.4 The Rolling Context Mechanism

Analytical continuity across briefs is maintained by a single file: `/context/rolling.md`. It is read at the start of every brief run and updated at the end.

**What the rolling context must contain:**

1. **War status summary** — current day count, active fronts, live deadlines, active talks, key negotiators
2. **Cumulative casualties** — Iran (official + HRANA), Lebanon, Israel, US, Iraq, Gulf states, with 24–48h delta
3. **Military status** — CENTCOM stats (strikes, sorties, vessels destroyed), US force posture, Iranian capability, proxy activity
4. **Diplomatic status** — active tracks, mediators, key delegations, recent communications
5. **Energy / economic** — Brent, gas, LNG spot, Ras Laffan capacity, Hormuz transit count, key economic indicators
6. **Ceasefire probabilities** — current estimates for key scenarios
7. **Standing analytical priors** — structural weaknesses identified in earlier briefs that persist as analytical frames until explicitly retired with evidence (see §3.5.6)

**Target length:** 600–1000 words. Monthly audit routine prunes stale entries.

**Initial content (migrated at Phase 1):** Use the most recent production rolling context from the existing workflow. This includes (as of mid-April 2026): cumulative Iran casualties 1,900+ official / 3,500+ HRANA / 26,500+ wounded / 3.2M displaced; Lebanon 1,953+ killed / 1.1M displaced; Israel 21+ civilian KIA + 11 soldiers KIA / 6,008+ injured; US 13 KIA / 380+ WIA / multiple aircraft lost; Ras Laffan 83% capacity with 3–5 year repair; Hormuz traffic 14 ships over 4 days (pre-war 100–120/day); six-clock framework with all six active; three-track diplomatic architecture (Islamabad / Washington / London).

#### 3.5 Lessons Learned from 50 Days — Hard Constraints for the New Skill

This subsection is the most important in the document. The prior workflow ran Days 33 through 51. An honest audit reveals patterns to keep and drifts to correct. Every rule below is a hard constraint on the forked skill.

##### 3.5.1 What worked — keep verbatim

- The multi-clock framework has proven durable across pre-ceasefire escalation, the Day 40 ceasefire, the Islamabad talks, and the Round 2 naval escalation. Keep.
- The three-track diplomatic architecture (Islamabad / Washington / London) framing emerged Day 43 and has been genuinely predictive. Keep.
- The Taiwan LNG standing section works because it applies the multi-clock lens to a specific investment question. Keep.
- Casualty dual-attribution (HRANA vs. official) is a signature voice move. Keep.
- Scenario probability matrices force calibration. Keep.

##### 3.5.2 Adaptive gauge labels

**Problem observed:** Pre-ceasefire, the fixed labels (Overall Direction / Escalation Risk / Spillover) worked. Post-ceasefire, briefs organically relabeled to match actual risk vectors. This wasn't permitted explicitly by the old skill.

**Rule:** Three gauges, labeled to match the three most salient active risk vectors as of today. Always 🟢🟡🔴 with 2–3 word assessment + one-sentence detail. Fall back to fixed labels only when no clearly dominant vectors exist.

##### 3.5.3 Official claim + skeptical counter

**Problem observed:** Around Days 46–48, briefs started integrating "80% complete" figures from Pakistani FM Dar and Trump. These were treated with insufficient skepticism. The deal then collapsed on Day 51 with the USS Spruance naval seizure.

**Rule:** When a political actor publishes a progress figure, percentage, or optimistic assessment, cite it AS a claim from that actor. Do not integrate it into analytical judgment as if independently verified. Always pair with a skeptical counter.

##### 3.5.4 Length caps (UPDATED v1.8 to match production validator)

**Problem observed:** Analytical judgment paragraphs crept from 400–500 words (Days 33–40) to 700–900 words (Days 45–51). Length ≠ insight. Day 059 (PR #22) failed the validator on three of four word-count rules simultaneously: Exec 357 vs 300, Implications 981 vs 800, body 4077 vs 4000. The high-event days are exactly when the temptation to "fit one more development in" tips the brief over.

**Rule (these are the production validator's actual thresholds — the doc is now the source of truth, no more drift):**

| Section | Range (words) | Validator field |
|---------|---------------|-----------------|
| Executive Summary | **150–300** | `## Executive Summary` block in MDX body |
| Analytical Judgment | 400–600 | `## Analytical Judgment` block (informational; not validator-enforced as of v1.8 but skill should self-cap) |
| Strategic Implications (entire section) | **400–800** | `## Strategic Implications` block — three subsections combined, NOT each |
| Total body + sidecar prose | **1200–4000** | `body + sidecarProse(data)` where `sidecarProse` concatenates `escalation.rationale.{direction,risk7d,spillover}`, every event's `event/summary/impact/source`, and every actor's `casualties.cumulative/status` |
| Sidecar `.data.ts` prose contribution | **target ~1500** | derived budget — see §5.2 sidecar budget rule below |

**Strategic Implications structure clarification:** the section has three subsections that together stay within 400–800. That means the per-subsection target is ~250 words, not 200–300, so the section sums to roughly 750 — leaving 50 words of headroom under the 800 cap. The "3 sections × 200–300 words each" framing in v1.7 mathematically allowed 900 and was a primary cause of the Day 059 overshoot.

**Always end Strategic Implications with the Taiwan section.**

##### 3.5.5 Quantify every gap

**Rule:** Numeric comparisons are the voice. Always frame deltas numerically:
- "14 ships vs. 100–120/day pre-war"
- "~50 officials killed vs. operational tempo unchanged"
- "83% Ras Laffan capacity, 3–5 year repair"
- "3,500+ HRANA vs. 1,900+ official"

##### 3.5.6 Carry forward structural priors

**Problem observed:** Days 47–50 softened language about Lebanon as a ceasefire appeared to form. Then violations resumed. Earlier structural assessments were memory-holed when surface news felt positive.

**Rule:** Structural weaknesses identified in earlier briefs persist as analytical priors in the rolling context until explicitly retired with evidence. The skill re-asserts them in each brief that remains relevant.

Known standing priors as of April 20, 2026 (to migrate into initial rolling context):
- **The Lebanon gap** (Day 40): Iran's 10-point plan demands end to Israeli Lebanon operations; Israel is not party to the US-Iran ceasefire and has shown no intent to halt.
- **The mine clearance problem** (Day 42): Iran's sea mines in Hormuz shipping lanes require weeks of physical clearance even with full cooperation.
- **Toll-institutionalization risk** (Day 45): Iran's $2M/ship Hormuz fee proposal, if accepted at any level, becomes permanent revenue (~$29B/yr at pre-war flow).
- **Israel's independence from the US-Iran framework** (persistent): Netanyahu has consistently acted outside US coordination; any US-Iran deal that depends on Israeli compliance is structurally fragile.
- **China air-defense resupply risk** (Day 44): CNN intelligence reporting indicates China preparing to ship air defense systems to Iran — shortens the window in which US has overwhelming air superiority.

##### 3.5.7 Source diversity tracking (critical)

**Problem observed:** Across Days 33–51, the source lists in briefs varied from 6 to 28 named sources. Breadth was strong in briefs where the war had multiple active fronts (Days 38, 40, 44) but narrowed significantly when the analytical focus shifted to a single story (e.g., Islamabad talks briefs leaned heavily on Western wires + Pakistani press, losing Iranian state media perspective). Earlier drafts of this design doc compressed the source list to 12 Western-leaning outlets and lost the multi-sided discipline entirely.

**Rule:** Every brief must cite sources from at least six of the twelve source categories defined in §3.1. Track the categories used in the JSON metadata field `source_categories` (array of strings from the controlled vocabulary). The validator enforces this at merge time.

**The core insight:** the analytical value of this brief series is *looking at all sides simultaneously*. A brief that cites eight Western wires is weaker than a brief that cites three Western wires, two Iranian state outlets, one Israeli military source, one Arab mediator government, and one human-rights monitor — even though the former has more raw sources. Breadth beats depth on single-narrative tracks.

##### 3.5.8 Research depth tracking

**Problem observed:** Some briefs had 8–10 source searches; others felt thin at 3–4. No metadata visibility.

**Rule:** Track `sources_count` in JSON metadata. Validation workflow flags counts below 8 for non-Quiet-Day briefs. Combined with §3.5.7, the effective minimum is "at least 8 sources drawn from at least 6 of 12 categories."

##### 3.5.9 Quiet Day over fabrication

**Rule:** If fewer than 3 material developments, publish a short "Quiet Day" brief with `quiet_day: true` frontmatter flag. Do not pad with generic material. Quiet Day briefs are exempt from §3.5.7 and §3.5.8 minimums.

##### 3.5.10 Taiwan acknowledgment

**Rule:** If a day has no fresh Taiwan-relevant development, acknowledge explicitly ("No fresh Taiwan-relevant developments today; prior assessments unchanged.") rather than repeating generic LNG-vulnerability language.

##### 3.5.11 Pivotal star discipline

**Rule:** ⭐ emoji reserved for genuine inflection points in the war's trajectory. Maximum one per brief, often zero. Excessive use (observed in the ceasefire period) dilutes meaning.

##### 3.5.12 URL archive wrapping (NEW v1.8 — codified from PR #22 failure)

**Problem observed:** Day 059 (PR #22) produced a brief mixing wrapped (`https://web.archive.org/web/2026/<original>`) and unwrapped publisher URLs. Three of the unwrapped ones (Axios + two US News) returned non-OK from the validator's HEAD probe, busting the >2 broken-URL ceiling. Day 058 had wrapped every URL and passed. The convention existed in production; v1.8 makes it an enforceable rule.

**Rule:** Every source URL the skill emits in `## Sources` MUST be wrapped as:

```
https://web.archive.org/web/2026/<original-url>
```

regardless of publisher, regardless of whether the bare URL would resolve right now. The validator short-circuits any URL containing `web.archive.org` (no network call, treated as resolved). Wrapping is the cheap fix that eliminates an entire class of CI false-positive — publisher rate-limits, geo-blocks, transient 5xx, paywall walls, and the occasional URL that resolves locally but not from the validator's HEAD-request user-agent.

This is a hard rule on skill output, not a validator rule. Optional helper: `scripts/normalize-sources.ts` can rewrite any unwrapped URL to its archive-wrapped form as a final transform step before write — see Appendix C.8.

##### 3.5.13 Pre-emit word-count guardrails (NEW v1.8 — codified from PR #22 failure)

**Problem observed:** Day 059 failed three of four word-count rules at validation time. The skill had no internal sense of word budget while drafting; it generated long sections and discovered the overshoot only after the validator ran. On a high-event day this is the predictable failure mode.

**Rule:** Before writing the `.mdx` and `.data.ts` to disk, the skill MUST count words in each of the budget-bound sections and trim or regenerate any section that exceeds its band:

1. Count `## Executive Summary` body → must be in [150, 300]. If over, compress; if under, add a development.
2. Count `## Strategic Implications` body (full section, including all three subsections) → must be in [400, 800]. Target 750. If over, the cut should come from rhetorical buildup and parenthetical hedging, not substance.
3. Compute `body_words + sidecarProse_words` → must be in [1200, 4000]. The dominant lever once Exec and Implications are in band is the sidecar — `escalation.rationale.{direction,risk7d,spillover}` and per-event `event/summary/impact/source` are the three biggest contributors.
4. Sidecar prose target: ~1500 words, hard cap derived. This leaves ~2500 for the MDX body which comfortably accommodates exec(300) + escalation prose(~350) + implications(800) + headers/glue/sources(~300) + analytical judgment(~400) + Taiwan(~250) + casualties block(~100).

The validator is the second check, not the first. Treat the validator as a backstop that catches drafting bugs, not as the primary word-count enforcer. A skill that hands the validator a well-budgeted brief should fail validation at most once a quarter (and that once should be on a URL-resolution flake, not a length overshoot).

#### 3.6 Exemplar Briefs — Few-Shot Material for the Skill

The new skill includes three full briefs as in-context few-shot material. These should be committed in full to `.claude/skills/me-war-intel-brief-web/examples/`:

- **Day 40 (April 8, 2026) — Ceasefire Announcement.** Shows how to pivot analytical tone when a major development breaks the prior trajectory. Captures the 12-hour reversal from "civilization will die" to ceasefire, and immediately flags the three structural risks (Hormuz definition, Lebanon exclusion, 10-point plan maximalism) that later materialized. Teaches: celebrate the development without memory-holing the structural weaknesses.

- **Day 47 (April 15, 2026) — Halfway Three-Track Analysis.** Shows the three-track diplomatic framework at full maturity. Synthesizes Islamabad + Washington + London tracks, identifies progress, stalls, and interdependencies. Teaches: multi-party negotiations require an architectural lens, not a serial narrative.

- **Day 50 (April 18, 2026) — Deal Architecture Emergence + Unforced Error.** Shows how to handle an analytical plot twist. Covers Iran's Hormuz reopening (positive), Pakistan FM Dar's "80% complete" framing (ambiguous), and Trump's unforced error re-announcing the blockade (negative). Teaches: hold multiple assessments in tension; don't collapse to a single narrative.

These briefs (converted to MD from their existing DOCX archive) serve as the voice and structure anchor for the skill.

---

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
