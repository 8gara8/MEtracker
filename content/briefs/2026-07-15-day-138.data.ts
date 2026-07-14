import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating, but Day 138 is the first day in a week with real counter-currents inside the escalation. The blockade the US only announced Monday is now enforced and biting: warships turned back ~21 vessels in the Arabian Sea and reversed a US-sanctioned Chinese tanker, while CENTCOM struck Iran a fourth straight night and the IRGC answered on Bahrain's Sheikh Isa and Kuwait's Ali al-Salem bases (Newsweek, Army Recognition). Against that, two genuine de-escalatory moves: Trump abandoned the 20% Hormuz toll within 24 hours of declaring it, and Araghchi said Iran is working Oman, Qatar and Pakistan to de-escalate. Per §3.5.3 the mediation contact is a claim, not a channel — Iranian deputies simultaneously vowed Washington would 'regret' its strikes and the Army said the strait will 'never' reopen through war — and a blockade physically turning back Chinese hulls is a structural deepening that outweighs a legally void toll's withdrawal.",
      risk7d:
        "Seven-day risk stays extreme, and the reason sharpened from potential to realized. The great-power friction the last brief flagged is now live: US warships intercepted and turned back a US-sanctioned Chinese tanker under the blockade, the first time Washington has physically reversed Chinese-linked shipping in this cordon — non-kinetic so far, but the exact incident that can spiral if a future stop meets resistance (Newsweek). Layer on a fourth night of US strikes, Iran's fresh Bahrain–Kuwait retaliation, Trump's standing threat to hit the buried Pickaxe Mountain enrichment site, and Israel's Katz vowing 'blue and white' strikes 'a third time' with 'even greater force,' and every rung still carries fire (Times of Israel, The National). The one brake is that the blockade's carve-outs — non-Iranian transit and humanitarian cargo exempt — leave a calibrated-down path the maximalist Monday framing did not.",
      spillover:
        "Spillover stays critical and drew in new capitals. Iran's retaliation again crossed into Gulf-state soil — Sheikh Isa in Bahrain and Ali al-Salem in Kuwait — and the maritime war pulled two more powers toward it: China, whose sanctioned tanker was turned back and whose foreign ministry has branded the blockade 'dangerous and irresponsible,' and India, which summoned Iran's deputy chief of mission over the UAE tanker strikes the UAE called a 'grave violation' of international law (Newsweek, Al Jazeera). The blockade's interdiction of third-country hulls turns a US–Iran fight into a test of how Beijing responds to physical interference with its cargoes. The Lebanon seam stayed quiet, but the shipping signature — 21 vessels turned back, AIS-dark reroutes, traffic at multi-month lows — shows the disruption radiating through the global system well beyond the belligerents.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Newsweek / Army Recognition / The Hill',
      event:
        "The US began enforcing its naval blockade of Iran's ports and coastline at 20:00 GMT; within hours Navy warships turned back roughly 21 vessels in the Arabian Sea, intercepted and reversed a US-sanctioned Chinese tanker, and ordered two tankers out of Chabahar to turn around — though at least one other Chinese hull still transited Hormuz, marking the cordon real but porous",
      summary:
        "Per §3.5.11 this is the genuine inflection the star is reserved for: the blockade the last brief booked as a declaration is now a live interdiction regime physically turning ships — including Chinese-linked hulls — away from Iran (Newsweek, Army Recognition).",
      impact:
        "Turning back a US-sanctioned Chinese tanker realizes the great-power friction the briefs flagged; the carve-outs for non-Iranian transit and humanitarian cargo keep it short of a total siege, but the interdiction of third-country shipping is the new escalation axis.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Newsweek / Press TV / Al Jazeera',
      event:
        "CENTCOM struck Iran for a fourth consecutive night — Washington said to degrade Tehran's ability to target commercial shipping — and the IRGC answered with a fresh drone-and-missile salvo on US facilities at Sheikh Isa air base in Bahrain and Ali al-Salem in Kuwait, saying it hit weapons-storage and parts depots and damaged a number of drones",
      summary:
        "Per §3.5.3 Iran's damage claims stay Tehran's and unconfirmed by Washington, which has reported no personnel losses from the base strikes; the verified fact is a fourth strike round and a fourth Iranian cross-border answer onto Gulf soil (Newsweek, Press TV).",
      impact:
        "The kinetic tempo did not ease even as the toll dropped — four strike nights and repeated Gulf-base retaliation keep the exchange running and the host monarchies' basing bargain under fire from both ends.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN / CNBC / Al Jazeera',
      event:
        "Trump abandoned the 20% Hormuz toll he had declared a day earlier, saying Gulf states will 'invest in the US' as repayment instead; CNN reported a 24-hour internal sprint to talk him out of it after Secretary Rubio and the UN's IMO said no state may charge fees to transit an international strait",
      summary:
        "Per §3.5.6 the toll-institutionalization prior recedes for now: the 'two guardians' absurdity of Monday collapses to one, removing a claim that had no legal basis and that contradicted the blockade it was bolted onto (CNN, CNBC).",
      impact:
        "A rare de-escalatory reversal — but the underlying protection-billing logic survives in the 'invest in the US' reframing, and dropping the toll rationalizes the escalation by leaving the harder instrument, the blockade, fully in place.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / OilPrice / Trading Economics',
      event:
        "Brent crude settled at $84.73, up 1.72%, after touching $87 intraday — its first $87 print since June and a weekly gain above 10% — with the climbdown on the Hormuz toll capping what had been a sharper spike on the blockade and the fourth strike night",
      summary:
        "Per §3.5.5 the tape priced a real but bounded shock: the blockade's carve-outs and the toll's withdrawal pulled Brent back from its $87 high to a ~$85 settle, even as Hormuz traffic stayed at multi-month lows (CNBC, OilPrice).",
      impact:
        "For a price-taking LNG importer the shock is realized but capped near $85, not the $95 a full closure would imply; the ceiling holds only while the cordon stays porous and the toll stays buried.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / Press TV / Times of Israel',
      event:
        "India summoned Iran's deputy chief of mission over the strikes on UAE tankers the UAE had called a 'grave violation' of international law, while Araghchi said Iran was in contact with Oman, Qatar and Pakistan to de-escalate — even as Deputy FM Gharibabadi vowed Washington would 'regret' its strikes and Israel's Netanyahu and Katz said the IDF was ready to hit Iran 'a third time' with 'even greater force'",
      summary:
        "Per §3.5.3 the mediation line is a claim of contact, not a reconvened channel, and it sits between Iranian defiance and Israeli readiness signals; the one new actor is India, pulled in as a shipping and diaspora stakeholder (Al Jazeera, Times of Israel).",
      impact:
        "The diplomatic thread widened and thinned at once — more capitals engaged, but around a blockade and a fourth strike night rather than a table, with Israel's independent readiness the standing wildcard.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 confirmed (fourth US strike night; Iran\'s Bahrain–Kuwait base salvo reported as materiel damage — drones and depots — with no confirmed US personnel losses; assessment ongoing)',
      status:
        "No confirmed new US casualties. CENTCOM struck Iran a fourth straight night, and the IRGC's answering salvo on Sheikh Isa (Bahrain) and Ali al-Salem (Kuwait) was reported as damaging drones and weapons-storage depots; Washington has confirmed no personnel losses, with damage assessment continuing per §3.5.3.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the July exchange; Lebanon seam quiet; Netanyahu, Katz and IDF chief Zamir stressed readiness to strike Iran a third time)',
      status:
        "No new Israeli casualties. Israel remains outside the direct US–Iran exchange and the Lebanon seam stayed quiet, but Netanyahu, Katz and IDF chief Zamir told graduating pilots the force was ready to 'regain air superiority' and mount independent strikes on Iran 'with even greater force'; Katz's 'marked for death' threat carries.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,482 killed / 26,628+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+ toll still under review (fourth consecutive night of CENTCOM strikes on coastal-defense, missile and maritime sites; Tehran assessing losses; Pickaxe Mountain still weighed as a target)',
      status:
        "Fourth-night strikes, toll still under review. CENTCOM hit coastal-defense, missile and maritime targets for a fourth straight night; Tehran continues to assess losses and its figures diverge (Health Ministry vs IRNA), so per §3.5.3 no new confirmed count is booked. ~440.9 kg of 60% HEU at Isfahan stays unverified since June 2025, with Pickaxe Mountain still weighed.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: '+0 confirmed deaths (Iran\'s Bahrain–Kuwait base salvo reported as materiel damage; India summoned Iran\'s envoy over the UAE tanker strikes; no new confirmed maritime death this window)',
      status:
        "No new confirmed deaths in the Gulf theater this window. Iran's fresh strikes on Sheikh Isa (Bahrain) and Ali al-Salem (Kuwait) were reported as damaging drones and depots; India summoned Iran's deputy chief of mission over the earlier UAE tanker strikes. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); Iraq 119+ / 370; Gulf 33+ / 73+ carry.",
    },
  },
  exec:
    "Day 138 is the day the blockade stopped being a threat and became a fact — and the toll that shadowed it collapsed. From 20:00 GMT the US Navy began enforcing its blockade of Iran's ports and coastline, and within hours it was biting: warships turned back roughly 21 vessels in the Arabian Sea, intercepted and reversed a US-sanctioned Chinese tanker, and ordered two tankers out of Chabahar to turn around — though at least one other Chinese hull still slipped through, marking the cordon real but porous (Newsweek, Army Recognition, The Hill). The carve-outs matter: transit to non-Iranian destinations is not impeded and humanitarian cargo is allowed subject to inspection, making the blockade narrower than Monday's 'seal everything' framing (NPR, CNN). In a 24-hour reversal, Trump abandoned the 20% Hormuz toll he had declared a day earlier — Gulf states will 'invest in the US' instead — after Rubio and the UN's IMO called transit fees illegal (CNBC, CNN, Al Jazeera). But the kinetic line still rose: CENTCOM struck Iran a fourth straight night, and the IRGC answered with a fresh salvo on Sheikh Isa air base in Bahrain and Ali al-Salem in Kuwait, damaging drones and depots (Newsweek, Press TV). Brent settled $84.73, up 1.72%, after touching $87 intraday — its first $87 print since June, the week up over 10% — with the toll climbdown capping the spike (CNBC, OilPrice). India summoned Iran's envoy over the tanker attacks; Araghchi said Tehran is working Oman, Qatar and Pakistan to de-escalate. Thirty-day ceasefire probability holds at 12 — the first genuinely two-sided day in a week.",
  implications: [
    {
      title:
        "The blockade became a fact — and it is now turning back Chinese ships",
      body:
        "Monday's blockade was a declaration; Wednesday's is an interdiction regime. Within hours of the 20:00 GMT start the US Navy turned back roughly 21 vessels in the Arabian Sea, intercepted and reversed a US-sanctioned Chinese tanker, and ordered two tankers out of Chabahar to turn around — even as at least one other Chinese hull still slipped through Hormuz (Newsweek, Army Recognition, The Hill). Analytical judgment under the multi-clock framework: the energy-infrastructure clock stays dominant, but the coalition-cohesion clock is the one that moved from risk to fact. Per §3.5.6 the standing China-resupply prior sharpens into something more immediate — the US is now physically reversing Chinese-linked shipping, not just warning it, which converts Beijing's 'dangerous and irresponsible' rhetoric into a live test of whether it escalates when its cargoes are stopped. So far the friction is non-kinetic, and the carve-outs — non-Iranian-destination transit and humanitarian cargo exempt — keep the cordon short of a total siege and preserve a calibrated-down path. But a blockade that works by turning ships is structurally harder to unwind than a strike round: it creates a standing chokepoint the US must man continuously, and every stopped hull is a potential incident.",
    },
    {
      title:
        "The toll died in 24 hours — a rare reversal that keeps the harder weapon",
      body:
        "The day's clearest de-escalation is the collapse of the 20% Hormuz toll Trump had declared a day earlier. CNN reported a 24-hour internal sprint to talk him out of it; the president now says Gulf states will 'invest in the US' as repayment instead, after Secretary Rubio and the UN's IMO said no state may charge vessels to transit an international strait (CNN, CNBC, Al Jazeera). Analytical judgment: per §3.5.6 the toll-institutionalization prior carried since Day 45 recedes — the 'two guardians' absurdity of Monday collapses back to one. Two readings compete. The favorable one: this is the first time in the renewed exchange the US has withdrawn a maximalist demand under legal and market pressure, evidence the price signal and allied pushback still bind Trump's choices. The skeptical one, per §3.5.3: the underlying protection-billing logic survives in the 'invest in the US' reframing, and dropping the legally void toll rationalizes the escalation — it removes the contradiction between a toll that presumes transit and a blockade that forbids it, leaving the harder instrument fully in place. A cleaner blockade is not a softer one.",
    },
    {
      title:
        "Taiwan: the price ceiling held near $85 — capped by the toll climbdown, not by any easing of risk",
      body:
        "For Taiwan, Day 138 is a reprieve on price without relief on exposure. Brent settled $84.73 after touching $87 intraday — its first $87 print since June — but the Hormuz toll climbdown and the blockade's carve-outs pulled it back from the spike, leaving the benchmark near $85 rather than the $95 a full closure would imply (CNBC, OilPrice). Analytical judgment: the good news is real and entirely borrowed — the ceiling holds only because the cordon is porous and the toll is buried, both of which can reverse in a night. The §3.5.6 exposure is unchanged and live: roughly 60% of the island's oil and about a third of its gas transit Hormuz, against a legally mandated LNG reserve of only ~11 days versus ~120 days of oil, and Qatar still supplies about a third of Taiwan's LNG (CSIS, Atlantic Council). The blockade adds a supply-side squeeze atop the transit risk, and the marine-insurance problem bites regardless of price — coverage, not cargo, is the binding constraint. Taipei's durable hedges are unchanged and slow: US crude now ~60% of imports, a push to 25% US LNG by 2029, and the Maanshan and Kuosheng restarts (2028–2029), none of which help inside 11 days. TSMC's 2026 CapEx near 8% is the balance-sheet cushion; the tank farm is the physical one, still draining, just capped for now near an $85 tape.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. Iran's Bahrain–Kuwait base salvo reported as materiel damage — drones and depots; Washington confirms no personnel losses; assessment ongoing.",
    israel:
      "No new Israeli casualties. Israel stayed outside the direct exchange; Netanyahu, Katz and IDF chief Zamir stressed readiness to strike Iran 'a third time' with 'even greater force.'",
    iran:
      "Fourth-night strikes, toll under review; Iranian figures diverge (Health Ministry vs IRNA). Pickaxe Mountain still weighed; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "No new confirmed Gulf deaths this window; India summoned Iran's envoy over the UAE tanker strikes. Lebanon toll source-split; Iraq 119+ / Gulf 33+ KIA carry.",
  },
};

export default data;
