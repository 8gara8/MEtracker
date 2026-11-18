import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. Iran answered the US strike on Qeshm with drones at a US base in Kuwait and another launch at Bahrain, and its foreign ministry now warns host states directly against letting Washington use their territory.",
      risk7d:
        "Extreme and unchanged. The strike-and-counter-strike loop now runs through two host states, most US strikes go undisclosed, Israel's Mossad chief has lobbied for joint strikes, and crew casualties have returned to the strait.",
      spillover:
        "Critical and unchanged. The Houthis fired cruise missiles at Riyadh as the coalition struck 60 targets in Yemen, an Emirati-operated vessel was hit with 11 crew injured, and Iraq's Jurf al-Sakhr deadline falls on Friday.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Iran's Army via Tasnim; Kuwaiti military and foreign ministry via Times of Israel and Gulf News",
      event: "Iran's Army says its drones struck a US base in Kuwait",
      summary:
        "Iran's Army said its combat and suicide drones hit Patriot air-defence systems and drone and missile launch platforms at Ali Al-Salem Air Base early Wednesday, warning that its response would have no geographical limits. Kuwait said its air defences engaged hostile drones, reported no damage and condemned a dangerous escalation, citing Resolution 2817 and Article 51. The Times of Israel called it the first Iranian attack on Kuwait since September.",
      impact:
        "Iran answers the Qeshm strike through a second host state rather than a US platform.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'medium',
      source: "Bahrain Defence Force and CENTCOM via Gulf News; Times of Israel",
      event: "Bahrain intercepts another attack; a further launch at Kuwait early Thursday",
      summary:
        "Bahrain said it intercepted Iranian aerial attacks again, accusing Tehran of a systematic hostile approach; Gulf News counts four attacks in six days. CENTCOM said one-way attack drones were intercepted with no damage to US equipment or injury to personnel. Gulf News logged another Iranian launch at a US airbase in Kuwait early Thursday, with no immediate damage or casualties reported.",
      impact:
        "The every-other-day Bahrain rhythm becomes a near-daily, two-host pattern.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Iranian foreign ministry and Hamidreza Haji Babaei via Iran International",
      event: "Tehran warns host states; deputy speaker names bypass routes as targets",
      summary:
        "Iran's foreign ministry called its actions against US forces legitimate self-defence, said it had targeted air defences and Patriot batteries at two regional bases, and warned any repeated aggression would bring a decisive and regrettable response. It urged neighbours to stop Washington using their territory. Deputy speaker Hamidreza Haji Babaei called for targeting pipelines and ship-to-ship transfers that bypass Hormuz.",
      impact:
        "The threat now extends from US assets to the hosts' own energy bypass routes.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi-led coalition and Saudi Civil Defence via Gulf News; Yahya Saree via Iran International",
      event: "Houthis fire cruise missiles at Riyadh; coalition strikes 60 targets",
      summary:
        "The Saudi-led coalition said it intercepted several Houthi cruise missiles aimed at the Riyadh region, and an explosion was heard in the capital. Houthi spokesman Yahya Saree claimed hits on King Khalid airport, Riyadh's financial centre, Jizan and Khamis Mushait, which Saudi Arabia has not confirmed. The coalition said it struck 60 Houthi targets in Sanaa, Hodeidah, Saada and Amran; Houthi-run health officials reported at least 17 killed.",
      impact:
        "The Yemen front reaches the Saudi capital as the Gulf war widens.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "ADNOC L&S via The Peninsula; Oman via Gulf News; Iran's Army via Press TV; UKMTO via Iran International",
      event: "ADNOC vessel attacked: 11 crew injured, one missing; Iran claims more mine strikes",
      summary:
        "ADNOC Logistics & Services said one of its vessels came under attack in the Strait of Hormuz on Tuesday evening; 11 crew were injured and one is missing, with search and rescue continuing. Oman reported 24 evacuated from a burning tanker off Musandam. Iran's Army claimed three tankers hit mines east of the strait. UKMTO reported a further tanker struck off Oman late Wednesday, crew safe.",
      impact:
        "Crew casualties return to the strait, raising the cost of substitute and transit cargoes.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: "Qatari foreign ministry via The Peninsula; Saudi, UAE and GCC statements via Gulf News",
      event: "Gulf states condemn the attacks on Kuwait and Bahrain",
      summary:
        "Qatar's foreign ministry strongly condemned Iran's renewed attacks on Kuwait and Bahrain as a flagrant violation of sovereignty and a dangerous escalation that threatens efforts to contain tensions, while calling for dialogue. Saudi Arabia condemned the attacks on Kuwait, Bahrain and an Emirati tanker; the UAE and the GCC secretary-general condemned the Kuwait attack, and Arab interior ministers condemned attacks on Saudi Arabia, Bahrain and Kuwait.",
      impact:
        "The Gulf closes ranks again while still asking for diplomacy rather than retaliation.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: "Times of Israel; Abbas Araghchi via Iran International; Kazem Gharibabadi via Press TV",
      event: "Qatari and Iranian officials meet in Oman; Iran says its plan awaits a US answer",
      summary:
        "The Times of Israel reported that Qatari and Iranian officials met in Oman on Tuesday, and that Qatar's Majed Al Ansari warned escalation posed an extremely grave danger to an agreement. Araghchi said the Oman talks aimed to prevent renewed fighting and build a regional security framework without foreign military involvement. Deputy Foreign Minister Kazem Gharibabadi said the two-day Hormuz plan remains on the table and Washington must respond.",
      impact:
        "Talks continue with no published outcome, five days before Qatar's reported window closes.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "NBC News via Iran International; White House official via Times of Israel",
      event: "NBC: near-daily US-Iran exchanges, most US strikes undisclosed",
      summary:
        "NBC, citing two US officials and a person familiar with the matter, reported that the US and Iran have exchanged strikes almost daily, with most US strikes over the past two months not publicly disclosed. The Pentagon declined to comment. A White House official said Trump believes economic pressure has been so damaging that major combat operations are unnecessary, while keeping all options available.",
      impact:
        "The visible strike rhythm understates the real one; disclosure remains a policy choice.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Reuters via Times of Israel; Gulf News",
      event: "Mossad chief reportedly lobbied Washington for fresh joint strikes",
      summary:
        "Two people briefed on the visit told Reuters that Mossad director Roman Gofman advocated joint US-Israeli strikes in meetings with US officials, including CIA Director John Ratcliffe, and that Netanyahu believes the window is narrowing. The IDF reportedly assesses Iran poses no imminent threat to Israel. Netanyahu's office did not comment. CENTCOM's Adm. Brad Cooper held a joint situational assessment with Israeli commanders.",
      impact:
        "The caretaker government presses for war while Washington signals pressure over combat.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'low',
      source: "Marco Rubio via Iran International; Abbas Araghchi via Tasnim; State Department via Gulf News",
      event: "Rubio sees no imminent threat from dirty-bomb reporting; Araghchi calls it rubbish",
      summary:
        "Secretary of State Marco Rubio said he saw no imminent threat after CNN reported Iranian plans for a dirty-bomb or chemical attack in Washington, adding that some intelligence sources are liars. Araghchi called the reports rubbish and Iraq War-style propaganda with Israeli fingerprints. The State Department reissued security alerts urging heightened vigilance for US citizens in Bahrain and Saudi Arabia.",
      impact:
        "Washington cools the homeland-threat frame even as it warns citizens in two Gulf hosts.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'medium',
      source: "Shafaq News; Iran International",
      event: "Jurf al-Sakhr talks stall with Qaani in Baghdad",
      summary:
        "Talks between the Coordination Framework and Kataib Hezbollah, with Quds Force commander Esmail Qaani taking part on a mission from Mojtaba Khamenei, failed to resolve the Jurf al-Sakhr standoff. Prime Minister Ali al-Zaidi plans to take security control by Friday evening with no extension. One proposal would move Kataib Hezbollah to the Syrian border. A Kataib Hezbollah official said if war is imposed, the group will fight.",
      impact:
        "Tehran's direct mediation shows how much it stakes on its strongest Iraqi ally.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'low',
      source: "Iran's mission in Vienna via Iran International; Rafael Grossi via Times of Israel; Hana, Kurdpa and HRANA via Iran International",
      event: "Iran rules out normal IAEA inspections; protest arrests continue",
      summary:
        "Iran's mission in Vienna said normal safeguards work cannot resume until US and Israeli threats are permanently removed, adding Iran has not suspended its obligations, and criticised Rafael Grossi. Grossi, at the Board of Governors, called the inspection terms of a planned US-Saudi nuclear deal very satisfactory. Hana and Kurdpa reported arrests and pellet fire at Abdanan protests; HRANA reported five job seekers detained in Khuzestan.",
      impact:
        "The nuclear file stays closed to inspectors while internal dissent continues under wartime pressure.",
    },
    {
      id: 13,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Chinese foreign ministry",
      event: "Crossings fall to 1.6 a day; Brent at lowest since August; China silent on Iran",
      summary:
        "hormuz.now counted 11 tanker crossings in seven days, 1.6 a day against 47.6 pre-crisis, and no LNG or LPG carrier. Brent fell 1.87% to about $91.43, its lowest since 31 August, on a US crude build and expectations of no full-scale war. China's Guo Jiakun said the Shenzhen trilateral would cover important issues bearing on global peace, without naming Iran.",
      impact:
        "Oil prices fall as physical flows fall, while LNG through Hormuz stays at zero.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. CENTCOM reports no injury from the drones aimed at Bahrain, and no US casualty is reported from the Kuwait launches. The fiftieth cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty located this cycle. Gaza and West Bank deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll and no casualty report from Iranian territory this cycle. Darzi's claim of more than 5,000 dead is held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,214+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +11 wounded",
      status:
        "ADNOC reports 11 crew injured in the attack on its vessel; one missing crew member is held apart until confirmed. Houthi-run health officials' count of at least 17 killed in coalition strikes is held apart. No casualties reported in Kuwait or Bahrain.",
    },
  },
  exec:
    "Iran answered Tuesday's US strike on Qeshm with fire at a second host state, and the Houthis widened the arc to Riyadh. Iran's Army said its drones hit Patriot batteries and launch platforms at Ali Al-Salem Air Base in Kuwait early Wednesday, the first Iranian attack on Kuwait since September by the Times of Israel's count; Kuwait said its air defences engaged hostile drones, reported no damage and condemned a \"dangerous escalation.\" Bahrain reported another interception, and Gulf News logged a further launch at a US base in Kuwait early Thursday, again with no damage reported. Iran's foreign ministry called the attacks self-defence and warned neighbours to stop Washington using their territory. The Saudi-led coalition said it intercepted Houthi cruise missiles aimed at Riyadh and struck 60 Houthi targets; Houthi-run health officials reported at least 17 killed. At sea, ADNOC said 11 crew were injured and one is missing after an attack on one of its vessels in the strait, while Iran's army claimed three more tankers hit mines. Qatar condemned the attacks on Kuwait and Bahrain as a danger to diplomacy even as Iranian and Qatari officials met in Oman. NBC reported near-daily US-Iranian exchanges, most undisclosed, and Reuters sources said Mossad chief Roman Gofman lobbied Washington for fresh joint strikes; a White House official said major combat is unnecessary. Rubio saw no \"imminent threat\" from the reported dirty-bomb plot. hormuz.now counts 1.6 tanker crossings a day against 47.6 pre-crisis; Brent fell 1.9% to about $91.4. The Shenzhen trilateral meets today. Direction stays escalating; the probability eases to 7.",
  implications: [
    {
      title: "The loop closes: Qeshm is answered in Kuwait, and the Houthis add Riyadh",
      body:
        "Under the multi-clock framework, the active-deadline clock has turned from an exchange into a cycle. Day 264's reading was that a proportional, casualty-free US strike on Qeshm left neither side anything to avenge. Iran replied anyway, and chose a second host rather than a US platform: its Army says drones hit Patriot batteries and launch platforms at Ali Al-Salem in Kuwait, the first Iranian attack there since September by the Times of Israel's count. Ebtesam Al Ketbi of the Emirates Policy Center, quoted by Gulf News, named the pattern: the United States strikes Iran, but Iran \"strikes the Gulf instead.\" Ceilings still hold. Kuwait and Bahrain report no damage, CENTCOM reports interceptions, and Tasnim's claim of hits is unverified. Three things widened in 24 hours. Kuwait moved from unattributed alert to named target. Iran's foreign ministry now addresses the hosts directly, urging them to stop Washington using their territory, while deputy speaker Hamidreza Haji Babaei names bypass pipelines and ship-to-ship transfers as targets, the bypass-as-target prior stated outright. And the Houthis fired cruise missiles at Riyadh as the coalition struck 60 targets in Yemen, with at least 17 killed by Houthi-run health officials' count. NBC's report that most US strikes over two months went undisclosed means the visible rhythm understates the real one. ADNOC's 11 injured crew end a run of cycles with no adopted casualty change. Direction stays escalating; the probability eases from 8 to 7.",
    },
    {
      title: "Mediators keep meeting while warning that the attacks are undoing their work",
      body:
        "The negotiation-capacity clock is now running against its own sponsors' warnings. Qatar's foreign ministry called the attacks on Kuwait and Bahrain \"a dangerous escalation that threatens to complicate efforts aimed at containing tensions,\" and spokesman Majed Al Ansari, per the Times of Israel, called escalation an \"extremely grave danger\" to an agreement. Yet the same report places Qatari and Iranian officials in Oman on Tuesday, and Araghchi says the Oman talks aim to prevent renewed fighting and build a regional security framework without foreign military involvement, a framework the hosts under fire have not endorsed. Deputy Foreign Minister Kazem Gharibabadi, via Press TV, says the two-day plan is \"on the table\" and Washington \"must now respond.\" The sequencing wall is unchanged: Gulf News reports Iran wants the blockade lifted, assets freed and exports restored first, while Washington wants verifiable nuclear steps from the start. Qatar's reported window closes around 24 November, five days away, still with no named US negotiator. Washington's signals split. A White House official says economic pressure makes major combat unnecessary, and Rubio sees no imminent threat from the dirty-bomb reporting. Israel pulls the other way: Reuters sources say Mossad chief Roman Gofman lobbied for joint strikes and that Netanyahu sees the window narrowing, though the IDF reportedly judges no imminent threat. The caretaker-risk prior strengthens. China's Guo Jiakun previewed Shenzhen as an exchange on \"global peace\" without naming Iran; Iraq's Jurf al-Sakhr talks stalled with Esmail Qaani in Baghdad.",
    },
    {
      title: "Taiwan: oil falls to a three-month low as the strait empties further and gas stays shut",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. hormuz.now counts 11 tanker crossings in seven days, 1.6 a day against 47.6 pre-crisis and down from 2.0, with 40 commercial ships in total and no LNG or LPG carrier in seven days (one of each in 30). PortWatch puts tanker deadweight at 0.8% of normal to 15 November; Kpler's preliminary estimate of about 8.3 mb/d, which counts dark transits, still dates from the week to 11 November. Brent fell 1.87% to about $91.43 on Wednesday, its lowest since 31 August and about 20% down this month, with Trading Economics citing a 3.38 million-barrel US crude build and expectations that Washington will avoid full-scale war. That is the oil-priced-as-surplus prior at its starkest: physical flow through the strait falls while the price falls with it. For Taiwan the binding constraint is gas, not crude. No LNG moves through Hormuz, and on this file's record QatarEnergy's force majeure runs to end-December for some buyers. Three marginal risks grew. An attack on an Emirati-operated vessel injured 11 crew, which bears on war-risk premiums and crewing for substitute cargoes. Haji Babaei's threat against bypass pipelines and ship-to-ship transfers targets exactly the routes that replace Hormuz volumes. Kuwait, a northern Gulf exporter, is now a named target. The Shenzhen trilateral today is the next East Asian read; the Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US injury from the Bahrain or Kuwait launches; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Darzi's 5,000-plus claim is held apart. HRANA's death-sentence and execution series carry unmerged.",
    other:
      "+11 wounded from the ADNOC vessel attack. The missing ADNOC crew member, Houthi-run health officials' 17 dead, Yemeni battlefield tallies, IMO incident counts and GCC figures are held apart.",
  },
};

export default data;
