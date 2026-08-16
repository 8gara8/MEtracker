import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, with the tilt still toward a longer, harder war rather than a settlement. Day 171 was the morning after the lapsed deadline, and its defining move was institutional, not kinetic: Washington signaled an 'economic isolation' plan for Iran to roll out this week while Tehran's parliament advanced a bill to write the Hormuz closure into law (Bloomberg, IRNA, Middle East Eye). Per §3.5.3 both are hardening moves — a government substituting sanctions for a strike is conceding the limits of its kinetic options, and a parliament legislating a closure is making it permanent. It is not cleanly escalating into open regional war: the US-Iran shooting stayed paused, and no new mass-casualty strike hit Iranian soil. But it is not de-escalating either — the deadline that might have forced a deal is gone, replaced on both sides by durable architecture around the fight. So the gauge holds mixed, with the de-escalation leg now resting on a Gaza track and an indirect channel neither capital will call negotiation.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export-node hit or a laden-tanker sinking — stayed untriggered, keeping the gauge off 'extreme,' but the pressures that would push it there rose. The US 'economic isolation' rollout risks an Iranian counter just as Tehran legislates the closure; Israel and Hezbollah traded retaliation threats after Saturday's mass-casualty Lebanon strike, with Israel vowing to hit again; and the Houthis shut Yemen's Mokha port under twenty-five-plus missiles (Bloomberg, France 24, Manila Times). Maritime pressure held, with Hormuz transits near three-month lows and just sixteen ships crossing over two days. The IEA's warning that stockpiles are draining carries, thinning the cushion under any later shock even with Brent near $88–89. A resumed US-Israeli strike, a Hezbollah reprisal that breaks the June truce, a Saudi-Houthi exchange, an Iranian answer to the isolation plan, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open Houthi front. Day 171's spillover pressure came from the fronts the Oman deadline never governed: the Lebanon truce frayed to a threat exchange after the eleven-death strike, the Houthis closed Mokha under a missile barrage, and the Netanyahu-Trump rift stayed live as Kushner shuttled from Hamas in Cairo to Netanyahu in Jerusalem on a plan Israel still rejects (France 24, Al Jazeera, Washington Post). Saudi Arabia's warning of imminent coordinated Houthi and Iraqi-militia attacks carries, with the untested Mecca pact still the tripwire. That no fresh mass-casualty strike or Gulf-Arab military answer landed in the 24–48h is why spillover did not worsen outright; that Lebanon is primed, Mokha is shut and the deadline lapsed empty is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / CNBC',
      event:
        "With the twice-extended deadline lapsed, Washington signaled it will answer the vacuum with economic warfare rather than a strike: Treasury Secretary Scott Bessent said the US will roll out an 'economic isolation' plan for Iran 'the world has never seen before' this week, layered onto the indefinite naval blockade — a pivot reporting ties to a US munitions shortfall and mounting domestic opposition before the November midterms.",
      summary:
        "Per §3.5.3 a government that substitutes a sanctions rollout for a lapsed military deadline is signaling the limits of its kinetic options, not shifting into a new coercive gear.",
      impact:
        "The active-deadline clock is removed and the political-will clock moves to the center — the US is choosing the instrument it can sustain, deepening an economic siege rather than ending the war.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'IRNA / Middle East Eye / IranWire',
      event:
        "Iran's parliamentary national-security commission approved the outline of a bill — 'Strategic Action for Ensuring Security and Sustainable Development of the Strait of Hormuz and the Persian Gulf' — to write the closure into statute, codifying the Persian Gulf Strait Authority permit regime and a ban on US, Israeli and other 'hostile' vessels.",
      summary:
        "Per §3.5.6 the toll-institutionalization prior is materializing: a closure improvised in the spring is being turned into standing law.",
      impact:
        "A legislated permit regime is far harder to trade away than an operational posture, lengthening the closure's expected duration and hardening Iran's negotiating floor.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Washington Post / NPR / Al Jazeera',
      event:
        "Jared Kushner held a rare direct meeting with Hamas leaders in Egypt on Sunday and meets Netanyahu today; Hamas said it 'accepts' the second-phase roadmap of Trump's 15-point plan, while Netanyahu still rejects it and vows no withdrawal until Hamas is 'truly disarmed.'",
      summary:
        "Per §3.5.6 the sequencing impasse is structural — the mediator can move Hamas and still be blocked by an Israeli veto tied to an October 27 election clock.",
      impact:
        "A Hamas 'yes' raises the pressure on the US-Israel seam rather than lowering it, keeping the Gaza front open and limiting Washington's leverage to consolidate an Iran-track settlement.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'NBC News / Al Jazeera / UANI',
      event:
        "President Trump again said he would declare the Strait of Hormuz US territory 'pretty soon' once the war ends, even as just sixteen ships crossed on Monday and Tuesday against 130–140 a day pre-war and Iran's Foreign Ministry insisted the strait 'remains blocked' until its conditions are met.",
      summary:
        "Per §3.5.3 the claim-versus-reality gap is itself the intelligence — the rhetoric of control sits against transits near three-month lows.",
      impact:
        "Maximalist US framing paired with a legislated Iranian closure narrows the space for any face-saving reopening, feeding the institutionalization of the standoff.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'France 24 / Manila Times',
      event:
        "Saturday's Israeli strike that killed at least eleven including three children hardened into a threat exchange — Hezbollah vowed the attacks would be 'met with what they deserve' and Israel said Sunday it would hit Hezbollah again if threatened — while the Houthis shut Yemen's Mokha port under a barrage of more than twenty-five missiles.",
      summary:
        "Per §3.5.6 the Lebanon and Yemen fronts run on their own clocks, independent of the US-Iran channel, and both moved toward escalation without a fresh confirmed toll.",
      impact:
        "The June truce is the thinnest it has been and a second chokepoint node is shut — either front is one incident from a larger fire the Oman track cannot mediate.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused and the day's American move was economic, not kinetic — a coming 'economic isolation' plan layered onto the indefinite blockade, with no reported US casualty; the DoD DCAS all-cause tally holds at 18 killed / 687 wounded, a counting-scope difference and not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS as a divergence; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused; the day's American action was economic — Treasury Secretary Bessent's coming 'economic isolation' plan — atop the indefinite blockade that anchors Iran's precondition set. Reporting ties the pivot to a munitions shortfall and midterm-year opposition; the Joint Chiefs chairman is still pressing for an off-ramp, and the $67 billion supplemental and 50-48 Senate war-powers rebuke remain unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+3 wounded folded in from Saturday's Hezbollah drone attack in the southern-Lebanon 'security zone' that seriously injured three IDF soldiers including an officer — the trigger for Israel's mass-casualty reprisal; no new Israeli fatalities; Israel was again the striker and vowed Sunday to hit Hezbollah again if threatened; it stayed outside the Oman channel and again rejected Trump's 15-point Gaza plan on its October 27 election clock",
      status:
        "Israeli fatalities hold at 56; wounded tick to 8,652 with the three IDF soldiers seriously injured in the Hezbollah drone attack that triggered Saturday's reprisal. The day's Israeli posture was offensive and declaratory: having killed at least eleven including three children in southern Lebanon (carried in the 'other' ledger), Israel vowed on Sunday to strike Hezbollah again if threatened and named a commander it says it killed. Per §3.5.6 the Lebanon-gap prior holds — Israel is not party to the US-Iran framework and widens the seam on its own clock. On Gaza the Netanyahu-Trump rift stayed live: Israel again rejected the 15-point plan and vowed no withdrawal until Hamas is 'truly disarmed' as Kushner arrived to meet the prime minister. Israel held at highest readiness and unbound by the Oman channel.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 171; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; the day's Iranian action was legislative and maritime — a parliamentary bill to codify the Hormuz closure and continued control of the strait — with no reported new Iranian casualties; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 171. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's Iranian development was institutional — a parliamentary bill to legislate the strait's permit regime and hostile-vessel ban — plus continued maritime control, with no reported new Iranian casualties. Per §3.1's dual-sourcing a separate rights thread of reported continued executions on security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the 60% HEU stock stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Aug 9) · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing',
      delta:
        "+0 confirmed deaths in a 24–48h of threats rather than a fresh toll: Israel and Hezbollah traded retaliation warnings after Saturday's eleven-death Lebanon strike (already in the ledger; Health Ministry cumulative ~4,265 / 12,190+), and the Houthis shut Yemen's Mokha port under 25+ missiles without a confirmed new casualty count; the Bab al-Mandeb Tihamah toll holds at least six killed / ten wounded; Hormuz transits near three-month lows with sixteen ships over two days",
      status:
        "The 'other' ledger held on confirmed deaths while both non-Iran fronts moved toward escalation. In Lebanon Saturday's strike that killed at least eleven including three children (Health Ministry; nudging its cumulative toward ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) hardened into a Hezbollah-Israel threat exchange with no fresh toll in the 24–48h. In Yemen the Houthis shut Mokha port under more than twenty-five missiles, keeping the Red Sea front lethal; the Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed — four crew (three Pakistani, one Indonesian) and two Yemeni rescuers — and ten wounded per Yemen's government (Houthis unconfirmed). Hormuz transits ran near three-month lows, sixteen ships over Monday and Tuesday; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested with the Saudi warning of imminent coordinated attacks carrying. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 171 opened the morning after the deadline the whole board had watched lapse — and neither capital used the vacuum to reach for a deal. Both reached instead for permanence. Washington signaled it will answer the empty deadline not with a strike but with money: Treasury Secretary Scott Bessent said the US will roll out an 'economic isolation' plan for Iran 'the world has never seen before' this week, a pivot reporting ties to a US munitions shortfall and mounting domestic opposition before the November midterms (Bloomberg, CNBC). Tehran answered with law rather than talks: its parliament's national-security commission approved the outline of a bill to write the Strait of Hormuz closure into statute — codifying the Persian Gulf Strait Authority permit regime and a ban on US, Israeli and other 'hostile' vessels (IRNA, Middle East Eye). Trump again said he would declare Hormuz US territory 'pretty soon,' even as just sixteen ships crossed on Monday and Tuesday against 130–140 a day before the war and Iran insisted the strait 'remains blocked' (NBC News, Al Jazeera). The widening fronts stayed hot: Kushner met Hamas in Egypt on Sunday and meets Netanyahu today on a plan the prime minister still rejects, while Israel and Hezbollah traded retaliation threats after Saturday's mass-casualty Lebanon strike and the Houthis shut Yemen's Mokha port under a barrage (Al Jazeera, France 24). Brent held near $88–89 (OilPrice). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability slips a point to 6 as both sides institutionalize the standoff.",
  implications: [
    {
      title: "The deadline's vacuum fills with permanence — Washington reaches for economic war, Tehran for law",
      body:
        "The day after a twice-extended deadline lapsed, the striking thing is what neither side did: reopen the strait or reconvene talks. Instead both moved to institutionalize the standoff. Washington's answer is an 'economic isolation' plan Treasury Secretary Bessent says will be unveiled this week — measures 'the world has never seen before' layered onto the indefinite blockade (Bloomberg, CNBC). Analytical judgment: per §3.5.3 the tell is the substitution — a government that answers a lapsed military deadline with a sanctions rollout is signaling the limits of its kinetic options, and the reporting says so directly, tying the pivot to a munitions shortfall and midterm-year domestic opposition. Under the multi-clock framework the active-deadline clock is now removed, and the political-will and interceptor clocks move to the center: the US is choosing the instrument it can sustain, not the one that ends the war fastest. Tehran's countermove is its own bid for permanence — a parliamentary bill to write the Persian Gulf Strait Authority permit regime and the hostile-vessel ban into statute (IRNA, Middle East Eye). Per §3.5.6 this is the toll-institutionalization prior materializing: a closure improvised in the spring is being turned into standing law, far harder to trade away than an operational posture. The two moves rhyme. Both capitals, having failed to force the other at the deadline, are now building durable architecture around the fight — an economic-siege apparatus on one side, a legal claim to the strait on the other. That is the opposite of an off-ramp.",
    },
    {
      title: "The war stays hot where the deadline never reached — Gaza, Lebanon and the Red Sea",
      body:
        "The fronts the Oman track never governed kept generating the escalation the strait did not. On Gaza, Jared Kushner met Hamas leaders in Egypt on Sunday — a rare direct contact — and meets Netanyahu today; Hamas said it 'accepts' the second-phase roadmap while Netanyahu still rejects the 15-point plan and vows no withdrawal until Hamas is 'truly disarmed' (Washington Post, NPR, Al Jazeera). Analytical judgment: per §3.5.6 the sequencing impasse is structural, not atmospheric — the mediator can move Hamas and still be stopped by an Israeli veto welded to an October 27 election clock, so a Kushner-brokered 'yes' from Hamas raises, not lowers, the pressure on the US-Israel seam. On Lebanon, Saturday's strike that killed eleven including three children has hardened into a threat exchange: Hezbollah vows the attacks will be 'met with what they deserve' and Israel says it will strike again if threatened (France 24, Manila Times). Per §3.5.3 these are postures to log, not a battle joined — but the June truce is now the thinnest it has been. And the Houthis shut Yemen's Mokha port under a barrage of more than twenty-five missiles, keeping the Red Sea front lethal and independent of the US-Iran channel. The through-line: with the deadline spent, the war's kinetic energy has migrated to the seams no corridor can close, and each is one incident from a larger fire.",
    },
    {
      title: "Taiwan: an institutionalized closure is a longer-duration risk, not a passing one",
      body:
        "For Taipei, Day 171 changes the tenor of the exposure more than its size. Per §3.5.10 there was no Taiwan-specific development today; what shifted is duration. Analytical judgment: per §3.5.5 the arithmetic is unchanged and unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). What Day 171 adds is that both sides are now building the closure to last: Iran is legislating the strait's permit regime and the US is standing up an economic-siege apparatus rather than negotiating a reopening (IRNA, Bloomberg). A shut strait written into Iranian law and answered with an indefinite US blockade is not a spike to wait out but a structural condition to plan around — and the IEA's warning that global stocks are draining means each additional week thins the cushion under Taiwan's winter cargoes (IEA). Brent near $88–89 still understates the exposure, because Taiwan's vulnerability is priced in the molecule, not the barrel, and the molecule's route is the one now being shot at and legislated over (OilPrice). The realized damage carries — no Qatari or UAE cargoes since April, roughly 17% of Ras Laffan capacity cut, US backfill at a premium — and today lengthens the clock on all of it. The list of things that must go right for Taipei's winter gas did not grow shorter.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; the day's American move was economic — Bessent's coming 'economic isolation' plan atop the indefinite blockade. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Fatalities hold at 56; wounded tick to 8,652 with the three IDF soldiers seriously hurt in Saturday's Hezbollah drone attack that triggered the reprisal. Israel was the striker — eleven killed in southern Lebanon (carried in the 'other' ledger) — and vowed Sunday to hit Hezbollah again if threatened. Per §3.5.6 the Lebanon-gap prior holds; Israel again rejected Trump's 15-point Gaza plan as Kushner arrived, and stays outside the Oman channel at highest readiness.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was legislative — a parliamentary bill to codify the Hormuz permit regime — plus continued maritime control, with no reported new Iranian casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24–48h of threats: Israel and Hezbollah traded retaliation warnings after Saturday's eleven-death Lebanon strike (already counted; Health Ministry cumulative ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags), and the Houthis shut Mokha under 25+ missiles with no confirmed new toll. Bab al-Mandeb Tihamah holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Hormuz sixteen ships over two days; Mecca pact untested with the Saudi warning carrying; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
