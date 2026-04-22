# ME War Intel Brief

A public intelligence brief on the 2026 US-Israeli war on Iran (Operation
Epic Fury), researched and written autonomously **twice daily** by two Claude
Code Routines — a morning full brief at 09:00 Asia/Taipei (01:00 UTC) and an
evening flash at 18:00 Asia/Taipei (10:00 UTC) — and published to a Next.js
site on Vercel. Git is the audit trail. Produced by 3D
([@8gara8](https://x.com/8gara8)).

**Live URL:** _to be filled in once Vercel is linked._

## Architecture

Three parts in a loop:

1. **Producers** — two [Claude Code Routines](https://claude.ai/code/scheduled)
   that run on Anthropic cloud infrastructure:
   - **Morning Routine** (09:00 Asia/Taipei / 01:00 UTC): does the research,
     writes the full brief MDX + sidecar `.data.ts`, rewrites
     `content/context.md`, and commits to `main`. Driven by
     `routine/PROMPT_morning.md`.
   - **Evening flash Routine** (18:00 Asia/Taipei / 10:00 UTC): does targeted
     research on the ~9-hour window since the morning run and appends a short
     time-stamped note to the `## Evening flash notes` section of
     `content/context.md`. Driven by `routine/PROMPT_flash.md`. Under the v2
     light-touch scope, flashes do **not** write new `.mdx` files; they are
     folded into the next morning's full brief.
2. **Store** — this repository. The brief archive lives in `content/briefs/`,
   one MDX file per day; flash notes live in `content/context.md`.
3. **Presenter** — a Next.js 15 (App Router) site deployed on Vercel, rebuilt
   on every push.

See `me-war-intel-brief DESIGN v1 1 2026-04-22.docx` at the repo root for the
full design rationale, and `SPEC.md` for the canonical build spec.

## Repo layout (highlights)

```
content/briefs/       Daily brief MDX files. The morning routine writes here.
content/context.md    Rolling analytical context. Morning routine rewrites in full;
                      evening flash routine appends to the flash-notes section only.
routine/              PROMPT_morning.md, PROMPT_flash.md, INSTRUCTIONS.md,
                      JSON schemas, few-shot examples.
app/                  Next.js App Router pages.
components/           MDX + layout + chart components.
lib/                  Brief loader, build-time data aggregation, types, MDX config.
scripts/              build-data.ts (prebuild), validate-brief.ts (CI).
.github/workflows/    validate-brief.yml — runs on every PR to main.
data/                 Derived build output. Gitignored. Do not edit.
```

## Local development

```bash
npm install
npm run dev      # Next.js dev server with hot reload
```

All routes should render at `http://localhost:3000`:

- `/` — latest brief
- `/brief/[slug]` — individual brief
- `/archive` — reverse-chron list
- `/timeline` — escalation chart
- `/casualties` — cumulative KIA stacked-area chart
- `/clocks` — multi-clock dashboard
- `/about` — methodology, contact, disclaimer

### Adding a brief manually

1. Drop a conformant `.mdx` in `content/briefs/` using the `YYYY-MM-DD-day-NNN.mdx`
   filename pattern. Follow the frontmatter schema in
   `routine/schemas/brief-frontmatter.schema.json` and the body structure in
   `SPEC.md` §2.2.
2. Validate: `npm run validate-brief content/briefs/YYYY-MM-DD-day-NNN.mdx`.
3. Commit and push.

### Regenerating derived data

`npm run build:data` runs the aggregator and writes `data/*.json`. This also
runs automatically before `next build` (via the `prebuild` npm hook), so
Vercel's default build command regenerates data transparently.

## Routine setup (one-time, by analyst)

After the repo is public and authorized for Claude Code access, configure
**two** Routines at [claude.ai/code/scheduled](https://claude.ai/code/scheduled),
both pointing at this repo, branch `main`:

1. **Morning full-brief Routine.**
   - Prompt: paste the contents of `routine/PROMPT_morning.md` into the
     run-time prompt field (or point the routine at it).
   - Schedule: **01:00 UTC daily** (= 09:00 Asia/Taipei).
   - First-run expected output: a new MDX file in `content/briefs/` with its
     sidecar `.data.ts`, a rewritten `content/context.md`, and a commit/push
     to `main` with message `Day NNN brief — YYYY-MM-DD`.

2. **Evening flash Routine.**
   - Prompt: paste the contents of `routine/PROMPT_flash.md` into the run-time
     prompt field.
   - Schedule: **10:00 UTC daily** (= 18:00 Asia/Taipei).
   - First-run expected output: the `## Evening flash notes` section of
     `content/context.md` is populated with one time-stamped paragraph, and a
     commit/push to `main` with message `Day NNN flash — YYYY-MM-DD` (or
     `Day NNN flash (quiet) — YYYY-MM-DD` if there was no material change).
   - The flash Routine does **not** write new brief files under the v2
     light-touch scope; flashes are folded into the next morning's brief.

Trigger a first manual run of each Routine to validate the pipeline
end-to-end before relying on the schedules.

## Vercel setup (one-time, by analyst)

1. In Vercel, create a new project from this repo.
2. Leave the build command as the default (`next build`) — the `prebuild` hook
   handles data aggregation automatically.
3. No environment variables are needed for v1.0.
4. Deploy. Verify `/`, `/brief/2026-02-28-day-001`, `/timeline`, `/casualties`,
   `/clocks`, and `/about` all render without errors.
5. Add a custom domain if desired and update the README's **Live URL** above.

## GitHub auto-merge

The `.github/workflows/validate-brief.yml` workflow validates brief changes on
every PR to `main` and adds a `needs-review` label if validation fails. To let
passing routine PRs auto-merge:

1. Repo → Settings → General → Pull Requests → enable **Allow auto-merge**.
2. Adjust branch protection on `main` to require the `validate` check to pass.
3. The workflow's `automerge` job will squash-merge a passing PR from the
   routine bot.

## License

MIT. See `LICENSE` (add when repo is public).
