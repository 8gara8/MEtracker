import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING on the ground while easing in the diplomatic register, and the two are recorded separately rather than netted. Trump wrote that the United States \"will not be attacking Iran at any time prior to the Midterm Elections\"; the same day Axios reported the Pentagon had told Central Command to finish preparing to resume major combat operations and the New York Times reported Trump had ordered plans against Iran's drone and missile arsenal, energy facilities and military sites. Meanwhile a third consecutive day of Houthi attacks on Saudi airports pushed Lufthansa and four Asian carriers out of Riyadh.",
      risk7d:
        "Extreme, held rather than eased, because the physical campaign widened while the political window narrowed. Houthi spokesman Yahya Saree told employees at \"all oil facilities\" to leave areas targeted by his forces and renewed warnings to airlines, airports and travellers. The Saudi-led coalition said it destroyed two ballistic missiles aimed at Riyadh; interception debris damaged a kindergarten and a medical complex. IDF chief Eyal Zamir was reportedly told to prepare for a massive strike within three weeks and told US generals that striking Iran now could delay Israel's 27 October election.",
      spillover:
        "Critical, and for the first time the cost is being paid by third-country commercial operators rather than only third-country nationals. Lufthansa Group suspended Riyadh flights to 16 October, Air India cancelled to 10 October, and IndiGo, Akasa Air and Philippine Airlines cancelled; Cirium measured 49.7% of Riyadh departures cancelled by 1500 GMT. India advised its citizens in Saudi Arabia to stay indoors, Kuwait disposed of shrapnel on its territory, and Oman, Kuwait, the UAE and India all condemned the airport attacks.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Truth Social / Axios / NYT',
      event: '⭐ Trump rules out strikes before the midterms as the Pentagon is told to finish preparing for them',
      summary:
        "Trump wrote on Truth Social that \"we will not be attacking Iran at any time prior to the Midterm Elections\", cited \"productive conversations\" without specifics, and said the naval blockade would remain. Hours earlier Axios reported the Pentagon had told Central Command several days ago to finish preparing to resume major combat operations, with no launch date set and no final decision taken. The New York Times reported Trump had ordered plans against Iran's drone and missile arsenal, energy facilities and military sites, that security officials had proposed major operations five times and Trump had vetoed each, and that a roughly three-day campaign was discussed at Camp David.",
      impact:
        "Day 223's scheduled-escalation prior is answered and must be split rather than resolved. The pre-midterm window is now publicly disavowed by the only person who can authorise it, which is the strongest de-escalatory statement of the quarter. It is also a political actor's claim about his own future conduct, and §3.5.3 bars integrating that as verified — particularly against same-day reporting of a readiness order and a vetoed-five-times plan. Both are recorded. The five vetoes are the genuinely new fact: they describe a president restraining his own staff, not one being pushed.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Reuters / Cirium',
      event: 'The aviation threat converts commercially: Lufthansa and four Asian carriers quit Riyadh',
      summary:
        "Lufthansa Group airlines suspended Riyadh flights through 16 October, citing \"current developments in the Middle East\". Air India cancelled all Riyadh flights to 10 October; IndiGo, Akasa Air and Philippine Airlines also cancelled. Cirium data showed 49.7% of Riyadh departures cancelled by 1500 GMT on Thursday, with 31 further cancellations expected across all Saudi airports on Friday. Riyadh airport told passengers to contact airlines before travelling. The State Department said US government employees now need special authorisation to use King Khalid International. Separately, an Iraqi Airways flight landed in Tehran, the first by a foreign airline since the war began.",
      impact:
        "This retires the last open item on the aviation deadline. For four cycles this series asked whether any airline would suspend Saudi routes, calling it the only remaining conversion of an aviation threat into a commercial fact. Five carriers converted it in a day, and Cirium turned it into a measured number rather than an announcement. The Tehran arrival inverts the picture on the same day: capacity is leaving the capital Washington defends and returning to the one it blockades.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'AFP / Saudi civil defence',
      event: 'Houthis order staff out of "all oil facilities" on a third day of attacks on Saudi airports',
      summary:
        "Houthi military spokesman Yahya Saree wrote on X that \"Employees at all oil facilities must leave areas that are targets for our forces, so as not to endanger their lives\", and issued a further warning to airlines, airports, travellers and their staff. He claimed a ballistic missile strike on Riyadh's King Khalid International Airport; the Saudi-led coalition said it destroyed two ballistic missiles launched towards Riyadh. Saudi civil defence said debris from an interception damaged a kindergarten and a medical complex. Diplomats in Riyadh were told to shelter in place, and smoke was seen rising from a stationary aircraft at the airport.",
      impact:
        "An evacuation warning naming no specific site is a threat against a sector rather than a target, and it is the first time this campaign has addressed Saudi oil workers directly. No facility was confirmed struck, so the energy-infrastructure clock moves on intent, not damage. The kindergarten and medical complex were hit by Saudi interception debris rather than by a Houthi warhead, and are recorded that way: the attribution-split prior applies to defensive fires as much as to offensive ones.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'high',
      source: 'IRNA / IRIB / Axios',
      event: 'Araghchi says Iran will answer Washington’s reply to the seven-day Hormuz plan within days',
      summary:
        "Foreign Minister Abbas Araghchi said Iran is reviewing Washington's response to its seven-day plan and that \"I believe we will respond within a few days\", adding that \"the negotiation process is still ongoing, and messages are being exchanged through mediators\" and that \"if they accept this plan tomorrow, the seven days will start from tomorrow\". The plan, conveyed through Qatari mediation at the UN General Assembly, has Washington act over four or five days, navigation resume on day six and final-status talks begin on day seven. Axios reported Qatari mediators awaiting Iran's reply to a US counterproposal containing nuclear demands.",
      impact:
        "Day 223 recorded the seven-day offer but expressly declined to adopt it as a live opening, because it restated conditions Washington had rejected. That judgement is now superseded: there is a US counterproposal on the table, Iran has it, and a response is dated. This is the first time in the file that both sides hold a paper from the other with a stated deadline, and it is the reason the thirty-day probability rises rather than the Truth Social post.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Tasnim / Arab News',
      event: 'Iran’s atomic chief rejects the enrichment price a day after Washington named it',
      summary:
        "Atomic Energy Organisation head Mohammad Eslami dismissed renewed US threats against Iran's nuclear facilities as \"nothing new\" and said enrichment \"is an integral part of the nuclear process, and we will not abandon it in any way\", asking \"How can you claim to have a nuclear industry if you don't have the starting point of the process?\" and calling the industry \"the driving force of science and technology\". Reporting of his remarks also records Iran refusing to hand over its uranium. Iranian authorities have previously said Tehran could agree to dilute its most highly enriched material.",
      impact:
        "Vance priced a deal on Day 223 at a concrete cut in enrichment capacity. Within twenty-four hours the official who runs the programme refused the currency, and did so on sovereignty grounds rather than technical ones — the published-price prior holds, and the gap is being defended rather than narrowed. The one hedge worth carrying is dilution: Tehran has floated diluting the 60% stockpile, which is a reduction in material without a reduction in capacity, and is the only bridging formula visible.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: 'US Treasury / State Department',
      event: 'Treasury designates 17 shadow-fleet vessels under Operation Economic Outcast',
      summary:
        "The Treasury sanctioned 17 vessels linked to Iran's \"shadow fleet\", together with the companies owning them, which it accused of operating in Iran's petroleum and petrochemical sectors; the State Department published the action as Operation Economic Outcast. Treasury said the action \"effectively neutralizes the vast majority of Iran's remaining shadow fleet network\". The vessels were said to have moved millions of barrels of Iranian crude and refined and petrochemical products to buyers in South and East Asia. Secretary Scott Bessent said the aim is to deprive Tehran of the funds it needs to wage war in the region.",
      impact:
        "The sanctions-ceiling prior is tested by a claim of near-completion. \"The vast majority of the remaining network\" is an assertion of exhaustion, which matters more for what it forecloses than for what it adds: if the fleet is substantially gone, the next rung is bank designation, which this series has carried as an unfired Brent trigger since the spring. Note the sequencing — the designation landed hours after the president ruled out military action, which prices economic pressure as the substitute instrument.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: 'Hakan Fidan / ISPR / Khawaja Asif',
      event: 'Turkey rules out offensive deployment as the Mecca committee agrees to "rapidly deploy agreed forces"',
      summary:
        "Foreign Minister Hakan Fidan said technical evaluations continue among Turkish military officials, that \"This is not an attack agreement. Turkiye is not carrying out an attack by sending troops to another country's land\", and that \"when a country of this agreement is attacked, you have to side with them\"; air defence is the reported focus and the pact text has been finalised for ratification by the Turkish parliament. A Pakistan-Saudi-Turkey committee agreed to rapidly deploy agreed forces to the kingdom without publishing figures. Pakistan's ISPR said its troops have been in Saudi Arabia for decades; Defence Minister Khawaja Asif said Pakistani and Turkish forces would play a supporting role including reconnaissance while Saudi forces conduct combat operations.",
      impact:
        "The collective-defence-activation prior gets its first substantive answer in three cycles, and the answer is a ceiling rather than an order of battle. Turkey has now explicitly excluded offensive deployment and Pakistan has described its role as reconnaissance and support. Still no numbers, named units or dates. A pact being characterised downward by its own members while a committee promises rapid deployment is a pact whose deterrent value is being spent faster than its combat value is being built.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: 'Bloomberg / Trading Economics',
      event: 'Brent moves 4% on the strike report and gives part of it back on the post',
      summary:
        "Oil rose above $105 on the report that the White House had sought strike options, with equities falling on inflation concerns, then fell to about $103 after Trump's post ruling out pre-midterm action. Trading Economics quoted Brent at about $103.74, up 4.07% on the day, up 2.50% on the month and 59.05% on the year, with the fourth-quarter forecast at $106.60 and the twelve-month at $121.00; WTI was about $91.09, up 3.64% on the day but down 5.17% on the month. Maersk raised its emergency fuel surcharge and Air India raised Middle East fuel surcharges.",
      impact:
        "Day 223's price-blindness prior asserted that the market had stopped pricing this war after two laden hulls were struck with casualties and Brent closed down. Today refutes the general form of that claim and sharpens it: the price moved four per cent, and it moved on Washington's intentions, not on a hull. The market is pricing the probability of a US strike on Iranian energy infrastructure and discounting attacks on shipping almost entirely.",
    },
    {
      id: 9,
      direction: 'neutral',
      importance: 'medium',
      source: 'IDF / Congressional Research Service',
      event: 'An Israeli officer dies in a Lebanon vehicle accident as the US aircraft-loss ledger is published at 81',
      summary:
        "The IDF said Capt. Eliav Haim Tzapalamus, 21, of the 7th Armored Brigade was killed and three soldiers moderately wounded when a Humvee overturned during operational activity in southern Lebanon; the military opened an investigation and did not attribute the incident to enemy fire. The Congressional Research Service, reported by AP, put at least 81 US aircraft and drones lost or damaged in the war. The USS Abraham Lincoln returned to San Diego after 321 days at sea. Araghchi said the real toll of the war on the United States is \"far higher\" than acknowledged.",
      impact:
        "The Israeli ledger moves for the first time in several cycles, and it moves on an accident rather than on fire — recorded as such, because the toll-institutionalisation discipline requires cause to travel with the count. The CRS figure of 81 is the first authoritative US materiel-loss number in the file, and it arrives from a legislative support agency rather than the Pentagon. Araghchi's claim about American casualties is recorded as a belligerent's assertion, uncorroborated, and is not adopted.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed for a ninth consecutive cycle, recorded as an absence of disclosure and not a lull, with the Day 216 gap against CENTCOM's figure of 18 unanswered for a ninth day and the June Port Shuaiba investigation still unreleased. What arrived instead is a materiel ledger: the Congressional Research Service put at least 81 US aircraft and drones lost or damaged, the first authoritative figure of its kind here and published by a legislative agency rather than the Pentagon. Araghchi's claim of a far higher American toll is not adopted.",
    },
    israel: {
      cumulative: 'KIA: 57 (Iran-front 47 + Lebanon-front 10) · WIA: 8,655+',
      delta: '+1 KIA / +3 WIA',
      status:
        "The first Israeli delta in several cycles, and the cause travels with it: Capt. Eliav Haim Tzapalamus, 21, of the 7th Armored Brigade was killed and three soldiers moderately wounded when a Humvee overturned during operational activity in southern Lebanon. The IDF opened an investigation and alleged no enemy fire, so it is carried as an operational death, not a combat one. The Jerusalem Post's differently-bounded ballistic-missile series stays recorded beside these figures and unmerged. Eighteen days to the vote, with Zamir reportedly warning US generals that striking Iran now could delay it.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a thirtieth day without a confirmed Iranian attack on a host state, a formulation still carrying unclaimed tanker strikes: UKMTO recorded nine attacks on tankers in the Strait of Hormuz in October alone, and a crude tanker struck by an unknown projectile on Tuesday with no casualties. Movement was declaratory and economic: Eslami refused to abandon enrichment or hand over uranium, Araghchi promised a reply within days, and Treasury designated 17 shadow-fleet vessels. NCRI records 201 protest actions in a month, and the execution roster holds at 70 since January, never merged with the war toll.",
    },
    other: {
      cumulative: 'KIA: 3,681+ · WIA: 10,852+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "No adopted delta, worth stating on a day of attacks across three fronts: the Saudi-led coalition reported both Riyadh-bound missiles destroyed, Saudi civil defence recorded kindergarten and medical-complex damage from interception debris without casualties, and UKMTO's Tuesday tanker strike reported none. The unspecified casualties from the 7 October strike north of Qatar remain recorded and unadopted. The WHO Yemen series of 959 dead since 6 August stays parallel, and IOM's 200,000-plus displaced carries with no fresh count. The World Bank cut Qatar's 2026 growth outlook by 20.9% and Kuwait's by 14.6%.",
    },
  },
  exec:
    "The dominant question of this file was answered twice in one day, in opposite directions, and both answers are recorded. Trump wrote on Truth Social that \"we will not be attacking Iran at any time prior to the Midterm Elections\", citing \"productive conversations\" and saying the blockade stays. Hours earlier Axios reported the Pentagon had told Central Command to finish preparing to resume major combat operations, and the New York Times reported Trump had ordered plans against Iran's drone and missile arsenal, energy facilities and military sites, with security officials proposing major operations five times and Trump vetoing each. IDF chief Eyal Zamir reportedly told US generals that striking Iran in the coming weeks could delay Israel's 27 October election. The aviation threat converted commercially: Lufthansa Group suspended Riyadh flights to 16 October, Air India, IndiGo, Akasa and Philippine Airlines cancelled, and Cirium measured 49.7% of Riyadh departures cancelled on a third consecutive day of Houthi attacks on Saudi airports. Yahya Saree told employees at \"all oil facilities\" to leave areas his forces target. Treasury designated 17 shadow-fleet vessels under Operation Economic Outcast, claiming to have neutralised the vast majority of the remaining network. Araghchi said Iran will answer Washington's reply to its seven-day Hormuz plan \"within a few days\"; atomic chief Mohammad Eslami said enrichment \"is an integral part of the nuclear process, and we will not abandon it in any way\". Brent rose above $105 on the strike report and settled near $103.74, up 4.07%. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day probability rises from 6 to 9.",
  implications: [
    {
      title: 'A public commitment and a readiness order are not a contradiction to be resolved',
      body:
        "The temptation today is to pick one of the two stories and discard the other. Both should be carried. Trump's post is the most explicit de-escalatory statement by a principal in this war, and it removes a window this series had been treating as the dominant risk since Day 223. Axios's readiness order and the New York Times' account of ordered plans against Iran's energy and nuclear infrastructure describe preparation that would survive the post intact — preparation is what you do during a window you have publicly closed. Analytical judgment: under the multi-clock framework the active-deadline clock improves and the negotiation-capacity clock improves with it, while the energy-infrastructure clock worsens; the political-will clock, which merged with the deadline clock yesterday, has now partially separated, which is the first favourable structural change in a fortnight. The most informative detail is the New York Times' five vetoes. A president who has declined five proposed operations is being restrained by his own judgment rather than pushed by his staff, which argues the post describes a real disposition and not only a market intervention. Against that, §3.5.3 forbids treating a political actor's forward-looking claim as verified, and Zamir's reported three-week preparation horizon sits inside the window the post appears to close. The test is narrow and dated: whether the Pentagon or Central Command is asked on the record to reconcile the readiness order with the commitment, and whether the post survives the first mass-casualty attack on a Saudi or American target.",
    },
    {
      title: 'The aviation threat converted, and it converted through balance sheets rather than casualties',
      body:
        "For four cycles this file asked one question about aviation: whether any airline would suspend Saudi routes. Yesterday it was called the only remaining conversion of the threat into a commercial fact. Today Lufthansa Group suspended Riyadh to 16 October, Air India cancelled to 10 October, and IndiGo, Akasa Air and Philippine Airlines followed, with Cirium measuring 49.7% of Riyadh departures cancelled by 1500 GMT and 31 further cancellations expected across all Saudi airports. The deadline is retired. Analytical judgment: the conversion is worth more than the fatalities that preceded it, because a suspension is a priced, reversible decision by a party with no stake in the war, and it is therefore the cleanest available read on how insurers and operators assess the threat. Note what did the converting. Three deaths on Days 222 and 223 produced no suspensions; a third consecutive day of attacks, a renewed Houthi warning to airlines and an explicit instruction to oil-facility staff to evacuate produced five in hours. Operators priced persistence, not lethality. The same logic now points at the sector Saree named rather than the one he hit, and the Houthis have learned that a warning to workers moves more than a warhead. The counter-reading is that Lufthansa's suspension runs eight days and Air India's two, so this is a disruption rather than a withdrawal; the test is whether any carrier extends past 16 October.",
    },
    {
      title: 'Taiwan: no fresh reading, and the freight signal is where the exposure now shows',
      body:
        "There is no fresh Taiwan-specific development today; the CPC solvency file stands as recorded on Day 223, with the Executive Yuan's NT$415 billion package — NT$180.94 billion of subsidy and NT$233.83 billion of capital injection — still unvoted by the legislature, and the early-2027 insolvency assessment unaddressed in public. Two items from today bear on it indirectly and neither is a Taiwan story. Maersk raised its emergency fuel surcharge and Air India raised Middle East fuel surcharges, which is freight and bunker cost transmitting into shipping rates rather than into Brent; and the World Bank cut Qatar's 2026 growth outlook by 20.9%, the sharpest regional revision, against Kuwait's 14.6%. Analytical judgment: the crude-is-not-gas prior is reinforced from an unexpected direction. Taipei's exposure runs through twenty- to twenty-five-year LNG contracts from fourteen countries, Qatar foremost among them, and a 20.9% growth revision in the supplying state is a better proxy for contract and shipping risk than a four per cent move in Brent. The shipping-cost channel is also the one CPC cannot hedge by re-routing, and it lands on a balance sheet the Executive Yuan has already assessed as near insolvency. Watch for the legislative vote and for any Taipei official distinguishing delivered LNG cost from crude price — the conflation remains the thing most likely to under-size the package.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded, undisclosed for a ninth cycle, with the CENTCOM figure of 18 still unreconciled. The movement was in materiel rather than personnel: the Congressional Research Service put at least 81 US aircraft and drones lost or damaged, the first authoritative loss figure carried here and one published by a legislative agency rather than the Pentagon. The Abraham Lincoln came home after 321 days. Araghchi's claim that the real American toll is far higher is recorded and not adopted.",
    israel:
      "The ledger moves to 57 killed and 8,655 wounded on an operational death rather than a combat one — Capt. Eliav Haim Tzapalamus, 21, of the 7th Armored Brigade, killed with three wounded when a Humvee overturned in southern Lebanon, no enemy fire alleged and an investigation opened. The cause is carried with the count. The Jerusalem Post's separate ballistic-missile series stays unmerged. Eighteen days to the election, with the IDF chief reportedly warning that an Iran strike now could delay it.",
    iran:
      "No new official toll and a thirtieth day without a confirmed attack on a host state, while UKMTO counted nine tanker attacks in the strait in October. Movement was declaratory and economic: Eslami refused to abandon enrichment or hand over uranium, Araghchi promised a reply within days, and Treasury designated 17 shadow-fleet vessels while claiming to have neutralised most of what remained. NCRI counted 201 protest actions in a month, led by 79 retiree actions and 51 by workers.",
    other:
      "No adopted delta despite attacks on three fronts: both Riyadh-bound missiles were reported destroyed, the kindergarten and medical complex damage came from interception debris with no casualties recorded, and UKMTO's Tuesday tanker strike reported none. The unspecified casualties north of Qatar on 7 October stay recorded and unadopted. IOM's 200,000-plus displaced carries without a fresh count, and the WHO series of 959 dead since 6 August stays parallel. The World Bank cut Qatar's 2026 growth outlook by 20.9%.",
  },
};

export default data;
