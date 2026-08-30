import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, and the mix is the one that has set the shape since Day 182: real de-escalation on the energy and maritime axis, the core standoff frozen, and the connected fronts worsening. Into Day 185 the mediation chorus thickened — Qatar's prime minister carried his Tehran talks into a wider Gulf push behind the phased Iranian-Omani corridor, a Pakistani delegation left Tehran calling its Hormuz-and-negotiations talks 'very positive and productive,' and oil held near $88. It is not de-escalating cleanly: the US-Iran track stayed closed, the corridor defers full reopening until Washington honors the lapsed June deal, Rezaei's Gulf-route threat carries, and the home front darkened toward more executions. It is not escalating: no shot was fired on the US-Iran front and the bank blow stayed deferred behind the September 24 Xi summit rather than landing. Mixed holds — the energy clock steady, the humanitarian clock worsening, the decisive economic collision deferred, not defused.",
      risk7d:
        "Seven-day risk holds critical despite a diplomacy-saturated Monday. The corridor framework and Rubio's standing no-new-strikes line cap near-term Hormuz kinetic risk, but the tails that define the gauge stay loaded and are now indexed to a calendar. Bessent's major-bank blow is deferred behind the Xi summit, not cancelled, and Beijing has moved from framing to an explicit rare-earth payback threat; the secondary-sanctions collision, a Chinese counter-move, an Iranian 'seismic' answer, an interdiction of the CENTCOM escort convoy the corridor excludes, a strike on a Saudi or Emirati bypass route, or a Hezbollah reprisal could each fire inside the week. Gaza is the nearer risk: the Board of Peace roadmap advanced on paper while Israel withheld public agreement and the disarm-first / withdraw-first sequencing stayed deadlocked, with strikes since the October 10 ceasefire at at least 1,273. The chorus cools one axis; it does not clear the others.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and a formalized economic front now wired to a US-China summit and a Chinese payback threat. Day 185 eased the strait node's diplomacy further — the corridor advancing, Qatar and Pakistan working Tehran, oil near $88 — while the others held or worsened: Gaza stayed deadlocked, the home-front execution campaign deepened, and the bank collision was pushed past the summit rather than resolved. The corridor's exclusion of military vessels leaves the US convoy operating alongside, not inside, the arrangement, and Rezaei's threat to the Gulf-neighbour bypass routes still aims to deter the alignment the plan demands. No new front opened, which is why spillover did not worsen outright; too many fronts stayed hot for it to ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'South China Morning Post / CNBC / Fortune',
      event:
        "Beijing hardened from framing to threat: Chinese officials vowed 'payback' for the China-heavy Iran designations and signaled the rare-earth and critical-minerals lever roughly three weeks before Xi Jinping's September 24 Washington visit, while Bessent's 'major bank' blow stayed unnamed — Operation Economic Outcast having named tankers, a Hong Kong shipper and about sixty entities but spared every major Chinese bank.",
      summary:
        "Per §3.5.3 hold both claims in view: Washington says 'no one is above the reach of US sanctions' while Beijing calls them 'illicit' and readies retaliation — the deferral now met by a named counter-lever, not mere rhetoric.",
      impact:
        "The political-will clock reads against two calendars at once: the summit Washington wants and the retaliation Beijing is pricing; naming a major bank three weeks before a state visit is harder, not easier.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Al Arabiya / Al Jazeera / Qatar foreign ministry',
      event:
        "Qatar's prime minister carried his Tehran talks with Foreign Minister Araghchi into a wider Gulf push behind the phased Iranian-Omani Hormuz corridor — a northern inbound lane in Iranian waters, a southern outbound lane in Omani waters, a 60-day interim term, joint mine-clearance, and a coordinated fee — with full reopening deferred until Washington honors the lapsed June deal.",
      summary:
        "Per §3.5.6 the toll-institutionalization and mine-clearance priors keep resolving toward Tehran — the framework writes Iranian gating, revenue and administration into the strait, a permit-and-revenue regime Washington calls a blockade to break, now with a second Gulf endorser.",
      impact:
        "The energy-infrastructure clock's structural picture keeps shifting Iran's way; the US escort convoy is left further outside a hardening Iranian-administered regime the corridor pointedly excludes.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Fox News / Express Tribune / RTE',
      event:
        "A Pakistani delegation left Tehran after talks with Pezeshkian on reopening Hormuz and reviving US-Iran negotiations, calling the meeting 'very positive and productive,' as Qatar's channel ran in parallel — a widening bench of Gulf and Asian interlocutors, none of it yet with a US counterparty.",
      summary:
        "Per §3.5.3 a widening mediation bench is not a track: Oman, Qatar, Pakistan and China are all in motion, but none has moved Washington to the table and the corridor is a maritime de-confliction, not a ceasefire.",
      impact:
        "The negotiation-capacity clock ticks up on activated interlocutors while the decisive US-Iran seam stays closed; the warming is real and marginal, not a reopening.",
    },
    {
      id: 4,
      direction: 'neutral',
      importance: 'medium',
      source: 'Trading Economics / The National / CBS News',
      event:
        "Oil held its plateau and the strait stayed choked: Brent settled near $88 after the week's easing, Hormuz traffic remained below normal under the US sanctions-and-blockade pressure, and war-risk shipping premiums held 3-10% of hull value against roughly 0.25% before the war — a $100M tanker now facing $3-10M in war-risk cover.",
      summary:
        "Per §3.5.5 quantify: Brent near $88 with premiums 3-10% of hull prices a cooling rupture tail atop a punitive risk-and-enforcement premium, even as CENTCOM's escort runs ~8-9 mb/d, ~2-3 VLCC transits a day versus roughly eight pre-war.",
      impact:
        "The energy clock's relief stays conditional on a drained stock base: a corridor re-gating, a named major-Chinese-bank designation, or a convoy loss still reprices past $100 in a session.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'CHRI / Amnesty International / Al Jazeera',
      event:
        "The connected fronts worsened away from the water: rights monitors documented public executions of January-protest detainees in Isfahan and dozens more sentenced in fast-tracked group prosecutions, while in Gaza the Board of Peace disarmament roadmap advanced on paper but Israel withheld public agreement and Hamas held it would not act until Israeli forces withdrew.",
      summary:
        "Per §3.1 dual-sourcing the execution wave is a rights thread NOT folded into the war-casualty cumulative; per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — the Hormuz and sanctions diplomacy freed no pressure on Gaza.",
      impact:
        "The humanitarian clock worsens off-stage from the maritime easing: the home front and the connected theaters escalate independently of the corridor and sanctions tracks, a widening no de-confliction can bind.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series into Day 185; a diplomacy-and-markets Monday — the mediation chorus widening, the corridor framework advancing, oil plateaued near $88 — with no US-Iran shooting and no reported American casualty; Rubio's no-new-strikes line still caps the kinetic track; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule. The US-Iran shooting stayed paused into Day 185 as Washington held its major-bank blow behind the September 24 Xi summit and Beijing answered with an explicit rare-earth payback threat, and Secretary Rubio's word that no new Iran strikes were expected still holds. The Iran-Oman corridor pointedly bars military vessels, leaving CENTCOM's escort convoy — more than 660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d through the strait under escort — operating alongside rather than inside the arrangement, and it remains a standing daily maritime exposure with enforcement holding at ~55 blockade-runners rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front; no new Israeli fatalities or wounded reported there. Israel stayed offstage on the US-China and Hormuz tracks while its Gaza campaign stayed deadlocked and lethal — the Board of Peace roadmap advanced on paper but Israel withheld public agreement, the term is 'decommissioning' not disarmament, and Hamas held it would not act until Israeli forces withdrew (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273) — while it held its Gaza line at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Iran-front toll. Israel was offstage on the weekend's US-China and Hormuz diplomacy but its own fronts stayed hot: the US-led Board of Peace disarmament roadmap advanced on paper, yet Israel has still not publicly agreed, the roadmap relies on 'decommissioning' rather than 'disarmament,' and Hamas holds it will not surrender weapons until Israeli forces withdraw — the disarm-first / withdraw-first sequencing unresolved, strikes since the October 10 ceasefire reaching at least 1,273 per Gaza health officials (Al Jazeera, Chatham House), a connected theater the series does not fold into the war-casualty cumulative. Posture stayed political and hard: the IDF stays until Hamas disarms under a US general on Kushner's 30-day weapons-handover and 60-90-day tunnel-closure timeline, against a roadmap Netanyahu still calls 'problematic' before the October 27 election. In Lebanon Israel kept striking Hezbollah and Hamas 'targets,' Hezbollah's threatened Aug 15 reprisal stayed unexecuted, and UNIFIL's handover of its Khardali-Litani position to the Lebanese Army's 7th Brigade carries. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH war toll into Day 185; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154. Tehran's Monday ran through diplomacy and repression, not the front — the corridor framework advancing, Qatar's and Pakistan's channels warming, Pezeshkian conceding a ~35% export drop and that Iran 'cannot continue with war forever' over the supreme leader's misgivings — with no reported new front casualties; per §3.1 dual-sourcing a worsening rights thread (public executions of January-protest detainees in Isfahan, dozens more sentenced) is noted but kept out of the war toll",
      status:
        "No updated official Iranian war toll into the new week. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Monday was diplomatic and repressive rather than kinetic — the corridor firming into a phased framework, Pezeshkian conceding exports have fallen about 35% and that Iran 'cannot continue with war forever' while defending the lapsed June deal over the supreme leader's misgivings, and the Qatar and Pakistan channels warming — with no reported new front casualties. Per §3.1's dual-sourcing a separate and worsening rights thread is noted but kept out of the war-casualty cumulative: rights monitors (CHRI, Amnesty, HRANA) documented public executions of January-protest detainees in Isfahan and dozens more sentenced in fast-tracked group prosecutions, a postwar-repression campaign the UN rights chief has flagged. The standing Rezaei 'seismic'-retaliation and 70-million-barrel loading claims and the Hormuz fine/detain/confiscate threat carry, now partly overtaken by the corridor's own permit logic. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU plus ~184.1 kg of 20% stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths on the tracked theaters across a diplomacy-dominated Monday; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified; Hormuz traffic stayed below normal and war-risk premiums held 3-10% of hull value; the corridor's joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths across a diplomacy-dominated Monday. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted. Hormuz commercial transit stays effectively shut outside the US convoy pending the corridor's implementation, traffic below normal and war-risk premiums holding 3-10% of hull value; the Iran-Oman corridor's joint mine-clearance, if implemented, would lower the near-term maritime-casualty risk on the strait itself, though the framework is a 60-day interim and any permanent form is further out. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. The maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbour bypass routes remains the most acute widening path against this ledger.",
    },
  },
  exec:
    "Day 185 opened a new week in the same register: a battlefield quiet on the US-Iran front, a diplomacy that keeps widening without a US table, and a coercion instrument held behind a summit. The mediation chorus thickened. Qatar's prime minister, Sheikh Mohammed bin Abdulrahman Al Thani, followed his Tehran talks with Foreign Minister Araghchi by carrying the phased Iranian-Omani Hormuz corridor and its joint mine-clearance element into a wider Gulf push, while a Pakistani delegation left Tehran calling its Hormuz-and-negotiations talks 'very positive and productive' (Al Arabiya, Fox News). Per §3.5.3, weigh that against the hole at the center: none of it has moved Washington to the table, and Pezeshkian — conceding exports have fallen about 35% under sanctions and the blockade, and that Iran 'cannot continue with war forever' — speaks over his own supreme leader's misgivings (Fox News). Beijing sharpened from framing to threat, vowing 'payback' for the China-heavy designations and signaling its rare-earth lever three weeks before Xi's September 24 Washington visit, even as Bessent's 'major bank' blow stayed unnamed and holstered (South China Morning Post, Fortune). Oil held: Brent near $88, Hormuz traffic still below normal, war-risk premiums 3-10% of hull (Trading Economics, The National). At home the repression deepened — public protester executions in Isfahan, dozens more sentenced (CHRI, Amnesty). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "Beijing moves from narrative to payback — the held blow gets costlier, not cheaper, before the summit",
      body:
        "Day 184 had China pre-positioning a take-the-blame narrative; Day 185 it hardened into a threat. Beijing 'vowed payback' for the roughly sixty designations — more than a third China-based — and pointed at its rare-earth and critical-minerals lever, the chokehold Washington needs kept open for its own supply chains, three weeks before Xi's September 24 visit (South China Morning Post, CNBC). Per §3.5.5 quantify the standoff: Operation Economic Outcast named tankers, a Hong Kong shipper and about sixty entities but spared every major Chinese bank — the one blow engineered to reach Iran's revenue still unnamed roughly two weeks on, now facing a named Chinese counter-lever rather than mere rhetoric (Fortune). Per §3.5.3 hold both claims in view: Washington says 'no one is above the reach of US sanctions'; Beijing calls them 'illicit' and readies retaliation. Under the multi-clock framework the political-will clock is being read against two calendars at once — the summit Washington wants and the retaliation Beijing is pricing. Analytical judgment: deferral has not cheapened the blow, it has armed the other side. Each week the bank designation waits, the mutual-disruption logic Bessent himself named gains a concrete Chinese answer, and naming a major bank three weeks before a state visit looks less like leverage than like a card Washington has talked itself out of playing.",
    },
    {
      title: "The mediation chorus thickens — Qatar and Pakistan work Tehran, and still no one has moved Washington",
      body:
        "The weekend's diplomacy graduated from a single Omani channel to a chorus. Qatar's prime minister took his Tehran talks with Araghchi into a wider Gulf push, carrying the phased Iranian-Omani corridor — a northern inbound lane in Iranian waters, a southern outbound lane in Omani waters, a 60-day interim term, joint mine-clearance, a coordinated fee — as the thing to build on (Al Arabiya, Al Jazeera). A Pakistani delegation left Tehran calling its Hormuz-and-negotiations talks 'very positive and productive' (Fox News). Per §3.5.6 the toll-institutionalization and mine-clearance priors keep resolving Tehran's way: the framework writes Iranian gating, revenue and administration into the strait and defers full reopening until Washington honors the lapsed June deal. Per §3.5.3 read the chorus against its silence — Oman, Qatar, Pakistan and China are all in motion, but none has produced a US counterparty, and the corridor is a maritime de-confliction, not a ceasefire. Under the multi-clock framework the negotiation-capacity clock ticks up on activated interlocutors while the decisive US-Iran seam stays closed. Analytical judgment: a wider bench is not a nearer deal. The more Gulf and Asian states underwrite an Iranian-administered corridor, the more the US convoy becomes the outlier and the harder it is to call the arrangement a blockade to be broken — Washington is being routed around, politely, one mediator at a time.",
    },
    {
      title: "Taiwan: the reprieve holds, but the ledger's two clocks are both being wound by the same summit",
      body:
        "Per §3.5.10 there was no Taiwan-specific development into Day 185; the exposure is structural, and Taipei's two clocks moved in subtly opposite directions. The physical clock still favors it: a phased Iran-Oman corridor, Qatar's backing, and Brent near $88 keep a near-term Hormuz shock to the LNG lane Taiwan's grid rides less likely (Al Jazeera, Trading Economics). The financial clock tightened: Beijing's explicit rare-earth payback threat raises the odds that the deferred bank collision, when it comes, arrives inside a broader US-China rupture rather than as a clean Iran measure — the cross-border settlement plumbing that clears much of Asia's energy trade is what is at risk (South China Morning Post). Per §3.5.5 the arithmetic is unchanged: 99% import dependence, roughly a third of Taiwan's 23.6 Mt of LNG through Hormuz — nearly 8 Mt of it Qatari — about eleven days of gas cover against some 120 of oil (CSIS). Qatar, Taipei's largest single supplier through this lane, is now personally invested in keeping the strait moving — a stakeholder, but one bound into an Iranian-administered regime and a China standoff it cannot referee. Analytical judgment: bank the calm — winter-gas stockpiling, supplier diversification, and settlement-rail contingency — because the reprieve on the water and the risk on the ledger are wound by the same summit clock, and it runs out in September.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Day 185 was diplomacy and markets — the mediation chorus widening, the corridor framework advancing, oil near $88 — with no US-Iran shooting, no reported American casualty, and Rubio's no-new-strikes line holding while the bank blow stayed behind the September 24 Xi summit and Beijing readied a rare-earth counter. The Iran-Oman corridor bars military vessels, leaving CENTCOM's escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) outside the arrangement and a standing exposure, enforcement holding ~55 rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Iran-front toll. Israel was offstage on the US-China and Hormuz tracks but its Gaza campaign stayed deadlocked and lethal — the Board of Peace roadmap advanced on paper while Israel withheld public agreement, the language is 'decommissioning' not disarmament, and Hamas held it would not act until Israel withdrew (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273). Posture stayed political and hard — the IDF stays until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline, a roadmap Netanyahu still calls 'problematic' before the October 27 election, UNIFIL's Khardali-Litani handover to the Lebanese Army carrying. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness.",
    iran:
      "No fresh official MOH war toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. Tehran's Monday was diplomatic and repressive — the corridor advancing, the Qatar and Pakistan channels warming, Pezeshkian conceding a ~35% export drop and that Iran 'cannot continue with war forever' over the supreme leader's misgivings — with no reported new front casualties. Per §3.1 dual-sourcing a worsening rights thread — public executions of January-protest detainees in Isfahan and dozens more sentenced in group prosecutions (CHRI, Amnesty, HRANA) — is noted but kept out of the war toll. The standing 'seismic' and 70M-barrel claims and the Hormuz seizure threat carry, partly overtaken by the corridor's permit logic. IAEA no verification since Feb 28; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths on the tracked theaters across a diplomacy-dominated Monday. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Mokha and UAE-missile claims stay logged, not counted. Hormuz traffic stayed below normal, war-risk premiums 3-10% of hull; the corridor's joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait, though the interim framework is 60 days and a permanent form is further out. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army carries. Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat is the most acute widening path.",
  },
};

export default data;
