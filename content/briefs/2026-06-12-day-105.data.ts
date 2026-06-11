import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 105 reverses Day 104's two-night exchange on Washington's word: after a morning vow to take Iran's oil and a threat to seize Kharg Island — the terminal handling ~90% of Iran's crude exports — President Trump called off the scheduled third night of strikes, citing a breakthrough 'brought to the highest level of Iranian leadership and approved' and a settlement he expects signed in Europe within days (Washington Times, Al Jazeera). Brent fell nearly 3% to about $90.38 and US equities rose (CNBC). But §3.5.3 governs: a senior Iranian official told MS NOW that Tehran has agreed to no MOU; Iran rebuked the IAEA censure and Araghchi stayed defiant. Direction shifts to mixed — a kinetic pause not yet matched by any Iranian principal.",
      risk7d:
        "Seven-day risk eases from extreme to critical: the live two-night US-Iran exchange was halted when Trump called off the third night and pulled back from the Kharg Island oil-infrastructure threat. The negotiation-capacity clock improves — Qatar's team is in Tehran, the UAE and Iran held rare direct talks, and Trump says a deal could be signed within days. But the easing is conditional and one Truth-Social post reversible: no Iranian principal has confirmed the deal, the IAEA censure stands and Iran has rebuked it, and the framework has already broken three times. The binding test is whether Tehran confirms a signature or the strikes resume.",
      spillover:
        "Spillover holds critical: the kinetic pause is barely 24 hours old, and the multi-base salvo on Bahrain, Kuwait, and Jordan and the Kharg Island threat sit immediately behind it. Netanyahu reasserted that Israel is not party to the emerging deal and would halt strikes only 'for now' — the standing Israel-independence prior re-asserted, not retired. The Lebanon seam stays procedural: the June 3 pilot-zone framework holds on paper, Hezbollah's rejection stands, and the MOH war-cumulative carries above 3,600. A single strike on a transiting vessel over the IRGC's 'closed to all vessels' Strait remains the fastest path back to escalation.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Truth Social / Washington Times / Al Jazeera / Global News',
      event:
        "⭐ Trump called off the scheduled third night of US strikes on Iran hours after threatening to 'take Kharg Island' — the terminal handling ~90% of Iran's crude exports — citing a breakthrough 'brought to the highest level of Iranian leadership and approved'",
      summary:
        "The Truth Social post reversed a morning vow to 'pummel' Iran and seize its oil infrastructure; Trump told reporters the US had 'made a great settlement of the war' that is 'subject to finalization of documents' he expects signed in Europe 'in the next few days.' A Qatari delegation was in Tehran and the UAE and Iran held rare direct talks.",
      impact:
        "Halts the war's most dangerous mode — direct US-Iran kinetic exchange — and pulls back from an oil-infrastructure escalation that would have crossed the Kharg threshold. Marked pivotal because the strikes actually stopped. Skeptical counter per §3.5.3: the breakthrough is asserted entirely Washington-side; the binding question into Day 106 is whether an Iranian principal confirms a signature or the call-off proves a one-day reprieve.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'MS NOW / IRNA / Tasnim / The Tribune',
      event:
        "No Iranian principal confirmed Trump's deal: a senior Iranian official linked to the talks told MS NOW that Tehran has agreed to no memorandum of understanding or framework, and Iran formally rebuked the IAEA censure, vowing to defend its 'inalienable rights'",
      summary:
        "Foreign Minister Araghchi — who had posted 'Leave our region if you want to be safe' — coordinated with Saudi and Turkish counterparts and condemned the US strikes as a sovereignty violation while asserting Iran's right to self-defense (Tribune); Iran's Permanent Mission questioned the legitimacy of the IAEA vote (IRNA).",
      impact:
        "The §3.5.3 counter in real time, and the same configuration as Day 50 — when Trump's '80% complete' optimism preceded the Day 51 collapse. Analytical judgment: until a named Iranian principal ratifies the framework, the de-escalation rests on one side of the table; the nuclear vector hardened even as the strikes paused — an asymmetric stand-down.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNBC / Trading Economics / EIA',
      event:
        "Brent crude fell nearly 3% to about $90.38 — reversing Day 104's move back above $96 — after Trump said he expects to sign a deal with Iran soon; US equities rose sharply",
      summary:
        "Oil gave back the kinetic risk premium on the deal signal even as Trump's morning Kharg Island threat briefly cut the other way; the EIA's June Short-Term Energy Outlook still holds the June-July average near $105 (CNBC, Trading Economics, EIA).",
      impact:
        "The energy market priced the call-off as de-escalation — the mirror image of Day 104's re-rate to the upside. Skeptical counter: the spot move is sentiment on an unsigned deal; the IRGC's 'closed to all vessels' declaration, the structural >100-day closure, and the fresh Kharg threat are unchanged. Analytical judgment: the energy-infrastructure clock is unchanged structurally — the price eased, the chokepoint did not open.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'IRNA / GOV.UK / US Mission Vienna / Washington Institute',
      event:
        "The IAEA Board closed its June session with Iran rebuking the censure adopted Day 104 (21-3-10) and vowing to defend its rights; the E3-plus-US 'Quad' restated that Iran has refused for nearly a year to grant access to its four enrichment facilities and their HEU stockpiles",
      summary:
        "The resolution cited Iran's deepening Comprehensive Safeguards Agreement non-compliance; Iran's Permanent Mission questioned the Board's integrity (GOV.UK, US Mission Vienna, IRNA). Russia and China, which opposed the resolution, continue to supply multilateral cover (Washington Institute).",
      impact:
        "Confirms §3.5.6: the censure was met with rebuke and a defense of enrichment 'rights,' not restored access. ~440.9 kg of 60% HEU stays unverifiable at Isfahan since June 2025 — ~90% of the separative work to weapons-grade. The nuclear file is the clearest evidence the de-escalation is one-sided: Trump stood down the bombs, Tehran did not stand down the enrichment posture.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel / PBS / NPR',
      event:
        "Netanyahu said Israel is not party to the emerging US-Iran deal and would halt strikes on Iran only 'for now,' warning Israel would hit back if attacked; the Lebanon truce stayed procedural",
      summary:
        "Israel stayed out of the US-Iran exchange and distanced itself from the deal Trump announced (Times of Israel). In Lebanon the June 3 pilot-zone framework — LAF exclusive control south of the Litani — holds on paper against Hezbollah's June 4 rejection and the June 8 Tyre evacuation order (PBS, NPR).",
      impact:
        "Re-asserts the standing Israel-independence prior (§3.5.6): any US-Iran deal that depends on Israeli compliance is structurally fragile, and Netanyahu has now explicitly excluded himself from it. The binding Lebanon test — LAF deployment un-fired-upon through the week of June 22 — carries; MOH war-cumulative above 3,600; truce procedural, not consolidated.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (third-night strikes called off; no new exchange)',
      status:
        "No new US casualties. Trump called off the scheduled third night of strikes, halting the direct exchange that had run since the June 9 Apache downing (crew recovered unharmed); no new Iranian salvo on Gulf bases followed. The $24B frozen-asset release stays conditioned on a ceasefire first, now braided to an unsigned settlement Trump says will be finalized in Europe within days. Sledgehammer remains operational and the Kharg Island option was threatened, then shelved.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 105 IDF KIA',
      status:
        "No new IDF KIA. Netanyahu said Israel is not party to the emerging US-Iran deal and would halt strikes on Iran 'for now,' reaffirming Israel would respond with force if attacked. The Lebanon truce stayed procedural: the June 3 pilot-zone framework holds on paper against Hezbollah's rejection and the June 8 Tyre evacuation order; no new confirmed IDF-Hezbollah kinetic exchange Day 105.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new published (third-night strikes called off; only minor shrapnel injuries from earlier strikes)',
      status:
        "No verified new mass toll from the June 9-11 US campaign beyond minor injuries (two residents of Minab County hurt by shrapnel). Trump called off the third night and pulled back from the Kharg Island threat. Iran rebuked the IAEA censure and vowed to defend its enrichment 'rights,' with Russia and China opposing the resolution; ~440.9 kg of 60% HEU remains unverifiable at Isfahan since June 2025. HRANA 3,636+ and Hengaw 6,620+ counts carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH above 3,600 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new confirmed Gulf-state casualties; Lebanon MOH carries',
      status:
        "No new confirmed Gulf-state casualties; the called-off strikes prevented a new round. Qatar's negotiating team is in Tehran and the UAE and Iran held rare direct talks, widening the mediation. The Lebanon Health Ministry war-cumulative carries above 3,600 killed since March 2 amid the procedural truce. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 105 reverses Day 104's two-night exchange — on Washington's word. After a morning vow to take Iran's oil and a threat to seize Kharg Island, which handles roughly 90% of Iran's crude exports, President Trump called off the scheduled third night of strikes hours later, posting that discussions with Iran had been 'brought to the highest level of Iranian leadership and approved' and that a settlement is 'subject to finalization of documents' he expects signed in Europe 'in the next few days' (Washington Times, Al Jazeera). Markets read de-escalation: Brent fell nearly 3% to about $90.38 and US equities rose (CNBC). Analytical judgment, per §3.5.3: the optimism is entirely Washington-side. A senior Iranian official linked to the talks told MS NOW that Tehran has agreed to no memorandum of understanding or framework; Iran formally rebuked the IAEA censure adopted Day 104 and vowed to defend its 'inalienable rights' (IRNA); and Foreign Minister Araghchi stayed defiant — 'Leave our region if you want to be safe' (Tribune). Netanyahu said Israel is not party to the emerging deal and would halt strikes 'for now' but strike back if attacked (Times of Israel); the UAE and Iran held rare direct talks, widening the mediation. The kinetic pause is real and stepped back from an oil-infrastructure escalation; the deal it hangs on is unconfirmed by any Iranian principal, and the framework has broken three times before. 30-day ceasefire probability rises to 15 from 8; direction shifts to mixed, seven-day risk eased to critical.",
  implications: [
    {
      title:
        "The strikes actually stopped — a real kinetic de-escalation — but the deal it is hung on has not been confirmed by a single Iranian principal",
      body:
        "The defining act of Day 105 is subtractive: the scheduled third night of US strikes did not happen. Trump called it off hours after threatening to take Kharg Island, posting that talks had been 'brought to the highest level of Iranian leadership and approved' and that documents would be signed in Europe within days (Washington Times, Al Jazeera). That halts the war's most dangerous mode — direct US-Iran kinetic exchange — and steps back from an oil-infrastructure escalation that would have crossed the Kharg threshold; it earns the day's single pivotal mark because the bombs stopped, not because a deal was signed. Skeptical counter per §3.5.3, and it is the analytical core: a senior Iranian official told MS NOW that Tehran has agreed to no MOU or framework, and Iran spent the same day rebuking the IAEA censure. This is almost exactly the Day 50 configuration — Dar's '80% complete' and Trump's optimism preceded the Day 51 collapse. Under the multi-clock framework the negotiation-capacity clock improves — Qatar in Tehran, rare UAE-Iran direct talks, a stated signing window — but it stays braided to a kinetic clock one post can restart. Analytical judgment: this is the most hopeful single day since the pause began, but a settlement asserted by only one principal is not yet a settlement. The binding test into Day 106 is whether a named Iranian principal ratifies it.",
    },
    {
      title:
        "The de-escalation is asymmetric — Washington stood down the bombs, Tehran did not stand down the enrichment posture",
      body:
        "The clearest evidence that Day 105 is mixed rather than de-escalating sits on the nuclear file. As Trump called off the strikes, Iran's Permanent Mission formally rebuked the IAEA censure adopted Day 104, questioned the Board's integrity, and vowed to defend its 'inalienable rights' (IRNA); the E3-plus-US 'Quad' restated that Iran has for nearly a year refused access to its four enrichment facilities and their HEU stockpiles (GOV.UK, US Mission Vienna). Araghchi, who had posted 'Leave our region if you want to be safe,' condemned the US strikes to Saudi and Turkish counterparts while asserting a right to self-defense (Tribune). Skeptical counter, held the other way: none of this forecloses a deal — hard public lines are the normal backdrop to a signature, and Russia and China opposing the censure give Tehran cover to compromise without looking cornered. But the asymmetry is the point: ~440.9 kg of 60% HEU stays unverifiable at Isfahan since June 2025 — ~90% of the separative work to weapons-grade — and that stockpile sits behind a defended enrichment 'right,' not a frozen file. Under the multi-clock framework the active-deadline clock reset from an imminent-strike deadline to a diplomatic signing window, but the weaponization clock did not move. Analytical judgment: the bombs pausing is real; until access is restored rather than 'rights' defended, §3.5.6 holds — the censure was answered with rebuke, not cooperation.",
    },
    {
      title:
        "Taiwan: Brent gave back the war premium to about $90 on the deal signal, but the Kharg threat and the structural Hormuz closure cap the relief",
      body:
        "For Taiwan the energy read is a one-day mirror of Day 104. Brent fell nearly 3% to about $90.38 and US equities rose after Trump said a deal would be signed soon — the kinetic risk premium that had carried crude back above $96 came off on the de-escalation signal (CNBC, Trading Economics). The EIA's June outlook still holds the June-July average near $105. Skeptical counter, held both ways: the spot move is sentiment on an unsigned deal, and it was bracketed the same day by Trump's threat to take Kharg Island — handling ~90% of Iran's crude exports — so the downside tail did not narrow, it merely went un-pulled. Structurally nothing opened: the IRGC's 'closed to all vessels' declaration stands, the >100-day effective closure persists, the ~40-ship NCAGS Bahrain channel remains the only durable transit mechanism, PGSA $2M/transit yuan-billed continues, and China still takes ~37.7% of Hormuz crude. Analytical judgment: the energy-infrastructure clock is unchanged — the price eased, the chokepoint did not open — and a signed MOU with an unrestricted-Hormuz clause remains the only catalyst that revises the LNG-cover dominant case. LNG cover through September and TSMC's 2026 CapEx framework near 8% carry; the call-off lowers the near-term probability of a transit-vessel strike but does not retire it. No fresh Taiwan-specific development; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties; Trump called off the third-night strikes and no new Iranian salvo followed. $24B asset release stays conditioned on a deal first, now braided to an unsigned settlement Trump expects finalized in Europe within days. Sledgehammer operational; the Kharg Island option was threatened, then shelved.",
    israel:
      "No new IDF KIA. Netanyahu said Israel is not party to the emerging US-Iran deal and would halt strikes 'for now,' warning of force if attacked. Lebanon truce procedural after the June 8 Tyre evacuation order; no new IDF-Hezbollah exchange confirmed.",
    iran:
      "No verified new mass toll from the June 9-11 campaign beyond minor shrapnel injuries. Iran rebuked the IAEA censure and vowed to defend enrichment 'rights' with Russia and China opposing; ~440.9 kg 60% HEU unverifiable at Isfahan since June 2025. HRANA 3,636+ carries; 3.2M displaced.",
    other:
      "No new confirmed Gulf-state casualties; the called-off strikes prevented a new round. Qatar's team is in Tehran and the UAE and Iran held rare direct talks. Lebanon MOH carries above 3,600 killed; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
