import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 86 opens with the war's near-term trajectory compressed onto a single decision expected within the day. Direction holds mixed: President Trump's statement that a war-ending deal — declaring the war over, reopening the Strait of Hormuz and opening a two-month nuclear track — is 'largely negotiated,' together with a five-government regional mediation surge, pulls de-escalatory; Iran's IRGC-affiliated Fars agency dismissing the claim as 'incomplete and inconsistent with reality,' the unbridged enrichment and enriched-uranium binary, and a fully-prepared kinetic option hold the escalatory pole. The 30-day ceasefire probability ticks up two points to 19, reflecting the emergence of a drafted deal architecture over the Day 85 Rome non-breakthrough, capped by Iran's flat denial and Trump's own 'solid 50/50' framing.",
      risk7d:
        "Seven-day risk rises to critical. Trump has said he will likely decide by Sunday — today — between a 'good' deal and resuming the war, framing the choice as a 'solid 50/50,' and the New York Times describes the US-Israeli war-preparation posture as the 'most intense yet,' with resumption possible 'as soon as next week.' The distribution of seven-day outcomes now has both tails live and the decision landing inside the window. Under the multi-clock framework the active-deadline clock has collapsed onto today's decision. The skeptical counter is structural: Trump's 'by Sunday' deadlines have slipped before, a publicly stated 50/50 is partly a pressure instrument, and the Sledgehammer architecture's standing posture is unchanged.",
      spillover:
        "Spillover holds critical. The US blockade of the Strait of Hormuz has reached a century mark of 100 redirected commercial ships, with through-traffic near five percent of the pre-conflict norm and a PGSA permit regime still administering the lane; logistics operators estimate four-to-six-month normalisation even on a settlement. The Lebanon track continues to bleed under the 45-day ceasefire extension, with strike geography having reached eastern Lebanon, and the Iraqi-territory drone vector against Gulf infrastructure carries. The humanitarian-escalation clock holds at the Lebanon and Iran cumulatives. A signed deal that genuinely reopens the Strait is the single development that would relieve this gauge, and it remains unsigned.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'NPR / PBS News / CBS News (Trump says war-ending deal is "largely negotiated"; Rubio reiterates conditions)',
      event:
        "President Trump says a deal to end the war — declaring the war over, reopening the Strait of Hormuz, lifting the US port blockade, releasing some frozen Iranian assets and opening a two-month nuclear negotiation — has been 'largely negotiated,' with final details to be 'announced shortly'",
      summary:
        "President Donald Trump said on May 23, after calls with Israel and regional allies, that a deal with Iran to end the war has been 'largely negotiated' and that its 'final aspects and details' would be 'announced shortly.' Per reporting on the draft, the agreement would issue a formal declaration that the war is over, reopen the Strait of Hormuz with the United States ending its blockade of Iranian ports, release some Iranian assets held in foreign banks, and open a two-month window of negotiations on Iran's nuclear programme. Secretary of State Marco Rubio reiterated Washington's conditions: Iran obtains no nuclear weapon, the Strait reopens without tolls, and Iran's enriched uranium is turned over.",
      impact:
        "Analytical judgment: a near-complete deal text is a structural development that did not exist on Day 85, when the Rome round closed without a breakthrough — the negotiation-capacity clock has moved from a stalled channel to a drafted architecture. But under the official-claim discipline this is a statement by one party, not a verified outcome: Trump has announced near-deals before, and the text reportedly still embeds the two conditions — zero enrichment and surrender of the enriched-uranium stockpile — that Khamenei's Day 85 order placed off the table. Skeptical counter: 'largely negotiated' and 'signed' are different states, and the gap between them is precisely the enrichment binary the prior four rounds could not bridge.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Time / Al Jazeera / Axios (Fars dismisses deal claim; Trump frames choice as "solid 50/50," decision by Sunday)',
      event:
        "Iran's IRGC-affiliated Fars news agency dismisses Trump's claim that a deal is close as 'incomplete and inconsistent with reality,' as Trump frames his choice as a 'solid 50/50' between a deal and resuming the war",
      summary:
        "Iran's Fars news agency, affiliated with the Islamic Revolutionary Guard Corps, dismissed President Trump's characterisation that a deal was close as 'incomplete and inconsistent with reality,' and said the text under discussion would keep the Strait of Hormuz under Tehran's control rather than reopen it on US terms. In an interview with Axios, Trump put the odds at a 'solid 50/50' between reaching a 'good' deal and choosing to 'blow them to kingdom come,' said he would convene his negotiators — Steve Witkoff, Jared Kushner and Vice President Vance — to review Iran's latest offer, and indicated he would likely decide by Sunday. The New York Times had days earlier reported Israel and the US carrying out their 'most intense preparations yet' to renew attacks.",
      impact:
        "Analytical judgment: the gap between Trump's 'largely negotiated' and Fars's 'inconsistent with reality' is not noise — it is the two capitals describing the same draft in incompatible terms, which is what an unbridged core looks like at the eleventh hour. Under the multi-clock framework the active-deadline clock has collapsed to a single decision expected today, weighed against a fully-prepared kinetic option. Skeptical counter: a public 50/50 framing is also leverage — it raises the cost to Tehran of holding its line into the final hours — and a decision 'by Sunday' has slipped before.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: 'CBS News / ISNA (regional mediation surge; Qatari delegation in Tehran; Pakistan army chief meets Iran leadership)',
      event:
        "Regional mediators — Qatar, Egypt, Turkey, Saudi Arabia and Pakistan — work through the prior 24 hours to bridge the gap, with a Qatari delegation in Tehran and Pakistan's army chief meeting Iran's senior leadership",
      summary:
        "Regional mediators scrambled over the 24 hours before Trump's decision to narrow the remaining gaps. A Qatari delegation travelled to Tehran and, per Iran's ISNA news agency, joined the mediation effort; Pakistan's Field Marshal Asim Munir met President Pezeshkian, Parliament Speaker Ghalibaf, Foreign Minister Araghchi and Interior Minister Momeni. Qatar, Egypt, Turkey, Saudi Arabia and Pakistan were all reported engaged, broadening a channel that for the Rome rounds had run primarily through Oman. The mediation surge accompanies — rather than resolves — the substance: the enrichment binary and the disposition of Iran's roughly 440 kg of 60-percent enriched uranium remain the load-bearing disputes.",
      impact:
        "Analytical judgment: the breadth of mediation is itself the data point — five regional governments engaged simultaneously is the widest interlocutor set of the war, and a genuine expansion of negotiation capacity regardless of today's outcome. Under the multi-clock framework this is the negotiation-capacity clock visibly active rather than stalled. Skeptical counter: more mediators bridge process, not substance; the Islamabad-track precedent of Days 46–51 showed an optimistic multi-party framing collapse on an unbridged core, and breadth of mediation did not prevent it.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'USNI News / Press TV / Fortune / AlanChand (Hormuz blockade "century mark"; IRGC 35-transit claim; Brent; rial)',
      event:
        "The US blockade of the Strait of Hormuz reaches a 'century mark' of 100 redirected commercial ships as Iran claims 35 coordinated transits in 24 hours; Brent holds near $104 and the rial firms to about 1,762,000 IRR/USD",
      summary:
        "Reporting placed the US blockade of the Strait of Hormuz at a 'century mark' — 100 commercial ships entering or leaving Iranian ports redirected since the blockade began — with through-traffic at roughly five percent of the pre-conflict norm of about 3,000 vessels a month. Iranian state media claimed 35 vessels transited in 24 hours under IRGC Navy coordination; independent trackers continue to show open commercial transits far below that. Logistics operator DHL told customers normalisation would take four to six months. Brent crude held near $104 a barrel; Iran's rial firmed on the AlanChand remittance market to about 1,762,000 IRR/USD from 1,777,000, against an official rate near 1,322,000.",
      impact:
        "Analytical judgment: the Strait is the deal's most market-legible clause — the draft's reopening-and-no-tolls language is exactly the contested ground, with Fars insisting the text keeps the Strait under Tehran's control and Rubio insisting no tolling system is acceptable. Under the multi-clock framework the energy-infrastructure clock holds critical: a blockade at its century mark and a PGSA permit regime are not a reopened strait whatever the IRGC's transit count. Skeptical counter: Brent's steadiness near $104 and the rial's small firming show markets pricing the decision as genuinely two-sided rather than discounting either war or resolution.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed',
      status:
        "No new US casualties. The resumption decision is concentrated on the White House: Trump said a war-ending deal is 'largely negotiated' but framed his choice as a 'solid 50/50' between a deal and resuming the war, with a decision expected within the day. The Sledgehammer architecture remains operational.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,603+',
      delta: '+0 KIA / +0 WIA (no new beyond Day 79–85 carry)',
      status:
        "No new Israeli casualties confirmed. Trump said he made the 'largely negotiated' statement after calls with Israel; the New York Times's reporting describes a joint US-Israeli war-preparation posture, the 'most intense yet,' with renewed strikes possible 'as soon as next week.' The IDF Litani-extension posture about 30 km into Lebanon holds.",
    },
    iran: {
      cumulative:
        "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new war figures; Iran disputes Trump’s deal characterisation',
      status:
        "No new Iranian war casualty figures. Iran's Fars news agency dismissed Trump's claim that a deal is close as 'incomplete and inconsistent with reality'; the enrichment binary and the disposition of roughly 440 kg of 60-percent enriched uranium remain unbridged. Rial AlanChand firms to about 1,762,000 IRR/USD.",
    },
    other: {
      cumulative:
        'Lebanon MOH war-cumulative: 3,020 killed (292 women + 211 children); truce-period KIA at least 657 · ~8,946+ WIA war-cumulative · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Kuwait: 1 wounded',
      delta: 'Day 85 figures carry; Hormuz blockade reaches a century mark of 100 redirected ships',
      status:
        "Lebanon MOH war-cumulative 3,020 killed (292 women + 211 children); truce-period KIA at least 657 carries. The US blockade of the Strait of Hormuz reaches a century mark of 100 redirected commercial ships; Iraq's investigation into the Iraqi-origin drones that struck the UAE's Barakah plant continues; the Strait remains effectively closed to open commercial traffic.",
    },
  },
  exec:
    "Day 86 opens with the war's near-term trajectory compressed onto a single decision expected within the day. President Trump said on May 23, after calls with Israel and regional allies, that a deal with Iran — one that would formally declare the war over, reopen the Strait of Hormuz, end the US blockade of Iranian ports, release some Iranian assets held in foreign banks and open a two-month negotiation on the nuclear file — has been 'largely negotiated,' with 'final aspects and details' to be 'announced shortly' (NPR, PBS News). In an interview with Axios he put the odds at a 'solid 50/50' between a 'good' deal and resuming the war, said he would meet his negotiators — Witkoff, Kushner and Vice President Vance — to weigh Iran's latest offer, and would likely decide by Sunday whether instead to 'blow them to kingdom come' (Axios). Iran's IRGC-affiliated Fars news agency dismissed the claim that a deal was close as 'incomplete and inconsistent with reality,' arguing the text would keep the Strait under Tehran's control (Time). Regional mediators — Qatar, Egypt, Turkey, Saudi Arabia and Pakistan — spent the prior 24 hours working to bridge the gap, with a Qatari delegation joining the effort in Tehran. The diplomatic track runs alongside a war-preparation posture the New York Times has called the 'most intense yet.' Brent held near $104 a barrel; the rial firmed to about 1,762,000 IRR/USD (Fortune, AlanChand). Analytical judgment: the 30-day ceasefire probability ticks to 19; direction holds mixed; seven-day risk rises to critical on the decision landing today.",
  implications: [
    {
      title:
        "Trump's 'largely negotiated' is a claim, not a settlement — and the claim and Iran's flat denial describe the same draft in incompatible terms",
      body:
        "The governing discipline today is the rule that an actor's optimistic progress statement is cited as that actor's claim, not integrated as verified fact. Trump's statement that a war-ending deal is 'largely negotiated' with details to be 'announced shortly' is a real development — a drafted architecture covering a war-end declaration, a Hormuz reopening, an asset release and a two-month nuclear track now reportedly exists, which it did not when the Rome round closed on Day 85. But Iran's Fars agency dismissed the same claim as 'incomplete and inconsistent with reality' and said the draft keeps the Strait under Tehran's control. Analytical judgment: when the two parties describe one document in incompatible terms, the gap is not spin — it is the unbridged core showing through diplomatic language. The draft still reportedly embeds zero enrichment and surrender of the enriched-uranium stockpile, the two items Khamenei personally placed off the table on Day 85. Under the multi-clock framework the negotiation-capacity clock has genuinely advanced — from a stalled channel to a drafted text and five engaged mediators — but the substance has not moved. The skeptical counter is the Islamabad precedent: an '80-percent-complete' framing in late April collapsed on exactly this kind of unbridged core. 'Largely negotiated' and 'signed' are different states, and the distance between them is the enrichment binary.",
    },
    {
      title:
        "The war's trajectory is now compressed onto a single decision expected today, weighed against a fully-prepared kinetic option",
      body:
        "Trump framed the choice as a 'solid 50/50' between a 'good' deal and resuming the war, and said the decision would likely come by Sunday — today. That collapses the active-deadline clock onto one decision point, weighed against a kinetic option the New York Times calls the 'most intense preparation' of the war: an intensified bombing campaign, a possible Kharg Island seizure, and commandos to extract nuclear material from struck sites. Analytical judgment: a morning brief cannot pre-empt a decision still hours away, but it can frame the asymmetry. A 'yes' produces a deal text Iran already disputes and that must still survive a two-month nuclear negotiation — a fragile de-escalation. A 'no' hands a fully-prepared coalition a green light for resumption 'as soon as next week.' That is why seven-day risk rises to critical even as a real de-escalation branch exists: the distribution has both tails live and the decision lands inside the window. Under the multi-clock framework the coalition-cohesion clock reads steadier than on Day 85 — Trump made the statement explicitly after calls with Israel, and the war-preparation reporting describes a joint US-Israeli posture rather than the divergence Day 85 flagged. The skeptical counter is Trump's own volatility: 'by Sunday' has slipped before, and a publicly stated 50/50 is partly a pressure instrument aimed at Tehran's final-hours calculus.",
    },
    {
      title:
        "Taiwan: the Strait of Hormuz clause is the deal's most direct line to Taiwan's energy exposure",
      body:
        "Brent held near $104 a barrel into the decision, little changed from Day 85 — the market is pricing the outcome as genuinely two-sided rather than discounting either a resolved war or a renewed one. The draft's reopening-and-no-tolls language is the contested ground: Fars says the text keeps the Strait under Tehran's control, Rubio says no tolling system is acceptable, and the US blockade has reached a century mark of 100 redirected ships with through-traffic near five percent of normal. For Taiwan the read is a sharpened binary. A signed deal that genuinely reopens the Strait would, on logistics operators' four-to-six-month normalisation estimate, begin to drain the war-resumption premium and could pull Brent toward the mid-$90s over a quarter — but not immediately. A 'no' decision against the prepared kinetic option keeps the $130–170 closure-tail scenario in a days-to-weeks watch. CPC's working floor near $110 still sits above spot, and Taiwan's LNG cover through September is confirmed; no fresh Taiwan-specific development today, and TSMC's 2026 CapEx framework-signature path holds near eight percent. Analytical judgment: the variable for Taiwan is no longer the daily Brent print but whether today's decision converts a 'largely negotiated' Hormuz clause into an executed one — the reopening mechanism, not the headline, is what an LNG importer should track.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. Trump said a war-ending deal is 'largely negotiated' but put the choice at a 'solid 50/50'; the resumption decision rests with the White House and the Sledgehammer architecture remains operational.",
    israel:
      "No new Israeli casualties confirmed. Trump coordinated the 'largely negotiated' statement with Israel; the NYT describes a joint US-Israeli war-preparation posture, the 'most intense yet,' with renewed strikes possible as soon as next week.",
    iran:
      "No new war casualty figures. Iran's Fars agency dismissed Trump's deal claim as 'incomplete and inconsistent with reality'; the enrichment binary and the enriched-uranium disposition remain unbridged. Rial AlanChand firms to about 1,762,000 IRR/USD.",
    other:
      "Lebanon MOH war-cumulative 3,020 (292 women + 211 children); truce-period KIA at least 657 carries. The US blockade of the Strait of Hormuz reaches a century mark of 100 redirected commercial ships.",
  },
};

export default data;
