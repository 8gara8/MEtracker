import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 195 as two loaded thresholds broke at once. Brent crude crossed $100 and touched a session high of $101.58 — its first move above $100 since July and above $101 since May — and the Saudi front the 2022 truce had frozen tipped into open two-way war: after the September 8 Houthi barrage that wounded 73 and lit Aramco's Jazan refinery, the Saudi-led coalition struck back into Yemen, hitting Taiz and Marib and vowing 'all necessary measures.' At Hormuz the IRGC consolidated its coming 'restricted zone' into a claimed enforcement campaign. Nothing on Day 195 reversed the return to force; the market and a second Arab-state front both moved the war further from off-ramp.",
      risk7d:
        "Seven-day risk holds extreme. An open Saudi-Yemen war on the oil market's most-watched export geography, a coming Iranian restricted zone now backed by a claimed strike campaign, a live escort corridor in a mined strait, and Brent already above $100 on a drawn-down stock base multiply the flashpoints. A second strike on a Gulf export node, a laden-tanker loss, a lost convoy, an unevaded anti-ship salvo with a first US Navy casualty, or a named major-Chinese-bank designation each sends oil sharply higher from a triple-digit base. The Yanbu reroute that hedged a closed Hormuz is itself under Houthi fire, and the IAEA's year of 'complete blindness' removes the last verification floor.",
      spillover:
        "Spillover holds critical and sharpened. The map now burns at both ends of the Arabian Peninsula and along the connected seams: Iranian soil under a continuing campaign, both maritime chokepoints, the Gulf host states directly targeted, an open Saudi-Yemen war, the Israel-Gaza and Israel-Lebanon fronts lethal, and a formalized economic front wired to the September 24 US-China summit. Per §3.5.5 the Saudi reprisal into Taiz and Marib converts the Houthi barrage into a two-way war, and the IRGC's abandon-ship warnings near Kuwaiti and Bahraini ports extend the reach. The claimed maritime strikes stay uncorroborated, but the 73 wounded on Saudi soil, the lethal Lebanon strikes, China's open defiance and Iran's deepening execution wave are the standing worsening signals.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Al Jazeera / Euronews / Daily Caller / CNN',
      event:
        "The Saudi reprisal Day 194 had only promised materialized, turning the frozen Yemen front into open two-way war: after the September 8 Houthi barrage that wounded 73 and set Aramco's 400,000-barrel-a-day Jazan refinery alight, the Saudi-led coalition struck Taiz and Marib provinces in Yemen and vowed 'all necessary measures,' with spokesman Turki al-Malki calling the barrage a 'serious escalation.' The Houthis had also declared a Red Sea blockade of Saudi-linked shipping.",
      summary:
        "Per §3.5.5 this is the first open two-way Saudi-Yemen war of the conflict — a would-be sanctions partner converted into a live combatant, a second energy front alongside Hormuz, and the Yanbu reroute that hedged a closed strait now itself under fire.",
      impact:
        "The energy-infrastructure and coalition-cohesion clocks move together: an open war on the oil market's most-watched export geography keeps Brent above $100 and loads the rupture tail on a second export-node strike or a Yanbu-reroute shutdown.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Breitbart / Trading Economics / The Media Line / CBS News',
      event:
        "Oil broke the threshold this series has tracked for weeks: Brent crude crossed $100 and reached a session high of $101.58 — its first move above $100 since July and above $101 since May — driven by the widening war, fresh US tanker strikes near Kharg and firmer Chinese demand; Goldman's $120 rupture tail into 2027 stayed on the board.",
      summary:
        "Per §3.5.5 quantify the move: from a $99.46 session high on Day 194 to $101.58 in one session, the market cleared the triple-digit line to the upside on a stock base already drawn thin by months of throttled Hormuz flow.",
      impact:
        "The energy-infrastructure clock stays dominant and the rupture tail loaded: with Brent already above $100, a second export-node strike, a laden-tanker loss, or a named Chinese bank now prices $120-plus rather than $100.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'GlobalSecurity / IRNA / Washington Times',
      event:
        "Iran consolidated its coming Hormuz 'restricted zone' into a claimed enforcement campaign: via IRNA the IRGC said it had targeted two US vessels (naming the destroyers DDG-119 and DDG-53), eight tankers and ten 'violating' ships in the zone and fired ballistic missiles at Jordan's Al Azraq air base, warning crews near Kuwaiti and Bahraini ports to abandon their vessels, in response to US strikes on five Iranian tankers.",
      summary:
        "Per §3.5.3 hold the account as Tehran's: no operator, flag state, protection-and-indemnity club or maritime authority has corroborated the claimed strikes, so the value is the intent it signals — to reframe Hormuz as contested legal space and interdict at will — not a verified count.",
      impact:
        "The energy-infrastructure clock moves: a declared Iranian zone backed by a claimed strike campaign and abandon-ship warnings deepens the throughput collapse and hands the IRGC a pretext to seize or strike a crewed vessel — a mass-casualty and higher-oil trigger in one.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / VINnews / Amnesty International / Euronews / PBS',
      event:
        "The connected fronts stayed lethal and deadlocked: Israeli air strikes killed at least twelve in southern Lebanon (Kfar Reman, incl. children and medics); Israeli officials said Hamas was rebuilding its military presence in Gaza despite the ceasefire; Amnesty's execution count rose to at least 36 since the war began (78 under sentence of death, at least five children); the IAEA stayed 'completely blind'; and the major-Chinese-bank sanction stayed pinned behind the September 24 Xi summit as Washington eyed smaller banks.",
      summary:
        "Per §3.5.6 the standing priors hold unresolved — the unverified nuclear stockpile, the Gaza sequencing deadlock, the Lebanon-gap and Israeli-independence priors — and per §3.1 the deepening execution wave stays outside the war toll.",
      impact:
        "The humanitarian-escalation and negotiation-capacity clocks move: the war stays lethal on the Lebanon, Gaza and human-rights vectors while the economic D-Day stays deferred, each track formalized into standing leverage rather than resolved.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 195 — an eighth day with no verified new US combat casualty. The IRGC claimed via IRNA that it struck two US vessels (DDG-119 and DDG-53) alongside eight tankers and ten 'violating' ships in the Hormuz restricted zone, but no operator, flag state, protection-and-indemnity club or maritime authority has corroborated any US-vessel hit; per §3.5.3 the claim stays logged and uncounted. The 18th DCAS death stays unconfirmed as hostile, Trump's 'per ship' rule untriggered, and Iran's claim of American service members killed stays denied and uncounted. The escort corridor (~8-9 mb/d) runs amid live fire with the USS George Washington on station; the blockade holds at eighty-six vessels rerouted, three disabled, two boarded.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 keep the combat figure and flag DCAS. Day 195 added no US count — an eighth quiet day — but the exposure profile hardened: the IRGC's move to interdict shipping in a self-declared restricted zone is now a broad claimed campaign against named US destroyers, uncorroborated but signaling a doctrine that against a crewed ship draws Trump's reprisal rule. The escort corridor (~660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d) runs amid live fire; the $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of the November midterms, now against a war that has opened a two-way Saudi-Yemen front and pushed oil above $100.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel stayed offstage on the US-Iran maritime fight and the Saudi-Houthi war while its own fronts stayed hot but produced no new Israeli count: Israeli strikes killed at least twelve in southern Lebanon (Kfar Reman, incl. children and medics), and Israeli officials said Hamas was rebuilding its military presence in Gaza despite the ceasefire. The standing Lebanese dead are logged under 'other,' not folded into the war cumulative.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Israeli toll on Day 195. Israel's own fronts stayed hot but produced no new Israeli count: the Gaza roadmap holds deadlocked — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, Netanyahu's office opposes the plan, and Israeli officials now say Hamas is rebuilding its military presence despite the ceasefire, with 1,100-1,200+ Palestinians killed since the October 2025 ceasefire, a connected theater the series does not fold into the war cumulative. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel continues to act on its own clock, offstage on a day whose escalation ran through the oil tape, Riyadh and the strait.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No update to the official war toll; casualties from the Iranian tankers the US struck near Kharg stay unreleased. The rights thread deepened: Amnesty now counts at least 36 people executed since the February 28 start of the war on politically-motivated charges, with at least 78 under sentence of death and at risk — including at least five who were children at the time of the alleged offence — kept out of the war toll per §3.1; Iran HRM reports a September surge. The contested September 1 Kuhestak wedding strike carries per §3.1 dual-sourcing (NYT-corroborated US bomb; Iranian-source toll of up to five killed and 68+ wounded not folded into MOH).",
      status:
        "The official Iranian war toll carries pending an update; Day 195 added no new war-front count. The movement was again on the rights thread, kept out of the war cumulative per §3.1: Amnesty now reports at least 36 people executed since the February 28 start of the war on politically-motivated charges after grossly unfair trials, with at least 78 under sentence of death and at risk — including at least five who were children at the time of the alleged offence and 41 arrested in relation to the January 2026 protests — and Iran HRM flagging a September surge. The contested civilian figure holds: the September 1 Kuhestak wedding strike is independently corroborated as a US-released bomb, but the toll of up to five killed and 68+ wounded remains an Iranian-source count not folded into the MOH aggregate. Cumulative HRANA stands at 3,636+ with its understatement caveat, Foundation ~3,468, MOH ~3,559 / 27,400+, US and Israeli estimates to 6,000+. The IAEA says it has been 'completely blind' for more than a year; ~440.9 kg of 60% plus ~184.1 kg of 20% HEU stays unverified and likely at Isfahan.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,300+ / 12,200+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 158+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia ~84 injured — 11 on Aug 7, 73 on Sep 8) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "The Saudi reprisal into Yemen opened the connected ledger's second live front: after the September 8 Houthi barrage (73 Saudi wounded, already counted), the Saudi-led coalition struck Taiz and Marib provinces, with Yemeni casualties from the reprisal unreleased. The Lebanon reprisal cycle turned lethal again — Israeli strikes killed at least twelve in Kfar Reman including two children and medics (Sep 7) plus four on Sep 6 — lifting the Lebanon Health Ministry toll past ~4,300 killed / 12,200+ wounded. The Gulf breakout holds at 33+ killed / 158+ wounded; the standing maritime, Bab al-Mandeb and Iraq tolls carry; the Houthi Red Sea blockade of Saudi-linked shipping threatens the Yanbu reroute.",
      status:
        "The 'other' ledger's live fronts multiplied on Day 195. The Saudi-led coalition struck Taiz and Marib in Yemen in reprisal for the September 8 Houthi barrage (73 Saudi wounded, already counted), opening open two-way war with Yemeni casualties unreleased; the Houthi Red Sea blockade of Saudi-linked shipping now directly threatens the Yanbu pipeline reroute. The Lebanon reprisal cycle turned lethal again: Israeli air strikes killed at least twelve in Kfar Reman including two children and medics (Sep 7) and four more on Sep 6, lifting the Lebanon Health Ministry toll past ~4,300 killed / 12,200+ wounded (the Wikipedia series 3,371 / 10,129 lags). Per §3.5.3 the IRGC's claimed strikes on US vessels and tankers, the Houthi Saudi-warship claim and Iran's downed-MQ-9 claims stay logged, not counted. Hormuz throughput holds near a fifth of pre-war flow with four-to-six vessels a day, many AIS-dark; Iran's coming restricted zone would sharpen the squeeze. The Gulf breakout holds 33+/158+; Bab al-Mandeb Tihamah (Aug 12) holds at least six killed / ten wounded; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+.",
    },
  },
  exec:
    "Day 195 was the day two of the war's loaded thresholds gave way at once. Oil broke through the ceiling the market had watched for weeks: Brent crossed $100 and touched a session high of $101.58 — its first move above $100 since July and above $101 since May — driven by the widening war and firmer Chinese demand (Breitbart, Trading Economics, The Media Line). And the Saudi front the 2022 truce had frozen tipped into open two-way war: after the September 8 Houthi barrage that wounded 73 and set Aramco's Jazan refinery alight, the Saudi-led coalition struck back into Yemen — hitting Taiz and Marib — and vowed 'all necessary measures,' the reprisal Day 194 had only promised (Al Jazeera, Euronews, Daily Caller). At Hormuz the IRGC consolidated its coming 'restricted zone' into a claimed campaign, saying via IRNA it had struck two US vessels, eight tankers and ten 'violating' ships and warning crews near Kuwaiti and Bahraini ports to abandon vessels — claims no operator, flag state or underwriter has corroborated (GlobalSecurity/IRNA). The connected fronts stayed lethal: Israeli strikes killed at least twelve in southern Lebanon including children and medics, Israeli officials said Hamas was rebuilding its military presence in Gaza despite the ceasefire, and Amnesty's toll rose to at least 36 executed since the war began with 78 under sentence of death (Al Jazeera, VINnews, Amnesty International). The IAEA stayed 'completely blind' and the major-Chinese-bank sanction stayed pinned behind the September 24 Xi summit. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 3.",
  implications: [
    {
      title: 'Two thresholds fall at once — Brent breaks $100 and the Saudi front turns to open war',
      body:
        "The two loads Day 194 left cocked both fired on Day 195. Oil first: Brent crossed $100 and reached a session high of $101.58, its first print above $100 since July and above $101 since May, on the widening war and firmer Chinese demand (Breitbart, Trading Economics, The Media Line). Per §3.5.5 quantify the move — from a $99.46 session high on Day 194 to $101.58 in one session, the threshold this series has tracked for a month cleared to the upside on a stock base already drawn thin by months of throttled Hormuz flow. Second, the Saudi reprisal Day 194 had only promised materialized: after the September 8 Houthi barrage that wounded 73 and lit the 400,000-barrel-a-day Jazan refinery, the Saudi-led coalition struck Taiz and Marib and vowed 'all necessary measures,' Turki al-Malki calling the barrage a 'serious escalation' (Al Jazeera, Euronews, Daily Caller). Under the multi-clock framework the energy-infrastructure and coalition-cohesion clocks now move together: a would-be sanctions partner is a live combatant, the Houthi Red Sea blockade threatens the Yanbu reroute that hedged a closed Hormuz, and the second energy front is open two-way war. Analytical judgment: the two developments compound — an open Saudi-Yemen war on the oil market's most-watched export geography is exactly the kind of event that keeps Brent above $100, and a second strike on an export node or a laden-tanker loss now prices the rupture tail Goldman put at $120.",
    },
    {
      title: 'Hormuz institutionalizes — a claimed enforcement campaign against an IAEA gone blind and a bank blow still deferred',
      body:
        "Iran answered the US tanker strikes by consolidating its 'restricted zone' from a promise into a claimed campaign. Via IRNA the IRGC said it had targeted two US vessels, eight tankers and ten 'violating' ships in the zone and fired ballistic missiles at Jordan's Al Azraq air base, warning crews near Kuwaiti and Bahraini ports to abandon their vessels (GlobalSecurity/IRNA, Washington Times). Per §3.5.3 hold the account as Tehran's: no operator, flag state, protection-and-indemnity club or maritime authority has corroborated the strikes, so the analytical value is the intent it signals — to reframe Hormuz as contested legal space and interdict at will — not a verified body count. Running beneath it, the nuclear file stayed frozen open: Grossi's IAEA remains 'completely blind' for more than a year, over twenty sites and ~440 kg of 60% uranium unverified, with Tehran conditioning access on a final deal (Euronews). Under the multi-clock framework the negotiation-capacity clock moves without advancing — Pezeshkian again floats reciprocity with no US counterparty — while the financial clock stays stopped short: the major-Chinese-bank sanction that would sever the oil-for-money channel stays pinned behind the September 24 Xi summit as Washington hits smaller banks instead (PBS, Fortune). Analytical judgment: strait, stockpile and sanction are all being formalized into standing leverage rather than resolved, each raising the cost of the eventual off-ramp and each one incident from a step-change.",
    },
    {
      title: 'Taiwan: the rupture the buffer was built to survive, now priced in',
      body:
        "Per §3.5.10 no development aimed at Taipei landed on Day 195, but the day the market broke $100 is the day Taiwan's energy exposure stopped being hypothetical. Roughly a third of Taiwan's LNG still transits Hormuz (~8 Mt of Qatari gas), and the reroute logic that would move Gulf crude and gas around a closed strait runs through the Red Sea and Yanbu infrastructure the Houthis are now striking and blockading (The Media Line, Al Jazeera). Per §3.5.5 the arithmetic is unchanged and unforgiving: 95-99% import dependence, about eleven days of gas cover against some 120 of oil, in the month Taipei itself flagged its buffer runs down. Brent above $100 is the price signal the hedge was meant to pre-empt, and the two forcing events on Taiwan's horizon — the Chinese-bank designation and the IAEA access question — both sit the same September 24 window (Fortune, Euronews). Analytical judgment: with the war now burning at both ends of the Arabian Peninsula and the market pricing the rupture, the geographic escape valve Taiwan's buffer was built to exploit is closing in real time. The banked hedge — a shift toward ~60% US crude and a 25%-US-LNG-by-2029 goal — is the right direction, but Day 195 is the reminder that the transition window and the war's widening are now running openly against each other, with the oil tape keeping score.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. An eighth quiet day for US casualties: the IRGC claimed strikes on two US destroyers (DDG-119, DDG-53) and eight tankers in the Hormuz restricted zone, but no operator, flag state, P&I club or maritime authority has corroborated any US-vessel hit — the claim stays logged and uncounted. Iran's earlier claim of American service members killed stays denied and uncounted; Trump's 'per ship' rule stays untriggered. The blockade holds at ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire with the USS George Washington on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess ahead of the November midterms.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on the US-Iran maritime fight and the Saudi-Houthi war while its Gaza campaign held deadlocked and lethal — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, Netanyahu's office opposes the plan, and Israeli officials now say Hamas is rebuilding its military presence despite the ceasefire (a connected theater, not folded into the war cumulative; 1,100-1,200+ killed since the October 2025 ceasefire). The standing Lebanese dead are logged under 'other.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update; no new war-front count, and casualties from the Iranian tankers the US struck near Kharg stay unreleased. The day's movement was on the rights thread, kept out of the war toll per §3.1: Amnesty now counts at least 36 people executed since the February 28 start of the war on politically-motivated charges after grossly unfair trials, with at least 78 under sentence of death and at risk — including at least five who were children at the time of the alleged offence and 41 arrested over the January 2026 protests — and Iran HRM flagging a September surge. The Sep 1 Kuhestak wedding strike stays independently corroborated as a US-released bomb, but the toll — up to five killed, 68+ wounded — remains an Iranian-source count not folded into the MOH aggregate. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. IAEA 'completely blind' for more than a year; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan (§3.5.3).",
    other:
      "The spillover ledger's live fronts multiplied: the Saudi-led coalition struck Taiz and Marib in Yemen in reprisal for the September 8 Houthi barrage (73 Saudi wounded, already counted), opening open two-way war with Yemeni casualties unreleased, while the Houthi Red Sea blockade of Saudi-linked shipping threatens the Yanbu reroute. The Lebanon reprisal cycle turned lethal again — Israeli strikes killed at least twelve in Kfar Reman including two children and medics (Sep 7) plus four on Sep 6 — lifting the Lebanon Health Ministry toll past ~4,300 killed / 12,200+ wounded (Wikipedia 3,371 / 10,129 lags). Per §3.5.3 the IRGC's claimed strikes on US vessels and tankers, the Houthi Saudi-warship claim and Iran's downed-MQ-9 claims stay logged, not counted. Hormuz throughput near a fifth of pre-war flow with four-to-six vessels a day (many AIS-dark); the coming restricted zone would sharpen the squeeze; war-risk premiums multiples above normal. Gulf breakout 33+/158+; Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded; maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+.",
  },
};

export default data;
