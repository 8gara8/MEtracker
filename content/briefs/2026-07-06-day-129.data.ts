import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction stays mixed on the funeral's largest and quietest day. The main Tehran procession set off at dawn from Imam Hossein Square toward Azadi Square along a 10-kilometer route, with Tehran's mayor claiming attendance could reach 20 million, and the Iran-US kinetic standdown held an eighth day with no strike exchanged (CNN, Al Jazeera, Time). Against that de-escalatory face, the nuclear track hardened ahead of July 11: parliament speaker Qalibaf said inspectors are barred from any bombed or damaged site 'under any circumstances,' cutting against Grossi's insistence that inspections 'are going to happen' (CBS News, Al Jazeera). The kinetic seam held; the verification seam frayed.",
      risk7d:
        "Seven-day risk stays conditional with two clocks still live. The state funeral runs through burial at the Imam Reza shrine in Mashhad (July 8-9 per varying state-media schedules); Doha talks resume July 11 covering sanctions, the frozen $6 billion, and the nuclear file (CNN, NPR). The new headwind is access: Qalibaf limited any inspection to Bushehr and the Tehran research reactor and barred entry to struck sites, while Grossi says dates and locations are still under discussion (CBS News, Al Jazeera). The risk is whether the four-day gap between burial and talks stays quiet or a Lebanon retaliation or a nuclear-access standoff poisons the resumption.",
      spillover:
        "Spillover holds conditional as the Lebanon seam stayed quiet after the July 4 ten-strike escalation, with no confirmed Hezbollah retaliation yet in the burial-to-talks window (Times of Israel, Washington Times). Israel's refusal to withdraw from its 'security zone' keeps the vector live, and Ghalibaf's 'proportionate measures' warning carries. The Gulf stayed calm and Saudi exports ran at ~90% of pre-war levels; the Lebanon vector remains the most likely spoiler.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / Al Jazeera / Time',
      event:
        "Khamenei funeral peak day: the main 10-kilometer Tehran procession set off at dawn from Imam Hossein Square toward Azadi Square, with Tehran mayor Zakani claiming attendance could reach 20 million — potentially the largest gathering in the city's history — followed by processions in Qom and the Iraqi shrine cities before burial at the Imam Reza shrine in Mashhad; the kinetic standdown held an eighth day with no US-Iran strike exchanged",
      summary:
        "Per §3.1 the funeral's largest day advanced on its de-escalatory face: the procession proceeded, the standdown held an eighth day, and no strike landed into a crowd Iran's own officials sized at up to 20 million — the single highest-stakes tripwire of the mourning week passing without incident (CNN, Al Jazeera).",
      impact:
        "The peak day clearing quietly narrows the discrete escalation window to the burial (July 8-9) and the four-day gap before talks resume July 11; each incident-free day makes a strike-driven collapse of the pause less likely.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / France 24 / Time',
      event:
        "Three of Khamenei's sons prayed beside his coffin on July 5, but successor Mojtaba Khamenei — named supreme leader March 9 — again did not appear; his whereabouts remain unknown and his injuries from the February 28 strike (facial disfigurement and a severe leg wound, possibly an amputation per Reuters) are still unhealed four months into his tenure",
      summary:
        "The §3.5.6 regime-cohesion prior deepened into a structural fact: an invisible supreme leader who cannot appear at the largest funeral in the Republic's history, while his brothers can, confirms the succession is a managed absence, not a one-day security choice (CNBC, France 24, Time).",
      impact:
        "The brittleness cuts both ways: an unseen leader may accept ceasefire terms a visible one could not politically survive, or the IRGC and clerical figures fronting the ceremonies accumulate the authority to complicate any deal Mojtaba signs.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CBS News / Al Jazeera / IAEA',
      event:
        "Ahead of the July 11 Doha resumption, parliament speaker Qalibaf said IAEA inspectors are barred from any bombed or damaged nuclear site 'under any circumstances' and limited access to just two locations — the Bushehr power plant and the Tehran research reactor — while Grossi maintained inspections 'are going to happen' under the MoU with dates and locations still under discussion; deputy FM Qaribabadi said part of the frozen $6 billion would be released as goods",
      summary:
        "Per §3.5.3 the nuclear track split into claim versus constraint: Grossi's 'going to happen' framing met Qalibaf's hard limit that no inspector reaches a struck site, leaving the ~440.9 kg of 60% HEU at the Isfahan tunnel complex unverifiable exactly where it is stored (CBS News, Al Jazeera, IAEA).",
      impact:
        "The access dispute is the July 11 round's binding test: if Iran holds inspectors out of the damaged sites, the nuclear file's first appearance on the agenda produces a standoff rather than a settlement, and the standdown's political justification narrows.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Times of Israel / Washington Times',
      event:
        "The Lebanon seam stayed quiet through July 5-6 after Israel's July 4 strike on 10 Hezbollah sites across Bint Jbeil, Beit Yahoun, Kounine, and Baraashit, with no confirmed Hezbollah retaliation yet; Israel maintained its refusal to withdraw from its self-declared 'security zone' in southern Lebanon",
      summary:
        "Per §3.5.6 the Israel-independence prior stayed hot but unmoving: the ten-strike escalation drew no reported answer in the burial-to-talks window, though the refusal to withdraw and Ghalibaf's 'proportionate measures' warning keep the vector primed (Times of Israel, Washington Times).",
      impact:
        "A quiet Lebanon seam preserves the July 11 resumption; a retaliation cycle in the four-day gap between burial and talks remains the single most likely spoiler for the Doha track.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNBC / Trading Economics',
      event:
        "Brent held near $72 in thin trading as commercial shipping through the Strait of Hormuz continued to recover; Saudi crude exports climbed back to ~90% of the pre-war baseline, the UAE matched the rebound, Iraq showed tentative recovery, and a sizable inventory of Iranian oil accumulated at sea; the Iran / US / Oman toll dispute carried unresolved with LNG transit still near zero",
      summary:
        "Per §3.5.3 the tape stayed a price of substitution, not a reopened corridor: calm on Saudi and Emirati supply and improving throughput, but the toll-governance contest (Iran 'definite' / US 'unacceptable' / Oman opposed) and near-zero LNG transit leave the corridor structurally impaired (CNBC, Trading Economics).",
      impact:
        "The energy vector is the cleanest lagging witness — a Brent near $72 reads recovery-via-substitution, not a settled Hormuz regime; the toll question remains a July 11 variable that outlasts any ceasefire.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 (kinetic standdown holds an eighth day; no new US or Iranian strikes exchanged; Doha track paused for the funeral until the July 11 resumption)',
      status:
        "No new US casualties. The mutual standdown held an eighth day as the funeral peaked and the Doha track stayed paused until July 11. Trump's 'agreed to just about everything we need' framing carries against a hardening nuclear-access dispute.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (no new Israeli casualties; the July 4 reservist wound already counted; Lebanon seam quiet July 5-6 with no confirmed Hezbollah retaliation)',
      status:
        "No new Israeli casualties. The Lebanon seam stayed quiet after the July 4 ten-strike escalation, with no confirmed Hezbollah retaliation yet; Israel maintained its refusal to withdraw from its 'security zone.' The vector stays primed but unmoving.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (standdown Day 8; funeral peak day held; nuclear access hardened ahead of July 11 — ~440.9 kg of 60% HEU at Isfahan unverified since June 2025)',
      status:
        "No verified new mass toll under the standdown. The funeral's largest day passed without incident; successor Mojtaba again absent as three sons appeared. Qalibaf barred inspectors from struck sites ahead of July 11; ~440.9 kg of 60% HEU at the Isfahan tunnel complex stays unverified since June 2025. HRANA's execution and 3.2M displaced figures carry.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+0 KIA / +0 verified WIA (Lebanon seam quiet July 5-6; casualties from the July 4 Israeli strikes still not confirmed by health authorities)',
      status:
        "The Lebanon seam stayed quiet through July 5-6; casualties from the July 4 ten-strike Israeli action remain unconfirmed by health authorities. The Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA carry.",
    },
  },
  exec:
    "Day 129 was the funeral's largest day and its quietest front. The main Tehran procession set off at dawn from Imam Hossein Square toward Azadi Square along a 10-kilometer route, with Tehran's mayor claiming attendance could reach 20 million — potentially the largest gathering in the city's history — and the Iran-US kinetic standdown held an eighth day with no strike exchanged (CNN, Al Jazeera, Time). The succession signal hardened rather than resolved: three of Khamenei's sons prayed beside his coffin on July 5, but successor Mojtaba again did not appear, his whereabouts unknown and his injuries — facial disfigurement and a severe leg wound — still unhealed four months into his tenure (CNBC, France 24, Time). Ahead of the July 11 Doha resumption, the nuclear track hardened: parliament speaker Qalibaf said inspectors are barred from any bombed or damaged site 'under any circumstances' and limited access to just Bushehr and the Tehran research reactor — a direct constraint on Grossi's insistence that inspections 'are going to happen' and on any verification of the ~440.9 kg of 60% HEU at Isfahan (CBS News, Al Jazeera, IAEA). Deputy FM Qaribabadi said part of the frozen $6 billion would be released as goods. The Lebanon seam stayed quiet after the July 4 ten-strike escalation, with no confirmed Hezbollah retaliation yet. Energy held calm — Brent near $72, Saudi exports at ~90% pre-war, Hormuz shipping recovering, Iranian crude accumulating at sea (CNBC, Trading Economics). 30-day ceasefire probability holds at 62: a peaceful funeral peak offset by a hardening nuclear-access dispute. Direction stays mixed.",
  implications: [
    {
      title:
        "The nuclear file hardened before it even reached the table — Qalibaf barred inspectors from the struck sites, turning July 11's marquee agenda item into a likely standoff",
      body:
        "Day 129's most consequential signal came from the podium, not the procession. Ahead of the July 11 Doha resumption, parliament speaker Qalibaf said IAEA inspectors are barred from any bombed or damaged nuclear site 'under any circumstances' and limited access to just two undamaged locations — Bushehr and the Tehran research reactor (CBS News). That directly constrains Grossi, who insists inspections 'are going to happen' under the MoU with dates and locations still under discussion (Al Jazeera, IAEA). Analytical judgment under the multi-clock framework: the negotiation-capacity clock that appeared to advance when the nuclear file entered the agenda on Day 128 now meets a hard limit — Iran will discuss the file but not open the places that matter. The ~440.9 kg of 60% HEU sits precisely at the Isfahan tunnel complex, which the strikes damaged and which Qalibaf's rule now walls off. Per §3.5.3, Trump's 'agreed to just about everything' is a claim measured against a constraint that would leave the war's central proliferation fact unverifiable. Whether July 11 bridges the gap between 'inspections will happen' and 'not at the struck sites' is the round's binding test — and the likeliest outcome is a deferral dressed as progress.",
    },
    {
      title:
        "The funeral peak passed without a strike, but Mojtaba's absence made the day's real news a leader who cannot appear",
      body:
        "The single highest-stakes tripwire of the mourning week — a procession Iran's own mayor sized at up to 20 million — cleared without incident, and the kinetic standdown reached an eighth day (CNN, Al Jazeera). That is a genuine de-escalatory data point: the Iran-US seam held on the day it was most exposed. But the §3.5.6 regime-cohesion prior deepened in the same hours. Three of Khamenei's sons prayed beside his coffin; the son who succeeded him did not appear, his whereabouts unknown and his February injuries — facial disfigurement, a severe leg wound Reuters reported may be an amputation — still visibly disqualifying four months in (CNBC, France 24, Time). Analytical judgment: a supreme leader too injured to attend the largest funeral in the Republic's history, while his brothers can, is a structurally brittle apex. That brittleness is double-edged for the ceasefire — an invisible leader may swallow terms a visible one could not survive politically, but the IRGC generals and clerics fronting the ceremonies are accumulating the standing to contest any deal he signs. The succession is not resolving; it is being managed by absence, and that is its own instability.",
    },
    {
      title:
        "Taiwan: energy calm held a 129th day, but the verification gap and the toll dispute are the durable risks — diversification survives all outcomes",
      body:
        "For Taiwan the day offered continuity, not relief. Brent held near $72 in thin trading as Hormuz shipping recovered, Saudi exports ran at ~90% of pre-war and the UAE matched the rebound, with Iranian crude accumulating at sea (CNBC, Trading Economics). No LNG cargo has been hit in 129 days and cover runs through September. §3.5.6 reasserts the exposure: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas buffer, with TSMC's 2026 CapEx near 8%. But the day's two hardest signals are the ones a price-taker cannot see: Qalibaf's inspector bar leaves the war's nuclear endpoint unverifiable, and the Iran-US-Oman toll dispute leaves Hormuz governance unsettled. Analytical judgment: both are structural, not tape-driven. A toll regime, even at preferential rates, would reprice Taiwan's imports permanently; an unresolved nuclear file keeps a re-escalation option alive that could shut the corridor on any future crisis. The hedges indifferent to both remain the only durable answer — US and Australian LNG (25%-US-by-2029) and the Maanshan and Kuosheng restarts (2028-2029). A calm tape buys time; only non-Hormuz supply buys security.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown's eighth day. The Doha track stays paused until July 11, when sanctions, the $6 billion, and the nuclear file are all on the agenda against a hardening access dispute.",
    israel:
      "No new Israeli casualties. The Lebanon seam stayed quiet after the July 4 ten-strike escalation, with no confirmed Hezbollah retaliation yet; Israel maintained its refusal to withdraw from its 'security zone.'",
    iran:
      "No verified new mass toll under the standdown. The funeral peak day held; Mojtaba again absent as three sons appeared. Qalibaf barred inspectors from struck sites; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "Lebanon seam quiet July 5-6; July 4 strike casualties still unconfirmed. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+; Gulf 33+ KIA / 72+ WIA carry.",
  },
};

export default data;
