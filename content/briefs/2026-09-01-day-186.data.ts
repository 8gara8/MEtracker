import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, in the shape that has set since Day 182: real de-escalation on the maritime axis, the core standoff frozen, and the connected fronts worsening. Day 186's movement was on the economic track — Washington multilateralized the sanctions war, Bessent rallying the G20 in Asheville and winning an EU/ECB statement of support while pledging 'another bank' and keeping 'all options on the table' on China. It is not de-escalating cleanly: the US-Iran track stayed closed and Araghchi said there are no talks, the decisive Chinese-bank blow stayed holstered behind the September 24 Xi summit, China renewed its rare-earth payback threat, the strait stayed lethal, Gaza stayed deadlocked, and the execution wave drew a fresh UN tally. It is not escalating: no shot was fired on the US-Iran front, the bank designation was widened into a coalition rather than fired at Beijing, and oil only firmed to near $89. Mixed holds — the energy clock steady, the humanitarian clock worsening, the decisive economic collision deferred and now being routed around, not defused.",
      risk7d:
        "Seven-day risk holds critical despite a diplomacy-saturated Tuesday. The corridor framework and Rubio's standing no-new-strikes line cap near-term Hormuz kinetic risk, but the tails that define the gauge stay loaded and indexed to a calendar. Bessent's major-bank blow is deferred behind the Xi summit, not cancelled, and the multilateral G20 push raises the odds a Chinese counter-move arrives first: Beijing has renewed an explicit rare-earth payback threat and called the measures 'illegal.' A secondary-sanctions collision, a named Chinese-bank designation, an Iranian 'seismic' answer, an interdiction of the CENTCOM escort convoy the corridor excludes, a strike on a Saudi or Emirati bypass route, or a Hezbollah reprisal could each fire inside the week. Gaza is the nearer risk: the Board of Peace roadmap holds no withdrawal before disarmament, Hamas holds it will not act until Israel withdraws, and strikes since the October 10 ceasefire reach at least 1,273. The chorus and the G20 rally cool one axis while loading another.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and a formalized economic front now widened to the G20 and wired to a US-China summit and a Chinese payback threat. Day 186 eased nothing at the strait node beyond the standing corridor diplomacy — a tanker was disabled off Oman and traffic held below normal — while the economic front spread outward to Europe and the G20 and the others held or worsened: Gaza stayed deadlocked, the home-front execution campaign drew a fresh UN tally, and the bank collision was multilateralized rather than resolved. The corridor's exclusion of military vessels leaves the US convoy operating alongside, not inside, the arrangement, and Rezaei's threat to the Gulf-neighbour bypass routes still aims to deter the alignment the plan demands. No new front opened, which is why spillover did not worsen outright; too many fronts stayed hot for it to ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Associated Press / The National / Bloomberg',
      event:
        "Washington multilateralized the economic war: Treasury Secretary Bessent convened G20 finance ministers in Asheville, North Carolina, to rally allies to sever Iran's financial lifelines, thanked the EU and European Central Bank for a 'strong statement of support,' pledged to sanction 'another bank' under Operation Economic Outcast, and said 'all options are on the table' on sanctioning Beijing — the decisive Chinese-bank blow still unnamed.",
      summary:
        "Per §3.5.3 read the move for what it is and is not: a widening of the coalition, not the delivery of the one blow that reaches Iran's revenue — the major Chinese bank clearing ~90% of Iran's oil stays holstered behind the September 24 Xi summit.",
      impact:
        "The political-will clock is spent on breadth — EU, ECB, G20 — precisely because the depth move on Beijing is judged too costly three weeks before a state visit; every rallied ally that is not China advertises the one Washington will not name.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'South China Morning Post / CNBC',
      event:
        "China renewed its retaliation threat as the sanctions war widened: the foreign ministry called the US measures 'illegal unilateral sanctions,' vowed 'all necessary measures,' and signaled its rare-earth and critical-minerals lever roughly three weeks before Xi Jinping's September 24 Washington visit, while continuing to buy the bulk of Iran's oil and scaling its CIPS settlement hedge.",
      summary:
        "Per §3.5.3 hold both claims: Washington says 'all options are on the table'; Beijing calls the measures 'illegal' and readies a rare-earth counter — the deferral now facing leverage-in-kind, not the summit calendar alone.",
      impact:
        "The multilateral G20 push raises the odds a Chinese counter-move lands before the US bank blow does; naming a major Chinese bank three weeks before the summit gets harder as Beijing prices its own retaliation.",
    },
    {
      id: 3,
      direction: 'neutral',
      importance: 'high',
      source: 'NBC News / CNN',
      event:
        "Tehran talked the track down: Foreign Minister Araghchi said there are no negotiations with Washington, that Iran had set 'steep demands' for reopening Hormuz, and that the Iran-Oman corridor is a 'technical and legal' matter that does not mean the strait has reopened — even as President Pezeshkian insisted 'now is the best time for an agreement' and called Iran 'victorious and powerful.'",
      summary:
        "Per §3.5.3 the skeptical counter the warming needs: the president talks the track up while his own foreign minister talks it down — the two-voices pattern sharpening, the corridor explicitly not a reopening, no US counterparty.",
      impact:
        "The negotiation-capacity clock is being read too generously off activated interlocutors; Araghchi's denial is the reminder that a widening bench is not a US-Iran track.",
    },
    {
      id: 4,
      direction: 'neutral',
      importance: 'medium',
      source: 'Trading Economics / UPI / The Maritime Executive',
      event:
        "The strait stayed choked and lethal: Brent firmed marginally to near $89, Hormuz traffic remained below normal, an unidentified projectile struck and disabled a tanker off Oman on August 24 (engine-room damage, crew safe), and Iran's seizure of a UAE-linked tanker near Qeshm carries — war-risk premiums holding 3-10% of hull value against roughly 0.25% pre-war.",
      summary:
        "Per §3.5.5 quantify: Brent near $89 with premiums 3-10% of hull prices a cooling rupture tail atop a punitive risk-and-enforcement premium, even as CENTCOM's escort runs ~8-9 mb/d, ~2-3 VLCC transits a day versus roughly eight pre-war.",
      impact:
        "The energy clock's relief stays conditional on a drained stock base: a corridor re-gating, a named major-Chinese-bank designation, or a convoy loss still reprices past $100 in a session.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Euronews / RFE/RL / Al Jazeera',
      event:
        "The connected fronts worsened away from the water: the UN rights chief tallied at least 56 executed on national-security charges since March 19, 27 tied to the January protests, with 100+ more at risk, while in Gaza the Board of Peace roadmap held there is no Israeli withdrawal before Hamas disarms and Hamas held it would not act until Israeli forces withdrew.",
      summary:
        "Per §3.1 dual-sourcing the execution wave is a rights thread NOT folded into the war-casualty cumulative; per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — the G20 and Hormuz diplomacy freed no pressure on Gaza.",
      impact:
        "The humanitarian clock worsens off-stage from the economic maneuvering: the home front and the connected theaters escalate independently of the sanctions and corridor tracks, a widening no coalition can bind.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series into Day 186; a G20-and-diplomacy Tuesday — Bessent working allies in Asheville, Araghchi talking the track down, oil firming near $89 — with no US-Iran shooting and no reported American casualty; Rubio's no-new-strikes line still caps the kinetic track; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule. The US-Iran shooting stayed paused into Day 186 as Washington multilateralized the sanctions war at the G20 rather than firing its major-bank blow, which stays behind the September 24 Xi summit while Beijing renews its rare-earth payback threat; Secretary Rubio's word that no new Iran strikes were expected still holds. The Iran-Oman corridor pointedly bars military vessels, leaving CENTCOM's escort convoy — more than 660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d through the strait under escort — operating alongside rather than inside the arrangement, and it remains a standing daily maritime exposure with enforcement holding at ~55 blockade-runners rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front; no new Israeli fatalities or wounded reported there. Israel stayed offstage on the G20 and Hormuz tracks while its Gaza campaign stayed deadlocked and lethal — the Board of Peace roadmap holds no Israeli withdrawal before Hamas disarms, Hamas holds it will not act until Israel withdraws, and the term is 'decommissioning' not disarmament (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273) — while it held its Gaza line at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Iran-front toll. Israel was offstage on the day's G20 and Hormuz diplomacy but its own fronts stayed hot: the US-led Board of Peace disarmament roadmap holds that there is no Israeli withdrawal before Hamas disarms, Hamas holds it will not surrender weapons until Israeli forces withdraw, and the roadmap relies on 'decommissioning' rather than 'disarmament' — the disarm-first / withdraw-first sequencing unresolved, strikes since the October 10 ceasefire reaching at least 1,273 per Gaza health officials (Al Jazeera, Chatham House), a connected theater the series does not fold into the war-casualty cumulative. Posture stayed political and hard: the IDF stays until Hamas disarms under a US general on Kushner's 30-day weapons-handover and 60-90-day tunnel-closure timeline, against a roadmap Netanyahu still calls 'problematic' before the October 27 election. In Lebanon Israel kept striking Hezbollah and Hamas 'targets,' Hezbollah's threatened Aug 15 reprisal stayed unexecuted, and UNIFIL's handover of its Khardali-Litani position to the Lebanese Army's 7th Brigade carries. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH war toll into Day 186; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154. Tehran's Tuesday ran through diplomacy and repression, not the front — Araghchi saying there are no talks and the corridor is only 'technical,' Pezeshkian calling it 'the best time for an agreement' — with no reported new front casualties; per §3.1 dual-sourcing a worsening rights thread (the UN's Turk: 56 executed since March 19, 27 protest-linked, 100+ at risk) is noted but kept out of the war toll",
      status:
        "No updated official Iranian war toll into Day 186. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Tuesday was diplomatic and repressive rather than kinetic — Araghchi flatly denying any negotiations with Washington and calling the Iran-Oman corridor 'technical and legal,' Pezeshkian insisting 'now is the best time for an agreement' and Iran 'victorious and powerful' — with no reported new front casualties. Per §3.1's dual-sourcing a separate and worsening rights thread is noted but kept out of the war-casualty cumulative: the UN High Commissioner for Human Rights, Volker Turk, tallied at least 56 executed on national-security charges since March 19, 27 of them tied to the January protests, with more than 100 others at risk (Euronews, RFE/RL), a postwar-repression campaign Trump also condemned. The standing Rezaei 'seismic'-retaliation and 70-million-barrel loading claims and the Hormuz fine/detain/confiscate threat carry, now partly overtaken by the corridor's own permit logic. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU plus ~184.1 kg of 20% stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths on the tracked theaters across a G20-and-diplomacy Tuesday; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime fatality was verified, though the strait stayed lethal — an unidentified projectile disabled a tanker off Oman on August 24 (crew safe) and the UAE-linked Qeshm seizure carries; Hormuz traffic held below normal and war-risk premiums held 3-10% of hull value; the corridor's joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths across a G20-and-diplomacy Tuesday. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime fatality was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted — though the strait stayed lethal, with an unidentified projectile disabling a tanker off Oman on August 24 (crew reported safe) and Iran's UAE-linked tanker seizure near Qeshm carrying. Hormuz commercial transit stays effectively shut outside the US convoy pending the corridor's implementation, traffic below normal and war-risk premiums holding 3-10% of hull value; the Iran-Oman corridor's joint mine-clearance, if implemented, would lower the near-term maritime-casualty risk on the strait itself, though the framework is a 60-day interim and any permanent form is further out. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. The maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbour bypass routes remains the most acute widening path against this ledger.",
    },
  },
  exec:
    "Day 186 turned the economic war outward. Rather than name the Chinese bank his 'major financial institution' pledge has promised for a week, Treasury Secretary Bessent took Operation Economic Outcast to the G20 finance ministers gathered in Asheville, North Carolina, rallying allies to sever Iran's financial lifelines and winning an explicit 'strong statement of support' from the EU and the European Central Bank — while pledging to sanction 'another bank' and saying 'all options are on the table' on Beijing (Associated Press, The National). Per §3.5.3, read the move for what it is and is not: a widening of the coalition, not the delivery of the one blow that reaches Iran's revenue, which stays holstered behind Xi Jinping's September 24 Washington visit as China renews its rare-earth payback threat and calls the sanctions 'illegal' (South China Morning Post). The mediation chorus met a cold Iranian answer: Foreign Minister Araghchi said there are no negotiations with Washington and that the Iran-Oman corridor is a 'technical and legal' matter that does not reopen the strait, even as Pezeshkian insisted 'now is the best time for an agreement' — Tehran's two voices again (NBC News, CNN). Oil firmed marginally, Brent near $89, the strait still choked and lethal after a projectile disabled a tanker off Oman (Trading Economics, UPI). Gaza stayed deadlocked and the home-front execution wave drew a fresh UN tally. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "The deferred blow goes multilateral, not China-ward — Bessent rallies the G20 while the bank card stays unplayed",
      body:
        "Day 185 had the bank blow deferred behind the Xi summit; Day 186 showed how Washington fills the gap — by widening the coalition rather than delivering the blow. Bessent convened the G20 finance ministers in Asheville, thanked the EU and European Central Bank for a 'strong statement of support,' secured a European commitment to 'take additional action,' and pledged to sanction 'another bank' under Operation Economic Outcast (Associated Press, The National). Per §3.5.5 quantify what the multilateral turn does and does not touch: the roughly sixty designations and a rallied G20 still leave unnamed the major Chinese bank that clears much of the oil China buys — some 90% of Iran's exports — the one node engineered to reach Tehran's revenue and the one Washington keeps declining to hit three weeks before a state visit (Bloomberg, CNBC). Per §3.5.3 hold both claims: Bessent says 'all options are on the table' on Beijing; China's foreign ministry calls the measures 'illegal' and readies rare-earth retaliation. Under the multi-clock framework the political-will clock is being spent on breadth precisely because the decisive move on the depth axis is judged too costly. Analytical judgment: multilateralizing the isolation is a substitute for the China blow, not a step toward it — every ally rallied that is not China advertises the one Washington will not name.",
    },
    {
      title: "The chorus meets an Iranian denial — Araghchi says there are no talks, the corridor is only 'technical'",
      body:
        "The widening mediation bench ran into Tehran's own foreign minister. As Qatar, Pakistan, Oman and China worked the channels, Araghchi said flatly there are no negotiations with Washington, that Iran had set 'steep demands' for reopening Hormuz, and that the Iran-Oman corridor is a 'technical and legal' arrangement that does not mean the strait has reopened (NBC News, CNN). Per §3.5.3 that is the skeptical counter the warming needs: Pezeshkian calls this 'the best time for an agreement' and Iran 'victorious and powerful,' but his foreign minister talks the track down as his president talks it up — the two-voices pattern sharpening, not resolving. Per §3.5.6 the toll-institutionalization and mine-clearance priors hold: the corridor writes Iranian gating and a permit-and-revenue regime into the strait and defers full reopening until Washington honors the lapsed June deal, and the water stayed lethal — a projectile disabled a tanker off Oman and the UAE-linked Qeshm seizure carries (Al Jazeera, UPI, Maritime Executive). Under the multi-clock framework the negotiation-capacity clock is being read too generously: activated interlocutors are not a US-Iran track. Analytical judgment: a chorus without a counterparty, now explicitly disowned by Iran's chief diplomat, is diplomacy about the war, not toward its end.",
    },
    {
      title: "Taiwan: Taipei votes with its cargoes — crude diversification is the tell that the reprieve is being banked, not trusted",
      body:
        "Per §3.5.10 no Iran-front development aimed at Taipei landed on Day 186, but the fresh signal is Taiwan's own behavior. Since the war began it has shifted crude sourcing to roughly 60% from the United States, down from about 70% Middle Eastern dependence in 2024, and is buying more US LNG toward a goal of 25% of supply by 2029 (IFRI, CSIS). Per §3.5.5 the exposure arithmetic is unchanged — 96-99% import dependence, roughly a third of Taiwan's LNG through Hormuz with nearly 8 Mt of it Qatari, about eleven days of gas cover against some 120 of oil — but the response is now visible in the trade data, not just the analysis. The two clocks still pull opposite ways: the physical clock eased by the phased corridor and Brent near $89, the financial clock tightened as Bessent's G20 push lands inside a US-China standoff that could turn the deferred bank collision into a broader rupture of the settlement rails clearing Asia's energy trade (The National, South China Morning Post). Analytical judgment: Taipei is doing the rational thing — banking the reprieve on the water by diversifying away from the lane it cannot defend, because the calm and the risk are wound by the same September summit clock, and the tell is that Taiwan is not waiting to learn which runs out first.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Day 186 was diplomacy and markets — Bessent rallying the G20 in Asheville, Araghchi talking the track down, oil near $89 — with no US-Iran shooting, no reported American casualty, and Rubio's no-new-strikes line holding while the bank blow stayed multilateralized rather than fired at Beijing. The Iran-Oman corridor bars military vessels, leaving CENTCOM's escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) outside the arrangement and a standing exposure, enforcement holding ~55 rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Iran-front toll. Israel was offstage on the G20 and Hormuz tracks but its Gaza campaign stayed deadlocked and lethal — the Board of Peace roadmap holds no withdrawal before Hamas disarms, Hamas holds it will not act until Israel withdraws, and the language is 'decommissioning' not disarmament (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273). Posture stayed political and hard — the IDF stays until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline, a roadmap Netanyahu still calls 'problematic' before the October 27 election, UNIFIL's Khardali-Litani handover to the Lebanese Army carrying. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness.",
    iran:
      "No fresh official MOH war toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. Tehran's Tuesday was diplomatic and repressive — Araghchi denying any negotiations and calling the corridor 'technical and legal,' Pezeshkian insisting 'now is the best time for an agreement' — with no reported new front casualties. Per §3.1 dual-sourcing a worsening rights thread — the UN's Turk tallying 56 executed since March 19, 27 protest-linked, 100+ at risk (Euronews, RFE/RL, HRANA) — is noted but kept out of the war toll. The standing 'seismic' and 70M-barrel claims and the Hormuz seizure threat carry, partly overtaken by the corridor's permit logic. IAEA no verification since Feb 28; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths on the tracked theaters across a G20-and-diplomacy Tuesday. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime fatality was verified — per §3.5.3 the standing Mokha and UAE-missile claims stay logged, not counted — though the strait stayed lethal, a projectile disabling a tanker off Oman (Aug 24, crew safe) and the UAE-linked Qeshm seizure carrying. Hormuz traffic stayed below normal, war-risk premiums 3-10% of hull; the corridor's joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait, though the interim framework is 60 days. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army carries. Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat is the most acute widening path.",
  },
};

export default data;
