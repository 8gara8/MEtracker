import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged. Trump calls renewed war highly unlikely if Iran signs a strong agreement, but Araghchi says mediators have stopped travelling and threatens to rain down hell, and a Ynet headline has Rubio calling Iran's demands ridiculous.",
      risk7d:
        "Extreme and unchanged. Trump names infrastructure targets, including 38 bridges and power plants, and says his carriers are locked and loaded; Qeshm blasts and two more claimed minings keep the strait contested.",
      spillover:
        "Critical and unchanged. A Houthi attack damaged an Aramco tower in Riyadh, a projectile halted the Khor Mor gas field in Iraqi Kurdistan, and Houthi health officials now count 33 killed by Saudi strikes near Sanaa.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "Donald Trump to CNN via Rudaw, Al Jazeera and CBS News; Israel's Channel 13 via Rudaw",
      event: "Trump calls renewed war 'highly unlikely' if Iran signs a deal",
      summary:
        "Trump told CNN that renewed attacks are highly unlikely to be necessary if Iran signs a very strong agreement, repeating the phrase five times in a 20-minute call, per Rudaw. He said three carriers are fully locked and loaded, that the other one just arrived, and that 38 bridges could be destroyed in about an hour. Channel 13 reports CENTCOM told Israel Tehran strikes would target power plants and bridges.",
      impact:
        "Conditional de-escalation paired with a named infrastructure target set. The opposite-running-clocks prior holds.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Abbas Araghchi on X via Al Jazeera, Rudaw and CBS News",
      event: "Araghchi threatens to 'rain down hell' and says mediation has paused",
      summary:
        "Araghchi wrote that Iran would rain down hell and not go easy on American targets if the US resumes attacks, and that the two-day proposal stands: meet the requirements, including an end to war on all fronts, and see results. He said American voters had made their choice and the White House should make its own, and that mediators stopped travelling after the midterms.",
      impact:
        "The mediation is paused by Tehran's own account. The all-fronts condition widens the sequencing wall to Lebanon and Yemen.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Ynetnews section headlines",
      event: "A Ynet headline has Rubio saying the US is 'not close to breakthrough'",
      summary:
        "A Ynet section headline quotes Secretary of State Marco Rubio: not close to breakthrough with Iran, its demands are ridiculous and unrealistic. The page carries no date or article text, and no State Department page was reachable to confirm the wording or occasion. Other Ynet headlines carry Trump saying Iron Gate forces operate at full capacity and Araghchi saying the offer stands.",
      impact:
        "If accurate, the administration's diplomat is less optimistic than its president. Graded as a headline, not a position.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: "IRNA via TASS, Rudaw and Al Jazeera; Fars via Rudaw",
      event: "Qeshm blasts again, with no US confirmation",
      summary:
        "IRNA reported four explosions heard in several locations on Qeshm on Sunday, with no further details, per TASS. Fars attributed explosions on Qeshm and in Bandar Abbas to warning shots at vessels using routes Iran deems unauthorised. Al Jazeera, citing IRNA, also reports blasts in Jask and Sirik. No US statement confirmed strikes; Rudaw says the US reportedly hit Qeshm twice in the past week.",
      impact:
        "Another round of Qeshm blasts, now with an Iranian explanation that points away from US fire. Unconfirmed either way.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy via Tasnim; UKMTO and the UAE via CBS News; CENTCOM via Al Jazeera",
      event: "Two more unnamed tankers are claimed mined; third-party fires reported",
      summary:
        "The IRGC Navy said on Saturday night that two tankers using unauthorised routes with navigation systems off struck mines in and east of the strait and were engulfed in flames, naming neither. CBS reports a UKMTO tanker fire near Khasab and a UAE rescue of 22 crew from a burning cargo ship in the Sea of Oman. Al Jazeera cites CENTCOM: 147 vessels redirected since July, five disabled.",
      impact:
        "Third-party fires now sit beside Iran's claims, but no hull is named and no mine is confirmed.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: "A Revolutionary Guard spokesman and Trump via CBS News; Deputy Minister Hooshang Bazvand via Tasnim; US Treasury OFAC",
      event: "Tehran dismisses Iron Gate and ratifies a Russian railway",
      summary:
        "A Revolutionary Guard spokesman called Task Force Iron Gate merely a wordplay; Trump said it is in full force and effect and that very little gets into or out of Iran. Deputy roads minister Hooshang Bazvand told Tasnim the Supreme National Security Council ratified the Rasht-Astara railway deal with Russia, with the last 37 km of the 162 km route handed to the Russian contractor. OFAC designated eight Canadian exchange houses on 6 November.",
      impact:
        "Tehran answers a land blockade with a Russian land corridor. No Iron Gate action has been reported.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi Ministry of Energy, the Saudi-led coalition and Qatar's Ministry of Foreign Affairs via The Peninsula; Al Jazeera; Tasnim",
      event: "A Houthi attack damages an Aramco tower in Riyadh",
      summary:
        "Saudi Arabia's energy ministry said an attempted attack on an Aramco administrative building in Riyadh caused minor damage from falling shrapnel and no casualties; witnesses cited by Tasnim describe extensive damage across several floors of a King Abdullah Financial District tower. Coalition spokesman Turki al-Maliki said missiles at Riyadh and the Eastern Province were destroyed, and the coalition said it destroyed two launchers in Saada. Qatar condemned the attacks.",
      impact:
        "The Houthis reach Riyadh's financial core. The Saudi theatre keeps escalating beside the Iran file.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Yemen's Houthi-run health ministry via Al Jazeera and Tasnim; Oman's Ministry of Foreign Affairs",
      event: "The Houthi toll from Saudi strikes near Sanaa rises to 33",
      summary:
        "Houthi health ministry spokesman Anees al-Asbahi says coalition strikes on al-Shariyah village in Bani Hushaish killed 33, including eight women and 13 children, and wounded 39, up from Saturday's 22. Houthi spokesman Yahya Saree claims 105 coalition strikes in 24 hours. Oman's foreign minister met UN envoy Hans Grundberg on the escalation's regional spillover. The coalition has not commented on the toll.",
      impact:
        "Houthi figures stay unadopted. Oman now works the Yemen file alongside the Iran file.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Rudaw, relaying the KRG electricity ministry and security sources",
      event: "A projectile halts the Khor Mor gas field in Iraqi Kurdistan",
      summary:
        "An unidentified projectile hit the gas storage and truck-loading unit at Khor Mor, west of Sulaimani, late Sunday, causing a large fire and halting production; the KRG electricity ministry says generation falls by 2,800 megawatts. A security source said it was launched from Tuz Khurmatu; Telegram channels linked to pro-Iran Iraqi groups claimed a suicide drone. No casualties were reported. It ends a lull of nearly four months.",
      impact:
        "Proxy pressure resumes on Iraqi energy. No claim from Iran itself.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'high',
      source: "Al Jazeera; Ynetnews headlines; Defence Minister Israel Katz via CBS News",
      event: "Eisenkot receives the mandate; Katz says the Iran mission is not complete",
      summary:
        "Herzog formally tasked Gadi Eisenkot with forming a government; Eisenkot said he is open to Netanyahu and Smotrich joining, rules out the Arab-led parties, and has six weeks. Herzog cited a new political reality in the US after the midterms. Katz said the mission against Iran is still not complete and warned Hezbollah against joining Iran; a Ynet headline has him saying Israel is in real danger.",
      impact:
        "Israel's war leadership is in flux, but the defence minister signals continuity. Eisenkot's Iran line is still unstated.",
    },
    {
      id: 11,
      direction: 'neutral',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; NIOEC via TASS",
      event: "Crossings edge up to 3.1 a day; Brent near $98",
      summary:
        "hormuz.now counted 22 AIS-visible tanker crossings in the seven days to 8 November, 23:12 UTC, 3.1 a day against 47.6 before the crisis, and no LNG or LPG carrier; IMF PortWatch tanker deadweight ran at 0.6% of normal to 1 November. Trading Economics shows Brent near $98. NIOEC's chief told state TV that 80% of Iran's damaged oil storage is restored.",
      impact:
        "A small uptick in crossings, still about 7% of normal. Monday's Asian open was not captured.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported and no CENTCOM statement on the reported Qeshm blasts located. The fortieth cycle with no disclosure statement.",
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
        "No new official war toll and no casualties reported from the Qeshm explosions. The sixty-first day with no confirmed Iranian attack on a host state's territory; the Khor Mor strike is claimed only by channels tied to pro-Iran Iraqi groups.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No casualties reported at Khor Mor, at the Riyadh Aramco tower, on the tankers Iran says were mined, or in the UAE crew rescue. The Houthi-reported 33 killed and 39 wounded at al-Shariyah are held apart.",
    },
  },
  exec:
    "Trump and Tehran traded conditional threats while the mediation itself stalled. Trump told CNN that renewed war is \"highly unlikely\" if Iran signs \"a very strong agreement,\" but said three carriers are \"locked and loaded\" and that US forces could destroy 38 Iranian bridges in about an hour, per Al Jazeera and Rudaw. Abbas Araghchi answered on X that Iran would \"rain down hell\" if attacks resume and that its two-day proposal \"stands,\" while saying mediators have stopped travelling since the US midterms: \"We have to wait.\" A Ynet headline quotes Secretary of State Marco Rubio saying the US is \"not close to breakthrough with Iran\" and that its demands are \"ridiculous and unrealistic.\" IRNA reported four explosions on Qeshm, which no US source confirmed, and the IRGC Navy said two more unnamed tankers caught fire after hitting mines. CBS reports a separate tanker fire near Khasab and a UAE rescue of 22 crew from a burning cargo ship in the Sea of Oman. Iran's military called CENTCOM's new Task Force Iron Gate \"wordplay,\" and Tasnim says Iran's security council has ratified the Rasht-Astara railway deal with Russia, the kind of land route the task force targets. Spillover widened: a Houthi attack damaged an Aramco tower in Riyadh's financial district, which Saudi Arabia's energy ministry called an attempted attack with minor damage, and a projectile halted the Khor Mor gas field in Iraqi Kurdistan, which the regional electricity ministry says cuts 2,800 megawatts. In Israel, Gadi Eisenkot received the mandate and invited Netanyahu to join him. hormuz.now counted 3.1 crossings a day against 47.6 before the war. Direction stays mixed; the probability holds at 10.",
  implications: [
    {
      title: "Conditional threats on both sides, and a mediation that has stopped moving",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock slowed even as both principals talked about a deal. Araghchi's own account is the clearest evidence: mediators have not travelled since the US midterms, and Tehran says \"we have to wait.\" His two-day proposal is now framed around \"requirements, including end to war on all fronts,\" which reaches Lebanon and Yemen and restates the sequencing-wall prior in wider form. Trump's line on CNN, that renewed war is \"highly unlikely\" if Iran signs \"a very strong agreement,\" is conditional optimism from one party. The counter comes from inside his own administration, in a Ynet headline quoting Rubio that the US is \"not close to breakthrough with Iran\" and that Tehran's demands are \"ridiculous and unrealistic.\" The coercive half of Trump's message was specific: three carriers \"locked and loaded,\" \"the other one just arrived,\" and 38 bridges that could go \"in literally one hour,\" while Israel's Channel 13, via Rudaw, says CENTCOM told Israel that strikes on Tehran would target power plants and bridges. That points the active-deadline clock at infrastructure rather than air defences if the lame-duck window is used. Tehran's rhetoric hardened in step: Rezaei told Washington \"you lost the war and the election,\" and IRGC spokesman Mohebbi called the conflict an \"existential war.\" No session, venue or text is named. The probability holds at 10.",
    },
    {
      title: "The blockade's land turn meets a Russian railway, and the Gulf periphery takes the hits",
      body:
        "The coercion and spillover clocks moved at the edges rather than in the strait itself. Tehran called Task Force Iron Gate \"merely a wordplay,\" per CBS, yet the same day Tasnim reported that the Supreme National Security Council had ratified the Rasht-Astara railway agreement with Russia, with the last 37 km of the 162 km route handed to the Russian contractor. That is the North-South corridor where a land-and-Caspian blockade would have to bite, so the blockade-goes-inland prior now has a named counter-move, though the line is far from carrying freight. Trump says Iron Gate is \"in full force and effect\"; no action by it has been reported. At sea, the hull-named-by-the-third-party prior is partly tested: the IRGC Navy again names no ship for its two mined tankers, but CBS reports a UKMTO tanker fire near Khasab and a UAE rescue of 22 crew from a burning cargo ship in the same window. Neither report names a vessel or links it to a mine. The periphery took the heavier blows. A Houthi attack damaged an Aramco tower in Riyadh's financial district; Saudi Arabia's energy ministry calls it an attempted attack with minor shrapnel damage, while witnesses cited by Tasnim describe extensive damage across several floors. In Iraqi Kurdistan a projectile halted Khor Mor, which supplies most of the region's power, and Telegram channels tied to pro-Iran Iraqi groups claimed a suicide drone. Iran itself is not shown to have struck a host state, so the 61-day count holds.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; Gulf energy assets hit at the edges while LNG traffic stays at zero",
      body:
        "No fresh Taiwan-specific development was located, and prior assessments are unchanged. The energy-infrastructure clock moved in two places that touch Asian buyers only indirectly. The Riyadh strike hit an Aramco administrative tower, not export capacity, but it shows Houthi reach into the Saudi capital on the day the coalition says it destroyed launchers in Saada. Khor Mor is a domestic Kurdish gas field, not an LNG source, so it bears on Iraqi power rather than Taiwan's cargoes. The binding variable stays volume: hormuz.now counted 22 tanker crossings in seven days, 3.1 a day or about 7% of the pre-crisis 47.6, up from 2.7, and no LNG or LPG carrier, with one LNG carrier in thirty days; IMF PortWatch tanker deadweight to 1 November ran at 0.6% of normal. Trading Economics shows Brent near $98 and says Gulf crude exports have recovered close to pre-war levels; that sits against the strait counts and is recorded as the page's claim, unverified here. The diplomacy-priced-not-supply prior holds. For Taipower's gas-heavy generation, the Qatari force majeure last reported into early December and zero LNG transits matter more than Brent. Monday's Asian open was not captured by this run. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split stays held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle.",
    iran:
      "No new official war toll; no casualties reported from the Qeshm explosions. Iran International relays a UN Secretary-General report citing 151 executions in the first quarter and 53,777 protest arrests; execution series carry unchanged and unmerged.",
    other:
      "No adopted change. Iran's mined-tanker claims name no vessel or casualty; Houthi-reported al-Shariyah casualties are held apart; no casualties at Khor Mor or the Riyadh tower.",
  },
};

export default data;
