import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, but the tilt is now toward a longer war rather than a nearer settlement. The single de-escalation leg — mediators plus an Oman corridor agreed on paper — thinned again as both principals reframed the contest as one of endurance (Al Jazeera, Reuters). Defense Secretary Hegseth said the US could hold the blockade 'indefinitely' by rotating carriers, while an IRGC adviser said Iran could 'prolong' the war until Trump leaves office and Araghchi accused Washington of 'miscalculating' it; Reuters reported no breakthrough on the June deal despite exchanged messages (CNN, ABC News). Per §3.5.3 a day on which each side publicly announces it can outlast the other, and the transit data shows a strait almost no one crosses, is not a de-escalating day. It is not cleanly escalating either — the US-Iran shooting stayed paused and no new mass-casualty strike landed — so the gauge holds mixed, with the de-escalation leg reduced to a corridor neither side is racing to build before Sunday's expiry.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export-node hit or a laden-tanker sinking — stayed untriggered and no confirmed new mass-casualty event landed, keeping the gauge off 'extreme.' But the pressures that would push it there held or rose. The 60-day MoU and Oman-corridor window expires Sunday (~Aug 16-17) with the terms unmoved and both capitals now speaking past the deadline, so a US-acceptable reopening by the date looks no likelier (Al Jazeera, US News). The IEA warned global oil stockpiles are draining fast against a roughly 1.8-million-barrel-a-day third-quarter shortfall, thinning the cushion under any later shock even with Brent near $89 (CNBC, IEA). Aramco's rerouting of Gulf crude toward the Red Sea feeds the live Houthi campaign, and Riyadh still weighed a unilateral answer the Mecca pact had not delivered (FDD). A resumed US-Israeli strike, a maritime sinking, a Saudi-Houthi exchange, a deadline that lapses and hardens both sides, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open, kinetic Houthi front against Saudi Arabia. Day 168's spillover pressure came from the collision of workarounds and coalition seams rather than a new strike: Aramco's move to reroute Gulf crude to the Red Sea points the primary Hormuz workaround straight into the Houthi 'siege for a siege,' binding the two chokepoints together (FDD). The Mecca Joint Defence Agreement stayed untested as Riyadh weighed a unilateral answer, and the Netanyahu-Trump rift carried with Israel still rejecting the Gaza plan on its election clock (The Washington Post). That no new mass-casualty strike landed is why spillover did not worsen outright; that a signed defense pact still will not invoke itself, that the two chokepoints are now operationally linked, and that the deadline arrives empty is why it did not ease. A stalled Oman corridor reaches none of these fronts.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / CNBC / Tasnim',
      event:
        "Defense Secretary Pete Hegseth said the United States can sustain its naval blockade of Iran 'indefinitely' by rotating aircraft carriers through the theater, while Iran's armed forces rejected President Trump's claim that shipping is moving through the Strait of Hormuz — insisting no vessel passes without Iranian permission — as maritime trackers and CNBC put transits near three-month lows against about 120 a day before the war.",
      summary:
        "Per §3.5.3 the blockade's reframing from a deal-forcing lever into an open-ended posture, set against a strait almost no one crosses, is the day's clearest tell that Washington is settling in rather than closing a deal.",
      impact:
        "An 'indefinite' blockade removes the time pressure a lever is supposed to create, signaling to Tehran that waiting is now viable for both sides and draining what remained of the deadline's forcing power.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / ABC News / Reuters',
      event:
        "A senior adviser to the IRGC commander said Iran could 'prolong' the war with the United States until President Trump leaves office; Foreign Minister Abbas Araghchi said Washington had 'miscalculated' the conflict through intelligence 'failures'; and Reuters, citing a senior Iranian official, reported that no breakthrough had been reached on reviving the June interim deal even as messages were exchanged between the two sides.",
      summary:
        "Per §3.5.3 a negotiating state that publicly commits to outlasting the other side's president, while its foreign minister recasts the war as an American error, is signaling entrenchment, not a search for terms.",
      impact:
        "Tehran matching Washington's open-ended posture with one of its own converts the standoff into a mutual waiting game, lengthening the war's likely horizon and lowering the odds that Sunday's deadline forces movement.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'US News / Al Jazeera / The Hill',
      event:
        "The Iran-Oman corridor stayed in its 'final stages' on paper without translating into passage, and Pakistan's defense minister said Washington and Tehran were 'close to some sort of arrangement' on Hormuz, even as Iran restated that reopening depends on US compliance with the June memorandum — with the 60-day MoU and corridor window heading toward its Sunday (~Aug 16-17) expiry.",
      summary:
        "Per §3.5.3 'final stages' and 'close' are exactly the mediator optimism to discount when Tehran simultaneously restates its price and signals it will wait Washington out.",
      impact:
        "A corridor agreed in coordinates but not in politics, arriving at a deadline both sides speak past, is likelier to lapse or be quietly extended than to open the strait on schedule.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / IEA / Trading Economics',
      event:
        "The International Energy Agency warned that global oil stockpiles are diminishing at a rapid clip and flagged a roughly 1.8-million-barrel-a-day shortfall this quarter, while Brent held near $89 a barrel and Saudi Aramco moved to reroute some Gulf crude to the Red Sea to bypass the shut Strait of Hormuz.",
      summary:
        "Per §3.5.5 the escalation vector stayed on inventory rather than price — a calm barrel masking a global buffer that is draining to cover the lost Gulf flow.",
      impact:
        "Every week of closure without a reopening lowers the inventory cushion, so a later Gulf-export hit or tanker sinking lands on a thinner base — and the chosen workaround, Red Sea rerouting, runs into the Houthi blockade.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "FDD's Long War Journal / The Washington Post",
      event:
        "The Houthi Red Sea 'siege for a siege' against Saudi shipping carried at an eighth Saudi-linked tanker since late July, with Riyadh still weighing a unilateral answer the untested Mecca defense pact had not delivered, while Israel's rejection of Trump's 15-point Gaza plan persisted into its October 27 election run-up.",
      summary:
        "Per §3.5.6 a mutual-defense bloc that still will not invoke itself against a sustained second-country blockade keeps looking like one that absorbs rather than deters.",
      impact:
        "A Saudi unilateral strike on Yemen or a Houthi counter on a Gulf export terminal remains the most acute single path from this standoff to a genuine supply shock — now with Aramco routing crude into the same contested lane.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused; Hegseth said the blockade can be held 'indefinitely' by rotating carriers, with no reported new US casualty; the DoD DCAS all-cause tally holds at 18 killed / 687 wounded, a counting-scope difference and not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty), against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure as the headline and flags DCAS as a divergence; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. Defense Secretary Hegseth said the US could hold the naval blockade 'indefinitely' by rotating carriers, and Trump maintained the strait was under US control even as CNBC put transits near three-month lows and Iran's military said no ship passes without permission. The blockade remains the pivot of Iran's precondition set, which Tehran ties to releasing frozen funds and has channeled through Beijing. The Joint Chiefs chairman is still pressing for an off-ramp; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved with the Senate in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest readiness and outside the Oman channel; the Gaza rift carried as Israel continued to reject Trump's 15-point plan and ruled out withdrawal before Hamas disarms, less than three months from an October 27 election",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest readiness, with the US and Israel still preparing possible strikes on Iranian energy infrastructure, and stays outside the US-Iran framework and unbound by the Oman channel, so its posture keeps a full-scale-campaign option live if the corridor talk collapses; the Lebanon-gap prior (§3.5.6) carries and sits inside Iran's precondition list. On the seams the Netanyahu-Trump rift carried: Israel continued to reject Trump's 15-point Gaza plan, said forces would not withdraw until Hamas fully disarms, and reaffirmed there would be 'no Palestinian state,' less than three months from an October 27 election with the coalition's majority at risk (The Washington Post). The disarmament-sequencing impasse stayed unresolved.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 168; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran signaled it could 'prolong' the war until Trump leaves office and Araghchi said the US 'miscalculated' the war; the Vahidi-led command reshuffle carries; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll issued on Day 168. The Qeshm Island civilian deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's development was political-diplomatic: an adviser to the IRGC commander said Iran could 'prolong' the war until Trump leaves office and Araghchi accused Washington of 'miscalculating' the conflict on intelligence 'failures,' while the Day 166 command reshuffle carries. Per §3.1's dual-sourcing discipline a separate rights thread of reported continued executions on national-security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the 60% HEU stock (ISIS ~440.9 kg, plus 184.1 kg at 20%) stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched, and Tehran holding that inspectors return only after a final deal.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians injured (Houthi attack, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Aug 9) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "+0 confirmed — no verified new theater deaths on Day 168; the Houthis held an eighth Saudi-tanker claim and warned of northern-Red-Sea targeting as Aramco moved to reroute Gulf crude into that lane; the Mecca pact stayed untested with Riyadh weighing a unilateral answer; the northern Iraqi-militia axis stayed postponed",
      status:
        "No confirmed new deaths in the theaters on Day 168; the Day 164 additions carry. The Houthis pressed their Red Sea campaign against Saudi shipping — an eighth Saudi-linked tanker claim since late July and a warning to target tankers in the northern Red Sea — while Saudi Aramco moved to reroute some Gulf crude to the Red Sea to bypass the shut strait, feeding the same contested lane; the Mecca Joint Defence Agreement stayed untested and Saudi Arabia was still reported weighing a unilateral answer; the northern Iraqi-militia axis kept its response postponed under Badr mediation. The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing, with the strait effectively closed and transits near three-month lows. Kuwait holds 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Saudi Arabia 11 civilians injured (Aug 7); Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 168 hardened into a war of endurance on the eve of the deadline. Defense Secretary Pete Hegseth said the United States could sustain its naval blockade of Iran 'indefinitely' by rotating carriers — turning a pressure tactic into an open-ended posture — while Iran's military rejected Trump's transit claims outright: no ship crosses the Strait of Hormuz 'without our permission,' the IRGC said, as CNBC reported traffic near three-month lows (Al Jazeera, CNBC). Tehran matched the escalation in patience, not fire — an adviser to the IRGC commander said Iran could 'prolong' the war until Trump leaves office, Foreign Minister Araghchi said Washington had 'miscalculated' through intelligence 'failures,' and Reuters reported no breakthrough on reviving the June interim deal despite exchanged messages (CNN, ABC News, Reuters). The Oman corridor stayed 'final-stage' on paper and unbuilt in practice, with Pakistan's defense minister calling a deal 'close' — the §3.5.3 optimism to distrust as Sunday's 60-day MoU window (~Aug 16-17) nears with the terms unmoved. Beneath the standoff the energy vector kept migrating from price to inventory: the IEA warned global oil stockpiles are draining fast while Brent held near $89, and Aramco moved to reroute Gulf crude toward a Red Sea the Houthis are blockading (CNBC, IEA, FDD). The Gaza rift, the untested Mecca pact and the bounded nuclear file carried. Direction holds mixed but the tilt is toward a longer war; seven-day and spillover risk hold critical; the thirty-day ceasefire probability eases to 7.",
  implications: [
    {
      title: "Two clocks aimed past the deadline — Washington's 'indefinite' blockade meets Tehran's 'prolong until Trump is gone'",
      body:
        "The day's hardening was structural, not kinetic: both capitals moved their time horizons past Sunday's deadline. Defense Secretary Pete Hegseth said the United States could hold its naval blockade of Iran 'indefinitely' by rotating aircraft carriers through the theater — recasting the blockade from a lever meant to force a deal into a posture designed to outlast one (Al Jazeera). Tehran answered in kind: an adviser to the IRGC commander said Iran could 'prolong' the war until President Trump leaves office, Foreign Minister Araghchi charged that Washington had 'miscalculated' the war on intelligence 'failures,' and Reuters, citing a senior Iranian official, reported no breakthrough in reviving the June interim deal even as messages passed between the sides (CNN, ABC News, Reuters). Analytical judgment: per §3.5.3 the pairing is the signal — when each party publicly reframes the contest as one of endurance rather than terms, the negotiation-capacity clock is not merely stalled but being deliberately wound down. Under the multi-clock framework the active-deadline clock loses force: a 60-day MoU window both sides now speak past is a date, not a forcing function. The Oman corridor's coordinates remain agreed on paper and Pakistan's defense minister still calls a deal 'close,' but per §3.5.3 that optimism is what to discount when Tehran restates its price and signals it will wait Washington out. What arrives on Sunday is not a settlement or a rupture but the expiry of the last shared clock.",
    },
    {
      title: "The claim-versus-reality gap widens while the shock migrates from price to inventory",
      body:
        "The Hormuz dispute stayed a contest of narratives over a near-empty waterway. Trump insisted the strait was open and under US control; Iran's armed forces rejected the claim outright, saying no vessel crosses without Iranian permission, while CNBC reported transits near three-month lows and Hegseth framed the blockade as indefinitely sustainable (CNBC, Al Jazeera). Analytical judgment: per §3.5.3 the distance between 'total control' and a strait almost no one is crossing is itself the intelligence — two governments describing incompatible realities over the same water, the transit data adjudicating against Washington's version. The sharper movement is beneath the price. Per §3.5.5 the energy-infrastructure clock worsened in kind, not degree: the IEA warned that global oil stockpiles are draining at a rapid clip against a roughly 1.8-million-barrel-a-day third-quarter shortfall, even as Brent held only near $89 (CNBC, IEA). The barrel is calm because inventories, not price, are absorbing the shut Gulf — a slow bleed that lowers the cushion under any later shock. Aramco's move to reroute some Gulf crude to the Red Sea to bypass Hormuz runs straight into the Houthi 'siege for a siege,' so the primary workaround for one closed chokepoint feeds the second (FDD). Per §3.5.6 the coalition prior holds: the eighth Saudi-tanker campaign ran on, Riyadh still weighed a unilateral answer, the Mecca pact stayed untested, and the IAEA-bounded nuclear file carried.",
    },
    {
      title: "Taiwan: no fresh signal, but a war reframed as open-ended thins the cushion under Taipei's molecule risk",
      body:
        "For Taipei the exposure held while its time horizon lengthened. Per §3.5.10 there was no Taiwan-specific development on Day 168; the shift is structural. Analytical judgment: per §3.5.5 the underlying numbers are unchanged and unforgiving — Taiwan is 99% import-dependent for natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). What moved is duration and depth: a blockade its own architects now call indefinite, an adversary that says it will wait out the US president, and a global inventory buffer draining to cover the shut Gulf together lower the base on which any later shock lands — and Taiwan sits at the far end of that base with the least slack. The exposure the war most threatens is still the molecule, not the barrel; a calm Brent near $89 masks a thinning cushion under the whole import system. The realized damage carries: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, and US LNG backfill at a premium. And the one workaround now on the table — Gulf crude rerouting to the Red Sea — points into a second contested chokepoint, not around the risk. A war both sides are settling in to fight lengthens, not shortens, Taipei's list of things that must go right.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Hegseth said the blockade can be held 'indefinitely'; Trump claimed control as CNBC put transits near three-month lows; the $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held. The Gaza rift carried: Israel continued to reject Trump's 15-point plan, ruled out withdrawal before Hamas disarms, and reaffirmed 'no Palestinian state,' less than three months from an October 27 election. Israel stays outside the Oman channel; the Lebanon-gap prior sits inside Iran's precondition list.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. Tehran signaled it could 'prolong' the war until Trump is out and Araghchi said the US 'miscalculated'; the Vahidi-led reshuffle carries. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "No confirmed new theater deaths on Day 168; Day 164's Mokha toll and the contained Jizan strike carry. The Houthis held an eighth Saudi-tanker claim and warned of northern-Red-Sea targeting as Aramco moved to reroute Gulf crude into that lane; the Mecca pact stayed untested with Riyadh weighing a unilateral answer; the Iraqi axis stayed postponed. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz effectively closed, transits near three-month lows. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7); Lebanon source-split.",
  },
};

export default data;
