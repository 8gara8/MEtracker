import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged. Trump claims very good progress and Qatar says both sides remain committed, but the US carried out minor strikes on Qeshm, widened the blockade, and Tehran demands practical measures before any talks.",
      risk7d:
        "Extreme and unchanged. The strikes were sized to air defences, not a return to major combat, but the IRGC says its missile-range limit is lifted and advisers reportedly urge Trump to act before the new Congress sits.",
      spillover:
        "Critical and unchanged. CENTCOM's new task force reaches toward Iran's land borders and the Caspian, another tanker is claimed mined, and Houthi media report 22 killed by Saudi strikes east of Sanaa.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump via CNBC and CBS News; Tasnim via CNBC; HNGN",
      event: "The US carries out 'minor strikes' on Iran",
      summary:
        "Trump told reporters in West Palm Beach on Friday evening that the US does minor strikes that knock out, saying an Iranian anti-aircraft device was knocked out in about 15 minutes, maybe five. He declined to discuss Qeshm. Tasnim reported two missiles struck the island and state TV two explosions, with no official word on damage. HNGN reports advisers split on resuming major operations.",
      impact:
        "The first strikes since the midterms, sized to air defences. The defensive-scoping and one-day-permit priors hold; no casualties reported.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Trump via CNBC and Ynetnews; International Media Office Qatar and Majed Al-Ansari via The Peninsula",
      event: "Trump claims progress; Qatar denies the talks failed",
      summary:
        "Trump said Iran wants to make a deal very badly and, per a Ynet headline, that the US is meeting Iran and making very good progress. Qatar's International Media Office called claims that the prime minister said the talks had failed false and misleading; spokesman Majed Al-Ansari said both sides remain committed and that Qatari mediators coordinate closely with Washington and Tehran.",
      impact:
        "Optimism from one party and a mediator's denial. No session, venue or text is named; graded as claims.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: "Ali Bagheri Kani to IRIB via CNBC; Ynetnews headlines",
      event: "Tehran wants practical measures, not paper commitments",
      summary:
        "Ali Bagheri Kani, deputy secretary of the Supreme National Security Council, told state broadcaster IRIB that Iran wants practical measures from the US and has rejected paper commitments before new talks. Ynet headlines carry an Iranian official viewing the mediators' latest proposal positively and another saying a new chapter can open when Washington honours its commitments.",
      impact:
        "The sequencing wall restated: deeds before talks. Warm words about the proposal do not change the ordering.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Abbas Araghchi via Tasnim; Qatar's Ministry of Foreign Affairs via The Peninsula (QNA)",
      event: "Araghchi calls twelve governments; Qatar and Saudi Arabia confer",
      summary:
        "Tasnim says Araghchi spoke with counterparts from Oman, Egypt, Jordan, Saudi Arabia, Qatar, Cyprus, Turkey, Kuwait, the UAE, Tunisia, Iraq and Pakistan in 48 hours, asserting Iran's right to self-defence and calling for regional security without outside powers. Qatar's prime minister and Saudi Arabia's Prince Faisal bin Farhan discussed de-escalation and a comprehensive agreement protecting navigation.",
      impact:
        "Mediator breadth keeps widening while the content stays general. Tehran courts the same hosts its advisers threatened on Day 253.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "CENTCOM via CBS News; Ynetnews",
      event: "CENTCOM takes the blockade inland with Task Force Iron Gate",
      summary:
        "CBS reports CENTCOM launched Task Force Iron Gate, about 20 civilian and military personnel based in Florida, to stop advanced weapons, dual-use technology, sanctioned materials and illicit revenue crossing Iran's land borders and the Caspian Sea. Adm. Brad Cooper said it reinforces the ironclad blockade at sea; the US says the blockade has kept about $25 billion of Iranian crude from sale.",
      impact:
        "Pressure extends toward the Russian-facing Caspian. No military operations announced; graded as an enforcement cell.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "CENTCOM via CBS News and TASS",
      event: "US aircraft disable the cargo ship M/V Huda",
      summary:
        "CENTCOM said US forces disabled the St. Kitts-flagged cargo ship M/V Huda in the Gulf of Oman on Saturday after its crew ignored repeated warnings and tried several times to break the blockade following a call at an Iranian port; a US aircraft fired precision munitions at its stern. TASS relayed the CENTCOM post. No casualties were reported.",
      impact:
        "Enforcement continues alongside the talks. CENTCOM's count stood at 144 vessels redirected through October.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC spokesman Hossein Mohebbi via Tasnim and CBS News",
      event: "The IRGC says its missile-range limit is lifted",
      summary:
        "Asked whether the leader's directive removed limits on missile range, IRGC spokesman Hossein Mohebbi said the restriction has been lifted, adding that Iran must show its capabilities on the battlefield rather than make claims first. CBS describes the limit as a self-imposed 1,200 miles. Tasnim says the IRGC will unveil a new underground missile city.",
      impact:
        "Declared-scope deterrence extends from geography to range. No capability shown; the declaration is the signal.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Iran's Navy and IRGC spokesman Hossein Mohebbi via Tasnim; CBS News",
      event: "Another unnamed tanker is claimed mined",
      summary:
        "Iran's navy said a tanker that ignored warnings and switched off its navigation systems hit a sea mine in the eastern Strait of Hormuz on Saturday morning, caught fire and was immobilised, naming no ship, flag or owner. Mohebbi mocked CENTCOM's Brad Cooper over drones the IRGC claims to have downed, including a 16th MQ-1 over Qeshm and a 55th MQ-9.",
      impact:
        "Another nameless hull and no maritime-authority confirmation located. The claim-inflation prior holds.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'high',
      source: "President Herzog's office via The Times of Israel and Al Jazeera; Ynetnews",
      event: "Herzog taps Eisenkot to form Israel's government",
      summary:
        "Herzog said on Saturday evening he would task Yashar leader Gadi Eisenkot with forming the government, after factions totalling 67 lawmakers recommended him against 46 for Netanyahu, with United Torah Judaism's seven recommending no one. The mandate is handed over Sunday at 5 p.m. and runs 28 days plus up to 14. Netanyahu said a unity government would permanently remove Iran's nuclear threat.",
      impact:
        "Israel's war leadership may change inside the lame-duck window. Eisenkot's Iran policy is not yet stated.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Houthi media and Yemen's health ministry via Tasnim; the Saudi-led coalition and the UN via CBS News",
      event: "The Saudi theatre produces a mass-casualty claim",
      summary:
        "Houthi media and a Sanaa hospital director, via Tasnim, say Saudi strikes on about six homes in Bani Hashish, east of Sanaa, killed at least 22, mostly women and children, and wounded 30. The coalition said it destroyed a Houthi missile fired toward Riyadh province. CBS cites the UN as counting more than 1,600 killed and 300,000 displaced since fighting resumed.",
      impact:
        "The Saudi theatre now yields large casualty claims weekly. Houthi figures stay unadopted.",
    },
    {
      id: 11,
      direction: 'neutral',
      importance: 'medium',
      source: "hormuz.now; Trading Economics",
      event: "Crossings slip to 2.7 a day; Brent ends the week near $98",
      summary:
        "hormuz.now counted 19 AIS-visible tanker crossings in the seven days to 7 November, 23:11 UTC, 2.7 a day against 47.6 before the crisis, and no LNG or LPG carrier; one LNG carrier crossed in thirty days. Trading Economics shows Brent at $98.32 for 6 November, flat on the day and down more than 12.5% on the week.",
      impact:
        "Crossings slip from 3.0. Weekend markets have not yet priced the Qeshm strikes or Iron Gate.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. Trump says nobody was hurt in the minor strikes; no US casualty reported and no CENTCOM casualty statement located. The thirty-ninth cycle with no disclosure statement.",
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
        "No new official war toll and no casualties reported from the Qeshm strikes. Tasnim's 168 Minab dead sit against at least 156 from local authorities in September reporting; the series is unchanged. The sixtieth day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No casualties reported on the M/V Huda or the tanker Iran says was mined. The Houthi-reported 22 killed and 30 wounded in Bani Hashish are held apart.",
    },
  },
  exec:
    "Washington struck Iran again on a small scale while both sides talked up diplomacy. Trump told reporters in West Palm Beach on Friday that the United States does \"minor strikes, but they knock out,\" describing an Iranian anti-aircraft device: \"we knocked it out in about 15 minutes, maybe five.\" Tasnim reported two missiles hit Qeshm Island, with no official word on damage, per CNBC and CBS. Trump also said Iran wants to \"make a deal very badly,\" and a Ynet headline quotes him saying the US is \"meeting with Iran and making very good progress.\" Qatar's media office called reports that its prime minister had declared the talks failed \"false and misleading,\" and its spokesman said Qatari mediators are in close coordination with both sides. From Tehran the signals hardened: Supreme National Security Council deputy Ali Bagheri Kani told state TV, per CNBC, that Iran wants \"practical measures,\" not \"paper commitments,\" and IRGC spokesman Hossein Mohebbi said the missile-range limit \"has been lifted for us.\" Abbas Araghchi spoke with twelve foreign ministers in 48 hours. CENTCOM widened the blockade: CBS reports a new Task Force Iron Gate aimed at Iran's land borders and the Caspian, and US aircraft disabled the St. Kitts-flagged cargo ship M/V Huda in the Gulf of Oman. Iran's navy claimed another unnamed tanker hit a mine. hormuz.now counted 2.7 crossings a day against 47.6 before the war, and Brent closed the week near $98. In Israel, President Isaac Herzog tasked Gadi Eisenkot, backed by 67 lawmakers, with forming a government, passing over Benjamin Netanyahu. In Yemen, Houthi media say Saudi strikes east of Sanaa killed 22. Direction stays mixed; the probability holds at 10.",
  implications: [
    {
      title: "Minor strikes and claimed progress: the two clocks run in opposite directions again",
      body:
        "Under the multi-clock framework, the active-deadline clock produced action below the threshold Trump has been signalling, while the negotiation-capacity clock produced words on both sides and no text. Trump confirmed \"minor strikes\" on an Iranian air-defence device, and Tasnim reported two missiles on Qeshm; CNBC notes these were the first strikes since the midterms, after a strike on the same island on Monday that a US official called defensive. That fits the defensive-scoping prior: a strike sized to air defences near the strait is not the return to major combat that HNGN says some advisers want before the new Congress sits. In the same remarks Trump said Iran wants to \"make a deal very badly,\" and a Ynet headline has him saying the US is \"meeting with Iran and making very good progress.\" That is one party's claim, and the counters are specific. Qatar's media office had to deny that its prime minister declared the talks failed, saying only that both sides remain committed; a Ynet headline quotes the Qatari prime minister that they have yet to reach \"full agreement\"; and Bagheri Kani told IRIB that Tehran wants \"practical measures\" rather than \"paper commitments,\" the sequencing-wall prior restated. Critical Threats assessed on 4 November that Iranian leaders read the midterms as proof their strategy imposed costs on Washington, which argues against Tehran softening its order of steps now. No session, venue or text is named. The probability holds at 10.",
    },
    {
      title: "The blockade moves inland, the missile range is declared open, and the sea claims stay nameless",
      body:
        "The coercion clocks moved on both sides of the strait. CBS reports CENTCOM stood up Task Force Iron Gate, about 20 civilian and military personnel based in Florida, to stop weapons, dual-use technology and revenue crossing Iran's land borders and the Caspian; the announcement did not say whether military operations are involved, so this file grades it as an enforcement cell, not a new front. The Caspian is the route Russian supply would take, which ties the task force to the air-defence resupply prior; a Ynet headline says Iran is \"optimistic\" Russia will supply advanced systems, and no Russian statement was located. CENTCOM also said a US aircraft hit the stern of the M/V Huda after its crew tried several times to run the blockade, a disabling relayed by TASS. Tehran answered in declared scope. Mohebbi said the range limit, 1,200 miles per CBS, \"has been lifted for us,\" while calling it \"inappropriate to make claims before they are put into practice\": deterrence by declaration, with its own caveat. Iran's navy claimed a tanker running dark hit a mine east of the strait on Saturday morning; like the IRGC's claims all week, it names no hull. The hull-named-by-the-third-party prior holds, since the only named casualty ship this week came from its manager, and crossings slipped to 2.7 a day from 3.0.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; Brent near $98 over the weekend and LNG traffic still at zero",
      body:
        "No fresh Taiwan-specific development was located, and prior assessments are unchanged. Trading Economics now shows Brent at $98.32 for the 6 November close, flat on the day and still down more than 12.5% on the week; markets were shut for the weekend, so the Qeshm strikes and the new blockade task force are unpriced until Monday's open in Asia. The diplomacy-priced-not-supply prior holds in its plainest form: hormuz.now counted 19 tanker crossings in seven days, 2.7 a day or about 6% of the pre-crisis 47.6, and no LNG or LPG carrier in seven days, with one LNG carrier in thirty. For Taipower's gas-heavy generation, the binding variables are volume and the Qatari force majeure last reported into early December, not the Brent quote. Two items raise the risk premium without changing volume: Iran's declared end to its missile-range limit, which widens the area war-risk underwriters must price, and US strikes on Qeshm, which sits beside the shipping lane. Oman's 5 November readout with Araghchi spoke of joint technical mechanisms for trade and energy flows, but no schedule has followed. The supplementary budget for Taipower and CPC remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split stays held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle.",
    iran:
      "No new official war toll; no casualties reported from the Qeshm strikes. The execution series carry unchanged and unmerged.",
    other:
      "No adopted change. Iran's mined-tanker claim names no vessel or casualty; Houthi-reported Bani Hashish casualties are held apart.",
  },
};

export default data;
