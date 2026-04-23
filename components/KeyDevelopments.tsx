import React from 'react';
import type { EventRow } from './EventsTable';
import { COLORS, pillTone, toneColor, type Tone } from '@/lib/design-tokens';
import { Pill } from './design/Pill';

// Fallback shape when a brief only has headlines (frontmatter.key_developments).
type FallbackRow = {
  id: number;
  direction: string;
  importance: 'pivotal' | 'high';
  event: string;
  source: null;
  summary: null;
  impact: null;
};

type RowInput = EventRow | FallbackRow;

function rowTone(direction: string): Tone {
  // Tone map from the v3 prototype: pivotal falls back to neutral ink but we
  // keep it 'esc' for visual prominence, matching the reference treatment.
  if (direction === 'pivotal') return 'esc';
  return pillTone(direction);
}

function DevelopmentRow({ ev, idx }: { ev: RowInput; idx: number }) {
  const tone = rowTone(ev.direction);
  const color = toneColor(tone);
  const pivotal = ev.importance === 'pivotal';

  return (
    <div
      className="grid items-start gap-[18px] pb-4 pl-3.5 pt-3.5"
      style={{
        gridTemplateColumns: '44px 120px 1fr',
        borderBottom: `1px solid ${COLORS.ruleSoft}`,
        borderLeft: `3px solid ${color}`,
        background: pivotal ? `${color}0A` : 'transparent',
      }}
    >
      {/* Index + color chip */}
      <div className="flex flex-col items-start gap-1.5 pt-0.5">
        <span
          className="font-mono text-[11px] text-paper-ink-mute"
          style={{ letterSpacing: '0.08em' }}
        >
          {String(idx + 1).padStart(2, '0')}
        </span>
        <span
          aria-hidden
          className="inline-block"
          style={{ width: 10, height: 10, background: color }}
        />
      </div>

      {/* Direction + importance + source */}
      <div className="flex flex-col gap-1.5 pt-0.5">
        <Pill value={ev.direction} tone={tone} />
        <span
          className="font-mono text-[10px] uppercase"
          style={{
            letterSpacing: '0.12em',
            color: pivotal ? COLORS.accent : COLORS.inkMute,
            fontWeight: pivotal ? 700 : 400,
          }}
        >
          {ev.importance}
          {pivotal ? ' ◆' : ''}
        </span>
        {ev.source && (
          <span className="font-mono text-[10px] italic text-paper-ink-mute">
            {ev.source}
          </span>
        )}
      </div>

      {/* Event title + summary + impact */}
      <div className="flex flex-col gap-1.5">
        <div
          className="font-display text-[18px] font-semibold leading-[1.3] text-paper-ink"
          style={{ letterSpacing: '-0.01em', textWrap: 'pretty' }}
        >
          {ev.event}
        </div>
        {ev.summary && (
          <div
            className="font-sans text-[13.5px] leading-[1.55] text-paper-ink-soft"
            style={{ textWrap: 'pretty' }}
          >
            {ev.summary}
          </div>
        )}
        {ev.impact && (
          <div
            className="mt-1 grid items-start gap-2.5 font-sans text-[13px] leading-[1.5]"
            style={{ gridTemplateColumns: 'auto 1fr' }}
          >
            <span
              className="pt-[3px] font-mono text-[9px] uppercase"
              style={{ letterSpacing: '0.16em', color }}
            >
              Impact &rarr;
            </span>
            <span className="text-paper-ink-soft" style={{ textWrap: 'pretty' }}>
              {ev.impact}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function KeyDevelopments({
  events,
  headlines,
  fallbackDirection,
}: {
  events?: EventRow[];
  headlines: string[];
  fallbackDirection: string;
}) {
  if (events && events.length) {
    return (
      <div className="flex flex-col">
        {events.map((e, i) => (
          <DevelopmentRow key={e.id} ev={e} idx={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {headlines.map((h, i) => {
        const row: FallbackRow = {
          id: i + 1,
          direction: fallbackDirection,
          importance: i === 0 ? 'pivotal' : 'high',
          event: h,
          source: null,
          summary: null,
          impact: null,
        };
        return <DevelopmentRow key={i} ev={row} idx={i} />;
      })}
    </div>
  );
}
