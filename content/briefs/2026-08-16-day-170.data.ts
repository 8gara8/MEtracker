import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, with the tilt still toward a longer war rather than a settlement. Day 170's defining event was a non-event: the 60-day MoU and Oman-corridor window reached its Sunday (~Aug 16-17) expiry with neither a reopening nor a rupture, and an Iranian official downgraded the contacts to a 'process' that 'should not be called negotiations' while CNN called the standoff a continuing stalemate (ABC News, CNN). Per §3.5.3 a deadline that both capitals speak past, with Tehran restating six preconditions and Trump restating a counter-demand, is hardening, not resolving. It is not cleanly escalating into open regional war either — the US-Iran shooting stayed paused apart from blockade enforcement, and no new mass-casualty strike hit Iranian soil. But the war widened at its edges: Israel stepped up strikes in southern Lebanon (at least eleven killed, including children) and Saudi Arabia warned of imminent coordinated attacks, so the gauge holds mixed with the de-escalation leg now resting on a channel Tehran will not call talks.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export-node hit or a laden-tanker sinking — stayed untriggered, keeping the gauge off 'extreme,' but the pressures that would push it there rose. The deadline lapsed without a deal and Iran put on the record that its contacts are 'not negotiations,' removing the nearest off-ramp; Israel reopened the Lebanon front with a mass-casualty strike; and Saudi Arabia warned that coordinated Houthi and Iraqi-militia attacks on Gulf energy sites, ports and airports could be imminent (Al Jazeera, CNN). Maritime pressure held, with UKMTO logging some twenty strike incidents in the strait since July 6 and the US striking a container ship in the Gulf of Oman (Fox News, NBC News). The IEA's warning that stockpiles are draining carries, thinning the cushion under any later shock even with Brent in the high $80s. A resumed US-Israeli strike, a maritime sinking, a Saudi-Houthi exchange, a Gulf-Arab retaliation, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open, lethal Houthi front against Saudi shipping. Day 170's spillover pressure came from two directions the Oman deadline never governed: Israel widened its Lebanon campaign, killing at least eleven people including children by the Health Ministry's count and drawing Lebanese condemnation, and Saudi Arabia warned of imminent coordinated attacks that would put the untested Mecca pact to the test (Al Jazeera, CNN). The Bab al-Mandeb stayed lethal after the Tihamah, the Netanyahu-Trump rift carried with Israel again rejecting the Gaza plan, and the US kept a Kushner-Mladenov Gaza track alive for next week (NBC News). That no Gulf-Arab military answer followed the ADNOC strikes is why spillover did not worsen outright; that Israel reopened Lebanon, that the Saudi frontier is on alert, and that the deadline lapsed empty is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'ABC News / CNN / Time',
      event:
        "The 60-day MoU and Oman-corridor window reached its Sunday (~Aug 16-17) expiry without a reopening and without a rupture: an Iranian official told state media the two sides were still passing messages 'through intermediaries' but that the 'process should not be called negotiations,' CNN described the Strait of Hormuz standoff as a continuing stalemate, and Tehran held its six preconditions while Trump repeated that Iran must compensate the families and Gulf states it has struck.",
      summary:
        "Per §3.5.3 a party putting on the record that its own contacts are 'not negotiations' is the optimism to discount, not the breakthrough to bank.",
      impact:
        "A twice-extended deadline that both capitals speak past has stopped forcing movement — the active-deadline clock is now a calendar entry, leaving the indefinite-blockade-versus-wait-out endurance contest in its place.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / CBS News',
      event:
        "Israel stepped up its air strikes in southern Lebanon, killing at least eleven people including children by the Lebanon Health Ministry's count and drawing condemnation from Lebanese leaders — the sharpest reactivation of the Lebanon front in weeks and the day's clearest escalation.",
      summary:
        "Per §3.5.6 the Lebanon gap is a standing structural prior: Israel is not party to the US-Iran framework, so it widens the seam on its own clock regardless of the corridor.",
      impact:
        "A mass-casualty strike on a front no Oman-track deal can bind reopens the humanitarian and coalition-cohesion clocks at once and hands Iran a fresh grievance to fold into its precondition list.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / Gulf News / Atlantic Council',
      event:
        "Saudi Arabia warned that coordinated Houthi and Iraqi-militia attacks on Gulf energy facilities, ports and airports could be imminent, saying it had shared the intelligence with Washington; the Mecca Joint Defence Agreement (Saudi-Turkey-Pakistan) stayed untested but stands as the tripwire another major strike on the kingdom would trip.",
      summary:
        "Per §3.5.3 the warning is a claim to log, not a confirmed operation, but it maps the most acute widening path with the Bab al-Mandeb already lethal.",
      impact:
        "A Gulf export-node hit is the tail that would pull a nuclear-armed pact and a US ally into a fight the US-Iran channel cannot mediate — and would reprice oil in a session onto a draining base.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'Fox News / NBC News / Bloomberg',
      event:
        "Maritime pressure held: UK Maritime Trade Operations logged roughly 20 projectile-strike incidents in and around the Strait of Hormuz since July 6, the US military struck a container ship in the Gulf of Oman as it made for an Iranian port, and a tanker disabled in June and grounded on a Hormuz island has spilled hundreds of thousands of gallons; Brent crude held in the high $80s, up about 5% on the week.",
      summary:
        "Per §3.5.5 the barrel looks calm while the closure grinds on — twenty strike incidents, active blockade enforcement and an oil spill in the fairway are the signal the spot price masks.",
      impact:
        "Each week of closure and each strike lowers the inventory cushion, so a later Gulf-export hit or a sinking lands on a thinner base even as Brent holds in the high $80s.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'NBC News',
      event:
        "Washington kept a Gaza track alive: Jared Kushner and Nickolay Mladenov, the Board of Peace's Gaza representative, are to visit Israel and Egypt next week to bridge gaps on the 15-point plan, which Netanyahu again rejected, saying the IDF would not withdraw until Hamas is 'truly disarmed'; Iran accused Netanyahu of prolonging the war for domestic political ends.",
      summary:
        "Per §3.5.6 Israel's independence from US-brokered frameworks holds — the disarmament-sequencing impasse persists, welded to an open Netanyahu-Trump rift on an election clock.",
      impact:
        "A US ally rejecting the president's flagship regional plan while US envoys shuttle keeps the Gaza seam open and limits Washington's leverage to consolidate any Iran-track settlement.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused apart from blockade enforcement — the US struck a container ship in the Gulf of Oman bound for an Iranian port, with no reported American casualty; the DoD DCAS all-cause tally holds at 18 killed / 687 wounded, a counting-scope difference and not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty), against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure as the headline and flags DCAS as a divergence; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused; the day's American action was blockade enforcement — a strike on a container ship in the Gulf of Oman making for an Iranian port. The blockade remains the pivot of Iran's precondition set, and Trump added a counter-demand that Iran compensate the families and Gulf states it has struck. The Joint Chiefs chairman is still pressing for an off-ramp; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 Israeli casualties — Israel was the striker, not the struck, widening its air campaign in southern Lebanon (at least eleven killed, including children, per the Lebanon Health Ministry; those deaths carried in the 'other' ledger); Israel held at its highest readiness, stayed outside the Oman channel, and again rejected Trump's 15-point Gaza plan on its October 27 election clock",
      status:
        "No new Israeli casualties. The day's Israeli action was offensive: a stepped-up campaign in southern Lebanon that killed at least eleven people including children by the Health Ministry's count, drawing condemnation from Lebanese leaders (those deaths are carried in the 'other' theater ledger). Per §3.5.6 the Lebanon-gap prior holds — Israel is not party to the US-Iran framework and widens the seam on its own clock, keeping a full-scale-campaign option live if the corridor talk collapses. On the Gaza seam the Netanyahu-Trump rift carried: Israel again rejected Trump's 15-point plan, said the IDF would not withdraw until Hamas is 'truly disarmed,' and Washington sent Kushner and Mladenov to shuttle Israel and Egypt next week; Iran accused Netanyahu of prolonging the war for domestic political ends. Israel held at its highest readiness and stayed unbound by the Oman channel.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 170; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; the day's Iranian action was maritime and diplomatic — continued strikes on Hormuz shipping and a restatement of the six preconditions — with no reported new Iranian casualties; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll issued on Day 170. The Qeshm Island civilian deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's Iranian development was the maritime enforcement in Hormuz and a foreign-ministry restatement that the strait stays shut and any reopening is tied to the six preconditions. Per §3.1's dual-sourcing discipline a separate rights thread of reported continued executions on national-security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the 60% HEU stock stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched, and Tehran holding that inspectors return only after a final deal.",
    },
    other: {
      cumulative:
        'Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Aug 9) · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing',
      delta:
        "+11 killed on the Lebanon front: Israeli strikes in the south killed at least eleven people including children (Lebanon Health Ministry), nudging the Health Ministry cumulative toward ~4,265 / 12,190+ while the lower Wikipedia series (3,371 / 10,129) lags; the Bab al-Mandeb Tihamah toll holds at least six killed and ten wounded; UKMTO counts ~20 projectile-strike incidents in the strait since July 6; the US struck a container ship in the Gulf of Oman; ADNOC reports 15 of its vessels hit since February",
      status:
        "The Lebanon ledger moved: Israeli strikes in southern Lebanon killed at least eleven people including children by the Health Ministry's count, carried per §3.1 dual-sourcing as a Health Ministry figure and nudging its cumulative toward ~4,265 / 12,190+ (the Wikipedia series 3,371 / 10,129 lags). In the maritime theater the Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed — four crew, three of them Pakistani and one Indonesian, and two Yemeni rescuers — and ten wounded, per Yemen's government (Houthis unconfirmed). UKMTO logged roughly twenty projectile-strike incidents in and around Hormuz since July 6; the US struck a container ship in the Gulf of Oman bound for an Iranian port; ADNOC reports fifteen of its vessels hit since February; and a June-disabled tanker grounded on a Hormuz island is leaking oil across the fairway. The Mecca pact stayed untested with Saudi Arabia warning of imminent coordinated attacks; the cumulative Hormuz maritime toll stands at roughly 19 ships damaged, seven abandoned, two captured and about eighteen seafarers killed or missing. Kuwait holds 10 killed / 115 injured; Iraq 148+ / 402+; Saudi Arabia 11 civilians injured (Aug 7).",
    },
  },
  exec:
    "Day 170 brought the deadline the whole board had been watching — and the deadline did nothing. The 60-day MoU and Oman-corridor window reached its Sunday (~Aug 16-17) expiry with neither a reopening nor a rupture. An Iranian official told state media the two sides were still passing messages 'through intermediaries' but insisted the 'process should not be called negotiations,' while CNN called the Hormuz standoff a continuing stalemate (ABC News, CNN). Tehran held its six preconditions — lift the blockade, pay war-damage compensation, unfreeze assets, lift sanctions and end the campaign — and Trump repeated that Iran must instead compensate the families and Gulf states it has struck (Time, CBS News). The maritime pressure did not ease: UKMTO logged roughly 20 projectile-strike incidents around Hormuz since July 6, the US struck a container ship in the Gulf of Oman bound for an Iranian port, and a June-disabled tanker grounded on a Hormuz island has spilled hundreds of thousands of gallons; Brent held in the high $80s, up about 5% on the week (Fox News, NBC News, Bloomberg). The war widened where the deadline did not: Israel stepped up strikes in southern Lebanon, killing at least eleven people including children by the Health Ministry's count (Al Jazeera). Washington kept a Gaza track alive — Kushner and Mladenov visit Israel and Egypt next week — but Netanyahu again rejected the 15-point plan, and Saudi Arabia warned of imminent coordinated attacks on Gulf energy and ports (NBC News, CNN). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 7.",
  implications: [
    {
      title: "The deadline dies quietly — Iran puts on the record that its contacts are 'not negotiations'",
      body:
        "The date the whole board was watching arrived and passed without force. Sunday's 60-day MoU and Oman-corridor expiry (~Aug 16-17) produced neither a reopening nor a break: an Iranian official told state media the sides were still passing messages 'through intermediaries' but that the 'process should not be called negotiations,' Tehran restated its six preconditions unchanged, and Trump repeated his counter-demand that Iran compensate the families and Gulf states it has hit (ABC News, Time, CBS News). Analytical judgment: per §3.5.3 the tell is the downgrade — when a party puts on the record that its own contacts are not negotiations, the optimism that surrounded the Oman framework a week ago ('very close,' 'final stages') should be marked down, not banked. Under the multi-clock framework the active-deadline clock, dominant for weeks, has now conclusively stopped forcing: a date moved twice and then spoken past by both capitals is a calendar entry, not an ultimatum. What is left once the deadline is subtracted is the standing 'two open-ended clocks' prior — the US indefinite blockade against Iran's wait-out — and that is precisely the endurance contest the deadline was meant to prevent. The negotiation-capacity clock still turns, but downward: the channel is open enough to relay messages and closed enough that Tehran will not call them talks. Day 170's lesson is that the war did not end at the deadline and the corridor did not open at it — the deadline simply stopped mattering.",
    },
    {
      title: "The war widens where the deadline didn't — Israel reopens the Lebanon front as Saudi Arabia warns of coordinated attacks",
      body:
        "The escalation Day 170 delivered came away from the strait. Israel stepped up its air strikes in southern Lebanon, killing at least eleven people including children by the Health Ministry's count and drawing condemnation from Lebanese leaders — the sharpest reactivation of that front in weeks (Al Jazeera, CBS News). Analytical judgment: per §3.5.6 the Lebanon gap is a standing structural prior, not a surprise — Israel has never been party to the US-Iran framework, so a widening Israeli campaign in Lebanon is exactly the kind of move no Oman-track arrangement can bind, and the seam reopens on Israel's clock regardless of the corridor. Under the multi-clock framework this loads the humanitarian and coalition-cohesion clocks together. Alongside it, Saudi Arabia warned that coordinated Houthi and Iraqi-militia attacks on Gulf energy sites, ports and airports could be imminent, intelligence it says it has shared with Washington (CNN); the Mecca pact (Saudi-Turkey-Pakistan) stayed untested but is now explicitly the tripwire another major strike on the kingdom would trip. Per §3.5.3 the Saudi warning is a claim to log, not a confirmed operation — but paired with the already-lethal Bab al-Mandeb, it maps the most acute widening path: a Gulf export-node hit that pulls a nuclear-armed pact and a US ally into a fight the US-Iran channel cannot mediate. The through-line of the day is that with the deadline spent, the war's energy moved to the fronts the deadline never governed — Lebanon, the Red Sea and the Saudi frontier.",
    },
    {
      title: "Taiwan: a lapsed deadline and a widening war lengthen the list that must go right",
      body:
        "For Taipei the exposure is unchanged in size and worse in setting. Per §3.5.10 there was no Taiwan-specific development on Day 170; what shifted is the frame around the same numbers. Analytical judgment: per §3.5.5 the arithmetic is fixed and unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). Day 170 removes the one mechanism that might have shortened that exposure — a negotiated reopening — and leaves the closure to run on the indefinite clock, with UKMTO now counting some twenty projectile strikes in the strait since July and a grounded tanker leaking oil across the very waterway Taiwan's cargoes must cross (Fox News). A Brent price holding in the high $80s still understates the risk, because Taiwan's vulnerability is priced in the molecule, not the barrel, and the molecule's route is the one being shot at. The realized damage carries — no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's Ras Laffan capacity cut, US LNG backfill at a premium — and Day 170 adds a deadline that lapsed, a channel Tehran will not call negotiation, and a war widening onto fronts no corridor can close. The list of things that must go right for Taipei's winter gas grew longer, not shorter.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; the day's American action was blockade enforcement — a strike on a container ship in the Gulf of Oman bound for Iran. Trump added a counter-demand that Iran compensate the families and Gulf states it has struck; the $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "No new Israeli casualties; Israel was the striker. It widened its Lebanon campaign, killing at least eleven including children (Health Ministry; carried in the 'other' ledger), and again rejected Trump's 15-point Gaza plan, saying the IDF will not withdraw until Hamas is 'truly disarmed.' Washington sent Kushner and Mladenov to shuttle Israel and Egypt next week. Per §3.5.6 the Lebanon-gap prior holds and sits inside Iran's precondition list; Israel stays outside the Oman channel at highest readiness.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was maritime enforcement in Hormuz and an FM restatement of the six preconditions, with no reported new Iranian casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+11 Lebanon deaths: Israeli strikes in the south killed at least eleven including children (Health Ministry), nudging its cumulative toward ~4,265 / 12,190+ (Wikipedia 3,371 / 10,129 lags). Bab al-Mandeb Tihamah holds at least 6 killed (four crew — three Pakistani, one Indonesian — and two Yemeni rescuers) / 10 wounded, per Yemen's government (Houthis unconfirmed). UKMTO ~20 strike incidents since July 6; the US struck a container ship in the Gulf of Oman; ADNOC 15 vessels hit since February; a June-grounded tanker is leaking oil in the fairway. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested with Saudi warning of imminent attacks; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
