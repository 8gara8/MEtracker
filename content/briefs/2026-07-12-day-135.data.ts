import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction is mixed — the clearest de-escalatory and escalatory signals of the renewed war landed the same day. De-escalatory: the Oman round the Day 134 track had only staged actually convened in Muscat, Vance calling it a 'very, very good day,' and Oman and Iran agreed to keep working a Hormuz-navigation mechanism 'under international law' while the kinetic lull held into a third day with no new US strike and no new Iranian salvo (The National, CNN). Escalatory: the round produced a public nuclear contradiction — Vance claimed Iran agreed to resume IAEA inspections, Iran denied negotiating anything on its nuclear file (§3.5.3) — and the rhetoric spiked, with Trump threatening to 'decimate' Iran and new Supreme Leader Mojtaba Khamenei vowing revenge (CBS News, NPR). A convened round is real; a contradiction and a threat-spike are real; neither cancels the other, so the gauge holds neither green nor red.",
      risk7d:
        "Seven-day risk holds at critical. The kinetic lull extended, but Trump's 'thousand missiles Locked and Loaded' post and his threat that the US is 'ready, willing, and able, for a one year period' to 'completely decimate and destroy all areas of Iran,' paired with Mojtaba Khamenei's revenge vow, keep the ladder one decision from the next rung (NPR, Yahoo/AP). Araghchi's public charge that the US Treasury violated Paragraph 9 of the MoU — the no-new-sanctions, no-new-forces clause — plants a compliance dispute inside the very round meant to de-escalate (The National). The frozen-funds gap and the Hormuz-toll fault line are unmoved, the July 19 blockade-lift deadline is a week out, and the nuclear-inspection contradiction is a fresh breakdown vector. The lull is holding; the conditions that ended the last one are all still loaded.",
      spillover:
        "Spillover stays conditional. No new cross-border fire crossed Gulf or Levant airspace, and the Lebanon seam produced no Hezbollah retaliation cycle — Israel's intermittent strikes continued (a July 6 drone strike on a vehicle in Nabatieh killed four) but drew no confirmed answer. The four-state salvo of Day 133 — ballistic missiles at Jordan and drones at Kuwait, Qatar, and Bahrain — remains the primed base vector Tehran could reactivate if a third US strike day lands. Kuwait's single injured (stable) from the July 9 drone attack carries; Jordan and Qatar reported none. The channel is dormant, not closed; a resumed strike day is the switch.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'The National / CNN / Oman Observer',
      event:
        "The Oman-brokered round the Day 134 track had only staged actually convened Saturday in Muscat: a US team under Vice President Vance met an Iranian delegation, and FM Araghchi separately met Omani FM Badr Albusaidi, with Iran and Oman agreeing to continue technical and political talks on safe Hormuz navigation 'under international law' — the first convened US-Iran round since the July 8 collapse",
      summary:
        "Per §3.5.6 the negotiation-capacity clock turns up from a floor: the round mediators had only lined up on Day 134 actually met, and a parallel Oman-Iran navigation track gives the Hormuz dispute a working channel rather than only a battlefield (The National, CNN, Oman Observer).",
      impact:
        "A convened round answers Day 134's dominant question affirmatively — the table met — but whether it touches the frozen-funds and toll gaps or merely re-freezes them is now the live variable of the week.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CBS News / The Hill / Times of Israel',
      event:
        "Vance called the talks a 'very, very good day' and claimed Iran had agreed to let IAEA inspectors resume 'as soon as this week' as 'the first step in permanently ending' its nuclear program, while Iran flatly denied it — spokesman Baghaei told IRNA that Tehran negotiated nothing on its nuclear file and accepted no new commitments, and Deputy FM Gharibabadi said there are no plans to grant access to war-damaged sites",
      summary:
        "Per §3.5.3 the milestone is a principal's optimistic claim its counterpart contradicts on the record; IAEA's Grossi split the difference, saying inspections 'will indeed take place' with dates, procedures, and locations still to be set (CBS News, The Hill, Times of Israel).",
      impact:
        "A public US-Iran contradiction inside a convened round is a fresh breakdown vector: if Washington sells 'inspections resume' at home while Tehran denies any commitment, the gap itself becomes the next dispute.",
    },
    {
      id: 3,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'NPR / Yahoo (AP)',
      event:
        "The rhetoric spiked alongside the diplomacy: after Ali Khamenei's funeral drew open calls for his killing, Trump warned 'a thousand missiles are Locked and Loaded' and said the US is 'ready, willing, and able, for a one year period' to 'completely decimate and destroy all areas of Iran,' while new Supreme Leader Mojtaba Khamenei surfaced for the first time since the burial to vow the nation would avenge his father's February 28 killing",
      summary:
        "Per §3.5.11 this is an inflection in tone, not yet in kinetics — the escalation ran in words while the strike lull held — but Mojtaba's first public statement since the war began partly lifts the succession opacity the briefs have tracked since Day 1, giving the regime a visible, defiant head (NPR, Yahoo/AP).",
      impact:
        "The decimation threat and the revenge vow reload the political pretext both sides spent restraint avoiding across the lull; the words raise the cost of the next kinetic misstep on either side.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'The National / MS NOW',
      event:
        "Araghchi used the Muscat trip to press a bad-faith charge from inside the truce, posting that 'Iran has so far kept its word, unlike the … US Treasury Secretary who is violating Para 9 of the MoU' — the clause barring new US sanctions or added forces — while Qalibaf traveled separately to Oman to discuss Hormuz management with Sultan Haitham bin Tariq",
      summary:
        "Per §3.5.3 the charge is Tehran's claim, not a verified violation, but it frames Iran as the performing party while the US withholds — a mirror of Washington's own 'won't get a dime until it performs' posture (The National, MS NOW).",
      impact:
        "The Paragraph 9 dispute layers onto the unmoved frozen-funds gap (Ghalibaf $12B of $24B / Pezeshkian $6B / zero transferred), giving each side a documented reason to name the other the defector if the round stalls.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'Trading Economics / RFE/RL',
      event:
        "Brent crude held near $75.5 a barrel with a Hormuz risk premium intact as vessel tracking showed traffic through the strait — roughly 20% of world oil and gas — still well below normal; the sovereignty dispute stayed unresolved, with US officials demanding Iran publicly declare the strait open and untolled and Tehran insisting it remain under Iranian control and subject to fees",
      summary:
        "Per §3.5.5 the tape prices a contested-not-closed corridor: steady near $75.5 on the holding lull, with no give-back of the ~$2-3 premium while the open-versus-tolled question is live (Trading Economics, RFE/RL).",
      impact:
        "The energy-infrastructure clock holds rather than eases; the convened round caps the downside on price while the toll dispute caps the upside on relief — a resumed strike day or a firmed toll regime is the repricing trigger.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 (kinetic lull held into a third day; no new US strike day and no new Iranian salvo through July 11)',
      status:
        "No confirmed new US casualties. The lull extended through July 11 with no third US strike day and no new Iranian salvo; the July 9 four-state salvo had already produced no US casualties, with Jordan intercepting eight of ten ballistic missiles. The escalation of Day 135 ran in rhetoric — Trump's 'decimate' threat, Mojtaba's revenge vow — not in fire.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (no new Israeli casualties; Lebanon seam drew no Hezbollah retaliation despite continued intermittent Israeli strikes)',
      status:
        "No new Israeli casualties. The Lebanon seam produced no retaliation cycle; Israel's intermittent strikes continued (a July 6 drone strike in Nabatieh killed four in Lebanon) but drew no confirmed Hezbollah answer, and Katz's standing 'marked for death' threat against Mojtaba carries against his first public appearance.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,482 killed / 26,628+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 deaths reported during the extended lull (~440.9 kg of 60% HEU at Isfahan unverified since June 2025; inspection access disputed after Day 135 talks)',
      status:
        "No new Iranian deaths reported during the extended lull. Nuclear access stays contested rather than resolved: Vance claimed inspections resume this week, Iran denied any commitment, and Grossi says dates and locations are still to be set — the ~440.9 kg of 60% HEU at the Isfahan complex remains unverified since June 2025. HRANA 3,636+, Hengaw 6,620+ mil, and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: '+0 (no new spillover casualties; the July 6 Nabatieh vehicle strike that killed four folds into the source-split Lebanon aggregate)',
      status:
        "No new spillover casualties this window. Kuwait's one injured (stable) from the July 9 drone attack carries; Jordan and Qatar reported none. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129) with the July 6 Nabatieh vehicle strike (four killed) folded in. Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded carry.",
    },
  },
  exec:
    "Day 135 converts the lull into a convened round — and immediately into contradiction. The Oman-brokered talks the Day 134 track had only staged actually met Saturday in Muscat: a US team under Vice President Vance sat opposite an Iranian delegation, and FM Araghchi separately met Omani FM Badr Albusaidi, with Tehran and Muscat agreeing to keep working technical and political talks on safe Hormuz navigation 'under international law' (The National, Oman Observer, CNN). Vance called it a 'very, very good day' and claimed Iran had agreed to let IAEA inspectors resume 'as soon as this week' — 'the first step in permanently ending' its nuclear program — while Iran flatly denied it, spokesman Baghaei telling IRNA that Tehran negotiated nothing on its nuclear file and Deputy FM Gharibabadi saying there are no plans to grant access to war-damaged sites (CBS News, The Hill, Times of Israel). Per §3.5.3 the milestone is a principal's claim its counterpart contradicts on the record; Grossi said only that inspections 'will indeed take place,' dates unset. The rhetoric spiked in parallel: after Ali Khamenei's funeral drew open calls for his killing, Trump warned 'a thousand missiles are Locked and Loaded' and threatened to 'completely decimate' Iran for up to a year, while new Supreme Leader Mojtaba Khamenei surfaced for the first time since the burial to vow revenge (NPR, Yahoo/AP). The kinetic lull nonetheless held into a third day; Brent steadied near $75.5 with a Hormuz premium intact as ~20% of world oil and gas still routes a contested strait (Trading Economics). 30-day ceasefire probability edges to 23. Direction is mixed — a round convened, and a threat-spike answered it.",
  implications: [
    {
      title:
        "The round convened — Day 134's dominant question is answered yes, and the answer is a contradiction",
      body:
        "Day 134's binding variable was whether the staged Oman/Switzerland track would actually convene. Day 135 answered it: a US team under Vance met an Iranian delegation in Muscat, and a parallel Oman-Iran channel agreed to keep working a Hormuz-navigation mechanism 'under international law' (The National, CNN, Oman Observer). Analytical judgment under the multi-clock framework: the negotiation-capacity clock turns up for a second day, off the floor it hit at the oil-license revocation. But the round's headline output was not agreement — it was a public split. Vance sold a 'very, very good day' and 'inspections this week'; Iran's own spokesman told IRNA nothing was negotiated on the nuclear file, and Grossi would commit only to inspections happening on unset dates (CBS News, The Hill, Times of Israel). Per §3.5.3 this is the Day-46 '80% complete' pattern in a new costume — an optimistic principal's figure that the counterpart contradicts on the record, and the last time that gap was papered over the deal broke on the USS Spruance seizure. The table met, which is genuinely better than the table not meeting; but a convened round that produces two irreconcilable readouts is a breakdown vector, not a settlement, and the funds and toll gaps it was meant to touch went untouched."
    },
    {
      title:
        "Words up, fire down — the escalation ran in rhetoric while the kinetic lull held into a third day",
      body:
        "The same day the round convened, both principals climbed the rhetorical ladder. Trump, after Khamenei's funeral drew open calls for his killing, posted that 'a thousand missiles are Locked and Loaded' and that the US is 'ready, willing, and able, for a one year period' to 'completely decimate and destroy all areas of Iran'; new Supreme Leader Mojtaba Khamenei surfaced for the first time since the war began to vow revenge for his father's February 28 death (NPR, Yahoo/AP). Analytical judgment: this is an inflection in tone, not in kinetics — no third US strike day landed and Iran fired no new salvo, so the coalition-cohesion and energy-infrastructure clocks did not worsen even as the political-will clock heated. Two structural reads follow. First, Mojtaba's emergence partly retires the succession-opacity prior (§3.5.6) the briefs have carried since Day 1: the regime now has a visible, defiant head who has staked his legitimacy on avenging the war, narrowing the space to sign a compromise. Second, Araghchi's charge that the US Treasury is violating Paragraph 9 of the MoU plants a mirror-image compliance grievance inside the round — each side now holding a documented reason to name the other the defector. The lull is holding on the strength of restraint neither side has formalized; the words spent on Day 135 raise the cost of the next misstep."
    },
    {
      title:
        "Taiwan: a convened round caps the downside, the toll dispute caps the relief — the strait stays administered-in-formation",
      body:
        "For Taiwan the day is a wash on price and a slow worsening on structure. Brent held near $75.5 rather than easing further: the convened round caps the downside, but the unresolved open-versus-tolled dispute — US officials demanding Iran declare the strait open and untolled, Tehran insisting on control and fees — caps any relief rally, and the ~$2-3 premium stayed put (Trading Economics, RFE/RL). Analytical judgment: the Oman-Iran agreement to work a navigation mechanism 'under international law' sounds de-escalatory but is the same toll-institutionalization prior (§3.5.6) advancing by another name — a 'mechanism' for transit is precisely the administered-strait outline in which access is priced and politically allocated, and for a price-taking LNG importer with no preferential standing that steady state is worse than a merely contested one (~$29B/yr in tolls at pre-war flow). The §3.5.6 exposure holds: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas buffer, with TSMC's 2026 CapEx near 8%. No fresh Taiwan-specific development landed today; the durable hedges are unchanged and remain the only answers indifferent to whether the strait ends contested, closed, or tolled — US and Australian cargoes (25%-US-by-2029) and the Maanshan and Kuosheng restarts (2028-2029)."
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. The lull held into a third day with no new strike day and no new Iranian salvo; the Day 135 escalation ran in rhetoric — Trump's 'decimate' threat, Mojtaba's revenge vow — not in fire.",
    israel:
      "No new Israeli casualties. The Lebanon seam drew no Hezbollah retaliation despite continued intermittent Israeli strikes (July 6 Nabatieh vehicle strike killed four in Lebanon); Katz's 'marked for death' threat carries against Mojtaba's first public appearance.",
    iran:
      "No new Iranian deaths reported during the extended lull. Nuclear access stays contested, not resolved: Vance claimed inspections resume this week, Iran denied any commitment, Grossi set no dates. ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "No new spillover casualties. Kuwait's one injured (stable) from the July 9 drone attack carries; Jordan and Qatar reported none. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129), July 6 Nabatieh strike (four) folded in. Iraq 119+; Gulf 33+ KIA / 73+ WIA carry.",
  },
};

export default data;
