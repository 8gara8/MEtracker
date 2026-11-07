import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged. Democrats took both houses of Congress and Trump said the war was part of the reason, which pushes toward a deal, while Mojtaba Khamenei wrote that concessions were a mistake. A reported US approval of a Qatari draft rests on anonymous sources, and no text has been published.",
      risk7d:
        "Extreme and unchanged. The lame-duck window runs to 3 January, and a New York Times account seen in a search result had CENTCOM ready to strike as early as Wednesday. No strike or stand-down was located, and the supreme leader promised a response on a much greater scale.",
      spillover:
        "Critical and unchanged. A UAE-owned tug is reported sunk off Musandam and a tanker was hit off Limah, Lebanon recorded its first death from an Israeli strike since September, and Hamshahri says Iran's target bank includes US bases in Europe.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: "AFP via The Peninsula; the Associated Press via Al-Monitor; CFR",
      event: "Democrats take both houses of Congress, and the war is part of why",
      summary:
        "AFP, via The Peninsula, reported Democrats seized the House and flipped Senate seats in at least six states, including Texas, Kansas and South Carolina. The Associated Press, via Al-Monitor, projected at least seven Senate flips and expects a new war-powers resolution to pass; September's attempt failed 49 to 50. The new Congress sits on 3 January.",
      impact:
        "The largest single move in the political-will clock this file has recorded. A veto override still needs two-thirds, and the lame-duck window runs to January.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Donald Trump and a White House official via The Peninsula (AFP); The New York Times via The New Arab (search result); CNBC",
      event: "Trump says a part of it was Iran, while a reported New York Times account puts CENTCOM ready to strike",
      summary:
        "Trump congratulated the Democrats and told Fox News that a part of the result was Iran, but that people understood the importance of what he has done with Iran. A White House official said gas prices would fall when the Iran conflict is solved. The New York Times, per a search-result summary of The New Arab, reported CENTCOM ready to strike as early as Wednesday.",
      impact:
        "The attribution is new; the one-day-permit prior still governs timing statements. No strike or stand-down was located by research time.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Mojtaba Khamenei's written message via Tehran Times",
      event: "Mojtaba Khamenei says concessions were a mistake and promises a much greater response",
      summary:
        "In a written message for Iran's National Day of Fighting Global Arrogance, the supreme leader said the United States has suffered an irreversible decline, that those who thought concessions could persuade Washington to drop its pressure were gravely mistaken, and that renewed aggression would meet a response on a much greater scale. A change of US party would not end hostility, he said.",
      impact:
        "The most senior text of the cycle does not mention talks. On the answer-by-omission prior, it narrows what delegated negotiators can concede.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: "Qalibaf, Baqaei, Moqaddamfar and Aghajanpour via Tehran Times; Hamshahri via Euronews",
      event: "Tehran reads the vote as a verdict on the war",
      summary:
        "Speaker Qalibaf wrote that Americans said no to war and Iran endorses the message. Spokesman Baqaei said the American people sent a clear message. IRGC adviser Moqaddamfar said in Bandar Abbas there is no fundamental difference between the US parties. A defence ministry official claimed new weapons with surprise capabilities, and Euronews relayed Hamshahri saying Iran's target bank now includes US bases in Europe.",
      impact:
        "Celebration without a policy change. The weapons and target-bank claims are unverified and logged as claims.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: "Al-Araby Al-Jadeed via Daily Times; Qatar MOFA via The Peninsula; Javan and Araghchi via Iran International",
      event: "An anonymous report says Washington approved a Qatari draft; Qatar will not confirm a development",
      summary:
        "Sources told Al-Araby Al-Jadeed, via Daily Times, that the US approved a draft memorandum Qatar presented to Iran, that Saudi Arabia and the UAE approved it, and that it pairs a simultaneous Iranian nuclear announcement with a partial release of frozen assets. Majed Al Ansari said a mediator cannot lose hope but no particular development can be discussed. Javan reports Tehran rejected a five-day confidence-building proposal.",
      impact:
        "A reported approval of an unpublished draft. The 36-hour feedback window closed with no published reply from either side, so the probability does not move on it.",
    },
    {
      id: 6,
      direction: 'neutral',
      importance: 'high',
      source: "Trading Economics; hormuz.now; Windward (search result); Oilprice.com (search result)",
      event: "Brent falls about 9% to under $95 while tanker crossings run at three a day",
      summary:
        "Trading Economics put Brent at about $94.89 on 4 November, down 8.66% on the day, as markets price an end to the war and tie it to the midterm result. hormuz.now counted 21 AIS-visible tanker crossings in seven days, 3.0 a day against 47.6 before the crisis, and no LNG or LPG carrier. Windward counted seven crossings on 2 November.",
      impact:
        "Diplomacy priced, not supply, at its widest gap yet. The prints come from different methods and are not differenced.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "Riviera, relaying Pakistan's NAVAREA IX and the IMO register; the IRGC via Fars (Riviera); Iran's IMO delegation via Tehran Times",
      event: "A UAE-owned tug is reported sunk off Musandam, and a Barbados-flagged tanker is hit",
      summary:
        "Riviera reported the offshore tug Selat Storm was hit northwest of Musandam on 1 November; Pakistan's NAVAREA IX warning says it sank 0.6 nautical miles west of Oman's northernmost tip, crew status unconfirmed. The tanker Grit was hit in the engine room off Limah on 3 November. The IMO register counts 128 incidents and 24 seafarer deaths.",
      impact:
        "Names and coordinates again come from third parties. The IRGC claim of four tankers destroyed by mines still names none, and Iran told the IMO Council its reporting is biased.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Herzog and the Central Elections Committee via Al Jazeera and PBS NewsHour (AP); Qatar MOFA via The Peninsula",
      event: "Herzog accepts certified results and opens consultations; Qatar rejects interference claims",
      summary:
        "President Isaac Herzog accepted the certified Knesset results after the Central Elections Committee, chaired by Justice Noam Sohlberg, found no irregularities that changed the outcome across 9,069 polling stations. The count stands at 53 for Netanyahu's bloc, 48 for Eisenkot's and 19 for Arab-led parties. Ben-Gvir called the election stolen; Al Ansari said Qatar would not be a scapegoat.",
      impact:
        "The fraud route is closed at the president's desk. The nominee gets 28 days plus 14, and a new election early next year is possible.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Lebanese health ministry and the National News Agency via Asharq Al-Awsat",
      event: "Lebanon reports its first death from an Israeli strike since September",
      summary:
        "Lebanon's health ministry and the National News Agency said an Israeli drone struck the Qabrikha area in the south on 4 November, killing a motorcyclist and wounding another man, the first such death since September, as reported by Asharq Al-Awsat. No Israeli military statement on the strike was located.",
      impact:
        "The Lebanon-gap prior holds. The death sits on Lebanon's parallel series, not this file's other-theatres row.",
    },
    {
      id: 10,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Chinese readouts via Al Jazeera; Qatar MOFA via The Peninsula",
      event: "Beijing steps up: Wang Yi meets Bagheri Kani, and Xi and Oman call for Hormuz to reopen",
      summary:
        "Al Jazeera reported Wang Yi told Ali Bagheri Kani on 2 November that dialogue is the only viable path, while Xi Jinping and Sultan Haitham called in a joint statement for safe Hormuz navigation to resume and US-Iran dialogue to restart. Envoy Zhai Jun visits Iran, Oman and Saudi Arabia this month. Qatar's Amir discussed the crisis with Putin.",
      impact:
        "China's envoy is now a dated test. Beijing and Muscat add weight on navigation without adding a mechanism.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported this cycle and no CENTCOM statement located. The thirty-sixth cycle with no disclosure statement.",
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
        "No new official war toll and no casualties reported from any US action this cycle. The execution series carry unchanged and unmerged. The fifty-seventh day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,715+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No addition adopted. The Selat Storm is reported sunk with crew status unconfirmed. The IMO register's 24 seafarer deaths are held apart from CENTCOM's more-than-20. Riviera dates the Al Jusufi death to 2 November against CBS's 3 November; it is carried once.",
    },
  },
  exec:
    "Republicans lost both houses of Congress in Tuesday's midterms, and the war on Iran was part of the reason by the President's own account. AFP, via The Peninsula, reported Democrats seized the House and flipped Senate seats in at least six states, including Texas, Kansas and South Carolina; the Associated Press projected at least seven Senate flips. Donald Trump congratulated the Democrats and told Fox News that \"a part of it was Iran.\" A war-powers resolution that failed 49 to 50 in September is now expected to pass once the new Congress sits on 3 January, though a veto would still need two-thirds to override. Markets read the vote as a push toward a deal: Trading Economics put Brent at about $94.89 on Wednesday, down 8.7% on the day, while hormuz.now counted three AIS-visible tanker crossings a day against 47.6 before the war. Tehran read it as vindication. Supreme Leader Mojtaba Khamenei, in a written message, said those who thought concessions could persuade Washington were gravely mistaken and warned of a response on a much greater scale to any renewed attack; Speaker Qalibaf wrote that Americans said no to war. The Qatari track produced a claim but no text: anonymous sources told Al-Araby Al-Jadeed the United States approved a Qatari draft memorandum, while Qatar's Majed Al Ansari said no particular development could be discussed. At sea, a Pakistani navigational warning reports the UAE-owned tug Selat Storm sunk off Musandam. Israel's President Herzog accepted the certified election results and began consultations. Direction stays mixed; the probability rises one point to 10 on the political-will clock, not the draft.",
  implications: [
    {
      title: "The vote moves the political-will clock, and the lame duck runs to 3 January",
      body:
        "Under the multi-clock framework, the political-will clock moved further in one night than in any cycle this file has recorded, and it moved against the war. Trump told Fox News that a part of the result was Iran; a White House official said gas prices would fall when the conflict is solved; the Associated Press, via Al-Monitor, ties the Democratic gains to affordability concerns from the war. At CFR, Elisa Ewers expects hearings \"to expose the failed strategy,\" and Michael Horowitz lists Epic Fury among the 2027 oversight targets. The limits are structural. The new Congress sits on 3 January, a veto override needs two-thirds in each chamber, and CNBC's sources doubt war-powers votes would bind the administration. That leaves about eight weeks in which the outgoing Congress and the President alone decide, and the window cuts both ways. It strengthens the case for a deal before January, which is how the market read it. It also strengthens the case for finishing the military option while the window is open: CNBC quotes Lintzenich saying \"We still have pending action in Iran,\" and the New York Times, per a search-result summary of The New Arab, reported CENTCOM ready to strike as early as Wednesday. Neither a strike nor a stand-down was located. The probability moves from 9 to 10 on this clock alone. The reported US approval of a Qatari draft does not move it: no text, no named signatory, no session the United States attends.",
    },
    {
      title: "Tehran answers the vote with a harder line, and the market answers with a 9% fall",
      body:
        "The negotiation-capacity clock improves on paper while the doctrine variable hardens. Mojtaba Khamenei's written message for 13 Aban is the most senior text of the cycle, and it argues against the logic of an interim deal: those who thought concessions could relieve pressure were gravely mistaken, and a change of party in Washington will not end hostility. Read beside Javan's report, via Iran International, that Tehran rejected Qatar's five-day confidence-building proposal, and Rezaei's seven conditions, the message narrows what Pezeshkian's delegated authorities can concede. It also fits the answer-by-omission prior: the principal did not mention negotiations at all. The market priced the opposite. Brent's fall to about $94.89, roughly $10 below Tuesday's $104.5 print and more than $20 below the near-$118 of late October, came while hormuz.now counted 21 AIS-visible tanker crossings in seven days and no gas carrier. That is the diplomacy-priced-not-supply prior at its widest gap yet. The attack series did not pause for the vote. Pakistan's NAVAREA IX warning, via Riviera, reports the Selat Storm sunk off Oman's northernmost tip with its crew status unconfirmed, the first sinking in this file located by a third party with coordinates. Iran's IMO delegation calling the Council's reporting biased and incomplete is a claim about the record, not a denial of the attacks.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; the price relief is real but unhedged",
      body:
        "No fresh Taiwan-specific development was located this cycle, and prior assessments are unchanged; the supplementary budget for Taipower and CPC remains unpassed as far as this file knows. Two inputs move. On price, Brent under $95, if it holds, cuts the fuel-cost overshoot on the state utilities' balance sheets sharply against the near-$118 carried at the end of October. It was priced on an election and an unpublished draft, and one strike in the lame-duck window could reverse it in a session. On LNG, hormuz.now counted no LNG or LPG carrier crossing in the last seven days and one LNG carrier in thirty, and relays a September report that QatarEnergy extended force majeure into early December. For an importer that relies on Qatari cargoes, volume, not price, is the binding constraint, and it has not eased. China's envoy Zhai Jun is due in Iran, Oman and Saudi Arabia this month; a Beijing-brokered Hormuz arrangement would carry its own strategic cost for Taipei.",
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
      "+0 adopted. Selat Storm crew status unconfirmed; the Qabrikha death in Lebanon sits on Lebanon's parallel series.",
  },
};

export default data;
