import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Day 110 narrows two of Day 109's three fault lines. Iran's Deputy FM Gharibabadi said the MoU text is finalized and set to be signed Friday in Switzerland, and the reported Hormuz language resolves the Day 109 toll dispute toward Trump's no-tolls reading (NBC News, ABC News). Per §3.5.3 a finalized text is a firmer commitment than a digital signature, but the document stays sealed until the Geneva ceremony and Pezeshkian says a final agreement 'has not yet been formed.' Trajectory stays down; the war is not over until the released text lands Friday.",
      risk7d:
        "Seven-day risk stays conditional. The negotiation-capacity and active-deadline clocks point at a dated Friday signing, the toll clause resolved toward toll-free, and the nuclear file gained a verification pledge (inspectors to 'absolutely' return). Against that, the binding text is unreleased until Geneva, Pezeshkian's 'not yet formed' caution holds, and the four-day gap is the Day 51 reversal window. Netanyahu reserves the right to strike. A released, executed Geneva text converts the week to ceasefire; a collapse on terms repeats Day 51.",
      spillover:
        "Spillover holds conditional. The Beirut flashpoint stayed cooled and the declared all-fronts termination covers Lebanon, but a senior US official said Israeli withdrawal is not a condition of the deal, Netanyahu vowed to 'defend ourselves as necessary,' and the Israel-Lebanon comprehensive track only convenes the week of June 22 (Al Jazeera, CBS News). The §3.5.6 Israel-independence prior carries: a ceasefire that depends on Israeli restraint stays one strike from reigniting before the comprehensive track even meets.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'NBC News / ABC News / PBS News',
      event:
        "Iran's Deputy Foreign Minister Kazem Gharibabadi said the text of the US-Iran memorandum of understanding has been finalized and is set to be signed Friday in Switzerland, while VP Vance confirmed the binding text will not be released until the Geneva ceremony",
      summary:
        "President Pezeshkian cautioned that a final agreement 'has not yet been formed,' calling the bilateral track 'an important step toward stopping the war and starting negotiations' (PBS News, ABC News).",
      impact:
        "A finalized text is a firmer commitment than Day 109's digital signature, advancing on the missing-text fault line. Skeptical counter per §3.5.3: the document stays sealed until Friday and Pezeshkian's 'not yet formed' caution holds; the four-day gap to Geneva is exactly where the Day 51 deal collapsed.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'ABC News / The Hill',
      event:
        "The Hormuz toll clause appears to resolve toward Trump's reading: the reported MoU makes the Strait 'toll-free for 60 days,' reopening immediately without tolls and restoring pre-war shipping within roughly 30 days",
      summary:
        "The reported language directly contradicts Day 109's Tasnim claim that the MoU left 'management of maritime navigation services in the Strait of Hormuz' to Iran and Oman — a toll opening (ABC News, The Hill).",
      impact:
        "The §3.5 toll-institutionalization prior narrows but is not retired: a $2M-per-transit fee at pre-war flow would have been ~$29B/yr of permanent revenue, and its apparent removal from the 60-day MoU is a clean positive — but the 'navigation services' question can resurface in the final-agreement phase.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'NBC News / ISIS / Foreign Policy',
      event:
        "On the nuclear file, the MoU reportedly carries an Iranian pledge not to seek a weapon, with enrichment and disposal of the HEU stockpile the first items in the 60-day window, and Vance said IAEA inspectors will 'absolutely' return",
      summary:
        "The Agency has had no in-field verification access since February 28 and ~440 kg of 60% HEU remains unverified, with Grossi assessing much of it still sealed at Isfahan after the June strikes (ISIS, Foreign Policy).",
      impact:
        "The verification language is a genuine advance over Day 109's pure deferral, but §3.5.6 governs: a pledge and a promised inspector return are not restored monitoring, and a 60-day window is short for a file dark for over a year. The deal defers and pledges; it does not yet disarm.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC / PBS News',
      event:
        "Oil held near its lowest since early March as markets front-ran Friday's signing, but the physical chokepoint lagged the politics: Hormuz traffic ran near 2% of the pre-war baseline (about one tanker a day)",
      summary:
        "The world's largest tanker operator cautioned against a premature 'rush' into the Strait, and analysts noted reopening to pre-war flow requires weeks of demining and field restarts; the EIA's June outlook still frames the June–July average near $105 (CNBC, PBS News).",
      impact:
        "The energy-infrastructure clock keeps improving on the toll resolution, but the chokepoint is closed until the mines are cleared. Analytical judgment: relief is priced and the toll tail risk is lifted, but flow is not yet restored — paper terms run ahead of physical transit.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Tech Times / Al Jazeera',
      event:
        "The G7 wrapped its June 14–17 Évian summit without a joint communiqué for a second straight year, issuing area-specific outcome documents instead, while Trump said ships were already moving from Hormuz and the deal would be signed June 19",
      summary:
        "On Lebanon the ceasefire held, but the comprehensive Israel-Lebanon track only convenes the week of June 22, and the June 1 Israel-Hezbollah arrangement's asymmetry — Hezbollah halts attacks, Israel does not formally — carries (Al Jazeera).",
      impact:
        "The multilateral diplomacy is converging on logistics — demining, alternative Persian Gulf energy routes — but a signature reopens Hormuz on paper while the Lebanon track stays unconvened. The coalition-cohesion clock remains the weak link as the negotiation clock peaks.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (finalized MoU text; blockade ordered to leave Hormuz)',
      status:
        "No new US casualties. The blockade-end order stands as the first US drawdown of the war, and the US said Iran 'won't get a dime' of the ~$24-25B frozen-asset/sanctions relief until it performs over the 60-day post-signing window. Forces still hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down; the in-person signing is Friday, June 19, in Geneva.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new IDF KIA (Beirut flashpoint stayed cooled; no new salvo)',
      status:
        "No confirmed new IDF KIA. The Beirut flashpoint stayed cooled with no new salvo, but Netanyahu — sidelined from the US-Iran track — holds the right to 'defend ourselves as necessary,' and a US official has confirmed Israeli withdrawal from Lebanon is not a deal condition. Israel-Lebanon comprehensive talks are set for the week of June 22.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (diplomatic day; finalized text and toll resolution)',
      status:
        "No verified new mass toll. The MoU reportedly carries an Iranian pledge not to seek a weapon, but ~440 kg of 60% HEU stays unverified at Isfahan and the IAEA has had no in-field access since February 28; Vance says inspectors will 'absolutely' return. The Sirik-area water loss to 20,000+ from the June 10 strikes carries as the standing humanitarian incident. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH 3,783 killed / 11,699 injured (June 14 update, from above 3,600 / 10,044+); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 confirmed new in active exchange (Lebanon MOH cumulative updated upward)',
      status:
        "No confirmed new toll in active exchange, but the Lebanon Ministry of Public Health war-cumulative figure was updated to 3,783 killed / 11,699 injured as of June 14 (from above 3,600 / 10,044+). The declared termination covers Lebanon, but the comprehensive Israel-Lebanon track only convenes the week of June 22. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 110 narrows two of Day 109's three fault lines, but a finalized text on a four-day fuse is not a verified deal. Iran's Deputy Foreign Minister Kazem Gharibabadi said the memorandum's text has been finalized and is set to be signed Friday in Switzerland, while VP Vance confirmed the binding document will not be released until the Geneva ceremony (NBC News, ABC News). On the toll, the reported MoU makes the Strait 'toll-free for 60 days,' reopening immediately without tolls and restoring pre-war shipping within roughly 30 days — directly contradicting Day 109's Tasnim 'navigation services to Iran and Oman' claim and pushing the §3.5 toll-institutionalization risk into the final-agreement phase rather than closing it (ABC News, The Hill). The nuclear core stays deferred but gains a verification pledge: the MoU reportedly carries an Iranian commitment not to seek a weapon, with enrichment and HEU disposal the first items in the 60-day window, and Vance said IAEA inspectors will 'absolutely' return — though the Agency has had no in-field access since February 28 and ~440 kg of 60% HEU remains unverified at Isfahan (NBC News, ISIS). Analytical judgment, per §3.5.3: a finalized-but-sealed text is a firmer commitment than Day 109's digital signature, but President Pezeshkian's caution that a final agreement 'has not yet been formed' and the unreleased document keep it short of a verified accord, and the four-day gap to Geneva is the same window where the Day 51 deal collapsed. 30-day ceasefire probability rises to 58 from 55; direction stays de-escalating; spillover holds conditional with the Lebanon track unconvened until the week of June 22.",
  implications: [
    {
      title:
        "The text finalizes and the toll clause resolves toward no-tolls — two of Day 109's three fault lines narrow, but a sealed document keeps the deal short of verified",
      body:
        "Day 109's binding test was whether the digital signature would convert to a released, executed text; Day 110 moves halfway. Gharibabadi said the MoU text is finalized and set for Friday in Geneva, and the reported toll language resolves the Day 109 dispute toward Trump's no-tolls reading: the Strait is 'toll-free for 60 days,' reopening immediately and restoring pre-war shipping within roughly 30 days (NBC News, ABC News, The Hill). That is real progress on two of the three fault lines — the toll clause and the missing text. Skeptical counter per §3.5.3, and it remains the analytical core: Vance confirmed the binding document is not released until the ceremony, and Pezeshkian said a final agreement 'has not yet been formed' (ABC News, PBS News). The structure still rhymes with Day 50–51: optimism and a near-complete deal preceded the Day 51 naval-seizure collapse, and the four-day gap to Geneva is the same reversal window. The toll-institutionalization prior is not retired — it migrates to the final-agreement phase, where the 'navigation services' question can resurface. Under the multi-clock framework the negotiation-capacity clock is at its strongest of the war. Analytical judgment: the commitment is firmer than at any prior point and two fault lines narrowed, but a finalized-but-sealed text is not a verified deal — Geneva, not Tehran's confirmation, is the test.",
    },
    {
      title:
        "The nuclear file is deferred with a verification pledge, but the IAEA's year-long blackout and the unverified HEU stockpile are the gap a 60-day window cannot close on paper",
      body:
        "The MoU reportedly carries an Iranian pledge not to seek a nuclear weapon, with enrichment and disposal of the highly enriched uranium stockpile the first items for the 60-day post-signing track, and Vance said IAEA inspectors will 'absolutely' return (NBC News). That is the first concrete verification commitment of the deal architecture. Skeptical counter per §3.5.6, and it is structural: the Agency has had no in-field verification access since February 28, Iran suspended cooperation in 2025, and ~440 kg of 60% HEU — enough, if further enriched, for multiple weapons — remains unverified, with Grossi assessing much of it still at Isfahan, sealed after the June strikes (ISIS, Foreign Policy). A pledge and a promised inspector return are not the same as restored monitoring, and a 60-day window is short for a file that has been dark for over a year. The weaponization-clock prior holds: the deal defers and pledges, it does not disarm. Under the multi-clock framework the energy and negotiation clocks improve while the nuclear-verification gap stays open. Analytical judgment: the verification language is a genuine advance over Day 109's pure deferral, but the binding test is whether inspectors actually re-enter and physically account for the HEU — until then the stockpile is a deferred problem, not a solved one.",
    },
    {
      title:
        "Taiwan: the toll resolution removes a permanent-revenue tail risk, but Hormuz still moves at ~2% of pre-war flow — the physical reopening, not the signature, is the catalyst",
      body:
        "For Taiwan, Day 110 improves the LNG-vulnerability case on terms but not yet on flow. The reported toll-free language removes a structural tail risk for the case: a $2M-per-transit fee at pre-war flow would have been roughly $29B/yr of permanent friction on Gulf energy, and its apparent removal from the 60-day MoU is a clean positive (ABC News, The Hill). Oil held near its lowest since early March as markets front-ran Friday's signing (CNBC). But §3.5.6 governs the structure: the chokepoint is still physically closed. Hormuz traffic ran near 2% of the pre-war baseline — about one tanker a day — and the world's largest tanker operator cautioned against a premature 'rush' into the Strait, with full reopening still weeks of demining away (CNBC, PBS News). The EIA's June outlook still frames the June–July average near $105, and the China-Russia veto cover and ~37.7% Chinese share of Hormuz crude carry. Analytical judgment: the energy-infrastructure clock keeps improving, now with the toll risk lifted, but the LNG-cover-through-September case rests on physical flow, not paper terms — the catalyst that revises the dominant case is a demined, transiting Strait, still ahead. TSMC's 2026 CapEx framework near 8% carries; the case revises on the released Geneva text plus restored Hormuz throughput.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. The blockade-end order stands as the first US drawdown of the war; the US says Iran 'won't get a dime' of the ~$24-25B relief until it performs over 60 days. Forces hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down; in-person signing Friday in Geneva.",
    israel:
      "No confirmed new IDF KIA. The Beirut flashpoint stayed cooled with no new salvo. Netanyahu holds the right to 'defend ourselves as necessary'; a US official confirmed Israeli withdrawal from Lebanon is not a deal condition. Comprehensive talks set for the week of June 22.",
    iran:
      "No verified new mass toll. The MoU reportedly carries an Iranian pledge not to seek a weapon, but ~440 kg 60% HEU stays unverified at Isfahan and the IAEA has had no in-field access since February 28. The Sirik-area water loss to 20,000+ from the June 10 strikes carries. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    other:
      "No confirmed new toll in active exchange; the Lebanon MOH war-cumulative figure was updated to 3,783 killed / 11,699 injured as of June 14. The declared termination covers Lebanon, but the comprehensive track only convenes the week of June 22. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
