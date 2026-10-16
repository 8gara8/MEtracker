import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the first multilateral instrument of the campaign did not slow it. The Security Council adopted a presidential statement condemning escalatory Houthi attacks on Saudi Arabia and on commercial shipping and affirming the kingdom's inherent right of self-defence, without naming Iran. Within hours the coalition reported intercepting a ballistic missile aimed at Yanbu, two cruise missiles over the Red Sea and drones over Khamis Mushait and the Eastern Province, with airport strikes at Abha, Najran and Jazan.",
      risk7d:
        "Extreme and held, with the menu narrowed rather than the decision taken. Trump said the reported GBU-43/B is not nuclear, that he would not use nuclear weapons — \"We don't have to\" — and that he does not see ground troops, leaving the reported conventional packages over energy infrastructure and nuclear sites intact. He separately urged Saudi Arabia to accept Israeli help against the Houthis and said normalisation could return to the agenda, ten days before the Israeli vote and seventeen before the American one.",
      spillover:
        "Critical. UKMTO's weekly overview records 12 attacks in seven days, ten of them in the Strait of Hormuz, and puts the campaign at 135 incidents and 76 killed or injured since 28 February with transits about 70 percent below pre-conflict levels. Iraq's parliament seated Iranian-backed militia-linked figures in three ministries and a deputy premiership over explicit US objection, and an Indian-crewed vessel was struck by a drone at a Romanian anchorage on the Black Sea.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: "The UN Security Council via UN Press, Al Arabiya and Xinhua; the Saudi Press Agency; Yemen Monitor",
      event: "The Security Council fires an instrument and declines to name the patron",
      summary:
        "All fifteen members adopted a presidential statement, circulated by Greece's Evangelos Sekeris in the chair, condemning \"in the strongest terms continued and escalatory Houthi attacks against the Kingdom of Saudi Arabia\" and \"continued Houthi attacks and threats against commercial shipping in the Red Sea and Bab al-Mandeb\". It called the airport strikes reckless and affirmed \"the inherent right of the Kingdom of Saudi Arabia of self-defense in accordance with international law\". Saudi Arabia welcomed it and cited Resolution 2216; Yemen's government welcomed it. The text does not name Iran.",
      impact:
        "The first multilateral instrument of the campaign is the weakest article in the Council's range: consensus text, no designation, no referral, no reporting requirement, and no attribution — the one thing Riyadh could not obtain elsewhere. Russia and China joined a condemnation of an Iranian-aligned belligerent on condition that Iran went unnamed.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Trump via Newsmax, relayed by Gulf News",
      event: "Trump rules out the nuclear option and the ground option, and leaves the leaked packages standing",
      summary:
        "Asked about the weapon reported a day earlier, the president said the \"mother of all bombs\" is not nuclear and added: \"No, I wouldn't use nuclear. We don't have to.\" On ground troops he said: \"I don't see that. I don't.\" He later urged Saudi Arabia to accept Israeli help against the Houthis — \"Israel has been very helpful to Saudi Arabia\" — and said Saudi normalisation with Israel could return to the agenda. Nothing was said that retracts the reported conventional strike packages over energy infrastructure and nuclear sites.",
      impact:
        "Ruling options out is not ruling the strike out. The two options removed are the two nobody had reported him weighing; the menu that remains is exactly the leaked one. The Israeli-participation proposal would widen the war ten days before one election and seventeen before another.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "UKMTO; India's Ministry of Ports, Shipping and Waterways and the Sultanate of Oman via Gulf News",
      event: "The weekly audit arrives and brings a fourth maritime count",
      summary:
        "UKMTO's voluntary-reporting-area overview for the week to 16 October records 12 attacks — ten in the Strait of Hormuz, one in the Arabian Gulf, one in the Gulf of Oman — with one vessel lost, and puts the campaign total since 28 February at 135 incidents and 76 people killed or injured, with Hormuz transits about 70 percent below pre-conflict levels. Sarbananda Sonowal said all 24 Indian seafarers involved are safe: the MT ST 3 with 15 crew was hit by a projectile in Hormuz on 16 October, and the YARA J with nine crew by a drone at Sulina Anchorage in Romania on 14 October. Oman warned mariners of floating containers off Ras Al Sheikh Masoud after the GFS PRIDE sank.",
      impact:
        "A fourth series against the IMO's 113 confirmed incidents and 24 seafarers killed. One publisher counts incidents in a reporting area and merges dead with injured; the other counts confirmed incidents and deaths alone. Neither can be decomposed into the other, so both are held and neither is summed. The Romanian anchorage puts an attack on an Indian-crewed hull in the Black Sea.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Maj. Gen. Amir Hatami and Abdullah Haji Sadeghi via Al Jazeera and Azernews; CENTCOM via Gulf News",
      event: "Two states publish incompatible accounts of the same water",
      summary:
        "Iran's army chief, Maj. Gen. Amir Hatami, said the Strait of Hormuz remains closed until \"the rights of the Iranian people\" are respected, that \"not a single enemy vessel\" had entered, and that the strait and the Sea of Oman remain under the full control of the IRGC and the army. Abdullah Haji Sadeghi, the Supreme Leader's representative to the IRGC, called the strait \"the first line of defense for the Islamic Republic\". CENTCOM rejected IRGC claims that Iran controls Hormuz, that a Singapore-registered ship sank after striking a mine, and that hundreds of US troops died in Jordan, and said 400 commercial vessels transited in the past week, 19 million barrels moved in one day, and more than 50,000 US personnel are deployed regionally.",
      impact:
        "Two belligerents' claims, not two readings of one fact. The non-belligerent number sits between them: UKMTO puts transits about 70 percent below pre-conflict, which falsifies both \"closed\" and anything resembling normality. The IRGC's mine claim has now been attached to the GFS PRIDE and denied by CENTCOM.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Scott Bessent, FinCEN and CENTCOM via Gulf News; Lebanon's central bank via the Critical Threats Project; Fuad Hussein via Gulf News",
      event: "The financial instrument fires again, at an Iraqi bank rather than an Iranian one",
      summary:
        "Treasury Secretary Scott Bessent said \"the noose is tightening around Iran's economy\" as Operation Economic Outcast designated an Iraqi bank and shadow-banking networks that moved hundreds of millions of dollars. FinCEN issued an alert on Iranian abuse of religious charity networks including tithes and khums. CENTCOM said Iran cannot access $25 billion in oil revenue and that about $350 million in crypto has been frozen, and alleged unpaid militia fighters. Lebanon's central bank revoked the local licence of the US-sanctioned Bank Saderat. Iraq's foreign minister, Fuad Hussein, put Iraq's war losses at about $60 billion, with reserves down $20 billion and the dinar devalued.",
      impact:
        "Designation of an Iranian bank remains the last unfired Brent trigger and it is still unfired: an Iraqi correspondent is not the Iranian principal. Bessent's own \"nothing to trade within two weeks\", which fell due on 12 October, remains unaddressed on its own terms even as he speaks.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "Iraq's parliament via the Institute for the Study of War and the Critical Threats Project",
      event: "Iraq seats the militias Washington has refused to accept, fifteen days after the ground presence ended",
      summary:
        "Iraq's parliament approved Iranian-backed militia-linked figures for three ministerial posts and a deputy premiership, among them Asaib Ahl al-Haq's Laith al-Khazali as one of four deputy prime ministers. The United States has firmly rejected senior federal roles for any Iraqi militia member, including from groups it counts as disarmed. The American ground presence in Iraq ended on 30 September after 123 US personnel killed and 499 wounded on that theatre's series.",
      impact:
        "The first countable consequence under the land-lever-removed prior. The political consolidation follows the withdrawal on a fifteen-day lag, over an explicit American objection with no instrument behind it, and it arrives in the same cycle in which Washington is designating an Iraqi bank.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "The Saudi-led coalition and Saudi Civil Defence via Gulf News; Al Jazeera; the Critical Threats Project",
      event: "The target set widens to Yanbu, and the defender moves from not publishing to prohibiting publication",
      summary:
        "Coalition spokesman Turki al-Malki reported intercepting a ballistic missile aimed at Yanbu, two cruise missiles over the Red Sea, three drones over the southern and Riyadh regions, a drone toward the Eastern Province and a drone over Khamis Mushait, and said Houthi attacks struck the airports at Abha, Najran and Jazan. Saudi Civil Defence issued an early warning for Jazan and warned that filming or sharing interception details could carry legal liability. The imams of the Grand Mosque and the Prophet's Mosque condemned the Riyadh airport attack. Two missiles landed near Aden airport; the Houthis said they had targeted a Saudi command centre. A Houthi surface-to-air missile struck a Saudi Eurofighter Typhoon over Saada on 14 October without destroying it.",
      impact:
        "Yanbu is a named Brent trigger: attempted and defeated, so the trigger stays live rather than retiring. The filming warning sharpens the asymmetric-disclosure prior from a state that will not publish its own damage to a state that penalises others for publishing it.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "HRANA and Gina Romero Rodríguez via Human Rights Activists in Iran; Iran's foreign ministry and the carriers via Gulf News and Gulf Business",
      event: "The execution ledger gains an annual audit and the air map lengthens past the votes",
      summary:
        "HRANA counted at least 2,003 executions in Iran between 10 October 2025 and 8 October 2026, 95 percent with no official announcement and nine in public, plus at least 230 further death sentences; of 69 executions on political or security charges, 35 were linked to the January 2026 protests, and at least 46 political prisoners and protesters have been executed since 19 March. UN Special Rapporteur Gina Romero Rodríguez joined the weekly no-execution hunger strike and said this is \"the highest concentration of political executions in Iran in nearly 40 years\". Iran's foreign ministry rejected \"any claim that Iran has played a role\" in the Houthi attacks and again offered to mediate. SriLankan Airlines, IndiGo and Akasa extended Saudi suspensions to 24 October and Air India to 20 October.",
      impact:
        "A fourth execution series on a different window, held beside the NCRI's 48, Amnesty's 34 and the 70-since-January roster rather than merged. Tehran answered Riyadh's accusation; Riyadh has still not answered Araghchi's facilitation offer, now unanswered for a sixth day.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series)",
      delta: '+0 disclosed',
      status:
        "A seventeenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. CENTCOM denied an IRGC claim that hundreds of US troops died in Jordan, which is a denial of an adversary's assertion and not a disclosure of its own. The Day 216 gap against CENTCOM's 18 is unanswered for a seventeenth day, the June Port Shuaiba investigation is unreleased, and no Pentagon response has followed the CRS count of at least 81 US aircraft and drones lost or damaged. The Iraq theatre's closing series stands at 123 killed and 499 wounded.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition and no fresh government or military statement this cycle; the absence is recorded rather than filled. A Maariv poll by Lazar Research with Panel4ALL, fielded 14-15 October among 700 respondents, puts the coalition and opposition blocs on 51 seats each with neither reaching 61, Yashar on 21 and Likud on 18, and 48 percent naming Gadi Eisenkot a better prime minister against 41 percent for Netanyahu. Ten days to the vote. UNIFIL's mandate still expires at year-end, and Iran reportedly told Hezbollah to raise readiness to advanced levels.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-eighth day without a confirmed Iranian attack on a host state's territory. HRANA's annual audit records at least 2,003 executions from 10 October 2025 to 8 October 2026, 95 percent unannounced and nine in public, with at least 230 further death sentences; 69 were on political or security charges and 35 of those were linked to the January 2026 protests, and at least 46 political prisoners and protesters have been executed since 19 March. The figure is a fourth series on its own window and is held beside the NCRI's at-least-48, Amnesty's at-least-34 and the 70-since-January roster rather than merged with them.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No addition to this line. UKMTO's weekly overview supplies a fourth maritime series — 135 incidents and 76 people killed or injured since 28 February, against the IMO's 113 confirmed incidents and 24 seafarers killed — and merges dead with injured, so it cannot be decomposed into the series carried here. India's embassy gave the first national breakdown of the Riyadh airport wounded: six Indians injured on 10 October, two in intensive care, one in a high-dependency unit and three in a normal ward. The Aden palace toll settles at five killed and 16 wounded on the health minister's count against AFP's four and ten. Still no Aramco Dhahran casualty figure under either account of the damage.",
    },
  },
  exec:
    "The Security Council produced the campaign's first multilateral instrument and withheld its sharpest element. A presidential statement adopted by all fifteen members, circulated by Greece in the chair, condemned \"continued and escalatory Houthi attacks against the Kingdom of Saudi Arabia\" and against commercial shipping, called the airport strikes reckless, and affirmed Saudi Arabia's \"inherent right of self-defense\". It does not name Iran. Riyadh and Yemen's government both welcomed it; within hours the coalition reported intercepting a ballistic missile aimed at Yanbu, two cruise missiles over the Red Sea and drones over Khamis Mushait and the Eastern Province, with Houthi attacks on the airports at Abha, Najran and Jazan. Asked about the weapon reported a day earlier, Trump said the \"mother of all bombs\" is not nuclear — \"No, I wouldn't use nuclear. We don't have to\" — and ruled out ground troops, while leaving the reported conventional packages over energy and nuclear sites untouched. He also urged Saudi Arabia to accept Israeli help against the Houthis. UKMTO's weekly overview recorded 12 attacks in seven days and put the campaign at 135 incidents and 76 killed or injured since 28 February, against the IMO's 113 and 24. Iran's army chief said the strait remains closed and no enemy vessel had entered; CENTCOM said 400 vessels transited in a week. Iraq's parliament seated militia-linked figures in three ministries and a deputy premiership. Brent was about $105.50. Direction holds escalating; the thirty-day probability holds at 5.",
  implications: [
    {
      title: "An instrument that fires at the proxy and not the patron",
      body:
        "The Security Council has been absent from this file for 231 days, and it arrived with the weakest article in its range. A presidential statement is a consensus text, not a resolution: no designation, no sanction, no referral, no reporting requirement. It condemns the Houthis, calls the airport strikes reckless, affirms Saudi Arabia's inherent right of self-defence — and does not name Iran, on the same cycle in which Riyadh's own diplomats were accusing Tehran of arming and encouraging the attacks and Tehran's foreign ministry was rejecting \"any claim that Iran has played a role\" and offering to mediate. Analytical judgment: the price of consensus was the attribution, and the attribution is the only thing Riyadh could not obtain anywhere else. The test is not the wording but the interval. Within hours of adoption the coalition was intercepting a ballistic missile aimed at Yanbu — a named Brent trigger, attempted and defeated, which keeps the trigger live rather than retiring it — two cruise missiles over the Red Sea, and drones over Khamis Mushait and the Eastern Province, while Abha, Najran and Jazan took airport strikes. Under the declaration-without-content prior the Council now joins the EU's unnamed \"options\" and Pakistan's unspecified sorties: a published position with no instrument attached. The one genuinely new fact is procedural — fifteen states, Russia and China among them, agreed to condemn an Iranian-aligned belligerent by name while agreeing not to name Iran.",
    },
    {
      title: "The menu narrows, the ledger gets a fourth count, and the withdrawal gets its consequence",
      body:
        "Trump answered the MOAB leak without denying it. He ruled out nuclear weapons — \"No, I wouldn't use nuclear. We don't have to\" — and ruled out ground troops, which removes the two options nobody had reported him considering while leaving intact the conventional packages over energy infrastructure and nuclear sites reported yesterday. Ruling options out is not ruling the strike out, and the remaining menu is precisely the leaked one. Against that he floated something genuinely new: that Saudi Arabia should accept Israeli help against the Houthis, with normalisation back on the agenda — a proposal that would widen the war ten days before one election and seventeen before another. Analytical judgment: the multi-clock framework's political-will clock now runs through two ballots at once, and the only published polling says neither Israeli bloc reaches 61. Two ledgers moved. UKMTO's weekly overview put the campaign at 135 incidents and 76 killed or injured since 28 February, against the IMO's 113 confirmed incidents and 24 seafarers killed — a fourth maritime series that merges dead with injured and so cannot be decomposed or summed into the others. And Iraq's parliament seated militia-linked figures in three ministries and a deputy premiership over an explicit US objection, fifteen days after the American ground presence ended: the first countable consequence under the land-lever-removed prior.",
    },
    {
      title: "Taiwan: the announcement is audited and found to be an announcement",
      body:
        "The Alaska LNG arrangement was examined this cycle rather than restated, and the audit is unflattering to the headline. The project is costed at US$44.5 billion to US$54.5 billion for a roughly 1,300-kilometre pipeline from the North Slope to a southern export terminal; CPC would take 6 million tonnes a year, Taiwan would invest up to US$4.4 billion, and Trump's figure of 30 percent of output over twenty years rests on ownership stakes and contract terms the Ministry of Economic Affairs concedes are still unsettled with the developer Glenfarne. Earliest supply to Taiwan is 2032. The one realised number points the other way: Australian and American cargoes together now make up nearly 60 percent of Taiwan's LNG supply this year, and Premier Cho Jung-tai framed the objective as \"the stability and resilience of the entire energy supply\". Analytical judgment: the substitution-chain prior holds unretired — a 2032 first cargo does not relieve an eleven-day gas buffer in 2026 — and a second constraint is now explicit, because China's foreign ministry has attached the one-China principle to the deal and accused Taipei of using commercial cooperation to pursue independence. A seventh consecutive day of silence from U-Ming, Global Energy Maritime and every Taipei ministry on the GEM NO.2 identification is acknowledged as posture rather than padded.",
    },
  ],
  casualtyNotes: {
    us:
      "A seventeenth consecutive cycle with nothing disclosed, recorded as an absence of disclosure. CENTCOM's denial of an IRGC claim about Jordan is not a disclosure of its own. The Day 216 gap against CENTCOM's 18 is unanswered for a seventeenth day.",
    israel:
      "No addition and no fresh statement; the absence is recorded rather than filled. A Maariv poll fielded 14-15 October puts both blocs on 51 with neither reaching 61, and Eisenkot ahead of Netanyahu 48 to 41 as preferred prime minister. Ten days to the vote.",
    iran:
      "No new official war toll and a thirty-eighth day without a confirmed Iranian attack on a host state's territory. HRANA's annual audit of at least 2,003 executions is a fourth series on its own window and is held beside the NCRI's 48, Amnesty's 34 and the 70-since-January roster.",
    other:
      "No addition to this line. UKMTO's 135 incidents and 76 killed or injured since 28 February merge dead with injured and cannot be decomposed into the IMO's 113 and 24. India's embassy gives the first national breakdown of the airport wounded at six Indians, two in intensive care.",
  },
};

export default data;
