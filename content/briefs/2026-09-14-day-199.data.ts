import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 199, but for a diplomatic reason rather than a kinetic one. At roughly 11pm Muscat time on Sunday, Omani Foreign Minister Badr Albusaidi announced that the Salalah regional meeting scheduled for Monday had been postponed 'in order to reach a consensus' — removing from the calendar the only live multilateral track in the war, with no new date attached (Bloomberg, Arab News, TASS). Bahrain had already declared a boycott; Saudi attendance was uncertain after a week of Houthi cross-border fire; and Iran's Fars agency, relayed through Arab News and Reuters, said the delay was requested by certain regional countries and agreed jointly by Tehran and Muscat. Against that, the day carried two genuine restraint signals: Iraq seized the drone-launching platform used against Saudi Arabia's Petroline and closed border crossings with Iran, and President Pezeshkian said publicly that Iran is 'not at war with Saudi Arabia' (Al Jazeera). CENTCOM meanwhile published a blockade milestone of 100 commercial vessels redirected in 60 days. The balance stays escalating: an off-ramp was pulled while the instruments of pressure hardened.",
      risk7d:
        "Seven-day risk holds extreme. The Salalah postponement leaves no scheduled venue, no US counterparty and no successor date, so the coming week runs without the brake that was supposed to arrive on Day 199. The Petroline stays offline, the Houthis hold the Bab al-Mandeb coast and the islands commanding it, the Qeshm commercial-vessel strike of Day 198 remains unattributed, and the blockade tightens on a published cadence. A formal Houthi closure declaration, a laden-tanker loss, a confirmed US Navy casualty, a second Saudi export-node strike, or a named major-Chinese-bank designation each sends oil sharply higher from a Brent base near $104.61. Riyadh's continued restraint toward Baghdad and Muscat's stated intent to keep working the channel are now the only brakes, and neither is on a clock.",
      spillover:
        "Spillover holds critical and structural. The war's pressure is no longer concentrated on one front: drones launched from Iraqi soil shut a Saudi pipeline, Houthi forces hold Yemen's Red Sea coast and Mayun, Bahrain has withdrawn from the Gulf's own diplomacy, and the UN envoy told the Security Council that Yemen has entered a new and more dangerous phase with more than 11,400 households displaced since September 3. Both maritime gates of the Arabian Peninsula are now contested at once, civilian shipping inside Hormuz is in the kill zone after Day 198, and the political clocks — the US midterms, Iran's factional crisis, the Sep 24 US-China summit — add pressure without producing an exit.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Bloomberg / Arab News / TASS / Reuters',
      event:
        "Omani Foreign Minister Badr Albusaidi announced late Sunday that the Iran-GCC ministerial meeting scheduled for Monday in Salalah had been postponed 'in order to reach a consensus,' saying Muscat would continue efforts to promote dialogue supporting regional stability. No new date was given. Iran's Fars agency said the decision was taken jointly by Tehran and Muscat at the request of certain regional countries.",
      summary:
        "The meeting was to be the first gathering of senior officials from the six GCC states and Iran since the war began in February, convened to bless a temporary Hormuz shipping arrangement. It collapsed on the eve of convening after Bahrain's declared boycott and with Saudi attendance uncertain following a week of Houthi cross-border fire into Jazan.",
      impact:
        "The negotiation-capacity clock loses its only scheduled venue. The war now runs without any dated multilateral track, and the postponement removes the single brake this series had flagged for the week ahead.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al-Araby Al-Jadeed (via NewsCord) / Iranian officials direct',
      event:
        "Foreign Minister Abbas Araghchi said in an interview that the understanding reached with Oman 'by no means' signifies the reopening of the Strait of Hormuz, and that Iran's condition for reopening remains a US return to its commitments under the Islamabad memorandum of understanding. He said seven countries — the Gulf states excluding Bahrain, plus Iraq — had been due to attend.",
      summary:
        "Per §3.5.3 treat this as the Iranian principal's own framing, published before the postponement: even had Salalah convened, Tehran had already narrowed the deliverable from reopening to safe-route designation, and had re-anchored reopening to a US concession no US counterparty was at the table to make.",
      impact:
        "The gap between what the talks were reported to be worth and what Iran said they were worth was already wide before they were postponed — which reframes the delay as a recognition of that gap rather than a surprise.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: 'CENTCOM / The Hill / Bloomberg',
      event:
        "CENTCOM said its forces have redirected 100 commercial vessels in the 60 days since the 'steel wall' blockade resumed on July 14, that zero ships have passed without US forces allowing it, that four vessels have been disabled and 26 humanitarian vessels permitted through, and that more than 15,000 US personnel are assigned to the mission. A further vessel was logged on Sunday, taking the running count to 101.",
      summary:
        "Per §3.5.5 this is a material upward revision to the figures this series has been carrying — 86 rerouted, three disabled, two boarded — and the corrected CENTCOM series is adopted here going forward. The publication is itself a signal: Washington is advertising the blockade's cadence in the same news cycle in which regional diplomacy was postponed.",
      impact:
        "The instrument of economic pressure is hardening and being publicised precisely as the negotiation venue disappears, which narrows the space in which any temporary shipping arrangement could have been implemented.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Al Jazeera / Iraqi News Agency (INA)',
      event:
        "Iraq's Security Media Cell said an intelligence and security task force had located and seized the drone-launching platform used in the attack that shut Saudi Arabia's East-West (Petroline) pipeline, with Saudi authorities tracing the launch site to Maysan province near the Iranian border. Baghdad had already dismissed the Maysan operations commander and closed border crossings with Iran. Separately, President Pezeshkian said publicly that Iran is 'not at war with Saudi Arabia.'",
      summary:
        "Two restraint signals on the same tape: Baghdad is acting against the launch infrastructure on its own soil rather than denying it, and Tehran is publicly disclaiming a war with Riyadh even as its Yemeni ally fires across the Saudi border. Per §3.5.3 hold Pezeshkian's line as a statement of intent, not a change in the facts on the Jazan front.",
      impact:
        "The Saudi-Iraq-Iran triangle is the one place the war is being actively de-escalated, and Riyadh's decision not to retaliate is holding. The Petroline nonetheless remains offline, so the ~7 mb/d Hormuz bypass is still unavailable.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Jazeera / UN Special Envoy for Yemen',
      event:
        "UN Special Envoy Hans Grundberg told the Security Council that Yemen has entered 'a new and more dangerous phase of war' as the four-year truce collapses, with fighting spread across Taiz, Hodeidah, Marib, al-Jawf and al-Bayda and more than 11,400 households displaced since September 3. The Houthis hold Mokha, Mayun/Perim and the Greater and Lesser Hanish islands, giving them a direct presence on the Bab al-Mandeb approaches.",
      summary:
        "The Yemen front has moved from proxy harassment to territorial war with a chokepoint attached. The Security Council session produced concern without a mechanism, and the Houthis have still made no formal closure declaration — the escalation rung they are visibly holding in reserve.",
      impact:
        "The humanitarian-escalation and energy-infrastructure clocks converge on the second chokepoint. Bab al-Mandeb traffic runs near twelve vessels a day, and any formal closure would compound a Hormuz already at four to six against a pre-war 100-120.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 199 — a twelfth consecutive day with no verified new US combat casualty. The blockade figures are revised upward to the published CENTCOM series: 100 commercial vessels redirected in the 60 days since the steel wall resumed on July 14 (101 by Sunday), four disabled, 26 humanitarian vessels permitted, zero passed without US permission, more than 15,000 personnel assigned. The escort corridor (~8-9 mb/d) continues to run amid live fire with the USS George Washington on station.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28; per §3.5.3 keep the combat figure and flag DCAS. Day 199 added no US count, but it added a published measure of exposure: CENTCOM's own 100-vessel milestone describes a force conducting a contested interdiction campaign at scale, in the same waters where an unattributed projectile killed a civilian mariner the previous day. The $67B supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of a November midterm the president has said the war will outlast.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel again stayed offstage on the day's Gulf and Yemen developments. Defence Minister Katz said Israel will not withdraw from the Hezbollah stronghold it holds in southern Lebanon, and Netanyahu's office called Lebanon's disarmament progress 'far from sufficient' given Hezbollah's reconstitution efforts. The Gaza ceasefire holds broadly with sporadic IDF strikes.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. Israel continues to operate on its own clock — absent from the Hormuz diplomacy, active on Lebanon, where Katz's refusal to withdraw and the 'far from sufficient' disarmament verdict keep the reprisal cycle loaded. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and are reinforced by the day's statements.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official war toll on Day 199. The Qeshm commercial-vessel strike of Day 198 — one killed, crew member Jamshid Rajabi, and four wounded of ten aboard, off the Shib Deraz coast near Hengam Island — remains held separately and unattributed: the Qeshm governor blamed a 'terrorist enemy' while saying neither the projectile type nor those responsible had been identified, and CENTCOM has claimed nothing. The rights thread carries: HRANA continues to document an accelerating execution pace, including six prisoners hanged at Vakilabad in Mashhad and Dastgerd in Isfahan on September 6 and 9.",
      status:
        "The official Iranian war toll carries unchanged; Day 199 produced no new count. The Qeshm casualty stays uncounted against any actor pending attribution, and per §3.5.3 the twenty-four hours since the strike produced corroboration from neither side — the attribution window is closing without resolution, which is itself the finding. Politically Tehran ran two tracks at once: Araghchi narrowing the Hormuz deliverable and Pezeshkian disclaiming a war with Riyadh, against a factional crisis that has not abated. HRW and Amnesty ≥59 executed since the war's escalation, ≥78 at risk (incl ≥5 children); IAEA UNSC referral (23-3) carries.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,300+ / 12,200+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 158+ WIA (Kuwait 10 / 115; Saudi ~88+ injured) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing · Qeshm commercial vessel 1 killed / 4 wounded (pending attribution)",
      delta:
        "No new confirmed lethal toll on Day 199, but the displacement ledger moved: the UN envoy reported more than 11,400 households displaced in Yemen since September 3 as fighting spread across five governorates. Iraq seized the Petroline drone-launching platform in Maysan; the pipeline stays offline. Bab al-Mandeb traffic holds near twelve vessels a day with no formal closure declared. The Lebanon, Gulf, Iraq and maritime tolls carry.",
      status:
        "The 'other' ledger produced no new deaths on Day 199 and two structural movements. Yemen's war is now formally assessed by the UN as having entered a more dangerous phase, with a five-governorate front and a displacement wave that will generate casualties the Security Council has no mechanism to stop. Against that, Iraq's seizure of the launch platform and Riyadh's continued non-retaliation keep the Saudi-Iraq front from widening. Lebanon (~4,300+/12,200+), Gulf (33+/~88+ Saudi injured; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
    },
  },
  exec:
    "Day 199 took the war's only live multilateral track off the calendar. At roughly 11pm Muscat time on Sunday, Omani Foreign Minister Badr Albusaidi announced that the Iran-GCC ministerial meeting due to convene Monday in Salalah had been postponed 'in order to reach a consensus,' with no successor date and only a pledge to keep working the channel (Bloomberg, Arab News, TASS). Iran's Fars agency, relayed through Arab News and Reuters, said the delay was requested by certain regional countries and agreed jointly by Tehran and Muscat. Bahrain had already declared a boycott and Saudi attendance was uncertain after a week of Houthi fire into Jazan, so the table was fracturing before it was folded. Foreign Minister Araghchi had in any case pre-emptively narrowed the deliverable, saying the Oman understanding 'by no means' reopens the Strait of Hormuz and that reopening still requires a US return to its Islamabad memorandum commitments. In the same news cycle CENTCOM publicised a blockade milestone — 100 commercial vessels redirected in the 60 days since the steel wall resumed on July 14, four disabled, 26 humanitarian vessels permitted, zero passed without US permission — a material upward revision to this series' running count (The Hill, Bloomberg). Iraq seized the drone-launching platform used against Saudi Arabia's Petroline and Pezeshkian said Iran is 'not at war with Saudi Arabia,' the day's two restraint signals; the pipeline stays offline. The UN envoy told the Security Council Yemen has entered a more dangerous phase, with over 11,400 households displaced since September 3. The Qeshm vessel strike remains unattributed. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'The off-ramp comes off the calendar — a postponement is not a collapse, but it is not nothing',
      body:
        "The Salalah meeting was the one dated thing in the war. It was to be the first gathering of senior officials from the six GCC states and Iran since February, and this series named it the week's principal brake. It was pulled hours before convening, 'in order to reach a consensus,' with no replacement date (Bloomberg, Arab News, TASS). Per §3.5.3 read Muscat's framing as a diplomat's: postponing to build consensus keeps a channel alive rather than buries it, and Albusaidi pledged continued effort. But the reasons are structural rather than procedural. Bahrain — Fifth Fleet host, struck by Iranian missiles, no relations with Tehran since 2016 — had already refused to attend. Riyadh's participation was hostage to a Houthi cross-border campaign Iran does not control. And Araghchi had publicly narrowed Iran's own deliverable to safe-route designation while re-anchoring any reopening to a US concession no US counterparty was present to make. Under the multi-clock framework the negotiation-capacity clock does not merely slow; it loses its venue, and the active-deadline clock loses its deadline outright. Analytical judgment: the postponement is better read as an accurate pricing of the gap than as a new shock — the table could not have delivered what the week was hoping for. That is why the thirty-day ceasefire probability holds at 2 rather than falling: nothing was on offer to lose. The thing to watch is whether a new date appears within the week. If it does not, the channel is dormant rather than paused.",
    },
    {
      title: 'The pressure instruments harden as the diplomacy stalls — 100 hulls and a five-governorate front',
      body:
        "Two things moved while the talks did not. CENTCOM published its blockade arithmetic — 100 commercial vessels redirected in 60 days, four disabled, 26 humanitarian vessels permitted, zero passed without US permission, more than 15,000 personnel assigned (The Hill, Bloomberg). Per §3.5.5 that is a substantial upward revision to the 86-rerouted figure this series has carried, and the corrected series is adopted here. The publication matters as much as the number: Washington advertised its economic instrument's cadence in the news cycle where regional diplomacy collapsed. Meanwhile the UN Special Envoy told the Security Council that Yemen has entered 'a new and more dangerous phase of war,' with fighting across Taiz, Hodeidah, Marib, al-Jawf and al-Bayda and more than 11,400 households displaced since September 3, while the Houthis hold Mokha, Mayun and the Hanish islands on the Bab al-Mandeb approaches. Against both ran the day's genuine restraint: Iraq seized the launch platform used against the Petroline in Maysan and closed crossings with Iran, and Pezeshkian said Iran is 'not at war with Saudi Arabia.' Under the multi-clock framework, the energy-infrastructure and humanitarian clocks worsen together while the coalition-cohesion clock finds one partial repair in Baghdad. Analytical judgment: the war is now sustained by instruments that operate without meetings — a blockade on a published schedule, a ground offensive with a chokepoint attached, a pipeline that stays shut. Diplomacy was the only variable that required a calendar, and it is the one that lost its date.",
    },
    {
      title: 'Taiwan: Taipei starts counting its own hulls',
      body:
        "Day 199 produced the first Taiwan-specific movement in some time. A lawmaker urged a formal review of energy-supply risk, pressing CPC Corp to compile the dates, origins and routes of every oil and gas tanker due to deliver over the coming months so Taipei can determine which cargoes actually transit Hormuz (Taipei Times). Per §3.5.5 the underlying arithmetic is unforgiving and unchanged: Taiwan imports roughly 96% of its energy, LNG supplies about half of power generation, some 60% of its oil and about a third of its natural gas move through Hormuz, and the island's LNG reserve runs near twelve days against a fourteen-day statutory floor not due until 2027. CPC has already begun planning winter procurement to avoid interruption, and the government's earlier assurance covered supply only through September — the month now in progress. Under the multi-clock framework the energy-infrastructure clock reaches Taipei with a lag, which is what makes hull-by-hull accounting the right response. Analytical judgment: moving from an aggregate buffer figure to a named-cargo manifest is a meaningful upgrade in posture — it converts a statistical exposure into an operational one that can be hedged, rerouted or substituted vessel by vessel. It is also an admission that the buffer is thin enough for individual shipments to matter. With Salalah postponed, the Petroline shut and Bab al-Mandeb contested, the reroutes that Taiwan's cover was built to exploit are narrowing in parallel, and the transition to US crude and LNG is running against a war the US president has dated past the midterms.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DoD DCAS holds 18 killed / 687 wounded all-cause; per §3.5.3 keep the combat series and flag DCAS. A twelfth consecutive quiet day for US casualties. Blockade figures revised upward to CENTCOM's published series: 100 vessels redirected in 60 days since the July 14 resumption (101 by Sunday), four disabled, 26 humanitarian vessels permitted, zero passed without US permission, 15,000+ personnel assigned. The escort convoy (~8-9 mb/d) runs amid live fire on both maritime gates with the USS George Washington on station.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on the Hormuz diplomacy and the Yemen front. Katz said Israel will not withdraw from the Hezbollah stronghold it holds in southern Lebanon and Netanyahu's office judged Lebanese disarmament 'far from sufficient'; the Gaza ceasefire holds broadly with sporadic strikes. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and were reinforced on the day.",
    iran:
      "Official MOH war toll carries unchanged; Day 199 produced no new count. The Qeshm commercial-vessel strike (1 killed — crew member Jamshid Rajabi — and 4 wounded of ten aboard) stays held separately and unattributed after twenty-four hours: the Qeshm governor blamed a 'terrorist enemy' but said neither the projectile nor those responsible had been identified, and CENTCOM has claimed nothing. The rights thread carries per §3.1: HRANA documents a continuing execution wave including six hanged at Vakilabad and Dastgerd on September 6 and 9; HRW and Amnesty ≥59 executed since the war's escalation, ≥78 at risk (incl ≥5 children). IAEA UNSC referral (23-3) carries. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "No new confirmed lethal toll on Day 199. The UN envoy reported more than 11,400 households displaced in Yemen since September 3 across a five-governorate front; the Houthis hold Mokha, Mayun and the Hanish islands with Bab al-Mandeb traffic near twelve vessels a day and no formal closure declared. Iraq seized the Petroline drone-launching platform in Maysan and kept crossings with Iran shut; the pipeline remains offline. The Qeshm casualty (1 killed / 4 wounded) is held pending attribution. Lebanon (~4,300+/12,200+), Gulf (33+/~88+ Saudi injured; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
