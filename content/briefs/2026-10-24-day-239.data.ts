import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING. The US ambassador to Türkiye said a strike on Iran this weekend was \"absolutely\" possible, Netanyahu was reported to have ordered the IDF and Mossad to pursue the overthrow of Tehran's leadership, and Trump dismissed the IRGC's hull claims as fabrication.",
      risk7d:
        "Extreme and worsening. A named American principal has placed the window before the midterms rather than after them, an outlet close to Iran's security council warned of an \"October Surprise\" before Tuesday's Israeli ballot, and Araghchi said the country is \"truly in a wartime situation\".",
      spillover:
        "Critical. Oil is ashore along more than 60 square miles of the Khor Al Beidah peninsula with the source officially unnamed, Umm Al Quwain's beaches are closed, UKMTO logged five incidents and a fresh strike off Limah, and Gulf embassy departures are under way.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Tom Barrack via Arab News",
      event: "An American ambassador puts the strike window at this weekend, and he is not the Iran envoy",
      summary:
        "Tom Barrack, US ambassador to Türkiye and Washington's point man on Syria, was asked on Friday on a podcast hosted by Mario Nawfal, while visiting the Gulf, whether a strike on Iran could come this weekend. He answered: \"Could there be a strike this weekend? Absolutely.\" He said the president is \"open and available and accessible to a deal\" and that the United States had \"been at the table for months and months and months\".",
      impact:
        "Barrack holds no Iran portfolio, so this is a named American principal speaking outside his brief rather than policy. It is nonetheless the first American voice to place the window before the 3 November midterms, against Trump's own 9 October pledge and the reported planning keyed to after that date.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Tom Barrack via Arab News; Benjamin Netanyahu via JNS and The Washington Times",
      event: "Barrack rules out regime change in the same week Netanyahu orders it",
      summary:
        "Barrack said the consequence of Iranian escalation \"won't be regime change\", that the president \"has said he's not interested in regime change\", and asked \"what's the day-two scenario?\" Netanyahu told an IDF officers' course graduation at Bahad 1 on 21 October that Israel must \"complete the elimination of the Iranian regime\", was reported to have directed the IDF and Mossad to pursue the overthrow of Tehran's leadership, and said Trump shares that view.",
      impact:
        "Two allies now describe the object of the same war in incompatible terms, and the Israeli prime minister attributes to the American president a position the president's own ambassador denies. Neither account has been reconciled from the White House.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump and CENTCOM via The Maritime Executive",
      event: "Trump answers the IRGC's seven-or-eight-hull claim himself, and calls it fabrication",
      summary:
        "Day 238 recorded the IRGC Navy claiming seven or eight hulls struck in one statement with no vessel named, no position, no timestamp and no casualties, and recorded that CENTCOM had not answered. The answer came from the president on social media: Iran is trying to drive up oil prices before the midterms and is fabricating hits and mines. CENTCOM's standing position that there are no mines in the Strait is unchanged.",
      impact:
        "The first American response of any kind to the claim, and it is not a CENTCOM assessment. It names no vessel, offers no evidence, and does not address the two hulls UKMTO logged with warning numbers and coordinates, so it answers the claim without closing the claimed-versus-logged gap.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "The UAE Ministry of Climate Change and Environment and Windward AI via The Maritime Executive and Gulf News",
      event: "The oil ashore in the UAE is linked to the Taiwanese-owned tanker carried unacknowledged for thirteen cycles",
      summary:
        "A spill on the Persian Gulf side of the Khor Al Beidah peninsula, detected by Windward AI on Tuesday, has spread more than 22 miles and over 60 square miles on satellite imagery, with oil ashore along much of the peninsula. The UAE environment ministry said the odours pose no health risk, closed Umm Al Quwain's beaches pending assessment, warned fishermen away and said cleanup is under way. It has not named the source.",
      impact:
        "Several reports link the spill to the GEM NO.2, the 302,783-dwt Panama-registered, Taiwanese-owned VLCC struck on 9 October; Windward AI named an unnamed VLCC 16 miles offshore as the likely source. The linkage is reported, not confirmed by any government, and the non-response prior now runs to a fourteenth cycle.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: "Reuters and MUFG via The National; The Maritime Executive; IranWire",
      event: "Brent closes a third higher week in three different renderings, and the flow data argues with all of them",
      summary:
        "The National reported Brent up 3.59 percent at $117.20 at 7:58pm UAE time on Friday and WTI up 3.57 percent at $103; the same article's summary bullets carry an earlier 1.1 percent rise to $114.50, The Maritime Executive put Brent around $115, and IranWire reported $114. Brent settled Thursday at its highest since 4 May. MUFG's Edward Bell and Soojin Kim said Hormuz flows are \"still holding at close to pre-conflict levels\".",
      impact:
        "The three prints are held apart and not differenced. A third independent provider now places flows at or near normal while the price makes five-month highs, which keeps the resilience-not-volume prior governing and the flow series unusable as a differenced figure.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "UKMTO and the Persian Gulf Strait Authority via The Maritime Executive; Mehr News Agency and The Times of Israel",
      event: "UKMTO publishes a cumulative series, and a fresh hull is struck off Oman",
      summary:
        "UKMTO's weekly summary recorded five confirmed incidents this week with three vessels requiring assistance; 79 projectile strikes since July, 57 on southern-route transits; 119 vessels reporting damage and 77 crew injured or killed year to date; and 114 outbound and 127 inbound transits in seven days against a daily average of 25 to 35. A tanker struck about 7 nautical miles north-east of Limah, Oman, was reported Thursday and continued its voyage.",
      impact:
        "The 77 killed-or-injured figure is a combined count that cannot be split and is held as a separate series, not summed into any national toll. PGSA data records 40 enforcement actions and 122 non-compliant vessels, with 19 in negotiation and 30 more that may be added.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: "Jewish Insider; Direct Polls, Channel 14, i24 News, Stat-Net and the Israel Democracy Institute via Jewish Insider",
      event: "Israel's poll ban falls with the blocs in a dead heat and exactly one series at 61",
      summary:
        "With publication banned from Friday until Tuesday's ballot, these are the final numbers. The general average gave Netanyahu's bloc 54 and Eisenkot's opposition 50, Likud 23 and Yashar 21. Six mainstream television and newspaper polls from the last two days averaged the opposite way at 52 against 50. Channel 14 and i24 News, both right-leaning and polled by Direct Polls, gave Netanyahu 61 and Eisenkot 45.",
      impact:
        "The first series of this campaign to produce a governing majority for anyone, and its provenance — Direct Polls, founded by former Netanyahu aide Shlomo Filber and former Likud strategist Tzuriel Sharon — is recorded with it. Arab parties averaged 14 against a record 15, with turnout projected at 68 to 69 percent.",
    },
    {
      id: 8,
      direction: 'neutral',
      importance: 'medium',
      source: "Lydon Harris and the Crown via The National and Reuters",
      event: "The Old Bailey hearing was not the trial, and there were two defendants rather than three",
      summary:
        "Day 238 carried this as a trial of three Iranians opening at the Old Bailey. It was a preliminary hearing with two defendants, and the trial will be held in Manchester in June. Salam Ahmadyan, 36, and Rahman Salehi, 34, deny terrorism charges over an alleged plot against the Manchester Jewish Museum and Heaton Park synagogue, where two worshippers were killed a year earlier. Prosecutor Lydon Harris cited a bomb-making file on Ahmadyan's phone reportedly prepared in Iran.",
      impact:
        "The Day 238 framing is falsified on three counts — the forum, the stage and the number of defendants — and corrected here. No evidence touching the RAF Fairford allegation was reported, so that item carries unaddressed.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'high',
      source: "Abbas Araghchi and Nournews via the NCRI",
      event: "Tehran calls it a wartime situation, and an outlet close to its security council predicts a strike before Israel votes",
      summary:
        "Foreign Minister Abbas Araghchi said \"the country is truly in a wartime situation\" and that Iran has not reached peace. Nournews, described as close to the Supreme National Security Council, raised the possibility of an \"October Surprise\" — a possible Israeli strike before Israel's elections — citing military signals. Pakistan and Qatar are reported to be relaying messages between the parties. Washington has still said nothing about the seven-day proposal on its own terms.",
      impact:
        "The Nournews item is a media assessment, not an official statement, and is recorded as such. It nonetheless points to the same pre-ballot window Barrack named, from the opposite capital, and against the reported planning keyed to after 3 November.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Amnesty International, Iran Human Rights Monitor and Shargh via the NCRI",
      event: "Iran's internal counts diverge further, and the monitors no longer agree with Amnesty",
      summary:
        "Iran Human Rights Monitor's list now names 37 executed protesters against Amnesty International's at-least-34, and Iran HRM has compiled 158 protesters sentenced to death against the at-least-20 upheld sentences in Amnesty's urgent action MDE 13/1573/2026 of 16 October. Two executions were reportedly public, and some reportedly occurred with no prior notice, a final visit denied and families told by telephone. The \"No to Execution Tuesdays\" campaign marked its 143rd week across 66 prisons.",
      impact:
        "The four series — executed, listed as executed, upheld sentences and total sentenced — are separate counts and are not summed. All of it is opposition-sourced or opposition-relayed and recorded as such; the internal-front prior lengthens again.",
    },
    {
      id: 11,
      direction: 'escalating',
      importance: 'medium',
      source: "Libya's National Oil Corporation via The National",
      event: "Libya closes a valve, and a second non-war supply interruption stacks on the war premium",
      summary:
        "Libya's National Oil Corporation said production was curtailed after a valve was closed on the pipeline connecting the Al Zawiya refinery with the Hamada and Tahara oilfields; the pipeline belongs to the Arabian Gulf Oil Company, an NOC subsidiary. Libyan production is estimated at about 1.4 million barrels a day. No figure for the volume lost has been published.",
      impact:
        "The interruption has nothing to do with the Iran war, which is the point: a market already carrying a Gulf risk premium absorbed a second, unrelated outage on the day Brent made a five-month high.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: '+0 disclosed',
      status:
        "A twenty-fourth consecutive cycle with nothing disclosed, recorded as an absence of disclosure rather than a lull. Senator Warren's letter of 16 October to Admiral Brad Cooper carries unanswered with nine days to the 2 November deadline, and the senators' fifth series is neither merged into nor differenced against the disclosed figures.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition on the war series, three days from the ballot, on the cycle Netanyahu was reported to have directed the IDF and Mossad to pursue the overthrow of Iran's leadership. Gaza deaths stay on their parallel series. The pre-ballot pledge expires Tuesday; the reported strike planning sits past 3 November.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll, and the denied Konarak claims stay held apart. A forty-fifth day with no confirmed Iranian attack on a host state's territory. The internal ledger grows instead and now runs to four unmerged series: 37 named executed against Amnesty's at-least-34, and 158 sentenced against at-least-20 upheld.",
    },
    other: {
      cumulative: "KIA: 3,701+ · WIA: 11,186+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0 adopted',
      status:
        "No addition adopted. GACA named the two killed at Dammam as a Saudi national and an Indian resident — a detail on an already-counted figure, not a new one. UKMTO's 77 crew injured or killed year to date is a combined count held as a separate series. The claimed Yanbu, King Khalid and Abha strikes still carry no figure, and Shabwa still runs six tolls.",
    },
  },
  exec:
    "Tom Barrack, the American ambassador to Türkiye, was asked on a podcast on Friday whether the United States could strike Iran this weekend. He said: \"Could there be a strike this weekend? Absolutely.\" Barrack holds no Iran portfolio, and his answer sits against the president's own statement of 9 October that there would be no strikes before the 3 November midterms, and against the New York Times account of planning keyed to the far side of that date. He also said the consequence \"won't be regime change\" and that Trump \"has said he's not interested in regime change\" — in the same week Netanyahu told an officers' graduation that Israel must \"complete the elimination of the Iranian regime\" and was reported to have directed the IDF and the Mossad to pursue the overthrow of Tehran's leadership, saying Trump shares that view. Two allies now describe the object of the same war in incompatible terms, and one attributes to the president a position the president's own ambassador denies. Trump answered the IRGC's seven-or-eight-hull claim himself, on social media, calling it fabrication meant to lift oil prices before the midterms — the first American response of any kind, and not from CENTCOM. The oil now ashore along the Khor Al Beidah peninsula is linked by several reports to the GEM NO.2, the Taiwanese-owned VLCC struck on 9 October; the UAE will not name the source. Brent closed a third higher week in three renderings. Israel's poll ban fell with the blocs level and one right-leaning series alone at 61. Direction holds escalating.",
  implications: [
    {
      title: "The strike window moved forward, and it moved in the mouth of an ambassador with no Iran portfolio",
      body:
        "Every dated instrument this file carries points past 3 November: the Theodore Roosevelt group's end-November arrival, the reported planning keyed to after the midterms, Trump's own 9 October pledge. On Friday the US ambassador to Türkiye said a strike could come this weekend, and from the opposite capital an outlet close to Iran's Supreme National Security Council warned of an \"October Surprise\" before Israel votes on Tuesday. Analytical judgment: under the multi-clock framework this is the active-deadline clock jumping ahead of the political-will clock, and the jump is sourced to two parties who are not the deciders — a non-portfolio ambassador and a semi-official Iranian outlet. The planning-is-not-decision prior governs, and it cuts both ways: a published plan for November is not a decision for November, and an ambassador's \"absolutely\" is not a tasking order for Saturday. What has changed is that the window is no longer described consistently by the side that owns it. Grade by tasking, munitions movement and carrier position, never by the podium — and note that the force flow still has not arrived. Washington is now speaking with at least three voices on timing: a pledge, a leaked plan, and an ambassador, and Tehran is hearing all three at once while Israel votes in three days.",
    },
    {
      title: "Two allies, two objectives, and a president quoted on both sides of the one that matters",
      body:
        "Barrack said the consequence \"won't be regime change\" and that the president \"has said he's not interested\" in it. Netanyahu, four days from a ballot, said Israel must \"complete the elimination of the Iranian regime\", was reported to have ordered the IDF and the Mossad to pursue it, and said Trump views toppling Tehran's leadership as the only way to end the nuclear threat. Analytical judgment: the objective-stated-in-the-first-person prior now has a contradiction inside the coalition rather than merely an unanswered question. A war can be fought to compel a state or to remove it, and the two objects imply different target sets, different durations and different day-two liabilities — which is exactly what Barrack named when he asked \"what's the day-two scenario?\" The coalition-cohesion-priced-in-Washington prior hardens accordingly: Brussels threatened, aircraft from London with published limits, ratification pending in Ankara, a named business-elite dissenter, and now two allies publicly disagreeing about what victory is. Neither account has been reconciled from the White House, and that silence is the confirmable gap this cycle, replacing the narrower one about the seven-day proposal — which Washington has still not addressed on its own terms either.",
    },
    {
      title: "Taiwan: the oil on an Emirati beach may be Taiwanese, and the budget agency has not been asked about the LNG",
      body:
        "The GEM NO.2 has sat in this file for thirteen cycles as a falsified-position case nobody would acknowledge. It is now linked by several reports to a spill covering more than 60 square miles, with oil ashore along the Khor Al Beidah peninsula and Umm Al Quwain's beaches closed — the linkage reported, the source officially unnamed, and the vessel Taiwanese-owned. Separately, DGBAS head Chen Shu-tzu told lawmakers her agency has not yet been consulted on CPC's up-to-$4.4 billion Alaska LNG investment because negotiations continue, said funding could come through either the annual or a special budget depending on CPC's financial structure, and denied that the proposed NT$233.8 billion capital injection was meant to finance the Alaska deal. CPC has absorbed NT$674 billion in higher fuel costs since 2020 and carried NT$91 billion in accumulated losses at end-September, against Chen's warning of NT$127.6 billion if the NT$607.6 billion supplementary budget lapses at year-end. Analytical judgment: the appropriation-is-the-constraint prior holds, and a standing question is answered in the negative — the budget agency has not been consulted, and the mechanism is undecided. Taiwan's exposure is now both financial and physical: a balance sheet in Taipei and a hull leaking off Umm Al Quwain.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-fourth consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The senators' figure of up to 23 killed and 861 wounded is held as a fifth series with nine days to the 2 November deadline and no CENTCOM response.",
    israel:
      "No addition on the war series, three days from the ballot. Gaza deaths stay on their parallel series. The pre-ballot pledge expires Tuesday, while the reported strike planning sits on the far side of 3 November.",
    iran:
      "No new official war toll, and the Konarak claims stay unadded. The internal-front ledger now runs to four unmerged series after Iran HRM's 37 executed and 158 sentenced diverged from Amnesty's at-least-34 and at-least-20.",
    other:
      "No addition adopted. The Dammam dead were named as a Saudi national and an Indian resident, a detail rather than an increment. UKMTO's 77 crew injured or killed is a combined count and is not summed into this line.",
  },
};

export default data;
