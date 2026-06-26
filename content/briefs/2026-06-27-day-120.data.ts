import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction turns from mixed to de-escalating on two material signals that outweigh a still-contested maritime picture. In Washington on Friday, Israel and Lebanon signed a US-brokered framework agreement — the first since the war began — with Secretary Rubio calling it a 'first step' toward 'lasting peace and security' (CNBC, Axios, Al Jazeera). And oil fell to pre-conflict levels despite Thursday's vessel strike: Brent settled down 4.34% to $71.99, a ~10% weekly loss back to where it sat before the February 28 US attack, as more tankers exited Hormuz (CNBC, OilPrice). Skeptical counter per §3.5.3: both arrive hedged — the framework is not a withdrawal and was breached the same day — but a signed Israel-Lebanon document and a fully unwound war premium are the two hardest pieces of evidence the week produced.",
      risk7d:
        "Seven-day risk stays conditional rather than easing further, because the de-escalation signals are paper and price, not facts on the ground. The IRGC Navy's warning that passage is permitted only via Tehran-designated routes still stands, the IMO's Hormuz evacuation pause holds, and transit volumes remain a fraction of the 130–140/day pre-war norm (Tasnim, Al Jazeera, CNBC). The nuclear-inspection sequencing dispute is unresolved — Grossi says inspections will happen, Tehran says only after a final deal — and the ~440.9 kg of 60% HEU stays unverified since June 2025 (NPR, Al Jazeera). The 60-day waiver architecture runs to August 21 and the working groups still meet, which caps the downside, but a framework's 'first step' and a price at pre-war lows do not retire the corridor or the weaponization clocks.",
      spillover:
        "Spillover holds conditional and now cuts both ways on Lebanon. The signed framework is the first genuine political movement on the front since the war began — pilot zones for exclusive Lebanese Armed Forces control, a US-facilitated trilateral Military Coordination Group, $100M in US humanitarian aid and LAF training (NBC News, Jerusalem Post). But §3.5.6 governs: the Israel-independence prior is baked into the text. Netanyahu vowed Israel will hold its south-Lebanon buffer zone 'until Hezbollah disarms,' the deal lets Israel 'return to its borders' only once the threat is 'removed,' and Hezbollah accused Israel of a 'flagrant' breach the same day — Lebanon's health ministry reported three killed in a strike on a car in Mayfadoun (Times of Israel). A framework that legalizes the occupation it was meant to end keeps spillover two-sided.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'CNBC / Axios / Al Jazeera / NBC News / Jerusalem Post',
      event:
        "Israel and Lebanon signed a US-brokered framework agreement in Washington on Friday — the first since the war began — with ambassadors Yechiel Leiter and Nada Hamadeh signing at the State Department as Secretary Rubio called it a 'first step' toward 'lasting peace and security'; the deal makes a ceasefire contingent on Hezbollah's full cessation and evacuation from the South Litani Sector, sets up pilot zones for exclusive Lebanese Armed Forces control, creates a US-facilitated trilateral Military Coordination Group, and pledges $100M in US humanitarian aid and LAF training",
      summary:
        "⭐ The week's inflection: the 'train wreck' fifth round became a signed trilateral framework, the first political movement on the Lebanon front since the war began (CNBC, Axios, Al Jazeera, NBC News).",
      impact:
        "The coalition-cohesion and negotiation-capacity clocks both improve for the first time in days. But the framework is a 'first step,' not a withdrawal — it converts the truce's political track from stalled to live, without yet resolving the Israeli-presence question underneath it.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'The Times of Israel / Lebanese Health Ministry',
      event:
        "Hours after the framework was signed, Hezbollah accused Israel of a 'flagrant' ceasefire breach, saying an Israeli drone strike killed three civilians in a car in Mayfadoun in southern Lebanon — confirmed by Lebanon's health ministry — while Netanyahu vowed in a video statement that Israel will hold its south-Lebanon buffer zone 'until Hezbollah disarms and as long as there is a threat to the State of Israel'",
      summary:
        "Skeptical counter per §3.5.3 and §3.5.6: the same day the framework was signed, it was breached and publicly hedged — three dead and a buffer-zone vow are the Israel-independence prior operationalized inside the deal (Times of Israel).",
      impact:
        "The humanitarian-escalation clock stays critical. The framework legalizes a conditional Israeli presence rather than ending it, so the lethal friction the deal was meant to stop continued through the signing.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNBC / OilPrice / Trading Economics',
      event:
        "Oil fell to pre-conflict levels despite Thursday's vessel strike: Brent crude for August settled down 4.34% at $71.99 on Friday — a ~10% weekly loss returning prices to where they sat before the February 28 US attack on Iran — and WTI dropped below $70, as more tankers exited the Strait of Hormuz and markets bet flows would keep recovering",
      summary:
        "The market is the cleanest witness: a war premium fully unwound even after a kinetic attack is the strongest de-escalation evidence the week produced (CNBC, OilPrice).",
      impact:
        "The energy-infrastructure clock improves on the price reading even as the corridor risk persists. Traders are pricing the strike as a one-off and the deal as durable enough to hold — a judgment the IRGC route warning has not yet falsified.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'Tasnim / Al Jazeera / CNBC',
      event:
        "The IRGC Navy's warning held: it declared a new Oman/IMO-coordinated transit route 'unacceptable and extremely dangerous,' said only Iran-designated routes are permitted and coordination via its channel is mandatory, and threatened enforcement against vessels moving outside them — the warning that preceded Thursday's vessel strike",
      summary:
        "Skeptical counter per §3.5.6: the Hormuz-administration prior stays operational — Tehran is asserting route control over the corridor its own exports surge through, against the new IMO-backed lane (Tasnim, Al Jazeera).",
      impact:
        "The chokepoint stays load-bearing despite the falling price. The MoU's 'toll-free for 60 days' carries on paper, but the route-control claim is the marker that corridor risk outlasts the price relief.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'NPR / Al Jazeera / CNBC',
      event:
        "The nuclear-inspection sequencing dispute held its shape — Grossi reiterated inspections are 'going to happen,' Iran insisted they will come 'only within the framework of a final agreement' — while the deal's institutional spine ran on: the Treasury's 60-day oil and petrochemical waiver (General License X) runs to August 21 and the four Bürgenstock working groups continued",
      summary:
        "The steady counterweight: an unresolved order-of-operations on the nuclear file sits alongside an intact waiver-and-working-group architecture, which is why direction can be de-escalating without the war's hardest file moving (NPR, Al Jazeera, CNBC).",
      impact:
        "The weaponization clock stays a public stalemate. Grossi's floor — inspectors reach only undamaged sites, the ~440.9 kg of 60% HEU unseen since June 2025 — remains the ground truth under both governments' framings.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; the US brokered and witnessed the Israel-Lebanon framework signing in Washington)',
      status:
        "No new US casualties. Washington brokered and signed the Israel-Lebanon framework, pledging $100M in humanitarian aid and LAF training; its leverage stays the ~$24-25B in performance-based, frozen-asset and sanctions relief Iran 'won't get a dime' of until it performs, with the 60-day waiver running to August 21.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (Israel signed the Washington framework; Netanyahu vowed to hold the south-Lebanon buffer zone "until Hezbollah disarms")',
      status:
        "No verified new Israeli casualties. Israel's ambassador signed the Washington framework, but Netanyahu vowed Israel will hold its south-Lebanon buffer zone 'until Hezbollah disarms and as long as there is a threat'; Hezbollah accused Israel of a 'flagrant' breach the same day, alleging a drone strike killed three civilians in Mayfadoun.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (Iran not a party to the Israel-Lebanon framework; posture diplomatic; executions continue off the war ledger)',
      status:
        "No verified new mass toll on the Iran front; Iran was not a party to the Israel-Lebanon framework. Tehran kept inspections conditional on 'a final agreement' while Grossi insisted they will happen; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. Off the war ledger, HRANA's 40 political and security executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,060 killed / 12,124 wounded (Lebanese Health Ministry — +3 in a strike on a car in Mayfadoun; tracker aggregates now cite up to ~4,178 / 12,167); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain none',
      delta: '+3 Lebanon (drone strike on a car in Mayfadoun killed three civilians, per Lebanon health ministry, hours after the framework was signed)',
      status:
        "Lebanon's toll rose by three: a drone strike on a car in Mayfadoun killed three civilians hours after the Washington framework was signed, per Lebanon's health ministry, taking the toll to ~4,060 killed / 12,124 wounded (tracker aggregates up to ~4,178 / 12,167). Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 120 turns to de-escalating — two material signals overrode a still-contested maritime picture. In Washington on Friday, Israel and Lebanon signed a US-brokered framework agreement, the first since the war began, with Secretary Rubio calling it a 'first step' toward 'lasting peace and security' (CNBC, Axios, Al Jazeera). The deal makes a ceasefire contingent on Hezbollah's full cessation and evacuation from the South Litani Sector, sets up pilot zones for exclusive Lebanese Armed Forces control, creates a US-facilitated trilateral Military Coordination Group, and pledges $100M in US humanitarian aid and LAF training (NBC News, Jerusalem Post). Skeptical counter per §3.5.3: it is a framework, not a withdrawal — Netanyahu vowed Israel will hold its south-Lebanon buffer zone 'until Hezbollah disarms,' and Hezbollah accused Israel of a 'flagrant' breach the same day, with Lebanon's health ministry reporting three killed in a strike on a car in Mayfadoun (Times of Israel). The second signal is the market's: oil fell to pre-conflict levels despite Thursday's vessel strike — Brent settled down 4.34% to $71.99, a ~10% weekly loss back to where prices sat before the February 28 US attack, as more tankers exited Hormuz (CNBC, OilPrice). Against both: the IRGC Navy's warning that passage is permitted only via Tehran-designated routes still stands, the IMO evacuation pause holds, transits run a fraction of the 130–140/day pre-war norm, and the nuclear-inspection sequencing dispute is unresolved (Tasnim, Al Jazeera, NPR). 30-day ceasefire probability ticks up to 73; direction is de-escalating because a signed Israel–Lebanon framework and oil at pre-war lows are the two hardest pieces of evidence the war has produced this week — even if both arrive hedged.",
  implications: [
    {
      title:
        "The Lebanon track flipped — a 'train wreck' round became the first signed Israel–Lebanon framework, but it legalizes the presence it was meant to end",
      body:
        "Day 119 closed the fifth Washington round as a 'train wreck'; Day 120 it became a signed trilateral framework. Israel's and Lebanon's ambassadors signed at the State Department on Friday with Rubio calling it a 'first step' toward 'lasting peace and security' (CNBC, Axios). The text makes a ceasefire contingent on Hezbollah's full cessation and evacuation from the South Litani Sector, advances pilot zones where the Lebanese Armed Forces take exclusive control, stands up a US-facilitated trilateral Military Coordination Group, and pledges $100M in US humanitarian aid and LAF training (NBC News, Jerusalem Post). This is the first genuine political movement on the front since the war began. Skeptical counter per §3.5.3 and §3.5.6: it is a framework, not a withdrawal. Netanyahu vowed Israel will hold its south-Lebanon buffer zone 'until Hezbollah disarms,' the deal lets Israel 'return to its borders' only once the threat is 'removed,' and Hezbollah accused Israel of a 'flagrant' breach the same day — Lebanon's health ministry reported three civilians killed in a strike on a car in Mayfadoun (Times of Israel). Under the multi-clock framework the coalition-cohesion and negotiation-capacity clocks improve for the first time in days. Analytical judgment: a signed document on the front the MoU could not compel is real progress — but the standing Israel-independence prior is now written into the deal rather than resolved by it, and a framework breached on its signing day converts the structural risk from a negotiating obstacle into a treaty term.",
    },
    {
      title:
        "The market unwound the war premium entirely — oil at pre-conflict levels is the cleanest de-escalation evidence, even with the corridor still contested",
      body:
        "The most verifiable signal came from the price screen. Brent for August settled down 4.34% at $71.99 on Friday — a ~10% weekly loss that returned crude to where it traded before the February 28 US attack on Iran — and WTI fell below $70, as more tankers exited the Strait of Hormuz and markets bet flows would keep recovering (CNBC, OilPrice). The striking part is the context: this unwind came after, not before, Thursday's vessel strike, meaning traders priced the kinetic attack as a one-off rather than a re-disruption. Quantify the gap per §3.5.5: a $75.26 Brent that bounced on the strike Day 119 round-tripped to a pre-war $71.99 a day later, even as transit volumes stay a fraction of the 130–140/day pre-war norm (CNBC). Skeptical counter per §3.5.3: a price is a forecast, not a fact — the IRGC route-control warning still stands, the IMO evacuation pause holds, and flow has not normalized. Under the multi-clock framework the energy-infrastructure clock improves on the reading while the chokepoint risk persists. Analytical judgment: the single most-cited de-escalation metric reasserted itself the day after it reversed, and it did so through a kinetic attack — the cleanest evidence yet that the market reads the MoU as durable. The caveat is that the market is pricing the deal's survival, not the corridor's safety; those are the same bet only as long as Tehran's route claim stays rhetorical.",
    },
    {
      title:
        "Taiwan: the de-escalation read firms, but the chokepoint that contradicted it Day 119 is the same one underwriting the relief",
      body:
        "For Taiwan, Day 120 is the better-news mirror of Day 119's warning. A war premium fully unwound and a signed Lebanon framework both lower the near-term tail risk to the corridor carrying roughly 38% of the island's LNG and 70% of its crude, against about 11 days of LNG cover (CNBC, OilPrice). The operational read holds firm: no LNG cargo was hit, flows continue, Brent at pre-war levels eases the import bill, and LNG cover through September plus TSMC's 2026 CapEx near 8% both carry. Skeptical counter per §3.5.6: the relief and the risk run through the same waterway. The IRGC's 'designated routes' warning that produced Thursday's strike is unretracted, and a 60-day waiver is not a settlement — the structural exposure that a single Strait, an IRGC that claims to administer it, and an 11-day buffer create does not move because the price fell (Tasnim, Al Jazeera). Analytical judgment: the durable hedges are the ones indifferent to whether the price is $72 or $75 — diversification toward Australian and US cargoes and the Maanshan and Kuosheng nuclear restarts (2028–2029). Day 120's Taiwan lesson is not complacency but symmetry: the chokepoint that downgraded the threat board this week is the one that contradicted it last week, and the only thing that retires the risk is supply that does not transit Hormuz.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. Washington brokered and signed the Israel-Lebanon framework, pledging $100M in humanitarian aid and LAF training; its leverage stays the ~$24-25B in performance-based relief Iran 'won't get a dime' of until it performs, the 60-day waiver running to August 21.",
    israel:
      "No verified new Israeli casualties. Israel signed the Washington framework, but Netanyahu vowed to hold the south-Lebanon buffer zone 'until Hezbollah disarms'; Hezbollah accused Israel of a 'flagrant' breach the same day, alleging a drone strike killed three civilians in Mayfadoun.",
    iran:
      "No verified new mass toll; Iran was not a party to the Israel-Lebanon framework. Tehran kept inspections conditional on 'a final agreement' while Grossi insisted they will happen; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "Lebanon's toll rose by three — a drone strike on a car in Mayfadoun killed three civilians hours after the framework was signed (Lebanese Health Ministry) — to ~4,060 killed / 12,124 wounded (aggregates up to ~4,178 / 12,167). Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
