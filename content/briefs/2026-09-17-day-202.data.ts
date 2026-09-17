import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating, and on Day 202 the escalation moved from military to religious. The Saudi-led coalition said air defences destroyed a Houthi drone south of Mecca before it entered prohibited airspace over Islam's holiest city — the first such claim in almost a decade — and spokesman Turki al-Maliki called the sanctity of the holy sites a red line Riyadh would take deterrent measures to enforce (CNN, NPR). The Houthis denied it flatly, their military spokesman Yahya Saree saying the night's targets were Saudi oil facilities and military bases far removed from the holy places, and claiming strikes on Aramco at Yanbu and on Khamis Mushait Air Base. The OIC's 58 states condemned the Houthis. Aramco suspended loadings at Yanbu, severing the kingdom's last Hormuz bypass at its outlet. Nothing de-escalated.",
      risk7d:
        "Seven-day risk holds extreme, with the dominant vector now a contested factual claim rather than a confirmed strike. Riyadh says Mecca was targeted and has promised deterrent measures; the Houthis say the claim is fabricated and that only oil and military targets were struck. Neither account can be independently verified and both sides have committed to it publicly, which is the structure under which an unverified event produces a verified retaliation. Beneath it the physical position worsened: Petroline offline since September 10, Yanbu loadings suspended, Aramco cancelling and delaying European cargoes, Salalah dormant for a fourth day, Bab al-Mandeb held, El Gaia unattributed at 96 hours. A Saudi strike on Sanaa, a formal strait closure, a laden-tanker loss or a Chinese bank designation before the September 24 summit each reprices oil sharply from a $105.83 base.",
      spillover:
        "Spillover holds critical and widened along two new axes. The first is confessional: by putting Mecca and Medina into the exchange, the dispute now runs through the Organization of Islamic Cooperation's 58 members, which condemned the Houthis and backed Saudi deterrent measures — while offering, per CNN, no sign of military support. Condemnation without contribution is the shape of a coalition that will not form. The second is humanitarian: the UN put new displacement across Yemen at 93,864 people, most of it in the first two weeks of September, with more than 2,000 having crossed to Djibouti by small dhow and larger vessel. Bab al-Mandeb carries roughly 12% of global trade, 11% of seaborne oil and 8% of LNG, and both Arabian Peninsula gates are now contested at once.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'CNN / NPR / Al-Monitor / The Times of Israel',
      event:
        "The Saudi-led coalition said its air defences destroyed a Houthi drone south of Mecca on Tuesday before it entered prohibited airspace over the city, the first time in almost a decade the kingdom has accused the Houthis of targeting Islam's holiest site. Coalition spokesman Turki al-Maliki called the security of the holy site a red line and said the kingdom would not hesitate to take necessary and deterrent measures. The Houthis rejected the account outright: military spokesman Yahya Saree said the night's targets were Saudi oil facilities and military bases far removed from the holy places, and spokesperson Hazem al-Assad called the claim a worn-out lie used before that no longer fools anyone. The Organization of Islamic Cooperation, whose 58 member states are headquartered in Jeddah, condemned the attacks on Makkah and the Madinah region as violating the sanctity of holy sites.",
      summary:
        "Per §3.1 both accounts are carried and neither is verifiable from open sources: Riyadh has produced a claim and the Houthis, who are Zaydi Shia and also revere Mecca, have produced a denial. The analytical content is in the asymmetry — a claim Riyadh has attached a red line to does not require verification to generate a response.",
      impact:
        "The exchange has acquired a confessional dimension that neither Washington nor Tehran can arbitrate, and Riyadh now has a publicly stated threshold it has promised to enforce.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'The Jerusalem Post / Pakistan Today / OilPrice.com / Middle East Eye',
      event:
        "Yahya Saree said the Houthis carried out two operations overnight, striking Saudi Aramco facilities at the Red Sea port of Yanbu with dozens of ballistic missiles and drones and Khamis Mushait Air Base with a number of ballistic missiles. Riyadh confirmed neither. Separately and independently, Aramco confirmed that crude loadings at Yanbu have been suspended, and shipping sources reported the port dark; the company is cancelling and delaying crude cargoes to European customers. Yanbu is the western terminus of the 1,200 km, 7 mb/d East-West pipeline known as Petroline, which has been offline since it was attacked on September 10 and to which roughly 5 mb/d of eastern crude had been rerouted around the Strait of Hormuz.",
      summary:
        "Per §3.5.3 the Houthi strike claim is unverified and Saudi silence is not confirmation; the loading suspension, however, is Aramco's own and is the harder fact. Per §3.5.5 the sequence matters: the bypass was cut inland on September 10 and its outlet closed on September 16.",
      impact:
        "Saudi Arabia's last route for moving crude to market without transiting Hormuz is now interrupted at both ends, and European refiners are absorbing cancellations into an already tight market.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Trading Economics / Euronews',
      event:
        "Brent settled at $105.83, down 2.7% on the session from the $109.21 war-high close of Day 201, and WTI shed 3.2% to $102.43. The fall followed US Energy Secretary Chris Wright telling CNBC that the Petroline outage was a brief and temporary interruption that would be measured in days, alongside an industry report pointing to a build in US stockpiles. Independent analysts reading satellite imagery of significant damage to a pumping station continue to put the repair at weeks. Within the session the Yanbu loading suspension lifted ICE Brent back toward $108 before the settle. Riyadh has offered no comment on the scale of the cargo cancellations and Aramco has published no restart date.",
      summary:
        "Per §3.5.3 this is an official progress claim from a political actor that moved a market against the available physical evidence, and it is cited as Wright's claim rather than as a repair timeline. The $3.38 give-back is the price of an assertion, not of a restored pipeline.",
      impact:
        "The market has priced a US official's assurance over satellite imagery and an Aramco silence, which leaves the correction risk entirely on the upside if the weeks estimate proves right.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Congress.gov / The Hill',
      event:
        "The US House passed a war powers resolution directing the removal of US armed forces from hostilities with Iran, 220-204, in a roll call late Tuesday. It is the third such vote of the war and the largest Republican defection yet: seven Republicans joined every Democrat — Thomas Massie of Kentucky, Brian Fitzpatrick of Pennsylvania, Warren Davidson of Ohio, Tom Barrett of Michigan, Mariannette Miller-Meeks and Zach Nunn of Iowa, and Nancy Mace of South Carolina. The measure was sponsored by Representative Seth Moulton of Massachusetts. It would require Senate passage to reach the president's desk, where he retains a veto, and the administration has repeatedly questioned the constitutional standing of the War Powers Resolution itself.",
      summary:
        "Per §3.5.5 the trend is the story rather than the outcome: the third vote of the war, up from prior attempts, arriving alongside a 50-48 Senate rebuke, a record $6.05 diesel price and an unresolved $67B supplemental. Two of the seven defectors represent Iowa.",
      impact:
        "The political-will clock is now measurable in roll calls rather than polls, and the defections are concentrated in members who face voters before the war's stated horizon.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'UN News / IOM / Al Jazeera / Euronews',
      event:
        "The United Nations put new displacement across Yemen at 93,864 individuals, with more than 85,000 displaced inside the country and most of that in the first two weeks of September — a further revision from the 80,000 figure of Day 201 and the 46,000 of Day 200. More than 2,000 people had reached Djibouti across the Bab al-Mandeb strait by September 13, arriving on what IOM's Djibouti chief Alexandre Coissac described as all kinds of sea vessels, from small dhows to larger ships; IOM has separately reported a shipwreck among those fleeing with 13 dead and 14 missing. Saree also claimed the Houthis downed a Saudi F-15 over Marib with a locally made missile and released video; Riyadh has acknowledged no loss.",
      summary:
        "Per §3.5.5 the displacement ledger has doubled in 48 hours of reporting and is now outrunning every prior count. Per §3.1 the F-15 claim and the Saudi silence are both carried; the shipwreck toll is held separately pending confirmation and is not folded into the cumulative.",
      impact:
        "A shipping chokepoint has become a refugee crossing with a drowning toll attached, and the humanitarian clock continues to run ahead of the Security Council's capacity to measure it.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7 alone.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 202 — a fifteenth consecutive day with no verified new US combat casualty. The CENTCOM blockade series carries: 100 vessels redirected in the 60 days since July 14, four disabled, 26 humanitarian vessels permitted, zero passed without US permission, more than 15,000 personnel assigned. CENTCOM has still claimed nothing on the El Gaia, now unattributed at 96 hours.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the combat series against DCAS 18 / 687 all-cause and The Intercept's Pentagon figure of 410 killed or wounded since July 7; per §3.5.3 keep the combat figure and flag both divergences. The material US development on Day 202 was political rather than kinetic: the House passed a war powers resolution 220-204, the third of the war, with seven Republicans joining all Democrats. The Senate's 50-48 rebuke, the $67B supplemental and the record $6.05 diesel price remain unresolved, and the administration continues to dispute the War Powers Resolution's constitutional standing. Two of the seven defectors are Iowa members.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel stayed offstage for a fourth consecutive day across Hormuz, Yemen, the Mecca dispute and the Saudi-Houthi exchange. Katz's Lebanon position carries unchanged; the Gaza ceasefire holds broadly with sporadic strikes.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. Israeli absence is again the notable fact: a confessional escalation involving Mecca and Medina, condemned by 58 OIC states, ran with no Israeli role and no Israeli comment, which is what the Israeli-independence prior predicts in reverse. Katz has tied withdrawal from the roughly 700 sq km security belt and the Ali al-Taher ridge to nationwide Hezbollah disarmament. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official Iranian war toll on Day 202. The El Gaia casualty stays held separately and unattributed at 96 hours, with the Indian account (13 rescued, 1 missing of 14) and the IRNA-relayed account (1 killed, Jamshid Rajabi, and 4 wounded of 10) both carried per §3.1. Tehran made no statement on the Mecca accusation and has still said nothing about the Taeb report on a fourth day.",
      status:
        "Iran is the named sponsor in every account of the Mecca dispute and a participant in none of them — condemned by the OIC through its proxy, absent from its own defence. Araghchi's standing position carries: reopening of Hormuz is subject to conditions and compensation for the violation of the June memorandum. The rights thread carries and hardens. HRW and the Abdorrahman Boroumand Center document at least 59 men arbitrarily executed between March 18 and the end of August on politically motivated national-security charges, including at least 29 arrested over the December 2025-January 2026 protests and three from 2022, several aged 18 or 19, five in public; Iran Human Rights Monitor counted 23 executions between August 23 and 26. The IAEA Board referral to the Security Council (23-3, eight abstentions) carries, with Russian and Chinese vetoes expected.",
    },
    other: {
      cumulative:
        'Yemen/Houthi-Saudi ~3,598 KIA · 10,804+ WIA across Lebanon (~4,300+/12,200+), Gulf states (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+)',
      delta:
        "+13 wounded: Saudi authorities acknowledged that Houthi drone and missile strikes this week wounded 13 civilians across Khamis Mushait, Abha and Taif — Taif being new to the target set and roughly 70 km from Mecca. No new confirmed deaths on either side of the Saudi-Houthi exchange. UN displacement rose to 93,864 across Yemen with 2,000+ having reached Djibouti; IOM separately reported a shipwreck among those fleeing with 13 dead and 14 missing, held pending confirmation and not folded into the cumulative.",
      status:
        "Yemen remains the war's fastest-moving front and has now added a religious dimension. The Houthis hold Mokha, Mayun and the Hanish islands with forces roughly 20 km from the African coast; Bab al-Mandeb carries about 12% of global trade, 11% of seaborne oil and 8% of LNG, and no formal closure has been declared, leaving that rung in reserve. Petroline stays offline since September 10 — 1,200 km, 7 mb/d nameplate, at least eight strike points, roughly 5 mb/d rerouted — and Yanbu loadings are now suspended with European cargoes cancelled or delayed and no Aramco restart date. Iraq's reopening of two of three Iran crossings remains the only active de-escalation in the theatre, and it is not on a clock.",
    },
  },
  exec:
    "Day 202 gave the Saudi-Houthi exchange a confessional dimension. The Saudi-led coalition said its air defences destroyed a Houthi drone south of Mecca before it entered prohibited airspace over Islam's holiest city — the first such accusation in almost a decade — and spokesman Turki al-Maliki called the security of the holy sites a red line the kingdom would take deterrent measures to enforce (CNN, NPR). The Houthis denied it outright: military spokesman Yahya Saree said the night's targets were Saudi oil facilities and military bases far removed from the holy places, and spokesperson Hazem al-Assad called the claim a worn-out lie. The Organization of Islamic Cooperation's 58 member states condemned the attacks on Makkah and the Madinah region and backed Saudi deterrent measures, while offering no sign of military support. Saree claimed strikes on Aramco at Yanbu and on Khamis Mushait Air Base, and a Saudi F-15 downed over Marib; Riyadh confirmed none of it. Aramco separately confirmed that crude loadings at Yanbu are suspended and is cancelling European cargoes, closing the outlet of the Petroline bypass that has been severed inland since September 10 (OilPrice.com, Middle East Eye). Brent nonetheless settled down 2.7% at $105.83 after US Energy Secretary Chris Wright said the outage would be measured in days, against analysts reading satellite imagery who still say weeks. The US House passed a war powers resolution 220-204, the third of the war, with seven Republicans joining every Democrat. UN displacement across Yemen rose to 93,864. Direction escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'An unverified claim about Mecca is now the war’s most dangerous fact',
      body:
        "The Saudi-led coalition says it destroyed a Houthi drone south of Mecca before it crossed into prohibited airspace, the first such accusation in almost a decade, and Turki al-Maliki has called the holy sites a red line the kingdom will take deterrent measures to enforce (CNN, NPR, Al-Monitor). The Houthis deny it in terms that leave no room to settle: Saree says the night's targets were oil facilities and military bases far removed from the holy places, and Hazem al-Assad calls the claim a worn-out lie. Per §3.1 both accounts are carried, and per §3.5.3 neither is treated as established. That is precisely the problem. An unverifiable claim to which a state has publicly attached a red line does not need to be true to generate a retaliation, and the Houthis cannot disprove it. The OIC's 58 members condemned the attacks on Makkah and the Madinah region and backed Saudi deterrent measures — while offering, per CNN, no sign of military support. Under the multi-clock framework the coalition-cohesion clock has resolved: the coalition will issue statements and will not send aircraft. Analytical judgment: Riyadh has acquired both a stated threshold and a pan-Islamic mandate to enforce it, with no mediator, no verification mechanism and Salalah dormant for a fourth day. The next Saudi escalation, whenever it comes, is now pre-justified.",
    },
    {
      title: 'The last Hormuz bypass is cut at both ends, and the market priced a press quote over a satellite image',
      body:
        "Aramco has suspended crude loadings at Yanbu and is cancelling and delaying European cargoes; shipping sources report the port dark (OilPrice.com, Middle East Eye, Times of Israel). Yanbu is the western terminus of Petroline — 1,200 km, 7 mb/d nameplate, offline since September 10, carrying roughly 5 mb/d of rerouted eastern crude. Per §3.5.5 the sequence is the point: the bypass was severed inland on the 10th and its outlet closed on the 16th, so Saudi Arabia's alternative to the Strait of Hormuz is now interrupted at both ends. Against that, Brent settled at $105.83, down 2.7% from the war-high $109.21, because US Energy Secretary Chris Wright told CNBC the outage was brief and temporary and would be measured in days, while independent analysts reading satellite imagery of pumping-station damage still say weeks. Per §3.5.3 that is an official's claim, not a repair schedule, and it is cited as such; Riyadh has said nothing about the cancellations and Aramco has published no restart date. Under the multi-clock framework the energy-infrastructure clock deteriorated while its price signal improved. Analytical judgment: a $3.38 give-back bought by an assertion leaves the entire correction risk on the upside, and the physical position underneath it is the worst of the war.",
    },
    {
      title: 'Taiwan: the Red Sea workaround closed at the loading berth',
      body:
        "Day 202 produces a directly Taiwan-relevant development for the first time this week. Taipei's answer to Hormuz was to lift crude from Saudi Arabia's Red Sea ports, an arrangement reported in April and premised on Petroline delivering eastern barrels to Yanbu (Malay Mail). Yanbu loadings are now suspended and Aramco is cancelling cargoes, so the workaround has closed at the berth rather than at the chokepoint. The LNG picture compounds it: Qatari cargoes were to resume to Taiwan from early September contingent on a Hormuz reopening that has not happened, CPC has been buying spot since Qatar's force majeure and the roughly 17% cut to Ras Laffan liquefaction, and QatarEnergy is itself bidding for US cargoes (S&P Global, Digitimes). Per §3.5.5 the exposure is unchanged: about 96% of energy imported, LNG roughly half of generation, nearly 40% of long-term contracted LNG from Qatar, reserves near twelve days against a statutory fourteen-day floor not due until 2027. Bab al-Mandeb, which carries 8% of global LNG, is held by a belligerent. Analytical judgment: the substitution-chain competition prior is now compounded by a physical closure — Taiwan is bidding against its own disrupted supplier in the spot market while the Red Sea loading route it arranged as insurance goes dark, with the assurance window spent and no October cover.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 killed or wounded since July 7 carries. Per §3.5.3 keep the combat series and flag both divergences. Fifteenth consecutive quiet day. Blockade series carries: 100 vessels redirected in 60 days, four disabled, 26 humanitarian permitted, zero passed without US permission, 15,000+ personnel. The House passed a third war powers resolution 220-204 with seven Republicans crossing over.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll. Israel stayed offstage for a fourth day, including through the Mecca dispute and the OIC condemnation. Katz carries: no withdrawal from the ~700 sq km belt or the Ali al-Taher ridge until Hezbollah is disarmed nationwide. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries unchanged; Day 202 produced no new count and no Iranian statement on the Mecca accusation or the Taeb report, a fourth day of silence on the latter. The El Gaia casualty stays held separately and unattributed at 96 hours with both accounts carried per §3.1. Araghchi's conditions on any Hormuz reopening carry. Rights thread carries: HRW and the Boroumand Center document ≥59 arbitrary executions March 18-end August, including ≥29 arrested over the December 2025-January 2026 protests and three from 2022, several aged 18-19, five in public; Iran HRM counted 23 executions August 23-26. IAEA UNSC referral (23-3) carries. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "+13 wounded: Saudi authorities acknowledged 13 civilians wounded this week by Houthi drones and missiles across Khamis Mushait, Abha and Taif, taking the Saudi line to ~103+ wounded. No new confirmed deaths in the Saudi-Houthi exchange. UN displacement across Yemen rose to 93,864, most of it in the first fortnight of September, with 2,000+ having reached Djibouti; an IOM-reported shipwreck with 13 dead and 14 missing is held pending confirmation and excluded from the cumulative. Houthis claim a Saudi F-15 downed over Marib; Riyadh acknowledges no loss. Petroline offline since September 10 and Yanbu loadings suspended. Lebanon (~4,300+/12,200+), Gulf (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
