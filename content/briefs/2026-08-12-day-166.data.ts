import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed but tilts toward escalation, and the tilt is the story: the prior week's split resolved toward its hard side. The lone de-escalation leg thinned to the mediators themselves — Oman, Qatar and Pakistan stay engaged and the Iran-Oman route coordinates remain technically agreed (CNBC, NBC News). Everything around them hardened. President Trump toughened his stance and US objections to the Omani route stalled the arrangement; SNSC secretary Mohsen Rezaei made a full reopening conditional on releasing Iran's frozen funds; Brent ran toward $100 on the closure's duration; and Iran reconstituted its high command around harder-line figures, with Vahidi taking the IRGC (Bloomberg, CNN, Press TV). Per §3.5.3 a day on which a mediator calls the sides 'close' while both toughen their positions, the barrel climbs, and the negotiating state reshuffles its command is not a de-escalating day. It is not cleanly escalating either — the US-Iran shooting stayed paused, no new mass-casualty strike landed, and Trump is reported seeking an exit — so the gauge holds mixed, but with the de-escalation leg reduced to a single fraying thread.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export node hit or a laden-tanker sinking — stayed untriggered and no confirmed new mass-casualty event landed, which keeps the gauge off 'extreme.' But the pressures that would push it there all rose. Brent settled near $88.9 and analysts openly flagged a run toward $100 as the closure dragged on, leaving little slack before a real supply event reprices the barrel (CNBC, OilPrice). The US Navy fired on a vessel running the blockade, a reminder the enforcement line is still live (Fox News). The Houthis pressed an eighth Saudi-tanker claim and Riyadh was still weighing a unilateral answer the Mecca pact had not delivered, keeping a Saudi-Houthi energy exchange the week's most acute widening path (FDD, HSToday). The toll-free corridor window around August 16-17 is roughly four to five days out with the political price unpaid and Washington hardening, so a US-acceptable outcome is no likelier by the deadline. A resumed US-Israeli strike, a maritime sinking, a Saudi-Houthi exchange, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open, kinetic Houthi front against Saudi Arabia. Day 166's spillover pressure came from the coalition and command seams rather than a new strike: the Mecca Joint Defence Agreement stayed untested as Riyadh weighed a unilateral answer to the Houthi campaign, and Iran deepened its ties with Pakistan even as Islamabad co-signs the Saudi pact — a cross-cutting alignment that complicates any bloc logic (Fox News, FDD). Tehran's reconstituted high command signals a regime digging in rather than winding down, and the US-Israel seam carried with Israel still rejecting the Gaza plan on its election clock (NPR). That no new mass-casualty strike landed is why spillover did not worsen outright; that a signed defense pact still will not invoke itself, a nuclear-armed member hedges toward Tehran, and Iran hardens its command is why it did not ease. A stalled Oman corridor reaches none of these fronts.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / CNN / CNBC / NBC News',
      event:
        "The week's 'very close' Hormuz-deal narrative broke down: President Trump hardened his line on Iran and US objections to the southern Omani route stalled the Iran-Oman arrangement, even as Pakistan's defense minister said the two sides were 'close to some sort of arrangement,' while SNSC secretary Mohsen Rezaei made a full reopening conditional on Washington unfreezing Iran's blocked funds and Trump was reported pivoting back to sanctions and seeking an exit.",
      summary:
        "Per §3.5.3 the mediator 'close' arrived on the same day both sides toughened their positions — the optimism-versus-reality gap the rule exists to flag, now with the US sponsor stepping back from the corridor deal.",
      impact:
        "A deal whose route coordinates are agreed but whose political sponsor in Washington has hardened and pivoted to sanctions leaves the war's off-ramp stalled, hostage to demands — frozen funds, blockade lift, force withdrawal — the US will not meet.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Al Jazeera / OilPrice / Trading Economics',
      event:
        "Brent crude settled near $88.9 a barrel, up more than 6% on the week, with analysts openly flagging a run toward $100 as the Strait of Hormuz closure dragged on and Iranian demands clouded the outlook; the move came with no new supply actually lost, extending the war-risk premium rather than pricing a fresh shock.",
      summary:
        "Per §3.5.5 the barrel grinding toward $100 on the duration of the shut-in, absent any new supply loss, shows how little slack is left in the risk premium.",
      impact:
        "A market this stretched on signaling alone means an actual Gulf export-node hit or a laden-tanker sinking now sends Brent past $100 in a session, while only a signed reopening pulls it back toward the $70s.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Press TV / Tabnak / The National / Islam Times',
      event:
        "A decree named six new top Iranian commanders — Ahmad Vahidi taking the IRGC and promoted major general, in a decree citing the 'martyrdom' of former commander Mohammad Pakpour, with Ali Abdollahi as armed-forces Chief of Staff, Mostafa Izadi as deputy IRGC commander and new IRGC Navy and Basij chiefs — though outlets split on whether Ali Khamenei or his son Mojtaba issued it.",
      summary:
        "Per §3.5.3 the split over who signed the decree is itself the signal, bearing directly on the 'unreachable Khamenei' question that gates the SNSC's mandate to approve any Hormuz deal.",
      impact:
        "A regime reconstituting its decapitated high command around harder-line figures mid-negotiation is not one preparing to soften its terms, and it hardens the very authority whose sign-off the corridor accord still awaits.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'Fox News',
      event:
        "The US Navy opened fire on a ship attempting to break the naval blockade of Iranian ports even as Tehran deepened its ties with Pakistan — a cross-cutting alignment given Islamabad's co-signature on the Saudi-led Mecca defense pact — keeping the blockade-enforcement line kinetically live.",
      summary:
        "Per §3.5.6 the blockade the US keeps enforcing is the pivot of Iran's precondition list, so each enforcement action both sustains the leverage and deepens the grievance Tehran cites for refusing live talks.",
      impact:
        "An enforcement front that keeps firing while the deal track stalls narrows the space between a managed blockade and an incident that reignites the direct US-Iran exchange.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "FDD's Long War Journal / HSToday / Bloomberg",
      event:
        "The Houthis pressed their Red Sea campaign against Saudi shipping, claiming an eighth Saudi-linked tanker since late July and warning they would target tankers in the northern Red Sea, while Riyadh was still reported weighing a unilateral retaliation the untested Mecca defense pact's members had not delivered; reports of crew killed in a maritime attack were unconfirmed in their specifics.",
      summary:
        "Per §3.5.6 a mutual-defense bloc that still will not invoke itself on a second Saudi-directed provocation continues to look like one that absorbs rather than deters.",
      impact:
        "A Saudi unilateral strike on Yemen or a Houthi counter on a Gulf export terminal remains the most acute single path from this standoff to a genuine oil-supply shock and a wider war.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused; the US Navy fired on a blockade-runner with no reported casualties; the DoD DCAS all-cause tally holds at 18 killed / 687 wounded, a counting-scope difference and not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed; Trump was reported pivoting to sanctions and seeking an exit",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty), against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure as the headline and flags DCAS as a divergence; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US naval blockade continued — the Navy fired on a vessel trying to run it — and remains the pivot of Iran's precondition set, which Tehran now ties to releasing frozen funds. Trump hardened his stance before being reported to pivot back to sanctions and seek an exit; the Joint Chiefs chairman is still pressing for an off-ramp; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved with the Senate in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest readiness and outside the Oman channel; the Gaza rift carried as Israel continued to reject Trump's 15-point plan and ruled out withdrawal before Hamas disarms, three months from an October 27 election",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest readiness, with the US and Israel still preparing possible strikes on Iranian energy infrastructure, and stays outside the US-Iran framework and unbound by the Oman channel, so its posture keeps a full-scale-campaign option live if the corridor talk collapses; the Lebanon-gap prior (§3.5.6) carries and sits inside Iran's precondition list. On the seams the Netanyahu-Trump rift carried: Israel continued to reject Trump's 15-point Gaza plan, said forces would not withdraw until Hamas fully disarms, and reaffirmed there would be 'no Palestinian state,' less than three months from an October 27 election with the coalition's majority at risk (NPR). The disarmament-sequencing impasse — Hamas refuses to disarm before an Israeli withdrawal; Israel refuses to withdraw without disarmament — stayed unresolved.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 166; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; a decree named six new top commanders (Vahidi to the IRGC, replacing the 'martyred' Pakpour), with outlets split on whether Ali or Mojtaba Khamenei signed it; SNSC secretary Rezaei tied any reopening to releasing Iran's frozen funds",
      status:
        "No updated official Iranian toll issued on Day 166. The Qeshm Island civilian deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's development was political-military: a decree installed six new top commanders — Ahmad Vahidi at the IRGC, citing the 'martyrdom' of Mohammad Pakpour, with Ali Abdollahi as armed-forces Chief of Staff — and outlets split on whether Ali Khamenei or his son Mojtaba issued it, a divergence bearing on the succession and sign-off question. Rezaei made a full Hormuz reopening conditional on releasing frozen funds. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the produced 60% HEU stock (ISIS ~440.9 kg, plus 184.1 kg at 20%) stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched, and Tehran holding that inspectors return only after a final deal.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians injured (Houthi attack, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Aug 9) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "+0 confirmed — no verified new theater deaths on Day 166; a Houthi maritime attack was reported to have killed several crew but the specifics are unconfirmed and are not folded into the confirmed cumulative; the Houthis pressed an eighth Saudi-tanker claim, the Mecca pact stayed untested with Riyadh weighing a unilateral answer, and the northern Iraqi-militia axis stayed postponed",
      status:
        "No confirmed new deaths in the theaters on Day 166; the Day 164 additions carry. A Houthi maritime attack was reported to have killed several crew members, but the vessel and toll specifics are unconfirmed, so per §3.1's two-source discipline the figure is noted but not folded into the confirmed cumulative. The Houthis pressed their Red Sea campaign against Saudi shipping — an eighth Saudi-linked tanker claim since late July, with a warning to target tankers in the northern Red Sea — while the Mecca Joint Defence Agreement stayed untested and Saudi Arabia was still reported weighing a unilateral answer; the northern Iraqi-militia axis kept its response postponed under Badr mediation. The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing, with the strait effectively closed. Kuwait holds 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Saudi Arabia 11 civilians injured (Aug 7); Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 166 resolved the prior week's split toward its hard edge: the Hormuz deal hope that had animated days of 'very close' reporting broke down, and the other vectors hardened with it. President Trump toughened his line on Iran and US objections to the Omani route stalled the Iran-Oman arrangement, even as Pakistan's defense minister insisted the two sides were 'close to some sort of arrangement' — the optimism §3.5.3 says to distrust — while Iran's Supreme National Security Council secretary, Mohsen Rezaei, made a full reopening conditional on Washington unfreezing Iran's blocked funds (Bloomberg, CNN, CNBC, NBC News). The market kept climbing: Brent settled near $88.9, up more than 6% on the week, with analysts flagging a run toward $100 as the closure dragged on and no new supply was actually lost (CNBC, Al Jazeera, OilPrice). Iran reconstituted its decapitated high command — a decree named six new top commanders, Ahmad Vahidi taking the IRGC and replacing the 'martyred' Mohammad Pakpour, though outlets split on whether Ali Khamenei or his son Mojtaba signed it (Press TV, The National, Islam Times). The maritime front stayed kinetic: the US Navy fired on a ship running the blockade as Tehran deepened its Pakistan ties, and the Houthis pressed an eighth Saudi-tanker claim while Riyadh still weighed a unilateral answer the untested Mecca pact had not delivered (Fox News, Bloomberg, FDD). Trump was reported pivoting back to sanctions and seeking an exit. Direction holds mixed but tilts toward escalation; seven-day and spillover risk hold critical; the thirty-day ceasefire probability eases to 9.",
  implications: [
    {
      title: "The split resolves toward hardening — the deal hope breaks while the price and the command both rise",
      body:
        "Day 164 cooled the 'imminent' deal and Day 165 clarified the split; Day 166 resolved it toward the hard side. The maritime engineering still exists on paper — Iran and Oman have agreed the corridor's route coordinates — but the political track that turns coordinates into passage went backwards. President Trump hardened his stance, US objections to the southern Omani route stalled the Iran-Oman arrangement, and the SNSC secretary, Mohsen Rezaei, made a full reopening conditional on Washington unfreezing Iran's blocked funds (Bloomberg, CNN, CNBC). Analytical judgment: per §3.5.3 the figure to distrust remains any 'close,' and Pakistan's defense minister calling the sides 'close to some sort of arrangement' on a day both toughened their positions is exactly the mediator optimism the rule was written for. Under the multi-clock framework the negotiation-capacity clock worsened: the mediators — Oman, Qatar, Pakistan — stay engaged, but the price Iran attaches keeps rising and the mandate behind it just changed hands, with the SNSC and the military command reshuffled. Trump's reported pivot back to sanctions and search for an exit confirms the direction — it abandons the near-term corridor deal for economic pressure, an off-ramp that is not a settlement. This is no longer a corridor whose logistics are done and whose price is merely unpaid; it is one whose sponsor in Washington has stepped back from the table.",
    },
    {
      title: "Oil runs toward $100 and Iran rebuilds a hardline command — two escalation vectors without a new strike",
      body:
        "The day's escalation again came from the market and from Tehran's politics, not a fresh salvo. Brent settled near $88.9, up more than 6% on the week, with analysts openly flagging a run toward $100 as the closure dragged on — and, per §3.5.5, the move matters precisely because no new supply was lost; a barrel grinding higher on the sheer duration of the shut-in has little slack left before an actual Gulf export-node hit or a laden-tanker sinking sends it past $100 (CNBC, Al Jazeera, OilPrice). The sharper signal is the command reshuffle. A decree installed six new top commanders — Vahidi at the IRGC, replacing the 'martyred' Pakpour, and Abdollahi as armed-forces Chief of Staff — and outlets split on whether Ali Khamenei or his son Mojtaba issued it (Press TV, The National, Islam Times). Analytical judgment: per §3.5.3 that attribution gap is itself the intelligence — it bears directly on the 'unreachable Khamenei' question that gates the SNSC's mandate to sign any deal, and a regime reconstituting its high command around harder-line figures mid-negotiation is not one preparing to lower its terms. The US Navy's decision to fire on a blockade-runner as Tehran deepened its Pakistan ties (Fox News) keeps the maritime front live; per §3.5.6 the coalition prior holds, with the Mecca pact still untested and Riyadh weighing a unilateral answer it has not yet delivered.",
    },
    {
      title: "Taiwan: the barrel runs toward $100 while the molecule risk holds — the exposure keeps hardening",
      body:
        "For Taipei the ledger held but the price line kept moving. Per §3.5.10 there was no Taiwan-specific development on Day 166; the change is that the crude bill re-rated again, with Brent grinding toward $100 on the duration of the closure rather than on any restored supply. Analytical judgment: per §3.5.5 the numbers behind Taiwan's exposure are unchanged and unforgiving — 99% import-dependent for natural gas, about a third of its 23.6 Mt of LNG transiting Hormuz, nearly 8 Mt of it Qatari, against roughly eleven days of gas cover versus about 120 days of oil (CSIS, IFRI). The exposure the war most threatens is still the molecule, not the barrel, but a barrel heading toward $100 lifts the whole import bill while the gas risk sits unresolved behind a strait Iran now says stays shut and a Red Sea the Houthis keep hot. The realized damage carries: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, and US LNG backfill at a premium. A deal hope fading, a barrel running toward $100, a newly hardline Iranian command, and a still-hot Red Sea together lengthen — not shorten — the list of things that must go right before Taipei's exposure eases.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The blockade continued — the Navy fired on a runner — and Iran now ties reopening to releasing frozen funds; Trump hardened then was reported pivoting to sanctions; the $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held. The Gaza rift carried: Israel continued to reject Trump's 15-point plan, ruled out withdrawal before Hamas disarms, and reaffirmed 'no Palestinian state,' three months from an October 27 election. Israel stays outside the Oman channel; the Lebanon-gap prior sits inside Iran's precondition list.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. A decree named six new commanders (Vahidi to the IRGC), with a source-split over whether Ali or Mojtaba Khamenei signed it; Rezaei tied reopening to frozen funds. IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "No confirmed new theater deaths on Day 166; a reported Houthi maritime killing is unconfirmed in specifics and not folded into the cumulative. Day 164's Mokha toll and the contained Jizan strike carry. The Houthis pressed an eighth Saudi-tanker claim; the Mecca pact stayed untested with Riyadh weighing a unilateral answer; the Iraqi axis stayed postponed. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz effectively closed. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7); Lebanon source-split.",
  },
};

export default data;
