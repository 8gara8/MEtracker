import React from 'react';
import type { BriefFrontmatter, ClockKey, ClockState } from '@/lib/types';
import {
  CLOCK_LABELS,
  CLOCK_ORDER,
  clockTone,
  toneColor,
} from '@/lib/design-tokens';

// Short analytical sentence keyed off a clock's current state. Ported from the
// v3 prototype's EXPL table and mapped onto the production ClockKey set.
const EXPL: Partial<Record<ClockKey, Partial<Record<ClockState, string>>>> = {
  negotiation_capacity: {
    strong: 'Working channels open; real proposals on the table.',
    active: 'Mediators engaged, channels live, no agreed agenda yet.',
    holding: 'Back-channels live and holding shape without communiqués.',
    improving: 'Channels reactivating after an earlier collapse.',
    extension_likely: 'Extension of the current track is the consensus path.',
    approaching: 'Parties approaching the table on a shared question.',
    advancing: 'Mediators advancing proposals on specific, narrow questions.',
    paused: 'Channels pro-forma; no agreed basis for talks.',
    strained: 'Channels strained; public rhetoric narrowing room.',
    elevated: 'Demands stacking; each side raising preconditions.',
    deteriorating: 'Channels deteriorating — last communiqués disowned.',
    expiring: 'Mediation window expiring without a successor track.',
    critical: 'All mediation tracks frozen or repudiated.',
    unclear: 'Channel status opaque; reports conflict.',
  },
  active_deadline: {
    paused: 'No ticking ultimatums in play — escalation is volitional, not forced.',
    unclear: 'Deadline posture ambiguous; parties signaling both ways.',
    holding: 'A pause is holding but the underlying deadline has not moved.',
    extension_likely: 'Parties telegraphing an extension of the current window.',
    approaching: 'A named deadline is visibly approaching on the wire.',
    advancing: 'Multiple deadlines stacking; compression risk.',
    elevated: 'Ultimatum posture hardening; room for compromise narrowing.',
    active: 'A deadline is live and binding for at least one side.',
    strained: 'Deadlines compressed against overlapping ultimatums.',
    deteriorating: 'Deadline discipline breaking down in public statements.',
    expiring: 'Hard deadlines expiring inside a 72h window.',
    critical: 'Deadline already triggered a forced-move posture.',
    strong: 'Deadline pressure high — risk of forced-move escalation.',
    improving: 'Deadline removed or deferred.',
  },
  interceptor_reconstitution: {
    strong: 'Magazine depth comfortable across all layers.',
    active: 'Resupply active; production and airlift keeping pace.',
    holding: 'Stocks drawing down but within pre-war modeling bands.',
    improving: 'Airlift and production outpacing burn for the first time.',
    extension_likely: 'Pipeline filling; stocks expected to extend the window.',
    approaching: 'Stocks approaching warning thresholds; not yet binding.',
    advancing: 'Burn rate visible in public sourcing; modeling updated.',
    unclear: 'Public picture incomplete; stockpile posture ambiguous.',
    elevated: 'Engagement discipline shifting — not every incoming gets a shot.',
    paused: 'Reconstitution paused during diplomatic window.',
    strained: 'Magazine modeling shows <60% pre-war stock.',
    deteriorating: 'Airlift pace not keeping up with observed burn.',
    expiring: 'Magazine days-of-supply inside two-week warning band.',
    critical: 'Interceptor starvation forcing target-prioritization decisions.',
  },
  energy_infrastructure: {
    strong: 'Regional energy infrastructure intact; no flow disruptions.',
    active: 'Routing active and healthy; minor repricing only.',
    holding: 'Disruptions holding shape; global balance absorbing.',
    improving: 'Capacity recovering; routing normalising faster than expected.',
    extension_likely: 'Disruptions expected to persist but bounded.',
    approaching: 'Additional terminals and refineries approaching the target set.',
    advancing: 'Refinery and terminal hits compounding; regional shortages begin.',
    unclear: 'Damage assessments conflicting; market reprices in ranges.',
    elevated: 'Hormuz pressure plus terminal damage — oil price regime-shifts.',
    paused: 'Infrastructure targeting paused under a narrow arrangement.',
    strained: 'Strategic ports and refineries persistently offline.',
    deteriorating: 'Successive strikes extending permanent capacity loss.',
    expiring: 'Repair timelines measured in months, not weeks.',
    critical: 'Energy system in partial collapse; rationing conversations begin.',
  },
  humanitarian_escalation: {
    paused: 'Civilian harm concentrated but not yet mass-cas in tempo.',
    holding: 'Civilian impact stable at an elevated baseline.',
    unclear: 'Casualty reporting lagged; real picture likely worse than counts.',
    improving: 'Tempo of civilian impact easing under a narrow pause.',
    extension_likely: 'Protection windows likely to extend; impact still elevated.',
    approaching: 'Civilian target set approaching critical thresholds.',
    advancing: 'Civilian impact compounding across multiple theatres.',
    elevated: 'Civilian casualty curve steepening; displacement widening.',
    active: 'Mass-casualty events active and escalating in tempo.',
    strained: 'Civilian infrastructure strained — hospitals, shelters, power.',
    strong: 'Civilian harm acute and compounding.',
    deteriorating: 'Protection monitors flagging worst-case trajectories.',
    expiring: 'Humanitarian access windows expiring without replacement.',
    critical: 'Atrocity-risk thresholds crossed; international response delayed.',
  },
  coalition_cohesion: {
    strong: 'Coalition aligned on ends, means, and tempo.',
    active: 'Coalition statements coordinated; operational alignment visible.',
    holding: 'Cohesion holding despite domestic pressure in partner capitals.',
    improving: 'Coalition realigning after last week\'s strain.',
    extension_likely: 'Partners likely to extend the current arrangement.',
    approaching: 'Partners approaching agreed positions on next steps.',
    advancing: 'New partners advancing into the coordination frame.',
    unclear: 'Partner posture ambiguous; statements hedged.',
    elevated: 'Rhetorical divergence visible; operational alignment holding.',
    paused: 'Coalition pausing joint action during a reassessment window.',
    strained: 'Public cohesion strained; statements diverging on scope.',
    deteriorating: 'Partners openly distancing from the lead actor.',
    expiring: 'Coalition mandate or authorization window expiring.',
    critical: 'Coalition fracturing visibly; partners pursuing separate tracks.',
  },
};

