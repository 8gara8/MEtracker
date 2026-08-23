import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war. Day 178 is the day the economic war becomes real: Treasury Secretary Bessent details the 'economic isolation' plan at a 2 p.m. ET news conference he casts as the largest coordinated isolation campaign in history and a demand that allies 'choose sides,' met by a hardened Iran-China refusal (Bloomberg, Al Jazeera, China-Global South Project). It is not de-escalating: Iran's new security chief Rezaei threatened to choke every Gulf export route if neighbors help Washington, the US track stays closed, and China ordered its firms to ignore the sanctions. It is not cleanly escalating either — no route was struck, no shooting resumed, and Tehran's own president reached back for the lapsed memorandum as Egypt moved to revive it. Mixed holds; a dovish presidential line and a new Egyptian mediation channel run alongside a security chief's Gulf-wide ultimatum and a plan built to collide with Beijing — the real test is whether the plan lands as designations or as words.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, a lost escort convoy, a confirmed Saudi naval loss, a Hezbollah reprisal that breaks the June truce, or a confirmed American combat death — stayed untriggered, keeping the gauge off 'extreme,' but the aperture widened as Rezaei extended Iran's chokepoint threat beyond Hormuz to the bypass pipelines the Gulf states use to route around it, on the eve of a plan that demands exactly the allied cooperation he threatened to punish (CNN, Middle East Eye). A secondary-sanctions strike on Chinese banks, an Iranian move against a Saudi or Emirati export route, an interdiction of the CENTCOM escort corridor, a US move on Oman, or an Iranian maritime, cyber, or proxy answer once the plan lands are the dominant seven-day risks. The plan's rollout is itself the forcing event.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and an economic front now aimed squarely at the Gulf's own export nodes by Rezaei's ultimatum (CNN, Tehran Times). The plan internationalizes the fight — its bite runs through the Chinese banks and yuan rails Beijing again refused to surrender, and Iran's threat to the Gulf-neighbor bypass routes is a bid to deter the allied alignment the plan demands. The CENTCOM escort corridor keeps Washington in daily maritime custody of Gulf exports, a standing exposure; the Lebanon truce stayed frayed to a threat exchange, and the Gaza demilitarization mechanism kept that seam live with no firm pre-election Israeli commitment. No new kinetic front opened today, which is why spillover did not worsen outright; that the plan's China collision lands today and the threat surface now reaches the whole Gulf is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / Middle East Eye / Tehran Times',
      event:
        "Iran's new hardline security chief Mohsen Rezaei, secretary of the Supreme National Security Council, warned on state television that if Gulf neighbors join Washington's economic war, 'not a drop of oil will leave the Persian Gulf and the Strait of Hormuz,' and that Iran would 'target other oil export routes' — extending the chokepoint threat to the bypass pipelines Gulf states use to route around Hormuz. 'We will consider them enemies,' he said.",
      summary:
        "Per §3.5.3 cite it as a threat, not an action — no route was struck — but the target set is the tell: it aims to deter exactly the allied cooperation Bessent's plan demands, hours before the plan lands.",
      impact:
        "The coalition-cohesion and energy-infrastructure clocks tighten together: threatening the Saudi and Emirati bypass routes raises the cost of Gulf-Arab alignment with Washington and marks the clearest widening path — a strike there is both a casualty event and a >$100 Brent trigger.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / Al Jazeera / CNBC',
      event:
        "Treasury Secretary Scott Bessent is set to detail the 'economic isolation' plan at a 2 p.m. ET news conference, casting it as the largest coordinated economic isolation campaign in history and pressing allies to 'choose sides,' while saying the measures would 'collapse' Iran's economy and reaffirming there would 'likely not be a large-scale kinetic restart'; Trump warned that third countries offering Iran a 'lifeline' would face consequences.",
      summary:
        "Per §3.5.3 treat 'collapse' and 'choose sides' as administration framing of a plan that is still, at the moment of this brief, a promise rather than a designation list; the kinetic cap holds while the finance squeeze advances.",
      impact:
        "The political-will clock dominates: the plan bets Washington's will to enforce secondary sanctions on China can do what bombs did not, and its first designations — whether Chinese banks are named — are the day's decisive tell.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'China-Global South Project / NBC News',
      event:
        "Beijing again refused, its foreign ministry (spokesperson Lin Jian) calling the coming measures 'illegal unilateral sanctions' with 'no basis in international law' and 'not authorized by the UN Security Council,' urging a political and diplomatic path and ordering Chinese firms to ignore the restrictions; China buys more than 80% of Iran's exported oil.",
      summary:
        "Per §3.5.3 China's refusal converts the plan's ceiling into a declared red line before the first designation; the enforcement collision — not the barrels — is the plan's central test.",
      impact:
        "The coalition-cohesion clock tightens: the plan is engineered to bite through Chinese banks and yuan rails, and Beijing's order to defy it pre-loads the secondary-sanctions confrontation the rollout must survive today.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'US News / The New Arab / National Herald',
      event:
        "Cutting the other way, President Pezeshkian defended the lapsed 60-day US memorandum as the 'best path' out of a 'neither war nor peace' stalemate, insisting 'not a single provision amounts to capitulation' and that the Supreme National Security Council reached consensus on it, as Egyptian Foreign Minister Badr Abdelatty phoned Araghchi to try to revive the framework.",
      summary:
        "Per §3.5.3 read the divergence, not either line alone: a president reaching for a deal the US track has declared closed while his security chief threatens the Gulf is a regime hedging an off-ramp and an escalation in the same news cycle.",
      impact:
        "The negotiation-capacity clock flickers — a new mediator (Egypt) enters as Oman stays under a US bomb-threat — but the deal Pezeshkian invokes already lapsed and Washington will not reopen it today; the dovish tell is real signaling that does not yet move the standoff.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Trading Economics / CNBC / UN (OHCHR)',
      event:
        "The tape held under the rhetoric: Brent stayed near $94 and US pump prices ran about $1 a gallon above a year ago as the CENTCOM escort corridor kept moving ~10 million barrels a day — more than 660 million barrels since May — while normal commercial Hormuz transit stayed effectively shut; the UN rights chief renewed alarm over a sharp rise in Iranian executions (HRANA logging at least 444 in January–July) used to suppress dissent.",
      summary:
        "Per §3.5.5 quantify: the escort corridor runs at roughly half pre-war volume under fire, the price premium is a risk-and-enforcement premium rather than a missing-barrels story, and the execution wave is a home-front endurance tell, kept out of the war-casualty cumulative per §3.1.",
      impact:
        "The energy-infrastructure and political-will clocks stay hot: a secondary-sanctions strike or a convoy loss reprices past $100 from a base that has stopped discounting the flow, while the home-front costs — pump prices, executions, capital flight — accrue on both sides.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 178 was a plan-and-rhetoric day — no US-Iran shooting, no reported American casualty as Bessent readied the isolation-plan rollout and reaffirmed there would 'likely not be a large-scale kinetic restart'; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused as Washington moved its economic hand: Bessent set a 2 p.m. ET news conference to detail the plan, cast it as the largest coordinated isolation campaign in history, and reaffirmed the kinetic cap. CENTCOM's escort corridor — more than 660 million barrels and ~1,300 vessels since May, moving ~10 mb/d — remains a standing daily maritime exposure, and the USS George Washington is on station after relieving the USS Abraham Lincoln. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24-48h; Israel stayed offstage on a day dominated by the US-Iran economic rollout, holding its Gaza posture and keeping its Hezbollah threat exchange live at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. Israel was largely offstage on Day 178 as the action ran through the US-Iran economic track. Its posture stayed political rather than costly: Jerusalem holds the demand that Gaza be demilitarized under a US general before any IDF redeployment, with the Kushner-Netanyahu roadmap Netanyahu still calls 'problematic' before the October 27 election, and it keeps its Hezbollah threat exchange live after the Aug 15 southern-Lebanon strike (carried in the 'other' ledger). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework — and it stayed at highest readiness.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Iran's Day 178 action was rhetorical and diplomatic — Rezaei's Gulf-export-route ultimatum, Pezeshkian's memorandum pivot, and Araghchi's Egypt call — with no reported new casualties; the UN rights chief's renewed alarm over a sharp rise in executions (HRANA at least 444 in Jan–Jul) is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 178. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Day 178 moves were rhetorical and diplomatic — the new security chief Rezaei's threat to choke every Gulf export route, Pezeshkian's defense of the lapsed memorandum as the 'best path' out of a 'neither war nor peace' stalemate, and Araghchi's call with Egypt's foreign minister — with no reported new casualties. Per §3.1's dual-sourcing a separate rights thread — the UN rights chief's renewed alarm over a sharp rise in executions used to suppress dissent, with HRANA logging at least 444 for January–July — is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths in a 24-48h dominated by the plan rollout and Iran's Gulf threat; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths on a plan-and-rhetoric day. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as a Hezbollah-Israel threat exchange with no fresh toll. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz commercial transit stays effectively shut outside the US convoy; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbor bypass routes is the most acute new widening path against this ledger.",
    },
  },
  exec:
    "Day 178 opens on the day the economic war becomes real. Hours before Treasury Secretary Scott Bessent details the 'economic isolation' plan at a 2 p.m. ET news conference — which he casts as the largest coordinated isolation campaign in history and a demand that allies 'choose sides' — Iran's new hardline security chief escalated the threat surface. Mohsen Rezaei, secretary of the Supreme National Security Council, warned on state television that if Gulf neighbors join Washington's economic war, 'not a drop of oil will leave the Persian Gulf and the Strait of Hormuz,' and that Iran would 'target other oil export routes' — extending the chokepoint threat to the bypass pipelines the Gulf states use to route around Hormuz (CNN, Middle East Eye, Tehran Times). Yet Tehran's own president pulled the other way: Pezeshkian defended the lapsed US memorandum as the 'best path' out of a 'neither war nor peace' stalemate, insisting 'not a single provision amounts to capitulation,' as Egypt's foreign minister phoned Araghchi to try to revive it (US News, The New Arab). Beijing again refused, calling the sanctions 'illegal unilateral' measures with 'no basis in international law' and ordering its firms to ignore them — China still buys more than 80% of Iran's exported oil (China-Global South Project, NBC News). Brent held near $94 with US pump prices about $1 above a year ago. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "The threat surface widens from the strait to the whole Gulf",
      body:
        "Rezaei's ultimatum — the first major posture statement from Iran's reshuffled Supreme National Security Council — converts the IRGC's Day-177 promise of an 'offensive aspect' into a specific coercive threat: not just Hormuz, but the alternative export routes (the Saudi East-West line to Yanbu, the UAE's Fujairah pipeline) that Gulf states built precisely to bypass the strait. 'We will consider them enemies,' he told state television (CNN, Middle East Eye, Tehran Times). Per §3.5.3 treat it as a threat, not an action — no route was struck today — but the target set is the point: it is aimed at deterring exactly the allied cooperation Bessent's plan demands, turning the plan's 'choose sides' ask into a live security risk for Riyadh and Abu Dhabi. Under the multi-clock framework the coalition-cohesion and energy-infrastructure clocks tighten together: the UAE has already severed trade with Iran and accused the IRGC of piracy, and a threat to the bypass pipelines raises the cost of any further Gulf-Arab alignment with Washington. Analytical judgment: this is Iran pre-positioning its retaliation menu before the plan lands — signaling that the price of enforcing isolation is a wider chokepoint war reaching the Gulf's own export nodes. It is the clearest widening path on the board: a strike on a Saudi or Emirati export route would be both a casualty event and a >$100 Brent trigger, and the threat alone hardens the eve toward a longer war.",
    },
    {
      title: "Tehran speaks with two voices; the plan lands on the split",
      body:
        "The same twenty-four hours that produced Rezaei's Gulf ultimatum produced Pezeshkian's most conciliatory framing yet: the president defended the lapsed sixty-day memorandum as the 'best possible agreement' and the exit from a 'neither war nor peace' limbo, insisting 'not a single provision amounts to capitulation' and that the SNSC reached consensus on it (US News, National Herald). Egypt moved to operationalize that opening — Foreign Minister Badr Abdelatty phoned Araghchi to discuss reviving the framework (The New Arab). Per §3.5.3 the divergence is the signal, not either line alone: a president reaching back for a deal the US track has declared closed, while his security chief threatens to torch the Gulf, is a regime hedging both an off-ramp and an escalation in the same news cycle. Under the multi-clock framework the negotiation-capacity clock flickers — a new mediator, Egypt, enters as Oman stays under a US bomb-threat — but the deal Pezeshkian invokes is the one whose sixty-day window already lapsed and which Washington will not reopen on Monday. Analytical judgment: the dovish presidential line is real signaling but does not move the standoff, because the actors who can restart talks — Washington and the SNSC hardliners — are pulling the other way; per §3.5.3 Pezeshkian's 'best path' is a claim about Iran's preferred exit, not evidence one exists. The ceasefire probability holds at 5: two dovish tells (Pezeshkian, Egypt) are outweighed by a closed US track, a China collision, and a Gulf-wide ultimatum.",
    },
    {
      title: "Taiwan: the plan's China rails and Taipei's LNG run through the same Gulf",
      body:
        "Per §3.5.10 there was no Taiwan-specific development today; the exposure is structural and, with Rezaei's threat, sharpening on both sides at once. The physical dependency: Rezaei's warning that Iran would target Gulf export routes beyond Hormuz widens the chokepoint risk to the very corridor through which roughly a third of Taiwan's 23.6 Mt of LNG transits, nearly 8 Mt of it Qatari (CSIS). The financial dependency: Bessent's plan is built to bite through the Chinese banks and yuan-clearing rails that also settle much of Asian energy trade, so a secondary-sanctions escalation could ripple into the financing of unrelated Gulf-to-Asia cargoes (Fortune, Bloomberg). Per §3.5.5 the arithmetic is unforgiving — Taiwan imports 99% of its natural gas against about eleven days of gas cover versus some 120 days of oil. Analytical judgment: today sharpened both sides of the exposure simultaneously — the physical chokepoint threat grew a Gulf-wide dimension while the financial chokepoint moved from promise to Monday reality. For Taipei neither a winter-gas stockpile nor supplier diversification fully offsets a shock that could hit the shipping lane and the settlement rail in the same week; the eve of the plan is a condition to plan around, not a spike to wait out.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Day 178 was a plan-and-rhetoric day — no US-Iran shooting, no reported American casualty; Bessent set a 2 p.m. ET news conference to detail the plan and reaffirmed there would 'likely not be a large-scale kinetic restart.' The CENTCOM escort corridor (~660M+ barrels / ~1,300 vessels since May, ~10 mb/d) remains a standing exposure; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel was largely offstage as the action ran through the US-Iran economic track. Its posture stayed political — holding the line that the IDF stays in Gaza until Hamas disarms under a US general, with the Kushner-Netanyahu roadmap Netanyahu still calls 'problematic' before the October 27 election, and keeping the Hezbollah threat exchange live after the Aug 15 Lebanon strike (carried in 'other'). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness on its October 27 election clock.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was rhetorical and diplomatic — Rezaei's Gulf-export-route ultimatum, Pezeshkian's memorandum pivot, and Araghchi's Egypt call — with no reported new casualties. A rights thread — the UN rights chief's renewed alarm over a sharp rise in executions, HRANA at least 444 in Jan–Jul — is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24-48h dominated by the plan rollout and Iran's Gulf threat. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Mokha claim and the UAE ballistic-missile threat stay logged, not counted. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as a threat exchange. Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat is the most acute new widening path.",
  },
};

export default data;
