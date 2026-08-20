import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war rather than a settlement. Day 175 ran on the economic axis: a day after unveiling the 'economic isolation' plan, Washington drew open counter-fire — Araghchi called it 'economic terrorism,' China rejected it and ordered its firms to defy US sanctions — while Treasury's Bessent said the US likely will not restart large-scale combat and set a Monday date to detail the apparatus (Press TV, Al-Monitor, CNBC). Per §3.5.3 the motion is real but one-directional and now openly contested: the plan's ceiling — that it runs through Beijing — is being spoken by Beijing itself, and the 'no large-scale combat' line concedes the kinetic limits behind the pivot. It is not cleanly escalating: the US-Iran shooting stayed paused, no fresh mass-casualty strike hit Iranian soil, and the Iran-Oman shipping-map deal advanced. It is not de-escalating either, with the negotiating track closed, fresh Hezbollah sanctions levied and Brent firming toward $93. Mixed holds; the de-escalation leg rests on an Oman channel Araghchi says does not itself reopen the strait.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, or a confirmed Saudi naval loss — stayed untriggered, keeping the gauge off 'extreme,' but the aperture stayed wide: the isolation plan drew a defiant Iranian and Chinese counter rather than capitulation, Washington added Hezbollah sanctions, and a vessel was struck near Hormuz as China-linked supertankers turned back (CNN, CNBC). Israel opened a new front by striking a Syrian airbase near Aleppo, drawing a US 'unnecessary escalation' rebuke and a Turkish charge of 'expansionism' — a fresh Israel-Turkey seam (Al Jazeera, Times of Israel). Iran and Oman finalized a Hormuz shipping-map, but Araghchi said it does not reopen the strait, and Brent pushed toward $93 (Spokesman-Review, LiteFinance). An Iranian answer to the isolation plan, a US strike on Oman, a resumed strike on Iran, a Saudi kinetic reply to the Mokha claim, an Israel-Turkey clash over Syria, a Hezbollah reprisal that breaks the June truce, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, and now fresh Israel-Turkey friction over Syria: Israel's strike on the Abu al-Duhur airbase near Aleppo — claiming Turkey planned to deploy there — drew condemnation from Ankara and a rare 'unnecessary escalation' rebuke from Washington of its own ally (Al Jazeera, Times of Israel). A US 'economic isolation' plan whose ceiling China now openly rejects widens the economic front, with Beijing ordering firms to defy sanctions (Al-Monitor, Fox News). The Lebanon truce stayed frayed to a threat exchange, the Gaza demilitarization mechanism kept that seam live with no Israeli commitment, and the UAE's reported ballistic-missile threat and the unconfirmed Houthi Saudi-warship claim carried. That no kinetic US-Iran, US-Oman or Israel-Turkey clash followed the day's strikes and threats is why spillover did not worsen outright; that a NATO member and two Gulf partners are now drawn in, and the mediator remains threatened, is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Press TV / Al-Monitor / Fox News',
      event:
        "A day after Washington unveiled the 'economic isolation' plan and ruled out talks, both targets pushed back: Iran's FM Araghchi dismissed the 'Economic D-Day' as 'economic terrorism' and 'a diversion from America's own crisis — unprecedented debt and surging interest costs,' and China's foreign ministry rejected the threat ('sanctions and pressure tactics are not the solution'), with Beijing ordering major firms to defy US sanctions on Iranian oil.",
      summary:
        "Per §3.5.3 the plan's stated ceiling — that its bite runs through Beijing's banks and yuan rails — is now voiced by Beijing itself, and Tehran answered with defiance, not capitulation.",
      impact:
        "The negotiation-capacity and political-will clocks dominate: the isolation apparatus meets a coordinated Iran-China counter before its first designations, hardening the standoff into a longer contest.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / CNN / Bloomberg',
      event:
        "Treasury Secretary Bessent said the US likely will not restart large-scale combat with Iran as it steps up economic pressure, while Washington levied fresh sanctions on Hezbollah and scheduled a Monday news conference to detail the isolation apparatus; Trump reposted an image branding the strait 'New US Territory.'",
      summary:
        "Per §3.5.3 cite Bessent's 'no large-scale combat' as an administration signal, not a guarantee — it reads as the kinetic-limits tell behind the economic pivot, paired with the munitions-shortfall reporting.",
      impact:
        "The kinetic de-escalation signal sits against economic escalation: the shooting stays capped even as the sanctions machine and its Monday rollout advance, and the war's off-ramp narrows to Iran's economic endurance.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'LiteFinance / CNBC / OilPrice',
      event:
        "Brent crude pushed toward $93 a barrel — up more than 4% on the week after closing $91.62 on Aug 19 — as three China-linked supertankers turned back while transiting the Strait of Hormuz and a vessel was reported struck by a projectile near the strait, keeping a supply-risk premium bid on the closure.",
      summary:
        "Per §3.5.5 the move quantifies the squeeze — a fifth up session onto a draining inventory base, with the EIA still seeing no Mideast-output recovery until early 2027.",
      impact:
        "The energy-infrastructure clock tightens on a higher floor: a Gulf export-node hit or a laden-tanker sinking now reprices past $100 from a thinner start, and the closure is visibly biting China's own crude flows.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Jazeera / The Times of Israel',
      event:
        "Israel struck a Syrian airbase — eight strikes on the runway and storage at Abu al-Duhur near Aleppo — and confirmed the attack, saying Turkey was on the verge of deploying forces there; the US called it an 'unnecessary escalation' and Turkey denounced Netanyahu's 'expansionist' policies, with Ankara denying any military presence at the base.",
      summary:
        "Per §3.5.6 Israel again acts outside the US-Iran framework and now against a NATO member's plans, on a clock of its own; Washington's public rebuke of an ally is itself the signal.",
      impact:
        "A new Israel-Turkey seam opens over Syria: a fresh widening path independent of Hormuz, and a rare daylight gap between Washington and Jerusalem.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Spokesman-Review / Al Jazeera / NBC News',
      event:
        "Iran and Oman were reported to have finalized a Hormuz 'shipping map' — a northern inbound lane in Iranian waters and a southern outbound lane in Omani waters, initially 60 days with no fees — but Araghchi said the arrangement does not itself reopen the strait, which stays conditioned on US concessions; the US-general-supervised Gaza demilitarization mechanism drew no firm Israeli commitment and Hamas held its terms.",
      summary:
        "Per §3.5.3 the Oman 'map' is a bilateral safe-passage scheme, not a reopening; the gap between a finalized map and a strait still shut at ~3/day is the signal.",
      impact:
        "Neither track closed: the strait's reopening stays hostage to the US-Iran precondition standoff, and Gaza's veto sits with an unmoved Israel-Hamas gap no Hormuz map can bind.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 175's American pressure was economic — a Monday date set to detail the isolation plan, fresh Hezbollah sanctions, and Bessent's signal that the US likely will not restart large-scale combat — with no reported US casualty; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused, and Bessent publicly signaled the US likely will not restart large-scale combat as it leans on the sanctions apparatus — the clearest kinetic-limits tell yet, consistent with the munitions-shortfall reporting. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess, and the Joint Chiefs chairman still presses for an off-ramp.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24-48h; Israel stayed offensive rather than costly — striking a Syrian airbase near Aleppo (US-rebuked, Turkey-condemned), holding the Kushner-Netanyahu line that the IDF stays in Gaza until Hamas fully disarms under a US general, and keeping its Hezbollah threat exchange live after the Aug 15 Lebanon strike",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. The day's Israeli posture was again offensive rather than costly: Jerusalem struck the Abu al-Duhur airbase near Aleppo — claiming Turkey planned to deploy forces — drawing a US 'unnecessary escalation' rebuke and a Turkish 'expansionism' charge, while holding to the Kushner-Netanyahu demand that Gaza be demilitarized under a US general before any IDF redeployment and keeping its Hezbollah threat exchange live after the Aug 15 southern-Lebanon strike (carried in the 'other' ledger). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts outside the US-Iran framework and now against a NATO member's plans, on its own clock. Israel stayed at highest readiness on its October 27 election clock, with Saudi Arabia and the UAE still faulting it over the Gaza roadmap.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Iran's Day 175 action was diplomatic and economic-defensive — Araghchi's defiance of the 'economic isolation' plan as 'economic terrorism,' reaffirmed sanctions-relief and reparations preconditions, and the finalized-but-non-reopening Oman shipping-map — with no reported new Iranian casualties; a rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 175. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Day 175 moves were diplomatic and economic-defensive — Araghchi dismissing the 'economic isolation' plan as 'economic terrorism' and a diversion from US debt, reaffirming that talks and any strait reopening require the US to end violations and pay compensation, and pressing the finalized Oman shipping-map that Araghchi says does not itself reopen Hormuz — with no reported new Iranian casualties. Per §3.1's dual-sourcing a separate rights thread of reported continued executions on security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths in a 24-48h dominated by economic escalation, unverified claims and a new Syria front: Israel's strike on the Abu al-Duhur airbase near Aleppo hit runway and stores with no reported casualties; the UAE's reported ballistic-missile threat from Iran and the Houthis' unconfirmed Saudi-warship claim carried without a verified new toll; Hormuz transits held near three a day as China-linked tankers turned back",
      status:
        "The 'other' ledger held on confirmed deaths on a day dominated by economic pressure, unverified claims and a new Syria front. Israel's eight-strike hit on the Abu al-Duhur airbase near Aleppo struck the runway and storage with no reported casualties, so it is logged, not counted. The UAE's reported ballistic-missile threat from Iran and the Houthis' claimed strike on a Saudi military landing ship off Mokha carried unconfirmed by Riyadh — per §3.5.3 logged, not counted; shut Mokha left about 1,300 workers idled. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) held as a Hezbollah-Israel threat exchange with no fresh toll. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz transits ran near three a day; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 175 was the day Washington's economic war drew return fire. A day after unveiling the 'economic isolation' plan and ruling out talks, the administration met open resistance from both Tehran and Beijing: Foreign Minister Araghchi dismissed the 'Economic D-Day' as 'economic terrorism' and 'a diversion from America's own crisis — unprecedented debt and surging interest costs,' reaffirming that talks cannot resume and the strait cannot reopen until the US ends its violations and pays compensation, while China's foreign ministry rejected the threat outright — 'sanctions and pressure tactics are not the solution' — and Beijing ordered its firms to defy US sanctions on Iranian oil (Press TV, Al-Monitor, Fox News). Per §3.5.3 the plan's own ceiling — that it runs through Beijing — is now spoken by Beijing. Washington pressed anyway, levying fresh sanctions on Hezbollah and scheduling a Monday news conference to detail the apparatus, but Treasury Secretary Bessent said the US likely will not restart large-scale combat as it leans on economic pressure — the clearest statement yet of the kinetic limits behind the pivot (CNN, Bloomberg, CNBC). The market firmed with the standoff: Brent pushed toward $93, up more than 4% on the week after closing $91.62, as China-linked supertankers turned back at Hormuz and a vessel was struck near the strait (LiteFinance, CNBC). Israel opened a new seam, striking a Syrian airbase near Aleppo in a move the US called an 'unnecessary escalation' and Turkey called 'expansionist' (Al Jazeera, Times of Israel). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "The isolation plan draws first counter-fire — and its ceiling is spoken aloud",
      body:
        "Day 175 is the day Washington's economic war met organized resistance. A day after unveiling the 'economic isolation' plan and ruling out talks, the administration drew a coordinated counter: Iran's Araghchi branded the 'Economic D-Day' 'economic terrorism' and 'a diversion from America's own crisis — unprecedented debt and surging interest costs,' and China's foreign ministry rejected the threat outright, with Beijing ordering major firms to defy US sanctions on Iranian oil (Press TV, Al-Monitor, Fox News). Analytical judgment: under the multi-clock framework the negotiation-capacity and political-will clocks govern, and per §3.5.3 the plan's own stated ceiling — that its bite runs through Chinese banks and yuan rails — is now voiced by Beijing itself, converting an American theory of leverage into a declared Chinese red line before the first designation lands. Washington pressed anyway, levying fresh Hezbollah sanctions and setting a Monday news conference to detail the apparatus — but Bessent said the US likely will not restart large-scale combat, the clearest admission yet of the kinetic limits behind the pivot and consistent with the munitions-shortfall reporting. The contest is now explicit: the shooting stays capped while the sanctions machine advances into a wall of Iran-China defiance, and the war's off-ramp narrows to Iran's economic endurance against Washington's will to enforce secondary sanctions on the world's second economy. An apparatus is harder to switch off than a strike, and both sides just dug in.",
    },
    {
      title: "The market firms toward $93 — and the strait bites China directly",
      body:
        "For a fifth session the price kept climbing rather than holding: Brent pushed toward $93, up more than 4% on the week after closing $91.62, as three China-linked supertankers turned back mid-transit at Hormuz and a vessel was reported struck by a projectile near the strait (LiteFinance, CNBC, OilPrice). Analytical judgment: per §3.5.5 the move quantifies a squeeze the market is no longer discounting — crossings near three a day against the ~120/day pre-crisis norm, with the EIA still seeing no Mideast-output recovery until early 2027 and global inventories drawing down. The energy-infrastructure clock tightens on a higher floor: a Gulf export-node hit or a laden-tanker sinking now reprices past $100 from a thinner start, and Goldman's $120 Q4 call and the dual-closure $150–200 tail both stay intact. The sharper signal is directional — the closure is visibly biting the very patron the isolation plan is built to pressure, turning back China-linked cargoes even as Beijing vows to defy the sanctions and keep buying. That two-way bite is the day's tell: the strait squeezes Iran's largest customer at the same moment Washington moves to sever it, so China's cost of standing with Tehran is rising on the water while its political defiance hardens on paper. The market is pricing a longer war, and Day 175's push toward $93 says the premium is still rebuilding, not bleeding out.",
    },
    {
      title: "Taiwan: the chokepoint starts turning back China's tankers",
      body:
        "For Taipei, Day 175 sharpens the duration story with a new edge: the chokepoint is now demonstrably turning back China-linked tankers. Per §3.5.10 there was no Taiwan-specific development today; what changed is that Hormuz is visibly rationing the crude and LNG flows of the exact economy Taiwan competes with for cargoes, even as an unveiled 'economic isolation' apparatus, a legislated closure and a China-Iran standoff harden around it. Analytical judgment: per §3.5.5 the arithmetic is unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). A strait that turns back supertankers, a Houthi campaign reaching Saudi and Emirati targets, a mediator under bomb-threat and now a fresh Israel-Turkey seam over Syria are not a spike to wait out but a structural condition to plan around, and the EIA's early-2027 recovery call puts a calendar on it. Brent near $93 still understates the exposure, because Taiwan's vulnerability is priced in the molecule, not the barrel, and the molecule's route is the one being blockaded and legislated over — and now visibly turning ships away. Nothing on Taipei's winter-gas checklist got shorter today; the tightening competition for every diverted Asian cargo just made each item on it dearer.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; Bessent signaled the US likely will not restart large-scale combat as it leans on the sanctions apparatus. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel stayed offensive — striking the Abu al-Duhur airbase near Aleppo (US 'unnecessary escalation' rebuke, Turkey 'expansionism' charge), holding the Kushner-Netanyahu line that the IDF stays in Gaza until Hamas fully disarms under a US general, and keeping the Hezbollah threat exchange live after the Aug 15 Lebanon strike (carried in 'other'). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness on its October 27 election clock.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was diplomatic and economic-defensive — Araghchi's defiance of the 'economic isolation' plan as 'economic terrorism,' reaffirmed sanctions-relief and reparations preconditions, and the finalized-but-non-reopening Oman shipping-map — with no reported new casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24-48h dominated by economic escalation, unverified claims and a new Syria front: Israel's Abu al-Duhur airbase strike hit runway and stores with no reported casualties; the UAE's reported ballistic-missile threat and the Houthis' claimed Saudi-warship strike off Mokha carried unconfirmed by Riyadh — per §3.5.3 logged, not counted. Mokha stays shut, ~1,300 workers idled. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) held as a threat exchange with no fresh toll. Bab al-Mandeb Tihamah holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
