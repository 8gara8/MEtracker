import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction turns escalating — the clearest single-direction day of the renewed war. The convened Muscat round of Day 135 was overrun inside twenty-four hours: the IRGC torched the Cyprus-flagged GFS Galaxy, declared the Strait of Hormuz closed, and disabled a second vessel; CENTCOM ran its third strike round of the week (~140 targets, >300 across three nights) on Qeshm, Bandar Abbas and Bushehr province; and Iran struck US bases in five Gulf states (Al Jazeera, CENTCOM, NPR). There is no de-escalatory counterweight today — Ghalibaf declared 'the era of one-sided deals is over' and Trump reaffirmed the ceasefire is dead. The negotiation track the last brief tracked did not stall; it was overrun by fire.",
      risk7d:
        "Seven-day risk moves to extreme, the ceiling short of open declared regional war. Al Jazeera calls this the largest tit-for-tat yet during the ceasefire, and every rung of the ladder now carries fire: a strait declared closed, a US third strike round, a five-state Iranian salvo that widened the base-target set from four to five, and Trump's one-year 'decimate' threat still live from Day 135 (Al Jazeera, Forbes). The frozen-funds gap and toll dispute are moot next to the kinetics; the July 19 blockade-lift deadline is now a formality overtaken by events. The one brake is that damage remains claim-versus-claim — Iran asserts destroyed US command centers, Washington confirms no losses — leaving room for both sides to de-escalate on ambiguity if either chooses.",
      spillover:
        "Spillover moves from conditional to critical: the war is no longer conditional on the Gulf, it is in the Gulf. Iran struck Omani (Duqm), Qatari (Al Udeid), Kuwaiti, Bahraini and Jordanian (Prince Hassan) territory with ballistic missiles and drones; air-raid sirens sounded over Doha and Kuwait City, Qatar raised its threat level to high, and three people including a child were wounded by intercept shrapnel in Qatar (Al Jazeera, Arab News). Saudi Arabia and the Arab bloc condemned Iran and held it 'fully legally responsible.' The Lebanon seam stayed quiet this window, but the primed four-state salvo of Day 133 has now become a realized five-state one — the channel is open, not dormant.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Al Jazeera / NPR',
      event:
        "Late Saturday the IRGC set ablaze the Cyprus-flagged container ship M/V GFS Galaxy on what it called an unapproved route, declared the Strait of Hormuz closed 'until the end of US interference,' and disabled a second vessel Sunday — the first hard closure of the renewed war, one day after the Muscat round convened",
      summary:
        "Per §3.5.11 this is the genuine inflection the star is reserved for: the 'contested-not-closed' frame the briefs have run since the exchange began gave way to a declared closure, converting a diplomatic week into a kinetic one overnight (Al Jazeera, NPR).",
      impact:
        "A declared Hormuz closure is the energy-MAD trigger the standing analysis has flagged for months; whether it is enforced, bluffed, or walked back is now the war's dominant variable.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM / IRIB / Al Jazeera',
      event:
        "CENTCOM launched its third strike round of the week — about 140 Iranian targets overnight into Sunday, including missile and drone sites, naval capabilities, ammunition storage, communication networks and coastal surveillance, more than 300 across three nights — hitting Qeshm Island, Bandar Abbas, Hajiabad and five Bushehr-province cities",
      summary:
        "Per §3.5.5 the scale is the message: >300 targets in three nights is a sustained degradation campaign against Iran's strait-denial capacity, not a single punitive salvo; Tehran said losses and damage are 'under review' (CENTCOM, IRIB).",
      impact:
        "The US has committed to attriting the very capabilities Iran needs to enforce a closure, setting a race between US degradation and Iranian reconstitution that the interceptor and energy clocks both track.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Arab News / The Week',
      event:
        "Iran retaliated against US military facilities in five Gulf states — a 'heavy and surprise' strike on refuelling platforms at Oman's Duqm port, ballistic missiles at Qatar's Al Udeid, explosive drones at a Patriot battery, ammunition depot and radar in Kuwait, a communications and radar site in Bahrain, and Prince Hassan air base in Jordan",
      summary:
        "Per §3.5.3 Iran's claims of destroyed command centers and MQ-9 hangars are Tehran's and unconfirmed; the verified harm is three wounded, including a child, from intercept shrapnel in Qatar, with Kuwait and Bahrain reporting interceptions (Al Jazeera, Arab News, The Week).",
      impact:
        "The salvo widened the base-target set from the four-state salvo of Day 133 to five, striking host-nation soil and drawing Arab-bloc condemnation — firming the anti-Iran alignment while straining the basing tolerance the US campaign relies on.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / CNN',
      event:
        "The diplomatic track the Day 135 round reopened was overrun within a day: Ghalibaf posted Article 5 of the MoU with 'the era of one-sided deals is over … keep your word or pay the price,' Trump reaffirmed the ceasefire is dead, and Oman condemned a strike hours after hosting Araghchi for Hormuz talks",
      summary:
        "Per §3.5.3 the collapse is the terminal form of the Day-46 optimism pattern — the gap between Vance's 'inspections resume' and Iran's denial detonated in 24 hours rather than papering over for weeks (Al Jazeera, CNN).",
      impact:
        "Mediators are still floating Oman's two-corridor proposal, but negotiating a strait-management mechanism while Omani soil is under fire is the measure of how far the negotiation-capacity clock has fallen.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'NBC News / CNBC / Trading Economics',
      event:
        "Brent crude gapped toward ~$95 a barrel on the Monday open — up roughly a quarter from the ~$75.5 lull, with intraday gains reported at 10–13% and analysts warning of $100+ if the closure holds — as the strait's status splintered into three declarations: IRGC 'closed,' Iran's foreign ministry 'operating normally,' Washington 'open'",
      summary:
        "Per §3.5.5 the tape finally priced the tail it had been discounting: a merely contested strait held Brent near $75.5, but a declared closure moved it ~$20 in a session (NBC News, CNBC, Trading Economics).",
      impact:
        "For a price-taking LNG importer the shock is now realized, not latent; the energy-infrastructure clock is the dominant clock and the repricing the briefs long flagged has begun.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 confirmed (Iran claimed strikes on US bases in five Gulf states; Washington confirmed no personnel losses, damage assessment ongoing)',
      status:
        "No confirmed new US casualties. Iran claimed 'destroyed' command-and-control centers and MQ-9 hangars at Duqm, Al Udeid, Prince Hassan and US sites in Kuwait and Bahrain, but per §3.5.3 those are Tehran's claims; Gulf hosts reported interceptions and the US has confirmed no losses after its third strike round.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the July 12 US–Iran exchange; Lebanon seam quiet this window)',
      status:
        "No new Israeli casualties. Israel stayed out of the direct exchange; the Lebanon seam produced no fresh Hezbollah retaliation, and Katz's 'marked for death' threat carries alongside Israeli-shared intelligence of an assassination plot on Trump.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,482 killed / 26,628+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+ toll under review (CENTCOM ~140-target third round hit Qeshm, Bandar Abbas, Hajiabad and five Bushehr cities; Tehran assessing losses; several coastal cities reported no civilian casualties)',
      status:
        "New strikes, toll under review. Tehran said the loss of life and damage from the third round are being assessed; Jask, Qeshm, Bandar Abbas and Sirik reported no civilian casualties. Earlier southern strikes had killed eight Iranian air and naval personnel per state TV. ~440.9 kg of 60% HEU at Isfahan unverified since June 2025; the inspection contradiction is overrun by kinetics.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: '+3 WIA (Qatar: three wounded, including a child, from intercept shrapnel at Al Udeid; Kuwait and Bahrain intercepted without casualties)',
      status:
        "Qatar reported three wounded, including a child, from falling intercept shrapnel at Al Udeid; Kuwait and Bahrain reported interceptions without casualties, and Oman condemned the Duqm strike. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded carry.",
    },
  },
  exec:
    "Day 136 is the rupture the convened round was one day from. The Muscat table that met Saturday collapsed within twenty-four hours into the largest tit-for-tat exchange of the renewed war. Late Saturday the IRGC torched a Cyprus-flagged container ship, the M/V GFS Galaxy, on what it called an unapproved route and declared the Strait of Hormuz closed 'until the end of US interference'; a second vessel was disabled Sunday (Al Jazeera, NPR). CENTCOM answered with its third strike round of the week — about 140 targets overnight (missile and drone sites, naval capabilities, ammunition, coastal surveillance), more than 300 across three nights — hitting Qeshm, Bandar Abbas, Hajiabad and five Bushehr-province cities (CENTCOM, IRIB). Iran then struck US bases across five Gulf states — Oman's Duqm, Qatar's Al Udeid, Kuwait, Bahrain and Jordan's Prince Hassan — claiming destroyed command centers and MQ-9 hangars; per §3.5.3 those are Tehran's claims, and the confirmed harm is three wounded, including a child, from intercept shrapnel in Qatar (Al Jazeera, Arab News). Ghalibaf posted Article 5 of the MoU with the line 'the era of one-sided deals is over,' and Trump reaffirmed the ceasefire is dead. The closure is itself contested three ways: the IRGC says shut, Iran's foreign ministry tells Tasnim shipping is 'operating normally,' Washington says the strait is open (Al Jazeera). Brent gapped toward ~$95 a barrel — up roughly a quarter from the lull — with $100 warnings if the closure holds (NBC News, CNBC). Thirty-day ceasefire probability falls to 15. Direction is escalating: the negotiation round the last brief tracked has been overrun by the kinetic one it was meant to prevent.",
  implications: [
    {
      title:
        "The round collapsed into the largest exchange of the war — the kinetic clock overran the negotiation clock in a day",
      body:
        "Day 135's binding question was whether the convened round would touch the funds-and-toll gaps or re-freeze them. Day 136 answered worse than either: the round was overrun. Within a day of Vance's 'very good day,' the IRGC torched the GFS Galaxy and declared Hormuz closed, CENTCOM ran its third strike round of the week, and Iran fired on five Gulf states (Al Jazeera, CENTCOM, NPR). Analytical judgment under the multi-clock framework: the negotiation-capacity clock, which had ticked up for two days, collapsed — not to its oil-license-revocation floor but through it, because the parties are now exchanging fire faster than mediators can convene. Per §3.5.3 this is the terminal form of the Day-46 '80% complete' pattern the briefs have flagged since spring: the last time an optimistic principal's claim papered over a contradiction, the deal broke on the USS Spruance seizure weeks later; this time the gap between Vance's 'inspections resume' and Iran's denial detonated in twenty-four hours. Ghalibaf made the framing explicit, posting Article 5 of the MoU with 'the era of one-sided deals is over … keep your word or pay the price,' and Trump reaffirmed the ceasefire is dead (Al Jazeera). The MoU is now, for the first time, being enforced by both sides in the currency of fire rather than words.",
    },
    {
      title:
        "Hormuz declared closed — but the closure is contested three ways, and the ambiguity compounds the shock",
      body:
        "The single most consequential act of Day 136 is the declared closure of the Strait of Hormuz — the first hard closure of the renewed war, replacing the 'contested-not-closed' frame the briefs have run since the exchange began. But the closure is contested three ways, and that ambiguity is itself a risk vector. The IRGC says the strait is shut 'until the end of US interference' and claims two vessels struck; Iran's own foreign ministry told Tasnim shipping is 'operating normally'; and CENTCOM insists the strait is open and 'Iran does not control' it (Al Jazeera, RFE/RL). Analytical judgment: a closure Tehran cannot decide whether to own is more dangerous than a clean one, because every transiting hull now navigates three incompatible declarations and the odds of a miscalculated warning shot rise with each. Per §3.5.5 the physical signature is unambiguous even if the legal one is not — ~20% of world oil and gas routes the strait, and traffic has collapsed. On the coalition-cohesion clock, Iran's move to strike five GCC states on their own soil is double-edged: Saudi Arabia and the Arab bloc condemned the attacks and held Iran 'fully legally responsible,' firming the anti-Iran alignment, while the strikes on host-nation territory strain the very basing tolerance the US campaign depends on (Arab News).",
    },
    {
      title:
        "Taiwan: the repricing trigger the section always named has fired — Brent ~$95 and a strait declared shut",
      body:
        "For Taiwan, Day 136 is the day the standing section's hypothetical became the headline: the repricing trigger the briefs have named for months — a declared Hormuz closure — fired. Brent gapped toward ~$95 a barrel on the Monday open, up roughly a quarter from the ~$75.5 lull, with intraday gains reported at 10–13% and analysts flagging $100+ if the closure holds (NBC News, CNBC). Analytical judgment: this is no longer premium, it is shock. The §3.5.6 exposure is now live rather than latent — roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about an 11-day gas buffer, and a sustained closure eats that buffer directly. The one mitigant that matters today is Oman's two-corridor proposal, under which a Southern Corridor would stay open to free navigation while the Northern route through Iranian waters requires approval; but the proposal is unfinalized, and it is being negotiated while Omani soil is under Iranian fire (Al Jazeera). The durable hedges are unchanged and remain the only answers indifferent to whether the strait ends contested or closed — US and Australian cargoes (25%-US-by-2029) and the Maanshan and Kuosheng restarts (2028–2029) — but none of them help inside an 11-day window. TSMC's 2026 CapEx near 8% is the balance-sheet cushion; the physical cushion is the tank farm, and today it started draining.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. Iran claimed destroyed command centers and MQ-9 hangars at US bases in five Gulf states, but per §3.5.3 those are Tehran's claims; the US has confirmed no losses after its third strike round.",
    israel:
      "No new Israeli casualties. Israel stayed out of the direct July 12 exchange; the Lebanon seam drew no fresh Hezbollah retaliation; Katz's 'marked for death' threat carries alongside Israeli-shared assassination-plot intelligence.",
    iran:
      "New strikes, toll under review. The ~140-target third round hit Qeshm, Bandar Abbas, Hajiabad and five Bushehr cities; Tehran is assessing losses; coastal cities reported no civilian casualties. ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "Qatar: three wounded, including a child, from intercept shrapnel at Al Udeid; Kuwait and Bahrain intercepted without casualties; Oman condemned the Duqm strike. Lebanon toll source-split; Iraq 119+ / Gulf 33+ KIA carry.",
  },
};

export default data;
