# Repair the draft

The script rejected the draft in `{{DRAFT_DIR}}/`. Fix every error below and change nothing else.

- Word counts: trim or extend only the named section.
- "Source not opened or found this run": open that page with WebFetch now, or replace it with a page
  you open now, or drop it if the brief still meets the source rules.
- Broken links: replace the source with a working page you open now, or drop it.
- Category errors: add missing `category` fields, or add sources from missing categories.
- tsc errors are in the sidecar `brief.data.ts`.

Errors:

```
{{ERRORS}}
```

Rewrite the affected files in `{{DRAFT_DIR}}/`, then reply with the single word DONE.
