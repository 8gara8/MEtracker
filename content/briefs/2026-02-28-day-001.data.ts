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
};

export default data;
