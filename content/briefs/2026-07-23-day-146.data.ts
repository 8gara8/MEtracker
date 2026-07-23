import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction tilts from mixed to escalating. The clearest signal was priced, not spoken: Brent jumped to $94.13, up 3.43% on the day and its highest since mid-June, as the market that had held near $90 through Day 145 broke upward on a dual-chokepoint squeeze — Iran's Hormuz blockade and the Houthis' widening Red Sea embargo now bracketing Gulf and Saudi flows at once (Trading Economics, CNN Business, CNBC). The ceasefire track stayed alive but conditioned: Araghchi's delegation continued Hormuz-management talks with Oman, yet Washington says nothing progresses until ships are assured safe passage, and Trump is reported nearing a decision between the 10-day pause and a full-scale joint campaign with Israel as US forces mass (Khaleej Times, Axios). Per §3.5.3 the proposal is still an unaccepted claim.",
      risk7d:
        "Seven-day risk stays extreme and hardens. The four-year Saudi-Houthi truce is fraying — Saudi Arabia struck Sanaa airport, the Houthis answered at Abha — and the UN warned of 'greater regional escalation' (Middle East Eye, Washington Times). US strikes on Iran continued nightly while Trump weighs widening to a full campaign; the Japan Times reported the Houthi Red Sea front would challenge a US military already stretched across the Iran fight (CBS News, Japan Times). Per §3.5.3 an unaccepted proposal is not a ceasefire; the prior two frameworks were announced with more detail and still collapsed. The standing automatic-retaliation pledge carries — any further American death hands pre-committed escalation to third parties, including the Houthis acting on Yemen's own ledger.",
      spillover:
        "Spillover stays critical and is compounding. Kpler logged a 34% drop in Bab el-Mandeb traffic, Saudi weekly loadings fell to 6.1 million barrels a day from a 9.5 million peak on June 29, and analysts warned the embargo threatens an additional 7% of global oil supply even without a hull interdicted (The National, CNBC, Foreign Policy). CNN Business framed the twin blockades as leaving oil with 'no way out.' China, with roughly half its crude crossing Hormuz, is in talks with Iran to secure safe passage for its crude and Qatari LNG (Reuters via AOL). The Gulf's largest producer is now operationally engaged against an Iran-aligned belligerent that no US-Iran instrument reaches.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Trading Economics / CNN Business / CNBC',
      event:
        "Brent crude rose to $94.13 a barrel on Tuesday, up 3.43% on the day and its strongest level since mid-June, as the benchmark that had held near $90 through Day 145 broke upward; CNN Business described a war in which 'oil faces no way out' with Iran's Hormuz blockade and the Houthis' Red Sea embargo now bracketing Gulf and Saudi flows simultaneously, while CNBC reported the Houthis deploying missiles and drones against ships in the southern Red Sea",
      summary:
        "Per §3.5.5 the number tells the story: a $4 move in a single session on a benchmark that had absorbed weeks of strikes without breaking $90. The market repriced the dual-chokepoint tail it had been discounting when it read the Oman track as a cap on gains.",
      impact:
        "The energy-infrastructure clock is now loaded at both straits at once and the price is registering it. This is still short of the $150-200 dual-closure tail — a Bab el-Mandeb shutdown paired with a full Hormuz freeze — but the market has stopped treating the second front as containable via Suez.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'The National / CNBC / Middle East Eye / Washington Times',
      event:
        "The Houthi maritime embargo on Saudi Arabia widened: Kpler recorded a 34% drop in Bab el-Mandeb traffic day-on-day, Saudi weekly crude loadings from Red Sea terminals fell to 6.1 million barrels a day from a 9.5 million peak on June 29, and analysts warned the embargo threatens an additional 7% of global oil supply; the four-year Saudi-Houthi truce frayed after Saudi Arabia struck Sanaa airport and the Houthis retaliated at Abha, and the UN called for de-escalation, warning of 'greater regional escalation'",
      summary:
        "The Day 145 reroute became a widening interdiction-by-deterrence: still no Saudi-linked hull hit, but traffic, loadings and the truce itself are now moving. Roughly 5% of global oil trade transits Bab el-Mandeb; the Houthi threat reaches a further slice of Saudi export capacity.",
      impact:
        "Riyadh is being pulled fully from funding the war to fighting it. The reciprocal airport strikes mark the collapse-risk of the Yemen truce that had held since 2022 — a second, self-directed belligerent whose capability sits outside any US-Iran deal, so the Oman-brokered Hormuz proposal cannot reopen this strait even if signed.",
    },
    {
      id: 3,
      direction: 'pivotal',
      importance: 'high',
      source: 'Axios via InvestingLive / CBS News / Fox News',
      event:
        "Multiple outlets reported President Trump is nearing a decision between a 10-day ceasefire to reopen the Strait of Hormuz and a full-scale joint military campaign with Israel against Iran, with US forces massing in the region; US strikes on Iranian command, air-defense and missile sites continued as CENTCOM said it was acting to hold Iranian forces accountable, and Israeli leaders signaled readiness to strike Iran again while US negotiators worked the Oman channel",
      summary:
        "⭐ The war's central fork is now explicit and near-term: a shipping-tied pause the Oman proposal can satisfy, or a full campaign it cannot. Forces massing is the tell that the war option is being actively prepared, not merely brandished.",
      impact:
        "The active-deadline clock is running ahead of the negotiation-capacity clock. A rationale still tied to Hormuz shipping remains satisfiable by the Muscat track; a pivot to 'full-scale' would foreclose the pause Iran itself initiated and convert a chokepoint dispute into a war of regime survival.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Khaleej Times / Press TV / Iran International / GlobalSecurity (AZERTAC)',
      event:
        "Foreign Minister Araghchi's delegation continued Strait of Hormuz management talks with Oman, framed by Tehran as proceeding under Article 5 of the Islamabad memorandum and to be pursued through Iran-Oman political and technical consultations; Oman has drafted a tentative proposal to manage traffic through the strait, but US officials reiterated that talks with Tehran cannot progress until ships are assured safe passage",
      summary:
        "The negotiation-capacity clock is still turning, but conditioned. Per §3.5.3 an Oman-drafted traffic-management proposal and continued consultations are process, not agreement; Washington's safe-passage precondition and Tehran's insistence on an Iran-Oman channel are not yet reconciled.",
      impact:
        "The diplomatic track that Iran authored on Day 145 survives into Day 146 but has not advanced to acceptance. The gap between 'talks continue' and 'ships move safely' is the same gap that collapsed the April 8 and June frameworks; the venue is real, the signature is not.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Japan Times / Foreign Policy / USNI News',
      event:
        "The Japan Times reported that a Houthi Red Sea blockade would challenge a US military already stretched by the campaign to stop Iran's attacks across the region, opening a second maritime front while CENTCOM enforces the Hormuz blockade — USNI reported the US disabled a blockade-running tanker and Hormuz transits fell to record lows; Foreign Policy characterized Yemen as an 'unsteady stalemate' at risk of tipping back into open war",
      summary:
        "The force-posture strain is now an analytical variable, not just a headline: one navy cannot fully cover two contested straits 1,500 miles apart. Hormuz transits near zero on the Iran side; Bab el-Mandeb traffic down a third on the Houthi side.",
      impact:
        "The political-will clock and the force-availability constraint converge on the $67 billion supplemental still before Congress. A two-strait war raises the bill and the exposure at the same moment domestic support sits at 24% 'worth it' and a 50-48 war-powers rebuke remains unresolved.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: 'National Security Journal / ISIS / Reuters (via AOL)',
      event:
        "The nuclear file stayed bounded: Iran maintained the Bushehr reactor is operating normally while Sentinel-2 imagery from July 7 and 12 showed fresh impact scars inside the complex, the IAEA has had no access since June, and ISIS flagged independent assessment as urgent given ~440.9 kg of 60% HEU unverified since mid-2025; separately, China — with roughly half its crude crossing Hormuz — is reported in talks with Iran to secure safe passage for its crude and for Qatari LNG",
      summary:
        "Tehran downplaying rather than amplifying the Bushehr damage remains the tell that the nuclear category is being preserved as leverage, not spent. China's parallel track is self-interested: the chokepoint it is negotiating around carries its own energy lifeline.",
      impact:
        "The nuclear target set has not extended to operating facilities, and Beijing's move is still commercial diplomacy, not the air-defense resupply or UNSC action that would shift the military balance. Both files are bounded today — but both are one strike or one shipment from moving.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; no new American fatality reported',
      status:
        "No new US fatality was reported in the window; the toll holds at 17 KIA and 432 WIA per the AP/CENTCOM series, with more than 100 injured since early July and roughly 96% returned to duty. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, and the Jordan MIA stays accounted for within the identified dead per Day 144. Divergent CENTCOM injury tallies (290–413 WIA in some counts) reflect different reporting windows per §3.5.3; the 432 figure carries. Trump's standing pledge to make Iran 'pay many times over' for any further US death still attaches to this ledger, the $67 billion supplemental remains before Congress, and the 50-48 Senate war-powers rebuke is unresolved as forces mass for a possible wider campaign.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties in the window. Israeli leaders signaled readiness to strike Iran again as US negotiators worked the Oman channel, underscoring that Israel remains outside the US-Iran framework and unbound by any Hormuz pause (Fox News). The Lebanon gap prior (§3.5.6) carries: Israel maintains it will not fully withdraw from southern Lebanon until Hezbollah disarms, and the June 26 US-brokered framework remains rejected by Hezbollah. Frequent cross-border fire continues with no ceasefire in sight, and the Israeli readiness signal keeps a full-scale-campaign option — one Israel could join or trigger — live alongside the diplomatic track.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update in the window; HRANA new-wave tally holds at 48+ killed / 68+ injured as of July 17',
      status:
        "No fresh official Iranian toll in the reporting window; authorities continue to cite 50+ killed and 500+ wounded in July strikes, while US strikes on command, air-defense and missile sites continued nightly. HRANA's ten-day report documents at least 48 killed and 68 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing caveat that military counts are understated; figures are Iranian-source or monitor-source per §3.5.3, and US and Israeli estimates run to 6,000+. On the nuclear file, Iran says Bushehr is operating normally against July 7/12 satellite impact scars, the IAEA has had no access since June, and ~440.9 kg of 60% HEU remains unverified.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; second-front effect remains maritime and economic, not lethal',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. Kuwait's cumulative ledger from Iranian strikes holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline, with continued interception of drone and missile waves against power and desalination plants. The widening second front stayed maritime and economic rather than lethal: Bab el-Mandeb traffic fell 34%, Saudi loadings dropped to 6.1 million barrels a day, and reciprocal Saudi-Houthi airport strikes hit Sanaa and Abha, but no Saudi-linked tanker crew casualty was reported. Lebanon toll stays source-split; Iraq baseline carries.",
    },
  },
  exec:
    "Day 146 tilted the war's two-track balance toward escalation without closing the diplomatic door. The clearest signal was priced, not spoken: Brent crude jumped to $94.13 a barrel, up 3.43% on the day and its highest since mid-June, as the market that had held near $90 through Day 145 broke upward on a dual-chokepoint squeeze — Iran's Hormuz blockade and the Houthis' widening Red Sea embargo now bracketing Gulf and Saudi flows at once (Trading Economics, CNN Business, CNBC). The second front hardened: Kpler logged a 34% drop in Bab el-Mandeb traffic, Saudi weekly loadings fell to 6.1 million barrels a day from a 9.5 million peak on June 29, and analysts warned the embargo threatens an additional 7% of global oil supply even without a Saudi-linked hull hit (The National, CNBC, Foreign Policy). The four-year Saudi-Houthi truce is fraying — Saudi Arabia struck Sanaa airport, the Houthis answered at Abha — and the UN warned of 'greater regional escalation' (Middle East Eye, Washington Times). Against that, the ceasefire track stayed alive but conditioned: Araghchi's delegation continued Hormuz-management talks with Oman under Article 5 of the Islamabad memorandum, and Oman has drafted a traffic-management proposal, but Washington says talks cannot progress until ships are assured safe passage, and Trump is reported nearing a decision between the 10-day pause and a full-scale joint campaign with Israel as US forces mass in the region (Khaleej Times, Press TV, Axios). Per §3.5.3 the proposal remains an unaccepted claim. The US toll holds at 17. Direction escalating; thirty-day ceasefire probability holds at 10.",
  implications: [
    {
      title: 'The market breaks the $90 line',
      body:
        "Through Day 145 the striking feature of the oil market was its composure: weeks of strikes, a naval blockade and a declared Red Sea embargo, and Brent still held near $90. Day 146 broke that line. The benchmark jumped to $94.13, up 3.43% in a single session, as CNBC reported the Houthis deploying missiles and drones against ships in the southern Red Sea and CNN Business framed the twin blockades as leaving oil with 'no way out' (Trading Economics, CNN Business, CNBC). Under the multi-clock framework the energy-infrastructure clock is now loaded at both straits at once, and for the first time the price is registering the second front rather than discounting it as Suez-routable. Analytical judgment: a $4 move is not the $150-200 dual-closure tail — that requires a Bab el-Mandeb shutdown paired with a full Hormuz freeze — but it marks the moment the market stopped treating the Houthi embargo as containable. Per §3.5.5 the number is the argument: a benchmark that absorbed the entire Hormuz campaign without breaching $90 broke it in a day when the second chokepoint widened. The tell to watch is whether $94 is a new floor or a spike that fades on the next Muscat headline; either way, the market has repriced the tail it had been ignoring.",
    },
    {
      title: 'The second front outgrows the first',
      body:
        "The Houthi embargo is now the faster-moving half of the war. Kpler logged a 34% drop in Bab el-Mandeb traffic, Saudi loadings fell to 6.1 million barrels a day from a 9.5 million peak on June 29, and analysts put an additional 7% of global oil supply at risk — all without a Saudi-linked hull being hit (The National, CNBC, Foreign Policy). The structural shift is the fraying of the four-year Saudi-Houthi truce: Saudi Arabia struck Sanaa airport, the Houthis retaliated at Abha, and the UN warned of 'greater regional escalation' (Middle East Eye, Washington Times). Analytical judgment: this is the standing prior — the second chokepoint is not Iran's to trade — hardening into fact. The Houthi capability is armed on Yemen's own ledger, so the Oman-brokered Hormuz proposal, even if signed, cannot reopen this strait. Compounding it, the force-posture constraint the Japan Times named: one US navy cannot fully cover two contested straits 1,500 miles apart while Trump weighs widening to a full campaign and forces mass in the region (Japan Times, Axios). The active-deadline clock is running ahead of the negotiation clock, and the $67 billion supplemental before Congress now buys a two-strait war against 24% 'worth it' polling and an unresolved 50-48 rebuke.",
    },
    {
      title: 'Taiwan: the reroute now carries a $94 premium',
      body:
        "Taiwan's adaptation to this war — routing around Hormuz through the Red Sea — is precisely the corridor Day 146 repriced. Every Gulf-origin cargo that escapes the first chokepoint now transits a Bab el-Mandeb whose traffic is down a third and whose war-risk premium is rising, or takes the longer, costlier haul around the Cape (CSIS, Zero Carbon Analytics). Brent at $94 is the visible edge of that; the invisible edge is charter rates and insurance on the detour. The §3.5.6 exposure is otherwise unchanged and badly timed: roughly a third of Taiwan's gas transits Hormuz, Qatar supplies close to 30% of LNG imports, and the island holds an eleven-day gas buffer — reaching the statutory fourteen days only from 2027 — against about 120 days of oil cover, with July and August electricity demand running up to 40% above February exactly when replacement cargoes are hardest to source. Analytical judgment: a Bab el-Mandeb closure does not touch Qatari LNG, which still exits through Hormuz, but it prices and lengthens everything routed around the first strait, and China is now negotiating directly with Iran for safe passage of its own crude and Qatari LNG — a reminder that Taiwan competes for the same molecules through the same waters. A second contested chokepoint does not change Taiwan's arithmetic this week; the $94 print shortens the time the arithmetic can stay unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); no new fatality in the window. The three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. The $67 billion supplemental and the 50-48 war-powers rebuke remain unresolved as forces mass.",
    israel:
      'No new Israeli casualties. Israeli leaders signaled readiness to strike Iran again as US negotiators worked Oman; Israel stays outside the US-Iran framework and unbound by any Hormuz pause. June 26 Lebanon framework still rejected by Hezbollah; the Lebanon gap prior carries.',
    iran:
      "No fresh official toll. HRANA new-wave tally holds at 48+ killed / 68+ injured (minimum counts); cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. Bushehr reported operating normally against July 7/12 satellite impact scars; IAEA absent since June; ~440.9 kg of 60% HEU unverified.",
    other:
      'No confirmed new Gulf or Iraqi fatalities. Kuwait cumulative 10 killed / 115 injured. Second-front effect stays maritime and economic: Bab el-Mandeb traffic down 34%, Saudi loadings 6.1M bpd, reciprocal Sanaa/Abha airport strikes, no tanker-crew casualty. Lebanon source-split; Iraq baseline carries.',
  },
};

export default data;
