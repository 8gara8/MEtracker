import type { EscalationGaugeProps } from '@/components/EscalationGauge';
import type { EventRow } from '@/components/EventsTable';
import type { CasualtiesTableProps } from '@/components/CasualtiesTable';

import day001 from '@/content/briefs/2026-02-28-day-001.data';
import day055 from '@/content/briefs/2026-04-23-day-055.data';
import day056 from '@/content/briefs/2026-04-24-day-056.data';
import day057 from '@/content/briefs/2026-04-25-day-057.data';
import day058 from '@/content/briefs/2026-04-26-day-058.data';
import day059 from '@/content/briefs/2026-04-27-day-059.data';
import day060 from '@/content/briefs/2026-04-28-day-060.data';
import day061 from '@/content/briefs/2026-04-29-day-061.data';
import day062 from '@/content/briefs/2026-04-30-day-062.data';
import day063 from '@/content/briefs/2026-05-01-day-063.data';
import day064 from '@/content/briefs/2026-05-02-day-064.data';
import day065 from '@/content/briefs/2026-05-03-day-065.data';
import day066 from '@/content/briefs/2026-05-04-day-066.data';
import day067 from '@/content/briefs/2026-05-05-day-067.data';
import day068 from '@/content/briefs/2026-05-06-day-068.data';
import day069 from '@/content/briefs/2026-05-07-day-069.data';
import day070 from '@/content/briefs/2026-05-08-day-070.data';
import day071 from '@/content/briefs/2026-05-09-day-071.data';
import day072 from '@/content/briefs/2026-05-10-day-072.data';
import day073 from '@/content/briefs/2026-05-11-day-073.data';
import day074 from '@/content/briefs/2026-05-12-day-074.data';
import day075 from '@/content/briefs/2026-05-13-day-075.data';
import day076 from '@/content/briefs/2026-05-14-day-076.data';
import day077 from '@/content/briefs/2026-05-15-day-077.data';
import day078 from '@/content/briefs/2026-05-16-day-078.data';
import day079 from '@/content/briefs/2026-05-17-day-079.data';
import day080 from '@/content/briefs/2026-05-18-day-080.data';
import day081 from '@/content/briefs/2026-05-19-day-081.data';
import day082 from '@/content/briefs/2026-05-20-day-082.data';
import day083 from '@/content/briefs/2026-05-21-day-083.data';
import day084 from '@/content/briefs/2026-05-22-day-084.data';
import day085 from '@/content/briefs/2026-05-23-day-085.data';
import day086 from '@/content/briefs/2026-05-24-day-086.data';
import day087 from '@/content/briefs/2026-05-25-day-087.data';
import day088 from '@/content/briefs/2026-05-26-day-088.data';
import day089 from '@/content/briefs/2026-05-27-day-089.data';
import day090 from '@/content/briefs/2026-05-28-day-090.data';
import day091 from '@/content/briefs/2026-05-29-day-091.data';
import day092 from '@/content/briefs/2026-05-30-day-092.data';
import day093 from '@/content/briefs/2026-05-31-day-093.data';
import day094 from '@/content/briefs/2026-06-01-day-094.data';
import day095 from '@/content/briefs/2026-06-02-day-095.data';
import day096 from '@/content/briefs/2026-06-03-day-096.data';
import day097 from '@/content/briefs/2026-06-04-day-097.data';
import day098 from '@/content/briefs/2026-06-05-day-098.data';
import day099 from '@/content/briefs/2026-06-06-day-099.data';
import day100 from '@/content/briefs/2026-06-07-day-100.data';
import day101 from '@/content/briefs/2026-06-08-day-101.data';
import day102 from '@/content/briefs/2026-06-09-day-102.data';
import day103 from '@/content/briefs/2026-06-10-day-103.data';
import day104 from '@/content/briefs/2026-06-11-day-104.data';
import day105 from '@/content/briefs/2026-06-12-day-105.data';
import day106 from '@/content/briefs/2026-06-13-day-106.data';
import day107 from '@/content/briefs/2026-06-14-day-107.data';
import day108 from '@/content/briefs/2026-06-15-day-108.data';
import day109 from '@/content/briefs/2026-06-16-day-109.data';
import day110 from '@/content/briefs/2026-06-17-day-110.data';
import day111 from '@/content/briefs/2026-06-18-day-111.data';
import day112 from '@/content/briefs/2026-06-19-day-112.data';
import day113 from '@/content/briefs/2026-06-20-day-113.data';
import day114 from '@/content/briefs/2026-06-21-day-114.data';
import day115 from '@/content/briefs/2026-06-22-day-115.data';
import day116 from '@/content/briefs/2026-06-23-day-116.data';
import day117 from '@/content/briefs/2026-06-24-day-117.data';
import day118 from '@/content/briefs/2026-06-25-day-118.data';
import day119 from '@/content/briefs/2026-06-26-day-119.data';
import day120 from '@/content/briefs/2026-06-27-day-120.data';
import day121 from '@/content/briefs/2026-06-28-day-121.data';
import day122 from '@/content/briefs/2026-06-29-day-122.data';
import day123 from '@/content/briefs/2026-06-30-day-123.data';
export type Implication = { title: string; body: string };

