import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. Tehran signals it will try to run the US blockade and threatens Gulf oil if its tankers are fired on, while Trump calls Iran's terms unacceptable and Berlin talks with Qatar made no significant progress.",
      risk7d:
        "Extreme and unchanged. A tanker convoy would force Washington to choose between letting the blockade erode and firing on Iranian hulls; the IRGC now names US bases in Europe and host countries as targets.",
      spillover:
        "Critical and unchanged. The Saudi-led coalition struck Hodeidah port and Sanaa, the Houthis claim strikes on Jizan and Shuqaiq, and a tanker burned off Khasab; Iraq's Jurf al-Sakhr handover is the one easing.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Araghchi, Fars, lawmakers, Kpler, TankerTrackers and Al-Monitor via Iran International; Press TV",
      event: "Iran signals tankers will try to run the US blockade",
      summary:
        "Araghchi told ILNA the blockade must be broken and Iran will pursue both exports and talks. Lawmaker Mohammad Bayat urged readied tankers and an ultimatum, and prayer leaders spoke of cargoes sailing from Kharg for China. Guards-linked Fars threatened oil facilities in six GCC states if ships are attacked. Al-Monitor counts more than 14 tankers near Kharg; no convoy is confirmed.",
      impact:
        "The blockade becomes the most likely trigger for direct US-Iran naval fire.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Trump via Gulf News; Araghchi via Press TV, Iran International and Reuters via Times of Israel",
      event: "Trump calls Iran's terms unacceptable; Araghchi keeps the two-day plan and a uranium red line",
      summary:
        "Trump said Iran wants a deal but not one acceptable to him, and again pointed to after 1 January. Araghchi said the two-day plan stands, with US commitments on day one and the strait reopening on day two, that Qatar and Pakistan are the only mediators, and that the 60% stockpile will not leave Iran. Witkoff and Kushner met Qatari officials in Berlin without significant progress.",
      impact:
        "Both sides restate positions; no bridge on sequencing or the stockpile appears.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Hossein Mohebbi and Ahmad Vahidi via Tasnim; Mohebbi via Gulf News",
      event: "IRGC names US bases in Europe and host countries as targets",
      summary:
        "IRGC spokesman Hossein Mohebbi said Iran can strike US bases in Europe if the supreme leader orders it, citing a demonstrated 4,500-km range, and that any country whose bases are used against Iran would be a target. He said the strait stays shut until US conditions are met verifiably. IRGC chief Ahmad Vahidi said enemy actions will change Iran's defence doctrine.",
      impact:
        "The declared retaliation map now extends from Gulf hosts to Europe.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "IDF spokesman Effie Defrin, CBS and Channel 13 via Times of Israel; Araghchi via Tasnim",
      event: "IDF says guidelines unchanged and forces ready for offensive scenarios",
      summary:
        "IDF spokesman Effie Defrin said there is no change to public instructions and the army is prepared for defensive and offensive scenarios, a message similar to one issued the day before the war began. CBS reported Jerusalem and Washington weighing an attack soon. Araghchi mocked Israel's ambassador Yechiel Leiter for setting terms for the return of US troops.",
      impact:
        "Israel signals readiness while leaving the decision publicly with Washington.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "Iranian Navy via Tasnim; UKMTO via Gulf News",
      event: "Iranian Navy claims a second mined tanker; UKMTO reports a tanker burning off Khasab",
      summary:
        "The Iranian Navy said a non-compliant tanker with its navigation systems off caught fire after hitting a mine in a prohibited area east of the strait, after a second tanker early Thursday. No ship is named. UKMTO said a tanker was hit by an unknown projectile on its port bow about eight nautical miles north of Khasab, with fire on board and no casualties reported.",
      impact:
        "Mines-as-enforcement claims continue; independent hull identification still lags.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "Coalition spokesman Turki Al Malki via Gulf News; Houthi officials and Yahya Saree via Press TV and Gulf News",
      event: "Coalition strikes Hodeidah port and Sanaa; Houthis claim strikes on Jizan and Shuqaiq",
      summary:
        "The Saudi-led coalition launched a special operation against Hodeidah port facilities it says were used for smuggling, and struck missile and drone sites in Sanaa, Saada and Taiz after urging civilians to evacuate the port. Houthi spokesman Yahya Saree claimed strikes on Jizan port and the Shuqaiq power plant and called Jeddah and Red Sea ports legitimate targets. The Houthi-run health ministry claims 41 civilians killed in 24 hours.",
      impact:
        "The second chokepoint turns into a Saudi-Houthi war over ports and power.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'low',
      source: "US Treasury via Times of Israel; State Department via Iran International",
      event: "Treasury sanctions four Iranian 'oil trustees'",
      summary:
        "The Treasury sanctioned four Iranians it says collected illicit oil revenues for Tehran: former IRGC intelligence officer Mohammad Javad Bavand, Majid Taj, Mohammad Hossein Servati and Mojtaba Arabnejad. It said some kept revenues for personal gain. A State Department spokesperson said economic pressure will intensify in coming days, as CENTCOM's blockade now covers ship-to-ship transfers.",
      impact:
        "Economic coercion tightens as the substitute for strikes, raising Iran's incentive to test it.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "EU-UK summit and Merz via Iran International; Bahrain foreign ministry via The Peninsula",
      event: "EU and UK demand end to Iranian 'hybrid attacks'; sign 'No Tolls' pledge",
      summary:
        "At their Brussels summit the EU and UK said Iran must stop destabilising activities and hybrid attacks on European soil, must never acquire a nuclear weapon, and signed a No Tolls/No Fees pledge on Hormuz. Merz, beside Qatar's emir in Berlin, called for a permanently open strait. Bahrain urged the Security Council to act against Houthi attacks on Saudi Arabia.",
      impact:
        "Europe becomes a direct party, framing Iran as a threat on its own soil.",
    },
    {
      id: 9,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Iran International; Shafaq News",
      event: "Iraqi forces begin deploying in Jurf al-Sakhr",
      summary:
        "Iraqi army, federal police, energy police and PMF units began deploying on Friday under a joint command, with a security headquarters due Saturday. Government spokesman Saad Maan told Shafaq the changes are permanent. Kataib Hezbollah denies oil-smuggling charges; Al Arabiya says its withdrawal is phased over a month. Historian Omar Mohammed called the move a theatrical show.",
      impact:
        "The Iraqi flashpoint eases, though the militia's exit is unverified.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'low',
      source: "Times of Israel; Senate Armed Services hearing via Press TV",
      event: "Congress heads into recess with the 11 December funding fight unresolved",
      summary:
        "Lawmakers left for Thanksgiving with funding expiring 11 December; Democrats are split over cutting war money and the bipartisan defence bill carries $69 billion of Trump's $350 billion request. At his confirmation hearing, acting Navy Secretary Hung Cao said expired Tomahawks were returned to service and cited one Hormuz transit's insurance at $64 million.",
      impact:
        "The political-will clock tightens but offers no lever before December.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Iran International",
      event: "Tanker crossings tick up to 1.9 a day; Iran faces a winter gas deficit",
      summary:
        "hormuz.now counted 13 tanker crossings in seven days, 1.9 a day against 47.6 pre-crisis, and no LNG or LPG carrier. Ras Laffan port calls are 28% of normal. Brent was about $92.5, set for a third weekly fall on surplus expectations. Iran International projects Iran's own winter gas deficit at 430 million cubic metres a day, with stress in 11 provinces.",
      impact:
        "Oil prices ignore the war while gas, for Asia and for Iran, stays short.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty is reported this cycle. The fifty-second cycle with no disclosure statement.",
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
        "No new official war toll; the Navy and IRGC statements report no Iranian casualties. Darzi's claim of more than 5,000 dead is held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,214+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0",
      status:
        "No change adopted. UKMTO reports no casualties from the tanker hit off Khasab. The Houthi-run health ministry's 41 dead in 24 hours and the reported 19 killed on a boat are held apart.",
    },
  },
  exec:
    "Washington's decision on a wider war stayed open while Tehran moved toward the blockade line. Iran signalled it will try to run the US naval blockade: Foreign Minister Abbas Araghchi said \"the blockade must be broken,\" lawmakers and prayer leaders spoke of tankers sailing from Kharg for China, and Guards-linked Fars threatened Gulf oil facilities if the ships are fired on. Al-Monitor, via Iran International, counts more than 14 Iranian tankers near Kharg, most with transponders off; no convoy is confirmed. Washington has widened the blockade to ship-to-ship transfers, and Treasury sanctioned four Iranian \"oil trustees.\" Trump said Iran \"wants to make a deal\" but not one \"acceptable to me,\" and again pointed to after 1 January. Araghchi said the two-day Hormuz plan remains on the table but the enriched uranium \"will not leave the country\"; Witkoff and Kushner met Qatari officials in Berlin without significant progress, per Axios. IDF spokesman Effie Defrin said public guidelines are unchanged. IRGC spokesman Hossein Mohebbi said Iran could strike US bases in Europe and any host country, as the EU and UK demanded an end to Iranian \"hybrid attacks on European soil.\" The Iranian Navy claims a second tanker hit a mine; UKMTO reports a tanker struck and burning north of Khasab, without casualties. The Saudi-led coalition struck Hodeidah port and Sanaa; the Houthis claim strikes on Jizan and the Shuqaiq power plant. Iraqi forces began deploying in Jurf al-Sakhr. hormuz.now counts 1.9 tanker crossings a day against 47.6 pre-crisis; Brent is about $92.5. No new casualties were adopted. Direction stays escalating; the probability holds at 6.",
  implications: [
    {
      title: "The blockade line becomes the trigger",
      body:
        "Under the multi-clock framework, the active-deadline clock now runs through the blockade as much as through the White House. Day 266 placed the decision in Washington; this cycle Tehran moved to force it. Araghchi told ILNA \"the blockade must be broken,\" lawmaker Mohammad Bayat urged readied tankers and an ultimatum, and prayer leaders in Ardabil and Tehran spoke of cargoes sailing from Kharg for China. Guards-linked Fars threatened explosions at oil facilities in all six GCC states if the ships are fired on. The motive is fiscal: Kpler logged no Iranian loadings in September, the first such month since 1979, and its analyst Homayoun Falakshahi expects Chinese payments for the last cargoes to run out by mid-December, after which Iran could lose $3-6 billion a month. The counters are real. No official has confirmed a convoy, the tankers near Kharg mostly have transponders off, and CENTCOM has extended the blockade to ship-to-ship transfers with a warning that non-compliant ships could face force. If a convoy sails, Washington must either let the blockade erode or fire on Iranian hulls, the direct test of the bypass-as-target and infrastructure-reciprocity priors. Mohebbi's warning that host states and even US bases in Europe are targets, and Vahidi's talk of a changed defence doctrine, widen the retaliation map. Israel is ready but quiet: Defrin says guidelines are unchanged, as he did the day before 28 February. Direction stays escalating; the probability holds at 6.",
    },
    {
      title: "Diplomacy narrows to Doha and Islamabad as the war's edges spread",
      body:
        "The negotiation-capacity clock is alive but stalled. Araghchi says the two-day plan stands, with Washington meeting its commitments on day one and Iran reopening the strait on day two, and that messages pass only through Qatar and Pakistan. He also drew a red line: the 60% stockpile \"will not leave the country,\" though a \"fair formula\" is possible. Trump's answer is that Iran \"wants to make a deal\" but not one \"acceptable to me.\" Witkoff and Kushner met Qatari officials in Berlin on Thursday without significant progress, per Axios via Iran International, and Treasury's four \"oil trustees\" designations fit a State Department signal of more economic pressure. Qatar's reported window closes around 24 November, three days away. The political-will clock frames the choice: funding lapses on 11 December, Democrats are split over cutting war money, and the bipartisan defence bill carries only $69 billion of Trump's $350 billion request. Europe is now a party in its own right. The EU-UK summit demanded Iran end \"hybrid attacks on European soil\" and signed a \"No Tolls/No Fees\" pledge against the toll-institutionalization risk, while Merz, beside Qatar's emir, called for a permanently open strait. The second chokepoint widened: the coalition struck Hodeidah port and Sanaa, and the Houthis claim strikes on Jizan and Shuqaiq. Iraq is the counter-trend, with forces deploying in Jurf al-Sakhr and Baghdad calling the change permanent.",
    },
    {
      title: "Taiwan: oil looks loose, gas stays shut, and a convoy fight would sit beside the LNG lanes",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. hormuz.now counts 13 AIS-visible tanker crossings in seven days, 1.9 a day against 47.6 pre-crisis and up from 1.6 yesterday, with still no LNG or LPG carrier in seven days (one of each in 30). PortWatch puts Ras Laffan port calls at 28% of normal and tanker tonnage at 0.8% to 15 November. Brent rose about 0.6% to roughly $92.5 but is on course for a third weekly fall, as Trading Economics cites abundant supply, the IEA's 2 mb/d fourth-quarter surplus and a Goldman oversupply warning: the oil-priced-as-surplus prior holds while gas remains the binding constraint. Two risks sharpen. First, Fars named UAE oil and Qatar among targets if Iranian tankers are fired on; Ras Laffan and Das Island are the plants that matter for Asian LNG buyers. Second, Iran's own winter gas deficit is projected to reach 430 million cubic metres a day with mazut and LPG exports halted, raising Tehran's incentive to break the blockade before the heating peak. For Taipower and CPC, the relevant markers remain QatarEnergy's force majeure to end-December and the unpassed supplementary budget.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Darzi's 5,000-plus claim is held apart. HRANA's execution series (at least 2,003 to 8 October) carries unmerged; no new HRANA item located.",
    other:
      "No change. The Houthi-run health ministry's 41 dead in 24 hours, the reported 19 killed on a boat, the missing ADNOC crew member, the UN's 1,600-plus Yemen toll, IMO counts and GCC figures are held apart.",
  },
};

export default data;
