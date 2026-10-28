import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "For the first time in this phase the readiness reporting carries force movement rather than an interval: a Patriot air-defence system from Texas to Israel, troops shifted off bases considered exposed, an additional carrier strike group, bombers and fighters readied, munitions restocked, and Gulf allies told to prepare for a short but intense campaign after the midterms. The planning-is-not-decision prior asks for tasking, munitions and carrier position; it now has all three, and still no approval.",
      risk7d:
        "Netanyahu's bloc led the count that his exit polls lost and he named a historic, one-time opportunity on Iran; Trump said anything is possible after the midterms. The senators' deadline falls on 2 November, OPEC+ meets 1 November, the midterms are 3 November and Israel's official result is due 4 November. Against that, Tehran offered to compress its seven-day plan to under a week.",
      spillover:
        "Aramco has confirmed a contained fire and eight injured at the terminal through which most Saudi crude leaves the Gulf, the coalition intercepted a missile aimed at Taif and debris damaged three sites in Riyadh, the Houthis claim a direct hit on the Saudi Defence Ministry and strikes on East-West pipeline pumping stations, and Iran's strait authority has told every Sinokor-linked vessel it faces legal action from 1 November.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: "The Wall Street Journal, relayed by Israel Hayom, Ynet, N12 and The Times of Israel, with a summary by Joe Truzman of the FDD; White House response via The Times of Israel",
      event: "The United States tells Gulf allies to prepare for a short but intense post-midterm campaign, and the reporting carries force movement for the first time",
      summary:
        "The Wall Street Journal reported that Washington warned several unnamed Gulf Arab states to prepare for a campaign against Iran that would be short but intense, after the US midterms. Relaying accounts add a Patriot air-defence system moving from Texas to Israel, troops shifted away from bases considered exposed to attack, an additional carrier strike group, further warships expected next month, bomber and fighter aircraft readied and munitions restocked. Trump is described as inclined toward a large-scale attack without having decided, with diplomacy continuing. No American, Israeli, Gulf or Iranian official spoke on the record; the White House said it would not comment on sensitive military plans that may or may not exist, while keeping all options on the table.",
      impact:
        "The planning-is-not-decision prior asks for approval, tasking and munitions movement, and until today the file had only published intent. It now has reported tasking, a named munitions and air-defence movement and a carrier reposition, with approval still withheld. The 96-hour interval acquires physical content; the decision does not.",
    },
    {
      id: 2,
      direction: 'pivotal',
      importance: 'high',
      source: "Israel's Central Elections Committee via The Times of Israel, with Netanyahu's Likud headquarters remarks and Ynet",
      event: "The count inverts the exit polls: Netanyahu's bloc leads at 53, Eisenkot's falls to 48, and Arab-led parties reach an all-time high of 19",
      summary:
        "With 89.8 percent counted, Netanyahu's bloc stood at 53 seats — Likud 26, Shas 7, United Torah Judaism 7, Otzma Yehudit 7, Religious Zionism 6 — against Eisenkot's 48: Yashar 21, B'Yachad 12, the Democrats 8, Yisrael Beytenu 7. Arab-led parties took 19, the Joint List 12 and Ra'am 7, an all-time high against 10 in the outgoing Knesset and a previous record of 15. Netanyahu's bloc is eight short of 61 and down from 68; Eisenkot's is 13 short. Three lists missed the 3.25 percent threshold. Up to 480,000 double-envelope ballots remain untallied, with official results due 4 November.",
      impact:
        "The majority-removed prior published yesterday was wrong in its direction and is corrected here: the maximal voice did not lose the plurality, it kept it while losing 15 seats. Netanyahu called the moment a historic, one-time opportunity alongside Trump, said Iran is weaker than ever, ruled out any government resting on Arab parties, and declined to declare victory.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: "Saudi Aramco via Argaam, Al Hadath via Newsquawk, NASA FIRMS via the World Ports Organization and Energy News Beat, the Saudi-led coalition's Major-General Turki al-Maliki, Saudi Civil Defence and Yahya Saree",
      event: "Aramco breaks the silence on Ras Tanura — fire fully contained, eight injured, operations unaffected — and satellite heat data puts the fire at the terminal, not the refinery",
      summary:
        "Aramco said the Ras Tanura terminal fire was fully contained, that eight workers were injured and that operations at the terminal were not affected; the statement did not address Saree's claim of a strike on the refinery, and no Energy Ministry statement on the refinery was located. Al Hadath attributed the fire to debris from an interception rather than to a strike that landed, and NASA FIRMS satellite data detected heat at the terminal but not at refinery processing units. The coalition destroyed a ballistic missile aimed at Taif; Civil Defence said debris from two intercepted missiles damaged a building, a construction site and a vehicle in Riyadh with no injuries, and lifted alerts for Jeddah and Yanbu. Saree claimed a direct hit on Riyadh's Defence Ministry and a drone strike on Abha airport, both unconfirmed.",
      impact:
        "The terminal-claimed-not-confirmed prior is answered on its own terms and retired: a Saudi institution has spoken, the fire is real, the injuries are Aramco's own figure, and the cause offered is interception debris. Satellite heat at the terminal and not the processing units is the first independent discriminator between the two claims, and the Brent trigger remains unmet.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'high',
      source: "Foreign Minister Abbas Araghchi's post on X via Anadolu and Middle East Monitor; the Qatari-Pakistani formula via Iranwire, republished by Shabtabnews; AEOI head Mohammad Eslami",
      event: "Araghchi offers to implement the seven-day plan in under a week, and a reported Qatar-Pakistan formula would trade interest on $6bn in frozen assets for confidential IAEA inspections",
      summary:
        "Araghchi said Iran's armed forces are prepared to defend the country and that Iran continues to give diplomacy a chance to succeed, adding that Tehran remains in close and ongoing contact with intermediaries to review ideas that could implement the seven-day plan in even less than a week. The plan, carried to Washington through Qatari mediators in September, has the United States ending hostilities, lifting the naval blockade, easing oil export restrictions and releasing frozen assets over five days, Iran reopening the strait on day six and talks resuming on day seven. Separately, Qatar and Pakistan are reported to be pursuing a formula granting Iran access to the interest on $6 billion in frozen Qatari bank assets in exchange for confidential, unannounced IAEA inspections, with initial positive signals from both sides and no confirmed approval. Araghchi named no mediator, date or venue.",
      impact:
        "The first formula with transactional content this file has carried: a named asset, a named mediator pair, a defined consideration and a reciprocal inspection regime. It is also the first proposal to route around the access problem Grossi described rather than argue it. Against it stands Eslami's 8 October position that Iran will neither abandon enrichment nor hand over its stockpile. Probability 6 → 7.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "CENTCOM commander Admiral Brad Cooper via CENTCOM and The Times of Israel; IMF PortWatch and Iran's strait authority via the straits.live daily brief; Trump at a Texas rally via Fox News",
      event: "CENTCOM declares the strait free of Iranian mines, and its own six-month figures imply about 8.2 million barrels a day against the president's claim of more oil than before the war",
      summary:
        "Admiral Brad Cooper, who overflew the Strait of Hormuz in a CH-47 on 25 October with Major-General Brandon Tegtmeier, said the primary transit routes remain free and clear of Iranian sea mines and that his forces remain intensely focused on keeping commercial traffic flowing. CENTCOM said more than 3,000 commercial vessels transited with its support over six months, exporting more than 1.5 billion barrels, and that over 95 percent of ships sailed through safely. Those figures imply about 16 transits a day and roughly 8.2 million barrels a day. IMF PortWatch recorded two transits on 25 October against a pre-crisis baseline of 85 a day, and the straits.live brief describes the waterway as effectively closed to commercial traffic with 46 to 50 vessels holding position away from berth. Trump floated renaming the strait after himself, citing increased flows.",
      impact:
        "The long-demanded CENTCOM mine assessment exists and is located, closing a standing item against the IRGC's fifth-rendering hull claim. But the same release settles the flows dispute against the administration: CENTCOM's own arithmetic lands on Kpler's 8.5 and roughly a fifth of the pre-war transit count, not at or above pre-war, and nowhere near the president's claim.",
    },
    {
      id: 6,
      direction: 'neutral',
      importance: 'medium',
      source: "The Federal Open Market Committee and Chair Kevin Warsh via Yahoo Finance's live coverage, with CME FedWatch and Bloomberg-derived futures pricing",
      event: "The Fed holds at 3.75 to 4 percent in a 10-2 split with both dissents for a hike, and the statement never mentions oil",
      summary:
        "The FOMC held its target range at 3.75 to 4 percent. The vote was 10-2, with Lisa Cook and Beth Hammack dissenting in favour of a quarter-point increase. Chair Kevin Warsh said politics played no role in the decision, that he is unwilling and unable to call financial conditions tight, that economic activity is expanding at a strong pace while uncertainty remains owing in part to geopolitical developments, and that inflation remains elevated. The statement softened its 2 percent language, saying the accumulation of more information will help the committee set policy. It named geopolitical developments and did not mention energy prices or oil. The next meeting is 9 December, with about an 85 percent chance of a hike priced.",
      impact:
        "Two dissents for a hike into a five-month oil high, and a statement that will not name the commodity doing the work. Under the multi-clock framework the political-will clock in Washington now runs on an explicitly apolitical central bank six days before the midterms, and the December hike is the instrument the oil premium will be answered with.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "President Trump via Fox News's 28 October live coverage; internal Defense Department figures via Reuters; Treasury Secretary Scott Bessent; the Israel Defense Forces",
      event: "Trump says anything is possible after the midterms, the Pentagon's own war spending passes $47bn, and Treasury says it is freezing Iranian regime crypto",
      summary:
        "Asked about strikes after the midterms, Trump said he could not say but that anything is possible. He said Iran wants a deal but likes tapping it along, that Tehran may be waiting for the election and that it would not help them, and that the United States has decimated Iran's military and finances. He put Iranian inflation at the highest in the world, 301 percent a couple of days ago. Reuters, citing internal Defense Department figures, reported that Iran war spending has exceeded $47 billion, more than 25 percent above the Pentagon's July estimate. Treasury Secretary Scott Bessent said Washington is tracking and freezing Iranian regime cryptocurrency assets. The Israel Defense Forces said on Wednesday it killed three Hamas military wing members in Gaza in response to what it called systematic ceasefire violations.",
      impact:
        "A seventh figure enters the war-cost series, and for once it is the Pentagon's own internal number rather than an external estimate, running 25 percent above its July guidance in three months. The 301 percent inflation claim sits against this file's 83.8, 89.8 and 4.24 percent monthly readings and is logged as a claim, not a count.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Central Bank governor Abdolnaser Hemmati, ILNA and Jamaran via the NCRI and Iran HRM",
      event: "Iran's central bank says there were no restrictions whatsoever on medicine currency, contradicting its own drug regulator's account of year-long payment arrears",
      summary:
        "Central Bank governor Abdolnaser Hemmati said nearly $3.3 billion was supplied for medicines in the first seven months of the Iranian year, up 28 percent year on year, and that there have been no restrictions whatsoever at the central bank in terms of providing foreign currency and rial resources, attributing current problems to logistics. Health officials, lawmakers and insurance bodies continue to report sharp price rises, disputes over the number of scarce drugs, lengthy payment delays to pharmacies and difficulty obtaining specialised medicines, citing sanctions, transport and import costs; patients are said to bear 55 percent of healthcare costs. Poultry rose to 350,000 rials a kilo in a week against a daily minimum wage of 5,540,000 rials, on figures the source does not reconcile internally.",
      impact:
        "The blockade-reaches-medicine prior now has two official Iranian accounts pointing opposite ways: the drug regulator's twelve-to-thirteen-month payment arrears against the central bank's no restrictions whatsoever. Both are state or state-adjacent, neither is differenced, and the gap between the ledger and the pharmacy is itself the finding.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: "+0 disclosed",
      status:
        "A twenty-ninth consecutive cycle with nothing disclosed, recorded as an absence of disclosure rather than a lull. Senator Warren's 16 October letter to Admiral Brad Cooper carries unanswered with four days to the 2 November deadline — and Cooper spent this cycle publishing transit counts, barrel totals and a mine assessment.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series through the count. The IDF said it killed three Hamas military wing members in Gaza on Wednesday, citing systematic ceasefire violations; Gaza deaths stay on their parallel series and are not merged.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll, and the Konarak claims stay unadded. This is the fiftieth day with no confirmed Iranian attack on a host state's territory. The internal ledger moved on economics rather than executions this cycle, with no named execution or death sentence reported and the five unmerged execution series still unreconciled.",
    },
    other: {
      cumulative: "KIA: 3,701+ · WIA: 11,186+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 adopted",
      status:
        "Aramco's eight injured at Ras Tanura — six contractors and two employees — is the first Saudi institutional casualty figure for that site and is held apart pending a retrievable primary text, since the Argaam item carrying the quote served a 2016 article on retrieval. Two reported killed and two injured by intercepted-drone debris near the Shaybah processing plant, and a figure of 14 killed in two Riyadh airport strikes this month, are likewise held apart and not merged with the named Dammam dead.",
    },
  },
  exec:
    "The Wall Street Journal reported that the United States has told several Gulf Arab states to prepare for a campaign against Iran that would be short but intense, after the midterms. Relaying outlets add force movement rather than language: a Patriot air-defence system from Texas to Israel, troops shifted off bases considered exposed, an additional carrier strike group, warships expected next month, bombers and fighters readied and munitions restocked. No official spoke on the record, and the White House would not comment on sensitive military plans that may or may not exist. Israel's count inverted its own exit polls. With 89.8 percent tallied, Netanyahu's bloc stands at 53 seats against Eisenkot's 48, with Arab-led parties at an all-time high of 19 and neither bloc near 61. Netanyahu named a historic, one-time opportunity alongside Trump and did not declare victory. Aramco broke its silence on Ras Tanura: the fire was fully contained, eight workers were injured, terminal operations were unaffected, Al Hadath attributed the fire to interception debris, and NASA FIRMS found heat at the terminal but not at refinery processing units. Araghchi said Iran could implement its seven-day plan in even less than a week, and a reported Qatar-Pakistan formula would trade interest on $6 billion in frozen Qatari assets for confidential IAEA inspections. Admiral Brad Cooper declared the strait free of Iranian mines, while CENTCOM's own six-month figures imply about 8.2 million barrels a day and roughly a fifth of pre-war transits. The Fed held at 3.75 to 4 percent in a 10-2 split with both dissents for a hike. Direction changes to escalating; the 30-day probability moves 6 → 7.",
  implications: [
    {
      title: "The interval finally has hardware attached, and the decision still does not",
      body:
        "Under the multi-clock framework the active-deadline clock has been the least informative instrument this file carries, because every reading of it since Day 240 has been a statement. This cycle it is a shipment. A Patriot air-defence system is reported moving from Texas to Israel, troops are being shifted off bases considered exposed, an additional carrier strike group is named, warships are expected next month, bombers and fighters are being readied and munitions restocked — and several Gulf governments have been told to prepare. The planning-is-not-decision prior specified exactly these three tests: tasking, munitions movement and carrier position. All three are now reported, which is the first time the prior's own evidentiary bar has been met. Two restraints survive. The sourcing is a single Wall Street Journal story relayed through Israeli outlets with no official on the record, so the claim-is-not-confirmation prior still governs the particulars. And approval is explicitly absent: Trump is described as inclined toward a large attack without having decided, and asked directly he said only that anything is possible. The distinction that matters is that readiness has stopped being a number and started being a logistics trail, which is gradeable in a way an interval never was.",
    },
    {
      title: "The file was wrong about the ballot by one cycle, and the correction runs the other way",
      body:
        "Yesterday this file published that the ballot had stripped the maximal voice of a majority. The count says otherwise. At 89.8 percent, Netanyahu's bloc leads 53 to 48 with Arab-led parties at 19, and the correct-the-file prior requires that be published as a development rather than absorbed. What actually happened is narrower and stranger than either reading: Netanyahu lost 15 seats from 68 and still holds the plurality and the lead, Likud came in at 26 above its own exit-poll range, and the Arab parties' all-time high is the arithmetic that denies both blocs a majority rather than delivering one. The pollster-provenance prior, retired yesterday with evidence, does not come back — Direct Polls' 61 still never appeared — but the exit polls that replaced it were wrong in the opposite direction, which argues for grading Israeli seat counts only on the Central Elections Committee. The consequence for the war is the part to watch. The man who called Iran weaker than ever and the moment a historic, one-time opportunity alongside Trump is the man likeliest to receive the mandate, six days before the midterms his ally's reported campaign is keyed to, with his chief of staff's operational dissent still unanswered.",
    },
    {
      title: "Taiwan: the rate freeze renews for a second time while the barrel's own escort admits a fifth of normal traffic",
      body:
        "Taiwan's electricity tariff stays at NT$3.7823 per kilowatt-hour, a second consecutive freeze, after Taipower absorbed about NT$71.1 billion in fuel costs from March to August and a 12.83 percent rise that its own review plan warranted went unapplied; Deputy Economics Minister Lai Chien-hsin confirmed deferral to the December review, with the earliest increase effective January. The committee again asked the ministry to secure the NT$71.1 billion from the Legislative Yuan, where it remains pending. The appropriation-is-the-constraint and solvency-not-price priors hold unchanged: the premium is being absorbed by a state balance sheet instead of a price signal, and the review has now deferred twice. What changed is the volume picture Taipei's procurement rests on. CENTCOM's own publication implies about 16 transits a day and 8.2 million barrels, IMF PortWatch logged two transits on 25 October against an 85-a-day baseline, and ANZ's 60 percent now looks optimistic rather than contrarian. The conflict has already swung crude between $68 and $132. For an importer that buys almost all of its energy and most of its LNG through this water, a deferral dated January against a campaign dated November is the mismatch to price.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-ninth consecutive cycle with nothing disclosed, four days from the senators' deadline. The same commander who did not answer the letter published transit counts, barrel totals and a mine assessment this cycle.",
    israel:
      "No addition on the war series. Three Hamas military wing members killed in Gaza on the parallel series, on the IDF's own account.",
    iran:
      "No new official war toll and no named execution reported this cycle. The fiftieth day with no confirmed Iranian attack on a host state's territory.",
    other:
      "Aramco's eight injured at Ras Tanura is the first Saudi institutional figure for the site and is held apart pending a retrievable primary text. Shaybah's two killed and two injured, and the 14 reported killed in two Riyadh airport strikes, are held apart.",
  },
};

export default data;
