import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Tuesday produced the de-escalation reversal of Monday's kinetic exchange. Trump paused Project Freedom 'for a short period of time' on Truth Social, citing 'Great Progress' toward a 'Complete and Final Agreement' with Iran; the blockade remains in full force (CNBC, NBC, Bloomberg, CBS News, Axios). Rubio at the White House declared Operation Epic Fury's offensive phase 'over' — 'this is not an offensive operation; there's no shooting unless we're shot at first' — and shifted US posture to defensive while making Hormuz reopening the priority condition (TIME, Al Arabiya, NPR). Hegseth maintained 'the ceasefire is not over.' The blockade and 15,000-troop Hormuz posture remain in place, so reactivation is one Truth Social post away.",
      risk7d:
        "Seven-day risk downgrades from critical to extreme. Pezeshkian publicly clashed with the IRGC over Monday's UAE strikes — calling them 'completely irresponsible,' 'madness,' carried out without government coordination — and requested an urgent meeting with new Supreme Leader Mojtaba Khamenei to halt IRGC attacks on Gulf states (Israel Hayom, Iran International, Türkiye Today). Araghchi framed 'Project Deadlock,' cited Pakistan-mediated talks 'making progress,' and is set to travel to Beijing for Wang Yi talks (ANI, Daily Pakistan). The civilian-military rupture cuts both ways — the negotiating track is publicly empowered while Iran's commitment credibility is undermined.",
      spillover:
        "Spillover holds critical. UAE infrastructure damage from Monday's Fujairah ADCOP/VTTI strike persists. Bahrain led a 90+ country joint statement demanding Iran halt actions; the US-Bahrain-Saudi-UAE-Kuwait-Qatar UNSC draft resolution requires Iran to cease attacks, mining, and tolling (UAE MOFA, Al Jazeera UN). UAE MOFA called for 'immediate and unconditional' Hormuz reopening. Lebanon clashes continued at lower intensity — Hezbollah rockets and a drone landed near IDF without injuries; German FM Wadephul defended Israel's south-Lebanon posture (Times of Israel liveblog May 5). The South Korean HMM NAMU investigation will take 'several days' per Seoul; Vanguard maritime risk weighs attack vs. drifting sea mine vs. external object.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'CNBC / NBC / CNN / Bloomberg / Axios / CBS News / Al Jazeera',
      event: "Trump pauses Project Freedom citing 'Great Progress' toward complete agreement with Iran; blockade remains in full force",
      summary:
        "President Trump posted on Truth Social that Project Freedom 'will be paused for a short period of time to see whether or not the Agreement can be finalized and signed,' citing 'Great Progress' toward a 'Complete and Final Agreement' with Iran. The pause came one day after Project Freedom's first transits and the kinetic exchange that destroyed six IRGC small boats and prompted Iran's UAE strikes. Trump explicitly stated the blockade 'will remain in full force and effect' during the pause.",
      impact:
        "Trump's pause is the most explicit US backstep since the April 8 ceasefire. The Truth Social framing converts Monday's kinetic exchange into a precipitating event rather than an escalator — but the conditioning on 'agreement finalized and signed' means reactivation is one post away. The pause resolves the Adm. Cooper 'today we saw just six' question retroactively as space-creating restraint rather than degraded capability. Probability move 8 → 12 anchors here.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'TIME / Al Arabiya / NPR / Times of Israel / Al Jazeera',
      event: "Rubio declares Operation Epic Fury offensive phase 'over' — 'no shooting unless we're shot at first'; US shifts to defensive posture",
      summary:
        "Secretary of State Marco Rubio at a White House briefing said the combat operation launched in February 'is over' and that Operation Epic Fury's offensive phase has concluded. 'This is not an offensive operation; there's no shooting unless we're shot at first.' Rubio set Hormuz reopening plus Iranian nuclear concessions as the dual peace conditions and stated Tehran will not be allowed to control the strait.",
      impact:
        "Rubio's framing goes further than Trump's Truth Social post by formally declaring the offensive phase concluded and shifting ROE to defensive. The civilian principal alignment between Trump (pause) and Rubio (offensive over) gives Pakistan-channel and Beijing-track diplomacy renewed oxygen. Hegseth's 'ceasefire is not over' framing preserves the diplomatic fiction needed for Pakistani mediation. The 24-hour swing from Monday's 'blown off the face of the earth' to Tuesday's 'Epic Fury is over' brackets the kinetic option visibly.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Israel Hayom / Iran International / Türkiye Today / Life News Agency',
      event: "Pezeshkian publicly clashes with IRGC over Monday's UAE strikes — calls them 'completely irresponsible' and 'madness'; requests urgent meeting with Mojtaba Khamenei",
      summary:
        "Iranian President Masoud Pezeshkian described the Revolutionary Guards' missile and drone strikes on the UAE as 'completely irresponsible' and 'madness,' said they were carried out without government knowledge or coordination, and directed his anger at IRGC commander Ahmad Vahidi. Pezeshkian requested an urgent meeting with new Supreme Leader Mojtaba Khamenei to press for an immediate halt to IRGC attacks on Gulf states. The presidential administration's Mohsen Haji Mirzaei pushed back via state TV that 'there are no disputes' between Pezeshkian and the IRGC — itself a tell.",
      impact:
        "The most explicit civilian-military regime split of the war. The civilian track is publicly empowered — Pezeshkian's appeal directly to Mojtaba Khamenei tests whether the new Supreme Leader will side with the diplomatic line or the IRGC operational line. But the same rupture eliminates Iran's commitment credibility on any framework agreement; the IRGC's new Hormuz control zone and Vahidi's authority chain remain intact regardless of what Araghchi signs in Pakistan or Beijing. Coalition-cohesion clock deteriorates; this is now the dominant variable governing whether Tuesday's de-escalation surface holds.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'high',
      source: 'ANI / Daily Pakistan / Al Jazeera',
      event: "Araghchi frames 'Project Deadlock,' cites Pakistan-mediated talks 'making progress,' set to travel to Beijing for Wang Yi talks",
      summary:
        "Iranian Foreign Minister Seyed Abbas Araghchi cautioned the US against pursuing a military resolution: 'Events in Hormuz make clear that there's no military solution to a political crisis. As talks are making progress with Pakistan's gracious effort, the US should be wary of being dragged back into quagmire by ill-wishers. So should the UAE. Project Freedom is Project Deadlock.' Araghchi is set to travel to Beijing for talks with his Chinese counterpart Wang Yi.",
      impact:
        "Araghchi's 'Project Deadlock' framing is the diplomatic-track manifestation of the Pezeshkian civilian push. Pakistan-mediated talks 'making progress' aligns with Trump's 'Great Progress' framing on Truth Social — the surface diplomacy is reciprocally engaged. The Beijing visit activates the China track that has been latent since the April 7 UNSC veto with Russia. The four-mediator hub-and-spoke (Pakistan + Egypt + Turkey + Qatar) gains a fifth lane through Beijing.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC oil prices / CNN Business / Al Jazeera economy',
      event: "Brent crude eases to $113.54 Tuesday from Monday's $114.44 close; up >50% since war start; IMO ~20,000 seafarers stranded",
      summary:
        "Brent futures eased to $113.54 Tuesday from Monday's $114.44 close on the Trump pause / Rubio framing. Al Jazeera reports Brent up >50% since the war's late-February start with daily production shortfall ~14.5 million bbl/day. The IMO has said ~20,000 seafarers remain stranded on ~2,000 vessels in the Strait of Hormuz, calling the situation unprecedented in the modern era. CNBC frames the move as 'oil falls on ceasefire-in-place guidance.'",
      impact:
        "Tactical pullback inside a structural escalation curve. The kinetic-tail premium remains structural — Fujairah/ADCOP infrastructure damage cannot be priced out by a Trump pause. For Taiwan procurement, the floor remains $115-130 → $120-135 with Fujairah priced in; the kinetic-tail $130-$170 ceiling now carries an additional Iranian-commitment-credibility hazard premium reflecting the Pezeshkian-IRGC fracture. Asian importers should treat the kinetic-tail premium as priced-in rather than priced-out.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel liveblog May 5 / Antiwar.com',
      event: "Lebanon kinetic continues at lower intensity — Hezbollah rockets at IDF positions and a Hezbollah drone near IDF, no injuries; German FM Wadephul defends Israel's south-Lebanon posture",
      summary:
        "Hezbollah fired rockets at IDF positions in southern Lebanon in two incidents on May 5; the IDF reported the rockets struck near troops without causing injuries. A Hezbollah drone crashed near Israeli forces, also without casualties. German Foreign Minister Wadephul said Israel has 'every right' to be in south Lebanon while warning of war damages. Mladenov traveled Cairo to Israel for a meeting with Netanyahu the same day.",
      impact:
        "Lebanon track did not de-escalate in parallel with the Iran track. The lower kinetic intensity vs. Monday's Deir Seryan engagement reflects degraded Hezbollah operational tempo more than political restraint — Speaker Berri's no-negotiations declaration carries unchanged. German FM Wadephul's defense of Israel's south-Lebanon presence imports European political cover for IDF posture even as the broader US line softens. Track remains independently escalatory under the April 16 truce floor.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'UAE MOFA / Al Jazeera UN / Expat Media',
      event: "GCC + Bahrain-led 90+ country joint statement demands Iran halt actions; US-Bahrain-Saudi-UAE-Kuwait-Qatar table draft UNSC resolution",
      summary:
        "The UAE joined more than 90 countries in a joint statement led by Bahrain calling on Iran to immediately halt its actions and ensure unrestricted transit through the Strait in accordance with international law. UAE MOFA condemned the drone attack on the ADNOC-linked carrier and called for 'immediate and unconditional' Hormuz reopening. The US, Bahrain, Saudi Arabia, UAE, Kuwait, and Qatar drafted a UNSC resolution requiring Iran to cease attacks, mining, and tolling, and to disclose mine locations and cooperate with removal.",
      impact:
        "GCC architecture under direct test post-Fujairah strike — Voice of Emirates humanitarian framing now backed by procedural diplomacy. The Bahrain-led 90-country statement converts the Monday UAE attack into a multilateral instrument; the UNSC draft tests whether China and Russia will reapply the April 7 veto pattern given Araghchi's Beijing visit. The diplomatic surface is now a procedural escalator parallel to the Trump-Rubio civilian alignment.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA / WIA unchanged',
      status:
        "No new confirmed KIA Tuesday. Trump pauses Project Freedom 'for a short period' citing 'Great Progress' toward 'Complete and Final Agreement' with Iran (CNBC, NBC). Rubio: Operation Epic Fury offensive phase 'over' — 'no shooting unless we're shot at first' (TIME, Al Arabiya). Hegseth: 'the ceasefire is not over.' Blockade remains in full force. 15,000 service members maintain Hormuz posture under defensive ROE.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,594',
      delta: '+0 KIA / +0 WIA Tuesday',
      status:
        "No new KIA. Hezbollah rockets at IDF positions in two south-Lebanon incidents — struck near troops without injuries; Hezbollah drone crashed near Israeli forces, no casualties (Times of Israel liveblog May 5). German FM Wadephul defends Israel's south-Lebanon posture. Mladenov travels Cairo to Israel for Netanyahu meeting May 5. IDF at 'high readiness' posture across both Iran and Lebanon tracks.",
    },
    iran: {
      cumulative: "Iran LMO 'nearly 3,400' KIA · HRANA April 7: 3,636+ (1,701 civilians, 1,221 military, 254+ children) · Hengaw 6,620+ military · 3.2M displaced.",
      delta: 'No new confirmed casualty figures Tuesday',
      status:
        "Pezeshkian publicly clashes with IRGC over Monday's UAE strikes — 'completely irresponsible,' 'madness'; reported anger at IRGC commander Ahmad Vahidi; requests urgent meeting with Mojtaba Khamenei to halt IRGC attacks on Gulf states. Araghchi 'Project Deadlock' framing; set to travel to Beijing for Wang Yi talks. Iran IRIB: 'no pre-planned programme to attack' Fujairah, attributes to 'US military adventurism.' AlanChand USD-Remittance 1,818,000 IRR Tuesday (+0.28% vs Monday) — mild market reaction.",
    },
    other: {
      cumulative: 'Lebanon MOH: 2,663+ KIA / 8,183+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 11+3 injured Monday.',
      delta: 'No fresh casualties Tuesday',
      status:
        "UAE: Bahrain-led 90+ country joint statement demands Iran halt actions and ensure unrestricted Hormuz transit. UAE MOFA condemns drone attack on ADNOC-linked carrier; calls for 'immediate and unconditional' Hormuz reopening. US-Bahrain-Saudi-UAE-Kuwait-Qatar draft UNSC resolution. South Korea: HMM NAMU investigation 'several days'; Korea Maritime Safety Tribunal and National Fire Agency dispatched; Vanguard maritime risk weighs attack vs. mine vs. external object. Lebanon: no fresh casualties Tuesday after Monday's Deir Seryan/Kafra wounded.",
    },
  },
  exec:
    "Tuesday produced the de-escalation reversal of Monday's kinetic exchange. Trump paused Project Freedom 'for a short period of time' via Truth Social, citing 'Great Progress' toward a 'Complete and Final Agreement' with Iran; the blockade remains in full force while the pause runs (CNBC, NBC, Bloomberg, CBS News, Axios). Secretary of State Rubio went further at a White House briefing, declaring Operation Epic Fury's offensive phase 'over' — 'this is not an offensive operation; there's no shooting unless we're shot at first' — and shifting US posture to defensive while making Hormuz reopening the priority condition (TIME, Al Arabiya, NPR, Times of Israel). Inside Iran, the regime cohesion seam visibly tore: President Pezeshkian publicly attacked the IRGC over Monday's UAE strikes, calling them 'completely irresponsible' and 'madness' carried out without government coordination, and requested an urgent meeting with new Supreme Leader Mojtaba Khamenei to halt IRGC attacks on Gulf states (Israel Hayom, Iran International, Türkiye Today). FM Araghchi reframed the corridor as 'Project Deadlock,' cited Pakistan-mediated talks 'making progress,' and is set to travel to Beijing for Wang Yi talks (ANI, Daily Pakistan, Al Jazeera). Iran's IRIB said Iran had 'no pre-planned programme to attack' Fujairah, attributing the strike to 'US military adventurism.' Brent eased from Monday's $114.44 close to $113.54 Tuesday on the de-escalation framing (CNBC, CNN Business, Al Jazeera). Lebanon clashes continued at lower intensity — Hezbollah rockets and a drone landed near IDF without injuries; German FM Wadephul defended Israel's south-Lebanon posture (Times of Israel liveblog May 5). Hamas-Cairo Mladenov track stalled on disarmament sequencing; Mladenov went to Netanyahu (FDD/Long War Journal). AlanChand USD-Remittance held at 1,818,000 IRR Tuesday. Analytical judgment: 30-day ceasefire probability moves 8 → 12 — the diplomatic surface re-engaged after Monday's kinetic exchange, but the Pezeshkian-IRGC public rupture is a double-edged signal that Iran's commitment authority is fractured.",
  implications: [
    {
      title: "Trump's Project Freedom pause + Rubio's 'offensive phase over' framing converts Monday's kinetic exchange into the precipitating event for the most explicit US de-escalation signal since the April 8 ceasefire — but the pause is conditional on a deal being 'finalized and signed' with no public timeline",
      body:
        "Tuesday's US posture pivot was layered. Trump on Truth Social announced Project Freedom 'will be paused for a short period of time to see whether or not the Agreement can be finalized and signed,' explicitly citing 'Great Progress' toward a 'Complete and Final Agreement' with Iran while keeping the blockade 'in full force and effect' (CNBC, NBC, Bloomberg, CBS News, Axios). Rubio at the White House went further than the Truth Social framing by declaring Operation Epic Fury's offensive phase 'over' — 'this is not an offensive operation; there's no shooting unless we're shot at first' — and made Hormuz reopening plus Iranian nuclear concessions the dual peace conditions (TIME, Al Arabiya, NPR, Times of Israel, Al Jazeera). Hegseth maintained that 'the ceasefire is not over' despite Monday's UAE strikes and Hormuz kinetic exchange, preserving the diplomatic fiction needed for Pakistan-channel mediation to continue. The pause is structurally fragile because Trump explicitly conditioned it on agreement finalization; the blockade and 15,000-troop Hormuz posture remain in place, so reactivation is one Truth Social post away. The Project Freedom pause also resolves the Adm. Cooper 'today we saw just six' question — Iran's restraint on small-boat deployment Monday is now retroactively legible as space-creating for Tuesday's diplomatic re-engagement rather than degraded capability. Analytical judgment: Trump's 'blown off the face of the earth' Monday rhetoric and Rubio's Tuesday 'Epic Fury is over' framing bookend a 24-hour US doctrine swing that prices the kinetic option visibly while reopening the diplomatic surface; the dominant variable governing whether the pause becomes a durable cease is now the Iranian regime cohesion question, not the US escalation calculus. Probability move 8 → 12 reflects this asymmetric uncertainty.",
    },
    {
      title: "Pezeshkian's public rupture with the IRGC over Monday's UAE strikes is the most explicit civilian-military regime split of the war — it simultaneously revives the civilian negotiating track and eliminates Iran's commitment credibility on any framework agreement",
      body:
        "President Pezeshkian's reported attack on the IRGC over the UAE missile and drone strikes is structurally distinct from any prior regime-cohesion signal. He called the strikes 'completely irresponsible' and 'madness,' said they were carried out without government knowledge or coordination, directed his anger at IRGC commander Ahmad Vahidi, and requested an urgent meeting with new Supreme Leader Mojtaba Khamenei to halt IRGC attacks on Gulf states (Israel Hayom, Iran International twice, Türkiye Today, Life News Agency). The presidential administration's Mohsen Haji Mirzaei pushed back via state TV that 'there are no disputes' between Pezeshkian and the IRGC — itself a signal that the dispute exists and is destabilizing enough to require denial. Araghchi's 'Project Deadlock' framing and his travel to Beijing for Wang Yi talks are the diplomatic-track manifestation of the same civilian push. The cross-cutting effect on framework convergence is asymmetric. On the upside, the civilian track has been publicly empowered — Pezeshkian's appeal directly to Mojtaba Khamenei tests whether the new Supreme Leader will side with the diplomatic line or the IRGC operational line on which his April 30 directive was built. On the downside, Pezeshkian's framing that the IRGC strikes 'bypassed the government entirely' eliminates the pretense that any Iranian negotiator can credibly commit; the IRGC's new Hormuz control zone and Vahidi's authority chain remain intact regardless of what Araghchi signs in Pakistan or Beijing. Analytical judgment: under the multi-clock framework, the negotiation-capacity clock improves on Pezeshkian-Araghchi diplomatic re-activation, but the coalition-cohesion clock deteriorates because Iran's internal command structure now publicly forks; the question of whose signature binds Iran is unresolved and is the dominant constraint on framework durability.",
    },
    {
      title: "Brent's $114.44 → $113.54 Tuesday pullback prices the de-escalation framing but the kinetic-tail premium is structural — Fujairah/ADCOP infrastructure damage, IRGC Hormuz zone, and Pezeshkian-IRGC fracture compound the Asian-importer procurement problem rather than resolve it",
      body:
        "Brent's roughly $1 Tuesday pullback from Monday's $114.44 close to $113.54 reflects a market reading the Trump pause and Rubio 'offensive over' framing as a step away from Monday's kinetic-exchange ceiling (CNBC, CNN Business, Al Jazeera economy). But the structural premium remains. Al Jazeera notes Brent up >50% since the war's late-February start with daily production shortfall ~14.5 million bbl/day; the IMO reports ~20,000 seafarers stranded on ~2,000 vessels in the strait — a humanitarian-and-logistics fact the diplomatic surface cannot dissolve overnight. Fujairah's ADCOP/VTTI bypass-terminal damage from Monday's drone strike is physical infrastructure that cannot be priced out by a Trump pause; UAE MOFA's 'immediate and unconditional' reopening demand and the Bahrain-led 90+ country statement are diplomatic instruments that depend on the same Iranian commitment credibility now fractured by Pezeshkian's public IRGC attack (UAE MOFA, Al Jazeera UN). For Taiwan's energy procurement, the Tuesday pullback does not change the structural picture: the floor remains $115-130 → $120-135 with Fujairah priced in; the kinetic-tail $130-$170 ceiling now carries an additional Iranian-commitment-credibility hazard premium reflecting the Pezeshkian-IRGC fracture. CPC procurement floor at $135 for no-Hormuz-through-October is intact. TSMC 2026 CapEx pricing must now account for a third risk vector — not just Hormuz transit and bypass-infrastructure, but framework-collapse-from-Iranian-internal-fracture even after a US-Iran agreement is signed. The HMM NAMU investigation extension to 'several days' and the Vanguard mine-vs-attack analytical menu add a transit-mechanical-uncertainty floor underneath flag-state risk that no diplomatic surface can resolve. Analytical judgment: Tuesday's market move is a tactical pullback inside a structural escalation curve; Asian importers should treat the kinetic-tail premium as priced-in rather than priced-out, and the Iranian-commitment-credibility hazard as a new structural variable on the procurement curve through Q3.",
    },
  ],
  casualtyNotes: {
    us: "No new confirmed KIA Tuesday. Trump pauses Project Freedom 'for a short period' citing 'Great Progress' toward complete agreement with Iran. Rubio: Operation Epic Fury offensive phase 'over' — 'no shooting unless we're shot at first.' Hegseth: 'the ceasefire is not over.' Blockade remains; 15,000 service members hold Hormuz posture under defensive ROE.",
    israel:
      "No new KIA. Hezbollah rockets and a drone landed near IDF positions in south Lebanon, no injuries. German FM Wadephul defends Israel's south-Lebanon posture, warns of war damages. Mladenov travels Cairo to Israel for Netanyahu meeting May 5.",
    iran:
      "Pezeshkian publicly clashes with IRGC over UAE strikes — 'completely irresponsible,' 'madness'; anger at IRGC commander Vahidi; urgent meeting with Mojtaba Khamenei to halt IRGC Gulf strikes. Araghchi 'Project Deadlock'; Beijing-bound for Wang Yi talks. IRIB: 'no pre-planned programme' on Fujairah. AlanChand USD-Remittance 1,818,000 IRR Tuesday.",
    other:
      "UAE: Bahrain-led 90+ country joint statement; UAE MOFA 'immediate and unconditional' Hormuz reopening; UNSC draft resolution by US-Bahrain-Saudi-UAE-Kuwait-Qatar requiring Iran to cease attacks, mining, tolling. South Korea: HMM NAMU investigation 'several days'; Vanguard weighs attack vs. mine vs. external object. Lebanon: no fresh casualties Tuesday after Monday's Deir Seryan/Kafra wounded.",
  },
};

export default data;
