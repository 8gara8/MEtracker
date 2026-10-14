import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and today's escalation was in energy infrastructure rather than rhetoric. The Saudi-led coalition struck the Yemen Petroleum Company's Al Sabahah station in Sanaa and fuel piers at Hodeidah, then confirmed oil-site strikes in Sanaa, Dhamar and Saada, having first published an evacuation order and a map. The Houthis declared Saudi oil installations legitimate targets, naming Aramco's Dammam headquarters, King Khalid airport and an Aramco refinery.",
      risk7d:
        "Extreme and held, with the decision open for a third cycle. Asked whether the United States would join the Saudi campaign, Trump said \"I'd love to tell you, but I'm not going to tell you that\", said a decision on Iran would come soon, and said he might ask Erdogan to help. Houthi political bureau member Mohammed Al Bukhaiti promised a \"swift and painful response\" against all US regional interests if Washington joins.",
      spillover:
        "Critical, and the cost of defending is now published. Saudi civil defense said debris from two intercepted missiles wounded four people in Riyadh and damaged fifteen homes, the first published casualty from a successful interception in this file, and Dhahran and Harad entered the intercept log. Iran's foreign ministry announced an Omani \"temporary safe and secure route\" the same day an IRGC adviser threatened to close routes along Oman's coast.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "Maj. Gen. Turki Al Malki, Yahya Saree and the Saudi Energy Ministry via The National, CBS News",
      event: "⭐ The coalition strikes Yemen's oil infrastructure and the Houthis designate Aramco in reply",
      summary:
        "Coalition spokesman Maj. Gen. Turki Al Malki said strikes hit Al Sabahah station in Sanaa, owned by the Yemen Petroleum Company, and fuel-loading piers at Hodeidah, because the Houthis were using civilian infrastructure to supply their arsenals; the coalition confirmed oil-site strikes in Sanaa, Dhamar and Saada, having urged civilians to leave Al Sabahah and posted the order and a map. Yahya Saree threatened a \"harsh and painful response\" in Riyadh, named Aramco's Dammam headquarters, King Khalid International Airport and an Aramco refinery, and called Aramco facilities \"a legitimate target for our forces\". The Saudi Energy Ministry later reported a limited fire in an Aramco administrative building in the Eastern Province — no injuries, no cause published, no Houthi claim.",
      impact:
        "The energy-infrastructure clock moves to critical, and is the only clock that moved on an act rather than a statement. Both sides issued civilian warnings around the targeting, a claim to legitimacy rather than restraint, and a published map makes an announced operation a targeting cue. The Aramco fire is recorded beside Saree's warning and not merged with it.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi civil defense and Maj. Gen. Turki Al Malki via Times of Israel, CBS News",
      event: "Interception produces its first published casualties as two more cities enter the intercept log",
      summary:
        "Saudi civil defense said four people were wounded in Riyadh by debris from two intercepted Houthi missiles and fifteen homes damaged, describing them as \"four people, two women, a man and a child\". Al Malki said three missiles aimed at Riyadh and Khamis Mushait were intercepted on Monday evening and Tuesday, and later reported two ballistic missiles intercepted over Dhahran and Harad along with drones and cruise missiles over Riyadh and the south.",
      impact:
        "The first cycle in which a successful interception produced a published casualty, which removes the convenience of reading \"all intercepted\" as \"no cost\" and is why the other-actor wounded series moves. Dhahran is the Aramco headquarters city Saree named hours earlier, so intercept location and designated target now coincide.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Two regional officials and Mike Pompeo via the Associated Press, PBS NewsHour",
      event: "Saudi Arabia's air-defence probe describes the tactic that beat it, without quantifying the shortage",
      summary:
        "Two regional officials told the Associated Press that the initial Saudi probe into the 10 October failure found the Houthis fired drones first to clear the way for a mix of cruise and ballistic missiles that flew more than 1,000 kilometres to King Khalid International Airport, with warheads able to change direction in flight that can challenge Patriot interceptors. The probe is also examining why air defences gave no earlier warning. The Saudi Center for International Communication did not respond to a request for comment.",
      impact:
        "This answers, partly and through anonymous officials rather than GACA, the standing question about weapon types and the air-defence account. It describes a tactic, not an inventory, so it explains the leak without quantifying yesterday's reported interceptor shortage: the audited-figure prior holds and the interceptor clock stays critical on an unquantified basis.",
    },
    {
      id: 4,
      direction: 'neutral',
      importance: 'high',
      source: "GACA via ABC News, Reuters via Middle East Eye, Arabian Business",
      event: "GACA publishes a windowed aggregate and the 10 October toll is revised to thirteen",
      summary:
        "GACA reported at least 20 killed in Houthi attacks on Saudi airports and 356 injured between 6 and 11 October. The 10 October King Khalid toll, carried here as GACA's 12 killed and 309 injured, rose to 13 after an injured Indian national died, per Reuters; The National reported 13 and 308. No Dammam toll has been published. Airline horizons now run past the state's reopening date: Etihad to 19 October, Air France-KLM through end-October, Lufthansa to 16 October, IndiGo to 17 October.",
      impact:
        "Two reconciliation questions close partially: the FAA-cited 13 and more than 300 is now the publisher's own revised event figure, and the Reuters and Fox aggregates are substantially met by GACA's 20 and 356. The window figure is a parallel aggregate, not summed with the per-event tolls it contains. Airlines pricing disruption past 17 October while the state names 17 October is the sharpest divergence yet between the official date and commercial confidence in it.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: "Trump via CBS News, Iran International",
      event: "Trump closes a third cycle without deciding and declines to say whether the US will join",
      summary:
        "Asked whether the United States would join Saudi strikes on the Houthis, Trump said \"I'd love to tell you, but I'm not going to tell you that\", and posted that \"The Houthis are behaving very badly.\" He said \"We'll make a decision on Iran soon\", said he \"might\" ask Erdogan to help Saudi Arabia after a Mohammed bin Salman-Erdogan call, called Iran \"a failed country\" with inflation of about 300 percent, and said he does not believe China or Russia are helping Iran because \"They have too much to lose.\"",
      impact:
        "A third consecutive cycle with the evidentiary brake gone and only the political brake holding, inside the pre-vote window. The 300 percent figure is a belligerent's number against Iran's official 89.8 percent print and is not adopted. The Erdogan suggestion is the first time Washington has publicly proposed routing the burden to a pact signatory that has said it will conduct no operations in Yemen.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "Araghchi, Baghaei, Badr Abdelatty and Mohammadreza Naqdi via Al Jazeera, Middle East Eye, CBS News",
      event: "Iran works three channels at once while an IRGC adviser threatens the one that exists",
      summary:
        "Araghchi told Saudi Foreign Minister Prince Faisal bin Farhan that \"insisting on a military approach and disregarding a political solution would only further complicate the situation\" and offered to facilitate dialogue. Baghaei said \"We do not want hostilities to continue between two Muslim countries\", said message exchanges with Washington through mediators continue and Iran is still reviewing the American reply to its seven-point proposal, and announced an Omani understanding on a \"temporary safe and secure route\". Egypt's Badr Abdelatty urged Araghchi to halt all attacks on Saudi Arabia. IRGC adviser Mohammadreza Naqdi told Fars the strait is closed and Iran will close routes it deems illegal, including along Oman's coast.",
      impact:
        "Tehran offered facilitation to Riyadh, Cairo pressed Tehran to stop the attacks, and a senior Houthi official is reported to have rejected what was on offer — a single outlet's unnamed source, not adopted. The sharp item is internal contradiction: a negotiated Omani corridor announced the day an IRGC adviser threatened to close Omani routes.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "UKMTO, the IRGC, ISW and Marco Rubio via CBS News, The National",
      event: "Hormuz attacks continue and Washington and Tehran publish opposite descriptions of the same strait",
      summary:
        "UKMTO reported a tanker and a container ship hit by unknown projectiles in the Strait of Hormuz, damage and casualties unspecified, and the IRGC claimed three supertankers struck in two days. The Institute for the Study of War assessed that Iran appears to be targeting ship-to-ship oil transfers near the strait, after Mohsen Rezaei claimed about five \"smuggling ships\" were struck nightly. Marco Rubio said the strait is open, flows have nearly recovered to pre-conflict levels and Iran has lost control.",
      impact:
        "The ship-to-ship assessment is a shift in target class rather than tempo, from hulls in transit to the transfer operations carrying the bypass volumes, which puts the bypass-as-target prior on the mechanism itself. The blockade series gains a start date without reconciling with the 5 October series or the 270-plus redirected carried here. Rubio's open strait and Naqdi's closed strait are two belligerents' claims.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Ed Miliband, Ken McCallum and Mark Rutte via CBS News",
      event: "Britain attaches two designations to yesterday's attribution and MI5 describes a shift to military targets",
      summary:
        "Foreign Secretary Ed Miliband sanctioned two Iranian nationals over the RAF Fairford plot, saying \"We will not tolerate threats on British soil.\" MI5 Director General Ken McCallum said Iran is shifting toward \"harder targets, like military sites\", with more than 50 Iran-linked arrests in the United Kingdom this year. Foreign ministers of the United States, United Kingdom, Australia, Canada and 23 other states condemned Iran's \"hybrid activities\", backed by NATO's Mark Rutte. Iran's ambassador Ali Moussavi denied involvement.",
      impact:
        "The attribution-without-instrument prior is partly retired after one cycle: two designations are a countable consequence, however small, against a head-of-government attribution. The signatory count is itself contested, 27 states here against the 29 carried yesterday, and is recorded rather than resolved.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Col. Majid al-Nuzaili, the Yemeni Network for Rights and Freedoms and the WHO via Al Jazeera, PBS NewsHour, CBS News",
      event: "Marib advances, Taiz is shelled, and the coalition's own operation count is revised upward",
      summary:
        "Saudi-backed government forces reported taking commanding heights around the Maas camp in Medghal district and the al-Muqailat and Jabal Zajjar positions north of Harib. Col. Majid al-Nuzaili put operations at 1,879 strikes, 950 fighters \"neutralised\" and 380 vehicles destroyed, revised up from the 1,732 and 900 carried here. Government sources reported 81 Houthi fighters captured at al-Dhabab, military sources more than 60 killed around Taiz in 24 hours. The Yemeni Network for Rights and Freedoms recorded 43 violations in Taiz in a day, five civilians killed and 17 wounded; Saba named five-year-old Ahlam Abdulsalam. The WHO said suspected cholera cases tripled from 217 to 647 weekly.",
      impact:
        "Two offensives now run in opposite directions in one country, the government advancing in Marib while Taiz is besieged and shelled. Al-Nuzaili's revision is recorded as a revision: the figures remain unlocated and uncorroborated, and a claim does not become evidence by growing.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series)",
      delta: '+0 disclosed',
      status:
        "A fourteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The American citizen among the thirteen killed at King Khalid stays on the \"other\" line and is still unnamed by the State Department. The Day 216 gap against CENTCOM's 18 is unanswered for a fourteenth day, the June Port Shuaiba investigation is unreleased, and the CRS figure of at least 81 US aircraft and drones lost or damaged draws no Pentagon response. CENTCOM's blockade accounting gains a start date without gaining reconciliation: four ships disabled and 135 turned around since 14 July, ten shadow-fleet tankers destroyed, still unmerged with the 5 October series and the 270-plus redirected carried here.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition, and the existing delta acquires a name and a contested wounded count. The teenager killed by the Hezbollah submunition on the Ramim Ridge school hike is named as ninth-grader Elazar Yair Wilensky; the same liveblog carries 24 injured in its headline and 19 in a photo caption, so the figure is held at the 24 already recorded with the divergence stated rather than revised. Netanyahu said Iran is trying to orchestrate an attack to influence the 27 October election \"directly or via one of their proxies\" and claimed 90 percent of the mission against Hamas and Hezbollah is complete; a television report that he pressed Trump to renew fighting before the election is denied by his office and recorded as a report. Gaza's health ministry series stays parallel. Thirteen days to the vote.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-fifth day without a confirmed Iranian attack on a host state's territory, the qualifier still attached because the IRGC's claims remain against hulls rather than soil. The execution ledger gains a documented set: Amnesty International reported five men executed between 30 September and 5 October over the January protests — Ali Hemmati Sistanian, Majid Nikandish, Alireza Raisi, Alireza Sepahi and Siavash Jamshidi Kheirabadi — with televised confessions used as evidence and torture reported in three cases. Amnesty put the uprising-related total at at least 34, with at least eight more at risk, and Diana Eltahawy called for a Security Council referral to the ICC. That 34 is a bounded subset, not merged with the roster of 70 since January or the 194 on death row. Fatemeh Mohajerani acknowledged economic strain, fuel consumption down 7 percent year on year.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+4 WIA',
      status:
        "The wounded line moves for the first time on an interception: Saudi civil defense reported four wounded in Riyadh by debris from two intercepted missiles, with fifteen homes damaged, and that state-published figure is added. GACA's windowed aggregate of at least 20 killed and 356 injured across Saudi airports between 6 and 11 October is adopted as a parallel aggregate and not summed with the per-event tolls it already contains. The 10 October figure is revised by its own publisher from 12 killed and 309 injured to 13 after an injured Indian national died, which closes the gap against the FAA-cited 13 rather than opening a new one. No Dammam toll has ever been published. Houthi-run health authority figures for al-Jawf and Sanaa, the Yemeni Network's Taiz toll, the IMO's at least 24 seafarers killed and the WHO's Yemen series stay on separate attributed lines.",
    },
  },
  exec:
    "The war crossed its own energy threshold in both directions inside one cycle. The Saudi-led coalition struck the Yemen Petroleum Company's Al Sabahah station in Sanaa and fuel-loading piers at Hodeidah port, and later confirmed strikes on oil sites in Sanaa, Dhamar and Saada; spokesman Maj. Gen. Turki Al-Maliki said the Houthis were using civilian infrastructure to supply their arsenals, and the coalition warned civilians to leave Al Sabahah first, publishing the order and a map. The Houthis answered by declaring Saudi oil installations legitimate targets — military spokesman Yahya Saree named Aramco's Dammam headquarters, King Khalid International Airport and an Aramco refinery, and told civilians near any Aramco facility to evacuate. Hours later the Saudi Energy Ministry reported a limited fire in an Aramco administrative building in the Eastern Province, no injuries, no cause published; this brief does not attribute it. Interception also stopped being free: Saudi civil defense said debris from two intercepted missiles wounded four people in Riyadh — two women, a man and a child — and damaged fifteen homes. The kingdom's probe into the 10 October air-defence failure found, per two regional officials, that drones were launched first to clear a path for a mix of cruise and ballistic missiles that flew more than 1,000 kilometres. GACA published a windowed aggregate of at least 20 killed and 356 injured across Saudi airports between 6 and 11 October, and the 10 October toll rose to 13 after an injured Indian national died. Trump said \"I'd love to tell you, but I'm not going to tell you that\" — a third cycle with no decision. Britain attached two designations to yesterday's attribution. Direction holds escalating; the thirty-day probability falls one point to 7.",
  implications: [
    {
      title: "Energy infrastructure stopped deterring and became a target list, in both directions, in one day",
      body:
        "For two hundred days the energy-infrastructure clock in this file has measured a threat held in reserve. Today both belligerents spent it. The coalition struck a named fuel facility in Sanaa, fuel piers at Hodeidah, and oil sites in Dhamar and Saada; the Houthis declared Saudi oil installations legitimate targets and named three of them, Aramco's Dammam headquarters among them. Analytical judgment: under the multi-clock framework the energy-infrastructure clock moves from strained to critical, and it is the only clock that moved today on an act rather than a statement. Two features make this more than reciprocal rhetoric. Both sides issued civilian evacuation warnings before or alongside the targeting, which is a claim to legitimacy rather than restraint, and the coalition published its warning and a map — an operation announced in advance is also a targeting cue, the announced-restart prior operating in a new theatre. The Aramco administrative fire reported by the Saudi Energy Ministry hours after Saree's warning is the test of the discipline, not the proof of the threat: a limited fire, no injuries, no cause published, no Houthi claim. It is recorded beside the threat and not merged with it. Riyadh has still published no damage assessment for Khurais, Rabigh or the Riyadh refinery from earlier in this war, so the kingdom's own baseline for energy damage remains unpublished at the moment its infrastructure is formally designated.",
    },
    {
      title: "Interception became costly, the failure acquired a mechanism, and the decision stayed open",
      body:
        "Three reinforcing findings on the defender's side. First, Saudi civil defense reported four wounded and fifteen homes damaged by debris from two intercepted missiles — the first cycle in this file where a successful interception produced a published casualty, which retires the convenience of reading \"all intercepted\" as \"no cost\". Second, the 10 October failure now has a described mechanism: two regional officials told AP the Houthis fired drones first to clear a path for cruise and ballistic missiles over more than 1,000 kilometres, with manoeuvring warheads that challenge Patriot, and the probe is also asking why warning came so late. Analytical judgment: that is a tactic, not an inventory, so it explains the leak without quantifying the interceptor shortage reported yesterday — the audited-figure prior holds and the interceptor clock stays critical on an unquantified basis. Third, Trump's answer was \"I'd love to tell you, but I'm not going to tell you that\", with \"We'll make a decision on Iran soon\", a Truth Social post that the Houthis are \"behaving very badly\", and a suggestion he \"might\" ask Erdoğan to help. A third cycle closed with the political brake alone holding and no member of Congress joining Murphy. Against that, Araghchi's call with Prince Faisal bin Farhan, Egypt's Badr Abdelatty urging Tehran to stop the attacks, and an Iran-Oman understanding on a \"temporary safe and secure route\" are channels that produced no instrument. The probability falls one point, not more.",
    },
    {
      title: "Taiwan: the first hard numbers of the war on the gas buffer, and an eleven-day margin",
      body:
        "Fresh Taiwan material today, and it is quantitative. In the Taipei Times, Mihir Shete of National Chengchi University put Taiwan's natural-gas reserve at about eleven days against the fourteen-day target set in 2018, with gas generating 47.8 percent of electricity last year and crude held at more than 140 days — Japan holds roughly two months of gas. Qatar supplied about a third of Taiwan's gas last year and 11 percent of CPC's supply this year; spot purchases rose from about 30 percent of supply to 60–65 percent at a price up roughly 70 percent; large industrial users' electricity rose 41.58 percent while the government absorbed three-quarters of household fuel cost increases; TSMC alone takes about 9 percent of national electricity, and roughly thirty gas carriers must arrive monthly. Analytical judgment: this converts the crude-is-not-gas prior from an argument into a measured margin — 140 days of oil and eleven days of gas is the entire asymmetry in two numbers. CPC now projects a NT$56 billion (US$1.75 billion) loss, a seventh consecutive annual loss, with debt above 90 percent of assets and a request for supplementary public funding; Reuters separately reports CPC ready to diversify crude imports if Hormuz reopens. The solvency-not-price prior is reinforced. A fourth consecutive day of silence from U-Ming, Global Energy Maritime and every Taipei ministry on the GEM NO.2 identification is recorded as posture.",
    },
  ],
  casualtyNotes: {
    us:
      "A fourteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The American citizen among the thirteen killed at King Khalid stays on the \"other\" line and is still unnamed by the State Department. The Day 216 gap against CENTCOM's 18 is unanswered for a fourteenth day, the June Port Shuaiba investigation is unreleased, and the CRS figure of at least 81 US aircraft and drones lost or damaged draws no Pentagon response. CENTCOM's blockade accounting gains a start date without gaining reconciliation: four ships disabled and 135 turned around since 14 July, ten shadow-fleet tankers destroyed, still unmerged with the 5 October series and the 270-plus redirected carried here.",
    israel:
      "No addition, and the existing delta acquires a name and a contested wounded count. The teenager killed by the Hezbollah submunition on the Ramim Ridge school hike is named as ninth-grader Elazar Yair Wilensky; the same liveblog carries 24 injured in its headline and 19 in a photo caption, so the figure is held at the 24 already recorded with the divergence stated rather than revised. Netanyahu said Iran is trying to orchestrate an attack to influence the 27 October election \"directly or via one of their proxies\" and claimed 90 percent of the mission against Hamas and Hezbollah is complete; a television report that he pressed Trump to renew fighting before the election is denied by his office and recorded as a report. Gaza's health ministry series stays parallel. Thirteen days to the vote.",
    iran:
      "No new official war toll and a thirty-fifth day without a confirmed Iranian attack on a host state's territory, the qualifier still attached because the IRGC's claims remain against hulls rather than soil. The execution ledger gains a documented set: Amnesty International reported five men executed between 30 September and 5 October over the January protests — Ali Hemmati Sistanian, Majid Nikandish, Alireza Raisi, Alireza Sepahi and Siavash Jamshidi Kheirabadi — with televised confessions used as evidence and torture reported in three cases. Amnesty put the uprising-related total at at least 34, with at least eight more at risk, and Diana Eltahawy called for a Security Council referral to the ICC. That 34 is a bounded subset, not merged with the roster of 70 since January or the 194 on death row. Fatemeh Mohajerani acknowledged economic strain, fuel consumption down 7 percent year on year.",
    other:
      "The wounded line moves for the first time on an interception: Saudi civil defense reported four wounded in Riyadh by debris from two intercepted missiles, with fifteen homes damaged, and that state-published figure is added. GACA's windowed aggregate of at least 20 killed and 356 injured across Saudi airports between 6 and 11 October is adopted as a parallel aggregate and not summed with the per-event tolls it already contains. The 10 October figure is revised by its own publisher from 12 killed and 309 injured to 13 after an injured Indian national died, which closes the gap against the FAA-cited 13 rather than opening a new one. No Dammam toll has ever been published. Houthi-run health authority figures for al-Jawf and Sanaa, the Yemeni Network's Taiz toll, the IMO's at least 24 seafarers killed and the WHO's Yemen series stay on separate attributed lines.",
  },
};

export default data;
