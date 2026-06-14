import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 108 turns de-escalating for the first time since the April 8 ceasefire. Trump declared the deal 'now complete,' ordered the US naval blockade to leave Hormuz — the first US drawdown action of the war — and Pakistan announced an agreement terminating military operations 'on all fronts, including Lebanon,' with signing set for Friday in Switzerland (PBS/AP, RFE/RL). Per §3.5.3 this is a mediator's declaration, not a landed signature: full terms were unreleased and Iran signaled no final decision (Times of Israel). The trajectory is genuinely down, but conditional on the Friday signature landing and the Lebanon front holding.",
      risk7d:
        "Seven-day risk is now conditional rather than critical, but bimodal on two live triggers. The negotiation-capacity and active-deadline clocks are at their strongest of the war, pointed at a dated Friday signing in Switzerland; the blockade-end order is concrete de-escalation. Against that: the signature has not landed, the nuclear core is deferred with ~440.9 kg of 60% HEU now sealed in mined tunnels, and Israel's Beirut strike drew an 'imminent' Iranian-response threat. A landed signature converts the week to ceasefire; an Iranian salvo over Beirut, or a collapse on terms before Friday, repeats the Day 51 reversal.",
      spillover:
        "Spillover holds critical and is the day's hottest vector. Israel struck a Hezbollah command center in Beirut's Dahiyeh suburb — killing a commander and wounding four — after three Hezbollah drones crossed into northern Israel; Iran's Supreme National Security Council called its response 'imminent' and Israel braced for missile fire (Axios, Euronews, Times of Israel). Trump faulted the strike as something that 'should not have happened' and urged a stand-down. Pakistan's all-fronts-termination language covers Lebanon, but Israel is acting outside the deal — the §3.5.6 Israel-independence prior live in real time.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'PBS/AP / RFE/RL / Times of Israel',
      event:
        "Trump declared the deal 'now complete,' authorized an end to the US naval blockade of the Strait of Hormuz — 'Ships of the World, start your engines. Let the oil flow!' — and Pakistan announced the US and Iran had reached an agreement to end the war and reopen Hormuz, declaring 'the immediate and permanent termination of military operations on all fronts, including in Lebanon'",
      summary:
        "Pakistan said mediators would convene meetings this week to lay the foundation for technical talks; the formal signing is set for Friday, June 19, in Switzerland. Full terms were not released, and the deal largely returns the region to its pre-war status — but with thousands dead and Iran holding new leverage over Hormuz transits (PBS/AP, RFE/RL).",
      impact:
        "The blockade-end order is the first concrete US drawdown of the war — an action, not a claim — which earns the brief's single pivotal marker and a 17-point probability jump. Skeptical counter per §3.5.3: the announcement came from Pakistan and Trump, the text is unsigned until Friday, and Iran has not confirmed final terms. The binding test is now whether the Switzerland signature lands and the Lebanon guns fall silent.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Times of Israel / PBS / Arms Control Association',
      event:
        "The agreement is a declaration, not a signature: Iran signaled no final decision had been made, full terms were unreleased, and the nuclear core is deferred to a 60-day post-signing track rather than resolved",
      summary:
        "Iran has not committed to surrendering its ~440.9 kg of 60% HEU — an IAEA-flagged short step from weapons-grade — and Israeli and Republican critics call the terms no better than the 2015 JCPOA Trump abandoned (Times of Israel, PBS, Arms Control Association).",
      impact:
        "The §3.5.3 gap survives the announcement: a cessation-and-Hormuz package is signable Friday, but it disarms none of the war's stated nuclear aims. Analytical judgment: the weaponization clock has not moved even as the negotiation clock peaks; a deferred file is not a dismantled one.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Axios / Euronews / Times of Israel / Military.com',
      event:
        "The Lebanon front detonated on announcement day: Israel struck a Hezbollah command center in Beirut's Dahiyeh suburb — killing a commander and wounding four — after Hezbollah drones hit northern Israel; Iran's Supreme National Security Council warned its response was 'imminent' and Israel braced for missile fire",
      summary:
        "Trump faulted the Israeli strike, saying it 'should not have happened' on a 'special day,' and urged Israel and Lebanon to cease attacks; Iran was reportedly mulling US incentives not to retaliate over Beirut (Axios, Euronews, Times of Israel).",
      impact:
        "The §3.5.6 Israel-independence prior materialized in real time: a deal that depends on Israeli compliance is structurally fragile, and Israel struck outside it on the day of the declaration. This is the fastest path back to escalation — an Iranian salvo over Beirut could collapse the ceasefire before Friday's signature.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Fortune / Inquirer / Bloomberg',
      event:
        "The deal fed directly into the G7: the 52nd summit at Évian-les-Bains (June 14–17) put Hormuz at the center, with Macron saying leaders would discuss the long-term reopening of the Strait on June 15 and Trump set to raise demining with allies",
      summary:
        "The UK and France have a mine-clearing plan backed by military experts from 15-plus countries, staged to deploy once a signature lands; reopening Hormuz to pre-war flow requires weeks of demining and field restarts even with full cooperation (Fortune, Inquirer, Bloomberg).",
      impact:
        "The multilateral demining architecture is the practical bridge between a signed MoU and an actually open Strait. Analytical judgment: a signature reopens Hormuz on paper; the physical chokepoint stays closed until the mines are cleared — the gap is weeks, not hours.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC / Yahoo Finance / House of Commons Library / EIA',
      event:
        "Oil extended its slide on the blockade-end order: Brent had already fallen below ~$86.50 — its lowest since early March — and the declared deal plus 'let the oil flow' pushed crude lower still",
      summary:
        "Analysts cautioned that reopening Hormuz to pre-war flow requires weeks of demining and field restarts, and the EIA's June outlook still frames the June–July average near $105; the China-Russia veto cover and ~37.7% Chinese share of Hormuz crude carry (CNBC, Yahoo Finance, House of Commons Library).",
      impact:
        "The energy-infrastructure clock improved for the first time on an action — the blockade-end order — rather than a forecast. Skeptical counter: the IRGC closure was physical, and the price fell faster than the Strait can actually open. Analytical judgment: relief is priced; flow is not yet restored.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (blockade-end order issued; no US casualties)',
      status:
        "No new US casualties. Trump ordered the US naval blockade to leave Hormuz — 'Ships of the World, start your engines' — the first US drawdown order of the war. Forces still hold the ~40-ship NCAGS Bahrain channel pending demining; the $24-25B frozen-asset release stays tied to performance metrics over a 60-day post-signing window. Sledgehammer stays shelved but un-stood-down; the signature is set for Friday, June 19, in Switzerland.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new IDF KIA (3 Hezbollah drones into northern Israel; Beirut strike in response)',
      status:
        "No confirmed new IDF KIA, but the Lebanon front turned hot: Israel struck a Hezbollah command center in Beirut's Dahiyeh — killing a commander and wounding four — after three Hezbollah drones crossed into northern Israel, and Israel braced for an 'imminent' Iranian response. Netanyahu, sidelined and critical of the deal, holds that all enriched uranium must leave Iran; Trump publicly faulted the Beirut strike.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new published (diplomatic day on the Iran front; domestic crackdown continued)',
      status:
        "No verified new mass toll; the day was diplomatic and rhetorical. Iran signaled no final decision even as state media relayed Pakistan's all-fronts-termination statement; Tehran has not committed to surrendering its ~440.9 kg of 60% HEU and CNN reports it sealed the stockpile in mined tunnels. The domestic crackdown continued — fresh arrests, sentences and property seizures of '100 traitors' in Isfahan. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH above 3,600 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+1 KIA / +4 WIA (Hezbollah commander killed, four wounded in Beirut Dahiyeh strike)',
      status:
        "Lebanon absorbed the day's only confirmed new toll: the Beirut Dahiyeh strike killed a Hezbollah commander and wounded four per an IDF official. Pakistan declared the war's termination 'on all fronts including Lebanon,' and Macron put Hormuz on the G7's June 15 agenda. The Lebanon Health Ministry war-cumulative carries above 3,600 killed / 10,044+ injured since March 2; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 108 is the morning after the war's biggest de-escalation since the April 8 ceasefire — and the morning Israel's strike on Beirut put it at risk. Late on Day 107, President Trump declared the deal 'now complete,' authorized an end to the US naval blockade — 'Ships of the World, start your engines. Let the oil flow!' — and Pakistan announced the US and Iran had reached an agreement to end the war and reopen the Strait of Hormuz, with both sides declaring 'the immediate and permanent termination of military operations on all fronts, including in Lebanon' (PBS/AP, RFE/RL). Analytical judgment, per §3.5.3: this is the firmest commitment of the war, but it is a mediator's declaration, not a landed signature. The formal signing is set for Friday, June 19, in Switzerland; full terms were not released; Iran signaled no final decision had been made (Times of Israel). The nuclear core is deferred, not resolved — Tehran has not committed to surrendering its ~440.9 kg of 60% HEU, which the IAEA flags as a short technical step from weapons-grade, and CNN reports Iran sealed the stockpile in mined tunnels (PBS, CNN via RFE/RL). And the Lebanon front detonated on announcement day: Israel struck a Hezbollah command center in Beirut's Dahiyeh suburb after Hezbollah drones hit northern Israel, Iran's Supreme National Security Council warned its response was 'imminent,' and Trump faulted the strike, saying it 'should not have happened' (Axios, Euronews, Times of Israel). 30-day ceasefire probability jumps to 50 from 33; direction turns de-escalating; the seven-day risk is conditional on whether the Friday signature lands and whether the Beirut strike triggers Iranian fire first.",
  implications: [
    {
      title:
        "The deal is declared 'complete' and the blockade ordered to end — the war's clearest inflection since April 8 — but a mediator's announcement is not a landed signature",
      body:
        "Day 107's binding test was whether a signature would land; it did not, but the framework leapt past it. Trump declared the deal 'complete,' ordered the US naval blockade to leave Hormuz, and Pakistan announced an agreement terminating military operations 'on all fronts, including Lebanon,' with the formal signing set for Friday in Switzerland (PBS/AP, RFE/RL). The blockade-end order is the first concrete US drawdown of the war — not a claim about intent but an action — which is why this earns the brief's single pivotal marker and a 17-point probability jump. Skeptical counter per §3.5.3, and it is the analytical core: the announcement came from Pakistan and Trump, full terms were not released, and Iran signaled no final decision had been made (Times of Israel). This is the Day 50 pattern inverted — there, optimism preceded the Day 51 collapse on terms; here a concrete drawdown order precedes an unsigned text. Under the multi-clock framework the negotiation-capacity clock is at its strongest reading of the war, but the active-deadline clock now points at Friday's Switzerland signing, and the four days between declaration and signature are exactly where the Day 51 reversal lived. Analytical judgment: the trajectory is genuinely de-escalating, but the war is not over until the signature lands and the guns on the Lebanon front actually fall silent.",
    },
    {
      title:
        "The nuclear core is deferred, not solved, and Israel's Beirut strike shows the deal's structural fault line is already live",
      body:
        "The agreement, as described, ends the war and reopens Hormuz while pushing the nuclear question into a 60-day post-signing track — a coherent, signable package, but one that resolves none of the war's stated casus belli. Tehran has not committed to surrendering its ~440.9 kg of 60% HEU; the IAEA flags it as a short step from weapons-grade, and CNN reports Iran sealed the stockpile in mined tunnels, letting it argue part is 'irretrievable' (PBS, CNN via RFE/RL). Israeli and Republican critics call the terms no better than the 2015 JCPOA Trump abandoned (PBS). The §3.5.6 priors held in real time: Israel's independence from the US-Iran framework materialized as a strike on Beirut's Dahiyeh — killing a Hezbollah commander — on announcement day, drawing an 'imminent' Iranian threat and a rare public Trump rebuke that the strike 'should not have happened' (Axios, Euronews, Times of Israel). Under the multi-clock framework the coalition-cohesion clock is deteriorating precisely as the negotiation clock peaks. Analytical judgment: a cessation-and-Hormuz signature is plausible Friday; a signature that disarms the weaponization clock is not evidenced, and the Lebanon flashpoint can reverse the ceasefire before the ink dries.",
    },
    {
      title:
        "Taiwan: the blockade-end order is the first real catalyst for the LNG case, but reopening Hormuz is weeks of demining away, not a switch",
      body:
        "For Taiwan, Day 108 is the first day the dominant LNG-vulnerability case has a concrete catalyst rather than a price signal. Trump's order for the blockade to leave Hormuz and Pakistan's all-fronts-termination declaration push crude lower — Brent had already hit ~$86.50, its lowest since early March, and 'let the oil flow' extended the slide (CNBC, Yahoo Finance). But §3.5.6 governs the structure: the IRGC's closure was physical, and reopening to pre-war flow requires weeks of mine clearance and field restarts even with full cooperation — the UK and France have a 15-plus-country demining plan staged for the moment a signature lands, and Trump is raising it at the G7's June 15 session (Fortune, Inquirer, Bloomberg). The EIA's June outlook still frames the June–July average near $105, and the China-Russia veto cover and ~37.7% Chinese share of Hormuz crude carry. Analytical judgment: the energy-infrastructure clock improved for the first time on an action rather than a forecast, but the chokepoint is closed until the mines are cleared — so the LNG-cover-through-September case holds, now with a dated reopening pathway to watch. TSMC's 2026 CapEx framework near 8% carries; the catalyst that revises the dominant case is a landed signature plus a demined Strait, both still ahead.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties; Trump ordered the blockade to leave Hormuz — the first US drawdown action of the war. Forces hold the ~40-ship NCAGS Bahrain channel pending demining; the $24-25B release stays tied to performance metrics over 60 days. Sledgehammer shelved but un-stood-down; signature set for Friday in Switzerland.",
    israel:
      "No confirmed new IDF KIA. Israel struck a Hezbollah command center in Beirut's Dahiyeh — killing a commander, wounding four — after three Hezbollah drones hit northern Israel, then braced for an 'imminent' Iranian response. Netanyahu, sidelined and critical of the deal, insists all HEU must leave Iran; Trump faulted the Beirut strike.",
    iran:
      "No verified new mass toll; the day was diplomatic. Iran signaled no final decision even as state media relayed Pakistan's termination statement; ~440.9 kg 60% HEU stays in Iranian hands, sealed in mined tunnels per CNN. Domestic crackdown continued (Isfahan '100 traitors' seizures). HRANA 3,636+ carries; 3.2M displaced.",
    other:
      "Lebanon absorbed the only confirmed new toll: +1 KIA (Hezbollah commander) / +4 WIA in the Beirut Dahiyeh strike. Pakistan declared termination 'on all fronts including Lebanon'; Macron put Hormuz on the G7's June 15 agenda. Lebanon MOH carries above 3,600 killed / 10,044+ injured since March 2; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
