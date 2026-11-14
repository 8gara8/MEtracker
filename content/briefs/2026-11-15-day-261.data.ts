import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed. Reuters reports Trump may hold off on new strikes unless Iran or the Houthis provoke the US, and Rubio says no further military action is needed, but Iran keeps claiming mine strikes on tankers and Netanyahu says the threat must be removed once and for all.",
      risk7d:
        "Extreme and unchanged. The restraint is conditional on no provocation, a bar mine and drone claims could cross at any time; a third carrier is heading to the region, and Israel's security chiefs reportedly favour a strike.",
      spillover:
        "Critical and unchanged. The UN counts 25 seafarers killed around Hormuz, the Saudi-led coalition downs Houthi drones over Riyadh, Iran tells the Council that Gulf hosts owe it reparations, and Iran will be on the Trump-Xi-Putin agenda in Shenzhen.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: "Reuters via Times of Israel; Iran International",
      event: "Trump tells advisers he may hold off on Iran unless provoked",
      summary:
        "Three people familiar told Reuters that Trump may hold off on attacking Iran if there are no new provocations from Tehran or the Houthis. Saudi Crown Prince Mohammed bin Salman urged him on 31 October to let sanctions work, and Erdogan pressed for restraint. US intelligence assesses renewed strikes would not change Iran's demands. A White House official said only Trump knows what he will do.",
      impact:
        "Restraint becomes the stated default, but the provocation trigger is broad and revocable.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'medium',
      source: "Marco Rubio via QNA and The Peninsula; Reuters and Hugh Hewitt interview via Times of Israel",
      event: "Rubio says no more military action is needed; Trump sets a regime-change yardstick",
      summary:
        "Rubio told the Federalist Society that further military action against Iran is not needed and that preventing an Iranian nuclear weapon is the measure of victory. Reuters says a third aircraft carrier is moving into the region and all three could stay, while some munitions stocks are at worrying levels. Trump told Hugh Hewitt that the regime surviving his term would be a defeat.",
      impact:
        "Washington's words point to a pause while its stated goal and force posture point past it.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Iranian Navy via Tasnim; IRGC Navy via Iran International; Reuters via gCaptain; CBS News",
      event: "Iran says more tankers hit mines and caught fire in and near the strait",
      summary:
        "Iran's navy said an oil tanker that switched off its tracking systems hit a mine east of the strait on Saturday morning and was disabled. The IRGC Navy later said two tankers exploded on the southern route and two others turned back. CBS logged an Iranian military statement of three tankers, one a supertanker. No vessel is named and Reuters could not verify.",
      impact:
        "The mine-as-enforcement campaign continues; the counts conflict and no hull is confirmed.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: "Khaled Khiari at the Security Council via Al Jazeera; CBS News",
      event: "The UN says at least 25 seafarers have been killed around Hormuz",
      summary:
        "Assistant Secretary-General Khaled Khiari told the Security Council that at least 25 seafarers have died since February and the IMO has recorded 136 security incidents from 1 March to 11 November, 35 in October and 10 so far in November. He said the situation cannot become the new normal. A UN official separately urged both sides to let fertiliser shipments through.",
      impact:
        "The UN now frames the strait as a humanitarian and food-security problem, not only an energy one.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: "Gholamhossein Darzi via Tasnim; Abbas Araghchi (Kyodo op-ed) via Tasnim",
      event: "Iran's UN envoy sets conditions for talks and claims over 5,000 dead",
      summary:
        "Deputy envoy Gholamhossein Darzi told the Security Council the US must end its aggression, lift the maritime blockade and give guarantees before talks, said Iran has never closed the door to diplomacy, and said Gulf hosts owe Iran full reparation. He claimed more than 5,000 Iranians killed. Araghchi's Kyodo op-ed called reparations a legal obligation under the UN Charter.",
      impact:
        "Iran's terms are unchanged; the 5,000 figure is held apart from the official and HRANA series.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: "Iran's Vienna mission via Tasnim; Times of Israel",
      event: "Iran rejects IAEA Board resolutions but reportedly offers to discuss down-blending",
      summary:
        "Iran's mission in Vienna called the Board's resolutions technically and legally flawed and said normal safeguards cannot and will not resume under abnormal circumstances, answering the agency's report that it cannot rule out diversion. Officials told the Times of Israel that Iran will not ship out its highly enriched uranium but will discuss down-blending it under UN supervision.",
      impact:
        "Inspections stay frozen; down-blending is the only visible opening on the stock.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "CBS News; Iran International; Israel Hayom via Iran International",
      event: "Netanyahu says the Iranian threat must be removed once and for all",
      summary:
        "In a speech on a unity government, Netanyahu said Israel must remove the existential threat from over its head once and for all. Eisenkot called his offer of talks without preconditions another spin; Likud and Yashar talks are set for Sunday. Israel Hayom reports Mossad passed the CIA intelligence on an Iranian drone plot against Trump; nobody has confirmed it.",
      impact:
        "The caretaker-risk prior holds as Netanyahu's rhetoric diverges from Trump's restraint.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Al Jazeera; Dmitry Peskov; ABC News via Iran International",
      event: "Trump will discuss Iran with Xi and Putin at APEC in Shenzhen",
      summary:
        "The White House says Trump plans to discuss the Iran war at a first three-way meeting with Xi Jinping and Vladimir Putin on the sidelines of APEC in Shenzhen next week; ABC says nuclear disarmament is the main focus. A US official said, we do not expect to get to any kind of agreement. Kremlin spokesman Dmitry Peskov called the meeting extremely significant.",
      impact:
        "A new venue for Iran opens, with Moscow and Beijing at the table and low US expectations.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Turki Al Maliki via QNA and The Peninsula; Alhurra; Iran International",
      event: "The Saudi-led coalition downs two Houthi drones; Gulf analysts read the Qatar pact",
      summary:
        "Coalition spokesman Turki Al Maliki said two one-way attack drones were intercepted over Riyadh and southern Saudi Arabia. Analysts told Alhurra the Qatar-Türkiye pact reflects declining confidence in US guarantees, though Nayef Al-Nabet of the Middle East Council says it is not an alignment against Iran. Iraq's prime minister dismissed nine officials over oil smuggling at a Kataeb Hezbollah stronghold.",
      impact:
        "The proxy front stays active while Gulf states hedge their security beyond Washington.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'low',
      source: "Iranian state TV via Iran International; IRGC via CBS News",
      event: "State TV says a modified missile could reach a US base in Britain; IRGC claims two Predators",
      summary:
        "Iranian state television said a modified Khorramshahr warhead could multiply the missile's range and named RAF Fairford, with no independent confirmation; the IRGC says its 2,000 km limit is lifted. The IRGC claimed MQ-1 Predator shoot-downs near Kuhestak on Friday and over Qeshm on Saturday, its seventeenth, with no US comment.",
      impact:
        "The range-declaration prior extends to Britain; the drone claims are unverified.",
    },
    {
      id: 11,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Iran International; White House official via gCaptain (Bloomberg)",
      event: "Congress moves toward war-powers votes as the White House extends the Jones Act waiver",
      summary:
        "Thomas Massie says he can force a war-powers vote by mid-December, government funding expires on 11 December, and Senate Democrats promise immediate action once they take the majority on 3 January. A Reuters/Ipsos poll found 71% want Congress to end the war. Trump extended the Jones Act waiver for oil, LNG and fertiliser cargoes by 90 days, citing war-driven energy costs.",
      impact:
        "The political-will clock runs against renewed combat; fuel costs drive White House choices.",
    },
    {
      id: 12,
      direction: 'escalating',
      importance: 'medium',
      source: "hormuz.now; Iran International; Trading Economics; Chinese foreign ministry",
      event: "Crossings fall to 1.9 a day; Qatar's force majeure runs to year-end",
      summary:
        "hormuz.now counted 13 tanker crossings in seven days to 14 November, 1.9 a day against 47.6 before the crisis and down from 2.3, with no LNG or LPG carrier and one LNG carrier in 30 days. Kpler puts oil flow near 48% of pre-war; CENTCOM says 1.7 billion barrels moved under US protection. Brent last settled at $95.84. China's ministry has not briefed since 13 November.",
      impact:
        "Crude moves under escort while gas stays shut, a year-end LNG gap for Asian buyers.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty is reported this cycle; the claimed Predator losses are uncrewed and unconfirmed. Hegseth's 18 stays held apart. The forty-sixth cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty on the Iran or Lebanon fronts located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. Darzi's claim of more than 5,000 dead at the Security Council is held apart. A new host-state count starts at Day 1 after no Iranian launch at a Gulf host was located.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No crew casualties are reported for the tankers Iran says hit mines. The UN's 25 seafarers killed matches the IMO figure already held apart.",
    },
  },
  exec:
    "Washington signalled restraint while Iran's mine campaign continued. Reuters, via the Times of Israel, reports that President Trump told senior advisers he may hold off on new strikes unless Iran or the Houthis provoke the United States, after Saudi Crown Prince Mohammed bin Salman urged him on 31 October to let sanctions work. Secretary of State Marco Rubio said further military action is not needed. Against that, Reuters says a third aircraft carrier is heading to the region, and Trump told Hugh Hewitt it would be \"a defeat\" if Iran's government survives his term. At sea, Iran's navy said a tanker caught fire after hitting a mine east of the strait on Saturday morning, and the IRGC Navy later said two tankers exploded on the southern route; counts differ across statements, no hull is named and Reuters could not verify. hormuz.now counted 1.9 tanker crossings a day, down from 2.3, against 47.6 before the crisis. At the Security Council, UN Assistant Secretary-General Khaled Khiari said at least 25 seafarers have been killed and that the situation \"cannot be allowed to become the new normal.\" Iran's deputy envoy Gholamhossein Darzi demanded an end to the blockade and guarantees, and claimed more than 5,000 Iranian dead, well above the 3,559 official toll. Iran's Vienna mission said normal inspections \"cannot and will not resume.\" In Israel, Netanyahu said the Iranian threat must be removed \"once and for all\" while Gadi Eisenkot rejected his unity offer. The White House says Trump will raise Iran with Xi Jinping and Vladimir Putin in Shenzhen next week. The Saudi-led coalition downed two Houthi drones. Direction eases to mixed; the probability holds at 10.",
  implications: [
    {
      title: "Restraint as a posture: Trump may hold off, but a third carrier and a regime-change yardstick point the other way",
      body:
        "Under the multi-clock framework, the political-will clock is now doing more work than the active-deadline clock. Reuters, via the Times of Israel, reports that Trump told advisers he may hold off on attacking Iran if there are no new provocations from Tehran or the Houthis, after Mohammed bin Salman urged him on 31 October to let sanctions work and Erdogan pressed for restraint in three calls. Rubio told the Federalist Society that further military action is not needed and that the measure of victory is an Iran without a nuclear weapon. Three things cut against reading this as de-escalation. First, the condition is broad: a mined tanker or a Houthi drone on Riyadh could count as provocation, and both were claimed this cycle. Second, the capability signals run the other way: a third carrier is moving in and all three could stay, even as Reuters reports some munitions stockpiles at worrying levels. Third, Trump told Hugh Hewitt that the regime surviving his term would be \"a defeat,\" a goal no blockade alone delivers. The official-claim rule applies: \"may hold off\" is a sourced account of private remarks, and a White House official said only Trump knows what he will do. The domestic clock is clearer: a Reuters/Ipsos poll cited by Iran International has 71% wanting Congress to end the war, Thomas Massie says he can force a war-powers vote by mid-December, and funding expires on 11 December. Restraint is a posture, revocable on the next incident. Direction eases to mixed; the probability stays at 10.",
    },
    {
      title: "Iran argues to the Council, not to Washington, as mine claims multiply",
      body:
        "The negotiation-capacity clock is unchanged, but each side is now arguing to third parties rather than to each other. At the Security Council, Iran's deputy envoy Gholamhossein Darzi set three conditions for talks, an end to aggression, the lifting of the blockade and credible guarantees, and said host states owe Iran \"full reparation.\" He claimed more than 5,000 Iranians killed, including 254 children; that is Iran's diplomatic figure, well above the 3,559 official toll and HRANA's 3,636, and this brief holds it apart. Araghchi's Kyodo op-ed frames reparations as a legal obligation, not \"political goodwill.\" Iran's Vienna mission said normal safeguards \"cannot and will not resume under abnormal circumstances,\" answering the IAEA's diversion finding with a refusal. The one opening is in the Times of Israel's account: officials say Iran will not ship out its highly enriched uranium but will discuss down-blending it under UN supervision. That is a sequencing offer, not a concession on the stock. At sea the claim pattern repeats. Iran's navy reported one tanker on fire; the IRGC Navy reported two; CBS logged a three-tanker statement; no hull is named, and Reuters could not verify. Khiari said 25 seafarers have died and the IMO has logged 136 incidents. In Israel, Netanyahu said the threat must be removed \"once and for all,\" while Eisenkot rejected his unity offer; Likud and Yashar meet on Sunday. The caretaker-risk prior holds.",
    },
    {
      title: "Taiwan: crossings fall again, Qatar's force majeure runs to year-end, and Iran is on the Shenzhen agenda",
      body:
        "Two indirect Taiwan-relevant developments, both touching the energy-infrastructure clock. hormuz.now counted 13 tanker crossings in the seven days to 14 November, 1.9 a day against 47.6 before the crisis and down from 2.3, with no LNG or LPG carrier in seven days and one LNG carrier in 30. Kpler data on the same tracker put oil flow near 8.3 mb/d, about 48% of pre-war, consistent with CENTCOM's claim that 1.7 billion barrels have moved under US protection: crude moves under escort or by pipeline; gas does not. The tracker lists Qatar's LNG force majeure as extended to the end of December for some buyers, later than this file's early-December assumption. For Taipower the binding variable is now a year-end Qatari gap in peak winter demand, with war-risk cover at 7–9% of hull value against 0.25% pre-war. The second item is diplomatic: the White House says Trump will raise Iran with Xi and Putin at APEC in Shenzhen next week, though a US official told Reuters, \"We do not expect to get to any kind of agreement.\" For Taipei that is a variable to watch, not to price; Beijing's foreign ministry has said nothing on Iran since 13 November. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Darzi's 5,000-plus claim at the Security Council is held apart. Execution series carry unchanged and unmerged. A new host-state count starts at Day 1.",
    other:
      "No adopted change. No crew casualties reported for the tankers Iran says hit mines. UN, IMO, GCC, Houthi and TASS-cited Saudi figures are held apart.",
  },
};

export default data;
