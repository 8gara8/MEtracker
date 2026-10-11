import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the constraint that made retaliation unstable has been removed by the attacker itself. The Houthis claimed the attacks on Riyadh's King Khalid International, saying they had run at least four operations against the airport since Saturday, and struck the passenger terminal complex again on Sunday; the Saudi-led coalition said an unidentified projectile hit Terminal 4 and started a fire. Saudi aviation authorities confirmed a second airport attacked at Dammam, also claimed. Washington now has an author for the strike it was weighing a response to.",
      risk7d:
        "Extreme and held, with the diplomatic branch degrading as the military one clears. Supreme National Security Council secretary Mohsen Rezaei called Washington's response to Iran's seven conditions \"insufficient\", said Tehran is no longer responding, and warned that cables, data centres and artificial-intelligence facilities would come within range if fighting resumes. The FAA told US airlines to exercise extreme caution over Saudi Arabia through 10 December. Senator Chris Murphy said the United States should not retaliate for Saudi Arabia, the first named congressional brake of the sequence.",
      spillover:
        "Critical and now carrying missing seafarers rather than only injured ones. A drone struck the Nicaragua-flagged Petro Dolphin at Sohar anchorage off Oman and two of its eleven Indian crew are missing; the Marshall Islands-flagged Valthera was hit by an unknown projectile in the strait with all eleven Indian crew safe. India condemned both attacks and called for de-escalation. Saudi Arabia, Egypt, Pakistan and Turkey issued a joint statement on the airport attacks, and France and the UAE declared solidarity — four governments and no contribution.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Houthi statements / Saudi-led coalition / CBS News',
      event: '⭐ The Houthis claim the Riyadh airport attacks and strike the terminal complex again',
      summary:
        "The Houthis said they had carried out at least four operations against King Khalid International Airport since Saturday, claiming the sequence this file recorded on Day 226 as unclaimed. A projectile hit a passenger terminal at the airport on Sunday, affecting the complex housing Terminals 3 and 4; the Saudi-led coalition said an unidentified projectile struck Terminal 4 and caused a fire. The Saudi government extended the airport's closure through Sunday. No casualty figure was published for the Sunday strike at the time of the attack.",
      impact:
        "The single most consequential change of the day, and it is a change in the conditions for retaliation rather than in the violence. Day 226 recorded a target, a window and no agreed author; the author has now supplied itself. State had already named the Houthis for the unclaimed strike, and the claim retroactively vindicates that attribution without validating the method by which it was made.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Saudi civil aviation authority / Reuters / Fox News',
      event: "A second Saudi international airport is confirmed struck at Dammam, and also claimed",
      summary:
        "Saudi Arabia's civil aviation authority confirmed on Sunday evening an attack on King Fahd International Airport at Dammam, roughly 400 miles from Riyadh on the Gulf coast. Injuries were unclear and damage was being assessed. The Houthis claimed responsibility for targeting King Fahd International, per Reuters. On Day 226 this file carried only the Saudi-led coalition's report that a projectile had landed near the airport; the event is now confirmed as an attack on the facility by the regulator and claimed by an attacker.",
      impact:
        "The campaign is no longer a single-hub problem. Dammam serves the Eastern Province and the oil complex behind it, so a claimed strike there puts the aviation and energy-infrastructure clocks on the same target set for the first time. The upgrade from \"landed near\" to a confirmed attack is also a worked example of the regulator-publishes-the-count prior operating on the event rather than the toll.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Mohsen Rezaei via IRNA / The National / Fox News',
      event: "Iran calls the US response \"insufficient\" and says it is no longer answering",
      summary:
        "Mohsen Rezaei, secretary of Iran's Supreme National Security Council, said Washington's response to Tehran's seven conditions was \"insufficient\" and that \"Naturally, they must resolve the ambiguities.\" He said Iran is no longer responding to the United States and that Washington must clarify outstanding issues, while stating that the United States had accepted some of the seven conditions. He said mediated contact continues. He warned that if fighting resumes, \"many cables, data centers and artificial intelligence centers will come within range\". Trump and Iranian officials separately both said the midterm elections are not a factor in this week's talks.",
      impact:
        "Araghchi's \"within a few days\", outstanding since Day 224, is answered on its fifth day and the answer is a refusal. Two things are new and pull opposite ways: Tehran conceded for the first time that Washington has accepted part of its list, which is more structure than the channel has shown in weeks, and the reply came from the security council rather than the foreign ministry. Recorded as a claim by a belligerent about its own position.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'FAA / Flightradar24 / Fox News',
      event: 'The FAA warns US airlines over Saudi airspace through 10 December as Jeddah disruption begins',
      summary:
        "The US Federal Aviation Administration issued a notice warning US airlines to exercise extreme caution flying to or over Saudi Arabia, citing threats that \"could pose a potential risk to aircraft at all altitudes\". The notice runs through 10 December. Flightradar24 reported 156 flights cancelled and 374 delayed at Jeddah's airport. On Day 226 this file recorded EASA widening its Saudi guidance to warn of civil aircraft being misidentified, under a bulletin valid to 16 November; the American regulator has now joined with a horizon seven weeks longer.",
      impact:
        "The misidentification-warning prior extends from one regulator to two and from one hub to three. Jeddah is on the Red Sea coast, far from the Riyadh and Dammam target set, so its disruption is a market response to airspace risk rather than to an attack. A warning valid to 10 December also prices the disruption past the 3 November vote, which is the first regulatory instrument in this file to do so.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'UKMTO / Sarbananda Sonowal / ANI',
      event: 'Two more tankers are struck and two Indian seafarers are missing off Oman',
      summary:
        "UKMTO reclassified an incident near Sohar anchorage, Oman, as an attack after confirming a drone had struck a tanker, with crew evacuation under way and damage and environmental impact unknown. India's Union Shipping Minister Sarbananda Sonowal identified the vessel as the Nicaragua-flagged MT Petro Dolphin, said nine of its eleven Indian crew were rescued and that \"two Indian nationals currently remain missing\", with \"Search-and-rescue operations actively underway by the local Coast Guard\". Separately the Marshall Islands-flagged M/T Valthera was struck by an unknown projectile in the Strait of Hormuz, causing an onboard fire; UKMTO and Sonowal both reported all eleven Indian crew safe. India condemned both attacks and called for de-escalation.",
      impact:
        "UKMTO's October warning count passes the thirteen carried on Day 226, answering that deadline. These are the first missing seafarers attributed to a named hull in the Gulf phase, and the third and fourth vessels with all-Indian crews struck inside four days after the GEM NO.2's twenty-two. Neither attack is attributed.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Yahya Saree / CBS News',
      event: "Saree declares Saudi airports and airspace \"a theatre of operations\" and exempts Mecca and Medina",
      summary:
        "Houthi military spokesman Yahya Saree warned that Saudi airports and airspace are \"a theatre of operations for our forces\" and told passengers not to travel. He said Mecca and Medina would not be targeted. Saree claimed Saudi Arabia had launched more than 120 airstrikes in twenty-four hours. On Day 226 this file carried his earlier claim that humanitarian flights to Riyadh require Houthi permission.",
      impact:
        "A declared target class rather than a claimed strike, and the exemption is the analytically interesting half: naming the two cities that will not be hit is an attempt to hold Muslim opinion while attacking the state that administers them. The 120-airstrike figure is a belligerent's count with no location, timing or damage detail attached and is not adopted.",
    },
    {
      id: 7,
      direction: 'neutral',
      importance: 'medium',
      source: 'Joint statement / French and UAE foreign ministries / Netanyahu',
      event: 'Four governments condemn the airport attacks and none contributes a force',
      summary:
        "Saudi Arabia, Egypt, Pakistan and Turkey issued a joint statement calling the attacks \"a blatant violation of international law\". France condemned the \"heinous attack\" on Riyadh's airport and expressed \"total solidarity\" with Saudi Arabia. The UAE expressed \"full solidarity with Saudi Arabia\" and said it supports \"all measures\" to protect the kingdom's security. Netanyahu condemned the Riyadh attack, saying \"Terrorism targets innocent people and seeks to spread fear and instability.\"",
      impact:
        "The sharpest instance yet of the declaration-without-content prior. Pakistan's \"substantial number of forces\" and Turkey's finalised-but-unratified air-defence text have gone a fifth cycle without a figure, unit or date, and both governments signed a statement instead. The UAE's support for \"all measures\" is the broadest Gulf formula of the war and still commits nothing countable.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: 'Sen. Chris Murphy via Face the Nation / CBS News',
      event: 'A senator says the US should not retaliate for Saudi Arabia',
      summary:
        "Senator Chris Murphy of Connecticut told Face the Nation that the United States should not retaliate on Saudi Arabia's behalf, saying \"What I saw on the ground is a war that is spiraling out of control.\" The remarks came as the White House review of a possible next step, recorded on Day 226, remained open and as Trump's \"We may. We're gonna look at it\" on joining the Saudi campaign stayed a claim rather than a decision.",
      impact:
        "The political-will clock acquires a named brake. Day 226 recorded that clock inverting — a commitment made to protect a vote exposed to the event class that makes keeping it costly. A senator arguing publicly against retaliation on the Sunday after an American died in the attack is the first evidence that the domestic cost runs in both directions.",
    },
    {
      id: 9,
      direction: 'neutral',
      importance: 'medium',
      source: 'Times of Israel / Col. Majed al-Nazili / Fox News',
      event: 'Four Israeli opposition leaders individually rule out serving with Netanyahu, fifteen days out',
      summary:
        "Avigdor Liberman said \"Come hell or high water, we will not sit in a government with Netanyahu\"; Yair Golan said Netanyahu would get no role, \"not as finance minister, not as water minister\"; Gadi Eisenkot said \"everyone who was in office [on October 7] is unfit to serve in command and leadership roles\"; Naftali Bennett said Netanyahu was \"welcome to give me a call\" if he accepted the bloc's guidelines including a state commission of inquiry, adding \"I don't know if a man nearing 80 has the energy for that\". Former attorney general Avichai Mandelblit testified at Netanyahu's corruption trial that he had not reviewed the full indictment. Netanyahu convened security officials over concerns of Iranian escalation. Separately, Yemeni government military spokesman Col. Majed al-Nazili claimed 1,732 operations against Houthi targets \"resulting in neutralizing 900 Houthi members\".",
      impact:
        "Day 226's poll showed neither bloc near 61; today's statements show why that matters more than the seat count. Four leaders have individually foreclosed the coalition arithmetic, which is a structural lock rather than a sampling result. Al-Nazili's tally is a government claim with no location or date and is not adopted, consistent with Bab al-Mandeb still being unconfirmed.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "A twelfth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The American civilian killed at King Khalid stays on the \"other\" line; the boundary is stated, not quietly crossed, and the State Department has still not named them. The Day 216 gap against CENTCOM's figure of 18 is unanswered for a twelfth day, the June Port Shuaiba investigation is unreleased, and there is no Pentagon response to the Congressional Research Service figure of at least 81 US aircraft and drones lost or damaged. Roosevelt CSG and Makin Island ARG remain inbound for late October.",
    },
    israel: {
      cumulative: 'KIA: 57 (Iran-front 47 + Lebanon-front 10) · WIA: 8,655+',
      delta: '+0',
      status:
        "No Israeli casualty disclosed. The IDF and Shin Bet said they killed a Nukhba commander involved in the 7 October raid on a base, and the IDF said troops killed a Palestinian who crossed the Yellow Line in southern Gaza, describing him as an immediate threat; an airstrike destroyed a building in Zawaida with no casualty figure given. None of those deaths are on this series, and Gaza's health ministry series of 74,370 killed and 175,371 injured stays parallel and unmerged. Fifteen days to the election.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-third day without a confirmed Iranian attack on a host state's territory, the Day 225 qualifier still attached because the claimed strikes remain against hulls rather than soil. The execution roster holds at 70 since January and 194 on death row, never merged, and Tehran has not answered the UN experts' 10 October appeal to halt all executions. The rial and the wage figures carried from Day 226 are unchanged: 265,000–270,000 tomans to the dollar against about 155,000 in January, and a 16.6-million-toman minimum wage worth about $63. The IAEA still cannot verify roughly 440.9 kg of 60% material.",
    },
    other: {
      cumulative: 'KIA: 3,697+ · WIA: 11,172+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+1 KIA / +11 WIA',
      status:
        "The delta is the Sunday strike only, and the figures for it are contested. Saudi civil aviation authority figures circulating for the renewed King Khalid attack record one person killed, a Pakistani resident, and eleven injured, with material damage being assessed. An FAA-cited report put the earlier attack at 13 killed and more than 300 wounded against the 12 and 309 adopted on Day 226 from GACA. This file carries GACA's 12 and 309 for 10 October, adopts one and eleven for 11 October, and merges neither with the FAA-cited 13; the three series are not reconciled and no figure was published for Dammam. Two of eleven Indian crew on the Petro Dolphin are missing and not yet counted as dead; the Valthera's eleven are safe. The IMO's 24 seafarers killed across 93 incidents and WHO's Yemen series of 959 dead since 6 August stay parallel.",
    },
  },
  exec:
    "The attribution gap closed. The Houthis claimed the attacks on Riyadh's King Khalid International, saying they had carried out at least four operations against the airport since Saturday, and a projectile hit the passenger terminal complex again on Sunday; the Saudi-led coalition said it struck Terminal 4 and started a fire, and the closure was extended. Day 226 recorded Washington weighing retaliation for an unclaimed strike — the condition that made that calculus unstable has been removed by the attacker. Saudi aviation authorities confirmed a second airport attacked, King Fahd International at Dammam some 400 miles away, which the Houthis also claimed. Yahya Saree declared Saudi airports and airspace \"a theatre of operations for our forces\", told passengers not to travel, said Mecca and Medina would not be targeted, and claimed Riyadh had flown more than 120 airstrikes in twenty-four hours. The FAA told US airlines to exercise extreme caution over Saudi Arabia through 10 December, citing risk \"to aircraft at all altitudes\"; Flightradar24 counted 156 cancellations and 374 delays at Jeddah. Iran's answer arrived and it was a refusal: Supreme National Security Council secretary Mohsen Rezaei called Washington's response to Tehran's seven conditions \"insufficient\", said \"they must resolve the ambiguities\" and that Iran is no longer responding, while conceding the United States had accepted some conditions, and warned that cables, data centres and AI facilities would come within range if fighting resumes. Two more tankers were struck: the Petro Dolphin at Sohar, where two Indian seafarers are missing, and the Valthera in the strait. Senator Chris Murphy said the United States should not retaliate for Saudi Arabia. Direction holds escalating; the thirty-day probability falls from 9 to 8.",
  implications: [
    {
      title: 'The author supplied itself, which removes the last structural brake on retaliation',
      body:
        "Day 226 closed with the unauthorised-escalation prior at its worst configuration: a mass-casualty attack, an open strike window, and no agreed author. The Houthis have now claimed at least four operations against King Khalid since Saturday and claimed Dammam as well. Analytical judgment: under the multi-clock framework the active-deadline clock stays critical and the negotiation-capacity clock has degraded beneath it, because the thing that was holding the military branch in check was evidentiary rather than political. State named the Houthis for an unclaimed strike on Day 226 and has been retroactively vindicated — but the method was asserting attribution before it existed, and that is not validated by the claim arriving afterwards. Two counterweights appeared the same day and both are weak. Senator Chris Murphy argued publicly that the United States should not retaliate for Saudi Arabia, saying the war is \"spiraling out of control\" — the first named congressional brake of this sequence, and one senator against a White House review. And Trump and Iranian officials both said the midterms are not a factor in this week's talks, a claim neither side can demonstrate and which sits oddly against a commitment defined by that calendar.",
    },
    {
      title: 'Iran answered, refused, and conceded something it had not conceded before',
      body:
        "Araghchi's promised reply, outstanding since Day 224, arrived on its fifth day through the Supreme National Security Council rather than the foreign ministry. Mohsen Rezaei called the American response \"insufficient\", said Tehran is no longer responding, and threatened cables, data centres and artificial-intelligence facilities if fighting resumes. Analytical judgment: a refusal delivered through a security-council channel is worse for the thirty-day probability than silence was, which is why it falls from 9 to 8 rather than holding. But one sentence runs the other way and should not be lost in the threat: Rezaei said Washington has accepted some of the seven conditions, and that mediated contact continues. That is the first itemised concession Tehran has acknowledged, and it means the gap is now a defined remainder rather than an unbounded one — while the published prices still do not meet, with Vance's demand for a concrete cut in enrichment against Eslami's refusal and dilution of the 60% stockpile the only visible bridge. The mediator-paper prior holds with Moscow transmitting and Doha unanswered. Rezaei's target list is recorded as a threat, not a capability.",
    },
    {
      title: 'Taiwan: no fresh development, and the silence is itself the open question',
      body:
        "No fresh Taiwan-relevant development today; prior assessments are unchanged. Day 226 established that the GEM NO.2 — the struck VLCC identified as Taiwan-managed and owned by Global Energy Maritime, a joint venture linked to U-Ming Marine Transport — moved Taiwan's exposure from delivered energy cost to hulls in the water. Twenty-four hours later neither U-Ming, nor Global Energy Maritime, nor any Taipei ministry has confirmed or disputed that identification, and the two tankers struck on Sunday carried Indian crews under Nicaraguan and Marshall Islands flags with no reported Taiwanese commercial interest. Analytical judgment: the solvency-not-price and crude-is-not-gas priors stand unmodified, and the NT$415 billion package with its NT$180.94 billion of subsidy and NT$233.83 billion of capital injection remains unvoted against CPC's early-2027 insolvency assessment. The analytically significant fact is the non-response: an identification made by open-source trackers and carried by international maritime press for a day and a half has drawn no comment from the named operator or its regulator. Under §3.5.10 this is recorded as an acknowledgment rather than padded, and the unanswered question is logged as a deadline.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded, undisclosed for a twelfth cycle. The American civilian killed at King Khalid remains on the \"other\" line and has still not been named by the State Department. CENTCOM's figure of 18 is unreconciled for a twelfth day and there is no Pentagon response to the Congressional Research Service count of at least 81 aircraft and drones lost or damaged. CENTCOM's blockade series — thirteen vessels destroyed over twelve weeks, 130 rerouted, three disabled — stays differently bounded from the 270-plus redirected carried here and is not merged.",
    israel:
      "No disclosed Israeli casualty. The IDF and Shin Bet reported killing a Nukhba commander linked to the 7 October raid on a base; troops killed a Palestinian who crossed the Yellow Line in southern Gaza; an airstrike destroyed a building in Zawaida with no toll published. None are on this series and Gaza's health ministry series of 74,370 killed and 175,371 injured stays parallel. Fifteen days to the vote, with four opposition leaders now individually ruling out a government with Netanyahu.",
    iran:
      "No new official toll and a thirty-third day without a confirmed attack on a host state's territory. The execution roster holds at 70 since January and 194 on death row, and the UN experts' 10 October appeal is unanswered. The rial sits at 265,000–270,000 tomans against about 155,000 in January and the minimum wage is worth about $63 against $105 a year ago, unchanged in rials. The IAEA still cannot verify roughly 440.9 kg of 60% material and the Panel of Experts mandate expired on 26 September.",
    other:
      "The day's figures are contested and are kept apart rather than summed. Saudi civil aviation authority figures for the renewed King Khalid strike record one killed, a Pakistani resident, and eleven injured; an FAA-cited report put the 10 October attack at 13 dead and more than 300 wounded against GACA's 12 and 309, which this file adopted and continues to carry. The delta here is the Sunday strike alone. No Dammam figure was published. Two of the Petro Dolphin's eleven Indian crew are missing and are not counted as dead; the Valthera's eleven are safe. The third-country-casualty prior holds: every seafarer casualty of the last four days has been Indian, and the only named fatality of the Sunday strike was a Pakistani resident.",
  },
};

export default data;
