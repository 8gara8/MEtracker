import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. The IRGC launched two drones at a US asset in Bahrain, its first claimed attack on a Gulf host since early September, and Iran says more tankers hit mines, while Israel's security chiefs reportedly push for a strike over the army chief's objection.",
      risk7d:
        "Extreme and unchanged. CENTCOM intercepted both drones without damage and has not retaliated, but the IRGC promises to answer any repeat strike like Sirik without limits, and Mossad's chief is in Washington on Iran.",
      spillover:
        "Critical and unchanged. A Gulf host state is targeted again, the GCC tells the Security Council Iran has fired over 7,000 missiles and drones since February, the Houthis claim Riyadh airport, and Tehran warns South Korea off Hormuz.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC via Tasnim; CENTCOM via Iran International and Alhurra; Reuters via Al Jazeera",
      event: "The IRGC fires two drones at Bahrain; CENTCOM shoots both down",
      summary:
        "The IRGC Aerospace Force said it targeted and destroyed a US early-warning radar in Bahrain in retaliation for an air attack on a telecommunications tower in Sirik. CENTCOM said the IRGC launched two one-way attack drones toward Bahrain and US forces shot both down, with no injuries or damage. Reuters calls it the first such claim since early September. No Bahraini statement was located.",
      impact:
        "The 65-day host-state count ends; the radar claim and the no-damage claim each rest on one side.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'medium',
      source: "Ahmad Vahidi via Tasnim and Iran International",
      event: "IRGC commander Vahidi promises devastating strikes for any aggression",
      summary:
        "Speaking at a Tehran funeral for 110 unidentified soldiers from the Iran-Iraq war, IRGC commander Ahmad Vahidi said the slightest aggression will be answered with devastating and painful strikes and that revenge for the killing of Ali Khamenei will be achieved. The IRGC statement on Bahrain warned of a response without limits if violations recur.",
      impact:
        "Tehran ties its retaliation to each new strike, which shortens the escalation ladder.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Iranian Army and IRGC Navy via Tasnim; Reuters via gCaptain; Times of Israel",
      event: "Iran says two more tankers and a gas carrier hit mines in the strait",
      summary:
        "Iran's army said two more oil tankers hit sea mines and caught fire in the eastern Strait of Hormuz on Thursday after ignoring warnings and switching off their systems. The IRGC Navy said a gas carrier using the prohibited southern route hit a mine on Friday and exploded; Tasnim calls it LPG and Reuters LNG. No vessel was named.",
      impact:
        "Iran now presents mines as the enforcement tool for its traffic regime; no hull is confirmed.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: "UKMTO and the Washington Institute via gCaptain",
      event: "UKMTO counts seven tanker attacks in a week; transits about 65% below normal",
      summary:
        "UKMTO's weekly assessment recorded eight maritime security incidents, seven of them tanker attacks, five inside the strait; three ships continued, three needed help and none sank. It counted 139 outbound and 169 inbound transits, including unverified US-facilitated ones, about 65% below pre-conflict levels. The Washington Institute counts at least 10 ships hit in early November after 37 in October.",
      impact:
        "Third-party counts confirm a high attack rate but attribute no single hull to Iran.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "IAEA confidential report via Al Jazeera and Times of Israel",
      event: "The IAEA says it cannot rule out diversion of Iran's nuclear material",
      summary:
        "The confidential report says the agency is not able to conclude that there has been no diversion of declared nuclear material, does not know the Isfahan enrichment plant's location or contents, and calls the lack of access a serious proliferation concern. Iran told the agency inspections cannot resume amid US threats and objected to a $20 million US reward offer.",
      impact:
        "Strengthens the Israeli case for action; the roughly 440 kg of 60% uranium stays unverified.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "Axios, Channel 12 and Kan via Times of Israel",
      event: "Mossad chief meets the CIA director on Iran; Zamir is the lone holdout",
      summary:
        "Mossad director Roman Gofman met CIA Director John Ratcliffe in Washington about Iran and may meet Steve Witkoff in Miami. Channel 12 says Netanyahu did not tell Eisenkot, and that Netanyahu, Gofman, Zini, Ben Ezra and Leiter favour a strike while army chief Eyal Zamir opposes one. A Kan source says the army is preparing for war.",
      impact:
        "The caretaker-risk prior tightens; the army remains the only internal brake.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: "Times of Israel (Jacob Magid, two officials)",
      event: "US, Iranian and Qatari negotiators fear Netanyahu could torpedo talks",
      summary:
        "Two officials say negotiators on all sides fear Netanyahu will authorise an operation against Iran, but still believe a final or interim deal is possible. Gaps remain: Iran refuses to ship out its enriched uranium, seeks reparations and wants tolls including on military vessels. Vance reportedly worried about Netanyahu's near-daily calls urging Trump to resume the war.",
      impact:
        "The talks survive Trump's no-deal post at working level, with Israel seen as the main spoiler.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "QNA via The Peninsula; Al Jazeera",
      event: "Qatar and Türkiye sign a joint defence agreement",
      summary:
        "The Amir and President Erdogan signed the agreement at Dolmabahce Palace in Istanbul alongside a memorandum on peacebuilding and conflict resolution. Al Jazeera reports a pledge of a unified stance against any external armed attack on either party, and Erdogan said both would work to prevent a return of war in the Gulf. An analyst says Gulf states see US guarantees as unreliable.",
      impact:
        "The main mediator hedges its security beyond Washington.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "GCC via The Peninsula and Iran International; Yahya Saree via Iran International; CNBC",
      event: "The GCC briefs the Security Council as the Houthis claim Riyadh airport",
      summary:
        "Speaking for the GCC at the Security Council, Bahrain's envoy said Iran has fired over 7,000 missiles and drones at Gulf states since February, disrupting about 1,600 vessels and stranding over 23,000 seafarers. The GCC chief welcomed UK-drafted Resolution 2837 demanding the Houthis halt attacks. Saree claimed drones on King Khalid airport and an East-West pipeline pumping station; Riyadh has not confirmed.",
      impact:
        "The Gulf moves its case to the UN while the proxy front stays active.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Esmaeil Baghaei (X) via Tasnim; Korea JoongAng Daily",
      event: "Tehran warns states, read as South Korea, against joining US operations",
      summary:
        "Baghaei wrote that any deployment of naval forces, equipment or personnel supporting US action would be a hostile and unlawful act amounting to participation in aggression, quoting a Korean proverb about a sparrow following a stork. Seoul's cabinet approved moving the Cheonghae unit south of Oman with minesweeping drones, pending a National Assembly vote, citing noninvolvement and nonintervention.",
      impact:
        "East Asian naval contributions near Hormuz now draw named Iranian warnings.",
    },
    {
      id: 11,
      direction: 'de-escalating',
      importance: 'medium',
      source: "IEA Oil Market Report; CNBC; Trading Economics",
      event: "The IEA says supply exceeds demand; Brent posts a second weekly fall",
      summary:
        "The IEA says global supply rose 2.3 mb/d to 105.4 mb/d in October and now exceeds demand for the first time since the war began; Gulf exports are 26% below pre-war and on-land stocks are the lowest since at least 2016. Brent settled at $95.84, down about 2.5% on the week, as Washington keeps the blockade.",
      impact:
        "Crude stress eases at the margin; diesel and gas stay tight.",
    },
    {
      id: 12,
      direction: 'escalating',
      importance: 'medium',
      source: "hormuz.now; Iran International; Chinese foreign ministry",
      event: "Crossings fall to 2.3 a day; South Pars repairs prompt a gas-saving call",
      summary:
        "hormuz.now counted 16 tanker crossings in seven days to 13 November, 2.3 a day against 47.6 before the crisis and down from 2.9, with no LNG or LPG carrier in seven days. Iran's acting oil minister urged households to save gas while a damaged South Pars Phase 14 platform is repaired. China's 13 November briefing had no Iran item.",
      impact:
        "Visible flow falls to about 5% of normal; gas is short on both sides of the strait.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. CENTCOM reports no injuries from the two drones shot down near Bahrain. Hegseth's 18 stays held apart from the 15 on the casualty series. The forty-fifth cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll and no casualty detail for the Sirik tower strike. The host-state count ends at 65 days with the confirmed IRGC drone launch toward Bahrain.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No crew casualties are reported for the vessels Iran says hit mines. The GCC's Security Council figures are held apart.",
    },
  },
  exec:
    "Iran fired at a Gulf host state for the first time in about two months. The IRGC said its Aerospace Force \"targeted and destroyed\" a US early-warning radar in Bahrain, in retaliation for an air attack on a telecommunications tower in Sirik. US Central Command said the IRGC launched two one-way attack drones toward Bahrain and US forces shot both down, with \"no injuries or damage.\" Reuters, via Al Jazeera, calls it the first claimed Iranian attack on US military assets in a Gulf country since early September. No one has claimed the Sirik strike, and no Bahraini statement was located. At sea, Iran's army said two more tankers hit mines and caught fire in the eastern strait, and the IRGC Navy said a gas carrier hit a mine on Friday; none was named. hormuz.now counted 2.3 tanker crossings a day, down from 2.9. IRGC commander Ahmad Vahidi promised \"devastating and painful strikes\" for the slightest aggression. Foreign Ministry spokesman Esmaeil Baghaei warned that states joining US operations would be treated as participants, a message Korean media read as aimed at Seoul's naval expansion south of Oman. A confidential IAEA report said the agency cannot conclude that no nuclear material has been diverted. In Israel, Mossad chief Roman Gofman met CIA Director John Ratcliffe in Washington, and Channel 12 reported that army chief Eyal Zamir is the only security chief against an immediate strike. The Times of Israel reports that US, Iranian and Qatari negotiators fear Netanyahu could torpedo talks but still think a deal is possible. Qatar and Türkiye signed a defence pact. The IEA says supply now exceeds demand; Brent settled at $95.84. Direction turns escalating; the probability holds at 10.",
  implications: [
    {
      title: "Iran fires at a host state again, in a form built to be intercepted",
      body:
        "Under the multi-clock framework, the interceptor clock moved for the first time in weeks, and the host-state count ends at 65 days. The IRGC claimed it \"targeted and destroyed\" a US early-warning radar in Bahrain; CENTCOM said both drones were shot down with \"no injuries or damage.\" The divergence is the information. Two drones are a signal, not a strike package, and the IRGC framed the launch as retaliation for an air attack on a telecommunications tower in Sirik that nobody has claimed. The official-claim rule cuts both ways: the radar's destruction rests on the IRGC alone, the absence of damage on CENTCOM alone, and Al Jazeera's Washington correspondent says neither can be confirmed. What is not disputed is that the IRGC chose a Gulf host and a US asset, the first such claim since early September, per Reuters. That gives substance to Rezaei's \"no safe haven\" and to Vahidi's promise of \"devastating and painful strikes.\" No Bahraini statement, US retaliation or Trump comment was located by this morning, consistent with Washington's reported preference for the blockade and sanctions over renewed combat. The defensive-scoping prior holds: CENTCOM stressed interception, not response. The risk is ladder logic. The IRGC has now publicly committed to answer any repeat \"without limits,\" which shortens the step from signalling to an exchange neither negotiating team wants. Direction moves to escalating; the probability holds at 10 because no channel closed.",
    },
    {
      title: "Israel's spy chief goes to Washington while negotiators fear Netanyahu",
      body:
        "The caretaker-risk prior, eased yesterday, tightens again, and the active-deadline clock now turns partly on Israel's security cabinet. Axios, via the Times of Israel, reports that Mossad director Roman Gofman met CIA Director John Ratcliffe in Washington on Friday about Iran and may see envoy Steve Witkoff in Miami; Channel 12 says Netanyahu did not tell Eisenkot at Thursday's briefing. Channel 12 lists Netanyahu, Gofman, Shin Bet's David Zini, the National Security Council's Shmuel Ben Ezra and Ambassador Yechiel Leiter as favouring a strike, with chief of staff Eyal Zamir the lone holdout. These are sourced claims, not decisions. Or Asher of the Tachlith Institute told Al Jazeera that a caretaker prime minister \"can legally take Israel to war.\" Against that, the Times of Israel's Jacob Magid reports that US, Iranian and Qatari negotiators all fear Netanyahu could torpedo the talks, yet still believe a final or interim deal is possible. The gaps are the standing ones: Iran will not ship out its enriched uranium, wants reparations, and wants tolls including on military vessels. The IAEA's confidential report strengthens Israel's case: the agency \"is not able to conclude that there has been no diversion,\" does not know where the Isfahan enrichment plant is, and calls the gap a \"serious proliferation concern.\" Iran replies that inspections cannot resume under US threats. Israel's independence prior is live again: pressure on the 24 November window may come from Jerusalem, not Washington.",
    },
    {
      title: "Taiwan: Seoul becomes the test case for East Asian navies near Hormuz; the oil surplus does not reach LNG",
      body:
        "One indirect Taiwan-relevant development. Foreign Ministry spokesman Esmaeil Baghaei warned, via Tasnim, that any state deploying forces or logistics in support of US operations commits \"a hostile and unlawful act.\" Korea JoongAng Daily reads it as aimed at Seoul, whose cabinet approved moving the Cheonghae unit south of Oman with unmanned minesweeping equipment, pending a National Assembly vote; Seoul cites \"noninvolvement and nonintervention.\" For Taipei this is a template: an East Asian importer that sends escort or mine-countermeasure assets toward Hormuz should expect to be named by Tehran. On supply, the IEA says global output, 105.4 mb/d in October, exceeds demand for the first time since the war began, with Gulf exports 26% below pre-war; Brent settled at $95.84, down about 2.5% on the week, per CNBC. The recovery is crude, not gas. hormuz.now counted 2.3 tanker crossings a day against 47.6 before the crisis, down from 2.9, and no LNG or LPG carrier in seven days. The IRGC's unverified claim that a gas carrier was mined on the southern route on Friday signals that any cargo trying that route is a target. The IEA puts on-land stocks at their lowest since at least 2016. For Taipower the binding variable stays Qatari LNG under force majeure into December. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. CENTCOM reports no injuries or damage from the Bahrain drones; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll; no casualty detail for the Sirik tower strike. Execution series carry unchanged and unmerged. The host-state count ends at 65 days with the confirmed IRGC drone launch toward Bahrain.",
    other:
      "No adopted change. No crew casualties reported for the vessels Iran says hit mines. GCC Security Council figures, IMO, Houthi and TASS-cited Saudi figures are held apart.",
  },
};

export default data;
