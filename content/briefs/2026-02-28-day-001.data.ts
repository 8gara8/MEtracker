import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        'Concurrent US and Israeli kinetic action against three strategic Iranian sites, immediately answered by Iranian ballistic retaliation against Israeli population centers and a Hormuz traffic suspension, represents the clearest possible escalating posture at Day 1.',
      risk7d:
        'Iranian retaliatory capacity remains largely intact after the opening salvo, Israeli interceptor draw-down is visible from the first barrage, and no de-escalation channel is active; the 72-hour and 7-day windows carry extreme escalation risk.',
      spillover:
        'Hezbollah on high alert with cross-border rocket fire already reported, Iraqi militias mobilizing, Houthi vessels repositioning in the Red Sea, and Gulf state airspace deconfliction breaking down collectively place spillover risk at critical.',
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'US DoD / CENTCOM',
      event: 'US strikes on Fordow',
      summary:
        'B-2 sorties deliver GBU-57 penetrators against the Fordow enrichment hall during the opening six-hour window.',
      impact:
        'Damage assessment incomplete; IAEA access suspended. Removes the deepest target from the board on Day 1 if damage is confirmed.',
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'IDF Spokesperson',
      event: 'Israeli strikes on Natanz and Isfahan',
      summary:
        'IAF formations hit Natanz centrifuge cascades and the Isfahan conversion facility in coordinated waves.',
      impact:
        'Degrades near-term Iranian enrichment throughput and signals full Israeli commitment to the joint operation.',
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Times of Israel / IDF',
      event: 'Iranian ballistic barrage on Tel Aviv and Haifa',
      summary:
        "Hundreds of ballistic missiles launched in waves; Arrow and David's Sling interceptors engage with visible saturation.",
      impact:
        'Establishes baseline interceptor-burn rate and exposes civilian-defense gaps in coastal population centers.',
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Reuters / shipping data',
      event: 'Strait of Hormuz traffic suspended',
      summary:
        'Iran issues a navigation advisory halting tanker transits pending damage assessment; several carriers reroute.',
      impact:
        'Brent spot jumps; Asian LNG markets reprice. Taiwan LNG inventory thread activated from Day 1.',
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Hezbollah statement',
      event: 'Hezbollah and Iraqi militias go to high alert',
      summary:
        'Cross-border rocket fire from southern Lebanon reported; Iraqi Shia militias issue mobilization orders.',
      impact:
        'Second front opens against Israel; US forces in Iraq and Syria now inside the engagement envelope.',
    },
  ],
  casualties: {
    us: {
      cumulative: '0 KIA, 0 WIA',
      delta: '+0/+0',
      status:
        'CENTCOM forces postured for follow-on strikes; no direct contact with Iranian forces reported on Day 1.',
    },
    israel: {
      cumulative: '~142 KIA, ~850 WIA (seed estimate)',
      delta: '+142/+850',
      status:
        'Home-front command on highest alert; coastal urban centers absorbing the initial ballistic wave; interceptor stocks drawing down.',
    },
    iran: {
      cumulative:
        '~380 KIA, ~1200 WIA (seed estimate, dual-source per HRANA / Iranian state media)',
      delta: '+380/+1200',
      status:
        'Regime centralizes communications; enrichment-site access suspended; IRGC publicly committed to sustained retaliation.',
    },
    other: {
      cumulative: '0 KIA, 0 WIA',
      delta: '+0/+0',
      status:
        'Hezbollah and Iraqi militias mobilized but no mass-casualty events; limited cross-border exchanges only.',
    },
  },
  exec:
    "Operation Epic Fury opened on February 28, 2026 with concurrent US and Israeli strikes against Iran's three principal enrichment facilities at Natanz, Fordow, and Isfahan — the first direct, sustained military confrontation between Washington and Tehran since the 1979 revolution. B-2 sorties delivered GBU-57 penetrators on Fordow while Israeli F-35I and F-15I formations struck Natanz and Isfahan across a six-hour window. Iran's retaliation came within hours: a large ballistic-missile barrage against Tel Aviv and Haifa, activation of Hezbollah's rocket inventory, and simultaneous Houthi movement against Red Sea shipping. By late evening Iran had suspended all Strait of Hormuz traffic pending damage assessment, and Brent surged in Asian trading. Analytical judgment: with retaliatory capacity intact and interceptor stocks already drawing down, the 72-hour window carries extreme escalation risk and a negligible near-term ceasefire probability.",
  implications: [
    {
      title: "The opening salvo establishes the war's analytical clocks",
      body:
        "Day 1 set every multi-clock state simultaneously, and the pattern matters more than any single dial. Political will on both sides is high and stable; there is no domestic audience at hour zero demanding pause. Active deadlines are at none. Energy infrastructure is degraded and worsening. Interceptor capacity is high but already draining. Negotiation capacity is low and stable. Oil reserves are ample but will compress fast if Hormuz closure extends past 72 hours. The war does not need a new trigger to escalate; it needs only time.",
    },
    {
      title: 'Hormuz closure begins the energy-MAD calculus',
      body:
        "The Strait of Hormuz suspension is the single most consequential non-kinetic development of Day 1. Roughly a fifth of global oil and a quarter of LNG crosses the strait. Two second-order threads activate immediately: Taiwan's grid depends on LNG for ~50% of baseload, and Chinese oil imports through Hormuz are large enough that sustained closure forces a Beijing reaction. The energy channel is the fastest path to a ceasefire if Tehran overreaches, and the fastest path to escalation if Washington responds to prolonged closure with direct strikes on Iranian naval assets.",
    },
    {
      title: 'Interceptor depletion is the hidden clock',
      body:
        "Israel's Arrow-3, Arrow-2, and David's Sling inventories are finite; US replenishment cycles are measured in months. The first Iranian barrage revealed engagement rates that, sustained, will compress magazine depth below warning thresholds inside two weeks. The single most important number in coming briefs is not daily casualty totals but the implied burn rate per barrage, back-solved from intercept percentages and observed impacts.",
    },
  ],
  flash:
    '18:00 Taipei — Two smaller Iranian barrage waves through the afternoon, both sub-40 missiles. Observed intercept rate ~87%; one impact in Ashkelon industrial zone, no mass-cas. Hormuz remains suspended; IRGC-N issued revised NOTMAR extending closure through at least Day 2. No diplomatic movement. Interceptor burn rate now the critical analytical number — implied magazine depth crossing the 14-day warning threshold earlier than Day 1 modeling suggested.',
  casualtyNotes: {
    us: 'CENTCOM forces postured for follow-on strikes; no direct contact with Iranian forces reported on Day 1. Civilian US losses incidental to allied-theatre activity.',
    israel:
      'KIA concentrated in Tel Aviv and Haifa metro impacts from the opening ballistic barrage; WIA dominated by blast and fragmentation injuries. Home-front command on highest alert.',
    iran:
      'Iran totals include strike casualties at Natanz, Fordow, and Isfahan plus collateral damage. Proxy KIA (Hezbollah, Iraqi militias) folded in without disaggregation at Day 1.',
    other:
      'Third-country civilian exposure limited at Day 1; Red Sea mariners and Lebanese border communities inside the spillover envelope.',
  },
};

export default data;
