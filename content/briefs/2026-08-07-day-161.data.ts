import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed. Day 161 produced the deal's actual text — Iranian state media published a draft that would bar US and Israeli ships from the Strait of Hormuz, gate other 'harming' nations behind compensation, and penalize violators 20% of cargo value — and Iran and Oman called the wider route 'agreed in principle' pending Supreme Leader Khamenei's sign-off (CNBC, Bloomberg, France 24). That is genuine forward motion on the Oman track, which keeps direction off escalating. But the published terms are the maximalist, exclusionary opposite of the toll-free 'opening' Washington demands, a US official rejected any 'impediments,' Iran attached preconditions on the blockade, sanctions and Lebanon, and the oil market reversed 3.8% higher the moment the terms were public — which keeps direction off de-escalating. Per §3.5.3 a text on the track the US rejects, gated on an unreachable Supreme Leader, is not a verified path to reopening.",
      risk7d:
        "Seven-day risk holds critical. Saudi Arabia said it expects imminent, IRGC-coordinated attacks from Iraqi militias and the Houthis on its ports, airports and energy infrastructure, with drones and missiles already being moved (CNN, Jerusalem Post, Middle East Eye), opening a fresh escalation vector even as the US and Israel keep preparing possible strikes on Iranian energy sites with the final order ungiven and Israel at its highest readiness. The sixty-day toll-free window expires around mid-August, roughly nine days out, and Iran's published draft — banning US and Israeli ships and penalizing cargo at 20% of value — makes a US-acceptable outcome less likely, not more. Trump paired 'very good discussions' with a warning that the strait 'is going to be open very soon or they are going to get hit very hard.' A resumed US-Israeli strike, a coordinated militia-Houthi salvo on Saudi infrastructure, a laden-tanker sinking, or a confirmed American death remain the dominant discrete risks over the week.",
      spillover:
        "Spillover holds critical. The war now spans Iranian soil, both maritime chokepoints, the Israel-Gaza seam and, newly, a threatened multi-front assault on Saudi Arabia. Riyadh braced for coordinated attacks from the north (Iraqi militias) and south (the Houthis) under IRGC supervision, days after Saudi and CENTCOM struck Iran-backed groups in Iraq on July 29 and as the Houthis pressed their Red Sea campaign (CNN, FDD's Long War Journal). Traffic through Hormuz ticked up to about 10 ships over 24 hours from roughly 2 on August 2 but the strait stays effectively closed under naval escort (straits.live). On the Israel-Gaza seam, Israeli strikes killed at least eight Palestinians on August 6 as the US Hamas-disarmament roadmap stayed unimplemented (Al Jazeera). An Iran-Oman route text reaches none of these fronts, and the Saudi front runs on the IRGC-proxy ledger, not the Hormuz table.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Iranian state media (IRNA/Tasnim) via CNBC / Bloomberg',
      event:
        "Iranian state media published a draft plan setting the terms for traffic through the Strait of Hormuz: US and Israeli ships would be barred from transiting outright, any other nation 'that has harmed Iran' would be blocked until it pays compensation, and violators would face a penalty equal to 20% of the value of the cargo aboard their ship.",
      summary:
        "Per §3.5.3 the 'imminent deal' acquired its actual text — and it is an exclusion-and-penalty regime that names the US and Israel as barred parties, not the toll-free 'opening' Washington has narrated for 160 days.",
      impact:
        "The published draft materializes the toll-institutionalization prior (§3.5.6) in its harshest form; if it clears Iran's Supreme Leader it hands Tehran a codified veto over which cargoes cross the strait, the opposite of UNCLOS free navigation.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / France 24 / NewsNation',
      event:
        "Iran and Oman said their wider Hormuz route was 'agreed in principle,' with the draft finalized and awaiting sign-off from Supreme Leader Mojtaba Khamenei; Khamenei has not appeared in public since his February injuries, and President Pezeshkian said communicating with him is 'very difficult at the moment.'",
      summary:
        "Per §3.5.3 the deal's last gate is a leader who is physically unreachable, so 'agreed in principle' is not the same as signed — the Day 50 pattern of announced-ahead-of-verification persists.",
      impact:
        "The sign-off bottleneck means the most advanced Hormuz text of the war could stall indefinitely on an internal Iranian succession problem, independent of anything Washington offers.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / CNN',
      event:
        "A US official said any temporary route must carry 'no approvals or permissions and no tolls or charges' because 'no party controls the lanes,' rejecting the draft's structure, while Iran's Deputy Foreign Minister Kazem Gharibabadi said an Oman deal does not reopen the strait and listed US preconditions — end the port blockade, roll back reimposed oil sanctions and resume frozen-asset talks, and fix the June Lebanon MoU; Trump said the strait 'is going to be open very soon or they are going to get hit very hard.'",
      summary:
        "Per §3.5.3 the two sides publicly restated incompatible terms on the same day the text appeared — Washington demands unimpeded transit, Tehran demands the whole war's grievances settled first.",
      impact:
        "Iran has linked Hormuz to the blockade, sanctions and Lebanon, so the strait can no longer be traded in isolation; either Washington accepts conditions it has rejected for months or the deadline lapses toward a strike.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNN / Jerusalem Post / Middle East Eye',
      event:
        "A senior Saudi official said the kingdom expects imminent, IRGC-coordinated attacks from Iraqi militias to the north and the Houthis to the south against its ports, airports and energy infrastructure, with drones and missiles already being moved; the warning follows July 29 Saudi-CENTCOM strikes on Iran-backed groups in Iraq, and Riyadh said the threats aim to derail de-escalation even as its contacts, Iran included, move 'in the right direction.'",
      summary:
        "Per §3.5.6 the coalition front the brief has tracked turned from grievance to imminent threat, opening a potential new axis of attack on Gulf energy infrastructure.",
      impact:
        "A coordinated militia-Houthi strike on Saudi ports or oil sites would reprice oil, widen the war beyond the US-Iran table, and test whether the Gulf brake on Washington survives an attack on its own infrastructure.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / Trading Economics / straits.live',
      event:
        "Brent crude reversed 3.8% higher to close at $82.49 and WTI rose 2.8% to $77.29 after Iran published the restrictive draft, unwinding most of a week that had shed roughly 8% on deal optimism; MarineTraffic showed about 10 commercial ships transiting Hormuz over 24 hours, up from roughly 2 on August 2, though the strait stayed effectively closed under naval escort.",
      summary:
        "Per §3.5.5 the market read the terms, not the pause — the same tape that priced de-escalation below $80 on Day 160 repriced reversal above $82 once the exclusionary draft was public.",
      impact:
        "The rebound shows how thin the de-escalation trade was; a resumed strike, a Saudi-infrastructure hit, or a Hormuz sinking sends Brent back toward $120 within a session, and the modest traffic uptick does not reopen the corridor.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused as the Oman-route text advanced; the DoD DCAS database now shows 18 killed / 687 wounded all-cause versus the 17 / 432 combat series the brief tracks, a counting-scope difference and not a confirmed hostile loss; the lone Kuwait death at Ahmad al-Jaber stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty). The Department of Defense's DCAS database now records 18 killed and 687 wounded since February 28 — a wider, all-cause tally that includes non-hostile deaths and every wounded case, against the narrower combat series the brief has tracked. Per §3.5.3 the brief keeps the AP/CENTCOM combat figure as the headline and flags the DCAS series as a divergence to watch; the 18th DCAS death is not confirmed as a hostile loss and therefore does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death from Iranian or proxy action. The US blockade of Iranian ports continued, Iran restated that US warships on non-designated lanes are targets, and the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest state of readiness with the US and Israel still preparing possible Iranian energy-infrastructure strikes; IDF strikes killed at least eight Palestinians across Gaza on August 6",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest state of readiness, with the IDF still assessing Iran would fire ballistic missiles even if it did not initially join a US strike, and the US and Israel continued preparing possible strikes on Iranian energy infrastructure with the final order ungiven. Israel stays outside the US-Iran framework and unbound by the Oman channel, so its readiness keeps a full-scale-campaign option live if the deal claim collapses; the Lebanon gap prior (§3.5.6) carries and now sits inside Iran's precondition list, since Tehran wants the June Lebanon MoU addressed before it reopens the strait. On the Gaza seam, Israeli strikes killed at least eight Palestinians on August 6 — including a man and a woman in a helicopter strike south of Deir el-Balah — as the US Hamas-disarmament roadmap stayed unimplemented, Hamas refused to disarm before an Israeli withdrawal, and Israel refused to withdraw without 'genuine disarmament' (Al Jazeera).",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran published the maximalist Hormuz draft, set the US preconditions, and said reaching Supreme Leader Khamenei is 'very difficult at the moment'",
      status:
        "No updated official Iranian toll issued on Day 161. The Qeshm Island deaths — a couple and their child — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Iran's state media published the draft Hormuz plan, its deputy foreign minister set the US preconditions, and President Pezeshkian said reaching Supreme Leader Khamenei — whose sign-off the deal awaits — is 'very difficult at the moment,' underscoring how much of Tehran's decision-making still routes through a leader unseen since February. The IAEA has run no verification since February 28 and remains locked out of the Isfahan enrichment plant; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured (plus one unconfirmed at Ahmad al-Jaber, denied by CENTCOM) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "No confirmed new deaths in these theaters; Saudi Arabia braced for imminent IRGC-coordinated Iraqi-militia and Houthi attacks on its ports, airports and energy sites; Hormuz traffic ticked up to ~10 ships/24h but the strait stayed effectively closed",
      status:
        "No confirmed new deaths on Day 161 across Iraq, the Gulf, Lebanon or the maritime front, but the risk to the Gulf stepped up sharply: Saudi Arabia said it expects imminent, IRGC-coordinated attacks from Iraqi militias and the Houthis on its ports, airports and energy infrastructure, with drones and missiles already moving (CNN, Jerusalem Post, Middle East Eye). The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing; a laden-tanker sinking or a crew death remains the tell most likely to reprice oil and trigger Trump's rule. Traffic ticked up to about 10 vessels over 24 hours from roughly 2 on August 2, though the strait stays effectively closed under naval escort (straits.live). The confirmed Kuwait baseline holds 10 killed / 115 injured; Iraq holds 148+ KIA / 402+ WIA; Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 161 turned the Hormuz 'deal' into a published text — and the text is maximalist. Iranian state media released a draft plan that would bar US and Israeli ships from the strait, block any nation 'that has harmed Iran' until it pays compensation, and levy a penalty worth 20% of a ship's cargo on violators; Iran and Oman called the wider route 'agreed in principle,' pending sign-off from Supreme Leader Mojtaba Khamenei, who has stayed out of public view since February and whom President Pezeshkian said it is 'very difficult' to reach (CNBC, Bloomberg, France 24). The market read the terms, not the pause: Brent rebounded 3.8% to close at $82.49 and WTI rose 2.8% to $77.29, unwinding the week's roughly 8% slide (CNBC). Washington rejected the shape — a US official said any route must carry 'no tolls or charges' because 'no party controls the lanes' — while Iran's deputy foreign minister said an Oman deal does not reopen the strait and set preconditions: end the port blockade, roll back reimposed oil sanctions, and fix the Lebanon MoU (CNBC, CNN). Trump said the war would end 'pretty soon' but warned the strait 'is going to be open very soon or they are going to get hit very hard.' Saudi Arabia braced for imminent, IRGC-coordinated attacks from Iraqi militias and the Houthis on its ports, airports and energy sites (CNN). Per §3.5.3 the concrete text is the toll-and-exclusion outcome the US rejects. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability edges down one point to 13.",
  implications: [
    {
      title: "The deal acquires a text — and the text is maximalist",
      body:
        "Day 160 gave the deal coordinates; Day 161 gave it terms, and they are the opposite of the reopening Washington has narrated. Iranian state media published a draft plan that would bar US and Israeli ships from the strait, block any other nation 'that has harmed Iran' until it pays compensation, and levy a penalty worth 20% of a ship's cargo on violators (CNBC, Bloomberg). Iran and Oman called the wider route 'agreed in principle,' but the reopening is gated twice over: on Supreme Leader Mojtaba Khamenei, who has not appeared in public since his February injuries and whom President Pezeshkian said it is 'very difficult' to reach, and on a US precondition list — lift the port blockade, roll back reimposed oil sanctions, fix the Lebanon MoU — that Deputy Foreign Minister Gharibabadi says must be met before any ship moves freely (CNN, France 24). Under the multi-clock framework the negotiation-capacity clock advanced on the Oman track and widened on the US one in the same day. Analytical judgment: per §3.5.3 this is the deal claim failing its own test. For 160 days Washington sold a toll-free 'opening'; the text Tehran actually published is an exclusion-and-penalty regime that names the US and Israel as barred parties. A US official flatly rejected it — any route must carry 'no approvals or permissions and no tolls or charges' because 'no party controls the lanes.' What keeps direction mixed is that a text exists and both capitals still talk; what keeps it off de-escalating is that the text is maximalist and the man who must sign it is unreachable.",
    },
    {
      title: "The market votes the terms; the deadline and the attack warning vote reversal",
      body:
        "The clearest verdict on the draft came from the tape. The moment the restrictive terms were public, Brent reversed 3.8% to close at $82.49 and WTI rose 2.8% to $77.29, unwinding most of a week that had shed roughly 8% on deal optimism (CNBC). The standing thread has been that the market votes the diplomacy; on Day 161 it voted the terms, and the terms priced reversal. Under the multi-clock framework the active-deadline and energy-infrastructure clocks are winding hard against the negotiation gains: the sixty-day toll-free window expires around mid-August, roughly nine days out, and Iran has now linked the strait to the blockade, the oil sanctions and the Lebanon file, so Hormuz can no longer be settled in isolation. Analytical judgment: per §3.5.5 the numbers frame the danger — a strait carrying about 10 ships over the last 24 hours against roughly 73 a day pre-war, a draft that penalizes cargo at 20% of value, and a deadline nine days out. The spillover risk hardened in parallel: Saudi Arabia said it expects imminent, IRGC-coordinated attacks from Iraqi militias to the north and the Houthis to the south against its ports, airports and energy sites, with drones and missiles already moving, even as Riyadh insists its contacts — Iran included — are moving 'in the right direction' (CNN). A published maximalist text, a repriced barrel and a bracing Gulf are not the ingredients of a reopening; they are the ingredients of the reversal the brief has flagged since the coordinates were agreed.",
    },
    {
      title: "Taiwan: the toll it feared is now an exclusion regime",
      body:
        "For Taipei the risk sharpened from a fee to a regime. Per §3.5.10 there was no fresh Taiwan-specific development on Day 161, but the draft Iran published is worse than the toll the brief has warned about: a 20% cargo penalty and compensation-gated access on the same strait Qatari LNG must cross, plus outright bans that show how readily Tehran will name and exclude cargoes it dislikes. Analytical judgment: per §3.5.5 Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). The oil move cut the other way this time — Brent's rebound to $82 raises the crude bill, roughly 60% of it US-sourced — but the molecule the war threatens is still gas, and a penalty-and-exclusion structure is a standing cost and a standing veto over Qatari cargoes, not a one-off charge. The realized exposure is unchanged: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, Taipei backfilling with premium US LNG, against about eleven days of gas cover versus roughly 120 days of oil. The Hormuz text Taipei should read is not Trump's toll-free claim but the one Tehran published: whatever exclusion-and-penalty regime clears Khamenei is the one Qatari LNG — and Taiwan's eleven-day buffer — will have to transit. This week the barrel is the cost; the regime is the risk.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). The DoD DCAS database now lists 18 killed / 687 wounded all-cause — a wider counting scope, not a confirmed new combat death; per §3.5.3 the brief keeps the combat series and flags DCAS as a divergence. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Port blockade continues; $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held and US-Israel energy-strike prep carries. Israel stays outside the Oman channel; the Lebanon gap prior now sits inside Iran's precondition list. IDF strikes killed at least eight Palestinians across Gaza on Aug 6 as the Hamas-disarmament roadmap stayed unimplemented.",
    iran:
      "No fresh official MOH toll; Qeshm civilian deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Tehran published the maximalist draft; Pezeshkian said reaching Khamenei is 'very difficult.' IAEA no verification since Feb 28; ISIS flags enough HEU for up to ten weapons if further enriched.",
    other:
      "No confirmed new deaths, but Saudi Arabia braced for imminent IRGC-coordinated Iraqi-militia and Houthi attacks on ports, airports and energy sites. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz traffic ~10 ships/24h but effectively closed. Kuwait 10/115; Iraq 148+/402+; Lebanon source-split.",
  },
};

export default data;
