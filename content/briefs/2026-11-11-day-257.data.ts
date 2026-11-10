import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed. Qatar claims progress and a reported two-week window for diplomacy, and Rubio says major combat is not needed, but Tehran denies any talks and Washington calls Iran's conditions absurd.",
      risk7d:
        "Extreme and unchanged. The IRGC claims two tankers struck in the strait and unveils a new missile city, while Hegseth says forces remain locked and loaded and would repeat every strike.",
      spillover:
        "Critical and unchanged. A ballistic missile aimed at Riyadh was intercepted, a UNIFIL patrol was fired on near Tyre, and France accuses the IRGC of sabotaging supermarket refrigerators.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: "Qatar's foreign ministry (Ibrahim bin Sultan Al Hashmi) via The Peninsula; Iran International",
      event: "Qatar says its mediation has gained momentum",
      summary:
        "Al Hashmi said on Tuesday that Qatar's effort is ongoing and has gained momentum, with progress in the negotiations, and that details will be disclosed once the final shape of the agreement is settled. He called the prime minister's meetings with Vance and Trump positive and said Hormuz must reopen as soon as possible, since the closure adds costs for all nations.",
      impact:
        "The first claim of substantive progress from the mediator this cycle. Neither principal confirms it.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: "Iran International (diplomatic sources; Reuters); The Peninsula",
      event: "Qatar's prime minister tells the G7 that Doha has secured at least two weeks",
      summary:
        "Sheikh Mohammed bin Abdulrahman Al Thani made an unscheduled stop at the G7 foreign ministers' meeting in Paris, meeting European ministers and Saudi Arabia's foreign minister. Diplomatic sources told Iran International he said Doha had secured at least two weeks for diplomacy before a possible US attack; two European diplomats called him cautiously optimistic. The Peninsula reports he also met President Macron.",
      impact:
        "The first dated window of the lame-duck period, to about 24 November. Single-source and unconfirmed by Washington.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: "Marco Rubio via Iran International, citing Reuters and G7 diplomats",
      event: "Rubio says the blockade works so well that major combat is not needed",
      summary:
        "Rubio told reporters in Paris that sanctions and the naval blockade were working so well that Trump had no need to launch major combat operations, that pressure would intensify, and that Washington remained open to a real deal. He called Iran's conditions absurd. Four G7 diplomats told Reuters he promised devastating economic costs; two said he called Iran's rulers lunatics.",
      impact:
        "US pressure shifts to economics for now. The terms gap is unchanged.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Abbas Araghchi, Mohsen Rezaei and Mohammad Bagher Ghalibaf via Tasnim; Iran International",
      event: "Tehran denies any talks and repeats its seven conditions",
      summary:
        "Araghchi called reports of a Rezaei-Vance meeting groundless, said the war will not end through military means or sanctions, and said the two-day proposal remains on the table. Rezaei told US officials to stop manufacturing fake news about imaginary talks and to surrender to the seven conditions. Ghalibaf said Israelis are working overtime to drag the US into an endless war. Araghchi also wrote to the UN over a US $20 million nuclear reward.",
      impact:
        "The sequencing wall stands: conditions first in Tehran, nuclear first in Washington.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: "Iranian state television debate via Iran International",
      event: "A state TV debate airs the case for talks through intermediaries",
      summary:
        "On the programme Be Vaght-e Iran on Monday, analyst Vahid Khazab called Tehran's willingness to discuss its nuclear programme through intermediaries significant and said Pakistan's army chief floated 3.67% enrichment in exchange for diluting about 400 kg of 60% uranium, some frozen assets, IAEA inspections and a reopened strait. Iran International says the account does not show any change in Iran's official position.",
      impact:
        "Signals domestic room for a deal. An analyst's account, not a government position.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy statement via Tasnim; MP Esmail Kowsari via Iran International; Ynetnews headlines",
      event: "The IRGC says two tankers are burning in the Strait of Hormuz",
      summary:
        "The IRGC Navy said a supertanker struck a naval mine and a second tanker, which it said was under US warplane protection on an unauthorised route, was stopped by a massive fire in its wall of fire; both had switched off their transponders. It warned ships cooperating with the US military. No vessel is named and no casualties are reported. Kowsari said mining answers the Qeshm strikes but does not signal a major war.",
      impact:
        "A claim with no hull named and no third-party confirmation. The mine-clearance prior hardens.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "Majid Mousavi via Tasnim; IRGC spokesman via Al Jazeera; Bloomberg via Iran International",
      event: "The IRGC unveils an underground missile city after lifting its range limit",
      summary:
        "IRGC Aerospace commander Majid Mousavi, at the unveiling of a new underground missile city, said Iran would bring enemy capabilities across the region and beyond under fire if needed. IRGC spokesman Hossein Mohebbi had said on Saturday the self-imposed 2,000 km range limit was lifted. Bloomberg, citing a Western intelligence assessment, reports Iran builds about 50 ballistic missiles a month, about half its prewar rate, with at least 1,700 left.",
      impact:
        "Reconstitution evidence that cuts against US claims of severe degradation.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'high',
      source: "Pete Hegseth via Iran International; NBC News; Reuters/Ipsos via Iran International",
      event: "Hegseth would repeat every strike; the House kills impeachment 211-204",
      summary:
        "At a Pentagon briefing Hegseth said he stands behind every operation and would order them again, that forces remain locked and loaded, that more than 13,000 targets were struck in under 40 days, and that 18 Americans died in Epic Fury. The House voted 211-204 to refer Massie's eight articles to committee, with Massie the lone Republican against. Reuters/Ipsos found 71% want the new Congress to end the war.",
      impact:
        "Impeachment fails but the political-will clock still runs against the war.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Ynet via TASS; Ynetnews headlines; Isaac Herzog via Al Jazeera",
      event: "Report of a sharp Netanyahu-Trump call as the 26th Knesset is sworn in",
      summary:
        "Ynet, relayed by TASS, reported a particularly sharp weekend call between Netanyahu and Trump over resuming operations against Iran; the Prime Minister's Office called the report fake news, and an official said the call was not difficult. Herzog, swearing in the Knesset, said Tehran does not stop its plots and urged parties to avoid a repeat election. Ynet says a vote on replacing the Likud speaker comes next week.",
      impact:
        "Fresh evidence for the Israel's-independence prior, denied by the PMO.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Saudi-led coalition via AFP and The Peninsula; GCC Joint Defense Council via The Peninsula",
      event: "A missile aimed at Riyadh is intercepted; the GCC opens a forward command",
      summary:
        "The Saudi-led coalition said air defences destroyed a ballistic missile aimed at Riyadh early on Tuesday and blamed the Houthis; residents received shelter alerts and schools moved online. Images showed damage to the Aramco tower hit on Sunday. GCC defence ministers in Manama approved a forward Unified Military Command headquarters in Kuwait, and the secretary general cited treacherous Iranian attacks.",
      impact:
        "The Houthi campaign on Saudi targets continues; Gulf states harden collective defence.",
    },
    {
      id: 11,
      direction: 'escalating',
      importance: 'medium',
      source: "UNIFIL; Al Hadath via Iran International; Ynetnews headlines",
      event: "A UNIFIL patrol is fired on near Tyre; Lebanon detains Hezbollah members",
      summary:
        "UNIFIL said a routine patrol near Wadi Jilu was fired upon with about a dozen rounds on Tuesday evening, returned fire, and suffered no casualties; it called deliberate attacks violations of resolution 1701 and asked Lebanon to investigate. Lebanese security forces detained five Hezbollah members suspected of reconnaissance in Batroun, per Al Hadath. Ynet reports a strike in the south.",
      impact:
        "Friction rises ahead of UNIFIL's 31 December mandate end. Shooter unidentified.",
    },
    {
      id: 12,
      direction: 'escalating',
      importance: 'medium',
      source: "Jean-Noël Barrot via Al Jazeera; WSJ via Iran International; FBI via Iran International",
      event: "France summons Iran's envoy; US tankers leave a second British base",
      summary:
        "Barrot summoned Iran's ambassador, saying the IRGC hacked refrigerators in more than 700 French supermarkets in October, the first large-scale sabotage cyberattack on French territory; Iran called the accusation baseless. Nine KC-135 tankers and three Ospreys left RAF Mildenhall over an Iranian threat, per the WSJ. The FBI added IRGC member Shahram Poursafi, accused in the Bolton plot, to its most wanted list.",
      impact:
        "The confrontation is moving into Europe through cyber and base-security threats.",
    },
    {
      id: 13,
      direction: 'neutral',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Iran International",
      event: "Crossings fall to 2.6 a day as Brent holds near $92",
      summary:
        "hormuz.now counted 18 tanker crossings in seven days to 10 November, 23:12 UTC, 2.6 a day against 47.6 before the crisis, with no LNG or LPG carrier; PortWatch shows 0.1% of normal tonnage to 8 November. Trading Economics shows Brent at 91.76, down 0.55%, and claims traffic has picked up. A South Pars platform fire was evacuated and declared under control.",
      impact:
        "Price follows diplomacy while volume keeps falling. Crossings about 5% of normal.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported. Hegseth's figure of 18 dead in Epic Fury differs from the 15 on the casualty series and is held apart. The forty-second cycle with no disclosure statement.",
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
        "No new official war toll; no casualties reported from the South Pars fire. The sixty-third day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No casualties reported from the Riyadh interception, the UNIFIL shooting or the tankers the IRGC says are burning. IMO and Houthi figures stay held apart.",
    },
  },
  exec:
    "Qatar says the mediation is gaining ground, and Washington says it can wait. Foreign ministry spokesman Ibrahim bin Sultan Al Hashmi said on Tuesday that Qatar's effort had gained momentum, with \"progress in the negotiations,\" and that details would come once the agreement's shape is settled, per The Peninsula. Iran International, citing diplomatic sources, said the Qatari prime minister told G7 ministers in Paris that Doha had secured \"at least two weeks\" for diplomacy before any US attack. Secretary of State Marco Rubio told reporters that sanctions and the blockade work \"so well\" that major combat is not needed, while calling Iran's conditions \"absurd.\" Tehran held its line. Foreign Minister Abbas Araghchi called reports of a Rezaei-Vance meeting groundless and said the two-day proposal \"remains on the table\"; Mohsen Rezaei told Washington to \"STOP manufacturing FAKE NEWS about imaginary talks.\" The IRGC Navy, via Tasnim, said one supertanker hit a mine and a second was stopped by fire in the strait; no ship was named and no casualties were reported. The IRGC unveiled a new underground missile city, and Bloomberg, via Iran International, reported Iran is producing about 50 ballistic missiles a month. Pete Hegseth said he would order every strike again, and the House voted 211-204 to send Thomas Massie's impeachment articles to committee, per NBC News. A Reuters/Ipsos poll found 71% of Americans want the new Congress to end the war. A ballistic missile aimed at Riyadh was intercepted, and UNIFIL said a patrol near Tyre came under fire. Brent held near $92; hormuz.now counted 2.6 crossings a day against 47.6 before the war. Direction stays mixed; the probability rises to 13.",
  implications: [
    {
      title: "Qatar claims progress and a two-week window; both principals say the terms have not moved",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock improved for a second day, on the mediator's word rather than the parties'. Al Hashmi's \"progress in the negotiations\" is the first claim of substantive movement Doha has made this cycle, and the reported \"at least two weeks\" would set the first dated window since the lame-duck clock opened: roughly to 24 November, well short of 3 January. Both are graded as claims. The window rests on unnamed diplomats via Iran International, and no US official has confirmed it. The skeptical counter came from both principals. Rubio called Iran's conditions \"absurd\" and, per four G7 diplomats cited by Reuters, promised \"devastating\" economic costs while saying Washington has options beyond war or acceptance. Araghchi called a Rezaei-Vance session groundless, and Rezaei's \"STOP manufacturing FAKE NEWS\" restates the sequencing wall: blockade lifted and assets unfrozen first in Tehran, nuclear terms first in Washington. The newer signal is domestic. A state television debate on Monday, as reported by Iran International, aired the case for talks through intermediaries, and one analyst described a Pakistani idea of 3.67% enrichment in exchange for diluting about 400 kg of 60% uranium. That is an analyst's account, not a position. The probability rises one point to 13 on the progress claim and the window; it falls back if the window lapses without a named session.",
    },
    {
      title: "Coercion moves to mines, missile cities and Washington's own politics",
      body:
        "Rubio's line that the blockade works \"so well\" that major combat is not needed reframes the active-deadline clock. US pressure is economic for now, so the escalation trigger shifts from Trump's will to Iran's conduct at sea. That conduct continued: the IRGC Navy says a supertanker struck a mine and a second tanker was stopped by its \"wall of fire,\" both with transponders off. No hull is named and no third party has confirmed either, so the hull-named-by-the-third-party prior holds. MP Esmail Kowsari linked the mining to the Qeshm strikes but said it does not signal a major war. On the missile side, Mousavi's underground missile city, the lifted 2,000 km range limit and Bloomberg's Western intelligence estimate of about 50 missiles a month and at least 1,700 in stock cut against US claims of severe degradation. Hegseth also said 18 Americans died in Epic Fury, against 15 on the Pentagon's series; the gap is held apart. The political-will clock ran both ways: the House killed impeachment 211-204, but Reuters/Ipsos found 71%, including 51% of Republicans, want Congress to end the war. The Israel's-independence prior gained evidence as TASS and Ynet reported a sharp Netanyahu-Trump call on resuming strikes, which the Prime Minister's Office called fake news. Spillover stayed proxy-led: a missile intercepted over Riyadh, a UNIFIL patrol fired on near Tyre, and a forward GCC command approved for Kuwait.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; crossings fall to 2.6 a day as Brent holds near $92",
      body:
        "No fresh Taiwan-specific development was located, and prior assessments are unchanged. The diplomacy-priced-not-supply prior widened again. Trading Economics shows Brent at 91.76 on Tuesday, down 0.55% after Monday's near-6% fall, and its narrative credits expected diplomacy and claims tanker traffic has picked up. The strait counts say otherwise: hormuz.now recorded 18 tanker crossings in seven days to 10 November, 2.6 a day against 47.6 before the crisis and down from 2.9, with no LNG or LPG carrier; IMF PortWatch put tanker tonnage at 0.1% of normal to 8 November. For Taipower's gas-heavy fleet the binding variable remains Qatari LNG: zero transits and QatarEnergy's force majeure, last reported into early December. The IRGC's mine claims, if true, reinforce the mine-clearance prior: even a signed deal would need weeks of clearance before LNG carriers return, and insurers will price that. A fire on a South Pars platform, which Iran says is under control, sits on the reservoir Qatar shares as the North Field, though no effect on Qatari output is reported. A two-week window, if real, closes before the 9 December Fed meeting and the reported end of QatarEnergy's force majeure, which makes late November the date to watch for winter cargoes. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located for the reported southern strike.",
    iran:
      "No new official war toll; no casualties reported from the South Pars fire. Execution series carry unchanged and unmerged.",
    other:
      "No adopted change. No casualties at Riyadh, near Tyre or on the tankers the IRGC claims; IMO seafarer deaths and Houthi-reported casualties are held apart.",
  },
};

export default data;
