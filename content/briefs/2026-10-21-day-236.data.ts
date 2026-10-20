import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the signals now conflict inside one capital. The US defense secretary met Netanyahu unannounced at Uvda to discuss countering regional threats \"offensively and defensively\" while the Pentagon said nothing, and a GBU-43 package is reported prepared. Trump told a Kansas rally the war is won and the US \"could leave right now\".",
      risk7d:
        "Extreme and worsening. Fars reports a US airstrike on the Konarak naval base wounding two Iranian personnel, with Washington silent after a month of prompt CENTCOM denials; the IRGC claims three more mined tankers and threatens seven undersea internet cables with \"new weapons\". Netanyahu's reported pledge not to strike before 27 October expires in six days.",
      spillover:
        "Critical. Brent erased the waiver dip to a five-month $111.30, the Shabwa toll reached 73 killed with 14 missing, Etihad cancelled Abu Dhabi routes to three Saudi cities, and Riyadh postponed its investor conference to 2027. Trump threatened to leave Europe over its absence on Iran.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Doron Spielman and three Israeli officials via Reuters, Air Force Times and The Washington Times; Axios via Gulf News",
      event: "Hegseth meets Netanyahu unannounced at Uvda and the Pentagon says nothing",
      summary:
        "Defense Secretary Pete Hegseth met Netanyahu at Uvda Air Force Base in the southern Negev on Monday on a visit announced to no one; three Israeli officials disclosed it and spokesperson Doron Spielman confirmed it. They discussed regional threats and how the two countries can counter them \"offensively and defensively\", the thousands of US personnel in Israel, and Trump's support for Netanyahu. Axios reported the meeting came amid discussion of resuming major combat.",
      impact:
        "The disclosure came from a foreign government, not from Washington, and the Pentagon has still not commented on its own secretary's travel. \"Offensively and defensively\" is planning vocabulary, and Netanyahu is reported to have told Trump they \"have a job to finish\".",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Trump at a Kansas rally and unnamed sources via Gulf News; Sen. Bernie Sanders",
      event: "A maximum-munition package is reported prepared as the President says the war is already won",
      summary:
        "Sources say the Pentagon has prepared plans to use the \"mother of all bombs\" against Iranian military sites if Trump orders it; the White House declined to comment on sensitive planning. At a Kansas rally Trump made the opposite case: the United States is winning, it \"could leave right now\", Iran has no navy or air force left, and 229 Iranian fighter jets sit scattered on runways. He has said he will not strike before the midterms. Bernie Sanders urged him to end the war immediately.",
      impact:
        "Two incompatible postures were published on one cycle by one administration. Both constraints on timing — Trump's midterm line and Netanyahu's reported pre-election pledge — are self-imposed rather than instruments, and the Israeli one expires in six days.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Iran's IRGC via Sepah News, state TV, Al Arabiya, AFP and Tasnim; the JMIC, CENTCOM and UKMTO via gCaptain and Euronews",
      event: "The IRGC claims three more mined tankers; the JMIC twice finds no substantiation",
      summary:
        "An IRGC statement said \"Two violating oil tankers were set ablaze and halted\" by naval mines at an \"illegal crossing point\" in the southern strait near the Omani coast, on a route Tehran unilaterally deems unauthorised; a later statement said a third tanker \"exploded and caught fire\", carrying over two million barrels with navigation systems deactivated. No vessel was named and no strike date given. gCaptain counts ten to twelve such claims since 18 July. The JMIC found no substantiation on 15 and 18 October, holds the strait at SEVERE, and CENTCOM has called the claims false.",
      impact:
        "Re-mining of Hormuz stays a listed Brent trigger, claimed and unconfirmed. The IRGC also claimed downing a US MQ-9, dismissed by a US official; UKMTO logged a tanker-military incident 121 nautical miles east of Duqm with no damage. Absence of proof is not absence of mines.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Brig. Gen. Hossein Mohebi via Saudi Gazette, Euronews and Gulf News",
      event: "A new target class: the IRGC threatens seven undersea internet cables",
      summary:
        "IRGC spokesman Brig. Gen. Hossein Mohebi — rendered Hossein Mojabi by Euronews — threatened on Monday to target the undersea internet cables running through the Gulf and the Strait of Hormuz, putting the number at seven and saying \"new weapons will be unveiled\", with the stated aim of removing the US military presence from the region. The threat follows earlier statements from Mohsen Rezaei of the Supreme National Security Council. No cable operator, regulator or Gulf government has responded.",
      impact:
        "A target class with no interceptor, no insurer and no published deterrent. This file opens a data-infrastructure clock rather than folding the threat into the energy-infrastructure clock, and records the contested rendering of the spokesman's name.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Fars and an Iranian Navy spokesman via Euronews and Gulf News; IranWire",
      event: "Fars reports a US airstrike on Konarak and Washington says nothing",
      summary:
        "Iranian domestic outlets including the state-affiliated Fars agency reported a US airstrike on the naval base at Konarak in Sistan and Baluchistan province on Monday, targeting an air-defence installation and wounding two military personnel; an Iranian Navy spokesman described two US projectiles striking a 35mm cannon and injuring two navy personnel. Washington has not commented and CENTCOM has not confirmed responsibility. IranWire dates the last US strikes on military and IRGC targets inside Iran to 1 September 2026.",
      impact:
        "If confirmed, a fifty-day interval ended while the public argument was still about whether to resume. The absence of a CENTCOM denial is the notable part, because CENTCOM has denied Iranian claims promptly and specifically all month. The two wounded are held apart, not added to the Iranian official series.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "Reuters and Duncan Oil via The National, CNBC and Business Recorder; Gulf News",
      event: "Brent erases the waiver dip and sets a five-month high; the prints disagree",
      summary:
        "Brent rose 1.52 percent to $111.30 at 2:27pm UAE time, reported in the same piece at $111.20, after first reaching $110 on Friday since mid-May; WTI rose 2.30 percent to $100.80. Gulf News separately put Brent above $109.80, WTI at $98.71 and Murban at $111.10; other series printed $111.05 and $111.75. Drivers cited are Monday's six claimed Houthi attacks, constrained Gulf supply and inflation fears.",
      impact:
        "The $107.57 recorded on Day 235 after Trump's Russian sanctions waiver is fully erased inside one cycle, and the price now sits above its pre-waiver level. Relief sourced from Washington's own decisions is confirmed as no evidence that Gulf risk has eased. The competing prints are held apart.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "Shabwa's provincial media office and Governor Awad al-Wazir via The Express Tribune and Reuters; Yahya Saree; Saudi Gazette",
      event: "The Shabwa toll reaches 73 with 14 missing, a sixth published figure",
      summary:
        "Shabwa's provincial media office raised the toll from Monday's strike on a Yemeni government training camp to 73 killed with 14 missing; Governor Awad al-Wazir put the wounded above 200. Local authorities said three ballistic missiles hit security forces during training; Reuters verified video of the casualties. Houthi military spokesman Yahya Saree said \"the camp was run by Saudi forces\"; Saudi authorities did not immediately respond. The published series now runs 18, 20, more than 30, 50, 53 and 73.",
      impact:
        "Six figures for one event inside thirty-six hours is the contested-count prior at its sharpest yet. None is adopted into the rolled-up other-actor line and none is summed, which leaves that line materially understated and says so. Saree's attribution to Saudi command remains unanswered by Riyadh.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'high',
      source: "Sergey Lavrov and the Russian Foreign Ministry via The Jerusalem Post and Al Jazeera; Asim Munir and Sajjad Haider Khan via Arab News and IRNA; Andreas Krieg via Al Jazeera",
      event: "Lavrov's readout arrives without a mechanism; Munir reaches Tehran on his fifth visit",
      summary:
        "Lavrov met Pezeshkian and Araghchi, said Moscow will keep its economic and investment agreements despite the \"challenging situation\", cited Bushehr and Rasht-Astara work continuing, and said Russia is ready to help settle a conflict it calls \"artificially created\" — with no mechanism or timetable. Asim Munir arrived Tuesday evening with Mohsin Naqvi; no outcome published. Andreas Krieg of King's College London called the Islamabad MoU \"politically alive\" but \"operationally dead\".",
      impact:
        "The Day 235 question of whether Lavrov would publish anything is answered, and the answer is economic continuity plus political endorsement without a track. The MoU's fourteen points, including the phased release of about $24bn, expired in mid-August unextended. Iran says its seven-day plan and Hormuz conditions remain available.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Walla and Panel4All via The Jerusalem Post; Zman Yisrael/Tatika and Channel 13/Madad via The Times of Israel",
      event: "Fresh polling supersedes the 51-51 line and neither bloc reaches 61",
      summary:
        "A Walla poll published Tuesday, fielded Monday on the Panel4All panel with 601 respondents and a 4 percent error margin, puts Yashar on 23 and Likud on 19, with B'Yachad 14. The coalition bloc stands at 48, down one, against 54 for the opposition, with 61 needed. The poll followed Benny Gantz's Blue and White withdrawing. Zman Yisrael/Tatika of 14-15 October had 54 against 49; Channel 13/Madad had Likud and allies on 51 against 50.",
      impact:
        "The Maariv/Lazar reading of both blocs on 51, carried since Day 234, is superseded, and Eisenkot's lead widens to four seats. The three new series are held apart. No outcome returns the Iran file to capability denial, so the ballot reorders the coalition rather than the objective.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Etihad notices and Gulf News; CNBC; the Saudi and Turkish foreign ministries; Adm. Brad Cooper and Chris Wright via Gulf News and The National",
      event: "The cancellation wall reaches Emirati metal and Riyadh postpones its investor conference to 2027",
      summary:
        "Etihad cancelled its Abu Dhabi routes to Dammam, Riyadh and Jeddah through 24 October, and UAE air travel saw cancellations and delays on 19 October with UAE-Saudi routes hardest hit. Saudi Arabia postponed its flagship investor conference to 2027. Cooper said the strait \"remains open for business\", with about 400 transits in the previous week against gCaptain's 254 to 14 October and traffic 70 percent below pre-war. Chris Wright said Washington would let sanctioned tankers ship legitimately; Kpler found only 24 of nearly 160 could return.",
      impact:
        "The schedule wall moves onto Emirati carriers rather than Saudi airports alone, and the postponement dates the unsourced conference item carried on Day 235. Every maritime and sanctions mechanic published this cycle contradicts another published the same day.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: '+0 disclosed',
      status:
        "A twenty-first consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure. The senators' fifth series of up to 23 killed and 861 wounded, drawn from a classified CENTCOM briefing, carries unanswered with eleven days to the 2 November deadline; CENTCOM has still not responded. The Iraq theatre's closing series stands at 123 killed and 499 wounded.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition on the war series, on the cycle the US defense secretary arrived unannounced at Uvda to discuss countering regional threats offensively and defensively. Gaza deaths stay on their parallel series. Netanyahu is reported to have said he is not seeking to attack Iran before the 27 October ballot, a self-imposed constraint expiring in six days.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll. Fars and an Iranian Navy spokesman report two personnel wounded by a US strike on the Konarak naval base; Washington has not confirmed it and the two are held apart rather than added. A forty-second day with no confirmed Iranian attack on a host state's territory. HRANA's audit of at least 2,003 executions and its 47-women disaggregation remain uncontested by Tehran.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No addition to the rolled-up line, which is materially understated and recorded as such. Shabwa alone now carries six published tolls between 18 and 73 killed, with 14 missing and more than 200 wounded, and Saree's claim that the camp was Saudi-run is unanswered. The Najran six and the Saada nine carry beneath the line, and the claimed Yanbu and Shaybah strikes still carry no casualty figure. None adopted, none summed.",
    },
  },
  exec:
    "Defense Secretary Pete Hegseth met Benjamin Netanyahu at Uvda Air Force Base in the Negev on an unannounced visit, discussing Iran and how the two countries can counter regional threats \"offensively and defensively\"; the Pentagon has not commented, Axios reported the meeting came amid discussion of resuming major combat, and Netanyahu is reported to have told Trump they \"have a job to finish\". Sources say the Pentagon has prepared plans to use the \"mother of all bombs\" against Iranian military sites if ordered. Trump said the opposite at a Kansas rally — that the United States is winning and \"could leave right now\" — and has said he will not strike before the November midterms. The IRGC said its mines set three more tankers ablaze south of the Strait of Hormuz, naming none and placing them on routes Tehran unilaterally deems unauthorised; the Joint Maritime Information Centre has twice found no substantiation for such claims and holds the strait at SEVERE. IRGC spokesman Hossein Mohebi threatened seven undersea internet cables in the Gulf and the Strait and said \"new weapons will be unveiled\". Fars reported a US airstrike on the Konarak naval base wounding two Iranian personnel; Washington has not commented. Brent erased Monday's waiver-driven fall to trade at $111.30, a five-month high. The Shabwa toll rose to 73 killed with 14 missing. Lavrov's Tehran visit finally produced a readout — economic pacts maintained, an offer to help settle an \"artificially created\" conflict, no mechanism — and Pakistan's Asim Munir arrived. Direction holds escalating; the thirty-day probability holds at 5.",
  implications: [
    {
      title: "One administration published two incompatible war postures, and the discriminating evidence is a base in Sistan and Baluchistan",
      body:
        "The Hegseth visit and the Kansas rally are the same government speaking on the same cycle. Uvda was unannounced, the Pentagon has still not commented, the disclosure came from three Israeli officials rather than from Washington, and the agenda Spielman described — countering regional threats \"offensively and defensively\" — is the vocabulary of planning, not of winding down. Against it sits a president telling a rally the war is won and the United States \"could leave right now\", and a reported Pentagon package for the largest conventional munition in the inventory. Analytical judgment: under the multi-clock framework the political-will clock and the active-deadline clock are now running in opposite directions inside one capital, and rhetoric cannot discriminate between them. The Konarak claim is the test. Fars and an Iranian Navy spokesman report two personnel wounded by US fire on an air-defence installation; Washington is silent; IranWire dates the last US strikes inside Iran to 1 September. If confirmed, a fifty-day interval has ended quietly while the public argument was about whether to resume at all — which is how this war has restarted before. The absence of a CENTCOM denial is the notable part, because CENTCOM has denied Iranian claims promptly and specifically all month. Two further constraints bracket the window: Trump has said he will not strike before the midterms, and Netanyahu is reported to have said he will not before 27 October. Both are self-imposed, neither is an instrument, and the second expires in six days.",
    },
    {
      title: "The claim ledger lengthens, the price rejects the waiver, and a new target class is announced",
      body:
        "Day 235 recorded a $2.29 fall to $107.57 on an American waiver of Russian sanctions and warned that relief sourced from Washington's own decisions is not evidence that Gulf risk has eased. That proposition was tested in one cycle and held: Brent is back at $111.30, a five-month high, above where it stood before the waiver. Analytical judgment: the relief-from-the-wrong-source prior is confirmed and may now be treated as governing. The claim-is-not-confirmation prior is also reinforced rather than resolved. The IRGC added three unnamed tankers to a ledger gCaptain counts at ten to twelve mine claims since 18 July, with no vessel names and no strike dates; the JMIC found no substantiation twice this month and CENTCOM has called the claims false — yet the strait sits at SEVERE with a mining warning attached, so the absence of proof is not the absence of mines. Re-mining of Hormuz remains a listed Brent trigger and remains claimed and unconfirmed. The mechanics contradict each other at every level: Cooper's 400 transits and \"open for business\" against gCaptain's 254 and 70 percent below pre-war; Wright's permission for sanctioned tankers against Kpler's finding that only 24 of nearly 160 can actually return. The genuinely new item is the IRGC's threat to seven undersea internet cables with \"new weapons\" unveiled — a target class with no interceptor, no insurer and no published instrument against it, opened here as a data-infrastructure clock rather than folded into the energy one.",
    },
    {
      title: "Taiwan: the Alaska talks advance, and the cable threat prices the dependency the gas deal cannot",
      body:
        "Taipei Times reports the Taiwan-Alaska LNG talks advancing, with CPC Corporation's 30 percent of output, about 6 million tonnes a year over 20 years and investment up to $4.4 billion still set against a project costed at $44.5 to $54.5 billion, a 1,300-kilometre pipeline and earliest supply in 2032; ownership stakes, final price, investment structure and purchasing obligations remain open. Analytical judgment: the substitution-chain prior holds, and this cycle supplies the sharper reading. Brent's reversal to a five-month high within one cycle of an American political decision demonstrates that the price relief Taipei is implicitly hedging cannot be bought from Washington, and the eleven-day gas buffer still sits downstream of Ras Laffan's audited three-to-five-year hole with QatarEnergy under force majeure. The IRGC's subsea-cable threat is the more direct transfer. Taiwan's own exposure to subsea cable severance is an established national-security file, and an announced willingness to cut seven cables in the Gulf establishes the tactic as declared state policy rather than deniable accident — a precedent that travels regardless of whether a single Gulf cable is touched. The non-response prior extends to an eleventh consecutive cycle: U-Ming, Global Energy Maritime and every Taipei ministry remain silent on the GEM NO.2 identification, while the IRGC has now named no vessel in twelve claims.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-first consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The senators' figure of up to 23 killed and 861 wounded is held as a fifth series, neither merged into nor differenced against the disclosed 17 and 440, with eleven days left to the 2 November deadline and no CENTCOM response.",
    israel:
      "No addition on the war series. Gaza deaths stay on their parallel series; the Taybeh diplomat assault and the Levine attack remain under investigation. The reported pledge not to strike Iran before 27 October is self-imposed and expires in six days.",
    iran:
      "No new official war toll. The two personnel reported wounded at Konarak are an Iranian claim against American silence and are not added. A forty-second day without a confirmed Iranian attack on a host state's territory; the four execution series remain unmerged and uncontested.",
    other:
      "No addition to the rolled-up line, which is materially understated. Shabwa now carries six tolls between 18 and 73 killed with 14 missing and 200-plus wounded; Najran and Saada carry beneath the line; the claimed Yanbu and Shaybah strikes carry no casualty figure. None adopted, none summed.",
  },
};

export default data;
