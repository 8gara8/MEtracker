import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction turns escalating. The de-escalatory tilt of Day 152 reversed: Iran fired a ballistic-missile salvo at US bases in Jordan on July 28 (intercepted, no US casualties), the US and Saudi Arabia struck Iran-backed militias in eastern Iraq the next day (at least 20 killed), Brent jumped about 7% to roughly $89.4, and Bab el-Mandeb transits fell back toward 11 from the 28-vessel rebound (CNN, NPR, Forbes, DeepDraft). The one de-escalatory thread — a fifth night with no US strike on Iranian soil, and live Oman/Witkoff/Kushner diplomacy — is now the counter-current, not the main current. Per §3.5.3 the 'pause' is a one-directional US claim Tehran contradicted by attacking; the fracture is the fact.",
      risk7d:
        "Seven-day risk holds critical. Iran's salvo at US bases and the US-Saudi Iraq strikes reopened kinetic fronts the Day 152 pause had quieted, and Bloomberg says the exchange raised the risk of a return to full-blown war. The five-night halt on strikes against Iran caps one vector, but Trump has promised 'very strong military action' if talks fail, the Houthis have resumed Red Sea attacks, and Trump's 'bridge or power plant per ship' rule still converts any maritime death into a pre-committed exchange. Per §3.5.6 the structural priors carry, and the three-week collapse pattern that ended the last three lulls has reasserted itself on schedule.",
      spillover:
        "Spillover holds critical. Brent jumped about 7% to roughly $89.4, snapping a three-day losing streak as the renewed fighting rebuilt the war premium the pause had unwound to the roughly $86 baseline; Goldman's $120 fourth-quarter tail is intact and the $150-200 dual-closure tail is still one sinking away. Bab el-Mandeb transits fell back toward 11 as the Houthis resumed attacks and signaled a possible Red Sea toll, and Saudi intercepted drones aimed at eastern oil facilities. The Hormuz formula on the table would reopen the strait on Iranian terms — a fee and northern-corridor permission — the same water a third of Taiwan's gas transits as Qatari LNG.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / Bloomberg / Al Jazeera / US News',
      event:
        "Iran's IRGC fired several ballistic missiles at a US air base and a CENTCOM facility in Jordan on July 28 in what the US called an 'attempted surprise attack.' Jordanian and US air defenses intercepted five missiles and reported no US casualties. The salvo came a day after Trump said the US had halted strikes at Iran's request, and as Trump met Netanyahu at the White House.",
      summary:
        "Per §3.5.3 the salvo exposes the 'pause' as one-directional: the US held its strikes on Iran, but Tehran fired on US bases while its Foreign Ministry denies any negotiation exists. The fifth quiet night on Iranian soil coexists with a live missile front.",
      impact:
        "The interception spared US casualties, but Bloomberg says the attack 'punctured days of calm' and raised the risk of a return to full-blown war. The off-ramp the whole Day 152 brief rested on is now fractured, not signed.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'NPR / Jerusalem Post / Al Jazeera / Euronews',
      event:
        "Hours later the US and Saudi Arabia carried out joint 'limited, targeted' strikes on Iran-backed militias in eastern Iraq, hitting logistics and weapons sites in response to more than thirty IRGC-directed drone attacks in seventy-two hours, including drones aimed at eastern Saudi oil facilities. The Popular Mobilization Forces reported at least 20 fighters killed and 32 wounded; Iraqi armed groups condemned a 'dangerous escalation.'",
      summary:
        "Per §3.5.5 this is the coalition front widening: Riyadh's first claimed strikes inside Iraq of the war put Saudi warplanes into direct action against Iran's proxies, opening a new theater as the bilateral one nominally pauses.",
      impact:
        "Saudi Arabia crossing from target to shooter hardens the US-Saudi axis and changes the war's shape, but it also draws Iraqi condemnation and multiplies the surfaces on which the war can escalate beyond the two principals.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Forbes / Fortune / Trading Economics',
      event:
        "Brent crude jumped about 7% to roughly $89.4 a barrel, snapping a three-day losing streak, as the intercepted Iranian salvo and the US-Saudi Iraq strikes rebuilt the war-risk premium that the Day 152 pause had unwound to the World Bank's roughly $86 baseline. Analysts kept a structural bid in place while the Red Sea threat and the unsigned deal persist.",
      summary:
        "Per §3.5.5 the number is the cleanest read of the reversal: the premium that priced out on the pause priced back in within a day of the fighting resuming. The distance to the $150-200 dual-closure tail is unchanged — one sinking away.",
      impact:
        "A screen price back near $89 tells traders the de-escalation was a head-fake; the speed of the round-trip confirms the war-risk floor sits under the market regardless of the diplomatic headlines.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'DeepDraft / USNI News / Seatrade / Times of Israel',
      event:
        "The Bab el-Mandeb recovery reversed: transits fell back toward 11 vessels from Monday's 28-vessel rebound as the Houthis resumed attacks, with crossings down another roughly 50%. The Houthis, described as 'guided by Iran,' signaled they may start charging for passage through the Red Sea strait, even as they continue to wave some China-linked hulls through.",
      summary:
        "Per §3.5.6 the recovery was a tactic, not a floor — it lasted about a day. The reroute is re-closing, and a second-chokepoint toll is surfacing at Bab el-Mandeb to mirror the Hormuz fee fight.",
      impact:
        "The energy-infrastructure clock's brief improvement is undone; the Houthi capability that forced the halt is intact and now paired with a revenue play. Oil that resumed on dark AIS runs is turning back again.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Middle East Monitor / Jerusalem Post / Fortune / CFR',
      event:
        "Oman's Gulf-backed two-corridor Hormuz plan advanced but frayed. Gulf states backed the plan letting Iran collect voluntary transit fees; Iran's Deputy FM Gharibabadi rejected an equal lane split and counter-proposed routing both directions partly through Iranian waters, insisting on control and long-term guarantees; and Washington called any mandatory transit fee 'illegal,' demanding pre-war free passage. US envoys Witkoff and Kushner joined Qatar, Pakistan and Egypt, while FM spokesman Baghaei said there are 'no formal negotiations.'",
      summary:
        "Per §3.5.3 a formula the parties are 'approaching' while Iran attacks US bases and denies a negotiation is process, not agreement. Per §3.5.6 the toll-institutionalization prior is live on both terms and price.",
      impact:
        "The mediation is the most developed of the war, but the fee is now a three-way fault line — Gulf-backed, Iran-demanded, US-'illegal' — and the corridor still binds neither Bab el-Mandeb nor Israel.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA; Iran\'s July 28 missile salvo at US bases in Jordan was intercepted with no US casualty',
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. Iran's July 28 ballistic-missile salvo at a US air base and a CENTCOM facility in Jordan — five missiles — was intercepted by Jordanian and US air defenses with no reported American casualties. The three deaths that lifted the toll to 17 (one in northern Iraq, two at Muwaffaq Salti in Jordan) remain the most recent per Day 144, and divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. Per §3.5.3 a single leaker would flip the ledger and trigger Trump's 'bridge or power plant per ship' rule; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties. Netanyahu met Trump at the White House as the US 'dialed back' its Iran threats — then Iran's salvo landed the same day. Israel remains outside the US-Iran framework and unbound by any Hormuz corridor formula or the Oman channel; its standing readiness to strike Iran again keeps a full-scale-campaign option live. The Lebanon gap prior (§3.5.6) carries: Israel will not fully withdraw from southern Lebanon until Hezbollah disarms, the June 26 framework remains rejected, and cross-border fire continues with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update; the five-night halt on strikes against Iranian soil held',
      status:
        "No fresh official Iranian toll as the strikes-on-Iran interruption reached a fifth night. HRANA's ten-day report on the new wave now documents at least 48 killed and 68 injured as of July 17 across 376 incidents in 54 locations and 15 provinces — an upward refinement of the ~20/46 partial tally the series had carried, flagged as minimum counts given restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, and US and Israeli estimates run to 6,000+. The IAEA has run no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU remain unverified and, per Grossi, likely still at Isfahan.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA (incl. ≥20 PMF killed / 32 wounded in the US-Saudi strikes) · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta: '+20 KIA / +32 WIA folded into the Iraq line from the overnight US-Saudi strikes on Iran-backed militias',
      status:
        "The Popular Mobilization Forces reported at least 20 fighters killed and 32 wounded in the US-Saudi strikes on Iran-backed militias in eastern Iraq, folded into the Iraq line here. No confirmed new Gulf fatalities, though the Houthis resumed Red Sea attacks and Saudi Arabia intercepted drones aimed at its eastern oil facilities; a tanker-crew death or laden-tanker sinking remains the maritime tell most likely to reprice oil. Kuwait's cumulative ledger holds at 10 killed and 115 injured; Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); the Iraq baseline now carries the militia losses.",
    },
  },
  exec:
    "Day 153 broke the calm that had defined Day 152. The five-day interruption in US strikes on Iranian soil — the longest since the campaign resumed on July 7 — technically held, but the war re-ignited around it. On July 28 the IRGC fired several ballistic missiles at a US air base and a CENTCOM facility in Jordan in what the US called an 'attempted surprise attack'; Jordanian and US air defenses intercepted five missiles and reported no American casualties, though Bloomberg said the salvo 'punctured days of calm' and raised the risk of a return to full-blown war (CNN, Bloomberg, Al Jazeera). A day later, after more than thirty IRGC-directed drone attacks in seventy-two hours — some aimed at eastern Saudi oil facilities — the US and Saudi Arabia struck Iran-backed militias in eastern Iraq, the first Saudi strikes inside Iraq of the war; the Popular Mobilization Forces reported at least 20 fighters killed (NPR, Jerusalem Post, Euronews). The tape reversed with the fighting: Brent jumped about 7% to roughly $89.4, snapping a three-day losing streak, and Bab el-Mandeb transits fell back toward 11 vessels from Monday's 28-vessel rebound as the Houthis resumed attacks and signaled they may charge for Red Sea passage (Forbes, Trading Economics, DeepDraft, Times of Israel). Oman's two-corridor Hormuz plan advanced but frayed — Iran rejected an equal split and Washington called mandatory transit fees 'illegal.' Per §3.5.3 the diplomacy is real but the fracture is the fact. Direction turns escalating; seven-day risk critical; spillover critical; the thirty-day ceasefire probability slips to 14.",
  implications: [
    {
      title: 'The pause fractures — the war re-ignited around the one interruption that held',
      body:
        "The five-night halt in strikes on Iranian soil is the longest since the July 7 resumption, and it survived Day 153 intact — but that is now the exception inside a re-escalation, not the story. Iran's IRGC fired several ballistic missiles at a US air base and a CENTCOM facility in Jordan on July 28; all five were intercepted with no US casualties, yet the salvo 'punctured days of calm' and, per Bloomberg, raised the risk of a return to full-blown war (CNN, US News, Bloomberg). Within a day the US and Saudi Arabia struck Iran-backed militias in eastern Iraq — Riyadh's first claimed strikes inside Iraq of the war — after more than thirty IRGC-directed drone attacks in seventy-two hours, killing at least 20 (NPR, Al Jazeera). Under the multi-clock framework the active-deadline clock swung from paused to deteriorating and the coalition front widened. Analytical judgment: per §3.5.3, Trump's framing that strikes are merely 'paused' for talks he says Iran requested is a claim, not a fact — Tehran fired on US bases while denying a negotiation exists, and the calm was one-directional (no US strike on Iran) rather than mutual. Per §3.5.5 the delta is stark: from zero kinetic days to a ballistic-missile salvo plus a new Iraq strike front inside forty-eight hours. The three-week collapse pattern that ended the last three lulls has, on schedule, reasserted itself.",
    },
    {
      title: 'The tape reverses, and both chokepoints move toward tolls',
      body:
        "Every market and maritime gauge that eased on Day 152 turned. Brent jumped about 7% to roughly $89.4, snapping a three-day losing streak and rebuilding the war premium the pause had unwound to the roughly $86 baseline (Forbes, Fortune, Trading Economics). Bab el-Mandeb transits fell back toward 11 vessels from Monday's 28-vessel rebound as the Houthis resumed attacks; crossings are down another roughly 50% and the Houthis, 'guided by Iran,' signaled they may start charging for Red Sea passage (DeepDraft, USNI News, Seatrade, Times of Israel). Analytical judgment: under the energy-infrastructure clock the recovery was a tactic, not a floor — it reversed within a day, exactly as §3.5.6 warned. The deeper pattern is toll institutionalization spreading to both straits at once: Gulf states back Oman's plan letting Iran collect 'voluntary' Hormuz fees, Iran's Deputy FM Gharibabadi rejected an equal lane split and wants control plus long-term guarantees, and now the Houthis eye a Bab el-Mandeb charge (Middle East Monitor, CFR). Per §3.5.3 the counter is Washington's: the US calls any mandatory transit fee 'illegal' and insists on pre-war free passage, and Iran's FM spokesman Baghaei says there are still 'no formal negotiations' even as US envoys Witkoff and Kushner join Qatar, Pakistan and Egypt at the table. The architecture is the most developed of the war and, after the fracture, further from signature than a week ago.",
    },
    {
      title: 'Taiwan: the reversal lands on both the route and the bill',
      body:
        "The Day 152 relief for Taiwan — a reopening Red Sea detour and Brent back at baseline — reversed on Day 153. The Bab el-Mandeb re-decline to about 11 transits pushes Asian buyers, Taipei included, back onto the longer, costlier Suez detour just as Brent's roughly 7% jump to about $89.4 lifts the import bill for a market that runs at 4.2% energy self-sufficiency (Forbes, DeepDraft, CSIS). Analytical judgment: per §3.5.5 the structural numbers bind harder on a reversing day. Roughly 85% of East Asia's crude and LNG transits Hormuz; Taiwan is 99% import-dependent for gas and drew about a third of its 23.6 Mt of LNG from the Gulf, mostly Qatar; it holds only about 11 days of gas inventory against roughly 120 days of oil cover, with crude now about 60% US-sourced (Energy Intelligence, OilPrice). The crude-side diversification cushions the oil-price move; the gas side has no such buffer, and the Hormuz 'solution' on the table would reopen the very strait a third of Taiwan's gas crosses on Iranian-permission terms and a transit fee. Per §3.5.10 the fresh development is real and adverse — the bypass is re-closing and the fee architecture is hardening — and neither closes the gas gap: LNG is secured only through September and the statutory 14-day buffer arrives in 2027. On a map where both the strait and its bypass are contested again, the vulnerability is not merely unmoved; it is back in the light.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); Iran's July 28 missile salvo at US bases in Jordan was intercepted with no new US casualty. The three most recent deaths (Iraq x1, Jordan x2) carry per Day 144; divergent CENTCOM injury counts (290–413 WIA) per §3.5.3, 432 carries. A single leaker would trigger Trump's 'bridge or power plant per ship' rule; the $67B supplemental and 50-48 war-powers rebuke remain unresolved.",
    israel:
      "No new Israeli casualties. Netanyahu met Trump at the White House the same day Iran's salvo landed. Israel stays outside the US-Iran framework and unbound by any Hormuz formula or the Oman channel; the Lebanon gap prior carries — no withdrawal until Hezbollah disarms, June 26 framework rejected.",
    iran:
      "No fresh official toll as the strikes-on-Iran interruption reached a fifth night. HRANA's new-wave ledger now documents at least 48 killed / 68 injured as of July 17 (up from ~20/46) across 376 incidents; cumulative HRANA 3,636+; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. IAEA no verification since February 28; ~440.9 kg 60% and 184.1 kg 20% HEU unverified, likely Isfahan.",
    other:
      "At least 20 PMF fighters killed and 32 wounded in the US-Saudi strikes on Iran-backed militias in eastern Iraq, folded into the Iraq line. No confirmed new Gulf fatalities; Houthis resumed Red Sea attacks and Saudi intercepted drones aimed at eastern oil facilities. Kuwait cumulative 10 killed / 115 injured; Lebanon source-split.",
  },
};

export default data;
