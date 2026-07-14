import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating — Day 137 adds a structural tier to Day 136's kinetic one. The US announced a naval blockade of all Iran's ports, oil terminals and coastal areas from 20:00 GMT Tuesday, for every vessel regardless of flag, with non-compliant hulls to be interdicted or captured by force; CENTCOM struck Iran for a third consecutive night; and the first confirmed maritime death arrived when Iranian missiles hit two UAE tankers in Omani waters (Navy Times, Axios, CNN). The one counter-current is the strangest of the war — Trump and Araghchi haggling over who collects a Hormuz toll — but a blockade is not a table, and no mediator reconvened; the Muscat two-corridor track stalled under reported US pressure on Oman. There is no de-escalatory counterweight of substance, and the negotiation-capacity clock fell again.",
      risk7d:
        "Seven-day risk stays extreme, the ceiling short of open declared regional war, and the reason changed. The blockade's enforcement clock expires today: from 4 p.m. EDT the US Navy will interdict vessels 'regardless of flag,' putting Chinese and Russian tankers — not only Iranian ones — inside the interception box and raising the odds of a great-power incident at sea. Layer that on a third night of US strikes, Trump's public weighing of a strike on the buried Pickaxe Mountain enrichment site, and Iran's proven willingness to hit Gulf-state soil, and every rung of the ladder still carries fire (Times of Israel, CNN). The one brake is capacity: sealing ~1,000 km of coastline needs naval mass the US has not visibly surged, so the blockade may bite as declaration before interdiction — leaving a narrow window in which enforcement can still be calibrated down.",
      spillover:
        "Spillover stays critical and widened its perimeter. The war is already in the Gulf — the five-state salvo, and now two UAE tankers hit and a crew member killed in Omani waters — but Day 137 pulls the powers behind Iran toward the edge of it: a blockade 'regardless of flag' threatens Chinese and Russian cargoes directly, and Beijing escalated from urging 'unimpeded passage' to calling the US move 'dangerous and irresponsible' (Fox News). Trump simultaneously billed Saudi Arabia, the UAE, Qatar, Bahrain and Kuwait for 'protection,' straining the basing bargain at the same moment their soil absorbs Iranian fire. The Lebanon seam stayed quiet, but the maritime signature — ship-to-ship transfers off Oman, vessels going dark on AIS, traffic at a two-month low — shows the disruption radiating through the shipping system well beyond the belligerents.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Navy Times / Axios / Al Jazeera',
      event:
        "The US military announced it will begin enforcing a naval blockade of all Iran's ports, oil terminals and coastal areas at 20:00 GMT (4 p.m. EDT) Tuesday — for every vessel regardless of flag, with any ship entering or leaving the zone 'subject to interception, diversion, and capture' and non-compliant hulls 'legally compelled with force'",
      summary:
        "Per §3.5.11 this is the genuine inflection the star is reserved for: the war moves from episodic strikes to structural strangulation, a standing exclusion zone around an oil exporter rather than a punitive salvo (Navy Times, Axios).",
      impact:
        "A blockade 'regardless of flag' puts Chinese and Russian hulls inside the US interception box and internationalizes the war; the first 48 hours reveal whether the US has the naval mass to enforce it or whether it bites as declaration.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / NPR / Press TV',
      event:
        "Trump declared the US 'THE GUARDIAN OF THE HORMUZ STRAIT' and demanded 20% of cargo value — roughly $32 million for a supertanker against Iran's earlier ~$2 million fee — while Araghchi replied that Iran is the strait's 'eternal guardian,' that 20% is 'too much,' and that Iran 'will be fair'; the UN's IMO said transit tolls have no legal basis",
      summary:
        "Per §3.5.6 the toll-institutionalization prior carried since Day 45 has doubled — two powers now claim to police and bill the same water, at roughly $29-billion-a-year scale, with no legal basis under transit-passage law (CNBC, Press TV).",
      impact:
        "The haggle over the rate, not the principle, is the thinnest bargaining space left; but a blockade enforced by force cannot coexist with a toll regime that presumes transit, so the two US policies are internally at war.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / Times of Israel',
      event:
        "The UAE said Iranian missiles struck two of its tankers in Omani territorial waters, killing one crew member — the first confirmed maritime death of the renewed exchange — as CENTCOM struck Iran for a third consecutive night and Trump publicly weighed hitting the deeply buried 'Pickaxe Mountain' enrichment site",
      summary:
        "Per §3.5.3 Iran's wider damage claims stay Tehran's and unconfirmed; the one verified new casualty is a single dead mariner, and the Pickaxe Mountain talk revives the nuclear file as a target set even as inspection stays overrun (CNN, Times of Israel).",
      impact:
        "A hull loss with a fatality is the maritime trigger the briefs long flagged; it hardens the case for the blockade while giving Iran a fresh grievance and widening the war's civilian-mariner toll.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Bloomberg / Trading Economics',
      event:
        "Brent crude surged 9.6% to close at $83.30 — its biggest daily gain since 2020 — on the blockade and toll, but the move landed roughly $12 below the ~$95 the Day 136 brief flagged, and analysts still project the upper-$70s as the disruption is judged porous rather than sealed",
      summary:
        "Per §3.5.5 the tape priced a real shock but a bounded one: ships are hugging Oman's coast, running ship-to-ship transfers and going dark on AIS, and Hormuz traffic fell to a two-month low — friction, not a full stop (CNBC, Bloomberg).",
      impact:
        "For a price-taking LNG importer the shock is realized but smaller than booked; the correction from ~$95 to ~$83 is the one relatively good data point, and it holds only while the closure stays porous.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Fox News / Al Jazeera',
      event:
        "China called the US blockade 'dangerous and irresponsible' and a blow to 'the already fragile ceasefire,' escalating from its earlier calls for 'unimpeded passage,' while the Oman-mediated two-corridor proposal stalled amid reported US pressure on Muscat and no mediator reconvened a formal channel",
      summary:
        "Per §3.5.6 the China-resupply and mediation priors both sharpen: Beijing now has cargoes at risk under a flag-blind blockade, and the one administered-strait outline on the table is frozen while Omani soil is under fire (Fox News, Al Jazeera).",
      impact:
        "The great powers behind Iran are being pulled from rhetoric toward exposure; whether Beijing escalates beyond words if a Chinese-flagged vessel is interdicted becomes a new top-tier variable.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 confirmed (naval blockade not yet enforced; no confirmed US losses from the five-state salvo; damage assessment ongoing)',
      status:
        "No confirmed new US casualties. The blockade of all Iranian ports and coastal areas begins at 20:00 GMT Tuesday and had not been enforced as of this brief; Washington has still confirmed no personnel losses from Iran's five-state Gulf salvo, with third-round damage assessment continuing.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the July exchange; Lebanon seam quiet; Israeli leadership signaled readiness to strike Iran again)',
      status:
        "No new Israeli casualties. Israel remains outside the direct US–Iran exchange and the Lebanon seam stayed quiet, though Israeli leadership signaled readiness to strike Iran again and Trump weighed hitting the buried Pickaxe Mountain site; Katz's 'marked for death' threat carries.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,482 killed / 26,628+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+ toll still under review (CENTCOM third consecutive night of strikes; Tehran assessing losses; Pickaxe Mountain enrichment site publicly weighed as a target)',
      status:
        "Third-night strikes, toll still under review. CENTCOM struck Iran for a third consecutive night at Trump's direction; Tehran continues to assess losses from the ~140-target round, and Trump publicly weighed striking the deeply buried Pickaxe Mountain complex. ~440.9 kg of 60% HEU at Isfahan remains unverified since June 2025.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: '+1 KIA (UAE tanker crew member killed by an Iranian missile in Omani waters — the first confirmed maritime death of the renewed exchange)',
      status:
        "The UAE said Iranian missiles struck two of its tankers in Omani territorial waters, killing one crew member — the first confirmed maritime death of the renewed exchange. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; the three Qatar shrapnel wounded carry.",
    },
  },
  exec:
    "Day 137 is the day the war added a new tier: strangulation. The US military announced it will begin enforcing a naval blockade of all Iran's ports, oil terminals and coastal areas at 20:00 GMT — 4 p.m. EDT — Tuesday, covering every vessel regardless of flag; any ship entering or leaving the zone is 'subject to interception, diversion, and capture,' and non-compliant hulls may be 'legally compelled with force' (Navy Times, Axios, Al Jazeera). Trump paired it with a claim that reframes the strait as a toll road: the US will be 'THE GUARDIAN OF THE HORMUZ STRAIT,' charging shippers 20% of cargo value — roughly $32 million for a supertanker against Iran's earlier ~$2 million fee — a demand the UN's IMO says has no legal basis under transit-passage law (CNBC, NPR). Araghchi answered that Iran is the strait's 'eternal guardian,' that 20% is 'too much,' and that Iran 'will be fair,' leaving two powers claiming to police and bill the same water (Press TV). The UAE said Iranian missiles struck two of its tankers in Omani waters, killing one crew member — the first confirmed maritime death of the renewed exchange — as the US struck Iran for a third night and weighed hitting the buried 'Pickaxe Mountain' enrichment site (CNN, Times of Israel). Brent surged 9.6% to close $83.30, its biggest daily gain since 2020 — a real shock, but about $12 under the ~$95 the last brief flagged, and analysts still see the upper-$70s (CNBC). China called the blockade 'dangerous and irresponsible' (Fox News). Thirty-day ceasefire probability slips to 12; direction stays escalating — the fire now has a blockade behind it.",
  implications: [
    {
      title:
        "The war moved from strikes to strangulation — and the blockade internationalizes it",
      body:
        "Day 136's escalation was kinetic — strikes and salvos. Day 137's is structural: from 20:00 GMT the US will attempt to seal every Iranian port, terminal and coastal area to all shipping regardless of flag, interdicting, diverting or capturing non-compliant hulls by force (Navy Times, Axios). Analytical judgment under the multi-clock framework: the energy-infrastructure clock, already dominant, now has two hands — Iran's contested closure of the strait and Washington's blockade of the exporter behind it, squeezing the same barrels from opposite ends. The largest second-order effect lands on the coalition-cohesion clock: a blockade 'regardless of flag' puts Chinese and Russian tankers inside the US Navy's interception box, which is why Beijing's response hardened from calls for 'unimpeded passage' to branding the blockade 'dangerous and irresponsible' (Fox News). Per §3.5.6 this reactivates the standing China-resupply prior in sharper form: the powers that shielded Iran at the UN in April now have hulls at risk. The blockade also carries a credibility gap the strikes did not — sealing ~1,000 km of coastline demands persistent naval mass the US has not visibly surged, so the first 48 hours will show whether this is interdiction or declaration. Either way the negotiation-capacity clock fell further: you do not blockade a counterpart you expect at the table tomorrow.",
    },
    {
      title:
        "Two guardians, one strait — the toll war is absurd, illegal, and barely a channel",
      body:
        "The day's strangest development is that the US and Iran now both claim to be the strait's 'guardian,' each entitled to a toll on the same water. Trump demanded 20% of cargo value — about $32 million for a supertanker against Iran's earlier ~$2 million fee — and Araghchi countered that Iran is the 'eternal guardian,' that 20% is 'too much,' and that Iran 'will be fair' (CNBC, Press TV). The UN's IMO cut across both, holding there is no legal basis to charge vessels merely to transit a strait used for international navigation. Analytical judgment: per §3.5.6 the toll-institutionalization prior carried since Day 45 has not merely persisted — it has doubled, with two claimants racing to convert Hormuz into permanent revenue at roughly $29-billion-a-year scale. Two readings compete. The escalatory one: a blockade enforced by force cannot coexist with a toll regime that presumes ships transit, so the two US policies are internally at war and the contradiction invites miscalculation. The thin de-escalatory one: both capitals are arguing about the rate, not the principle, which is the closest thing to a bargaining space left. Per §3.5.3 that optimism is exactly the pattern that has burned this series before; the toll talk is a frame, not a ceasefire, and it sits atop a blockade and a third night of strikes.",
    },
    {
      title:
        "Taiwan: the repricing was real but bounded — and the blockade is the new variable",
      body:
        "For Taiwan, Day 137 refines rather than repeats Day 136. The repricing trigger fired, but smaller than the last brief booked: Brent jumped 9.6% to close $83.30 — its biggest daily gain since 2020 — not the ~$95 the Day 136 brief flagged, and analysts still project the upper-$70s as the strait's disruption is judged porous rather than sealed (CNBC). Ships are hugging Oman's coast and going dark on AIS, and Hormuz traffic has fallen to a two-month low — friction, not a full stop (Bloomberg, The National). Analytical judgment: this is the one piece of relatively good news, and it is fragile. The §3.5.6 exposure is unchanged and live — roughly 60% of the island's oil and a third of its gas transit Hormuz, against a legally mandated LNG reserve of only ~11 days versus ~120 days of oil — and the new US blockade adds a supply-side squeeze on top of the transit risk. Taiwan's foreign ministry has already increased US LNG purchases to backfill shortfalls, and the Ras Laffan damage that cut Qatari LNG capacity ~17% still bites a buyer holding a 27-year QatarEnergy contract. The durable hedges are unchanged — US and Australian cargoes and the Maanshan and Kuosheng restarts (2028–2029) — but none help inside 11 days. TSMC's 2026 CapEx near 8% is the balance-sheet cushion; the tank farm is the physical one, and it is still draining, just more slowly than a $95 tape implied.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. The blockade of Iran's ports begins at 20:00 GMT Tuesday and had not been enforced as of this brief; Washington confirms no losses from the five-state salvo.",
    israel:
      "No new Israeli casualties. Israel stayed outside the direct exchange; the Lebanon seam was quiet; Israeli leadership signaled readiness to strike Iran again and Katz's 'marked for death' threat carries.",
    iran:
      "Third-night strikes, toll still under review. Trump publicly weighed striking the buried Pickaxe Mountain enrichment site; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "First confirmed maritime death: a UAE tanker crew member killed by an Iranian missile in Omani waters. Lebanon toll source-split; Iraq 119+ / Gulf 33+ KIA carry.",
  },
};

export default data;
