import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. The IRGC Navy claims three more tankers mined under US air escort and Iran's army claims a US LUCAS drone, while Treasury adds shadow-banking sanctions; a reported week-long strike delay slows the decision clock but not the sea war.",
      risk7d:
        "Extreme and unchanged. Ynet reports Washington holding off strikes for at least a week and Israel's military chief and Mossad analysts see no urgency, but CENTCOM is at maximum readiness and Netanyahu still presses for action.",
      spillover:
        "Critical and unchanged. Houthi-run outlets report 10 killed by Saudi strikes, an Iranian MP claims a 4,500 km missile range reaching Europe, and Tehran reportedly summoned Qatar's chargé d'affaires over a German-Qatari statement.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy via Press TV, Iran International and Tasnim",
      event: "IRGC Navy claims three more tankers mined under US escort",
      summary:
        "The IRGC Navy said Monday night that three oil tankers caught fire after hitting mines, one near the strait's southern coast and two east of it, while under US air escort, and warned that escorts do not exempt ships from its instructions. Tasnim carried its earlier claim of two supertankers disabled north of Ghanam Island. No vessel, casualty or CENTCOM response was located.",
      impact:
        "Iran now targets the escort model itself, on its own unverified account.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Ynet and i24NEWS via Iran International; US official via Al Arabiya, Iran International liveblog",
      event: "Washington reportedly holds off strikes for at least a week",
      summary:
        "Ynet reported that the US has decided for now to hold off any attack for at least a week, with Trump inclined to wait for the new year if talks fail and his advisers divided over another offensive versus the blockade. i24NEWS said CENTCOM, at maximum readiness, wants to attack or stand down. A US official told Al Arabiya Washington could strike at any time.",
      impact:
        "The decision clock slips by days, on press reporting rather than announcement.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: "Haaretz, Channel 13 and Kan via Times of Israel",
      event: "Israel's security establishment sees no urgency to strike",
      summary:
        "Haaretz reported that Mossad researchers assessed no immediate need for action, while chief Roman Gofman pressed for strikes and lobbied CIA Director John Ratcliffe. Channel 13 quoted Chief of Staff Eyal Zamir saying there is no urgent need and Israel could wait for Washington. Kan said some officials prefer sustained economic pressure. An Israeli official denied any operation was prepared without the IDF.",
      impact:
        "The short-war case is losing institutional backing inside Israel.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "Netanyahu and Eisenkot via Times of Israel; Gulf News",
      event: "Netanyahu and Eisenkot split over an 'immediate' Iran threat",
      summary:
        "At a Likud faction meeting Netanyahu said rivals minimize Iran's threats for political reasons and called for a unity government including UTJ and Shas. Gadi Eisenkot said there is no immediate threat requiring action before a new government is sworn in and that the 440 kg of enriched uranium is the greater danger. Gulf News gives his coalition deadline as 6 December.",
      impact:
        "Iran policy has become a coalition-formation issue in Israel.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Qatari PM via Iran International liveblog and The Peninsula; Axios via Iran International; Times of Israel liveblog",
      event: "Qatar's prime minister meets Rubio and Vance",
      summary:
        "Sheikh Mohammed bin Abdulrahman Al Thani told Al Jazeera the region cannot withstand another US-Iran escalation, then met Marco Rubio, opening the eighth US-Qatar Strategic Dialogue, and, per Axios, Vice President JD Vance with envoy Ali al-Thawadi. He also spoke with Egypt's Badr Abdelatty, who says Cairo is working with Qatar, Turkey, Saudi Arabia and Pakistan on talks.",
      impact:
        "Mediation thickens, but no sign of Iranian movement emerged.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "Esmaeil Baqaei via Tasnim; Iran International liveblog",
      event: "Tehran dismisses convoy reports and keeps its seven conditions",
      summary:
        "Foreign Ministry spokesman Esmaeil Baqaei called reports of more than 14 tankers assembling near Kharg to run the blockade media speculation, but said Iran may use any necessary means against US measures and would not abandon its seven conditions under pressure. Iran International reports Tehran summoned Qatar's chargé d'affaires over a German-Qatari statement condemning Iranian attacks.",
      impact:
        "Iran denies the convoy without retiring the blockade test.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Treasury and State Department via Times of Israel, Al Jazeera and Iran International liveblog",
      event: "Treasury sanctions Iran's shadow banking network",
      summary:
        "Under Operation Economic Outcast, Treasury sanctioned 22 entities and eight individuals, including exchange houses and front companies, at least eight of them in Dubai, and estimated $14.7 billion in shadow-banking activity from January 2025 to August 2026. Scott Bessent said Iran's economy is underwater. The State Department's Rewards for Justice renewed an offer of up to $15 million on IRGC finances.",
      impact:
        "Washington keeps substituting financial pressure for strikes.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'low',
      source: "Ahmad Vahidi via Press TV; Mostafa Izadi via Tasnim; Ahmad Bakhshayesh Ardestani via Iran International; Gulf News",
      event: "IRGC vows an unbounded response; an MP claims a 4,500 km range",
      summary:
        "IRGC chief Ahmad Vahidi promised a decisive response within the geography of the threat, citing Mojtaba Khamenei's order for war without geographic limits; deputy commander Mostafa Izadi said forces are at their highest readiness. MP Ahmad Bakhshayesh Ardestani said missile range has grown to 4,500 km, putting Europe in reach, without evidence. Gulf News cites US estimates of 1,500 to 2,500 missiles left.",
      impact:
        "Range claims widen the stated retaliation map toward Europe.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'low',
      source: "Iranian army via Press TV; Gulf News live coverage",
      event: "Iran claims a US LUCAS drone; an analyst reports a US strike on a tanker",
      summary:
        "Iran's Army Air Defense Force said it destroyed a US LUCAS one-way attack drone over the Gulf east of the strait. Gulf News carried a maritime security analyst's report of a US strike on a tanker near Chabahar, close to the blockade line, unconfirmed by either government, and a Joint Maritime Information Centre count of seven tankers hit since 16 November.",
      impact:
        "Claims from both sides at sea remain largely unverified.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Houthi-run outlets via Press TV; Saudi-led coalition via Iran International liveblog",
      event: "Houthi media report 10 killed by Saudi strikes in Yemen",
      summary:
        "Press TV, citing Al-Masirah and the Houthi-run health ministry, reported at least 10 killed and about 35 injured, six of the dead at a telecoms building in Hodeidah, three civilians in Saada and one worker in Sanaa. Saudi Arabia did not comment. Coalition spokesman Turki al-Malki said a Houthi drone launched toward southern Saudi Arabia was intercepted and destroyed.",
      impact:
        "The second chokepoint war continues on both sides of the border.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "Hassan Abdolianpour via Gulf News; Abbas Araghchi via Tasnim; Ali al-Zaidi via Shafaq News",
      event: "Iranian courts claim $290 billion; Iraq urges a peaceful resolution",
      summary:
        "Hassan Abdolianpour of Iran's judiciary said domestic courts awarded $290 billion in damages against the United States; Iran has also filed suits against Gulf states over US use of their territory. Abbas Araghchi said Iran had withstood two wars and that decisions on talks rest with the senior leadership. Iraq's Prime Minister Ali al-Zaidi, in Cairo, urged both sides toward peaceful means.",
      impact:
        "Tehran builds legal leverage as neighbours press for talks.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Gulf News live coverage",
      event: "Brent hits a three-month low as AIS crossings hold at 2.3 a day",
      summary:
        "Trading Economics shows Brent near $89.3, down about 3.5% and at a three-month low, citing more time for talks, Libya's Sharara restart and an IEA surplus; Gulf News gives $88.75 and WTI at $79.95. hormuz.now counts 16 tanker crossings in seven days and one LNG carrier; Kpler, via Trading Economics, estimates 9.5 million barrels a day through Hormuz.",
      impact:
        "Crude is priced as surplus while LNG flows stay near zero.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty and no CENTCOM response to the IRGC's tanker and drone claims were located. The fifty-fifth cycle with no disclosure statement.",
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
        "No new official war toll. Mousavi's figure of nearly 7,200 dead and Darzi's claim of more than 5,000 stay held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,216+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change adopted. Houthi-side reports of 10 killed and about 35 injured by Saudi strikes are held apart; no host-state casualty was located this cycle.",
    },
  },
  exec:
    "Iran's IRGC Navy claimed three more tankers mined in Hormuz, this time under US air escort, as reports from Washington and Israel pointed to a delay rather than an imminent strike. The IRGC Navy said Monday night that one tanker hit a mine near the strait's southern coast and two east of it; no vessel was named and no US comment was located. Iran's army claimed a US LUCAS drone downed. Foreign Ministry spokesman Esmaeil Baqaei called reports of a 14-tanker blockade-running convoy \"media speculation\" but said Iran would use all available means against the blockade. Ynet, via Iran International, reports Washington holding off any strike for at least a week, with Trump inclined to wait for the new year; i24NEWS says CENTCOM wants to attack or stand down. In Israel, Haaretz reports Mossad researchers see no urgency even as chief Roman Gofman lobbies for strikes, Channel 13 quotes Chief of Staff Eyal Zamir saying there is \"no urgent need,\" and Gadi Eisenkot says the threat is not immediate; Netanyahu accuses rivals of minimizing it. Qatar's prime minister met Marco Rubio and JD Vance in Washington and warned the region cannot absorb another round; Iran reportedly summoned Qatar's chargé d'affaires over a German-Qatari statement. Treasury sanctioned 22 entities and eight people in Iran's shadow banking network, citing $14.7 billion in flows. The Washington Post reports some Senate Republicans open to cutting war funding before the 11 December deadline. Brent fell about 3.5% to roughly $89, a three-month low; hormuz.now still counts 2.3 tanker crossings a day against 47.6 pre-crisis. No casualty series changes. Direction stays escalating; the probability holds at 5.",
  implications: [
    {
      title: "The decision clock slips: Washington pauses, Israel's security establishment pushes back",
      body:
        "Under the multi-clock framework, the active-deadline clock eased by days rather than moved. Ynet, via Iran International, reports Washington has decided to hold off any strike for at least a week, with Trump inclined to wait until after the new year if talks fail; his advisers are split between another offensive and leaning on the blockade. That is a press report, not an announcement, and a US official quoted by Al Arabiya said Washington could still strike \"at any time.\" i24NEWS says CENTCOM is at maximum readiness and wants either to attack or to stand down. In Israel the case for a short war is losing its institutional backing. Haaretz, via the Times of Israel, reports Mossad researchers judged no immediate need for action while chief Roman Gofman lobbied CIA Director John Ratcliffe for joint strikes; Channel 13 quotes Chief of Staff Eyal Zamir saying there is \"no urgent need\" and that Israel could wait for Washington and a new government. Gadi Eisenkot, whose coalition deadline Gulf News gives as 6 December, says the real danger is the roughly 440 kg of enriched uranium. Netanyahu, as caretaker, says rivals minimize the threat for political reasons. The caretaker-risk and Israel's-independence priors hold, but today's evidence cuts toward restraint inside the Israeli system. The political-will clock also moved: the Washington Post reports some Senate Republicans open to cutting war funding before 11 December, and Hakeem Jeffries says Democrats will seek to end the war in January. The probability holds at 5.",
    },
    {
      title: "At sea and in the Gulf: more mine claims, more sanctions, more mediation",
      body:
        "The energy-infrastructure and negotiation-capacity clocks moved in opposite directions. The IRGC Navy now claims three more tankers mined, one near the strait's southern coast and two east of it, and says they were under US air escort; no hull is named and no CENTCOM response was found. Iran's army separately claims a US LUCAS one-way attack drone. The mines-as-enforcement and claim-inflation priors apply. Gulf News carries a maritime analyst's report of a US strike on a tanker near Chabahar, also unconfirmed, and the Joint Maritime Information Centre's count of seven tankers hit since 16 November, against Al Jazeera's earlier count of about 25 since 14 November. Baqaei dismissed the 14-tanker convoy as speculation while saying Iran may use any means against the blockade; the blockade-as-trigger prior is unresolved. Washington answered with money, not missiles: Treasury's Operation Economic Outcast sanctioned 22 entities and eight people, at least eight companies in Dubai, citing $14.7 billion in shadow-banking flows since January 2025, and Scott Bessent said Iran's economy is \"underwater.\" The economic-coercion-substitutes prior strengthens. Mediation thickened: Qatar's prime minister met Rubio and Vance, Egypt's Badr Abdelatty says Cairo is working with Qatar, Turkey, Saudi Arabia and Pakistan, and Iraq's Ali al-Zaidi urged peaceful means. Against that, Iran reportedly summoned Qatar's chargé over a German-Qatari statement, and Baqaei says the seven conditions stand. In Yemen, Houthi-run outlets report 10 killed by Saudi strikes; Riyadh has not commented.",
    },
    {
      title: "Taiwan: crude falls on the delay while LNG stays near zero",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. hormuz.now counts 16 AIS-visible tanker crossings in seven days, 2.3 a day against 47.6 pre-crisis and unchanged from yesterday, with one LNG carrier in seven days and two in 30. PortWatch tonnage stays at 0.8% of normal to 15 November and Ras Laffan port calls at 28%. The AIS floor now sits beside much higher estimates: Kpler, via Trading Economics, puts Hormuz flows at about 9.5 million barrels a day in the ten days to 19 November, down from 12.2 million in October, and Al Arabiya cites 108 million barrels in a week. The gap is unreconciled. Brent fell about 3.5% to roughly $89 on Trading Economics, a three-month low, and Gulf News puts it at $88.75 with WTI under $80; the drivers cited are more time for talks, Libya's Sharara restart and the IEA's surplus. The oil-priced-as-surplus versus gas-shut prior sharpens: crude eases while Qatar's LNG stays under force majeure to end-December. For Taipower and CPC, cheaper crude does not offset the LNG gap at the winter peak, and a strike horizon pushed into the new year moves the risk window into January cargo planning. The markers remain crossings against 2.3 a day, LNG transits, Qatar's force majeure and the unpassed supplementary budget.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Mousavi's nearly 7,200 dead (623 children) and a separate Red Crescent child count of 428 conflict with the official series and are held apart, as is Darzi's 5,000-plus claim. HRANA's execution series (at least 2,003 to 8 October) carries unmerged; no November monitor tally was located.",
    other:
      "No change adopted. Houthi-side reports of at least 10 killed and about 35 injured by Saudi strikes in Hodeidah, Saada and Sanaa are held apart with other Yemeni counts; the missing Jordanian sailor from the ADNOC tanker remains unaccounted for.",
  },
};

export default data;
