# Middle East War Daily Intelligence Brief
## Web Publication Upgrade — Design Document

**Version:** 1.7
**Date:** April 20, 2026
**Author:** [@8gara8](https://x.com/8gara8)
**Status:** Ready for implementation
**Stack:** Claude Routines → GitHub → Vercel

---

## 1. What This Is

This is a workflow upgrade, not a new product.

The current workflow produces landscape DOCX files via a Claude skill and Node.js `docx-js`. DOCX is hard to read on phones, hard to share via link, and hard to skim without opening. This document specifies how to replace that output with a web page — same content, same analytical framework, just rendered somewhere that's actually readable on a phone and linkable.

Secondary benefit: the daily research and writing becomes a scheduled Claude Routine instead of a manual evening task.

### What changes

- **Output format**: DOCX → Markdown + JSON, rendered as a web page
- **Trigger**: manual in-chat ("run update") → scheduled daily routine (with API escape hatch for ad-hoc runs from phone)
- **Storage**: scattered `outputs/` folders → GitHub repo with versioned history
- **Sharing**: send a file → send a URL

### What stays the same

- The analytical framework: six-clock endgame model (§3.2), three-gauge escalation structure (§3.3), dual-attribution discipline, Taiwan LNG thread, scenario probability matrices
- The tone: blunt, numbers-first, skeptical of official claims
- The section structure: header → escalation gauge → executive summary → key events → casualties → strategic implications → sources
- The rolling-context continuity mechanism (§3.4)
- The author: [@8gara8](https://x.com/8gara8)

This document is self-contained. Everything needed to implement is in this file.

### 1.1 Changelog

The doc has iterated through seven versions. Each version is preserved as its own file (`DESIGN_v1.3.md`, `v1.4.md`, etc.) so future readers can see the evolution of the thinking, not just the final state.

| Version | Scope of change |
|---------|-----------------|
| v1.0 | Original workflow spec: DOCX output via manual skill trigger. Superseded. |
| v1.1 | Added lessons-learned section from 50 days of manual briefs. Encoded what worked and what drifted. |
| v1.2 | Positioned the new skill as a fork of the existing `/mnt/skills/user/me-war-intel-brief/`. Corrected framework to six clocks (not five). |
| v1.3 | Made the doc fully self-contained — no references to external skill files or `/mnt/skills/` paths. Anything Claude Code needs is inlined. |
| v1.4 | Expanded §2 from 2 subsections to 6. Added detailed workflow with timing, auth/permissions model, PR lifecycle with failure branches, rollback procedure. Addressed the "how does Claude actually talk to GitHub" gap. |
| v1.5 | Added Appendix C — actual reference implementations (GitHub Actions YAML, validate.js, JSON schema, SKILL.md template, Next.js config, repo setup checklist, debugging guide). ~540 lines of copy-pasteable code. |
| v1.6 | Restored full source-diversity discipline. Added 12-category sourcing rubric, hard rule of minimum 6 categories per brief, explicit guidance on adversarial/state media, validator enforcement. The v1.2–v1.5 drafts had silently narrowed to 12 Western outlets — v1.6 fixes this regression in three places (§3.1 rubric, §3.5.7 lesson, validator). |
| v1.7 | Folded in patterns from a sibling Evangent design doc: added this changelog, explicit scope boundaries (§11), success metrics (§12), and split risks from open questions (§10 → §10.1 + §10.2). No changes to architecture, rubric, or validation logic. |

---

## 2. System Architecture

### 2.1 End-to-End Flow

```
[1] Claude Routine fires                         (daily 6 AM Taipei)
  ↓
[2] Research phase                               (web_search × 5–10)
  ↓
[3] Brief generation                             (skill: me-war-intel-brief-web)
  ↓
[4] Output: brief-YYYY-MM-DD.md + metadata.json
  ↓
[5] Git commit + push                            (via Claude's git tools)
  ↓
[6] Vercel auto-deploy                           (webhook, ~60 sec)
  ↓
[7] Site live, brief readable on phone
```

### 2.2 Component Responsibilities

| Component | Role | Lives Where |
|-----------|------|-------------|
| Claude Routine | Fires on schedule; orchestrates research + generation; commits to git. | Anthropic-managed cloud (`claude.ai/code/routines`) |
| Skill: `me-war-intel-brief-web` | Codifies workflow, voice, structure, analytical framework. Loaded fresh each run. | `.claude/skills/me-war-intel-brief-web/SKILL.md` |
| Rolling Context | Running state across briefs — casualties, diplomatic status, standing analytical priors. | `/context/rolling.md` |
| GitHub Repo | Source of truth. Stores briefs, metadata, skill, context, site code. | `github.com/8gara8/me-war-intel-brief` |
| Next.js Site | Static site. Reads MD + JSON at build time. Renders briefs with gauges, search, archive. | `/web` in the repo |
| Vercel | Deployment. Listens to GitHub webhook, builds, serves via CDN. | Vercel dashboard |

### 2.3 Detailed Workflow with Timing

§2.1 is the skim-level diagram. This is the implementation-level diagram. It separates what happens inside the Claude Routine session from what happens in GitHub and Vercel, and gives approximate timing so there's a testable expectation of when a brief goes live.

```
┌──────────────────── CLAUDE ROUTINE SESSION (~8 min) ────────────────────┐
│                                                                         │
│  T+0:00   [1] Routine fires on schedule (22:00 UTC = 06:00 Taipei)      │
│               └─→ Fresh clone of repo                                   │
│                                                                         │
│  T+0:30   [2] Load /context/rolling.md                                  │
│               Load .claude/skills/me-war-intel-brief-web/SKILL.md       │
│               Calculate day number (today − Feb 28, 2026)               │
│                                                                         │
│  T+0:45   [3] Research phase                                            │
│               └─→ 5–10 web_search calls across active war fronts        │
│                                                                         │
│  T+4:00   [4] Write brief per skill template                            │
│               └─→ /briefs/YYYY-MM-DD.md                                 │
│               └─→ /briefs/YYYY-MM-DD.json                               │
│               └─→ Update /context/rolling.md                            │
│                                                                         │
│  T+7:00   [5] Git operations (via Claude GitHub App — see §2.4)         │
│               └─→ Create branch claude/daily-brief-YYYY-MM-DD           │
│               └─→ Commit 3 files                                        │
│               └─→ Push branch to origin                                 │
│               └─→ Open PR against main with auto_merge=true             │
│                                                                         │
│  T+8:00   Routine session ends                                          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────── GITHUB (~2 min) ────────────────────────────────────┐
│                                                                         │
│  T+8:00   [6] GitHub Action validate-brief.yml fires on PR open         │
│               └─→ JSON schema check                                     │
│               └─→ URL resolution check                                  │
│               └─→ Date consistency check                                │
│               └─→ Length sanity check                                   │
│               └─→ sources_count ≥ 8 check (unless quiet_day: true)      │
│                                                                         │
│  T+9:30   Branch A: ALL CHECKS PASS                                     │
│               └─→ GitHub auto-merges PR to main                         │
│               └─→ Triggers Vercel webhook                               │
│                                                                         │
│           Branch B: ANY CHECK FAILS (see §2.5 for recovery)             │
│               └─→ PR labelled `needs-review`                            │
│               └─→ Email alert to @8gara8                                │
│               └─→ Brief does NOT go live                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────── VERCEL (~90 sec) ───────────────────────────────────┐
│                                                                         │
│  T+9:35   [7] Vercel webhook fires on push to main                      │
│               └─→ Fresh Next.js build                                   │
│               └─→ Reads all /briefs/*.md + *.json                       │
│               └─→ Regenerates /briefs/index.json                        │
│               └─→ Builds static pages                                   │
│               └─→ Pushes to CDN                                         │
│                                                                         │
│  T+11:00  Brief live at production URL                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Happy path total: ~11 minutes from routine fire to brief live on phone.
```

Vercel preview deployments on PRs are separate from production deploys. Previews give a temporary URL for eyeballing before merge; production deploys only happen on push to `main`.

### 2.4 Auth and Permissions Model

Four authentication handoffs make this work. All are configured once, then zero-maintenance.

| From → To | Credentials | Scope | Configured in |
|-----------|-------------|-------|---------------|
| Claude Routine → GitHub | **Claude GitHub App** | Read repo; create branches under `claude/*`; commit to `/context/rolling.md`; open and auto-flag PRs | Install `github.com/apps/claude` once (Phase 4); select `me-war-intel-brief` repo |
| GitHub Action → repo | Default `GITHUB_TOKEN` | Read repo contents, write PR comments, set PR labels, trigger auto-merge | Automatic — nothing to configure |
| Vercel → GitHub | Vercel's GitHub integration | Read repo (for build); write deploy status checks to PRs | One-time OAuth when connecting repo to Vercel project (Phase 2) |
| Claude Routine → Anthropic cloud | Max plan quota | 15 routine runs/day; we need 1/day + occasional API fires | Already paid |

**The Claude GitHub App is the critical installation.** Without it, the Routine can't push branches or open PRs. It is the single action that turns Phase 4 from "configured" to "live." The other three handoffs are either automatic (GitHub Action) or one-time OAuth flows (Vercel, Anthropic account).

### 2.5 PR Lifecycle with Failure Branches

Every brief passes through this lifecycle. The happy path is auto-merge to main; the failure path is a PR that sits open with clear signals.

```
Routine opens PR with auto_merge=true
           │
           ▼
GitHub Action validate-brief.yml runs
           │
           ├──────────────────────────┐
           ▼                          ▼
       ALL PASS                  ANY FAIL
           │                          │
           ▼                          ▼
GitHub auto-merges PR          PR stays open
           │                   Labelled `needs-review`
           ▼                   Red X on commit
Vercel builds and deploys      Email alert to @8gara8
           │                          │
           ▼                          ▼
Brief live                     Recovery options:
                               (a) Fix via GitHub web UI on phone
                                   (edit MD frontmatter or prose,
                                   push to PR branch → re-runs checks)
                               (b) Ignore — next day's routine run
                                   creates a fresh PR that supersedes
                               (c) Close PR + fire Routine via API
                                   to retry with fresh research
```

**Why auto-merge by default is safe:**
- Validation catches the high-frequency failure modes: malformed JSON, unresolved URLs, missing frontmatter, low source count, length violations
- The voice/analytical quality is defended by the skill's hard constraints (§3.5), not by human review — so a human preview wouldn't catch voice drift either
- Bad briefs on main are recoverable in ~2 minutes (§2.6)
- Monthly audit routine catches slow-drift issues

**When to disable auto-merge (one-off):**
Certain war-state transitions warrant higher scrutiny — e.g., a ceasefire announcement day, a major escalation. Toggle auto-merge off in the GitHub repo settings (Settings → Pull Requests → Allow auto-merge). The Routine will still open the PR; it just won't self-merge. Remember to toggle back on when the moment passes.

**Why human-in-the-loop is NOT the default:**
3D is in Taiwan, UTC+8. The Routine fires at 22:00 UTC = 06:00 Taipei, timed so the brief is ready when 3D wakes up. Gating on manual approval would delay publication until 3D actively reviews — losing the core value of the automated workflow. The phone-based rollback path (§2.6) is the explicit alternative to pre-publication review.

### 2.6 Rollback Procedure

Briefs that ship and need to be pulled — for factual errors, misattributed sources, or analytical mistakes — can be reverted quickly. Rollback is deliberately designed to be doable from a phone.

**From phone (fastest, ~2 min):**
1. Open `github.com/8gara8/me-war-intel-brief` in mobile browser
2. Navigate to the commit you want to undo (usually the most recent merge to main)
3. Three-dot menu → "Revert this commit" → creates new PR → "Merge immediately"
4. Vercel auto-deploys the reverted state within 90 sec
5. Previous URL state returns (prior brief on homepage, or 404 if this was Day 1)

**From desktop (more control):**
```bash
git checkout main
git pull
git revert <commit-sha>
git push origin main
```

**For a single-fact correction (not full rollback):**
Edit the MD file directly via the GitHub web UI — find the brief, click pencil icon, edit, commit to main. Vercel redeploys. Good for typos or single-number corrections. Bad for analytical errors — those warrant a full revert + regenerate.

**Correction policy:**
The site's README should state that corrections are marked in-brief with a dated strikethrough + note, not silent edits. Briefs more than 24h old should never be silently changed — the historical record matters, and readers who referenced a brief shouldn't find the text they cited has quietly changed.

**What NOT to do:**
- Don't force-push to main. Breaks history and confuses Vercel.
- Don't delete a brief file outright. The index regenerator expects contiguous dates.
- Don't rollback via Vercel's UI-level deploy-revert alone. The GitHub main branch must also be reverted, or the next deploy will restore the bad state.

---

## 3. The Analytical Framework (Preserved From Existing Workflow)

This section codifies the analytical framework that has been refined over 50+ days of manual brief writing (Days 33–51). It is preserved verbatim in the new web workflow. Everything in §3.1 through §3.4 is a hard requirement on the forked skill.

### 3.1 Core Discipline

- **Neutrality**: Present all sides' claims and actions without editorializing.
- **Analytical judgments**: Prefix with "Analytical judgment:" when offering assessments.
- **Ceasefire probabilities**: Provide percentage estimates for key scenarios, updated daily.
- **Trend tracking**: Compare with previous day's rolling context to identify acceleration or deceleration.
- **Dual sourcing on contested numbers**: Use HRANA (Human Rights Activists News Agency) figures alongside official Iranian figures where available. Extend to other actors: Lebanon Ministry of Health vs. IDF; US self-reported vs. Iran-claimed aircraft losses; Iranian strike damage claims vs. Israeli/Western denials.
- **Source diversity (critical)**: Every brief must draw from a wide spread of source categories — not a single narrative track. This is the core discipline of the exercise, operationalized in the Source Categories subsection below. The *beauty* of this daily brief is looking at all sides simultaneously; a brief sourced only from Western wires fails even if `sources_count ≥ 8`.
- **Cumulative totals**: Track across ALL theaters — Iran, Lebanon, Israel, US, Iraq, Gulf states.
- **Taiwan relevance**: Flag LNG supply, energy security, and semiconductor implications when materially relevant.

#### Source Categories — The Sourcing Rubric

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

### 3.2 The Multi-Clock Endgame Framework

Every analytical judgment paragraph invokes this framework explicitly. Six clocks map the war's dynamics:

1. **Active deadline clock** — the specific ultimatum or deadline currently in play (e.g., "April 6 power-plant deadline")
2. **Interceptor clock** — Israel's and allies' defensive missile inventory depletion rate
3. **Oil reserve clock** — IEA SPR releases and strategic reserve drawdowns
4. **Political will clock** — US polls, congressional pressure, domestic approval
5. **Negotiation-capacity clock** — active mediators, interlocutors, backchannel status
6. **Energy-infrastructure clock** — energy-MAD deterrence (Hormuz closure, Ras Laffan damage, Gulf desal)

The framework is invoked by name in every Analytical Judgment section. Brief invocation is fine ("Under the multi-clock framework: the negotiation-capacity clock is now dominant..."). Mechanical enumeration of all six every time is not required.

### 3.3 The Three-Gauge Structure

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

### 3.4 The Rolling Context Mechanism

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

### 3.5 Lessons Learned from 50 Days — Hard Constraints for the New Skill

This subsection is the most important in the document. The prior workflow ran Days 33 through 51. An honest audit reveals patterns to keep and drifts to correct. Every rule below is a hard constraint on the forked skill.

#### 3.5.1 What worked — keep verbatim

- The multi-clock framework has proven durable across pre-ceasefire escalation, the Day 40 ceasefire, the Islamabad talks, and the Round 2 naval escalation. Keep.
- The three-track diplomatic architecture (Islamabad / Washington / London) framing emerged Day 43 and has been genuinely predictive. Keep.
- The Taiwan LNG standing section works because it applies the multi-clock lens to a specific investment question. Keep.
- Casualty dual-attribution (HRANA vs. official) is a signature voice move. Keep.
- Scenario probability matrices force calibration. Keep.

#### 3.5.2 Adaptive gauge labels

**Problem observed:** Pre-ceasefire, the fixed labels (Overall Direction / Escalation Risk / Spillover) worked. Post-ceasefire, briefs organically relabeled to match actual risk vectors. This wasn't permitted explicitly by the old skill.

**Rule:** Three gauges, labeled to match the three most salient active risk vectors as of today. Always 🟢🟡🔴 with 2–3 word assessment + one-sentence detail. Fall back to fixed labels only when no clearly dominant vectors exist.

#### 3.5.3 Official claim + skeptical counter

**Problem observed:** Around Days 46–48, briefs started integrating "80% complete" figures from Pakistani FM Dar and Trump. These were treated with insufficient skepticism. The deal then collapsed on Day 51 with the USS Spruance naval seizure.

**Rule:** When a political actor publishes a progress figure, percentage, or optimistic assessment, cite it AS a claim from that actor. Do not integrate it into analytical judgment as if independently verified. Always pair with a skeptical counter.

#### 3.5.4 Length caps

**Problem observed:** Analytical judgment paragraphs crept from 400–500 words (Days 33–40) to 700–900 words (Days 45–51). Length ≠ insight.

**Rule:**
- Analytical judgment: 400–600 words
- Structure: [one-sentence insight] → [three supporting developments/forces] → [synthesis via multi-clock framework] → [one-sentence Taiwan implication]
- Strategic Implications: 3 sections × 200–300 words each, always ending with Taiwan
- Executive Summary: 150–400 words

#### 3.5.5 Quantify every gap

**Rule:** Numeric comparisons are the voice. Always frame deltas numerically:
- "14 ships vs. 100–120/day pre-war"
- "~50 officials killed vs. operational tempo unchanged"
- "83% Ras Laffan capacity, 3–5 year repair"
- "3,500+ HRANA vs. 1,900+ official"

#### 3.5.6 Carry forward structural priors

**Problem observed:** Days 47–50 softened language about Lebanon as a ceasefire appeared to form. Then violations resumed. Earlier structural assessments were memory-holed when surface news felt positive.

**Rule:** Structural weaknesses identified in earlier briefs persist as analytical priors in the rolling context until explicitly retired with evidence. The skill re-asserts them in each brief that remains relevant.

Known standing priors as of April 20, 2026 (to migrate into initial rolling context):
- **The Lebanon gap** (Day 40): Iran's 10-point plan demands end to Israeli Lebanon operations; Israel is not party to the US-Iran ceasefire and has shown no intent to halt.
- **The mine clearance problem** (Day 42): Iran's sea mines in Hormuz shipping lanes require weeks of physical clearance even with full cooperation.
- **Toll-institutionalization risk** (Day 45): Iran's $2M/ship Hormuz fee proposal, if accepted at any level, becomes permanent revenue (~$29B/yr at pre-war flow).
- **Israel's independence from the US-Iran framework** (persistent): Netanyahu has consistently acted outside US coordination; any US-Iran deal that depends on Israeli compliance is structurally fragile.
- **China air-defense resupply risk** (Day 44): CNN intelligence reporting indicates China preparing to ship air defense systems to Iran — shortens the window in which US has overwhelming air superiority.

#### 3.5.7 Source diversity tracking (critical)

**Problem observed:** Across Days 33–51, the source lists in briefs varied from 6 to 28 named sources. Breadth was strong in briefs where the war had multiple active fronts (Days 38, 40, 44) but narrowed significantly when the analytical focus shifted to a single story (e.g., Islamabad talks briefs leaned heavily on Western wires + Pakistani press, losing Iranian state media perspective). Earlier drafts of this design doc compressed the source list to 12 Western-leaning outlets and lost the multi-sided discipline entirely.

**Rule:** Every brief must cite sources from at least six of the twelve source categories defined in §3.1. Track the categories used in the JSON metadata field `source_categories` (array of strings from the controlled vocabulary). The validator enforces this at merge time.

**The core insight:** the analytical value of this brief series is *looking at all sides simultaneously*. A brief that cites eight Western wires is weaker than a brief that cites three Western wires, two Iranian state outlets, one Israeli military source, one Arab mediator government, and one human-rights monitor — even though the former has more raw sources. Breadth beats depth on single-narrative tracks.

#### 3.5.8 Research depth tracking

**Problem observed:** Some briefs had 8–10 source searches; others felt thin at 3–4. No metadata visibility.

**Rule:** Track `sources_count` in JSON metadata. Validation workflow flags counts below 8 for non-Quiet-Day briefs. Combined with §3.5.7, the effective minimum is "at least 8 sources drawn from at least 6 of 12 categories."

#### 3.5.9 Quiet Day over fabrication

**Rule:** If fewer than 3 material developments, publish a short "Quiet Day" brief with `quiet_day: true` frontmatter flag. Do not pad with generic material. Quiet Day briefs are exempt from §3.5.7 and §3.5.8 minimums.

#### 3.5.10 Taiwan acknowledgment

**Rule:** If a day has no fresh Taiwan-relevant development, acknowledge explicitly ("No fresh Taiwan-relevant developments today; prior assessments unchanged.") rather than repeating generic LNG-vulnerability language.

#### 3.5.11 Pivotal star discipline

**Rule:** ⭐ emoji reserved for genuine inflection points in the war's trajectory. Maximum one per brief, often zero. Excessive use (observed in the ceasefire period) dilutes meaning.

### 3.6 Exemplar Briefs — Few-Shot Material for the Skill

The new skill includes three full briefs as in-context few-shot material. These should be committed in full to `.claude/skills/me-war-intel-brief-web/examples/`:

- **Day 40 (April 8, 2026) — Ceasefire Announcement.** Shows how to pivot analytical tone when a major development breaks the prior trajectory. Captures the 12-hour reversal from "civilization will die" to ceasefire, and immediately flags the three structural risks (Hormuz definition, Lebanon exclusion, 10-point plan maximalism) that later materialized. Teaches: celebrate the development without memory-holing the structural weaknesses.

- **Day 47 (April 15, 2026) — Halfway Three-Track Analysis.** Shows the three-track diplomatic framework at full maturity. Synthesizes Islamabad + Washington + London tracks, identifies progress, stalls, and interdependencies. Teaches: multi-party negotiations require an architectural lens, not a serial narrative.

- **Day 50 (April 18, 2026) — Deal Architecture Emergence + Unforced Error.** Shows how to handle an analytical plot twist. Covers Iran's Hormuz reopening (positive), Pakistan FM Dar's "80% complete" framing (ambiguous), and Trump's unforced error re-announcing the blockade (negative). Teaches: hold multiple assessments in tension; don't collapse to a single narrative.

These briefs (converted to MD from their existing DOCX archive) serve as the voice and structure anchor for the skill.

---

## 4. Website Design

The website has one job: **let a person understand the current state of the war in under three seconds on a phone.**

### 4.1 Information Hierarchy

**Above the fold (no scrolling on mobile):**
- Date + Day number (e.g., "Day 52 — April 20, 2026")
- **THE THREE GAUGES** — the lights — massive, color-coded, unmistakable
- One-sentence headline summary

**Just below the fold:**
- Executive summary — 2–3 paragraphs, the "if you only read one thing" section
- Top 5 developments, each collapsed to a headline with expand-on-tap

**Further down (for readers who want depth):**
- Full analytical judgment
- Scenario probability matrix
- Casualties table
- Taiwan energy angle
- Source list + methodology note

**Archive:** all prior briefs, filterable by date range and by gauge state.

### 4.2 The Gauge — Design Specification

The escalation gauge is the identity of the product. It must be visually instant.

**Layout:**
- Three cards, horizontal on desktop, vertical stack on mobile
- Each: dynamic label (per §3.5.2) + status dot (🟢 🟡 🔴) + 2-word assessment + tap for detail
- Minimum 120px tall on mobile. Dots are 40px diameter.

**Color system:**

| Level | Text color | Background | Typical assessment |
|-------|------------|------------|---------------------|
| 🟢 Green | `#006600` | `#E5FFE5` | HOLDING / ADVANCING / STRENGTHENING |
| 🟡 Amber | `#B8860B` | `#FFF5E5` | FRAGILE / UNCERTAIN / FRAYING / STALLED |
| 🔴 Red | `#CC0000` | `#FFE5E5` | ESCALATING / CRITICAL / MAXIMUM / CLOSED |

Primary text: `#1B2A4A` (navy). Never pure black — too harsh on mobile.
Section accents: `#2E75B6` (blue).

**Typography:**
- Headlines: a serif with character — Fraunces, Newsreader, or GT Sectra
- Body: a comfortable sans — Söhne, Untitled Sans (not Inter)
- Numbers/metadata: monospace — JetBrains Mono or IBM Plex Mono
- Scale: 16px body → 20px subhead → 32px section → 48px day headline

**Avoid:** purple gradients, glass morphism, chatbot bubbles, Bloomberg-terminal density, auto-playing animations on load.

### 4.3 Aesthetic Direction

**Editorial-intelligence.** Economist digital edition crossed with FBI public threat assessments. Restrained, serious, information-dense. Not a startup landing page. Not a fintech dashboard.

**Moodboard:**
- Harper's Magazine online — typography and negative space
- Rest of World (restofworld.org) — editorial layout for global affairs
- Reuters live blog — compact real-time density
- FT Alphaville — serious finance tone with personality

**Signature element:** a persistent 24px status bar at the top of every page showing current day number, ceasefire day number, and a compressed three-dot gauge. A reader on the archive page or methodology page always knows current state without returning to the homepage.

### 4.4 Mobile-First

- Target device: iPhone 15 Pro. Test at 390px viewport first, scale up.
- Sticky status bar collapses to just the three dots on scroll.
- Deep detail sections (casualties table, full source list) are `<details>` elements — closed by default on mobile.
- Tables become card stacks below 640px — no horizontal scrolling tables.
- Reading time estimate on each brief ("4 min read" for Flash, "15 min read" for Deep Analysis).
- Dark mode respects system preference. Dark is default for evening mobile reading.

---

## 5. Data Model

Each brief is two files. This separation is deliberate — metadata drives the UI widgets, Markdown drives the readable prose.

### 5.1 Markdown File — `/briefs/2026-04-20.md`

Human-readable. Strict heading structure for parsers:

```markdown
---
day: 52
date: 2026-04-20
ceasefire_day: 12
headline: Round 2 postponed after naval incident
reading_time_minutes: 12
sources_count: 14
quiet_day: false
---

# Executive Summary

[150–400 words. Dense paragraph covering all significant developments.]

# Top Developments

[4–5 numbered developments. Each: one-line headline + 2–3 sentence summary + strategic impact note.]

# Analytical Judgment

[400–600 words. Structure: one-sentence insight → three supporting forces → multi-clock framework synthesis → one-sentence Taiwan implication.]

# Scenarios and Probabilities

[3–5 scenarios with probability estimates. Short description each.]

# Casualties

[Markdown table: Actor | Cumulative | 24–48h Change | Status. Four rows: US / Israel / Iran & Proxies / Other Actors.]

# Taiwan Angle

[200–300 words. LNG supply, energy security, semiconductor implications. If no fresh development, state so explicitly.]

# Sources

[Bullet list of sources cited, with URLs.]
```

### 5.2 Metadata File — `/briefs/2026-04-20.json`

Machine-readable, UI-driven, strictly schema-validated:

```json
{
  "day": 52,
  "date": "2026-04-20",
  "gauges": {
    "ceasefire": {"level": "yellow", "label": "FRAGILE", "detail": "..."},
    "hormuz":    {"level": "red",    "label": "CLOSED",  "detail": "..."},
    "diplomacy": {"level": "yellow", "label": "STALLED", "detail": "..."}
  },
  "probabilities": {
    "ceasefire_extends":  0.70,
    "round_2_this_week":  0.55,
    "war_resumes":        0.18
  },
  "casualties": {
    "iran_killed_official":   1900,
    "iran_killed_hrana":      3519,
    "iran_wounded":          26500,
    "lebanon_killed":         2196,
    "israel_civilian_killed":   21,
    "israel_soldiers_killed":   11,
    "us_kia":                   13
  },
  "markets": {
    "brent_usd":                  102,
    "us_gas_per_gallon":         4.14,
    "sp500_pct_from_war_start":  0.0
  },
  "sources_count": 14,
  "source_categories": [
    "western_mainstream_press",
    "iranian_state_media",
    "iranian_officials_direct",
    "israeli_military_government",
    "human_rights_monitoring",
    "market_maritime_data",
    "us_government_agencies"
  ],
  "hormuz_ships_24h": 3
}
```

Gauge keys are dynamic per §3.5.2 — they reflect the three most salient risk vectors, not a fixed schema.

### 5.3 Index File — `/briefs/index.json`

**Not committed to the repo.** Generated at Vercel build time by the Next.js build step, which reads all `/briefs/*.md` and `*.json` files and aggregates them into a single in-memory array for the archive page and sparkline charts (gauge history, casualty curves, market reactions, sources-count time series). The Routine never writes this file — its absence from the commit prevents merge conflicts between parallel runs.

---

## 6. The Forked Skill

This section specifies the full content of `.claude/skills/me-war-intel-brief-web/SKILL.md`. It is a self-contained skill — nothing outside the repo needs to exist for it to function.

### 6.1 Skill Structure

The skill file has this structure:

1. **YAML frontmatter** — skill name, description, trigger phrases
2. **Overview** — what the skill does, where outputs go
3. **Workflow** — six steps (Read context → Research → Day count → Generate → Commit → Update context)
4. **Output format** — MD + JSON schema (§5)
5. **Analysis Guidelines** — §3.1 through §3.5
6. **Reference to exemplar briefs** — pointers to `./examples/`

### 6.2 Trigger Phrases

The skill activates on: "run update", "run an update", "daily brief", "intel brief", "war brief", "war update", "Iran brief", "Iran update", "ME brief", "Operation Epic Fury", "Hormuz update", "what's new in Iran", "run it", "update me".

### 6.3 Workflow Steps

**Step 1 — Read rolling context.** Load `/context/rolling.md`. This gives continuity from the previous brief: current day count, cumulative casualties, diplomatic state, standing analytical priors.

**Step 2 — Research.** Run 5–10 web searches on today's developments. **Source discipline is defined in §3.1 and is non-negotiable:** draw from at least six distinct source categories (of the twelve listed), pair state-media claims with counter-claims, prefer divergence as information. The 5–10 searches should be planned to deliberately hit multiple categories — not just the first Western wire that reports the news. Search topics depend on active war phase, but typically cover:
- US-Iran ceasefire and any Round 2 talks
- Strait of Hormuz shipping + blockade operations
- Lebanon ceasefire status + violations
- Iran internal developments (missile reconstitution, casualties)
- Oil + equity markets reaction
- Taiwan energy security angles

**Step 3 — Calculate day count.** War started February 28, 2026. Calculate day number from that date. Also calculate ceasefire day number if applicable (ceasefire started April 8, 2026).

**Step 4 — Generate the brief.** Write the brief as Markdown per §5.1 schema. Write the metadata as JSON per §5.2 schema. Apply all hard constraints from §3.5 (adaptive gauges, skeptical counters on official claims, length caps, etc.). Reference the three exemplar briefs in `./examples/` as voice and structure anchors.

**Step 5 — Commit.** Save to `/briefs/YYYY-MM-DD.md` and `/briefs/YYYY-MM-DD.json`. Commit to branch `claude/daily-brief-YYYY-MM-DD` with message `brief: Day N — YYYY-MM-DD`. Open PR against `main`. GitHub Action validates (§6.2) and auto-merges if all checks pass.

**Step 6 — Update rolling context.** Update `/context/rolling.md` with today's new developments per §3.4's six categories. Target length 600–1000 words total. Retire standing priors only when evidence explicitly invalidates them.

### 6.4 Analysis Guidelines

All rules in §3.1 (Core Discipline) and §3.5 (Lessons Learned — Hard Constraints) apply. The skill includes these verbatim.

### 6.5 Exemplar References

The skill explicitly references:
- `./examples/day-40-ceasefire.md` — pivot without memory-holing
- `./examples/day-47-three-track.md` — architectural lens for multi-party negotiations
- `./examples/day-50-deal-architecture.md` — hold multiple assessments in tension

These files contain full briefs converted from the archive and serve as few-shot material.

---

## 7. Deployment

### 7.1 Repository Structure

```
me-war-intel-brief/
├── .claude/
│   └── skills/
│       └── me-war-intel-brief-web/
│           ├── SKILL.md              # Per §6
│           └── examples/
│               ├── day-40-ceasefire.md
│               ├── day-47-three-track.md
│               └── day-50-deal-architecture.md
├── .github/
│   └── workflows/
│       └── validate-brief.yml        # Schema + citation + sources_count validation
├── briefs/
│   ├── 2026-04-20.md
│   ├── 2026-04-20.json
│   ├── 2026-04-19.md ... (archive of Days 33–51)
│   └── index.json                    # Auto-generated
├── context/
│   └── rolling.md                    # Per §3.4
├── web/                              # Next.js site
│   ├── app/
│   │   ├── page.tsx                  # Latest brief (homepage)
│   │   ├── archive/page.tsx          # Full archive
│   │   └── brief/[date]/page.tsx     # Individual brief pages
│   ├── components/
│   │   ├── GaugeCard.tsx             # The lights
│   │   ├── StatusBar.tsx             # Persistent top bar
│   │   └── Timeline.tsx              # Sparkline gauge history
│   ├── lib/
│   │   └── briefs.ts                 # Reads /briefs at build time
│   └── package.json
├── DESIGN.md                         # This file
└── README.md
```

### 7.2 GitHub Actions Validation

Runs on every PR to `main`:

- **JSON schema**: gauges `level` in `{green, yellow, red}`; probabilities in `[0,1]`; casualty deltas vs. prior brief flagged for review if any figure moves by more than 15% in either direction (official figures can be revised down — not only up)
- **URL resolution**: all Sources URLs return 200, or existed within 48h (Wayback Machine fallback)
- **Date consistency**: frontmatter date matches filename; day number is prior brief + 1
- **Length sanity**: executive summary 150–400 words; analytical judgment 400–600 words; full brief 1500–4000 words
- **Research depth**: `sources_count >= 8` for non-Quiet-Day briefs, or explicit `quiet_day: true`
- **Source diversity**: `source_categories` array must contain at least 6 distinct values from the twelve-category vocabulary (§3.1) for non-Quiet-Day briefs
- **Auto-merge** if all pass; otherwise PR labelled `needs-review` and email sent

### 7.3 Vercel

- Connected to repo, deploys on every merge to `main`
- Framework preset: Next.js
- Build: `cd web && npm run build`
- Edge caching: 60 sec on homepage, 1 year on archived briefs (content-hashed)
- Free tier sufficient for expected traffic
- Preview deployments on every PR

### 7.4 The Routine Configuration

Configured once through `claude.ai/code/routines`.

**Prompt template:**

```
Load the rolling context at /context/rolling.md.
Load the brief skill at .claude/skills/me-war-intel-brief-web/SKILL.md.

Follow the skill's workflow exactly — all six steps.

Commit to branch claude/daily-brief-YYYY-MM-DD.
Open PR against main, auto-merge if validation passes.
```

**Schedule:** `0 22 * * *` (UTC = 6 AM Taipei daily)

**Repo access:** via Claude GitHub App (see §2.4 for full auth model). Write scope on `claude/*` branches and `/context/rolling.md`.

**Connectors:** native `web_search`, GitHub MCP for commits/PRs

**Manual trigger:** API endpoint for ad-hoc runs from phone (replaces "run update" in-chat workflow for breaking developments). Follows same PR lifecycle as scheduled runs (§2.5).

---

## 8. Failure Mode Handling

| Failure mode | Mitigation |
|--------------|------------|
| Web search returns nothing material | Skill rule §3.5.8: Quiet Day brief with `quiet_day: true`. Don't pad. |
| Sources disagree on a fact | Cite both, attribute each, note the discrepancy (§3.1 dual sourcing). |
| Breaking news mid-publication | API trigger from phone fires a fresh run. |
| Claude fabricates a source or URL | GitHub Action validates all URLs resolve. PR fails merge if not (§7.2). |
| Routine daily cap hit | Desktop fallback routine runs at 23:00 UTC. Email alerts if both fail. |
| Gauge values drift toward one color over weeks | Monthly audit routine reviews last 30 briefs, compares against exemplars. |
| Research depth drops silently | `sources_count` tracked in JSON; validation flags counts below 8 (§3.5.7). |
| Analytical voice drifts | Monthly human review comparing latest 5 briefs against Day 40/47/50 exemplars. |
| Official claims integrated as fact | Skill rule §3.5.3: claim + skeptical counter required. |
| Earlier structural assessments memory-holed | Rolling context carries standing priors (§3.5.6); skill re-asserts them. |
| Rolling context file grows unboundedly | Monthly audit prunes stale entries; target 600–1000 words. |
| Rolling context edited manually while Routine is running | Routine's commit will conflict on push. Recovery: close the Routine's PR, rebase its branch against main, re-run validation. Prevention: avoid manual edits during the 06:00–06:10 Taipei window when the Routine typically runs. |

---

## 9. Implementation Plan

Phased rollout. Week by week. Each phase delivers something usable even if subsequent phases never happen.

### Phase 1 — Repo + Archive Import (Week 1)

- [ ] Create GitHub repo under `@8gara8` (private during phases 1–3)
- [ ] Initialize repo structure per §7.1
- [ ] **Convert the 50 existing DOCX briefs (Days 33–51)** to MD + JSON via one-off Claude session, preserving all analytical content
- [ ] **Initialize `/context/rolling.md`** with current cumulative state (casualties, active clocks, standing analytical priors per §3.5.6)
- [ ] **Extract Days 40, 47, 50** as full few-shot examples into `.claude/skills/me-war-intel-brief-web/examples/`
- [ ] Commit everything. Deliverable: searchable 50-brief corpus in repo.

### Phase 2 — Website (Week 2)

- [ ] Scaffold Next.js in `/web` with Tailwind + typography
- [ ] Build `GaugeCard`, `StatusBar`, `BriefPage` components per §4
- [ ] Wire archive page with search + filter by date range / gauge state
- [ ] Connect Vercel, deploy to `mewar.moltbook.com` (or alternative)
- [ ] **Deliverable: fully-featured website running on the 50-brief archive, readable on phone**

### Phase 3 — Skill Authoring + Validation (Week 3)

- [ ] Write `.claude/skills/me-war-intel-brief-web/SKILL.md` per §6
- [ ] Encode §3.1, §3.2, §3.3, §3.4, §3.5 into the skill verbatim
- [ ] Reference the three exemplar briefs as few-shot material
- [ ] Write GitHub Actions validation workflow per §7.2. Test on old converted briefs (all should pass).
- [ ] Run skill manually in a normal Claude session (without routine) to validate output quality against exemplars.

### Phase 4 — Routine Goes Live (Week 4)

- [ ] Configure Claude Routine at `claude.ai/code/routines` per §7.4. Note: the Routine UI may expose structured fields (schedule, context, allowed tools, branch prefix) rather than taking a single prose prompt — expect to translate the §7.4 template into whatever fields the UI presents.
- [ ] Install Claude GitHub App on repo, grant write scope
- [ ] Run routine manually via API for three consecutive days; review output; tune skill if voice/structure drifts
- [ ] Enable scheduled trigger
- [ ] Monitor for a week; any issues trigger tuning of the skill (not the routine prompt — keep the routine prompt minimal and push all nuance into the skill)
- [ ] **Deliverable: first autonomous daily brief goes live**

### Phase 5 — Enhancements (Optional, later)

- [ ] Timeline view: sparkline of gauge history + casualty curves over time
- [ ] Push notifications via `ntfy.sh` (free, self-hosted, perfect for phone)
- [ ] Monthly audit routine that reviews last 30 briefs, compares against exemplars, prunes rolling context, flags drift

---

## 10. Risks and Open Questions

### 10.1 Risks (things that might go wrong)

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Claude hallucinates a breaking event | 🟡 MEDIUM | Validation workflow checks URL resolution; skill requires 2+ sources per claim; preview deployments allow eyeball check before merge |
| Research too shallow | 🟡 MEDIUM | `sources_count >= 8` enforced in validation; monthly audit flags drops |
| Source diversity erodes back to Western wires | 🔴 HIGH | Validator enforces ≥6 categories (§3.1, §3.5.7); drift was already observed in v1.2–v1.5 drafts and now has structural defenses |
| Analytical voice drifts from current quality | 🔴 HIGH | §3.5 hard constraints + 3 exemplar briefs as few-shot + rolling context persists priors + monthly audit routine |
| Over-confident "deal architecture" claims creep back | 🟡 MEDIUM | Skill rule §3.5.3: political actor percentages cited as claims + immediate skeptical counter |
| Earlier structural assessments memory-holed | 🟡 MEDIUM | Rolling context carries standing priors as persistent analytical frames |
| Rolling context file grows unboundedly | 🟢 LOW | Monthly audit prunes; target 600–1000 words |
| War ends — no briefs to write | 🔴 HIGH (6–12mo) | Design is war-generic; skill pattern repurposes for any daily brief series (Taiwan Strait, Korea) by swapping content. Archive remains reference material. |
| Anthropic changes Routines pricing or deprecates | 🟢 LOW | Fallback to desktop scheduled tasks or cron+API is a one-day migration; repo/site don't change |
| Vercel changes free-tier limits | 🟢 LOW | Static Next.js on Cloudflare Pages or GitHub Pages is a one-day migration |

### 10.2 Open Questions (things not yet decided)

These are called out explicitly so they don't quietly become assumptions.

- **Domain name.** `mewar.moltbook.com` is the current placeholder. Alternatives: standalone domain (e.g., `epicfury-brief.com`) for SEO independence, or `.pages.dev` for simplicity. Revisit before Phase 2 goes public.
- **Rolling context pruning cadence.** Monthly is the current spec (§3.4, §8). If file growth is slower than expected, quarterly is fine; if priors stack faster than expected (e.g., during a new war phase), bi-weekly. Calibrate after Month 1.
- **Exemplar brief freshness.** Day 40/47/50 are the current few-shot anchors. If the war enters a new phase (post-ceasefire, post-war reconstruction, post-resumption), the exemplars should rotate to reflect the new analytical terrain. Review quarterly.
- **Chinese-language mirror.** The briefs are English-language. Would a Traditional Chinese summary (generated by the same routine as a second file per brief, or a separate routine reading the English MD) add reader utility for the Taiwan audience? Unresolved; revisit after Phase 4.
- **Public vs. private repo.** Currently specced as private during Phases 1–3. Making the repo public after Phase 4 would let readers inspect the rubric and validation logic — transparency that strengthens analytical credibility. But public repo means the Routine's GitHub app permissions need tighter scoping. Decide at end of Phase 4.
- **Retrospective audits.** The monthly audit routine (§3.5, Phase 5) is specced but not designed in detail. What does it actually check? Voice match against exemplars is qualitative; source diversity is already validated per-brief; analytical accuracy is retrospective (which Day 48 predictions held, which failed). Design the audit scope at Month 1.
- **Interactive features.** The current site is read-only. Should a reader be able to tap a casualty number to see its time-series chart? Tap a source to see what other briefs cited it? Tap a gauge to see its 30-day history? Useful, but outside v1 scope per §11.
- **Abandonment protocol.** If 3D stops running the routine (vacation, illness, loss of interest), the site quietly stops updating. Should there be a "last updated N days ago" banner that goes amber after 3 days and red after 7? Minor UX question; revisit Phase 5.

---

## 11. What This Deliberately Is Not

Scope discipline. The following are explicitly out of scope for v1, and attempts to add them should trigger a "no, that's not what this is" response.

- **Not a public product.** Audience is 3D and a small number of people 3D shares the URL with. No marketing, no signup flow, no analytics, no share buttons. If it's readable on a phone and linkable, the job is done.
- **Not a multi-language site.** English only. A Chinese-language mirror is in §10.2 as an open question, not a Phase 1 commitment.
- **Not a real-time news ticker.** The routine fires once daily at 06:00 Taipei. Breaking developments use the API trigger (§7.4) but still go through the full validation and auto-merge flow. No streaming, no push to clients, no auto-refresh.
- **Not a historical archive with full-text search.** The archive page filters by date and by gauge state. Full-text search across 50+ briefs is a Phase 5 enhancement, not a v1 feature.
- **Not going to publish without source diversity.** The minimum-six-categories rule (§3.1, §3.5.7) is structural. A brief that can't hit six categories should publish as a Quiet Day, not publish with a diversity warning.
- **Not going to run without the human in Taiwan for the first month.** Phase 4 ships with manual API trigger only. Scheduled autonomous operation is Phase 4 final milestone, not Phase 4 entry criterion. 3D reviews every brief for the first three weeks before the schedule goes live.
- **Not an outlet for 3D's personal opinions on the war.** The brief is analytical, not editorial. "3D's view is X" has no place in the Analytical Judgment section; "Analytical judgment: X" is framework-anchored inference, not opinion. See §3.1 neutrality rule.
- **Not a data collection platform.** The site publishes; it does not instrument. No Google Analytics, no Plausible, no view-count tracking. If readership becomes a question, add instrumentation at Phase 5 explicitly.
- **Not a commercial product.** There is no pricing, no paid tier, no affiliate links. The war ends, the site goes into archive mode. Nothing about the design commits to ongoing operational cost.
- **Not an API.** Other sites cannot programmatically fetch briefs. The MD and JSON files are readable in the repo for anyone who finds them, but there's no documented fetch contract.

---

## 12. Success Metrics

What does "this worked" look like? Three dimensions, each with concrete criteria.

### 12.1 Operational reliability

- **Consecutive days published:** target ≥ 25 of 30 in any rolling 30-day window (accounting for Quiet Days and intentional skip-days). Below 20/30 means the routine is unreliable and needs tuning.
- **Validation pass rate on first PR:** target ≥ 80%. Below 60% means the skill isn't encoding the hard constraints tightly enough and the validator is doing too much work.
- **Time from routine fire to brief live:** target ≤ 15 minutes p95. §2.3 budget is ~11 min; consistent overruns indicate Browserless or research-phase slowdowns worth investigating.
- **Rollback frequency:** target ≤ 1 per month. Higher suggests factual errors slipping through validation; the URL-resolution and two-source rules need strengthening.

### 12.2 Analytical quality

- **Source diversity holding:** target median ≥ 7 categories per brief (rule is ≥ 6; a healthy system runs above the floor). Monthly distribution check: no single category exceeds 40% of all citations across the month.
- **Voice match against exemplars:** monthly audit compares the latest 5 briefs to Days 40/47/50. Qualitative pass/fail; fail triggers skill retuning.
- **Framework invocation rate:** multi-clock framework explicitly named in every Analytical Judgment section. Target: 100%. This is machine-checkable (search for the phrase "multi-clock" or the clock names in the body).
- **Structural prior retention:** monthly check that the standing priors in `/context/rolling.md` match what's being invoked in the briefs. A prior in context but not invoked for 14 days should be retired or re-asserted.
- **Retrospective accuracy:** at end of each month, review which probability estimates from the prior month proved correct. Not a pass/fail metric — a calibration trace. A forecast that consistently says 70% for things that happen 45% of the time is miscalibrated.

### 12.3 Reader utility

The primary reader is 3D. The secondary audience is the handful of people 3D shares the URL with. Metrics here are qualitative and self-reported, not instrumented:

- **Phone readability:** 3D can read a full brief on iPhone over morning coffee without opening desktop. Fail mode: 3D still opens the DOCX archive on laptop to read comfortably.
- **Linkability:** when 3D shares a brief with a colleague (analyst, journalist, family member asking "what's happening?"), the recipient can read it on their device without asking for context. Fail mode: 3D ends up explaining in text what the brief already said.
- **Continuity utility:** when 3D returns after 3+ days away, the rolling context + latest brief reconstruct the state well enough that 3D doesn't re-read three back-briefs to catch up. Fail mode: 3D defaults to re-reading the archive.

If all three fail, the web publication was a cosmetic upgrade over DOCX, not a workflow upgrade. That's a re-architecture signal.

### 12.4 What this project does NOT optimize for

Explicit non-goals. Don't measure these, don't improve for them.

- Unique visitors, page views, traffic
- Time on site, scroll depth, engagement
- SEO rank for "Iran war" or related queries
- Social shares, backlinks, citations by other news sites
- Revenue, conversions, signups
- Number of briefs published (publishing more is worse if it means lower voice quality)

The brief exists to serve the analytical discipline of one Taiwan-based analyst. Everything else is noise.

---

## Appendix A — Claude Code Implementation Notes

This document is self-contained — it lives in the repo root and Claude Code references it directly. No external files required.

### File conventions

- All dates in `YYYY-MM-DD` format (ISO 8601)
- All filenames lowercase, hyphen-separated
- Branch names: `claude/daily-brief-YYYY-MM-DD` for routine-generated; `feat/*` for human-initiated
- Commit messages: `brief: Day N — YYYY-MM-DD` for routine commits

### When in doubt

- Prefer MD over DOCX for anything in the repo
- Prefer the routine over manual runs once Phase 4 is live
- Prefer human review of borderline gauge calls over automated merge
- Prefer a "Quiet Day" brief over fabrication
- Prefer dual-attribution on any contested fact
- Prefer skeptical counter to any official percentage or progress claim

---

## Appendix B — Cost Summary

| Item | Cost | Notes |
|------|------|-------|
| Claude Max plan | $200/mo | Already paid. Routines use same quota. |
| Vercel hosting | $0 | Free tier handles millions of reads/month |
| GitHub repo | $0 | Free for public; private free on Pro plan |
| **Total incremental cost** | **$0** | Everything runs on existing infrastructure |

---

## Appendix C — Reference Implementations

This appendix contains the actual files a Claude Code agent needs to execute Phases 2–4. Everything here is copy-pasteable into the repo. Code marked "skeleton" is reference-implementation quality — working in intent and structure, but not yet tested end-to-end against the live GitHub + Vercel + Routine stack. Phase 3 includes a validation pass where these are exercised against the converted archive of 50 briefs.

### C.1 `.github/workflows/validate-brief.yml`

```yaml
name: Validate Brief

on:
  pull_request:
    paths:
      - 'briefs/**'
      - 'context/rolling.md'

permissions:
  contents: read
  pull-requests: write

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout PR
        uses: actions/checkout@v4
        with:
          fetch-depth: 2

      - name: Setup Node 20
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install validation dependencies
        working-directory: scripts/validation
        run: npm ci

      - name: Run validation suite
        run: node scripts/validation/validate.js

      - name: Enable auto-merge on success
        if: success()
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: gh pr merge --auto --squash ${{ github.event.pull_request.number }}

      - name: Label for review on failure
        if: failure()
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: gh pr edit ${{ github.event.pull_request.number }} --add-label needs-review
```

Notes:
- Auto-merge fires only if `validate.js` exits 0. Branch protection on `main` (per Appendix C.6) ensures the merge can't bypass this check.
- `--squash` keeps commit history clean: one commit per brief on `main`, routine's intermediate commits collapsed.
- `fetch-depth: 2` lets the validator diff against the prior commit for change detection.

### C.2 `scripts/validation/validate.js` (skeleton)

Core validation logic. Each check is a named function for readability. Exits 0 on success; non-zero with a bulleted error list on failure.

```javascript
// scripts/validation/validate.js
// Validates new brief files in a PR. Exits 0 on success, non-zero on any failure.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const matter = require('gray-matter');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const REPO_ROOT = path.join(__dirname, '..', '..');
const SCHEMA = JSON.parse(
  fs.readFileSync(path.join(REPO_ROOT, 'briefs', 'schema.json'), 'utf-8')
);

const errors = [];
const warn = (m) => errors.push(m);

// --- Identify new brief files in this PR
const changed = execSync('git diff --name-only origin/main HEAD', { encoding: 'utf-8' })
  .trim().split('\n').filter(Boolean);

const mdFiles   = changed.filter(f => /^briefs\/\d{4}-\d{2}-\d{2}\.md$/.test(f));
const jsonFiles = new Set(changed.filter(f => /^briefs\/\d{4}-\d{2}-\d{2}\.json$/.test(f)));

for (const md of mdFiles) {
  const expectedJson = md.replace(/\.md$/, '.json');
  if (!jsonFiles.has(expectedJson)) {
    warn(`${md}: missing matching ${expectedJson}`);
  }
}

(async () => {
  for (const md of mdFiles) await validateBrief(md);

  if (errors.length > 0) {
    console.error('Validation failed:\n');
    errors.forEach(e => console.error('  ✗ ' + e));
    process.exit(1);
  }
  console.log('All validation checks passed.');
})();

// --- Individual checks

async function validateBrief(relPath) {
  const mdPath   = path.join(REPO_ROOT, relPath);
  const jsonPath = mdPath.replace(/\.md$/, '.json');
  const parsed   = matter(fs.readFileSync(mdPath, 'utf-8'));
  const fm       = parsed.data;
  const body     = parsed.content;

  checkDateConsistency(relPath, fm);
  checkSourcesCount(relPath, fm);
  checkSourceCategories(relPath, jsonPath);
  checkLengths(relPath, body);
  checkJsonSchema(jsonPath);
  await checkUrlsResolve(relPath, body);
}

function checkDateConsistency(relPath, fm) {
  const filenameDate = path.basename(relPath, '.md');
  if (fm.date !== filenameDate) {
    warn(`${relPath}: frontmatter date "${fm.date}" != filename "${filenameDate}"`);
  }
}

function checkSourcesCount(relPath, fm) {
  if (!fm.quiet_day && (fm.sources_count || 0) < 8) {
    warn(`${relPath}: sources_count=${fm.sources_count}, must be >= 8 (or set quiet_day: true)`);
  }
}

const ALLOWED_CATEGORIES = new Set([
  'western_mainstream_press',
  'international_regional_press',
  'iranian_state_media',
  'iranian_officials_direct',
  'israeli_military_government',
  'arab_regional_governments',
  'russia_china_adversary',
  'human_rights_monitoring',
  'us_government_agencies',
  'european_international_bodies',
  'think_tanks_analysts',
  'market_maritime_data'
]);

function checkSourceCategories(relPath, jsonPath) {
  if (!fs.existsSync(jsonPath)) return;
  const meta = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const mdPath = relPath;
  const mdFm = matter(fs.readFileSync(path.join(REPO_ROOT, mdPath), 'utf-8')).data;
  if (mdFm.quiet_day) return;

  const cats = meta.source_categories || [];
  const unknown = cats.filter(c => !ALLOWED_CATEGORIES.has(c));
  if (unknown.length > 0) {
    warn(`${relPath}: unknown source_categories values: ${unknown.join(', ')}`);
  }
  const distinct = new Set(cats).size;
  if (distinct < 6) {
    warn(`${relPath}: only ${distinct} distinct source categories used, must have >= 6 (single-category dominance is a failure mode — see §3.1)`);
  }
}

function checkLengths(relPath, body) {
  const sections = parseSections(body);
  const sectionChecks = [
    ['Executive Summary', 150, 400],
    ['Analytical Judgment', 400, 600]
  ];
  for (const [name, min, max] of sectionChecks) {
    const words = wordCount(sections[name] || '');
    if (words < min || words > max) {
      warn(`${relPath}: "${name}" is ${words} words, must be ${min}-${max}`);
    }
  }
  const total = wordCount(body);
  if (total < 1500 || total > 4000) {
    warn(`${relPath}: total length ${total} words, must be 1500-4000`);
  }
}

function checkJsonSchema(jsonPath) {
  if (!fs.existsSync(jsonPath)) return;
  const meta = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  const valid = ajv.validate(SCHEMA, meta);
  if (!valid) {
    for (const err of ajv.errors) {
      warn(`${path.relative(REPO_ROOT, jsonPath)}: schema violation at ${err.instancePath} — ${err.message}`);
    }
  }
}

async function checkUrlsResolve(relPath, body) {
  const urls = extractUrls(body);
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
      if (res.ok) continue;
      // Fallback: did this URL exist on Wayback recently?
      const wb = await fetch(
        `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`
      );
      const data = await wb.json();
      if (!data.archived_snapshots?.closest) {
        warn(`${relPath}: unresolved URL (${res.status}) and no Wayback snapshot: ${url}`);
      }
    } catch (e) {
      warn(`${relPath}: URL fetch failed: ${url} (${e.message})`);
    }
  }
}

function parseSections(md) {
  const sections = {};
  let current = null;
  for (const line of md.split('\n')) {
    const h1 = line.match(/^#\s+(.+)$/);
    if (h1) { current = h1[1].trim(); sections[current] = ''; }
    else if (current) { sections[current] += line + '\n'; }
  }
  return sections;
}

function wordCount(s) { return s.trim().split(/\s+/).filter(Boolean).length; }

function extractUrls(md) {
  return [...new Set(md.match(/https?:\/\/[^\s\)\]]+/g) || [])];
}
```

`scripts/validation/package.json`:
```json
{
  "name": "brief-validator",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "gray-matter": "^4.0.3",
    "ajv": "^8.12.0",
    "ajv-formats": "^2.1.1"
  }
}
```

### C.3 `briefs/schema.json`

JSON Schema for the metadata files. Ajv validates every PR's JSON against this.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Middle East War Intel Brief Metadata",
  "type": "object",
  "required": ["day", "date", "gauges", "sources_count", "source_categories"],
  "properties": {
    "day": {
      "type": "integer",
      "minimum": 1,
      "description": "Days since Feb 28, 2026 (inclusive)"
    },
    "date": {
      "type": "string",
      "format": "date"
    },
    "ceasefire_day": {
      "type": "integer",
      "minimum": 0
    },
    "gauges": {
      "type": "object",
      "minProperties": 3,
      "maxProperties": 3,
      "additionalProperties": {
        "type": "object",
        "required": ["level", "label", "detail"],
        "properties": {
          "level": { "enum": ["green", "yellow", "red"] },
          "label": {
            "type": "string",
            "maxLength": 30,
            "description": "2-3 word assessment (e.g., 'FRAGILE', 'HOLDING', 'CLOSED')"
          },
          "detail": {
            "type": "string",
            "maxLength": 500,
            "description": "One-sentence context for the gauge"
          }
        }
      }
    },
    "probabilities": {
      "type": "object",
      "additionalProperties": {
        "type": "number",
        "minimum": 0,
        "maximum": 1
      },
      "description": "Scenario probability estimates (3-5 scenarios)"
    },
    "casualties": {
      "type": "object",
      "additionalProperties": {
        "type": "integer",
        "minimum": 0
      },
      "description": "Casualty counts. Downward revisions permitted — the MD prose must explain."
    },
    "markets": {
      "type": "object",
      "additionalProperties": { "type": "number" }
    },
    "sources_count": {
      "type": "integer",
      "minimum": 0
    },
    "source_categories": {
      "type": "array",
      "minItems": 0,
      "items": {
        "enum": [
          "western_mainstream_press",
          "international_regional_press",
          "iranian_state_media",
          "iranian_officials_direct",
          "israeli_military_government",
          "arab_regional_governments",
          "russia_china_adversary",
          "human_rights_monitoring",
          "us_government_agencies",
          "european_international_bodies",
          "think_tanks_analysts",
          "market_maritime_data"
        ]
      },
      "description": "Which of the 12 source categories (§3.1) were represented in today's research. Non-Quiet-Day briefs require >= 6 distinct values. Enforced by validate.js, not by the schema directly (schema can only check enum membership + array structure)."
    },
    "hormuz_ships_24h": {
      "type": "integer",
      "minimum": 0
    }
  }
}
```

Key design choice: casualty figures are **not** enforced as monotonically increasing. The existing rolling context literally has `"1,900+ (official, outdated)"` — the number stayed frozen while HRANA kept rising. Forcing monotonic increase would reject legitimate revisions.

### C.4 `.claude/skills/me-war-intel-brief-web/SKILL.md` — Template

The skill file itself. This is what the Routine loads on each run.

```markdown
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

See `/briefs/schema.json` for the full specification. Required fields: `day`, `date`, `gauges` (exactly 3 keys), `sources_count`.

## Analytical Framework

[SKILL AUTHOR: copy §3.1 through §3.6 of /DESIGN_v1.5.md verbatim here. That section defines tone, six-clock framework, three-gauge structure, rolling context mechanism, ten lessons-learned hard constraints, and the three exemplar briefs.]

## Exemplar Briefs

Read these before writing today's brief:
- `./examples/day-40-ceasefire.md` — pivoting without memory-holing structural risks
- `./examples/day-47-three-track.md` — architectural lens for multi-party negotiations
- `./examples/day-50-deal-architecture.md` — holding multiple assessments in tension
```

Note the `[SKILL AUTHOR: copy ...]` marker in the Analytical Framework section. Phase 3's skill-authoring task is to replace that marker with the full §3.1–3.6 content verbatim. The skill then stands alone — no runtime dependency on the DESIGN doc.

### C.5 Next.js Configuration

The site is a Next.js 14+ static export using the App Router. All data is known at build time; no SSR runtime.

`web/next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true
};

