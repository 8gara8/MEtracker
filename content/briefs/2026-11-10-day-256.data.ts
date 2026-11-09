import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed. Qatar's prime minister carried the file to Trump and Vance, and Trump calls the war effectively over, but Tehran restates its seven conditions and denies any Doha meeting with Vance.",
      risk7d:
        "Extreme and unchanged. Tasnim now attributes the Qeshm blasts to US projectiles, and US reports say Hegseth and CENTCOM are pressing Trump to resume attacks while CENTCOM awaits orders.",
      spillover:
        "Critical and unchanged. A drone halted Khor Mor and left most of Iraqi Kurdistan without power, and Saudi Arabia says its East-West pipeline, the main Hormuz bypass, was hit near Medina.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "Qatar's prime minister on X via The Peninsula; Iran International; Al Jazeera",
      event: "Qatar's prime minister meets Vance and then Trump at the White House",
      summary:
        "Sheikh Mohammed bin Abdulrahman Al Thani met Vice President JD Vance and then Trump on Monday, about 45 minutes with Trump per Iran International, and said on X that they discussed the region and ways to progress the US-Iran talks, thanking the sides for positive discussions on reaching a deal. Iran International says Vance has spoken with him almost daily for two weeks.",
      impact:
        "The first mediator trip since Araghchi said mediators had stopped travelling. No Iranian session is named.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Donald Trump via Al Jazeera, Iran International and Ynetnews headlines",
      event: "Trump calls the war 'effectively over' and claims Iran accepts a nuclear ban",
      summary:
        "After the meeting Trump cited positive momentum, called renewed strikes quite unlikely and the war effectively over, per Al Jazeera. On Truth Social he said Gulf states favour keeping the naval blockade. He also said Iran accepts never having a nuclear weapon 100%, more than 100%, which Tehran publicly denies, and that the US is fully locked and loaded.",
      impact:
        "One party's optimism, graded as a claim. The opposite-running-clocks prior holds.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Mohsen Rezaei via Iran International; a senior security official and Esmaeil Baghaei via Tasnim",
      event: "Tehran answers with its seven conditions and denies a Doha meeting",
      summary:
        "Rezaei wrote that it is time to surrender to the seven conditions Iran has set out. A senior security official told Tasnim no Rezaei-Vance meeting in Doha is planned and that there will be no talks without practical action within the seven conditions. Baghaei called the two-day proposal the most logical roadmap: Hormuz reopens within 48 hours of the US lifting the blockade and unfreezing assets.",
      impact:
        "The sequencing wall stands: conditions first in Tehran, nuclear first in Washington.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "President Masoud Pezeshkian via Tasnim",
      event: "Pezeshkian says the Leader has ordered an end to 'neither war nor peace'",
      summary:
        "Speaking at a dairy company anniversary on Monday, Pezeshkian said Mojtaba Khamenei had directed officials to end the neither-war-nor-peace state, that Iran can negotiate with dignity and end the issue with dignity, and that avoiding war is logical if rights can be secured through talks. He added that Iran will not surrender to force and bullying.",
      impact:
        "Ambiguous: a mandate to close a deal, or notice that the limbo will end another way.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "Hormozgan deputy governor Ahmad Nafisi via Tasnim; Trading Economics; Ynetnews headlines",
      event: "An Iranian official account attributes the Qeshm strike to US projectiles",
      summary:
        "Tasnim reported that US projectiles struck locations on Qeshm on Sunday night; deputy governor Ahmad Nafisi said the targets lay outside residential, commercial and service areas and caused no damage to vital infrastructure. Trading Economics also cites reports of a US strike on the island overnight. No CENTCOM or Pentagon statement was located, and no casualties were reported.",
      impact:
        "Tehran now names US fire but minimises it. The defensive-scoping prior holds.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "Esmaeil Baghaei via Tasnim; IAEA figures via Al Jazeera; Ynetnews headlines",
      event: "Iran says it cannot meet IAEA obligations as under normal conditions",
      summary:
        "Answering Rafael Grossi's request to visit nuclear sites, Baghaei said Iran cannot fulfil its obligations like it did under normal conditions, has not suspended its NPT commitments, and that its Vienna mission stays in professional contact with the agency. An inspection at Bushehr took place a few days earlier. Al Jazeera cites the IAEA's 440.9 kg of 60% uranium.",
      impact:
        "Narrower access as Washington demands nuclear terms first. No IAEA statement located.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "KRG electricity ministry, Dana Gas and PM Ali al-Zaidi via Al Jazeera and Rudaw; US envoy Tom Barrack via Rudaw",
      event: "A drone halts Khor Mor and blacks out most of Iraqi Kurdistan",
      summary:
        "An explosive-laden drone struck Khor Mor's gas storage on Sunday night; the KRG electricity ministry says 2,500 to 2,800 megawatts went offline and more than 70% of the region lost power. Dana Gas says the fire is out, with no injuries, and production is suspended. Prime Minister al-Zaidi ordered a joint inquiry; Barrack called it an attack on the Iraqi people. No group has claimed it.",
      impact:
        "Most of the Kurdish grid is offline after the first strike there in about four months. Attribution open.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Rudaw, relaying Tasnim, Fars and the Iraqi News Agency",
      event: "Iraq's prime minister held unannounced talks in Tehran",
      summary:
        "Ali al-Zaidi, with PMF head Falih al-Fayyadh and Badr commander Hadi al-Amiri, met Ghalibaf and Pezeshkian in Tehran on Friday, per Tasnim and Fars. Fars said the talks focused on Iraq's efforts to end the war; Iraq's ambassador called it a private visit to reduce tensions. Tasnim said Zaidi received no outcome the Americans would welcome. The trip followed a Thursday call with Trump.",
      impact:
        "Baghdad joins Doha as a channel. No result reported.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Saudi Ministry of Energy via SPA, AFP and The Peninsula; Council of Arab Interior Ministers via QNA",
      event: "Saudi Arabia says its East-West pipeline was hit near Medina",
      summary:
        "An unnamed energy ministry official told SPA that the East-West pipeline, which carries crude around the blockaded strait, was targeted in the Medina region on Monday, causing a limited fire that was extinguished; operations were unaffected. No one was blamed. The Council of Arab Interior Ministers condemned Houthi attacks on Saudi Arabia as cowardly terrorist attacks and voiced full solidarity with Riyadh.",
      impact:
        "The bypass route is now a target. Single-source official account.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'medium',
      source: "China's MFA (Guo Jiakun); Tasnim; EEAS (Kaja Kallas); Iran International",
      event: "Beijing speaks on the war; Brussels raises Iranian cyber attacks",
      summary:
        "Guo Jiakun said prolonging the US-Iran conflict does not serve the common interest and urged early peace in the Gulf. China's envoy Zhai Jun discussed Yemen and regional security architecture with Iran's Mohammad Alibek in Tehran. At the G7 in Paris, Kallas said cyber incidents in Europe were attributed to Iran and the response should be strong. Russia's Georgy Borisenko met Qatar's ambassador.",
      impact:
        "The first Chinese MFA comment on Iran this file has located since June.",
    },
    {
      id: 11,
      direction: 'escalating',
      importance: 'medium',
      source: "US media via Al Jazeera, citing Axios; Hakeem Jeffries and Thomas Massie via Iran International; Ynetnews headlines",
      event: "Hawks press Trump as Democrats vow to end the war",
      summary:
        "Al Jazeera relays US reports that Hegseth and CENTCOM commander Brad Cooper are pressing Trump to resume attacks, and Axios reporting that CENTCOM is preparing major operations and awaiting orders. A Ynet headline says Netanyahu calls Trump every day. Jeffries said Iran is stronger now and vowed to end the war one way or the other; Massie reintroduced eight impeachment articles against Hegseth.",
      impact:
        "Readiness and political will pull apart inside the lame-duck window.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'medium',
      source: "Ynetnews headlines",
      event: "Eisenkot and Liberman agree on a Knesset speaker; Netanyahu pushes unity",
      summary:
        "Ynet headlines say the change bloc agreed Eisenkot will serve as interim Knesset speaker and that, after meeting Liberman, Eisenkot is confident of a stable four-year government. Netanyahu called for a unity government with the ultra-Orthodox. Trump said Eisenkot is very similar to Netanyahu on positions and that aversion to Israel cost Republicans votes. Reports in Lebanon describe IDF strikes in the south.",
      impact:
        "Formation advances before the Knesset sits. Eisenkot's Iran line is still unstated.",
    },
    {
      id: 13,
      direction: 'neutral',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Iran International; IMO via Al Jazeera; US Treasury OFAC",
      event: "Brent falls about 6% to near $92 as crossings slip to 2.9 a day",
      summary:
        "Trading Economics shows Brent at 92.16, down 6.26%, the lowest since 31 August; Iran International gives $91.61. hormuz.now counted 20 tanker crossings in seven days to 9 November, 23:12 UTC, 2.9 a day against 47.6, with no LNG or LPG carrier. The IMO counts at least 25 seafarers killed and 129 attacks. OFAC updated a Shamkhani-linked Dubai shipping listing.",
      impact:
        "Price moves on diplomacy while volume falls. Crossings about 6% of normal.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported and no CENTCOM statement on the Qeshm strike located. Trump says no soldier has been lost in six or seven months. The forty-first cycle with no disclosure statement.",
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
        "No new official war toll; the Hormozgan deputy governor reports no damage on Qeshm. The sixty-second day with no confirmed Iranian attack on a host state's territory; no group has claimed Khor Mor.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No casualties at Khor Mor or at the East-West pipeline. The IMO count of at least 25 seafarers killed and 129 attacks is held apart, as are Houthi figures.",
    },
  },
  exec:
    "Mediation moved back to Washington. Qatar's prime minister, Sheikh Mohammed bin Abdulrahman Al Thani, met Vice President JD Vance and then Donald Trump at the White House on Monday, and said on X that they discussed \"ways to progress the US-Iran talks,\" per The Peninsula and Iran International. Trump then spoke of \"positive momentum,\" called renewed strikes \"quite unlikely\" and the war \"effectively over,\" per Al Jazeera, while saying Gulf states favour keeping the naval blockade and that Iran accepts a nuclear-weapons ban \"100%.\" Tehran did not move. Security chief Mohsen Rezaei wrote that it was \"time to SURRENDER to the seven conditions,\" a senior official told Tasnim no Rezaei-Vance meeting in Doha is planned, and spokesman Esmaeil Baghaei called the two-day proposal \"the most logical roadmap.\" President Masoud Pezeshkian said the Leader has ordered an end to \"neither war nor peace\" and that Iran will negotiate \"with dignity\" but \"not surrender to force.\" Tasnim reported that \"US projectiles\" struck Qeshm on Sunday night, and a Hormozgan deputy governor said they caused no damage; no US statement was located. Baghaei also said Iran cannot meet IAEA obligations \"like it did under normal conditions.\" Spillover continued: a drone halted the Khor Mor gas field, cutting up to 2,800 megawatts and leaving more than 70% of Iraqi Kurdistan without power, and Saudi Arabia said its East-West pipeline was hit near Medina with operations unaffected. China's foreign ministry said prolonging the US-Iran conflict \"does not serve the common interest.\" Brent fell about 6% to near $92; hormuz.now counted 2.9 crossings a day against 47.6 before the war. Direction stays mixed; the probability rises to 12.",
  implications: [
    {
      title: "Qatar carries the file to the White House, and Tehran answers with its seven conditions",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock restarted at the mediator level a day after Araghchi said mediators had stopped travelling. Sheikh Mohammed's trip is the first mediator journey this file records since Tehran's \"we have to wait\": about 45 minutes with Trump after a separate session with Vance, who Iran International says has spoken with him almost daily for two weeks. That partly tests the mediation-pause prior. It is not retired, because no Iranian interlocutor was in the room and no session with Tehran is named. Trump's readout is optimism from one party and is graded as such: \"positive momentum,\" \"effectively over,\" and an Iranian acceptance of a nuclear-weapons ban \"100%, more than 100%\" that Tehran publicly denies. The skeptical counter came the same day. Rezaei's \"time to SURRENDER to the seven conditions,\" the Tasnim denial of any Doha meeting with Vance, and Baghaei's demand that Washington lift the blockade and unfreeze assets before Hormuz reopens all restate the sequencing wall: conditions first in Tehran, nuclear first in Washington. Pezeshkian's line that the Leader has ordered an end to \"neither war nor peace\" cuts both ways. It reads as a mandate to close a deal or as a warning that the limbo will end by other means, and he paired it with \"we will not surrender to force and bullying.\" The probability rises two points to 12 on the restarted channel, not on any change in terms.",
    },
    {
      title: "Qeshm acknowledged, IAEA access narrowed, and the hawks' clock in Washington",
      body:
        "The active-deadline clock is unchanged in grade but sharper in evidence. Tasnim now reports that \"US projectiles\" struck Qeshm on Sunday night, and Hormozgan deputy governor Ahmad Nafisi said the targets lay outside residential and service areas, with no damage. That replaces Fars's Day 255 warning-shot explanation and fits the defensive-scoping prior: limited US fire, minimised by Tehran, with no CENTCOM statement located. Al Jazeera relays US reports that Hegseth and CENTCOM commander Brad Cooper are pressing Trump to resume attacks and, citing Axios, that CENTCOM awaits orders for major operations; a Ynet headline says Netanyahu calls Trump \"every day.\" The political-will clock runs the other way: House Democratic leader Hakeem Jeffries said Iran is \"stronger now\" and vowed to end the war \"one way or the other,\" and Thomas Massie reintroduced impeachment articles against Hegseth. On the nuclear file, Baghaei said Iran cannot fulfil IAEA obligations \"like it did under normal conditions,\" while saying it has not suspended the NPT and that Bushehr was inspected days ago. With 440.9 kg of 60% uranium unverified, Washington's nuclear-first demand meets a narrower inspection offer. Spillover stayed on the periphery: Khor Mor, now unclaimed per Al Jazeera, and Saudi Arabia's East-West pipeline, the main Hormuz bypass, hit near Medina. Iran itself is not shown to have struck a host state; the count reaches 62 days.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; Brent falls on diplomacy while LNG transits stay at zero",
      body:
        "No fresh Taiwan-specific development was located, and prior assessments are unchanged. The diplomacy-priced-not-supply prior got its sharpest test yet. Brent fell about 6% on Monday, to $92.16 on Trading Economics' table and $91.61 on Iran International's account, the lowest since 31 August, on the Qatar meeting and Trump's \"effectively over.\" The physical strait moved the other way: hormuz.now counted 20 tanker crossings in seven days, 2.9 a day against 47.6 before the crisis, down from 3.1, with no LNG or LPG carrier in seven days and one of each in thirty; IMF PortWatch deadweight was 0.6% of normal to 1 November. Trading Economics again says Gulf crude exports are recovering, which the strait counts do not show unless bypass routes carry the difference; the East-West pipeline that would carry it was itself hit on Monday, with operations reported unaffected. For Taipower's gas-heavy generation, crude relief does little: the binding variables remain Qatari LNG and zero transits, with QatarEnergy's force majeure last reported into early December. A lower Brent eases CPC's crude import bill and the inflation outlook, but not the LNG shortfall. The energy-infrastructure clock also moved in Iraqi Kurdistan, where Khor Mor's loss cut up to 2,800 megawatts, a domestic grid shock rather than an export one. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split stays held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located for the reported southern strikes.",
    iran:
      "No new official war toll; no damage or casualties reported from Qeshm. Execution series carry unchanged and unmerged.",
    other:
      "No adopted change. No casualties at Khor Mor or the East-West pipeline; IMO seafarer deaths (25) and Houthi-reported casualties are held apart.",
  },
};

export default data;
