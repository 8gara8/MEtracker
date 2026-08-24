import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war. Day 179 is the day the economic war stopped being a promise: Treasury Secretary Bessent unveiled the isolation plan as 'Operation Economic Outcast,' blacklisting nearly 60 people, businesses, and vessels and widening the secondary-sanctions net across shipping, oil, gold, crypto, aviation, and technology (NBC News, CBS News, The Hill). It is not cleanly escalating — the pillar the plan was built to break was left standing, with no major Chinese bank named and Bessent's 'no one is above the reach of U.S. sanctions' held as a warning rather than a designation, and the oil market sold the news. It is not de-escalating either — Beijing invoked its 2021 blocking statute for the first time and ordered its firms to defy the measures, Iran's security chief vowed a 'seismic' answer, and the US track to Tehran stays closed. Mixed holds; the plan landed as designations but spared the China collision it was engineered to force, hardening the siege without firing its decisive round.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, a lost escort convoy, a confirmed Saudi naval loss, a Hezbollah reprisal that breaks the June truce, or a confirmed American combat death — stayed untriggered, keeping the gauge off 'extreme,' but the rollout loaded the next confrontation rather than resolving it. A US secondary-sanctions strike on a major Chinese bank, an Iranian 'seismic' answer converted from rhetoric to a maritime, cyber, proxy, or oil move, a Hormuz seizure escalating under Iran's renewed fine-detain-confiscate threat, an interdiction of the CENTCOM escort corridor, or a strike on a Saudi or Emirati export route are the dominant seven-day risks. Beijing's blocking statute pre-commits the enforcement collision the plan must still survive.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and an economic front now formalized on both sides — a US designation campaign met by a Chinese blocking statute. The plan internationalizes the fight by design: its bite runs through the Chinese banks and yuan rails Beijing legally shielded today, and Iran's threat to the Gulf-neighbor bypass routes still aims to deter the allied alignment the plan demands. The CENTCOM escort corridor keeps Washington in daily maritime custody of Gulf exports; the Lebanon truce stayed frayed to a threat exchange and the Gaza demilitarization mechanism kept that seam live with no firm pre-election Israeli commitment. No new kinetic front opened, which is why spillover did not worsen outright; that the China collision is now written into statute on both sides is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'NBC News / CBS News / The Hill',
      event:
        "Treasury Secretary Scott Bessent unveiled the long-promised isolation plan as 'Operation Economic Outcast,' blacklisting nearly 60 people, businesses, and vessels and expanding the categories for secondary sanctions across shipping, oil, gold, digital assets, aviation, and technology; he called it 'an economic onslaught against Iran's financial connections around the globe' and said Iran now faces 'two paths: complete global isolation and a subsistence economy, or a path back to normalcy.'",
      summary:
        "Per §3.5.3 treat 'greatest financial offensive ever' and 'economic onslaught' as administration framing of a rollout that is now real designations rather than a promise — the plan converted three weeks of threat into a blacklist, but its scope is the tell examined below.",
      impact:
        "The political-will clock dominates: the plan bets Washington's willingness to enforce secondary sanctions can do what the bombing did not, and the composition of the first list — which sectors, and whose banks — is the day's decisive intelligence.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Fortune',
      event:
        "The first designation list conspicuously spared the pillar the plan was built to break: no major Chinese bank or yuan-clearing rail was named. Asked whether Chinese banks could be targeted, Bessent said 'no one is above the reach of U.S. sanctions' and that facilitators would 'be targeted,' but Washington confined its China measures to the teapot refineries already under sanction rather than escalating to the major banks.",
      summary:
        "Per §3.5.3 read the gap between 'no one is above the reach' and the actual list as the signal — the warning is held in reserve, not executed; the China-bank collision the plan is engineered to force was deferred, not delivered.",
      impact:
        "The coalition-cohesion clock stays loaded rather than sprung: Washington kept its decisive escalation chambered as leverage, which is why the oil market treated the announcement as less than the maximal China confrontation and sold it.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Global Times / China-Global South Project / IRNA',
      event:
        "Beijing answered by invoking its 2021 anti-sanctions blocking statute for the first time, formally directing Chinese firms not to comply with the US measures, and repeated that the sanctions are 'illegal unilateral' acts with 'no basis in international law' and 'not authorized by the UN Security Council'; China buys more than 80% of Iran's exported oil.",
      summary:
        "Per §3.5.3 China's move converts its verbal refusal into a legal countermeasure — a statute ordering defiance, not a shipment or a seizure — formalizing the plan's ceiling before the first bank is named.",
      impact:
        "The enforcement collision the plan must survive is now pre-committed on both sides in law: the US widened secondary-sanctions categories while Beijing wrote non-compliance into statute, setting the terms of a confrontation still to be fought.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / CNN',
      event:
        "Iran answered with rhetoric and maritime pressure: new security chief Mohsen Rezaei vowed a 'seismic' response to the economic warfare and claimed Tehran had still shipped some 70 million barrels in the past month or two despite the US blockade, while Foreign Minister Araghchi called the plan a 'desperate' ploy set to fail and Tehran renewed its warning that vessels violating its Hormuz protocols would face 'fines, detention, or confiscation.'",
      summary:
        "Per §3.5.3 cite 'seismic' and the barrel claim as Iranian assertions, not verified facts — no route was struck and the loading figure is Tehran's own; the tell is that Iran's answer stayed verbal and administrative, not kinetic, on the day the plan landed.",
      impact:
        "The energy-infrastructure clock stays hot without ticking over: a Hormuz seizure escalating under the renewed fine-detain-confiscate threat, or Rezaei's 'seismic' promise converted to a maritime or proxy move, remain the near-term paths from rhetoric to a repricing event.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Trading Economics / OilPrice / HSToday (CENTCOM)',
      event:
        "The oil market sold the announcement: Brent slipped below $92 a barrel on Monday as traders took profits and judged the plan's deferral of the China-bank collision to be less than the maximal secondary-sanctions shock, even as the CENTCOM escort corridor kept flowing and enforcement tempo rose — US forces have now rerouted about 55 blockade-running ships, disabled three, and boarded two since mid-July.",
      summary:
        "Per §3.5.5 quantify: Brent fell from near $94 to below $92 on a plan that named ~60 entities but spared the China banks, a 'sell-the-news' read that the immediate secondary-sanctions-on-China tail eased; the corridor runs under a tightening enforcement regime.",
      impact:
        "The energy and political-will clocks diverge for a day: the price relief signals the market priced the plan in and discounted the deferred China collision, while the rising interdiction count keeps a standing casualty-and-repricing exposure on the corridor.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 179 was a plan-reaction day — the isolation rollout drew rhetoric and a Chinese blocking statute, not shooting, and no American casualty was reported; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused as Washington played its economic hand: Bessent unveiled 'Operation Economic Outcast' and reaffirmed prior guidance that there would likely be no large-scale kinetic restart. CENTCOM's escort corridor — more than 660 million barrels and ~1,300 vessels since May, moving ~10 mb/d — remains a standing daily maritime exposure, and the enforcement tempo rose: US forces have now rerouted about 55 blockade-runners, disabled three, and boarded two since mid-July. The USS George Washington is on station after relieving the USS Abraham Lincoln. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24-48h; Israel stayed offstage on a day dominated by the US-Iran economic rollout, holding its Gaza posture — no IDF redeployment until Hamas fully disarms under a US general, with Kushner's 30-day weapons-handover / 60-90-day tunnel-closure timeline — and keeping its Hezbollah threat exchange live at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. Israel was largely offstage on Day 179 as the action ran through the US-Iran economic track. Its posture stayed political rather than costly: Jerusalem and the Board of Peace hold that Hamas must fully disarm and Gaza be demilitarized under a US general before any IDF redeployment or reconstruction, with Kushner floating a 30-day weapons handover and 60-90-day tunnel closures, and the roadmap Netanyahu still calls 'problematic' before the October 27 election; in Lebanon the strategy now leans on two 'pilot zones' where the Lebanese Armed Forces are to demonstrate they can disarm Hezbollah. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework — and it stayed at highest readiness.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Iran's Day 179 action was rhetorical, legal, and diplomatic — Rezaei's 'seismic' threat and 70-million-barrel loading claim, Araghchi's 'desperate' dismissal, the renewed Hormuz seizure warning, and the standing Pezeshkian-memorandum / Egypt mediation track — with no reported new casualties; the UN rights chief's alarm over a sharp rise in executions (HRANA at least 444 in Jan–Jul) is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 179. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Day 179 moves were rhetorical, legal, and diplomatic — Rezaei's 'seismic' retaliation threat and 70-million-barrel loading claim, Araghchi's 'desperate' dismissal, the renewed threat to fine, detain, or confiscate vessels defying the Hormuz permit regime, and Pezeshkian's continued defense of the lapsed memorandum with Egypt as a would-be mediator — with no reported new casualties. Per §3.1's dual-sourcing a separate rights thread — the UN rights chief's renewed alarm over a sharp rise in executions used to suppress dissent, with HRANA logging at least 444 for January–July — is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths in a 24-48h dominated by the plan rollout, China's blocking statute, and Iran's rhetorical answer; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths on a plan-reaction day. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as a Hezbollah-Israel threat exchange with no fresh toll, as the international strategy shifts to two Lebanese Armed Forces 'pilot zones' for disarming Hezbollah. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz commercial transit stays effectively shut outside the US convoy; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbor bypass routes remains the most acute new widening path against this ledger.",
    },
  },
  exec:
    "Day 179 is the day the economic war stopped being a promise. Treasury Secretary Scott Bessent unveiled the isolation plan as 'Operation Economic Outcast,' blacklisting nearly 60 people, businesses, and vessels and expanding the categories for secondary sanctions across shipping, oil, gold, crypto, aviation, and technology — an 'economic onslaught' he said leaves Iran 'two paths: complete global isolation and a subsistence economy, or a path back to normalcy' (NBC News, CBS News, The Hill). But the pillar the plan was built to break was left standing: no major Chinese bank was named — only the teapot refineries already sanctioned carry — and Bessent's 'no one is above the reach of U.S. sanctions' stayed a warning rather than a designation (CNBC, Fortune). Beijing answered by invoking its 2021 blocking statute for the first time, ordering Chinese firms to defy the measures and repeating that the sanctions are 'illegal unilateral' acts with no basis in international law (Global Times, China-Global South Project). Iran answered with rhetoric: security chief Rezaei vowed a 'seismic' response and Araghchi called the plan a 'desperate' ploy set to fail, as Tehran renewed its threat to fine, detain, or confiscate vessels defying its Hormuz permit regime (CNBC, CNN). The market sold the news — Brent slipped below $92 as the plan priced in and the China-bank collision was deferred. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "The plan landed as designations — but spared the pillar it was built to break",
      body:
        "'Operation Economic Outcast' converted three weeks of promise into a designation list: nearly 60 people, businesses, and vessels blacklisted, and the secondary-sanctions net widened across shipping, oil, gold, digital assets, aviation, and technology (NBC News, Fox Business, Washington Post). Yet the first list conspicuously spared the one target the plan was engineered to reach — the major Chinese banks and yuan-clearing rails that turn Iranian oil into money. Washington has sanctioned China's teapot refineries before; it did not, on Day 179, name a large Chinese bank. Per §3.5.3 read Bessent's 'no one is above the reach of U.S. sanctions' as a warning held in reserve, not a step taken: the gap between the rhetoric and the list is the intelligence. Under the multi-clock framework the political-will clock is the one on trial — the plan bets that the threat of secondary sanctions on China can do what the bombing campaign did not, but its architects chose breadth over the single escalation that would test that bet. Analytical judgment: this is a calibrated first move. Sixty designations across six sectors let Washington claim the 'greatest financial offensive ever' while keeping the China-bank collision in reserve as leverage — which is precisely why the oil market sold the announcement rather than bidding it. The plan is real and it lengthens the war, but its decisive round is still chambered.",
    },
    {
      title: "Both sides formalize the siege on paper; neither fires the decisive shot",
      body:
        "Every actor escalated in law and rhetoric on Day 179, and none escalated in fact. China invoked its 2021 anti-sanctions blocking statute for the first time, ordering Chinese firms not to comply with the US measures — a formal legal countermeasure, not a shipment or a seizure (Global Times, China-Global South Project). Iran matched it verbally: Rezaei promised a 'seismic' answer and claimed Tehran had still moved some 70 million barrels despite the blockade, while Araghchi dismissed the plan as 'desperate' and the foreign ministry renewed its threat to fine, detain, or confiscate vessels defying the Hormuz permit regime (CNBC, CNN). Washington, for its part, widened the secondary-sanctions categories but stopped short of the China designation. Per §3.5.6 the institutionalization prior holds and deepens: the durable architecture both capitals built is now a live economic-war apparatus met by a formal Chinese blocking rule, atop a legislated Hormuz closure, a US escort corridor, and a Gaza demilitarization mechanism — each harder to unwind. Under the multi-clock framework the coalition-cohesion and negotiation-capacity clocks both tighten: Beijing converted its refusal into statute while the US track to Tehran stays closed and Pezeshkian's memorandum pivot, with Egypt's mediation, finds no counterparty. Analytical judgment: the standoff is hardening into a rules-based siege in which each side raises the legal and rhetorical stakes without paying a kinetic price — the configuration that lengthens wars. The ceasefire probability holds at 5.",
    },
    {
      title: "Taiwan: a deferred China collision is a reprieve, not one that lasts",
      body:
        "Per §3.5.10 there was no Taiwan-specific development on Day 179; the exposure is structural, and the plan's shape today cut two ways for Taipei. The near-term relief: by sparing the major Chinese banks and yuan-clearing rails, Washington left untouched — for now — the same settlement plumbing that clears much of Asia's energy trade, so the immediate spillover into unrelated Gulf-to-Asia cargo financing did not materialize (CNBC, Fortune). The gathering risk: China's decision to invoke its blocking statute signals that the eventual US-China secondary-sanctions collision is a matter of timing, not doubt, and when it comes it will land on the financial rail Taipei's imports also ride. The physical exposure is unchanged — Rezaei's threat to the Gulf's bypass export routes still shadows the corridor through which roughly a third of Taiwan's 23.6 Mt of LNG transits, nearly 8 Mt of it Qatari (CSIS). Per §3.5.5 the arithmetic stays unforgiving: Taiwan imports 99% of its gas against about eleven days of cover versus some 120 days of oil. Analytical judgment: Day 179 bought Taipei time on the financial channel and none on the physical one. The prudent read of a deferred collision is to use the interval — winter-gas stockpiling, supplier diversification, and settlement-rail contingency planning — rather than to treat the market's relief rally as an all-clear.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Day 179 was a plan-reaction day — no US-Iran shooting, no reported American casualty as Bessent unveiled 'Operation Economic Outcast.' The CENTCOM escort corridor (~660M+ barrels / ~1,300 vessels since May, ~10 mb/d) remains a standing exposure and enforcement tempo rose to ~55 ships rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel was largely offstage as the action ran through the US-Iran economic track. Its posture stayed political — the IDF stays until Hamas disarms under a US general, with Kushner floating a 30-day weapons handover and 60-90-day tunnel closures and the roadmap Netanyahu still calls 'problematic' before the October 27 election, and the Hezbollah threat exchange live after the Aug 15 Lebanon strike (carried in 'other') as strategy shifts to two LAF 'pilot zones.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness on its October 27 election clock.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was rhetorical, legal, and diplomatic — Rezaei's 'seismic' threat and 70M-barrel claim, Araghchi's 'desperate' dismissal, the renewed Hormuz seizure warning, and the Pezeshkian-memorandum / Egypt track — with no reported new casualties. A rights thread — the UN rights chief's alarm over a sharp rise in executions, HRANA at least 444 in Jan–Jul — is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24-48h dominated by the plan rollout, China's blocking statute, and Iran's rhetorical answer. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Mokha claim and the UAE ballistic-missile threat stay logged, not counted. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as a threat exchange as strategy shifts to two LAF 'pilot zones.' Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat is the most acute new widening path.",
  },
};

export default data;
