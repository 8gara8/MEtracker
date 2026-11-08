#!/bin/bash
# Vercel "Ignored Build Step": exit 0 skips the build, exit 1 runs it.
# Skip builds when the only changes since the last deployment are
# content/context.md (never rendered) or content/archive.json (archived
# source links; they go live with the next build). When in doubt, build.

prev="${VERCEL_GIT_PREVIOUS_SHA:-}"
head="$(git rev-parse HEAD)"

if [ -z "$prev" ]; then echo "No previous deployment SHA: build."; exit 1; fi
if [ "$prev" = "$head" ]; then echo "Redeploy of the same commit: build."; exit 1; fi

if ! git cat-file -e "${prev}^{commit}" 2>/dev/null; then
  git fetch --quiet --depth=100 origin "$prev" 2>/dev/null || true
fi
if ! git cat-file -e "${prev}^{commit}" 2>/dev/null; then
  echo "Previous commit $prev not in clone: build."; exit 1
fi

changed="$(git diff --name-only "$prev" "$head" -- . \
  ':(exclude)content/context.md' ':(exclude)content/archive.json')"

if [ -z "$changed" ]; then
  echo "Only context.md or archive.json changed since $prev: skip build."
  exit 0
fi

echo "Changes since $prev need a build:"
echo "$changed" | head -20
exit 1
