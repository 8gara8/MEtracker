import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 79 flips Day 78's split verdict to a clear re-escalation signal. The New York Times reported Friday — and Haaretz, the Jerusalem Post and the Times of Israel carried Saturday — that the United States and Israel are in 'intense preparations' for a possible renewal of strikes on Iran 'as early as next week,' described by Middle East officials as the most significant force-posture work since the April 8 ceasefire. The reported option set names Kharg Island troops, commando retrieval of nuclear materials, and expanded bombing of Iranian military and infrastructure sites. On May 16, the Trump administration reportedly requested that the UAE seize Kharg Island. Trump told Haaretz the US 'could destroy Iran's infrastructure in two days.' The 30-day ceasefire probability drops sharply from 10 to 6.",
      risk7d:
        "Seven-day risk moves from conditional to extreme. The NYT preparations report names the next week as the operational window; the Pentagon Sledgehammer rename has shifted from contingency planning to active force-posture work; the parliamentary 90% enrichment threat couples directly to any resumption. Iran retains 30 of 33 Hormuz missile sites and the Azizi toll plan — set for imminent unveiling — explicitly excludes 'Project Freedom' operators, locking in a US trigger. The Lebanon extension's structural upgrade does not bear on the Iran clock.",
      spillover:
        "Spillover holds critical and active. Israel killed 18 in southern Lebanon and wounded 124 in the 24-hour period reported Saturday by Lebanon's Health Ministry, including a strike on a house in Kfar Dounine that killed six and wounded seven. Hezbollah launched drones at northern Israel from Lebanon Friday — its first cross-border activity since the extension was announced — rejecting the talks and ruling out any discussion of disarmament. Hormuz traffic remains at zero since May 4. Brent holds around $108–111 a barrel. The energy-infrastructure clock worsens; the humanitarian clock worsens.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Haaretz / Jerusalem Post / Times of Israel / New York Times (cited)",
      event:
        "NYT: US and Israel in 'intense preparations' for renewed strikes on Iran 'as early as next week' — most significant force posture work since the April 8 ceasefire",
      summary:
        "The New York Times reported Friday — and Haaretz, the Jerusalem Post and the Times of Israel carried in Saturday liveblogs — that the United States and Israel are engaged in 'intense preparations' for a potential renewal of strikes on Iran pending a decision by President Trump, with operations possibly starting 'as early as next week.' Two Middle East officials briefed the paper that the activity is the most significant force-posture work since the Pakistani-brokered April 8 ceasefire. The named option set: deploying commandos to retrieve nuclear materials, sending troops to seize Kharg Island, and expanded bombing of Iranian military and infrastructure sites. The Pentagon, the officials said, has used the bombing hiatus to rearm warships and attack planes in the region.",
      impact:
        "Under the multi-clock framework, this is the active-deadline clock returning, the political-will clock hardening, and the negotiation-capacity clock collapsing in a single report. The Day 78 line that 'the re-escalation substrate carries' is now operationalized in a named one-week window. The skeptical counter: the source pattern (two Middle East officials, Israeli press amplification) is consistent with an Israeli deterrence signal designed to pressure Tehran ahead of the May 29 Pentagon security track and the June 2–3 political round; the substantive option set, however, is the same Sledgehammer architecture Day 76–78 carried. Either reading — operational or coercive — argues for higher 7-day risk and a lower ceasefire probability.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Reuters / Al Jazeera (timeline) — May 16 Kharg request",
      event:
        "Trump administration reportedly asks UAE to seize Iran's Kharg Island; Trump tells Haaretz US 'could destroy Iran's infrastructure in two days'",
      summary:
        "On May 16, the Trump administration reportedly requested that the UAE seize Iran's Kharg Island oil-export terminal — the discrete proposal first floated in late March and previously evaluated as requiring US boots on the ground. The same day, Trump told Haaretz the United States 'could destroy Iran's infrastructure in two days' — language echoing the early-April 'whole civilization will die tonight' deadline rhetoric that the Amnesty International statement of April 7 had characterized as a threat of large-scale civilian devastation potentially constituting an atrocity-crime substrate.",
      impact:
        "The Kharg-by-proxy request is the architecture: the US is testing whether Gulf coalition partners will execute the kinetic step the Bloomberg-reported 'Hormuz Coalition' had been described as. The UAE has rejected this category of request before (the UAE denied being a staging ground for the March 13 Kharg air raid). If declined again, the request itself still hardens the coercive signal toward Tehran. Trump's two-days-destruction line restores the early-April rhetorical posture that the brief had characterized as 'civilizational' and that international-law analysts characterized as a war-crimes substrate. Both inputs argue for the Day 79 direction flip to escalating.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Press TV / Investing.com / Jerusalem Post / PBS News / NPR / Iran International",
      event:
        "Iran's Azizi confirms imminent unveiling of Strait of Hormuz toll-and-route mechanism; commercial vessels and Iran-cooperating parties pay fees, 'Project Freedom' operators excluded",
      summary:
        "Iran's parliament national security committee chair Ebrahim Azizi reiterated Saturday — carried by Press TV, Iran International and amplified by Investing.com, the Jerusalem Post and PBS News — that Tehran has prepared a professional mechanism to manage traffic along a designated Strait of Hormuz route and will collect 'necessary fees' for 'specialized services' from commercial vessels and parties cooperating with Iran, with imminent unveiling. The mechanism explicitly excludes operators of Trump's 'Project Freedom' escort program. Azizi reiterated that any American interference would be treated as a ceasefire violation, the framing he introduced Friday in the Day 78 evening flash.",
      impact:
        "The toll mechanism converts the May 4 blockade from a binary 'closed' state to a graduated commercial-diplomatic instrument that lets Iran extract revenue from compliant operators while keeping the war's escalation trigger intact for non-compliant US-escorted shipping. Under the standing toll-institutionalization-risk prior (Day 45), even partial market acceptance of an Iranian toll regime — and Beijing's reaction to whether Chinese-operated vessels pay — would convert the wartime measure into a permanent revenue stream worth roughly $29 billion a year at pre-war Hormuz flow. The mechanism does not lower 7-day risk; it sharpens the trigger.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Haaretz / Al Jazeera / Times of Israel / France 24 / Lebanon Health Ministry",
      event:
        "Lebanon Health Ministry: 18 killed, 124 wounded in 24-hour period of Israeli strikes — including six killed in Kfar Dounine — even as the 45-day extension takes effect; Hezbollah launches drones at northern Israel from Lebanon Friday",
      summary:
        "Lebanon's Health Ministry reported Saturday that Israeli strikes killed 18 and wounded 124 in the preceding 24 hours, with the Israeli strike on a house in Kfar Dounine (about 95 km from Beirut) killing six and wounding seven. Al Jazeera reported Israeli strikes on southern Lebanon continuing despite the ceasefire extension; France 24 carried the Saturday escalation in its live coverage. Separately, Hezbollah on Friday launched drones at northern Israel from Lebanon — its first cross-border activity since the extension was announced — and rejected the direct Washington talks and any discussion of disarmament.",
      impact:
        "The same-day escalation pattern that defined Day 78 carries into Day 79 with higher casualty numbers — 18 in 24 hours versus 16 across Day 78's reported window. The standing Lebanon-gap prior holds: Israel retains full freedom of operations and the Washington track does not constrain it. Hezbollah's Friday drone activity is the more material structural development — it is the first cross-border activity since the extension and signals that the excluded party intends to operate outside the framework. Spillover holds critical; the humanitarian clock worsens. SNSC linkage means continued Lebanon escalation also degrades the Iran track.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "NBC News / NPR — Araghchi statements; Bonbast — IRR rate; Euronews — Iran posture",
      event:
        "Araghchi: Iran has 'no trust' in US, will negotiate 'only if the other side is serious' — first substantive Iranian reaction to deflated summit confirms the alignment gap; rial slips to 1,812,000 IRR/USD on bonbast Saturday",
      summary:
        "Foreign Minister Abbas Araghchi told reporters this week — carried by NBC News and NPR — that Iran has 'no trust' in the United States and is interested in negotiating only 'if the other side is serious and is in line of real negotiations,' citing 'contradictory messages' from Washington and describing the Pakistani-brokered mediation as 'in difficulty' rather than failed. Tehran, he said, is maintaining the ceasefire 'to give diplomacy a chance' but is prepared to return to fighting. On the economic side, Bonbast quoted the free-market dollar rate at 1,812,000 IRR Saturday, a 0.22 percent slip from Friday. Euronews carried the standing assessment that Iran's military assets remain largely intact and Tehran is itself preparing for renewed war.",
      impact:
        "Araghchi's statement is the first substantive Iranian response to the deflated Beijing language: it confirms the alignment gap between China's readout and Tehran's posture is active and unresolved, and it places Iran's negotiating posture below where the White House had implied after Beijing. The rial's modest further slip — against a backdrop of zero Hormuz transits, $111 Brent and no diplomatic deliverable — sustains the home-front endurance pressure but is not the dominant variable. The pivotal Iranian variable remains whether Tehran moves on the parliamentary 90% enrichment threat in response to the NYT preparations report.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed',
      status:
        "No new US casualties. The NYT 'as early as next week' preparations report is the operational substrate: Pentagon rearming, Sledgehammer rename, Wright weaponization testimony, Trump's two-days-destruction line. The May 16 Kharg-by-proxy request to the UAE is the coalition vector being tested.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,603+',
      delta: '+0 KIA / +0 WIA (no new beyond Day 78 carry)',
      status:
        "No new Israeli casualties confirmed beyond Day 78's Hezbollah drone-induced wounded carry. Hezbollah resumed drone activity Friday — first cross-border act since the extension — but no injuries reported. IDF strikes on southern Lebanon continue at higher tempo than Friday (18 KIA / 124 WIA across 24 hours).",
    },
    iran: {
      cumulative:
        "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new figures',
      status:
        "No new Iranian casualty figures. Rial 1,812,000 IRR/USD on bonbast Saturday (+0.22% vs Friday). Araghchi confirms no-trust posture; parliamentary 90% enrichment threat carries as nuclear-escalation backstop coupled to any US re-strike.",
    },
    other: {
      cumulative:
        'Lebanon MOH: ~2,916+ KIA / ~8,946+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Kuwait: 1 wounded',
      delta: '+18 KIA / +124 WIA (Israeli strikes southern Lebanon, 24h period reported Saturday)',
      status:
        "Lebanon MOH: 18 killed, 124 wounded in 24 hours; Kfar Dounine strike killed six. Truce-period toll passes 675. Hormuz: zero transits since May 4 carries; 58+ vessels redirected; toll-mechanism imminent unveil; 30 of 33 Hormuz missile sites intact. Hui Chuan fate unresolved.",
    },
  },
  exec:
    "Day 79 flips Day 78's split verdict to a clear re-escalation signal. The New York Times reported Friday — and Haaretz, the Jerusalem Post and the Times of Israel carried Saturday — that the United States and Israel are in 'intense preparations' for a possible renewal of strikes on Iran 'as early as next week,' described by Middle East officials as the most significant force-posture work since the April 8 ceasefire, with the named option set including commando retrieval of nuclear materials, troops to Kharg Island, and expanded bombing of Iranian military and infrastructure sites (Haaretz, Jerusalem Post, Times of Israel). On May 16, the Trump administration reportedly requested that the UAE seize Kharg Island — the Bloomberg-floated 'Hormuz Coalition' proposal being tested as a kinetic step. Trump told Haaretz the United States 'could destroy Iran's infrastructure in two days,' restoring the early-April 'civilizational' rhetorical register that international-law analysts characterized as a war-crimes substrate. Iran's parliament national security chair Ebrahim Azizi confirmed imminent unveiling of the Strait of Hormuz toll-and-route mechanism — open to commercial vessels and parties cooperating with Iran, closed to 'Project Freedom' operators — sharpening rather than softening the kinetic trigger (Press TV, Investing.com, Jerusalem Post, PBS News). Lebanon's Health Ministry reported 18 killed and 124 wounded in 24 hours of Israeli strikes including six killed at Kfar Dounine, and Hezbollah launched drones at northern Israel Friday — its first cross-border action since the extension and a signal that the excluded party will operate outside the Washington framework (Haaretz, Al Jazeera, France 24, Times of Israel). Foreign Minister Araghchi confirmed Iran has 'no trust' in the United States and will negotiate 'only if the other side is serious' — the first substantive Tehran response to the deflated Beijing language (NBC News, NPR). The rial slipped 0.22 percent to 1,812,000 IRR/USD on bonbast. Analytical judgment: the 30-day ceasefire probability drops sharply from 10 to 6, the direction flips to escalating, and 7-day risk moves to extreme — the NYT preparations report explicitly names the next week as the operational window and the Pentagon-Sledgehammer-rename architecture is now operational rather than contingent.",
  implications: [
    {
      title:
        "The NYT 'as early as next week' preparations report flips the war's analytical center of gravity from negotiation-managing to re-escalation-managing — Sledgehammer has crossed from contingency to active force posture",
      body:
        "The New York Times reporting Friday, amplified across Haaretz, the Jerusalem Post, the Times of Israel and Euronews, names the next seven days as the window for possible US-Israeli renewed strikes on Iran. Two Middle East officials briefed the paper that the force-posture activity is the most significant since the April 8 ceasefire — language that promotes Sledgehammer from the contingency planning Day 76–78 carried to an operational footing. The named option set is the architecture the brief has tracked: commandos for nuclear-material retrieval (the Wright testimony substrate), troops to Kharg Island (the late-March Bloomberg-Axios proposal), and expanded bombing of military and infrastructure sites (the early-April Trump deadline rhetoric). The Pentagon, the report adds, used the bombing hiatus to rearm warships and aircraft in the region — the same readiness work the Day 76 brief flagged as the substrate for any restart. Under the multi-clock framework, this is the active-deadline clock returning unannounced, the political-will clock hardening, and the negotiation-capacity clock collapsing in a single input. The skeptical counter is that the source pattern — anonymous Middle East officials, heavy Israeli press amplification — fits a coercive-deterrent leak designed to maximize Tehran's pressure ahead of the May 29 Pentagon security track and the June 2–3 political round. Either reading argues for the direction flip to escalating: an operational reading because the war may resume within the week; a coercive reading because the explicit demonstration of force readiness narrows the diplomatic space and raises the cost of any Iranian non-cooperation. The Lebanon-extension structural upgrade does not bear on this clock.",
    },
    {
      title:
        "The May 16 Kharg-by-proxy request to the UAE tests whether Gulf partners will execute the kinetic step — and Trump's two-days-destruction line restores the early-April 'civilizational' register",
      body:
        "The Reuters-referenced May 16 report that the Trump administration asked the UAE to seize Iran's Kharg Island operationalizes the 'Hormuz Coalition' architecture the brief tracked through late March: a kinetic step taken by a Gulf coalition partner rather than directly by US forces. The UAE has previously rejected the staging-ground accusation tied to the March 13 air raid on Kharg and is unlikely to accept a ground-seizure tasking. But the request itself hardens the coercive signal and exposes the US to the standing toll-institutionalization-risk prior in reverse — if Gulf partners decline, the US must either execute itself, abandon, or escalate the rhetoric. Trump chose escalate. His Haaretz line that the United States 'could destroy Iran's infrastructure in two days' restores the April 7 rhetorical register, when Trump's 'whole civilization will die tonight' was characterized by Amnesty International and arms-control analysts as a threat of large-scale civilian devastation potentially constituting a war-crimes substrate. The standing Israel-independence prior re-asserts: any US-Iran framework that depends on Israeli compliance is structurally fragile, and the NYT-reported joint preparations indicate Israel has been brought inside rather than outside the new posture. The negotiation-capacity clock, already narrowed by the deflated Beijing summit, narrows further. The Pentagon May 29 security track survives on the Lebanon side; on the Iran side, no equivalent mechanism remains active.",
    },
    {
      title:
        "Hormuz toll mechanism unveils inside an escalation window — Brent holds around $108–111 and Taiwan's working floor stays revised at ~$110; the diplomatic-economic gap legible on Day 78 deepens",
      body:
        "Azizi's confirmation of the imminent Strait of Hormuz toll-and-route mechanism — open to commercial vessels and Iran-cooperating parties, closed to Project Freedom operators — converts the May 4 blockade from a binary 'closed' state to a graduated commercial-diplomatic instrument that lets Iran extract revenue from compliant operators while keeping the US trigger intact. The standing toll-institutionalization-risk prior (Day 45) is now back in the live frame: any market acceptance of the toll regime — and especially how Beijing instructs Chinese-operated vessels — would convert the wartime measure into a permanent revenue stream worth roughly $29 billion a year at pre-war Hormuz flow. The reopening Iran offers is conditional on US exclusion, which sustains rather than reduces the kinetic trigger. Brent held around $108 a barrel on Friday's close and the Day 78 ~$111 read carries; the diplomatic-economic gap that became legible on Day 78 deepens with the NYT report. For Taiwan, CPC Corporation's working floor stays at the Day 78 revised ~$110 and the $130–170 kinetic-tail scenario shifts from contingency to one-week active-watch under the NYT report. TSMC's 2026 CapEx framework-signature path holds at ~8 percent — the de-escalation premium did not materialize after Beijing and the re-escalation premium is too fresh to price in. Government Taiwan supply-status: LNG cover through September confirmed; no fresh Taiwan-specific development beyond the upward kinetic-tail watch. The Lebanon track's structural upgrade — May 29 Pentagon security and June 2–3 political — remains a positive on its own clock, but the Iran track and the Lebanon track are now decoupling: Hezbollah's Friday drone activity, the 18 killed in 24 hours, and the NYT Iran-strike window are pulling Lebanon back into kinetic correlation with Iran rather than allowing the Washington channel to insulate it.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. NYT preparations report names commando, Kharg-troop, and expanded-bombing options for next week. Trump two-days-destruction line. May 16 Kharg-by-proxy request to UAE tests coalition vector.",
    israel:
      "No new Israeli casualties beyond Day 78 carry. Hezbollah launched drones at northern Israel Friday — first cross-border action since extension. No injuries reported. IDF Lebanon ops escalate (18 KIA / 124 WIA across reported 24h).",
    iran:
      "No new casualty figures. Rial slips 0.22% to 1,812,000 IRR/USD on bonbast Saturday. Araghchi: no trust in US; will negotiate only if other side is serious. Parliamentary 90% enrichment threat coupled to any US re-strike.",
    other:
      "Lebanon MOH: +18 KIA / +124 WIA across 24h. Kfar Dounine strike killed six. Truce-period toll passes 675. Hormuz: zero transits since May 4; toll mechanism imminent unveil; 30 of 33 Hormuz missile sites intact.",
  },
  flash:
    '*(reserved for evening run — any Iranian reaction to NYT preparations report, UAE response to Kharg request, Pentagon/State Department comment, Hormuz Saturday/Sunday traffic, Brent open, any movement on the May 29 Pentagon security track schedule)*',
};

export default data;
