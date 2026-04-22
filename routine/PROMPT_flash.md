# Daily ME War Intel Brief — Evening Flash Routine

You are running the **evening flash Routine** at 18:00 Asia/Taipei (10:00 UTC).
This is a **lightweight intra-day update**, not a re-research of the morning
brief. The morning Routine (see `routine/PROMPT_morning.md`) already wrote
today's canonical full brief ~9 hours ago; your job is to note material changes
since then.

**Scope note for v2 light-touch:** the repo's brief schema, validator, and
site layout remain single-brief-per-day (v1). You therefore do **not** create a
new MDX file — you append a single paragraph to `content/context.md`'s
`## Evening flash notes` section. The morning Routine will read these notes
the next day and fold them into the new day's brief. This bridge will be
replaced by dedicated flash MDX files + a flash page treatment once that
infrastructure is built; until then, your only writable surface is the
flash-notes section of `content/context.md`.

Today's date: use the current date when you read this. Day count: compute from
2026-02-28 (Day 1).

## Steps

1. Read `routine/INSTRUCTIONS.md` — specifically the "Flash reports" section
   for editorial guidance, plus the shared research conventions.
2. Read today's morning full brief at `content/briefs/YYYY-MM-DD-day-NNN.mdx`
   to establish the baseline of what's already been reported. Do not
   re-research ground the morning brief already covered.
3. Read `content/context.md` for operational context. Note what's already in
   the `## Evening flash notes` section — normally this will be the placeholder
   `(None yet for today.)` left by the morning Routine.
4. Perform **targeted** research focused on the ~9-hour window since the
   morning run (roughly 01:00 UTC to 10:00 UTC today). Scope:
   - Breaking military developments (strikes, attacks, new operations)
   - Casualty figure revisions > 10%
   - Ceasefire-track or mediation changes
   - Named mediator entering or exiting
   - Significant market moves (Brent > 3%, notable equity moves on
     war-sensitive names)
   - Unexpected diplomatic statements from previously-uninvolved parties
5. Determine **material-change status**:
   - **No material change.** If nothing substantive has developed beyond what
     the morning brief already covers, write a terse 1–3 sentence note under
     `## Evening flash notes` in `content/context.md`, e.g.:
     > **[HH:MM UTC]** No material change since morning brief. Iranian missile
     > posture unchanged; Hormuz status unchanged; no new mediation signals.
   - **Material change.** Write a 3–6 sentence paragraph under
     `## Evening flash notes`, time-stamped with the flash-run UTC time.
     Cover only what's new: the development, one-line implication for the
     morning brief's framing, and whether the change argues for an update to
     escalation direction or 30-day ceasefire probability (as guidance for
     tomorrow's morning Routine; you do not change any numbers yourself).
     Minimum 3 dated, web-cited sources listed inline as footnotes or at the
     end of the paragraph.
6. Write your note to the `## Evening flash notes` section of
   `content/context.md`:
   - If the section contains the `(None yet for today.)` placeholder (the
     normal case), **replace** the placeholder with your note.
   - If the section already contains a prior flash note from earlier today
     (a manual rerun), **append** your note below the existing one rather
     than overwriting it — intra-day history must be preserved for the
     next morning's brief to incorporate.
   Leave every other section of `content/context.md` untouched.
7. Commit and push to `main`. Message:
   - `Day NNN flash — YYYY-MM-DD` for material-change flashes, or
   - `Day NNN flash (quiet) — YYYY-MM-DD` for no-material-change flashes.

## Hard rules

The hard rules below apply to the **normal flash path**. All of them are
overridden on the **promoted-run path** (see the final rule and the
promoted-run section that follows it), where the absence of today's morning
brief forces you to write a full brief instead of a flash note.

- **Never restate the morning brief.** A flash is a delta, not a digest.
- **Never create a new `.mdx` file.** (Normal flash path only.) The repo's v1
  schema/validator does not yet accept flash files; on the normal flash path
  your only writable surface is the `## Evening flash notes` section of
  `content/context.md`. On the promoted-run path, this rule is lifted — you
  create the full-brief `.mdx` per `PROMPT_morning.md` step 6.
- **Never touch any other section of `content/context.md`.** (Normal flash
  path only.) Not `Current war status`, not `Cumulative state`, not `Active
  deadlines` — leave those to the morning Routine. On the promoted-run path,
  you rewrite `content/context.md` in full per the morning prompt.
- **Never change casualty numbers or clock states in any frontmatter.**
  (Normal flash path only.) Describe changes qualitatively in your flash
  note; tomorrow morning's Routine captures formal numbers. On the
  promoted-run path, you write casualty numbers and clock states as the
  morning Routine normally would.
- **Never touch `app/`, `components/`, `lib/`, `data/`, or anything under
  `routine/`.** This is a content routine. The one exception — active only
  on the promoted-run path below — is `lib/brief-data.ts`, which must be
  edited to register the new sidecar per `PROMPT_morning.md` step 6.
- **No silently fabricated data.** (Both paths.) If nothing is confirmable on
  the normal flash path, write a no-material-change flash instead of
  speculating. On the promoted-run path, flag uncertain fields per the
  morning prompt.
- **If today's morning brief does not exist** (morning Routine failed), you
  are **promoted** to writing the full brief. Follow `routine/PROMPT_morning.md`
  instead — full schema, 8-source floor, sidecar, rewritten `content/context.md`,
  and all — and set `gap_acknowledged: true` in the brief frontmatter. On the
  promoted-run path, the "never create a new `.mdx` file," "never touch other
  sections of `content/context.md`," "never change casualty numbers or clock
  states," and "never touch `lib/`" rules above are all lifted to the extent
  required by the morning prompt's steps 6 and 7.
- **No partial commits.** (Both paths.) On the normal flash path, if you
  cannot produce a valid note, commit nothing. On the promoted-run path, if
  you cannot produce both the brief MDX and a correctly updated
  `content/context.md`, commit nothing.
