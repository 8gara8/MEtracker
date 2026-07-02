import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction stays mixed and inverts Day 124's split. On the diplomatic axis it turned de-escalatory: a second day of Qatar- and Pakistan-mediated indirect talks in Doha drew Qatar's 'positive progress' on the 14-point memorandum, Vice President Vance's 'going well,' and a framing that would release up to $12 billion of roughly $24 billion in frozen Iranian assets (CNN, The Tribune, RFE/RL). But the energy axis worsened: independent trackers put Hormuz transit near-closed at about five ships against ~93 a day pre-war, surviving mainly 'on the Oman side,' even as Brent held near $73.52 after its steepest quarterly drop since 2020 (straits.live, Trading Economics). Skeptical counter per §3.5.3: 'positive progress' is a characterization from interested parties with zero dollars actually transferred, and Lebanon escalated in parallel — an Israeli strike near Nabatieh killed three. The table advanced while the corridor and the Blue Line did not.",
      risk7d:
        "Seven-day risk stays conditional. The standdown is four days old and the mode has fully shifted from strikes to implementation, but nothing has moved: the $6 billion humanitarian tranche Qatar holds is still untransferred, the larger $12 billion is conditioned by Trump (food and medicine 'exclusively from the United States') and contested by Tehran on usability, and the talks remain indirect (naked capitalism, Haaretz). Two deadlines now stack: the General License expires August 21, with a nearer July 19 date under it for the US to fully lift the naval blockade and Iran to make 'best efforts' to restore pre-war traffic. The risk is no longer a live exchange; it is a mediated process that either converts characterizations into transfers or reverts, as it did between Day 123 and Day 124. The nuclear sequencing standoff is the parallel clock that can still poison the shipping track.",
      spillover:
        "Spillover holds conditional as the Gulf-base vector stays quiet but Lebanon worsens. No new strikes hit Kuwait or Bahrain under the standdown. On the Blue Line §3.5.6 governs and sharpens: an Israeli strike near Nabatieh killed three — Lebanon called it a strike that killed three, the IDF said three Hezbollah militants trying to down a drone — and Israeli strikes resumed after a several-hour lull, amid the Doha talks (Times of Israel, France 24). The Gulf cooled; Lebanon did not; and the seam between them is the vector most able to undo the standdown.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / The Tribune / RFE-RL / Haaretz',
      event:
        "The Doha track that Day 124 found empty produced optimism on Day 125: a second day of indirect US–Iran technical talks ran through Qatari and Pakistani mediators, Qatar reported 'positive progress' on the 14-point memorandum of understanding, Vice President JD Vance said the discussions were 'going well,' and Iranian officials described a framing that would make up to $12 billion of roughly $24 billion in frozen assets available",
      summary:
        "Per §3.5.3 these are characterizations from interested parties — a mediator and a principal — not verified outcomes; the negotiation-capacity clock advanced for the first time since Day 123, and Day 123-to-124 is the reminder that such optimism can reverse inside 24 hours (CNN, RFE/RL).",
      impact:
        "The negotiation-capacity clock ticks from 'stalled' back to 'advancing,' lifting the 30-day probability to 58. The signal that matters next is a transfer, not a press line; the talks are still indirect, run through two mediators rather than face to face.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'naked capitalism / Haaretz / Al Jazeera',
      event:
        "The money did not move: the $6 billion humanitarian tranche Qatar holds — dating to the 2023 US–Iran channel — remained untransferred, and the larger release Iranian officials floated (up to $12 billion of ~$24 billion) is snagged on conditions, with Trump insisting the funds buy food and medicine 'exclusively from the United States' and Tehran demanding assurances it can actually spend money nominally freed once before and never usable",
      summary:
        "Quantify the gap per §3.5.5: against 'positive progress,' exactly zero dollars have been transferred, and the two sides' conditions — performance-first versus relief-first — are the same collision that stalled Day 124 (naked capitalism, Haaretz).",
      impact:
        "The active-deadline clock holds at the August 21 window with a nearer July 19 date beneath it. With strikes paused, the contest is over funds and corridor governance — the two levers Doha was meant to move and has so far only discussed.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Trading Economics / straits.live / Al Jazeera / CNN',
      event:
        "The corridor tape darkened even as the price stayed calm: independent trackers put Strait of Hormuz transit near-closed at roughly five ships against about 93 a day pre-war, surviving mainly 'on the Oman side,' while Brent steadied near $73.52 after its steepest quarterly decline since 2020; Foreign Minister Araghchi said the Strait 'remains under Iranian control' and urged outsiders 'not to interfere,' and Oman delivered a management proposal the talks have not resolved",
      summary:
        "Per §3.1 the divergence is the information: the price is pricing released trapped oil (~50 million barrels exported since the blockade lifted) and supply expectations, not throughput; per §3.5.6 Araghchi's sole-control line hardens the toll-institutionalization prior (Trading Economics, straits.live).",
      impact:
        "The energy-infrastructure clock worsened on throughput while looking calm on price. Who administers passage after the toll-free window is the governance question Doha has not answered; the July 19 blockade-lift-and-restore deadline is the binding test.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / France 24 / Lebanese sources',
      event:
        "Lebanon escalated against the diplomatic grain: an Israeli strike on a car near Nabatieh killed three on July 2 — Lebanon reported a strike that killed three, the IDF said it killed three Hezbollah militants attempting to shoot down an Israeli drone — and Israeli strikes resumed after a several-hour lull even as the Doha talks ran, with the framework Hezbollah rejected as 'null and void' still unimplemented",
      summary:
        "Dual attribution per §3.1: Lebanon frames the dead as a strike toll, Israel as militants; either way the Blue Line kept producing casualties while the Gulf standdown held, and Iran has previously tied Hormuz pressure to Israeli Lebanon strikes (Times of Israel, France 24).",
      impact:
        "The coalition-cohesion clock stays strained and the humanitarian clock worsens. Lebanon is the vector most likely to undo the Gulf standdown, and the transmission belt from a Blue Line strike to a Hormuz reclosure remains live.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Euronews / Al Jazeera / ISIS',
      event:
        "The nuclear file showed its first procedural movement in days without resolving the standoff: IAEA chief Grossi said dates and locations for inspections are now 'being discussed,' with a decision to be made soon 'in collaboration and cooperation with the government of Iran,' his clearest signal yet that inspectors will gain access — while Iran maintained any visit is contingent on a final agreement and sanctions relief",
      summary:
        "The carry that is inching: sequencing is still the fight, but a concrete date-setting process is now described, against Iran's unchanged precondition — cite Grossi's signal as a claim, not an inspection (Euronews, ISIS).",
      impact:
        "The active-deadline clock carries; the ~440.9 kg of 60% HEU (≈ up to 10 weapons) likely still at Esfahan stays unverified since June 2025. The Doha track is scoped to Hormuz and funds, not enrichment; the nuclear clock can still poison the shipping talks.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (kinetic standdown holds a fourth day; no new US strikes and no new Iranian strikes on US posture; indirect talks continue through Qatar and Pakistan)',
      status:
        "No new US casualties. The mutual standdown held a fourth day while indirect US–Iran technical talks ran through Qatari and Pakistani mediators in Doha; Vice President Vance said the talks were 'going well' and Qatar reported 'positive progress,' but the US business remained the interim-deal implementation and frozen-funds track, still conducted indirectly rather than face to face.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (operations continued on the Lebanon front; Israeli strikes resumed after a lull amid the Doha talks)',
      status:
        "No verified new Israeli casualties on the Iran front. Israeli forces struck near Nabatieh and resumed strikes after a several-hour lull through the framework Hezbollah rejects; the §3.5.6 Israel-independence prior carries, with the US and Iran having faulted Israel for striking through the deal.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (kinetic standdown; weaponization file unmoved — ~440.9 kg of 60% HEU unverified since June 2025)',
      status:
        "No verified new mass toll under the standdown. The nuclear file showed procedural movement without resolution — Grossi said inspection dates and locations are 'being discussed,' a decision 'soon,' while Iran ties any visit to a final deal and sanctions relief; ~440.9 kg of 60% HEU at the Esfahan tunnel complex stays unverified since June 2025. Off the war ledger, HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,253 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera); Bahrain + Kuwait struck June 28 (Bahrain: residential building near airport damaged, no deaths; Kuwait: two ballistic missiles intercepted); Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+3 Lebanon (an Israeli strike near Nabatieh killed three — Lebanon: three killed; IDF: three Hezbollah militants); Gulf-base vector quiet under the standdown',
      status:
        "An Israeli strike near Nabatieh killed three on July 2, lifting the cumulative Lebanon toll to roughly 4,253 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera); Lebanon framed the dead as a strike toll and the IDF as Hezbollah militants targeting a drone. The Gulf-base vector stayed quiet under the standdown — no new strikes on Kuwait or Bahrain. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
    },
  },
  exec:
    "Day 125 inverts Day 124: the guns stayed quiet a fourth day and the table finally showed movement, but the Strait's actual throughput and the Lebanon front both worsened. Qatar and Pakistan mediated a second day of indirect US–Iran technical talks in Doha, Qatar reported 'positive progress' on the 14-point memorandum, and Vice President JD Vance said the discussions were 'going well,' with a release of up to $12 billion of roughly $24 billion in frozen Iranian assets now on the table (CNN, The Tribune, RFE/RL). Skeptical counter per §3.5.3: these are characterizations from interested parties, not transfers — the $6 billion humanitarian tranche still has not moved, Trump conditions the money on food-and-medical purchases 'exclusively from the United States,' Tehran demands usability assurances, and the talks remain indirect (naked capitalism, Haaretz). Against the diplomatic thaw the corridor tape darkened: independent trackers put Hormuz transit near-closed at roughly five ships against about 93 a day pre-war, surviving mainly 'on the Oman side,' even as Brent steadied near $73.52 after its steepest quarterly drop since 2020 — the §3.1 divergence at its widest (Trading Economics, straits.live). Araghchi hardened the sole-control framing, saying Hormuz 'remains under Iranian control' and urging outsiders not to interfere; Grossi said inspection dates are now 'being discussed'; an Israeli strike near Nabatieh killed three (Times of Israel). 30-day ceasefire probability edges to 58 from 56; direction stays mixed — the table advanced while the corridor and the Blue Line did not.",
  implications: [
    {
      title:
        "'Positive progress' is a characterization, not a transfer — the negotiation clock advanced, but on interested-party claims with not a dollar moved",
      body:
        "Day 125's headline is that the table Day 124 found empty is now producing optimism — but §3.5.3 is the governing discipline, and it says treat that optimism as a claim from the parties making it. Qatar, the mediator, reported 'positive progress' on the 14-point memorandum; Vice President Vance, a principal, said talks were 'going well'; Iranian officials floated a release of up to $12 billion of the roughly $24 billion in frozen assets (CNN, The Tribune, RFE/RL). Quantify the gap per §3.5.5: against all of that, exactly zero dollars have moved — the $6 billion humanitarian tranche Qatar holds is still untransferred, and the larger $12 billion is snagged on conditions, with Trump insisting the money buy food and medicine 'exclusively from the United States' and Tehran demanding assurances it can actually spend funds that were nominally freed once before and never usable (naked capitalism, Haaretz). The talks are still indirect, run through two mediators rather than face to face. Analytical judgment under the multi-clock framework: the negotiation-capacity clock genuinely ticked forward for the first time since Day 123 — that is real, and it lifts the probability — but a process measured in characterizations rather than transfers can reverse as fast as it advanced, which is exactly what happened between Day 123 and Day 124. The signal to watch is a wire transfer, not a press line.",
    },
    {
      title:
        "The corridor is the tell — transit collapsed to a trickle while the price stayed calm, and Araghchi hardened the sole-control claim Doha was meant to soften",
      body:
        "The cleanest signal on Day 125 is the widening gap between what the oil price says and what the Strait actually does. Brent steadied near $73.52 after posting its steepest quarterly decline since 2020 — down roughly 20% on the month and 23% on the quarter — while independent trackers put Hormuz transit near-closed at about five ships against some 93 a day before the war, traffic surviving mainly 'on the Oman side' (Trading Economics, straits.live, naked capitalism). Per §3.1 the divergence is the information: the price is pricing released trapped oil — Iran has exported roughly 50 million barrels since the blockade lifted — and OPEC-supply expectations, not the corridor's throughput, which remains a fraction of normal. Per §3.5.6 the toll-institutionalization prior sharpened rather than eased: Araghchi said the Strait 'remains under Iranian control' and urged outsiders 'not to interfere,' even as Oman delivered a management proposal the talks have not resolved (Al Jazeera, CNN). A nearer deadline now structures the question — under the memorandum the US is to fully lift its naval blockade by July 19 and Iran to make 'best efforts' to restore pre-war traffic. Analytical judgment: the energy-infrastructure clock worsened on throughput even as it looked calm on price, and the governance question — who administers passage after the toll-free window — is precisely what Doha has not answered. A falling price is the lagging witness; the transit count is the leading one.",
    },
    {
      title:
        "Taiwan: the split is the point — the tape a price-taker watches improved, and the variable a price-taker cannot touch got worse",
      body:
        "For Taiwan the day divides exactly where its exposure lives. The tape improved: Brent near $73.52, no LNG cargo hit in 125 days, cover through September, and TSMC's 2026 CapEx near 8% all carry (Trading Economics). Skeptical counter per §3.5.3: the calm is real but it is priced off released oil and mediator optimism, not off a corridor that is working — actual Hormuz transit sat near five ships on Day 125. §3.5.6 reasserts the exposure the price hides: roughly 38% of the island's LNG and 70% of its crude move through Hormuz against about 11 days of gas cover, and Araghchi's 'remains under Iranian control' is exactly the sole-administration outcome a buyer at the end of the chokepoint has no vote in. Watch the transmission belt the day kept live: Israel struck near Nabatieh and killed three while the talks ran, and Iran has tied Hormuz pressure to Israeli Lebanon strikes before — the path by which a Blue Line escalation becomes a Taiwanese gas bill (Times of Israel, France 24). Analytical judgment: the durable hedges are the ones indifferent to today's optimism and today's price — diversification toward US and Australian cargoes (the 25%-US-LNG-by-2029 goal) and the Maanshan and Kuosheng restarts (2028–2029). Positive progress in Doha buys time; only non-Hormuz supply buys security.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown's fourth day. Indirect US–Iran technical talks continued through Qatari and Pakistani mediators; Vance said talks were 'going well' and Qatar reported 'positive progress,' but the US business — interim-deal implementation and frozen funds — stayed indirect, with nothing yet transferred.",
    israel:
      "No verified new Israeli casualties on the Iran front. Operations continued on the Lebanon front — an Israeli strike near Nabatieh killed three and strikes resumed after a lull; the US and Iran have faulted Israel for striking through the deal Hezbollah rejects.",
    iran:
      "No verified new mass toll under the standdown. Nuclear file inched procedurally — Grossi says inspection dates and locations are 'being discussed,' a decision 'soon,' versus Iran's 'only after a final deal'; ~440.9 kg of 60% HEU unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "Lebanon: an Israeli strike near Nabatieh killed three on July 2 (Lebanon: three killed; IDF: three Hezbollah militants), lifting the cumulative toll to ~4,253 killed / 12,190+ wounded (Lebanese Health Ministry). Gulf-base vector quiet under the standdown. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
  },
};

export default data;
