import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed and consolidates Day 164's split rather than breaking it. On the de-escalation side the maritime mechanics crept forward: Foreign Minister Araghchi said Iran and Oman were 'very close' — 'in the final stages' — on a temporary Hormuz corridor, and Oman described its talks as 'positive and constructive' (Press TV, Al Jazeera, Bloomberg). On the escalation side three vectors hardened at once. Iran again refused direct US talks, said reopening was impossible until Washington made amends for its memorandum 'violation,' and over the weekend widened its terms to a six-point list — lift the blockade, withdraw US forces from Iran's vicinity, and more — that Washington is unlikely to accept (Fortune). Brent broke above $87, up nearly 5% on the day, as Iran signaled the strait would stay shut. And the Mecca defense pact drew its first test and came up empty, with Riyadh reported weighing a unilateral answer to the Jizan strike. Per §3.5.3 a maritime deal that inches 'very close' while the political price is raised, the barrel breaks its range, and the new coalition sits on its hands is the definition of mixed.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export node or a laden-tanker sinking — stayed untriggered, and no new kinetic mass-casualty event was confirmed on Day 165, which is what keeps the gauge off 'extreme.' But three pressures rose. Brent broke above $87 for the first time in weeks as Iran signaled Hormuz would stay closed, moving the market off the range it had held since the Jizan hit (Fortune, CNN). Riyadh was reported gearing up for a retaliation the Mecca pact's new members had not delivered, and a Saudi strike on Yemen or a Houthi answer on a Gulf export node is now the week's most acute widening path (Energy News Beat, Militarnyi). The ~August 16-17 toll-free corridor window is roughly five to six days out with the political price unpaid, so a US-acceptable outcome is no likelier by the deadline. A resumed US-Israeli strike, a Saudi-Houthi exchange on energy infrastructure, a maritime sinking, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open, kinetic Houthi front against Saudi Arabia. Day 165's spillover pressure came from the coalition seam rather than a new strike: the Mecca Joint Defence Agreement (Saudi Arabia, Turkey, Pakistan) went untested when its members did not answer the Houthi hit on Aramco's Jizan refinery, and Riyadh was reported weighing a unilateral retaliation — the first sign the new bloc may absorb rather than deter (Japan Times, Militarnyi, Energy News Beat). The US-Israel seam frayed further as Netanyahu, three months from an October 27 election, again rejected Trump's Gaza plan and ruled out any withdrawal before Hamas disarms (NBC News, CNN). That no new mass-casualty strike landed is why spillover did not worsen outright; that a signed defense pact failed its first test and a nuclear-armed member stayed silent is why it did not ease. A cooled Oman corridor reaches none of these fronts.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Fortune / Bloomberg / Press TV / Al Jazeera',
      event:
        "Foreign Minister Araghchi said Iran and Oman were 'very close' and 'in the final stages' on a temporary Hormuz corridor, and Oman called the talks 'positive and constructive,' but Iran again rejected direct US negotiation — 'as long as the American violation of the memorandum continues and the US does not make amends, there is no possibility of resuming negotiations' — and over the weekend widened its terms to a six-point list, from lifting the naval blockade to withdrawing US forces from Iran's vicinity, that Washington is unlikely to accept; messages still passed only through intermediaries.",
      summary:
        "Per §3.5.3 the maritime mechanics inched 'very close' while the political price rose — the same reverse announce-and-retreat pattern as Day 164, now with a concrete six-point demand list and an explicit rejection of live US talks.",
      impact:
        "A corridor whose logistics are nearly done but whose political sequencing widened again keeps a US-accepted reopening out of reach, leaving the war's off-ramp hostage to demands — blockade lift, force withdrawal, compensation — Washington has refused.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Fortune / CNN / Trading Economics',
      event:
        "Brent crude broke above $87 a barrel — up nearly 5% on the day and its sharpest single-session move in weeks — as Iran signaled the Strait of Hormuz would stay closed and the market priced Saudi-supply risk in the wake of the Jizan refinery strike; the barrel had held the low-to-mid $80s through Day 164 despite the contained Jizan hit.",
      summary:
        "Per §3.5.5 the market that had ignored the standoff repriced it: a ~5% jump on an Iranian 'strait stays shut' signal, with no new supply actually lost, is a war-risk premium, not a supply shock.",
      impact:
        "A barrel breaking its range on signaling alone shows how little slack is left in the risk premium; an actual Gulf export-node hit or a laden-tanker sinking now moves off a higher base toward $120, and a signed reopening is the only thing that pulls it back to the $70s.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Japan Times / Militarnyi / Energy News Beat / Reuters',
      event:
        "The Mecca Joint Defence Agreement — signed August 7 by Saudi Arabia, Turkey and Pakistan, binding an attack on one as an attack on all — drew its first test and produced no allied response: two days after signing, the Houthi drone strike on Aramco's 400,000-barrel-per-day Jizan refinery went unanswered by Ankara or Islamabad, and Riyadh was reported weighing a unilateral retaliation against the Houthis.",
      summary:
        "Per §3.5.6 the coalition prior sharpened — a mutual-defense pact that its nuclear-armed and NATO members declined to invoke on first contact looks, so far, like a bloc that absorbs rather than deters.",
      impact:
        "A pact that fails its opening test leaves Saudi Arabia to answer alone or not at all; a unilateral Saudi strike on Yemen, or a Houthi counter on a Gulf export node, is now the most acute path to a wider war and a genuine oil-supply shock.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'NBC News / NPR / Washington Post / CNN',
      event:
        "Netanyahu again rejected Trump's Board of Peace 15-point Gaza plan, saying 'Israel rejects the 15-point document' and that Israeli forces would not withdraw until Hamas fully disarms first, and reaffirmed that 'as long as I am prime minister, there will be no Palestinian state'; the stance came less than three months before Israel's October 27 election, with his coalition's majority at risk and Hamas insisting it will disarm only after a full Israeli withdrawal.",
      summary:
        "Per §3.5.6 the US-Israel seam hardened rather than eased — the disarmament-sequencing impasse is now welded to an open Netanyahu-Trump rift and an election clock that rewards defiance of Washington.",
      impact:
        "An Israel publicly rejecting the president's plan on the eve of an election keeps a full-scale-campaign option live and independent of the US-Iran track, so any settlement that assumes Israeli alignment stays structurally fragile.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: "Lloyd's List Intelligence / straits.live / Bloomberg",
      event:
        "The Strait of Hormuz stayed effectively closed — roughly two transits on August 2 against about 73 a day pre-crisis — with war-risk insurance priced near 30 times pre-crisis levels and six protection-and-indemnity clubs having withdrawn cover, while the toll-free 60-day corridor window that both sides have discussed nears its ~August 16-17 expiry with the political price still unpaid.",
      summary:
        "Per §3.5.5 the throughput numbers stay the story — a chokepoint running at low-single-digit transits versus roughly seventy a day is a closure in all but name, whatever the diplomatic mood music.",
      impact:
        "A strait this shut this long compounds the toll-institutionalization risk (§3.5.6): the longer the blockade and any transit-fee scheme run, the more each hardens into permanent structure that a late deal cannot cheaply unwind.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused with Trump 'low keying' Iran and messages passing only through intermediaries; the DoD DCAS all-cause series holds at 18 killed / 687 wounded, a counting-scope difference and not a confirmed hostile loss; the lone Kuwait death at Ahmad al-Jaber stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty), against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure as the headline and flags DCAS as a divergence; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US naval blockade of Iranian ports continued and is the pivot of Iran's precondition — Tehran ties a full reopening to lifting it, to war-damage compensation, and now to a six-point demand list Washington is unlikely to accept. Trump held to 'only semi-negotiating,' the Joint Chiefs chairman is still pressing for an off-ramp, and the US and Israel keep energy-strike options armed; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved with the Senate in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest readiness and outside the Oman channel; on the seams the day hardened as Netanyahu again rejected Trump's Board of Peace Gaza plan on the eve of an October 27 election and ruled out any withdrawal before Hamas disarms",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest readiness, with the US and Israel still preparing possible strikes on Iranian energy infrastructure, and stays outside the US-Iran framework and unbound by the Oman channel, so its posture keeps a full-scale-campaign option live if the corridor talk collapses; the Lebanon-gap prior (§3.5.6) carries and sits inside Iran's precondition list. On the seams the day hardened: Netanyahu, less than three months from an October 27 election with his coalition's majority at risk, again rejected Trump's 15-point Gaza plan, said forces would not leave until Hamas fully disarms, and reaffirmed there would be 'no Palestinian state' while he governs (NBC News, NPR, CNN). The disarmament-sequencing impasse — Hamas refuses to disarm before an Israeli withdrawal; Israel refuses to withdraw without disarmament — stayed unresolved, now compounded by an open Netanyahu-Trump rift that an election clock rewards.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 165; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran said the shipping corridor was 'very close' with Oman while rejecting live US talks, widening its reopening demands to a six-point list, and signaling the strait would stay shut until the US 'makes amends'",
      status:
        "No updated official Iranian toll issued on Day 165. The Qeshm Island deaths — a couple and their child — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Araghchi said Iran and Oman were 'very close' on the Hormuz corridor but that resuming US negotiations was impossible until Washington made amends for its memorandum 'violation,' and Iranian officials widened the reopening terms to six demands including lifting the blockade and withdrawing US forces from Iran's vicinity. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the produced 60% HEU stock (ISIS ~440.9 kg, plus 184.1 kg at 20%) stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched, and Tehran holding that inspectors return only after a final deal.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians injured (Houthi attack, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Houthi strike, Aug 9) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "+0 — no confirmed new theater deaths on Day 165; the Day 164 Mokha toll (11+ killed / 32+ wounded) and the contained Jizan refinery strike carry; the northern Iraqi-militia axis stayed postponed under Badr mediation, and the Mecca pact's members did not answer the Jizan hit while Riyadh was reported weighing a unilateral retaliation",
      status:
        "No confirmed new deaths in the theaters on Day 165; the Day 164 additions carry. The Houthi strike on Yemen's Red Sea port of Mokha (at least eleven killed — three civilians, eight military — and thirty-two wounded) and the contained drone strike on Aramco's Jizan refinery (fire extinguished, no facility casualties) hold from Day 164. The Mecca Joint Defence Agreement went untested when Turkey and Pakistan did not respond to the Jizan hit, and Saudi Arabia was reported gearing up for a unilateral answer to the Houthis (Japan Times, Militarnyi, Energy News Beat); the northern Iraqi-militia axis kept its response postponed under Badr Organization mediation. The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing, with the strait effectively closed — around two transits on August 2 versus about 73 a day pre-crisis. Kuwait holds 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Saudi Arabia 11 civilians injured (Aug 7); Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 165 consolidated Day 164's split without resolving it: the maritime mechanics inched closer while the politics, the market and the coalition all hardened. Foreign Minister Araghchi said Iran and Oman were 'very close' — 'in the final stages' — on a temporary Hormuz corridor, and Oman called its talks 'positive and constructive,' but Iran again refused direct negotiation with Washington, insisting there was 'no possibility of resuming' talks until the US made amends for its memorandum 'violation,' and over the weekend widened its terms to a six-point list — from lifting the naval blockade to withdrawing US forces from Iran's vicinity — that Washington is unlikely to accept (Fortune, Bloomberg, Press TV, Al Jazeera). Messages still passed only through intermediaries. The market then moved on the standoff it had ignored: Brent broke above $87, up nearly 5% on the day and its sharpest move in weeks, as Iran signaled the strait would stay shut and traders priced Saudi-supply risk (Fortune, CNN). And the Mecca defense pact drew its first test and came up empty — two days after Saudi Arabia, Turkey and Pakistan signed it, the Houthi strike on Aramco's Jizan refinery went unanswered by the new allies, and Riyadh was reported weighing a unilateral retaliation, itself an oil-risk vector (Japan Times, Militarnyi, Energy News Beat). The US-Israel seam frayed further as Netanyahu, three months from an October 27 election, again rejected Trump's Gaza plan and ruled out any withdrawal before Hamas disarms (NBC News, CNN). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability eases to 11.",
  implications: [
    {
      title: "The split deepens — Hormuz mechanics inch 'very close' while the US-Iran politics harden",
      body:
        "Day 164 cooled the 'imminent' deal; Day 165 clarified the shape of the cooling. The maritime track genuinely advanced — Araghchi said Iran and Oman were 'very close' and 'in the final stages,' Oman called the atmosphere 'positive and constructive,' and the corridor's engineering (a northern inbound lane in Iranian waters, a southern outbound lane in Omani waters, an initial 60 days without transit fees) is essentially agreed (Press TV, Al Jazeera). But the political track went the other way. Iran refused direct US negotiation outright — 'no possibility of resuming' until Washington makes amends for its memorandum 'violation' — and over the weekend widened its terms to a six-point list running from a naval-blockade lift to a US force withdrawal from Iran's vicinity, terms Washington is unlikely to accept, with all contact still routed through intermediaries (Fortune, Bloomberg). Analytical judgment: per §3.5.3 the figure to distrust remains any 'close,' and the tell is the sequencing — Iran is willing to finish the Oman-managed plumbing while raising, not lowering, the political price the United States must pay to turn plumbing into passage. Under the multi-clock framework the negotiation-capacity clock is stuck: Oman and Qatar are active, but Khamenei is unreachable and the SNSC has not signed, so the mediators have a route and no mandate. This is a corridor whose logistics are done and whose price keeps rising — a cooling that is now structural, not a bad news cycle.",
    },
    {
      title: "Oil breaks the range and the Mecca pact fails its first test — two escalation vectors, no new strike",
      body:
        "The day's escalation came from the market and the coalition, not from a fresh salvo. Brent broke above $87, up nearly 5% and its sharpest session in weeks, after Iran signaled the strait would stay shut — a war-risk premium repricing a standoff the barrel had ignored since the contained Jizan hit, with no new supply actually lost (Fortune, CNN). Analytical judgment: per §3.5.5 the move matters precisely because nothing physical changed; a barrel that jumps 5% on signaling alone has little slack left, so an actual Gulf export-node hit or a laden-tanker sinking now moves off a higher base toward $120. The coalition vector is the sharper one. The Mecca Joint Defence Agreement — Saudi Arabia, Turkey and nuclear-armed Pakistan, an attack on one an attack on all — drew its first test when the Houthis struck Aramco's 400,000-barrel-per-day Jizan refinery two days after signing, and neither Ankara nor Islamabad answered; Riyadh was reported weighing a unilateral retaliation instead (Japan Times, Militarnyi, Energy News Beat). Per §3.5.6 the coalition prior sharpens: a mutual-defense bloc that declines to invoke itself on first contact looks, so far, like one that absorbs rather than deters. The untriggered northern Iraqi-militia axis stayed postponed under Badr mediation, so the feared synchronized salvo has not landed — but a Saudi strike on Yemen, or a Houthi counter on a Gulf export terminal, is now the most acute single path from this standoff to a genuine supply shock.",
    },
    {
      title: "Taiwan: the barrel breaks higher and the molecule risk holds — the exposure hardens with the price",
      body:
        "For Taipei the ledger held but the price line moved. Per §3.5.10 there was no Taiwan-specific development on Day 165; the change is that the crude bill just re-rated, with Brent breaking above $87 on an Iranian 'strait stays shut' signal rather than on any restored supply. Analytical judgment: per §3.5.5 the numbers behind Taiwan's exposure are unchanged and unforgiving. Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). The exposure the war most threatens is still the molecule, not the barrel — but a barrel breaking its range lifts the whole import bill while the gas risk sits unresolved behind a strait Iran now says stays shut and a Red Sea the Houthis keep hot. The realized damage carries: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, US LNG backfill at a premium, against about eleven days of gas cover versus roughly 120 days of oil. A corridor stuck 'very close' but politically unpriced, a barrel re-rating higher, and a coalition that just failed its first test together lengthen — not shorten — the list of things that must go right before Taipei's exposure eases.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider counting scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The blockade — now tied to Iran's six-point demand list — continues; Trump held to 'only semi-negotiating'; the Joint Chiefs chairman is still pressing for an off-ramp; the $67B supplemental and 50-48 war-powers rebuke remain unresolved in recess.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held. The seams hardened: Netanyahu again rejected Trump's 15-point Gaza plan on the eve of an October 27 election, ruled out withdrawal before Hamas disarms, and reaffirmed 'no Palestinian state.' Israel stays outside the Oman channel; the Lebanon-gap prior sits inside Iran's precondition list; the disarmament impasse is welded to an open Netanyahu-Trump rift.",
    iran:
      "No fresh official MOH toll; Qeshm civilian deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Araghchi said Iran-Oman 'very close' but rejected live US talks and widened terms to six demands. IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched; Tehran says inspectors return only after a final deal.",
    other:
      "No confirmed new theater deaths on Day 165; Day 164's Mokha toll (11+ killed / 32+ wounded) and the contained Jizan strike carry. The Mecca pact went untested — Turkey and Pakistan did not answer the Jizan hit — and Riyadh was reported weighing a unilateral retaliation; the northern Iraqi axis stayed postponed. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz effectively closed (~2 transits Aug 2 vs ~73/day). Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7); Lebanon source-split.",
  },
};

export default data;