function explain(key: ClockKey, state: ClockState, trajectory: string): string {
  const byKey = EXPL[key];
  if (byKey && byKey[state]) return byKey[state] as string;
  return `Currently ${state.replace(/_/g, ' ')}; trajectory ${trajectory.replace(/_/g, ' ')}.`;
}

export function GaugeExplanations({
  clocks,
}: {
  clocks: BriefFrontmatter['clocks'];
}) {
  return (
    <div
      className="mt-3.5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-6"
    >
      {CLOCK_ORDER.map((k) => {
        const clock = clocks[k];
        const tone = clockTone(k, clock.state);
        const color = toneColor(tone);
        const text = explain(k, clock.state, clock.trajectory);
        return (
          <div key={k} className="pt-2" style={{ borderTop: `1px solid ${color}` }}>
            <div
              className="mb-1 font-mono text-[9px] uppercase text-paper-ink-mute"
              style={{ letterSpacing: '0.14em' }}
            >
              <span
                aria-hidden
                className="mr-1.5 inline-block align-middle"
                style={{ width: 5, height: 5, background: color }}
              />
              {CLOCK_LABELS[k]}
            </div>
            <div
              className="font-sans text-[12px] leading-[1.45] text-paper-ink-soft"
              style={{ textWrap: 'pretty' }}
            >
              {text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
