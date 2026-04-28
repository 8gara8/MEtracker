import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'conditional',
    rationale: {
      direction:
        "Monday delivered a US formal rejection of the Iranian Hormuz-first proposal within 24 hours of its delivery; an Israeli rhetorical escalation on Lebanon to 'burn the entire country' threat level; a public Aoun-versus-Qassem rupture inside the Lebanese state; and a Putin-Araghchi St. Petersburg meeting that converted Russia from back-channel to visible coalition partner. Trump and the NSC reviewed the proposal Monday but Rubio publicly rejected its substance ('what they mean by opening the strait is yes, it's open as long as you coordinate with us, get our permission, or we'll blow you up and you pay us'); Rubio also explicitly ruled out any deal that defers the nuclear program. The four-mediator channel remains open but the proposal as submitted is dead.",
      risk7d:
        "The Hegseth-formalised 'shoot to destroy' ROE remains in force; US Navy de-mining (Peterson, Murphy) continues into Day 4 of operations under that ROE; Iranian mine-laying continues per prior Axios sourcing and UK House of Commons reporting that Iran has 'lost track of mines' it planted, meaning Tehran cannot fully reopen the strait even if it wanted to. The Bessent waiver-termination shutter-clock has now resolved into well-shut-in operating window. Brent closed $108.23 Monday (nearly 3% intraday gain); Citi flags a $150 path if disruption persists through June.",
      spillover:
        "Israeli Defense Minister Katz publicly threatened Hezbollah chief Qassem with 'fire that will burn Hezbollah and all of Lebanon' — directly to UN coordinator Hennis-Plasschaert. Qassem framed Lebanon-Israel direct talks as a 'grave sin'; Aoun publicly accused Hezbollah of 'dragging Lebanon into war for foreign interests.' The Lebanese government's negotiating mandate is now openly contested by the armed actor, on the record. Hezbollah-IDF strike exchanges continued Monday with the western Galilee drone-siren incident from Day 59 evening flash unresolved.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Bloomberg / Times of Israel / Athens Times / Ukrainska Pravda / WorldOil / Fox News',
      event: "Rubio formally rejects Iran Hormuz-first proposal: 'cannot normalize Iran controlling an international waterway'",
      summary:
        "Secretary of State Marco Rubio told Fox News the US will reject the Iranian proposal: 'If what they mean by opening the strait is yes, it's open—but you must coordinate with us, get our permission, or we'll blow you up and charge you anyway, then that is not opening… We cannot accept—and it must never become normalized—a system where Iranians decide who uses an international waterway and how much they must pay to do so.' Rubio further appeared to rule out any deal that defers the nuclear program: 'we have to ensure that any deal… is one that definitively prevents them from sprinting towards a nuclear weapon.'",
      impact:
        "First formal US-government rejection of Iran's Sunday proposal — Trump-NSC team reviewed it Monday per Leavitt, but the public-facing Cabinet line frames the proposal as definitionally not 'opening' the strait. The Iran-side framing of Hormuz-opening (Iranian permission, Iranian fees) is exactly the architecture Trump invoked in 'I'm the one that kept it closed' on April 23. Rubio's 'never normalize' wording closes the conceptual space for a Hormuz-first deal that preserves Iranian command-and-control of the strait. Analytical judgment: the four-mediator channel survives, but the proposal as submitted is dead; ceasefire probability moves -4 to 26 on the rejection. The window for a proposal that decouples Iranian permission from strait reopening — a substantively different concession — is now ~72 hours before the markets price the rejection structurally.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Jerusalem Post / CNN / Washington Post / CGTN / Al Jazeera / Moscow Times / The Week',
      event: "Putin-Araghchi St. Petersburg meeting: Russia visible coalition partner; 'strategic partnership at the highest level'",
      summary:
        "Putin met Araghchi in St. Petersburg Monday April 27 and pledged 'we will do everything that serves your interests and the interests of all the peoples of the region to ensure that peace is achieved as quickly as possible.' Araghchi described the relationship as 'strategic partnership at the highest level' that will continue 'regardless of circumstances.' Araghchi briefed Putin on the Pakistan-mediated proposal flow. Russia framed itself publicly as a peace-process actor — 'Russia ready to do its best to help bring peace to West Asia.'",
      impact:
        "Russia is now operating overtly as a coalition partner in the four-mediator architecture rather than back-channel only. Putin's 'we will do everything' framing is a deliberate echo of the Vienna trilateral activation signal that Day 56 evening flash flagged; the post-rejection meeting positions Moscow to claim mediator credit if Tehran softens on US permission/fees, or to claim Iranian solidarity if Tehran hardens. Moscow Times sourcing: framed by Russian audiences as 'Russia mediates after US-Iran talks collapse,' the same narrative Tehran wants. Analytical judgment: this is the highest-fidelity Russian visible activation of the war and shifts the China-Russia-Iran trilateral architecture from optionality to operating reality. The Bessent waiver cancellation now has a Russian counter-pressure response that will visibly resist its propagation through Asian buyers.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Al Jazeera / Times of Israel / VOA Emirates / Naharnet / Middle East Monitor / VINnews",
      event: "Israel Defense Minister Katz threatens to 'burn Hezbollah and all of Lebanon'",
      summary:
        "In a meeting with UN Special Coordinator for Lebanon Jeanine Hennis-Plasschaert, Israeli Defense Minister Israel Katz said Hezbollah chief Naim Qassem is 'playing with fire that will burn Hezbollah and all of Lebanon.' He told the UN envoy: 'If the Lebanese government continues to take cover under the wing of the Hezbollah terrorist organisation, fire will break out and engulf the cedars of Lebanon.' Statement issued by Katz's office; Netanyahu Monday separately said 'military action still needed to counter Hezbollah rockets and drones.'",
      impact:
        "Highest-intensity Israeli rhetoric against Lebanon since the original 2024 escalation. The 'cedars of Lebanon' phrasing pre-justifies an expansion of IDF operations to all-Lebanon depth rather than the seven-village forced-evacuation depth Day 59 captured. Katz delivering it in a UN-coordinator meeting (rather than to Israeli press) is a deliberate diplomatic-channel use to put the threat on multiple records simultaneously. Analytical judgment: this raises the kinetic ceiling on the Lebanon track to a Beirut-strike scenario the Day 59 single-clock direct-attack thread did not yet contemplate. Combined with the Aoun-Qassem rupture below, the political safety valves on the Lebanon track are now publicly inoperative.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Free Malaysia Today / Athens Times / Al-Monitor / WION / Al Jazeera / Israel National News",
      event: "Lebanese President Aoun-Hezbollah Qassem public rupture; Aoun: 'Hezbollah dragging Lebanon for foreign interests'",
      summary:
        "Hezbollah Secretary General Naim Qassem (Al-Manar TV statement) called Lebanon-Israel direct talks a 'grave sin' — 'We categorically reject direct negotiations with Israel… those in power should know that their actions will not benefit Lebanon or themselves.' 'We will not give up our weapons.' Lebanese President Joseph Aoun fired back, accusing Hezbollah of 'dragging Lebanon into conflict serving external, specifically Iranian interests' — 'My goal is to reach an end to the state of war with Israel, similar to the armistice agreement.' Both publicly accused each other of treason.",
      impact:
        "First openly bilateral state-vs-armed-actor rupture inside Lebanon since the Taif Accord era. Aoun's 'foreign interests' framing puts Iran on the record as the principal Hezbollah is serving — a public diplomatic gift to Israel's case for unilateral expansion of operations beyond the buffer zone. Qassem's 'grave sin' framing puts the Aoun-Sharaa US-mediated track into formal Hezbollah opposition territory. Analytical judgment: the Lebanese state cannot now negotiate Hezbollah disarmament terms with Israel because Hezbollah has publicly reserved its arms posture independent of the state. The Day 58 'meaningless ceasefire' framing is now operationalised on the Lebanese-political side, not just the kinetic side.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "CNBC / Al Jazeera Economy / Bloomberg / Angle360 / Reuters",
      event: 'Brent closes $108.23 Monday April 27 (~+3%); Citi flags $150 if disruption through June',
      summary:
        "Brent crude futures closed April 27 at $108.23/bbl, a near-3% intraday gain on the failed proposal-rejection news cycle and the unresolved Hormuz-first standoff. WTI closed above $96 (similar day percentage). Spot at one point traded above $107.80 intraday before easing. Citi analysts said Brent could reach $150/bbl if oil flows remain disrupted through end of June. Spot price was about 50% higher than at the start of the war on Feb 28.",
      impact:
        "The market priced the Rubio rejection cleanly as +3% — confirms the +2 Day 59 move on the Iranian proposal was directional rather than structural, and the rejection has now consumed it. Citi's $150-by-end-of-June framing is the first major-bank base-case downside scenario published; combined with the Bessent waiver-termination shutter-clock and Iran's reported loss of mine tracking, the curve now embeds a permanent-supply-removal signal that did not exist a week ago. For Taiwan/CPC, the Q3 procurement plan now operates above $108 floor with a Citi-flagged $150 risk; MOEA's no-Hormuz-through-October scenario is the central case.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'UK House of Commons Library / 2026 Strait of Hormuz Crisis Wikipedia',
      event: "Iran has 'lost track of mines' it planted in Hormuz — cannot fully reopen the strait if it wanted to",
      summary:
        "Per UK House of Commons Library briefing CBP-10636 and corroborating Wikipedia/Strait-of-Hormuz-crisis sourcing: 'Iran lost track of mines it planted in the Strait of Hormuz, and it is therefore unable to fully open the strait.' This becomes structurally significant in the context of US Navy de-mining (Peterson, Murphy) entering Day 4 of operations and the Iranian Hormuz-first proposal's implicit assumption that Iran could deliver strait-opening on demand.",
      impact:
        "If accurate, Iran's proposal to 'reopen' the strait is technically unenforceable on the Iranian side without USN cooperation — which means the Hormuz-first proposal is more bargaining tactic than deliverable concession. The Pentagon six-month framing carried by the Day 58 brief and the Hudson Institute one-week-passageway / four-week-clearance framing from Day 59 both look more credible than Iran's implicit position that it can simply turn the strait back on. Analytical judgment: Tehran knows it needs USN to do most of the de-mining work; the proposal therefore embeds an implicit Iranian acknowledgement that the US has the operational handle even if Tehran has the political handle. This raises the probability that a substantive next-round proposal includes coordinated US-Iran de-mining language rather than a unilateral Iranian 'reopen' commitment.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel April 27 liveblog / France 24 / multi-source carry-forward',
      event: 'Western Galilee Hezbollah-suspected drone unresolved; Netanyahu cancels criminal-trial testimony for security consult',
      summary:
        "Carry-forward from Day 59 evening flash: a Hezbollah-suspected drone triggered sirens in the western Galilee Monday morning (IDF lost contact); Netanyahu cancelled his criminal-trial testimony to chair an emergency security consultation on Hezbollah ceasefire violations. Sgt. Idan Fooks remains the first ceasefire-era direct-attack KIA; six wounded (four severely). IDF strikes continued in southern Lebanon Monday at the same Bint Jbeil/Tibnin/Yater tempo as Sunday, with Bekaa Valley targets added.",
      impact:
        "Lebanon kinetic tempo not de-escalated post-Sunday despite Aoun-track diplomatic activity. Bekaa Valley strikes are a depth expansion the prior buffer-zone framing did not include. Netanyahu's cabinet emergency consultation is the structural Israeli decision point on whether to escalate to the Beirut-strike level Katz's 'burn the cedars' threat publicly previewed. Analytical judgment: the next 24 hours of Lebanese-government-versus-Hezbollah dynamics + Netanyahu cabinet output is the determining input on whether this week's Lebanon trajectory matches the Hormuz trajectory.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat, incl. 6 KC-135 crew) · WIA: 395',
      delta: '+0 KIA / +0 WIA',
      status:
        "Hegseth-formalised 'shoot to destroy' ROE remains in force; blockade enters Day 16 with CENTCOM 38-ships-prevented stat unchanged. USS Frank E. Peterson and USS Michael Murphy de-mining ops enter Day 4 under Adm. Cooper. Hudson timeline: secure passageway in 1 week, full clearance up to 4 weeks. UK House of Commons reporting: Iran has 'lost track of mines it planted' — can't fully reopen even if it wanted to. CSG Lincoln Gulf of Oman; CSG Ford northern Red Sea; CSG Bush transiting toward Arabian Sea. Saturday-night Washington Hilton shooting fully resolved Monday — suspect Allen detained, Trump unaffected operationally.",
    },
    israel: {
      cumulative: 'KIA: 39 (24 civilians + 16 soldiers in Lebanon, incl. Sgt. Fooks Sunday) · WIA: 6,006 (4 severe added Sunday)',
      delta: '+0 KIA / +0 WIA reported in Monday window',
      status:
        "Defense Minister Katz to UN coordinator Hennis-Plasschaert: Hezbollah chief Qassem 'playing with fire that will burn Hezbollah and all of Lebanon.' Netanyahu Monday cabinet: 'military action still needed to counter Hezbollah rockets and drones'; cancelled criminal-trial testimony for emergency security consultation. IDF strikes continued in Bint Jbeil, Tibnin, Yater, plus Bekaa Valley targets. Western Galilee Hezbollah-suspected drone (Monday morning) unresolved.",
    },
    iran: {
      cumulative: "Iran Legal Medicine Organization: 'nearly 3,400' KIA (April 22 figure unchanged). HRANA: 3,636+ (April 7). Hengaw: 6,620+ military (April 8). 383 children under 18; 3.2M displaced.",
      delta: '+0 KIA / +0 WIA reported in Monday window',
      status:
        "Araghchi met Putin in St. Petersburg Monday — 'strategic partnership at the highest level'; Russia 'ready to do its best to help bring peace.' Tehran's Hormuz-first proposal formally rejected by Rubio Monday. Pakistan + Egypt + Turkey + Qatar four-mediator channel remains open but proposal as submitted dead. Mojtaba Khamenei home-front statement carries; Pezeshkian/Ghalibaf/Mohseni Ejei coordinated 'unified leadership' messaging continues. UK House of Commons: Iran lost track of its own mines.",
    },
    other: {
      cumulative: 'Lebanon: 2,310+ killed (cumulative; Monday window unchanged) · Iraq: 99+ killed · Gulf states: 32+ killed · UAE: 11 killed / 2,343 projectiles absorbed cumulatively.',
      delta: '+0 aggregated reported in Monday window (IDF strikes continuing; daily counts not yet published)',
      status:
        "Lebanese President Aoun publicly accuses Hezbollah of 'dragging Lebanon into conflict for foreign Iranian interests.' Hezbollah Sec-Gen Qassem frames Lebanon-Israel direct talks as a 'grave sin'; refuses Hezbollah disarmament. Pakistan + Egypt + Turkey + Qatar four-mediator hub continues; Russia now overtly visible after Putin-Araghchi St. Petersburg meeting. UK-led 40-nation FoN coalition continues acquiring co-signers; Macron-Starmer joint initiative carries. UN Hennis-Plasschaert positioned at the centre of the Katz threat-channel.",
    },
  },
  exec:
    "Monday delivered a US formal rejection of the Iranian Hormuz-first proposal within 24 hours of its delivery, an Israeli rhetorical escalation on Lebanon to 'burn the entire country' threat level, an unprecedented public Aoun-Qassem rupture inside the Lebanese state, and a Putin-Araghchi St. Petersburg meeting that converted Russia from back-channel to visible coalition partner. Secretary of State Rubio rejected the Iranian proposal directly: 'If what they mean by opening the strait is yes, it's open—but you must coordinate with us, get our permission, or we'll blow you up and charge you anyway, then that is not opening… We cannot accept—and it must never become normalized—a system where Iranians decide who uses an international waterway and how much they must pay to do so.' Rubio also explicitly ruled out any deal that defers Iran's nuclear program. Trump and the NSC reviewed the proposal Monday but the public Cabinet line frames it as definitionally insufficient. Defense Minister Katz, in a meeting with UN Special Coordinator Hennis-Plasschaert, threatened that 'fire will break out and engulf the cedars of Lebanon.' Hezbollah Secretary General Naim Qassem framed Lebanon-Israel direct talks as a 'grave sin' and declared Hezbollah will not give up its weapons; President Aoun fired back, accusing Hezbollah of 'dragging Lebanon into war for foreign [Iranian] interests.' Putin met Araghchi in St. Petersburg and pledged Russia would 'do everything' to bring peace, framing the relationship as 'strategic partnership at the highest level.' Brent closed $108.23 (~+3%); Citi flagged a $150-by-June risk path. UK House of Commons reporting: Iran has 'lost track of mines it planted' in the strait — meaning Tehran cannot fully reopen even if it wanted to. US Navy de-mining (Peterson, Murphy) enters Day 4 of operations under the Hegseth ROE. Analytical judgment: 30-day ceasefire probability moves 30 → 26 — the Iranian proposal that produced Day 59's +2 move was rejected within 24 hours, the Lebanon track has acquired an Israeli all-Lebanon escalation threat layered on an Aoun-Qassem state rupture, and Russia's overt activation post-Vienna trilateral is the diplomatic countermove the four-mediator architecture needed to survive the rejection.",
  implications: [
    {
      title: 'The Rubio rejection has consumed the Day 59 +2 — but the four-mediator channel still has structural reasons to survive',
      body:
        "Rubio's Monday public rejection consumes the Day 59 ceasefire-probability gain in clean form: the Iranian Hormuz-first proposal that produced +2 has been declared definitionally insufficient ('that is not opening'), and the nuclear-deferral component has been declared categorically unacceptable ('we have to ensure that any deal… is one that definitively prevents them from sprinting towards a nuclear weapon'). The -4 move to 26 is the price of having the proposal arrive in a non-bilateral format that no US press conference could cancel — the trade-off Tehran made was rapid US Cabinet-level rejection in exchange for a non-cancellable channel. The Day 59 implication that 'Tehran can yield on Hormuz, not on nuclear, in this window' has now collided with Rubio's framing that the nuclear cannot be deferred at all. There are three structural reasons the four-mediator channel survives the rejection: first, Pakistan, Egypt, Turkey, and Qatar are simultaneously committed reputation-bearers — none can be cancelled bilaterally; second, the UK House of Commons 'Iran lost track of its own mines' reporting means Tehran has technical incentive to coordinate de-mining even if it refuses to coordinate command-and-control; third, Putin's St. Petersburg activation Monday gives Russia visible mediator standing that Beijing will likely match within 72 hours rather than cede. Analytical judgment: expect a substantively different next-round proposal from Tehran via the same four mediators — likely a coordinated US-Iran de-mining proposal that decouples Iranian permission/fees from strait reopening, and either a verifiable nuclear pause in lieu of full suspension or a Russian/Chinese third-party guarantor architecture. The window is roughly 72 hours before markets price the rejection structurally.",
    },
    {
      title: 'The Lebanon track is now on a Beirut-strike conditional — Aoun-Qassem rupture removes the political safety valve',
      body:
        "Defense Minister Katz's 'fire will break out and engulf the cedars of Lebanon' threat, delivered to UN Special Coordinator Hennis-Plasschaert (rather than to Israeli press), is the highest-intensity Israeli rhetoric against Lebanon since the original 2024 escalation. The 'cedars of Lebanon' phrasing pre-justifies an expansion of IDF operations to all-Lebanon depth rather than the Day 59 seven-village evacuation depth, and the diplomatic-channel choice puts the threat on multiple records simultaneously — UN, Israeli MoD, Lebanese government. The political safety valves on the Lebanon track are now publicly inoperative: Hezbollah Sec-Gen Qassem framed Lebanon-Israel direct talks as a 'grave sin' and reserved the armed posture independent of the Lebanese state, while President Aoun fired back accusing Hezbollah of 'dragging Lebanon into war for foreign Iranian interests' — putting Iran on the record as the principal Hezbollah serves. That public Aoun-Qassem rupture is the first openly bilateral state-vs-armed-actor split in Lebanon since the Taif Accord era. The structural implication: the Lebanese state cannot now negotiate Hezbollah disarmament terms with Israel because Hezbollah has publicly reserved its arms posture independent of the state, which means the Aoun-track US-mediated process and the Hezbollah-IDF kinetic process are now operating on independent and orthogonal clocks — the first delivering political extension paper, the second delivering KIA and burn-Lebanon threats. Analytical judgment: the next 24 hours of Netanyahu cabinet output and any LAF intervention attempts are the determining inputs on whether this week's Lebanon trajectory matches the Hormuz trajectory; absent a US re-intervention specifically aimed at Hezbollah arms-disposition, the kinetic ceiling is now Beirut-strike rather than buffer-zone-expansion.",
    },
    {
      title: 'Russia overtly activated — Beijing 72-hour-clock starts; the China-Russia-Iran trilateral is now operating reality',
      body:
        "The Putin-Araghchi St. Petersburg meeting Monday converted the China-Russia-Iran trilateral from optionality (the Vienna trilateral with Grossi flagged on Day 56) to operating reality. Putin's 'we will do everything that serves your interests and the interests of all the peoples of the region to ensure that peace is achieved as quickly as possible' framing is a deliberate echo of the post-Vienna activation signal; Araghchi's 'strategic partnership at the highest level… regardless of circumstances' framing publicly elevates the Russia leg above the Pakistan/Egypt/Turkey/Qatar mediator hub. Russia is now claiming peace-process actor status on the same terms Tehran wants — 'Russia mediates after US-Iran talks collapse' is the Moscow Times-frame narrative tomorrow. This creates a 72-hour Beijing decision window: match Russian visibility (likely with a MOFA-level statement and possible Wang Yi positioning) or cede the trilateral leadership to Moscow. Bessent's waiver-termination signal has now acquired its visible counter-pressure response — Russian and Chinese visible activation will resist the termination's propagation through Asian buyers and complicate the shadow-fleet binary the Day 58 brief flagged. For Taiwan/CPC, the implication is asymmetric: the trilateral activation makes the Iran sanctioned-channel supply harder to remove (good for short-run Asian LNG availability if PRC buyers can absorb Iranian barrels in defiance posture) but harder to count on (bad for medium-run procurement architecture stability). Analytical judgment: Beijing's MOFA Tuesday/Wednesday briefing is the leading-indicator signal for whether the trilateral has actually consolidated, or whether Moscow is operating ahead of consensus. The Bessent waiver-termination shutter-clock now resolves inside a Russia-China-coordinated counter-pressure environment rather than a unilateral US blockade — which is exactly the architecture the four-mediator channel was designed to produce.",
    },
  ],
  casualtyNotes: {
    us: "No new KIA. Blockade enters Day 16; CENTCOM 38-ships-prevented stat unchanged. USS Frank E. Peterson and USS Michael Murphy de-mining ops enter Day 4 under Adm. Cooper. Hudson timeline: secure passageway in 1 week, full clearance up to 4 weeks. UK House of Commons reporting: Iran has 'lost track of mines it planted' — Tehran cannot fully reopen even if it wanted to. CSG Lincoln Gulf of Oman; CSG Ford northern Red Sea; CSG Bush transiting toward Arabian Sea. Hilton-shooting fallout fully resolved Monday operationally.",
    israel:
      'No new IDF KIA. Defense Minister Katz to UN coordinator Hennis-Plasschaert: Hezbollah chief Qassem "playing with fire that will burn Hezbollah and all of Lebanon." Netanyahu cancelled criminal-trial testimony for emergency security consultation. IDF strikes continued in Bint Jbeil, Tibnin, Yater, plus Bekaa Valley targets — depth expansion beyond prior buffer-zone framing. Western Galilee Hezbollah-suspected drone (Monday morning) unresolved.',
    iran:
      "No new Iranian military losses reported in Monday window. Araghchi met Putin in St. Petersburg — 'strategic partnership at the highest level.' Hormuz-first proposal formally rejected by Rubio Monday: 'we cannot normalize Iran controlling an international waterway.' Four-mediator channel (Pakistan, Egypt, Turkey, Qatar) survives the rejection; substantively different next-round proposal expected within 72 hours. UK House of Commons: Iran lost track of its own mines. Vahidi remains decisional axis; IRGC mine-laying continues per prior Axios sourcing.",
    other:
      'Lebanon: cumulative 2,310+ killed (Monday IDF strikes continuing in Bint Jbeil, Tibnin, Yater plus Bekaa Valley; Lebanese MOH daily counts pending). Aoun-Qassem public rupture: Aoun accuses Hezbollah of dragging Lebanon into war "for foreign Iranian interests"; Qassem frames direct talks as "grave sin," refuses Hezbollah disarmament. Putin overtly activates Russia as visible coalition partner. Pakistan + Egypt + Turkey + Qatar four-mediator hub remains open. UN Hennis-Plasschaert at centre of Katz "burn Lebanon" threat-channel. UK-led 40-nation FoN coalition continues; Macron-Starmer joint initiative carries.',
  },
};

export default data;
