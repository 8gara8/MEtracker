import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed. Trump says the US does not need a deal and takes Vance off Iran talks, and Tehran says deterrence may end the standoff without negotiations, but the IDF reportedly sees no urgency to strike and Trump calls renewed war unlikely.",
      risk7d:
        "Extreme and unchanged. The IRGC says two supertankers are ablaze on the southern route, UKMTO reports a tanker hit off Ras Al Khaimah, IRNA reports an enemy strike on Sirik, and Trump says he would use force with no hesitation.",
      spillover:
        "Critical and unchanged. Rezaei names every base from West Asia to Europe as a target, the Houthis claim Aramco in Riyadh and two Saudi air bases, and JMIC counts 181 maritime incidents since March.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump (Truth Social) via CNBC, NBC News and Times of Israel",
      event: "Trump says the US does not need a deal and moves Vance off Iran",
      summary:
        "Trump wrote that the US does not need a deal with Iran because those days have long since passed, said Washington has Iran's money and its strait, and told Vance to focus on corruption in Democratic-run states. The Wall Street Journal had reported Vance weighing direct talks with Rezaei. No White House elaboration or Vance response was located.",
      impact:
        "The US principal publicly downgrades the only named US negotiating channel.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'medium',
      source: "Donald Trump (Salem News Channel interview) via Times of Israel; Iran International",
      event: "Trump says he would strike with no hesitation and wants total victory",
      summary:
        "Trump told Salem News he would consider it a defeat if the regime is still in power when he leaves office and would not hesitate to use force if things went the other way. At Arlington on Veterans Day he said the US had won and wanted total victory, not a 93 percent victory. NBC reports he also called renewed fighting quite unlikely.",
      impact:
        "Regime survival becomes Trump's stated measure of success, a bar that sits uneasily with any negotiated deal.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Mohsen Rezaei (X posts) via Tasnim and Iran International",
      event: "Rezaei says no base is safe and tells Washington to surrender to the seven conditions",
      summary:
        "The SNSC secretary wrote that if the US launches another war, every base involved, from West Asia to Europe, would be a legitimate target, adding no safe distance, no safe haven, no immunity. He told Washington to stop inventing imaginary talks and surrender to Iran's seven conditions. Iran has never published the list officially, and versions vary.",
      impact:
        "The declared-scope prior holds at its widest, and the sequencing wall stays intact.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "Mohammad Bagher Ghalibaf (Al Jazeera interview) via Tasnim",
      event: "Ghalibaf says distrust is the main obstacle and deterrence may replace talks",
      summary:
        "The parliament speaker said lack of trust in Washington is the main obstacle, that the ball is in the US court, and that Iran wants to end the no war, no peace situation through lasting deterrence, not necessarily negotiations. He named Qatar and Pakistan as the main mediators, with Russia and China helping, and denied changes to his six-member team.",
      impact:
        "Tehran keeps the mediators in place while preparing a no-deal track.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "Assembly of Experts statement via Iran International",
      event: "The Assembly of Experts urges a review of Iran's NPT membership",
      summary:
        "The clerical body called a review of NPT membership and defence doctrine an unavoidable necessity and a national demand, warned of an immediate response without geographical limits to any attack, and urged a war-economy headquarters under the supreme leader. It has no direct authority over nuclear policy; Foreign Ministry spokesman Baghaei said this week that Iran remains committed to the NPT.",
      impact:
        "Institutional weight behind hardliners on the nuclear doctrine, though there is no decision yet.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy via Tasnim",
      event: "The IRGC says two supertankers are ablaze on the southern route",
      summary:
        "The IRGC Navy said two supertankers carrying more than 4 million barrels combined ignored warnings from its Hormuz traffic control centre, stopped after a massive explosion overnight and are engulfed in flames. It warned any ship that switches off navigation systems and works with the US military to use the southern route will face a similar fate. It named no vessel.",
      impact:
        "Another IRGC strike claim with no hull named and no third-party confirmation.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "UKMTO, JMIC, Ambrey and MARISKS via gCaptain",
      event: "The Dominica Prosperity is hit off Ras Al Khaimah",
      summary:
        "UKMTO said a projectile hit the engine room of the Liberia-flagged crude tanker about 14 nautical miles northwest of Ras Al Khaimah at about 1800 UTC on 11 November; the UAE Coast Guard evacuated all 22 crew. The NCC Fajr was attacked north of Khasab. JMIC counts four tanker attacks since its last note and 181 incidents since 1 March, unattributed individually.",
      impact:
        "A named hull near UAE waters, still unattributed, so the host-state count holds with a flag.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "IRNA via Times of Israel; Fars and an Omani official via The Maritime Executive",
      event: "IRNA reports an enemy strike on Sirik; Oman denies Didamar was hit",
      summary:
        "IRNA said the southern city of Sirik in Hormozgan was hit by an enemy strike of a military nature, without naming a target or casualties; no US or Israeli comment was located. Separately, Fars claimed that navigation aids on Oman's Didamar island were struck for aiding unauthorized transits, and a senior Omani official said they were not; satellite imagery showed no obvious damage.",
      impact:
        "Both sides' strike claims stay unverified; the divergence is the information.",
    },
    {
      id: 9,
      direction: 'de-escalating',
      importance: 'high',
      source: "Channels 12, 13 and Kan via Times of Israel; CENTCOM via Iran International",
      event: "The IDF reportedly tells Eisenkot there is no urgent need to strike Iran",
      summary:
        "Netanyahu briefed Eisenkot after he asked the attorney general to intervene. Channel 13 reported that the IDF position was that there is no immediate urgency to strike Iran, and that Israel should join if Trump renews attacks; a source told Channel 12 that Netanyahu stressed resuming fighting soon. Kan said CENTCOM alerted IDF officers to prepare; CENTCOM reportedly called that speculation.",
      impact:
        "The caretaker-risk vector eases slightly, with the army acting as a brake.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Yahya Saree via TASS and Al Jazeera; Saudi Arabia via Times of Israel (Reuters)",
      event: "The Houthis claim Aramco in Riyadh and two Saudi air bases",
      summary:
        "Houthi spokesman Yahya Saree claimed a drone and missiles hit an Aramco facility in Riyadh, a drone hit a military transport aircraft at Sharurah, and a ballistic missile targeted Khamis Mushait; Al Jazeera adds the East-West pipeline. Saudi authorities had not commented. Six European officials told Reuters that Riyadh is pressing the EU to list the Houthis as terrorists, with only a few states backing it.",
      impact:
        "The bypass-as-target prior continues; Riyadh shifts to diplomatic pressure in Europe.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'medium',
      source: "Amiri Diwan via The Peninsula; TASS; Iran International; Chinese foreign ministry",
      event: "Qatar keeps mediating as Witkoff and Kushner meet Putin on Ukraine",
      summary:
        "The Qatari Amir and UK Prime Minister Andy Burnham discussed coordinating support for negotiations toward a comprehensive agreement, maritime navigation and energy security; Burnham thanked Qatar for its mediation. Witkoff and Kushner met Putin in the Kremlin and agreed a new Ukraine round; neither side said Iran came up. China's 12 November briefing had no Iran item.",
      impact:
        "Mediators stay active, but no channel to the US principal is visible.",
    },
    {
      id: 12,
      direction: 'escalating',
      importance: 'medium',
      source: "Trading Economics; hormuz.now; IMO via gCaptain",
      event: "Brent jumps to about $96 as crossings edge up to 2.9 a day",
      summary:
        "Trading Economics shows Brent near $95.8, up about 3.2%, and links the rally to Trump's no-deal post. hormuz.now counted 20 tanker crossings in seven days to 12 November, 2.9 a day against 47.6 before the crisis, with no LNG or LPG carrier. The IMO's Dominguez urged owners to avoid the strait and counts 25 seafarers killed.",
      impact:
        "Diplomacy moves the price; volume stays at about 6% of normal.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported. Hegseth's figure of 18 dead in Epic Fury stays held apart from the 15 on the casualty series. The forty-fourth cycle with no disclosure statement.",
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
        "No new official war toll; IRNA gives no casualty detail for Sirik. The sixty-fifth day with no confirmed Iranian attack on a host state's territory, flagged for unattributed tanker hits near UAE waters.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. The Dominica Prosperity's 22 crew were evacuated unhurt; injuries on the Fujairah Energy are unquantified. Saudi figures in TASS headlines are not adopted.",
    },
  },
  exec:
    "Washington's reply came as a social media post, not a written answer. President Donald Trump wrote on Truth Social that \"we don't need a deal with Iran. Those days have long since passed,\" claimed \"we've got their money\" and \"we've got their Strait,\" and told Vice President JD Vance to give his \"complete and total attention\" to corruption in Democratic-run states instead of Iran talks, per CNBC, NBC and the Times of Israel. A day earlier the Wall Street Journal had reported that Vance was weighing direct talks with security chief Mohsen Rezaei. Trump told Salem News he would use force with \"no hesitation\" and would count the regime's survival past his term \"a defeat.\" Tehran answered in kind. Rezaei wrote that there was \"no safe haven\" for any base used against Iran. Parliament Speaker Mohammad Bagher Ghalibaf told Al Jazeera, per Tasnim, that distrust of Washington is the main obstacle and that Iran may end \"no war, no peace\" through deterrence rather than talks. The Assembly of Experts urged a review of Iran's NPT membership and defence doctrine. In Israel, Channels 12 and 13 reported that the army told Gadi Eisenkot, at a briefing with caretaker Prime Minister Benjamin Netanyahu, that there is no immediate need to strike Iran. At sea, the IRGC said two supertankers carrying over 4 million barrels were ablaze after a \"massive explosion\" on the southern route. UKMTO, via gCaptain, reported the Dominica Prosperity hit in the engine room off Ras Al Khaimah with all 22 crew evacuated, and JMIC counted 181 incidents since March. IRNA reported an \"enemy\" strike on Sirik. Brent jumped about 3% to near $96. Direction stays mixed; the probability falls to 10.",
  implications: [
    {
      title: "Trump closes the Vance channel; Tehran says deterrence can replace talks",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock took its sharpest hit since the midterms. Washington's move was a Truth Social post saying \"those days have long since passed,\" which also redirected Vance, who negotiated the June memorandum and reportedly sought a session with Rezaei. CNBC and NBC confirm the text, but neither found a White House elaboration or a Vance response. The Times of Israel notes the Journal's report that Trump had told aides he was open to Vance reopening talks, so the post may be positioning rather than a formal end of the track. The official-claim rule cuts both ways. Trump's \"we've got their Strait\" sits beside hormuz.now's 2.9 tanker crossings a day, which shows a strait closed to most traffic, not one under US control. Rezaei's call to \"SURRENDER to the seven conditions\" and Ghalibaf's claim that deterrence may end the standoff without talks are equally declaratory. Ghalibaf names Qatar and Pakistan, with Russia and China helping, and Qatar's Amir and UK Prime Minister Andy Burnham discussed support for negotiations toward \"a comprehensive agreement.\" Witkoff and Kushner met Putin on Ukraine, and neither side said Iran came up, so the Moscow-as-venue prior stays unconfirmed. The probability falls three points to 10. Qatar's reported window to about 24 November now has no named US negotiator, and NBC reports advisers telling Trump that the window for major combat closes in January.",
    },
    {
      title: "Tankers burn on the southern route while Israel's army says there is no urgency",
      body:
        "The energy-infrastructure clock worsened again, but the strike clock did not jump. The IRGC said two supertankers on the \"unauthorized\" southern route are \"engulfed in flames\" and warned that ships which switch off transponders will \"face a similar fate.\" It named no hull and no cause. UKMTO, via gCaptain, named the Liberia-flagged Dominica Prosperity, hit 14 nautical miles northwest of Ras Al Khaimah with 22 crew evacuated. JMIC records four tanker attacks since its last note but attributes none, so the hull-named-by-the-third-party prior holds and the host-state count reaches 65 days, flagged. The Didamar case shows why: Fars claimed that navigation aids were hit, and a senior Omani official told the Maritime Executive that they were not. IRNA reported an \"enemy\" strike on Sirik without a target or a toll; no US or Israeli comment was located. The caretaker-risk prior eased slightly. Channels 12 and 13 report that the IDF told Eisenkot there is no immediate urgency, though Israel should join if Trump resumes attacks. Kan says CENTCOM alerted IDF officers to prepare, which CENTCOM reportedly called \"mere speculation.\" The declared-scope prior widened: the Assembly of Experts called a review of NPT membership and defence doctrine an \"unavoidable necessity,\" though the Foreign Ministry restated its NPT commitment this week. Spillover stays proxy-led. The Houthis claim strikes on Aramco in Riyadh, Khamis Mushait and Sharurah; Riyadh is silent on them and is pressing the EU to list the group as terrorist.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; Brent jumps to about $96 as deal talk ends",
      body:
        "No fresh Taiwan-specific development was located, and prior assessments are unchanged. This cycle confirmed the diplomacy-priced-not-supply prior. Trading Economics shows Brent near $95.8, up about 3.2% on Thursday, and attributes the rally to Trump's post, while volume barely moved. hormuz.now counted 20 tanker crossings in seven days to 12 November: 2.9 a day against 47.6 before the crisis, up from 2.4. No LNG or LPG carrier crossed in seven days, and one of each in 30. JMIC counts about 211 vessels stationary east of the strait, and the IMO's Arsenio Dominguez urged owners to \"refrain from commercial activities in the Strait,\" with 25 seafarers killed. For Taipower's gas-heavy fleet the binding variable remains Qatari LNG, and what changed today is the timing. With the US president saying a deal is unnecessary, late November, when the reported Qatari window and QatarEnergy's force majeure converge, looks less like a reopening date and more like a review date. A rise of about $3 in a day on diplomacy alone means oil-linked fuel costs stay exposed to headlines as well as cargoes. Trump's \"we've got their Strait\" and Ghalibaf's insistence that Iran and Oman settle the strait's future describe incompatible regimes; under the toll-institutionalization prior, either leaves LNG transits conditional. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll; no casualty detail for the reported Sirik strike. Execution series carry unchanged and unmerged. The host-state count is flagged for unattributed tanker hits near UAE waters.",
    other:
      "No adopted change. Dominica Prosperity crew evacuated unhurt per UKMTO; Fujairah Energy injuries unquantified. IMO, Houthi and TASS-cited Saudi figures are held apart.",
  },
};

export default data;
