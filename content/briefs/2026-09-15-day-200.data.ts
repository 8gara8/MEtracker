import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 200, with the day's dominant item retrospective rather than kinetic. The New York Times reported that July's attacks on three commercial ships in the Strait of Hormuz — the strikes that collapsed the Islamabad memorandum and restarted the blockade — were launched without the advance knowledge or authorisation of President Pezeshkian, IRGC commander-in-chief Ahmad Vahidi, or the Supreme National Security Council, with Iranian investigations tracing the order to the cleric Hossein Taeb (Times of Israel, Jerusalem Post). Two of the three regional brakes this series has carried came off in the same cycle: the Saudi-led coalition vowed a self-defence response to Saturday's Jazan strike and briefed allies on retaliation planning (CNN, Arab News), while only Baghdad de-escalated, reopening two of three Iran crossings and admitting Iranian investigators to the Petroline probe. Brent settled at $107.54, up 2.9%. The balance stays escalating: the war's diplomatic architecture is now revealed to have a structural defect no venue repairs, and the regional restraint that substituted for diplomacy is being withdrawn.",
      risk7d:
        "Seven-day risk holds extreme. Salalah has no successor date, Riyadh has publicly reserved the right to retaliate and told allies it intends to, the Petroline stays offline with a damaged pumping station and no restart date, the Houthis hold the Bab al-Mandeb coast and the islands commanding it, and the Hengam Island strike remains unattributed at 48 hours even after the vessel was identified as the Indian-crewed El Gaia. A Saudi strike inside Yemen, a formal Houthi closure declaration, a laden-tanker loss, a confirmed US Navy casualty, or a named major-Chinese-bank designation ahead of the September 24 summit each sends oil sharply higher from a $107.54 base — within roughly $12 of Goldman's $120 tail. Baghdad's crossings decision is now the only functioning brake, and it is not on a clock.",
      spillover:
        "Spillover holds critical and is widening by actor rather than by geography. India became a directly affected party when its ministry of external affairs condemned the El Gaia attack and confirmed one of fourteen Indian crew missing. Saudi Arabia has moved from absorbing Houthi fire to announcing intent to answer it. The IOM revised displacement from the new southwestern Yemen fighting to more than 46,000 people against the UN envoy's 11,400+ households since September 3, and Grundberg warned the Security Council that the consequences will not remain within Yemen's borders. Both maritime gates of the Arabian Peninsula are contested at once, civilian shipping inside Hormuz remains in the kill zone, and the political clocks — the US midterms, Iran's factional crisis and an invisible Supreme Leader, the September 24 US-China summit — add pressure without producing an exit.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'New York Times via The Times of Israel / The Jerusalem Post',
      event:
        "The New York Times reported that when Iranian forces fired on three commercial ships in the Strait of Hormuz in July, they did so without the advance knowledge or authorisation of IRGC commander-in-chief Ahmad Vahidi, President Pezeshkian, or the Supreme National Security Council. Pezeshkian was surprised by the attack and angrily called Vahidi, who said he had neither authorised the strikes nor known of them. Iranian government and security-service investigations concluded the decision was taken by Hossein Taeb, a cleric and intelligence figure who ran IRGC intelligence for years before being moved to head the Basij, and who had opposed the agreement from the outset.",
      summary:
        "The July strikes are the event that collapsed the Tehran-Washington memorandum, provoked the US response and restarted the blockade this series has tracked ever since. Per §3.5.3 this is a single-outlet intelligence account relayed at second hand and neither confirmed nor denied by Tehran; the report also notes Supreme Leader Mojtaba Khamenei has not appeared publicly for roughly six months.",
      impact:
        "It means the US-Iran track came closer to working than assumed, and was destroyed by an actor outside the signing chain whom no counterparty could bind. Any successor understanding carries the same unpriced sabotage risk, which is why the ceasefire probability holds at 2 rather than rising.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / Arab News / Al Jazeera',
      event:
        "After a Houthi projectile struck Al-Tuwal governorate in Saudi Arabia's Jazan region on Saturday, wounding two and damaging a mosque, vehicles and several buildings, Saudi Civil Defense called the targeting of civilian objects a 'flagrant violation of international humanitarian law,' the Saudi-led coalition spokesman vowed a response under the right of self-defence, and a source familiar with Saudi thinking told CNN that Riyadh is planning to retaliate and has informed allies of its plans. Houthi military spokesman Yahya Saree said the group's ballistic missiles and drones had targeted a Saudi military base at Sharurah in Najran province.",
      summary:
        "Riyadh's non-retaliation has been the single most load-bearing restraint in the war since the Petroline attack, and this series has flagged it as the region's principal brake. Per §3.5.3 the Houthi military-target claim does not reconcile with the civilian damage Saudi Civil Defense documented, and both accounts are carried.",
      impact:
        "The coalition-cohesion clock worsens sharply. Saudi retaliation is the likeliest single path from a two-chokepoint war to a three-front one, converting the Houthis from Iran's instrument into Riyadh's direct adversary while Hormuz is shut and the bypass is broken.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: 'Bloomberg / Trading Economics / Iran International',
      event:
        "Brent climbed from a previous close of $104.47 through a session high of $108.40 to settle at $107.54, a gain of 2.9%. The move followed the Salalah postponement, the continued shutdown of Saudi Arabia's East-West pipeline with Aramco declining to say how long the disruption will last, and Iran's Supreme National Security Council reiterating that the Strait of Hormuz will not open until the United States 'corrects its behaviour' — secretary Mohammad-Bagher Zolghadr's published conditions including an end to the blockade, US naval and air withdrawal from around Iran, war reparations, sanctions relief and release of frozen assets.",
      summary:
        "Per §3.5.5 the market is pricing the absence of a calendar rather than any new kinetic event: a 2.9% single-session move on a postponement plus a pipeline with no restart date. The pipeline carries roughly 5 mb/d of rerouted crude to Yanbu and is offline with a damaged pumping station.",
      impact:
        "Brent at $107.54 sits within roughly $12 of Goldman's $120 tail scenario, with the remaining triggers — Saudi retaliation, formal Bab al-Mandeb closure, a laden-tanker loss, a major Chinese bank designation — all live and none dated.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "Indian Ministry of External Affairs / Outlook India / The Week / GlobalSecurity.org",
      event:
        "The vessel struck at about 0500 local on Sunday near Hengam Island off the Shib Deraz coast of Qeshm was identified as the El Gaia, a Panama-flagged oil products tanker with fourteen Indian crew aboard. Thirteen were rescued and brought ashore with Omani assistance; search and rescue continues for one missing Indian national. India's Ministry of External Affairs strongly condemned the attack, said it was monitoring developments closely, and thanked Omani authorities. The strike remains unattributed; CENTCOM has claimed nothing and the Qeshm governor had blamed an unidentified 'terrorist enemy.'",
      summary:
        "Per §3.1 this revises the earlier IRNA-relayed account of an Iranian commercial vessel with ten aboard, one killed — named as crew member Jamshid Rajabi — and four wounded. Both accounts are carried pending reconciliation, and the casualty remains held separately against no actor. The identification brings a new affected state into the ledger.",
      impact:
        "A third-country crew taking the first fatality of the strait's civilian phase widens the diplomatic cost of an unattributed strike, and gives New Delhi a direct stake in a waterway through which a large share of its own crude imports move.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Malay Mail / UN News / IOM / UN Office of the Special Envoy for Yemen',
      event:
        "Iraq agreed to reopen two of the three border crossings with Iran it shut after the Petroline drone attack — Shalamcheh in Basra, al-Shib in Maysan and Mandali in Diyala had all been closed for security inspections — and Iraq's commander-in-chief approved an Iranian request to join the investigation and review its findings, after Iraqi authorities traced the launch site to the al-Tayeb border district of Maysan and seized the launch platform. Separately, the IOM reported that at least 46,000 people have been displaced by the past week's fighting in southwestern Yemen, against the UN envoy's count of more than 11,400 households displaced since September 3.",
      summary:
        "Baghdad is now the only actor actively de-escalating: acting against launch infrastructure on its own soil, admitting the aggrieved party's ally to the probe, and restoring commerce rather than sealing the border. Against that, the Yemen displacement figure was revised sharply upward within days of Grundberg's 'new and more dangerous phase' assessment.",
      impact:
        "The Iraq track is the war's one functioning repair mechanism and the only brake left after Riyadh's announcement. The Yemen revision confirms the humanitarian-escalation clock is running faster than the Security Council's capacity to respond.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 200 — a thirteenth consecutive day with no verified new US combat casualty. The CENTCOM blockade series carries from Day 199: 100 commercial vessels redirected in the 60 days since the steel wall resumed on July 14, four disabled, 26 humanitarian vessels permitted, zero passed without US permission, more than 15,000 personnel assigned. The escort corridor (~8-9 mb/d) continues to run amid live fire with the USS George Washington on station, and CENTCOM has claimed nothing on the Hengam Island strike.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28; per §3.5.3 keep the combat figure and flag DCAS. Day 200 added no US count but changed the political frame around the campaign: if the July strikes that restarted the blockade were unauthorised by Tehran's own chain of command, the retaliatory architecture the US built in response was aimed at a decision the Iranian state says it did not take. The $67B supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of a November midterm the president has said the war will outlast.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel again stayed offstage on Hormuz, Yemen and the Saudi retaliation question. Defence Minister Katz said Israel has 'no territorial ambitions' in Lebanon but will not withdraw 'a millimetre' from the roughly 700 sq km security belt it holds — including the Ali al-Taher ridge position, where demolition work has been under way — until Hezbollah is disarmed throughout the country. The Gaza ceasefire holds broadly with sporadic IDF strikes.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. Israel continues to run its own clock — absent from the Gulf diplomacy, active on Lebanon, where Katz has now tied withdrawal from a named position to nationwide Hezbollah disarmament. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and were reinforced on the day; the New York Times account of unauthorised Iranian action adds a further reason to doubt that any US-Iran framework can bind third parties, in either direction.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official Iranian war toll on Day 200. The Hengam Island strike is now identified as the Panama-flagged products tanker El Gaia with fourteen Indian crew — thirteen rescued, one missing — which revises the earlier IRNA-relayed account of an Iranian commercial vessel with ten aboard, one killed (crew member Jamshid Rajabi) and four wounded; per §3.1 both accounts are carried pending reconciliation and the casualty is held separately and unattributed at 48 hours. The rights thread carries: HRANA continues to document an accelerating execution pace, including six prisoners hanged at Vakilabad in Mashhad and Dastgerd in Isfahan on September 6 and 9.",
      status:
        "The official Iranian war toll carries unchanged. The day's Iranian story was internal rather than numerical: the New York Times account of an unauthorised July escalation, traced to Hossein Taeb, lands on top of a factional crisis in which Speaker Ghalibaf has threatened to impeach ministers, hardliners led by Hamid Rasaei have pressed to remove First Vice President Aref, and the Supreme Leader has not been seen for roughly six months. Per §3.5.3 hold the report as the best available account rather than settled fact. HRW and Amnesty ≥59 executed since the war's escalation, ≥78 at risk (incl ≥5 children); IAEA UNSC referral (23-3) carries.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,300+ / 12,200+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 160+ WIA (Kuwait 10 / 115; Saudi ~90+ injured) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing · El Gaia / Hengam Island: 1 missing Indian seafarer (Iranian account 1 killed / 4 wounded), pending attribution",
      delta:
        "No new confirmed lethal toll on Day 200, but two ledgers moved. The IOM put displacement from the past week's southwestern Yemen fighting at more than 46,000 people, against the UN envoy's 11,400+ households since September 3 — a sharp upward revision inside days. Saudi Arabia's Jazan count rose by two wounded and Riyadh has now vowed a self-defence response. Iraq agreed to reopen two of three Iran crossings and admitted Iranian investigators to the Petroline probe; the pipeline, carrying roughly 5 mb/d of rerouted crude to Yanbu, stays offline with a damaged pumping station and no restart date.",
      status:
        "The 'other' ledger produced no new deaths and three structural movements. India entered the ledger as a directly affected state with one seafarer missing from the El Gaia and an MEA condemnation on the record. Saudi Arabia moved from absorbing Houthi fire to announcing intent to answer it, which puts the Gulf sub-ledger on notice. And the Yemen displacement revision — 46,000 people by IOM count — confirms a five-governorate war generating humanitarian consequences faster than any mechanism in front of the Security Council. Lebanon (~4,300+/12,200+), Gulf (33+/~90+ Saudi injured; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
    },
  },
  exec:
    "Day 200 produced the war's most consequential piece of retrospective intelligence. The New York Times reported that July's attacks on three commercial ships in the Strait of Hormuz — the strikes that collapsed the Islamabad memorandum and restarted the blockade — were carried out without the advance knowledge or authorisation of President Pezeshkian, IRGC commander-in-chief Ahmad Vahidi, or the Supreme National Security Council. Pezeshkian, surprised, called Vahidi, who said he had neither ordered the strikes nor known of them. Iranian government and security investigations traced the decision to Hossein Taeb, the cleric and former IRGC intelligence chief now running the Basij, who had opposed the agreement from the outset; Supreme Leader Mojtaba Khamenei has not appeared publicly in roughly six months (Times of Israel, Jerusalem Post). Markets priced the diplomatic vacuum rather than the revelation: Brent rose from a $104.47 close through a $108.40 session high to settle at $107.54, up 2.9%, with Iran's security council reiterating that Hormuz stays shut until Washington \"corrects its behaviour\" and Aramco still silent on a Petroline restart (Bloomberg, Trading Economics). Sunday's unattributed Hengam Island strike was identified as the Panama-flagged products tanker El Gaia, fourteen Indian crew, thirteen rescued and one missing — a revision to the Iranian account of one killed and four wounded of ten aboard. Riyadh dropped its restraint: the Saudi-led coalition vowed a self-defence response to Saturday's Jazan strike and briefed allies on retaliation plans (CNN, Arab News). Baghdad moved the other way, reopening two of three Iran crossings and admitting Tehran to the drone probe. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'If Tehran did not order the strikes that killed the deal, then nobody at the table was ever the whole counterparty',
      body:
        "The New York Times account, if it holds, reorders 200 days of assumptions. This series has read July's attacks on three commercial ships as Tehran's decision to break the Islamabad memorandum — a choice with a rationale, however self-defeating. The report says otherwise: no advance knowledge or authorisation from Pezeshkian, from IRGC commander-in-chief Vahidi, or from the Supreme National Security Council, with Iranian investigations attributing the order to Hossein Taeb, a cleric who ran IRGC intelligence for years before being moved to the Basij and who opposed the deal from the start (Times of Israel, Jerusalem Post). Per §3.5.3 this is a single-outlet intelligence report relayed at second hand, and Tehran has neither confirmed nor denied it; treat it as the most credible available account, not as settled fact. But its implication is structural and cuts against optimism in both directions. It means the US-Iran track came closer to working than this series credited — and that it was destroyed by an actor no American or Omani negotiator could see, bind, or sanction. Under the multi-clock framework the negotiation-capacity clock has a defect no venue fixes: any successor understanding is only as durable as the acquiescence of factions outside the signing chain, in a system whose Supreme Leader has been invisible for six months. Analytical judgment: this is why the ceasefire probability holds at 2 rather than rising on news that the principals wanted a deal. A counterparty that cannot guarantee its own compliance is not a counterparty; it is a hope with a letterhead.",
    },
    {
      title: "Riyadh's brake comes off, and the market is pricing the absence of a calendar",
      body:
        "Two of the three restraints this series has carried through September were released in the same cycle. The Saudi-led coalition spokesman vowed a response under the right of self-defence after Saturday's Houthi projectile struck Al-Tuwal in Jazan, wounding two and damaging a mosque, and a source familiar with Saudi thinking told CNN that Riyadh is planning to retaliate and has informed allies (CNN, Arab News, Al Jazeera). The Houthis, through spokesman Yahya Saree, claim they struck a Saudi military base at Sharurah in Najran — the standard reciprocal framing, and per §3.5.3 not a reconciliation of the civilian damage Saudi Civil Defense documented. Only Baghdad's brake still functions: Iraq agreed to reopen two of the three Iran crossings it closed and admitted Iranian investigators to the Petroline probe. Brent's move quantifies what the loss of a dated track is worth — from a $104.47 close to a $107.54 settlement, up 2.9%, with a $108.40 high, against a pipeline carrying roughly 5 mb/d of rerouted crude to Yanbu that remains offline with a damaged pumping station and no restart date. Under the multi-clock framework the energy-infrastructure and coalition-cohesion clocks now worsen together while the active-deadline clock has nothing on it at all. Analytical judgment: Saudi retaliation is the single likeliest path from a two-chokepoint war to a three-front one, because it converts the Houthis from Iran's instrument into Riyadh's direct adversary while Hormuz is already closed and the bypass is already broken.",
    },
    {
      title: 'Taiwan: the assurance window is now half-spent',
      body:
        "No fresh Taiwan-specific development on Day 200; Day 199's hull-by-hull review request stands. What changed is the calendar. Taipei's guarantee of supply ran 'through September,' and September is now half over with Salalah postponed, no Qatari or Emirati cargo restart, and CPC already planning winter procurement to avoid interruption (Bloomberg, Taipei Times). Per §3.5.5 the exposure is unchanged and unforgiving: Taiwan imports roughly 96% of its energy, LNG supplies about half of power generation, some 60% of its oil and about a third of its gas normally transit Hormuz, and around a third of 2025's 23.6 Mt of LNG imports came from the Gulf — almost 8 Mt from Qatar alone, with no Qatari or Emirati cargoes landing in April or May. The LNG reserve runs near twelve days against a fourteen-day statutory floor not due until 2027. Under the multi-clock framework the energy-infrastructure clock reaches Taipei on a lag measured in shipping weeks, which is precisely why a mid-September date with no October cover is the thing to watch rather than the spot price. Analytical judgment: the operative risk for Taiwan is no longer a Hormuz closure — that is priced and substituted — but a second failure in the substitution chain, and Bab al-Mandeb under Houthi guns is exactly that. Winter procurement now has to be bought into a market where both of the Arabian Peninsula's maritime gates are contested at once.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DoD DCAS holds 18 killed / 687 wounded all-cause; per §3.5.3 keep the combat series and flag DCAS. A thirteenth consecutive quiet day for US casualties. The CENTCOM blockade series carries: 100 vessels redirected in 60 days since the July 14 resumption, four disabled, 26 humanitarian vessels permitted, zero passed without US permission, 15,000+ personnel assigned. CENTCOM has claimed nothing on the Hengam Island strike, and the New York Times account raises the question of whether the escalation the blockade answered was ever a decision of the Iranian state.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on Hormuz, Yemen and the Saudi retaliation question. Katz said Israel has 'no territorial ambitions' in Lebanon but will not withdraw from the ~700 sq km security belt, nor from the Ali al-Taher ridge position, until Hezbollah is disarmed nationwide. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and were reinforced on the day.",
    iran:
      "Official MOH war toll carries unchanged; Day 200 produced no new count. The Hengam Island vessel is now identified as the Indian-crewed El Gaia (13 rescued, 1 missing), revising the IRNA-relayed account of 1 killed — crew member Jamshid Rajabi — and 4 wounded of ten aboard; per §3.1 both accounts are carried and the casualty stays held separately and unattributed at 48 hours. The rights thread carries per §3.1: HRANA documents a continuing execution wave including six hanged at Vakilabad and Dastgerd on September 6 and 9; HRW and Amnesty ≥59 executed since the war's escalation, ≥78 at risk (incl ≥5 children). IAEA UNSC referral (23-3) carries. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "No new confirmed lethal toll on Day 200. The IOM put displacement from the past week's southwestern Yemen fighting at more than 46,000 people, against the UN envoy's 11,400+ households since September 3; the Houthis hold Mokha, Mayun and the Hanish islands with Bab al-Mandeb traffic near twelve vessels a day and no formal closure declared. Saudi Arabia added two wounded in Jazan and has vowed a self-defence response. Iraq agreed to reopen two of three Iran crossings and admitted Iranian investigators to the Petroline probe; the pipeline (~5 mb/d of rerouted crude to Yanbu) remains offline. One Indian seafarer is missing from the El Gaia. Lebanon (~4,300+/12,200+), Gulf (33+/~90+ Saudi injured; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
