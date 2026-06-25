import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction shifts from de-escalating to mixed — the first material counter-signal in three days, and it comes from the maritime ledger that had been carrying the wind-down. Iran struck a cargo vessel in the Strait of Hormuz on Thursday evening (bridge damage, no injuries, per UKMTO), the first such attack since the corridor reopened; oil reversed, with Brent up 2.1% to $75.26 and WTI settling at $71.92; and the IRGC Navy warned that passage is permitted only via Tehran-designated routes (CBS News, CNBC). Day 118's 'hardest evidence' of de-escalation produced a kinetic attack and a price reversal in a single evening — not a return to war, but the thesis taking its first real hit on its own central vector.",
      risk7d:
        "Seven-day risk holds conditional rather than rising to critical, and §3.5.3 governs the restraint. The vessel strike caused no casualties, the 60-day sanctions-waiver architecture holds to August 21, ~35M barrels have cleared Hormuz since the deal, and the nuclear working groups still meet at Bürgenstock (Kpler, Al Jazeera). But the same evening delivered an IRGC route-control warning and revived a 'transit fees' debate (CBS News). An unresolved nuclear order-of-operations, a Strait Tehran now claims to administer operationally, and a US principal still holding a walk-away threat keep the near-term risk two-sided — the deal's machinery runs while its central corridor just demonstrated it can be closed at will.",
      spillover:
        "Spillover holds conditional and sharpens on Lebanon, where Day 118's rhetorical hardening became a failed round. The fifth Washington session (June 23–25) closed as the least productive to date; the US 'pilot areas' handover plan stalled on Israeli approval; Israeli and Lebanese officials denied a US claim that the IDF had withdrawn; and an Israeli envoy called the deal-linkage 'a train wreck' (Jerusalem Post, Times of Israel). The §3.5.6 Israel-independence prior is the driver: the one actor the MoU cannot compel publicly disowned a US-brokered withdrawal plan. The hold-fire held and no new lethal strike was reported, which keeps spillover conditional rather than critical — but the political track meant to convert the truce into a withdrawal just stalled in the open.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'CBS News / CNBC / UKMTO',
      event:
        "Iran struck a cargo vessel in the Strait of Hormuz near the Oman coast on Thursday evening — bridge damage, no injuries per UK Maritime Trade Operations — the first reported Iranian attack on a ship since the corridor reopened; oil reversed its losses, with Brent climbing 2.1% to $75.26 and WTI settling at $71.92",
      summary:
        "This is the day's pivot: the maritime ledger that anchored three days of de-escalation produced a kinetic attack and a price reversal in one evening, undoing Day 118's sub-$75 pre-war low (CBS News, CNBC).",
      impact:
        "The energy-infrastructure clock worsens after three improving days. A no-casualty strike does not flip the war back on, but it converts the de-escalation's central evidence into a reminder the maritime calm is a 60-day arrangement, not a settlement.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CBS News / CNBC',
      event:
        "The IRGC Navy warned Thursday that safe passage through the Strait of Hormuz would be permitted only via routes 'designated by Tehran,' as a debate over 'transit fees' revived alongside chief negotiator Ghalibaf's standing claim that Iran will 'administer' the Strait",
      summary:
        "Skeptical counter per §3.5.6: this hardens the Hormuz-administration and toll-institutionalization priors from background into an operational threat — Tehran asserting control of the corridor its own exports surge through (CBS News, CNBC).",
      impact:
        "The chokepoint reverts from background dispute to load-bearing risk on Iran's own warning. The MoU's 'toll-free for 60 days' carries, but the route-control claim is the marker that the corridor risk outlasts the price relief.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Jerusalem Post / Times of Israel / U.S. News (Reuters)',
      event:
        "The fifth round of Israel–Lebanon talks in Washington (June 23–25) closed as the least productive to date: the US 'pilot areas' handover plan stalled on Israeli approval, Israeli and Lebanese officials denied a US claim that the IDF had withdrawn from parts of the south, and an Israeli envoy called the linkage to the US–Iran deal 'a train wreck'",
      summary:
        "Mixed by construction: the truce's hold-fire held with no new lethal strike, but the political track meant to convert it into a withdrawal failed in the open — the §3.5.6 Israel-independence prior operationalized (Jerusalem Post, Times of Israel).",
      impact:
        "The coalition-cohesion clock keeps worsening. The friction sits on the one actor the MoU cannot compel, which is why spillover and seven-day risk cannot ease even as the deal's other tracks run.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / NPR / IRNA',
      event:
        "The US–Iran nuclear-inspection dispute held its Day 118 shape: IAEA chief Grossi reiterated inspections are 'going to happen,' while Iran's deputy FM Gharibabadi insisted they will be decided 'only within the framework of a final agreement'; the four Bürgenstock working groups — sanctions termination, nuclear affairs, reconstruction, monitoring — continued",
      summary:
        "Skeptical counter per §3.5.3: an unresolved order-of-operations, not a timeline, and a US principal keeps a walk-away threat in reserve — but the machinery is still meeting (Al Jazeera, NPR, IRNA).",
      impact:
        "The weaponization clock stays a public stalemate. Grossi's floor — inspectors reach only undamaged sites, the ~440.9 kg of 60% HEU unseen since June 2025 — remains the ground truth under both governments' claims.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC / RFE/RL / Kpler',
      event:
        "The deal architecture stayed intact under the strain: the Treasury's 60-day oil and petrochemical sanctions waiver runs to August 21, ~35M barrels have cleared Hormuz since the deal (Kpler), and commercial traffic kept recovering toward ~30 transits a day",
      summary:
        "The counterweight to the day's escalation: the institutional spine of the wind-down — waivers, working groups, cleared cargoes — is still load-bearing, which is why direction is mixed and not escalating (CNBC, RFE/RL, Kpler).",
      impact:
        "The negotiation-capacity clock loses momentum but does not break. The relief is a 60-day arrangement, not a settlement — the vessel strike is the reminder of how fast the corridor risk can return.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; a US official confirmed Iran struck a Hormuz cargo vessel — no injuries)',
      status:
        "No new US casualties. A US official confirmed Iran struck a cargo vessel in Hormuz (bridge damage, no injuries); Washington's leverage stays the ~$24-25B in performance-based, frozen-asset and sanctions relief Iran 'won't get a dime' of until it performs, with the 60-day waiver running to August 21.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (hold-fire held through the failed fifth Washington round; envoy calls deal-linkage "a train wreck")',
      status:
        "No verified new Israeli casualties; the IDF–Hezbollah hold-fire held through the failed fifth Washington round. An Israeli envoy called the deal-linkage 'a train wreck,' and Israeli officials denied a US claim that the IDF had withdrawn from parts of south Lebanon, where Netanyahu maintains 'full freedom of action.'",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (IRGC strike on a Hormuz vessel caused no reported casualties; posture diplomatic; executions continue off the war ledger)',
      status:
        "No verified new mass toll on the Iran front; the IRGC Navy's strike on a Hormuz vessel caused no reported casualties. Iran kept inspections conditional on 'a final agreement' while Grossi insisted they will happen; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. Off the war ledger, HRANA's 40 political and security executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,057 killed / 12,121 wounded (Lebanese Health Ministry; tracker aggregates now cite up to ~4,175 / 12,164); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain none',
      delta: '+0 verified (cargo vessel struck in Hormuz reported no injuries; Lebanon hold-fire held as the Washington round failed)',
      status:
        "No verified new mass-casualty event; the cargo vessel struck in Hormuz reported bridge damage and no injuries (UKMTO). The Lebanon hold-fire held with no new lethal strike reported as the Washington round failed; the toll carries near ~4,057 killed / 12,121 wounded. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 119 shifts to mixed — the first material counter-signal to a three-day de-escalation built on maritime normalization. On Thursday evening Iran struck a cargo vessel in the Strait of Hormuz near the Oman coast; the ship took bridge damage but no one was injured, per UK Maritime Trade Operations, and it is the first reported Iranian attack on a ship since the corridor reopened (CBS News, CNBC). Oil, the verifiable spine of the wind-down, reversed: Brent erased its losses to climb 2.1% to $75.26 and WTI settled at $71.92, undoing Day 118's sub-$75 pre-war low (CNBC). The IRGC Navy compounded it, warning that safe passage would be permitted only via routes 'designated by Tehran' — Ghalibaf's 'administered by Iran' line hardened into an operational threat against a revived 'transit fees' debate (CBS News). The Lebanon track deteriorated in parallel: the fifth Washington round (June 23–25) closed as the least productive to date, the US 'pilot areas' handover plan stalled, Israeli and Lebanese officials denied a US claim that the IDF had withdrawn from parts of the south, and an Israeli envoy called the deal-linkage 'a train wreck' (Jerusalem Post, Times of Israel). What holds the day back from escalation: the deal architecture is intact — the 60-day waivers run to August 21, ~35M barrels have cleared since the deal, the nuclear working groups still meet, and the vessel strike caused no casualties. 30-day ceasefire probability ticks down to 70; direction moves to mixed because the maritime ledger that carried the de-escalation just produced a kinetic attack and a price reversal in a single evening.",
  implications: [
    {
      title:
        "The maritime ledger reversed — Iran's vessel strike and the IRGC's route claim crack the de-escalation's central evidence",
      body:
        "For three days the de-escalation rested on the maritime ledger: a falling Brent, ~35M barrels cleared, a Joint Maritime Information Center threat downgrade. Day 119 turned that same ledger against the thesis. Iran struck a cargo vessel in the Strait of Hormuz near the Oman coast on Thursday evening — bridge damage, no injuries per UK Maritime Trade Operations — the first reported Iranian attack on a ship since the corridor reopened (CBS News, CNBC). Oil reversed in step: Brent erased its losses to climb 2.1% to $75.26 and WTI settled at $71.92, undoing Day 118's sub-$75 pre-war low (CNBC). The IRGC Navy then warned that safe passage would be permitted only via routes 'designated by Tehran' (CBS News). Skeptical counter per §3.5.3: the deal still holds — ~35M barrels have cleared since the agreement, the 60-day waiver runs to August 21, and one no-casualty strike is not a closure (Kpler, CNBC). But §3.5.6 governs the read: the toll-institutionalization and Hormuz-administration priors that Day 118 filed as background just reasserted themselves operationally. Under the multi-clock framework the energy-infrastructure clock worsens after three improving days. Analytical judgment: the single most-cited evidence of winding-down — a normalizing Strait and a falling price — produced a kinetic attack and a price reversal in one evening. That does not flip the war back on, but it converts Day 118's 'hardest evidence' into a reminder that the maritime calm is a 60-day arrangement, not a settlement.",
    },
    {
      title:
        "Lebanon moved from sharper caveat to open friction — the 'train wreck' round and the withdrawal denials",
      body:
        "Day 118's Lebanon caveat was a rhetorical hardening; Day 119 it became a failed negotiating round. The fifth Washington session (June 23–25) closed as the least productive to date, both delegations voicing frustration (Jerusalem Post). The US 'pilot areas' plan — defined zones the Lebanese Armed Forces would secure, with the US vetting troops for Hezbollah links before each handover — stalled on Israeli approval, with Aoun saying the model areas remain 'pending approval from the Israeli side' while he will 'accept nothing less than the end of the Israeli occupation' (Jerusalem Post, U.S. News/Reuters). Israeli and Lebanese officials then jointly denied a US claim that the IDF had withdrawn from parts of the south, and an Israeli envoy called the linkage to the US–Iran deal 'a train wreck' (Times of Israel). Skeptical counter per §3.5.6: this is the standing Israel-independence prior, not a new fact — Netanyahu holds the IDF has 'full freedom of action,' and a stalled handover is that independence operationalized. Under the multi-clock framework the coalition-cohesion clock keeps worsening. Analytical judgment: the energy track did the de-escalation work for a week while the one actor the MoU cannot compel — Israel — stayed outside it; Day 119 shows the cost, a US-brokered withdrawal plan publicly disowned by both sides it was meant to bridge. The hold-fire held and no new lethal strike was reported, which is why spillover stays conditional rather than critical — but the political track meant to convert the truce into a withdrawal just stalled in the open.",
    },
    {
      title:
        "Taiwan: the receding LNG threat got its first counter-signal — the chokepoint reasserted itself in an evening",
      body:
        "For three weeks the Taiwan read improved as Hormuz normalized; Day 119 is the reminder that built the standing caution. Iran's vessel strike and the IRGC's 'designated routes' warning reintroduced kinetic risk to the same chokepoint that carries roughly 38% of Taiwan's LNG and 70% of its crude, against about 11 days of LNG cover (CBS News, CNBC). Nothing physical interrupted the island's supply — no LNG cargo was hit, flows continue, and Brent at $75 is still near pre-war levels — so the operational read is unchanged: LNG cover through September holds and TSMC's 2026 CapEx near 8% carries. Skeptical counter per §3.5.6: the JMIC threat level downgraded on Day 118 was answered Day 119 by an actual attack, which is precisely the structural point — a single Strait, an IRGC that claims to 'administer' it, and an 11-day buffer that does not change whether the threat board reads 'moderate' or not (CNBC). Analytical judgment: the good week was real but provisional, and the durable hedges are the ones that survive an evening like this — diversification toward Australian and US cargoes and the Maanshan and Kuosheng nuclear restarts (2028–2029), because a threat level can be downgraded one day and contradicted by a missile the next. The Taiwan lesson of Day 119 is not alarm — supply is intact — but confirmation that the chokepoint risk is a property of the geography, not of any 60-day waiver.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. A US official confirmed Iran struck a Hormuz cargo vessel (bridge damage, no injuries); Washington's leverage stays the ~$24-25B in performance-based relief Iran 'won't get a dime' of until it performs, the 60-day waiver running to August 21.",
    israel:
      "No verified new Israeli casualties; the IDF–Hezbollah hold-fire held through the failed fifth Washington round. An Israeli envoy called the deal-linkage 'a train wreck'; officials denied a US claim the IDF had withdrawn from parts of south Lebanon, where Netanyahu maintains 'full freedom of action.'",
    iran:
      "No verified new mass toll; the IRGC Navy's strike on a Hormuz vessel caused no reported casualties. Iran kept inspections conditional on 'a final agreement' while Grossi insisted they will happen; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "No verified new mass-casualty event; the cargo vessel struck in Hormuz reported bridge damage and no injuries (UKMTO). The Lebanon hold-fire held with no new lethal strike as the Washington round failed; the toll carries near ~4,057 killed / 12,121 wounded. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
