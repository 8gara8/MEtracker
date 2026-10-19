import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the new war aim hardened. Netanyahu moved regime removal from a reported instruction to a personal undertaking — \"The regime must fall, and I will bring it down\" — while conceding it will not happen before the vote. The opposition is more hawkish, not less: only the frontrunner rules regime change out, and he replaces it with forcible nuclear dismantlement.",
      risk7d:
        "Extreme and worsening. The Houthis claimed strikes on Aramco at Yanbu and the Shaybah oilfield with no Saudi confirmation, a Houthi missile killed at least 53 at a Yemeni army camp in Shabwa, and Egypt's authorisation slipped to 26 October with its own opposition demanding the mission's objectives, duration, cost and risk. Lavrov reached Tehran and published no readout.",
      spillover:
        "Critical. Iran's Persian Gulf Strait Authority blacklisted 122 to 132 vessels with a published removal procedure, the IMO counted about 6,000 seafarers still trapped and told ships not to transit, and Saudi Civil Defence alerted Riyadh and Kharj. Qatar announced a coming regional defence partnership; Pakistan's army chief is due in Tehran with the Taftan and Gabd-Rimdan crossings still shut.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "Egypt's House of Representatives and the Egyptian Social Democratic Party via Al Jazeera and AFP",
      event: "Egypt's authorisation slips to 26 October and its opposition demands the terms",
      summary:
        "The House adjourned to 26 October — one day before Israel's ballot — the vote authorising Sisi to approve any Saudi request for defence assistance. The opposition Egyptian Social Democratic Party told its lawmakers to abstain, saying parliament had not been told the mission's \"objectives, duration, cost, or the risks to Egyptian troops\", while most of its members support the measure. A combat mission abroad needs a two-thirds majority. Sisi: Egypt would take \"any measure\" for its Gulf allies and \"We're talking only about defence.\" No Saudi request has been published.",
      impact:
        "Sunday's National Defence Council approval stands unused: the instrument exists, the legal basis does not. The fourth state stays prospective for a seventh day, and a prospective belligerent's legislature has priced the deployment rather than the pledge for the first time.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Netanyahu via The Times of Israel; Trump via Khaleej Times",
      event: "Netanyahu moves regime removal into the first person",
      summary:
        "In a pre-election briefing Netanyahu said \"The regime must fall, and I will bring it down\" and \"Our plan is a very comprehensive and very determined plan to bring about the fall of the regime. That is my plan.\" He doubted it would fall before the election, claimed ninety percent of the work was done, said \"The test of these elections is who will finish the job\", and warned an opposition win would be \"a tragedy for generations\". He said a Washington \"very hostile to Israel\" could arrive within two years and that Israel would \"also act independently\". Trump predicted a \"tremendous\" win for him.",
      impact:
        "A reported tasking becomes a personal commitment, and the timeline is conceded in the same breath. The hedge about a hostile future Washington is a pre-commitment to unilateralism priced against the American electoral calendar rather than the Iranian one.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Gadi Eisenkot, Yair Lapid and Naftali Bennett via Al Jazeera; the Israel Democracy Institute",
      event: "The Israeli opposition is more hawkish on Iran, not less",
      summary:
        "Frontrunner Gadi Eisenkot of the new Yashar party rules regime change out as unrealistic and sets the goal as \"the destruction or dismantling of the Iranian nuclear programme\", saying Netanyahu has done little to dismantle it. Yair Lapid calls toppling Tehran realistic and says it requires bombing \"all the energy facilities, especially on Kharg Island\". Naftali Bennett calls crushing Iran's government essential, names Qatar an \"enemy\" and calls Turkiye \"the new Iran\". Most opposition parties object to escalating before the vote rather than to the war. The Israel Democracy Institute finds 65 to 70 percent of Jewish Israelis say stopping the war did not serve national security.",
      impact:
        "No available election outcome returns the Iran file to capability denial. Lapid names Iran's principal crude export terminal as a target no Israeli government has published, and Bennett names the state carrying Araghchi's seven-day plan as an enemy.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Sens. Warren, Blumenthal, Hirono, Duckworth and Peters via the Office of Sen. Elizabeth Warren and Stars and Stripes",
      event: "Five senators publish the first congressional figure for American killed and wounded",
      summary:
        "The five wrote to CENTCOM commander Adm. Brad Cooper demanding disclosure or declassification of damage costs to US bases, with unclassified answers by 2 November on damage, replacement costs, repair funding and contractor payments. They cite as many as 23 service members killed and 861 wounded, a war cost of \"at least $42 billion\" and base rebuilding reportedly \"over $30 billion\", and say the Department of Defense \"has repeatedly tried to cover up the truth\". The CBO estimated $38 billion and noted the Pentagon withheld base-damage figures. Acting Navy Secretary Hung Cao said Iran \"blew the hell out of\" a US Navy base in Bahrain. CENTCOM did not respond.",
      impact:
        "The asymmetric-disclosure prior is vindicated by a congressional instrument rather than retired. The 23 and 861 are held as a fifth series against the disclosed 17 and 440 — neither merged nor differenced — and 2 November becomes a new dated deadline.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Yemen's Houthis via Business Recorder and Reuters; Saudi Civil Defence via Khaleej Times",
      event: "The Houthis claim Aramco at Yanbu and the Shaybah oilfield, unconfirmed",
      summary:
        "The Houthis claimed attacks on an Aramco site at Yanbu, the Shaybah oilfield, King Khalid International Airport and Abha airport, alongside \"several attacks against Saudi energy, airport and military targets\"; one aggregation counts six claimed attacks in 48 hours. There was no immediate Saudi confirmation, Reuters could not verify the claims, and Aramco did not respond. Saudi Civil Defence alerted Riyadh and Kharj governorate to potential danger and then said it had passed.",
      impact:
        "Two Brent triggers carried here — a Houthi strike on an Aramco production or export facility, and a Yanbu leaker — are claimed and unconfirmed on the cycle Brent fell 2.08 percent. The trigger list prices confirmation, not claims; an unconfirmed claim against an unresponsive sovereign is a null event for the energy-infrastructure clock.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "Reuters, AP, AFP, Al Jazeera and The Washington Times; the Houthis",
      event: "Shabwa becomes Yemen's deadliest single event and the toll moves five times",
      summary:
        "A Houthi missile struck a Yemeni government military camp in Shabwa. The published toll ran from at least 18 killed on Reuters sources, to at least 20 killed with dozens wounded and most of the dead new recruits on AP and Yemeni officials, to more than 30 on military sources, to at least 50 on a government official and AFP, to at least 53 on Al Jazeera and The Washington Times. The Houthis claimed responsibility.",
      impact:
        "Five published tolls for one event inside twelve hours is the contested-count prior at its sharpest. None is adopted into the rolled-up other-actor line and none is summed, which leaves that line materially understated and says so.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Iran's Persian Gulf Strait Authority via Fox News, This Is Beirut and Seatrade Maritime",
      event: "Iran turns its Hormuz transit registry into an enforcement ledger",
      summary:
        "The authority said it had added 122 vessels to a non-conformity list for violating transit rules; This Is Beirut puts the list at 132 ships and reports the authority contacted more than 40 vessels, of which 19 were negotiating, two were removed and 30 would be listed unless they responded, with removal possible after voluntary follow-up. The body was created during the war to collect payments in exchange for protection from sea mines and from attacks by Iran's military or the IRGC. The list has run from 11 to 56 to 77 to this cycle's figures. Iran said Washington is responsible for \"insecurity\" in the strait.",
      impact:
        "Ghalibaf's announced data authority and the police claim of a \"new order\" become an operating ledger with a published removal procedure. A protection fee with a blacklist and an appeals path is a tariff with enforcement, which revives the toll-institutionalisation prior stalled since Day 45. The 122 and 132 counts are held apart.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "The Russian Foreign Ministry via The Moscow Times; Tasnim and Iranian officials via Fox News and Khaleej Times",
      event: "Lavrov reaches Tehran and leaves no readout; Munir follows on Tuesday",
      summary:
        "Lavrov arrived Monday and met Araghchi, with a Pezeshkian meeting scheduled; the Russian Foreign Ministry said the talks would be \"confidential and thorough\", covering \"the situation in the Persian Gulf\" and a crisis it attributed to \"unlawful\" US and Israeli actions, plus energy, transport and economic projects. No outcome, mediation proposal or joint readout was published. Tasnim reported Pakistani army chief Asim Munir due in Tehran on Tuesday. Pezeshkian said Iran is ready to resolve regional issues through dialogue; Araghchi told Washington \"Want to try your luck again? Be our guest\"; Maj. Gen. Ali Abdollahi warned against \"further miscalculation\". Iran summoned Germany's ambassador.",
      impact:
        "Moscow arrives as Washington waives Russian sanctions and produces nothing publishable, which holds the leverage-spent-elsewhere prior. Munir's trip is the first military-level Pakistani move since the Taftan and Gabd-Rimdan crossings closed, and no party answered the seven-day Hormuz plan.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'high',
      source: "Reuters and Kpler via The Sunday Guardian; the IMO and CENTCOM via Fox News; OilPrice",
      event: "The price retreats on a Russian waiver while the flow data contradicts itself",
      summary:
        "Brent fell $2.29, or 2.08 percent, to $107.57 at 0619 GMT after settling Friday at its highest since 19 May; WTI fell 1.92 percent to $99.46, after Trump waived certain Russian sanctions and tariffs under the Graham Act. Rubio said the administration will take up to 60 days to assess the impact; Russian planned exports of about 2.3 million barrels this month could reach about 7.6 million a month; DBS expects $100 to $110 into the midterms. Kpler via Reuters put Gulf crude at about 8.5 million barrels a day over a week with at least ten confirmed vessel attacks, against a separate Kpler-sourced report of late-September Hormuz flows at 19.5 to 22.5 million, above pre-war.",
      impact:
        "One provider, two incompatible flow readings; neither is adopted. Against CENTCOM's 97 percent and \"it is open\" sit the IMO's instruction not to transit \"until we have guarantees\" and about 6,000 seafarers still trapped. CENTCOM named the sunken container ship GFS Pride while the GEM NO.2 stays unnamed by its owners.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: '+0 disclosed',
      status:
        "A twentieth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure. Five senators, citing a classified CENTCOM briefing, published as many as 23 killed and 861 wounded and said the Department of Defense \"has repeatedly tried to cover up the truth\"; that is held as a fifth series, neither merged nor differenced. CENTCOM did not respond, and answers are demanded by 2 November. The Iraq theatre's closing series stands at 123 killed and 499 wounded.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition on the war series, on the cycle Netanyahu moved regime removal into the first person and the opposition frontrunner ruled it out. Gaza deaths stay on their parallel series. Aoun said Israel has not adhered to the framework agreement and that \"Lebanon is committed to the diplomatic solution, despite its difficulty\", with a Lebanese military delegation due at the Tampa talks on 20 October.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll and a forty-first day with no confirmed Iranian attack on a host state's territory. HRANA's annual audit of at least 2,003 executions, its 47-women disaggregation, the 230 death sentences and the four minors remain uncontested by Tehran for a fourth day; Hengaw's six named women and its 106 protest death sentences with 35 carried out carry unchanged.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No addition to the rolled-up line, which is now materially understated and recorded as such. The Shabwa camp strike carries five published tolls between 18 and 53 killed inside twelve hours; the Najran six injured, the Saada nine and the two Saudi National Guard officers carry beneath the line from Day 234; and the Houthi claims on Yanbu, Shaybah, King Khalid and Abha carry no casualty figure at all. None adopted, none summed.",
    },
  },
  exec:
    "Egypt's House of Representatives adjourned to 26 October — one day before Israel's ballot — the vote authorising President Abdel Fattah el-Sisi to approve any Saudi request for defence assistance, and the opposition Egyptian Social Democratic Party instructed its lawmakers to abstain because parliament had not been told the mission's \"objectives, duration, cost, or the risks to Egyptian troops\". Sunday's National Defence Council approval stands; the legal basis does not. Netanyahu moved the objective into the first person — \"The regime must fall, and I will bring it down\", \"that is my plan\" — said he doubted it would fall before the election, claimed ninety percent of the work was done, and told reporters \"the test of these elections is who will finish the job\", while calling reaction to settler violence \"a huge exaggeration\". The aim now outlives the vote in either direction: frontrunner Gadi Eisenkot rules regime change out as unrealistic and would narrow the objective to dismantling the nuclear programme, Yair Lapid calls toppling Tehran realistic and urges bombing \"all the energy facilities, especially on Kharg Island\", and Naftali Bennett calls crushing Iran's government essential. Five senators led by Elizabeth Warren demanded CENTCOM declassify base-damage costs by 2 November, citing as many as 23 American service members killed and 861 wounded against a disclosed 17 and 440. The Houthis claimed strikes on Aramco at Yanbu and the Shaybah oilfield; Saudi Arabia did not confirm them, and Brent fell 2.08 percent to $107.57. A Houthi missile killed at least 53 at a Yemeni army camp in Shabwa. Lavrov reached Tehran and published nothing. Direction holds escalating; the thirty-day probability holds at 5.",
  implications: [
    {
      title: "The objective outlives the ballot, and the frontrunner would only narrow it",
      body:
        "Day 234 recorded two live readings of Israel's new war aim: a campaign promise priced for 27 October, or a redefinition that survives the vote. This cycle collapses the ambiguity toward durability. Netanyahu moved from a reported instruction to a personal undertaking — \"The regime must fall, and I will bring it down\", \"that is my plan\" — and simultaneously conceded the timeline, saying he doubts the regime falls before the election. Analytical judgment: under the multi-clock framework the negotiation-capacity clock is now constrained from both ends of the Israeli political system, not one. Gadi Eisenkot, the frontrunner, is the only principal who rules regime change out, and he replaces it with dismantling the nuclear programme by force — a narrower objective, not a negotiable one. Yair Lapid goes past the government, naming Kharg Island, Iran's principal crude export terminal, as a target no Israeli government has published. Naftali Bennett adds Qatar as an \"enemy\" — the state carrying Araghchi's seven-day plan. The Israel Democracy Institute's 65 to 70 percent of Jewish Israelis who say stopping the war did not serve national security is the constraint underneath all three positions. The objective-beyond-instrument prior therefore hardens rather than resolving, and acquires a second clause: no available Israeli election outcome returns the Iran file to capability denial, so every diplomatic track remains a holding action past 27 October. Netanyahu's own hedge — that a Washington \"very hostile to Israel\" could arrive within two years, and that Israel would \"also act independently\" — is a pre-commitment to unilateralism priced against the American calendar, not the Iranian one.",
    },
    {
      title: "Authorisation slips, claims outrun confirmation, and the price falls anyway",
      body:
        "Three instruments moved the wrong way for their sponsors. Cairo's authorisation slipped to 26 October with its own opposition demanding the mission's objectives, duration, cost and risk — the first time a prospective belligerent's legislature has priced the deployment rather than the pledge — so the fourth state stays prospective for a seventh day while the council decision stands unused. The Houthis claimed Aramco at Yanbu and the Shaybah oilfield, firing two of the Brent triggers carried in this file, and Brent fell 2.08 percent to $107.57 on a Russian sanctions waiver instead. Analytical judgment: the trigger list prices confirmation, not claims, and must be read that way — an unconfirmed claim against an unresponsive sovereign is a null event for the energy-infrastructure clock, however large the target. The flow data compounds it: Kpler, through Reuters, puts Gulf crude at about 8.5 million barrels a day over a week with at least ten confirmed vessel attacks, while a separate Kpler-sourced report has late-September Hormuz flows of 19.5 to 22.5 million above pre-war. One provider, two incompatible readings; neither is adopted. Against CENTCOM's 97 percent and \"it is open\" sits the IMO's instruction not to transit \"until we have guarantees\" and about 6,000 seafarers still trapped. Iran's Persian Gulf Strait Authority meanwhile converted its protection fee into a 122-to-132-ship blacklist with a removal procedure, which revives the toll-institutionalisation prior stalled since Day 45. The thirty-day probability holds at 5: Lavrov arrived in Tehran and published no readout, no mediation proposal and no answer to the seven-day plan.",
    },
    {
      title: "Taiwan: no fresh development, and a tenth day of silence",
      body:
        "No fresh Taiwan-relevant development broke this cycle; prior assessments are unchanged. The Alaska arrangement stands where Day 234 left it — CPC Corporation taking 30 percent of output, about 6 million tonnes a year over 20 years, investment up to $4.4 billion, against a project costed at $44.5 to $54.5 billion with a 1,300-kilometre pipeline and earliest supply in 2032, with ownership stakes, final price, investment structure and purchasing obligations all still open. Analytical judgment: the substitution-chain prior holds unchanged, and the week's price action sharpens rather than eases it. Brent retreating to $107.57 on an American waiver of Russian sanctions is relief sourced from a political decision in Washington, not from restored Gulf supply, which is precisely the dependency an eleven-day gas buffer cannot hedge. Ras Laffan's audited three-to-five-year repair horizon is untouched by it, and QatarEnergy remains under force majeure on exports. The non-response prior extends to a tenth consecutive cycle: U-Ming, Global Energy Maritime and every Taipei ministry remain silent on the GEM NO.2 identification, even as CENTCOM this cycle named the GFS Pride — demonstrating that hulls are named when a belligerent chooses to name them.",
    },
  ],
  casualtyNotes: {
    us:
      "A twentieth consecutive cycle with nothing disclosed, recorded as an absence of disclosure. Five senators published as many as 23 killed and 861 wounded from a classified CENTCOM briefing and demanded unclassified answers by 2 November; the figure is held as a fifth series and is neither merged into nor differenced against the disclosed 17 and 440.",
    israel:
      "No addition on the war series, on the cycle the stated objective moved into the first person. Gaza deaths stay on their parallel series; the Taybeh diplomat assault and the Levine attack remain under investigation, with Netanyahu calling the international reaction \"a huge exaggeration\".",
    iran:
      "No new official war toll and a forty-first day without a confirmed Iranian attack on a host state's territory. HRANA's 2,003 and the 47-women disaggregation are uncontested for a fourth day; the four execution series remain unmerged.",
    other:
      "No addition to the rolled-up line, which is materially understated. Shabwa alone carries five tolls between 18 and 53 killed; Najran, Saada and the AH-6i officers carry beneath the line; and the claimed Yanbu, Shaybah, King Khalid and Abha strikes carry no casualty figure. None adopted, none summed.",
  },
};

export default data;
