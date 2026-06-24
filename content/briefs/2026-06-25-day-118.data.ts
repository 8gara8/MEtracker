import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction holds de-escalating and on a wider base than Day 117. The corroboration is physical and now institutional: Brent fell below $75 to its lowest since before the war, US crude briefly slipped under $70, ~20 tankers stranded over three months cleared Hormuz, ~35M barrels left the Gulf since the deal, and the US-led Joint Maritime Information Center downgraded the Hormuz threat to 'moderate' (CNBC, Kpler). A maritime-security body lowering its own assessment and rival navies coordinating a seafarer evacuation are acts, not announcements — harder evidence of de-escalation than any committee, and the reason direction holds even as the nuclear and Lebanon tracks stall.",
      risk7d:
        "Seven-day risk holds conditional and cannot fall to low, governed by §3.5.3. The nuclear file stays in open public dispute, though its substance softened toward sequencing: deputy FM Gharibabadi said inspections will be 'reviewed and decided only within the framework of a final agreement,' while Grossi insisted they are 'going to happen,' timing aside (NPR, Euronews, Philadelphia Inquirer/AP). An unresolved order-of-operations on the file that justified the war, with a US principal still holding a walk-away threat in reserve, is a standing destabilizer even as both delegations keep meeting all week.",
      spillover:
        "Spillover holds conditional and is the day's sharper edge, anchored on Lebanon. Defense Minister Katz declared the IDF 'will not withdraw' from its southern security zone 'even if there's an American demand,' and Netanyahu echoed it as the fifth-round State Department political session convened against President Aoun's full-withdrawal demand (Times of Israel, Jerusalem Post). The §3.5.6 Israel-independence prior is the active driver: a US ally publicly pre-committing against its patron's hypothetical ask is that structural independence stated aloud, and the de-confliction cell remains the only brake.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNBC / Trading Economics',
      event:
        "Brent crude fell below $75 a barrel — the August contract down about 3% to roughly $74.73, its lowest since before the war began in late February — and US crude briefly dipped under $70, as tanker traffic through the Strait of Hormuz kept recovering and US–Iran talks ran all week",
      summary:
        "This is the verifiable spine of the de-escalation: a price that keeps falling toward its pre-war floor, the inverse of a risk-premium build, and on a deeper drop than Day 117's ~$77 (CNBC, Trading Economics).",
      impact:
        "The energy-infrastructure clock improves for a third day. A falling Brent against rising transits is the hardest evidence the wind-down is real rather than announced — and it is why direction holds down despite two stalled tracks.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNBC / Kpler / IMO',
      event:
        "Maritime normalization turned institutional: at least 20 tankers stranded for more than three months cleared Hormuz and ~35M barrels exited the Gulf since the deal, with flow back near 4.8M bpd (Kpler); the US-led Joint Maritime Information Center downgraded the Hormuz threat to 'moderate,' and the IMO began coordinating an evacuation of 11,000+ stranded seafarers backed by Iran, Oman, the US and Gulf states",
      summary:
        "The tell is institutional, not rhetorical: a maritime-security body lowering its own threat assessment and rival navies cooperating on a seafarer evacuation are acts no party is merely asserting (CNBC, IMO).",
      impact:
        "The chokepoint reverts from load-bearing issue to background dispute on a formal risk read — the strongest single signal yet that the war is winding down on the vector that always mattered most.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'NPR / Euronews / CBS News / Philadelphia Inquirer',
      event:
        "The US–Iran nuclear-inspection dispute widened in headline terms but reframed toward sequencing: Iran's deputy FM Gharibabadi said inspections and sanctions steps will be 'reviewed and decided only within the framework of a final agreement,' while IAEA chief Grossi insisted inspections are 'going to happen,' the timing 'important, but not essential'",
      summary:
        "Skeptical counter per §3.5.3: this is a negotiable order-of-operations, not the flat 'no protocol' of Day 117 — but it is still unresolved, and a US principal keeps a walk-away threat in reserve (NPR, Euronews, Philadelphia Inquirer).",
      impact:
        "The weaponization clock stays a public stalemate rather than a timeline. Grossi's floor — inspectors reach only undamaged sites, the ~440.9 kg of 60% HEU unseen since June 2025 — remains the ground truth under both governments' claims.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Times of Israel / Jerusalem Post',
      event:
        "Israel went public refusing withdrawal: Defense Minister Katz said the IDF 'will not withdraw' from its southern Lebanon security zone 'even if there's an American demand' (adding none exists now), and Netanyahu vowed to maintain the presence, as the fifth-round State Department political session convened against President Aoun's full-withdrawal demand; Netanyahu and Katz separately ordered the IDF to 'hold fire' after coordination with Washington",
      summary:
        "Mixed by construction: hardening rhetoric (a public pre-commitment against a hypothetical US ask) alongside de-escalating kinetics (a hold-fire order) — the §3.5.6 Israel-independence prior stated aloud (Times of Israel, Jerusalem Post).",
      impact:
        "The coalition-cohesion clock worsens. The friction now sits on the one actor the MoU cannot compel, which is why spillover and seven-day risk cannot ease even as the price falls.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / Express Tribune',
      event:
        "Iran kept the deliverables ledger moving in public: FM Araghchi reaffirmed that oil and petrochemical sanctions were waived, the blockade lifted, frozen assets released and a reconstruction plan launched under the 60-day window to August 21, even as chief negotiator Ghalibaf repeated that the Strait of Hormuz 'will be administered by' Iran",
      summary:
        "The gap between deliverables and sovereignty rhetoric persists: Tehran banks the relief and broadcasts it while asserting permanent administration of the chokepoint its own exports surge through (Al Jazeera, Express Tribune).",
      impact:
        "The toll-institutionalization prior stays alive as the structural tail: the relief is a 60-day waiver, not a settlement, and Ghalibaf's 'administered by Iran' framing is the marker that the chokepoint risk outlasts the price relief.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; Brent hit a pre-war low and JMIC cut the Hormuz threat to "moderate")',
      status:
        "No new US casualties. Brent fell to a pre-war low and the US-led Joint Maritime Information Center downgraded the Hormuz threat to 'moderate' as the 60-day waiver runs to August 21; Washington's leverage stays the ~$24-25B in performance-based, frozen-asset and sanctions relief Iran 'won't get a dime' of until it performs.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (Katz/Netanyahu refuse IDF withdrawal but order a hold-fire in Lebanon; fifth-round talks continue)',
      status:
        "No verified new Israeli casualties. Netanyahu and Katz instructed the IDF to 'hold fire' in Lebanon after coordination with Washington, even as Katz vowed the IDF 'will not withdraw' from its southern security zone 'even if there's an American demand.' The buffer-zone presence Aoun calls 'occupation' stays unresolved.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (Iran front quiet; posture diplomatic; executions continue off the war ledger)',
      status:
        "No verified new mass toll on the Iran front. Iran reframed IAEA inspections as conditional on 'a final agreement' while Grossi insisted they will happen; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025 and no inspector has reached a damaged site. Off the war ledger, HRANA's 40 political and security executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon 4,057 killed / 12,121 wounded (June 20 revision; +2 killed June 23, first since truce renewal); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain none',
      delta: '+0 verified (IDF and Hezbollah held fire after the June 23 Nabatieh strikes; Lebanon toll carries)',
      status:
        "No verified new mass-casualty event; the IDF and Hezbollah held fire after the June 23 Nabatieh strikes incremented the Lebanon toll near 4,057 killed / 12,121 wounded. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 118 holds de-escalating, and the base that narrowed on Day 117 re-broadens — not on rhetoric but on the maritime ledger. Brent fell below $75 a barrel, the August contract off about 3% to roughly $74.73, its lowest since before the war began in late February, and US crude briefly dipped under $70 (CNBC). Behind the price is physical normalization: at least 20 tankers stranded for more than three months have cleared the Strait of Hormuz, about 35M barrels have exited the Gulf since the deal, flow is back near 4.8M barrels a day, and the US-led Joint Maritime Information Center downgraded the Hormuz threat to 'moderate' — an institutional read, not a claim by either capital (CNBC, Kpler). The IMO is coordinating an evacuation of the 11,000+ seafarers still stranded, backed by Iran, Oman, the US and Gulf states. Against that, the two caveats hardened rather than resolved. On the nuclear file the dispute widened, but Iran's framing shifted from 'no protocol' toward sequencing: deputy FM Gharibabadi said inspections will be 'reviewed and decided only within the framework of a final agreement,' while Grossi held that inspections are 'going to happen' (NPR, Euronews). On Lebanon, Israel went public with refusal — Defense Minister Katz vowed the IDF 'will not withdraw' from its southern security zone 'even if there's an American demand,' and Netanyahu echoed it as the fifth-round State Department political session convened (Times of Israel). 30-day ceasefire probability ticks to 73; direction holds de-escalating, with the Lebanon hardening the sharper near-term caveat.",
  implications: [
    {
      title:
        "Maritime normalization is now institutional, not just a price move — and it widens the de-escalation base",
      body:
        "Day 117's de-escalation rested on a single signed act — the oil license — against a falling Brent; Day 118 broadens it into a structural pattern no party is merely asserting. Brent fell below $75 to its lowest since before the war, US crude briefly slipped under $70, ~20 tankers stranded for more than three months cleared Hormuz, about 35M barrels left the Gulf since the deal, and flow is back near 4.8M barrels a day (CNBC, Kpler). The decisive tell is institutional: the US-led Joint Maritime Information Center downgraded the Hormuz threat to 'moderate,' and the IMO is now coordinating the exit of 11,000+ stranded seafarers with Iran, Oman, the US and Gulf states cooperating operationally (CNBC, IMO). Skeptical counter per §3.5.3: traffic remains below the pre-war 120–130 transits a day, the relief is a 60-day waiver to August 21 rather than a permanent settlement, and Ghalibaf still claims Iran will 'administer' the Strait (Express Tribune). Under the multi-clock framework the energy-infrastructure clock improves for a third day. Analytical judgment: a maritime-security body lowering its own threat assessment and rival navies coordinating a seafarer evacuation are acts, not announcements — the hardest evidence yet that the war is winding down on the vector that always mattered most, and the reason direction holds de-escalating even as two tracks stall.",
    },
    {
      title:
        "The caveats migrated from the nuclear file to Lebanon — and Israel just pre-committed against Washington",
      body:
        "For two days the binding caveat was the nuclear contradiction; Day 118 moves the sharper friction to Lebanon. On the nuclear file the dispute widened in headline terms, but the substance softened toward sequencing: deputy FM Gharibabadi said inspections will be 'reviewed and decided only within the framework of a final agreement,' and Grossi held that inspections are 'going to happen,' timing aside (NPR, Euronews, Philadelphia Inquirer/AP). That is a negotiable order-of-operations, not the flat 'no protocol' of Day 117. Lebanon is where the gap hardened: Defense Minister Katz declared the IDF 'will not withdraw' from its southern security zone 'even if there's an American demand,' and Netanyahu echoed it as the fifth-round State Department session convened against President Aoun's full-withdrawal demand (Times of Israel, Jerusalem Post). Skeptical counter per §3.5.6, and it is the standing prior, not a new one: Israel has never been bound by the US–Iran framework, and a public pre-commitment against a hypothetical US 'demand' is that independence stated aloud. Under the multi-clock framework the coalition-cohesion clock worsens. Analytical judgment: the deal's energy track is doing the work; the friction now sits on the one actor the MoU cannot compel, which is why seven-day risk and spillover cannot ease even as the price falls.",
    },
    {
      title:
        "Taiwan: the acute LNG threat keeps receding as Hormuz risk is formally downgraded — bank the structural lesson",
      body:
        "For eighteen weeks the Taiwan read tracked one question: whether the Hormuz disruption would convert into a physical interruption of the LNG and crude the island depends on for roughly 38% of its gas and 70% of its oil, against about 11 days of LNG cover. Day 118 extends the relieving answer and adds an institutional marker: Brent at a pre-war low, US crude under $70, and the US-led Joint Maritime Information Center cutting the Hormuz threat to 'moderate' — the acute-shock scenario the IEA called the worst energy disruption in modern history is receding on a formal risk assessment, not just a price chart (CNBC, Kpler). Skeptical counter per §3.5.6: the same single chokepoint, which Ghalibaf still claims Iran will 'administer,' will sit behind Taiwan's same 11-day buffer at the next crisis (Express Tribune). Analytical judgment: the LNG-cover-through-September case holds and TSMC's 2026 CapEx near 8% carries, and the procurement and spot-helium scrambles should keep easing as flows normalize. The durable lesson is unchanged by the good week — diversification toward Australian and US cargoes and the Maanshan/Kuosheng nuclear restart (2028–2029) are the hedges that survive the next chokepoint scare, because a threat level can be downgraded in a day and re-escalated just as fast.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. Brent fell to a pre-war low and JMIC cut the Hormuz threat to 'moderate' as the 60-day waiver runs to August 21; Washington's leverage stays the ~$24-25B in performance-based relief Iran 'won't get a dime' of until it performs.",
    israel:
      "No verified new Israeli casualties. Netanyahu and Katz ordered the IDF to 'hold fire' in Lebanon after coordinating with Washington, even as Katz vowed the IDF 'will not withdraw' 'even if there's an American demand'; the buffer zone Aoun calls 'occupation' stays unresolved.",
    iran:
      "No verified new mass toll. Iran reframed IAEA inspections as conditional on 'a final agreement' while Grossi insisted they will happen; the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "No verified new mass-casualty event; the IDF and Hezbollah held fire after the June 23 Nabatieh strikes, with the Lebanon toll carrying near 4,057 killed / 12,121 wounded. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
