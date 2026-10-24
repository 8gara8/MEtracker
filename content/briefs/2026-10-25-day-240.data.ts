import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING. The president neither confirmed nor corrected his ambassador's claim that a strike could come this weekend, withdrew his own 9 October pledge of no strikes before the midterms, and said \"we could take the whole country\" and \"the Hormuz Strait is ours\".",
      risk7d:
        "Extreme and worsening. The only dated American commitment on the board has been voided by its author, two days before Israel votes and with Egypt's troop-authorisation vote tomorrow — against which Israel's own chief of staff was reported to see no operational need to strike before the ballot.",
      spillover:
        "Critical. Oil from the Gem No.2 has closed every beach in Ras Al Khaimah and one in Sharjah on top of Umm Al Quwain's, Iranian officials say they hold detailed plans to cut Gulf undersea cables, and the State Department is thinning four more embassies.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Donald Trump via The Times of Israel and AP",
      event: "Trump answers Barrack by neither endorsing nor denying him, and withdraws his own pledge in the same breath",
      summary:
        "Asked about his ambassador to Türkiye saying a strike could come this weekend, the president said: \"That's my ambassador to Turkey. He's a pretty powerful man, I guess\", and \"if that's the case, I don't know anything about it.\" Asked whether he would strike before the midterms despite posting that he would not, he said: \"Do you really think I'm going to tell you if I'm going to do it? And there's a possibility I will. There's also a possibility we'll have a nice, big, beautiful agreement.\"",
      impact:
        "The Day 239 prior asked whether Barrack would be corrected, repeated or disowned. He was none of the three. The 9 October pledge — the only dated American commitment this file carried — was not reversed but declared unanswerable by its author, which leaves the leaked November plan and the ambassador's weekend pointing at different weeks with nothing anchoring either.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: "Zamir and Eisenkot via Channel 13 and The Times of Israel",
      event: "Israel's own chief of staff says there is no operational need to strike before the ballot",
      summary:
        "Channel 13 reported that IDF Chief of Staff Lt. Gen. Eyal Zamir told a recent private meeting: \"We do not see any indications of a need to strike Iran before the election\", adding \"if we determine that a strike on Iran is necessary, we will carry it out.\" A separate report said he warned American generals that a strike in the coming weeks could force the 27 October election to be postponed, because Iran would answer with massive missile fire. Eisenkot said publicly there is \"no direct, immediate threat\" requiring war before the vote.",
      impact:
        "Netanyahu, who four days earlier demanded the regime's elimination and was reported to have ordered the IDF and Mossad to pursue it, called the reports \"incorrect\". The divergence Day 239 placed between two allies now runs inside each of them, and in Israel it runs between the prime minister and the institution that would execute.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump via CBS News",
      event: "The maximal American statement of the war, made in passing",
      summary:
        "The president said on Friday: \"We could take the whole country\", and of the Strait of Hormuz, \"the Hormuz Strait is ours.\" He also claimed more oil is moving through the Strait than before the war — his claim, not a reported figure, and one that sits beside three independent providers placing flows at or near pre-conflict levels at elevated shipping rates.",
      impact:
        "Neither the territorial claim nor the claim to the Strait has been restated, qualified or withdrawn by any American department, and neither appears in any published planning document. They are logged as presidential statements, not policy, and form a second unreconciled American pair against Barrack's \"the consequence won't be regime change\" from the same week.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: "Trump, Pezeshkian and Amiri Moghadam via CBS News and The Times of Israel",
      event: "Three deal signals land in one cycle, from both capitals, for the first time in weeks",
      summary:
        "Trump named \"a nice, big, beautiful agreement\" as a live possibility while asking whether Iran would hold one. Pezeshkian, on state television, accused Washington of disrupting talks — \"these scoundrels broke the rules of the game\" — but said the supreme leader had told officials to \"go and finish [the deal]\". Ambassador Reza Amiri Moghadam said Iran remains open to talks under the June Pakistan-brokered interim deal and, of the Mecca Pact: \"We will study the Mecca Agreement, and if it is good, we will support it.\"",
      impact:
        "That is the first Iranian response of any kind to the Mecca Pact, which this file has carried only through Türkiye's referral of it to parliament. All three signals are verbal and none is a mechanism, and Washington has still not addressed Araghchi's seven-day proposal on its own terms — but three reciprocal openings in one cycle is a change in kind from the flat denial of Day 238.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "The UAE environment ministry and Ras Al Khaimah via Arab News; Martin Kelly via Reuters",
      event: "The spill closes beaches in two more emirates, and a named analyst attributes it where no government will",
      summary:
        "Ras Al Khaimah closed all of its beaches until further notice on Saturday, by order of the Public Services Department through Police General Headquarters; Sharjah closed Al Hamriyah Beach as a precaution; Umm Al Quwain's closures stand under the environment ministry's 22 October order. Residents of Sharjah, Ajman and Umm Al Quwain reported unusual odours, which the ministry says pose no health risk. A researcher put the slick at about 160 square kilometres, and a satellite image dated 19 October already shows it.",
      impact:
        "UAE authorities have still not named the tanker or the cause. Martin Kelly, chief executive of Orbital Risk Intelligence, told Reuters the spill came from the Gem No.2, the Taiwanese-owned VLCC struck on 9 October. Attribution in this war is now a commercial product: a risk firm names the hull while the state running the cleanup will not.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "The State Department, Clayton and Waltz via CBS News and the FT",
      event: "Four more missions thinned, a named intelligence warning, and the first American estimate of the war's length",
      summary:
        "The State Department will cut staffing at its embassies in Jordan, Lebanon, Qatar and the UAE, after non-essential staff in Saudi Arabia were ordered out earlier in the week; travel advisories were updated for 14 Middle East countries. Director of National Intelligence Jay Clayton warned in a memo that Iran has \"substantially increased efforts to target U.S. personnel\" abroad. US Ambassador to the UN Mike Waltz told the Financial Times the war could last another year, saying \"I'm not going to put out hypotheticals.\"",
      impact:
        "The four named countries convert the reporting on \"further Gulf missions\" that Tommy Pigott called \"inaccurate\" into a confirmed, widening instrument. Waltz's estimate is the first duration figure from any American official in this file, several times the longest horizon in any published strike package.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: "Reuters, Kitco, the Energy Department and the EIA via FinanceFeeds; CBS News",
      event: "Brent settles at its highest since 29 April, a fifth \"highest since\" date enters the file, and Washington taps the reserve",
      summary:
        "Brent settled Friday at $116.72, up $3.55 or 3.14 percent and described as the highest settle since 29 April; WTI settled at $103.27, up 3.8 percent. Reuters put the week's gain at about 6 percent for Brent and 2.3 percent for WTI, CNBC at 2 percent. CBS News separately called Brent's move 3.5 percent to over $117, \"its highest since March\", with Thursday's $112 the highest since 18 May — against Day 239's \"highest since 4 May\". Brent was under $97 at the start of October.",
      impact:
        "Five distinct \"highest since\" dates are now carried for one week and none is differenced against another. The Energy Department authorised an emergency SPR exchange of up to 400,000 barrels, which activates the oil-reserve clock for the first time this phase. Named forecasts run from Goldman's December $90 and HSBC's raised $90 through UBS at $100 and the EIA and Morgan Stanley at $105 to HSBC's $120 stalemate case.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Aramco, the Saudi-led coalition and the Houthi health ministry via CBS News",
      event: "Missiles at Taif and Yanbu, a claim of 17 dead that Riyadh has not answered, and King Khalid reopens today",
      summary:
        "Saudi forces intercepted two Houthi missiles aimed at Taif and at Yanbu, the Red Sea oil export hub. The Houthis claimed their strikes killed 17 people; the claim is unverified and Riyadh has published nothing against it. The Houthi-run health ministry said two days of strikes on Yemen killed nine including women and children, five in Sanaa and four in Hiba. Riyadh's King Khalid International Airport resumes flights today after a two-week closure, Terminal 1 domestic and Terminal 2 international by national carriers.",
      impact:
        "Saudi Aramco said East-West pipeline capacity has risen from 2 million to 7 million barrels a day — the largest single piece of Hormuz-bypass capacity recorded in this file, and a direct answer to the bypass-as-target prior. Saudi Arabia postponed the UN World Data Forum to 2027, joining the FII; the UN reported Taiz cut off for 20 days with water production down about half.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Abdollahi, Mohebbi and Iranian state TV via CBS News",
      event: "Tehran's military voices rule out any American presence, call the threats theatre, and name the cables again",
      summary:
        "Armed forces chief of staff Ali Abdollahi said: \"We will not allow U.S. military ships in the Persian Gulf under any circumstances and at any time\", and that Trump \"will take that dream to his grave.\" IRGC spokesman Hossein Mohebbi said American threats are largely for media consumption — \"the enemy itself knows better than anyone that it cannot carry out effective operations under current conditions\" — and cited Trump's pledge to wait until after the midterms, the pledge the president withdrew the same day. Iranian state television said non-compliant vessel movement was \"completely halted\".",
      impact:
        "Iranian officials said Tehran holds detailed plans to strike Gulf undersea cables if the war resumes, advancing Mohsen Rezaei's naming of cables, data centres and AI facilities from a threat to a stated plan — and still drawing no response from any operator, regulator, insurer or Gulf government, a fifth cycle. An explosive-laden drone struck an Iranian Kurdish opposition camp north-east of Erbil.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "CBS News; the Central Bank of Iran and Iran HRM via the NCRI",
      event: "The supreme leader has not been seen since the war began, and the inflation series splits",
      summary:
        "Mojtaba Khamenei, who has not appeared publicly since the war's first day and reportedly communicates only in writing, met the judiciary chief to discuss \"compensation for material and moral damages\"; his daughter, granddaughter, son-in-law and daughter-in-law were killed in the first-day strike. The Supreme Court upheld Manouchehr Fallah's death sentence for PMOI membership and referred it to the Implementation of Verdicts Office in Rasht. UN Special Rapporteur Leopoldo Maldonado Gutiérrez joined the prisoners' hunger strike for 24 hours on 20 October.",
      impact:
        "Central Bank figures put point-to-point inflation at 83.8 percent in September against 84.4 in August — against the 89.8 percent this file carries, a sixth live contested count. Economist Lotfali Aghili called the decline \"very slight\". Pezeshkian said many \"are struggling to put food on the table\" and plans to meet Putin in Moscow next week.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: '+0 disclosed',
      status:
        "A twenty-fifth consecutive cycle with nothing disclosed, recorded as an absence of disclosure rather than a lull. Senator Warren's 16 October letter to Admiral Brad Cooper carries unanswered with eight days to the 2 November deadline. The DNI's warning of substantially increased Iranian efforts to target US personnel abroad is a threat assessment, not a casualty, and the senators' fifth series is still neither merged nor differenced.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition on the war series, two days from the ballot, on the cycle Israel's own chief of staff was reported to see no operational need to strike Iran before it and to have warned that a strike could force the vote's postponement. Gaza deaths stay on their parallel series. The military is at its highest state of alert with leave cancelled.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll, and the denied Konarak claims stay held apart. A forty-sixth day with no confirmed Iranian attack on a host state's territory. The internal ledger grows instead: Manouchehr Fallah's death sentence was upheld, and the four unmerged execution series carried from Day 239 stand unreconciled.",
    },
    other: {
      cumulative: "KIA: 3,701+ · WIA: 11,186+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0 adopted',
      status:
        "No addition adopted. The Houthi claim of 17 killed in Saudi Arabia is unverified, Riyadh has published nothing against it, and it is not adopted. The Houthi-run health ministry's nine dead in Sanaa and Hiba are recorded as that ministry's figure and held apart. UKMTO's 77 crew injured or killed remains a combined count on its own series, and the claimed Yanbu, King Khalid and Abha strikes still carry no figure.",
    },
  },
  exec:
    "Asked on Friday about his ambassador's claim that a strike could come this weekend, the president said: \"That's my ambassador to Turkey. He's a pretty powerful man, I guess\", and added, \"If that's the case, I don't know anything about it.\" Barrack was neither corrected nor confirmed. In the same remarks Trump dismantled his own pledge of 9 October, saying of a strike before the midterms: \"Do you really think I'm going to tell you if I'm going to do it? And there's a possibility I will. There's also a possibility we'll have a nice, big, beautiful agreement.\" He also said \"we could take the whole country\" and \"the Hormuz Strait is ours\", and told a Florida rally \"we may do another little Epic Fury\". Against all of it, Israel's chief of staff Eyal Zamir was reported to have told a private meeting that he sees no operational need to strike Iran before Tuesday's ballot, and to have warned American generals that a strike in the coming weeks could force the election to be postponed; Netanyahu's main rival said the same in public, and Netanyahu called the reports \"incorrect\". The divergence Day 239 placed between two allies now runs inside each of them. Three deal signals landed in one cycle: Trump's \"beautiful agreement\", Pezeshkian relaying the supreme leader's instruction to \"go and finish it\", and Iran's first response of any kind to the Mecca Pact. The weekend Barrack named passed its first day without a strike. Brent settled at $116.72 and Washington tapped the reserve. Oil from the Gem No.2 closed beaches in two more emirates. Direction holds escalating.",
  implications: [
    {
      title: "The president answered the question this file asked, and the answer was a third option nobody had budgeted for",
      body:
        "Day 239 set the test precisely: an ambassador without the Iran portfolio had placed the strike window at this weekend, and the signal would be whether Washington corrected, repeated or disowned him. Trump did none of the three. \"He's a pretty powerful man, I guess\" neither ratifies Barrack nor repudiates him, and \"if that's the case, I don't know anything about it\" declines to say whether the case obtains. Analytical judgment: under the multi-clock framework the political-will clock has stopped emitting a readable signal at all. The president then withdrew the only dated American commitment on the board — the 9 October pledge of no strikes before 3 November — not by reversing it but by declaring the question unanswerable: \"Do you really think I'm going to tell you if I'm going to do it?\" The two-postures-one-capital prior has to be upgraded. It is no longer a pledge, a leaked plan and an ambassador held in tension; the pledge has been voided by its author, which leaves the leaked plan and the ambassador pointing at different weeks with nothing anchoring either. The planning-is-not-decision prior still governs, and the force flow still has not arrived: grade by tasking, munitions movement and carrier position. But the calendar has lost its only fixed point, and the loss was deliberate.",
    },
    {
      title: "Both allies are now split internally, and in Israel the split is between the prime minister and his own general staff",
      body:
        "Netanyahu told an officers' graduation that Israel must \"complete the elimination of the Iranian regime\" and was reported to have ordered the IDF and the Mossad to pursue it. His chief of staff was then reported to have said, privately, \"we do not see any indications of a need to strike Iran before the election\", and to have warned American generals that a strike in the coming weeks could force the ballot to be postponed because Iran would answer with massive missile fire. Eisenkot said the same publicly; Netanyahu called the reports \"incorrect\". Analytical judgment: the divergent-objectives prior is superseded by a sharper one. The disagreement is no longer only between Washington and Jerusalem about the war's object; it is inside each capital, between the political principal and the institution that would execute. Zamir's warning is the more serious instrument, because it prices the strike in the currency Netanyahu cannot discount — the election itself. The coalition-cohesion prior hardens again, and the asymmetry is now informative: Barrack's \"won't be regime change\" was never disowned either, so in both capitals the restraining voice holds the professional brief and the maximal voice holds the ballot.",
    },
    {
      title: "Taiwan: the Gem No.2 is finally attributed, by a company rather than a state, and the cable threat becomes a plan",
      body:
        "Ras Al Khaimah closed every beach it has; Sharjah closed Al Hamriyah; Umm Al Quwain's closures stand. Three emirates are now managing a slick a researcher puts at about 160 square kilometres, and no government will say where it came from. Martin Kelly of Orbital Risk Intelligence told Reuters it came from the Gem No.2 — the Taiwanese-owned VLCC this file has carried as unacknowledged for fourteen cycles. Analytical judgment: the consequence-without-cause prior holds and the attribution-without-instrument prior is answered from the wrong direction. The vessel has been named by a risk-intelligence firm and by satellite analysts while the state handling the cleanup declines to name it, which means attribution in this war is now a commercial product. Separately, Iranian officials said Tehran holds detailed plans to strike Gulf undersea cables — advancing Rezaei's naming of cables, data centres and AI facilities from a threat to a plan, with a fifth cycle of silence from every operator, regulator, insurer and Gulf government. Taiwan has all three asset classes and a hull on an Emirati beach. No fresh Taipei development: the DGBAS consultation answer and the NT$607.6 billion supplementary budget stand unchanged from Day 239.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-fifth consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The senators' figure of up to 23 killed and 861 wounded is held as a fifth series with eight days to the 2 November deadline and no CENTCOM response.",
    israel:
      "No addition on the war series, two days from the ballot, with the military at its highest state of alert and leave cancelled. Gaza deaths stay on their parallel series.",
    iran:
      "No new official war toll, and the Konarak claims stay unadded. The internal-front ledger lengthens with Manouchehr Fallah's upheld death sentence, and the four unmerged execution series stand unreconciled.",
    other:
      "No addition adopted. The Houthi claim of 17 killed in Saudi Arabia is unverified and unadopted, and the Houthi-run health ministry's nine dead in Yemen are held as that ministry's figure.",
  },
};

export default data;
