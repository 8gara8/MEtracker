import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction turns de-escalating for the first time since the Day 121 base strikes. The mutual US–Iran kinetic standdown agreed late on Day 122 — 'We decided to stop all the kinetic activity,' a senior US official said — held into Day 123, and the two governments' technical delegations are set to meet in Doha today on the Strait of Hormuz (Times of Israel, Euronews, Axios). The base-on-base exchange that was the war's most dangerous mode has paused; vessels are moving and Brent sits near $72.68 (Trading Economics, RFE/RL). Skeptical counter per §3.5.3: the de-escalation rests on a contested premise. Trump says Iran 'requested' the meeting and asked for the halt; Iran's Tasnim called that 'an absolute lie,' Deputy FM Gharibabadi said the Doha talks are 'not confirmed' until conditions are met, and FM Araghchi insisted the Strait stays under Iran's 'total oversight and management' for 30 days. A halt under 48 hours old whose very existence one party disputes is a thin floor.",
      risk7d:
        "Seven-day risk steps down from critical to conditional — conditional on whether the Doha track converts the standdown into a durable Hormuz-operations protocol before it frays. The strikes stopped on both sides, the fourth US round drew no fifth, and the venue moved from a postponed Geneva nuclear session to a Qatar session scoped to shipping management (CBS News, NPR). But the conditions are unmet by Iran's own account, hardliners are now pressing nuclear deterrence as a non-negotiable precondition, and the General License architecture still expires August 21 (NPR). The risk is no longer a live exchange; it is a fragile pause that either consolidates in Doha or reverts to the tit-for-tat that produced four strike rounds in 72 hours.",
      spillover:
        "Spillover eases from critical to conditional as the Gulf-base vector goes quiet but the Lebanon vector heats. No new strikes hit Kuwait or Bahrain; Bahrain reported only a residential building near its airport damaged in the June 28 salvo, with no deaths, and Kuwait intercepted two ballistic missiles (Al Jazeera, Gulf News). On the Blue Line §3.5.6 governs and worsens: Israel destroyed a 200-metre Hezbollah tunnel network with hundreds of weapons and four launch shafts, kept striking Nabatieh, and is reported 'bracing for attack' as Qassem holds the framework 'null and void' and Beirut sees mass protests (Times of Israel, The Cradle, Al Jazeera). The Gulf cooled; Lebanon did not.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Times of Israel / Euronews / Axios / NPR',
      event:
        "The mutual US–Iran kinetic standdown agreed late on Day 122 held into Day 123, and the two governments' technical delegations were set to meet in Doha, Qatar today — a session pulled from a postponed Geneva nuclear round and refocused on management of shipping in the Strait of Hormuz and how to de-escalate; Qatar and Pakistan are mediating",
      summary:
        "⭐ The inflection: 72 hours after the war's first direct Iran–US base strikes, both sides stopped firing and returned to the table, vindicating the Day 122 read that the salvo was calibrated leverage, not the opening of a campaign (Times of Israel, Axios).",
      impact:
        "The negotiation-capacity clock improves and becomes the dominant variable. A standdown plus a scheduled technical session is the first de-escalatory motion since the base-on-base exchange began; whether it consolidates is now the war's central question.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CBS News / Al Jazeera / NPR',
      event:
        "The talks' framing splintered at the root: Trump said Iran 'requested' the Doha meeting and had asked for the halt, while Iran's Tasnim news agency called the account of a Trump–Iran call 'an absolute lie,' Deputy FM Gharibabadi said technical talks were 'not confirmed' until conditions are met, and FM Araghchi, in Baghdad, said the Strait would stay under Iran's 'total oversight and management' for the next 30 days",
      summary:
        "Skeptical counter per §3.5.3: a halt both sides confirm sits atop a diplomatic narrative they do not share — supplicant-Iran in Washington's telling, conditions-first sovereignty in Tehran's (CBS News, Al Jazeera).",
      impact:
        "The negotiation-capacity clock is improving but unstable. The gap between 'Iran asked for talks' and 'talks are not confirmed' is itself the information; Doha either closes it into a protocol or exposes it as theatre.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / RFE/RL / Al Jazeera',
      event:
        "The energy tape steadied as the shooting paused: prompt-month Brent for August traded near $72.68, the lowest since February 27, and US Energy Secretary Chris Wright said flows through Hormuz were close to pre-war with at least 20 million barrels exiting in 24 hours; against that, one open-source tracker logged Strait traffic collapsing toward single digits of pre-war during the strike days, a divergence the daily tape masks",
      summary:
        "Per §3.1 the divergence is itself the signal: the price and the export volume say reopening, the transit count during the strikes said disruption, and both are lagging, noisy witnesses to a corridor whose rules are now being negotiated (Trading Economics, RFE/RL).",
      impact:
        "The energy-infrastructure clock holds rather than improves. A halt steadies the tape, but the structural question — who administers passage — is exactly what Doha is for; the number is not the all-clear.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / The Cradle / Al Jazeera / Lebanese Health Ministry',
      event:
        "On the Lebanon front the framework hardened into a dead letter as the fighting continued: Israel destroyed a 200-metre Hezbollah underground tunnel network — hundreds of weapons, dozens of drones, warheads and four launch shafts aimed at Israel — and kept striking Nabatieh, with Lebanon's Health Ministry reporting two wounded by an Israeli stun grenade; Naim Qassem held the Washington framework 'null and void' and a 'surrender of sovereignty' as mass protests blocked roads in Beirut and Israel was reported 'bracing for attack'",
      summary:
        "Skeptical counter per §3.5.6: the front the optimists read as the war's first political movement is now a one-signatory document the armed party rejects, with Israeli operations continuing regardless (Times of Israel, Al Jazeera).",
      impact:
        "The humanitarian and coalition-cohesion clocks stay critical. A deal a Lebanese state cannot enforce against Hezbollah cannot stand up the LAF zones; the Blue Line is the vector most likely to undo the Gulf standdown.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'NPR / ISIS / Al Jazeera',
      event:
        "The nuclear sequencing dispute widened rather than closed: IAEA chief Grossi reiterated that inspections of Iran's enrichment sites are part of the interim deal and 'going to happen,' while Iran insisted any visit comes only after a final agreement and the lifting of sanctions, and Iranian hardliners began openly demanding nuclear deterrence as a non-negotiable precondition; the ~440.9 kg of 60% HEU at the Esfahan tunnel complex remains unverified since June 2025",
      summary:
        "The carry that is hardening: the inspection question is no longer just sequencing but leverage, with the hardline camp attaching a deterrence demand to the file (NPR, ISIS).",
      impact:
        "The active-deadline clock holds at the August 21 window. The Doha track is scoped to Hormuz, not enrichment; the nuclear file is the parallel clock that can poison the shipping talks if hardliners prevail.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (kinetic standdown in effect; no new US casualties since the June 28 base strikes, which a US official said caused none; no fifth US strike round)',
      status:
        "No new US casualties. The mutual standdown agreed late Day 122 held: no new US strikes and no new Iranian strikes on US posture. The June 28 IRGC salvo on Ali Al Salem in Kuwait and the Fifth Fleet HQ at Port Salman in Bahrain caused no US casualties — Kuwait intercepted two ballistic missiles, Bahrain reported only a damaged residential building near its airport — and US delegations are headed to Doha for technical talks on the Strait of Hormuz.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: "+0 verified Israeli (operations shifted to Lebanon — a 200-metre tunnel network destroyed; continued Nabatieh strikes; Israel reported 'bracing for attack' after Hezbollah's rejection)",
      status:
        "No verified new Israeli casualties. Israeli forces destroyed a 200-metre Hezbollah tunnel network in southern Lebanon and kept striking Nabatieh; Israel is reported 'bracing for attack' after Naim Qassem held the Washington framework 'null and void' and ruled out 'normalisation,' demanding unconditional withdrawal.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (kinetic standdown; no new US strike round; weaponization file unmoved — ~440.9 kg of 60% HEU unverified since June 2025)',
      status:
        "No verified new mass toll under the standdown. The nuclear file held in dispute: Grossi says interim-deal inspections are 'going to happen,' Iran says only after a final agreement, and hardliners now press nuclear deterrence as a precondition; the ~440.9 kg of 60% HEU at the Esfahan tunnel complex stays unverified since June 2025. Off the war ledger, HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera); Bahrain + Kuwait struck June 28 (Bahrain: residential building near airport damaged, no deaths; Kuwait: two ballistic missiles intercepted); Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+~2 wounded Lebanon (Nabatieh stun-grenade injuries per Lebanese Health Ministry); Gulf-base vector quiet under the standdown',
      status:
        "Lebanon's cumulative toll held near ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera), with two wounded by an Israeli stun grenade at Nabatieh as the tunnel-clearing operation continued. The Gulf-base vector went quiet under the standdown: Bahrain's June 28 damage was a residential building near the international airport with no deaths, and Kuwait intercepted two ballistic missiles. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
    },
  },
  exec:
    "Day 123 steps back from the war's most dangerous mode. The mutual US–Iran kinetic standdown agreed late on Day 122 has held, and the two governments' technical delegations are set to meet in Doha today — a session pulled from a postponed Geneva nuclear round and refocused on the Strait of Hormuz and de-escalation (Times of Israel, Euronews, Axios). Vessels are moving again and Brent sits near $72.68 for August (Trading Economics, RFE/RL). Skeptical counter per §3.5.3: the de-escalation rests on a contested premise. Trump says Iran 'requested' the meeting and asked for the halt; Iran's Tasnim called that 'an absolute lie,' Deputy FM Gharibabadi said the Doha talks are 'not confirmed' until conditions are met, and FM Araghchi insisted the Strait stays under Iran's 'total oversight and management' for the next 30 days (CBS News, Al Jazeera, NPR). Lebanon cut the other way: Israel destroyed a 200-metre Hezbollah tunnel network and kept striking Nabatieh as Naim Qassem held the Washington framework 'null and void' amid mass Beirut protests (Times of Israel, The Cradle, Al Jazeera). The nuclear sequencing dispute held — Grossi says interim-deal inspections are 'going to happen,' Iran says only after a final deal (NPR, ISIS). 30-day ceasefire probability rises to 57 from 52; direction is de-escalating because both sides stopped the base-on-base exchange and returned to the table — conditionally, because the halt is under 48 hours old, the talks' existence is disputed, and Lebanon is escalating in parallel.",
  implications: [
    {
      title:
        "The calibrated-salvo read held — the standdown and the Doha session confirm Day 122's base strikes were leverage, not a campaign — but the off-ramp runs through a framing both sides dispute",
      body:
        "Day 122 closed with the war's first direct Iran–US base-on-base exchange; Day 123 opens with both sides halted and technical delegations bound for Doha (Times of Israel, Axios). That sequence vindicates the Day 122 skeptical counter per §3.5.3: the IRGC salvo on Kuwait and Bahrain was a calibrated, leverage-seeking move bundled with a demand, not the opening of a general war. Quantify the reversal per §3.5.5: four US strike rounds and one IRGC base salvo in roughly 72 hours, then zero strikes in the 24 hours since the standdown. But the off-ramp is narrow and contested. Trump frames Iran as the supplicant who 'requested' the meeting and 'asked' for the halt; Tehran rejects the framing outright — Tasnim calls the account 'an absolute lie,' Gharibabadi says the talks are 'not confirmed,' and Araghchi claims 30 days of Iranian 'total oversight' of the Strait (CBS News, Al Jazeera). Analytical judgment under the multi-clock framework: the negotiation-capacity clock has improved for the first time since the base strikes and is now the dominant variable — but a halt under 48 hours old, whose existence one party will not concede, is the thinnest possible foundation, and Doha is where it either sets or cracks.",
    },
    {
      title:
        "The real prize in Doha is who administers Hormuz — and Iran's 'total oversight' framing is the toll-institutionalization prior resurfacing as a negotiating position",
      body:
        "The Qatar session is scoped, by both sides' accounts, to 'management of shipping in the Strait of Hormuz' — not the nuclear file, which stays parked behind the postponed Geneva round (NPR, CBS News). That scope is the whole game. Per §3.5.6, the standing toll-institutionalization prior — that any Iranian role in 'administering' passage hardens into permanent leverage and revenue — is no longer hypothetical: Araghchi has put 'total oversight and management' for 30 days on the record as Tehran's opening position (Al Jazeera). The US enters arguing safe passage is a treaty obligation under the MoU's Article 5, not a concession to be managed. Quantify the stakes per §3.5.5: roughly a fifth of seaborne oil and a third of traded LNG transit the Strait; Brent near $72.68 and Wright's claim of 20 million barrels in 24 hours say the corridor is functioning, even as one tracker logged transit collapse during the strike days (Trading Economics, RFE/RL). Analytical judgment: Doha succeeds if it yields a de-confliction protocol that keeps the Strait open without codifying Iranian control, and fails if it ratifies a toll in everything but name — the gap between those outcomes is the most consequential line in the war right now.",
    },
    {
      title:
        "Taiwan: the standdown is a reprieve, not an all-clear — and the corridor's governance now on the Doha table is precisely what a price-taker cannot hedge",
      body:
        "For Taiwan, Day 123 is the best tape in a week and the least reassuring structure. Brent eased near $72.68, no LNG cargo has been hit in 123 days, Gulf exports run near pre-war, and cover through September plus TSMC's 2026 CapEx near 8% carry (Trading Economics, RFE/RL). Skeptical counter per §3.5.3: the price relief is real and the strikes have stopped. But §3.5.6 reasserts the exposure the number hides — roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas cover, and the precise question on the Doha table is who controls that passage. A price-taker at the end of the chokepoint has no vote in whether 'total oversight' becomes the operating rule. Quantify per §3.5.5: Qatar and the UAE supplied ~35% of Taiwan's LNG in 2025, and Taipei took no Qatari or Emirati cargoes in April or May. Analytical judgment: the durable hedges remain the ones indifferent to today's tape and to Doha's outcome — diversification toward US and Australian cargoes (the goal of 25% US LNG by 2029) and the Maanshan and Kuosheng nuclear restarts (2028–2029). A standdown buys time; only non-Hormuz supply buys security.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown. The June 28 IRGC salvo on Ali Al Salem (Kuwait) and the Fifth Fleet HQ at Port Salman (Bahrain) caused no US casualties; Kuwait intercepted two ballistic missiles and Bahrain reported a damaged residential building near its airport. No fifth US strike round; delegations headed to Doha.",
    israel:
      "No verified new Israeli casualties. Operations shifted to Lebanon — a 200-metre Hezbollah tunnel network destroyed, continued Nabatieh strikes; Israel reported 'bracing for attack' after Qassem held the framework 'null and void.'",
    iran:
      "No verified new mass toll under the standdown. Nuclear file in dispute — Grossi 'going to happen' vs Iran 'only after a final deal,' hardliners pressing deterrence; ~440.9 kg of 60% HEU unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "Lebanon held near ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry), +2 wounded at Nabatieh. Gulf-base vector quiet: Bahrain's June 28 damage was a residential building near the airport (no deaths), Kuwait intercepted two missiles. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
  },
};

export default data;
