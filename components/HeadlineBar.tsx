import React from 'react';
import type { BriefFrontmatter } from '@/lib/types';
import { COLORS, pillTone, toneColor, type Tone } from '@/lib/design-tokens';

type Tile = {
  label: string;
  value: string;
  tone: Tone;
  raw?: boolean;
};

function ceasefireTone(pct: number): Tone {
  if (pct >= 20) return 'ok';
  if (pct >= 10) return 'mix';
  return 'esc';
}

export function HeadlineBar({ frontmatter }: { frontmatter: BriefFrontmatter }) {
  const tiles: Tile[] = [
    {
      label: 'Direction',
      value: frontmatter.escalation_direction,
      tone: pillTone(frontmatter.escalation_direction),
    },
    {
      label: '7-day risk',
      value: frontmatter.escalation_risk_7d,
      tone: pillTone(frontmatter.escalation_risk_7d),
    },
    {
      label: 'Spillover',
      value: frontmatter.spillover_risk,
      tone: pillTone(frontmatter.spillover_risk),
    },
    {
      label: 'Ceasefire · 30d',
      value: `${frontmatter.ceasefire_probability_30d}%`,
      tone: ceasefireTone(frontmatter.ceasefire_probability_30d),
      raw: true,
    },
  ];

  return (
    <div
      className="mb-6 grid grid-cols-2 md:grid-cols-4 bg-paper-card"
      style={{
        border: `1px solid ${COLORS.rule}`,
        borderLeft: `3px solid ${COLORS.accent}`,
      }}
    >
      {tiles.map((t, i) => {
        const c = toneColor(t.tone);
        const valueColor = t.tone === 'neutral' ? COLORS.ink : c;
        const isLast = i === tiles.length - 1;
        return (
          <div
            key={t.label}
            className="flex flex-col gap-1.5 px-[18px] py-[14px]"
            style={{
              borderRight: isLast ? undefined : `1px solid ${COLORS.ruleSoft}`,
            }}
          >
            <div
              className="flex items-center gap-2 font-mono text-[10px] uppercase text-paper-ink-mute"
              style={{ letterSpacing: '0.16em' }}
            >
              <span
                aria-hidden
                className="inline-block"
                style={{ width: 8, height: 8, background: c }}
              />
              {t.label}
            </div>
            <div
              className="font-display font-semibold tabular"
              style={{
                fontSize: 28,
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
                color: valueColor,
                textTransform: t.raw ? 'none' : 'uppercase',
              }}
            >
              {t.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
