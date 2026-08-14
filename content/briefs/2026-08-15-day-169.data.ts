import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, with the tilt still toward a longer war rather than a nearer settlement. Day 169's escalation was real but bounded: Iran struck two ADNOC vessels in Hormuz, drawing a joint UAE-Qatar condemnation of 'piracy' and a UNSC-2817 violation, and the second chokepoint turned lethal with the Houthi strike on the Tihamah (Al Jazeera, UAE MOFA). Yet the US-Iran shooting stayed paused, no new mass-casualty strike landed on Iranian soil, and the Sunday deadline is heading to a quiet lapse or extension rather than a rupture — Trump has already moved it twice and Tehran sees 'nothing to extend' (New Arab, ABC News). Per §3.5.3 a day on which Iran fires on its Gulf neighbors' tankers while restating that no ship crosses 'without permission' is hardening, not resolving. It is not cleanly escalating into open regional war either, since the ADNOC strikes drew condemnation but no kinetic Arab answer, so the gauge holds mixed with the de-escalation leg thinned to a corridor whose political ground just narrowed.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export-node hit or a laden-tanker sinking — stayed untriggered, keeping the gauge off 'extreme,' but the pressures that would push it there rose. Iran's strikes on two ADNOC tankers show the willingness to hit Gulf-Arab shipping directly, and the Bab al-Mandeb turned lethal with at least six killed on the Tihamah (Al Jazeera). The 60-day MoU/corridor window expires Sunday (~Aug 16-17) with the terms unmoved and both capitals speaking past it, so a US-acceptable reopening by the date looks no likelier (New Arab). The IEA's warning that global oil stockpiles are draining fast carries, thinning the cushion under any later shock even with Brent near $87 (Bloomberg, IEA). A resumed US-Israeli strike, a maritime sinking, a Saudi-Houthi exchange, a Gulf-Arab retaliation for the ADNOC attacks, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open, kinetic Houthi front against Saudi shipping. Day 169's spillover pressure came from Iran widening the aggrieved-party set: striking ADNOC vessels pulls the UAE and Qatar into direct condemnation and drags the Gulf-Arab littoral, not just Washington, into the fault line (UAE MOFA). The Bab al-Mandeb double-tap on the Tihamah made the second chokepoint lethal for the first time since February, and the Netanyahu-Trump rift carried with Israel still rejecting the Gaza plan on its election clock (Al Jazeera, NBC News). That no Gulf-Arab military answer followed the ADNOC strikes is why spillover did not worsen outright; that Iran is now firing on its neighbors' tankers, that the second chokepoint has drawn blood, and that the deadline arrives empty is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / UAE MOFA / The National',
      event:
        "The United Arab Emirates said Iranian forces struck two vessels linked to its state oil company, ADNOC, as they transited the Strait of Hormuz on Thursday evening, and — with Qatar joining the condemnation — called the attack 'acts of piracy' by the IRGC and a 'flagrant violation' of UN Security Council Resolution 2817; ADNOC said 15 of its ships have now been hit since February, with no casualties in the latest strike.",
      summary:
        "Per §3.5.3 Iran firing on Emirati state tankers while insisting it is arranging 'safe passage' is a contradiction that hands the Gulf-Arab littoral a grievance the US blockade alone never gave it.",
      impact:
        "Attacking the very coastal states whose acquiescence any managed corridor would need narrows the political ground on which the Oman route could ever be built, and pulls the UAE and Qatar directly into the fault line.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'The New Arab / ABC News / Tasnim',
      event:
        "The 60-day MoU and Oman-corridor window reached its Sunday (~Aug 16-17) expiry hollow: President Trump has already extended the deadline twice and stretched a Jones Act shipping waiver another 90 days, while Tehran said it saw 'nothing to extend,' Foreign Minister Araghchi tied any reopening to US 'compensation' for June-memorandum breaches, and Iran's FM spokesman said the strait stays shut while the blockade stands and framed the Oman talks as a bilateral coastal-state matter.",
      summary:
        "Per §3.5.3 'very close' on the Oman framework is the optimism to discount when it arrives welded to a demand for US 'compensation' and paired with 'nothing to extend.'",
      impact:
        "A deadline moved twice and spoken past by both sides is no longer an ultimatum but a calendar entry — the active-deadline clock has visibly stopped forcing movement.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: 'Bloomberg / Al Jazeera / IEA',
      event:
        "Brent crude slipped to near $87 a barrel on flickering hopes of an Iran-Oman accord, then held its ground as the fresh ADNOC and Bab al-Mandeb attacks kept the market on edge; the IEA's warning that global oil stockpiles are draining against a roughly 1.8-million-barrel-a-day third-quarter shortfall carried, and US petroleum reserves fell to recent lows.",
      summary:
        "Per §3.5.5 the barrel is whipsawing on deal headlines while the deeper vector stays on inventory — a market that eases on optimism and re-firms on every strike, over a draining global buffer.",
      impact:
        "Each week of closure and each new attack lowers the inventory cushion, so a later Gulf-export hit or tanker sinking lands on a thinner base even as the spot price looks calm.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera',
      event:
        "Yemen's internationally recognized government said a Houthi 'double-tap' missile strike on the Egyptian-owned bulk carrier Tihamah in the Bab al-Mandeb (Aug 12) killed at least six crew — three Pakistani and one Indonesian among them — and wounded ten, the first shipping deaths attributed to the Houthis since the war began on February 28; the Houthis have not confirmed a toll and their Red Sea 'siege' on Saudi shipping continued.",
      summary:
        "Per §3.5.6 the second chokepoint drew blood for the first time, confirming that the Bab al-Mandeb front runs independent of the US-Iran track and is now lethal, not just disruptive.",
      impact:
        "Fatal attacks on crews raise war-risk premiums and Suez rerouting pressure on a second waterway, compounding the Hormuz closure rather than substituting for it.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'NBC News',
      event:
        "Israel's rejection of President Trump's 15-point Gaza plan persisted: Netanyahu said forces would not withdraw from the roughly 60% of Gaza they hold until Hamas fully disarms, his far-right coalition allies welcomed the rejection, and the standoff carried into an October 27 election run-up with the coalition's majority at risk.",
      summary:
        "Per §3.5.6 Israel's independence from US-brokered frameworks holds — the disarmament-sequencing impasse persists, welded to an open Netanyahu-Trump rift on an election clock.",
      impact:
        "A US ally rejecting the president's flagship regional plan on the eve of an election keeps the Gaza seam open and limits Washington's leverage to consolidate any Iran-track settlement.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused and Thursday's ADNOC strikes hit Emirati-linked, not US, vessels with no reported American casualty; the DoD DCAS all-cause tally holds at 18 killed / 687 wounded, a counting-scope difference and not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty), against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure as the headline and flags DCAS as a divergence; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused; the day's maritime violence hit Emirati ADNOC tankers, not US vessels. The blockade remains the pivot of Iran's precondition set, which Tehran ties to compensation for June-memorandum breaches; Trump extended the reopening deadline a second time and stretched a Jones Act waiver 90 days to keep US fuel moving. The Joint Chiefs chairman is still pressing for an off-ramp; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved with the Senate in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest readiness and outside the Oman channel; the Gaza rift carried as Israel continued to reject Trump's 15-point plan and ruled out withdrawal from the ~60% of Gaza it holds before Hamas disarms, less than three months from an October 27 election",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest readiness, with the US and Israel still preparing possible strikes on Iranian energy infrastructure, and stays outside the US-Iran framework and unbound by the Oman channel, so its posture keeps a full-scale-campaign option live if the corridor talk collapses; the Lebanon-gap prior (§3.5.6) carries and sits inside Iran's precondition list. On the seams the Netanyahu-Trump rift carried: Israel continued to reject Trump's 15-point Gaza plan, said forces would not withdraw from the roughly 60% of Gaza they hold until Hamas fully disarms, and reaffirmed there would be 'no Palestinian state,' with far-right coalition allies welcoming the rejection less than three months from an October 27 election. The disarmament-sequencing impasse stayed unresolved.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 169; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; the day's Iranian action was maritime — the ADNOC strikes in Hormuz — with no reported Iranian casualties, and Tehran did not immediately comment on the UAE's claims; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll issued on Day 169. The Qeshm Island civilian deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's Iranian development was maritime and diplomatic: the IRGC-attributed strikes on two ADNOC tankers, and a foreign-ministry line tying any Hormuz reopening to the end of the US blockade and framing the Oman talks as a bilateral coastal-state matter. Per §3.1's dual-sourcing discipline a separate rights thread of reported continued executions on national-security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the 60% HEU stock (ISIS ~440.9 kg, plus 184.1 kg at 20%) stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched, and Tehran holding that inspectors return only after a final deal.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians injured (Houthi attack, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Aug 9) · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded, per Yemen government (Houthis unconfirmed) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing',
      delta:
        "No fresh confirmed Iran-front theater deaths, but the maritime ledger moved: Yemen's internationally recognized government said a Houthi double-tap on the Egyptian-owned Tihamah in the Bab al-Mandeb (Aug 12) killed at least six crew (three Pakistani, one Indonesian) and wounded ten — the first shipping deaths attributed to the Houthis since Feb 28; the Houthis have not confirmed a toll; two more ADNOC vessels were struck with no casualties, and ADNOC reports 15 of its ships hit since February",
      status:
        "No confirmed new Iran-front theater deaths on Day 169, but the maritime ledger moved on two fronts. In the Bab al-Mandeb, Yemen's internationally recognized government said a Houthi double-tap on the Egyptian-owned bulk carrier Tihamah (Aug 12) killed at least six crew — three Pakistani and one Indonesian among them — and wounded ten, the first shipping deaths attributed to the Houthis since the war began; the Houthis have not confirmed a toll, and the figure is carried per §3.1 dual-sourcing as a government claim. In Hormuz, Iran struck two more ADNOC tankers with no casualties, and ADNOC reported 15 of its vessels hit since February. The Mecca Joint Defence Agreement stayed untested with Riyadh still weighing a unilateral answer; the northern Iraqi-militia axis kept its response postponed under Badr mediation. The cumulative Hormuz-crisis maritime toll now stands at roughly 19 merchant ships damaged, seven abandoned, two captured and about eighteen seafarers killed or missing, with the strait effectively closed and transits near three-month lows. Kuwait holds 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Saudi Arabia 11 civilians injured (Aug 7); Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 169 arrived the day before the deadline with Iran's Hormuz enforcement turning outward. The UAE said Iranian forces struck two vessels linked to its state oil company, ADNOC, as they transited the Strait of Hormuz on Thursday evening, and — with Qatar joining — condemned the attack as 'acts of piracy' by the IRGC and a 'flagrant violation' of UN Security Council Resolution 2817; ADNOC said 15 of its ships have now been hit since February, with no casualties in the latest strike (UAE MOFA, Al Jazeera, The National). The escalation cut against Iran's own 'safe passage' framing: Tehran is now firing on the Gulf's own tankers while insisting no vessel crosses 'without permission.' Into that, the 60-day MoU and Oman-corridor window reached its Sunday (~Aug 16-17) expiry hollow. Trump has already extended the deadline twice and quietly stretched a Jones Act shipping waiver another 90 days, while Tehran said it saw 'nothing to extend'; Araghchi called the Oman framework 'very close' yet tied any reopening to US 'compensation' for June-memorandum breaches, and Iran's foreign-ministry spokesman said the strait stays shut while the blockade stands (New Arab, ABC News, CNBC, Tasnim). Energy tracked the whiplash: Brent slipped near $87 on flickering deal hopes, then held as the ship attacks kept the market on edge and global inventories drained (Bloomberg, Al Jazeera, IEA). The second chokepoint turned lethal — Yemen's government said a Houthi double-tap on the Tihamah in the Bab al-Mandeb killed at least six. The Gaza rift and the bounded nuclear file carried. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 7.",
  implications: [
    {
      title: "The enforcer turns on its neighbors — Iran fires on Gulf-Arab shipping while claiming to protect passage",
      body:
        "The day's sharpest fact was directional: Iran's Hormuz enforcement, until now aimed at US-linked and non-compliant traffic, struck two ADNOC vessels — Emirati state tankers — drawing a joint UAE-Qatar condemnation that named the IRGC and invoked UN Security Council Resolution 2817 (UAE MOFA, Al Jazeera). ADNOC's tally of 15 of its ships hit since February makes clear this is a pattern, not a one-off. Analytical judgment: per §3.5.3 the tell is the contradiction — Tehran cannot simultaneously argue it is arranging 'safe passage' through an Oman-brokered corridor and be shooting the Gulf's own tankers, and the gap between the two hands the Arab littoral a grievance the US blockade alone never gave it. Under the multi-clock framework the coalition-cohesion clock is where this lands: a strait Iran is defending by attacking the very neighbors whose acquiescence any managed corridor would need. The 'managed corridor is not free navigation' prior sharpens — the enforcer is now the aggressor against the coastal states it claims to coordinate with. That the strikes drew condemnation but no kinetic Gulf-Arab answer keeps the day short of open regional war, but it narrows the political ground on which the corridor could ever be built.",
    },
    {
      title: "A twice-extended deadline arrives hollow — the active-deadline clock has stopped forcing",
      body:
        "Sunday's 60-day MoU/corridor expiry (~Aug 16-17) reached its date drained of force. Trump has already extended the deadline twice and stretched a Jones Act waiver another 90 days to keep US fuel moving; Tehran said it saw 'nothing to extend'; and Iran's FM spokesman restated that the strait stays shut while the blockade stands, framing the Oman talks as a bilateral coastal-state matter (New Arab, ABC News, CNBC, Tasnim). Analytical judgment: per §3.5.3 Araghchi's 'very close' on the Oman framework is exactly the optimism to discount when it arrives welded to a demand for US 'compensation' and paired with 'nothing to extend.' Under the multi-clock framework the active-deadline clock, dominant for weeks, has now visibly failed: a date that has been moved twice and that both sides speak past is no longer an ultimatum but a calendar entry. What expires Sunday is not the war and not the corridor but the fiction that the deadline was ever forcing movement. The negotiation-capacity clock is the one still turning, and it is turning down — messages pass, but the terms have not, and Iran has tied reopening to conditions Washington has refused for two months.",
    },
    {
      title: "Taiwan: the fault now runs through the Gulf's own tankers, not just the barrel",
      body:
        "For Taipei the exposure held while the failure mode sharpened. Per §3.5.10 there was no Taiwan-specific development on Day 169; the shift is in the character of the risk. Analytical judgment: per §3.5.5 the underlying numbers are unchanged and unforgiving — Taiwan is 99% import-dependent for natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). What Day 169 adds is that the threat to those Qatari cargoes is no longer abstract blockade but demonstrated fire on Gulf-Arab tankers in the strait — the same class of vessel and route that carries Taiwan's LNG. A calm Brent near $87 still masks the real exposure, which is the molecule, not the barrel; and the day's escalation is precisely against the shipping that molecule depends on. The realized damage carries: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, and US LNG backfill at a premium. With the deadline lapsing, inventories draining, and Iran now striking the Gulf's own tankers, the list of things that must go right for Taipei's gas supply grew longer, not shorter.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; the day's maritime strikes hit Emirati ADNOC tankers, not US vessels. Trump extended the reopening deadline a second time and stretched a Jones Act waiver 90 days; the $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held. The Gaza rift carried: Israel continued to reject Trump's 15-point plan, ruled out withdrawal from the ~60% of Gaza it holds before Hamas disarms, and reaffirmed 'no Palestinian state,' with far-right allies welcoming the rejection less than three months from an October 27 election. Israel stays outside the Oman channel; the Lebanon-gap prior sits inside Iran's precondition list.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was maritime — the ADNOC strikes — with no reported Iranian casualties, and Tehran did not immediately comment on the UAE's claims. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "No confirmed new Iran-front theater deaths, but the maritime ledger moved: Yemen's government said a Houthi double-tap on the Tihamah in the Bab al-Mandeb (Aug 12) killed at least six (three Pakistani, one Indonesian) and wounded ten — the first Houthi shipping deaths since Feb 28; the Houthis have not confirmed a toll (carried per §3.1 dual-sourcing). Iran struck two more ADNOC tankers with no casualties; ADNOC reports 15 vessels hit since February. Maritime toll now ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested with Riyadh weighing a unilateral answer; the Iraqi axis stayed postponed. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7); Lebanon source-split.",
  },
};

export default data;
