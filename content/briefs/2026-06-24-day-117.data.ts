import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction holds de-escalating for a second day, but the basis narrows from broad to single-vector. The hardest-to-spin evidence still points down: Brent eased to roughly $77 — a near-three-month low — Washington granted Iran a 60-day license to sell oil, and Hormuz transits kept rising (Trading Economics, Al Jazeera, CNBC). That license is the first completed deliverable of the 60-day window, answering Day 116's 'machinery built, nothing moved.' The binding caveat is the nuclear track, which cracked into an open US–Iran contradiction — but a falling price and a signed license are acts, not statements, so direction holds rather than reverting to mixed.",
      risk7d:
        "Seven-day risk holds conditional and cannot fall to low, governed by §3.5.3. Trump said Iran 'fully and completely agreed' to inspections and warned 'there would be no further negotiations' otherwise; Iran's foreign ministry (Baghaei) and IRGC-aligned Tasnim flatly deny it, calling an inspector visit a violation of the MoU (CBS News, Tehran Times, WANA). This is the sharpest public US–Iran contradiction since the June 17 signing, and a principal threatening to halt talks mid-process is a standing destabilizer even as both delegations keep meeting.",
      spillover:
        "Spillover holds conditional, anchored on Lebanon. The fifth round split into a Pentagon security session and a State Department political session — the deepest structure the track has had — but the IDF struck Hezbollah operatives near Nabatieh, killing two by Lebanese accounts, the first lethal violence since the June 19 truce renewal (Ynet, Al Jazeera, Times of Israel). President Aoun demands a full withdrawal and an end to 'occupation'; Israel insists on holding its line until Hezbollah disarms. The §3.5.6 Israel-independence prior stays the active driver.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'NPR / CBS News / Times of Israel / Tehran Times',
      event:
        "The nuclear track cracked into an open bilateral contradiction. Iran's foreign-ministry spokesman Baghaei told IRNA that Tehran negotiated nothing on its nuclear program and accepted no new commitments, that there is 'no protocol' for inspecting the bombed sites, and that it never met DG Grossi; IRGC-aligned Tasnim said an inspector visit would violate the MoU and that Iran blocked Grossi from Sunday's session — directly contradicting Trump's claim that Iran 'fully and completely agreed' to inspections",
      summary:
        "Skeptical counter per §3.5.3 cuts at the headline itself: the two governments now publicly dispute what was agreed. Trump warned 'there would be no further negotiations' without inspections; Iran frames continued IAEA contact as routine NPT obligation, not access to Natanz, Isfahan or Fordow (CBS News, WANA, Times of Israel).",
      impact:
        "The weaponization clock does not improve; it regresses to a public stalemate. Grossi's standing position — inspectors reach only undamaged sites and must still return to the three that hold the ~440.9 kg of 60% HEU — is now the floor, not the disputed pledge (IAEA, ISIS).",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Al Jazeera / CNBC / Trading Economics',
      event:
        "Washington granted Iran a 60-day license to sell oil on international markets — the first completed deliverable of the post-signing window — as Brent eased to roughly $77 a barrel, a near-three-month low, and Gulf supply kept normalizing. Reporting tied the easing to a frozen-assets-for-agriculture funding channel rather than an unconditional cash transfer",
      summary:
        "This is the verifiable counterweight to the nuclear-track rupture: a sanctions waiver actually issued and a price that keeps falling, the inverse of a risk-premium build (Al Jazeera, Trading Economics). It converts Day 116's 'no completed act yet' into one concrete, dated act.",
      impact:
        "The energy-infrastructure clock improves again. A signed license plus a falling Brent is the hardest evidence the de-escalation is real rather than announced — and it is why direction holds down despite the inspections fight.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: 'Tehran Times / CNBC / Kpler',
      event:
        "Hormuz stayed open in fact but contested in sovereignty. Parliament Speaker and chief negotiator Ghalibaf told state media 'the Strait of Hormuz will never return to its prewar conditions and will be administered by the Islamic Republic of Iran, in accordance with international law,' even as Iran shipped 30M+ barrels over the past week and 500+ vessels still queued to exit the Gulf with traffic a fraction of the pre-war 120–130 transits a day",
      summary:
        "The gap between rhetoric and flow widens: Tehran asserts permanent administration of the chokepoint while its own exports surge through it under a US license (Tehran Times, CNBC). The claim is a sovereignty marker, not an operational closure.",
      impact:
        "The chokepoint reverts further from bargaining collateral to background dispute, but Ghalibaf's 'administered by Iran' framing keeps the toll-institutionalization prior alive as the structural tail.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Ynet / Jerusalem Post / Times of Israel',
      event:
        "The fifth round of Israel–Lebanon talks deepened into two tracks: after an eight-hour opening Tuesday, Wednesday's session moved to the Pentagon for security-only talks, with a politically-focused State Department session set for Thursday, organized around 'pilot areas' where the IDF would withdraw so the Lebanese army can prove it can disarm Hezbollah",
      summary:
        "Structure is the positive; the gap is unbridged. President Aoun insists on a full IDF withdrawal and an end to the 'occupation'; Israel will hold its security line until Hezbollah is disarmed and the south demilitarized (Jerusalem Post, Ynet).",
      impact:
        "The negotiation-capacity clock advances on the Lebanon track even as the nuclear track stalls — the two tracks now move at different speeds, and the de-confliction cell is the only brake on the gap turning kinetic.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Times of Israel / Al Jazeera / Ynet',
      event:
        "The IDF said it struck Hezbollah operatives in two separate incidents near the Ali Taher ridge by Nabatieh as the Washington talks opened; Lebanese media reported the fire killed two and wounded two — the first lethal violence since the June 19 truce renewal and the second test of the new de-confliction cell in as many days",
      summary:
        "Skeptical counter per §3.5.6: Israel frames the strikes as removing an immediate threat to its troops, but a lethal exchange on the opening day of the comprehensive round shows the truce is procedural, not yet structural (Times of Israel, Al Jazeera).",
      impact:
        "Spillover stays the binding constraint. The cell contained the incident to two casualties rather than a cycle, but the buffer-zone presence keeps the §3.5.6 prior live and unretired.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; Washington issued Iran a 60-day oil-sales license as the nuclear-inspection dispute hardened)',
      status:
        "No new US casualties. Washington granted Iran a 60-day oil-sales license — the first completed deliverable of the 60-day window — while Trump insisted Iran 'fully and completely agreed' to inspections and warned 'there would be no further negotiations' without them. Washington's leverage stays the ~$24-25B in performance-based, frozen-asset and sanctions relief Iran 'won't get a dime' of until it performs.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (fifth-round talks split into Pentagon and State sessions; IDF struck Hezbollah in south Lebanon)',
      status:
        "No verified new Israeli casualties. The fifth round of Israel–Lebanon talks split into a Pentagon security session and a State Department political session, but the IDF struck Hezbollah operatives near Nabatieh and keeps its security line, with the chief's goal still 'defending the north.' The buffer-zone driver Aoun calls 'occupation' stays unresolved.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (Iran front quiet; posture diplomatic; executions continue off the war ledger)',
      status:
        "No verified new mass toll on the Iran front. Iran ruled out IAEA inspection of the bombed sites and Ghalibaf asserted permanent administration of Hormuz; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025 and no inspector has reached a damaged site. Off the war ledger, HRANA's 40 political and security executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon 4,057 killed / 12,121 wounded (June 20 revision; +2 killed June 23, first since truce renewal); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain none',
      delta: '+2 killed / +2 wounded Lebanon (IDF strikes near Nabatieh, first lethal violence since the June 19 truce renewal)',
      status:
        "Lebanese media reported two killed and two wounded in the IDF strikes near Nabatieh — the first lethal violence since the June 19 truce renewal — incremented into the Lebanon toll rather than treated as a mass-casualty event; the war-cumulative figure stands near 4,057 killed / 12,121 wounded. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 117 holds de-escalating for a second day, but the ground narrows beneath it. The two negotiating tracks keep meeting and the hardest-to-spin evidence still points down — Brent eased to roughly $77 a barrel, a near-three-month low, Washington granted Iran a 60-day license to sell oil, and Hormuz transits kept rising (Trading Economics, Al Jazeera, CNBC). That license is the first completed deliverable of the 60-day window, converting Day 116's 'machinery built, nothing moved' into one concrete act. But the nuclear track cracked into an open contradiction the two governments cannot both be telling the truth about. Trump insists Iran 'fully and completely agreed' to IAEA inspections and warned 'there would be no further negotiations' without them; Iran's foreign ministry and IRGC-aligned Tasnim flatly deny it, calling an inspector visit a violation of the MoU and framing continued IAEA contact as routine NPT obligation, not access to the bombed sites (CBS News, Tehran Times, WANA). Grossi's standing position is the floor: inspectors reach only undamaged sites, and the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unseen since June 2025 (IAEA, ISIS). On Lebanon, the fifth round deepened into Pentagon security and State Department political sessions, but the IDF killed two near Nabatieh — the first violence since the June 19 truce. 30-day ceasefire probability holds at 72; direction holds de-escalating with the inspections rupture as the binding caveat.",
  implications: [
    {
      title:
        "The nuclear track is now a contradiction, not a timeline",
      body:
        "Day 116 carried the IAEA-inspector pledge as a disputed milestone; Day 117 converts it into an irreconcilable public dispute between two governments. Trump says Iran 'fully and completely agreed' to inspections and warned 'there would be no further negotiations' otherwise (CBS News, CNN). Iran's foreign-ministry spokesman Baghaei told IRNA there is 'no protocol' to inspect the bombed sites, that Tehran accepted no new nuclear commitments and never met Grossi; IRGC-aligned Tasnim called an inspector visit a violation of the MoU and said Iran kept Grossi out of Sunday's session (Tehran Times, WANA, Times of Israel). Skeptical counter per §3.5.3, and decisive: this is no longer a question of when the pledge converts but whether it exists. Under the multi-clock framework the negotiation-capacity clock, which advanced Day 116, now stalls on its central file. Analytical judgment: the ground truth is Grossi's, not either principal's — the IAEA reached only undamaged sites and still has not seen the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow (IAEA, ISIS). The deal's structure survives because the energy and Lebanon tracks moved; but the file that justified the war is exactly the one where the two sides cannot agree on what was promised, and a US principal threatening to walk is the reason seven-day risk cannot ease.",
    },
    {
      title:
        "A signed oil license and a falling Brent are the first completed act — and the reason direction holds",
      body:
        "The strongest signal on Day 117 is again the one no party can spin. Washington granted Iran a 60-day license to sell oil on international markets, Brent eased to roughly $77 — a near-three-month low — and Iran shipped 30M+ barrels over the past week as Gulf supply normalized (Al Jazeera, Trading Economics, CNBC). This matters beyond price: it is the first completed deliverable of the post-signing window, the act Day 116 said the machinery had not yet produced. Skeptical counter per §3.5.3: the relief is structured as a frozen-assets-for-agriculture channel rather than a cash handout, traffic is still a fraction of the pre-war 120–130 transits a day with 500+ vessels queued, and chief negotiator Ghalibaf declared the Strait 'will be administered by the Islamic Republic of Iran' permanently (Tehran Times, CNBC). Under the multi-clock framework the energy-infrastructure clock improves materially for a second day. Analytical judgment: a sanctions waiver actually issued against a falling Brent is harder evidence of de-escalation than any committee, and it is why direction holds down even as the nuclear track ruptures. The chokepoint is reverting from load-bearing issue to background dispute — but Ghalibaf's sovereignty claim is the marker that the structural risk outlasts the price relief.",
    },
    {
      title:
        "Taiwan: the acute LNG threat keeps receding, but Ghalibaf just named the permanent risk",
      body:
        "For seventeen weeks the Taiwan read tracked one question: would the Hormuz disruption convert to a physical interruption of the LNG and crude on which the island depends for roughly 38% of its gas and 70% of its oil, against about 11 days of LNG cover. Day 117 extends the relieving answer — Brent at a near-three-month low, a US oil-sales license, transits rising — so the acute-shock scenario the IEA called the worst energy disruption in modern history keeps receding rather than arriving (Trading Economics, Al Jazeera). Skeptical counter per §3.5.6: Ghalibaf's declaration that Iran will permanently 'administer' the Strait is the structural reminder the relief cannot retire — the same single chokepoint, governed by the same actor now claiming standing control of it, will be there at the next crisis with the same 11-day buffer behind it (Tehran Times). Analytical judgment: the LNG-cover-through-September case holds and TSMC's 2026 CapEx near 8% carries, and the procurement scramble should keep easing as flows normalize. But the lesson Taipei should bank is the one Ghalibaf just stated aloud: diversification toward Australian and US cargoes and the Maanshan/Kuosheng nuclear restart timeline (2028–2029) are the durable hedges, because a chokepoint a hostile state claims the right to administer is a permanent exposure, not a wartime one.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. Washington granted Iran a 60-day oil-sales license — the first completed deliverable of the window — while Trump insisted Iran 'fully and completely agreed' to inspections and warned 'there would be no further negotiations' without them. Leverage stays the ~$24-25B in performance-based relief Iran 'won't get a dime' of until it performs.",
    israel:
      "No verified new Israeli casualties. The fifth round split into a Pentagon security session and a State Department political session, but the IDF struck Hezbollah near Nabatieh and keeps its security line; the buffer zone Aoun calls 'occupation' stays unresolved.",
    iran:
      "No verified new mass toll. Iran ruled out IAEA inspection of the bombed sites and Ghalibaf asserted permanent administration of Hormuz; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "Lebanese media reported two killed and two wounded in IDF strikes near Nabatieh — the first lethal violence since the June 19 truce renewal — incremented into the Lebanon toll near 4,057 killed / 12,121 wounded rather than treated as a mass-casualty event. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
