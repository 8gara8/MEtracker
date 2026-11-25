import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. Iran claims two more mined tankers and two US drones and says Hormuz will become increasingly closed, while Washington reportedly weighs strikes on Iran's leaders and Israel's defence minister says joint plans are ready.",
      risk7d:
        "Extreme and unchanged. Trump frames the war as funded only to about the end of January, which narrows the window without setting a date; Katz's chemical-weapons claim rebuilds the public case for action, but no decision was located.",
      spillover:
        "Critical and unchanged. A Houthi attack wounded 11 in Riyadh, drones targeted Ras Tanura and a projectile hit Jazan after coalition strikes on Hodeidah; the US embassy in Baghdad warns Iran may strike US interests anywhere.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "President Trump (New York Post) via Times of Israel; Gulf News live coverage",
      event: "Trump says the war is funded through January",
      summary:
        "Trump told the New York Post the war is funded until about the end of January, suggesting any new operation would come before a Democratic Congress can curb it. He said regime change is probably doable but that, unlike Israel, he cares only about Iran's nuclear program. He warned Democrats could limit his options once they control Congress.",
      impact:
        "The strike window narrows toward January without a set date.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "NBC News via Fox News and Times of Israel",
      event: "Administration reportedly weighs targeted strikes on Iran's leaders",
      summary:
        "NBC, citing a US official and another person familiar with the talks, reported renewed discussion of targeted killings of Iranian leaders as a way to end the war. Supporters argue it would show the leadership is reachable; opponents warn of retaliation against US officials and damage to diplomacy. A White House official said the blockade continues with full effect.",
      impact:
        "An option short of a full campaign enters the debate.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Israel Katz via Times of Israel; Abbas Araghchi via Press TV; CBS News live",
      event: "Katz says Iran is developing chemical weapons; Araghchi calls it a confession",
      summary:
        "Caretaker Defence Minister Israel Katz said Iran is developing chemical weapons, has not reactivated its nuclear programme though there are signs it is trying, and that joint IDF-CENTCOM plans are ready, with Trump to decide. Avigdor Liberman said the threat does not justify independent action. Abbas Araghchi called the claim a confession meant to drag Washington into another war.",
      impact:
        "Israel rebuilds the public case for strikes around a new claim.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy via Tasnim; JMIC and Kpler via Iran International; UKMTO via Iran International liveblog",
      event: "IRGC claims two more mined tankers; UKMTO reports a blast off Dubai",
      summary:
        "The IRGC Navy said two tankers caught fire after hitting mines in the strait's southern and eastern waters early Wednesday while using a fabricated route with transponders off. No vessel was named. JMIC calls Monday's three-tanker claim unconfirmed. UKMTO separately reported a projectile exploding near a tanker about 50 nautical miles west of Dubai, with no damage and crew safe.",
      impact:
        "Mine claims keep outpacing confirmed hulls.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "Iranian army via Tasnim",
      event: "Iran claims US LUCAS and MQ-9 drones over Hormuz",
      summary:
        "Iran's Army Air Defense Force said it destroyed a US LUCAS one-way attack drone over the western strait and an MQ-9 over the eastern strait on Tuesday night, using domestically built systems within its integrated air-defence network. No wreckage, imagery or US response was located. The claim follows IRGC claims of an MQ-1 and a reconnaissance drone on 22 November.",
      impact:
        "Drone tallies grow on Iranian claims alone.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "Amir Hatami via Tasnim; Mohammad Akraminia via Press TV; PGSA via Tasnim",
      event: "Iran tightens Hormuz control and blacklists 26 tugboats",
      summary:
        "Army commander Amir Hatami said the strait will not reopen until Iran's seven conditions are met and must become increasingly closed day by day. Army spokesman Mohammad Akraminia said ships moving without coordinating with the armed forces faced greater risk and struck mines. The Persian Gulf Strait Authority added 26 tugboats serving non-compliant ships to its list.",
      impact:
        "Iran institutionalises its transit regime south of the strait.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi Civil Defense via The Peninsula; Turki Al Malki via Gulf News; Gulf News live coverage",
      event: "Houthi attack wounds 11 in Riyadh; drones over Ras Tanura",
      summary:
        "Saudi Civil Defense said 11 people were injured in Tuesday's attack on a Riyadh Financial Center tower, which the coalition called cowardly terrorism; India said two of its nationals were hurt. Saudi air defences destroyed four drones over Ras Tanura, which the Houthis say they set alight. The coalition reported a projectile at Jazan port and a drone near Jeddah after its Hodeidah strikes.",
      impact:
        "The second chokepoint war now reaches Saudi cities and refineries.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "US Embassy Baghdad via Shafaq News; Gulf News live coverage",
      event: "US embassy warns Iran is trying to target US officials",
      summary:
        "A US embassy security alert urged Americans across the Middle East to stay on heightened alert, warning that Iran is trying to target US officials and facilities, that the Houthi threat is growing, and that Iran and its allies may target US interests anywhere. The US Mission to the UAE issued a parallel alert citing attacks on Bahrain, Kuwait and Saudi Arabia.",
      impact:
        "Washington signals a wider threat picture beyond the Gulf.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Scott Bessent, Hossein Mohebbi and Hassan Hassanzadeh via Iran International; ISW and CTP via Iran International",
      event: "Bessent says Iran's floating stocks are gone; Iran promises new weapons",
      summary:
        "Scott Bessent said Iran has run through its floating oil stocks and loaded no tanker since Operation Economic Outcast began, calling the regime a sinking ship; the rial hit about 2.86 million to the dollar. IRGC spokesman Hossein Mohebbi said the blockade will end. ISW and CTP report new hybrid ballistic missile variants; Bloomberg puts Iran's stock at 1,700 or more.",
      impact:
        "Each side claims the other's clock is running out.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'low',
      source: "Wall Street Journal via Times of Israel",
      event: "US investigates Iran over cyberattacks on dozens of ships",
      summary:
        "The Wall Street Journal reported that US officials are investigating Iran, with Russia also suspected, over cyberattacks on as many as 50 vessels, some carrying chemicals, including threats sent in Farsi. The Coast Guard deployed cyber teams at least four times. A US administration official said no evidence ties Iran to the recent incidents and called four of them a nuisance.",
      impact:
        "The maritime contest may be extending beyond the Gulf, unproven.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "QNA via The Peninsula; Cong Peiwu via Tasnim and Iran International",
      event: "Qatar and Egypt coordinate; China urges a return to talks",
      summary:
        "Qatar's Prime Minister Sheikh Mohammed bin Abdulrahman Al Thani met Egypt's Badr Abdelatty in Cairo on efforts to reduce tensions and secure freedom of navigation. China's ambassador in Tehran, Cong Peiwu, said US-Israeli attacks obstruct IAEA cooperation, praised the Islamabad memorandum and urged both sides to settle Hormuz through diplomacy and a new regional security framework.",
      impact:
        "Mediation continues, but no Iranian movement on conditions.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'low',
      source: "Iraq's Federal Supreme Court via Shafaq News; Gulf News live coverage",
      event: "Iraq's top court backs federal control of Kurdistan borders and oil",
      summary:
        "Iraq's Federal Supreme Court, at Prime Minister Ali al-Zaidi's request, affirmed federal authority over Kurdistan's border crossings and oil operations after an oil-smuggling investigation. Gulf News, citing Iraqi state media, says the crackdown targets routes moving crude into Iran; Shafaq's account names no Iran link. KRG Prime Minister Masrour Barzani rejected the measures.",
      impact:
        "Baghdad tightens a possible sanctions-evasion route, contested domestically.",
    },
    {
      id: 13,
      direction: 'mixed',
      importance: 'low',
      source: "Mai Sato via Iran International; Mohammad Hossein Aghasi and Dadban via Shabtab News",
      event: "Executions of two Ekbatan protesters reportedly halted",
      summary:
        "UN Special Rapporteur Mai Sato urged Iran to halt the executions of Milad Armoun and Navid Najaran, set for dawn on 25 November, noting they were acquitted of the killing behind their sentences. Armoun's lawyer said he was told by phone the execution was halted; Dadban said Najaran was returned to the general ward. The judiciary says the sentences stand.",
      impact:
        "Internal repression continues alongside the war, under outside pressure.",
    },
    {
      id: 14,
      direction: 'mixed',
      importance: 'medium',
      source: "Trading Economics; hormuz.now; Kpler via Iran International",
      event: "Brent rebounds above $92 as AIS crossings stay near 2.4 a day",
      summary:
        "Trading Economics quotes Brent at $94.29, up 3.6%, with a second panel at $92.44, citing the Ras Tanura drones and mine claims ahead of OPEC+ on 29 November. hormuz.now counts 17 tanker crossings in seven days and two LNG carriers. Kpler says non-Iranian Gulf exports are near prewar, while Iran's crude exports have effectively stopped.",
      impact:
        "Crude reprices on attacks while LNG flows stay near zero.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty and no CENTCOM response to Iran's mine and drone claims were located. The fifty-sixth cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty located across the two days since the last brief. Gaza and West Bank deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. Mousavi's figure of nearly 7,200 dead and Darzi's claim of more than 5,000 stay held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,216+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change adopted. Saudi Civil Defense reports 11 injured in Riyadh on 24 November; held apart with the Saudi and Yemeni series.",
    },
  },
  exec:
    "Signals from Washington point to a narrowing window rather than a decision. President Trump told the New York Post the war is \"funded\" until about the end of January, suggesting a window before Democrats take Congress, and said US goals differ from Israel's because he cares only about the nuclear program. NBC, via Fox News and the Times of Israel, reports renewed internal discussion of targeted strikes on Iran's leaders. Israel's caretaker defence minister Israel Katz said Iran is developing chemical weapons and that joint plans with CENTCOM \"are ready\"; Foreign Minister Abbas Araghchi called the claim a \"confession\" meant to drag the US into war. At sea, the IRGC Navy claims two more tankers mined early Wednesday on an unauthorised route and Iran's army claims a LUCAS and an MQ-9 drone; no hull is named and no US response was located, while UKMTO reports a projectile exploding near a tanker 50 nautical miles west of Dubai without damage. Army chief Amir Hatami says Hormuz will be \"increasingly closed\" until Iran's seven conditions are met. The Saudi-Houthi war widened: Saudi civil defence says 11 people were injured in an attack on a Riyadh financial-district tower, Saudi air defences downed four drones over Ras Tanura, and the coalition reports a projectile at Jazan after striking Hodeidah. The US embassy in Baghdad warned Iran is trying to target US officials. Treasury Secretary Scott Bessent says Iran has run through its floating oil stocks. Brent rebounded to about $92-94 from a three-month low; hormuz.now counts 2.4 tanker crossings a day against 47.6 pre-crisis. No casualty series changes. Direction stays escalating; the probability holds at 5.",
  implications: [
    {
      title: "The window narrows: a January funding horizon, leadership-strike talk and a chemical-weapons claim",
      body:
        "Under the multi-clock framework, the active-deadline and political-will clocks have converged on January. Trump told the New York Post the war is \"funded\" to about the end of January, tying his new-year strike horizon to the seating of a Democratic Congress on 3 January; that narrows the window rather than setting a date. NBC's report, carried by Fox News and the Times of Israel, that officials have renewed discussion of targeted strikes on Iran's leaders adds an option short of a full campaign; a White House official said only that the blockade continues \"with full effect.\" These are reports and remarks, not decisions. In Israel, caretaker defence minister Israel Katz said Iran is developing chemical weapons, has not reactivated its nuclear programme though \"there are signs it is trying to,\" and that joint IDF-CENTCOM plans \"are ready,\" with Trump to decide. Araghchi called the claim a \"confession\" meant to drag Washington into another war; Avigdor Liberman said it does not justify independent Israeli action. The security-establishment-restraint prior holds, but the public case for action is being rebuilt around a new weapons claim, and the claim-inflation prior applies on both sides. Trump's statement that his only goal is the nuclear file, unlike Israel's, strengthens the Israel's-independence prior. Neither side moved toward talks: Hatami and Ghalibaf restate the seven conditions. The probability holds at 5.",
    },
    {
      title: "At sea and in the Gulf: unconfirmed mines, a wider Saudi-Houthi war and embassy alerts",
      body:
        "The energy-infrastructure clock worsened at the edges while the core picture held. The IRGC Navy claims two more tankers hit mines early Wednesday after taking a \"fabricated route,\" and Iran's army claims a LUCAS and an MQ-9 drone over the strait; none is confirmed, and JMIC, via Iran International, calls Monday's three-tanker claim unconfirmed. UKMTO's report of a projectile exploding near a tanker about 50 nautical miles west of Dubai, without damage, is the only independent incident located. Iran is formalising control: Hatami says the strait will become \"increasingly closed,\" army spokesman Mohammad Akraminia says ships must coordinate with the armed forces, and the Persian Gulf Strait Authority blacklisted 26 tugboats. The mines-as-enforcement and toll-institutionalization priors strengthen. The second-chokepoint prior sharpened most: Saudi civil defence, via SPA, says 11 people were injured in Tuesday's Houthi attack on a Riyadh financial-district tower; Saudi air defences destroyed four drones over Ras Tanura, which the Houthis claim set the refinery alight; and the coalition reports a projectile at Jazan and a drone near Jeddah after its strikes on Hodeidah. The US embassy in Baghdad warned that Iran is trying to target US officials and could hit US interests anywhere. Mediation continues without traction: Qatar's prime minister met Egypt's Badr Abdelatty in Cairo, and China's ambassador urged a return to talks.",
    },
    {
      title: "Taiwan: crude rebounds on Gulf attacks while LNG stays near zero",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. Brent recovered from Tuesday's three-month low below $90: Trading Economics quotes $94.29, up 3.6%, though its statistics panel shows $92.44, citing the Ras Tanura drones and Iran's mine claims, tempered by recovering Gulf exports, an IEA surplus and rising US stocks before OPEC+ meets on 29 November. hormuz.now counts 17 AIS-visible tanker crossings in seven days, 2.4 a day against 47.6 pre-crisis, with two LNG carriers in seven days and Ras Laffan port calls at 29% of normal. Kpler, via Iran International, says Gulf exports excluding Iran ran just under 14 million barrels a day in September and October, near prewar, with November preliminarily about 12 million; hormuz.now carries a Kpler estimate of 8.3 million b/d for the week to 11 November. The AIS floor and the Kpler figures remain unreconciled. Iran's own crude exports have effectively stopped, and Kpler warns its revenue could dry up by mid-December. The oil-priced-as-surplus versus gas-shut prior holds: crude flows around Iran while Qatar's LNG stays under force majeure to end-December. For Taipower and CPC the exposure is the winter-peak LNG gap, not crude, and a strike window framed as running to end-January overlaps February cargo planning. Markers: crossings against 2.4 a day, LNG transits, OPEC+ on 29 November and the unpassed supplementary budget.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located. A Lebanese judge issued warrants for five detained Hezbollah members, whose release Naim Qassem demands.",
    iran:
      "No new official war toll. Mousavi's nearly 7,200 dead (623 children) and a separate Red Crescent child count of 428 conflict with the official series and are held apart, as is Darzi's 5,000-plus claim. HRANA's execution series (at least 2,003 to 8 October) carries unmerged; the reported halt of the Armoun and Najaran executions is noted, with the judiciary saying the sentences stand.",
    other:
      "No change adopted. Saudi Civil Defense reports 11 injured in the 24 November Riyadh tower attack, two of them Indian nationals per India; no casualties were reported at Ras Tanura, Jazan or Jeddah. These are held apart with the Saudi and Yemeni series, as is the missing Jordanian sailor from the ADNOC tanker.",
  },
};

export default data;
