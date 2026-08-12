import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed but tilts toward escalation, and the tilt sharpened: the lone de-escalation leg is now the mediators alone. Pakistan's interior minister shuttled to Tehran and the Iran-Oman route coordinates remain technically agreed (Al Jazeera, CNN). Everything around them hardened. New SNSC secretary Mohsen Rezaei took Iran's full demand set — end the war and blockade, release frozen funds, a region-wide ceasefire — to China's ambassador, who reaffirmed Beijing's 'firm backing,' internationalizing the price rather than trimming it (IRNA, The Diplomatic Insight). President Trump declared 'total control' of a strait Kpler shows eight ships crossed, pressed an eighth sanctions round, and kept the blockade on, while the closure began drawing down global oil stockpiles (Arab News, CNN). Per §3.5.3 a day on which the negotiating state publishes hardened terms through a great-power patron, the US president claims a victory the transit data contradicts, and a mediator flies in against a lapsing deadline is not a de-escalating day. It is not cleanly escalating either — the US-Iran shooting stayed paused and no new mass-casualty strike landed — so the gauge holds mixed, with the de-escalation leg thinned to a single shuttling thread.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export-node hit or a laden-tanker sinking — stayed untriggered and no confirmed new mass-casualty event landed, which keeps the gauge off 'extreme.' But the pressures that would push it there all held or rose. The 60-day MoU and Oman-corridor window expires on Sunday with the terms hardened and now anchored to Beijing's backing, so a US-acceptable reopening by the deadline looks no likelier (Al Jazeera, NBC News). The closure is draining global oil stockpiles, thinning the inventory cushion under any later shock even with Brent only in the high $80s (CNN, CNBC). The Houthis pressed an eighth Saudi-tanker claim and warned of northern-Red-Sea targeting while Riyadh still weighed a unilateral answer the Mecca pact had not delivered (HSToday, FDD). A resumed US-Israeli strike, a maritime sinking, a Saudi-Houthi exchange, a failed deadline that hardens both sides, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open, kinetic Houthi front against Saudi Arabia. Day 167's spillover pressure came from alignment and the coalition seams rather than a new strike: Iran deepened its lean on China, whose ambassador publicly backed Tehran's sovereignty and opposed the US-Israeli campaign even as Beijing co-exists with the Gulf states the Houthis are hitting — a great-power hedge that complicates any bloc logic (The Diplomatic Insight). The Mecca Joint Defence Agreement stayed untested as Riyadh weighed a unilateral answer, and the Netanyahu-Trump rift carried with Israel still rejecting the Gaza plan on its election clock (NPR). That no new mass-casualty strike landed is why spillover did not worsen outright; that a signed defense pact still will not invoke itself, a nuclear-armed patron leans in behind Tehran, and the deadline arrives empty is why it did not ease. A stalled Oman corridor reaches none of these fronts.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'IRNA / The Diplomatic Insight / IranWire',
      event:
        "Iran routed its Hormuz terms through Beijing: new SNSC secretary Mohsen Rezaei used a meeting with Chinese ambassador Cong Peiwu to restate Tehran's conditions for a full reopening — an end to the US war and naval blockade, release of Iran's frozen funds, and a region-wide ceasefire including Lebanon and Gaza — while praising Beijing's support; Cong congratulated Rezaei and reaffirmed China's 'firm backing' of Iranian sovereignty and its opposition to the US-Israeli campaign.",
      summary:
        "Per §3.5.6 routing a hardened, maximalist demand set through a veto-wielding great-power patron formalizes the price rather than negotiating it down — the terms are now a published, China-endorsed position, not a bargaining opener.",
      impact:
        "A demand set anchored to Beijing's backing is harder for Tehran to trade away quietly and gives the corridor's stalled political track a great-power audience, narrowing Washington's room to extract concessions before the window lapses.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / NBC News',
      event:
        "Pakistan's interior minister Mohsin Naqvi travelled to Tehran to press US-Iran talks and 'prevent efforts to undermine the peace process' before the 60-day MoU and Oman-corridor window expires on Sunday, but Iranian officials held firm on their conditions and Foreign Minister Abbas Araghchi's earlier 'very close' read of the Oman arrangement stayed conditioned on US compliance with the June memorandum.",
      summary:
        "Per §3.5.3 Araghchi's 'very close' and the mediators' optimism are exactly the claims to discount when Tehran simultaneously 'holds firm' — the deadline is arriving with the terms unchanged.",
      impact:
        "A mediator shuttling in the last 72 hours before a lapsing window, against firmly restated conditions, is likelier to buy an extension than a breakthrough; a US-acceptable reopening by Sunday looks no likelier than it did a week ago.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Arab News / CNN / RFE-RL',
      event:
        "President Trump insisted the Strait of Hormuz was 'open' and that US forces were in 'total control,' claiming the Navy had mineswept the waterway and barring ships from entering Iranian ports, while Washington imposed an eighth round of sanctions and kept the blockade said to cost Iran roughly $500 million a day — even as maritime tracker Kpler counted only eight transits on Monday against about 120 a day before the war.",
      summary:
        "Per §3.5.3 the distance between 'total control' and eight vessels is itself the intelligence: the claim is domestic-facing signaling, not a description of a functioning strait.",
      impact:
        "A president declaring victory over a strait eight ships crossed narrows his own room to accept the managed, Iranian-water-routed corridor a real reopening requires, reinforcing the pivot from a deal to economic strangulation.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNN / CNBC / Trading Economics',
      event:
        "With the strait effectively shut, CNN reported the world drawing down oil stockpiles to cover the lost Gulf flow as the closure entered a third month, while Brent held in the high $80s a barrel — near $88-89 — on doubt a deal was near and with a run toward $100 still in analysts' view; no new supply was lost, but inventories are now the release valve.",
      summary:
        "Per §3.5.5 the escalation vector shifted from price to inventory — a shut strait that no longer moves the barrel much is quietly eating the buffer that has kept it capped.",
      impact:
        "Stockpile drawdown is a slower-burn version of the same tail: every week of closure without a reopening lowers the cushion, so a later Gulf-export hit or tanker sinking lands on a thinner inventory base and reprices harder.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "HSToday / FDD's Long War Journal",
      event:
        "The Houthi Red Sea campaign against Saudi shipping carried: the group's eighth Saudi-linked tanker claim since late July stood, with a warning to target tankers in the northern Red Sea and a claim that 29 Saudi tankers had been forced to turn back, while Riyadh was still reported weighing a unilateral answer the untested Mecca defense pact had not delivered.",
      summary:
        "Per §3.5.6 a mutual-defense bloc that still will not invoke itself on a sustained, second-country blockade keeps looking like one that absorbs rather than deters.",
      impact:
        "A Saudi unilateral strike on Yemen or a Houthi counter on a Gulf export terminal remains the most acute single path from this standoff to a genuine supply shock and a wider war — now against a drawn-down inventory base.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused; the blockade and an eighth sanctions round continued with no reported new US casualty; the DoD DCAS all-cause tally holds at 18 killed / 687 wounded, a counting-scope difference and not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed; Trump claimed 'total control' of the strait",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty), against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure as the headline and flags DCAS as a divergence; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US naval blockade continued and Washington added an eighth sanctions round, with Trump claiming the strait was 'open' and under 'total control' even as Kpler counted eight transits against ~120 a day pre-war; the blockade remains the pivot of Iran's precondition set, which Tehran now ties to releasing frozen funds and channels through Beijing. The Joint Chiefs chairman is still pressing for an off-ramp; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved with the Senate in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest readiness and outside the Oman channel; the Gaza rift carried as Israel continued to reject Trump's 15-point plan and ruled out withdrawal before Hamas disarms, less than three months from an October 27 election",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest readiness, with the US and Israel still preparing possible strikes on Iranian energy infrastructure, and stays outside the US-Iran framework and unbound by the Oman channel, so its posture keeps a full-scale-campaign option live if the corridor talk collapses; the Lebanon-gap prior (§3.5.6) carries and sits inside Iran's precondition list, now restated to China's ambassador as a region-wide ceasefire demand. On the seams the Netanyahu-Trump rift carried: Israel continued to reject Trump's 15-point Gaza plan, said forces would not withdraw until Hamas fully disarms, and reaffirmed there would be 'no Palestinian state,' less than three months from an October 27 election with the coalition's majority at risk (NPR). The disarmament-sequencing impasse stayed unresolved.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 167; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; new SNSC secretary Rezaei took Iran's demand set to China's ambassador and tied any reopening to releasing frozen funds; the Vahidi-led command reshuffle carries; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll issued on Day 167. The Qeshm Island civilian deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's development was diplomatic-political: Rezaei laid out the full reopening conditions to Chinese ambassador Cong Peiwu — end the war and blockade, release frozen funds, region-wide ceasefire — and Beijing reaffirmed its backing; the Vahidi-led command reshuffle from Day 166 carries. Per §3.1's dual-sourcing discipline a separate rights thread of reported continued executions on national-security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the 60% HEU stock (ISIS ~440.9 kg, plus 184.1 kg at 20%) stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched, and Tehran holding that inspectors return only after a final deal.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians injured (Houthi attack, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Aug 9) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "+0 confirmed — no verified new theater deaths on Day 167; the Houthis pressed an eighth Saudi-tanker claim, warned of northern-Red-Sea targeting and claimed 29 Saudi tankers turned back; the Mecca pact stayed untested with Riyadh weighing a unilateral answer; the northern Iraqi-militia axis stayed postponed",
      status:
        "No confirmed new deaths in the theaters on Day 167; the Day 164 additions carry. The Houthis pressed their Red Sea campaign against Saudi shipping — an eighth Saudi-linked tanker claim since late July, a warning to target tankers in the northern Red Sea, and a claim that 29 Saudi tankers had been forced to turn back — while the Mecca Joint Defence Agreement stayed untested and Saudi Arabia was still reported weighing a unilateral answer; the northern Iraqi-militia axis kept its response postponed under Badr mediation. The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing, with the strait effectively closed and only eight transits recorded on Monday. Kuwait holds 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Saudi Arabia 11 civilians injured (Aug 7); Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 167 broadened the diplomacy without softening the terms — and hardened the American posture around it. Iran routed its Hormuz conditions through Beijing: new Supreme National Security Council secretary Mohsen Rezaei used a meeting with China's ambassador, Cong Peiwu, to restate the demands — end the war and blockade, release Iran's frozen funds, and a region-wide ceasefire including Lebanon and Gaza — while Cong reaffirmed China's 'firm backing' of Iranian sovereignty (IRNA, The Diplomatic Insight, IranWire). Pakistan's interior minister, Mohsin Naqvi, shuttled to Tehran to move US-Iran talks before the 60-day MoU and Oman-corridor window lapses this Sunday, but Iran 'held firm,' and Foreign Minister Araghchi's earlier 'very close' read of the Oman arrangement stayed conditioned on US compliance with the June memorandum (Al Jazeera, NBC News). President Trump insisted the strait was 'open' and under 'total control,' said the Navy had mineswept it and barred ships from entering Iran, and pressed an eighth sanctions round — even as Kpler counted just eight transits Monday against about 120 a day pre-war and CNN reported the world drawing down oil stockpiles as the closure entered a third month (Arab News, CNN, RFE-RL). Per §3.5.3 the gap between 'total control' and eight ships, and between 'very close' and Iran's unmet price, is the day's intelligence. Brent held in the high $80s with the $100 watch intact; the Houthi Red Sea campaign, the untested Mecca pact, the Gaza rift and the bounded nuclear file all carried. Direction holds mixed but tilts toward escalation; seven-day and spillover risk hold critical; the thirty-day ceasefire probability eases to 8.",
  implications: [
    {
      title: "The price goes to Beijing — a demand set internationalized is a demand set harder to trade down",
      body:
        "Day 166 saw Iran raise its price and reshuffle its command; Day 167 saw it publish that price through a great-power patron. New SNSC secretary Mohsen Rezaei used a meeting with China's ambassador, Cong Peiwu, to lay out the full conditions for reopening — an end to the US war and blockade, release of Iran's frozen funds, and a region-wide ceasefire spanning Lebanon and Gaza — while Cong reaffirmed China's 'firm backing' of Iranian sovereignty and opposition to the US-Israeli campaign (IRNA, The Diplomatic Insight). Analytical judgment: per §3.5.6 routing a maximalist demand set through Beijing formalizes it rather than negotiating it down — the terms are now a published, China-endorsed position, not a bargaining opener a mediator can quietly shave. Under the multi-clock framework the negotiation-capacity clock worsened even as the bench widened: Pakistan's interior minister, Mohsin Naqvi, shuttled to Tehran to move talks before the 60-day MoU and Oman-corridor window lapses on Sunday, but Iran 'held firm,' and per §3.5.3 Araghchi's standing 'very close' is exactly the optimism to discount when the price is simultaneously restated and unmet (Al Jazeera, NBC News). The corridor's route coordinates remain agreed on paper, but its Washington sponsor has stepped back and its Tehran sponsor has anchored the terms to a patron — a stalled off-ramp, not a settlement, arriving at a deadline with nothing to sign.",
    },
    {
      title: "Trump declares control of a strait eight ships crossed — the claim-versus-reality gap widens as inventories begin to bleed",
      body:
        "The day's escalation again came from posture and the market, not a fresh salvo. President Trump insisted the strait was 'open' and under 'total control,' said the Navy had mineswept it and barred ships from entering Iranian ports, and pressed an eighth sanctions round with the blockade said to cost Iran roughly $500 million a day — while maritime tracker Kpler counted only eight transits on Monday against about 120 a day before the war (Arab News, CNN, RFE-RL). Analytical judgment: per §3.5.3 the distance between 'total control' and eight ships is itself the intelligence — the claim is domestic-facing signaling, and a president declaring victory over a strait almost no one is crossing narrows his own room to accept the managed, Iranian-water-routed corridor any real reopening requires. The sharper shift is beneath the price. Per §3.5.5 the energy-infrastructure clock worsened in a new way: with Brent only in the high $80s, CNN reported the world drawing down oil stockpiles to cover the lost Gulf flow as the shut-in entered a third month — the escalation vector migrating from price to inventory, quietly eating the buffer that has kept the barrel capped. Per §3.5.6 the coalition prior holds: the Houthi eighth-tanker campaign ran on, Riyadh still weighed a unilateral answer, and the Mecca pact stayed untested; the bounded nuclear file carries, with the IAEA locked out since February 28.",
    },
    {
      title: "Taiwan: no fresh signal, but a shut strait now eats inventory as well as pricing the barrel — the exposure hardens",
      body:
        "For Taipei the ledger held while the mechanism of risk shifted. Per §3.5.10 there was no Taiwan-specific development on Day 167; the change is structural, not local. Analytical judgment: per §3.5.5 the numbers behind Taiwan's exposure are unchanged and unforgiving — 99% import-dependent for natural gas, about a third of its 23.6 Mt of LNG transiting Hormuz, nearly 8 Mt of it Qatari, against roughly eleven days of gas cover versus about 120 days of oil (CSIS, ISIS). What moved is the cushion: a strait that no longer moves the barrel much is now drawing down global inventories, so the buffer under the whole import system is thinning even without a price spike. The exposure the war most threatens is still the molecule, not the barrel — but a world burning through oil stocks to cover a shut Gulf lowers the base on which any later shock lands, and Taiwan sits at the far end of that base with the least slack. The realized damage carries: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, and US LNG backfill at a premium. A hardened, Beijing-backed demand set, a deadline arriving empty, a still-hot Red Sea and a draining inventory buffer together lengthen — not shorten — the list of things that must go right before Taipei's exposure eases.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The blockade and an eighth sanctions round continued; Trump claimed 'total control' as Kpler counted eight transits; the $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held. The Gaza rift carried: Israel continued to reject Trump's 15-point plan, ruled out withdrawal before Hamas disarms, and reaffirmed 'no Palestinian state,' less than three months from an October 27 election. Israel stays outside the Oman channel; the Lebanon-gap prior sits inside Iran's precondition list, now restated to China as a region-wide ceasefire demand.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. Rezaei took the reopening conditions to China's ambassador and tied them to releasing frozen funds; the Vahidi-led command reshuffle carries. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "No confirmed new theater deaths on Day 167; Day 164's Mokha toll and the contained Jizan strike carry. The Houthis pressed an eighth Saudi-tanker claim, warned of northern-Red-Sea targeting and claimed 29 Saudi tankers turned back; the Mecca pact stayed untested with Riyadh weighing a unilateral answer; the Iraqi axis stayed postponed. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz effectively closed, eight transits Monday. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7); Lebanon source-split.",
  },
};

export default data;