module.exports = nextConfig;
```

`web/package.json` (core dependencies):
```json
{
  "name": "me-war-intel-brief-web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.0",
    "remark-html": "^16.0.0",
    "remark-gfm": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

`web/lib/briefs.ts` — signature only (Phase 2 implements):
```typescript
// Walks /briefs/*.md + *.json at build time.
// No committed index file; everything materialized in memory during build.

export interface BriefMetadata {
  day: number;
  date: string;
  gauges: Record<string, { level: 'green' | 'yellow' | 'red'; label: string; detail: string }>;
  probabilities?: Record<string, number>;
  casualties?: Record<string, number>;
  markets?: Record<string, number>;
  sources_count: number;
}

export interface Brief {
  day: number;
  date: string;
  headline: string;
  frontmatter: Record<string, any>;
  markdownHtml: string;       // remark-rendered body
  metadata: BriefMetadata;    // parsed from YYYY-MM-DD.json
}

export async function getAllBriefs(): Promise<Brief[]>;
export async function getBriefByDate(date: string): Promise<Brief | null>;
export async function getLatestBrief(): Promise<Brief>;
```

### C.6 Repo Setup Checklist

Execute top-to-bottom. Each step unblocks the next.

```
[ ] 1. Create repo: github.com/8gara8/me-war-intel-brief (private during Phases 1–3)

[ ] 2. Initial commit:
    - /DESIGN_v1.5.md (this file)
    - /.gitignore (standard Node + Next.js)
    - /README.md (one-paragraph project description + link to DESIGN.md)

[ ] 3. Enable repo features:
    Settings → General → Pull Requests:
      [x] Allow squash merging
      [x] Allow auto-merge
      [ ] Allow merge commits  (disable — noisy history)
      [ ] Allow rebase merging (disable — unnecessary)
      [x] Automatically delete head branches (clean up claude/* after merge)

[ ] 4. Protect main branch:
    Settings → Branches → Add branch protection rule for `main`:
      [x] Require status checks to pass before merging
          [x] Require "validate" status check to pass
      [x] Require branches to be up to date before merging
      [ ] Require pull request reviews  (DISABLE — would block auto-merge)
      [ ] Include administrators  (keep OFF so admins can hotfix if needed)

[ ] 5. Install Claude GitHub App:
    github.com/apps/claude → Install
    → Account: @8gara8
    → Repository access: Only select repositories → me-war-intel-brief
    → Permissions (should auto-grant):
        contents: read & write
        pull-requests: read & write
        metadata: read

[ ] 6. Connect to Vercel:
    vercel.com/new → Import Git Repository → me-war-intel-brief
    → Project name: me-war-intel-brief
    → Framework preset: Next.js
    → Root directory: web
    → Build command: npm run build       (default — Next.js)
    → Output directory: out              (auto — from output: 'export')
    → Install command: npm install
    → Environment variables: (none needed for static export)

[ ] 7. Custom domain (optional):
    Vercel → Project Settings → Domains → Add mewar.moltbook.com
    → Configure CNAME at Moltbook.com DNS to cname.vercel-dns.com

[ ] 8. Configure Claude Routine (Phase 4):
    claude.ai/code/routines → New routine
    → Schedule: 0 22 * * * (UTC)
    → Repository: 8gara8/me-war-intel-brief
    → Prompt: see §7.4 of DESIGN_v1.5.md
    → API trigger: enable, save endpoint URL (for phone-based ad-hoc runs)
    → Start in manual-trigger-only mode
    → After 3 days of successful manual runs, enable the schedule
```

### C.7 Debugging — Where the Logs Live

Four systems, four log UIs. Bookmark all four.

| System | Log location | Typical failures |
|--------|--------------|------------------|
| **Claude Routine** | `claude.ai/code/routines` → select routine → **Runs tab** | Session timeout; tool error; GitHub auth failure; research yielded no results |
| **GitHub Action** | `github.com/8gara8/me-war-intel-brief/actions` → click failed run | `validate.js` non-zero exit; URL check timeout; schema violation; length check failure |
| **Vercel build** | `vercel.com/[team]/me-war-intel-brief/deployments` → click deployment → **Build Logs** | Missing npm dependency; TypeScript error; Tailwind compilation failure; frontmatter parse error |
| **Vercel runtime** | `vercel.com/[team]/me-war-intel-brief/logs` | Rare — static site is mostly CDN cache hits. Check for 404s on deep links. |

Cross-system debugging — when a brief doesn't appear on the site, walk the chain in reverse:

1. **Is the brief visible on the site?** → If yes, no bug; check CDN cache (max 60 sec stale).
2. **Is the brief on `main` in GitHub?** → If no, go to step 3.
3. **Is there an open PR with `needs-review` label?** → Validation failed. Read GitHub Action logs.
4. **Was a PR opened at all?** → If no, go to step 5.
5. **Did the Routine run complete?** → Check Runs tab in Claude Routines UI.
6. **Did the Routine fire on schedule?** → Check schedule config; check Anthropic Max plan quota; check whether the `claude/*` push permissions are still granted on the Claude GitHub App.

First-week-of-Phase-4 rule: after any routine run (manual or scheduled), walk all four log locations even on apparent success. Builds intuition for what "normal" looks like in each UI.

---

**End of Design Document v1.7**
*Author: [@8gara8](https://x.com/8gara8) — April 20, 2026*

*v1.7 folds in patterns from a sibling Evangent design doc: changelog (§1.1), explicit scope boundaries (§11), success metrics (§12), and risks split from open questions (§10). No architectural changes. The analytical framework, sourcing rubric, and reference implementations carry forward from v1.6 unchanged.*