export type ActorCasualtyNotes = {
  us?: string;
  israel?: string;
  iran?: string;
  other?: string;
};

export type BriefData = {
  escalation: EscalationGaugeProps;
  events: EventRow[];
  casualties: CasualtiesTableProps;
  // v3 additions — optional so uncurated briefs fall back gracefully.
  exec?: string;
  implications?: Implication[];
  flash?: string;
  casualtyNotes?: ActorCasualtyNotes;
};

const briefDataBySlug: Record<string, BriefData> = {
  '2026-02-28-day-001': day001,
  '2026-04-23-day-055': day055,
  '2026-04-24-day-056': day056,
  '2026-04-25-day-057': day057,
  '2026-04-26-day-058': day058,
  '2026-04-27-day-059': day059,
  '2026-04-28-day-060': day060,
  '2026-04-29-day-061': day061,
  '2026-04-30-day-062': day062,
  '2026-05-01-day-063': day063,
  '2026-05-02-day-064': day064,
  '2026-05-03-day-065': day065,
  '2026-05-04-day-066': day066,
  '2026-05-05-day-067': day067,
  '2026-05-06-day-068': day068,
  '2026-05-07-day-069': day069,
  '2026-05-08-day-070': day070,
  '2026-05-09-day-071': day071,
  '2026-05-10-day-072': day072,
  '2026-05-11-day-073': day073,
  '2026-05-12-day-074': day074,
  '2026-05-13-day-075': day075,
  '2026-05-14-day-076': day076,
  '2026-05-15-day-077': day077,
  '2026-05-16-day-078': day078,
  '2026-05-17-day-079': day079,
  '2026-05-18-day-080': day080,
  '2026-05-19-day-081': day081,
  '2026-05-20-day-082': day082,
  '2026-05-21-day-083': day083,
  '2026-05-22-day-084': day084,
  '2026-05-23-day-085': day085,
  '2026-05-24-day-086': day086,
  '2026-05-25-day-087': day087,
  '2026-05-26-day-088': day088,
  '2026-05-27-day-089': day089,
  '2026-05-28-day-090': day090,
  '2026-05-29-day-091': day091,
  '2026-05-30-day-092': day092,
  '2026-05-31-day-093': day093,
  '2026-06-01-day-094': day094,
  '2026-06-02-day-095': day095,
  '2026-06-03-day-096': day096,
  '2026-06-04-day-097': day097,
  '2026-06-05-day-098': day098,
  '2026-06-06-day-099': day099,
  '2026-06-07-day-100': day100,
  '2026-06-08-day-101': day101,
  '2026-06-09-day-102': day102,
  '2026-06-10-day-103': day103,
  '2026-06-11-day-104': day104,
  '2026-06-12-day-105': day105,
  '2026-06-13-day-106': day106,
  '2026-06-14-day-107': day107,
  '2026-06-15-day-108': day108,
  '2026-06-16-day-109': day109,
  '2026-06-17-day-110': day110,
  '2026-06-18-day-111': day111,
  '2026-06-19-day-112': day112,
  '2026-06-20-day-113': day113,
  '2026-06-21-day-114': day114,
  '2026-06-22-day-115': day115,
  '2026-06-23-day-116': day116,
  '2026-06-24-day-117': day117,
  '2026-06-25-day-118': day118,
  '2026-06-26-day-119': day119,
  '2026-06-27-day-120': day120,
  '2026-06-28-day-121': day121,
  '2026-06-29-day-122': day122,
  '2026-06-30-day-123': day123,
};

export function getBriefData(slug: string): BriefData | null {
  return briefDataBySlug[slug] ?? null;
}
