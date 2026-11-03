import { execFileSync } from 'node:child_process';

// Secrets live in JL's login keychain. Values are returned to the caller only; they are never logged,
// printed or written to disk. The ME Tracker reuses the EuropeTracker agent token (same account, same
// isolated Claude CLI); override with ME_TOKEN_SERVICE.

export const CLAUDE_TOKEN_SERVICE = process.env.ME_TOKEN_SERVICE ?? 'europetracker-claude-oauth';

/** The secret stored under `service`, or null when it is missing or the keychain is locked. */
export function readSecret(service: string): string | null {
  try {
    const value = execFileSync('/usr/bin/security', ['find-generic-password', '-s', service, '-w'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      timeout: 10_000,
    }).trim();
    return value || null;
  } catch {
    return null;
  }
}
