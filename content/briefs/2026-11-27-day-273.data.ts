import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. Kuwait says Iranian drones killed two Italian technicians, the IRGC claims two more mined tankers and UKMTO reports a projectile strike near Khasab; Iran denies the Kuwait attack and offers a joint investigation.",
      risk7d:
        "Extreme and unchanged. i24NEWS reports Trump leaning toward waiting until Israel forms a government, which links the window to Eisenkot's coalition timing; Netanyahu keeps pressing and the IDF says it is ready to act alone.",
      spillover:
        "Critical and unchanged. Deaths in Kuwait drew condemnation from Italy, the EU and the Gulf, a Houthi projectile killed a worker at the Jazan refinery, and Kataib Hezbollah is reportedly repositioning in western Iraq.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Kuwait Ministry of Defense via The Peninsula; Iran International; Al Jazeera; ABC News live",
      event: "Iranian drone debris kills two Italian technicians in Kuwait",
      summary:
        "Kuwait's Defence Ministry said its forces dealt with several hostile drones on Thursday and that falling debris at a vital site injured four people; the two Italians later died. Tajani said they were Rheinmetall Italia technicians at an air-defence surveillance station. A Kuwaiti army captain and a Pakistani national were wounded. Kuwait invoked Article 51 of the UN Charter.",
      impact:
        "The Gulf attacks now kill European nationals.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Abolfazl Shekarchi and Abbas Araghchi via TASS; Iran International; Al Jazeera",
      event: "Iran denies the Kuwait attack and offers a joint investigation",
      summary:
        "Armed forces spokesman Abolfazl Shekarchi said Iran conducted no military operation in the region and called the accusation cover for Israeli and US destabilisation. Araghchi told Kuwait's Sheikh Jarrah and Italy's Tajani that Iran had no involvement and offered a joint inquiry. Iran's embassy in Rome raised a false flag; Fars, citing an unnamed source, suggested Ukraine without evidence.",
      impact:
        "Denial sits against Iran's earlier open claims on Kuwait.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Antonio Tajani and Ursula von der Leyen via Iran International; Qatar MOFA via The Peninsula; CBS News live",
      event: "Italy, the EU and Gulf states condemn the strike",
      summary:
        "Tajani said Rome would lodge a complaint with Iran's embassy and noted that Gulf states are not parties to the war. Von der Leyen said Europe must step up pressure on Iran, calling Gulf security a matter for all. Qatar condemned the attacks in the strongest terms, warning they undermine diplomacy; Saudi Arabia, Bahrain, the UAE and Jordan also condemned them.",
      impact:
        "Europe's posture hardens; a mediator rebukes Tehran publicly.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy via Tasnim; UKMTO via The Peninsula; ABC News live",
      event: "IRGC claims two more mined tankers; UKMTO reports a hit near Khasab",
      summary:
        "The IRGC Navy said two tankers, one a supertanker carrying more than two million barrels, struck mines north of Khasab early Thursday while sailing with navigation systems off under US air cover. No hull was named or independently confirmed. UKMTO separately reported an outbound tanker struck by an unidentified projectile 18 nautical miles east of Khasab on Wednesday, crew safe.",
      impact:
        "One confirmed hull incident against a run of unconfirmed claims.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "Ali Ozmaei via Tasnim; Abbas Araghchi via Iran International liveblog",
      event: "IRGC Navy chief calls control of Hormuz an operational reality",
      summary:
        "IRGC Navy commander Ali Ozmaei said safe passage depends on respect for Iran's sovereign rights and that Iran's control of the strait is not merely a claim but an operational reality. Araghchi told IRIB that Qatari and Pakistani mediation continues but that Iran's demands must be met and implemented before the strait reopens.",
      impact:
        "Iran keeps reopening conditional on its full demand set.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "i24NEWS and Victoria Coates via Iran International liveblog",
      event: "Trump reportedly leaning toward waiting for a new Israeli government",
      summary:
        "i24NEWS reported that Trump is leaning toward delaying a strike on Iran until Israel forms a government. Former deputy national security adviser Victoria Coates said the president had signalled action would come after the start of the new year. No White House statement confirming the report was located.",
      impact:
        "The strike window becomes linked to Israeli coalition timing.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: "Times of Israel; Gadi Eisenkot and Effie Defrin via Iran International",
      event: "Eisenkot advances his coalition and sees no immediate Iran threat",
      summary:
        "Eisenkot's Yashar agreed a coalition deal with Yair Golan's Democrats, has a deal with Yisrael Beytenu and hopes to swear in a government as early as next week, before his 6 December deadline. He said he sees no direct and immediate threat requiring action first. Netanyahu presses Washington; IDF spokesman Effie Defrin told Kan the military is ready to strike alone.",
      impact:
        "A transfer of power nears as Netanyahu argues for urgency.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Institute for Science and International Security via Iran International and Times of Israel; Mohammad Eslami via Tasnim",
      event: "Washington institute reports a fast-built underground complex near Isfahan",
      summary:
        "The Institute for Science and International Security said Iran is rapidly building a hardened underground facility at Behjatabad, midway between Isfahan and Pickaxe Mountain, with construction from December 2025 and a second tunnel by June. Its function is unclear and a nuclear purpose cannot be ruled out. AEOI chief Mohammad Eslami called Iran's nuclear progress unstoppable while denying weapons aims.",
      impact:
        "Reconstitution evidence feeds the public case for strikes.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi Ministry of Energy (QNA) via The Peninsula; Turki al-Maliki via Iran International liveblog",
      event: "Projectile kills a Nepalese worker at the Jazan refinery",
      summary:
        "Saudi Arabia's energy ministry said a hostile aerial projectile hit the Jazan refinery on Thursday, killing a Nepalese worker and injuring several others, causing a fire and temporarily halting some operations. The coalition blamed the Houthis and said it destroyed 50 military targets in Sanaa, Hodeidah and Saada. France called on the Houthis to stop their attacks immediately.",
      impact:
        "The Saudi-Houthi front now kills at an energy site.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'low',
      source: "Al-Mada and ISW-CTP via Iran International; IDF via Times of Israel",
      event: "Kataib Hezbollah repositions in Iraq; IDF strikes Beqaa",
      summary:
        "Al-Mada reported that Kataib Hezbollah moved large quantities of equipment to western Iraq and set up new positions for a possible renewed war; ISW-CTP say militia-run PMF brigades answer to Tehran. In Lebanon, the Israeli Air Force struck rockets and launchers at a Radwan Force camp near Ayn al-Tina in the Beqaa on Thursday evening; no injuries were reported.",
      impact:
        "Proxy fronts prepare while Israel keeps striking Lebanon.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "Union of Truck Drivers via Iran International; IranWire via Shabtab News",
      event: "Truckers' strike spreads to 18 cities; journalist arrested",
      summary:
        "The truckers' union said drivers in 18 cities, including Isfahan, Kermanshah and Kazerun, refused freight on the fifth day, demanding rates that reflect dollar-priced tyres, oil and diesel after the rial's record fall. Separately, journalist Mehdi Mahmoudian was arrested on 25 November, hours after the Ekbatan executions he had publicised were halted.",
      impact:
        "Blockade costs reach domestic logistics as repression continues.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'medium',
      source: "Trading Economics; hormuz.now; Kpler via CBS News; Donald Trump via Shafaq News",
      event: "Brent climbs toward $96 as AIS crossings stay at 2.4 a day",
      summary:
        "Trading Economics quotes Brent at $96.23, a third straight gain, citing Houthi attacks and mine claims, though oil is down nearly 20% this month. hormuz.now counts 17 tanker crossings in seven days and two LNG carriers in 30 days. Kpler shows weekly transits falling from 217 to 147. Trump says Hormuz oil flows exceed prewar levels.",
      impact:
        "Crude reprices on attacks; flow estimates remain unreconciled.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty and no CENTCOM response to Iran's mine claims or the Kuwait attack were located. The fifty-seventh cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series. The IDF's Beqaa strike reported no injuries and no Israeli casualty was located this cycle.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. Mousavi's figure of nearly 7,200 dead and Darzi's claim of more than 5,000 stay held apart.",
    },
    other: {
      cumulative: "KIA: 3,719+ · WIA: 11,218+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+3 KIA, +2 WIA",
      status:
        "Two Italian technicians killed and a Kuwaiti officer and a Pakistani wounded in Kuwait are adopted, as is the Jordanian sailor whose body the UAE found. The Jazan refinery death is held apart with the Saudi-Houthi series.",
    },
  },
  exec:
    "Iran's attacks on its Gulf neighbours turned deadly for Europeans. Kuwait's Defence Ministry says debris from Iranian drones intercepted on Thursday killed two Italian technicians, from Rheinmetall Italia, servicing an air-defence radar at a \"vital site,\" and wounded a Kuwaiti officer and a Pakistani national. Italy's foreign minister Antonio Tajani said Rome would lodge a complaint with Iran's embassy; European Commission President Ursula von der Leyen called for more pressure on Tehran; Qatar, Saudi Arabia, Bahrain, the UAE and Jordan condemned the strike. Iran denies involvement: armed forces spokesman Abolfazl Shekarchi said no operation was conducted, and Foreign Minister Abbas Araghchi offered Kuwait a joint investigation. At sea, the IRGC Navy claims two more tankers, one a supertanker, hit mines north of Khasab early Thursday; no hull is named, while UKMTO separately reports an outbound tanker struck by a projectile 18 nautical miles east of Khasab on Wednesday, crew safe. IRGC Navy chief Ali Ozmaei calls Iran's control of Hormuz \"an operational reality.\" The Saudi-Houthi war drew blood: a projectile on the Jazan refinery killed a Nepalese worker, and the coalition says it destroyed 50 Houthi targets. On the decision clock, i24NEWS reports Trump leaning toward waiting until Israel forms a government, as Gadi Eisenkot agreed a coalition deal with the Democrats and says Iran poses no immediate threat. A Washington institute reports Iran rapidly building an underground complex near Isfahan. Brent rose a third session to about $96; hormuz.now still counts 2.4 tanker crossings a day against 47.6 pre-crisis. Other-theatre deaths rise by three. Direction stays escalating; the probability holds at 5.",
  implications: [
    {
      title: "Kuwait's dead Italians widen the war's audience and test Iran's denial",
      body:
        "Under the multi-clock framework, the coalition-cohesion and negotiation-capacity clocks moved most. Kuwait's Defence Ministry says debris from intercepted Iranian drones killed two Rheinmetall Italia technicians servicing a Skyguard air-defence radar, the first European deaths from the Gulf attacks recorded in this series this month. Iran's denial is unusually categorical: armed forces spokesman Abolfazl Shekarchi said no operation was conducted, Araghchi offered Kuwait and Italy a joint investigation, Iran's embassy in Rome raised a \"false flag,\" and Fars, citing an unnamed source, pointed to Ukraine without evidence. Earlier this month Iran openly claimed strikes on US sites in Kuwait after the Qeshm raid, so the denial is a claim to be weighed against that record, not a fact. The reaction is broad: Tajani will lodge a complaint, von der Leyen called for more pressure on Tehran, Kuwait invoked Article 51 and Security Council Resolution 2817, and Qatar, a mediator, warned that the attacks undermine diplomacy. The retaliation-map-widening and strike-the-hosts priors strengthen, and the arguing-to-third-parties prior now cuts against Iran in Europe. Araghchi told IRIB that Qatari and Pakistani mediation continues but that Iran's demands must be met before Hormuz reopens; South Korea's Cho Hyun told him Seoul has no plans to deploy troops. Mediation persists without movement, and a mediator's public rebuke narrows Iran's room. The probability holds at 5.",
    },
    {
      title: "The decision clock meets Israeli coalition politics while sea claims stay unconfirmed",
      body:
        "The active-deadline clock is now partly an Israeli political clock. i24NEWS, via Iran International, reports Trump leaning toward delaying any strike until Israel forms a government; former deputy national security adviser Victoria Coates said action would come after the new year. That is a report, not a decision, but it fits Trump's \"funded to end-January\" framing. Gadi Eisenkot's Yashar has signed up Yair Golan's Democrats and Yisrael Beytenu, aims to swear in a government as early as next week, and says he sees \"no direct and immediate threat\" requiring action first, while Netanyahu presses Washington and IDF spokesman Effie Defrin told Kan the military is ready to strike alone. The security-establishment-restraint and caretaker-risk priors both hold: the weeks before a transfer of power are when unilateral risk peaks. The Institute for Science and International Security reports Iran rapidly building a hardened underground complex at Behjatabad, function unclear, \"a nuclear purpose cannot be ruled out\"; AEOI chief Mohammad Eslami calls Iran's progress \"unstoppable.\" That feeds the reconstitution prior and the public case for action. At sea, the IRGC's two new mine claims north of Khasab remain uncorroborated, while UKMTO's projectile strike 18 nautical miles east of Khasab is the only independent hull incident; the mines-as-enforcement and claim-inflation priors both apply. The second-chokepoint prior sharpened: a Nepalese worker was killed at the Jazan refinery and the coalition says it struck 50 Houthi targets.",
    },
    {
      title: "Taiwan: crude climbs to $96 while LNG flows stay near zero",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. Trading Economics quotes Brent at $96.23, up 1.4% for a third straight gain, with its statistics panel at $95.90, citing Houthi attacks on Saudi infrastructure and Iran's mine claims, though oil remains down nearly 20% this month on recovering Gulf shipments, an IEA fourth-quarter surplus and a 1.1-million-barrel US crude build. hormuz.now counts 17 AIS-visible tanker crossings in seven days, 2.4 a day against 47.6 pre-crisis, two LNG carriers in 30 days and Ras Laffan calls at 29% of normal; Kpler, via CBS, shows weekly ship transits falling from 217 to 147 between 1 and 23 November, while Trump says flows exceed prewar levels. The oil-priced-as-surplus versus gas-shut prior holds: crude moves around Iran while QatarEnergy's force majeure runs to end-December. For Taipower and CPC the exposure remains winter LNG, not crude; a strike window now linked to Israeli coalition timing and the new year overlaps February cargo planning. South Korea's statement that it has no plans to deploy troops keeps East Asian navies out of the strait for now. Markers: crossings against 2.4 a day, OPEC+ on 29 November, Ras Laffan calls and the unpassed supplementary budget.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; the Beqaa strike near Ayn al-Tina reported no injuries and no Lebanese toll was located.",
    iran:
      "No new official war toll. Mousavi's nearly 7,200 dead (623 children) and a separate Red Crescent child count of 428 are held apart, as is Darzi's 5,000-plus claim. HRANA's execution series (at least 2,003 to 8 October) carries unmerged; journalist Mehdi Mahmoudian's arrest is noted.",
    other:
      "Adopted: two Italian technicians killed and two people wounded in Kuwait on 26 November (Kuwait MoD), and the Jordanian sailor missing since the 17 November ADNOC tanker attack, whose body the UAE says was found. Held apart: the Nepalese worker killed at Jazan and the several injured there, with the Saudi-Houthi series.",
  },
};

export default data;
