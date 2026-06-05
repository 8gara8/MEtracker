import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 99 carries the war into its hundredth-day window with both poles of the Day 97 bifurcation intensifying at once. Iran track re-escalates kinetically: Iran's navy said it fired warning missiles and drones at US warships in the Gulf of Oman over US Navy 'harassing maritime traffic' and seizing tankers — first reported direct Iranian fire on US naval vessels since Day 96 (Al Jazeera, Washington Times); CENTCOM rejected it as 'FALSE,' no US warship fired on, no assets harmed (CENTCOM); the US struck Iranian radar and coastal sites after downing four drones near Hormuz, and the IRGC hit a vessel it called 'Panaya' after a US strike damaged an Iranian tanker (CNN, RFE/RL). Araghchi hardened red lines: US bases for 'any aggression' are 'legitimate targets'; a Beirut strike means 'full-scale resumption'; 'no tangible progress' but comms 'not cut off' (Naharnet, TRT World). Countervailing: Trump 'this weekend,' Rubio 'the war is over,' adviser says 'ball is in Trump's court,' 60-day MOU one signature short (CBS News, Axios). Lebanon: Aoun rebukes Iran as using Lebanon a 'bargaining chip' while Israeli strikes kill in Tyre and Hezbollah claims ~20 attacks. Direction holds mixed.",
      risk7d:
        "Seven-day risk holds critical. Active-deadline clock runs the arriving Day 99-100 weekend window (Jun 6-7) → Trump 'this weekend' deal yes/no → whether the near-signed 60-day MOU is approved or the Gulf naval exchange and US coastal strikes harden into renewed war → Senate WPR uptake (50-47 May discharge, no final vote scheduled). Kinetic-readiness clock re-escalates, erasing the Day 98 quiet on the Gulf of Oman exchange + US strikes on Iranian radar/coastal sites + four downed drones + the Panaya/oil-tanker exchange. Lebanon kinetic clock binds three actors' postures plus a new Iranian tripwire — Araghchi's Beirut 'full-scale resumption' red line against Katz's US-backed 'freedom of action' claim; binding test remains LAF pilot-zone deployment un-fired-upon through the week of Jun 22 reconvene.",
      spillover:
        "Spillover holds critical. Gulf of Oman naval exchange and US coastal strikes restore the dual-blockade collision as the live escalation engine; CENTCOM 'FALSE' vs Tasnim 'three destroyers fled' keeps the attribution contest open. Coalition cohesion worsens on two new seams: President Aoun's 'bargaining chip' rebuke splits the Lebanese state from Tehran, and Trump's 'Israeli forces will not move on Beirut' after a Netanyahu call is the first US-named restraint against the Katz Beirut posture. Lebanon casualties resumed — Israeli strikes killed civilians in Tyre, Hezbollah claimed ~20 attacks, IDF displacement orders for 9+ towns. Brent eased below the Day 98 print; ~40-ship NCAGS Bahrain channel persists against ~2,000 ships still stranded; PGSA $2M/transit yuan-billed continues; Lebanon MOH ~3,355-3,500 carries and rising.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Washington Times / Al Jazeera / CENTCOM / Tasnim',
      event:
        "Iran's navy said it fired warning missiles and drones at US warships in the Gulf of Oman; CENTCOM rejected the account as 'FALSE,' insisting no US warship was fired on and no personnel or assets were harmed — first reported direct Iranian fire on US naval vessels since the Day 96 salvo, reversing the Day 98 morning 'first quiet 24h' framing",
      summary:
        "Iranian state media said the IRGC navy fired on US warships in response to the US Navy 'harassing maritime traffic' and seizing commercial vessels and oil tankers under the US blockade of Iranian ports; Tasnim cited a senior source claiming three US destroyers came under fire and fled toward the Gulf of Oman. CENTCOM posted that the claim was FALSE — Iran did not fire at US warships, which would be a 'gross violation' of the ceasefire — and that no US personnel or assets were harmed. The two sides run rival blockades in the same waters.",
      impact:
        "Restores the dual-blockade collision as the war's live escalation engine after the Day 98 quiet. Skeptical counter per §3.5.3: the headline is itself a contested attribution — CENTCOM's flat denial against Iran's claim — so the 'event' is as much an information contest as a kinetic one; both capitals get an escalation narrative to run. Runs concurrently with the cycle's tightest deal signals, putting the kinetic-readiness and negotiation-capacity clocks in direct opposition inside 48 hours.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / RFE/RL / Tasnim',
      event:
        "The US struck Iranian radar and coastal sites Friday after downing four Iranian attack drones near the Strait of Hormuz, framed as a defensive response; Iranian media said the IRGC navy hit a vessel it called 'Panaya' with missiles after US forces damaged an Iranian oil tanker near the strait",
      summary:
        "The US military said it carried out strikes on Iranian radar sites following what it described as a defensive response to Iranian drone activity near the strait, after Iran launched four attack drones toward the waterway, all shot down. Iran said US forces damaged an Iranian oil tanker near Hormuz and that the IRGC navy struck a vessel it called 'Panaya' in response. The maritime tit-for-tat the Day 98 lull had briefly interrupted resumed in full.",
      impact:
        "Re-establishes the CENTCOM enforcement floor and the Iranian retaliatory pattern after US strikes. The Panaya/oil-tanker exchange names the precise single-strike event that would close the quiet NCAGS transit channel overnight — the standing risk flagged since the channel emerged. Skeptical counter: a contained radar/coastal strike framed as defensive is consistent with the Day 97-98 enforcement cadence rather than a decision to resume general war; no US personnel reported harmed.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Naharnet / TRT World / IRIB',
      event:
        "FM Araghchi hardened Iran's red lines: US bases used for 'any aggression against Iran' are 'legitimate targets,' and any attack on Beirut would lead to a 'full-scale resumption of the war' with Iran's armed forces 'ready to strike Israel'; he added communications with Washington 'have not been cut off' but 'no tangible progress' has been made",
      summary:
        "Araghchi told IRIB that US bases used for aggression against Iran are legitimate targets, citing weeks of attacks on Iranian and US assets in Gulf states. To Al Mayadeen he said any attack on Beirut would have 'grave consequences' and lead to a full-scale resumption, with Iran ready to strike Israel; that such an attack would mean the ceasefire was 'completely broken.' Parliament speaker and chief negotiator Ghalibaf had warned Tehran could abandon talks for confrontation if Israeli attacks on Lebanon continue.",
      impact:
        "Gives the Lebanon track its first explicit Iranian escalation trigger, directly answering Katz's Day 98 US-backed Beirut 'freedom of action' claim — a named tripwire rather than a posture. Skeptical counter: Araghchi simultaneously kept the channel open ('not cut off') and the threat is conditional on an Israeli Beirut strike Trump has now said will not happen; the red line may be deterrent signaling timed to the deal window rather than an imminent trigger. 'No tangible progress' remains the standing FM-level read against Trump/Rubio optimism.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'CBS News / Axios / Al Jazeera',
      event:
        "Deal-window signals were the cycle's tightest: Trump said progress could come 'this weekend'; Rubio told lawmakers 'the war is over' and that sanctions relief is conditional on Iran giving up nuclear activity, calling Mojtaba Khamenei 'increasingly engaged'; an adviser to Iran's supreme leader said 'the ball is in Trump's court'; the reported 60-day MOU still awaits Trump's approval",
      summary:
        "Rubio told Congress the war is over and that the US would grant sanctions relief only if Iran gives up its nuclear activity, describing Mojtaba Khamenei as increasingly engaged. CBS reported an adviser to the supreme leader saying the ball is in Trump's court. The reported 60-day MOU would reopen the Strait with no tolls, require Iran to clear its mines, lift the US blockade, and issue sanctions waivers — pending Trump's final approval. Trump put a possible deal 'this weekend.'",
      impact:
        "Political-will and negotiation-capacity clocks price a near-term yes/no inside the Day 99-100 weekend window — the symbolic hundred-day mark falls Sunday Jun 7. Skeptical counter per §3.5.3: 'the war is over' and 'this weekend' are interested-actor progress claims from the same camp whose 'over the weekend' framing has already rolled; the MOU is unconfirmed by Tehran; Araghchi's 'no tangible progress' is the last FM-level assessment; 'ball is in Trump's court' assigns the decision outward rather than committing.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Jazeera / Times of Israel / Lebanon Health Ministry',
      event:
        "President Joseph Aoun accused Iran of 'using Lebanon as a bargaining chip' in its US negotiations — the cycle-first Lebanese head-of-state public rebuke of Tehran — as Israeli strikes killed civilians in the southern city of Tyre, Hezbollah claimed roughly 20 attacks on Israeli troops, and the IDF ordered forced displacement of residents in at least nine southern towns; Trump said Israeli forces would not move on Beirut after a call with Netanyahu",
      summary:
        "Aoun's charge that Iran is using Lebanon as a bargaining chip is the first head-of-state rebuke of Tehran from inside the Lebanese state. Israeli strikes killed people in Tyre and elsewhere in the south Friday despite the truce; the Lebanon Health Ministry's war-cumulative toll (~3,355-3,500 since March 2) is rising. Hezbollah claimed around 20 attacks on Israeli troops; the IDF issued fresh forced-displacement orders. Trump said after a Netanyahu call that Israeli forces would not move on Beirut.",
      impact:
        "Reinforces the Day 98 logic that the Lebanese state, not Hezbollah, is the framework's load-bearing actor — and now publicly diverges from Tehran. Trump's 'won't move on Beirut' is the first US-named restraint against the Katz posture, narrowing the coalition-cohesion gap. Skeptical counter: the ~20 Hezbollah strikes and the Tyre civilian deaths show the kinetic loop is intact regardless of the diplomatic framing; the LAF pilot-zone durability test through the week of Jun 22 is unchanged.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (Gulf of Oman exchange sub-casualty; CENTCOM says no US assets harmed)',
      status:
        "No new US KIA. Iran's navy claimed it fired on US warships in the Gulf of Oman; CENTCOM rejected the claim as 'FALSE,' no US warship fired on, no personnel or assets harmed. The US struck Iranian radar and coastal sites after downing four Iranian drones near Hormuz. Trump held the 'this weekend' deal framing while restating that killing US troops would trigger renewed military action. Sledgehammer operational; prepared kinetic option unwithdrawn.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 99 KIA',
      status:
        "No confirmed new IDF KIA published. Hezbollah claimed ~20 attacks on Israeli troops in southern Lebanon Friday; the IDF ordered forced displacement in at least nine southern towns and continued strikes. Katz's Day 98 security-zone stay and US-backed Beirut 'freedom of action' framing carries; Trump said after a Netanyahu call that Israeli forces would not move on Beirut.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published Day 99',
      status:
        "No new published figures. Iranian media said the IRGC navy struck a vessel it called 'Panaya' after US forces damaged an Iranian oil tanker near the strait. Araghchi: US bases for 'any aggression' are 'legitimate targets'; a Beirut strike means 'full-scale resumption'; comms 'not cut off' but 'no tangible progress.' Hormuz past 96 days of effective closure.",
    },
    other: {
      cumulative:
        'Lebanon MOH ~3,355-3,500 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+ new Lebanese civilian deaths (Tyre and southern Lebanon) Friday — Lebanon toll resumed rising after Day 98 morning zero-log',
      status:
        "Lebanon casualties resumed after the Day 98 morning 'zero' log (corrected in the Day 98 evening flash): Israeli strikes killed civilians in Tyre and elsewhere in the south. President Aoun accused Iran of using Lebanon as a 'bargaining chip.' No new Gulf-state casualties published Day 99; Kuwait 1 KIA + 63 WIA (Day 97) and the two-staff embassy expulsion carry; Bahrain no casualties.",
    },
  },
  exec:
    "Day 99 carries the war into its hundredth-day window with both poles of the Day 97 bifurcation intensifying at once. The Iran track re-escalated kinetically: Iran's navy said it fired warning missiles and drones at US warships in the Gulf of Oman, accusing the US Navy of harassing maritime traffic and seizing tankers under the blockade (Al Jazeera, Washington Times); CENTCOM rejected the account as 'FALSE,' insisting no US warship was fired on and no personnel or assets were harmed (CENTCOM). The US separately struck Iranian radar and coastal sites after downing four Iranian drones near the Strait of Hormuz (CNN, RFE/RL) — reversing the Day 98 morning 'first quiet 24h' framing. FM Araghchi hardened Iran's red lines, calling US bases used for 'any aggression against Iran' legitimate targets and warning any attack on Beirut would trigger a 'full-scale resumption of the war,' while conceding 'no tangible progress' in talks though communications 'have not been cut off' (Al Jazeera, Naharnet, TRT World). Against that, the deal signals were the cycle's tightest: Trump said progress could come 'this weekend,' Secretary Rubio told lawmakers 'the war is over,' and an adviser to Iran's supreme leader said 'the ball is in Trump's court,' with the reported 60-day MOU still awaiting Trump's approval (CBS News, Axios). On the Lebanon track, President Joseph Aoun accused Iran of 'using Lebanon as a bargaining chip' — the cycle-first Lebanese head-of-state rebuke of Tehran — as Israeli strikes killed civilians in Tyre and Hezbollah claimed about 20 attacks on Israeli troops (Al Jazeera, Times of Israel). 30-day ceasefire probability holds at 14. Day 100 falls Sunday, June 7 — the symbolic hundred-day mark of Operation Epic Fury.",
  implications: [
    {
      title:
        "The Gulf of Oman naval exchange and US coastal strikes erase the Day 98 kinetic pause and re-establish the dual-blockade collision as the war's live escalation engine — even as the deal text sits one signature from completion",
      body:
        "The Day 98 'first quiet 24h since Day 96' lasted barely a news cycle: Iran's navy fire on US warships, US strikes on Iranian radar and coastal sites, four downed drones, and the Panaya/oil-tanker exchange restore the tit-for-tat the rival blockades make structurally recurring. The re-escalation runs concurrently with the cycle's tightest deal signals — Trump's 'this weekend,' Rubio's 'the war is over,' the near-signed 60-day MOU. Skeptical counter per §3.5.3: CENTCOM's flat 'FALSE' makes the headline a contested attribution, and 'the war is over' mid-negotiation is a claim, not a fact — Araghchi's 'no tangible progress' is the last FM-level read. The kinetic-readiness and negotiation-capacity clocks pull hard opposite inside 48 hours; the binding question is which resolves first across the weekend window.",
    },
    {
      title:
        "Araghchi's twin red lines — US bases as 'legitimate targets' and a Beirut strike as 'full-scale resumption' — convert Katz's Day 98 'freedom of action' claim into a named Iranian tripwire, and Aoun's 'bargaining chip' rebuke splits the Lebanese state from Tehran for the first time",
      body:
        "Araghchi gave the Lebanon track its first explicit Iranian escalation trigger: an Israeli Beirut strike is now publicly tied to resumed all-out war, directly answering the Katz/US-backed Beirut posture carried since Day 98. Trump's 'Israeli forces will not move on Beirut' after the Netanyahu call is the first US-named restraint against that posture — narrowing, not closing, the coalition-cohesion gap. Cutting the other way, President Aoun's charge that Iran is 'using Lebanon as a bargaining chip' is the cycle-first head-of-state rebuke of Tehran from inside the Lebanese state, reinforcing that the Lebanese state — not Hezbollah — is the framework's load-bearing actor. Skeptical counter: Hezbollah's ~20 strikes and the Tyre deaths show the kinetic loop is intact regardless of framing; the LAF pilot-zone durability test through the week of June 22 is unchanged.",
    },
    {
      title:
        "Taiwan: Brent eased below the Day 98 print and the quiet NCAGS transit channel persists, but the resumed Panaya/oil-tanker exchange names the precise risk to it; no fresh Taiwan-specific development — prior assessments unchanged",
      body:
        "Brent slipped below the Day 98 ~$97.95 print as markets priced the weekend deal-window, extending the marginal easing rather than reversing it. The structural picture is unchanged: the Strait sits past 96 days of effective closure, the ~40-ship NCAGS Bahrain channel remains the only durable post-Project-Freedom transit mechanism, and ~2,000 ships stay stranded. The Day 99 maritime exchange names exactly the single-strike event that would close the quiet channel overnight. PGSA $2M/transit yuan-billed continues; China ~37.7% of Hormuz crude. LNG cover through September and TSMC's 2026 CapEx framework-signature path near 8% carry unchanged. Analytical judgment: the energy-infrastructure clock holds critical with a marginally easing price and an intact-but-tested channel — no structural revision of the LNG-cover dominant case; a signed MOU with an unrestricted-Hormuz clause remains the only catalyst that would change it.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US KIA; Gulf of Oman exchange sub-casualty. CENTCOM: 'FALSE' that Iran fired on US warships, no assets harmed. US struck Iranian radar/coastal sites after downing four drones near Hormuz. Trump: 'this weekend' deal + kill-US-troops warning. Sledgehammer operational.",
    israel:
      "No confirmed new IDF KIA. Hezbollah claimed ~20 attacks on Israeli troops; IDF displacement orders for 9+ southern towns. Katz Day 98 Beirut posture carries; Trump said Israeli forces would not move on Beirut after a Netanyahu call.",
    iran:
      "No new published figures. IRGC said it struck a vessel ('Panaya') after a US strike damaged an Iranian tanker. Araghchi: US bases 'legitimate targets'; Beirut strike = 'full-scale resumption'; 'no tangible progress' but comms 'not cut off.' Hormuz past 96 days of closure.",
    other:
      "Lebanon casualties resumed after Day 98 morning zero-log — Israeli strikes killed civilians in Tyre and the south. Aoun: Iran using Lebanon a 'bargaining chip.' No new Gulf casualties; Kuwait 1 KIA + 63 WIA (Day 97) carries. Lebanon MOH ~3,355-3,500 rising.",
  },
};

export default data;
