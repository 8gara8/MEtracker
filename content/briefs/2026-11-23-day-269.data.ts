import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. Iran claims two more mined tankers and a 20th MQ-1 downed, Bahrain now reports two injured from Saturday's attacks, and Trump names the new year as his horizon for renewed strikes.",
      risk7d:
        "Extreme and unchanged. Netanyahu is reported pressing for an early strike despite his own intelligence chiefs' multifront warning, and Qatar's reported window closes around 24 November without a readout.",
      spillover:
        "Critical and unchanged. The GCC, Arab League and Saudi Arabia condemn the Bahrain attacks, the Houthis claim a strike on Saudi Arabia's Rabigh refinery, and a Jordanian sailor from an ADNOC tanker is still missing.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Iranian navy and IRGC Navy via Press TV and Shafaq News; UKMTO via Shafaq",
      event: "Iran claims two more tankers mined in Hormuz",
      summary:
        "Iran's navy said two tankers caught fire after hitting mines in a prohibited area east of the strait, saying they ran with identification systems off; the IRGC Navy placed the blasts near Ghanam Island and warned shipowners that following CENTCOM guidance could mean bankruptcy. UKMTO reported only an undetailed tanker-military encounter in the Gulf of Oman. No vessel or casualty is named.",
      impact:
        "Mine claims continue to outpace independently confirmed hulls.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Trump via Iran International, Gulf News and Times of Israel",
      event: "Trump sets a new-year horizon for renewed strikes",
      summary:
        "Trump told Fox he is inclined to resume strikes on Iran after the new year if no deal is reached, called Iran's negotiators professional tap dancers, and said ships testing the blockade would end up at the bottom of the sea. On Truth Social he said Iran launched more drones and missiles last week than in over a year, all intercepted, and linked this to the midterms.",
      impact:
        "The active-deadline clock now has a stated date.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: "Channel 12 and Kan via Times of Israel",
      event: "IDF intelligence warns Netanyahu of a multifront war",
      summary:
        "Channel 12 reported that IDF Military Intelligence warned Netanyahu at a closed meeting last week that a strike on Iran could ignite Lebanon, Syria and Gaza, contradicting his and Mossad chief Roman Gofman's expectation of a three-to-five-day operation. Kan said Netanyahu is pressing Trump to strike as soon as possible. The IDF declined to comment.",
      impact:
        "Israel's own military narrows the case for a short unilateral strike.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: "Bahrain interior ministry and Defence Force via The Peninsula and Gulf News; GCC and Arab League via The Peninsula; Iran International",
      event: "Bahrain reports two injured; Gulf and Arab bodies condemn Iran",
      summary:
        "Bahrain's interior ministry said Saturday's Iranian attacks injured a Bahraini citizen, in stable condition, and a Pakistani resident, in critical condition. Its Defence Force said several aerial attacks were intercepted, with shrapnel damage. GCC Secretary-General Jasem Albudaiwi and the Arab League condemned the strike; the UAE, Qatar and Saudi Arabia did likewise, Riyadh warning of consequences.",
      impact:
        "The host-state strikes now carry casualties and a united Gulf response.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: "Pezeshkian and Rezaei via Tasnim; Gharibabadi and Ghalibaf via Iran International; Gulf News",
      event: "Tehran says the limbo must end but the window is open",
      summary:
        "Pezeshkian said Iran must leave the neither war nor peace state quickly and with dignity, calling the pressure an economic war; official inflation was 88.7% in October. Ghalibaf said lasting deterrence is needed. Gharibabadi said the diplomatic window is still open. Mohsen Rezaei said Trump's Yalta comparison shows the US is a defeated country.",
      impact:
        "Both capitals reject the limbo, but for opposite outcomes.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'low',
      source: "IRGC via Tasnim; Mohammad Jafar Asadi via Shafaq News",
      event: "IRGC claims a 20th MQ-1; a general floats a nuclear-ruling change",
      summary:
        "The IRGC said a new air-defence system shot down an extended-range MQ-1 over the eastern strait, its 20th of the type and fourth US drone in 24 hours. No US comment was located. Senior military official Mohammad Jafar Asadi said religious rulings on nuclear weapons could change, while Araghchi says the doctrine has not changed.",
      impact:
        "Claim inflation and nuclear signalling continue alongside the sea war.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Houthi statement via Press TV and Shafaq News; Saudi-led coalition via Shafaq",
      event: "Houthis claim Rabigh refinery strike; coalition downs drones",
      summary:
        "The Houthis claimed a direct hit on Saudi Arabia's Rabigh refinery and a radar site at Al-Dawasir, with no Saudi confirmation. The coalition said it destroyed two Houthi drones, one heading for Riyadh. Houthi-run media reported civilian deaths in Saada, Taiz and Sanaa; Taiz's siege office counts 80 killed by Houthi fire from 1 to 20 November.",
      impact:
        "The second chokepoint war keeps reaching Saudi energy assets.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'low',
      source: "Bloomberg via Iran International",
      event: "UK prepares for renewed US strikes",
      summary:
        "Bloomberg reported that Prime Minister Andy Burnham's government has spent weeks preparing for renewed US strikes and their economic fallout, sees little chance of a negotiated settlement, and has weighed refusing US use of British bases for initial strikes while allowing later ones. Britain and Gulf allies have privately urged Washington not to strike.",
      impact:
        "European allies plan for a war they are lobbying against.",
    },
    {
      id: 9,
      direction: 'de-escalating',
      importance: 'low',
      source: "Omani Ambassador Sayyid Yaarub Albusaidi via Tasnim; Jordanian foreign ministry via Gulf News",
      event: "Oman pledges to keep working with Iran on Hormuz shipping",
      summary:
        "At an Oman National Day ceremony in Tehran, Oman's ambassador said Muscat will continue all efforts with Iran to restore normal traffic through Hormuz under international law, and repeated Oman's call for an immediate end to the war. Jordan said the UAE and Oman are still searching for sailor Mohammad Otaibi, missing from an attacked ADNOC tanker.",
      impact:
        "Oman remains the one Gulf channel working with Tehran on shipping.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'low',
      source: "Israeli Foreign Ministry and Nawaf Salam via Times of Israel",
      event: "Israel greets Lebanon as Beirut protests an IDF school visit",
      summary:
        "Israel's Foreign Ministry wished Lebanon well on its Independence Day and hoped for independence from the ambitions of a distant state, an unnamed reference to Iran, as the two countries hold direct talks. Prime Minister Nawaf Salam condemned the IDF Arabic spokeswoman's visit to a school in Debel, inside Israel's buffer zone, as propaganda.",
      impact:
        "The Lebanon track runs on talks and sovereignty friction at once.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Al Jazeera",
      event: "Tanker crossings hold at 2.3 a day; Brent readings diverge",
      summary:
        "hormuz.now counted 16 AIS-visible tanker crossings in seven days, 2.3 a day against 47.6 pre-crisis, one LNG carrier and 55 commercial ships. PortWatch tonnage stays at 0.8% of normal and Ras Laffan calls at 28%. Trading Economics shows Brent near $92.3 in its table and $90.46 in its text. Al Jazeera counts about 25 tankers hit since 14 November.",
      impact:
        "Oil is still priced as surplus while gas flows stay near zero.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. A US official told CBS the latest Iranian attacks caused no damage to US forces; no CENTCOM comment on the MQ-1 claim was located. The fifty-fourth cycle with no disclosure statement.",
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
        "No new official war toll. Mousavi's figure of nearly 7,200 dead, including 623 children, and Darzi's claim of more than 5,000 are held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,216+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 KIA, +2 WIA",
      status:
        "Two wounded added from Bahrain's interior ministry. Houthi-run, Yemeni government and Taiz siege-office counts are held apart; a Jordanian sailor remains missing.",
    },
  },
  exec:
    "Iran claimed two more mined tankers in Hormuz and a 20th US MQ-1 downed, while Donald Trump set the new year as his horizon for renewed strikes. Iran's navy said two tankers that entered a prohibited zone east of the strait with transponders off caught fire after hitting mines; the IRGC Navy warned shipowners that following CENTCOM guidance risks \"bankruptcy.\" UKMTO, via Shafaq News, reported only an undetailed tanker-military encounter in the Gulf of Oman; no vessel has been named. Bahrain's interior ministry said Saturday's Iranian attacks injured a Bahraini citizen and a Pakistani resident, the latter critically, after earlier reporting no injuries from the industrial-site strike; the GCC and Arab League condemned the attacks, and Saudi Arabia warned Iran would bear the consequences. An unnamed US official told CBS the attacks caused no damage to US forces. Trump told Fox he is inclined to resume strikes after the new year without a deal, called Iran's negotiators \"professional tap dancers,\" and said blockade runners would end up \"at the bottom of the sea.\" Channel 12 reports IDF Military Intelligence warned Netanyahu that a strike could open several fronts, against his and the Mossad chief's three-to-five-day expectation. Masoud Pezeshkian and Mohammad Bagher Ghalibaf both said the \"neither war nor peace\" state cannot continue; Kazem Gharibabadi said the diplomatic window is still open. Bloomberg reports London preparing for renewed US strikes. The Houthis claimed a strike on Saudi Arabia's Rabigh refinery, unconfirmed by Riyadh. hormuz.now still counts 2.3 tanker crossings a day against 47.6 pre-crisis. Two Bahraini-reported wounded are added. Direction stays escalating; the probability eases to 5.",
  implications: [
    {
      title: "The new-year clock: Washington names a horizon, Israel's own intelligence warns against a short war",
      body:
        "Under the multi-clock framework, the active-deadline clock acquired a date. Trump told Fox he is inclined to resume strikes after the new year if no deal is reached, called Iran's negotiators \"professional tap dancers,\" and said tankers testing the blockade would be \"at the bottom of the sea.\" On Truth Social he said Iran had launched more drones and missiles in the past week than at any time in over a year, all knocked down, and tied the escalation to the Democrats' midterm win. Both are claims; the second is not matched by any published CENTCOM tally. In Israel, Channel 12 reports that Military Intelligence warned Netanyahu at a closed meeting last week that a strike could ignite Lebanon, Syria and Gaza, against his and Mossad chief Roman Gofman's expectation of a three-to-five-day operation. Kan says Netanyahu is pressing Trump to strike \"as soon as possible,\" while White House officials who favour more time for sanctions gain influence. The caretaker-risk and Israel's-independence priors sharpen: Avigdor Liberman, chairing the temporary Foreign Affairs and Defense Committee, fears unilateral action. Tehran answered on two registers. Pezeshkian and Ghalibaf said the \"neither war nor peace\" state cannot continue, Gharibabadi said the window is still open, and Mohsen Rezaei mocked Trump's \"bigger than Yalta\" post. Both capitals now reject the limbo, for opposite reasons. Bloomberg reports London preparing for renewed strikes and weighing limits on US use of British bases. The probability eases to 5.",
    },
    {
      title: "Mines, hosts and the Gulf: Iran raises the cost, the Arab states close ranks",
      body:
        "The energy-infrastructure and coalition-cohesion clocks moved together. Iran's navy and the IRGC Navy claim two more tankers mined east of Hormuz and near Ghanam Island, saying they ran dark through a prohibited zone; the IRGC told shipowners that following CENTCOM guidance risks \"bankruptcy.\" UKMTO's only published item, via Shafaq, is an undetailed tanker-military encounter in the Gulf of Oman, so the mines-as-enforcement prior again outruns confirmed hulls. The IRGC also claims a 20th MQ-1, its fourth US drone in 24 hours; no US comment was located, and the claim-inflation prior applies. Al Jazeera's Tehran correspondent counts about 25 tankers hit since 14 November. On land, Bahrain now reports two injured, one critically, from Saturday's attacks, and its foreign ministry rejected the IRGC's account of hitting Patriot radars. The GCC, Arab League, UAE, Qatar and Saudi Arabia condemned the attacks; Riyadh warned of consequences. Oman's ambassador in Tehran, by contrast, pledged to keep working with Iran to restore normal shipping. Rami Khouri reads the campaign as an effort to show Gulf hosts that Washington cannot protect them; Trita Parsi warns that continuing the blockade means escalation; Hassan Ahmadian calls it a binary choice forced on Trump. The second chokepoint stays hot: the Houthis claim Rabigh and an Al-Dawasir radar, the coalition reports drones downed, and Taiz officials count 80 civilians killed by Houthi fire from 1 to 20 November. Qatar's reported window closes around 24 November with no readout.",
    },
    {
      title: "Taiwan: the strike horizon lands on the LNG winter",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. hormuz.now counts 16 AIS-visible tanker crossings in seven days, 2.3 a day against 47.6 pre-crisis and unchanged from yesterday, with one LNG carrier in seven days and two in 30. That is a floor, since AIS misses dark ships. PortWatch tonnage stays at 0.8% of normal to 15 November and Ras Laffan port calls at 28%. Brent is harder to read: Trading Economics's table shows about $92.3, while its summary text cites $90.46; either way the oil-priced-as-surplus prior holds as the IEA projects a 2 mb/d surplus. For Asian LNG buyers the changed variable is timing. A named new-year horizon for strikes overlaps QatarEnergy's force majeure to end-December and the Northern Hemisphere winter peak, and a renewed campaign would land in the window in which Taipower and CPC must secure replacement cargoes. The markers remain crossings against 2.3 a day, LNG transits, Qatar's force majeure and the unpassed supplementary budget.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Mousavi's nearly 7,200 dead (623 children) and a separate Red Crescent child count of 428 conflict with the official series and are held apart, as is Darzi's 5,000-plus claim. HRANA's execution series (at least 2,003 to 8 October) carries unmerged.",
    other:
      "Two Bahraini-reported wounded added. The Houthi-run civilian deaths in Saada, Taiz and Sanaa, the Yemeni government's 86 Houthi fighters killed or incapacitated, Taiz's 80 civilian dead in November and the missing Jordanian sailor are held apart.",
  },
};

export default data;
