import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction turns ESCALATING for the first time since the counter-offer emerged. Day 216's gain was an offer with an institutional addressee; today Rubio ordered Araghchi's delegation out of New York, the president said he does not think \"you could ever have peace\" with Iran and named the midterms as the threshold for resuming operations, a third carrier strike group was ordered to CENTCOM, and Treasury opened a new front on Iran's automotive, rail and metals sectors. The document survives in Tehran. The venue, the delegation and the premise of a deal did not survive the day.",
      risk7d:
        "Extreme holds and its composition worsens. The USS Theodore Roosevelt and the 13th Marine Expeditionary Unit add roughly 10,000 sailors and Marines by the end of November, which places the reinforcement after the 3 November vote rather than before it, and Trump tied renewed operations to that calendar. A tanker was struck by an unknown projectile in the strait and caught fire. Two homeland incidents are now live in NATO states, one with an arrested dual national holding an Iranian passport, and the president has pre-committed to hitting Iran \"very hard\" if the aviation case connects.",
      spillover:
        "Critical holds while its direction splits. Saudi Arabia took the emergency landing at Tabuk and held the Flydubai suspect, and the UAE president told Netanyahu that Riyadh would transfer him to Abu Dhabi — Saudi, Emirati and Israeli coordination executed in public days after Riyadh denied joining the Abu Dhabi talks. Against that, Britain's counter-terrorism investigation names possible foreign state involvement, Flydubai suspended Israel flights, and a US Energy Department employee was charged with attempting to support the Houthis. The Iraq theatre is quiet in its first full day without an American ground presence.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CBS News / Fox News',
      event:
        "Rubio expels Iran's delegation from New York and Trump says peace may never be possible",
      summary:
        "Secretary of State Marco Rubio instructed Foreign Minister Abbas Araghchi and his delegation to leave New York after technical talks stalled, reportedly telling them they had \"overstayed their welcome\". President Trump told TIME he does not think \"you could ever have peace\" with Iran and said the United States could resume military operations after the November midterms if negotiations fail. He added \"we're trying to be nice to the current person, but we've got to deal with somebody at some point\" and \"for the most part, their leaders are gone\". Asked whether the war could cost Republicans in November, he said \"well, it's possible\".",
      impact:
        "Day 216 recorded the first moment acceptance was procedurally available in this war. Twenty-four hours later the counterparty has been sent home from the city where the technical track ran. The offer retains its addressee in Pezeshkian's cabinet and loses its address; the negotiation-capacity clock reverses from advancing to deteriorating in a single cycle, and the thirty-day probability falls 13 to 8.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'The National / Bloomberg / CBS News',
      event: 'A third carrier strike group is ordered to CENTCOM, arriving after the midterms',
      summary:
        "A US official said the USS Theodore Roosevelt is en route to Central Command's area of operations, joining the USS George H.W. Bush and the USS George Washington, with the 13th Marine Expeditionary Unit adding roughly 10,000 sailors and Marines by the end of November. Separate reporting put three carrier strike groups with more than 20,000 sailors and 2,000 Marines potentially arriving as early as late October — the timelines are not consistent. The Roosevelt relieves the Washington, which had itself replaced the USS Abraham Lincoln after crew wellness problems emerged.",
      impact:
        "The force-sustainment prior gets its first concrete answer: a rotation exists where Day 216 recorded none. But the arrival date is the analytical content. A reinforcement that lands at the end of November is not available for the window the president just named, which makes it a post-election instrument rather than a pre-election deterrent, and the two published timelines differ by a month.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Treasury / State Department / Iran International',
      event: "Operation Economic Outcast hits Iran's industry, and Bessent claims a zero",
      summary:
        "Treasury designated Iran's automotive, rail and metals sectors together with the A7 shadow-banking network and foreign suppliers, in what the department called unprecedented action against a sanctions-evasion network. Treasury Secretary Scott Bessent said \"Iran loaded ZERO crude oil onto tankers in September\". Reporting carried alongside it put Iranian crude loadings at roughly 2 million barrels a day in March falling to between 220,000 and 255,000 in August, against domestic consumption near 1.8 million. Parliament speaker Mohammad Bagher Ghalibaf answered: \"If we do not sell oil in a region, no one will sell oil there, and if our security is not guaranteed, no infrastructure will be safe.\"",
      impact:
        "Per §3.5.3 the zero is a cabinet secretary's claim, not a measured series, and it is the ninth incompatible figure this series has carried for the strait's throughput in eight days. The sanctions-ceiling prior holds: Bessent named the limit himself earlier with \"why would I want to blow up the global financial system?\", and industrial designations are what remains below it.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Rigzone / Bloomberg',
      event: 'Brent reverses the de-escalation trade it put on twenty-four hours earlier',
      summary:
        "Brent's December contract settled at $102.31 a barrel, up 4.4%, and WTI November at $92.87, up 2.7%, on the carrier deployment. The same December contract closed Day 216 at $98.03 and was read as pricing the crisis out. Hamad Hussain of Capital Economics said \"the increase in flows remains highly vulnerable to escalation\" and called the market \"structurally tight given the relatively low level of inventories after six months or so of drawdowns\". Al Salazar of Enverus said the deployment \"could indicate a ground operation or could be helping to support the increased traffic through the strait\". Giovanni Staunovo of UBS said it \"remains unclear whether the latest measures will have the opposite effect\". BloombergNEF put the draw since February above 500 million barrels.",
      impact:
        "The barrels-not-geography pricing prior inverts within a day. December repriced on a hull count and a carrier rather than on mediation, and the reserve-exhaustion prior supplies the floor Hussain describes: there is no buffer left to release against the next move.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'CBS News / Irish Times / ABC Australia',
      event: 'Fairford produces an arrest with an Iranian passport attached',
      summary:
        "Counter Terrorism Policing arrested a 27-year-old dual UK-Iranian national in London on Thursday on suspicion of plotting a terror attack and searched two London properties; a 26-year-old British national was interviewed under caution. Senior National Coordinator Vicki Evans said the investigation \"is hugely complex\" and that police are \"looking at all possible angles — including possible foreign state involvement\". Prime Minister Andy Burnham repeated that \"Iran played a part in what happened over the weekend at RAF Fairford\". The five British nationals arrested on 27 September near the base, where petrol but no explosive devices were found in three vans, remain on bail. The Iranian embassy \"categorically rejects and strongly condemns\" the allegations.",
      impact:
        "The NATO-territory prior hardens one notch without reaching a finding. Day 216's attribution rested on a prime minister's words; it now rests on an arrest, two searches and a named counter-terrorism coordinator who will not go further than \"possible\". Both an escalation and a walk-back remain available, but the walk-back got more expensive.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'CBS News / Jerusalem Post / The Media Line',
      event: 'A Flydubai co-pilot tries to crash a flight to Tel Aviv, and the attribution runs away from Tehran',
      summary:
        "A Flydubai co-pilot allegedly stabbed the captain and attempted to crash a Dubai-Tel Aviv aircraft carrying 174 people on 30 September. Passengers overpowered him and two off-duty pilots aboard took the cockpit and landed at Tabuk in Saudi Arabia; the captain was stabbed and Saudi authorities reported two crew hospitalised. An Omani official told CBS News the suspect was born in Oman and holds Omani citizenship. Netanyahu said investigators concluded the co-pilot \"underwent Islamist radical indoctrination\", that an Iranian connection would be known \"within a matter of days\", and identified a pilot-screening \"loophole\"; Katz called it \"an attempted jihadist terror attack\". Sheikh Mohamed bin Zayed told Netanyahu that Saudi Arabia would transfer the suspect to the UAE. Trump said of an Iranian link \"I would say the answer, based on what I'm hearing is yes\", and said Iran would be \"hit, very hard\" if connected. Flydubai suspended Israel flights. Arab and Iranian outlets framed the incident as a possible false flag.",
      impact:
        "Per §3.5.3 this is the sharpest divergence yet between a presidential attribution and the investigators beneath it: Trump answered yes while his own and Israel's investigators pointed to Islamist radicalisation and an Omani passport. Logged as CONTESTED ATTRIBUTION. The custody chain is the day's one genuine de-escalatory fact — Saudi, Emirati and Israeli cooperation executed in public.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: 'NCRI / Iran HRM / Iran International',
      event: "Iran's currency breaks 2.5 million and two protest executions are carried out",
      summary:
        "The rial crossed 2.5 million to the dollar on 29 September — about 250,000 tomans against roughly 231,000 carried on Day 216 — leaving the official minimum monthly wage worth about $71 with inflation at 83.8% point-to-point. Ali Hemmati, 21, and Majid Nik-Andish, 25, were executed on 30 September over alleged roles in the January 2026 Mashhad protests, their sentences upheld by the Supreme Court; authorities described them as \"leaders\" and \"field elements\". Reported security mobilisation reached 313,000 participants in a Tehran drill on 18 September and 110,000 across fourteen counties on 16 September, both unverified. First-grade enrolment fell by 160,000 students year-on-year. Mojtaba Khamenei claimed Iran is regarded as a \"fourth superpower\" and by \"divine calculations\" the \"first power in the world\".",
      impact:
        "The leverage-monetisation prior holds from the other side: Washington's new designations land on an economy already past 2.5 million rial and shedding a cohort of first-graders. The executions of two men in their early twenties for a January protest are the regime's answer to the retiree demonstrations recorded on Day 216, and they price into no instrument now on the table.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed this cycle, recorded as an absence of disclosure rather than a lull per the series retired on Day 214. No reconciliation followed Day 216's widened gap, where the president's 18 sat below his own Department's 18 killed and 756 wounded as of 21 August and below the at-least-19 against 861 this brief carries. DCAS 18 / 687 and The Intercept's 410 since 7 July carry unreconciled, as does the reclassification of four deaths and hundreds of injuries out of the Epic Fury count. El Gaia stays CONTESTED ATTRIBUTION. The force-health thread moved for the first time: the Roosevelt relieves the Washington, which had replaced the Lincoln after crew wellness problems — a rotation now exists, arriving end-November. A tanker was struck in the strait with no disclosed American casualty. An Energy Department employee was charged over alleged material support to the Houthis.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "No new Israeli military fatality. The day's violence against Israel-bound civilians happened at altitude and is not adopted here: the Flydubai captain's stab wounds and two hospitalised crew are logged as unattributed to the war until an actor is established. Netanyahu cited \"Islamist radical indoctrination\" and promised an answer on Iran \"within a matter of days\"; Katz called it \"an attempted jihadist terror attack\"; an Omani official placed the suspect's birth and citizenship in Oman. Flydubai suspended Israel flights. Israel published nothing on the counterproposal for a second day. Katz's unretracted security-zone doctrine and the pre-election attack warning carry. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded, ~7,700 recorded violations of the 26 June framework, no withdrawal timeline. Twenty-five days to the vote.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and no confirmed Iranian launch against a host state since 8-9 September, a twenty-third day, qualified by the disclosed 14 September maritime strike. Today's pressure was financial and procedural: Treasury designated the automotive, rail and metals sectors and the A7 network, and Rubio sent Araghchi's delegation home. Araghchi said Iran is \"awaiting an official response from the United States through the mediators\", which does not match Washington's delivered-response account. Ghalibaf warned no one would sell oil in the region if Iran cannot. Pezeshkian said Washington should abandon hopes of bringing Iran \"to its knees\" while stressing dialogue. NPT withdrawal stays parliamentary, with the Kremlin's opposition carrying. The rial crossed 2.5 million to the dollar, the minimum wage is worth ~$71, and two men aged 21 and 25 were executed on 30 September over the January Mashhad protests. The 4,200+ named protest-dead roster and the Fact-Finding Mission's 3,038 / 25,000 carry separately and are never merged.",
    },
    other: {
      cumulative: 'KIA: 3,598+ · WIA: 10,804+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "No fresh Houthi impact claim or Saudi interception recorded. The Gulf's contribution was custodial and it cut against the week's escalation: Saudi Arabia took the Tabuk landing and held the Flydubai suspect, and the UAE president told Netanyahu that Riyadh would transfer him to Abu Dhabi — Saudi, Emirati and Israeli coordination in public, days after Riyadh denied joining the Abu Dhabi talks. Iraq's first full day without an American ground presence passed without a recorded militia attack on a remaining regional target; Operation Inherent Resolve closed at Erbil on 30 September after twelve years, 123 killed and 499 wounded, against 600-plus militia attacks in three months and disarmament slipped to June 2027, with Kurdish forces losing the air defences that covered Erbil. Riyadh has published nothing on the 19 September strike on its capital or the Day 209 Mocha and prison claims, a fifteenth day. IOM records ~130,000 displaced since 1 August, 73 UN personnel detained, 22.3 million needing aid. Bab al-Mandeb is not formally closed.",
    },
  },
  exec:
    "The venue closed. Rubio ordered Araghchi and his delegation out of New York after technical talks stalled, reportedly telling them they had \"overstayed their welcome\", and Trump told TIME he does not think \"you could ever have peace\" with Iran, raising renewed operations after the November midterms. Day 216 ended with the American counterproposal tabled before Pezeshkian in cabinet and the thirty-day probability rising to 13; a day later the delegation that would answer it has been expelled. Araghchi's account diverges — he said Iran is \"awaiting an official response from the United States through the mediators\" — while Pezeshkian said Washington should abandon hopes of bringing Iran \"to its knees\". Force and money moved the same way. The USS Theodore Roosevelt and the 13th Marine Expeditionary Unit were ordered to CENTCOM, roughly 10,000 more sailors and Marines arriving by the end of November, after the vote; Treasury's Operation Economic Outcast designated Iran's automotive, rail and metals sectors and the A7 shadow-banking network; and Bessent claimed \"Iran loaded ZERO crude oil onto tankers in September\". Brent December settled at $102.31, up 4.4%, reversing the $98.03 close that Day 216 read as pricing the crisis out, with WTI November at $92.87. Two attribution fights opened at once: a 27-year-old UK-Iranian dual national was arrested over RAF Fairford, and a Flydubai co-pilot stabbed his captain and tried to crash a Dubai-Tel Aviv flight carrying 174 people. Trump said an Iranian link was \"yes\" on what he was hearing; investigators cited Islamist radicalisation and Omani citizenship. Direction turns escalating; seven-day risk extreme; spillover critical; the thirty-day probability falls 13 to 8.",
  implications: [
    {
      title:
        'The offer kept its addressee and lost its address — and the force flow is timed past the midterms',
      body:
        "Day 216's gain was procedural: the counterproposal acquired an institutional addressee in Pezeshkian's cabinet. Day 217 removed the counterparty's physical presence instead of its standing. Rubio sent Araghchi home from New York; the president said peace may never be possible and named the midterms as the threshold for resuming operations. Quantified: a channel that on Day 216 had a cabinet review, a reported seven-day ceasefire term and shuttling Qatari mediators now has a document in Tehran and no delegation in the city where the technical talks were held. Araghchi's \"awaiting an official response ... through the mediators\" against Washington's delivered-response account is the second consecutive day on which the two sides describe different documents. Analytical judgment: the negotiation-capacity clock reverses from advancing to deteriorating in one cycle, and the political-will clock now sets the tempo — the Roosevelt and the 13th MEU arrive at the end of November, placing the reinforcement after 3 November rather than before it. The thirty-day probability falls 13 to 8: the document survives, the venue does not.",
    },
    {
      title: 'Two attributions landed the same day, and the evidence runs in opposite directions',
      body:
        "Fairford hardened in the way attributions do when they are real: a 27-year-old dual UK-Iranian national arrested, two properties searched, a second man interviewed under caution, and Vicki Evans calling the investigation \"hugely complex\" while naming \"possible foreign state involvement\". The Flydubai case moved the other way — an Omani-born citizen, investigators describing Islamist radical indoctrination, Netanyahu promising an answer on Iran \"within a matter of days\" — and Trump nonetheless answered \"yes\" on what he was hearing and promised Iran would be \"hit, very hard\" if linked. Per §3.5.3 both the presidential and prime-ministerial characterisations are claims, not findings, and today they diverge from their own investigators. Analytical judgment: the war has acquired two homeland vectors in forty-eight hours, one with a suspect who holds an Iranian passport and one with a suspect who does not, and the energy-infrastructure clock repriced on neither — Brent rose 4.4% on a hull count and a carrier, not on either plot.",
    },
    {
      title: 'Taiwan: the subsidy came home, and it is now a parliamentary question',
      body:
        "The Taiwan thread moved for the first time since the \"through September\" window lapsed. The cabinet approved a T$415 billion package — about US$13 billion — comprising T$180.9 billion in supplementary operating budget and a T$233.8 billion capital injection into CPC Corp, and sent it to parliament, with CPC's accumulated losses put at T$127.6 billion. The economy ministry warned that without approval \"both CPC and Taipower may be unable to continue functioning as price-stabilising entities, raising the risk of domestic price volatility\". Set it against the standing exposure: ~96% energy import dependence, roughly half of generation from LNG, ~11 days of reserve, ~35% of 2025 LNG from Qatar and the UAE. Analytical judgment: Day 215 cost Taipei the SPR price prop and Day 216 replaced it with a supply prop resting on ship-to-ship workarounds. Today the remaining buffer is fiscal and not yet legislated; Brent's 4.4% move is the first test of a cushion that currently exists only as a bill.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded with nothing disclosed. The reconciliation gap opened on Day 216 by the president's 18 against his Department's own August database stayed unanswered for a second day. The one thread that did move was force health: the Roosevelt is relieving the Washington, which had replaced the Lincoln after crew wellness problems, so the rotation Day 216 recorded as absent now exists — and arrives at the end of November, after the date the president named for resuming operations.",
    israel:
      "Iran-front casualties hold at 56 killed and 8,652+ wounded. The day's injuries to Israel-bound civilians are deliberately not adopted into this ledger: a stabbed captain and two hospitalised crew on a Dubai-Tel Aviv flight carrying 174 people, with the suspect's citizenship placed in Oman and Israeli investigators describing Islamist radical indoctrination rather than state direction. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded; twenty-five days to the 27 October election.",
    iran:
      "No new official Iranian war toll and a twenty-third day without a confirmed Iranian launch against a host state, qualified by the disclosed 14 September maritime strike. The quantified movement was economic and judicial: the rial past 2.5 million to the dollar, a minimum monthly wage worth about $71, first-grade enrolment down 160,000 students, and two men aged 21 and 25 executed on 30 September over the January 2026 Mashhad protests. HRANA 3,636+ and the Iran Foundation ~3,468 carry alongside the official ~3,559; the named protest-dead roster and the Fact-Finding Mission's counts carry separately and are never merged.",
    other:
      "+0 adopted with no fresh Houthi impact claim or Saudi interception recorded. The ledger's movement was custodial rather than kinetic: Saudi Arabia accepted the emergency landing and held the aviation suspect, and the UAE president undertook to Netanyahu that Riyadh would transfer him for questioning in Abu Dhabi. Iraq's first full day without an American ground presence passed without a recorded militia attack. Riyadh has published nothing on the strike on its own capital or the Day 209 atrocity claims for a fifteenth day.",
  },
};

export default data;
