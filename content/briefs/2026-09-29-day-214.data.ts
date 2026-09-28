import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, and for the first time in the sequence the diplomatic component is working rather than merely scheduled. Araghchi met Qatari mediators in New York, the United States and Iran are to hold separate sessions with the mediators on Monday and Tuesday with no bilateral meeting planned, and the American answer to Iran's revised seven-day proposal is to be relayed back through Qatar. Against that, Tehran advanced legislation subordinating the strait's governance to domestic law and Treasury put a two-week horizon on Iran having anything left to sell. Nothing on the confirmed kinetic record changed today, but the record itself was revised backwards.",
      risk7d:
        "Seven-day risk holds extreme because the two quantities that would tell either capital how the war is going are both reported inconsistently by the same government. Energy Secretary Wright put Hormuz transits near 13 million barrels a day, Bessent at 15 to 22 million against roughly 20 million pre-war, and Trump above 22 million on Friday, against Kpler's 7.4 million for September and 19 tankers in the week to 27 September. The Pentagon disclosed eight Marines wounded on 14 September, two weeks after the fact, and added 37 personnel to a wounded list now at 861. Per §3.5.3 every American figure in this cycle is an interested claim until a second US source agrees with it.",
      spillover:
        "Spillover holds critical. Israel spent a sixth consecutive day outside the channel negotiating the end of its own war, with a confirmed Netanyahu meeting in Abu Dhabi, a security-zone engagement in southern Lebanon, a Lebanese request to Washington for a withdrawal timeline, and officials signalling an expanded Gaza operation twenty-eight days from an election. The Mecca pact track and France's undetailed Yanbu deployment carry with no new commitment. Iran's internal repression ledger hardened with 166 protesters documented as facing death sentences. Brent rose more than 3% toward $108 while regional exports reached 12.8 million barrels a day, the highest of the war.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Arab News / IranWire / Newsquawk / Kurdistan24 / Jerusalem Post / Middle East Monitor',
      event:
        "Foreign Minister Araghchi met Qatari mediators in New York on Monday. The United States and Iran are to hold separate sessions with the mediators on Monday and Tuesday, with no direct bilateral meeting planned. Araghchi said Tehran discussed proposals for the mediators to carry to Washington and that the American reply comes back the same way: \"We are waiting for the final response through the intermediaries.\" He restated the Supreme Leader's conditions for reopening Hormuz — a seven-day regional ceasefire including Lebanon, unfrozen assets, oil-sector sanctions lifted, and the naval blockade of Iranian ports ended.",
      summary:
        "Per §3.5.5 quantify the movement: Day 212 produced a rejection with no channel, Day 213 a channel with a date, Day 214 a channel carrying a document one way and an expected answer the other. This is the first American reply to an Iranian proposal in the war to travel by mediator rather than by microphone.",
      impact:
        "The gating variable named in Day 213's watch list is resolved in the affirmative, and the thirty-day ceasefire probability rises from 7 to 9.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'NBC News / Jerusalem Post / i24NEWS / Tehran Times / Al Jazeera / Washington Post',
      event:
        "Eight US Marines were injured on 14 September when an Iranian anti-ship cruise missile struck a vessel in the Strait of Hormuz that was not a US Navy ship — smoke inhalation and concussion symptoms, none assessed as serious, all returned to duty — and the Defense Department did not announce the attack at the time. Separately the Department added 37 personnel to its wounded list, taking it to 861 since 28 February against at least 19 recorded deaths. A US Army spokesperson said \"the care and well-being of our soldiers is of the highest priority\" and denied downplaying injuries.",
      summary:
        "Per §3.5.6 the twenty-six-day quiet series recorded through Day 213 is retired: 14 September falls inside it, so the run measured disclosure practice rather than a lull. Per §3.5.3 the Pentagon's own move to 861 wounded pulls the aggregator range of 19-23 killed and 831-900 wounded, previously recorded and not adopted, inside official figures rather than outside them.",
      impact:
        "The +8 is adopted onto the combat series, which moves from 432 to 440 wounded against 17 confirmed deaths, and the Washington Post's finding of at least four omitted deaths now has a corroborating pattern.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Kurdistan24 / Al Jazeera',
      event:
        "Iran's parliament advanced a Strategic Arrangement draft whose Article 16 provides that on entry into force the governance system of the Strait of Hormuz must comply exclusively with the new law, superseding previously conflicting regulations. CENTCOM rejected Iran's control claim on 28 September, stating that \"thousands of ships are transiting freely without obstruction\" and citing more than a billion barrels moved. Supreme Leader Mojtaba Khamenei said US forces \"are now refraining from advancing further because of the painful blows\" and had been driven from waters off southern Iran to the Arabian Sea, from which they would also be expelled.",
      summary:
        "Per §3.5.6 the toll-institutionalisation prior escalates from a fee proposal to a statute: a wartime posture written into domestic law is harder to trade away in a mediated room, because a negotiated text would then have to override an Iranian act of parliament rather than an executive decision.",
      impact:
        "Tehran legislated the strait on the same day it asked Washington for an answer about reopening it, which raises the cost of any concession it might later make.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Iran International / Al Jazeera / Kurdistan24',
      event:
        "Three US officials quantified the same waterway three incompatible ways. Energy Secretary Chris Wright put transits at nearly 13 million barrels a day with at least one recent day above 20 million; Treasury Secretary Bessent described 15 to 22 million a day against roughly 20 million pre-war; Trump's Friday-night claim of more than 22 million carries from Day 213. Kpler measured 7.4 million barrels a day across September with 19 tankers transiting in the week to 27 September, and Al Jazeera counted 132 transits for 21-27 September against 116 the previous week and roughly 130 daily crossings pre-war.",
      summary:
        "Per §3.5.6 the no-arbiter prior migrates inside the American government: a spread of 7.4 to 22 million barrels a day is not a measurement dispute but the absence of a single agreed instrument. Per §3.1 rule 3 the divergence is the information.",
      impact:
        "Neither capital can verify the war's central physical fact from its own official reporting, which keeps escalation-by-misreading live independent of intent.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Arabiya / Iran International / Global Times',
      event:
        "Bessent said Iran will complete its final oil deliveries to China within two weeks, after which Tehran will have \"nothing left to trade for anything\", with roughly 15 million barrels still in delivery under the blockade and a scorecard he framed as \"the United States, one billion — more than one billion barrels have gotten out — Iran, zero\" under Operation Economic Outcast. Turkish, Omani and Emirati aviation suspensions carry, regional banks have halted Iranian transactions, and the rial remains at record lows. Chinese foreign ministry spokesperson Guo Jiakun repeated that Beijing \"firmly opposes illegal unilateral sanctions\" lacking Security Council authorisation.",
      summary:
        "Per §3.5.3 Bessent's assessment of his own campaign is an interested claim, but the two-week horizon is a dated commitment against which it can be measured. Per §3.5.5 the competing calendars are the finding: American leverage peaks around 12 October, which is when Iranian leverage is said to expire.",
      impact:
        "The active-deadline clock, empty since the SNSC window lapsed, has been refilled by Treasury rather than by either foreign ministry, and China remains the single holdout.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Times of Israel liveblog / Iran Human Rights Monitor',
      event:
        "Israel spent a sixth consecutive day outside the channel negotiating the end of its own war. The UAE confirmed Netanyahu's 27 September meeting with President Mohamed bin Zayed on bilateral relations; his office called reports he asked the Emirati president to deny pre-7-October warnings \"fake news\" and former Shin Bet chief Ronen Bar announced he will sue; IDF troops fired on two suspects entering the southern Lebanon security zone; Lebanese Prime Minister Nawaf Salam pressed Secretary of State Rubio for a clear timeline for Israeli withdrawal; and officials signalled an expanded Gaza operation may be a foregone conclusion. Iran Human Rights Monitor documented 166 protesters facing death sentences or imminent execution.",
      summary:
        "Per §3.5.6 the Israeli-independence prior is reinforced for a sixth day: the party whose war is being mediated is litigating October 7 and signalling a Gaza expansion twenty-eight days from an election. The 166 death sentences, on moharebeh and efsad-fil-arz charges the monitor attributes to confessions extracted under torture, are the internal price of the same standoff.",
      impact:
        "Any instrument produced in New York would bind a government that has not attended, while Lebanon asks Washington for a timeline Israel has not offered.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / Vantage Markets / Trading Economics / gasworld citing ICIS',
      event:
        "Brent rose more than 3% toward $108 a barrel in Asian trading on Monday, with the November contract at $107.35 before 08:00 GMT and other prints near $106.20; South Korea's Kospi fell 2.70% and Japan's Nikkei 0.73% while Hong Kong's Hang Seng rose 0.54%. Regional crude exports rebounded to 12.8 million barrels a day in September, the highest since the war began. ICIS placed the return of Qatari and Emirati LNG volumes in October rather than the forecast August-September window, cut its 2026 global supply forecast to 431 million tonnes from 441 million, and put Qatar's own expansion into the second half of 2027 or beyond.",
      summary:
        "Per §3.5.6 the barrels-not-geography pricing prior is qualified rather than retired: Brent held near $105 through the rejection itself and only broke above $106 once Tehran restated that its conditions stand, so the market is pricing the durability of the closure rather than the rhetoric around it.",
      impact:
        "Taiwan's resupply date moved away from it on liquefaction constraints rather than transit risk, one day before its secured-supply window closes.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 440 (AP/CENTCOM combat series, revised +8 for the newly disclosed 14 September strike). Defense Department wounded list now 861 since 28 February with at least 19 recorded deaths. DoD DCAS all-cause holds 18 killed · 687 wounded; The Intercept reports 410 killed or wounded since 7 July.',
      delta:
        "+8 adopted, retroactive to 14 September and disclosed only on 28 September: eight Marines injured by an Iranian anti-ship cruise missile against a non-Navy vessel in the strait, with no Defense Department announcement at the time. Confirmed deaths hold at 17.",
      status:
        "Per §3.5.6 the twenty-six-day quiet series is retired as a disclosure artifact — 14 September falls inside it. Per §3.5.3 the Department's own move to 861 wounded and at least 19 deaths brings the previously unadopted aggregator range of 19-23 killed and 831-900 wounded inside official figures rather than outside them; the headline combat series is kept at 17 / 440 and both divergences stay flagged. The Washington Post's 18 September finding that at least four deaths were omitted carries, as do wounded personnel's allegations that serious injuries were logged as minor against an Army spokesperson's denial. El Gaia stays CONTESTED ATTRIBUTION. Three incompatible official transit series — Wright's ~13 mb/d, Bessent's 15-22 mb/d and Trump's 22 mb+ — are recorded as interested claims against Kpler's 7.4 mb/d. The Lincoln strike group force-health record carries with no relief rotation announced.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. A sixth consecutive day absent from the mediated channel, with nothing published on the seven-day plan, the rejection, or the convening of the session.",
      status:
        "Per §3.5.6 the Israeli-independence prior is reinforced. The day's output was the UAE-confirmed Netanyahu meeting with Mohamed bin Zayed, the \"fake news\" denial and Ronen Bar's announced suit, an IDF engagement with two suspects in the southern Lebanon security zone, Lebanese Prime Minister Salam's request to Rubio for a clear withdrawal timeline, officials signalling an expanded Gaza operation, and the Dutch settlement-goods ban answered by revoking Dutch diplomatic privileges in Ramallah. Katz's security-zone doctrine stands unretracted — no withdrawal from the ~700 sq km belt or Ali al-Taher until Hezbollah is disarmed nationwide. Lebanon's separate ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the 26 June framework. Gaza holds. Twenty-eight days to the 27 October election.",
    },
    iran: {
      cumulative:
        'Ministry of Health war toll ~3,559 killed · 27,400+ wounded. Iran Foundation series ~3,468; HRANA 3,636+. US-Israeli estimate 6,000+.',
      delta:
        "No new official Iranian war toll and no confirmed Iranian ballistic or drone attack on a host state since the night of 8-9 September, a pause now in its twentieth day — qualified by the newly disclosed 14 September cruise-missile strike, which shows the maritime line of effort ran through that pause on the confirmed record.",
      status:
        "Per §3.1 the MOH, Iran Foundation and HRANA series carry alongside the US-Israeli 6,000+ estimate. Iran Human Rights Monitor documented 166 protesters from the December 2025 and January 2026 uprisings facing death sentences or imminent execution on moharebeh and efsad-fil-arz charges it attributes to confessions extracted under torture, held at Ghezel Hesar, Adel Abad in Shiraz, Dastgerd in Isfahan and other facilities, many incommunicado and without independent counsel, while the suppression apparatus stays on 100% alert. The Iran Human Rights roster of 4,200+ named protest dead and the Fact-Finding Mission's 3,038 killed / 25,000 injured counts carry separately and are never merged. HRW and Boroumand record at least 59 arbitrary executions from 18 March to end-August. The IAEA still cannot verify ~440.9 kg of 60% material. Internal ledger: 83.8% point-to-point inflation superseding 69.9%, the rial at record lows past 2,000,000, average salary ~$125 against ~$450 basic spending, crude loadings −85%. The impeachment motion against Araghchi remains registered and unresolved against the presidency's competing six-member-body account.",
    },
    other: {
      cumulative:
        'Yemen, Iraq, Gulf states and maritime combined: 3,598+ killed · 10,804+ wounded.',
      delta:
        "+0 adopted. No fresh Houthi impact claim or Saudi interception was recorded in the sources reviewed for this cycle; the Mecca pact chiefs-of-staff track and France's committed but undetailed Yanbu deployment carry from Day 213 with no new commitment published.",
      status:
        "The Day 209 Mocha claim (six dead including two children) and northern prison claim (nine detainees) remain uncorroborated and unanswered by Riyadh for a twelfth day, as does the 19 September strike on the Saudi capital. Regional crude exports rebounded to 12.8 million barrels a day in September, the highest since the war began, which is the clearest indication yet that Gulf producers' pipeline and routing workarounds are holding. IOM records ~130,000 displaced since 1 August with Ta'iz hosting 73,494 and 3,106 crossings to Djibouti; 73 UN personnel remain arbitrarily detained, aid delivery in Houthi-controlled areas is untenable, and 22.3 million require assistance. al-Hazm (23 killed, 7 missing) carries inside; the IOM shipwreck toll (13 dead, 14 missing) stays out. Bab al-Mandeb is not formally closed. Sub-ledgers: Gulf 33+/~103+ Saudi, Kuwait 10/115; Iraq 148+/402+; maritime ~19 damaged, 7 abandoned, 2 captured; Mocha and coast 11+/32+.",
    },
  },
  exec:
    "The session Trump said he expected convened. Araghchi met Qatari mediators in New York on Monday, with Washington and Tehran to hold separate sessions with the mediators on Monday and Tuesday and no bilateral meeting planned, and said Iran is \"waiting for the final response through the intermediaries\" — the first time an American answer to an Iranian proposal travels by mediator rather than by microphone (Arab News, IranWire, Newsquawk, Kurdistan24). He restated the Supreme Leader's conditions for reopening Hormuz: a seven-day regional ceasefire including Lebanon, unfrozen assets, oil sanctions lifted, the blockade ended. Tehran simultaneously moved to legislate the waterway, advancing a Strategic Arrangement draft whose Article 16 subordinates the strait's governance to the new law. The Pentagon's ledger moved twice: eight Marines were injured on 14 September by an Iranian anti-ship cruise missile striking a non-Navy vessel in the strait, undisclosed at the time, and the Department added 37 personnel to its wounded list, taking it to 861 since 28 February against at least 19 deaths (NBC News, Jerusalem Post, Al Jazeera, Washington Post). That retires the twenty-six-day quiet series as a disclosure artifact. The strait's numbers then fractured inside the American government: Energy Secretary Wright put transits near 13 million barrels a day, Bessent at 15-22 million against ~20 pre-war, Kpler at 7.4 million for September with 19 tankers in the week to 27 September, against CENTCOM's \"thousands of ships transiting freely\". Bessent added a two-week clock — Iran with \"nothing left to trade\" once ~15 million barrels reach China. Brent rose above 3% toward $108. Direction holds mixed; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability rises to 9.",
  implications: [
    {
      title: 'An answer travelling by mediator is a different instrument from an answer shouted from a doorstep — and it now races a two-week starvation clock',
      body:
        "Yesterday's gating variable is resolved: the session convened, the format held, and Araghchi says the American reply comes back through Qatar (Arab News, Newsquawk, Kurdistan24). Per §3.5.5 quantify the change: on Day 212 there was a rejection and no channel; on Day 213 a channel with a date; on Day 214 a channel carrying a document in one direction and an expected answer in the other. Per §3.5.3 both positions stay interested — Araghchi's \"waiting for the final response\" is a claim about American obligation, and Bessent's two-week horizon for Iran having \"nothing left to trade\" is a claim about his own campaign's success. But those two calendars are now in direct competition, and that is the finding. Washington's leverage peaks precisely when it says Iran runs out of sellable barrels, roughly 12 October; Tehran's leverage decays on the same schedule. Per §3.5.6 the price-not-principle prior holds and sharpens: a side objecting to valuation rather than to kind has a reason to wait for the price to fall. Analytical judgment: under the multi-clock framework the negotiation-capacity clock improves for a second day while the active-deadline clock, empty since the SNSC window lapsed, has been refilled by Treasury rather than by either foreign ministry. The thirty-day ceasefire probability rises from 7 to 9 — a functioning two-way channel is worth more than a scheduled one, and still less than a text.",
    },
    {
      title: 'The no-arbiter prior migrates inside the American government, and the quiet-casualty series turns out to have been a disclosure artifact',
      body:
        "Three US officials described the strait in three incompatible ways on the same day — Wright near 13 million barrels daily, Bessent 15 to 22 million, Trump above 22 million on Friday — against Kpler's 7.4 million for September and 19 tankers in the week to 27 September, and against CENTCOM's \"thousands of ships transiting freely without obstruction\" (Iran International, Al Jazeera, Kurdistan24). Per §3.5.6 the no-arbiter prior therefore widens: the dispersion is no longer adversarial but intra-governmental, and a range of 7.4 to 22 million barrels is not a measurement dispute, it is the absence of one agreed instrument. The casualty record supplied the same lesson with a date attached. Eight Marines were wounded on 14 September and disclosed on 28 September; that day sits inside the twenty-six-day quiet run this brief recorded through Day 213, so per §3.5.6 the quiet series is retired, and the Pentagon's own move to 861 wounded and at least 19 deaths pulls the aggregator range this brief declined to adopt inside official figures (NBC News, Al Jazeera, Washington Post). Analytical judgment: the war's two most load-bearing quantities — barrels moving and Americans hit — are both reported by the same government in mutually inconsistent series. Treat every American number in this brief as an interested claim until a second US source agrees with it.",
    },
    {
      title: "Taiwan: the window closes tomorrow, and the resupply it was waiting for has slipped a month",
      body:
        "Taipei's May assessment that gas was secured \"through September\" expires tomorrow with no CPC October assurance, and the development that matters arrived from the supply side rather than the diplomatic one: ICIS now places the return of Qatari and Emirati LNG volumes in October rather than the forecast August-September window, with 5 to 6 million tonnes lost per additional month offline, the 2026 global supply forecast cut to 431 from 441 million tonnes, and Qatar's own expansion pushed into the second half of 2027 or beyond (gasworld citing ICIS, Bloomberg). Per §3.5.5 set that against the standing exposure: ~96% energy import dependence, roughly half of generation from LNG, ~11 days of reserve — the thinnest in East Asia — and ~35% of 2025 LNG from Qatar and the UAE. Analytical judgment: Taiwan crosses into October with adequate molecules and a resupply date that has moved away from it, not toward it. A mediated text this week would not change a Q4 cargo schedule already rescheduled on liquefaction constraints rather than on transit risk.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline moves to 17 KIA / 440 WIA on the AP/CENTCOM combat series, the +8 adopted retroactively for the 14 September anti-ship cruise-missile strike on a non-Navy vessel in the strait, disclosed only on 28 September. The Defense Department's own wounded list now stands at 861 since 28 February against at least 19 recorded deaths, which brings the aggregator range of 19-23 killed and 831-900 wounded inside official figures for the first time; DCAS 18 / 687 and The Intercept's 410 since 7 July carry. Per §3.5.6 the twenty-six-day quiet series is retired as a disclosure artifact, not a lull. The Washington Post's finding that at least four deaths were omitted from official counts carries against an Army spokesperson's denial of downplaying injuries.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll and a sixth consecutive day of absence from the mediated channel. The day's Israeli output was the UAE-confirmed Netanyahu meeting with Mohamed bin Zayed, the \"fake news\" denial and Ronen Bar's announced suit, an IDF engagement in the southern Lebanon security zone, Salam's withdrawal-timeline request to Rubio, and signalling of an expanded Gaza operation. Katz carries unretracted. Lebanon's separate ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the 26 June framework. Twenty-eight days to the 27 October election.",
    iran:
      "Official MOH war toll carries unchanged; no new Iranian war count and no confirmed launch against a host state since 8-9 September, now a twentieth day — qualified by the newly disclosed 14 September maritime strike. The day's Iranian development was diplomatic and legislative: the mediated session, the statement that Tehran awaits the final response through intermediaries, the Majlis Strategic Arrangement draft subordinating the strait's governance to domestic law, and Mojtaba Khamenei's \"painful blows\" claim. Iran Human Rights Monitor documented 166 protesters facing death sentences or imminent execution on moharebeh and efsad-fil-arz charges. HRANA 3,636+ and the Iran Foundation ~3,468 carry alongside; the Iran Human Rights roster of 4,200+ named protest dead and the Fact-Finding Mission's 3,038 / 25,000 counts carry separately per §3.1.",
    other:
      "+0 adopted, and no fresh Houthi impact claim or Saudi interception was recorded in the sources reviewed this cycle. The Mecca pact chiefs-of-staff track and France's committed but undetailed Yanbu deployment carry from Day 213. The Day 209 Mocha and prison claims remain uncorroborated and unanswered by Riyadh, which has published nothing on the 19 September strike on its own capital for a twelfth day. Regional crude exports rebounded to 12.8 million barrels a day in September, the highest since the war began. IOM records ~130,000 displaced since 1 August with Ta'iz hosting 73,494 and 3,106 crossings to Djibouti; 73 UN personnel remain arbitrarily detained and 22.3 million require assistance.",
  },
};

export default data;
