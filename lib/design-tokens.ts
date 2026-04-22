import type { ClockKey, ClockState } from './types';

export const COLORS = {
  bg: '#F3EEE3',
  bgDeep: '#EAE2D0',
  ink: '#14161A',
  inkSoft: '#3B3E45',
  inkMute: '#6B6A62',
  rule: '#14161A',
  ruleSoft: '#C9BFA8',
  accent: '#B33A2E',
  accentAmber: '#C48416',
  accentGreen: '#3E6B3A',
  badgeEscBg: '#F1D9D5',
  badgeMixBg: '#F3E3C6',
  badgeDeBg: '#D9E3D3',
  cardBg: '#FBF8F0',
} as const;

export type Tone = 'esc' | 'mix' | 'ok' | 'neutral';

export function toneColor(tone: Tone): string {
  switch (tone) {
    case 'esc':
      return COLORS.accent;
    case 'mix':
      return COLORS.accentAmber;
    case 'ok':
      return COLORS.accentGreen;
    default:
      return COLORS.inkMute;
  }
}

export function toneBadgeBg(tone: Tone): string {
  switch (tone) {
    case 'esc':
      return COLORS.badgeEscBg;
    case 'mix':
      return COLORS.badgeMixBg;
    case 'ok':
      return COLORS.badgeDeBg;
    default:
      return 'transparent';
  }
}

// Generic pill tone based on value string (direction / risk / spillover / event.direction).
export function pillTone(value: string): Tone {
  const v = (value ?? '').toLowerCase();
  if (['escalating', 'critical', 'extreme', 'pivotal'].includes(v)) return 'esc';
  if (['mixed', 'conditional', 'degraded', 'moderate'].includes(v)) return 'mix';
  if (['de-escalating', 'contained', 'low', 'ample', 'high'].includes(v)) return 'ok';
  return 'neutral';
}

// Clock state score (0..5). Shared with the dial fill and sparkline.
export const CLOCK_SCORE: Record<ClockState, number> = {
  critical: 0,
  expiring: 0.5,
  deteriorating: 1,
  paused: 1,
  strained: 2,
  elevated: 2,
  unclear: 2.5,
  approaching: 3,
  advancing: 3,
  extension_likely: 3,
  active: 4,
  holding: 4,
  improving: 4,
  strong: 5,
};

export function clockScore(state: ClockState): number {
  return CLOCK_SCORE[state] ?? 0;
}

// Clocks where a high state value is BAD for peace — invert the base tone.
const CLOCK_POLARITY: Record<ClockKey, 'normal' | 'invert'> = {
  negotiation_capacity: 'normal',
  active_deadline: 'invert',
  interceptor_reconstitution: 'normal',
  energy_infrastructure: 'normal',
  humanitarian_escalation: 'invert',
  coalition_cohesion: 'normal',
};

// Default base tone for a state (assuming "higher = better").
function baseStateTone(state: ClockState): Tone {
  switch (state) {
    case 'critical':
    case 'expiring':
    case 'deteriorating':
      return 'esc';
    case 'strained':
    case 'elevated':
    case 'approaching':
    case 'advancing':
      return 'mix';
    case 'paused':
    case 'unclear':
      return 'neutral';
    case 'extension_likely':
    case 'active':
    case 'holding':
    case 'improving':
    case 'strong':
      return 'ok';
    default:
      return 'neutral';
  }
}

export function clockTone(key: ClockKey, state: ClockState): Tone {
  const base = baseStateTone(state);
  if (CLOCK_POLARITY[key] === 'invert') {
    if (base === 'ok') return 'esc';
    if (base === 'esc') return 'ok';
  }
  return base;
}

export const CLOCK_LABELS: Record<ClockKey, string> = {
  negotiation_capacity: 'Negotiation capacity',
  active_deadline: 'Active deadline',
  interceptor_reconstitution: 'Interceptor reconstitution',
  energy_infrastructure: 'Energy infrastructure',
  humanitarian_escalation: 'Humanitarian escalation',
  coalition_cohesion: 'Coalition cohesion',
};

export const CLOCK_ORDER: ClockKey[] = [
  'negotiation_capacity',
  'active_deadline',
  'interceptor_reconstitution',
  'energy_infrastructure',
  'humanitarian_escalation',
  'coalition_cohesion',
];

export function trajArrow(t: string): string {
  switch (t) {
    case 'improving':
      return '↗';
    case 'worsening':
      return '↘';
    case 'unchanged':
      return '→';
    case 'deadline_removed':
      return '·';
    default:
      return '·';
  }
}
