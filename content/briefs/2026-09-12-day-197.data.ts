import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 197 as the war's second chokepoint moved to the edge of Iranian control: the Houthis seized Mokha, Perim/Mayun and the Hanish islands, taking Yemen's Red Sea coastline and the Bab al-Mandeb approaches, while Saudi Arabia shut its ~7 mb/d East-West pipeline after a drone strike Riyadh attributed to Iraq. Both hedges against a closed Hormuz were compromised in a day. A genuine counter-signal appeared — Iran agreed to Gulf shipping talks in Salalah, Oman on Monday and Brent eased 2.8% to $104.61 — but the talks are regional shipping management with no US counterparty, and the structural shift at Bab al-Mandeb outweighs them; the balance stays escalating.",
      risk7d:
        "Seven-day risk holds extreme. Iran and its proxies are now on course to sit astride both maritime gates of the Arabian Peninsula at once, the Saudi overland bypass is offline, and Brent booked an 8.7% weekly gain on a drawn-down stock base with Goldman flagging a rising probability of $120-plus. A laden-tanker loss, a second export-node strike, an unevaded anti-ship salvo with a first US Navy casualty, a formal Bab al-Mandeb closure, or a named major-Chinese-bank designation each sends oil sharply higher. The Salalah talks and Riyadh's decision not to retaliate for the pipeline strike are the only near-term brakes, and neither touches the US-Iran war.",
      spillover:
        "Spillover holds critical and structural. The map now burns at both maritime gates: Iranian soil under a continuing campaign, Hormuz contested, Bab al-Mandeb's coast in Houthi hands, the Saudi export geography under drone attack from Iraqi soil, the Israel-Gaza and Israel-Lebanon fronts lethal, and a formalized economic front wired to the September 24 US-China summit. Per §3.5.5 the Red Sea reroute that hedged a closed Hormuz now runs past a Houthi-held coast, and the drone strike launched from Iraq extends the war's reach to a fifth neighbor's territory. China's open defiance, Iran's execution wave and the IAEA's Security Council referral are the standing worsening signals.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'NBC News / NPR / Al Jazeera / The National',
      event:
        "The Houthis completed a rapid ground offensive to seize the Red Sea port of Mokha and the strategic islands of Perim/Mayun and the Greater and Lesser Hanish group, taking effective control of Yemen's Red Sea coastline and the approaches to Bab al-Mandeb. Kpler-tracked traffic through the strait fell to about twelve vessels from roughly thirty earlier in the week, and Iran and its proxies are now on course to command both maritime gates of the Arabian Peninsula at once — a severe setback for Saudi Arabia and its Yemeni allies.",
      summary:
        "A chokepoint changing hands is a structural shift in the board, not another day's escalation; per §3.5.5 quantify it — ~12 Bab al-Mandeb vessels vs ~30, against Hormuz's 4-6/day and a pre-war 100-120 — and the second-chokepoint tail this series has flagged for weeks becomes a live position.",
      impact:
        "The energy-infrastructure and coalition-cohesion clocks move together and hard; the Red Sea reroute that hedged a closed Hormuz now runs past a Houthi-held coast, loading a second-gate squeeze onto an oil market already pricing rupture.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / UPI / CNBC',
      event:
        "Saudi Arabia shut its East-West (Petroline) pipeline — the ~7 mb/d overland bypass around Hormuz to the Red Sea at Yanbu — after drones Riyadh said were launched from Iraq struck it in the Riyadh and Medina regions, causing injuries and fires. The kingdom condemned the strike but said it would not retaliate, in order to give Baghdad time to act; Iraq condemned the attack and ordered an investigation.",
      summary:
        "Per §3.5.3 the Iraq attribution is Riyadh's own and Newsweek's floated Houthi authorship is uncorroborated; the restraint keeps the front from widening west, but the effect is that both hedges against a closed Hormuz were compromised on the same day.",
      impact:
        "The energy-infrastructure clock loses the principal overland escape valve just as the Red Sea sea-route is contested; the war's reach now extends to a fifth neighbor's territory.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / The Business Standard / CNBC',
      event:
        "Iran said it will meet GCC foreign ministers and Iraq in Salalah, Oman on Monday to discuss Strait of Hormuz shipping and security — temporary routes, mine clearance and short-term management — the week's first real multilateral movement. Brent, which had cleared $105, settled back 2.8% to $104.61 on the news even as it booked an 8.7% weekly gain, with Goldman still flagging a rising probability of $120-plus.",
      summary:
        "Per §3.5.3 hold it for what it is: shipping-management diplomacy among regional states, not a war ceasefire, and still with no US counterparty against Trump's standing no-deal line — a genuine de-escalation signal running alongside a widening war.",
      impact:
        "The negotiation-capacity clock shows its first motion in weeks without moving the war's off-ramp; the thirty-day ceasefire probability holds at 2 rather than falling further.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'FDD / Al Jazeera / Haaretz / HRW',
      event:
        "The carried tracks held and hardened: the IAEA's first referral of Iran to the UN Security Council in 20 years (23-3, Russia, China and Niger opposed) advanced toward a body where Russian and Chinese vetoes make action unlikely; the IDF said it destroyed an underground Hezbollah complex at Ali al-Taher in southern Lebanon; the Gaza disarmament roadmap stayed deadlocked; and Human Rights Watch documented Iran's ongoing execution campaign against protesters.",
      summary:
        "Per §3.5.6 the nuclear, Lebanon-gap and Israeli-independence priors hold unresolved; per §3.1 the execution wave stays a rights thread outside the war toll — each a standing vector formalized rather than eased.",
      impact:
        "The active-deadline and humanitarian clocks stay worsening; the UNSC track adds a legal-escalation vector with no near-term off-ramp layered onto the September 24 US-China summit window.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 197 — a tenth day with no verified new US combat casualty. Iranian claims of strikes on US Navy vessels in the Hormuz restricted zone stay uncorroborated by any operator, flag state, P&I club or maritime authority; per §3.5.3 they stay logged and uncounted. The 18th DCAS death stays unconfirmed as hostile and Trump's 'per ship' rule untriggered. The escort corridor (~8-9 mb/d) runs amid live fire with the USS George Washington on station; the blockade holds at eighty-six vessels rerouted, three disabled, two boarded, with CENTCOM's five Kharg-area tanker strikes carried.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28; per §3.5.3 keep the combat figure and flag DCAS. Day 197 added no US count — a tenth quiet day — but the exposure profile hardened around it: with the Houthis now astride the Bab al-Mandeb coast and the Saudi overland bypass offline, the escort corridor (~660M+ barrels and ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire on both maritime gates. Iranian claims of strikes on US Navy vessels stay uncorroborated but signal a doctrine that against a crewed ship draws Trump's reprisal rule. The $67B supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of a November midterm the president says the war will outlast.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality; Israel again stayed offstage on the US-Iran maritime fight, the Saudi–Yemen war and the day's oil tape. The IDF said it destroyed an underground Hezbollah complex at Ali al-Taher in southern Lebanon, and the Gaza roadmap held deadlocked with Israeli officials alleging Hamas is rebuilding. The standing Lebanese dead are logged under 'other,' not folded into the war cumulative.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Israeli toll on Day 197. Israel's own fronts stayed hot but produced no new Israeli count: the IDF reported destroying an underground Hezbollah complex at Ali al-Taher, and the Gaza roadmap holds deadlocked — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, Netanyahu's office opposes the plan, and Israeli officials say Hamas is rebuilding despite the ceasefire, with 1,100+ Palestinians killed since the October 2025 ceasefire, a connected theater the series does not fold into the war cumulative. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel continues to act on its own clock, offstage on a day whose escalation ran through Yemen, the Saudi export map and the oil tape.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No update to the official war toll. The movement was on the nuclear and rights tracks: the IAEA's referral of Iran to the UN Security Council (23-3, Russia, China and Niger opposed) advanced, with ~440.9 kg of 60% plus ~184.1 kg of 20% HEU unverified and likely at Isfahan and Tehran conditioning access on a final deal. The rights thread carries per §3.1 — HRW and Amnesty document at least 59 executed since the war's escalation and ≥78 under sentence of death (incl ≥5 who were children) — kept outside the war toll, as is the contested Sep 1 Kuhestak wedding-strike count.",
      status:
        "The official Iranian war toll carries pending an update; Day 197 added no new war-front count. On the nuclear file, Grossi's IAEA — 'completely blind' for more than a year across 22 sites, with ~440.9 kg of 60% plus ~184.1 kg of 20% HEU unverified and likely at Isfahan, enough for up to ten weapons if further enriched — has referred Iran to the UN Security Council (23-3), where Russian and Chinese vetoes make enforcement unlikely and Tehran answers by conditioning access on a final deal. On the rights thread, kept out of the war cumulative per §3.1: Human Rights Watch reports an ongoing weekly execution campaign, with Amnesty documenting at least 59 executed since the war's escalation and at least 78 under sentence of death including at least five who were children at the time of the alleged offence. The Sep 1 Kuhestak wedding strike stays NYT-corroborated as a US-released bomb, its Iranian-source toll not folded into MOH. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,300+ / 12,200+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 158+ WIA (Kuwait 10 / 115; Saudi ~84 injured) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "The Saudi–Yemen war produced a strategic reversal rather than a released toll: the Houthis seized Mokha, Perim/Mayun and the Greater and Lesser Hanish islands, taking Yemen's Red Sea coastline and the Bab al-Mandeb approaches, while drones Riyadh attributed to Iraq struck the East-West pipeline in the Riyadh/Medina regions and caused injuries. Per §3.5.3 the Yemeni tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the aggregate pending firmer counts. Bab al-Mandeb traffic fell to ~12 vessels from ~30; the Lebanon (~4,300+/12,200+), Gulf (33+/158+), Iraq (148+/402+) and maritime tolls carry.",
      status:
        "The 'other' ledger's live fronts shifted structurally on Day 197. The Houthis seized Mokha, Perim/Mayun and the Greater and Lesser Hanish islands, taking Yemen's Red Sea coastline and the Bab al-Mandeb approaches — a strategic reversal for Saudi Arabia and its Yemeni allies — while drones Riyadh attributed to Iraq struck the East-West pipeline in the Riyadh/Medina regions, causing injuries and forcing its shutdown; Riyadh said it would not retaliate to give Baghdad time to act. Per §3.5.3 the Yemeni tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the aggregate. Kpler shows Bab al-Mandeb traffic down to ~12 vessels from ~30; Hormuz holds near a fifth of pre-war flow at four-to-six a day, many AIS-dark. The Lebanon reprisal cycle carries (Health Ministry ~4,300+ / 12,200+; Wikipedia 3,371 / 10,129 lags). Gulf 33+/158+; Iraq 148+/402+; maritime ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers; Mokha now Houthi-held; Kuwait 10/115.",
    },
  },
  exec:
    "Day 197 brought the war's second chokepoint to the edge of Iranian control. Yemen's Houthis completed a rapid ground offensive to seize the Red Sea port of Mokha and the strategic islands of Perim/Mayun and the Greater and Lesser Hanish group on Friday, taking effective control of Yemen's Red Sea coastline and the approaches to the Bab al-Mandeb strait — a severe setback for Saudi Arabia and its Yemeni allies that puts Iran and its proxies on course to command both maritime gates of the Arabian Peninsula at once (NBC News, NPR, Al Jazeera). Ship traffic through Bab al-Mandeb fell to about twelve vessels a day from roughly thirty earlier in the week (The National, citing Kpler). The same day, Saudi Arabia shut its East-West (Petroline) pipeline — its ~7 million-barrel-a-day overland bypass around Hormuz to the Red Sea at Yanbu — after drones Riyadh said were launched from Iraq struck it in the Riyadh and Medina regions, causing injuries; the kingdom said it would not retaliate in order to give Baghdad time to act (CNN, UPI). Both hedges against a closed Hormuz were compromised in a single day. Against the escalation ran the week's first real diplomatic movement: Iran said it will meet GCC foreign ministers and Iraq in Salalah, Oman on Monday to discuss Hormuz shipping and security — though still with no US counterparty — and Brent, which had cleared $105, settled back 2.8% to $104.61 on the news even as it booked an 8.7% weekly gain (Bloomberg, CNBC). The nuclear file's UN Security Council referral, the Lebanon reprisal cycle and Iran's execution wave carried. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: "The second chokepoint changes hands — the war's geography closes around the oil market",
      body:
        "Day 197 delivered the clearest inflection since the Saudi–Yemen front reopened: the Houthis completed a rapid ground offensive to take Mokha and the islands of Perim/Mayun and the Greater and Lesser Hanish group, seizing Yemen's Red Sea coastline and the approaches to Bab al-Mandeb (NBC News, NPR, Al Jazeera). Per §3.5.5 quantify the squeeze: Kpler-tracked traffic through the strait fell to about twelve vessels from roughly thirty earlier in the week, while Hormuz already runs at four-to-six a day against a pre-war 100–120, and about 12% of global seaborne trade normally transits Bab al-Mandeb. For the first time, Iran and its proxies are on course to sit astride both maritime gates of the Arabian Peninsula at once. Under the multi-clock framework the energy-infrastructure and coalition-cohesion clocks move together and hard: the Red Sea reroute that hedged a closed Hormuz now runs past a coast the Houthis control, and the setback to Riyadh and its Yemeni allies is the sharpest coalition reversal of the war. Analytical judgment: a chokepoint changing hands is not another day's escalation but a structural shift in the board — it converts the second-chokepoint tail this series has flagged for weeks into a live position, and it does so on the same day Saudi Arabia lost the use of its overland bypass, closing the geography around an oil market already pricing rupture.",
    },
    {
      title: 'Escalation and off-ramp on the same tape — the pipeline strike and the Oman talks',
      body:
        "Two moves pulled in opposite directions on Day 197. Saudi Arabia shut its East-West (Petroline) pipeline — the ~7 mb/d overland route to Yanbu that is the principal way to move Gulf crude around a closed Hormuz — after drones Riyadh attributed to Iraq hit it in the Riyadh and Medina regions, causing injuries; per §3.5.3 the Iraq attribution is the kingdom's own, and Newsweek's floated Houthi authorship is uncorroborated. Riyadh said it would not retaliate, to give Baghdad time to act — a notable restraint that keeps the front from widening further west. Against that, Iran said it will meet GCC foreign ministers and Iraq in Salalah, Oman on Monday to discuss Hormuz shipping, temporary routes and mine clearance — the week's first real multilateral movement (Bloomberg, The Business Standard). But per §3.5.3 hold it for what it is: shipping-management diplomacy among regional states, not a war ceasefire, and still with no US counterparty against Trump's standing no-deal line. The market split the difference — Brent settled back 2.8% to $104.61 on the Oman news even after booking an 8.7% weekly gain, with Goldman still flagging a rising probability of $120-plus (CNBC). Analytical judgment: a genuine de-escalation signal now runs alongside a widening war, which is why the thirty-day ceasefire probability holds at 2 rather than falling further — the talks are real, but they do not touch the war the US president has dated to the midterms.",
    },
    {
      title: 'Taiwan: both reroutes narrow on the same day',
      body:
        "Per §3.5.10 no development aimed at Taipei landed on Day 197, but the day struck Taiwan's energy math from two directions at once. Roughly a third of Taiwan's LNG still transits Hormuz (~8 Mt of Qatari gas), and the reroute logic that would move Gulf energy around a closed strait runs two ways — overland via the Saudi East-West pipeline to Yanbu, and by sea through the Red Sea and Bab al-Mandeb. On Day 197 the pipeline was shut and the Bab al-Mandeb coast fell to the Houthis, so both bypasses narrowed on the same tape. Per §3.5.5 the arithmetic is unchanged and unforgiving: 95–99% import dependence, about eleven days of gas cover against roughly 120 of oil, in the month Taipei itself flagged its buffer runs down. Analytical judgment: the geographic escape valves Taiwan's buffer was built to exploit are closing in parallel rather than one at a time, which is the harder version of the risk; the banked hedge toward ~60% US crude and a 25%-US-LNG-by-2029 goal is the right direction, and the Salalah talks are the thin positive, but Day 197 is the reminder that the transition window and the war's now-dated persistence are running openly against each other, with the oil tape keeping score.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. A tenth quiet day for US casualties: Iranian claims of strikes on US Navy vessels in the restricted zone stay uncorroborated by any operator, flag state, P&I club or maritime authority — logged and uncounted — and Trump's 'per ship' rule stays untriggered. The blockade holds at ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire on both maritime gates with the USS George Washington on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess ahead of a November midterm the president says the war will outlast.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on the US-Iran maritime fight, the Saudi–Yemen war and the day's oil tape while its own fronts carried: the IDF said it destroyed an underground Hezbollah complex at Ali al-Taher in southern Lebanon, and the Gaza roadmap held deadlocked — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, Netanyahu's office opposes the plan, and Israeli officials say Hamas is rebuilding despite the ceasefire (a connected theater, not folded into the war cumulative; 1,100+ killed since the October 2025 ceasefire). The standing Lebanese dead are logged under 'other.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update; no new war-front count. The nuclear file advanced: the IAEA's referral of Iran to the UN Security Council (23-3, Russia, China and Niger opposed) moves toward a body where Russian and Chinese vetoes make enforcement unlikely; ~440.9 kg 60% + ~184.1 kg 20% HEU unverified and likely at Isfahan, enough for up to ten weapons if further enriched; Tehran conditions access on a final deal. The rights thread carries per §3.1 — HRW documents an ongoing weekly execution campaign and Amnesty at least 59 executed since the war's escalation, ≥78 under sentence of death (incl ≥5 who were children) — kept out of the war toll. The Sep 1 Kuhestak wedding strike stays NYT-corroborated (US bomb); its toll not folded into MOH. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "The Saudi–Yemen war produced a strategic reversal: the Houthis seized Mokha, Perim/Mayun and the Greater and Lesser Hanish islands, taking Yemen's Red Sea coastline and the Bab al-Mandeb approaches, while drones Riyadh attributed to Iraq struck the East-West pipeline in the Riyadh/Medina regions, causing injuries and its shutdown; Riyadh said it would not retaliate to give Baghdad time to act. Per §3.5.3 the Yemeni tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the aggregate. Kpler shows Bab al-Mandeb traffic down to ~12 vessels from ~30; Hormuz near a fifth of pre-war flow at four-to-six a day (many AIS-dark). The Lebanon reprisal cycle carries (Health Ministry ~4,300+ / 12,200+; Wikipedia 3,371 / 10,129 lags). Gulf 33+/158+; Iraq 148+/402+; maritime ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers; Mokha now Houthi-held; Kuwait 10/115.",
  },
};

export default data;
