#!/bin/zsh
# Entry point the scheduled task runs: a fixed environment, no sleep while it works.
export PATH=/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin
export TZ=Asia/Taipei
cd /Users/kobol/Projects/MEtracker || exit 1
mkdir -p logs
exec /usr/bin/caffeinate -i /opt/homebrew/bin/npx --no-install tsx scripts/daily.ts "$@"
