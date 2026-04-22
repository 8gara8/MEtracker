# Daily ME War Intel Brief — Morning Routine

You are running the **morning full-brief Routine** at 09:00 Asia/Taipei
(01:00 UTC). This is the canonical full brief for the day. A separate evening
Routine runs at 18:00 Asia/Taipei (10:00 UTC) to capture any material intra-day
developments (see `routine/PROMPT_flash.md`); you do not do intra-day updates
yourself.

Today's date: use the current date when you read this. Day count: compute from
2026-02-28 (Day 1).

## Steps

1. Read `routine/INSTRUCTIONS.md` in full. These are the editorial conventions —
   research priorities, source discipline, multi-clock framework, neutrality guidance.
2. Read `content/context.md` to load yesterday's state. Note any entries in its
   `## Evening flash notes` section left by yesterday's evening Routine — these
   are useful intra-day signals you should incorporate into today's brief.
3. Run the **continuity check**: read the most recent brief in `content/briefs/`.
   If its day count is not (today's day count − 1), a previous morning run was
   skipped. Note the gap explicitly in today's brief Executive Summary and set
   `gap_acknowledged: true` in frontmatter.
4. Review `routine/examples/` for few-shot reference material if present.
5. Perform the research per INSTRUCTIONS.md. Minimum 8 distinct, dated, web-cited
   sources unless today is genuinely a Quiet Day (no significant developments) —
   in which case set `quiet_day: true` in frontmatter and document why in the
   Executive Summary.
6. Write today's brief to `content/briefs/YYYY-MM-DD-day-NNN.mdx` per the schema in
   `routine/schemas/brief-frontmatter.schema.json` and the body structure in
   `SPEC.md` §2.2. Filename day must be zero-padded to three digits. Also create
   the structured-data sidecar `content/briefs/YYYY-MM-DD-day-NNN.data.ts` per
   `routine/INSTRUCTIONS.md` §4.5, and register it in `lib/brief-data.ts` by
   adding one import line and one entry to `briefDataBySlug`.
7. Rewrite `content/context.md` in full per `routine/schemas/context.schema.md`.
   When rewriting, **reset the `## Evening flash notes` section** to the single
   placeholder line `(None yet for today.)` — yesterday's flash notes are
   incorporated into today's brief body (see step 2) and should not persist
   into the new day's context.
8. Commit and push to `main` with message: `Day NNN brief — YYYY-MM-DD`.

## Hard rules

- **No partial commits.** If you cannot produce all of (a) brief MDX and
  (b) updated context.md in correct form, then commit nothing. Failure is
  preferable to corruption.
- **No silently fabricated data.** If a required field cannot be determined from
  research, set it to a clearly approximate value, flag it in the body text, and
  if it's a frontmatter enum, default to the lowest-confidence option.
- **Cite every source.** Every claim of fact in the brief must trace to a source
  in the frontmatter `sources` array. Analytical judgments are explicitly prefixed
  with "Analytical judgment:" and do not require sourcing.
- **Don't touch `data/`.** That directory is build-time generated.
- **Don't edit anything in `app/`, `components/`, `lib/`, or `routine/`** unless
  the analyst has explicitly tasked you with a structural change — this is a
  content routine, not a code-modification routine. The one exception is
  `lib/brief-data.ts`: the daily run adds one import and one map entry there
  to register the new sidecar (see Step 6).

The GitHub Actions validator will reject the PR (and the routine should treat the
rejection as a run failure) if the brief violates the schema or the rules in
§10 of SPEC.md. Read SPEC.md if you need more depth on any of the above.
