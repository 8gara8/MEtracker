import { z } from 'zod';

export const EscalationDirection = z.enum(['escalating', 'mixed', 'de-escalating']);
export type EscalationDirection = z.infer<typeof EscalationDirection>;

export const EscalationRisk7d = z.enum(['critical', 'extreme', 'conditional', 'low']);
export type EscalationRisk7d = z.infer<typeof EscalationRisk7d>;

export const SpilloverRisk = z.enum(['critical', 'conditional', 'contained']);
export type SpilloverRisk = z.infer<typeof SpilloverRisk>;

export const ClockState = z.enum([
  'active',
  'advancing',
  'approaching',
  'critical',
  'deteriorating',
  'elevated',
  'expiring',
  'extension_likely',
  'holding',
  'improving',
  'paused',
  'strained',
  'strong',
  'unclear',
]);
export type ClockState = z.infer<typeof ClockState>;

export const ClockTrajectory = z.enum([
  'improving',
  'worsening',
  'unchanged',
  'deadline_removed',
]);
export type ClockTrajectory = z.infer<typeof ClockTrajectory>;

export const ClockSchema = z.object({
  state: ClockState,
  trajectory: ClockTrajectory,
});
export type Clock = z.infer<typeof ClockSchema>;

export const ActorCasualtySchema = z.object({
  killed: z.number().int().nonnegative(),
  wounded: z.number().int().nonnegative(),
  delta_24_48h: z.string(),
});
export type ActorCasualty = z.infer<typeof ActorCasualtySchema>;

export const SourceSchema = z.object({
  name: z.string().min(1),
  url: z.union([z.string().url(), z.literal('')]),
  accessed_at: z.string(),
});
export type Source = z.infer<typeof SourceSchema>;

export const ClockKeys = [
  'negotiation_capacity',
  'active_deadline',
  'interceptor_reconstitution',
  'energy_infrastructure',
  'humanitarian_escalation',
  'coalition_cohesion',
] as const;

export type ClockKey = (typeof ClockKeys)[number];

export const BriefFrontmatterSchema = z.object({
  report_type: z.string().optional(),
  day: z.number().int().min(1).max(999),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  title: z.string(),
  escalation_direction: EscalationDirection,
  escalation_risk_7d: EscalationRisk7d,
  spillover_risk: SpilloverRisk,
  ceasefire_probability_30d: z.number().int().min(0).max(100),
  quiet_day: z.boolean().optional().default(false),
  gap_acknowledged: z.boolean().optional(),
  casualty_revision: z.boolean().optional(),
  key_developments: z.array(z.string()).min(1),
  sources: z.array(SourceSchema).min(1),
  casualties_snapshot: z.object({
    us: ActorCasualtySchema,
    israel: ActorCasualtySchema,
    iran: ActorCasualtySchema,
    other: ActorCasualtySchema,
  }),
  clocks: z.object({
    negotiation_capacity: ClockSchema,
    active_deadline: ClockSchema,
    interceptor_reconstitution: ClockSchema,
    energy_infrastructure: ClockSchema,
    humanitarian_escalation: ClockSchema,
    coalition_cohesion: ClockSchema,
  }),
});

export type BriefFrontmatter = z.infer<typeof BriefFrontmatterSchema>;

export type Brief = {
  slug: string;
  filePath: string;
  content: string;
  frontmatter: BriefFrontmatter;
};

export type BriefIndexEntry = {
  day: number;
  date: string;
  slug: string;
  title: string;
  escalation_direction: EscalationDirection;
  escalation_risk_7d: EscalationRisk7d;
  spillover_risk: SpilloverRisk;
  ceasefire_probability_30d: number;
  quiet_day: boolean;
  key_developments: string[];
};

export type CasualtiesHistoryEntry = {
  day: number;
  date: string;
  us: { killed: number; wounded: number };
  israel: { killed: number; wounded: number };
  iran: { killed: number; wounded: number };
  other: { killed: number; wounded: number };
};

export type EscalationHistoryEntry = {
  day: number;
  date: string;
  direction: EscalationDirection;
  risk7d: EscalationRisk7d;
  spillover: SpilloverRisk;
  ceasefire_probability_30d: number;
};

export type ClocksHistoryEntry = {
  day: number;
  date: string;
  clocks: Record<ClockKey, Clock>;
};
