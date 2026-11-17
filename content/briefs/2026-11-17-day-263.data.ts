import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. The IRGC fired drones at a US radar in Bahrain for the third time in five days and CENTCOM again reported interceptions; unexplained explosions on Qeshm and a reported dirty-bomb plot add pressure on Trump's restraint.",
      risk7d:
        "Extreme and unchanged. Every launch so far has failed, but Iran has set a rhythm of strikes on host states, Trump warns of an unprecedented price, and a third carrier is in the theatre.",
      spillover:
        "Critical and unchanged. The IRGC now threatens Bahrain's monarchy itself, the UAE and Rubio condemn the attacks, the Houthis stand about 60 km from Aden, and a drone overflew Iraq's Khor Mor gas field.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC via Press TV; CENTCOM and Bahraini state television via Al Jazeera; Iran International",
      event: "IRGC drones target a US radar at Isa Air Base; CENTCOM says all were intercepted",
      summary:
        "The IRGC said combat drones struck a US radar at Sheikh Isa Air Base early on Tuesday, citing continued US drone violations of Iranian airspace. Bahraini state television said air defences thwarted the attack; residents received phone alerts and the Interior Ministry later gave an all-clear. CENTCOM said the drones were intercepted without damage to US equipment or injury to personnel.",
      impact:
        "The third launch in five days makes host-state strikes a routine Iran can repeat at low cost.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'medium',
      source: "Times of Israel; Fars via Iran International; IRGC Aerospace Force via Press TV",
      event: "Explosions on Qeshm Island; cause unconfirmed",
      summary:
        "Smoke and explosions were reported on Qeshm Island on Tuesday afternoon. The Times of Israel cited unconfirmed local reports attributing them to US airstrikes; the IRGC-affiliated Fars agency said the cause is unknown. The IRGC said separately that a new air-defence system shot down a US MQ-1 near Qeshm at 13:45, its 18th such claim. No US statement on a strike was located.",
      impact:
        "If confirmed as a US strike, it would be the first answer to the Bahrain launches.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Hossein Mohebbi, UAE foreign ministry and Marco Rubio via Iran International",
      event: "IRGC spokesman warns Bahrain's rulers; the UAE and Rubio condemn the attacks",
      summary:
        "IRGC spokesman Hossein Mohebbi warned that Bahrain's regional future could be in doubt, citing as key mistakes its cooperation in the aggression against Iran and living in the US security bubble. The UAE called the latest attack a flagrant violation of sovereignty; Rubio condemned the strikes in a call with Bahrain's foreign minister.",
      impact:
        "Tehran's grievance widens from US bases to Bahrain's monarchy, raising the cost of Gulf neutrality.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "Majed Al Ansari via The Peninsula and Times of Israel",
      event: "Qatar meets Iranian officials and urges restraint",
      summary:
        "Qatari foreign ministry spokesman Majed Al Ansari said Doha would meet Iranian officials on Tuesday to exchange views on current proposals and narrow the gap between Washington and Tehran. After the Bahrain launch he urged all parties to exercise restraint and called the Gulf escalation an extremely serious threat to efforts to end the war. No proposal text or US interlocutor was named.",
      impact:
        "The holder of the reported window keeps talking while warning publicly that escalation could sink it.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Abbas Araghchi via Oman Observer and Press TV; Oman News Agency via Oman Observer",
      event: "Araghchi pitches a two-day Hormuz reopening in Islamabad and carries a message to Oman's sultan",
      summary:
        "At the ECO ministerial in Islamabad, Araghchi said member states responded positively to Iran's offer to reopen Hormuz within two days if Washington releases frozen assets, lifts sanctions and ends its blockade. In Muscat he met Foreign Minister Badr Albusaidi, who called the talks constructive, and delivered President Pezeshkian's written message to Sultan Haitham. No US message was reported.",
      impact:
        "Pakistan and Oman stay open as channels, but the plan's terms remain unpublished.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "CNN via Times of Israel; Donald Trump via Times of Israel; Esmaeil Baghaei via Al Jazeera",
      event: "CNN reports a possible Iranian dirty-bomb plot; Trump warns of an unprecedented price",
      summary:
        "CNN, citing US officials, reported intelligence that Iran is drafting options for a radioactive or chemical attack on senior officials in Washington and possibly chemical use against US troops; officials are divided on its credibility and see no imminent attack. The White House said there are no credible threats to the homeland. Baghaei called the report baseless. Trump, in Manila, said Iran would pay a price no other country has paid.",
      impact:
        "A homeland-threat frame gives Washington a rationale beyond the Gulf, with no deadline attached.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Iran's Navy via Press TV; UKMTO and IMO via Al Jazeera",
      event: "Iran claims more mine strikes; UKMTO logs two tanker attacks",
      summary:
        "Iran's regular navy said an unnamed tanker running dark hit a mine east of the strait and was badly damaged, the fourth in 24 hours, and that the strait will remain closed as long as Iran deems necessary. UKMTO reported two tanker attacks on Monday, one disabling a vessel 7 nautical miles north of Khasab with an engine-room fire; no casualties were reported. The IMO counts 136 security incidents from 1 March to 11 November.",
      impact:
        "Mines-as-enforcement continues with no named hull; independent reports confirm attacks, not causes.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Kazem Gharibabadi and a US official via Times of Israel and Al Jazeera; Mohammad Bagher Ghalibaf via Press TV",
      event: "A third carrier arrives as Iran rules out IAEA access and threatens infrastructure",
      summary:
        "A US official confirmed the USS Theodore Roosevelt's arrival, giving CENTCOM three carriers. Deputy Foreign Minister Kazem Gharibabadi said the IAEA will not reach bombed sites at Natanz, Fordow or Isfahan until Iran's conditions are met and the war ends. Speaker Ghalibaf, answering a New York Times report on dams near missile sites, said any dam, port or power plant near a US or Israeli base is dual-use.",
      impact:
        "Force posture and infrastructure threats rise together while nuclear verification stays frozen.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi royal decree via Al Jazeera",
      event: "Saudi Arabia replaces its joint-forces commander as the Houthis near Aden",
      summary:
        "King Salman appointed Gen. Fayyad al-Ruwaili to command the Saudi Joint Forces, replacing Lt. Gen. Fahd bin Hamad al-Salman after the withdrawal from the Bab el-Mandeb area. The Houthis are within about 60 km of Aden; Taiz is fully besieged and its hospitals could shut within two days for lack of fuel and oxygen. Saudi Arabia said it downed two Houthi drones aimed at the Makkah and Riyadh regions.",
      impact:
        "The command change confirms the setback at the second chokepoint; defending Aden is now the priority.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'low',
      source: "Reuters and Dana Gas via Al Jazeera",
      event: "A drone over Iraq's Khor Mor gas field sets off sirens",
      summary:
        "Sirens sounded at the Khor Mor gas field in Iraqi Kurdistan after a drone flew overhead on Monday; no strike was reported. Production had already stopped last week after a suspected drone attack caused a fire and disrupted 2.8 GW of power generation, according to operator Dana Gas. Kurdish officials blame Iran-backed groups for repeated attacks on the field.",
      impact:
        "Proxy pressure on regional gas infrastructure persists outside the Gulf.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "Jean-Noël Barrot via Times of Israel; Danny Danon via Times of Israel",
      event: "France expects EU cyber sanctions on Iran; Israel rejects reliance on international forces",
      summary:
        "French Foreign Minister Jean-Noël Barrot told EU ministers in Brussels he expects sanctions at the 14 December council over October cyberattacks on French supermarket refrigerators, which Paris blames on the IRGC; Tehran calls the charge baseless. Israel's UN ambassador Danny Danon, touring the Lebanese border with UN envoys, said Israel does not rely on any international force as UNIFIL's mandate nears its end.",
      impact:
        "Europe's front widens into cyber sanctions; Israel signals independence on the Lebanon line.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'low',
      source: "Times of Israel",
      event: "The Knesset votes on a new speaker; no Iran decision from the security cabinet",
      summary:
        "The Knesset was due on Tuesday afternoon to vote on a new speaker, with Yashar's Matan Kahana expected to win a majority and Likud nominating Ofir Katz against him; no result was located. No security-cabinet decision on Iran was reported after Mossad chief Roman Gofman's return from Washington.",
      impact:
        "Coalition politics still runs ahead of any authorised Israeli move on Iran.",
    },
    {
      id: 13,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Chinese foreign ministry",
      event: "Crossings stay at 1.9 a day; Brent drops then recovers; China names Iran for Shenzhen",
      summary:
        "hormuz.now counted 13 tanker crossings in seven days, 1.9 a day against 47.6 pre-crisis, and no LNG or LPG carrier. Brent fell 3.6% on Monday and rose to about $93.9 on Tuesday as traders weighed attacks against an IEA-forecast surplus. China's foreign ministry said envoy Zhai Jun visited Iran, Oman and Saudi Arabia and that, per the US side, Iran will be discussed at the Shenzhen trilateral.",
      impact:
        "Oil prices discount the strikes while gas flows through Hormuz stay at zero.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. CENTCOM reports no injury to US personnel from Tuesday's launch at Isa Air Base. The forty-eighth cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty on the Iran or Lebanon fronts located this cycle. Gaza and West Bank deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll and no casualties reported from the Qeshm explosions. Darzi's claim of more than 5,000 dead is held apart. HRANA reports three new death sentences for January-uprising detainees.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No casualties are reported in Bahrain or in Monday's two tanker attacks. A reported death at a Taiz school and Yemeni battlefield claims are held apart.",
    },
  },
  exec:
    "Iran fired at Bahrain a third time in five days, and the first US answer was a denial, not a strike. The IRGC said combat drones hit a US radar at Isa Air Base early on Tuesday over \"continued violations\" of Iranian airspace; US Central Command said the drones were intercepted without damage to equipment or injury to personnel. Explosions and smoke were then reported on Qeshm Island. Local reports attribute them to US airstrikes, Fars says the cause is unknown, and the IRGC says it shot down an MQ-1 drone near Qeshm; no US statement on a strike was located. IRGC spokesman Hossein Mohebbi warned that Bahrain's regional future could be in doubt. Qatar urged all sides to show restraint and called the escalation an \"extremely serious\" threat to its mediation, which scheduled a meeting with Iranian officials for Tuesday. Foreign Minister Abbas Araghchi said ECO states in Islamabad responded positively to Iran's offer to reopen Hormuz within two days, then delivered President Masoud Pezeshkian's message to Oman's Sultan Haitham in Muscat. CNN reported US intelligence of a possible Iranian \"dirty bomb\" plot in Washington; the White House sees \"no credible threats to the homeland,\" Tehran calls it baseless, and Trump said Iran would \"pay a price\" unlike any other country. At sea, Iran's forces claim more mine strikes on unnamed tankers, and UKMTO reported two tanker attacks, one north of Khasab. Saudi Arabia replaced its coalition commander in Yemen as the Houthis stood about 60 km from Aden. Brent fell 3.6% on Monday and recovered to about $93.9. Direction stays escalating; the probability holds at 9.",
  implications: [
    {
      title: "Three launches at Bahrain in five days, and Washington answers with an interception notice",
      body:
        "Under the multi-clock framework, the active-deadline clock is now a conditional test that Iran runs on a schedule. The IRGC fired at Bahrain on 13, 15 and 17 November; each time the US military said the drones were intercepted without damage or injury, and each time the IRGC claimed a hit. The calibrated-host-strike prior now has a rhythm: small salvos every other day, a stated grievance (this time US drone flights, not a US strike), and targets that air defences can stop. That design claims deterrence while staying below the casualty threshold that would most plainly meet Trump's reported \"unless provoked\" condition. Whether Washington has answered is open. Explosions on Qeshm on Tuesday afternoon were attributed to US airstrikes only by unconfirmed local reports; Fars says the cause is unknown and the IRGC claims an MQ-1 downed near the island. This file records no US strike until CENTCOM or Tehran confirms one. Two threads push upward. CNN's dirty-bomb report, whose credibility US officials themselves dispute, gives the White House a homeland-threat frame, and Trump's \"pay a price\" line answers it without a deadline. Mohebbi's warning that Bahrain's future is in doubt, citing its life in a \"US security bubble,\" widens the grievance from bases to the monarchy. Direction stays escalating; the probability holds at 9 because every launch has failed and mediation continues.",
    },
    {
      title: "Islamabad, Muscat and Doha turn over while the substance stays frozen",
      body:
        "The negotiation-capacity clock improved in form, not substance. In Islamabad, Araghchi said ECO states responded positively to Iran's offer to reopen Hormuz within two days if Washington releases frozen assets, lifts sanctions and ends its blockade; in Muscat he delivered Pezeshkian's message to Sultan Haitham and praised Oman's \"pivotal role.\" Qatar, whose reported window runs to about 24 November, scheduled a meeting with Iranian officials on Tuesday on \"current proposals,\" while spokesman Majed Al Ansari called Gulf escalation an \"extremely serious\" threat to a deal. Islamabad, Muscat and Doha are all active, but no US negotiator is named and no proposal published: the arguing-to-third-parties prior holds. The counter-signals are hard. Deputy Foreign Minister Kazem Gharibabadi says the IAEA gets no access to bombed sites until the war ends. Speaker Ghalibaf answers a New York Times report on dams near missile sites by declaring any dam, port or power plant near a US or Israeli base dual-use, an energy-infrastructure threat framed as reciprocity. China's foreign ministry says envoy Zhai Jun toured Iran, Oman and Saudi Arabia, and that the Shenzhen trilateral will, per the US side, discuss Iran; Mao Ning urged parties to \"prevent a resumption of fighting.\" Europe moves the other way: France expects EU sanctions on 14 December over a cyberattack it blames on the IRGC. The mediator-condemns prior softens into mediator-pleads.",
    },
    {
      title: "Taiwan: no direct development; oil is priced as surplus while gas stays shut",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold, with one market signal. hormuz.now counts 13 tanker crossings in seven days, 1.9 a day against 47.6 before the crisis and flat on the previous cycle, with no LNG or LPG carrier in seven days and one of each in 30. Kpler's estimate stays near 8.3 mb/d, about 48% of pre-war; Yanbu exports run at 2% of normal and Fujairah's at 79%. The signal is price. Brent fell 3.6% on Monday despite Sunday's Bahrain launch and recovered to about $93.9 on Tuesday, with Trading Economics citing an IEA-forecast surplus near 2 mb/d and Saudi and Emirati price cuts. That splits the energy clock for Taiwan: crude is priced as plentiful while LNG through Hormuz stays at zero and, on this file's record, QatarEnergy's force majeure runs to end-December for some buyers. Cheap oil does not refill a gas gap. The Bab el-Mandeb exposure also stands: the Houthis are about 60 km from Aden and Riyadh has replaced its coalition commander, raising the risk to Red Sea substitute cargoes. The Shenzhen trilateral, with Iran on the agenda, is the next East Asian read. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. CENTCOM reports no US injury from the Isa Air Base launch; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll; nothing reported from Qeshm. Darzi's 5,000-plus claim is held apart. HRANA's new death sentences and the execution series carry unmerged.",
    other:
      "No adopted change. Taiz school death, Yemeni battlefield tallies, IMO incident counts, GCC and Houthi figures are held apart.",
  },
};

export default data;
