# ME War Intel Brief

A public daily intelligence brief on the 2026 US-Israeli war on Iran (Operation
Epic Fury), researched and written by Claude every morning and published at
**https://metracker.vercel.app**. Produced by 3D ([@8gara8](https://x.com/8gara8)).

## How a brief gets published

1. **Producer.** A Claude desktop scheduled task on JL's Mac runs every morning
   (Asia/Taipei) in the local checkout `~/Projects/MEtracker`. It follows
   `.claude/skills/me-war-intel-brief-web/SKILL.md`: research, draft
   `content/briefs/YYYY-MM-DD-day-NNN.mdx` plus its `.data.ts` sidecar, register
   it in `lib/brief-data.ts`, rewrite `content/context.md`, validate, and push
   one commit straight to `main`. Failures go to `~/Documents/MEwar/needs-review/`.
2. **Checks on GitHub.** `.github/workflows/ci.yml` typechecks, validates every
   brief from day 68 on, and builds the site on every PR and push.
   `.github/workflows/archive.yml` then saves Wayback Machine snapshots of the new
   brief's sources into `content/archive.json`.
3. **Site.** Vercel builds the Next.js 15 site on every push to `main`.

House rules for agents working on the Mac are in `~/Documents/MEwar/AGENTS.md`.

## Repo layout

```
content/briefs/       One MDX brief + .data.ts sidecar per day.
content/context.md    Rolling analytical context, rewritten every morning.
content/archive.json  Source URL → saved Wayback snapshot (written by the archive workflow).
lib/                  Brief loader, types, source helpers, build-time aggregation.
components/, app/     The site (App Router).
scripts/              validate-brief, archive-sources, normalize-sources, wc-check, build-data.
routine/              Frontmatter JSON schema, prompts and few-shot examples.
.claude/skills/       The skill the morning task follows.
```

`SPEC.md`, `ME_DESIGN_v1.8.md` and the `.docx` design files are the original
design history (cloud routines, PR flow); the skill is the current contract.

## Commands

```bash
npm ci                    # install (use the Mac's native arm64 Node)
npm run dev               # site at http://localhost:3000
npm run validate-brief content/briefs/<slug>.mdx   # one brief, with link checks
npm run validate:ci       # every brief from day 68, offline
npm run typecheck
npm run build             # runs build:data first
```

## Source rules

Each source in a brief's frontmatter has the publisher's own `url`, the real
`accessed_at`, and a `category` from the twelve-category rubric (DESIGN §3.1).
From day 250 the validator requires at least six categories with none above half
of the sources, and it checks the publisher links (bot-blocking 401/403/429 count
as live). The site links the publisher page and adds an `[archived]` link when
`content/archive.json` has a snapshot.

## License

MIT.
