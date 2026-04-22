# `content/context.md` — Structure Schema

This document defines the required structure of `content/context.md`. The **morning** Routine rewrites this file in full on every run. The **evening** flash Routine appends only to the `## Evening flash notes` section and leaves every other section untouched.

## Required front matter

The first three lines of the file (after the top-level heading) must be the update stamp:

```
Last updated by: <routine-run-id or "seed (manual, build time)">
Last brief day: <integer>
Last brief date: <YYYY-MM-DD>
```

## Required sections

The file must contain exactly these second-level (`##`) sections, in this order:

1. **## Current war status** — one to three short paragraphs summarizing the position of the war as of the last brief. Name the day, any active operations, and the current ceasefire probability estimate.
2. **## Cumulative state** — bullet list covering casualties (reference the latest brief), energy infrastructure status, and interceptor inventory posture.
3. **## Active deadlines** — bullets for any time-bound items (ultimatums, IAEA deadlines, UN resolutions, force-posture expiries). If none, write "None." on a single line.
4. **## Diplomatic state** — brief prose on any active or offered mediation tracks.
5. **## Standing analytical threads** — bullet list of the durable analytical threads being tracked across briefs (Taiwan LNG, interceptor depletion, US political will, semiconductor supply chain, plus any newly surfaced threads).
6. **## What to watch tomorrow** — 3–7 bullets of concrete signals to monitor in the next 24 hours.
7. **## Evening flash notes** — placeholder `(None yet for today.)` when the morning Routine rewrites the file; one or more time-stamped paragraphs when the evening Routine has appended notes. Morning Routine always resets this section to the placeholder so yesterday's notes do not persist.

## Style

- Use the past tense for factual claims about yesterday and earlier.
- Use qualifiers ("Analytical judgment:", "Approximate:", "Unconfirmed:") for anything not directly sourced.
- Keep the whole file under ~800 words. If it drifts longer, prune the oldest items in Standing analytical threads.
