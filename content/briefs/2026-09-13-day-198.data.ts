import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 198 as the war's maritime dimension took a new life: an Iranian commercial vessel was attacked near Qeshm Island in the Strait of Hormuz, killing one crew member and wounding four, with Tehran blaming the 'US terrorist enemy' (Al Jazeera) — the first confirmed lethal strike on a civilian vessel inside Hormuz in the war's current phase. On the second chokepoint the Houthis consolidated their hold on Yemen's Red Sea coast and fired a projectile into Saudi Arabia's Jazan region, wounding two and damaging a mosque (Al Jazeera, Arab News), while Bahrain declared it will boycott Monday's Salalah Oman talks on Hormuz until diplomatic relations with Iran are restored, calling the meeting 'appeasement' (Al Jazeera, Dawn). Iran's factional crisis deepened with hardliners raising political incompetence proceedings against President Pezeshkian (Iran International, NCRI). The Petroline remains offline. Oil markets were closed for the weekend with Brent last at ~$104.26–104.47. The balance stays escalating: the Qeshm strike, the coast consolidation and Bahrain's boycott all outweigh the still-scheduled Salalah talks.",
      risk7d:
        "Seven-day risk holds extreme. The Salalah Oman talks open Monday with Bahrain boycotting and no US counterparty — a diminished table against an expanding war. The Qeshm commercial-vessel strike establishes a precedent for lethal hits on civilian shipping inside Hormuz, the Houthis hold the Bab al-Mandeb coast, the Petroline is offline, and Iran's factional crisis raises the risk of a hardline consolidation that forecloses the negotiation track. A formal Bab al-Mandeb closure, a laden-tanker loss, a confirmed US Navy casualty, a second export-node strike, or a named major-Chinese-bank designation each sends oil sharply higher. The talks and Riyadh's continued restraint are the only near-term brakes.",
      spillover:
        "Spillover holds critical and structural. The Qeshm commercial-vessel attack extends lethal targeting to civilian shipping inside Hormuz; the Houthis consolidate the Bab al-Mandeb coast; drones from Iraqi soil shut the Petroline; Bahrain's boycott fractures the Gulf diplomatic response before it convenes; and Iran's factional crisis makes the regime's own decision-making less predictable. The map burns at both maritime gates with civilian shipping now in the kill zone, and the political clocks — US midterms, Iran's internal power struggle, the Sep 24 US-China summit — each add pressure without producing an off-ramp.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera',
      event:
        "An Iranian commercial vessel was attacked near Qeshm Island in the Strait of Hormuz, killing one crew member and wounding four others. An Iranian official blamed the 'US terrorist enemy' for the strike; US attribution is uncorroborated by CENTCOM or any maritime authority as of filing.",
      summary:
        "Per §3.5.3 hold the attribution as Iranian-sourced and uncorroborated; the strike is significant not for the attribution but for the precedent — the first confirmed lethal hit on a civilian vessel inside Hormuz in the war's current phase, crossing a threshold the series has flagged since the tanker war escalated.",
      impact:
        "The energy-infrastructure clock and the humanitarian dimension converge: civilian commercial shipping inside Hormuz is now in the kill zone, and the precedent raises war-risk premiums and insurance costs for every vessel transiting the strait.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Jazeera / Arab News / Gulf News',
      event:
        "A Houthi projectile struck Saudi Arabia's Jazan region, wounding two people and damaging a mosque, several buildings and vehicles in al-Tuwal governorate (Saudi Civil Defence). The strike came as Houthi forces consolidated their hold on Yemen's Red Sea coastline and the Bab al-Mandeb approaches seized on Day 197.",
      summary:
        "The Jazan strike is the latest in a sustained Houthi cross-border campaign — following the 73-wounded barrage on Sep 8 and the coast seizure on Sep 11-12 — and confirms the Houthis are operating offensively on both sides of the border while holding the chokepoint approaches.",
      impact:
        "The Saudi-Yemen front deepens with each cross-border strike; the MBS-Trump pressure to act against the Houthis grows, and any Saudi counter-escalation risks widening the war to a third active chokepoint theater.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Dawn / Arab News / Eurasia Review',
      event:
        "Bahrain declared it will not participate in Monday's Salalah Oman meeting on Hormuz, saying it will not attend any collective meeting with Iran until diplomatic relations are restored and calling the approach 'appeasement.' Bahrain said Hormuz should be open without 'discrimination, fees or permits.'",
      summary:
        "Bahrain's boycott fractures the Gulf diplomatic response before the table convenes: the GCC is no longer presenting a unified front at Salalah, and the state most recently struck by Iranian missiles — and the host of the US Fifth Fleet — is publicly rejecting the premise of the talks.",
      impact:
        "The negotiation-capacity clock loses a participant and gains a spoiler; the Salalah talks open Monday with a diminished table, Bahrain aligning with the US no-deal line, and no mechanism to bridge the gap between Iran's sovereignty claims and the coalition's free-navigation demand.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Iran International / NCRI / Townhall',
      event:
        "Iran's factional crisis deepened as hardliner MP Hamid Rasaei raised the question of President Pezeshkian's political incompetence ('adam-e kefayat') at a meeting with parliament speaker Ghalibaf, while Supreme Leader Mojtaba Khamenei — not seen publicly for roughly six months — ordered factions to stop fighting. The NCRI reported the internal conflict has entered an 'unusually bitter phase' with rival factions openly attacking one another.",
      summary:
        "Per §3.5.3 NCRI is an opposition source with a maximalist framing; Iran International's reporting on the Rasaei-Ghalibaf meeting is firmer. The signal is that Iran's war-governing structure is under internal strain at the moment the Salalah talks are about to open — which either produces a hardline consolidation that forecloses diplomacy, or forces Mojtaba to back the talks as an escape valve.",
      impact:
        "The political-will clock and the negotiation-capacity clock interact: an internally fractured Tehran sends a less empowered delegation to Salalah, and any deal it strikes is less likely to hold domestically — raising the risk that the talks produce a communiqué without compliance.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 198 — an eleventh day with no verified new US combat casualty. The Qeshm Island commercial-vessel strike (1 killed, 4 wounded) was on an Iranian vessel with Iran blaming the 'US terrorist enemy'; per §3.5.3 the attribution is Iranian-sourced and uncorroborated by CENTCOM or any maritime authority — logged and uncounted against US figures. The escort corridor (~8-9 mb/d) runs amid live fire with the USS George Washington on station; the blockade holds at eighty-six vessels rerouted, three disabled, two boarded.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28; per §3.5.3 keep the combat figure and flag DCAS. Day 198 added no US count — an eleventh quiet day — but the Qeshm commercial-vessel strike and its Iranian attribution raise the doctrinal stakes: if a US strike on an Iranian civilian vessel is confirmed, it crosses a threshold the war has not yet crossed, and Iran's narrative apparatus will weaponize the casualty. The $67B supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of a November midterm the president says the war will outlast.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel stayed offstage on Day 198's developments — the Qeshm strike, the Jazan projectile and the Bahrain boycott all ran on the Gulf and Yemen theaters. The Gaza disarmament roadmap holds deadlocked; the Lebanon reprisal cycle carries.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Israeli toll on Day 198. Israel continues to operate on its own clock — offstage on the day's Gulf and Yemen developments, active on its own fronts. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "The Qeshm Island commercial-vessel strike killed one and wounded four — Iran's first confirmed lethal civilian-shipping casualty inside Hormuz. Per §3.5.3 the victim is an Iranian commercial crew member, not a military combatant; whether to fold into the war toll depends on whether the strike is independently attributed. The official war toll from MOH carries pending an update. The rights thread carries: HRW and Amnesty document at least 59 executed since the war's escalation and ≥78 under sentence of death (incl ≥5 who were children). The IAEA UNSC referral (23-3) carries.",
      status:
        "The official Iranian war toll carries pending an update; Day 198's only new count is the Qeshm commercial-vessel casualty (1 killed / 4 wounded), held separately pending attribution. The factional crisis deepened — Rasaei raised Pezeshkian's political incompetence at a parliamentary meeting, Mojtaba ordered factions to stop fighting, and the war-governing structure shows internal strain ahead of the Salalah talks. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,300+ / 12,200+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 158+ WIA (Kuwait 10 / 115; Saudi ~86+ injured) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing · Qeshm commercial vessel 1 killed / 4 wounded (pending attribution)",
      delta:
        "The Jazan projectile wounded two and damaged a mosque in al-Tuwal governorate — added to the Saudi tally (~88+ injured). The Qeshm commercial-vessel strike (1 killed / 4 wounded) is the day's only new lethal event, held separately pending attribution. The Houthis consolidated their hold on Yemen's Red Sea coast; Bab al-Mandeb traffic holds near ~12 vessels/day. The Lebanon, Gulf, Iraq and maritime tolls carry.",
      status:
        "The 'other' ledger's live fronts carried without a major new toll on Day 198 but with two threshold-crossing signals. The Qeshm commercial-vessel strike is the first confirmed lethal hit on a civilian vessel inside Hormuz — a precedent that raises war-risk premiums for every transit. The Jazan projectile continues the Houthi cross-border campaign against Saudi Arabia, now running alongside their consolidation of the Bab al-Mandeb coast. Bahrain's boycott of the Salalah talks removes a GCC state from the table. Lebanon (~4,300+/12,200+), Gulf (33+/~88+ Saudi injured; Kuwait 10/115), Iraq (148+/402+) and maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) carry.",
    },
  },
  exec:
    "Day 198 crossed a threshold in the Strait of Hormuz and fractured the Gulf's diplomatic response to the war. An Iranian commercial vessel was attacked near Qeshm Island, killing one crew member and wounding four — the first confirmed lethal strike on a civilian vessel inside Hormuz in the war's current phase — with Tehran blaming the 'US terrorist enemy,' an attribution uncorroborated by CENTCOM or any maritime authority as of filing (Al Jazeera). A Houthi projectile struck Saudi Arabia's Jazan region, wounding two and damaging a mosque in al-Tuwal as the rebels consolidated their hold on Yemen's Red Sea coastline and the Bab al-Mandeb approaches (Al Jazeera, Arab News). Bahrain declared it will boycott Monday's Salalah Oman talks on Hormuz, saying it will not attend any meeting with Iran until diplomatic relations are restored and calling the format 'appeasement' — fracturing the GCC table before it convenes (Al Jazeera, Dawn). Inside Iran, the factional crisis deepened as hardliner MP Rasaei raised the question of President Pezeshkian's political incompetence at a meeting with parliament speaker Ghalibaf, while Supreme Leader Mojtaba Khamenei ordered factions to stop fighting (Iran International, NCRI). The Petroline remains offline; oil markets were closed for the weekend with Brent last at ~$104.26–104.47. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'Civilian shipping enters the kill zone — the Qeshm precedent',
      body:
        "Day 198 crossed a line the series has flagged since the tanker war escalated: for the first time, a civilian commercial vessel was lethally struck inside the Strait of Hormuz, killing one crew member and wounding four near Qeshm Island (Al Jazeera). Per §3.5.3 hold the attribution as Iranian-sourced and uncorroborated — Tehran blamed the 'US terrorist enemy,' but CENTCOM has not confirmed the strike and no maritime authority has attributed it as of filing. The significance is the precedent, not the attribution: the war-risk calculus for every vessel transiting Hormuz has shifted. War-risk insurance premiums, already elevated, will price the demonstrated lethality rather than the probability, and the Salalah talks opening Monday will do so in the shadow of a dead civilian mariner. Under the multi-clock framework, the energy-infrastructure and humanitarian clocks converge: civilian seafarers are now confirmed casualties of a waterway that both sides claim to be managing, and the escort corridor (~8-9 mb/d, ~660M+ barrels since May) runs alongside — not around — the risk. Analytical judgment: the Qeshm strike is a threshold event in the same way the Kuhestak wedding strike was — it shifts the category of who is being killed, and it will be weaponized by both sides regardless of who fired. The insurance market and the flag-state response will tell us more than the attribution war.",
    },
    {
      title: "Bahrain’s boycott fractures the table — the Salalah talks open diminished",
      body:
        "Bahrain's declaration that it will not attend Monday's Salalah meeting — calling the format 'appeasement' and conditioning attendance on the restoration of diplomatic relations with Iran — is more than a diplomatic snub; it fractures the Gulf response before the table convenes (Al Jazeera, Dawn, Arab News). Bahrain hosts the US Fifth Fleet, was struck by Iranian missiles earlier in the war, and has not restored relations with Tehran since cutting them in 2016. Its boycott aligns it with Washington's no-deal line and removes from the table the GCC state with the strongest operational ties to the US naval presence. The Salalah talks now open with a diminished table — Iran, Oman, likely Qatar and Kuwait, possibly Saudi Arabia and Iraq — and no US counterparty, against Trump's standing statement that he is 'not looking for a deal' and expects no oil relief until after the midterms. Under the negotiation-capacity clock, Bahrain's move is a spoiler that signals to the remaining GCC states that any arrangement struck at Salalah will not bind the coalition's naval anchor. Analytical judgment: the talks can still produce a shipping-management communiqué — temporary routes, mine-clearance protocols — but they cannot produce a war off-ramp without the US, and they cannot bind Hormuz operations without Bahrain. The thirty-day ceasefire probability holds at 2.",
    },
    {
      title: "Iran's factional crisis meets the Salalah table — the regime negotiates against itself",
      body:
        "Iran sends a delegation to Monday's Salalah talks at the moment its war-governing structure is under open internal strain. Hardliner MP Rasaei raised the question of Pezeshkian's political incompetence ('adam-e kefayat') at a meeting with parliament speaker Ghalibaf (Iran International); Supreme Leader Mojtaba Khamenei — not seen publicly for roughly six months — ordered factions to stop fighting (NCRI); and the internal conflict has 'entered an unusually bitter phase with rival factions openly attacking one another' (NCRI). Per §3.5.3 NCRI is an opposition source with a maximalist framing, but Iran International's coverage of the Rasaei move and the broader factional dynamics is firmer. The signal for the Salalah talks is that Tehran's delegation arrives with contested domestic authority: any arrangement it strikes on Hormuz shipping will be attacked by the hardline faction as appeasement, and Pezeshkian's own position is being questioned. Under the political-will clock, an internally fractured Tehran is less likely to make — and less able to enforce — a meaningful concession on Hormuz management. Analytical judgment: the factional crisis has a second-order Taiwan dimension — Taiwan's LNG buffer depends on Hormuz reopening, and a regime negotiating against itself is a regime less likely to deliver it. The Salalah talks are real, the factional crisis is real, and the two run against each other.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DoD DCAS holds 18 killed / 687 wounded all-cause; per §3.5.3 keep the combat series and flag DCAS. An eleventh quiet day for US casualties. The Qeshm commercial-vessel strike (1 killed / 4 wounded on an Iranian vessel) and its Iranian attribution are logged; per §3.5.3 the 'US terrorist enemy' claim is uncorroborated by CENTCOM or any maritime authority — if confirmed, it crosses a civilian-targeting threshold. The blockade holds at ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire on both maritime gates with the USS George Washington on station.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on Day 198's Gulf and Yemen developments — the Qeshm strike, the Jazan projectile and the Bahrain boycott all ran on other theaters. The Gaza disarmament roadmap holds deadlocked; the Lebanon reprisal cycle carries. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update; the Qeshm commercial-vessel strike (1 killed / 4 wounded) is the day's new count, held separately pending attribution. The factional crisis deepened — Rasaei's competence challenge, Mojtaba's unity order, and the regime's internal strain ahead of Salalah — adding political instability to the military and economic pressures. The rights thread carries per §3.1: HRW and Amnesty ≥59 executed since the war's escalation, ≥78 at risk (incl ≥5 children). IAEA UNSC referral (23-3) carries. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "The Jazan projectile wounded two and damaged a mosque in al-Tuwal — added to the Saudi tally (~88+ injured). The Houthis consolidated their coast hold; Bab al-Mandeb traffic ~12 vessels/day; no formal closure declared. Bahrain's boycott removes it from the Salalah table. The Qeshm commercial-vessel casualty (1 killed / 4 wounded) is held separately pending attribution. Lebanon (~4,300+/12,200+), Gulf (33+/~88+ Saudi injured; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers), Mokha/coast (11+/32+) carry.",
  },
};

export default data;
