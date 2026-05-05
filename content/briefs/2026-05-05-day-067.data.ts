import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Monday converted Sunday's kinetic-readiness pivot into an actual kinetic exchange. Project Freedom's first escorts — two US-flagged vessels including Maersk's Alliance Fairfax — successfully transited the Strait of Hormuz under CENTCOM protection, but Iran responded with force across multiple domains. US AH-64 Apache and MH-60 Seahawk helicopters destroyed six IRGC small boats; Iran launched multiple cruise missiles, drones, and small boats at US Navy ships and commercial vessels; CENTCOM: all threats defeated (CBS News, The War Zone, CNN). Trump warned Iran would be 'blown off the face of the earth' if it attacks US vessels (Times Kuwait/BBC). Fars claimed two missiles struck a US warship near Jask; CENTCOM denied any vessel was hit. The IRGC Navy announced a new Hormuz control zone.",
      risk7d:
        "Seven-day risk upgrades from extreme to critical: kinetic exchange has occurred. Iran simultaneously attacked the UAE for the first time since the April 8 ceasefire — UAE MOD intercepted 12 ballistic missiles, 3 cruise missiles, and 4 drones; a Fujairah drone sparked fire at oil facility on Abu Dhabi Crude Oil Pipeline bypass terminal; 3 Indian nationals moderately injured (Al Jazeera, Bloomberg, Axios, The National). IRGC Navy announced new Hormuz control zone; IRGC spokesman: 'Any vessel violating Iran's rules will be stopped by force.' Brent crude jumped ~6% to $114.44/bbl (CNBC). South Korean vessel HMM NAMU explosion and fire in Hormuz — towed to Dubai. The ceasefire is now violated in fact across maritime, air, and missile domains.",
      spillover:
        "Iran's UAE strikes are the first since the ceasefire began — Fujairah, the critical bypass terminal for the Abu Dhabi Crude Oil Pipeline, took a direct drone hit; UAE schools shift to remote learning. In Lebanon, heavy IDF-Hezbollah clashes near Deir Seryan after IDF attempted advance north — 2 IDF soldiers moderately wounded; Hezbollah fighters engaged and IDF retreated under artillery cover; IAF struck 20+ Hezbollah sites (Times of Israel, Al Arabiya, Antiwar.com). Lebanese Army officer and soldier lightly wounded in separate Israeli strike on Kafra. Speaker Berri declared no negotiations with Israel until war stops (US News) — closing the diplomatic off-ramp. Mid-May expanded-Lebanon-campaign trigger moves from pencilled-in to operationally live.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CENTCOM / CBS News / The War Zone / CNN / gCaptain / Navy Times',
      event: "Project Freedom activated — first escorts transit Hormuz; US sinks 6 IRGC boats; Iran launches cruise missiles, drones, small boats at US Navy and commercial ships",
      summary:
        "CENTCOM launched Project Freedom with guided-missile destroyers, 100+ aircraft, multi-domain unmanned platforms, and 15,000 service members. Two US-flagged vessels including Maersk's Alliance Fairfax (Farrell Lines subsidiary) successfully transited the Strait of Hormuz. Six IRGC small boats attempted to interfere and were destroyed by AH-64 Apache and MH-60 Seahawk helicopters. Adm. Brad Cooper: Iran historically deploys 20–40 small boats, 'today we saw just six, and eliminated them quickly.' Iran launched multiple cruise missiles, drones, and additional small boats at US Navy ships and commercial vessels under US protection; CENTCOM: all threats defeated. Trump claimed 7 boats sunk.",
      impact:
        "Project Freedom's Day 1 produced the kinetic exchange that Iran had pre-classified as a ceasefire violation. The April 8 ceasefire is now functionally collapsed in the maritime domain. The IRGC's deployment of only 6 boats (vs. historical 20–40) suggests either degraded capability or deliberate restraint to test US response without committing full force. Cooper's 'eliminated them quickly' framing signals US confidence in escalation dominance at sea. Monday's outcome selects the kinetic-exchange tier of the procurement curve.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Bloomberg / Axios / The National / NPR / FDD',
      event: "Iran attacks UAE for first time since April 8 ceasefire — 12 BMs, 3 CMs, 4 drones; Fujairah oil facility fire; 3 injured",
      summary:
        "UAE MOD reported intercepting 12 ballistic missiles, 3 cruise missiles, and 4 drones from Iran on Monday afternoon. A drone struck the Fujairah oil facility on the Abu Dhabi Crude Oil Pipeline bypass terminal, sparking a fire. Three Indian nationals moderately injured. UAE schools shifted to remote learning. The attack shattered the period of relative calm in the UAE since the April 8 Pakistani-mediated ceasefire.",
      impact:
        "Iran's Fujairah targeting crosses the energy-infrastructure red line by hitting the Abu Dhabi Crude Oil Pipeline bypass terminal — the UAE's critical insurance against Hormuz closure. By targeting Fujairah specifically, Iran signals that bypass architecture itself is within its target set, not merely the strait transit corridor. Gulf states relying on bypass pipelines no longer have a secure corridor. Brent's ~6% jump to $114.44 reflects the market pricing this target expansion.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Iran International / Fox News / Investing Live',
      event: "IRGC Navy announces new Hormuz control zone; Fars claims missile hit on US warship near Jask — CENTCOM denies",
      summary:
        "The IRGC Navy announced a new zone of the Strait of Hormuz under Iranian armed forces control, formalizing maritime confrontation beyond the pre-existing parliamentary 12-point toll regime. Fars news agency (IRGC-affiliated) claimed two missiles hit a US warship at the southern end of the Strait of Hormuz near Jask; CENTCOM denied: 'No U.S. Navy ships have been struck.' IRGC spokesperson declared: 'Any vessel violating Iran's rules will be stopped by force.'",
      impact:
        "The IRGC's new Hormuz zone declaration layers a military control overlay on top of the parliamentary statutory regime — Iran now claims both legal and military authority over strait transit. The Fars missile-hit claim, even if denied by CENTCOM, serves Iranian domestic narratives of resistance and may be deployed to justify further escalation. The gap between Iranian media claims and US denials creates an information-warfare fog that compounds tactical uncertainty.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Times Kuwait / BBC / Times of Israel liveblog May 4',
      event: "Trump warns Iran will be 'blown off the face of the earth' if it attacks US vessels; IDF at 'high readiness'",
      summary:
        "Trump warned from the White House that Iran would be 'blown off the face of the earth' if it hits US ships — the most direct kinetic threat of the war. The statement came as Project Freedom escorts were completing their first transit and as CENTCOM was engaging IRGC boats. IDF was placed at 'high readiness' posture across both the Iran track and the Lebanon track.",
      impact:
        "Trump's 'blown off the face of the earth' rhetoric converts the Hegseth ROE from a contingency framework into active engagement doctrine with explicit presidential endorsement for maximal force. IDF 'high readiness' posture compounds the Lebanon escalation risk — the posture spans both tracks simultaneously, suggesting Israeli planning accounts for a scenario where Lebanon and Iran kinetic operations overlap.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC oil prices',
      event: "Brent crude jumps ~6% to $114.44/bbl — highest since May 2022",
      summary:
        "Brent crude futures rose nearly 6% on Monday to close at $114.44/bbl, the highest level since May 2022. The spike was driven by Iran's multi-domain kinetic response to Project Freedom: UAE missile/drone attacks, Fujairah oil facility fire, Hormuz small-boat engagement, and IRGC control-zone declaration.",
      impact:
        "The $111 → $114.44 move prices kinetic-exchange rather than blockade-management. Structural floor moves $115-130 → $120-135 with Fujairah bypass-infrastructure targeting priced in. Kinetic-tail $130-$170 ceiling probability-weight now dominant. Asia's ~84% Hormuz crude dependency and ~83% LNG dependency amplify the signal. Taiwan CPC procurement floor moves above $135 for no-Hormuz-through-October baseline.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel liveblog May 4 / Al Arabiya / Antiwar.com / US News',
      event: "Heavy IDF-Hezbollah clashes near Deir Seryan — IDF advance repelled, 2 soldiers wounded; Speaker Berri: no negotiations until war stops",
      summary:
        "IDF forces attempted to advance near Deir Seryan inside the 10km 'yellow line' in south Lebanon. Hezbollah fighters engaged in heavy clashes; 2 IDF soldiers moderately wounded; IDF retreated under artillery cover. IAF struck 20+ Hezbollah sites including buildings and ATGM launch posts. Lebanese Army officer and soldier lightly wounded in separate IDF strike on Kafra. Speaker Berri, Lebanon's senior Shia politician and Hezbollah ally, declared no negotiations with Israel until the war stops.",
      impact:
        "The Deir Seryan engagement — an IDF ground advance repelled with casualties — is the strongest indicator since April 16 that the expanded Lebanon campaign is imminent. Berri's declaration closes the Aoun-Netanyahu diplomatic track. The mid-May expanded-campaign trigger is now operationally live. Lebanon clock has escalated from low-intensity friction to active ground combat with IDF casualties.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'Jerusalem Post / Xinhua / Al Arabiya / Japan Times / SCMP',
      event: "South Korean vessel HMM NAMU explosion and fire in Strait of Hormuz — no casualties, towed to Dubai",
      summary:
        "The HMM NAMU (Panamanian flag, South Korean-operated, HMM subsidiary, 6 Korean + 18 foreign crew) suffered an explosion and fire in its engine room while anchored in the Strait of Hormuz near UAE waters. Fire was extinguished, no casualties reported. The vessel was towed to Dubai. Cause under investigation. Trump said Iran fired at the ship.",
      impact:
        "The HMM NAMU incident adds a third flag-state (South Korea/Panama) to the Hormuz risk register alongside the US-flagged escorts and the general non-US-hull harassment lane. Whether the cause was Iranian action or mechanical failure remains unresolved; Trump's attribution to Iran, if confirmed, would expand the ceasefire-violation register to include attacks on neutral-flag commercial vessels beyond the Project Freedom escort corridor.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA / WIA under review',
      status:
        "No new confirmed KIA. CENTCOM reports all Iranian threats defeated during Project Freedom Day 1 — cruise missiles, drones, small boats. Six IRGC boats destroyed by AH-64 Apache and MH-60 Seahawk helicopters. Fars claims two missiles hit US warship near Jask; CENTCOM denies. Trump warns Iran will be 'blown off face of the earth.' 15,000 service members deployed. Two US-flagged vessels completed Hormuz transit.",
    },
    israel: {
      cumulative: 'KIA: 47 (revised upward from 40 per updated Israeli cross-check as of May 4) · WIA: 8,594 (revised upward from 6,008)',
      delta: '+2 IDF WIA (Deir Seryan clashes)',
      status:
        "Casualty revision: 47 KIA / 8,594 WIA per Wikipedia cross-check of Israeli sources as of May 4 (up from 40 KIA / 6,008 WIA). 2 IDF soldiers moderately wounded in heavy Hezbollah clashes near Deir Seryan after IDF attempted northward advance; IDF retreated under artillery cover. IAF strikes 20+ Hezbollah sites. Lebanese Army officer and soldier lightly wounded in IDF strike on Kafra. IDF at 'high readiness' posture.",
    },
    iran: {
      cumulative: "Iran LMO 'nearly 3,400' KIA · HRANA April 7: 3,636+ (1,701 civilians, 1,221 military, 254+ children) · Hengaw 6,620+ military · 3.2M displaced.",
      delta: '6 IRGC small boats destroyed — crew casualties unconfirmed',
      status:
        "Six IRGC small boats destroyed by US helicopters during Project Freedom Day 1; crew casualties unconfirmed. Iran launched multiple cruise missiles, drones, small boats at US Navy and commercial vessels. IRGC Navy announces new Hormuz control zone. Iran fires 12 BMs, 3 CMs, 4 drones at UAE — most intercepted; Fujairah oil fire. War preparations underway per Al Jazeera. IRGC spokesman: 'Any vessel violating rules stopped by force.'",
    },
    other: {
      cumulative: 'Lebanon MOH: 2,663+ KIA / 8,183+ WIA · Iraq: 117+ (revised from 99+) · Gulf states: 32+ · UAE: 11+3 injured Monday.',
      delta: '+3 UAE injured (Indian nationals) / Lebanon Army 2 lightly wounded',
      status:
        "UAE: 3 Indian nationals moderately injured in Iranian missile/drone strikes Monday; Fujairah oil facility fire; UAE schools shift to remote learning. South Korean vessel HMM NAMU explosion and fire in Hormuz — no casualties, towed to Dubai. Lebanon: Army officer and soldier lightly wounded in IDF Kafra strike; Speaker Berri: no negotiations until war stops. Iraq: 117+ KIA per updated cross-check (revision from 99+). Hamas-Cairo Mladenov track carries.",
    },
  },
  exec:
    "Monday converted Sunday's kinetic-readiness pivot into an actual kinetic exchange. Project Freedom's first escorts — two US-flagged vessels including Maersk's Alliance Fairfax — successfully transited the Strait of Hormuz under CENTCOM protection, but Iran responded with force across multiple domains simultaneously. US AH-64 Apache and MH-60 Seahawk helicopters destroyed six IRGC small boats that attempted to interfere with the escorts; Iran launched multiple cruise missiles, drones, and additional small boats at US Navy ships and commercial vessels under US protection, all defeated per CENTCOM (CBS News, The War Zone, CNN). Iran attacked the UAE for the first time since the April 8 ceasefire — UAE MOD intercepted 12 ballistic missiles, 3 cruise missiles, and 4 drones; a drone sparked a fire at the Fujairah oil facility on the Abu Dhabi Crude Oil Pipeline bypass terminal; 3 Indian nationals moderately injured; UAE schools shifted to remote learning (Al Jazeera, Axios, Bloomberg, The National). Fars news agency (IRGC-affiliated) claimed two missiles struck a US warship near Jask; CENTCOM denied any US vessel was hit. The IRGC Navy announced a new Hormuz control zone and declared any vessel violating Iranian rules would be stopped by force. Trump warned Iran would be 'blown off the face of the earth' if it attacks US vessels (Times of Israel, Times Kuwait/BBC). A South Korean-operated vessel HMM NAMU suffered an explosion and fire while anchored in the strait; no casualties, towed to Dubai (Jerusalem Post, Xinhua). Brent crude jumped ~6% to $114.44/bbl (CNBC). In Lebanon, IDF attempted to advance near Deir Seryan; Hezbollah engaged in heavy clashes; 2 IDF soldiers moderately wounded; IAF struck 20+ Hezbollah sites; Speaker Berri declared no negotiations until war stops (Times of Israel, Al Arabiya, US News). Casualty revision: Israeli figures revised upward to 47 KIA / 8,594 WIA per updated cross-check of Israeli sources (Wikipedia). Analytical judgment: 30-day ceasefire probability moves 13 → 8. The April 8 ceasefire is now functionally collapsed — Monday's Hormuz kinetic exchange and UAE strikes constitute simultaneous violations across the maritime, air, and missile domains; the question is no longer whether the ceasefire holds but whether any framework exists to prevent full-spectrum resumption.",
  implications: [
    {
      title: "Project Freedom's first day produces the kinetic exchange Iran pre-classified as a ceasefire violation — the April 8 ceasefire is now functionally collapsed across maritime, air, and missile domains",
      body:
        "Monday resolved the dominant question from Day 66: what would happen when Project Freedom escorts entered the Strait of Hormuz. The answer is simultaneous kinetic engagement across multiple domains. CENTCOM deployed guided-missile destroyers, 100+ aircraft, multi-domain unmanned platforms, and 15,000 service members; two US-flagged vessels including Maersk's Alliance Fairfax successfully completed the transit (CENTCOM press release, gCaptain, Navy Times). But six IRGC small boats attempted to interfere and were destroyed by AH-64 Apache and MH-60 Seahawk helicopters within what Adm. Brad Cooper characterized as a swift engagement — 'Today, we saw just six, and eliminated them quickly' (The War Zone, CBS News). Iran simultaneously launched multiple cruise missiles, drones, and additional small boats at US Navy ships and commercial vessels under US protection; CENTCOM reports all threats defeated (CNN, CNBC). Fars news agency claimed two missiles struck a US warship near Jask; CENTCOM denied any US vessel was hit. The IRGC Navy announced a new controlled zone in the Strait of Hormuz, formalizing the maritime confrontation beyond the pre-existing parliamentary 12-point toll regime. Iran's simultaneous attack on the UAE — 12 ballistic missiles, 3 cruise missiles, 4 drones, with a Fujairah oil facility fire — constitutes a deliberate multi-domain ceasefire violation timed to Project Freedom's opening day (Al Jazeera, Bloomberg, Axios). The ceasefire that Pakistan mediated on April 8 is now violated in fact; only the diplomatic fiction of 'no formal declaration of resumption' prevents full-spectrum war from being the operative classification. Analytical judgment: the April 8 ceasefire framework is exhausted as a constraint on Iranian kinetic action; Monday's multi-domain response pattern — Hormuz small boats, cruise missiles at escorts, ballistic missiles at UAE, drone strike on energy infrastructure — reveals Iran's chosen escalation architecture for the post-ceasefire phase. Probability move 13 → 8.",
    },
    {
      title: "Iran's Fujairah strike crosses the energy-infrastructure red line — Abu Dhabi Crude Oil Pipeline bypass terminal targeted on Project Freedom's opening day, hardening the kinetic-tail procurement curve",
      body:
        "The Fujairah drone strike is strategically distinct from the Hormuz small-boat engagement. Fujairah sits at the terminus of the Abu Dhabi Crude Oil Pipeline, which carries crude from inland fields to the Gulf of Oman, bypassing the Strait of Hormuz — it has been the UAE's critical insurance against Hormuz closure. By targeting Fujairah specifically, Iran signals that the bypass architecture itself is within its target set, not merely the strait transit corridor. The 12 ballistic missiles, 3 cruise missiles, and 4 drones directed at the UAE were intercepted except for the Fujairah drone that sparked the oil facility fire (Al Jazeera, The National UAE). Three Indian nationals were moderately injured; UAE schools shifted to remote learning (Al Jazeera liveblog May 4). Brent crude's ~6% jump to $114.44/bbl (CNBC oil prices) reflects the market pricing this target expansion. For Taiwan's energy procurement, the Fujairah strike eliminates the last hedging assumption in the CPC procurement model — that Hormuz-bypass routes preserved some Gulf crude optionality. The structural floor now moves $115-130 → $120-135 with the kinetic-tail $130-$170 ceiling probability-weighted as dominant rather than tail. TSMC 2026 CapEx pricing pass-through must now account for both Hormuz transit risk and bypass-infrastructure risk simultaneously. Analytical judgment: Iran's Fujairah targeting is a deliberate signal that energy-infrastructure targeting extends beyond Hormuz itself; Gulf states that relied on bypass pipelines no longer have a safe corridor; the procurement curve for Asian importers must price a new baseline where no Gulf export route is secure.",
    },
    {
      title: "Lebanon clashes intensify independently of Iran track — IDF advance at Deir Seryan repelled; Speaker Berri closes diplomatic off-ramp; mid-May expanded-campaign trigger moves from pencilled-in to operationally live",
      body:
        "Monday's Lebanon developments operate on a separate clock from the Hormuz kinetic exchange but compound the overall escalation picture. IDF forces attempted to advance near Deir Seryan in southern Lebanon — inside the 10km 'yellow line' — and were engaged by Hezbollah fighters in heavy clashes; two IDF soldiers were moderately wounded; the IDF retreated under artillery cover (Times of Israel liveblog May 4, Al Arabiya, Antiwar.com). The IAF struck 20+ Hezbollah sites in the area including buildings and anti-tank guided missile launch posts. A Lebanese Army officer and soldier were lightly wounded in a separate Israeli strike on the town of Kafra. Speaker Berri's public declaration that there can be no negotiations with Israel until the war stops (US News) closes the Aoun-Netanyahu direct meeting track that the US administration had been pushing and that Hezbollah had already vetoed. The IDF's 'high readiness' posture announced Monday (Times of Israel) operates across both the Iran track and the Lebanon track simultaneously. Netanyahu's Sunday announcement of the IDF counter-drone project and F-35/F-15IA squadron acquisition from Day 66 is now contextualized by Monday's Deir Seryan engagement — the counter-drone capability is needed immediately, not as a procurement-cycle deliverable. The mid-May expanded-Lebanon-campaign trigger that prior briefs had pencilled in is now operationally live: IDF is probing beyond current positions, Hezbollah is responding kinetically, diplomatic channels are closed by Berri's declaration, and the April 16 truce is serving as an operational floor rather than a ceasefire ceiling. Analytical judgment: the Lebanon single-clock direct-attack track has escalated from low-intensity friction to active ground combat with IDF casualties; the Deir Seryan engagement — an IDF advance repelled with wounded — is the strongest indicator since April 16 that the expanded campaign is imminent rather than contingent.",
    },
  ],
  casualtyNotes: {
    us: "No new confirmed KIA. CENTCOM reports all Iranian threats defeated during Project Freedom Day 1. Six IRGC boats destroyed by AH-64 Apache and MH-60 Seahawk helicopters. Fars claims missile hit on US warship near Jask — CENTCOM denies. Trump: Iran will be 'blown off the face of the earth.' 15,000 service members deployed. Two US-flagged vessels completed Hormuz transit.",
    israel:
      "Casualty revision: 47 KIA / 8,594 WIA per Wikipedia cross-check of Israeli sources as of May 4 (up from 40 / 6,008). 2 IDF soldiers moderately wounded in Deir Seryan clashes after IDF advance repelled by Hezbollah. IAF strikes 20+ Hezbollah sites. IDF at 'high readiness' posture. Lebanese Army officer and soldier lightly wounded in IDF Kafra strike.",
    iran:
      "Six IRGC small boats destroyed by US helicopters — crew casualties unconfirmed. Iran launched cruise missiles, drones, small boats at US Navy and commercial vessels. IRGC Navy announces new Hormuz control zone. Iran fires 12 BMs, 3 CMs, 4 drones at UAE — most intercepted; Fujairah oil fire. War preparations underway per Al Jazeera.",
    other:
      "UAE: 3 Indian nationals moderately injured in Iranian strikes; Fujairah oil fire; schools shift to remote learning. South Korean vessel HMM NAMU explosion in Hormuz — no casualties, towed to Dubai. Lebanon: Army officer and soldier lightly wounded in IDF Kafra strike; Speaker Berri: no negotiations until war stops. Iraq: 117+ KIA per updated cross-check.",
  },
};

export default data;
