import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged. Oman and Qatar put ending the state of war on the record and a New York Times account says a breakthrough may be possible, while Rezaei says Hormuz stays closed until Iran's conditions are met and the IDF is preparing for a possible return to war.",
      risk7d:
        "Extreme and unchanged. Trump says he has no immediate plans to strike but is locked and loaded, CENTCOM has briefed options, and a source says he is planning to bomb Iran. The Roosevelt is at least two weeks from the region, which argues for later in November rather than this week.",
      spillover:
        "Critical and unchanged. Saudi air defences intercepted a Houthi missile aimed at Madinah and a drone over the Eastern Province, UKMTO logged a tanker hit north of Qatar, and the IRGC claims more tanker fires in the strait.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "The New York Times, Reuters and Israeli officials via Ynetnews; Israel Hayom (search result); Fars via IranWire (search result)",
      event: "A reported breakthrough and a reported strike plan in the same report",
      summary:
        "Ynet relayed a New York Times account citing five American and Iranian officials that a breakthrough may be possible and that Tehran is weighing mediators' proposals that could reshape its nuclear programme. The same report says CENTCOM briefed Trump on options last week, the IDF has begun preparing, and a source says Trump is planning to bomb Iran. Fars, in an undated search result, called message exchanges routine.",
      impact:
        "No text, signatory or US-attended session, so it is logged as a claim. The negotiation and deadline clocks run in opposite directions.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: "Oman Ministry of Foreign Affairs; Qatar's prime minister via The Peninsula (QNA); CBS News",
      event: "Oman and Qatar put an end to the state of war on the record",
      summary:
        "Oman's foreign ministry said Badr Albusaidi and Abbas Araghchi want to move beyond de-escalation to lasting understandings, including maritime safety arrangements and joint technical mechanisms for trade and energy flows, that end the state of war. Qatar's prime minister called Araghchi and backed initiatives protecting navigation and a comprehensive agreement. CBS reports Araghchi called nine regional states.",
      impact:
        "The most concrete mediator language in weeks, but a principle without a schedule. Joint mechanisms sit close to the toll-institutionalisation prior.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: "Mohsen Rezaei via Free Malaysia Today (AFP) and Ynetnews; Al Mayadeen via Ynetnews",
      event: "Rezaei takes Hormuz to Moscow",
      summary:
        "Vladimir Putin received Mohsen Rezaei, secretary of Iran's Supreme National Security Council, in Moscow on 5 November. Rezaei said they discussed gas pipelines from Russia to Iran and that Putin stressed the inadmissibility of external interference. Per Ynet, he carried a message from Mojtaba Khamenei, and an Iranian source told Al Mayadeen he said Hormuz stays closed until Iran's conditions are met.",
      impact:
        "Moscow becomes a venue. All of it is Rezaei's rendering; no Kremlin readout was located.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: "JD Vance, Donald Trump and Chuck Schumer via CBS News; Ynetnews",
      event: "Vance says the war lost the midterms; Trump says he is locked and loaded",
      summary:
        "CBS reports Vice President JD Vance wrote on X that the reason Republicans lost is the war. Trump told the Financial Times he has no immediate plans to strike, adding that he is locked and loaded if needed, and said Vance was largely right about gas prices but he would decide the same again. Schumer said the war must end.",
      impact:
        "The political-will clock moves inside the administration. Trump's timing statements stay under the one-day-permit prior.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'high',
      source: "US officials via CBS News; Ynetnews",
      event: "The third carrier is at least two weeks away",
      summary:
        "CBS reports, citing US officials, that the USS Theodore Roosevelt makes a port call in Singapore on Friday and will not reach the Middle East for at least two weeks. Ynet reports US intelligence assessments that renewed strikes would not substantially change Tehran's position or likely topple its government.",
      impact:
        "The one hard posture input this cycle points to later in November, not this week. Graded on position, not statements.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy via Tasnim; UKMTO via National Security Journal",
      event: "The IRGC claims more tanker fires; UKMTO logs a tanker hit north of Qatar",
      summary:
        "Tasnim carried an IRGC statement that a tanker hit a mine south of the strait, a supertanker stopped in a massive fire to the east and a tug caught fire, naming no vessel, and that it seized two Lucas drones. UKMTO logged a tanker hit by two projectiles about 50 nautical miles north of Madinat ash Shamal at 23:20 UTC on 4 November, crew status unknown.",
      impact:
        "No link between the two streams is confirmed. The IRGC claims still name no hull, which keeps the claim-inflation prior live.",
    },
    {
      id: 7,
      direction: 'neutral',
      importance: 'high',
      source: "hormuz.now; Trading Economics; CBS News; AFP via The Peninsula",
      event: "Crossings fall to 2.6 a day while Brent recovers part of its fall",
      summary:
        "hormuz.now counted 18 AIS-visible tanker crossings in seven days, 2.6 a day against 47.6 before the crisis, and no LNG or LPG carrier. Brent rose 2.2% to $96.70 on CBS's print and about 4.9% to $99.39 on Trading Economics'. Wealth Club's Susannah Streeter said a release valve had been unscrewed by the midterm result.",
      impact:
        "The diplomacy-priced-not-supply gap narrowed from the price side. The prints use different methods and are not differenced.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Coalition Forces spokesperson and Qatar MOFA via The Peninsula; CBS News",
      event: "Saudi Arabia intercepts a Houthi missile aimed at Madinah; Qatar condemns it",
      summary:
        "The coalition spokesperson said Saudi air defences intercepted a ballistic missile launched toward the Madinah region and a drone over the Eastern Province. Qatar's foreign ministry called the attempt a blatant provocation of Muslims and said Saudi security is integral to its own. CBS reports Houthi claims on Riyadh and Dammam airports, and Iran called accusations of backing the Houthis baseless.",
      impact:
        "The Saudi theatre widens to a holy city. Houthi claims stay unadopted; interceptions are graded on Saudi statements.",
    },
    {
      id: 9,
      direction: 'neutral',
      importance: 'medium',
      source: "US Treasury via CBS News",
      event: "Treasury sanctions a shadow-fleet fraud network",
      summary:
        "CBS reports US sanctions on two Indian nationals running a maritime fraud network for Iran's shadow fleet, with Treasury Secretary Scott Bessent saying you are either with us or against us. No Treasury release was opened this run.",
      impact:
        "Economic pressure continues alongside the talks. It does not move the probability.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Iran International (search result)",
      event: "Rights reporting: three January protest detainees sentenced to death",
      summary:
        "Iran International, in a search-result summary dated 1 November, reports a rights group saying three detainees from the January protests were sentenced to death, and that the Supreme Court upheld an espionage death sentence against Mohammad Naderi. The names of the three were not confirmed.",
      impact:
        "The execution series continues alongside the war. It is carried unmerged with the war toll.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported this cycle and no CENTCOM statement located. The thirty-seventh cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll and no casualties reported from any US action this cycle. The execution series carry unchanged and unmerged. The fifty-eighth day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,715+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No addition adopted. The IRGC tanker-fire claims name no vessel or casualty, and crew status on the tanker UKMTO logged north of Qatar is unknown. CBS's at-least-20 killed in Houthi strikes on Saudi airports is held apart beside AFP's 24.",
    },
  },
  exec:
    "The reported breakthrough and the reported strike plan arrived on the same day, and neither has a text behind it. Ynet relayed a New York Times account, citing five American and Iranian officials, that a breakthrough may be possible and that Tehran is weighing mediators' proposals that could reshape its nuclear programme. The same Ynet report says the IDF has begun preparing for a possible return to war, and quotes a source saying of Trump: \"He's planning to bomb Iran.\" The Gulf mediators moved on the record. Oman's foreign ministry said Badr Albusaidi and Abbas Araghchi want understandings that \"end the state of war,\" and Qatar's prime minister called Araghchi to back a comprehensive agreement. Tehran's security chief set the price. Mohsen Rezaei, received by Vladimir Putin in Moscow, said they discussed Russian gas pipelines to Iran; an Iranian source told Al Mayadeen, per Ynet, that he said Hormuz stays closed until Iran's conditions are met. In Washington, Vice President JD Vance wrote that \"the reason we lost is the war,\" and Trump told the Financial Times he had no immediate plans to strike but was \"locked and loaded.\" The USS Theodore Roosevelt is at least two weeks from the region, CBS reports. At sea, the IRGC, via Tasnim, claimed a tanker mined and a supertanker and a tug on fire, naming none, while UKMTO logged a tanker hit by two projectiles north of Qatar. hormuz.now counted 2.6 tanker crossings a day against 47.6 before the war, and Brent recovered part of Wednesday's fall. Saudi air defences intercepted a Houthi missile aimed at Madinah. Direction stays mixed; the probability holds at 10.",
  implications: [
    {
      title: "A breakthrough on paper and a strike plan in briefing: the negotiation clock and the deadline clock run in opposite directions",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock improved on the record this cycle while the active-deadline clock did not ease. On the record, Oman's readout of the Albusaidi-Araghchi call speaks of understandings that would \"end the state of war\" and of joint technical mechanisms for trade and energy flows, and Qatar's prime minister called Araghchi to back a comprehensive agreement. Off the record, the New York Times, via Ynet, cites five American and Iranian officials saying a breakthrough may be possible and that Tehran is weighing proposals that could reshape its nuclear programme. It carries no text, no named signatory and no session the United States attends, so it is logged as a claim, not progress. Against it, the same Ynet report says CENTCOM's Adm. Brad Cooper briefed Trump last week on options, the IDF has begun preparing, and one source says: \"He's planning to bomb Iran. Don't listen to what he says.\" Trump told the Financial Times, per CBS, \"we're locked and loaded if we need to go, but there may be no reason for it.\" The one hard input points to delay rather than imminence: the Roosevelt calls at Singapore on Friday and will not reach the region for at least two weeks, which puts the third carrier near the end of November. Vance's post that \"the reason we lost is the war\" moves the political-will clock further. The probability holds at 10: the mediators' readouts are more concrete, Tehran's conditions more explicit, and neither has been tested.",
    },
    {
      title: "Hormuz is the price, and Moscow becomes a venue",
      body:
        "Tehran answered the mediators by naming Hormuz as its leverage. Rezaei, by his own account, carried a message from Mojtaba Khamenei to Vladimir Putin, discussed gas pipelines from Russia to Iran, and heard Putin stress the inadmissibility of external interference; an Iranian source told Al Mayadeen he said the strait stays closed until Iran's conditions are met. These are Rezaei's renderings, and no Kremlin readout was located. Two priors apply. Toll-institutionalisation: Oman's \"joint technical mechanisms\" and Iran's claim to manage the strait sit on the same axis, and any interim text that codifies an Iranian role makes it durable. Answer-by-omission: neither Rezaei nor the IRGC adopted the reported nuclear concession. The attack series continued. The IRGC, via Tasnim, claimed a mined tanker, a burning supertanker and a burning tug, named no hull, and said it seized two Lucas drones. UKMTO, via National Security Journal, logged a tanker hit by two projectiles about 50 nautical miles north of Madinat ash Shamal at 23:20 UTC on 4 November, crew status unknown, with no link to the Iranian claims confirmed. That is the claim-inflation prior again. Flows fell: hormuz.now counted 18 tanker crossings in seven days, 2.6 a day, against 3.0 a cycle earlier and 47.6 before the crisis. Brent recovered part of its fall, to $96.70 on CBS's print and about $99.39 on Trading Economics'. The diplomacy-priced-not-supply gap narrowed from the price side, not the flow side.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; the price relief is partly reversed and volume is unchanged",
      body:
        "No fresh Taiwan-specific development was located this cycle, and prior assessments are unchanged. Two inputs move against Taipei. On price, Brent gave back roughly half of Wednesday's post-election fall within a day, to between $96.70 and about $99.39 depending on the print. That is the volatility this file flagged on Day 251: relief priced on an election and an unpublished draft is relief a single statement can reverse. On volume, hormuz.now counted no LNG or LPG carrier crossing in the last seven days and one LNG carrier in thirty, with four LNG carriers visible on AIS in the region; QatarEnergy's force majeure, last reported in late September, runs into early December. The Oman-Iran language on joint technical mechanisms for energy flows is the first readout this cycle that addresses the commodity Taiwan most needs, but it is a principle, not a schedule. The supplementary budget for Taipower and CPC remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split stays held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle.",
    iran:
      "No new official war toll. The execution series carry unchanged and unmerged; new death sentences are reported but not adopted.",
    other:
      "+0 adopted. IRGC tanker-fire claims name no vessel; the UKMTO tanker's crew status is unknown; Houthi-strike deaths in Saudi Arabia are held apart.",
  },
};

export default data;
