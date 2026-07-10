import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'critical',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction turns de-escalating for the first time in a week. CENTCOM's July 9 'ended the round' statement held: no third US strike day landed, and Iran fired no new salvo across a full day — the first verifiable lull since the July 8 reignition (CBS News, Al Jazeera). Neither principal chose to climb the next rung when the burial and the second strike day had handed each a pretext, and both agreed to return to talks even as Trump reiterated 'over.' The shift is real but declaratory-fragile: a single strike day or a 'harsher' Iranian answer reverses it, and the improvement rests on a lull that is a fact and a talks-track that is still partly Trump's claim (Bloomberg).",
      risk7d:
        "Seven-day risk eases to critical but no lower. The IRGC has conditioned its next move on whether Washington strikes again, Trump reiterated the ceasefire is 'over,' and the June 17 MoU is dead in rhetoric while intact on paper — a pause a threat away from resuming (Bloomberg, RFE/RL). The frozen-funds gap and the Hormuz-toll fault line are unmoved, and the July 19 blockade-lift deadline now falls inside a resumed-talks window against a standing reimposition threat. The lull is the first datapoint down the ladder in a week, but the reload conditions are all still in place.",
      spillover:
        "Spillover falls to conditional. No new cross-border fire crossed Gulf or Levant airspace during the July 10 lull, and the Lebanon seam stayed quiet with no confirmed Hezbollah retaliation after the July 4 ten-strike escalation. But the four-state salvo of Day 133 — 10 ballistic missiles at Jordan's Al-Azraq base plus drones at Kuwait, Qatar, and Bahrain — leaves the base vector primed and one decision from reactivation. Kuwait's single injured (stable) carries; Jordan and Qatar reported none. The spillover channel is dormant, not closed.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CBS News / Al Jazeera / RFE/RL',
      event:
        "The kinetic exchange paused for a full day: no third US strike day followed CENTCOM's July 9 'ended the round' statement, and Iran launched no new salvo through July 10 — the first 24-hour lull since the fighting reignited July 8",
      summary:
        "Per §3.5.3 the lull is the first verifiable datapoint down the ladder in a week — a pause both principals chose to hold despite the pretexts (the burial, the second strike day) that could have justified a third rung, though it rests on a stand-down neither side has formalized (CBS News, Al Jazeera).",
      impact:
        "The load-bearing question shifts from whether the pause would hold to whether the reactivated talks track can convert a fragile lull into anything the MoU's fault lines don't immediately reverse.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / Washington Post / Axios',
      event:
        "President Trump reiterated on July 10 that 'the Cease Fire is OVER!' while saying Iran had 'asked us to continue talks' and that Washington had agreed — a declaratory hardening bolted to an opening, with a fresh negotiating round expected within days",
      summary:
        "Per §3.5.3 both halves are principal's claims — the 'over' no more a signed termination than the 'asked' is verified Iranian supplication — spoken in the same breath, leaving the MoU dead in rhetoric and intact on paper (Bloomberg, Washington Post).",
      impact:
        "The formulation keeps the table technically alive; whether the resumed round convenes and touches the funds and toll gaps, or merely re-freezes them, is the dominant diplomatic variable.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN / Washington Post',
      event:
        "Mediators lined up the next round: a US team led by Vice President Vance, with Kushner, Witkoff, and Rubio, was reported heading to Oman-brokered talks, with Switzerland floated as a venue the following week — the post-burial diplomatic track reactivating even as the June 17 MoU stays declaratively 'over'",
      summary:
        "Per §3.5.6 the negotiation-capacity clock turns up for the first time since the oil-license revocation, but from a floor — the venue itself (Oman now vs. Switzerland next week) is unsettled and the substantive gaps are untouched (CNN, Washington Post).",
      impact:
        "A convened round is the clearest off-ramp on offer; a no-show or a collapse over funds and tolls would push the fragile lull back toward the reload the IRGC has threatened.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / EIA',
      event:
        "Brent crude eased to about $75.5 a barrel from $78.3, still up roughly 4.7% on the week, as the market read the 24-hour lull as tentative de-escalation while a Hormuz risk premium persisted; the IEA warned prolonged tension could delay rebuilding global oil inventories",
      summary:
        "Per §3.5.5 the tape steps down but not out — Brent's ~$2.8 slide prices the lull without pricing a settlement, holding a contested-corridor premium rather than a closure price (Trading Economics, EIA).",
      impact:
        "The energy-infrastructure clock eases; a resumed strike day, a blockade reimposition, or a second LNG hull hit remains the repricing trigger in either direction.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Bloomberg / Al Jazeera',
      event:
        "Beneath the pause the toll fault line hardened: China again urged 'safe and unimpeded passage' through Hormuz as fee negotiations gained traction, while Iran's envoy to Beijing promised 'special considerations' for friendly states; the Lebanon seam stayed quiet and IAEA access to Iran's enrichment sites remained barred",
      summary:
        "Per §3.5.6 the toll-institutionalization prior hardens even as the shooting pauses — the outline of a two-tier Hormuz regime in which access is priced and politically allocated to Beijing sits beneath the diplomacy (Bloomberg, Al Jazeera).",
      impact:
        "For price-taking importers an administered strait is a worse steady state than a contested one; the structural bargain forming under the lull outlasts any single strike round.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 (July 10 lull produced no new Iranian salvo and no third US strike day; Jordan had intercepted eight of ten missiles on July 9 with no US casualties)',
      status:
        "No confirmed new US casualties. The July 10 lull produced no new Iranian salvo and no third US strike day; Iran's July 9 strikes across Jordan, Kuwait, Qatar, and Bahrain had already produced no reported US casualties. US Central Command's 'ended the round' statement held through the day.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (no new Israeli casualties; Lebanon seam quiet with no confirmed Hezbollah retaliation after the July 4 ten-strike escalation)',
      status:
        "No new Israeli casualties. The Lebanon seam stayed quiet; the paused exchange ran on the US-Iran axis, Israel maintained its refusal to withdraw, and Katz's standing 'marked for death' threat against Mojtaba carries.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,482 killed / 26,628+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 deaths reported during the July 10 lull (Health Ministry gave a more precise two-day toll of 14 killed / 78 injured from the July 8-9 strikes; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025)',
      status:
        "No new Iranian deaths reported during the July 10 lull. Iran's Health Ministry gave a more precise two-day toll from the July 8-9 strikes — 14 killed and 78 injured across five provinces (Day 133 carried 'dozens' wounded) — folded into the running MOH figure. Nuclear access stays barred; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025. HRANA 3,636+, Hengaw 6,620+ mil, and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: '+0 (no new spillover casualties during the lull; Kuwait\'s one injured from the July 9 drone attack carries)',
      status:
        "No new spillover casualties during the lull. Kuwait's one injured (stable) from the July 9 drone attack carries; Jordan and Qatar reported none. The Day 131 Hormuz vessel attacks damaged Qatari LNG and Saudi crude tankers with no casualties. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA carry.",
    },
  },
  exec:
    "Day 134 is the first full lull of the renewed war. CENTCOM's July 9 'ended the round' statement held: no third US strike day followed, and Iran launched no new salvo through July 10 — the first 24-hour pause since the exchange reignited July 8, and the answer to Day 133's load-bearing question of whether the stand-down was an off-ramp or a reload (CBS News, Al Jazeera, RFE/RL). President Trump reiterated that 'the Cease Fire is OVER!' while saying Iran had 'asked us to continue talks' and that Washington had agreed — a declaratory hardening bolted to an opening (Bloomberg, Washington Post). Mediators moved on it: a US team under Vice President Vance, with Kushner, Witkoff, and Rubio, was reported headed to Oman-brokered talks, with Switzerland floated as a venue the following week (CNN). Brent eased to about $75.5 from $78.3, still up roughly 4.7% on the week, as the market read the lull as tentative de-escalation while a Hormuz premium persisted; the IEA warned prolonged tension could delay inventory rebuilds (Trading Economics, EIA). Beneath the pause the structure hardened: China again urged 'safe and unimpeded passage' as fee talks gained traction, and Iran's Beijing envoy promised 'special considerations' for friendly states (Bloomberg, Al Jazeera). The Lebanon seam stayed quiet; IAEA access to enrichment sites stayed barred. Per §3.5.3, 'over' remains a principal's declaratory claim against a table neither side has formally left. 30-day ceasefire probability rises to 22. Direction turns de-escalating — tentatively.",
  implications: [
    {
      title:
        "The pause held — the first full lull answers Day 133's load-bearing question, for now",
      body:
        "Day 133's binding variable was whether CENTCOM's 'ended the round' was a genuine off-ramp or a reload. Day 134 supplied the first evidence: a full day passed with no third US strike and no new Iranian salvo — the first 24-hour lull since the July 8 reignition (CBS News, Al Jazeera). Analytical judgment under the multi-clock framework: the energy-infrastructure and coalition-cohesion clocks, which worsened in lockstep on Day 133, stopped worsening; Brent eased roughly $2.8 and no new fire crossed Gulf or Levant airspace. Per §3.5.3, the read stays cautious — this is a pause, not a settlement. The IRGC conditioned its next move on US restraint, Trump reiterated 'over,' and the pretexts that could have driven a third rung sit unspent. But the fact of a lull is itself information: when both sides had cause and capacity to climb, neither did. The pause is fragile and reversible — a single strike day or a 'harsher' Iranian answer restarts it — yet unlike Trump's 'over' or Iran's threats, the lull is a verifiable fact rather than a principal's claim, and it is the first datapoint in a week that points down the ladder rather than up.",
    },
    {
      title:
        "'Over' plus 'talks' — the declaratory collapse coexists with a reactivating track",
      body:
        "Trump's July 10 formulation bolted a hardening to an opening: 'the Cease Fire is OVER!' alongside 'Iran asked us to continue talks' and Washington's agreement to do so (Bloomberg, Washington Post). Per §3.5.3, both halves are principal's claims — the 'over' no more a signed termination than the 'asked' is verified Iranian supplication. Mediators moved regardless: a US team under Vance, with Kushner, Witkoff, and Rubio, was reported bound for Oman-brokered talks, with Switzerland floated for the following week (CNN). The June 17 MoU stays declaratively dead but formally intact — the same table nobody leaves that outlasted Geneva's postponement, the USS Spruance seizure, and the oil-license revocation, and now a two-day strike exchange. Analytical judgment: the negotiation-capacity clock turns up for the first time in a week, but from a floor. The frozen-funds gap (Ghalibaf $12B of $24B / Pezeshkian $6B / US perform-first, zero transferred) and the Hormuz-toll fault line are unmoved, and the July 19 blockade-lift deadline now falls inside a resumed-talks window against a standing reimposition threat. Whether the Oman/Switzerland round convenes at all — and whether it touches the funds and toll gaps or merely re-freezes them — is the dominant diplomatic variable of the next week.",
    },
    {
      title:
        "Taiwan: the premium eases but the toll machinery hardens — China's Hormuz bargain is the structural story",
      body:
        "For Taiwan the day cuts two ways. The tail-risk read from Day 133 — strikes at the Bushehr perimeter and a China rail link — was not compounded: no new nuclear-proximate strike landed, and Brent's slide to ~$75.5 shows the market pricing a contested-not-closed corridor a price-taker can absorb (Trading Economics). But beneath the pause the toll-institutionalization prior (§3.5.6) hardened. China publicly urged 'unimpeded passage' as fee talks gained traction, while Iran's envoy to Beijing promised 'special considerations' for friendly states — the outline of a two-tier Hormuz regime in which access is priced and politically allocated (Bloomberg, Al Jazeera). Analytical judgment: for a price-taking LNG importer with no such standing, an administered strait is a worse steady state than a contested one — tolls at any level become permanent revenue (~$29B/yr at pre-war flow), and preferential rates for Beijing sharpen the asymmetry against buyers like Taiwan. The §3.5.6 exposure holds: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas buffer, with TSMC's 2026 CapEx near 8%. The durable hedges are unchanged and remain the only answers indifferent to whether the strait ends up contested, closed, or tolled — US and Australian cargoes (25%-US-by-2029) and the Maanshan and Kuosheng restarts (2028-2029).",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. The July 10 lull produced no new Iranian salvo and no third US strike day; Iran's July 9 strikes across Jordan, Kuwait, Qatar, and Bahrain produced no reported US casualties, with Jordan intercepting eight of ten missiles.",
    israel:
      "No new Israeli casualties. The Lebanon seam stayed quiet; the paused exchange ran on the US-Iran axis, and Katz's 'marked for death' threat carries.",
    iran:
      "No new Iranian deaths reported during the lull. The Health Ministry's precise two-day toll — 14 killed / 78 injured across five provinces from the July 8-9 strikes — folds into MOH ~3,482. Nuclear access still barred; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "No new spillover casualties. Kuwait's one injured (stable) from the July 9 drone attack carries; Jordan and Qatar reported none. Day 131 Hormuz vessel strikes caused no casualties. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+; Gulf 33+ KIA / 73+ WIA carry.",
  },
};

export default data;
