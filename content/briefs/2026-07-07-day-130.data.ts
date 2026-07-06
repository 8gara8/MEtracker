import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction stays mixed as the mourning moved to Qom without incident. The Iran-US kinetic standdown held a ninth day with no strike exchanged as processions ran between the Shrine of Fatima Masoumeh and the Jamkaran Mosque, ahead of rites in the Iraqi shrine cities (July 8) and burial at Mashhad (July 9) (CNN, Al Jazeera). Against that de-escalatory face, the diplomatic file that looked to be advancing on Day 128 showed the parties diverging: speaker Ghalibaf put $12 billion of the $24 billion in frozen assets on offer, against Pezeshkian's $6 billion 'first step' and the US 'perform first' condition (Business Standard, Al Jazeera). The kinetic seam held; the funds seam widened.",
      risk7d:
        "Seven-day risk stays conditional with two clocks live. The funeral runs through the Iraqi shrine cities (July 8) and burial at the Imam Reza shrine in Mashhad (July 9); Doha is set to resume after the burial, targeted July 11, covering sanctions, the frozen funds, and the nuclear file (Al Jazeera). The day's fresh headwind is the funds gap — three positions on the one deliverable measured in dollars, with zero moved in nineteen days of the window — layered on Qalibaf's standing bar on inspectors entering struck sites (Business Standard, Press TV). The risk is whether the gap between burial and talks stays quiet or a funds or access standoff poisons the resumption.",
      spillover:
        "Spillover holds conditional as the Lebanon seam stayed quiet after the July 4 ten-strike escalation, with no confirmed Hezbollah retaliation yet in the burial-to-talks window (Al Jazeera). Israel's refusal to withdraw from its 'security zone' keeps the vector live, Ghalibaf's 'proportionate measures' warning carries, and Katz's 'marked for death' threat is the backdrop to the reported security veto on Mojtaba's burial attendance. The Gulf stayed calm and Saudi exports ran at ~90% of pre-war; the Lebanon vector remains the most likely spoiler.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / Al Jazeera',
      event:
        "The mourning moved out of Tehran to the clerical hub of Qom, with processions between the Shrine of Fatima Masoumeh and the Jamkaran Mosque, ahead of rites in the Iraqi shrine cities of Najaf and Karbala (July 8) and burial at the Imam Reza shrine in Mashhad (July 9); the Iran-US kinetic standdown held a ninth day with no strike exchanged",
      summary:
        "Per §3.1 the funeral's second-largest day advanced on its de-escalatory face: the Qom procession ran and the standdown reached a ninth day, narrowing the discrete escalation window to the Iraqi rites and the Mashhad burial (CNN, Al Jazeera).",
      impact:
        "Each incident-free day of the mourning week makes a strike-driven collapse of the pause less likely; the remaining tripwires are the July 8-9 burial sequence and the gap before Doha resumes.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / IBTimes UK / RFE/RL',
      event:
        "Successor Mojtaba Khamenei stayed unseen for a fourth straight day of public mourning, and reporting emerged that Iran's own security officials declined his request to attend the July 9 Mashhad burial, judging the risk of an Israeli strike on the gathered leadership too high; he has communicated only through written statements since the war began",
      summary:
        "The §3.5.6 regime-cohesion prior hardened from 'absent by injury' to 'absent by security veto': a supreme leader whose own protective apparatus rules him too exposed to bury his father is one whose freedom of movement and command authority are materially constrained (Al Jazeera, IBTimes UK, RFE/RL).",
      impact:
        "The brittleness cuts both ways — an unseen leader may accept ceasefire terms a visible one could not politically survive, or the IRGC and clerical figures fronting the ceremonies accumulate the authority to contest any deal Mojtaba signs.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Business Standard / Al Jazeera / Press TV',
      event:
        "Ahead of the post-burial Doha resumption targeted for July 11, the frozen-funds fault line widened: speaker Ghalibaf said $12 billion of the $24 billion in frozen assets would be made available, against President Pezeshkian's $6 billion 'first step' and the US position that no funds move until Iran performs; part of the tranche would be released as goods rather than cash, and Qalibaf's bar on inspectors entering any struck nuclear site carried",
      summary:
        "Per §3.5.3 the deliverable easiest to count in dollars split into three claims pitched at three audiences — Ghalibaf's maximal $12 billion, Pezeshkian's $6 billion floor, and Washington's 'perform first' condition — with zero moved in nineteen days of the window (Business Standard, Al Jazeera).",
      impact:
        "The funds gap is a July 11 binding test alongside nuclear access: if neither converts to a verified transfer or an inspector visit, the resumption produces two publicly diverging files rather than a settlement.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Al Jazeera',
      event:
        "The Lebanon seam stayed quiet with no confirmed Hezbollah retaliation after Israel's July 4 strike on 10 Hezbollah sites across Bint Jbeil, Beit Yahoun, Kounine, and Baraashit; Israel maintained its refusal to withdraw from its self-declared 'security zone' in southern Lebanon",
      summary:
        "Per §3.5.6 the Israel-independence prior stayed hot but unmoving: the ten-strike escalation drew no reported answer in the burial-to-talks window, though the refusal to withdraw and Ghalibaf's 'proportionate measures' warning keep the vector primed (Al Jazeera).",
      impact:
        "A quiet Lebanon seam preserves the July 11 resumption; a retaliation cycle in the gap between burial and talks remains the single most likely spoiler for the Doha track.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNBC / Trading Economics',
      event:
        "Brent traded below $72, near its lowest since late February, as commercial shipping through the Strait of Hormuz kept recovering; Saudi crude exports held at ~90% of the pre-war baseline, the UAE matched the rebound, and a sizable inventory of Iranian oil continued to accumulate at sea; the Iran / US / Oman toll dispute carried unresolved with LNG transit still near zero",
      summary:
        "Per §3.5.3 the tape stayed a price of substitution, not a reopened corridor: calm on Saudi and Emirati supply and improving throughput, but the toll-governance contest (Iran 'definite' / US 'unacceptable' / Oman opposed) and near-zero LNG transit leave the corridor structurally impaired (CNBC, Trading Economics).",
      impact:
        "The energy vector is the cleanest lagging witness — a Brent below $72 reads recovery-via-substitution, not a settled Hormuz regime; the toll question remains a variable that outlasts any ceasefire.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 (kinetic standdown holds a ninth day; no new US or Iranian strikes exchanged; Doha track paused for the funeral, resumption targeted after the July 9 burial)',
      status:
        "No new US casualties. The mutual standdown held a ninth day as mourning moved to Qom and the Doha track stayed paused. Talks target a post-burial resumption on July 11 against a widening funds gap and a standing nuclear-access dispute.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (no new Israeli casualties; the July 4 reservist wound already counted; Lebanon seam quiet with no confirmed Hezbollah retaliation)',
      status:
        "No new Israeli casualties. The Lebanon seam stayed quiet after the July 4 ten-strike escalation, with no confirmed Hezbollah retaliation yet; Israel maintained its refusal to withdraw, and Katz's 'marked for death' threat against Mojtaba carries as the backdrop to the reported burial security veto.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (standdown Day 9; mourning moved to Qom; nuclear access still barred — ~440.9 kg of 60% HEU at Isfahan unverified since June 2025)',
      status:
        "No verified new mass toll under the standdown. Mourning moved to Qom; Mojtaba stayed unseen a fourth day, with security officials reported to have declined his request to attend the Mashhad burial. Qalibaf's bar on inspectors entering struck sites carried; ~440.9 kg of 60% HEU at the Isfahan tunnel complex stays unverified since June 2025. HRANA's execution and 3.2M displaced figures carry.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+0 KIA / +0 verified WIA (Lebanon seam quiet; casualties from the July 4 Israeli strikes still not confirmed by health authorities)',
      status:
        "The Lebanon seam stayed quiet; casualties from the July 4 ten-strike Israeli action remain unconfirmed by health authorities. The Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA carry.",
    },
  },
  exec:
    "Day 130 held the pattern of the mourning week. The Iran-US kinetic standdown reached a ninth day as the funeral moved out of Tehran to the clerical hub of Qom, with processions between the Shrine of Fatima Masoumeh and the Jamkaran Mosque, ahead of rites in the Iraqi shrine cities of Najaf and Karbala (July 8) and burial at the Imam Reza shrine in Mashhad (July 9) (CNN, Al Jazeera). The succession signal hardened another notch: successor Mojtaba Khamenei stayed unseen for a fourth straight day of public mourning, and reporting emerged that Iran's own security officials declined his request to attend the Mashhad burial, judging the risk of an Israeli strike on the gathered leadership too high (Al Jazeera, IBTimes UK, RFE/RL). Ahead of the post-burial Doha resumption targeted for July 11, the frozen-funds fault line widened rather than narrowed: parliament speaker Ghalibaf said $12 billion of the $24 billion in frozen assets would be made available, against Pezeshkian's more modest $6 billion 'first step' and the US position that no funds move until Iran performs (Business Standard, Al Jazeera). Qalibaf's bar on inspectors entering any struck nuclear site carried. The Lebanon seam stayed quiet with no confirmed Hezbollah retaliation. Energy held calm — Brent below $72, near its lowest since late February, Saudi exports at ~90% of pre-war (CNBC, Trading Economics). 30-day ceasefire probability holds at 62. Direction stays mixed.",
  implications: [
    {
      title:
        "The frozen-funds fault line widened before Doha — three positions on the one deliverable that can be counted in dollars, and zero moved",
      body:
        "Day 130's sharpest diplomatic signal was a number moving the wrong way. Ahead of the post-burial Doha resumption, parliament speaker Ghalibaf said $12 billion of the $24 billion in frozen Iranian assets would be made available — a figure that sits above both President Pezeshkian's $6 billion 'first step' and the US position that not a dollar moves until Iran performs its commitments (Business Standard, Al Jazeera). Analytical judgment under the multi-clock framework: the negotiation-capacity clock is not stalling, but the parties are drifting apart on the deliverable that is easiest to measure. Per §3.5.3, each figure is a claim pitched at its own audience — Ghalibaf's $12 billion is a maximal domestic marker, Pezeshkian's $6 billion a negotiating floor, and Washington's 'won't get a dime until it performs' a conditionality that has moved zero funds in nineteen days of the 60-day window. The goods-purchase mechanism — part of the tranche released as goods rather than cash — remains the only concrete workaround on the table, and it converts the dispute from 'how much' to 'as what.' The binding test is unchanged: whether July 11 turns any of these figures into a verified transfer, or whether the frozen-funds file joins the nuclear-access dispute as a second measurable item on which the sides publicly diverge going into the talks.",
    },
    {
      title:
        "The mourning cleared Qom without a strike, but the day's real news was a leader barred from his own father's burial",
      body:
        "The move to Qom cleared without incident — a ninth quiet day on the Iran-US seam — but the day's real signal again concerned a leader who cannot appear. Successor Mojtaba Khamenei stayed unseen for a fourth day of public mourning, and reporting surfaced that Iran's security officials declined his own request to attend the July 9 Mashhad burial, judging the risk of an Israeli strike on the gathered leadership too high (Al Jazeera, IBTimes UK, RFE/RL). Analytical judgment: the §3.5.6 regime-cohesion prior hardened from 'absent by injury' to 'absent by security veto.' A supreme leader whose own protective apparatus rules him too exposed to bury his father is one whose freedom of movement — and thus command authority — is materially constrained. The double edge from Day 129 sharpens: an invisible leader may accept ceasefire terms a visible one could not politically survive, but the IRGC generals and clerics fronting every ceremony accumulate the standing to contest whatever he signs. Katz's standing 'marked for death' threat is the backdrop that makes the security veto rational rather than face-saving. The succession is being managed by absence — and Day 130 added that the absence is now partly imposed on Mojtaba, not merely chosen, a distinction that cuts against any near-term consolidation of his authority.",
    },
    {
      title:
        "Taiwan: energy calm held a 130th day, but three slow-moving fault lines — access, tolls, and now funds — are the durable risks diversification survives",
      body:
        "For Taiwan the day was continuity again. Brent traded below $72, near its lowest since late February, as Hormuz shipping kept recovering and Saudi exports held at ~90% of pre-war with the UAE matched (CNBC, Trading Economics). No LNG cargo has been hit in 130 days and cover runs through September. §3.5.6 reasserts the exposure: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas buffer, with TSMC's 2026 CapEx near 8%. The structural risks a price-taker cannot see held from Day 129 and gained a third: Qalibaf's inspector bar keeps the war's nuclear endpoint unverifiable, the Iran-US-Oman toll dispute keeps Hormuz governance unsettled, and the widening frozen-funds gap now strains one of the deliverables holding the 60-day window together. Analytical judgment: none of the three is priced into a $72 tape, and any could reprice Taiwan's imports on a single bad day at Doha. The hedges indifferent to all of them remain the only durable answer — US and Australian LNG (25%-US-by-2029) and the Maanshan and Kuosheng restarts (2028-2029). A calm tape buys time; only non-Hormuz supply buys security.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown's ninth day. The Doha track stays paused until a post-burial resumption targeted July 11, when sanctions, the frozen funds, and the nuclear file are all on the agenda against a widening funds gap.",
    israel:
      "No new Israeli casualties. The Lebanon seam stayed quiet after the July 4 ten-strike escalation, with no confirmed Hezbollah retaliation yet; Israel maintained its refusal to withdraw, and Katz's 'marked for death' threat carries.",
    iran:
      "No verified new mass toll under the standdown. Mourning moved to Qom; Mojtaba again absent a fourth day, reportedly barred by security officials from the Mashhad burial. Qalibaf's inspector bar carried; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "Lebanon seam quiet; July 4 strike casualties still unconfirmed. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+; Gulf 33+ KIA / 72+ WIA carry.",
  },
};

export default data;
