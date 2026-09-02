import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 188 even as the guns paused. No confirmed new US strike wave landed in the past twenty-four hours, but per §3.5.3 a lull at this altitude is a plateau, not a de-escalation: Trump signaled 'weeks of fighting' and to 'hit them hard' again, Iran's 'decisive operation' framing carried, and a fresh legitimacy front opened when Tehran alleged the September 1 strike killed civilians at a wedding in Kuhestak — four to five dead per the Iranian Red Crescent, more than fifty wounded, a 'war crime' charge CENTCOM did not deny. The economic war ran on beneath the fire, the China hinge intact — a UN Charter condemnation, a rare-earth lever, the major-bank blow still deferred behind the September Xi visit. The kinetic and financial tracks both stay live and stacked; nothing on Day 188 reversed the return to force, and the wedding allegation raises the cost of every further strike rather than easing the trajectory.",
      risk7d:
        "Seven-day risk holds extreme. The mine-laying / strike / retaliation cycle is only paused, not closed, and is openly framed as policy — Trump's 'weeks of fighting' and reported appetite for periodic CENTCOM strikes keep each Iranian mine attempt wired to a scheduled US reprisal. The near-term tails are loaded and no longer only economic: a laden-tanker loss in a mined and contested strait, a US casualty from an unintercepted missile, a strike that lands on a Gulf host, or a named Chinese-bank designation could each fire inside the week. The wedding-strike allegation adds a political tail — a verified civilian-casualty event, or a second one, could force a pause or an escalation depending on Washington's read of the coalition — and Kpler's four Hormuz crossings against Wright's seventeen-million-barrel claim show a strait so thin that a single incident reprices everything.",
      spillover:
        "Spillover holds critical. The target set stayed wide across the seventy-two-hour cycle — Jordan by ballistic missiles, Bahrain and Iraq by drones, after Kuwait and the UAE earlier — but per §3.5.5 the reach kept outrunning the damage: Jordan intercepted ten of thirteen missiles with three falling in open areas and no verified casualty. What sharpened is the civilian dimension inside Iran itself: the Kuhestak wedding claim, if borne out, is a spillover of the strike campaign into the non-combatant population on the strait's coastline, and it converts Tehran's grievance into a coalition-splitting instrument. No new theater opened, which is why spillover did not worsen outright; but the war still spans Iranian soil, both maritime chokepoints, the Gulf host states, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front, and a formalized economic front wired to a US-China summit.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'RFE/RL / The New Arab / ABC News',
      event:
        "A war-crime allegation opened a legitimacy front: Iran said the September 1 US strike near the Strait of Hormuz hit a wedding party in the coastal town of Kuhestak, near Minab, with the Iranian Red Crescent putting the toll at four to five killed — including six-year-old Amir Mohammad Karimi — and more than fifty wounded; Tehran called it a 'war crime.' CENTCOM's Tim Hawkins said only that the US was aware of the reports and 'never targets civilians, unlike the IRGC.'",
      summary:
        "Per §3.5.3 hold the claim against the non-denial: the strike is neither confirmed nor denied, and Hawkins withheld the target and the weapon — a non-denial that concedes the incident while disputing the intent.",
      impact:
        "The coalition-cohesion and political-will clocks move: a civilian-casualty allegation on the strait's own coastline hands Tehran a legitimacy weapon aimed at the Gulf sanctions coalition and gives China's UN Charter condemnation a concrete grievance.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Yahoo/USA Today / NPR / The Jerusalem Post',
      event:
        "The kinetic exchange paused at a high plateau: no confirmed new US strike wave landed in the past twenty-four hours, but Trump signaled 'weeks of fighting' and warned he would 'hit them hard' again, while Iran's 'decisive operation' framing carried — missiles at US bases in Jordan, drones at Bahrain and Iraq, and claims of an F-15 shed hit and eight MQ-9 drones destroyed.",
      summary:
        "Per §3.5.3 read the lull as a plateau, not a de-escalation — the mine / strike / retaliation cycle is paused, not closed, and both sides are counting unverifiable claims.",
      impact:
        "The negotiation-capacity clock gained no time; a plateau this high slides back to fire on the next mine attempt or intercept failure, and Trump's 'weeks of fighting' frames the exchange as open-ended.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'The Washington Times / CBS News',
      event:
        "Iran claimed to have killed American service members in its retaliation; two US officials said there were no US casualties, and Jordan reported intercepting ten of thirteen incoming ballistic missiles at the King Hussein and Al Azraq bases, three of them falling in remote areas with no damage.",
      summary:
        "Per §3.5.3 the Iranian claim is logged, not counted; the AP/CENTCOM combat series holds 17 KIA / 432 WIA and DoD DCAS all-cause holds 18 / 687, with no verified US combat death from this exchange, so Trump's 'per ship' rule is not triggered.",
      impact:
        "A verified US combat death would trigger Trump's declared reprisal rule and change the escalation calculus overnight; until then the exposure is acute but the count is unchanged.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Trading Economics / Vantage Markets / RFE/RL',
      event:
        "Markets and the strait held at an elevated level: Brent traded near $90 after a six-week high toward $95, and Kpler counted just four Hormuz tanker crossings on Tuesday against Energy Secretary Chris Wright's claim of seventeen million barrels transited Monday, 'the highest since the war began'; CENTCOM said its blockade had rerouted eighty-six commercial vessels, disabling three and boarding two.",
      summary:
        "Per §3.5.5 quantify the claim-vs-reality gap: four crossings versus a normal 8-plus transits a day, the administration's throughput boast against a physical vessel count that shows the strait emptying.",
      impact:
        "The energy vector's rupture tail stays loaded on a drained stock base: a laden-tanker loss in a mined and contested strait, or a named major-Chinese-bank designation, still reprices Brent past $100 in a session.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Deccan Herald / SCMP / Fortune / Al Jazeera',
      event:
        "The economic and diplomatic backdrop ran on beneath the fire: China condemned the strikes as a UN Charter violation and held its rare-earth lever, the major-Chinese-bank blow still deferred behind Xi Jinping's September Washington visit, while an IAEA-Iran agreement on practical modalities to resume inspections offered a faint technical counter-current; Gaza held deadlocked (Board of Peace: no withdrawal before disarmament) and the execution wave carried.",
      summary:
        "Per §3.5.6 the standing priors hold: the deferred China blow, the two-sided China trap, the Gaza sequencing deadlock, and the execution rights thread persist unresolved — and the IAEA modalities line is a technical step, not verified access, with Iran's 'only after a deal' framing intact.",
      impact:
        "The connected fronts neither eased nor were bound by the pause; the war widens on the water, in the Gulf, in the sanctions arena, and now in the legitimacy contest simultaneously.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 188; Iran claimed to have killed American service members but two US officials reported no US casualties from the salvos, which Jordanian and Gulf air defenses intercepted",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 keep the combat figure and flag DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule. Day 188 added a claim, not a count: Iran said its 'decisive operation' killed American service members, but two US officials said there were no US casualties, and Jordan reported intercepting ten of thirteen ballistic missiles at the King Hussein and Al Azraq bases with three falling in remote areas — so there is still no verified US combat death from this exchange even as the exposure stays acute. CENTCOM's blockade enforcement stepped up: eighty-six commercial vessels rerouted, three disabled, two boarded, against roughly fifty-five rerouted earlier in the campaign. The escort convoy (~660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d) now operates amid live fire and remains a standing daily exposure; the USS George Washington is on station. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front; no new Israeli fatalities or wounded reported there. Israel stayed offstage on the direct US-Iran exchange while its Gaza campaign held deadlocked and lethal — a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273 (Al Jazeera separately cites a lower ≥1,100 published tally)",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Iran-front toll. Israel was offstage on the day's US-Iran aftermath but its own fronts stayed hot: the US-led Board of Peace disarmament roadmap holds that there is no Israeli withdrawal before Hamas disarms, Hamas holds it will not surrender weapons until Israeli forces withdraw, and the roadmap relies on 'decommissioning' rather than 'disarmament' — the disarm-first / withdraw-first sequencing unresolved, strikes since the October 10 ceasefire reaching at least 1,273 per Gaza health officials (with Al Jazeera separately citing a lower ≥1,100 figure), a connected theater the series does not fold into the war-casualty cumulative. Posture stayed political and hard: the IDF stays until Hamas disarms under a US general on Kushner's 30-day weapons-handover and 60-90-day tunnel-closure timeline, against a roadmap Netanyahu still calls 'problematic' before the October 27 election. In Lebanon Israel kept striking Hezbollah and Hamas 'targets,' Hezbollah's threatened reprisal stayed unexecuted, and UNIFIL's handover of its Khardali-Litani position to the Lebanese Army's 7th Brigade carries. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "A contested civilian toll dominated: Iran and the Iranian Red Crescent said the Sep 1 US strike hit a wedding party in Kuhestak (near Minab), killing four to five — including six-year-old Amir Mohammad Karimi — and wounding more than fifty, a claim Tehran calls a 'war crime' and CENTCOM did not deny; per §3.1 dual-sourcing it is surfaced but held pending independent verification, not folded into the MOH headline. Military casualties from the Sep 1 strike wave remain unreleased",
      status:
        "The official Iranian war toll carries pending an update. The day's fresh figure was a contested civilian one: Iran and the Iranian Red Crescent said the September 1 US strike near the Strait of Hormuz hit a wedding party in Kuhestak, near Minab, killing four to five — among them six-year-old Amir Mohammad Karimi — and wounding more than fifty; Tehran called it a 'war crime,' and CENTCOM's Hawkins said only that the US 'never targets civilians.' Per §3.1 dual-sourcing the claim is surfaced but held pending independent verification and not folded into the MOH aggregate; military casualties from the Sep 1 wave (sixteen minelayers, IRGC sites across Bandar Abbas, Chabahar, Qeshm, Konarak and Sirik) remain unreleased. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Per §3.1's dual-sourcing a separate and worsening rights thread is kept out of the war-casualty cumulative: the UN High Commissioner, Volker Turk, tallied at least 56 executed on national-security charges since March 19, 27 tied to the January protests, with more than 100 at risk. Iran's claims of American service members killed and eight MQ-9 drones destroyed stay logged, not counted (§3.5.3). The IAEA and Iran reportedly agreed on practical modalities to resume inspection activity — a technical step, not verified access, with Iran's 'only after a deal' framing intact; the ~440.9 kg of 60% HEU plus ~184.1 kg of 20% stays unverified and likely at Isfahan, ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "The spillover ledger held critical without a confirmed new death: Jordan intercepted ten of thirteen Iranian missiles (three in remote areas, no damage), and Bahrain and Iraq engaged Iranian drones — the target set staying wide, no fatality verified as intercepts held; Hormuz transits fell further, Kpler counting four tanker crossings on Tuesday, and Brent held near $90 after a six-week high toward $95; the standing maritime, Lebanon and Bab al-Mandeb tolls carry",
      status:
        "The 'other' ledger held critical in target set without a confirmed new death. Jordan's air defenses intercepted ten of thirteen Iranian ballistic missiles at the King Hussein and Al Azraq bases with three falling in remote areas, and Bahrain and Iraq engaged Iranian drones — the seventy-two-hour cycle keeping four-plus Arab states in the target set, but no fatality verified as the intercepts held. Per §3.5.3 the standing Houthi Saudi-warship claim, the UAE ballistic-missile threat, and Iran's claims of eight MQ-9s and a downed MQ-9 near Khomein stay logged, not counted. Hormuz commercial transit fell further — Kpler counted four tanker crossings on Tuesday against Energy Secretary Wright's claimed seventeen million barrels — and war-risk premiums hold 3-10% of hull value; the Iran-Oman corridor's implementation stays clouded by fire. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. The maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbour bypass routes, partly realized in kind, remains the most acute widening path.",
    },
  },
  exec:
    "Day 188 was the morning after. The seventy-two-hour cycle that broke the kinetic cap — US strikes on Larak Island and sixteen minelayers near the Strait of Hormuz, Iran's missiles at Jordan and drones at the Gulf — produced no confirmed new US strike wave in the past twenty-four hours, but it left a legitimacy crisis in its wake. Iran said the September 1 strike hit a wedding party in the coastal town of Kuhestak, near Minab: the Iranian Red Crescent put the toll at four to five killed — among them six-year-old Amir Mohammad Karimi — and more than fifty wounded, and Tehran called it a 'war crime' (RFE/RL, The New Arab, ABC News). CENTCOM's Tim Hawkins said the military was aware of the reports and 'never targets civilians, unlike the IRGC,' without disclosing the target or the weapon. Per §3.5.3 hold the claim against the non-denial — the strike is neither confirmed nor denied. Iran separately claimed to have killed American service members and destroyed eight MQ-9 drones; two US officials said there were no US casualties, and Jordan reported intercepting ten of thirteen incoming missiles (The Washington Times, NPR). Trump signaled 'weeks of fighting' and warned he would 'hit them hard' again (Yahoo/USA Today). Beneath the fire the economic war ran on — China condemned the strikes as a UN Charter violation and dangled its rare-earth lever, the major-bank blow still deferred behind Xi's September Washington visit (Deccan Herald, SCMP, Fortune). Brent held near $90 after a six-week high toward $95; Kpler counted four Hormuz tanker crossings against Energy Secretary Wright's claimed seventeen million barrels (Trading Economics, Vantage). Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 3.",
  implications: [
    {
      title: "The morning after — a war-crime allegation opens a legitimacy front the strike wave did not",
      body:
        "The day after a strike, the story becomes the toll. Iran's charge that the September 1 strike killed civilians at a wedding in Kuhestak — four to five dead per the Iranian Red Crescent, a six-year-old among them, more than fifty wounded — is the kind of claim that outlives the military event that produced it (RFE/RL, The New Arab). Per §3.5.3 hold it as a contested claim: the strike is not confirmed, but CENTCOM's Hawkins did not deny it, saying only that the US 'never targets civilians, unlike the IRGC' while withholding the target and the weapon — a non-denial that concedes the incident even as it disputes the intent. The analytical weight is in the timing. Washington spent August courting the Gulf into a sanctions coalition and running an escort corridor sold as protection; a civilian-casualty allegation on the strait's own coastline hands Tehran a legitimacy weapon aimed precisely at that coalition, and gives China's UN Charter condemnation a concrete grievance to cite. Under the multi-clock framework the coalition-cohesion and political-will clocks are the ones this moves: an allegation like this raises the domestic and regional price of each further strike Trump orders. Analytical judgment: the wedding claim, verified or not, converts a tactical strike into a strategic cost, and it will shadow every subsequent CENTCOM reprisal.",
    },
    {
      title: "A pause is not a close — the plateau holds high, and both sides are counting claims",
      body:
        "No confirmed new US strike wave landed in the past twenty-four hours, but per §3.5.3 read the lull as a plateau, not a de-escalation: Trump signaled 'weeks of fighting' and to 'hit them hard' again, and Iran's 'decisive operation' framing kept the exchange rhetorically live (Yahoo/USA Today, NPR). The day was thick with unverifiable claims cutting both ways — Iran said it killed American service members and destroyed eight MQ-9 drones; two US officials reported no casualties and Jordan intercepted ten of thirteen missiles (The Washington Times, CBS). The sharpest claim-vs-reality gap was economic: Energy Secretary Wright touted seventeen million barrels through Hormuz Monday, 'the highest since the war began,' while Kpler counted four tanker crossings on Tuesday — the administration's throughput boast against a physical vessel count that shows the strait emptying (Vantage). Per §3.5.5 quantify: four crossings versus a normal 8-plus transits a day, Brent near $90 off a six-week high toward $95, the blockade now at eighty-six vessels rerouted. Beneath it the China hinge held — a UN Charter condemnation, a rare-earth lever, the major-bank blow still deferred behind the September Xi visit (Fortune, SCMP). Analytical judgment: the guns paused but nothing was resolved; the negotiation-capacity clock gained no time, and a plateau this high slides back to fire on the next mine attempt or intercept failure.",
    },
    {
      title: "Taiwan: the buffered month arrives",
      body:
        "Per §3.5.10 no Iran-front development aimed at Taipei landed on Day 188, but the calendar itself sharpened the exposure. In May, Taiwan said it had secured enough natural gas 'through September' — and September has now arrived, with Brent elevated, Hormuz transits down to four, and the corridor clouded by fire (Energy Connects, Vantage). Per §3.5.5 the arithmetic is unchanged and unforgiving: 95-99% import dependence, roughly a third of Taiwan's LNG through Hormuz with a large Qatari share, about eleven days of gas cover against some 120 of oil (CSIS, IFRI). The month the buffer was built to cover is the month the strait is thinnest, and the financial clock stays wound alongside the physical one, the bank blow pinned to the Xi summit. Analytical judgment: Taipei's diversification toward US and Australian LNG and ~60% US crude was the right hedge bought early, but a buffer is a countdown, not a solution — the reprieve that let Taiwan plan for 'through September' expires exactly as the strait's transit count hits single digits, and only supply that does not pass Hormuz closes the gap.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. Day 188 added a claim, not a count: Iran said its 'decisive operation' killed American service members, but two US officials reported no US casualties and Jordan intercepted ten of thirteen ballistic missiles, so there is still no verified US combat death from this exchange. CENTCOM's blockade enforcement stepped up to ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire with the USS George Washington on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Iran-front toll. Israel was offstage on the US-Iran aftermath but its Gaza campaign held deadlocked and lethal — the Board of Peace roadmap holds no withdrawal before Hamas disarms, Hamas holds it will not act until Israel withdraws, and the language is 'decommissioning' not disarmament (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at at least 1,273, Al Jazeera separately citing a lower ≥1,100 figure). Posture stayed political and hard — the IDF stays until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline, a roadmap Netanyahu still calls 'problematic' before the October 27 election, UNIFIL's Khardali-Litani handover to the Lebanese Army carrying. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update. The day's fresh figure was a contested civilian one: Iran and the Iranian Red Crescent said the Sep 1 strike hit a wedding party in Kuhestak (near Minab), killing four to five — including six-year-old Amir Mohammad Karimi — and wounding more than fifty; Tehran calls it a 'war crime,' CENTCOM did not deny it. Per §3.1 dual-sourcing the claim is surfaced but held pending verification, not folded into the MOH aggregate; Sep 1 military casualties remain unreleased. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The execution wave carries out of the war toll (UN's Turk: 56 since Mar 19, 100+ at risk). Iran's claims of US service members killed and eight MQ-9s destroyed stay logged, not counted (§3.5.3). An IAEA-Iran modalities agreement to resume inspections is a technical step, not verified access; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "The spillover ledger held critical without a confirmed new death: Jordan intercepted ten of thirteen Iranian missiles (three in remote areas, no damage), and Bahrain and Iraq engaged Iranian drones — no fatality verified as intercepts held. Per §3.5.3 the Houthi Saudi-warship claim, the UAE-missile threat and Iran's eight-MQ-9 and downed-MQ-9 claims stay logged, not counted. Hormuz transits fell further — Kpler four crossings Tuesday vs Wright's claimed 17M barrels — war-risk premiums 3-10% of hull; the Iran-Oman corridor stays clouded by fire. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange; Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat, partly realized in kind, is the most acute widening path.",
  },
};

export default data;
