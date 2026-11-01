import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged, but the balance moved toward the strike track. The deal side gained Rezaei's account of a third American reply he calls much better and Trump saying the war ends very soon. The escalation side gained a target-list order from the supreme leader, a public refusal to negotiate or reopen the strait, a debate over Iran's nuclear doctrine, and the first limpet mines of the war.",
      risk7d:
        "Extreme and unchanged, two days from the midterms that both the reported strike planning and Trump's expired 8 October pledge are keyed to. Two diplomats told the AP no final decision has been taken. Six called-off strikes since July remains the base rate.",
      spillover:
        "Critical and unchanged. A drone was intercepted in the Makkah region, the second near the city in 44 days, while the Houthi spokesman denied every Saudi operation attributed to his forces. A named Geneva firm placed Russian satellites over 40 Saudi target areas and a Saudi deputy minister confirmed the flows.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "Mojtaba Khamenei via Telegram, reported by CBS News and The New Arab, relayed by The Times of Israel, the Oman Observer and L'Orient Today",
      event: "Iran's supreme leader speaks for himself and orders the target lists widened to all US and Israeli assets",
      summary:
        "In a Telegram statement on Saturday, Mojtaba Khamenei warned that any renewed American or Israeli attack would draw a response imposing no geographic limits, and reportedly instructed the armed forces to update their target lists to cover all American and Israeli assets, described by the relaying outlets as tangible and intangible. He stressed the strategic importance of united fronts. No verbatim text has been published, and the geographic-limits wording is the outlets' summary rather than confirmed quotation. He has still not appeared in public since the war's first day.",
      impact:
        "The head-of-state-in-concealment prior gains a second directive with content and is not retired: an order relayed from concealment is second-hand by construction. A target-list instruction from the principal is the highest-level escalation signal in this file.",
    },
    {
      id: 2,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "Mohsen Rezaei on Iranian television, relayed by N12, The Times of Israel, News.co.il and Israel Hayom via Israel.com",
      event: "Rezaei's answer arrives and points both ways, and Iran's nuclear doctrine is put in question for the first time",
      summary:
        "Rezaei said he had read Vance's letter but had not answered it, and would say nothing of its contents because the Americans had published nothing. He said the American tone had completely changed, a good sign showing Iran had consolidated its victory. On N12's account a second American proposal improved on the first, Araghchi warned the Americans that Iran suspected them of wanting to negotiate and then attack after the elections, and a third reply Rezaei called much better showed Washington prepared to accept Iran's seven conditions, with a new round begun. He also said the strait stays closed and there will be no negotiations until the conditions are met, and that Iran is debating whether to keep its longstanding nuclear doctrine if fighting resumes.",
      impact:
        "The promised reply is still unsent, and the claimed American concession is relayed only by the Iranian principal. The doctrine debate is the first time the weapons ban has been publicly put in question, and no decision is claimed.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: "Trump at the White House and on Kansas City radio, with two diplomats via the AP, army spokesman Mohammad Akraminia and IRGC spokesman Hossein Mohebbi via Kayhan",
      event: "Trump says they want to talk and the war ends very soon, and again recasts the Vance letter as medical supplies",
      summary:
        "Trump said there are talks, that they want to talk, that they keep talking, and that the United States has time to reach a deal, adding we have time, frankly; on Kansas City radio he said the eight-month conflict would end very soon. He again disputed the Wall Street Journal's account that Vance's letter was sent at his direction, saying it concerned medical supplies. Two diplomats told the AP he had not decided on military action once his 8 October pre-midterm moratorium lapses. A Qatari delegation in Tehran is reported to carry a revised American draft. Akraminia said the strait stays under Iranian control until Iran's conditions are met.",
      impact:
        "The principal-disowns-the-channel prior holds unchanged in the principal's own words. Read the letter as real and the disavowal as insurance, and grade the channel on a convened session rather than any presidential characterisation.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'pivotal',
      source: "UKMTO Warning 187-26, Oman's Maritime Security Centre, Bloomberg, the IRGC Navy and IRIB, with CENTCOM denials, relayed by Arab News, Al Arabiya and the Manila Times",
      event: "The strait produces its first named hulls and the first successful limpet-mine attack of the war",
      summary:
        "The Panama-flagged tanker Louise 1 was struck by two limpet mines on 29 October about 25 nautical miles north-east of Khasab, the devices attached by a small boat; the crew put out an engine-room fire and the ship resumed its voyage. Bloomberg called it the first known successful limpet strike in the strait since February. The Panama-flagged crude tanker RITI caught fire after Oman said it had been targeted, and Oman's navy took off all 25 crew with no fatalities. UKMTO separately logged a vessel hit by an unknown projectile 40 nautical miles south of Lavan Island. The IRGC Navy said three tankers struck mines on the route it calls unauthorised; CENTCOM denied the halting claim, denied any IRGC presence and called the four-tanker claim false.",
      impact:
        "The standing demand for a named hull is answered twice over, and limpet mines are a new weapon class requiring a boat alongside. The bounded-denial prior governs: CENTCOM's denial is scoped to the primary routes and retires nothing about the southern corridor.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'pivotal',
      source: "The Pentagon's Defense Casualty Analysis System, reported by Stars and Stripes, with Newsweek and Democracy Now",
      event: "The Pentagon's own database raises the American toll to 23 dead and 865 wounded, reconciling the figure withheld from the senators",
      summary:
        "The Defense Casualty Analysis System raised the official American death toll to 23, up from 21 on 10 October, after additional non-combat deaths were recorded in database updates on Wednesday and Thursday. The total splits into 15 deaths under Operation Epic Fury, begun with the 28 February strikes, and eight under the overseas-operations category covering casualties since 7 July. Wounded stand at 865 — 417 and 448 respectively. The most recent deaths were airmen and the Air Force gave no further detail. No official was named: the revision surfaced through the database rather than a statement.",
      impact:
        "The contested American casualty line is resolved from the department's own records, three days before the senators' deadline: 17/440 is superseded and the senators' 23/861 substantially vindicated. A casualty revision is published as a development in its own right.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "Reuters reporting by Ahmad Ghaddar, Olesya Astakhova and Alex Lawler via SRN News, with Brent, war-risk, IMF PortWatch and UKMTO figures as relayed",
      event: "OPEC+ agrees in principle to hold December output while Brent closes a fourth straight monthly gain",
      summary:
        "Three sources told Reuters that members had reached a preliminary accord, before an online meeting on Sunday, to leave December output targets where they are, with further policy changes expected only next year. The 1.65 million barrel-per-day cut from 2023 was fully unwound in September; a further layer of about two million covers most members through end-2026. Reuters noted Gulf members still pump well below target. Brent traded $117.56 to $117.88 on 30 October against $116.54 at 0900 GMT, up roughly 15 percent across the month. War-risk premiums reached 7.5 to 10 percent of hull value per transit against a pre-war 0.25 percent.",
      impact:
        "A pre-announced dated event returns a result rather than an expectation, and the cartel-abstention prior holds a fourth month. The price now runs three ways — $113.82, $116.54 and $117.88 inside 48 hours — and is not differenced.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Sentinel-2 Copernicus imagery and the MenchOsint account via The Maritime Executive, with Javier Blas of Bloomberg",
      event: "Satellite imagery confirms strike damage at Ras Tanura, and a named open-source account attaches itself to the read",
      summary:
        "Commercially available Sentinel-2 imagery dated 25 October shows a critical component of the Ras Tanura refining complex struck, the marine terminal tank farm also hit, and what appears to be a cracking unit damaged; analysts said the refinery had stopped flaring, suggesting shutdown or curtailment. The MenchOsint account said on 28 October that imagery confirmed a strike less than 48 hours earlier and a damaged processing unit. Throughput at a plant normally running up to 550,000 barrels per day is reduced. Crude exports are not impeded: Javier Blas counted nine very large crude carriers loading at Ras Tanura and Juaymah, enough for 18 million barrels. Neither Aramco nor the government has commented.",
      impact:
        "The processing-is-not-export prior is confirmed on both halves at once, and the demand for a named open-source attribution is answered by an account rather than a firm. The Brent trigger is graded on loadings and stays unmet.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'pivotal',
      source: "AURORAH GeoSignal Intelligence and its head Nawaf Obaid, analyst Elijah Magnier, three officials via the AP and Saudi deputy foreign minister Rayed Krimly, via Al Jazeera",
      event: "A named Geneva firm places Russian satellites over 40 Saudi target areas, and a Saudi minister confirms the flows on the record",
      summary:
        "AURORAH GeoSignal Intelligence, a Geneva firm led by Nawaf Obaid, examined 40 Houthi attacks on Saudi Arabia between 1 July and 19 October and reported Russian military satellites observing the target areas before and after each one, naming the Bars-M, Persona, Lotos-S1, Pion-NKS and Kondor-FKA systems. Obaid said the work establishes the wider intelligence relationship and that attributing specific imagery to individual launches needs further corroboration. Three officials told the AP that the Houthis benefited from Russian intelligence. Saudi deputy foreign minister Rayed Krimly said the Houthis receive intelligence from Russia and China, and that Riyadh raises it with both. Moscow has not commented.",
      impact:
        "Russia moves from subject to a sourced finding with a named firm, a named principal and a Saudi minister on the record. The attribution-as-a-commercial-product prior governs: cite the firm, and never upgrade its read to a government finding.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'high',
      source: "Coalition spokesman Major-General Turki al-Maliki via AFP and Anadolu, with Houthi spokesman Yahya Saree on X, relayed by The Nation and the Deccan Chronicle",
      event: "Saree denies every Saudi operation attributed to his forces, 48 hours after claiming six of them",
      summary:
        "Al-Maliki said air defences intercepted and destroyed a hostile drone in the Riyadh region on Saturday, with debris falling, no injuries and the site still being inspected; the drone's type and origin were not named. The coalition separately reported a drone intercepted in the Makkah region — the second near the city in 44 days — and a ballistic missile aimed at the Eastern Province. Saree said the Yemeni armed forces have carried out no operation directed towards the Saudi interior, called the Medina drone account a massive and egregious fabrication, and said operations target only oil facilities and military bases. He had claimed six named attacks on 29 October, including Ras Tanura and Abqaiq.",
      impact:
        "The claims-falsified-from-both-sides prior is reinforced from the claimant's own side: a spokesman who claimed six attacks now denies all of them. Neither the claims nor the denial is adopted, and the gap is the finding.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'high',
      source: "Qatari foreign ministry spokesman Majed al-Ansari, Israeli police, Dean Livne, Justice Noam Sohlberg and Mansour Abbas via Ynet, with Haaretz and Turkiye Today",
      event: "Qatar's denial acquires a name and a quote, and Israel's police reject the stolen-election claim outright",
      summary:
        "Majed al-Ansari, spokesman for Qatar's foreign ministry, rejected the allegations made by certain Israeli politicians and their media associates, said that if all these claims were believed Qatar would probably own all of Israel, called them ridiculous and dangerous, and wrote that Doha should not be used as a scapegoat for political failures. Israeli police rejected Likud's stolen-election claim, saying there was no evidence whatsoever. Livne said the elections were lawful and claims of systematic violations baseless, while Sohlberg, who ordered the Shin Bet probe, could not assess the suspicions' credibility. Abbas denied any connection and pledged cooperation. The Mossad is reported to have joined the probe, with Turkiye also under scrutiny.",
      impact:
        "The mediator-under-investigation prior gains a named spokesman and a quote, and two Israeli institutions now contradict the losing bloc rather than the mediator. Both candidate venues remain inside the referral.",
    },
    {
      id: 11,
      direction: 'escalating',
      importance: 'high',
      source: "HRANA and Hengaw via Iran International, with UN Special Rapporteur Mai Sato and Iran Human Rights Monitor",
      event: "A named death sentence, a cleric sentenced twice, and the protest execution count reaches 34",
      summary:
        "A court sentenced Omran Amani, 21, to death for moharebeh; no court was named and no lawyer or rights group quoted. HRANA reported that a cleric identified only as Mehdi, a former IRGC member arrested in January's protests, was sentenced to death twice — by Branch 23 of the Tehran Revolutionary Court alongside protesters Amirreza Rezaei and Vahid Ghahremani on charges including acting for Israel, and again by the Special Clerical Court for apostasy. Mai Sato said at least 34 people have been executed over the protests, and recorded 34 defendants tried in five days, twelve sentenced to death and seven already executed. Hengaw reported three executions over two days.",
      impact:
        "The internal-front prior hardens with named defendants rather than aggregate series, and a five-day trial of 34 defendants is the sharpest procedural finding this file has carried. The five execution series remain unreconciled.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448) · superseded AP/CENTCOM series: 17 / 440",
      delta: "+6 KIA, +425 WIA on reconciliation",
      status:
        "The thirty-second cycle without a disclosure statement, but the first in which the department's own database answered the question the statements would not — three days before the senators' deadline, from no named official, substantially vindicating the 23/861 the senators used.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty or operation located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. Three executions over two days and one named death sentence are recorded against Mai Sato's at least 34 protest-related executions, and none is merged into the war series. The fifty-third day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,714+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "Nothing adopted. Newly located Saudi-official figures — at least 12 killed and 300 injured at King Khalid, two killed and eight wounded at King Fahd on 21 October — are held apart pending reconciliation with the fourteen-killed series. All crew from both named hulls are reported safe.",
    },
  },
  exec:
    "Iran's supreme leader spoke for himself and widened the target lists. In a Telegram statement on Saturday, Mojtaba Khamenei warned that any new American or Israeli attack would draw a response with no geographic limits, and reportedly ordered the armed forces to update their target lists to cover all American and Israeli assets. He has still not appeared in public. Mohsen Rezaei's answer arrived and points both ways: he has read Vance's letter and not replied, says the American tone has completely changed, and says a third American reply was much better and showed Washington prepared to accept Iran's seven conditions — while saying the strait stays closed and there will be no negotiations until those conditions are met. He also said Iran is debating whether to keep its longstanding nuclear doctrine if fighting resumes. Trump said they want to talk and the war ends very soon, and again recast Vance's letter as medical supplies. The strait produced its first named hulls: the Louise 1, struck by two limpet mines off Khasab, and the RITI, set ablaze with 25 crew taken off by Oman's navy. CENTCOM denied the IRGC's halting claim and called its four-tanker claim false. The Pentagon's own database raised the American toll to 23 dead and 865 wounded, superseding 17/440 three days before the senators' deadline. Satellite imagery confirmed a damaged cracking unit at Ras Tanura while nine tankers loaded alongside. A Geneva firm placed Russian military satellites over 40 Saudi target areas, and a Saudi deputy minister confirmed the intelligence flows on the record. OPEC+ held December output; Brent closed a fourth straight monthly gain. Direction stays mixed; the 30-day probability holds at 9.",
  implications: [
    {
      title: "The principal spoke, the answer arrived, and the two point in opposite directions",
      body:
        "Under the multi-clock framework the negotiation-capacity clock stays strained and the active-deadline clock worsens, both on the same two statements. For seven cycles this file has asked whether Mojtaba Khamenei would appear and whether Rezaei's answer existed. Both were answered in one day, and the answers disagree. The supreme leader, still unseen, ordered target lists updated to cover all American and Israeli assets and promised a response with no geographic limits. Rezaei said the American tone had completely changed, called a third American reply much better and said it showed Washington prepared to accept Iran's seven conditions — then said the strait stays closed and there will be no negotiations until those conditions are met. Both cannot be the same signal. The disciplined reading is that the deal track gained a claimed concession relayed solely by the Iranian principal, with no American confirmation and no text, while the strike track gained a targeting instruction from the man who decides. The doctrine debate is the sharpest new fact. Grossi's unverified material and the absence of observed reconstruction both still hold, and no American official has answered him. The probability holds at 9, because only a text, a named signatory or a convened session the United States attends moves it further.",
    },
    {
      title: "The strait named its hulls and the Pentagon named its dead, and two long absences closed in one cycle",
      body:
        "The energy-infrastructure clock worsens while the political-will clock finally registers a disclosure. Two of this file's oldest demands were met. After six renderings of the hull claim with no vessel named, the strait produced the Louise 1 and the RITI — one struck by two limpet mines attached by a small boat off Khasab, the other burning with 25 crew taken off by Oman's navy. Limpet mines are a new weapon class here and require a boat alongside rather than a drifting field: a different capability and a different attribution problem. And after thirty-one cycles of non-disclosure, the Pentagon's own Defense Casualty Analysis System raised the American toll to 23 dead and 865 wounded, superseding 17/440 and substantially vindicating the senators' 23/861 — a reconciliation that arrived through a database rather than from any named official. The disclosure-is-a-choice prior is amended rather than retired: the department answered the arithmetic while leaving Warren's letter, the base-damage estimate and the $47bn unaddressed. The bounded-denial prior governs the strait again, because CENTCOM's denials are scoped to the primary routes while the Iranian claims concern the southern corridor Iran itself declared off-limits.",
    },
    {
      title: "Taiwan: the barrel held its fourth monthly gain while Taipei's subsidy arithmetic stays unreconciled",
      body:
        "The oil-reserve and energy-infrastructure clocks both hold, and the utility-balance-sheet prior governs Taipei's exposure unchanged. OPEC+ agreed in principle to leave December output where it is, so the supply side delivered no relief, and Brent closed a fourth consecutive monthly gain, up roughly 15 percent in October. War-risk premiums of 7.5 to 10 percent of hull value per Hormuz transit, against a pre-war 0.25 percent, put $7.5m to $10m on a single passage for a $100m very large crude carrier — a cost reaching an importing economy through freight rather than through the barrel. No fresh retrievable Taiwan-relevant development was located. An economy-ministry package of about T$415bn was located, T$180.9bn as a supplementary budget plus a T$233.8bn injection for CPC against accumulated losses above T$127.6bn, but it is dated to early October and does not reconcile against the NT$71.1bn and NT$607.6bn figures already carried. Under the contested-count prior all are held and none differenced. Otherwise unchanged: the allocation has not advanced, the December tariff review has not been granted, and Iran's plans against Gulf subsea cables have drawn no response for a thirteenth cycle.",
    },
  ],
  casualtyNotes: {
    us:
      "The first reconciliation of this phase, and it came from the Pentagon's own database rather than a statement. 17/440 is superseded by 23/865; Warren's letter, the base-damage estimate and the $47bn remain unanswered with one day to the deadline.",
    israel:
      "No addition on the war series and no IDF casualty or operation located this cycle.",
    iran:
      "No new official war toll. Named death sentences and three executions over two days are recorded against Mai Sato's at least 34 protest-related executions, and none is merged into the war series.",
    other:
      "Nothing adopted. The King Khalid and King Fahd tolls newly attributed to Saudi officials are held apart from the fourteen-killed series, and every crew member from both named hulls is reported safe.",
  },
};

export default data;
