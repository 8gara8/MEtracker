import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed. Day 162 firmed the diplomacy's logistics — Iran said it had 'reached' agreement with Oman on a temporary Hormuz shipping route, a two-to-four-month corridor much of it through Iranian waters and run by a joint coordination center (Fortune, Bloomberg) — which is genuine forward motion and keeps direction off escalating. But the same day carried its escalation: a Houthi attack injured eleven civilians in southern Saudi Arabia and the Houthis claimed a ballistic-missile strike on the Saudi tanker Wafa, the first landings of the coordinated-assault threat (The National, Yemen Monitor). The route does not reopen the strait, Iran ties a full reopening to lifting the US naval blockade, the 20% penalty bill stays in committee, Khamenei has not signed, and Iran again denied direct US talks — which keeps direction off de-escalating. Per §3.5.3 a firmer but partial, blockade-gated route set against the first attack on Saudi soil is mixed, not a verified path to reopening.",
      risk7d:
        "Seven-day risk holds critical. The coordinated-attack warning began to materialize on its southern axis — a Houthi strike wounded eleven Saudi civilians and a claimed missile hit a Saudi tanker — while the northern, Iraqi-militia axis Riyadh flagged has not yet fired, leaving a synchronized north-south salvo on Saudi ports, airports or energy nodes as the dominant discrete risk of the week (The National, CNN). The sixty-day toll-free window expires around mid-August, roughly eight days out, and Iran's insistence that a full reopening awaits the lifting of the US blockade makes a US-acceptable outcome no likelier. Trump paired 'a lot of progress' with a standing warning that the strait 'is going to be open very soon or they are going to get hit very hard,' and the US and Israel keep preparing possible strikes on Iranian energy sites with the final order ungiven. A resumed US-Israeli strike, a synchronized militia-Houthi assault on Saudi infrastructure, a laden-tanker sinking, or a confirmed American death remain the week's dominant risks.",
      spillover:
        "Spillover holds critical and sharpened. The Gulf front the brief has tracked turned from warning to first blood: a Houthi attack injured eleven civilians in southern Saudi Arabia and the Houthis claimed a ballistic-missile strike on the Saudi tanker Wafa off the kingdom's coast, its crew reported safe by UKMTO and the claim unconfirmed by Riyadh (The National, Yemen Monitor, Xinhua). The war now spans Iranian soil, both maritime chokepoints, the Israel-Gaza seam and an opening assault on Saudi Arabia, days after Saudi and CENTCOM struck Iran-backed groups in Iraq. Hormuz stays effectively closed under naval escort (straits.live). The Iran-Oman route reaches none of these fronts, and the Saudi front runs on the IRGC-proxy ledger, not the Hormuz table — so a firmer corridor does nothing to contain the spillover now landing on Gulf soil.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Fortune / Bloomberg / Washington Post',
      event:
        "Iran's foreign ministry said Tehran and Muscat had 'reached' agreement on a temporary shipping route through the Strait of Hormuz — a two-to-four-month corridor, much of it running through Iranian territorial waters and managed by a proposed joint coordination center — while stressing the arrangement does not fully reopen the strait and that a full reopening depends on lifting the US naval blockade.",
      summary:
        "Per §3.5.3 the route firmed from 'agreed in principle' on Day 161 to 'reached' — the most concrete artifact of the war's diplomacy — but on the same partial, blockade-gated terms, so the progress is real and bounded at once.",
      impact:
        "A firmer route institutionalizes an Iranian-managed corridor rather than restoring UNCLOS free navigation, and leaves the strait legally shut; it advances the logistics of a reopening without resolving the exclusion regime or the blockade that keep the waterway closed.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Trading Economics',
      event:
        "The separate Iranian parliamentary bill that would bar US and Israeli ships and levy a penalty worth 20% of a violator's cargo stayed under committee review rather than being withdrawn, and the Oman route still awaited sign-off from Supreme Leader Mojtaba Khamenei, who has not appeared in public since February and whom President Pezeshkian has said is 'very difficult' to reach.",
      summary:
        "Per §3.5.6 the exclusion regime and the sign-off remain the two unresolved gates — 'reached with Oman' is not 'signed by Tehran,' and the restrictive bill still shadows any corridor.",
      impact:
        "The corridor can firm technically while the legal-restriction regime and the succession bottleneck keep a US-acceptable, fully open strait out of reach, so the deal's last mile is an internal Iranian problem no US concession can solve.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / CBS News / AOL (AFP)',
      event:
        "Trump said 'a lot of progress' had been made, teased that an announcement could come 'soon,' and said the US would help clear the traffic backlog at Hormuz, while Iran again denied holding direct talks with Washington and its parliament speaker dismissed the diplomacy as 'theater,' insisting the US must lift the blockade first.",
      summary:
        "Per §3.5.3 the two capitals narrated the same event incompatibly again — Washington claiming a near-deal and an American role, Tehran denying the channel exists and routing everything through Oman.",
      impact:
        "With Iran denying a US track, an American 'announcement' risks outrunning what Tehran will confirm, reprising the Day 50 announced-ahead-of-verification pattern and setting up a reversal if the claimed deal is contradicted from Tehran.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'The National / Yemen Monitor / Xinhua',
      event:
        "A Houthi attack injured eleven civilians in southern Saudi Arabia near the Yemen border, and the Houthis claimed a ballistic-missile strike on the Saudi oil tanker Wafa off the kingdom's coast; UKMTO reported the tanker's crew safe and Saudi authorities did not confirm either claim, which could not be independently verified.",
      summary:
        "Per §3.5.6 the coordinated-attack threat the brief flagged on Day 161 began to land on its southern, Houthi vector, with the first Saudi civilian casualties of the wave and a claimed strike on Saudi shipping.",
      impact:
        "An attack on Saudi soil widens the war beyond the US-Iran table and tests whether the Gulf brake survives; if the northern Iraqi-militia axis joins and a strike hits a Saudi energy or port node, oil reprices and Riyadh's restraint on Washington may not hold.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'Trading Economics / straits.live / CNBC',
      event:
        "Brent crude eased 0.4% to $82.15 and WTI held near $77, keeping the Day 161 rebound above $82 intact, while MarineTraffic showed the Strait of Hormuz still effectively closed under naval escort with only a trickle of commercial transits.",
      summary:
        "Per §3.5.5 the market held — pricing neither the route firming lower nor the Saudi attacks higher decisively — a wait-and-see barrel parked above $82.",
      impact:
        "The flat tape shows the de-escalation trade is spent and the escalation trade not yet triggered; a signed reopening pulls Brent toward the $70s, while a Saudi-energy hit or a tanker sinking sends it toward $120 within a session.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused as the Oman route firmed to 'reached'; the DoD DCAS all-cause series holds at 18 killed / 687 wounded versus the 17 / 432 combat series the brief tracks, a counting-scope difference and not a confirmed hostile loss; the lone Kuwait death at Ahmad al-Jaber stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty). The DoD DCAS database holds a wider all-cause tally at 18 killed / 687 wounded since February 28 — non-hostile deaths and every wounded case included — against the narrower combat series the brief tracks. Per §3.5.3 the brief keeps the AP/CENTCOM combat figure as the headline and flags DCAS as a divergence to watch; the 18th DCAS death is unconfirmed as a hostile loss and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US naval blockade of Iranian ports continued — and is now the pivot of Iran's precondition, since Tehran ties a full Hormuz reopening to lifting it; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest state of readiness with the US and Israel still preparing possible Iranian energy-infrastructure strikes; strikes and casualties continue on the Gaza seam",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest state of readiness, with the IDF still assessing Iran would fire ballistic missiles even if it did not initially join a US strike, and the US and Israel continued preparing possible strikes on Iranian energy infrastructure with the final order ungiven. Israel stays outside the US-Iran framework and unbound by the Oman channel, so its readiness keeps a full-scale-campaign option live if the deal claim collapses; the Lebanon gap prior (§3.5.6) carries and sits inside Iran's precondition list, since Tehran wants the June Lebanon MoU addressed before it reopens the strait. On the Gaza seam, Israeli strikes and Palestinian casualties continued as the US Hamas-disarmament roadmap stayed unimplemented, Hamas refused to disarm before an Israeli withdrawal, and Israel refused to withdraw without 'genuine disarmament.'",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran said it had reached the Oman route, kept the restrictive transit bill in committee, again denied direct US talks, and said reaching Supreme Leader Khamenei is 'very difficult at the moment'",
      status:
        "No updated official Iranian toll issued on Day 162. The Qeshm Island deaths — a couple and their child — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Iran said it had reached the Oman route while keeping the 20% penalty bill in parliamentary committee, denied holding direct talks with Washington, and — through President Pezeshkian — said reaching Supreme Leader Khamenei, whose sign-off the route awaits, is 'very difficult at the moment.' The IAEA has run no verification since February 28 and remains locked out of the Isfahan enrichment plant; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians newly injured (Houthi attack, Aug 7) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "A Houthi attack injured 11 civilians in southern Saudi Arabia near the Yemen border — the first Saudi casualties of the threatened coordinated assault; the Houthis also claimed a ballistic-missile strike on the Saudi tanker Wafa (crew reported safe by UKMTO, unconfirmed by Riyadh), not added to the confirmed maritime toll; no confirmed new deaths",
      status:
        "The Gulf front produced the day's first casualties: a Houthi attack injured eleven civilians in southern Saudi Arabia near the Yemen border, the first Saudi casualties of the coordinated-assault warning the brief flagged on Day 161 (The National). The Houthis also claimed a ballistic-missile strike on the Saudi oil tanker Wafa off the kingdom's coast; UKMTO reported the crew safe and Riyadh did not confirm the claim, so it is not added to the confirmed maritime toll (Yemen Monitor, Xinhua). No confirmed new deaths landed across Iraq, the Gulf, Lebanon or the maritime front. The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing; a laden-tanker sinking or a crew death remains the tell most likely to reprice oil and trigger Trump's rule. Hormuz stays effectively closed under naval escort. Kuwait holds 10 killed / 115 injured; Iraq holds 148+ KIA / 402+ WIA; Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 162 firmed the Hormuz route without opening the strait. Iran said it had 'reached' agreement with Oman on a temporary shipping corridor — a two-to-four-month route, much of it through Iranian waters, run by a joint coordination center — but both Tehran and Washington stressed it would not fully reopen the waterway, which Iran still ties to lifting the US naval blockade (Fortune, Washington Post, Bloomberg). The separate parliamentary bill that would bar US and Israeli ships and levy a 20% cargo penalty stayed in committee, and Supreme Leader Mojtaba Khamenei, unseen since February, has still not signed. Trump said 'a lot of progress' had been made, teased an announcement 'soon,' and offered US help clearing the traffic backlog, even as Iran again denied direct talks and its parliament speaker dismissed the diplomacy as 'theater' (Bloomberg, CNBC). The market read the standoff, not the progress: Brent eased 0.4% to $82.15, holding above $82 after the week's rebound (Trading Economics). The sharpest turn came on the Gulf front the brief flagged Day 161 — the threatened coordinated assault began to land. A Houthi attack injured eleven civilians in southern Saudi Arabia, and the Houthis claimed a ballistic-missile strike on the Saudi tanker Wafa, its crew reported safe and the claim unconfirmed by Riyadh (The National, Yemen Monitor). The northern, Iraqi-militia axis has not yet fired. Per §3.5.3 the concrete progress is a firmer but partial, blockade-gated route; the concrete escalation is a Houthi salvo on Saudi soil. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 13.",
  implications: [
    {
      title: "The route firms — but 'reached' is not 'reopened,' and not 'signed'",
      body:
        "Day 161 gave the deal a maximalist text; Day 162 firmed its logistics. Iran said it had 'reached' agreement with Oman on the shipping route itself — a temporary two-to-four-month corridor, much of it through Iranian territorial waters, managed by a joint coordination center (Fortune, Bloomberg). That is the most concrete artifact of the diplomacy so far, and it is why direction stays off escalating. But three qualifiers hollow it out. First, Tehran and Washington both said it does not fully reopen the strait; Iran conditions a full reopening on lifting the US naval blockade, which Washington has refused for months (Washington Post). Second, the restrictive bill that would bar US and Israeli ships and penalize cargo at 20% of value is a separate track still sitting in an Iranian parliamentary committee, so the exclusion regime is unresolved, not withdrawn (CNBC, Trading Economics). Third, the route still awaits Supreme Leader Mojtaba Khamenei, unseen since February and, by President Pezeshkian's account, 'very difficult' to reach. Analytical judgment: per §3.5.3 the concrete progress is real but bounded — a managed corridor agreed with a mediator, not a signed, US-accepted, fully open strait. Trump narrated 'a lot of progress' and an announcement 'soon'; Iran denied direct talks and called the diplomacy 'theater.' A route the two capitals describe incompatibly, gated on a blockade and an unreachable leader, is the Day 50 announced-ahead-of-verification pattern in a firmer form.",
    },
    {
      title: "The Gulf threat lands — the war widens on its southern axis",
      body:
        "The warning the brief carried on Day 161 stopped being a warning. A Houthi attack injured eleven civilians in southern Saudi Arabia near the Yemen border — the first Saudi casualties of the threatened coordinated assault — and the Houthis claimed a ballistic-missile strike on the Saudi oil tanker Wafa off the kingdom's coast, its crew reported safe by UKMTO and the claim unconfirmed by Riyadh (The National, Yemen Monitor, Xinhua). Analytical judgment: per §3.5.6 this is the coordinated-attack threat materializing on its southern, Houthi vector while the northern, Iraqi-militia axis Riyadh flagged has not yet fired. That asymmetry is the week's key uncertainty: a single-axis Houthi harassment campaign is survivable and priced; a synchronized north-south salvo on Saudi ports, airports or energy nodes under IRGC coordination is the event that widens the war beyond the US-Iran table and repriced oil. The Gulf brake on Washington — the restraint Riyadh, Doha and Muscat have exercised for weeks — now has to hold while Saudi Arabia is itself under attack, and Riyadh insists its contacts, Iran included, still move 'in the right direction' (CNN). Whether that restraint survives eleven wounded civilians and a claimed tanker strike, or hardens into pressure for a US response, is the fulcrum the deal now balances on.",
    },
    {
      title: "Taiwan: a managed corridor is not free navigation",
      body:
        "For Taipei the firmer route changes the label, not the exposure. Per §3.5.10 there was no Taiwan-specific development on Day 162, but the corridor Iran 'reached' with Oman is a temporary, Iranian-water-routed, coordination-center-managed lane — a managed passage under Tehran's hand, not the UNCLOS free navigation Qatari LNG has always relied on, and one whose full version is still gated on the US blockade and shadowed by the 20% penalty bill (Fortune, CNBC). Analytical judgment: per §3.5.5 Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). Brent's hold near $82 keeps the crude bill elevated but stable; the molecule the war threatens is still gas, and a corridor Tehran administers is a standing conditionality over Qatari cargoes, not a restoration of open transit. The realized exposure is unchanged — no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, US LNG backfill at a premium, against about eleven days of gas cover versus roughly 120 days of oil. The Hormuz text Taipei should read is the one Iran administers, not the one Trump announces.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider counting scope, not a confirmed new combat death; per §3.5.3 the brief keeps the combat series and flags DCAS as a divergence. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US blockade — now the pivot of Iran's precondition — continues; $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held and US-Israel energy-strike prep carries. Israel stays outside the Oman channel; the Lebanon gap prior sits inside Iran's precondition list. Strikes and Palestinian casualties continued on the Gaza seam as the Hamas-disarmament roadmap stayed unimplemented.",
    iran:
      "No fresh official MOH toll; Qeshm civilian deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Tehran reached the Oman route, kept the 20% bill in committee, denied direct US talks; reaching Khamenei stays 'very difficult.' IAEA no verification since Feb 28; ISIS flags enough HEU for up to ten weapons if further enriched.",
    other:
      "A Houthi attack injured 11 civilians in southern Saudi Arabia — the first Saudi casualties of the threatened assault; the Houthis also claimed a ballistic-missile strike on the tanker Wafa (crew safe per UKMTO, unconfirmed by Riyadh), not added to the confirmed toll. No confirmed new deaths. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz effectively closed. Kuwait 10/115; Iraq 148+/402+; Lebanon source-split.",
  },
};

export default data;
