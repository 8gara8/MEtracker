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
6. Replace the `(None yet for today.)` placeholder with your note. Leave every
   other section of `content/context.md` untouched.
7. Commit and push to `main`. Message:
   - `Day NNN flash — YYYY-MM-DD` for material-change flashes, or
   - `Day NNN flash (quiet) — YYYY-MM-DD` for no-material-change flashes.

## Hard rules

- **Never restate the morning brief.** A flash is a delta, not a digest.
- **Never create a new `.mdx` file.** The repo's v1 schema/validator does not
  yet accept flash files; your only writable surface today is the
  `## Evening flash notes` section of `content/context.md`.
- **Never touch any other section of `content/context.md`.** Not `Current war
  status`, not `Cumulative state`, not `Active deadlines` — leave those to the
  morning Routine.
- **Never change casualty numbers or clock states in any frontmatter.**
  Describe changes qualitatively in your flash note; tomorrow morning's Routine
  captures formal numbers.
- **Never touch `app/`, `components/`, `lib/`, `data/`, or anything under
  `routine/`.** This is a content routine.
- **No silently fabricated data.** If nothing is confirmable, write a
  no-material-change flash instead of speculating.
- **If today's morning brief does not exist** (morning Routine failed), you
  are **promoted** to writing the full brief. Follow `routine/PROMPT_morning.md`
  instead — full schema, 8-source floor, sidecar, and all — and set
  `gap_acknowledged: true` in the brief frontmatter.
- **No partial commits.** If you cannot produce a valid note, commit nothing.
