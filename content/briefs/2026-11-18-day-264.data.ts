import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. US jets struck Qeshm hours after the third IRGC launch at Bahrain in five days, the first US answer since Trump's \"unless provoked\" line, and the IRGC commander promises devastating strikes for any further aggression.",
      risk7d:
        "Extreme and unchanged. Both sides now reply in kind at low intensity with no casualties, but a strike-and-counter-strike loop is open, three US carriers are in theatre and a tanker crew is unaccounted for.",
      spillover:
        "Critical and unchanged. Kuwait's air defences engaged hostile drones, the GCC asks the Security Council to act, the IRGC threatens Bahrain's monarchy, and Iraqi forces surround a Kataib Hezbollah stronghold ahead of Friday's deadline.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "US military official via Times of Israel and Gulf News; Ahmad Nafisi and Iranian media via Iran International",
      event: "US jets strike Qeshm after the third Bahrain launch",
      summary:
        "Hours after IRGC drones were fired at a US radar at Isa Air Base, US fighter jets struck what a US military official called an IRGC missile-launch site on Qeshm Island with precision munitions, calling it self-defence against IRGC aggression. Iranian media said an air-defence launcher in the Nariman area was hit; Hormozgan's deputy governor reported no damage to infrastructure. No casualties were reported.",
      impact:
        "The first US answer to the Bahrain rhythm is proportional and casualty-free, keeping both sides below the threshold.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'medium',
      source: "Ahmad Vahidi via RT and Press TV; Ali Abdollahi via Tasnim",
      event: "IRGC commander promises devastating strikes for any aggression",
      summary:
        "RT quoted IRGC commander Ahmad Vahidi as warning that any renewed US or Israeli aggression, no matter how minor, would meet devastating and painful strikes. Press TV's account of the same speech has him say the US-Israeli enemy is paralyzed on all fronts and has admitted defeat. Tasnim quoted Armed Forces chief Ali Abdollahi vowing to drive US forces back as far as the South Pole.",
      impact:
        "Tehran's rhetoric rises while its reply to Qeshm has so far been words, not fire.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Kuwaiti military via Iran International; ABC News",
      event: "Kuwait's air defences engage hostile drones",
      summary:
        "Kuwait's military said on Tuesday night that its air defences were responding to hostile drone attacks. It gave no origin, damage or casualty details. Iranian drones and Iraqi militias have both struck Kuwait earlier in the war. The report came hours after the Qeshm strike and the IRGC launch at Bahrain, and on the same night as the GCC's call for Security Council action.",
      impact:
        "If Iranian or militia fire, the host-state rhythm extends beyond Bahrain to a second Gulf exporter.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "Jasem Albudaiwi via The Peninsula; Saudi and Qatari foreign ministries via Gulf News",
      event: "GCC asks the Security Council to act; Riyadh and Doha condemn",
      summary:
        "GCC Secretary-General Jasem Albudaiwi condemned brutal Iranian attacks on Bahrain, urged the UN Security Council to take firm steps to stop them, and said any attack on Bahrain infringes the security of all GCC states. Saudi Arabia called for an immediate halt to Iranian attacks across the region and for diplomacy to be given a chance. Qatar condemned the attacks as a serious escalation.",
      impact:
        "Gulf states close ranks behind Bahrain while still asking for diplomacy, not retaliation.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: "Majed Al Ansari via The Peninsula and Times of Israel",
      event: "Qatar meets Iranian officials; no outcome published",
      summary:
        "Qatari foreign ministry spokesman Majed Al Ansari said Doha's meeting with Iranian officials on Tuesday continued periodic delegation contacts aimed at narrowing gaps between proposals and bridging the US-Iran divide. He urged restraint and said no party benefits from a neither-war-nor-peace stalemate. The Times of Israel reported the meeting took place. No outcome, text or US interlocutor was published.",
      impact:
        "Qatar's reported window to about 24 November runs on with nothing public to show for it.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: "ECO communique via The Peninsula; Omani foreign ministry via Oman Observer",
      event: "ECO backs Qatari-Pakistani mediation but omits Iran's Hormuz offer",
      summary:
        "The ECO Council of Ministers in Islamabad backed Qatari and Pakistani mediation, called Qatar a trusted intermediary and urged dialogue, but did not mention Iran or Hormuz. Araghchi had said ECO states responded positively to Iran's two-day reopening offer. In Muscat, Omani Foreign Minister Badr Albusaidi and Araghchi stressed safeguarding maritime routes and uninterrupted shipping, without naming Hormuz.",
      impact:
        "Multilateral endorsements stay general; Araghchi's account of ECO support remains his own claim.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "UKMTO via Times of Israel and Gulf News; Iran's Navy via Press TV and Tasnim; Critical Threats",
      event: "A tanker crew is unaccounted for north of Khasab; Iran claims more mine strikes",
      summary:
        "UKMTO reported a vessel hit by fire about seven nautical miles north of Khasab with its crew unaccounted for, and ABC reported a transiting tanker struck a second time. The IRGC and Iran's navy said an LNG ship and two oil tankers caught fire, and the army claimed a US LUCAS drone downed. Critical Threats said on 12 November it had seen no indicator of successful re-mining.",
      impact:
        "The first missing-crew report in recent cycles raises the human cost of the strait's enforcement.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Times of Israel",
      event: "Knesset elects Matan Kahana speaker, boosting Eisenkot's bloc",
      summary:
        "The Knesset voted 66-52 on Tuesday night to elect Yashar's Matan Kahana as speaker over Likud's Ofir Katz after a six-hour filibuster. Eisenkot's 48-seat bloc and the Arab parties' 19 seats delivered the majority. Likud called it an eternal disgrace. Netanyahu remains prime minister during coalition talks, and no security-cabinet decision on Iran was reported.",
      impact:
        "Eisenkot gains procedural control, but the caretaker government still holds war decisions.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'low',
      source: "IDF via Times of Israel",
      event: "Israel strikes an arms shipment in Lebanon's Beqaa Valley",
      summary:
        "The Israeli Air Force bombed a weapons shipment in the Janta area of the Beqaa Valley overnight into Monday, saying the arms had been moved from Syria for Hezbollah and would serve attacks on Israeli civilians and troops. It was the first Israeli strike in the area in several months. No casualties or Hezbollah response were reported.",
      impact:
        "Israel keeps acting on the Lebanon front as UNIFIL's mandate nears its end.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'low',
      source: "Shafaq News",
      event: "Iraqi forces surround Jurf al-Sakhr before Friday's deadline",
      summary:
        "Prime Minister Ali al-Zaidi has given Kataib Hezbollah until Friday to hand security control of Jurf al-Sakhr to the state after an oil-smuggling investigation, warning of Counter-Terrorism Service intervention. Nouri al-Maliki, Hadi al-Amiri and Humam Hamoudi are mediating a phased withdrawal. Kataib Hezbollah rejects the findings and blames US, Saudi and Emirati pressure.",
      impact:
        "Baghdad's confrontation with Iran's strongest Iraqi ally peaks as Gulf drone alerts spread.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "Hana and Kurdpa via Iran International; Hossein Mohebbi via Press TV",
      event: "Arrests in Abdanan; IRGC ties Bahrain threat to clerics' sentences",
      summary:
        "The rights groups Hana and Kurdpa reported at least six arrests, including a 15-year-old, during protests in Abdanan after a bus crash killed 13. IRGC spokesman Hossein Mohebbi said Bahrain's cooperation in the war, reliance on US protection and violation of Shia religious authority could call the Al Khalifa regime's survival into question, after Bahraini courts gave 64 clerics life sentences.",
      impact:
        "Internal dissent persists in Iran while Tehran recasts its Bahrain campaign as sectarian protection.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Chinese foreign ministry; Al Jazeera",
      event: "Crossings at 2.0 a day; Brent near $93.3; China silent on Iran before Shenzhen",
      summary:
        "hormuz.now counted 14 tanker crossings in seven days, 2.0 a day against 47.6 pre-crisis, and no LNG or LPG carrier. Brent rose 0.7% to about $93.3 on Tuesday as an IEA-forecast surplus capped gains. China's 17 November briefing did not mention Iran; the Trump-Xi-Putin trilateral is expected on Thursday in Shenzhen, where the White House expects no deal.",
      impact:
        "Oil discounts a US strike inside the strait while LNG through Hormuz stays at zero.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. CENTCOM reports no injury from the Isa Air Base launch and no US loss is reported in the Qeshm strike. The forty-ninth cycle with no disclosure statement.",
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
        "No new official war toll and no casualties reported from the US strike on Qeshm. Darzi's claim of more than 5,000 dead is held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. A tanker crew unaccounted for north of Khasab is held apart until a count is published. No casualties are reported in Bahrain or Kuwait.",
    },
  },
  exec:
    "The United States answered Iran's Bahrain launches for the first time since Trump's \"unless provoked\" line, and each side framed its fire as a response to the other. Hours after IRGC drones were fired at a US radar at Isa Air Base on Tuesday, US fighter jets struck what a US military official called an IRGC missile-launch site on Qeshm Island with precision munitions, \"in response to IRGC aggression targeting US personnel and assets.\" Iranian media said the target was an air-defence launcher in the Nariman area, and Hormozgan's deputy governor said no residential, commercial or vital infrastructure was damaged; no casualties were reported on either side. IRGC commander Ahmad Vahidi, quoted by RT, warned that any renewed aggression \"no matter how minor\" would meet \"devastating and painful strikes.\" Kuwait's military said its air defences engaged hostile drones on Tuesday night without naming their origin. The GCC secretary-general asked the UN Security Council to act, Saudi Arabia called for an immediate halt to Iranian attacks, and Qatar condemned them while holding its scheduled meeting with Iranian officials; no outcome was published. The ECO communique in Islamabad backed Qatari and Pakistani mediation but did not mention the two-day Hormuz offer that Foreign Minister Abbas Araghchi said ECO states supported. At sea, UKMTO reported a tanker crew unaccounted for after an attack north of Khasab, while Iran claims more mine strikes. In Israel, the Knesset elected Yashar's Matan Kahana speaker by 66-52, strengthening Gadi Eisenkot's bloc. hormuz.now counts 2.0 tanker crossings a day against 47.6 pre-crisis; Brent stood near $93.3. Direction stays escalating; the probability eases to 8.",
  implications: [
    {
      title: "A first answer on Qeshm, sized to match the provocation",
      body:
        "Under the multi-clock framework, the active-deadline clock moved from a test to an exchange. For the first two launches at Bahrain Washington issued only interception notices; after the third, it struck. A US military official called the Qeshm raid self-defence against \"IRGC aggression targeting US personnel and assets,\" tying it to the Bahrain launches without a White House statement or a named trigger. The symmetry is the point. Iran's drones did no damage by CENTCOM's account; the US strike did none to infrastructure by the Hormozgan deputy governor's account, and Iranian media placed it on an air-defence launcher, not the missile site the US named. Both sides can claim a response while neither has a casualty to avenge. That keeps the calibrated-host-strike prior alive and turns restraint-as-posture into proportional reply: \"unless provoked\" now appears to mean small strikes for small launches. The risks sit at the edges. Vahidi's warning, as RT reports it, promises \"devastating\" strikes for any aggression \"no matter how minor,\" a line absent from Press TV's own account of his speech; which audience gets which version is worth watching. Kuwait's night-time air-defence activity, origin unstated, would extend the rhythm to a second host if it proves Iranian or militia fire. Direction stays escalating; the probability eases from 9 to 8 because a strike-and-counter-strike loop has opened, even at low intensity.",
    },
    {
      title: "Mediation widens on paper while the substance stays where it was",
      body:
        "The negotiation-capacity clock shows more endorsements and no movement. Qatar held its meeting with Iranian officials on Tuesday; spokesman Majed Al Ansari described periodic delegation meetings meant to narrow gaps between proposals and said no party benefits from \"neither war nor peace.\" No outcome, text or US interlocutor was published, and the reported window closes around 24 November, six days away. The ECO communique is the useful divergence. Araghchi said ECO states responded positively to Iran's offer to reopen Hormuz within two days if Washington releases assets, lifts sanctions and ends the blockade; the communique, as The Peninsula reports it, backs Qatari and Pakistani mediation in general terms and does not mention Iran or Hormuz. Araghchi's account therefore stays a claim. Gulf positions hardened in parallel: the GCC secretary-general asks the Security Council to act, Saudi Arabia calls for an immediate halt while urging diplomacy, and Qatar condemns the attacks while mediating, the mediator-pleads prior in its plainest form. China's 17 November briefing did not mention Iran, leaving the Shenzhen trilateral, expected on Thursday with the White House forecasting no deal, as the next test of whether Beijing or Moscow will carry anything. In Israel, Kahana's election with Arab-party votes strengthens Eisenkot's bloc but leaves Netanyahu in office during coalition talks, so the caretaker-risk prior holds.",
    },
    {
      title: "Taiwan: no direct development; a strike inside the strait barely moves oil while gas stays shut",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. hormuz.now counts 14 tanker crossings in seven days, 2.0 a day against 47.6 pre-crisis, up from 1.9 but within noise, with no LNG or LPG carrier in seven days and one of each in 30. Kpler's preliminary estimate stays near 8.3 mb/d, about 48% of the 17.1 mb/d pre-war level. Brent stood near $93.3 on Tuesday, up 0.7% after Monday's 3.6% fall, with Trading Economics citing the IEA's surplus forecast of about 2 mb/d and a Goldman warning of a glut next year. The energy clock stays split for Taiwan: a US strike inside the strait moved oil by less than a percent, while gas through Hormuz stays at zero and, on this file's record, QatarEnergy's force majeure runs to end-December for some buyers. Cheap crude does not refill an LNG gap. Two risks grew at the margin. A tanker crew is unaccounted for north of Khasab, the first such report in this file's recent cycles, which bears on war-risk premiums for substitute cargoes. Kuwait's drone alert puts a second northern Gulf exporter in the line of fire. The Shenzhen trilateral is the next East Asian read. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US injury from the Isa Air Base launch or loss in the Qeshm strike; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll; nothing reported from Qeshm. Darzi's 5,000-plus claim is held apart. HRANA's death-sentence and execution series carry unmerged.",
    other:
      "No adopted change. The unaccounted-for Khasab crew, Yemeni battlefield tallies, IMO incident counts, GCC and Houthi figures are held apart.",
  },
};

export default data;
