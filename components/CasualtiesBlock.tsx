import React from 'react';
import type { BriefFrontmatter, CasualtiesHistoryEntry } from '@/lib/types';
import { COLORS } from '@/lib/design-tokens';
import { Sparkbar } from './design/Sparkbar';

// Parse "+142/+850" (killed/wounded) from frontmatter's delta_24_48h string.
function parseDelta(raw: string): { dk: number; dw: number } {
  const [kRaw, wRaw] = (raw ?? '').split('/');
  const toNum = (s: string | undefined) => {
    const m = (s ?? '').match(/-?\d+/);
    return m ? parseInt(m[0], 10) : 0;
  };
  return { dk: toNum(kRaw), dw: toNum(wRaw) };
}

type ActorKey = 'us' | 'israel' | 'iran' | 'other';

const ACTORS: Array<{ key: ActorKey; label: string; color: string }> = [
  { key: 'us', label: 'United States', color: COLORS.ink },
  { key: 'israel', label: 'Israel', color: COLORS.accent },
  { key: 'iran', label: 'Iran & Proxies', color: COLORS.accentAmber },
  { key: 'other', label: 'Other', color: COLORS.accentGreen },
];

export function CasualtiesBlock({
  snapshot,
  history,
}: {
  snapshot: BriefFrontmatter['casualties_snapshot'];
  history: CasualtiesHistoryEntry[];
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {ACTORS.map((a) => {
        const current = snapshot[a.key];
        const { dk, dw } = parseDelta(current.delta_24_48h);
        const hist = history.map((h) => h[a.key].killed);
        return (
          <div
            key={a.key}
            className="border border-paper-rule-soft bg-paper-card px-[14px] pt-[14px] pb-[12px]"
            style={{ borderTop: `3px solid ${a.color}` }}
          >
            <div className="mb-2 font-mono text-[10px] uppercase tracking-label text-paper-ink-mute">
              {a.label}
            </div>
            <div
              className="grid items-baseline"
              style={{ gridTemplateColumns: 'auto 1fr', gap: '2px 10px' }}
            >
              <span className="font-mono text-[10px] uppercase tracking-pill text-paper-ink-mute">
                KIA
              </span>
              <span
                className="font-display text-[30px] font-semibold text-paper-ink tabular"
                style={{ letterSpacing: '-0.02em' }}
              >
                {current.killed.toLocaleString()}
                {dk > 0 && (
                  <span className="ml-1.5 font-mono text-[12px] text-accent">+{dk}</span>
                )}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-pill text-paper-ink-mute">
                WIA
              </span>
              <span className="font-display text-[22px] font-medium text-paper-ink-soft tabular">
                {current.wounded.toLocaleString()}
                {dw > 0 && (
                  <span className="ml-1.5 font-mono text-[11px] text-accent-amber">
                    +{dw}
                  </span>
                )}
              </span>
            </div>
            {hist.length > 1 && <Sparkbar values={hist} color={a.color} />}
          </div>
        );
      })}
    </div>
  );
}
