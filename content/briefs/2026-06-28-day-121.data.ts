import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction reverts from de-escalating to escalating. Day 120's two de-escalation signals — a signed Israel-Lebanon framework and oil at pre-war lows — were both contradicted on the ground within twenty-four hours. After Iran's one-way drone struck the Panama-flagged tanker M/T Kiku early Saturday, US CENTCOM launched a second round of strikes on Iranian surveillance, communications, air-defense, drone-storage and minelaying sites, saying Iran 'had a chance to honor the ceasefire but elected not to'; the IRGC warned its response 'will be broader than this' (Times of Israel, Fox News, The Hill, Al Jazeera). Skeptical counter per §3.5.3: the framework is still signed and Brent still near $72, but a US-Iran strike exchange, a drone attack on a Gulf ally, and Hezbollah's outright rejection of the framework are facts on the ground that outweigh paper and price.",
      risk7d:
        "Seven-day risk moves from conditional to critical because the exchange is live and self-fueling. Iran's drone hit the M/T Kiku; the US struck Iranian military sites in response; the IRGC threatened a 'broader' reply and rebuffed the US Hormuz hotline with 'pick up the phone' (CENTCOM via Fox News, Al Jazeera). Iran's foreign ministry told Tasnim shipping was 'operating normally,' contradicting its own military — the kind of mixed signaling that precedes, not follows, de-escalation. The 60-day waiver architecture (General License X to August 21) and the Strait staying open per Trump cap the absolute downside, but a two-way kinetic exchange across the corridor is a materially higher seven-day risk than the route-control warning it replaced.",
      spillover:
        "Spillover moves from conditional to critical on the Bahrain strike. Iran's drone attack on Bahrain — home to the US Navy's Fifth Fleet — was the first kinetic Iranian strike on the Gulf monarchy this war, drawing a 'treacherous' condemnation from the GCC secretary-general and a 'foolish violation' charge from Trump (NPR, CBS News, Time, Fox News). On the Lebanon front, §3.5.6 governs: Hezbollah leader Naim Qassem rejected the just-signed framework as 'humiliating... a surrender of sovereignty,' Israeli strikes continued on Nabatieh, and Hezbollah said it repelled an Israeli incursion near Ali al-Taher. A war that on Day 120 looked to be narrowing is on Day 121 widening — into the Gulf and back across the Blue Line.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CENTCOM via Times of Israel / Fox News / The Hill / Al Jazeera',
      event:
        "US and Iran traded strikes across the Strait of Hormuz: after Iran's one-way drone struck the Panama-flagged tanker M/T Kiku early Saturday, US CENTCOM launched a second round of strikes on Iranian surveillance, communications, air-defense, drone-storage and minelaying sites, saying Iran 'had a chance to honor the ceasefire agreement but elected not to'; the IRGC warned that 'if the aggression is repeated, our response will be broader than this'",
      summary:
        "⭐ The reversal: a contested one-off vessel strike became a two-way US-Iran kinetic exchange across the corridor within a day, with the IRGC threatening to widen it (Times of Israel, Fox News, The Hill).",
      impact:
        "The energy-infrastructure and negotiation-capacity clocks worsen. The corridor flips from a price story back to a shooting war; the MoU holds on paper while its central chokepoint absorbs direct fire from both belligerents.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'NPR / CBS News / Time / Fox News',
      event:
        "Iran struck Bahrain — home to the US Navy's Fifth Fleet — with drones. Bahrain accused Tehran of a 'targeted' attack, the GCC secretary-general Jasem Albudaiwi called it 'treacherous,' and President Trump branded it a 'foolish violation' of the ceasefire, saying 'I don't like the fact that they took a shot yesterday, actually four of them'",
      summary:
        "The spillover marker: the first kinetic Iranian strike on the Gulf monarchy this war drags a state that had stayed off the target list for 120 days into the conflict (NPR, CBS News, Time).",
      impact:
        "The coalition-cohesion clock worsens and spillover turns critical. Striking the host of the Fifth Fleet is the most direct Iranian challenge yet to the Gulf-monarchy framing the MoU was meant to stabilize.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / PBS NewsHour / Lebanese Health Ministry',
      event:
        "Hezbollah leader Naim Qassem rejected the just-signed Israel-Lebanon framework as 'humiliating, shameful and a surrender of sovereignty,' refusing the disarmament-before-withdrawal sequencing at its core, as Israeli strikes continued on Nabatieh in southern Lebanon and Hezbollah said it repelled an Israeli incursion near Ali al-Taher; Lebanon's cumulative toll reached ~4,246 killed / 12,190 wounded",
      summary:
        "Skeptical counter per §3.5.6: the framework Day 120 read as the front's first political movement met its decisive veto from the one armed party whose consent it needed (Al Jazeera, PBS).",
      impact:
        "The humanitarian clock stays critical. A deal signed by a Lebanese state that cannot deliver Hezbollah's disarmament is a one-signatory document; the LAF pilot zones and Military Coordination Group remain paper.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / CNBC / Al Jazeera',
      event:
        "The one stabilizer held: Brent stayed near $72 — the lowest since February 27 — as the Strait stayed open per Trump, Gulf exports ran ~75% of pre-war levels, and Saudi Arabia loaded tankers at Ras Tanura; but the IRGC rebuffed the US Hormuz 'hotline' ('pick up the phone') and Iran's foreign ministry told Tasnim shipping was 'operating normally,' contradicting its own military",
      summary:
        "The lagging counter-signal: the market is still pricing the MoU's survival even as the US and Iran trade strikes — a price that may be the last thing to reprice, not the first (Trading Economics, Al Jazeera).",
      impact:
        "Caps the absolute downside but does not retire the corridor risk. Per §3.5.3 a price is a forecast, not a fact; the IRGC's route-control claim and 'broader response' threat are the markers that corridor risk now outpaces the tape.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'NPR / Al Jazeera',
      event:
        "The nuclear-inspection sequencing dispute held unchanged: Grossi reiterated inspections are 'going to happen' and the timing is 'important, but not essential,' while Iran's deputy foreign minister Kazem Gharibabadi insisted any visit comes only 'within the framework of a final agreement and as a result of practical action by the other side to end all sanctions'",
      summary:
        "The steady counterweight: the war's hardest file did not move with the kinetic escalation — the public order-of-operations stalemate persists (NPR, Al Jazeera).",
      impact:
        "The weaponization clock stays a public stalemate. Grossi's floor holds: inspectors have not reached the sites, and Iran's stock of 60% HEU — believed sufficient for up to ten weapons — stays unverified since June 2025.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; US conducted a second round of strikes on Iranian military sites; no US losses in the Iranian drone attack on Bahrain)',
      status:
        "No new US casualties. US CENTCOM conducted a second round of strikes on Iranian military infrastructure in response to the M/T Kiku drone attack, saying Iran 'had a chance to honor the ceasefire but elected not to'; no US personnel losses were reported, including in the Iranian drone attack on Bahrain, which hosts the US Navy's Fifth Fleet.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (Israeli strikes continued on Nabatieh; Hezbollah rejected the framework and said it repelled an incursion near Ali al-Taher)',
      status:
        "No verified new Israeli casualties. Israeli strikes continued on Nabatieh in southern Lebanon a day after the Washington framework was signed; Hezbollah said it repelled an Israeli incursion near Ali al-Taher and rejected the framework outright (Naim Qassem: 'humiliating... a surrender of sovereignty').",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (second US strike round hit military infrastructure; Iran published no figure; weaponization file unmoved)',
      status:
        "No verified new mass toll, though the second US strike round hit Iranian surveillance, communications, air-defense, drone-storage and minelaying sites; Iran has not published a casualty figure. Tehran kept inspections conditional on 'a final agreement'; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. Off the war ledger, HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,246 killed / 12,190 wounded (Lebanese Health Ministry via Al Jazeera — Israeli strikes continued on Nabatieh); Bahrain drone-struck (first kinetic Iranian strike this war; no confirmed casualties reported, GCC condemned as "treacherous"); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+~186 Lebanon vs. prior tracker baseline (cumulative Health Ministry figure now ~4,246 / 12,190); Bahrain drone attack (no confirmed casualties)',
      status:
        "Lebanon's cumulative toll reached ~4,246 killed / 12,190 wounded (Lebanese Health Ministry via Al Jazeera) as Israeli strikes continued on Nabatieh. Iran's drone attack on Bahrain — the first kinetic strike on the Gulf monarchy this war — produced no confirmed casualties in available reporting; the GCC condemned it as 'treacherous.' Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carries.",
    },
  },
  exec:
    "Day 121 reverts to escalating — the de-escalation read Day 120 built on a signed Lebanon framework and oil at pre-war lows inverted within twenty-four hours. After Iran's one-way drone struck the Panama-flagged tanker M/T Kiku early Saturday, US CENTCOM launched a second round of strikes on Iranian surveillance, communications, air-defense, drone-storage and minelaying sites, declaring Iran 'had a chance to honor the ceasefire but elected not to'; the IRGC warned its next response 'will be broader than this' (Times of Israel, Fox News, The Hill). Iran then struck Bahrain — home to the US Navy's Fifth Fleet — with drones; Bahrain called it a 'targeted' attack, the GCC secretary-general called it 'treacherous,' and Trump branded it a 'foolish violation' (NPR, CBS News, Time). On the front Day 120 read as progress, Hezbollah's Naim Qassem rejected the new framework as 'humiliating... a surrender of sovereignty' as Israeli strikes hit Nabatieh (Al Jazeera, PBS). The one counter-signal held: Brent stayed near $72, its lowest since February 27, the Strait stayed open per Trump, and Saudi Arabia loaded at Ras Tanura (Trading Economics, CNBC). Skeptical counter per §3.5.3: the market is pricing the MoU's survival even as the parties trade kinetic blows. 30-day ceasefire probability falls to 63 from 73; direction is escalating because a US–Iran strike exchange, a drone attack on a Gulf ally, and Hezbollah's rejection of the week's signature deliverable are facts on the ground that outweigh a price screen.",
  implications: [
    {
      title:
        "The corridor read inverted — a US–Iran strike exchange and an attack on Bahrain converted Hormuz from a price story back into a shooting war",
      body:
        "Day 120's cleanest de-escalation signal was the price screen; Day 121 the corridor is again the war's most dangerous vector. Iran's one-way drone struck the Panama-flagged tanker M/T Kiku early Saturday, and US CENTCOM answered with a second round of strikes on Iranian surveillance, communications, air-defense, drone-storage and minelaying sites, saying Tehran 'had a chance to honor the ceasefire but elected not to' (Times of Israel, The Hill, Fox News). Iran then struck Bahrain — home to the US Fifth Fleet — with drones, and the IRGC warned its next response 'will be broader than this,' rebuffing the US Hormuz hotline with 'pick up the phone' (Al Jazeera, CBS News). Quantify the reversal per §3.5.5: in roughly twenty-four hours the war moved from one contested vessel strike to a two-way US–Iran exchange plus a kinetic attack on a Gulf monarchy that had stayed off the target list for 120 days. Skeptical counter per §3.5.3: the IRGC's 'broader' threat is rhetoric until executed, and the Strait stayed open per Trump. Analytical judgment: the energy-infrastructure clock worsens not because the price moved — Brent held near $72 — but because the actors did; the market is lagging a corridor now absorbing direct fire from both the US and Iran.",
    },
    {
      title:
        "The Lebanon framework's foundation cracked — Hezbollah's rejection plus continued Israeli strikes turn a signed deal into a one-signatory document",
      body:
        "The framework Day 120 read as the front's first political movement met its decisive veto. Hezbollah leader Naim Qassem rejected the Washington agreement as 'humiliating, shameful and a surrender of sovereignty,' refusing the disarmament-before-withdrawal sequencing at its core, while Israeli strikes continued on Nabatieh and Hezbollah said it repelled an Israeli incursion near Ali al-Taher (Al Jazeera, PBS). Per §3.5.6, this is the Israel-independence and Lebanon-exclusion priors operationalized: a deal that ties Israeli withdrawal to Hezbollah's disarmament, signed by a Lebanese state that cannot deliver Hezbollah's consent, was never a ceasefire the armed party had agreed to. Quantify per §3.5.5: Lebanon's cumulative toll reached ~4,246 killed / 12,190 wounded even as the ink dried (Lebanese Health Ministry). Skeptical counter per §3.5.3: a framework rejected by Hezbollah is not a framework collapsed — the LAF pilot zones and the trilateral Military Coordination Group remain on paper, and Beirut's signature still represents a state choosing the US track. Analytical judgment: the coalition-cohesion clock worsens; Day 120's 'first step' is intact as a document and broken as a ceasefire, because the one actor whose guns it needed to silence has called it a surrender.",
    },
    {
      title:
        "Taiwan: the price relief survives the day, but the chokepoint it depends on is now taking direct fire — the structural exposure is what moved, not the number",
      body:
        "For Taiwan, Day 121 is the stress test Day 120's relief invited. The good news held on the tape: Brent near $72 eases the import bill, no LNG cargo was hit, Gulf exports ran ~75% of pre-war levels, and LNG cover through September plus TSMC's 2026 CapEx near 8% both carry (Trading Economics, CNBC). But the waterway carrying roughly 38% of the island's LNG and 70% of its crude, against about 11 days of cover, absorbed a US–Iran strike exchange and an IRGC 'broader response' threat in a single day (Al Jazeera, CBS News). Per §3.5.6: the relief and the risk run through the same Strait, and the risk side just escalated from a route-control warning to live fire while the price lagged. Skeptical counter per §3.5.3: the Strait stayed open, transits continued, and a one-day exchange is not a closure. Analytical judgment: the durable hedges are the ones indifferent to today's price — diversification toward Australian and US cargoes and the Maanshan and Kuosheng nuclear restarts (2028–2029). Day 121's lesson is that a falling oil price is the weakest possible all-clear when the chokepoint under it is being shot at by both belligerents; the only thing that retires the exposure is supply that does not transit Hormuz.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. CENTCOM conducted a second round of strikes on Iranian military infrastructure in response to the M/T Kiku drone attack; no US losses reported, including in the Iranian drone attack on Bahrain, which hosts the US Navy's Fifth Fleet.",
    israel:
      "No verified new Israeli casualties. Israeli strikes continued on Nabatieh a day after the framework was signed; Hezbollah rejected the framework ('humiliating... a surrender of sovereignty') and said it repelled an incursion near Ali al-Taher.",
    iran:
      "No verified new mass toll, though the second US strike round hit Iranian surveillance, comms, air-defense, drone-storage and minelaying sites; Iran published no figure. Inspections stay conditional on 'a final agreement'; the ~440.9 kg of 60% HEU stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "Lebanon's cumulative toll reached ~4,246 killed / 12,190 wounded (Lebanese Health Ministry via Al Jazeera) as Israeli strikes continued on Nabatieh. Iran's drone attack on Bahrain — the first kinetic strike on the Gulf monarchy this war — produced no confirmed casualties; the GCC condemned it as 'treacherous.' Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries.",
  },
};

export default data;
