import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating at the highest-intensity read of the war to date, and crosses a threshold the first 121 days had not. Overnight Saturday into Sunday the IRGC fired ballistic missiles and drones at two US bases in the Gulf — the Ali Al Salem air base in Kuwait and the US Fifth Fleet headquarters at Port Salman in Bahrain — the first direct Iranian missile strikes on US force posture since the war's opening weeks (Al Jazeera, Gulf News, CBS News). For 120 days Iran confined its direct kinetic action to commercial shipping and the Lebanon/proxy fronts while keeping US bases off the target list; the June 28 salvo re-opens base-on-base exchange, the war's most dangerous mode. Skeptical counter per §3.5.3: a US official reported no casualties or major damage, US air defenses intercepted six incoming ballistic missiles, and Iran reached for a 'complete halt to talks' threat rather than a sustained barrage — a calibrated salvo seeking leverage, not yet an all-out campaign.",
      risk7d:
        "Seven-day risk stays critical and self-fueling. The US answered the base strikes with a fresh CENTCOM round on roughly ten Iranian military targets — missile and drone storage and coastal radar sites — and Trump warned Washington would 'complete the job' while Vice President Vance said 'violence will be met with violence' (CNBC, Al Jazeera, CBS News). Iran's top negotiator said the military is 'ready to respond,' and Tehran threatened to halt all negotiating tracks, framing continued US strikes as a breach of Article 1 of the Islamabad Understanding (ABC News, CBS News). Both sides now invoke Article 5 of the MoU — the Hormuz safe-passage clause — to blame the other (Al Jazeera). The 60-day waiver architecture (General License X to August 21) and a Strait still open cap the absolute downside, but a live four-round strike sequence across the corridor and onto Gulf bases is the highest seven-day risk of the war.",
      spillover:
        "Spillover stays critical and widens. Iran has now struck two Gulf monarchies — Bahrain and Kuwait — with ballistic missiles and drones in a single sequence, hitting the host of the US Fifth Fleet and a major US air base on sovereign Gulf soil (Al Jazeera, Gulf News). The GCC condemned the strikes as 'treacherous' and a 'blatant violation' of both states' sovereignty, and France, Germany and the United Kingdom issued a joint declaration of condemnation — diplomatic containment that isolates Tehran without halting the exchange (Gulf News). On the Lebanon front §3.5.6 governs: Hezbollah's Naim Qassem called the Washington framework 'null and void' and ruled out 'normalisation,' as Israeli strikes continued on Nabatieh and killed two at Mayfadoun (Al Jazeera, NPR). A war that on Day 120 looked to be narrowing is now widening across the Gulf and the Blue Line at once.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Gulf News / CBS News / Army Recognition',
      event:
        "The IRGC fired ballistic missiles and drones at two US bases in the Gulf — the Ali Al Salem air base in Kuwait and the US Navy's Fifth Fleet headquarters at Port Salman in Bahrain — claiming to have 'destroyed eight important US military facilities' and warning that any further aggression would draw a 'crushing response'; a US official reported no casualties or major damage, and US air defenses intercepted six incoming ballistic missiles",
      summary:
        "⭐ The threshold crossing: the first direct Iranian ballistic-missile strikes on US force posture since the war's opening weeks, ending a 120-day pattern of confining direct fire to commercial shipping and proxy fronts (Al Jazeera, Gulf News).",
      impact:
        "The energy-infrastructure and coalition-cohesion clocks worsen sharply. Base-on-base exchange is the war's most dangerous mode; striking the Fifth Fleet's host and a major US air base on Gulf soil converts the corridor crisis into a direct Iran–US military confrontation.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Al Jazeera / CBS News',
      event:
        "US CENTCOM struck roughly ten Iranian military targets — missile and drone storage and coastal radar sites near the Strait — in response to the base attacks and the earlier M/T Kiku tanker strike; Trump warned the US would 'complete the job' and that further violations could bring full-scale military action, and Vice President JD Vance said 'Iran signed a ceasefire agreement... but violence will be met with violence'",
      summary:
        "The US escalation match: a fourth strike round in the sequence, paired with the most explicit US war-widening rhetoric yet (CNBC, Al Jazeera).",
      impact:
        "The negotiation-capacity clock worsens. The US is now answering Iranian strikes with named, repeated kinetic rounds rather than de-confliction; the 'complete the job' framing puts the entire MoU architecture on a war footing.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'CBS News / Al Jazeera / ABC News',
      event:
        "Tehran threatened a 'complete halt' to all negotiating tracks, framing continued US strikes as a breach of Article 1 of the Islamabad Understanding, while both sides invoked Article 5 of the MoU — the Hormuz safe-passage clause — to blame the other; Iran's top negotiator said the military is 'ready to respond' to Trump's threats",
      summary:
        "The diplomatic fault line surfaced: the MoU's own safe-passage clause is now the text each side cites to justify firing, and Iran has put the negotiating tracks themselves on the table (Al Jazeera, CBS News).",
      impact:
        "The negotiation-capacity clock worsens but does not stop. Iran threatened a halt rather than declaring one; the working groups and the General License to August 21 survive on paper, the thinnest possible off-ramp.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / NPR / Lebanese Health Ministry',
      event:
        "Hezbollah leader Naim Qassem called the Washington framework 'null and void' and ruled out any 'normalisation' with Israel, insisting Israel withdraw unconditionally; Israeli strikes continued on Nabatieh and an air raid killed two people at Mayfadoun, leaving the framework a one-signatory document as Lebanon's cumulative toll held near ~4,250 killed / 12,190 wounded",
      summary:
        "Skeptical counter per §3.5.6: the framework Day 120 read as the front's first political movement is hardening into a dead letter on the armed party's refusal (Al Jazeera, NPR).",
      impact:
        "The humanitarian clock stays critical. A deal signed by a Lebanese state that cannot deliver Hezbollah's disarmament cannot stand up the LAF pilot zones or the Military Coordination Group; the strikes continue regardless.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / Gulf News / Euronews',
      event:
        "The counter-signals held: Brent stayed near $72 — the lowest since February 27 — with the Strait open and Gulf exports running ~75% of pre-war levels; the GCC and the E3 (France, Germany, the UK) condemned Iran's strikes diplomatically rather than militarily; and IAEA chief Grossi reiterated that inspections 'leave no room for ambiguity' under the MoU, while Iran tied any visit to a final agreement",
      summary:
        "The lagging and containing counters: the market still prices the MoU's survival and the Gulf/European response is diplomatic isolation, not a widening of the kinetic coalition (Trading Economics, Gulf News).",
      impact:
        "Caps the absolute downside without retiring it. Per §3.5.3 a price is a forecast and a condemnation is not a counter-strike; the corridor risk now outpaces both as Iran and the US trade direct fire.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (IRGC ballistic missiles and drones struck Ali Al Salem in Kuwait and the Fifth Fleet HQ at Port Salman in Bahrain; a US official reported no casualties or major damage; US air defenses intercepted six incoming ballistic missiles; US conducted a fresh strike round on ~10 Iranian military targets)',
      status:
        "No new US casualties reported. The IRGC struck the Ali Al Salem air base in Kuwait and the Fifth Fleet headquarters at Port Salman in Bahrain with ballistic missiles and drones; a US official told Reuters there were no reported US casualties or major damage, and US air defenses intercepted six incoming ballistic missiles. US CENTCOM conducted a fresh strike round on roughly ten Iranian military targets in response.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (Israeli strikes continued on Nabatieh and killed two at Mayfadoun; Hezbollah rejected the framework as "null and void")',
      status:
        "No verified new Israeli casualties. Israeli strikes continued on Nabatieh in southern Lebanon and an air raid killed two people at Mayfadoun; Hezbollah's Naim Qassem rejected the Washington framework as 'null and void' and ruled out 'normalisation,' insisting on unconditional Israeli withdrawal.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (fresh US strike round hit ~10 Iranian military targets — missile/drone storage and coastal radar; Iran published no figure; weaponization file unmoved)',
      status:
        "No verified new mass toll, though the fresh US strike round hit roughly ten Iranian military targets — missile and drone storage and coastal radar sites near the Strait; Iran has not published a casualty figure. Tehran kept inspections conditional on a 'final agreement' against Grossi's insistence the MoU 'leaves no room for ambiguity'; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. Off the war ledger, HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera — Israeli strikes continued on Nabatieh, Mayfadoun); Bahrain and Kuwait both ballistic- and drone-struck (no confirmed US casualties; GCC condemned as "treacherous"); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+~4 Lebanon (Mayfadoun air raid killed two; continued Nabatieh strikes); Bahrain + Kuwait ballistic/drone strikes produced no confirmed US casualties',
      status:
        "Lebanon's cumulative toll held near ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera) as Israeli strikes continued on Nabatieh and killed two at Mayfadoun. Iran's ballistic-missile and drone strikes on Bahrain and Kuwait — now the second Gulf-monarchy strike sequence of the war — produced no confirmed US or local casualties in available reporting; the GCC condemned them as 'treacherous.' Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carries.",
    },
  },
  exec:
    "Day 122 holds escalating at the highest-intensity read of the war to date — and crosses a threshold the first 121 days had not. Overnight Saturday into Sunday the IRGC fired ballistic missiles and drones at two US bases in the Gulf — the Ali Al Salem air base in Kuwait and the US Fifth Fleet headquarters at Port Salman in Bahrain — the first direct Iranian missile strikes on US force posture since the war's opening weeks (Al Jazeera, Gulf News, CBS News). A US official reported no casualties or major damage and US air defenses intercepted six incoming ballistic missiles, but the targeting itself is the development: Iran moved from 120 days of commercial-shipping and proxy harassment to direct base-on-base confrontation (Army Recognition, CBS News). The US answered with a fresh CENTCOM round on roughly ten Iranian military targets; Trump warned Washington would 'complete the job' and Vice President Vance said 'violence will be met with violence,' while Tehran threatened a 'complete halt' to all negotiating tracks as a breach of Article 1 of the Islamabad Understanding (CNBC, Al Jazeera, CBS News). Both sides now blame the other under Article 5 of the MoU, the safe-passage clause. Skeptical counter per §3.5.3: Iran fired a calibrated salvo and then reached for negotiating leverage rather than a sustained barrage, and the 60-day license architecture survives on paper while Brent held near $72 (Trading Economics). 30-day ceasefire probability falls to 52 from 63; direction is escalating because direct Iran–US strikes on Gulf bases are the war's most dangerous mode.",
  implications: [
    {
      title:
        "The structural shift the evening flash flagged is real — Iran moved from commercial-shipping harassment to direct ballistic-missile strikes on US bases",
      body:
        "For 120 days Iran confined its direct kinetic action to commercial shipping (the Ever Lovely, the M/T Kiku) and the Lebanon and proxy fronts, keeping US bases off the target list since the war's opening weeks. Day 122 ends that pattern: the IRGC fired ballistic missiles and drones at the Ali Al Salem air base in Kuwait and the US Fifth Fleet headquarters at Port Salman in Bahrain, claiming to have destroyed 'eight important US military facilities' (Al Jazeera, Gulf News). Quantify the shift per §3.5.5: two Gulf monarchies struck with ballistic missiles in a single sequence, six missiles intercepted by US defenses, against zero direct US-base strikes in the prior 120 days. Skeptical counter per §3.5.3: a US official reported no casualties or major damage, and Iran paired the salvo with a 'complete halt to talks' threat rather than a sustained barrage — the signature of a calibrated, leverage-seeking strike, not the opening of a general war. Analytical judgment under the multi-clock framework: the energy-infrastructure and coalition-cohesion clocks worsen because Iran has demonstrated it will hit US force posture directly; the negotiation-capacity clock is now the dominant variable, because the same strike that crossed the threshold was bundled with a demand, not a declaration of war.",
    },
    {
      title:
        "The off-ramp is the thinnest of the war — Article 5 is now the text both sides cite to justify firing, but Iran threatened a halt rather than declaring one",
      body:
        "The MoU's own safe-passage clause has become the fault line. Both Washington and Tehran invoke Article 5 — which calls for safe passage for commercial ships through Hormuz — to blame the other for the exchange, and Vice President Vance distilled the US position as 'violence will be met with violence' (Al Jazeera, CBS News). The US has now run a fourth named strike round in the sequence, with Trump vowing to 'complete the job' (CNBC). Per §3.5.3, hold the optimistic and pessimistic reads in tension: Iran threatened a 'complete halt' to all tracks and called continued US strikes a breach of Article 1 of the Islamabad Understanding, but a threatened halt is not a declared one, and the General License to August 21 plus the working groups remain technically alive. Quantify the off-ramp per §3.5.5: the deal architecture is intact on paper while its central chokepoint has absorbed four strike rounds and two Gulf-base attacks in roughly seventy-two hours. Analytical judgment: the negotiation-capacity clock is running but not stopped — the war is closer to a formal collapse of talks than at any point since the April 8 framework, yet both sides have left themselves a door, and which way it swings is the single most important thing to watch.",
    },
    {
      title:
        "Taiwan: the price still lags the shooting — direct Iran–US base strikes raise the closure tail even as Brent holds near $72",
      body:
        "For Taiwan, Day 122 sharpens the lesson of Day 121: a falling oil price is the weakest possible all-clear when the chokepoint under it is being shot at. The tape held — Brent near $72 eases the import bill, no LNG cargo was hit, Gulf exports ran ~75% of pre-war levels, and LNG cover through September plus TSMC's 2026 CapEx near 8% carry (Trading Economics, Gulf News). But the waterway carrying roughly 38% of the island's LNG and 70% of its crude, against about 11 days of cover, has now absorbed four strike rounds and direct Iranian ballistic strikes on two US Gulf bases (Al Jazeera, Army Recognition). Per §3.5.6: the structural exposure escalated again while the number did not move; the closure tail is fatter than the price implies. Skeptical counter per §3.5.3: the Strait stayed open, transits continued, and no LNG cargo has been hit in 122 days. Analytical judgment: the durable hedges remain the ones indifferent to today's price — diversification toward Australian and US cargoes and the Maanshan and Kuosheng nuclear restarts (2028–2029). The only thing that retires the exposure is supply that does not transit Hormuz; everything else is a bet that a corridor now taking direct Iran–US fire stays open.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties reported. The IRGC struck the Ali Al Salem air base in Kuwait and the Fifth Fleet HQ at Port Salman in Bahrain with ballistic missiles and drones; a US official reported no casualties or major damage, and US air defenses intercepted six incoming ballistic missiles. CENTCOM conducted a fresh strike round on ~10 Iranian military targets in response.",
    israel:
      "No verified new Israeli casualties. Israeli strikes continued on Nabatieh and killed two at Mayfadoun; Hezbollah's Qassem rejected the framework as 'null and void' and ruled out 'normalisation,' insisting on unconditional Israeli withdrawal.",
    iran:
      "No verified new mass toll, though the fresh US round hit ~10 Iranian military targets — missile/drone storage and coastal radar; Iran published no figure. Inspections stay conditional on a 'final agreement' against Grossi's 'no room for ambiguity'; the ~440.9 kg of 60% HEU stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "Lebanon's cumulative toll held near ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera) as Israeli strikes continued on Nabatieh and killed two at Mayfadoun. Iran's ballistic-missile and drone strikes on Bahrain and Kuwait produced no confirmed US or local casualties; the GCC condemned them as 'treacherous.' Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries.",
  },
  flash:
    "A senior US official confirmed the two sides agreed to halt all kinetic activity — \"We decided to stop all the kinetic activity\" — with the US and Iran set to meet in Doha, Qatar on Tuesday; the talks were moved from Switzerland and refocused on the Hormuz standoff specifically rather than the broader nuclear sequencing agenda set for Bürgenstock (Axios, Times of Israel, Euronews — accessed 2026-06-29T10:00Z). The mutual standdown follows the Day 122 morning brief's highest-intensity read of the war — four US strike rounds and the first IRGC ballistic-missile strikes on US bases in Kuwait and Bahrain — and appears to vindicate the analytical judgment that the salvo was a calibrated, leverage-seeking move rather than the opening of a sustained campaign, though Iran has not yet publicly confirmed the halt (RFE/RL — accessed 2026-06-29T10:00Z). A second development from Monday: Israel's National Cyber Directorate chief Yossi Karadi disclosed that Iranian cyberattacks on Israel tripled from approximately 1,600 incidents in June 2025 to approximately 4,800 in June 2026, targeting critical infrastructure, central organizations, and SMEs including law practices and accounting firms; Israeli authorities blocked major disruptions to critical infrastructure but organizations with weaker defenses suffered severe compromise (Times of Israel, New Arab — accessed 2026-06-29T10:00Z). Analytical judgment: the mutual standdown argues for tomorrow's brief to nudge ceasefire probability back from 52 toward the high-50s and to assess whether the Qatar talks can consolidate the halt into a durable Hormuz-operations protocol before the August 21 deadline; the cyber surge is the companion signal — Iran redirecting escalatory energy below the kinetic threshold while the shooting pauses.",
};

export default data;
