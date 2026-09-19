import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating, and the escalation crossed a geographic threshold. The Houthis struck the Saudi capital for the first time since the fighting resumed — a fuel-depot fire on an Aramco-branded tank beside Riyadh's King Khalid International Airport, the capital's first air-raid alert of the renewed war, and the airport at maximum disruption — while a second operation targeted the Aramco facility at Yanbu. Yemen's military spokesman said both answered a Saudi attempt to strike Sanaa, which Riyadh has not confirmed. Washington meanwhile ended its membership of the UN Human Rights Council a day after the Fact-Finding Mission reported. Nothing de-escalated; the only softening variable is that both Iranian principals will be in New York this week.",
      risk7d:
        "Seven-day risk holds extreme with its centre of gravity on Tuesday. Trump meets the leaders of all six Gulf Cooperation Council states in New York on a postwar strategy still being drafted, three days after the host government of that coalition had its capital hit and with Riyadh's standing request for direct American action against the Houthis now backed by pictures. Beneath that the physical position worsened: Yanbu struck a second time in nine days with no crude loaded there since September 11, Petroline offline since September 10, Salalah dormant for a seventh day, Bab al-Mandeb held without formal closure. The escort corridor still carries roughly 40 vessels and about 14 million barrels a day, and Iran has begun claiming rather than denying strikes inside it.",
      spillover:
        "Spillover holds critical and gained an institutional dimension. The American exit from the Human Rights Council converts a contested finding into a contested forum, leaving the Minab and Lamerd conclusions on the record and citable before international courts including the ICC while removing the venue in which Washington could have contested them. The Gulf axis consolidates in New York instead, alongside Pezeshkian and Araghchi under travel restriction, days before a September 24 US-China summit at which Wang Yi has said the Iran war will dominate and a major Chinese bank designation remains pinned. The humanitarian axis carries without update: 112,000 displaced inside Yemen over two weeks, nearly 3,000 arrivals in Djibouti, and IOM warning its stocks would be depleted very soon.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'NBC News / France 24 / Al Jazeera / PBS NewsHour / Times of Israel / Kurdistan24',
      event:
        "Yemen's Houthis struck Riyadh for the first time since the fighting with Saudi Arabia resumed. Firefighters extinguished a blaze on a fuel tank bearing the Aramco logo at a depot near King Khalid International Airport, residents reported black smoke and flames over the area, and the airport was listed at the maximum disruption level with long delays and several cancelled flights. Military spokesman Yahya Saree said the Yemeni Armed Forces carried out two operations using a large number of ballistic missiles, cruise missiles and drones — the first against sensitive sites in Riyadh, the second against the Aramco facility at Yanbu. The Saudi-led coalition said its air defences destroyed a ballistic missile fired toward Riyadh early Saturday and foiled attacks on Bish and Farasan in the southwest, Taif in the west and Yanbu on the Red Sea coast. The capital issued its first air-raid alert of the renewed war.",
      summary:
        "Per §3.1 the coalition's interception claim and the Houthi claim of successful strikes on sensitive sites are carried together and cannot be reconciled from open reporting; the depot fire is the one uncontested element, and neither side has published a casualty figure. Per §3.5.11 this is the day's single pivotal item: the Houthis have hit Saudi oil facilities, southern towns and — by Riyadh's account — attempted Mecca, but the capital is a new rung.",
      impact:
        "Saudi Arabia enters Tuesday's meeting with Trump as a coalition partner whose capital has been struck, which strengthens its case for direct US action against the Houthis and raises the cost to Washington of continuing to refuse it.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / France 24 / PBS NewsHour / Israel Hayom',
      event:
        "The Houthis said both operations were a response to a Saudi attempt to strike Sanaa, with residents of the Yemeni capital reporting blasts. Riyadh has not confirmed conducting strikes on Sanaa and has published no account of the exchange. The claim lands after a week in which the Houthi military spokesman counted 26 Saudi strikes in 24 hours, down from more than 50 earlier in the week and around 300 across the week, and after Saudi Arabia said it had intercepted a Houthi drone aimed at Mecca. Saudi Arabia had earlier vowed to respond firmly to Houthi attacks that wounded 13 people in the kingdom's south.",
      summary:
        "Per §3.1 the Sanaa strike is carried as the Houthi account and as the stated justification for the Riyadh and Yanbu operations, not as an established fact; Riyadh's silence is consistent with its refusal to publish tallies, evidence for the Mecca claim, or target sets throughout this campaign. If confirmed it retires the unstruck-Sanaa thread that has held since the Saudi campaign opened.",
      impact:
        "A capital-for-capital exchange removes the last informal restraint in the Saudi-Houthi track and makes each side's tempo a function of the other's, independently of anything decided in New York.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Kpler / Al Jazeera / Windward / Energy News Beat',
      event:
        "Yanbu was targeted for the second time in nine days. The port is the Red Sea terminus of the East-West Crude Oil Pipeline, which has been offline since the September 10 attacks on pumping stations; Kpler reports no crude has loaded at Yanbu since September 11. Pre-attack throughput ran at roughly 5.5 million barrels a day, of which about 4.5 million was exported through the port. Aramco is building a bypass around the damaged sections with full repairs estimated at four to six weeks, and Kpler expects the bypass to restore only about half of exports within a month. Riyadh's stated target remains half of pipeline capacity within days and full operations within six weeks. Satellite imagery meanwhile puts Saudi movements through the Strait of Hormuz at about 2.8 million barrels a day over six days, against roughly 700,000 in August.",
      summary:
        "Per §3.5.3 Riyadh's within-days figure is cited as an official target rather than an independent assessment, and Day 205 adds a second reason to discount it beyond Kpler's repair estimate: a publicly announced restart date on a terminal that has now been attacked twice is a targeting cue as much as a timeline. Per §3.5.5 the Hormuz figure is the quantified counterpart — a fourfold increase in six days.",
      impact:
        "The Red Sea bypass and the Hormuz corridor are no longer alternatives but a single dependency: with Yanbu unusable and under fire, essentially the whole Saudi export position now transits the waterway Iran claims to be attacking.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'US State Department via Press TV / Kayhan / WANA / UNN / NewsCord; OHCHR',
      event:
        "The United States ended its membership and participation in the UN Human Rights Council, one day after the Independent International Fact-Finding Mission on Iran reported reasonable grounds to believe US forces committed the war crime of indiscriminate attack in the February 28 strikes on the Shajareh Tayyebeh Primary School in Minab and a sports complex at Lamerd. The State Department cited what it called anti-American rhetoric and the Council's accommodation of repressive governments. Iran's deputy foreign minister for legal and international affairs, Kazem Gharibabadi, said Washington cannot escape responsibility by withdrawing and that history will not forget. The Mission's parallel finding that Iranian authorities committed crimes against humanity in the 2025-26 protest crackdown stands alongside it. The Mission still presents to the 47-member Council in Geneva on Monday.",
      summary:
        "Per §3.1 rule 4 this item is flagged for sourcing: the announcement is attributed to the State Department and was carried widely, but the reporting reaching this brief is weighted toward Iranian state outlets and aggregators, with UNN and the NewsCord cross-outlet survey as the non-aligned checks. Per §3.5.6 it escalates the standing-not-evidence prior from disputing a body's credibility to exiting it, and the elevated Pentagon probe into Minab remains unpublished.",
      impact:
        "Withdrawal forecloses the forum without touching the finding: the conclusions stay on the record and citable at the ICC, and Washington has given up the seat from which it could have contested them.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Washington Post / The National / Boston Globe / Hoodline / Jerusalem Post',
      event:
        "Washington approved visas for President Masoud Pezeshkian and Foreign Minister Abbas Araghchi to attend the UN General Assembly high-level week in New York, under travel restrictions and a bar on purchasing certain American products. The approval places both Iranian principals in the same city and week as Trump's Tuesday meeting with the leaders of Saudi Arabia, the UAE, Qatar, Bahrain, Kuwait and Oman, reported as a session on a postwar Iran strategy still being drafted around regional containment of Iran and expanded normalisation between Israel and its neighbours. No US-Iran contact was announced. Reporting notes no sign that agreements to reopen the Strait of Hormuz or resume nuclear talks are close, and Trump's framing of a decision between annihilation and an alternative carries into the week.",
      summary:
        "Per §3.5.3 the visa approval is carried as an administrative decision and not as evidence of a diplomatic opening: the same administration approving the travel is the one publicly weighing a return to mass strikes, and the restrictions attached signal containment rather than engagement. Per §3.1 the postwar-strategy reporting is sourced to officials previewing the week and is unconfirmed as policy.",
      impact:
        "Physical proximity is the cheapest form of negotiation capacity, and it is the first structural improvement in that clock since Salalah lapsed — while remaining entirely unused unless one side moves.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7 alone.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 205 — an eighteenth consecutive day with no verified new US combat casualty. Day 205's US developments were institutional: the State Department ended US membership of the UN Human Rights Council a day after the Fact-Finding Mission reported, and Washington cleared visas for Pezeshkian and Araghchi to attend the General Assembly under travel restrictions.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the combat series against DCAS 18 / 687 all-cause and The Intercept's Pentagon figure of 410 killed or wounded since July 7; per §3.5.3 keep the combat figure and flag both divergences. The legal exposure deepened by a step rather than resolving: having disputed the Human Rights Council's credibility on Day 204, Washington has now left it, which removes the forum without removing the finding, and the elevated Pentagon probe into Minab remains unpublished against a Reuters-reported internal assessment of likely US responsibility. Roughly 40 ships a day transit Hormuz under US protection carrying about 14 million barrels, and Riyadh's request for direct American action against the Houthis now arrives with its capital struck. The Senate has not taken up the House's 220-204 war powers resolution, the $67B supplemental is unresolved, and AAA's record diesel print of $6.23 a gallon — up nearly 69% year on year — carries into the midterm cycle.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel stayed offstage for a seventh consecutive day — absent from the Riyadh and Yanbu strikes, from the Human Rights Council withdrawal and from the New York diplomacy — even though the administration's draft postwar strategy is reported to centre on expanded Israeli normalisation with its neighbours. Katz's Lebanon position carries unchanged; the Gaza ceasefire holds broadly with sporadic strikes.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. The seventh quiet day sharpens the same asymmetry: the Mission's indiscriminate-attack finding attaches to the United States alone on the coalition side, so Washington has now rejected it, left the body that produced it, and carried the whole legal exposure while Israel carries none of it. Lebanon's toll continues to accumulate outside the Iran-front ledger at roughly 4,300 killed and over 12,200 wounded since March, with the Lebanese army recording roughly 7,700 violations of the June 26 framework. Katz has tied withdrawal from the roughly 700 sq km security belt and the Ali al-Taher ridge to nationwide Hezbollah disarmament, warning that anyone approaching the ridge will be killed, with no territorial ambitions claimed. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold, and the normalisation element of the reported postwar strategy makes Israel a beneficiary of a settlement it is not party to negotiating.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official Iranian war toll on Day 205. GlobalSecurity's operational series records no confirmed Iranian ballistic or drone attack on a host state since the night of September 8-9, when twenty missiles were fired at Muwaffaq Salti — a pause now into its tenth day. Tehran's response to the American exit from the Human Rights Council was legal rather than kinetic: deputy foreign minister Kazem Gharibabadi said Washington cannot escape responsibility by withdrawing and that history will not forget. Silence on the Taeb report ran to a seventh day.",
      status:
        "The half-report strategy continues: Iranian outlets have amplified the Mission's US war-crime finding and the American withdrawal that followed it, while the same report's finding that Tehran's repression of the 2025-26 protests amounts to crimes against humanity — murder, imprisonment, torture and enforced disappearance as part of a systematic attack on civilians — remains uncovered. The rights thread carries in full in the casualty notes: at least 59 arbitrary executions documented between March 18 and the end of August, and 23 in four days in late August. Araghchi's conditions on any Hormuz reopening carry — conditional, and subject to compensation for the violation of the June memorandum — and he will now carry them to New York in person. The IAEA Board referral (23-3, eight abstentions) carries, with the Security Council still unable to seat a 1737 Committee chair or appoint a Panel of Experts over Russian and Chinese objections. The Supreme Leader has not been seen in roughly six months.",
    },
    other: {
      cumulative:
        'Yemen/Houthi-Saudi ~3,598 KIA · 10,804+ WIA across Lebanon (~4,300+/12,200+), Gulf states (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+)',
      delta:
        "No casualty figure was published by Riyadh or Sanaa for a third consecutive day, including for the Riyadh depot fire and the Yanbu operation, so the cumulative holds and the absence is the reporting gap. The Houthis claimed two operations with ballistic missiles, cruise missiles and drones against sensitive sites in Riyadh and the Aramco facility at Yanbu; the Saudi-led coalition said it destroyed a ballistic missile aimed at Riyadh and foiled attacks on Bish, Farasan, Taif and Yanbu. The Houthis said both answered a Saudi attempt to strike Sanaa, which Riyadh has not confirmed. Displacement carries at 112,000 inside Yemen over two weeks with nearly 3,000 arrivals in Djibouti and IOM warning stocks would be depleted very soon; no updated figure today. The IOM shipwreck toll of 13 dead and 14 missing stays held pending confirmation and out of the cumulative.",
      status:
        "Yemen remains the war's independent escalation generator and on Day 205 it produced the war's newest geography: the Saudi capital under fire and its main airport disrupted, with the fuel depot beside it burning. The Houthis hold Mokha, Mayun and the Hanish islands and the length of Yemen's Red Sea coast; Bab al-Mandeb carries about 12% of global trade, 11% of seaborne oil and 8% of LNG, with no formal closure declared and that rung still in reserve. Petroline stays offline since September 10 — 1,200 km, 7 mb/d nameplate — with Yanbu attacked twice in nine days and no crude loaded there since September 11. Saudi movements through Hormuz run about 2.8 mb/d over six days against roughly 700 kb/d in August, on top of the ~60 million barrels transferring ship-to-ship off Sohar. Iraq's reopening of two of three Iran crossings remains the theatre's only active de-escalation.",
    },
  },
  exec:
    "Day 205 put the war inside the Saudi capital. Yemen's Houthis struck Riyadh for the first time since the fighting resumed: firefighters extinguished a blaze on an Aramco-branded tank at a fuel depot beside King Khalid International Airport, residents reported black smoke and flames, and the airport ran at the maximum disruption level with long delays and cancellations (NBC News, France 24, Al Jazeera). Military spokesman Yahya Saree claimed two operations using ballistic missiles, cruise missiles and drones — sensitive sites in Riyadh and the Aramco facility at Yanbu — and said both answered a Saudi attempt to strike Sanaa. The Saudi-led coalition said its defences destroyed a missile aimed at Riyadh and foiled attacks on Bish, Farasan, Taif and Yanbu; it published no casualty figure and has not confirmed hitting Sanaa. Yanbu is the point: the East-West pipeline's Red Sea terminus, targeted a second time in nine days, where Kpler says no crude has loaded since September 11 — against Riyadh's promise of half of pipeline capacity within days. Volume is being restored the other way instead, with satellite imagery putting Saudi flows through Hormuz at 2.8 million barrels a day over six days against 700,000 in August. Washington's answer to Thursday's war-crime finding went a step beyond rejection: the State Department ended US membership of the UN Human Rights Council. It also cleared visas for Pezeshkian and Araghchi, putting both Iranian principals in New York the same week Trump meets all six GCC leaders on Tuesday. Brent's last print is Friday's $103.21, down 1.54%. Direction escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'Riyadh became a target three days before Riyadh sits down with Trump',
      body:
        "The Houthis have hit Saudi oil facilities, southern towns and, by Riyadh's account, a drone at Mecca. Reaching the capital is a different rung: a burning Aramco tank beside the kingdom's main international airport, the first air-raid alert in Riyadh since the fighting resumed, and an airport at maximum disruption (NBC News, France 24, Times of Israel). Per §3.1 the coalition's interception claim and the Houthi claim of successful strikes on sensitive sites are carried together and cannot be reconciled from open reporting; the fire is the one uncontested fact, and no casualty figure has been published by either side for a third day. The timing is what matters analytically. Tuesday's meeting between Trump and the leaders of all six GCC states was already the war's live decision point; it now convenes with the host government's capital newly under fire and with Riyadh's standing ask — direct US action against the Houthis — backed by a picture. Washington has held back to avoid opening a second front while the Iran war is unresolved. Analytical judgment: under the multi-clock framework the coalition-cohesion and active-deadline clocks have converged on a single date, and the annihilate-or-not framing Trump offered last week now has to be answered in front of the partner most exposed to the answer.",
    },
    {
      title: 'Yanbu twice in nine days turns a recovery promise into a targeting cue',
      body:
        "Petroline's Red Sea terminus was struck again, nine days after the pumping-station attacks that took the line down. Kpler reports no crude loaded at Yanbu since September 11, against pre-attack throughput of about 5.5 million barrels a day of which roughly 4.5 million was exported through the port, and expects the bypass to restore only about half within a month (Kpler, Al Jazeera, Windward). Per §3.5.3 Riyadh's within-days claim is cited as an official target, and Day 205 supplies the reason to discount it: the constraint is no longer only repair time but whether a repaired terminal can be kept intact. Publicly announcing a restart date tells the party with the missiles when to fire. Meanwhile the substitute route keeps scaling — satellite imagery puts Saudi movements through Hormuz at 2.8 million barrels a day over six days against 700,000 in August, on top of the roughly 60 million barrels transferring ship-to-ship off Sohar. Per §3.5.5 that is the whole Saudi export position migrating into the one waterway Iran now claims to attack. Analytical judgment: the escort-dependency prior is approaching totality, and with Brent stale at Friday's $103.21 through the weekend, Monday's open is the first price test of a capital that has been hit.",
    },
    {
      title: 'Taiwan: both doors shut on the same weekend',
      body:
        "No fresh Taiwan-specific development; the exposure moves entirely through the Saudi numbers. CPC's Qatari cargoes were premised on Hormuz reopening by early September (DIGITIMES); it did not, and the Red Sea alternative that would have routed around it has now been attacked twice in nine days with no crude loading at Yanbu since September 11. Taipei is 99% import-dependent on gas, took roughly a third of its 23.6 Mt of 2025 LNG imports from the Gulf with Qatar alone near 8 Mt, and holds about eleven days of emergency reserve against a statutory fourteen-day floor not due until 2027 (IFRI, Atlantic Council). The working corridor is the escorted one, and its cargo is spoken for by Chinese, South Korean, Indian and Japanese refiners with standing relationships Taipei does not have. Analytical judgment: the substitution-chain prior holds and sharpens — Taiwan's problem is queue position rather than price, and a war that has now reached the capital of the supplier doing the substituting removes the assumption that the workaround is itself safe.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 killed or wounded since July 7 carries. Per §3.5.3 keep the combat series and flag both divergences. Eighteenth consecutive quiet day. Day 205's US developments were institutional: the State Department ended US membership of the UN Human Rights Council a day after the Fact-Finding Mission reported, escalating Day 204's rejection from disputing the body to leaving it, with the elevated Pentagon probe into Minab still unpublished. Washington also cleared visas for Pezeshkian and Araghchi to attend the UNGA under travel restrictions. Escort corridor holds at ~40 ships/day and ~14 mb/d. Senate has not taken up the 220-204 House resolution; AAA diesel record $6.23/gal carries.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll. Israel stayed offstage for a seventh day — outside the Riyadh and Yanbu strikes, outside the Human Rights Council withdrawal and outside the New York diplomacy — while the reported draft postwar strategy centres on expanded Israeli normalisation. Katz carries: no withdrawal from the ~700 sq km belt or the Ali al-Taher ridge until Hezbollah is disarmed nationwide, with anyone approaching the ridge warned they will be killed and no territorial ambitions claimed. The Lebanese army records ~7,700 violations of the June 26 framework; Lebanon's separate ledger runs ~4,300+ killed / 12,200+ wounded. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries unchanged; Day 205 produced no new count and no confirmed Iranian launch against a host state for a tenth day per GlobalSecurity, the last being twenty missiles at Muwaffaq Salti on September 8-9. Tehran answered the American exit from the Human Rights Council in legal register: deputy FM Kazem Gharibabadi said Washington cannot escape responsibility by withdrawing and that history will not forget. Iranian coverage again amplified the US half of the Mission's report and not the crimes-against-humanity half — the symmetric-indictment prior operating as expected. Seventh day of silence on the Taeb report. Rights thread carries: HRW and the Boroumand Center ≥59 arbitrary executions March 18-end August, ≥29 arrested over the December 2025-January 2026 protests, three from 2022, several aged 18-19, five in public; Iran HRM 23 executions August 23-26. Araghchi's reopening conditions carry and travel with him to New York. IAEA UNSC referral (23-3) carries; the Council still cannot seat a 1737 Committee chair. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "No casualty figure published by Riyadh or Sanaa for a third day, including for the Riyadh depot fire, so the cumulative holds and the silence is the gap. The Houthis struck the Saudi capital for the first time in the renewed war — a fuel-depot blaze on an Aramco-branded tank beside King Khalid International Airport, the capital's first air-raid alert, the airport at maximum disruption — with a second operation against the Aramco facility at Yanbu, claimed by spokesman Yahya Saree using ballistic missiles, cruise missiles and drones. The coalition said it destroyed a missile aimed at Riyadh and foiled attacks on Bish, Farasan, Taif and Yanbu. The Houthis said both answered a Saudi attempt to strike Sanaa, unconfirmed by Riyadh. Displacement carries at 112,000 inside Yemen with nearly 3,000 arrivals in Djibouti and IOM stocks near depletion; no update today. Petroline offline since September 10 with no crude loaded at Yanbu since September 11; Hormuz movements ~2.8 mb/d over six days vs ~700 kb/d in August; Sohar STS ~60 mb. Lebanon (~4,300+/12,200+), Gulf (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
