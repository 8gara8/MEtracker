import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating even as the Kuwait tripwire stays uncrossed. CENTCOM broke its silence to deny Iran's claim, posting that no US aircraft were destroyed or damaged and that all missiles and drones were intercepted or failed to reach their targets (Al Jazeera, Ynet). The de-escalatory read stops there: US media reports of an imminent US-Israeli offensive on Iranian energy sites drew a Tasnim warning that Tehran holds 'extensive response plans' to hit regional energy, and Rubio hardened the US line (Al Jazeera, Fox News). Per §3.5.3 both strike claims are carried as claims; the exchange stays self-sustaining and the escalation has migrated from the Gulf-base tripwire to infrastructure threats.",
      risk7d:
        "Seven-day risk holds critical. The immediate tripwire eased — CENTCOM's denial means no confirmed US death and no trigger for Trump's 'bridge or power plant per ship' rule — but the energy board replaced it. Reports of a US-Israeli offensive against Iranian energy sites and Iran's pledged 'extensive response plans' put the symmetric infrastructure ladder (§3.5.6) at the center of the week, and per §3.5.6 the next strike need not produce a casualty to arm the pledge. A verified American death remains the dominant discrete risk and is now actively denied rather than merely unconfirmed; a US strike on an operating Iranian energy or nuclear site is the fresh near-term catalyst.",
      spillover:
        "Spillover holds critical. Brent held near $90 into the weekend, its biggest monthly gain of the war, even as CNBC reported Hormuz crude flows partly recovering and the IRGC turned back tankers (Trading Economics, CNBC). The Hormuz fee hardened — Iran rejects Oman's voluntary plan and demands both lanes while Rubio reaffirms toll-free — and the window runs toward mid-August (TechTimes, Arab News). The Houthi embargo of Saudi Arabia held at Bab el-Mandeb with cargoes diverting, and Trump's tariff push threatens to narrow Iran's buyers toward China. The war spans Iranian soil, Gulf bases and both maritime chokepoints at once.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CENTCOM / Al Jazeera / Ynet',
      event:
        "CENTCOM broke its silence on Iran's Kuwait claim, posting on X that 'no US aircraft were destroyed or damaged in recent attempted Iranian attacks' and that 'all missiles and drones were intercepted or failed to reach targeted areas' — an explicit denial of the damage Iran's Army claimed at the US-used Ahmad al-Jaber airbase in Kuwait.",
      summary:
        "Per §3.5.3 Day 155's claim-versus-silence gap becomes claim-versus-denial: Tehran asserts a successful strike and one death, Washington says nothing landed, and the confirmed US KIA ledger holds at 17.",
      impact:
        "No verified American death means Trump's 'bridge or power plant per ship' rule stays holstered; the near-term tripwire eases even as the war does not.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Tasnim / Al Jazeera / Iran International',
      event:
        "As US media reported an imminent US-Israeli offensive against Iranian civilian and energy infrastructure, a senior Iranian security official told Tasnim the reports were 'a kind of madness' and warned Tehran had prepared 'extensive response plans' to strike regional energy 'in which the United States has interests.'",
      summary:
        "Per §3.5.6 the symmetric infrastructure ladder becomes the dominant escalation vector; each side has pre-committed to the other's energy assets.",
      impact:
        "A US strike on an operating Iranian energy or nuclear site — or an Iranian strike on Gulf energy — now needs no casualty to arm the pledge; the next strike sets the ladder in motion.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'TechTimes / Arab News / NBC News',
      event:
        "Iran's lead negotiator Ghalibaf rejected Oman's voluntary-fee compromise and demanded Iranian control over both Strait of Hormuz shipping lanes, insisting the strait will not return to pre-war terms; Oman's FM reiterated it does not support any charge and Secretary Rubio reaffirmed the strait stays toll-free under any final deal.",
      summary:
        "Per §3.5.3 process is moving against agreement: the fee's would-be broker is now rejected outright and the compromise is squeezed from both ends as the mid-August window nears.",
      impact:
        "The most-developed diplomacy of the war heads into its deadline harder, not softer — Iran maximalist, Oman opposed, the US 'illegal' — with no sponsor for a middle path.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / Iran International / Kpler',
      event:
        "Trump pressed Congress to add tariffs on Iran to the bipartisan Russia-Iran sanctions bill despite negligible US-Iran trade; analysts called the move largely symbolic and warned it could imperil the wider bill, noting Iran already exports about 1.3M bpd almost entirely to China at steep discounts.",
      summary:
        "Per §3.5.5 the tariff gambit is economic signaling more than leverage: it narrows Iran's buyers toward China rather than isolating Tehran's partners.",
      impact:
        "Secondary pressure deepens Iran's China dependence and tightens the same Asian crude-and-LNG market Taiwan competes in, without materially cutting Iranian barrels.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Trading Economics / CNBC / Al Jazeera',
      event:
        "Brent crude held near $90 into the weekend after a Friday close of $90.12, keeping its biggest monthly gain of the war above 20%, even as CNBC reported Strait of Hormuz crude flows partly recovering; the IRGC turned back two tankers and four others altered course during the week.",
      summary:
        "Per §3.5.5 the partial flow recovery is a countervailing signal on the tape, but the ~$25 war premium over the pre-war baseline holds and the $150-200 dual-closure tail is one sinking away.",
      impact:
        "Weekend markets carry the premium into Monday; a US energy-site strike or a laden-tanker sinking is the next repricing catalyst.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta: "+0 confirmed; CENTCOM denies any aircraft damage or losses at Ahmad al-Jaber and says all drones and missiles were intercepted or failed to reach their targets",
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. On Day 156 CENTCOM broke its silence to deny Iran's Kuwait claim, posting that no US aircraft were destroyed or damaged and that all missiles and drones were intercepted or failed to reach their targets; the one death Kuwait reported at Ahmad al-Jaber now sits against an explicit US denial and remains unconfirmed and of undetermined nationality. Per §3.5.3 the US KIA figure does not move — a verified American death is the single event that would trigger Trump's 'bridge or power plant per ship' rule, and it has now been actively denied rather than merely unconfirmed. The three deaths that lifted the toll to 17 (one in northern Iraq, two at Muwaffaq Salti in Jordan) carry per Day 144; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties, but Israel is assessed to expect Iranian missile fire even if it does not initially join a new US offensive (Times of Israel). Israel remains outside the US-Iran framework and unbound by the Oman channel or any Hormuz corridor formula; its standing readiness to strike Iran again keeps a full-scale-campaign option live even as Washington runs the direct exchange. The Lebanon gap prior (§3.5.6) carries: operations against Hezbollah continue, the June 26 framework remains rejected, and cross-border fire persists with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: 'No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran threatens energy retaliation if its sites are hit',
      status:
        "No updated official Iranian toll issued on Day 156. The Qeshm Island deaths — a couple and their child, cited by Tehran as the trigger for the Kuwait strike — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Iran warned via Tasnim it holds 'extensive response plans' should the US or Israel strike its energy sites. The IAEA has run no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and, per Grossi, likely still at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched and Grossi's late-July claim of an Iranian invitation to inspect not yet borne out on the ground.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured (plus one unconfirmed at Ahmad al-Jaber, now denied by CENTCOM) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta: 'The lone Ahmad al-Jaber death is now contradicted by CENTCOM; no confirmed new deaths; the Houthi embargo produced no reported crew fatalities',
      status:
        "The single death reported at Kuwait's Ahmad al-Jaber airbase after the Iranian drone strike is now contradicted by CENTCOM's denial that anything reached its targets; it remains unconfirmed and of undetermined nationality, and the confirmed Kuwait baseline holds at 10 killed / 115 injured. The Houthi embargo of Saudi Arabia persisted at Bab el-Mandeb with Saudi cargoes still diverting — four tankers carrying about 3.8 million barrels turned back during the week — but no new crew fatalities were reported; a tanker-crew death or laden-tanker sinking remains the maritime tell most likely to reprice oil and trigger Trump's rule. Iraq holds 148+ KIA / 402+ WIA, and Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 156 turned on the silence breaking. CENTCOM answered Iran's Kuwait claim directly for the first time, posting that 'no US aircraft were destroyed or damaged in recent attempted Iranian attacks' and that 'all missiles and drones were intercepted or failed to reach targeted areas' (Al Jazeera, Ynet). That converts Day 155's claim-versus-silence gap into a clean claim-versus-denial: Tehran says its Friday drones hit hangars, satellite-communications systems and equipment warehouses at Ahmad al-Jaber; Washington says nothing landed (Mehr, Press TV). Per §3.5.3 both are carried as claims, but the confirmed US KIA ledger stays at 17 — no American death, no trigger for Trump's 'bridge or power plant per ship' rule, and the one death Kuwait reported now sits against an explicit US denial. The escalation instead moved to infrastructure. US media reports of an imminent US-Israeli offensive against Iranian civilian and energy sites drew a warning from a senior Iranian security official, via Tasnim, that such strikes would be 'a kind of madness' and that Tehran holds 'extensive response plans' to hit regional energy 'in which the United States has interests' (Al Jazeera, Iran International). Rubio hardened the line, saying Iran faces 'a different kind of president' (Fox News). The Hormuz fee fight sharpened: Iran now rejects even Oman's voluntary-fee plan and demands control of both shipping lanes, while Rubio reaffirmed the strait stays toll-free under any deal (TechTimes, Arab News). Brent held its biggest monthly gain of the war near $90 into the weekend (Trading Economics). Direction stays escalating; seven-day risk critical; spillover critical; the thirty-day ceasefire probability eases to 8.",
  implications: [
    {
      title: 'The silence breaks — CENTCOM denies, and the tripwire stays uncrossed',
      body:
        "For a day the war's most consequential fact was a question Washington would not answer; on Day 156 it answered. CENTCOM posted that 'no US aircraft were destroyed or damaged in recent attempted Iranian attacks' and that 'all missiles and drones were intercepted or failed to reach targeted areas' — an explicit denial of the damage Iran's Army claimed at the US-used Ahmad al-Jaber airbase in Kuwait (Al Jazeera, Ynet). Under the multi-clock framework the exchange stays self-sustaining — the US heavy wave drew Iran's Gulf-base answer — but the confirmed-death tripwire has, on the record, not been crossed. Analytical judgment: per §3.5.3 this is the cleanest illustration of the discipline the series was built on. Tehran asserts a successful strike and, via Kuwait, one death; CENTCOM asserts nothing reached its targets. Both are claims; the US KIA figure holds at 17 and Trump's 'bridge or power plant per ship' pledge stays holstered because the event that arms it — a verified American death — has not been confirmed and has now been actively denied. The denial does not de-escalate the war, but it does lower the near-term probability that the infrastructure ladder fires this week. Two caveats hold the line short of relief: CENTCOM's 'intercepted or failed' framing is itself an interested claim from a party with every reason to project invulnerability, and the Pentagon's reported drawdown of its Kuwait footprint (§3.5.6) sits awkwardly beside a claim of flawless defense. The gap has narrowed from silence to denial; it has not closed.",
    },
    {
      title: 'Escalation moves to the energy board — strike threats, a hardening fee, a tariff gambit',
      body:
        "With the Kuwait tripwire unsprung, the escalation migrated to infrastructure. US media reports of an imminent US-Israeli offensive against Iranian civilian and energy sites drew a public warning, via Tasnim, from a senior Iranian security official that such strikes would be 'a kind of madness' and that Tehran holds 'extensive response plans' to hit regional energy 'in which the United States has interests' (Al Jazeera, Iran International). Analytical judgment: per §3.5.6 the symmetric infrastructure ladder is now the dominant escalation vector — each side has pre-committed to hitting the other's energy assets, so the next strike need not produce a casualty to arm the pledge. At Hormuz the fee fight hardened rather than eased: Iran's Ghalibaf now rejects even Oman's voluntary-fee formula and demands control of both shipping lanes, while Rubio reaffirmed the strait stays toll-free under any final deal — leaving the mediator's compromise squeezed from both ends as the sixty-day window runs toward its mid-August expiry (TechTimes, Arab News, NBC News). Per §3.5.3 that is process moving against agreement. Washington opened a third front on the economic board: Trump pressed Congress to bolt Iran tariffs onto the Russia-Iran sanctions bill, a gesture analysts call largely symbolic — the US imports almost nothing from Iran, and Tehran already ships about 1.3M bpd almost entirely to China (CNBC, Iran International). The market kept the premium on: Brent held near $90 into the weekend, its biggest monthly gain of the war, even as Hormuz flows partly recovered (Trading Economics, CNBC).",
    },
    {
      title: 'Taiwan: the fee hardening is the thread that reaches Taipei',
      body:
        "No fresh Taiwan-specific development landed on Day 156, but the day's two energy moves both run straight at Taiwan's exposure, so the standing assessment is reasserted rather than repeated generically (§3.5.10). Analytical judgment: per §3.5.5 the Hormuz fee's hardening is the development that most directly reaches Taipei. Iran's shift from a contested voluntary fee to a demand for control of both lanes pushes the strait further toward the 'fee-and-permission' regime through which about a third of Taiwan's 23.6 Mt of LNG — nearly 8 Mt from Qatar — must pass. Taiwan is 99% import-dependent for gas and holds only about eleven days of gas inventory against roughly 120 days of oil cover; landed LNG has run from ~$10/MMBtu in February to ~$17, and spot reliance sits at 60-65% after Taipei lost oil-indexed Qatari volumes, with the Ras Laffan force majeure still capping ~17% of Qatar's capacity for three to five years (CSIS, OilPrice, Atlantic Council). The crude side cushions — roughly 60% of oil imports are now US-sourced — but the Trump tariff push points the other way: by narrowing Iran's buyers toward China it tightens the same Asian LNG and crude market Taiwan competes in. Per §3.5.10 the day neither closes the gas gap nor removes the permission regime, and the statutory fourteen-day buffer does not arrive until 2027.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds 17 KIA / 432 WIA (AP/CENTCOM series). CENTCOM broke its silence to deny Iran's Kuwait claim — no aircraft destroyed or damaged, all drones and missiles intercepted or failed — so the one death Kuwait reported now sits against an explicit US denial. Per §3.5.3 the US KIA figure does not move until confirmed; a verified US death triggers Trump's 'bridge or power plant per ship' rule. $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties; Israel is assessed to expect Iranian missile fire even if it does not initially join a new US offensive. It stays outside the US-Iran framework and the Oman channel; the Lebanon gap prior carries — operations against Hezbollah continue, June 26 framework rejected, no ceasefire.",
    iran:
      "No fresh official MOH toll; the Qeshm civilian deaths and destroyed Jask desalination plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Tehran threatens 'extensive response plans' if its energy sites are hit. IAEA no verification since Feb 28; HEU likely Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "The lone Ahmad al-Jaber death is now contradicted by CENTCOM; confirmed Kuwait baseline holds 10 killed / 115 injured. The Houthi embargo of Saudi Arabia produced no reported crew fatalities; ~3.8M barrels of Saudi cargo turned back; Iraq 148+ KIA / 402+ WIA; Lebanon source-split. A tanker-crew death is the maritime tell.",
  },
};

export default data;
