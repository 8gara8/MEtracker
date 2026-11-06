import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged. Iran sent a nuclear proposal through Qatar and Trump called Qatar's Emir, but Tehran will discuss the proposal only after its seven conditions are met while Washington reportedly wants the nuclear file first.",
      risk7d:
        "Extreme and unchanged. Trump says the world will soon know his strike decision and that the US is very much locked and loaded. Iran's army relays a directive to respond without geographic limits. The last carrier reading still argues for late November rather than this week.",
      spillover:
        "Critical and unchanged. A seafarer died aboard the Velos Sapphire after a suspected projectile hit north of Qatar, IRGC advisers name the UAE and Bahrain as potential targets, and Houthi missiles at Najran and a drone over Mecca were intercepted.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "A senior Iranian official to Reuters via The Times of Israel; Israel National News; The Jerusalem Post",
      event: "Iran sends a nuclear proposal through Qatar, behind its seven conditions",
      summary:
        "A senior Iranian official told Reuters that Tehran sent Washington a nuclear proposal through Qatari mediators, that Washington is reviewing it, and that it will be discussed only after the US meets seven conditions, including sanctions relief, unfrozen assets and war compensation. Israel National News reports the administration insists the nuclear file come first. The Jerusalem Post relays a New York Times account that Iran is weighing mediators' concrete proposals.",
      impact:
        "The first Iranian document in weeks, but anonymous, unpublished and sequenced against Washington's order. Logged as a claim.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "A political-security source, Mohsen Rezaei and Dmitry Peskov via Tasnim",
      event: "Tehran denies a new initiative in Moscow",
      summary:
        "A senior Iranian political-security source told Tasnim that reports of a new Rezaei initiative to Putin were completely fabricated, that the Moscow talks focused on ending the war, and that Iran sees no useful step unless all seven conditions are implemented fully and simultaneously. Tasnim says the Kremlin, through Peskov, confirmed the meeting covered bilateral relations and regional developments.",
      impact:
        "The leader-against-concession prior in operational form. The Kremlin confirmation is Tasnim's report, not a Kremlin page.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: "Qatar Amiri Diwan and Ministry of Defence via The Peninsula (QNA); Tasnim; CBS News",
      event: "Trump calls Qatar's Emir; Qatar's defence minister calls Hegseth",
      summary:
        "Qatar's royal court said Trump and Sheikh Tamim discussed Qatar's efforts to bridge gaps and support negotiations toward a comprehensive agreement, with the Emir stressing maritime navigation and energy security; Iran was not named. Qatar's defence minister held a call with Secretary of War Pete Hegseth, topics unstated. Araghchi called the UAE's Abdullah bin Zayed after calls with seven governments on Thursday.",
      impact:
        "Doha is the channel for both the proposal and the presidential call. No session or text follows yet.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump via CBS News and Israel National News",
      event: "Trump says the world will soon know his decision",
      summary:
        "Trump told reporters the world would soon know his decision on new strikes, saying he would rather not destroy the rest of the country if possible but maybe would have to, and that the US is very much locked and loaded. CBS reports he said Iran would need 25 years to rebuild and that the midterm losses were partly a rejection of the war.",
      impact:
        "Timing language, graded under the one-day-permit prior. Six called-off strikes since July remain the base rate.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Velos Tankers via Asharq Al-Awsat, CBS News and Greek Reporter",
      event: "The tanker hit north of Qatar is named, and a seafarer is dead",
      summary:
        "Velos Tankers said a crew member was found dead aboard the Marshall Islands-flagged Velos Sapphire after a suspected projectile hit the port quarter at about 01:15 local time on 5 November while the ship sailed empty toward Bahrain. The crew put out the fire and no one else was hurt. Greek Reporter says UKMTO placed the strike about 50 nautical miles north of Qatar.",
      impact:
        "The first named hull and death in this attack series, from the manager, not the IRGC. Origin not established; no attribution adopted.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "IRGC Navy via Tasnim; UKMTO via Asharq Al-Awsat; CBS News",
      event: "The IRGC claims two more mined tankers and more drones",
      summary:
        "Tasnim carried an IRGC Navy statement that two tankers that had switched off their transponders hit mines and caught fire in and east of the strait, naming neither, and that the strait remains closed until the seven conditions are met. The IRGC also claims two more MQM-170 drones over Qeshm, six in all, and its 55th MQ-9. UKMTO logged a separate waterline explosion off Oman, crew safe.",
      impact:
        "Claims still name no hull; CBS says no maritime authority confirmed them. The claim-inflation prior holds.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Army spokesman Mohammad Akraminia and IRGC advisers Ali Balali and Hamid Reza Moqaddamfar via Tasnim",
      event: "Iran widens its declared target set",
      summary:
        "Akraminia relayed directives from Mojtaba Khamenei, after a meeting with commanders, to respond quickly and without geographical limitations and to update the target database to cover all US-Israeli assets. IRGC advisers said any country assisting a new US attack becomes a legitimate target, naming the UAE and Bahrain, and that responses would go beyond the bases used.",
      impact:
        "Deterrence by declared scope. It strains the mediator-as-victim prior: Tehran threatens Gulf capitals it is also phoning.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Trump, the Prime Minister's Office, Isaac Herzog and Mike Huckabee via JTA and CNN; Ynetnews",
      event: "Trump's plan to end military aid to Israel this year shakes Jerusalem",
      summary:
        "Trump said US military aid to Israel, about $3.8 billion a year under an MoU to 2028, gets cut off at the end of the year. Herzog said it hit him like a bolt from the blue. Per JTA, the Prime Minister's Office called the move from aid to partnership a sign of strength, and Huckabee said it was jointly agreed. Ynet says Herzog names the mandate recipient on Sunday.",
      impact:
        "Coalition cohesion strains inside the US-Israel pair during government formation. Israel's independence prior now has a budget dimension.",
    },
    {
      id: 9,
      direction: 'neutral',
      importance: 'medium',
      source: "Trading Economics; hormuz.now; GasBuddy via CBS News",
      event: "Brent ends its steepest weekly fall since March 2020; crossings tick up to 3.0 a day",
      summary:
        "Trading Economics put Brent near $97.76 on 6 November, down 0.54% on the day and more than 12.5% on the week. hormuz.now counted 21 AIS-visible tanker crossings in seven days, 3.0 a day against 47.6 before the crisis, and no LNG or LPG carrier. GasBuddy put the US gasoline average at $4.06 a gallon.",
      impact:
        "Diplomacy-priced-not-supply: price fell on an election and a proposal while flows stay about 94% below normal.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Saudi-led coalition and the Houthis via CBS News; Esmaeil Baqaei via Tasnim; EU statement via Eunews",
      event: "The Saudi theatre continues",
      summary:
        "CBS reports the coalition intercepted two Houthi ballistic missiles aimed at Najran and a drone in the Mecca region, and the Houthis say a coalition strike on a Taiz market killed or wounded more than 30. Iran's foreign ministry spokesman rejected Kaja Kallas's claim of Iranian involvement in Yemen; the EU's 2 November statement called on Iran to end military support to the Houthis.",
      impact:
        "The holy-city targeting pattern repeats. Houthi casualty claims stay unadopted.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported this cycle and no CENTCOM statement located. The thirty-eighth cycle with no disclosure statement.",
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
        "No new official war toll and no casualties reported from any US action this cycle. The execution series carry unchanged and unmerged. The fifty-ninth day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+1 killed, +0 wounded",
      status:
        "+1 adopted: the Velos Sapphire seafarer, on the manager's statement, with no attribution. The Houthi claim of more than 30 killed or wounded at a Taiz market and earlier Saudi-airport tolls are held apart.",
    },
  },
  exec:
    "Tehran put a nuclear proposal on the table and a precondition in front of it. A senior Iranian official told Reuters, via the Times of Israel, that Iran sent Washington a nuclear proposal through Qatar but will discuss it only after the United States meets seven conditions, including sanctions relief, unfrozen assets and war compensation; the official said Washington is reviewing it, while Israel National News reports the administration wants the nuclear file first. Tasnim's source said Mohsen Rezaei brought no new initiative to Moscow and that the conditions must be met \"fully and simultaneously.\" Trump called Qatar's Emir about Doha's mediation, Qatar's defence minister spoke with Pete Hegseth, and Abbas Araghchi called the UAE and seven other governments. Trump also said the world would soon know his decision on strikes: \"I would rather not destroy the rest of the country if possible, but maybe I'll have to.\" Iran's army spokesman said the supreme leader ordered responses without geographic limits, and IRGC advisers said states that help a US attack become targets. At sea, the strike UKMTO logged north of Qatar now has a name and a death: Velos Tankers said a seafarer died aboard the Marshall Islands-flagged Velos Sapphire after a suspected projectile hit; the origin is not established. The IRGC claimed two more mined tankers, naming none. hormuz.now counted 3.0 crossings a day against 47.6 before the war, and Brent ended a week down more than 12.5%, near $97.76. In Israel, Trump's plan to end military aid this year hit President Isaac Herzog \"like a bolt from the blue.\" Direction stays mixed; the probability holds at 10.",
  implications: [
    {
      title: "A proposal behind a precondition: the negotiation clock moves on paper and stalls on sequence",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock produced its first Iranian document in weeks and met a sequencing wall the same day. A senior Iranian official told Reuters that Tehran sent a nuclear proposal through Qatar and that Washington is reviewing it, but that it will be discussed only after the seven conditions are met. Israel National News reports the administration wants the nuclear file addressed first. Those orderings are incompatible, and neither the proposal nor the full list of conditions is published. Tasnim's political-security source called reports of a new Rezaei initiative in Moscow \"completely fabricated\" and said the conditions must be implemented \"fully and simultaneously,\" which is the leader-against-concession prior in operational form. The mediator track widened: Qatar's royal court said Trump called the Emir about Doha's efforts to bridge gaps toward \"a comprehensive agreement,\" Qatar's defence minister spoke with Pete Hegseth, and Araghchi called eight governments in two days. Against that, Trump said the world would know his decision \"soon enough\" and that the United States is \"very much locked and loaded.\" Under the one-day-permit prior, six called-off strikes since July remain the base rate, and the last carrier reading, carried from the prior cycle, has the Roosevelt at least two weeks out on 6 November, which still points to late November. The probability holds at 10: a document exists, but it is described only by Iran, its sequencing is contested, and the only US position on it is second-hand.",
    },
    {
      title: "A name and a death at sea, and Tehran widens its declared target set",
      body:
        "The maritime series produced what the claim-inflation prior said would come from a third party rather than the IRGC: a named hull and a confirmed death. Velos Tankers, the Athens-based manager, said a seafarer was found dead aboard the Marshall Islands-flagged Velos Sapphire after a suspected projectile hit at about 01:15 local time on 5 November as the ship sailed empty toward Bahrain; Greek Reporter says UKMTO placed the strike about 50 nautical miles north of Qatar. The origin is not established and Iranian media framed the fires as mine strikes, so this file adopts the death but no attribution, and the count of days without a confirmed Iranian attack on a host state's territory continues. The IRGC claimed two more mined tankers on 6 November, naming neither, after five tankers and a tug a day earlier; CBS reports no maritime authority confirmed them. UKMTO, via Asharq Al-Awsat, logged a separate waterline explosion off Oman, crew safe. Deterrence messaging widened in scope: Iran's army spokesman relayed a directive from the leader to respond \"without geographical limitations,\" and IRGC advisers named the UAE and Bahrain as hosts whose bases would make them targets. That strains the mediator-as-victim prior: Tehran threatens Gulf capitals it is also phoning. Crossings ticked up to 3.0 a day from 2.6, noise around a 94% shortfall.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; the weekly price relief holds while LNG volume stays at zero",
      body:
        "No fresh Taiwan-specific development was located, and prior assessments are unchanged. Brent near $97.76 on Trading Economics closed a week down more than 12.5%, its steepest weekly fall since March 2020, which eases the near-term cost of CPC's crude cargoes. The diplomacy-priced-not-supply prior still holds: the fall was priced on an election and a reported proposal, not on flow. hormuz.now counted no LNG or LPG carrier crossing in seven days and one LNG carrier in thirty, so the commodity Taipower most depends on is untouched by any text. The new risk is to the cost of transit rather than its volume: a named tanker with a dead crew member, struck inside the Gulf rather than at the strait, is the kind of event that raises war-risk cover for every Gulf loading, including Qatari LNG once force majeure lifts (last reported into early December). Tehran's sequencing, conditions first and nuclear later, leaves the joint technical mechanisms for energy flows that Oman floated last cycle without a schedule. The supplementary budget for Taipower and CPC remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split stays held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle.",
    iran:
      "No new official war toll. The execution series carry unchanged and unmerged.",
    other:
      "+1 adopted: the Velos Sapphire seafarer, on the manager's statement, unattributed. IRGC tanker claims name no vessel or casualty; Houthi-reported Taiz casualties are held apart.",
  },
};

export default data;
