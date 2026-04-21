# ME War Intel Brief

A daily public intelligence brief on the 2026 US-Israeli war on Iran (Operation
Epic Fury), researched and written autonomously each day by a Claude Code
Routine and published to a Next.js site on Vercel. Git is the audit trail.
Produced by 3D ([@8gara8](https://x.com/8gara8)).

**Live URL:** _to be filled in once Vercel is linked._

## Architecture

Three parts in a loop:

1. **Producer** — a [Claude Code Routine](https://claude.ai/code/scheduled) that
   runs on Anthropic cloud infrastructure once per day, performs the research,
   writes the brief MDX, updates `content/context.md`, and commits to `main`.
2. **Store** — this repository. The brief archive lives in `content/briefs/`,
   one MDX file per day.
3. **Presenter** — a Next.js 15 (App Router) site deployed on Vercel, rebuilt
   on every push.

See `me-war-intel-brief DESIGN v1 1 2026-04-22.docx` at the repo root for the
full design rationale, and `SPEC.md` for the canonical build spec.

## Repo layout (highlights)

```
content/briefs/       Daily brief MDX files. The routine writes here.
content/context.md    Rolling analytical context. Rewritten in full each run.
routine/              PROMPT.md, INSTRUCTIONS.md, JSON schemas, few-shot examples.
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

After the repo is public and authorized for Claude Code access:

1. Go to [claude.ai/code/scheduled](https://claude.ai/code/scheduled).
2. Create a new routine pointing at this repo, branch `main`.
3. For the run-time prompt, point the routine at `routine/PROMPT.md` (or paste
   its contents directly into the prompt field).
4. Schedule the routine for your preferred daily run time (recommend the same
   hour daily, evening UTC).
5. Trigger a first manual run to validate the pipeline end-to-end. Expected
   outputs: a new MDX file in `content/briefs/`, a rewritten `content/context.md`,
   and a commit/push to `main` with message `Day NNN brief — YYYY-MM-DD`.

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
