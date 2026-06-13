import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 107 is the dated signing day, and it opens bimodal. The evening of Day 106 firmed the strongest Iranian commitment scaffolding of the war — Parliament Speaker Qalibaf named as Tehran's Geneva signatory alongside Vance, Trump claiming Khamenei's approval, and Sharif tightening the timeline to 'within 24 hours' (Reuters via TBS, CBS). But §3.5.3 governs and the substance stayed contested: after Geneva, Vance said Iran 'is not yet willing to acknowledge' Trump's red lines on the nuclear file, and Iran's Foreign Ministry called the main text 'almost finalised' yet said the Americans were 'being greedy and raising new requests' (Times of Israel, Reuters). Direction stays mixed — the date, venue and signatories are set; the nuclear core and a landed signature are not.",
      risk7d:
        "Seven-day risk stays critical and remains bimodal, now collapsed onto a single dated event: whether Geneva produces a signature today. The negotiation-capacity clock is at its strongest reading of the war — a named higher-level Iranian signatory (Qalibaf), claimed Supreme-Leader buy-in, a finalized main text, a venue and a date. Against it: Vance's 'red lines not yet acknowledged,' Iran's 'new requests' complaint, IRGC-linked Tasnim counting Trump's 'thirty-eighth' deal-imminence claim in two months, Araghchi's hedge that any deal would be 'signed remotely,' and a framework already broken three times. A signature converts the week toward ceasefire; a collapse on terms repeats the Day 51 pattern.",
      spillover:
        "Spillover holds critical. The Lebanon front stayed kinetic into signing day — Israel struck al-Qasiba in southern Lebanon and Hezbollah answered with two drones on Israeli positions, with no injuries reported (Al Jazeera, Times of Israel). The MOU reportedly folds Lebanon into a 60-day ceasefire with Israeli self-defense retained, but Netanyahu — kept out of the talks — insists all enriched uranium 'has to leave Iran' and says Trump assured him the final accord will mandate removal (Tribune). The Strait stayed closed and the chokepoint risk is unchanged; a single strike on a transiting vessel, or an Israeli action outside the deal, remains the fastest path back to escalation.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Reuters via TBS / Detroit News / CBS / Times of Israel',
      event:
        "The dated June 14 Geneva signing arrived with the strongest commitment scaffolding of the war: Parliament Speaker Qalibaf named as Tehran's signatory alongside VP Vance, Trump claiming Khamenei approved the deal, and Pakistan's Sharif tightening the timeline to 'within 24 hours'",
      summary:
        "A Western source told Reuters the MOU could be signed 'as soon as Sunday' in Geneva, with the wording to be finalized Saturday; Trump said he 'understands the answer is yes' on Supreme-Leader approval — the first claimed Khamenei buy-in — while a senior Iranian source said the draft would waive oil sanctions, unfreeze funds and require a cessation on all fronts including Lebanon (Reuters via TBS, CBS).",
      impact:
        "This is the firmest pre-signature configuration the war has produced — a higher-level Iranian signatory than Day 106's Araghchi, claimed Supreme-Leader cover, a named venue and a date. Skeptical counter per §3.5.3: every credibility marker here is a claim by an interested party, and Tehran has not confirmed Khamenei's approval. The binding test narrows to one fact today — whether a signature lands in Geneva.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Times of Israel / Jerusalem Post / Reuters',
      event:
        "After the Geneva round, Vance said Iran 'is not yet willing to acknowledge' Trump's red lines on the nuclear program, holding the US to 'zero enrichment' with only 'token enrichment' considered; Iran's Foreign Ministry called the main text 'almost finalised' but said the Americans were 'being greedy and raising new requests'",
      summary:
        "Vance said the talks 'in some ways went well' — the sides agreed to meet again — 'but in other ways it was very clear the President has set some red lines that the Iranians are not yet willing to acknowledge and work through,' the same nuclear core both sides described incompatibly on Day 106 (Times of Israel, Jerusalem Post).",
      impact:
        "The §3.5.3 gap persists into signing day in both directions: Washington says Iran won't accept the red lines, Tehran says Washington is adding demands. Analytical judgment: a signature on the cessation-and-Hormuz package is plausible today; a signature that resolves enrichment on Washington's 'zero/token' terms is not yet evidenced. Confirmation of a venue is not agreement on the core.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: 'Tasnim via House of Saud / Iranian officials direct',
      event:
        "Tehran damped the imminence signaling even as the venue firmed: IRGC-linked Tasnim counted Trump's statement as his 'thirty-eighth' identical deal-imminence claim in two months and advised treating it as past messaging until Iran confirms, while FM Araghchi said any deal would be 'signed remotely' and defended Iran's right to collect Hormuz 'service fees'",
      summary:
        "Araghchi described an MOU covering Hormuz, Lebanon and 'all other fronts' but kept the service-fee position, and Iranian outlets withheld confirmation of Khamenei's approval — leaving Trump's claim uncorroborated from Tehran's side (Tasnim, Araghchi statements).",
      impact:
        "Cited as actor framing, not neutral fact: the state-media skepticism and the 'signed remotely' hedge are how the regime is managing its own audience as a signature nears. Analytical judgment: the gap between Washington's ceremony framing and Tehran's hedged, fee-retaining posture is itself the signal — the toll-institutionalization prior (§3.5.6) survives intact inside the draft.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / Times of Israel / Tribune / Axios',
      event:
        "The Lebanon front stayed kinetic into signing day — Israel struck al-Qasiba in southern Lebanon, drawing two Hezbollah drones on Israeli positions with no injuries reported — while Netanyahu, kept out of the talks, insisted all enriched uranium 'has to leave Iran' and said Trump assured him the final accord would mandate removal",
      summary:
        "The MOU reportedly folds Lebanon into a 60-day ceasefire with Israeli self-defense retained, but Israeli forces still hold parts of the south and the cross-border exchanges continued; Netanyahu's office said any final accord would obligate Iran to surrender its stockpile, a maximal reading Tehran's draft does not match (Al Jazeera, Tribune, Axios).",
      impact:
        "Re-asserts the Israel-independence prior: a deal that depends on Israeli compliance is structurally fragile, and Netanyahu has both praised and contradicted its terms. The Lebanon-in-MOU clause is a mild de-escalation signal; the binding LAF test through the week of June 22 and Lebanon MOH above 3,600 carry.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / CNBC / EIA / House of Commons Library',
      event:
        "Brent held its three-month low into signing day — settling near $87.33 after falling more than 4% below ~$86.50 on Day 106, the lowest since early March — pricing the dated Geneva signing as de-escalation while the chokepoint stayed structurally closed",
      summary:
        "The EIA's June outlook still frames the June-July average near $105; Mehr's reported 14-point draft would reopen Hormuz within 30 days of a signing, the first dated reopening mechanism, but it is unsigned and contested, and China and Russia's April Hormuz-resolution veto cover carries (Trading Economics, CNBC, House of Commons Library).",
      impact:
        "The energy market is pricing a deal whose nuclear core its own principals still dispute. Skeptical counter: the IRGC's 'closed to all vessels' declaration, the >100-day effective closure, and the ~40-ship NCAGS Bahrain channel are unchanged. Analytical judgment: the energy-infrastructure clock is unchanged structurally — the price fell, the chokepoint did not open.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (kinetic pause on Gulf bases held; signing-day diplomacy, no US casualties)',
      status:
        "No new US casualties. The kinetic pause on Gulf bases held into the dated signing day. VP Vance, named as the US Geneva signatory, said after the talks that Iran is 'not yet willing to acknowledge' Trump's nuclear red lines, holding Washington to 'zero enrichment' with only 'token enrichment' considered; the $24B frozen-asset release stays tied to performance metrics over a 60-day window. Sledgehammer remains operational; the Kharg Island option stays shelved.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 107 IDF KIA (two Hezbollah drones intercepted, no injuries reported)',
      status:
        "No new IDF KIA. Israel struck al-Qasiba in southern Lebanon and Hezbollah answered with two drones on Israeli positions, with no injuries reported, keeping the Lebanon front kinetic as the deal advances. Netanyahu — kept out of the talks — insisted all enriched uranium 'has to leave Iran' and said Trump assured him the final accord would mandate removal, a maximal reading Tehran's draft does not match. Israeli forces still hold parts of southern Lebanon under the MOU's self-defense-retained clause.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new published (signing-day diplomacy and rhetoric, not kinetic)',
      status:
        "No verified new mass toll; the day was diplomatic and rhetorical. Iran's Foreign Ministry called the main text 'almost finalised' but said the Americans were 'being greedy and raising new requests,' and Tasnim withheld confirmation of Khamenei's reported approval; Araghchi said any deal would be 'signed remotely' and kept Iran's Hormuz 'service fee' position. ~440.9 kg of 60% HEU remains unverifiable at Isfahan since June 2025. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH above 3,600 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new confirmed Gulf-state casualties; Lebanon MOH carries',
      status:
        "No new confirmed Gulf-state casualties; the pause on bases held. Pakistan's Sharif tightened the signing timeline to 'within 24 hours' and Geneva firmed as the venue, with Qatar's team engaged. The Lebanon Health Ministry war-cumulative carries above 3,600 killed / 10,044+ injured since March 2 amid a truce now braided into the MOU's 60-day clause and an active al-Qasiba exchange. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 107 is the dated signing day — June 14, Geneva — and it opens with the strongest commitment scaffolding of the war set against fresh friction over the same nuclear core. The evening of Day 106 produced the two firmest Iranian signals to date: Reuters reported Parliament Speaker Mohammad Baqer Qalibaf, not FM Araghchi, would sign for Tehran in Geneva alongside VP Vance, and Trump said he 'understands the answer is yes' on whether Supreme Leader Khamenei approved the deal — the first claimed Supreme-Leader buy-in (Reuters via TBS, CBS). Pakistan's Sharif tightened the timeline to 'within 24 hours.' Analytical judgment, per §3.5.3: the scaffolding firmed while the substance stayed contested. After Geneva, Vance said Iran is 'not yet willing to acknowledge' Trump's red lines on the nuclear program, holding the US to 'zero enrichment' with only 'token enrichment' considered (Times of Israel, Jerusalem Post). Iran's Foreign Ministry called the main text 'almost finalised' but said the Americans were 'being greedy and raising new requests' (Reuters). IRGC-linked Tasnim counted Trump's deal-imminence claim as his 'thirty-eighth' in two months; Araghchi said any deal would be 'signed remotely.' The Lebanon front stayed kinetic — Israel struck al-Qasiba, drawing two Hezbollah drones (Al Jazeera). The deal has its date, its venue, and its signatories named; it does not yet have an agreed nuclear core or a landed signature. 30-day ceasefire probability rises to 33 from 28; direction stays mixed; the seven-day risk is critical and bimodal on whether Geneva produces a signature today.",
  implications: [
    {
      title:
        "Signing day arrives with the firmest scaffolding of the war and the same unresolved core — every credibility marker is a claim, and a venue is not a signature",
      body:
        "Day 106's binding test was whether the framework would survive into a dated signing; it did, and the scaffolding firmed overnight. Parliament Speaker Qalibaf — a higher-level signatory than Araghchi — is named for Tehran, Trump claims Khamenei's approval, and Sharif put the timeline 'within 24 hours' with Geneva as the venue (Reuters via TBS, CBS). That is the strongest pre-signature configuration the war has produced. Skeptical counter per §3.5.3, and it is the analytical core: every one of those markers is a claim by an interested party. Tehran has not confirmed Khamenei's approval; IRGC-linked Tasnim counted Trump's statement as his 'thirty-eighth' deal-imminence claim in two months and told its audience to discount it; Araghchi hedged that any deal would be 'signed remotely.' This is the Day 50 configuration matured one step further — there, Dar's '80% complete' preceded the Day 51 collapse; here a named venue and signatories coexist with one side withholding confirmation. Under the multi-clock framework the negotiation-capacity clock is at its strongest reading, but it sits on a kinetic clock the al-Qasiba exchange shows is live. Analytical judgment: the binding test has narrowed to a single fact — whether a signature lands in Geneva today, or the day ends as Day 51 did, with optimism reversing on terms.",
    },
    {
      title:
        "The fight is still the nuclear core — Vance says Iran won't accept the red lines, Tehran says Washington is adding demands — and a partial signature would resolve neither",
      body:
        "The substance gap that defined Day 106 carried into signing day from both directions. After Geneva, Vance said the talks went well in some respects but that 'the President has set some red lines the Iranians are not yet willing to acknowledge,' with the US holding to 'zero enrichment' and only 'token enrichment' under consideration (Times of Israel, Jerusalem Post). Iran's Foreign Ministry mirrored the complaint, calling the main text 'almost finalised' but the Americans 'greedy' for 'raising new requests' (Reuters). Netanyahu's maximal reading — that the final accord obligates Iran to surrender its stockpile — matches neither Tehran's draft nor Trump's 'conceptual' framing of the nuclear file (Tribune). Skeptical counter, held the other way: a cessation-and-Hormuz signature with the nuclear question deferred to a 60-day track is a coherent, signable package, and hard public maximalism often precedes concession. But §3.5.6 governs: ~440.9 kg of 60% HEU — ~90% of the separative work to weapons-grade — stays unverifiable at Isfahan since June 2025, and a 60-day deferral does not touch it. Under the multi-clock framework the active-deadline clock is at a signing window, but the weaponization clock has not moved. Analytical judgment: a signature today is plausible; a signature that resolves enrichment on Washington's stated terms is not yet evidenced.",
    },
    {
      title:
        "Taiwan: Brent held a three-month low into signing day, but the Strait stayed closed and a contested nuclear core can reverse the relief overnight",
      body:
        "For Taiwan, Day 107 sustained Day 106's energy easing without changing the structure. Brent held near $87.33 after falling more than 4% below ~$86.50, the lowest since early March, as the dated Geneva signing kept the war premium out of crude (Trading Economics, CNBC). The EIA's June outlook still frames the June-July average near $105. Skeptical counter, held both ways: the move prices a deal whose nuclear core its own principals still dispute, and signing day itself carried Vance's 'red lines not acknowledged,' Iran's 'new requests' complaint, and an active al-Qasiba exchange. Structurally nothing opened: the IRGC's 'closed to all vessels' declaration stands, the >100-day effective closure persists, the ~40-ship NCAGS Bahrain channel remains the only durable transit mechanism, PGSA $2M/transit yuan-billed continues with Araghchi defending the 'service fee,' and China still takes ~37.7% of Hormuz crude under the standing China-Russia veto cover. Mehr's draft would reopen the Strait within 30 days of a signing — the first dated reopening mechanism — but it is unsigned and contested. Analytical judgment: the energy-infrastructure clock is unchanged — the price fell, the chokepoint did not open — and a signed MOU with an enforced Hormuz-reopening clause remains the only catalyst that revises the LNG-cover dominant case. LNG cover through September and TSMC's 2026 CapEx framework near 8% carry. No fresh Taiwan-specific development; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties; the kinetic pause on Gulf bases held into signing day. Vance, the named US Geneva signatory, said after the talks Iran won't yet acknowledge Trump's nuclear red lines ('zero enrichment,' 'token enrichment' considered); the $24B release stays tied to performance metrics over 60 days. Sledgehammer operational; Kharg Island option shelved.",
    israel:
      "No new IDF KIA. Israel struck al-Qasiba; Hezbollah answered with two drones, no injuries reported. Netanyahu, kept out of the talks, insisted all HEU 'has to leave Iran' and said Trump assured him removal would be mandated — a reading Tehran's draft does not match. Israeli forces hold parts of southern Lebanon under the MOU self-defense clause.",
    iran:
      "No verified new mass toll; the day was diplomatic. Iran's MFA called the text 'almost finalised' but the US 'greedy' for 'new requests'; Tasnim withheld confirmation of Khamenei's approval; Araghchi said any deal would be 'signed remotely.' ~440.9 kg 60% HEU unverifiable at Isfahan since June 2025. HRANA 3,636+ carries; 3.2M displaced.",
    other:
      "No new confirmed Gulf-state casualties; the pause held. Sharif tightened the timeline to 'within 24 hours,' Geneva firmed as venue, Qatar engaged. Lebanon MOH carries above 3,600 killed / 10,044+ injured since March 2 amid an active al-Qasiba exchange; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
