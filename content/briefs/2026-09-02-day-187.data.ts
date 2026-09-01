import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction turns escalating for the first time since the corridor eased the water. The month-long shift from force to finance — Rubio's no-new-strikes line, Bessent's G20 coalition, the Iran-Oman corridor — reversed in seventy-two hours: the US struck Larak Island on August 30 and sixteen minelayers plus IRGC sites near Hormuz on September 1, and Iran answered with missiles at Jordan and drones at Kuwait, Bahrain and the UAE. Per §3.5.3 discount the rhetoric on both sides — Trump's 'there will be very little left' and the IRGC's 'will regret' are resolve claims, not damage reports — but the acts themselves are unambiguous: two US strike waves and at least three Iranian retaliations where a month had run at zero kinetic days. The economic war did not pause; it now runs alongside a live shooting war, and Trump's reported appetite for periodic CENTCOM strikes would institutionalize the kinetic track rather than close it. Two coercion tracks at once, both lengthening the war.",
      risk7d:
        "Seven-day risk moves from critical to extreme. The mine-laying / strike / retaliation cycle is self-reinforcing and now openly threatened as policy: Trump warned any Iranian response brings a strike 'at a much harder and higher level' and that 'the biggest attack of them all is waiting in the wings,' while reportedly weighing periodic CENTCOM strikes to keep Iran from rebuilding Hormuz defenses. Iran's asymmetric answer — ballistic missiles at Jordan, drones at three Gulf states, a claimed MQ-9 downing — keeps the exchange live and geographically wide. The near-term tails are loaded and no longer only economic: a laden-tanker loss in a mined and contested strait, a US casualty from an unintercepted missile, a strike that lands on a Gulf host, or a named Chinese-bank designation could each fire inside the week, and the corridor and G20 diplomacy that had capped the kinetic risk are now overtaken by fire.",
      spillover:
        "Spillover holds critical and broadened in target set. Four Arab states were directly struck in seventy-two hours — Jordan by ballistic missiles, Kuwait, Bahrain and the UAE by drones — precisely the widening the corridor and the G20 courtship were built to prevent. Per §3.5.5 the reach outran the damage: Jordan intercepted eight missiles on August 30 and ten on September 1, three falling in open areas, with no verified casualty, so the gauge did not tip beyond critical on effect. But the target selection converts Bessent's would-be sanctions coalition into a target set and partly realizes Rezaei's threat to the Gulf-neighbour bypass routes. The war still spans Iranian soil, both maritime chokepoints, the Gulf host states, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front, and a formalized economic front wired to a US-China summit. No new theater opened, which is why spillover did not worsen outright; too many fronts turned hot at once for it to ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'NBC News / CNBC / Washington Times / Gulf News',
      event:
        "The kinetic cap broke: on September 1 the US launched what Trump called 'large and powerful' strikes on IRGC targets near the Strait of Hormuz, with CENTCOM releasing footage of sixteen Iranian minelayers destroyed and hitting Bandar Abbas, Chabahar, Qeshm, Konarak and Sirik — retaliation, Trump said, for a failed Iranian attempt to seed the strait with sea mines (the mines 'removed and detonated') and for a missile launch at a US base in Jordan.",
      summary:
        "Per §3.5.3 the acts are unambiguous even as the framing is contested: after a month in which Rubio's no-new-strikes line held, direct US-Iran combat resumed, the second US strike wave in seventy-two hours following the August 30 Larak Island strike.",
      impact:
        "The energy-infrastructure and active-deadline clocks, dormant since the corridor, both reactivate; the war's center of gravity moves back toward force without the economic war pausing.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'The Times of Israel / The Hill / Iran International / Tasnim',
      event:
        "Iran answered wide and asymmetrically: ten ballistic missiles at a US base in Jordan overnight (all intercepted, three falling in open areas, no US casualties reported) plus drones at Kuwait, Bahrain and the UAE, after eight missiles at the King Hussein and Al Azraq bases on August 30; state media vowed a 'decisive operation,' claimed a downed US MQ-9 near Khomein, and said Washington 'will regret' the strikes.",
      summary:
        "Per §3.5.5 the reach outran the damage — four Arab states targeted in seventy-two hours with no verified casualty as intercepts held; per §3.5.3 the MQ-9 claim and 'decisive operation' framing stay logged, not counted.",
      impact:
        "Iran cannot match US airpower over its own soil, so it reaches for the US regional footprint and Gulf hosts — converting Bessent's would-be sanctions coalition into a target set and pressuring the coalition-cohesion clock.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'NBC News / Mediaite / CNBC',
      event:
        "Trump threatened a wider war: any Iranian response brings a strike 'at a much harder and higher level,' and 'the biggest attack of them all is waiting in the wings,' after which 'there will be very little left' — while reportedly weighing a CENTCOM plan for periodic strikes to keep Iran from rebuilding Hormuz radar and missile capacity.",
      summary:
        "Per §3.5.3 read the escalation ladder as a claim of resolve, not a battle plan; the operational tell is the reported shift toward recurring strikes, which would institutionalize the kinetic track rather than close it.",
      impact:
        "The political-will clock is being spent on deterrent threat; a doctrine of periodic strikes turns each Iranian mine attempt into a scheduled US reprisal, lengthening rather than ending the exchange.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Yahoo Finance / Al Jazeera / Trading Economics / CNBC',
      event:
        "Markets and the strait repriced the return to fire: Brent spiked more than four percent intraday toward $94 before easing to close near $91, WTI rose toward $90, and Hormuz transits fell to a one-week low of eight vessels as shipping companies stayed away and the Iran-Oman corridor's implementation was clouded by live fire.",
      summary:
        "Per §3.5.5 quantify: eight transits versus a normal 8-plus VLCC transits a day, Brent's four-percent jump reversing the near-$89 calm the corridor had bought — the physical clock the market had eased has snapped back.",
      impact:
        "The energy vector re-loads its rupture tail on a drained stock base: a laden-tanker loss in a mined and contested strait, or a named major-Chinese-bank designation, still reprices past $100 in a session.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Bloomberg / The Hill / Al Jazeera',
      event:
        "The economic war ran on beneath the shooting: Bessent's pledge of weekly bank sanctions drew a world that 'mostly shrugged,' the major-Chinese-bank blow stayed deferred behind Xi Jinping's September 24 Washington visit, and China renewed its 'all necessary measures' and rare-earth payback threat; Gaza held deadlocked (Board of Peace: no withdrawal before disarmament) and the home-front execution wave carried.",
      summary:
        "Per §3.5.6 the standing priors hold: the deferred China blow, the two-sided China trap, the Gaza sequencing deadlock, and the execution rights thread persist unresolved beneath the day's kinetic story.",
      impact:
        "The connected fronts neither eased nor were bound by the return to force; the war now widens on the water, in the Gulf, and in the sanctions arena simultaneously.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 187, but the exposure is now acute rather than dormant; no reported US casualty from Iran's missile and drone salvos, which Jordanian and Gulf air defenses intercepted; Rubio's no-new-strikes line is broken and Trump warns of harder blows",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 keep the combat figure and flag DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule. What changed on Day 187 is the tempo, not the count: after the US struck Larak Island on August 30 and IRGC and minelayer targets near Hormuz on September 1, Iran fired ten ballistic missiles at a US base in Jordan and drones at Kuwait, Bahrain and the UAE, and Jordan's air defenses intercepted the missiles with no reported US casualty — so there is no verified US combat death from this exchange even as the kinetic exposure spikes. CENTCOM's escort convoy (~660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d) now operates amid live fire and remains a standing daily exposure; enforcement holds ~55 blockade-runners rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front; no new Israeli fatalities or wounded reported there. Israel stayed offstage on the direct US-Iran exchange while its Gaza campaign held deadlocked and lethal — the Board of Peace roadmap holds no withdrawal before Hamas disarms, Hamas holds it will not act until Israel withdraws, and the language is 'decommissioning' not disarmament (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273)",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Iran-front toll. Israel was offstage on the day's US-Iran kinetic exchange but its own fronts stayed hot: the US-led Board of Peace disarmament roadmap holds that there is no Israeli withdrawal before Hamas disarms, Hamas holds it will not surrender weapons until Israeli forces withdraw, and the roadmap relies on 'decommissioning' rather than 'disarmament' — the disarm-first / withdraw-first sequencing unresolved, strikes since the October 10 ceasefire reaching at least 1,273 per Gaza health officials, a connected theater the series does not fold into the war-casualty cumulative. Posture stayed political and hard: the IDF stays until Hamas disarms under a US general on Kushner's 30-day weapons-handover and 60-90-day tunnel-closure timeline, against a roadmap Netanyahu still calls 'problematic' before the October 27 election. In Lebanon Israel kept striking Hezbollah and Hamas 'targets,' Hezbollah's threatened reprisal stayed unexecuted, and UNIFIL's handover of its Khardali-Litani position to the Lebanese Army's 7th Brigade carries. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "Fresh front deaths after a month's pause: the Aug 30 Larak Island strike killed at least two with several wounded per Iranian officials, and the Sep 1 US strikes destroyed sixteen minelayers and hit IRGC sites across Bandar Abbas, Chabahar, Qeshm, Konarak and Sirik — personnel casualties from the Sep 1 wave not yet released, so the official MOH aggregate carries pending an update; per §3.1 dual-sourcing the execution wave (UN's Turk: 56 since March 19) is noted but kept out of the war toll",
      status:
        "The official Iranian war toll carries pending an update, but the front is live again after a month's kinetic pause. The Aug 30 Larak Island strike killed at least two with several wounded per Iranian officials; the Sep 1 US strikes destroyed sixteen minelayers and struck IRGC sites across Bandar Abbas, Chabahar, Qeshm, Konarak and Sirik, with personnel casualties from that wave not yet released. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Per §3.1's dual-sourcing a separate and worsening rights thread is noted but kept out of the war-casualty cumulative: the UN High Commissioner for Human Rights, Volker Turk, tallied at least 56 executed on national-security charges since March 19, 27 of them tied to the January protests, with more than 100 others at risk — a postwar-repression campaign Trump condemned. Iran's 'decisive operation' framing and its claim of a downed US MQ-9 near Khomein stay logged, not counted (§3.5.3). The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU plus ~184.1 kg of 20% stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "The spillover ledger widened without a confirmed new death: Jordan intercepted eight Iranian missiles (Aug 30) and ten (Sep 1, three falling in open areas), and Kuwait, Bahrain and the UAE engaged Iranian drones — four Arab states directly targeted in 72 hours, no fatality verified as intercepts held; Hormuz transits fell to a one-week low of eight vessels and Brent spiked toward $94; the standing maritime, Lebanon and Bab al-Mandeb tolls carry",
      status:
        "The 'other' ledger widened in target set without a confirmed new death. Jordan's air defenses intercepted eight Iranian missiles on August 30 and ten on September 1 with three falling in open areas, and Kuwait, Bahrain and the UAE engaged Iranian drones — four Arab states directly targeted in seventy-two hours, but no fatality was verified as the intercepts held. Per §3.5.3 the standing Houthi Saudi-warship claim, the UAE ballistic-missile threat, and Iran's claimed MQ-9 downing stay logged, not counted. Hormuz commercial transit fell to a one-week low of eight vessels and war-risk premiums hold 3-10% of hull value; the Iran-Oman corridor's implementation is now clouded by the return to fire. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. The maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbour bypass routes, now partly realized in kind, remains the most acute widening path.",
    },
  },
  exec:
    "Day 187 broke the kinetic cap. After roughly a month in which Secretary Rubio's no-new-strikes line held and the war ran through sanctions and diplomacy, direct US-Iran combat resumed. On September 1 the US launched what President Trump called 'large and powerful' strikes on IRGC targets near the Strait of Hormuz — CENTCOM released footage of sixteen Iranian minelayers destroyed and hit Bandar Abbas, Chabahar, Qeshm, Konarak and Sirik — retaliation, Trump said, for a failed Iranian attempt to seed the strait with sea mines and for a missile launch at a US base in Jordan (NBC News, CNBC, Washington Times). It capped a weekend escalation: an August 30 US strike on rocket launchers on Larak Island killed at least two, per Iranian officials, and drew Iranian missiles and drones at two US bases in Jordan (CNN, RFE/RL). Iran answered again overnight — ten ballistic missiles at a US base in Jordan, all intercepted with no US casualties reported, plus drones at Kuwait, Bahrain and the UAE — and its state media vowed a 'decisive operation' and claimed a downed US MQ-9 (Times of Israel, The Hill, Iran International/Tasnim). Per §3.5.3, hold Trump's threat against Tehran's: Trump warned any response brings a strike 'at a much harder and higher level' and that 'the biggest attack of them all is waiting in the wings'; the IRGC said Washington 'will regret' it. Brent spiked more than four percent intraday toward $94 before easing near $91; Hormuz traffic fell to a one-week low of eight vessels (Al Jazeera, Trading Economics, CNBC). Direction turns escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability falls to 3.",
  implications: [
    {
      title: "The kinetic cap breaks — the month-long shift from bombs to banks reverses in seventy-two hours",
      body:
        "For a month the war's center of gravity had moved from force to finance: Rubio said no new Iran strikes were expected, Bessent built Operation Economic Outcast into a G20 coalition, and the Iran-Oman corridor promised to de-conflict the strait. Day 187 reversed that in three days. The US struck Larak Island (Aug 30), then sixteen minelayers and IRGC sites near Hormuz (Sep 1), each time citing an Iranian move to mine the strait; Iran answered with missiles at Jordan and drones at the Gulf (NBC News, CNN, Gulf News). Per §3.5.5 quantify the reversal: from near-zero US-Iran kinetic days across most of a month to two US strike waves and at least three Iranian retaliations inside seventy-two hours. Per §3.5.3 discount the rhetoric on both sides — Trump's 'there will be very little left' and the IRGC's 'will regret' are claims of resolve, not battle damage. Under the multi-clock framework the energy-infrastructure and active-deadline clocks, dormant since the corridor, have both reactivated, and Trump's reported appetite for periodic CENTCOM strikes to keep Iran from rebuilding Hormuz defenses would institutionalize the kinetic track rather than close it. Analytical judgment: the return to force does not replace the economic war — it stacks on it, two coercion tracks now running at once, each lengthening the war.",
    },
    {
      title: "Spillover goes wide — four Arab states targeted as Iran answers asymmetrically",
      body:
        "Unable to match US airpower over its own soil, Iran reached for the US regional footprint and its Gulf hosts: ballistic missiles at a base in Jordan, drones at Kuwait, Bahrain and the UAE (Times of Israel, The Hill). Per §3.5.5 the effect gap is the story — Jordan intercepted eight missiles on Aug 30 and ten on Sep 1, three of them falling in open areas, and no casualty was verified, so the reach outran the damage. But the target selection is the signal: this is precisely the widening the corridor and the G20 courtship were built to prevent, and it converts Bessent's would-be sanctions coalition into a target set. Per §3.5.6 the standing prior holds — Rezaei's threat to strike the Gulf-neighbour bypass routes if they join the economic war is now partly realized in kind, aimed at raising the political cost to Riyadh, Abu Dhabi, Manama and Amman of siding with Washington. Under the multi-clock framework the coalition-cohesion clock is the one under pressure: allies courted at the G20 are now the ones absorbing Iranian fire. Analytical judgment: Iran's retaliation is designed less to inflict losses than to make alignment with the US expensive — deterrence by imposing risk on the hosts.",
    },
    {
      title: "Taiwan: the reprieve narrows as both clocks tighten at once",
      body:
        "Per §3.5.10 no Iran-front development aimed at Taipei landed on Day 187, but the frame shifted against it. The physical clock that eased on the corridor and Brent near $89 has snapped back — Brent spiked toward $94, Hormuz transits fell to eight vessels, and the corridor's implementation is clouded by live fire (Al Jazeera, CNBC) — while the financial clock stays wound, the major-Chinese-bank blow deferred behind the September 24 Xi summit against Beijing's rare-earth payback threat (Bloomberg, The Hill). Per §3.5.5 the exposure arithmetic is unchanged: 96-99% import dependence, roughly a third of Taiwan's LNG through Hormuz with nearly 8 Mt of it Qatari, about eleven days of gas cover against some 120 of oil (IFRI, CSIS). The point is that for the first time since the corridor both clocks are tightening together — the water is lethal again and the settlement rails are still at risk. Analytical judgment: Taipei's shift to ~60% US crude looks less like caution than foresight, because the day removed the reprieve on the physical clock without loosening the financial one, and diversification is the only lever Taiwan controls.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. What changed on Day 187 is tempo, not count: after the US struck Larak Island (Aug 30) and IRGC/minelayer targets near Hormuz (Sep 1), Iran fired ten ballistic missiles at a US base in Jordan and drones at Kuwait, Bahrain and the UAE, all intercepted with no reported US casualty, so there is no verified US combat death from this exchange even as exposure spikes and Rubio's no-new-strikes line breaks. CENTCOM's escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) now operates amid live fire; enforcement holds ~55 rerouted, three disabled, two boarded; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Iran-front toll. Israel was offstage on the US-Iran kinetic exchange but its Gaza campaign held deadlocked and lethal — the Board of Peace roadmap holds no withdrawal before Hamas disarms, Hamas holds it will not act until Israel withdraws, and the language is 'decommissioning' not disarmament (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273). Posture stayed political and hard — the IDF stays until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline, a roadmap Netanyahu still calls 'problematic' before the October 27 election, UNIFIL's Khardali-Litani handover to the Lebanese Army carrying. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update, but the front is live again: the Aug 30 Larak strike killed at least two with several wounded per Iranian officials, and the Sep 1 strikes destroyed sixteen minelayers and hit IRGC sites across Bandar Abbas, Chabahar, Qeshm, Konarak and Sirik, casualties from that wave not yet released. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. Per §3.1 dual-sourcing the execution wave — the UN's Turk tallying 56 since March 19, 27 protest-linked, 100+ at risk — is noted but kept out of the war toll. Iran's 'decisive operation' and claimed MQ-9 downing stay logged, not counted (§3.5.3). IAEA no verification since Feb 28; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "The spillover ledger widened without a confirmed new death: Jordan intercepted eight Iranian missiles (Aug 30) and ten (Sep 1, three in open areas), and Kuwait, Bahrain and the UAE engaged Iranian drones — four Arab states directly targeted in 72 hours, no fatality verified as intercepts held. Per §3.5.3 the Houthi Saudi-warship claim, the UAE-missile threat and Iran's MQ-9 claim stay logged, not counted. Hormuz transits fell to a one-week low of eight vessels, war-risk premiums 3-10% of hull; the Iran-Oman corridor is clouded by the return to fire. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange; Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat, partly realized in kind, is the most acute widening path.",
  },
};

export default data;
