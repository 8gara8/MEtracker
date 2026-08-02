import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction eases to mixed. Trump called off the imminent US-Israeli strikes over the weekend, saying Iran and 'other Middle Eastern countries' asked Washington to hold off because 'the perimeters of a deal has been agreed to,' and that Israel agreed to join the pause (Semafor, Washington Post, NPR). Per §3.5.3 that is a Day 50-style presidential progress claim advanced ahead of verification: no text, no Iranian confirmation, and Tehran says the Oman route would not reopen the strait. Kinetic action genuinely stopped, which is why direction leaves escalating — but the exchange has reversed three times before within days, so the shift is to mixed, not de-escalating.",
      risk7d:
        "Seven-day risk holds critical. The pause is contingent on 'rapidly' reaching a Hormuz deal that shows no breakthrough, Israel stays on high alert, and Araghchi warns of an 'eye for an eye' answer to 'any adventurous action' (Washington Post, Bloomberg, Global Times). A pause the President can announce he can un-announce; the infrastructure tripwire is stood down, not dismantled. A resumption of the US-Israeli strike, a laden-tanker sinking, or a verified American death remain the dominant discrete risks over the week, and the mid-August toll-free deadline still looms.",
      spillover:
        "Spillover holds critical. A Qatari-LNG carrier was struck by an unknown projectile off Oman's Musandam Peninsula, keeping the maritime front kinetic even as the diplomacy paused (UKMTO, Bloomberg). The Houthi embargo of Saudi Arabia held at Bab el-Mandeb with Sunday strikes on Red Sea oil depots cutting traffic to about eleven vessels, and Brent held near $90 into the weekend (The Hill, CNBC, Trading Economics). The war still spans Iranian soil, Gulf waters and both maritime chokepoints at once, and a strike pause does not close any of the three.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Trump / Semafor / Washington Post / NPR',
      event:
        "President Trump abruptly called off the planned US-Israeli strikes on Iran over the weekend, saying Iran and 'other Middle Eastern countries' had asked Washington 'to hold off any attack' because 'the perimeters of a deal has been agreed to,' and that Israel had agreed to join the pause.",
      summary:
        "Per §3.5.3 it is the first de-escalatory inflection since the Day 154 collapse and a Day 50-style progress claim — a pause announced ahead of any verification, text, or Iranian confirmation.",
      impact:
        "Kinetic action stopped, lowering the near-term odds the infrastructure ladder fires this week; but a pause the President can announce he can un-announce, and the tripwire is only stood down.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Washington Post / Bloomberg',
      event:
        "The hold was pledged on 'rapidly' reopening the Strait of Hormuz, but Iran and Oman were reported discussing a new shipping route that Tehran said would not reopen the strait to pre-war terms, and there was no sign of a breakthrough in the capital.",
      summary:
        "Per §3.5.3 the gap between the US 'reopen Hormuz' framing and Iran's 'route that does not reopen' framing is not a detail to bridge later — it is the whole dispute, restated inside the deal claim.",
      impact:
        "The pause is only as durable as a deal whose two sides describe it in mutually exclusive terms; the mid-August toll-free deadline still looms without a broker both accept.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Global Times / Al Jazeera',
      event:
        "Foreign Minister Araghchi told the Turkish, Pakistani and Saudi foreign ministers over the weekend that Iran would meet 'any adventurous action' with an 'eye for an eye,' while Gulf states lobbied Trump to hold off the strike.",
      summary:
        "Per §3.5.6 the coalition-cohesion clock is working — the governments Iran struck now brake Washington — but Iran's maximalism on Hormuz and infrastructure retaliation is unsoftened.",
      impact:
        "Gulf mediation buys time, not settlement; Iran keeps its 'eye for an eye' posture on energy assets even as it lets regional partners carry the de-escalation message.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'UKMTO / Bloomberg / The Hill',
      event:
        "A Qatari-LNG carrier, the Gaslog Shanghai, was struck by an 'unknown projectile' off Oman's Musandam Peninsula, its engine room damaged and the vessel briefly not under command, though without casualties; UKMTO also reported an explosion near a second tanker.",
      summary:
        "Per §3.5.5 the maritime front stayed kinetic beneath the diplomacy; the cargo that took the hit — Qatari LNG — is precisely Taiwan's exposure.",
      impact:
        "A pause in US strikes does nothing for a laden LNG carrier taking fire mid-strait; a tanker sinking or crew death remains the tell most likely to reprice oil and arm Trump's rule.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'The Hill / CNBC / Al Jazeera',
      event:
        "The Houthi maritime embargo of Saudi Arabia held at Bab el-Mandeb, with attacks on Saudi Red Sea oil depots on Sunday cutting traffic through the strait to about eleven commodity vessels that day, as the Yemeni FM said the Houthis aim to copy Iran's Hormuz control.",
      summary:
        "Per §3.5.6 the second chokepoint runs on Yemen's own ledger; a US-Iran pause does not reach Bab el-Mandeb.",
      impact:
        "With both chokepoints contested at once, Brent held near its $90 weekend close and the ~$25 war premium over the pre-war baseline stayed intact.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta:
        "+0 confirmed; Trump called off the weekend strikes, so no fresh US kinetic action was taken; the lone Kuwait death stays denied by CENTCOM and unconfirmed",
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. Trump called off the planned US-Israeli strikes over the weekend, so no new US exposure was incurred and no fresh American death has been reported; the one death Kuwait reported at Ahmad al-Jaber remains unconfirmed, of undetermined nationality, and set against CENTCOM's claim that all drones and missiles were intercepted or failed. Per §3.5.3 the US KIA figure does not move — a verified American death is the single event that would trigger Trump's 'bridge or power plant per ship' rule. The three deaths that lifted the toll to 17 (one in northern Iraq, two at Muwaffaq Salti in Jordan) carry per Day 144; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 (Israel not a direct party to the US-Iran exchange); said to have agreed to Trump's pause but to remain on high alert",
      status:
        "No new Israeli casualties. Israel is said to have agreed to join Trump's pause but to remain on high alert (Washington Post, Bloomberg); it stays outside the US-Iran framework and unbound by the Oman channel or any Hormuz corridor formula, and its standing readiness to strike Iran again keeps a full-scale-campaign option live if the deal claim collapses. The Lebanon gap prior (§3.5.6) carries: operations against Hezbollah continue, the June 26 framework remains rejected, and cross-border fire persists with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Araghchi warns of an 'eye for an eye' answer to any strike",
      status:
        "No updated official Iranian toll issued on Day 157. The Qeshm Island deaths — a couple and their child, cited by Tehran as the trigger for the Kuwait strike — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Araghchi warned counterparts in Ankara, Islamabad and Riyadh that Iran would answer 'any adventurous action' with an 'eye for an eye.' The IAEA has run no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and, per Grossi, likely still at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched and the inspection-access dispute unresolved.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured (plus one unconfirmed at Ahmad al-Jaber, denied by CENTCOM) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta:
        "No confirmed new deaths; a Qatari-LNG carrier was struck off Musandam with engine-room damage but no casualties; the Houthi embargo produced no reported crew fatalities",
      status:
        "No confirmed new deaths on Day 157. A Qatari-LNG carrier, the Gaslog Shanghai, was struck by an 'unknown projectile' off Oman's Musandam Peninsula with engine-room damage but no reported casualties (UKMTO, Bloomberg), so the maritime front stayed kinetic without turning lethal — a laden-tanker sinking or crew death remains the tell most likely to reprice oil and trigger Trump's rule. The Houthi embargo of Saudi Arabia held at Bab el-Mandeb, with Sunday strikes on Red Sea oil depots cutting traffic to about eleven commodity vessels; the confirmed Kuwait baseline holds at 10 killed / 115 injured. Iraq holds 148+ KIA / 402+ WIA, and Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 157 turned on the strike that did not come. After a week of reports that a US-Israeli offensive on Iran's energy and nuclear sites was imminent, President Trump abruptly called the attack off over the weekend, saying Iran and 'other Middle Eastern countries' had asked Washington 'to hold off any attack' because 'the perimeters of a deal has been agreed to,' and that Israel had agreed to join the pause (Semafor, Washington Post, NPR). It is the first genuine de-escalatory inflection since the Day 154 collapse — and, per §3.5.3, the most Day 50 moment of the war: a presidential progress claim advanced ahead of any verification. The skeptical counter arrived almost at once. Trump tied the hold to 'rapidly' reopening the Strait of Hormuz, yet Iran and Oman were reported discussing a new shipping route that Tehran said would not reopen the strait; there was no sign of a breakthrough in the capital; and Israel said it stayed on high alert (Washington Post, Bloomberg). Foreign Minister Araghchi spent the weekend warning the Turkish, Pakistani and Saudi foreign ministers that Iran would answer 'any adventurous action' with an 'eye for an eye' (Global Times). And the maritime front stayed hot beneath the diplomacy: a Qatari-LNG carrier, the Gaslog Shanghai, was struck by an 'unknown projectile' off Oman's Musandam Peninsula, its engine room damaged though without casualties (UKMTO, Bloomberg). Direction eases to mixed on the pause; seven-day risk holds critical because the hold is contingent and unverified; spillover holds critical; the thirty-day ceasefire probability ticks to 11.",
  implications: [
    {
      title: 'The strike is called off — a Day 50 claim, not a Day 40 ceasefire',
      body:
        "For a week the war's dominant question was whether Washington would strike Iran's energy and nuclear sites; over the weekend Trump answered by calling the attack off, saying Iran and 'other Middle Eastern countries' had asked him 'to hold off' because 'the perimeters of a deal has been agreed to' (Semafor, NPR, Washington Post). Under the multi-clock framework the negotiation-capacity clock has, for the first time since the Day 154 collapse, moved ahead of the active-deadline clock. Analytical judgment: per §3.5.3 this is the Day 50 pattern, not the Day 40 ceasefire. On Day 50 it was Pakistan's Dar and Trump narrating a deal '80% complete' days before the USS Spruance seizure blew it up; here it is Trump narrating an agreed 'perimeter' with no text, no Iranian confirmation, and no verification mechanism named. The standing prior holds with force: de-escalation announced ahead of verification has, three times in this war, reversed within days (§3.5.6). What is genuinely new is that kinetic action stopped — the imminent-strike reports did not become strikes, and Israel is said to have agreed to the pause. That lowers the near-term probability the infrastructure ladder fires this week, and it is why direction eases to mixed and the ceasefire probability ticks up. But a pause the President can announce, the President can un-announce; the tripwire has not been dismantled, only stood down, and it stands down on terms no party has yet agreed.",
    },
    {
      title: 'The pause rests on a Hormuz deal Tehran is already contradicting',
      body:
        "The hold is only as durable as the Hormuz deal it is pledged on, and that deal is contradicting itself in real time. Trump tied the pause to 'rapidly' reopening the strait, but Iran and Oman were reported discussing a new shipping route that Tehran said would not reopen Hormuz to pre-war terms, and there was no sign of a breakthrough in the capital (Washington Post, Bloomberg). Analytical judgment: per §3.5.3 the gap between the American framing — 'a deal to reopen Hormuz' — and the Iranian framing — 'a route that does not reopen the strait' — is not a detail to be bridged later; it is the whole dispute, restated. Iran's Ghalibaf spent the prior week demanding control of both lanes and rejecting Oman's voluntary fee (§3.5.6), and nothing in the weekend reporting suggests that maximalism softened. Araghchi reinforced the hard line, telling the Turkish, Pakistani and Saudi foreign ministers that Iran would meet 'any adventurous action' with an 'eye for an eye' (Global Times). That Gulf states lobbied Trump to hold off is the coalition-cohesion clock working — the governments Iran struck now function as a brake on Washington — but it buys time, not settlement. The sixty-day toll-free window still expires around mid-August; the pause has given the fee fight a deadline and a spotlight without giving it a broker both sides accept.",
    },
    {
      title: 'Taiwan: a Qatari LNG tanker takes the hit the buffer cannot absorb',
      body:
        "The weekend's sharpest signal for Taipei was not diplomatic but kinetic: a Qatari-LNG carrier, the Gaslog Shanghai, was struck by an 'unknown projectile' off Oman's Musandam Peninsula, its engine room damaged and the vessel briefly not under command, though without casualties (UKMTO, Bloomberg, The Hill). Analytical judgment: per §3.5.5 this is the exposure made literal — the cargo that took the hit is precisely the cargo Taiwan cannot do without. About a third of Taiwan's 23.6 Mt of LNG, nearly 8 Mt of it Qatari, transits Hormuz; the island is 99% import-dependent for gas and holds only about eleven days of gas inventory against roughly 120 days of oil cover, with landed LNG already run up from ~$10/MMBtu in February to ~$17 and spot reliance at 60-65% after Taipei lost oil-indexed Qatari volumes (CSIS, OilPrice, Atlantic Council). A pause in US strikes does nothing for a laden LNG carrier taking fire mid-strait; the diplomatic hold and the shooting are now running on separate clocks. Per §3.5.10 the day neither closes the gas gap nor removes the fire-and-permission risk on the water, and the statutory fourteen-day buffer does not arrive until 2027. The crude side still cushions — roughly 60% of oil imports are US-sourced — but the molecule under threat this weekend was gas, the one Taiwan has the least room to lose.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds 17 KIA / 432 WIA (AP/CENTCOM series). Trump called off the weekend strikes, so no fresh US kinetic action or exposure; the lone Kuwait death stays denied by CENTCOM and unconfirmed. Per §3.5.3 the US KIA figure does not move until confirmed; a verified US death triggers Trump's 'bridge or power plant per ship' rule. $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties; Israel is said to have agreed to Trump's pause but stays on high alert. It remains outside the US-Iran framework and the Oman channel; the Lebanon gap prior carries — operations against Hezbollah continue, June 26 framework rejected, no ceasefire.",
    iran:
      "No fresh official MOH toll; the Qeshm civilian deaths and destroyed Jask desalination plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Araghchi warns of an 'eye for an eye' answer to any strike. IAEA no verification since Feb 28; HEU likely Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "No confirmed new deaths; a Qatari-LNG carrier was struck off Musandam with engine-room damage but no casualties, so the maritime front stayed kinetic without turning lethal. The Houthi embargo of Saudi Arabia held with Sunday depot strikes and traffic down to ~11 vessels; confirmed Kuwait baseline 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Lebanon source-split. A tanker-crew death is the tell.",
  },
};

export default data;
