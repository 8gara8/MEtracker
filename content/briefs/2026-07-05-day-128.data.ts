import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction stays mixed as the mourning-week pause carried into Day 2 but two distinct seams pulled in opposite directions. The kinetic standdown held a seventh day — no US or Iranian strike exchanged — and the funeral schedule advanced on time with prayers held in Tehran on July 5 and the main procession set for July 6 (Al Jazeera, CNN). But Israel struck 10 Hezbollah sites across four villages in southern Lebanon on July 4 after a Hezbollah attack wounded an Israeli reservist, and parliament speaker Ghalibaf linked that vector explicitly to the Doha track, warning of 'proportionate measures' if commitments were violated (Times of Israel, CBS News). The standdown held on the Iran-US seam; it frayed on the Lebanon seam.",
      risk7d:
        "Seven-day risk stays conditional with the funeral schedule and the Doha resumption date now both visible. The state funeral runs through burial in Mashhad on July 9; Doha talks resume July 11 covering sanctions, frozen $6 billion, and — for the first time — the nuclear file (NPR, ABC News). Trump said 'they've agreed to just about everything we need' while Vance deferred nuclear talks to 'later,' a gap that could close or widen at the table (CNN, NBC News). The risk is whether the four-day gap between burial and talks stays quiet or whether the Lebanon strikes provoke a response that poisons the resumption.",
      spillover:
        "Spillover holds conditional as the Lebanon seam activated on July 4 with Israel striking 10 Hezbollah positions across Bint Jbeil, Beit Yahoun, Kounine, and Baraashit after a Hezbollah attack wounded a reservist, and Israel refused to withdraw from its 'security zone' (Times of Israel, CBS News). Ghalibaf's warning tied Lebanon to the Doha framework, making a Lebanese escalation a potential spoiler for the broader track. The Gulf stayed quiet; the Lebanon vector is the live wire.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / CNN / NPR',
      event:
        "Khamenei funeral Day 2: funeral prayers held in Tehran on July 5, with the main 10-kilometer procession from Imam Hossein Square to Azadi Square scheduled for July 6 with 10 to 15 million mourners expected, followed by Qom July 7, Najaf and Karbala July 8, and burial in Mashhad July 9 — the kinetic standdown held a seventh day with no US-Iran strike exchanged",
      summary:
        "Per §3.1 the funeral schedule advanced on its de-escalatory face: prayers proceeded, the standdown held, and the procession route was published — but the scale of the July 6 procession raises the tripwire stakes, as any strike into 10–15 million mourners would collapse the pause entirely (Al Jazeera, CNN).",
      impact:
        "The funeral remains the week's organizing clock: a de-escalation pause that freezes the top table until the July 9 burial and a discrete escalation window that narrows with each day that passes without incident.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / CBS News',
      event:
        "Israel struck 10 Hezbollah sites across four villages in southern Lebanon — Bint Jbeil, Beit Yahoun, Kounine, and Baraashit — on July 4 after a Hezbollah attack wounded an Israeli reservist, and Israel refused to withdraw from its self-declared 'security zone' in southern Lebanon",
      summary:
        "The §3.5.6 Israel-independence prior escalated from a watch-item to active fire: 10 strikes across four villages in a single day is the heaviest reported Israeli action in Lebanon since the standdown began, and the refusal to withdraw signals a hardening posture (Times of Israel, CBS News).",
      impact:
        "Lebanon is now the live spoiler for the Doha track — Ghalibaf linked it explicitly, and a Hezbollah retaliation cycle could poison the July 11 resumption before it begins.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'NPR / ABC News / CNN',
      event:
        "Doha talks confirmed to resume July 11, covering sanctions relief, the frozen $6 billion in Qatari escrow, and — for the first time — the nuclear file; Trump said 'they've agreed to just about everything we need' while Vance said nuclear talks would come 'later,' and Iran's parliament speaker Ghalibaf warned of 'proportionate measures' if commitments were violated",
      summary:
        "Per §3.5.3 the claim-versus-denial split widened into a framing gap: Trump described near-agreement while Vance deferred the nuclear track, and Ghalibaf's warning linked the Lebanon strikes to the Doha framework — three officials describing three different states of play (NPR, CNN, ABC News).",
      impact:
        "The July 11 resumption is the next binding test: if all three tracks (sanctions, funds, nuclear) are genuinely on the table, the ceasefire probability rises materially; if the nuclear file gets deferred again, the gap between Trump's optimism and operational reality persists.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'NBC News / CNN / RFE/RL',
      event:
        "Mojtaba Khamenei will NOT attend his father's funeral — citing Israeli assassination threats, believed wounded since Day 1, communicating only through written statements — with a senior IRGC general fronting all public ceremonies in his place",
      summary:
        "The §3.5.5 regime-cohesion prior deepened: the supreme leader's absence from the funeral's second day confirmed this is not a one-day security decision but a structural condition — the man who inherited the Republic's highest office cannot appear in public four months into his tenure (NBC News, RFE/RL).",
      impact:
        "The leadership brittleness cuts both ways: an invisible leader may accept ceasefire terms a visible one could not politically afford, or the IRGC generals fronting the ceremonies may accumulate enough operational authority to complicate any deal Mojtaba signs.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNBC / Trading Economics / Washington Times',
      event:
        "Brent held near $72.30 as Saudi crude exports ran at roughly 90 percent of pre-war levels; JMIC widened the Hormuz navigational route on June 27, but Iran insisted Hormuz tolls were 'definite' with preferential rates for friendly nations, Oman opposed, and the US called the toll scheme 'unacceptable' — LNG transit remained near zero",
      summary:
        "Per §3.5.3 the energy-infrastructure split sharpened: the price stayed calm on Saudi supply substitution and the corridor widening, but the toll dispute introduced a new governance contest — Iran asserting sovereignty over transit while the US and Oman reject the premise — with LNG still near-zero (CNBC, Trading Economics, Washington Times).",
      impact:
        "The toll question is a new variable for the July 11 talks: if Iran insists on tolls as a condition for reopening Hormuz, the corridor recovery depends not just on a ceasefire but on a governance framework that does not yet exist.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 (kinetic standdown holds a seventh day; no new US strikes and no new Iranian strikes on US posture; Doha track paused for the funeral until July 11 resumption)',
      status:
        "No new US casualties. The mutual standdown held a seventh day with the Doha track paused for the funeral. Trump said 'they've agreed to just about everything we need'; talks resume July 11 covering sanctions, funds, and nuclear for the first time.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+1 WIA (Israeli reservist wounded in Hezbollah attack; Israel responded with 10 strikes across four villages in southern Lebanon)',
      status:
        "One Israeli reservist wounded in a Hezbollah attack on July 4; Israel struck 10 Hezbollah sites across Bint Jbeil, Beit Yahoun, Kounine, and Baraashit in response and refused to withdraw from its 'security zone.' The Lebanon seam is now the active vector while the Iran-US seam holds quiet.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (standdown Day 7; state funeral prayers held July 5; nuclear file to be discussed for first time at July 11 resumption — ~440.9 kg of 60% HEU unverified since June 2025)',
      status:
        "No verified new mass toll under the standdown. Funeral prayers held July 5; successor Mojtaba again absent, citing security. The nuclear file enters the Doha agenda for the first time at the July 11 resumption — ~440.9 kg of 60% HEU at the Esfahan tunnel complex stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Total conflict-wide: 7,080–9,612+ killed / 46,683+ wounded',
      delta: '+0 KIA / +0 verified WIA (Israel struck 10 Hezbollah sites in southern Lebanon on July 4 — Lebanese casualties from those strikes not yet confirmed; 1 Israeli reservist wounded)',
      status:
        "Israel struck 10 Hezbollah sites across Bint Jbeil, Beit Yahoun, Kounine, and Baraashit on July 4 after a Hezbollah attack wounded a reservist. Lebanese casualties from the strikes not yet confirmed by health authorities. The cumulative Lebanon toll of 3,371 KIA / 10,129 WIA (Wikipedia) carries. Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA carry.",
    },
  },
  exec:
    "Day 128 ran on two tracks that pulled in opposite directions. The Khamenei funeral advanced on schedule — prayers held in Tehran on July 5, the main 10-kilometer procession from Imam Hossein Square to Azadi Square set for July 6 with 10–15 million mourners expected, burial in Mashhad July 9 — and the kinetic standdown held a seventh day with no US-Iran strike exchanged (Al Jazeera, CNN). The Doha track gained substance: talks confirmed to resume July 11 covering sanctions, the frozen $6 billion, and for the first time the nuclear file; Trump said 'they've agreed to just about everything we need' while Vance deferred nuclear talks to 'later' (NPR, ABC News, CNN). But the Lebanon seam activated hard: Israel struck 10 Hezbollah sites across four villages in southern Lebanon on July 4 after a Hezbollah attack wounded a reservist, and Israel refused to withdraw from its 'security zone' (Times of Israel, CBS News). Iran's parliament speaker Ghalibaf linked the strikes to the Doha framework, warning of 'proportionate measures' if commitments were violated — making Lebanon the live spoiler for the July 11 resumption (ABC News). Mojtaba Khamenei again absent from the funeral, citing assassination threats, still believed wounded since Day 1 (NBC News, RFE/RL). Energy: Brent ~$72.30, Saudi exports at ~90% pre-war, JMIC widened Hormuz route June 27, but Iran insisted tolls were 'definite' while the US called them 'unacceptable' and LNG transit remained near zero (CNBC, Trading Economics). 30-day ceasefire probability rises to 62 from 60 — the July 11 nuclear inclusion is the most substantive agenda expansion since the war began, but the Lebanon strikes and the toll dispute are new friction points that could derail it.",
  implications: [
    {
      title:
        "The nuclear file enters the Doha agenda for the first time — the most substantive expansion since the war began, and the one that could convert a standdown into a settlement or collapse it",
      body:
        "Day 128's most consequential signal was not a strike but an agenda item. NPR and ABC News confirmed the July 11 Doha resumption will cover sanctions, the frozen $6 billion, and — for the first time — the nuclear file. Trump's claim that 'they've agreed to just about everything we need' and Vance's caveat that nuclear talks would come 'later' describe different realities, and the gap between them is the space in which the next round either succeeds or fails (CNN, NBC News). Analytical judgment under the multi-clock framework: the nuclear inclusion changes the negotiation-capacity clock from paused to potentially advancing — a deal that addresses enrichment alongside sanctions and funds is qualitatively different from one that defers the hardest issue. But the inclusion also raises the failure cost: if the nuclear track stalls at the table, the parties will have demonstrated that the issue that matters most is the one they cannot resolve, and the standdown's political justification weakens. The ~440.9 kg of 60% HEU at Esfahan, unverified since June 2025, is the physical fact beneath the diplomatic language. Whether it gets addressed or deferred again on July 11 is the week's binding test.",
    },
    {
      title:
        "The Lebanon seam activated with 10 Israeli strikes in a single day — and Ghalibaf linked it to the Doha track, making it the live spoiler for July 11",
      body:
        "The Iran-US standdown held its seventh day, but the Lebanon seam broke it. Israel struck 10 Hezbollah sites across Bint Jbeil, Beit Yahoun, Kounine, and Baraashit on July 4 after a Hezbollah attack wounded a reservist, and Israel refused to withdraw from its self-declared 'security zone' in southern Lebanon (Times of Israel, CBS News). The §3.5.6 Israel-independence prior escalated from a watch-item to active fire — 10 strikes across four villages in a single day is the heaviest reported Israeli action in Lebanon since the standdown began. Parliament speaker Ghalibaf made the linkage explicit, warning of 'proportionate measures' if commitments were violated and tying the Lebanon vector directly to the Doha framework (ABC News). Analytical judgment: the Lebanon seam is now the vector most likely to derail the July 11 resumption. A Hezbollah retaliation cycle that escalates before the talks resume would give Iran's hardliners the pretext to walk away from the table, and would give the US a coalition-cohesion problem it cannot solve by talking to Tehran alone. The four-day gap between burial (July 9) and talks (July 11) is the window in which Lebanon either stays quiet or becomes the spoiler.",
    },
    {
      title:
        "Taiwan: the Hormuz toll dispute introduced a governance contest that outlasts any ceasefire — diversification is the only hedge that survives all outcomes",
      body:
        "For Taiwan the day's sharpest signal was not a strike or a price move but a governance claim. Iran insisted Hormuz tolls were 'definite' with preferential rates for friendly nations, Oman opposed, and the US called the scheme 'unacceptable' (Washington Times, CNBC). This is a new variable: even if the ceasefire holds and the corridor reopens, Iran is asserting sovereignty over transit that Taiwan's energy supply depends on. §3.5.6 reasserts the exposure: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas cover, no LNG cargo hit in 128 days, cover through September, and TSMC's 2026 CapEx near 8%. Saudi exports at ~90% pre-war and the JMIC corridor widening (June 27) provide near-term supply continuity, but neither addresses the toll question. Analytical judgment: a Hormuz toll regime, even at preferential rates, would structurally reprice Taiwan's energy imports and create a permanent political lever that any future Iran crisis could pull. The durable hedges remain the ones indifferent to Hormuz governance — diversification toward US and Australian LNG (the 25%-US-LNG-by-2029 goal) and the Maanshan and Kuosheng nuclear restarts (2028–2029). A ceasefire buys time; only non-Hormuz supply buys security against a toll regime that may outlast this war.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown's seventh day. Doha talks resume July 11 with nuclear file on the agenda for the first time. Trump: 'they've agreed to just about everything we need.'",
    israel:
      "One Israeli reservist wounded in a Hezbollah attack; Israel responded with 10 strikes across four villages in southern Lebanon and refused to withdraw from its 'security zone.' The Lebanon seam is now the active vector.",
    iran:
      "No verified new mass toll under the standdown. Funeral prayers held July 5; successor Mojtaba again absent. Nuclear file enters Doha agenda for first time at July 11 resumption; ~440.9 kg of 60% HEU unverified since June 2025.",
    other:
      "Israel struck 10 Hezbollah sites in southern Lebanon on July 4; Lebanese casualties not yet confirmed. Cumulative Lebanon toll of 3,371 KIA / 10,129 WIA (Wikipedia) carries. Iraq 119+; Gulf 33+ KIA / 72+ WIA carry.",
  },
};

export default data;
