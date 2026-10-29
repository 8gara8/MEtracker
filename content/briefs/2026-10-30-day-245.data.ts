import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Both tracks hardened in one cycle. The strike track gained corroboration the reported movements lacked — more than ten American military transports into Israeli airbases on analysts' reading, a Marine expeditionary unit beside the carrier group, and named targets in Pickaxe Mountain and Kharg Island — while Admiral Brad Cooper briefed the president on options with Hegseth and Caine present. The deal track simultaneously gained a named American principal, a named Iranian recipient, a delegation head, a venue shortlist and a date window inside a week. Direction moves from escalating to mixed because the second track is now gradeable, not because the first softened.",
      risk7d:
        "Approval is still withheld and the president has called off major strikes six times since July, but the calendar is dense: OPEC+ on 1 November, the senators' deadline on 2 November, the midterms on 3 November, Israel's certification on 4 November and the Knesset sworn in on 10 November. Mediators are exploring a Turkiye meeting before 4 November, and Rezaei was due to answer Vance officially.",
      spillover:
        "Unnamed open-source analysts read a damaged cracking unit and halted flaring at Ras Tanura; the coalition intercepted a ballistic missile over the Eastern Province; the Houthis claim 101 attacks in twenty-four hours and an independently corroborated market strike killed at least thirteen in al-Jawf; the US Embassy in Riyadh warned of attacks on Saudi airports; and Qatar, the mediator carrying Washington's letter, is now named in an Israeli foreign-interference referral.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "The Wall Street Journal and The New York Times, relayed by Al Jazeera, Iran International and Fox News",
      event: "A named American principal writes to a named Iranian principal, and the president disowns the channel he authorised",
      summary:
        "Qatari mediators delivered a letter from Vice President JD Vance to Mohsen Rezaei, secretary of Iran's Supreme National Security Council, on Sunday. The Journal reports it and the discussions after it covered a potential framework for negotiations rather than peace terms. The Times reports it proposed a meeting soon with Vance leading the American delegation, demanded Iran's nuclear programme be on the table from the start, and raised talks as early as next week in Qatar or Turkiye; it adds the letter was received well and that Rezaei would answer officially on Thursday. The Journal says Trump directed it; Trump denied directing it, said he approved it when asked, and recast it as help with medical supplies and various things.",
      impact:
        "The first direct named-principal-to-named-principal channel in this file, and the first with a delegation head, a venue shortlist and a date window. The disavowal inverts the denial-by-deputy prior: a principal is repudiating his own deputy's channel, which preserves deterrence while costing nothing if the channel fails.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: "The Wall Street Journal via the Jerusalem Post and The Times of Israel, with Reuters's non-verification; Fox News for the targets",
      event: "The CENTCOM commander briefs the president on strike options, and the target list acquires names",
      summary:
        "Admiral Brad Cooper presented military options for Iran to Trump at the White House with Defense Secretary Pete Hegseth, Joint Chiefs Chairman General Dan Caine and other cabinet members attending, per the Journal citing US officials and others with direct knowledge; Reuters could not independently verify it. The meeting is reported to have followed a day after the same military leadership met Vance. Official and military sources told Fox News movements are being made so the president has options if he decides to resume strikes, with no indication a decision has been made. Reported targets include the Pickaxe Mountain nuclear site and Kharg Island, and Trump has called off major strikes six times since July.",
      impact:
        "The planning-is-not-decision prior gains named targets for the first time, which is a sharper reading than target classes. Six called-off strikes since July is the base rate against which any interval or logistics trail must be discounted.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Analysts via The Times of Israel; Fox News; The Wall Street Journal relayed by Al Jazeera and Anadolu Agency",
      event: "The reported force movement is corroborated from the flight record, and a Marine expeditionary unit is added",
      summary:
        "Analysts cited by The Times of Israel said more than ten US military transport aircraft landed at Israeli airbases, possibly connected to air-defence preparations ahead of a new possible round of fighting with Iran; cargo contents are unknown. Fox News reported an additional carrier strike group and a Marine expeditionary unit being repositioned, a Patriot missile defence system moving from Texas into Israel, and US forces in the region restocking munitions. No official has confirmed any movement on the record.",
      impact:
        "The readiness-becomes-logistics prior asked for corroboration and a named base or hull; it has a flight record and an added formation, though still no official confirmation. The interceptor-reconstitution clock improves on arriving air defence even as the strike clock worsens.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'pivotal',
      source: "Israel's Central Elections Committee and the Shin Bet via The Times of Israel, with Al Jazeera, Ynet and i24NEWS",
      event: "The count closes at 53-48-19, and the election authority refers alleged foreign interference to the Shin Bet with Qatar named",
      summary:
        "Final allocations are Likud 27, Yashar 21, B'Yachad 12, the Joint List 11, the Democrats 8, Ra'am 8, Yisrael Beytenu 7, United Torah Judaism 7, Otzma Yehudit 7, Shas 6 and Religious Zionism 6 — 53 for the pro-Netanyahu bloc, 48 against, 19 for Arab factions, on 77.9 percent turnout and 5,716,665 votes. Certified results reach President Herzog on 4 November and the Knesset is sworn in on 10 November. Justice Noam Sohlberg authorised a limited and focused Shin Bet probe into alleged foreign attempts to influence the vote, with allegations involving Qatar and at least two other countries; sources said nothing in it could affect the result.",
      impact:
        "The count-over-exit-poll prior is satisfied and the arithmetic this file corrected yesterday is certified. The cohesion consequence is larger than the seats: the state whose mediators carried Vance's letter, and on whose soil talks may convene, is now a subject of an Israeli referral.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "The IRGC Navy and Brigadier-General Hossein Mohebi via House of Saud, carrying Arab News, Saudi Gazette and Xinhua; UKMTO Warning 185-26; CENTCOM on X via Fox News",
      event: "CENTCOM calls the IRGC's three-tanker mine claim false in terms that do not cover the route the IRGC named",
      summary:
        "The IRGC Navy said three oil tankers exploded and caught fire after striking sea mines on a southern Strait of Hormuz route it considers off-limits, and were abandoned on the southern shores; no names, flags, operators or cargoes were given and no casualties reported. UKMTO Warning 185-26 confirmed one vessel burning about nine nautical miles north of Khasab at around 0300 UTC, identified no cause, made no mine attribution and listed crew status unknown. CENTCOM posted that such claims are FALSE and that all internationally recognised primary transit routes have been cleared of sea mines. IRGC spokesman Brigadier-General Hossein Mohebi told CENTCOM to prove the claim with independent evidence rather than statements.",
      impact:
        "The claim-inflation prior is vindicated a second time, and this is the first flat CENTCOM denial of the series. But the rebuttal is bounded to primary transit routes and the claim concerns a southern route Iran itself declared off-limits, so both statements can hold and neither is independently verified.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "Commercial satellite imagery and unnamed open-source analysts with Javier Blas of Bloomberg, via Energy Update; the Associated Press and Aurorah Geosignal Intelligence",
      event: "Satellite imagery points at a damaged cracking unit at Ras Tanura while a named analyst counts nine loading tankers and exports at pre-conflict levels",
      summary:
        "Commercial satellite imagery reviewed by open-source analysts, with no firm named and no strike date given, shows damage to a key processing unit at Ras Tanura that appears to be a cracking unit, and an apparent cessation of flaring consistent with operations suspended or curtailed; the extent of disruption is not independently confirmed. Against that, Bloomberg's Javier Blas counted nine very large crude carriers loading at Ras Tanura and Juaymah with about 18 million barrels of combined capacity, and said Aramco had restored crude export volumes to pre-conflict levels and nearly recovered refined product exports. An Associated Press investigation reported Russian satellite intelligence may have supported Houthi attacks on Saudi energy sites, with Aurorah Geosignal Intelligence citing a correlation including a 19 October attack.",
      impact:
        "The loadings figure this file has demanded for weeks has arrived and it cuts against the strike's significance, while the imagery cuts for it. Processing and export are different questions, both answers may stand, and the Brent trigger is unmet. Neither Aramco nor the Energy Ministry has addressed the refinery claim.",
    },
    {
      id: 7,
      direction: 'de-escalating',
      importance: 'high',
      source: "Al Arabiya English sources via Daily Ittehad; Mehr News Agency and President Pezeshkian via Fox News; Araghchi and Rezaei via the NCRI",
      event: "Iran compresses its plan to four days, and the supreme leader issues a directive with content for the first time",
      summary:
        "Iran is seeking to shorten the proposed agreement's implementation from seven days to four, covering the reopening of the Strait of Hormuz, the lifting of the naval blockade on Iranian ports and international inspections of nuclear facilities. Mediators led by Qatar with support from Saudi Arabia, Pakistan, Egypt and Turkiye are exploring a meeting in Turkiye before 4 November; Qatari negotiator Ali al-Thawadi visited Tehran this week and Iranian officials said they would seek Mojtaba Khamenei's approval. Pezeshkian called the leader's directive to end the state of neither war nor peace an important step, and Khamenei described the situation as a crossroads. Iran says the blockade must lift before talks; Washington wants nuclear concessions first.",
      impact:
        "The formula-with-content prior advances: the probability moves 7 to 10 on a delegation head, a venue shortlist and a compressed timetable. The head-of-state-in-concealment prior gains its first directive carrying policy content, still relayed and still without an appearance. The sequencing deadlock is now stated by both sides.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'high',
      source: "Hadi Ahmadi via the state-run Eghtesad24, the regime statistics centre, and UN Special Rapporteurs Mai Sato and Andrea Bolanos Vargas, via the NCRI and Iran International",
      event: "A state-run outlet contradicts the central bank's no-restrictions claim within one cycle, putting pharmacy arrears at eleven months",
      summary:
        "Hadi Ahmadi, spokesperson for Iran's Pharmacists Association, told the state-run Eghtesad24 that pharmacies have not been paid for eleven months and cannot buy medicines already in distributors' warehouses, creating what he called an artificial medicine shortage; insulin, inhalers and cardiovascular and neurological drugs are named. That stands against Central Bank governor Abdolnaser Hemmati's statement one cycle earlier that there had been no restrictions whatsoever. The regime statistics centre put annual inflation at 73.6 percent in September, producer prices at 66.7 percent, spring contraction at 10.1 percent, unemployment at 9.1 percent and participation at 40.7 percent.",
      impact:
        "The two-official-ledgers prior hardens: the contradiction now comes from a state-run outlet one cycle after the central bank's denial, and the arrears figure is eleven months against the regulator's earlier twelve or thirteen. September inflation at 73.6 percent is a third unreconciled figure against 83.8 and 89.8 percent.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'high',
      source: "The Associated Press, the Sanaa Health Ministry, Yahya Saree and Mohammed al-Bukhaiti via Tasnim, PressTV and Yemen Press Agency; Major-General Turki al-Maliki via AFP — all relayed by House of Saud",
      event: "A market strike in al-Jawf is independently corroborated while the Houthis claim 101 attacks in a day, and the coalition says nothing",
      summary:
        "A Saudi-led coalition strike hit a public market and the nearby al-Tayseer fuel station in al-Hazm, al-Jawf. The Associated Press reported 13 killed and 16 wounded; the Houthi-run Sanaa Health Ministry put it at 14 killed and 15 wounded including three children and two women, and local sources said the market held no military installations. Yahya Saree announced 101 airstrikes and missile attacks in twenty-four hours across nine provinces and 3,480 cumulative strikes since July, neither independently verified. Dr Anis al-Asbahi put al-Jawf casualties at 186. Major-General Turki al-Maliki said a ballistic missile aimed at the Eastern Province was intercepted and destroyed, with Najran warnings lifted within minutes.",
      impact:
        "The AP figure is adopted as the cycle's only corroborated toll and the rest held apart, a contested count with a thirteen-versus-fourteen gap on the same market. The coalition issued no statement on the market, the tally or the civilian casualties, which the disclosure-is-a-choice prior records as a decision.",
    },
    {
      id: 10,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Brent and WTI futures via FinanceFeeds, CNBC and The National; Warren Patterson, Tim Skirrow and Giovanni Staunovo as relayed; central bank governor Yang Chin-long via the Taipei Times",
      event: "Brent eases on the letter, and Taiwan's central bank names the channel by which the barrel reaches domestic prices",
      summary:
        "Brent traded near $114.20 in Asian hours, down about 1 percent, with WTI at $101.40, down 1.4 percent, after Wednesday settlements of $115.32 and $102.78. Warren Patterson of ING said the market is pricing a larger probability of re-escalation; Tim Skirrow of Energy Aspects said traders are buying Brent calls expecting post-election tension; OPEC+ meets 1 November. Governor Yang Chin-long told the Legislative Yuan prices could face renewed pressure if subsidies end while oil rises, that inflation could increase further if both budget support and subsidies were withdrawn, and that rates should hold because the driver is supply-side.",
      impact:
        "The diplomacy-priced-not-supply prior holds a second time: nothing physical changed and the price fell on a letter. Taiwan's monetary authority has now confirmed the transmission the utility-balance-sheet and solvency-not-price priors inferred — the premium arrives through an appropriation decision, not a tariff.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: "+0 disclosed",
      status:
        "A thirtieth consecutive cycle with nothing disclosed, recorded as an absence of disclosure rather than a lull. Senator Warren's 16 October letter carries unanswered with three days to the 2 November deadline — in the cycle its addressee briefed the president on strike options at the White House and posted a one-word rebuttal of the IRGC mine claim.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series through the certified count, and no IDF casualty or operation was reported in the located liveblog this cycle. Gaza deaths stay on their parallel series and are not merged.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll and no named execution or death sentence located. The five unmerged execution series stand unreconciled against the NCRI's reported 1,186 executions in 2026. This is the fifty-first day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,714+ · WIA: 11,202+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+13 killed, +16 wounded",
      status:
        "The Associated Press figure for the al-Hazm market and al-Tayseer fuel station strike is adopted as the most independently corroborated element of the 28-29 October bombardment. The Sanaa Health Ministry's 14 and 15 for the same market, al-Asbahi's 186 for al-Jawf, Saree's 101-attack and 3,480-strike tallies and Aramco's eight injured at Ras Tanura are all held apart and unadded.",
    },
  },
  exec:
    "Qatari mediators delivered a letter from Vice President JD Vance to Mohsen Rezaei, secretary of Iran's Supreme National Security Council, on Sunday — the first time a named American principal has written to a named Iranian one in this file. The Wall Street Journal reports it covered a framework for negotiations rather than terms; The New York Times reports it proposed a meeting soon with Vance leading the American delegation and Iran's nuclear programme on the table from the start, possibly in Qatar or Turkiye as early as next week, and that Rezaei was to answer officially on Thursday. The Journal says Trump directed the letter. Trump denied it, said he had only approved the outreach, and recast it as help with medical supplies and various things. In the same cycle Admiral Brad Cooper presented strike options to Trump at the White House with Pete Hegseth and General Dan Caine, reported targets acquired names — Pickaxe Mountain and Kharg Island — more than ten American military transports landed at Israeli airbases, and a Marine expeditionary unit joined the carrier group and the Patriot movement. Trump has called off major strikes six times since July. Israel's count closed at Netanyahu 53, Eisenkot 48 and Arab factions 19 on 77.9 percent turnout, with certification due 4 November and the Shin Bet opening a limited probe into alleged foreign interference that names Qatar. CENTCOM called the IRGC's three-tanker mine claim false. Satellite imagery suggests a damaged cracking unit at Ras Tanura while Javier Blas counts nine loading tankers and exports restored to pre-conflict levels. Brent eased to about $114.20. Direction moves to mixed; the 30-day probability moves 7 to 10.",
  implications: [
    {
      title: "Both tracks hardened in the same cycle, and the principal disowned the one he authorised",
      body:
        "The readiness-becomes-logistics prior asked for corroboration of the movements and a named base or hull. It got the flight record — more than ten American military transports into Israeli airbases on analysts' reading — plus a Marine expeditionary unit added to the carrier group, and a target list that for the first time carries names rather than classes. Simultaneously the deal track acquired everything the mechanism-without-a-track test demanded: a named American principal, a named Iranian recipient, a delegation head, a venue shortlist and a date window inside a week. The novel fact is that one man produced both and then repudiated half of it. Read the letter as real and the disavowal as insurance. The decision remains ungranted — six called-off strikes since July is the base rate — and Cooper briefing options one day after the same officers briefed Vance is the cleanest picture yet of a government running deterrence and diplomacy from one desk.",
    },
    {
      title: "The mediator of the American channel is now a subject of the Israeli election authority's referral",
      body:
        "The count certified the arithmetic this file corrected yesterday — 53, 48 and 19, Likud at 27, turnout 77.9 percent — and added an institutional fact worth more than the seats. Justice Noam Sohlberg authorised a Shin Bet probe into alleged foreign attempts to influence the vote, with Qatar named among at least three countries, while Likud alleged the election was stolen with foreign help. Qatar is the state whose mediators carried Vance's letter, whose negotiator was in Tehran this week, and on whose soil the talks may convene. The coalition-cohesion clock moves on that collision, not on the seat count. Sources say nothing in the probe could affect the result, so this is not a contested-election scenario. Herzog receives the certified result on 4 November and the Knesset is sworn in on 10 November, which puts the mandate question one week behind the midterms rather than ahead of them.",
    },
    {
      title: "Taiwan: the central bank names the transmission channel, and the refinery's imagery and its loadings disagree",
      body:
        "Governor Yang Chin-long told the Legislative Yuan that prices could face renewed pressure if subsidies end while oil rises, that inflation could increase further were both budget support and subsidies withdrawn, and that rates should hold because the driver is supply-side. That is the monetary authority confirming what the utility-balance-sheet and solvency-not-price priors inferred: the Hormuz premium reaches Taiwanese households through an appropriation decision, not a tariff. CPI has run above the 2 percent threshold five months. For the barrel itself the cycle produced the loadings figure this file has demanded for weeks, and it cuts against the claim: Javier Blas counts nine very large crude carriers holding about 18 million barrels, with Aramco's crude exports restored to pre-conflict levels — while unnamed analysts read a damaged cracking unit and halted flaring from the same imagery. Both answers may stand, the Brent trigger is unmet, and the price fell on a letter.",
    },
  ],
  casualtyNotes: {
    us:
      "A thirtieth consecutive cycle with nothing disclosed, three days from the senators' deadline. The commander who has not answered the letter spent the cycle briefing the president on strike options.",
    israel:
      "No addition on the war series through the certified count, and no IDF casualty or operation located this cycle.",
    iran:
      "No new official war toll and no named execution located. The fifty-first day with no confirmed Iranian attack on a host state's territory.",
    other:
      "The AP's 13 killed and 16 wounded at the al-Hazm market is adopted as the cycle's only corroborated toll. The Health Ministry's 14 and 15, al-Asbahi's 186 and Saree's 101-attack tally are held apart.",
  },
};

export default data;
