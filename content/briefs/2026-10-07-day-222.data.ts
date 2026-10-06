import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING holds against two real easings. Saudi Arabia's energy minister put the East-West pipeline at 5.8 million barrels a day against 2 million in August, repaired within five or six days of the September attack, and two further measurements — Kpler's 10.3 million b/d through Hormuz at 76% of pre-war and Shell's chief executive near 80% — narrowed the transit dispute to a band. Against that, the Houthis struck three airports in one cycle, the WHO put 959 dead and 5,100-plus casualties on the Yemen front, displacement passed 184,000, a bombed nuclear site showed renewed activity, and Tehran restated that Hormuz stays closed until all seven conditions are met.",
      risk7d:
        "Extreme holds on aviation and the calendar. Saree claimed three operations against King Khalid International Airport, Abha airport, the Rabigh refinery, Khamis Mushait, Akfa camp and sites in Najran and Jazan, renewing the warning to every airline over Saudi airspace but Mecca and Medina; air traffic was halted at Riyadh after a ballistic missile struck the airport, and Saudi Arabia's civil aviation authority conceded three injuries and material damage. No carrier has suspended Saudi routes and no regulator has issued guidance. Roosevelt CSG and Makin Island ARG remain inbound for late October, roughly 20,000 personnel, with twenty days to the Israeli election.",
      spillover:
        "Critical holds and the Mecca commitment stays unpriced. Twenty-four hours after Riyadh, Ankara and Islamabad agreed to \"move immediately to the practical implementation of the collective defence commitments\" and to \"ensure their rapid deployment in the kingdom\", no troop numbers, named units, timetable or officials have been published, and neither Iran nor the Houthis have responded. Indian reporting records Pakistani domestic warnings about entering another conflict. Separately a 22-year-old Briton was arrested as the seventh suspect in the suspected RAF Fairford plot, the bombers have not returned, and a US delegation is expected in Israel to review Visa Waiver Program compliance.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / The National',
      event: 'Saudi Arabia confirms the East-West pipeline pumping 5.8 million barrels a day',
      summary:
        "Energy Minister Prince Abdulaziz bin Salman said the roughly 1,200-kilometre line from the eastern fields to Yanbu is moving 5.8 million barrels a day against about 2 million in August, its lowest month since January, out of a maximum 7 million, and that after the early-September drone damage blamed on Iraqi militia, \"within five or six days, we began using the pipeline again after the major attack that struck it\". Yanbu crude loadings have restarted. Saudi Arabia typically routes about 4 million barrels a day through the line, roughly 4% of global supply.",
      impact:
        "Day 221's first open question is answered by the government rather than a tracker: the bypass is running, and it was restored in under a week after being hit. The bypass-as-target prior narrows rather than retires — it becomes a contest between strike rate and repair rate, and today the repair rate won. Still no Aramco damage assessment for Khurais, Rabigh or Riyadh.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Newsquawk / CBS News',
      event: 'Two more trackers put the Hormuz recovery between 76% and parity',
      summary:
        "Kpler data cited in market briefing put average daily crude flows through the Strait of Hormuz at 10.3 million barrels over the seven days to Saturday, 76% of the pre-war baseline, while Shell's chief executive put Middle East flows near 80% of pre-war levels. Both sit beside Kpler's separate September count of 16.5 million b/d of regional exports at parity with 40% bypassing the strait, and against Al Jazeera's standing description of Hormuz as largely closed since late February. Brent fell below $100 on Tuesday and was quoted at $101.15 on Wednesday, WTI at $89.97.",
      impact:
        "The Day 220 divergence resolves into a band of 76% to 100% rather than a contradiction, which is the first time this series can quote a range instead of ten incompatible figures. Contested-print discipline still applies: record all three, adopt none as \"the\" number. The measurement problem survives; the strategic claim behind it does not.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'UN News / WHO',
      event: 'The UN publishes the first verified Yemen toll: 959 dead, 184,000 displaced',
      summary:
        "The World Health Organization recorded 959 deaths and more than 5,100 casualties since 6 August. The International Organization for Migration put displacement above 184,000 since 1 August, including 21,800 in the week ending 3 October, a 26% rise on the previous week, and 6,474 on 4 October alone, with 45% of assessed households previously displaced. Director General Amy Pope said \"more and more people are thrown into an appalling cycle of displacement, living in fear of their lives and with their futures uncertain\". Cholera cases tripled within weeks and measles is spreading. Seventy-two UN personnel and five former staff remain detained.",
      impact:
        "The unverified-claim-ceiling prior is answered on the civilian axis after three days of no adopted delta, and by the party with nothing to win from the number. Recorded as a parallel monitor series and not merged: it is Yemen-only from 6 August and overlaps the carried cumulative by an undetermined amount. Reconciliation enters as a new standing deadline.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Long War Journal',
      event: 'The Houthis deny losing ground as the battlefield tolls diverge threefold',
      summary:
        "Saree said the group retains \"full control over all their gains on the ground\", called government reports \"fabricated heroics\" and claimed more than 200 opposing fighters killed or wounded. Reuters sources via Al Jazeera said government forces \"supported by heavy Saudi air strikes, reached the outskirts of Mocha on Monday as Houthi fighters retreated towards the highlands\"; the Defence Ministry said the city had fallen. Al Jazeera \"has not independently verified the full extent of the government's territorial gains\". The Taiz Axis claimed about 100 Houthi dead and 150 wounded; American coverage reported more than 270 combatants killed in 24 hours around Dhubab.",
      impact:
        "Three incompatible military tolls against one audited civilian toll. Nothing is adopted on the combatant side. Independent observers cited by FDD questioned the Mocha claims, so even the territorial fact Day 221 recorded is now contested rather than settled.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Gulf News',
      event: 'Washington acknowledges intelligence support for the Yemen offensive',
      summary:
        "Secretary of State Marco Rubio said Saudi Arabia and Yemen had \"a right to defend themselves\", and the United States is providing intelligence support to the government offensive. Trump separately said he remains open to direct negotiations, claimed the United States had eliminated Iran's military capabilities and secured the Strait of Hormuz, and predicted the war would end soon with prices falling. Energy Secretary Chris Wright said the president was \"well aware of the risks to energy flows\" before launching operations.",
      impact:
        "The delegated-escalation prior is confirmed on the record rather than by inference: the campaign producing the WHO's 959 dead is fought by partners with declared American assistance. It answers one of Day 221's open deadlines at the level of intelligence rather than strike, which is also the level that carries the least disclosure obligation.",
    },
    {
      id: 6,
      direction: 'neutral',
      importance: 'high',
      source: 'Euronews / Middle East Eye',
      event: 'Still no Turkish or Pakistani force numbers a day after the Mecca pact was activated',
      summary:
        "The joint statement from the emergency Strategic Political and Defence Committee meeting in Riyadh \"reaffirmed their unequivocal rejection of any attack or threat against the kingdom's security\", said the three would \"move immediately to the practical implementation of the collective defence commitments\" and would \"ensure their rapid deployment in the kingdom\". No troop numbers, named units, deployment timetable beyond \"immediate\" and \"rapid\", or named officials have been disclosed, and no Iranian or Houthi response has been recorded. Indian reporting notes Pakistani domestic warnings about entering another conflict.",
      impact:
        "Scored neutral because nothing moved: the collective-defence-activation prior said to treat the commitment as political until numbers and dates appear, and a full cycle later they have not. A mutual-defence clause invoked without an order of battle is a signal to Tehran and a liability to Islamabad, and it is still the former.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: 'Anadolu Agency / NBC News',
      event: 'Three Saudi airports struck in one cycle, and Riyadh concedes injuries for the first time',
      summary:
        "Saree announced three operations on 5-6 October using \"a large number of ballistic and cruise missiles and drones\" against King Khalid International Airport, the Aramco refinery at Rabigh, Abha airport, the Khamis Mushait base, the Akfa camp and sites in Najran and Jazan, framed as a response to 60 Saudi airstrikes in a day and 1,576 since the escalation began, and renewed the warning to all airlines over Saudi airspace but Mecca and Medina. Saudi Arabia's General Authority of Civil Aviation said the attacks on Jazan and Najran airports \"resulted in three minor injuries and material damage\". Air traffic was halted at Riyadh after a ballistic missile struck the airport.",
      impact:
        "The aviation-as-target-class prior hardens from a declaration to a confirmed effect: a G20 regulator has conceded injuries and damage at two airports after a cycle of denials, and the capital's airport stopped operating. No airline has suspended Saudi routes and no regulator has issued guidance, which is the gap that would convert threat into commercial fact.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / Ynet',
      event: 'Renewed activity at a bombed underground nuclear site, with no inspector able to check it',
      summary:
        "The Institute for Science and International Security, analysing Vantor Technologies imagery from September to early October, reported \"significant renewed activity\" at the Minzadehei underground facility near Tehran struck by Israel in March, describing vehicles outside the security perimeter and \"many passenger vehicles and trucks\" inside it, and assessed that \"this activity may be indicative of an effort by Iran to reestablish a nuclear weapons development capability\". IDF spokesman Brigadier General Effie Defrin said the site had housed nuclear scientists who \"worked secretly\" on weapons capability. The IAEA still cannot verify roughly 440.9 kg of 60% material.",
      impact:
        "The verification-vacuum prior takes its sharpest form: with the Panel of Experts mandate expired and inspections impossible, the first new signal about Iran's programme since the snapback came from a private think tank's commercial imagery. An unverifiable stockpile plus an unverifiable site is the condition under which a strike decision gets made on inference.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: 'Tasnim / Iran International',
      event: "Qalibaf promises \"new surprises\", Rezaei concedes the hardest period, and the execution ledger reaches 70",
      summary:
        "Parliament Speaker Qalibaf told the chamber that \"the US has become frustrated in the face of the Iranian nation's resistance\", that \"Iran will continue to confront its adversaries with new surprises\" and that \"the era of buying time and imposing unilateral demands has ended\", restating that Hormuz stays closed until all seven Islamabad conditions are met and calling American messaging \"cognitive warfare\". National security adviser Mohsen Rezaei, via IRNA, described the country's circumstances as among the most difficult periods it has faced. Iran International reported 70 executions in political and security cases since the January protests, nearly two a week, with 194 on death row, 13 women and at least seven juveniles among them.",
      impact:
        "The institutional-attrition prior now reaches the security establishment itself: after the oil ministry, the gas network and the health system, the national security adviser is the one supplying the figure of distress. The protest roster acquires its first aggregate and stays unmerged with the war toll. Tehran's public position on Hormuz is unchanged on the day its leverage was measured at 76%.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed for a seventh consecutive cycle, recorded as an absence of disclosure rather than a lull. The Army has still not released the Port Shuaiba investigation it completed in June, and the Day 216 reconciliation gap is unanswered for a seventh day. What moved was exposure rather than the count: Rubio said Saudi Arabia and Yemen had \"a right to defend themselves\" and confirmed American intelligence support for the Yemen offensive, the first official acknowledgement of a role in a campaign fought by partners. A 22-year-old Briton was arrested as the seventh suspect in the suspected RAF Fairford plot and the bombers have not returned. Roosevelt and Makin Island remain inbound for late October, roughly 20,000 personnel; no third carrier has been confirmed.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "No new Israeli military fatality, and the flydubai attribution split of Day 221 stands unamended — the president's personal attribution, the vice-president's absence of conclusive evidence and the Israeli services' lone-actor assessment all carry. The consequences moved to institutions: a US delegation is expected to review Visa Waiver Program compliance after the attack by copilot Hamam al-Hammami, amid reports that some 1,240 aircrew from states that do not recognise Israel entered over the past year, and Transport Minister Miri Regev proposed an aviation visa with 48 hours' notice and NIS 40 million of funding. The IDF, Shin Bet and police chiefs met to keep the 27 October election \"orderly and safe\". Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded. Twenty days to the vote.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a twenty-eighth day without a confirmed Iranian attack on a host state, qualified by nine tanker incidents recorded in Hormuz this month which carry no state attribution. The separate protest roster acquired its first aggregate: 70 executions in political and security cases since the January protests, nearly two a week, 194 on death row with 113 of those cases tied to the protests and 10 to the wars, 13 women and at least seven juveniles, 18 of the executed from ethnic minorities, 32 executions in Karaj and 12 in Isfahan. UN rapporteur Mai Sato cited \"serious concerns about the treatment of defendants and fair-trial standards\". Never merged with the war toll. Rezaei via IRNA called this among the most difficult periods the country has faced; Qalibaf promised \"new surprises\" and kept Hormuz closed to all seven conditions. Commercial imagery showed renewed activity at Minzadehei while the IAEA still cannot verify ~440.9 kg of 60% material.",
    },
    other: {
      cumulative: 'KIA: 3,678+ · WIA: 10,804+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "Nothing adopted for a fourth day, but for the first time the reason is arithmetic rather than silence. WHO recorded 959 deaths and more than 5,100 casualties in Yemen since 6 August and IOM put displacement above 184,000 since 1 August, 21,800 of them in the week to 3 October, a 26% rise, and 6,474 on 4 October alone. That is the first independently verified toll of the resumed Yemen war; it is recorded as a parallel monitor series and not merged, because it is Yemen-only from 6 August and overlaps the carried cumulative by an undetermined amount. Reconciliation is entered as a new standing deadline. The belligerents' figures remain three-way incompatible: about 100 Houthi dead claimed by the Taiz Axis, more than 270 combatants in 24 hours in American coverage, more than 200 government fighters claimed by Saree. Displacement is revised up from above 145,000; cholera has tripled and measles is spreading; 72 UN personnel and five former staff remain detained. Saudi Arabia confirmed three minor injuries at Jazan and Najran airports. Bab al-Mandeb is not formally closed.",
    },
  },
  exec:
    "The bypass stopped being a claim. Saudi energy minister Prince Abdulaziz bin Salman said the roughly 1,200-kilometre East-West pipeline is pumping 5.8 million barrels a day against about 2 million in August — its lowest month since January — out of a 7 million capacity, and that after the early-September drone damage, \"within five or six days, we began using the pipeline again after the major attack that struck it\". Yanbu loadings have restarted. Two more measurements arrived beside Kpler's parity count: Hormuz crude flows averaged 10.3 million barrels a day in the seven days to Saturday, 76% of pre-war, and Shell's chief executive put regional flows near 80%. Brent fell below $100 on Tuesday and was $101.15 on Wednesday. The humanitarian ledger moved the other way and for the first time carries a verified figure: WHO recorded 959 deaths and more than 5,100 casualties in Yemen since 6 August, IOM 184,000 displaced since 1 August, 21,800 in the week to 3 October, with cholera tripled and measles spreading. Saree said the Houthis keep \"full control over all their gains\", claimed three operations against King Khalid International, Abha, Rabigh, Khamis Mushait, Najran and Jazan, and Saudi Arabia's civil aviation authority conceded \"three minor injuries and material damage\". Rubio said Riyadh and Sanaa's government had \"a right to defend themselves\" and confirmed American intelligence support. Turkish and Pakistani force numbers were still not published. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day probability holds at 7.",
  implications: [
    {
      title: 'A bypass that is struck and running is a different object from one that merely exists',
      body:
        "Day 221 opened the bypass-as-target prior on the premise that the infrastructure defeating the blockade had itself become a target and the export recovery was therefore reversible. Twenty-four hours later the Saudi energy minister put the East-West line at 5.8 million barrels a day against 2 million in August and 7 million of capacity, with Yanbu loading again and a stated repair time of five or six days after the September damage. Two further measurements narrowed the dispute: Kpler at 10.3 million barrels a day through Hormuz, 76% of pre-war, and Shell's chief executive near 80%. Analytical judgment: under the multi-clock framework the energy-infrastructure clock improves to strained from critical, because resilience has now been measured rather than asserted — a line hit and restored inside a week is a weaker hostage than a line merely unhit. The prior does not retire; it narrows to a question of repair rate against strike rate, and today the repair rate won. The Day 220 divergence between a parity count and a \"largely closed\" strait resolves into a band of 76% to 100% rather than a contradiction, which is the first time this series can quote a range instead of ten incompatible figures. Watch whether Yanbu or Fujairah is struck directly rather than at a pumping station, and whether Aramco ever publishes the damage assessment it has withheld for four days.",
    },
    {
      title: 'The first verified number is a humanitarian one, and it came from the agency with nothing to win',
      body:
        "For three days this series adopted no casualty delta in Yemen because the belligerents' claims were unnumbered on one side and unanswered on the other. The ceiling broke from outside: WHO recorded 959 deaths and more than 5,100 casualties since 6 August, IOM 184,000 displaced with 21,800 in a single week and cholera cases tripled. The combatant claims remain three-way incompatible — about 100 Houthi dead claimed by the Taiz Axis, more than 270 combatants in 24 hours in American coverage, more than 200 government fighters claimed by Saree alongside a denial of any loss at all. Analytical judgment: the humanitarian-escalation clock is now the only clock in this war with an audited figure attached, and the unverified-claim-ceiling prior is answered on the civilian axis while remaining unanswered on the military one. The WHO series is recorded and not merged, because it is Yemen-only from 6 August and overlaps the carried cumulative by an unknown amount; the reconciliation is a new standing deadline rather than an arithmetic exercise. Against that, Rubio's acknowledgement of American intelligence support confirms the delegated-escalation prior at the level of official statement: the campaign producing these numbers is fought by partners with American assistance now on the record.",
    },
    {
      title: 'Taiwan: the crude bypass works, which is precisely why the gas exposure is worse',
      body:
        "No fresh Taiwan-relevant development today; prior assessments are unchanged. What today supplies is the number the crude-is-not-gas prior was missing. Saudi Arabia can move 5.8 million barrels a day around the Strait of Hormuz through a pipeline it repaired in under a week; Qatari LNG has no Yanbu and no Fujairah, so none of that resilience reaches Taipei. The price series proves the point: CPC raised LNG 9.68% this month to NT$24.9096 a cubic metre, having already raised it 53.92% from March to May and 25.42% across August and September, leaving gas prices roughly doubled since late February, with about 80% of imported LNG going to power generation. Taipower's accumulated losses stood at NT$371.2 billion at end-August against NT$89.5 billion at CPC, and the NT$71.1 billion subsidy and NT$233.8 billion CPC infusion remain before the legislature unvoted. Analytical judgment: the fiscal-buffer prior holds against a Q4 Brent forecast of $106.60 and a twelve-month $121. Watch whether any party in Taipei distinguishes crude recovery from gas recovery in public — the headline parity invites exactly the conflation that would under-size the package.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded with nothing disclosed for a seventh cycle. The Army's June investigation into Port Shuaiba is still unpublished and the president's 18 still sits unreconciled against his own Department's August database. What changed is the record of American involvement rather than of American losses: the Secretary of State confirmed intelligence support to the Yemeni offensive and framed it as self-defence by Riyadh and Sanaa's government. A seventh arrest in the Fairford case keeps the NATO-territory track open.",
    israel:
      "Iran-front casualties hold at 56 killed and 8,652+ wounded. The aviation injuries stay out of this ledger with the attribution split unresolved for a second day. The institutional consequences are now the story: an American review of Israel's visa-waiver compliance, 1,240 aircrew from non-recognising states admitted over a year, and a proposed aviation visa. The security services have begun planning for election-day threats twenty days out, with the National Security Council warning of heightened Iranian and Hamas risk around the 7 October anniversary.",
    iran:
      "No new official Iranian war toll and a twenty-eighth day without a confirmed launch against a host state. The movement was internal and evidentiary. The protest roster was quantified for the first time at 70 executions since January with 194 awaiting execution, and the national security adviser conceded through state media that this is among the hardest periods the country has faced. Commercial satellite imagery, not an inspector, supplied the first new reading on the nuclear programme since the snapback.",
    other:
      "No adopted delta for a fourth day, and for the first time the obstacle is double-counting rather than silence. WHO's 959 dead and 5,100-plus casualties and IOM's 184,000 displaced are the first audited figures of the resumed Yemen war, recorded as a parallel series from 6 August and not merged with the carried cumulative. The belligerents' own tolls diverge threefold and none is adopted. Displacement revises up from 145,000; cholera has tripled; 72 UN personnel remain detained.",
  },
};

export default data;
