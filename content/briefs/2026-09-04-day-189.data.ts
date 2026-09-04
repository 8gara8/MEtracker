import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 189 even as the kinetic exchange stayed paused for a second day. No confirmed new US strike wave landed, but per §3.5.3 read a second quiet day at this altitude as a plateau, not a turn: the war-crime front hardened rather than cooled — Iran's Red Crescent and Foreign Ministry raised the September 1 Kuhestak wedding-strike toll to as many as five killed, reported to include children aged four and sixteen, with more than sixty-eight wounded, and Tehran called it 'brutal.' The legitimacy contest moved to the Security Council, where a US-backed resolution condemning Iran's Strait of Hormuz shipping attacks carried with thirteen in favour while China and Russia abstained, both faulting the text for ignoring the strikes that triggered the war on February 28. Trump hardened, calling the barrage a 'very justified attack' and warning Iran would be 'totally wiped out' if it retaliated again. Beneath the diplomacy the economic war ran on, the China hinge intact and the major-bank blow now visibly pinned to Xi's September 24 White House visit; nothing on Day 189 reversed the return to force.",
      risk7d:
        "Seven-day risk holds extreme. The mine-laying / strike / retaliation cycle is paused, not closed, and is openly framed as policy — Trump's 'weeks of fighting' and 'much harder' warnings keep each Iranian mine attempt wired to a scheduled US reprisal even across two quiet days. The near-term tails stay loaded and no longer only kinetic: a laden-tanker loss in a mined and contested strait, a US casualty from an unintercepted missile, a strike on a Gulf host, or a named Chinese-bank designation could each fire inside the week. The Security Council vote adds a diplomatic tail — the China-Russia abstention signals the two powers will not let a shipping-condemnation resolution stand as cover for the strike campaign, and a parallel push to authorise defensive force stayed stalled behind them. The wedding-strike allegation, if independently verified, could force either a pause or an escalation depending on Washington's read of the coalition.",
      spillover:
        "Spillover holds critical. No new theater opened on Day 189, which is why it did not worsen outright, but the map is unchanged and wide: Iranian soil under recurring strikes, both maritime chokepoints, the Gulf host states directly targeted across the seventy-two-hour cycle, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front, and a formalized economic front wired to a US-China summit. What sharpened is the internationalization of the grievance: the wedding-strike claim moved from a bilateral charge to a Security Council fault line, with China and Russia converting it and the February 28 origin into a diplomatic instrument. Per §3.5.5 the reach still outran the damage — Jordan's and the Gulf's interceptors held across the retaliation with no verified new fatality — but the target set now spanning four-plus Arab states is the standing signal.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Barchart / NewsOnAir / Fox News',
      event:
        "The legitimacy contest moved to the Security Council: a US-backed resolution condemning Iran's attacks on Strait of Hormuz shipping carried with thirteen members in favour while China and Russia abstained, both faulting the text for making no reference to the US and Israeli strikes that triggered the war on February 28; a separate push to authorise the use of defensive force to protect shipping stayed stalled behind the same two powers.",
      summary:
        "Per §3.5.3 read the split vote as a partial US win blunted at the veto line — a shipping-condemnation neither Beijing nor Moscow would veto, paired with their refusal to bless force or to drop the war's February 28 origin from the record.",
      impact:
        "The coalition-cohesion and negotiation-capacity clocks move: Washington gets a paper condemnation of Iran's tactics but not the enforcement mandate, and China and Russia now have a Council record framing the war's origin as American aggression.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'KRDO/CNN / NBC News / NPR',
      event:
        "The kinetic exchange stayed paused for a second day — no confirmed new US strike wave landed into Day 189 — but Trump hardened his posture, calling the September 1 barrage a 'very justified attack' and warning Iran would be 'totally wiped out' and 'hit much harder' if it retaliated again; CENTCOM's Tuesday package had struck roughly a hundred air-defence, radar and maritime targets, including two Iranian government tankers hit directly for the first time.",
      summary:
        "Per §3.5.3 read the second quiet day as a plateau, not a de-escalation — the pause holds at altitude with the reprisal threat sharpened, not withdrawn, and the target class widened to tankers.",
      impact:
        "The negotiation-capacity clock gained no time; a plateau this high slides back to fire on the next mine attempt or intercept failure, and 'totally wiped out' raises the rhetorical ceiling.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Irish Times / KRDO/CNN / The New Arab',
      event:
        "The civilian-casualty front hardened: Iran's Red Crescent and Foreign Ministry raised the toll from the September 1 Kuhestak wedding strike to as many as five killed — reported to include children aged four and sixteen — with more than sixty-eight wounded, and the Foreign Ministry called the attack 'brutal' and vowed the US would 'regret its new attacks'; CENTCOM's Day-188 non-denial stood.",
      summary:
        "Per §3.1 dual-sourcing the toll is surfaced and now upgraded but still not independently verified and not folded into the MOH aggregate; the two-to-five-killed range is itself the contested signal.",
      impact:
        "The humanitarian-escalation and coalition-cohesion clocks move: a hardening civilian toll on the strait's coastline deepens the legitimacy cost of each further strike and feeds the China-Russia Council narrative.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Vantage Markets / Kpler / Trading Economics',
      event:
        "Markets and the strait held elevated and opaque: Brent traded in the low $90s, near $92 after a six-week high toward $95, while transit readings showed roughly eight vessels crossing in a twenty-four-hour window — four inbound, four outbound — with five of the eight running dark on AIS, including a VLCC that surfaced from an eleven-day blackout before going dark again; Kpler put Iranian exports near 135,000 barrels a day in August against 1.98 million in February.",
      summary:
        "Per §3.5.5 quantify the opacity: a marginal uptick from Tuesday's four crossings, but more than half unbroadcast — the strait functioning under a blackout regime, not reopening.",
      impact:
        "The energy vector's rupture tail stays loaded on a drained stock base: a laden-tanker loss in a mined strait, or a named major-Chinese-bank designation, still reprices Brent past $100 in a session.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'CFR / CNBC / Fortune / Al Jazeera',
      event:
        "The economic and diplomatic backdrop ran on beneath the pause: the major-Chinese-bank blow stayed deferred behind Xi Jinping's now-dated September 24 White House visit, with the CFR judging China holds 'the upper hand' and Trump unlikely to confront Beijing a month out even as Bessent warned any bank 'part of the ecosystem' that turns Iranian oil into money 'will be targeted'; Gaza held deadlocked on an eight-month multiphase disarmament roadmap, and the IAEA-Iran inspection modalities stayed a technical step short of verified access.",
      summary:
        "Per §3.5.6 the standing priors hold: the deferred China blow now pinned to a fixed summit date, the two-sided China trap, the Gaza sequencing deadlock, and the unverified nuclear file all persist unresolved.",
      impact:
        "The connected fronts neither eased nor were bound by the pause; the war widens on the water, in the sanctions arena, and in the legitimacy contest even on a day without new strikes.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 189 — a second day with no new US strike wave and no verified US combat casualty. Iran's Day-188 claim of American service members killed stays denied by two US officials and uncounted; CENTCOM's Tuesday package (~100 targets, two Iranian government tankers hit) drew roughly 25 Iranian missiles and drones, intercepted by Jordanian and Gulf air defenses",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 keep the combat figure and flag DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule. Day 189 added neither a claim nor a count — a second quiet day — but the exposure is unchanged: the escort convoy (~660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d) runs amid live fire with the USS George Washington on station, and CENTCOM's blockade holds at roughly eighty-six vessels rerouted, three disabled, two boarded. Trump's 'totally wiped out' warning and his reported appetite for periodic strikes keep a single unintercepted salvo one event away from triggering the reprisal rule. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of the November midterms.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front; no new Israeli fatalities or wounded there. Israel stayed offstage on the direct US-Iran exchange while its Gaza campaign held deadlocked and lethal — a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at least 1,100 (Al Jazeera) to 1,273 (Gaza health officials)",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Iran-front toll on Day 189. Israel was offstage on the US-Iran diplomacy but its own fronts stayed hot: the US-led Board of Peace roadmap now runs an eight-month, multiphase disarmament process implemented through reciprocal, independently verified steps, with the timetable for Israel's withdrawal still being finalized — the disarm-first / withdraw-first sequencing unresolved, Hamas holding it will not act until Israel withdraws, strikes since the October 10 ceasefire reaching at least 1,100 per Al Jazeera and up to 1,273 per Gaza health officials, a connected theater the series does not fold into the war-casualty cumulative. In Lebanon Israel kept striking Hezbollah and Hamas 'targets,' the threatened reprisal unexecuted, and UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "The contested wedding-strike toll hardened: Iran's Red Crescent and Foreign Ministry now put the Sep 1 Kuhestak strike at as many as five killed — reported to include children aged four and sixteen — and more than sixty-eight wounded, up from Day 188's four-to-five and 50+; Tehran calls it 'brutal.' Per §3.1 dual-sourcing it is surfaced and upgraded but held pending independent verification, not folded into the MOH headline; Sep 1 military casualties (16 minelayers, IRGC coastal sites) remain unreleased",
      status:
        "The official Iranian war toll carries pending an update. The day's movement was on the contested civilian figure: Iran's Red Crescent and Foreign Ministry raised the September 1 Kuhestak wedding-strike toll to as many as five killed — reported to include children aged four and sixteen — with more than sixty-eight wounded, the Foreign Ministry calling the strike 'brutal' and vowing the US would 'regret its new attacks'; CENTCOM's non-denial stood. Per §3.1 dual-sourcing the claim is surfaced and now upgraded but held pending independent verification and not folded into the MOH aggregate; the two-to-five-killed range is itself the signal, and Sep 1 military casualties (sixteen minelayers, IRGC sites across Bandar Abbas, Chabahar, Qeshm, Konarak and Sirik) remain unreleased. Cumulative HRANA stands at 3,636+ with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Per §3.1 a separate and worsening rights thread is kept out of the war cumulative: UN High Commissioner Volker Türk tallied at least 56 executed since March 19, 27 tied to the January protests, 100+ at risk. The IAEA-Iran modalities stay a technical step, not verified access, with Iran's 'only after a deal' framing intact; the ~440.9 kg of 60% HEU plus ~184.1 kg of 20% stays unverified and likely at Isfahan, ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "The spillover ledger held critical without a confirmed new death: a second quiet day left the Gulf-host target set wide but unfired-on, Jordan's and Bahrain's and Iraq's air defenses having held across the Sep 1-2 retaliation with no verified fatality. Hormuz transits read ~8 (four in / four out, five dark on AIS); Brent held in the low $90s near $92; the standing maritime, Lebanon and Bab al-Mandeb tolls carry",
      status:
        "The 'other' ledger held critical in target set without a confirmed new death. The Gulf-host set stayed wide — Jordan, Bahrain, Kuwait and Iraq across the seventy-two-hour cycle — but the interceptors held and Day 189 added no verified fatality. Per §3.5.3 the standing Houthi Saudi-warship claim, the UAE ballistic-missile threat, and Iran's eight-MQ-9 and downed-MQ-9 claims stay logged, not counted. Hormuz commercial transit read about eight crossings against Tuesday's four, more than half unbroadcast, and war-risk premiums hold 3-10% of hull value; the Iran-Oman corridor's implementation stays clouded by fire. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. The maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbour bypass routes, partly realized in kind, remains the most acute widening path.",
    },
  },
  exec:
    "Day 189 held the kinetic pause for a second day while the war's center of gravity shifted to the legitimacy front. No confirmed new US strike wave landed, but the fallout from the September 1 Strait of Hormuz strikes hardened: Iran's Red Crescent and Foreign Ministry raised the Kuhestak wedding-strike toll to as many as five killed — reported to include children aged four and sixteen — and more than sixty-eight wounded, calling the attack 'brutal' (Irish Times, The New Arab). Per §3.1 the toll is surfaced but still unverified and not folded into the MOH aggregate. The contest moved to the Security Council, where a US-backed resolution condemning Iran's Hormuz shipping attacks carried with thirteen in favour while China and Russia abstained — both faulting the text for ignoring the strikes that triggered the war on February 28 (Barchart, Fox News). Trump hardened, calling the barrage a 'very justified attack' and warning Iran would be 'totally wiped out' if it retaliated again (KRDO/CNN). Beneath the diplomacy the economic war ran on: the major-Chinese-bank blow stayed pinned behind Xi Jinping's now-dated September 24 White House visit, the CFR judging Beijing holds 'the upper hand' a month out (CFR, CNBC). Brent held in the low $90s near $92 after a six-week high toward $95; transit readings showed about eight Hormuz crossings with five running dark on AIS — a marginal, opaque uptick from Tuesday's four (Vantage, Kpler). Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 3.",
  implications: [
    {
      title: "The legitimacy front moves to the Security Council — a vote Washington can win and still lose the argument",
      body:
        "The war-crime allegation that dominated Day 188 did not fade on Day 189 — it institutionalized. Iran carried its charge that the September 1 strike killed civilians at a wedding in Kuhestak to the United Nations, and the Security Council took up the crisis, passing a US-backed resolution condemning Iran's attacks on Strait of Hormuz shipping with thirteen votes in favour and China and Russia abstaining (Barchart, Fox News). Per §3.5.3 read the vote on both sides of the ledger: Washington secured a Council condemnation of Iran's tactics that neither Beijing nor Moscow would veto, but the abstentions carried a pointed rationale — the text made no reference to the US and Israeli strikes that triggered the war on February 28, and a parallel push to authorise defensive force to protect shipping stayed stalled behind the same two powers. Under the multi-clock framework the coalition-cohesion and negotiation-capacity clocks are the movers: the US wins a paper condemnation of Iran's shipping attacks but not the enforcement mandate it wanted, and China and Russia now hold a Council record framing the war's origin as American aggression. Analytical judgment: the Security Council became the arena the wedding strike opened — a venue where Washington can carry a vote and still lose the argument, and where the coalition it spent August assembling meets the counter-narrative Beijing and Moscow have every incentive to keep alive.",
    },
    {
      title: "A second quiet day is not a close — the plateau holds and the rhetoric climbs",
      body:
        "A second consecutive day without a confirmed US strike wave is not a de-escalation; per §3.5.3 it is a plateau holding at altitude. Trump did not soften — he hardened, calling the September 1 barrage a 'very justified attack' and warning Iran would be 'totally wiped out' and 'hit much harder' if it retaliated again (KRDO/CNN, NBC News). The pause sits on top of a Tuesday package CENTCOM described as roughly a hundred air-defence, radar and maritime targets, including two Iranian government tankers struck directly for the first time — a widening of the target class, not a winding-down. The claim-vs-reality gap that has been the series' running signal held: transit readings showed about eight Hormuz crossings in a day against Tuesday's four, but five of the eight ran dark on AIS, including a VLCC that surfaced from an eleven-day blackout before going dark again (Kpler, Vantage). Per §3.5.5 quantify: a marginal uptick under a blackout regime, Brent in the low $90s near $92, Iranian exports near 135,000 barrels a day against 1.98 million in February. Analytical judgment: the guns are quiet but the ladder is intact and the rhetorical ceiling just rose; a plateau this high, with 'totally wiped out' as the stated fallback, slides back to fire on the next mine attempt or intercept failure, and the negotiation-capacity clock gained nothing from the lull.",
    },
    {
      title: "Taiwan: the buffered month runs, and the financial clock now has a date",
      body:
        "Per §3.5.10 no Iran-front development aimed at Taipei landed on Day 189, but two calendars converged to sharpen the exposure. The physical one: September — the month Taiwan said in May it had gas cover 'through' — is now being drawn down with Brent near $92, Hormuz transits opaque and in the single-to-low-double digits, and the corridor clouded by fire (Energy Connects, Vantage). The financial one now has a date: the major-Chinese-bank sanction that would rupture the oil-for-money channel is pinned behind Xi Jinping's September 24 White House visit (CFR, CNBC), so the same late-September window that ends Taiwan's gas buffer also decides whether Washington fires its economic D-Day. Per §3.5.5 the arithmetic is unchanged and unforgiving: 95-99% import dependence, roughly a third of Taiwan's LNG through Hormuz with a large Qatari share, about eleven days of gas cover against some 120 of oil (CSIS). Analytical judgment: Taipei's early hedge toward US and Australian LNG and roughly 60% US crude was the right call, but a buffer is a countdown, not a solution — and the countdown now expires in the same fortnight the strait is thinnest and the bank decision comes due, a rare alignment of the physical and financial clocks on a single late-September date; only supply that does not pass Hormuz closes the gap.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. Day 189 was a second quiet day: no new US strike wave and no verified US combat casualty; Iran's Day-188 claim of American service members killed stays denied and uncounted. CENTCOM's blockade holds at ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire with the USS George Washington on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess ahead of the November midterms.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Iran-front toll. Israel was offstage on the US-Iran diplomacy but its Gaza campaign held deadlocked and lethal — the Board of Peace roadmap now runs an eight-month multiphase disarmament process on reciprocal, independently verified steps, the Israeli-withdrawal timetable still being finalized (a connected theater, not folded into the war cumulative; strikes since the October 10 ceasefire at least 1,100 per Al Jazeera, up to 1,273 per Gaza health officials). Hamas holds it will not act until Israel withdraws; the IDF-stays-until-Hamas-disarms line and Kushner's 30-day / 60-90-day timeline carry, a roadmap Netanyahu still calls 'problematic' before the October 27 election. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update. The day's movement was the contested civilian figure: Iran's Red Crescent and Foreign Ministry raised the Sep 1 Kuhestak wedding-strike toll to as many as five killed — reported to include children aged four and sixteen — and more than sixty-eight wounded, calling it 'brutal'; CENTCOM's non-denial stood. Per §3.1 dual-sourcing the claim is surfaced and upgraded but held pending verification, not folded into the MOH aggregate; Sep 1 military casualties remain unreleased. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The execution wave carries out of the war toll (UN's Türk: 56 since Mar 19, 100+ at risk). Iran's claims of US service members killed and eight MQ-9s destroyed stay logged, not counted (§3.5.3). The IAEA-Iran modalities stay a technical step, not verified access; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan.",
    other:
      "The spillover ledger held critical without a confirmed new death: a second quiet day left the Gulf-host target set wide but unfired-on, Jordan's and the Gulf's interceptors having held across the Sep 1-2 retaliation with no verified fatality. Per §3.5.3 the Houthi Saudi-warship claim, the UAE-missile threat and Iran's eight-MQ-9 and downed-MQ-9 claims stay logged, not counted. Hormuz transits read ~8 (four in / four out, five dark on AIS) against Tuesday's four; war-risk premiums 3-10% of hull; the Iran-Oman corridor stays clouded by fire. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange; Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat, partly realized in kind, is the most acute widening path.",
  },
};

export default data;
