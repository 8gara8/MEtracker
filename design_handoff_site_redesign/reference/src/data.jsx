// Fixture data for 14 days of the war.
// Grounded in the seed brief — casualties monotonically increase, clocks evolve plausibly.
// "3D / @8gara8" authorship preserved throughout.

const CLOCK_SCORE = {
  critical: 0, low: 1, degraded: 2, none: 2.5, moderate: 3, high: 4, ample: 5,
};

// Days 1–14, anchored to the Day 1 seed from content/briefs/2026-02-28-day-001.mdx
const BRIEFS = [
  {
    day: 1, date: "2026-02-28", weekday: "Sat",
    title: "Operation Epic Fury commences with strikes on Natanz, Fordow, and Isfahan",
    direction: "escalating", risk7d: "extreme", spillover: "critical", ceasefire30d: 5, quiet: false,
    headlines: [
      "US and Israel launch concurrent strikes on Natanz, Fordow, and Isfahan enrichment sites",
      "Iran retaliates within hours with ballistic missile barrages on Tel Aviv and Haifa",
      "Hormuz traffic suspended pending Iranian damage assessment; Brent surges",
      "Hezbollah, Iraqi militias, and Houthi forces placed on high alert",
    ],
    casualties: { us:[0,0], israel:[142,850], iran:[380,1200], other:[0,0] },
    clocks: {
      political_will:"high", active_deadlines:"none", energy_infrastructure:"degraded",
      interceptor_capacity:"high", negotiation_capacity:"low", oil_reserves:"ample",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"n/a", energy_infrastructure:"worsening",
      interceptor_capacity:"draining", negotiation_capacity:"stable", oil_reserves:"stable",
    },
    exec: "Operation Epic Fury opened on February 28, 2026 with concurrent US and Israeli strikes against Iran's three principal enrichment facilities at Natanz, Fordow, and Isfahan — the first direct, sustained military confrontation between Washington and Tehran since the 1979 revolution. B-2 sorties delivered GBU-57 penetrators on Fordow while Israeli F-35I and F-15I formations struck Natanz and Isfahan across a six-hour window. Iran's retaliation came within hours: a large ballistic-missile barrage against Tel Aviv and Haifa, activation of Hezbollah's rocket inventory, and simultaneous Houthi movement against Red Sea shipping. By late evening Iran had suspended all Strait of Hormuz traffic pending damage assessment, and Brent surged in Asian trading. Analytical judgment: with retaliatory capacity intact and interceptor stocks already drawing down, the 72-hour window carries extreme escalation risk and a negligible near-term ceasefire probability.",
    events: [
      { id:1, direction:"pivotal", importance:"pivotal", source:"Reuters",
        event:"Concurrent strikes on Natanz, Fordow, Isfahan (00:12–06:08Z)",
        summary:"Coordinated US-Israel operation targets three principal enrichment sites across a six-hour window. B-2s deploy GBU-57 against Fordow hardened galleries.",
        impact:"Opens direct US-Iran kinetic engagement for first time since 1979. Frames war as counter-proliferation operation." },
      { id:2, direction:"escalating", importance:"pivotal", source:"Times of Israel",
        event:"Iranian ballistic barrage on Tel Aviv and Haifa (07:40Z)",
        summary:"Roughly 180 ballistic missiles launched across two waves. Multi-layer intercept with observed impacts in central Tel Aviv and Haifa port district.",
        impact:"Establishes Iranian escalation ceiling as strategic-level strikes on civilian centers. First meaningful Arrow-3 depletion." },
      { id:3, direction:"escalating", importance:"high", source:"Al Jazeera",
        event:"Hormuz shipping traffic suspended (14:30Z)",
        summary:"IRGC Navy issues Notice to Mariners halting all transit pending damage assessment. Commercial carriers reroute or hold at anchorage.",
        impact:"Begins the energy-MAD calculus. Brent +14% in overnight Asian trading." },
      { id:4, direction:"escalating", importance:"high", source:"AP",
        event:"Hezbollah and Iraqi militia alert postures (16:00Z)",
        summary:"Hezbollah issues general mobilization; Kataib Hezbollah relocates rocket inventory. No kinetic activity yet on Blue Line.",
        impact:"Establishes multi-theatre pressure. Anticipates 72-hour rocket campaign against northern Israel." },
      { id:5, direction:"neutral", importance:"medium", source:"Reuters",
        event:"Oman and Qatar offer mediation (19:15Z)",
        summary:"Joint statement offering good offices. Tehran rejects any preconditions that include cessation of enrichment activity.",
        impact:"No viable mediation track. Signals at least 72h without diplomatic buffer." },
    ],
    implications: [
      { title:"The opening salvo establishes the war's analytical clocks",
        body:"Day 1 set every multi-clock state simultaneously, and the pattern matters more than any single dial. Political will on both sides is high and stable; there is no domestic audience at hour zero demanding pause. Active deadlines are at none. Energy infrastructure is degraded and worsening. Interceptor capacity is high but already draining. Negotiation capacity is low and stable. Oil reserves are ample but will compress fast if Hormuz closure extends past 72 hours. The war does not need a new trigger to escalate; it needs only time." },
      { title:"Hormuz closure begins the energy-MAD calculus",
        body:"The Strait of Hormuz suspension is the single most consequential non-kinetic development of Day 1. Roughly a fifth of global oil and a quarter of LNG crosses the strait. Two second-order threads activate immediately: Taiwan's grid depends on LNG for ~50% of baseload, and Chinese oil imports through Hormuz are large enough that sustained closure forces a Beijing reaction. The energy channel is the fastest path to a ceasefire if Tehran overreaches, and the fastest path to escalation if Washington responds to prolonged closure with direct strikes on Iranian naval assets." },
      { title:"Interceptor depletion is the hidden clock",
        body:"Israel's Arrow-3, Arrow-2, and David's Sling inventories are finite; US replenishment cycles are measured in months. The first Iranian barrage revealed engagement rates that, sustained, will compress magazine depth below warning thresholds inside two weeks. The single most important number in coming briefs is not daily casualty totals but the implied burn rate per barrage, back-solved from intercept percentages and observed impacts." },
    ],
    sources: [
      { name:"Reuters — opening strikes coverage", url:"reuters.com/world/middle-east/iran-strikes-day-one/" },
      { name:"Al Jazeera — Operation Epic Fury live", url:"aljazeera.com/news/liveblog/2026/2/28/iran-war-day-1" },
      { name:"Associated Press — US CENTCOM briefing", url:"apnews.com/article/iran-strikes-centcom-day-1" },
      { name:"Times of Israel — Tel Aviv impact coverage", url:"timesofisrael.com/liveblog/iran-missile-barrage-feb-28" },
      { name:"NPR — analytical rundown", url:"npr.org/2026/02/28/iran-strikes-analysis" },
      { name:"CBS News — White House statement", url:"cbsnews.com/news/iran-strikes-white-house-day-1" },
      { name:"Wikipedia — Timeline of the 2026 Iran war", url:"en.wikipedia.org/wiki/Timeline_of_the_2026_Iran_war" },
      { name:"HRANA — Iran civilian casualty tracker", url:"en-hrana.org/iran-casualty-tracker-feb-28" },
    ],
    flash: "18:00 Taipei — Two smaller Iranian barrage waves through the afternoon, both sub-40 missiles. Observed intercept rate ~87%; one impact in Ashkelon industrial zone, no mass-cas. Hormuz remains suspended; IRGC-N issued revised NOTMAR extending closure through at least Day 2. No diplomatic movement. Interceptor burn rate now the critical analytical number — implied magazine depth crossing the 14-day warning threshold earlier than Day 1 modeling suggested.",
  },
  {
    day: 2, date: "2026-03-01", weekday: "Sun",
    title: "Iranian second-day barrage; Hezbollah opens northern front",
    direction: "escalating", risk7d: "extreme", spillover: "critical", ceasefire30d: 4, quiet: false,
    headlines: [
      "Hezbollah launches sustained rocket fire across Blue Line; 3 Israeli KIA in Kiryat Shmona",
      "Iranian second-wave ballistic barrage; observed intercept rate drops to ~82%",
      "Hormuz closure extended; Brent breaks $128",
      "UNSC emergency session deadlocks on ceasefire language (13-2, US/UK abstaining)",
    ],
    casualties: { us:[0,0], israel:[168,940], iran:[510,1610], other:[24,140] },
    clocks: {
      political_will:"high", active_deadlines:"none", energy_infrastructure:"degraded",
      interceptor_capacity:"high", negotiation_capacity:"low", oil_reserves:"ample",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"n/a", energy_infrastructure:"worsening",
      interceptor_capacity:"draining", negotiation_capacity:"stable", oil_reserves:"stable",
    },
  },
  {
    day: 3, date: "2026-03-02", weekday: "Mon",
    title: "Hormuz hot; first tanker detained, Brent $134",
    direction: "escalating", risk7d: "extreme", spillover: "critical", ceasefire30d: 4, quiet: false,
    headlines: [
      "IRGC-N detains Liberian-flagged VLCC off Bandar Abbas; crew held",
      "Houthis claim strike on Red Sea LNG carrier; vessel afloat, underway to Djibouti",
      "Pentagon moves second CVN toward Arabian Sea; USS Ford surges from Med",
      "Taiwan MOEA issues reserve-days statement: LNG 11 days, coal 38 days",
    ],
    casualties: { us:[0,0], israel:[191,1030], iran:[640,1920], other:[41,220] },
    clocks: {
      political_will:"high", active_deadlines:"none", energy_infrastructure:"low",
      interceptor_capacity:"moderate", negotiation_capacity:"low", oil_reserves:"moderate",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"n/a", energy_infrastructure:"worsening",
      interceptor_capacity:"draining", negotiation_capacity:"stable", oil_reserves:"worsening",
    },
  },
  {
    day: 4, date: "2026-03-03", weekday: "Tue",
    title: "Iran expands target set: Dimona adjacent strikes, Haifa refinery hit",
    direction: "escalating", risk7d: "extreme", spillover: "critical", ceasefire30d: 3, quiet: false,
    headlines: [
      "Iranian barrage includes strikes within 18km of Dimona; IAEA cites radiological concern",
      "Haifa refinery secondary explosions; fuel supply to northern Israel compromised",
      "Beijing calls for 'immediate cessation'; first substantive Chinese statement",
      "US destroys three Iranian missile sites near Kermanshah in overnight strike",
    ],
    casualties: { us:[0,0], israel:[242,1260], iran:[820,2380], other:[58,310] },
    clocks: {
      political_will:"high", active_deadlines:"low", energy_infrastructure:"low",
      interceptor_capacity:"moderate", negotiation_capacity:"low", oil_reserves:"moderate",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"worsening", energy_infrastructure:"worsening",
      interceptor_capacity:"draining", negotiation_capacity:"stable", oil_reserves:"worsening",
    },
  },
  {
    day: 5, date: "2026-03-04", weekday: "Wed",
    title: "Quieter kinetic day, diplomatic maneuvering begins",
    direction: "mixed", risk7d: "extreme", spillover: "critical", ceasefire30d: 6, quiet: false,
    headlines: [
      "Smaller Iranian barrage (sub-40 missiles); intercept rate recovers to 89%",
      "Qatar hosts first US-Iran proximity talks since war began; no agenda released",
      "Oil pulls back modestly on talks headline; Brent $121",
      "Hezbollah rocket tempo steady; no ground incursion",
    ],
    casualties: { us:[0,0], israel:[261,1340], iran:[918,2610], other:[72,380] },
    clocks: {
      political_will:"high", active_deadlines:"low", energy_infrastructure:"low",
      interceptor_capacity:"moderate", negotiation_capacity:"low", oil_reserves:"moderate",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"stable", energy_infrastructure:"stable",
      interceptor_capacity:"draining", negotiation_capacity:"improving", oil_reserves:"stable",
    },
  },
  {
    day: 6, date: "2026-03-05", weekday: "Thu",
    title: "Doha talks collapse; Iran announces mobilization",
    direction: "escalating", risk7d: "critical", spillover: "critical", ceasefire30d: 3, quiet: false,
    headlines: [
      "Qatar-hosted proximity talks adjourn without communiqué; Tehran announces partial mobilization",
      "IRGC chief threatens Gulf US bases directly on state TV",
      "Interceptor magazine modeling: Arrow-3 at implied 55% pre-war stock",
      "Oil spikes back to $131 intraday on talk collapse",
    ],
    casualties: { us:[0,0], israel:[289,1460], iran:[1082,3050], other:[91,470] },
    clocks: {
      political_will:"high", active_deadlines:"low", energy_infrastructure:"low",
      interceptor_capacity:"degraded", negotiation_capacity:"critical", oil_reserves:"moderate",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"worsening", energy_infrastructure:"stable",
      interceptor_capacity:"draining", negotiation_capacity:"worsening", oil_reserves:"worsening",
    },
  },
  {
    day: 7, date: "2026-03-06", weekday: "Fri",
    title: "Week one closes with interceptor magazine now the binding constraint",
    direction: "escalating", risk7d: "critical", spillover: "critical", ceasefire30d: 3, quiet: false,
    headlines: [
      "IDF acknowledges 'significant' interceptor drawdown; emergency US resupply airlift begins",
      "Third Iranian major barrage; observed intercept rate 76%, two impacts in Ben Gurion region",
      "Taiwan LNG reserve crosses 8-day threshold; TSMC issues energy-availability advisory",
      "Russian FM calls Tehran; no readout",
    ],
    casualties: { us:[0,0], israel:[346,1720], iran:[1284,3510], other:[118,580] },
    clocks: {
      political_will:"high", active_deadlines:"low", energy_infrastructure:"low",
      interceptor_capacity:"degraded", negotiation_capacity:"critical", oil_reserves:"low",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"stable", energy_infrastructure:"stable",
      interceptor_capacity:"draining", negotiation_capacity:"stable", oil_reserves:"worsening",
    },
  },
  {
    day: 8, date: "2026-03-07", weekday: "Sat",
    title: "Red Sea incident: Houthi strike cripples US-flagged tanker",
    direction: "escalating", risk7d: "critical", spillover: "critical", ceasefire30d: 2, quiet: false,
    headlines: [
      "Houthi ASCM strike on US-flagged Marlin Luna; vessel adrift, 2 crew KIA",
      "US conducts retaliatory strikes on Houthi launch sites near Hodeidah",
      "First US military fatalities of the war",
      "Egypt closes Suez northbound to combatant-flag vessels pending review",
    ],
    casualties: { us:[2,4], israel:[371,1840], iran:[1410,3820], other:[142,680] },
    clocks: {
      political_will:"high", active_deadlines:"low", energy_infrastructure:"critical",
      interceptor_capacity:"degraded", negotiation_capacity:"critical", oil_reserves:"low",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"stable", energy_infrastructure:"worsening",
      interceptor_capacity:"stable", negotiation_capacity:"stable", oil_reserves:"worsening",
    },
  },
  {
    day: 9, date: "2026-03-08", weekday: "Sun",
    title: "Largest barrage to date; Iran signals ceiling with port strikes",
    direction: "escalating", risk7d: "critical", spillover: "critical", ceasefire30d: 2, quiet: false,
    headlines: [
      "220-missile Iranian barrage targets Ashdod and Haifa ports; intercept rate 71%",
      "Seven vessels damaged or sunk at Haifa; first strategic port degradation",
      "Brent hits $142; SPR release of 5mbpd authorized by EO",
      "Jordan closes airspace to military overflights",
    ],
    casualties: { us:[2,4], israel:[441,2110], iran:[1562,4180], other:[161,760] },
    clocks: {
      political_will:"high", active_deadlines:"degraded", energy_infrastructure:"critical",
      interceptor_capacity:"low", negotiation_capacity:"critical", oil_reserves:"low",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"worsening", energy_infrastructure:"worsening",
      interceptor_capacity:"draining", negotiation_capacity:"stable", oil_reserves:"worsening",
    },
  },
  {
    day: 10, date: "2026-03-09", weekday: "Mon",
    title: "Back-channel movement via Oman; tactical quiet holds",
    direction: "mixed", risk7d: "extreme", spillover: "critical", ceasefire30d: 8, quiet: false,
    headlines: [
      "Oman-mediated back-channel confirmed; Tehran proposes 72-hour humanitarian pause",
      "No major Iranian barrage Day 10; first sub-20-launch day",
      "Interceptor airlift completes first tranche (Arrow-3 components)",
      "Brent eases to $126 on pause headlines",
    ],
    casualties: { us:[2,4], israel:[458,2180], iran:[1604,4290], other:[171,810] },
    clocks: {
      political_will:"high", active_deadlines:"degraded", energy_infrastructure:"critical",
      interceptor_capacity:"low", negotiation_capacity:"low", oil_reserves:"low",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"stable", energy_infrastructure:"stable",
      interceptor_capacity:"improving", negotiation_capacity:"improving", oil_reserves:"stable",
    },
  },
  {
    day: 11, date: "2026-03-10", weekday: "Tue",
    title: "Pause proposal collapses on enrichment precondition",
    direction: "escalating", risk7d: "critical", spillover: "critical", ceasefire30d: 4, quiet: false,
    headlines: [
      "US rejects Iranian pause proposal absent enrichment freeze; Tehran withdraws offer",
      "Resumed Iranian barrage within four hours; Tel Aviv impacts",
      "Chinese tanker shadow fleet activity near Kharg Island detected",
      "Iraqi militias resume rocket fire on US bases at Ain al-Asad and Erbil",
    ],
    casualties: { us:[3,9], israel:[508,2390], iran:[1772,4720], other:[196,910] },
    clocks: {
      political_will:"high", active_deadlines:"low", energy_infrastructure:"critical",
      interceptor_capacity:"low", negotiation_capacity:"critical", oil_reserves:"low",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"worsening", energy_infrastructure:"worsening",
      interceptor_capacity:"draining", negotiation_capacity:"worsening", oil_reserves:"worsening",
    },
  },
  {
    day: 12, date: "2026-03-11", weekday: "Wed",
    title: "US strikes on Iranian naval assets in Persian Gulf",
    direction: "escalating", risk7d: "critical", spillover: "critical", ceasefire30d: 3, quiet: false,
    headlines: [
      "US sinks three IRGC-N fast-attack craft near Farsi Island; first direct US-Iran naval engagement",
      "Iran warns of 'uncontrolled response'; Kharg Island on heightened alert",
      "Hezbollah fires first Ra'ad 1 variant into Tel Aviv metro; one impact",
      "Brent $138; SPR releases expanded",
    ],
    casualties: { us:[4,14], israel:[559,2580], iran:[1930,5060], other:[218,980] },
    clocks: {
      political_will:"high", active_deadlines:"low", energy_infrastructure:"critical",
      interceptor_capacity:"low", negotiation_capacity:"critical", oil_reserves:"low",
    },
    trajectory: {
      political_will:"stable", active_deadlines:"stable", energy_infrastructure:"stable",
      interceptor_capacity:"stable", negotiation_capacity:"stable", oil_reserves:"worsening",
    },
  },
  {
    day: 13, date: "2026-03-12", weekday: "Thu",
    title: "Quieter kinetic day; diplomatic pulse returns",
    direction: "mixed", risk7d: "critical", spillover: "critical", ceasefire30d: 6, quiet: true,
    headlines: [
      "Smaller Iranian barrage; intercept rate recovers as second airlift tranche lands",
      "Swiss protecting-power channel reactivates; first direct US-Iran written exchange since Day 1",
      "Oil eases; Brent $129",
      "No major Hezbollah activity; first sub-30-rocket day on northern front",
    ],
    casualties: { us:[4,14], israel:[578,2640], iran:[1994,5210], other:[226,1010] },
    clocks: {
      political_will:"moderate", active_deadlines:"low", energy_infrastructure:"critical",
      interceptor_capacity:"low", negotiation_capacity:"low", oil_reserves:"low",
    },
    trajectory: {
      political_will:"worsening", active_deadlines:"stable", energy_infrastructure:"stable",
      interceptor_capacity:"improving", negotiation_capacity:"improving", oil_reserves:"stable",
    },
  },
  {
    day: 14, date: "2026-03-13", weekday: "Fri",
    title: "Two-week mark: interceptor airlift stabilizes; talks framework emerges",
    direction: "mixed", risk7d: "extreme", spillover: "conditional", ceasefire30d: 12, quiet: false,
    headlines: [
      "Oman proposes four-point framework: enrichment pause, barrage halt, IAEA access, captive exchange",
      "Tehran signals conditional acceptance; Jerusalem non-committal",
      "Arrow-3 magazine back above 60% post-airlift; US authorizes second tranche",
      "First meaningful oil pullback: Brent $118",
    ],
    casualties: { us:[4,14], israel:[602,2720], iran:[2078,5420], other:[234,1050] },
    clocks: {
      political_will:"moderate", active_deadlines:"low", energy_infrastructure:"critical",
      interceptor_capacity:"moderate", negotiation_capacity:"low", oil_reserves:"low",
    },
    trajectory: {
      political_will:"worsening", active_deadlines:"stable", energy_infrastructure:"stable",
      interceptor_capacity:"improving", negotiation_capacity:"improving", oil_reserves:"improving",
    },
  },
];

const CLOCK_LABELS = {
  political_will: "Political will",
  active_deadlines: "Active deadlines",
  energy_infrastructure: "Energy infrastructure",
  interceptor_capacity: "Interceptor capacity",
  negotiation_capacity: "Negotiation capacity",
  oil_reserves: "Oil reserves",
};

const CLOCK_ORDER = [
  "political_will", "active_deadlines", "energy_infrastructure",
  "interceptor_capacity", "negotiation_capacity", "oil_reserves",
];

// Direction score for escalation timeline: -1 de-escalating, 0 mixed, +1 escalating
const DIR_SCORE = { "de-escalating": -1, mixed: 0, escalating: 1 };

// Risk7d ordinal
const RISK_SCORE = { low: 1, conditional: 2, extreme: 3, critical: 4 };

Object.assign(window, {
  BRIEFS, CLOCK_SCORE, CLOCK_LABELS, CLOCK_ORDER, DIR_SCORE, RISK_SCORE,
});
