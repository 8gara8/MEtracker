import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Day 111 is the eve of the signing. Switzerland's Foreign Ministry confirmed the US-Iran memorandum is set for Friday at the Bürgenstock resort near Lucerne, the venue locked even as most reporting still files it as 'Geneva' (SWI swissinfo, Al Jazeera). A confirmed venue is firmer than Day 110's finalized-but-sealed text, so direction holds down. But the day's fresh fault line is a reported June 18 ratification gate inside Tehran, and §3.5.3 governs: a deal that can still fail on parliamentary silence is not a verified accord. Trajectory stays down; the war is not over until the released text lands Friday.",
      risk7d:
        "Seven-day risk stays conditional. The negotiation-capacity and active-deadline clocks point at a dated, venue-confirmed Friday signing, and oil is pricing the deal in. Against that, several accounts frame June 18 as an internal ratification deadline whose failure could collapse the deal within 48 hours (HuffPost/Reuters); the binding text is still unreleased; and the four-day gap to Friday is the Day 51 reversal window. Netanyahu reserves the right to strike. A released, executed text converts the week to ceasefire; a ratification failure or a terms reversal repeats Day 51.",
      spillover:
        "Spillover holds conditional. The Beirut flashpoint stayed cooled and the declared all-fronts termination covers Lebanon, but a senior US official has said Israeli withdrawal is not a deal condition, Netanyahu vowed to 'defend ourselves as necessary,' and the Israel-Lebanon comprehensive track only convenes the week of June 22 (Al Jazeera). The §3.5.6 Israel-independence prior carries: a ceasefire that depends on Israeli restraint stays one strike from reigniting before the comprehensive track even meets.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'SWI swissinfo / Al Jazeera',
      event:
        "Switzerland's Foreign Ministry confirmed the US-Iran memorandum — circulating as the 'Islamabad Memorandum' for Pakistan's mediation — is set to be signed Friday evening at the Bürgenstock resort near Lucerne, locking the venue ahead of the ceremony",
      summary:
        "Much reporting still files the ceremony generically as 'Geneva,' and a minority dates it to June 20; the Swiss confirmation is the firmest logistical commitment of the deal track to date (SWI swissinfo, Al Jazeera).",
      impact:
        "A confirmed venue and host is firmer than Day 110's finalized-but-sealed text, advancing the missing-text fault line toward execution. The naming and dating divergence is minor, but per §3.5.3 the binding read remains the text released at the ceremony, not the pre-signing choreography.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'HuffPost / Reuters',
      event:
        "Several accounts frame June 18 as an internal ratification deadline inside Tehran: per one wire-sourced report, continued Iranian parliamentary silence on the ballistic-missile and nuclear-concession language could trigger a collapse within 48 hours",
      summary:
        "The framing is a reported risk, not a confirmed government position; the deal's principals — the Swiss host, Pakistan, and the G7 — are proceeding to Friday regardless (HuffPost/Reuters, Al Jazeera).",
      impact:
        "Skeptical counter per §3.5.3: a ratification gate that can still fail is the same last-mile hurdle the Day 51 deal cleared right up to the USS Spruance seizure that reversed it. The four-day gap to Friday is the live reversal window; today's silence is the variable to watch.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC / Trading Economics',
      event:
        "Brent crude fell for a fourth straight session to three-month lows near $79 a barrel, down nearly 40% from the conflict peak, as markets front-ran Friday's signing and the prospective return of Iranian oil exports",
      summary:
        "The slide tracks expectations of restored supply once the MoU takes effect; the EIA's June outlook still frames the official June–July average higher near $105, the gap between spot relief and the official outlook (CNBC, Trading Economics).",
      impact:
        "The energy-infrastructure clock keeps improving on the price side, with the toll tail risk lifted Day 110. Analytical judgment: relief is priced, but §3.5.6 governs — the price reflects expected flow, not restored transit, and a ratification or terms reversal would re-spike it.",
    },
    {
      id: 4,
      direction: 'neutral',
      importance: 'high',
      source: 'Gulf News / Kpler / Al Jazeera',
      event:
        "The physical chokepoint lags the politics: only about seven tankers transited the Strait on Friday and four more over the weekend, with 550+ vessels still stranded on either side and shipowners reluctant to return three-plus months into the effective closure",
      summary:
        "Against a pre-war baseline near 100 cargo vessels a day, Friday's traffic is roughly 7% of normal; an Al Jazeera explainer flagged that even a signed reopening leaves safe passage unassured until demining and a credible security guarantee are in place (Gulf News, Al Jazeera).",
      impact:
        "The §3.5.6 mine-clearance prior holds: a signature reopens Hormuz on paper while the lanes stay physically and legally uncertain. The binding test for the energy clock is a demined, safety-assured, transiting Strait — weeks of work that no Friday ceremony can compress.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'ISIS / IAEA',
      event:
        "The nuclear-verification gap is unchanged and now quantified: the IAEA's in-field monitoring blackout reached 97 days, leaving 440.9 kg of 60% HEU unverifiable and the current size, composition, and whereabouts of the stockpile unknown to the Agency",
      summary:
        "Iran suspended cooperation in 2025 and remains in violation of its NPT safeguards; the MoU's pledge that inspectors will 'absolutely' return and that enrichment and HEU disposal lead the 60-day track is a commitment, not restored access (ISIS).",
      impact:
        "The weaponization-clock prior carries per §3.5.6: the deal defers and pledges, it does not disarm. The 97-day figure sets the size of the hole the 60-day post-signing window must fill — and the first dated test is whether inspectors physically re-enter at all.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (diplomatic eve; venue confirmed for Friday signing)',
      status:
        "No new US casualties. The blockade-end order stands as the first US drawdown of the war, and the US says Iran 'won't get a dime' of the ~$24-25B frozen-asset/sanctions relief until it performs over the 60-day post-signing window. Forces still hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down; the in-person signing is set for Friday, June 19, at the Bürgenstock resort near Lucerne.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new IDF KIA (Beirut flashpoint stayed cooled; no new salvo)',
      status:
        "No confirmed new IDF KIA. The Beirut flashpoint stayed cooled with no new salvo, but Netanyahu — sidelined from the US-Iran track — holds the right to 'defend ourselves as necessary,' and a US official has confirmed Israeli withdrawal from Lebanon is not a deal condition. Israel-Lebanon comprehensive talks are set for the week of June 22.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (diplomatic eve; venue confirmation, no active exchange)',
      status:
        "No verified new mass toll. The MoU reportedly carries an Iranian pledge not to seek a weapon, but the IAEA monitoring blackout reached 97 days and 440.9 kg of 60% HEU stays unverifiable. The Sirik-area water loss to 20,000+ from the June 10 strikes carries as the standing humanitarian incident. HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) and Hengaw 6,620+ mil carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH 3,783 killed / 11,699 injured (June 14 update); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 confirmed new in active exchange (diplomatic eve)',
      status:
        "No confirmed new toll in active exchange. The Lebanon Ministry of Public Health war-cumulative figure stands at 3,783 killed / 11,699 injured as of the June 14 update. The declared termination covers Lebanon, but the comprehensive Israel-Lebanon track only convenes the week of June 22. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 111 is the eve of the signing, and the day's fresh fault line is a ratification gate inside Tehran. Switzerland's Foreign Ministry confirmed the US-Iran memorandum — circulating as the 'Islamabad Memorandum' for Pakistan's mediation — is set to be signed Friday evening at the Bürgenstock resort near Lucerne, the venue now locked even as much reporting still files it as 'Geneva' and a minority dates the ceremony to June 20 (SWI swissinfo, Al Jazeera). Against that firming commitment, several accounts frame June 18 as an internal ratification deadline: per one wire-sourced report, continued Iranian parliamentary silence on the ballistic-missile and nuclear-concession language could trigger a collapse within 48 hours (HuffPost/Reuters). Analytical judgment, per §3.5.3: a confirmed venue is firmer than a finalized text, but a ratification gate that can still fail is the same last-mile hurdle the Day 51 deal cleared right up to the USS Spruance seizure that reversed it. Energy keeps pricing the deal in — Brent fell a fourth straight session to three-month lows near $79, down nearly 40% from the conflict peak — while the physical chokepoint lags: roughly seven tankers transited Friday and four more over the weekend with 550+ vessels still stranded either side, and shipowners stay reluctant pending demining and a credible safety assurance (CNBC, Gulf News, Al Jazeera). The nuclear gap is unchanged and now quantified at a 97-day monitoring blackout with 440.9 kg of 60% HEU unverifiable (ISIS). 30-day ceasefire probability rises to 60 from 58; direction stays de-escalating; spillover holds conditional with the Israel-Lebanon comprehensive track still not convening until the week of June 22.",
  implications: [
    {
      title:
        "The venue confirms for Friday, but the day's fresh fault line is a reported June 18 ratification gate inside Tehran — last-mile risk in the Day 51 window",
      body:
        "Day 110's binding test was whether the finalized-but-sealed text would convert to a released, executed accord; Day 111 firms the logistics without closing the gap. Switzerland's Foreign Ministry confirmed the signing for Friday evening at the Bürgenstock resort near Lucerne — the firmest commitment of the track — even as much reporting still files it generically as 'Geneva' and a minority dates it to June 20 (SWI swissinfo, Al Jazeera). Against that, several accounts frame June 18 as an internal ratification deadline: per one wire-sourced report, continued Iranian parliamentary silence on the ballistic-missile and nuclear-concession language could collapse the deal within 48 hours (HuffPost/Reuters). Skeptical counter per §3.5.3, and it is the analytical core: a ratification gate that can still fail is exactly the kind of last-mile hurdle the Day 50–51 deal cleared right up until the USS Spruance seizure reversed it, and the four-day gap to Friday is the same window. The framing is a reported risk, not a confirmed government position, and the Swiss host, Pakistan, and the G7 are proceeding regardless. Under the multi-clock framework the negotiation-capacity clock is at its strongest of the war, pointed at Friday. Analytical judgment: the venue confirmation is real progress, but the binding read is the text released at the ceremony — today's parliamentary silence is the variable that decides whether the window closes to ceasefire or reopens to reversal.",
    },
    {
      title:
        "Hormuz reopens on paper while it stays a ghost route in fact — seven tankers Friday against a hundred-a-day baseline, with demining and a safety guarantee still ahead",
      body:
        "The paper-versus-physical gap is the sharpest it has been. Only about seven tankers transited the Strait on Friday and four more over the weekend, against a pre-war baseline near 100 cargo vessels a day — roughly 7% of normal — with 550+ vessels still stranded on either side and shipowners reluctant to return three-plus months into the effective closure (Gulf News, Kpler). An Al Jazeera explainer underlined that even a signed reopening leaves safe passage unassured until the lanes are demined and a credible security guarantee is in place (Al Jazeera). Skeptical counter per §3.5.6: the mine-clearance prior holds — a signature reopens Hormuz legally while the chokepoint stays physically and operationally closed, and the nuclear file rhymes with it, the IAEA's blackout now 97 days and 440.9 kg of 60% HEU unverifiable (ISIS). Both are deferred-and-pledged, not solved. Under the multi-clock framework the energy-infrastructure clock improves on price — Brent near $79, a three-month low — but not yet on flow. Analytical judgment: the market is pricing an outcome the water has not yet delivered; the binding test for the energy clock is a demined, safety-assured, transiting Strait, weeks of work no Friday ceremony can compress, and a ratification or terms reversal would re-spike the relief that markets have already booked.",
    },
    {
      title:
        "Taiwan: Brent's three-month low improves the import-cost case, but flow not terms remains the catalyst — and the catalyst is still ahead",
      body:
        "For Taiwan, Day 111 improves the LNG-and-energy case on price while leaving the structural read intact. Brent at three-month lows near $79, down nearly 40% from the conflict peak, lowers the imported-energy bill that is Taiwan's most direct exposure to the war, and the Day 110 toll resolution already removed a ~$29B/yr permanent-friction tail risk from Gulf energy (CNBC, Trading Economics). But §3.5.6 governs the structure: the chokepoint is still physically closed, moving roughly 7% of pre-war traffic, and the price reflects expected flow rather than restored transit (Gulf News). No fresh Taiwan-specific development today; prior assessments hold. The China-Russia veto cover and the ~37.7% Chinese share of Hormuz crude carry, and the EIA's June outlook still frames the official June–July average near $105 against the spot relief. Analytical judgment: the energy-infrastructure clock keeps improving, now on both terms and price, but the LNG-cover-through-September case rests on physical flow — the catalyst that revises the dominant case is a demined, transiting Strait plus a released, executed Geneva text, both still ahead. TSMC's 2026 CapEx framework near 8% carries; the case revises when paper terms become moving tankers.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. The blockade-end order stands as the first US drawdown; the US says Iran 'won't get a dime' of the ~$24-25B relief until it performs over 60 days. Forces hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down; in-person signing set for Friday at the Bürgenstock resort near Lucerne.",
    israel:
      "No confirmed new IDF KIA. The Beirut flashpoint stayed cooled with no new salvo. Netanyahu holds the right to 'defend ourselves as necessary'; a US official confirmed Israeli withdrawal from Lebanon is not a deal condition. Comprehensive talks set for the week of June 22.",
    iran:
      "No verified new mass toll. The MoU reportedly carries an Iranian pledge not to seek a weapon, but the IAEA blackout reached 97 days and 440.9 kg of 60% HEU stays unverifiable. The Sirik-area water loss to 20,000+ from the June 10 strikes carries. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    other:
      "No confirmed new toll in active exchange; the Lebanon MOH war-cumulative figure stands at 3,783 killed / 11,699 injured as of June 14. The declared termination covers Lebanon, but the comprehensive track only convenes the week of June 22. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
