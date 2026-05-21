import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 84 opens a visible gap between Washington and Jerusalem on the eve of the Rome fifth round. Trump softened his Day 83 posture — willing to wait 'a couple of days' for 'the right answers,' his team 'impressed' by Iran's negotiators — and Iran confirmed it is reviewing the latest US proposal, pulling de-escalatory; Israel's security-cabinet drive to renew the war and the unbridged enrichment gap hold the escalatory pole. Direction holds mixed. The 30-day ceasefire probability rises modestly to 18 on the softening and the imminent Rome round, held down by the structural enrichment 'deadlock' Araghchi himself described.",
      risk7d:
        "Seven-day risk eases from critical to conditional. Trump replaced the 'Friday, Saturday, Sunday' framing with an explicit readiness to wait, moving the near-term kinetic decision point off the calendar and onto the May 23 Rome outcome. Under the multi-clock framework the active-deadline clock improves as the window relaxes and the negotiation-capacity clock improves on tone. The skeptical counter is structural: Trump has swung from 'garbage' to 'life support' to 'impressed' inside ten days, and the same volatility can recompress the window; the Sledgehammer architecture remains operational.",
      spillover:
        "Spillover holds critical. The Iraqi-territory drone vector against Gulf nuclear infrastructure, the Popular Mobilisation Forces' 600-plus strikes on US bases, and a Strait of Hormuz still effectively closed to open commercial traffic keep the energy-infrastructure clock critical-unchanged. The coalition-cohesion clock worsens on the public US-Israel divergence over whether and when to resume strikes — a split over tempo, not yet a rupture. The humanitarian-escalation clock holds at the Lebanon cumulative — 3,020 war-cumulative, at least 657 truce-period — as Israeli strikes continue under the 45-day extension.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / CBS News / PBS News (Trump willing to wait; Iran reviewing US proposal; Rome round May 23)',
      event:
        "Trump says he is willing to wait 'a couple of days' for Iran's response to the latest US proposal and that his team is 'pretty impressed' by Tehran's negotiators; Iran says it is reviewing the US position days before the fifth round of nuclear talks in Rome",
      summary:
        "President Trump said he is prepared to wait 'a couple of days' to 'get the right answers' from Tehran on the latest US proposal to end the war, and that his negotiating team is 'pretty impressed' by Iran's negotiators. Iran said Thursday it is reviewing the Trump administration's latest position, exchanged through Pakistani mediation and built on Iran's 14-point framework. The fifth round of indirect US-Iran nuclear talks is formally scheduled for Rome on May 23, with the management of Iran's enriched-uranium stockpile and the future of enrichment the central unresolved issues.",
      impact:
        "Analytical judgment: the softening loosens the 'two or three days — Friday, Saturday, Sunday' kinetic window that defined Day 83, moving the near-term decision point off the calendar and onto the Rome outcome. Under the multi-clock framework the active-deadline clock improves and the negotiation-capacity clock improves on tone, but neither has cleared the enrichment 'deadlock' Araghchi described. Skeptical counter: Trump has swung from 'garbage' to 'life support' to 'impressed' within ten days; the same volatility that loosened the window can recompress it, and 'a couple of days' is no firmer a frame than the one it replaced.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Fox News / Al Jazeera / Center for Arms Control (Trump rejects Hormuz tolls; vows to retrieve and destroy Iran HEU)',
      event:
        "Trump stakes out two specific new US positions ahead of Rome: that Washington does not want tolls on the Strait of Hormuz, and that the US will 'retrieve' Iran's stockpile of highly enriched uranium and 'probably destroy it after we get it'",
      summary:
        "President Trump said the United States does not want tolls charged on the Strait of Hormuz — the first explicit US rejection of the permit-and-fee model embedded in Iran's Persian Gulf Strait Authority, under which vessels reportedly pay up to $2 million per transit. He separately said the US would not let Iran keep its highly enriched uranium, stating: 'We'll probably destroy it after we get it, but we're not going to let them have it.' Independent assessments put Iran's stockpile at roughly 440 kg of uranium enriched to 60 percent — material experts estimate could be processed toward weapons-grade in days to weeks, and enough, if fully enriched, for several weapons.",
      impact:
        "Analytical judgment: both positions collide directly with non-negotiable Iranian demands — the PGSA toll revenue and the principle that Iran's enrichment and nuclear material remain sovereign. Under the multi-clock framework the statements clarify the US endpoint but widen the visible gap on the two files Araghchi has called a 'deadlock.' Skeptical counter: opening maximalist is standard US negotiating practice; 'retrieve and destroy' may function as an anchor rather than a red line, and dilution or supervised removal of the 60 percent stock are technical paths that leave room between Trump's framing and an implementable outcome.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / Times of Israel (Israeli security cabinet pushes war renewal; US-Israel divergence; interceptor-burden report)',
      event:
        "Israel's security cabinet pushes the other way — Netanyahu convenes ministers a second time on renewing the war and speaks with Trump, and the IDF is told to prepare for any scenario — even as analysts assess Israel cannot resume strikes without US permission",
      summary:
        "Prime Minister Netanyahu convened his security cabinet for a second session on the possibility of renewing the war with Iran and spoke with President Trump about it; Israeli officials said the IDF has been instructed to be ready for any scenario, including a return to fighting. Analysts and Israeli officials nonetheless assess that Israel cannot resume kinetic operations without US authorisation, leaving Washington's posture decisive. Separately, an Israeli report said US interceptors carried more of the load defending Israel from Iranian missiles during the war than the IDF's own systems did.",
      impact:
        "Analytical judgment: the day produces a visible US-Israel divergence over tempo — Washington leaning toward waiting, Jerusalem's cabinet toward resumption. Under the multi-clock framework the coalition-cohesion clock worsens, while the concentration of the resumption decision on Washington removes the risk of an Israeli unilateral trigger inside the Rome window. The interceptor-burden report feeds the standing interceptor-depletion prior: a war that leaned on US magazines to defend Israeli airspace raises the materiel cost of any resumption. Skeptical counter: Israel's visible preparation is itself a lever, calibrated to raise the cost to Trump of being seen to wait too long.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Fortune / AlanChand / USNI News / The National (Brent, rial, Hormuz transit divergence, Lebanon)',
      event:
        "Brent eases to about $108.76 a barrel on Trump's softening; rial AlanChand prints 1,787,000 IRR/USD; independent trackers show near-zero open Hormuz transits against the IRGC's higher PGSA count; Israeli strikes continue in southern Lebanon",
      summary:
        "Brent crude eased to roughly $108.76 a barrel by midday May 21, down about $1.58 on the day, as Trump's willingness to wait drained some war-resumption premium; the benchmark remains roughly $44 above its year-earlier level. Iran's rial printed 1,787,000 IRR/USD on the AlanChand remittance market, a modest further slippage from the roughly 1,780,000 level of recent sessions, against an official rate near 1,321,000. Independent shipping trackers continue to show open commercial transits of the Strait of Hormuz at or near zero per day against a pre-war baseline around 95, while Iran's IRGC reports higher numbers under its PGSA permit regime. Israeli strikes continued across southern Lebanon under the May 15 45-day ceasefire extension.",
      impact:
        "Analytical judgment: the Brent ease is modest and procedural, not structural — the market is trading the Rome round as a binary rather than pricing a resolved strait. Under the multi-clock framework the energy-infrastructure clock holds critical: a strait administered through PGSA permits, with open traffic near zero, is not a reopened strait. The rial's slippage signals the Day 81–83 stabilization is shallow. Skeptical counter: lower Brent and any genuine throughput are real relief for energy importers regardless of who administers the lane. The Lebanon track remains structurally decoupled and bleeding under the extension.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed',
      status:
        "No new US casualties. Trump softened the Day 83 kinetic framing — willing to wait 'a couple of days' for 'the right answers' — and said the US will retrieve and 'probably destroy' Iran's highly enriched uranium; the Sledgehammer architecture remains operational and the resumption decision now rests almost entirely with the White House.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,603+',
      delta: '+0 KIA / +0 WIA (no new beyond Day 79–83 carry)',
      status:
        "No new Israeli casualties confirmed. Netanyahu's security cabinet met a second time on renewing the war and the IDF was told to prepare for any scenario, but Israel is assessed unable to resume strikes without US permission. An Israeli report says US interceptors did more of the work defending Israeli airspace than IDF systems; the IDF Litani-extension posture about 30 km into Lebanon holds.",
    },
    iran: {
      cumulative:
        "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new war figures; Iran reviewing the US proposal ahead of Rome',
      status:
        "No new Iranian war casualty figures. Iran says it is reviewing the latest US proposal; Araghchi's 'deadlock' framing on enriched uranium and the AEOI's 'enrichment is not negotiable' position carry into the May 23 Rome round. Rial AlanChand prints 1,787,000 IRR/USD.",
    },
    other: {
      cumulative:
        'Lebanon MOH war-cumulative: 3,020 killed (292 women + 211 children); truce-period KIA at least 657 · ~8,946+ WIA war-cumulative · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Kuwait: 1 wounded',
      delta: 'Day 83 figures carry; Iraq investigation of the Barakah Iraqi-origin drones continues',
      status:
        "Lebanon MOH war-cumulative 3,020 killed (292 women + 211 children); truce-period KIA at least 657 carries. Israeli strikes continue across southern Lebanon under the 45-day extension. Iraq's investigation into the Iraqi-origin drones that struck the UAE's Barakah plant and targeted Saudi Arabia continues; the Strait of Hormuz remains effectively closed to open commercial traffic.",
    },
  },
  exec:
    "Day 84 opens a visible gap between Washington and Jerusalem on the eve of the Rome fifth round. President Trump softened his Day 83 posture: he said he is willing to wait 'a couple of days' to 'get the right answers' from Tehran, that his negotiating team is 'pretty impressed' by Iran's negotiators, and Iran confirmed it is reviewing the latest US proposal carried through Pakistani mediation (CNBC, CBS News). The shift loosens the 'two or three days — Friday, Saturday, Sunday' kinetic window that defined Day 83 and gives the formally scheduled May 23 Rome round, where enrichment remains the central issue, room to work (PBS News). Trump also staked out two specific new US positions: that Washington does not want tolls on the Strait of Hormuz — set directly against Iran's PGSA permit-and-fee regime — and that the US intends to 'retrieve' Iran's stockpile of highly enriched uranium and 'probably destroy it after we get it' (Fox News, Al Jazeera). Against that softening, Israel's security cabinet pushed the other way: Netanyahu convened ministers a second time on renewing the war and spoke with Trump, and the IDF was told to prepare for any scenario — though analysts assess Israel cannot resume strikes without US permission (Al Jazeera, Times of Israel). Brent eased to roughly $108.76 a barrel; the rial printed 1,787,000 IRR/USD (Fortune, AlanChand). Analytical judgment: the 30-day ceasefire probability rises modestly to 18; direction holds mixed; seven-day risk eases to conditional, contingent on the Rome outcome.",
  implications: [
    {
      title:
        "Trump's softening and Israel's counter-pressure converge on a single fact: with Israel unable to resume strikes without US authorisation, the decision to restart the war or let Rome work now rests almost entirely with the White House",
      body:
        "The day's two largest signals point in opposite directions. Trump moved from the Day 83 'Friday, Saturday, Sunday' framing to an explicit willingness to wait 'a couple of days' for 'the right answers,' and his team's 'impressed' characterisation of Iran's negotiators is the warmest US language since the 'garbage' dismissal. Israel moved the other way: a second security-cabinet session on renewing the war, a Netanyahu-Trump call, and an IDF instruction to be ready for any scenario. The reconciling fact is structural — Israeli analysts and officials assess that Israel cannot rejoin kinetic operations without US authorisation, a standing prior since the war's opening phase. That collapses the resumption decision onto Washington alone: Israel can lobby and prepare, but it cannot act. Analytical judgment: under the multi-clock framework this concentrates the active-deadline and political-will clocks into a single node, which cuts both ways — it removes the risk of an Israeli unilateral trigger inside the Rome window, but it also means a single reversal in Trump's posture, of the kind he has produced repeatedly within 24-hour spans, can restart the war without further process. The skeptical counter is that Israel's visible preparation is itself a lever, calibrated to raise the cost to Trump of being seen to wait too long.",
    },
    {
      title:
        "Trump's two new positions — no Hormuz tolls and the retrieval and destruction of Iran's enriched-uranium stockpile — put Washington on a direct collision course with two of Tehran's core demands days before Rome",
      body:
        "Trump's statement that the US 'doesn't want tolls' on the Strait of Hormuz is the first explicit US rejection of the revenue model embedded in Iran's Persian Gulf Strait Authority — the permit-and-fee regime, with reported $2 million-per-transit payments, that Tehran has been institutionalising since Day 45. His parallel statement that the US will 'retrieve' Iran's highly enriched uranium and 'probably destroy it after we get it' sets a maximalist endpoint on the nuclear file: not a freeze, not dilution under safeguards, but physical removal. Both positions collide with demands Iran treats as non-negotiable — the PGSA toll structure and the principle, restated by Araghchi and the AEOI, that Iran's enrichment and nuclear material remain sovereign. Analytical judgment: under the multi-clock framework these statements pull the negotiation-capacity clock in two directions at once. They clarify the US endpoint, which has value going into Rome, but they also widen the visible gap on the two files — Hormuz governance and the enriched-uranium stockpile — that Araghchi has already called a 'deadlock.' The skeptical counter is that opening maximalist is standard US negotiating practice and 'retrieve and destroy' may function as an anchor rather than a red line; independent assessments put Iran's stock near 440 kg of 60 percent material, which dilution or supervised removal could address by several technical paths, leaving room between Trump's framing and an implementable outcome.",
    },
    {
      title:
        "Taiwan: Brent's ease toward $108 on Trump's softening confirms the energy market is now trading the Rome outcome directly — a binary that keeps the kinetic-tail scenario live even as the spot price drifts down",
      body:
        "Brent crude eased to roughly $108.76 a barrel by midday May 21, down about $1.58 on the day, as Trump's willingness to wait drained some war-resumption premium from the price. The move is modest and it is not a structural decline: the strait remains effectively closed to open commercial traffic, with independent trackers showing near-zero unmanaged transits against the IRGC's higher PGSA-permitted count, and Brent is still roughly $44 above its level a year earlier. For Taiwan the read is unchanged in substance and sharper in framing: CPC's working floor near $110 still brackets the spot price, and the energy market is now trading the Rome round as a binary — a credible May 23 outcome could pull Brent below $105, while a recompression of the window or a failed round keeps the $130–170 kinetic-tail scenario in two-to-three-week watch. TSMC's 2026 CapEx framework-signature path holds near 8 percent and Taiwan's LNG cover through September is confirmed; no fresh Taiwan-specific development today. Analytical judgment: the live variable for Taiwan is no longer the daily Brent print but the Rome outcome the print is now discounting — the next material data point is the May 23 round itself and the overnight oil reaction to it.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. Trump softened the kinetic framing — willing to wait 'a couple of days' for 'the right answers' — and said the US will retrieve and 'probably destroy' Iran's highly enriched uranium; the Sledgehammer architecture remains operational.",
    israel:
      "No new Israeli casualties confirmed. Netanyahu's security cabinet met a second time on renewing the war; the IDF was told to prepare for any scenario but Israel is assessed unable to resume strikes without US permission.",
    iran:
      "No new war casualty figures. Iran says it is reviewing the latest US proposal; Araghchi's enriched-uranium 'deadlock' framing carries into the May 23 Rome round. Rial AlanChand prints 1,787,000 IRR/USD.",
    other:
      "Lebanon MOH war-cumulative 3,020 (292 women + 211 children); truce-period KIA at least 657 carries. Israeli strikes continue across southern Lebanon under the 45-day extension; Iraq's investigation into the Barakah Iraqi-origin drones continues.",
  },
  flash:
    '*(reserved for evening run — any Iranian or US statement on the eve of the May 23 Rome round; any Trump comment hardening or softening the window further; whether the round opens on schedule; Israeli security-cabinet follow-on signaling; Hormuz Friday transit prints; Brent overnight read into the Rome weekend; AlanChand rial print; IDF action inside the Litani-extension zone)*',
};

export default data;
