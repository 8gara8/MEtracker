import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 104 is the sharpest escalation since the hundred-day mark: the attack pause collapsed into direct US-Iran exchange. Iran downed a US Army Apache over the Strait of Hormuz on June 9 (crew recovered, no casualties); CENTCOM struck Iranian air-defense and radar sites; Iran salvoed US bases in Bahrain, Kuwait, and Jordan; and the US struck Iran a second straight night across the south (NBC, Al Jazeera, Axios). The IAEA censure was adopted 21-3-10 and Iran moved to expand enrichment; the IRGC declared Hormuz closed to all vessels and Brent reversed back above $96. Direction holds escalating; seven-day risk raised to extreme.",
      risk7d:
        "Seven-day risk is raised to extreme: direct US-Iran kinetic exchange is back and running on a two-night tempo. The active-deadline clock fired — the censure was adopted as the Board sat through June 12 and Iran answered with expanded enrichment, Russia and China opposing. The negotiation-capacity clock is dominant but braided to a live kinetic clock: Qatar's team reached Tehran in coordination with Washington and Trump still calls a deal possible, yet coercive strikes are the medium and the IRGC threatens a 'different and heavier' round. The interceptor clock burned inventory across the multi-base salvo. The binding test is whether the strikes coerce a signature or trigger the heavier Iranian round.",
      spillover:
        "Spillover holds critical and widened: Iran struck US bases in three Gulf-basing hosts at once — Bahrain (Fifth Fleet), Kuwait (Ali Al Salem), and Jordan (Azraq) — reported nearly all intercepted with no US casualties, against the IRGC's claim of 21 targets and four destroyed including an F-35 hangar. The IRGC's 'closed to all vessels' Hormuz declaration backed by a live exchange leaves a single transiting-vessel strike able to convert declaration into demonstrated closure; Brent re-rated above $96. Coalition cohesion strained as Trump warned Netanyahu he would be 'on his own' and the PM called off a runway-ready strike. The Lebanon seam carries — IDF Tyre evacuation, MOH now above 3,600.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'CENTCOM / NBC / CBS / Al Jazeera / Axios',
      event:
        "The attack pause collapsed into direct US-Iran exchange: Iran downed a US Army Apache over the Strait of Hormuz on June 9 (crew recovered unharmed by an uncrewed Navy boat), the US struck Iranian air-defense and radar sites, Iran salvoed US bases in Bahrain, Kuwait, and Jordan, and the US struck Iran a second straight night across the south",
      summary:
        "CENTCOM described the strikes as proportional self-defense; a US official said the second-night targets were air defense, drone command-and-control, ammunition depots, and warehouses, and that one option was 'big in scale but short in duration' to press Tehran in the talks. Iran's base salvo was reported nearly all intercepted with no US casualties.",
      impact:
        "Returns the war to its most dangerous mode — direct US-Iran kinetic exchange — after six weeks displaced onto the energy and nuclear vectors. Skeptical counter per §3.5.3: the 'short in duration' and 'deal still possible' framings originate Washington-side and are unmatched by any Iranian principal; the IRGC's 'different and heavier' threat points the other way. The binding question into Day 105 is whether the strikes coerce a signature or trigger the heavier round.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'IRGC via Al Jazeera / Trading Economics / EIA',
      event:
        "The IRGC declared the Strait of Hormuz closed to all vessels — tankers and commercial ships alike — threatening to target any attempting transit, and Brent reversed Day 103's ease back above $96",
      summary:
        "The closure declaration followed the two-night exchange and the downing of the Apache over the Strait. Brent climbed back above $96 as the US struck for a second day, with the EIA's June Short-Term Energy Outlook holding the June-July average near $105.",
      impact:
        "Resolves Day 103's energy-ease divergence to the upside: the vector re-priced the kinetic resumption that the energy secretary's 'traffic rising' claim had briefly obscured. Skeptical counter: the closure is a declaration over an already-closed Strait, a risk-premium re-rate rather than a new physical shock — but a live exchange makes a single transiting-vessel strike able to convert it into demonstrated closure.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'IAEA / WANA / Arms Control Association / Washington Institute',
      event:
        "The IAEA Board adopted the E3-drafted censure 21-3-10 (Russia, China, and Niger opposed; 10 abstained); Iran, Russia, and China issued a joint statement rejecting it and accusing Grossi of politicization, and Tehran moved to expand enrichment",
      summary:
        "The resolution demands Iran restore access and explain uranium traces at undeclared sites; the trilateral statement noted Grossi had recommended no punitive action and called the push 'politicized.' ~440.9 kg of 60% HEU remains unverifiable at Isfahan since the June 2025 physical check.",
      impact:
        "Confirms §3.5.6: the Board's record predicted enrichment, not access, and Iran answered in kind. The great-power cover is now explicit — three opposing votes plus a joint statement fracture the Board and hand Tehran a multilateral shield. The active-deadline clock fired alongside the energy clock. The test into Day 105 is whether the enrichment move is an announcement or a verified new cascade.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Business Standard / Al Jazeera / Times of Israel',
      event:
        "Against the escalation, Qatar sent a negotiating team to Tehran in coordination with Washington, joining Pakistan's channel, while Trump kept insisting a negotiated deal remains possible",
      summary:
        "The Qatari delegation reached Tehran hours after the strikes exchange to help fill remaining gaps, framed by Doha as a supportive role to Pakistani mediation. Trump maintained an agreement is achievable even as he ordered the second night of strikes.",
      impact:
        "The diplomatic track is alive but braided to coercion: the same week carries a mediator into Tehran and a US bombing campaign. Skeptical counter per §3.5.3: the optimism originates Washington-side and is unmatched by an Iranian principal. CFR/Stimson's structural read holds — Pakistan and Qatar can keep channels open but cannot close a deal they do not control.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel / Al Jazeera / NPR',
      event:
        "Trump warned Netanyahu he would be 'on his own' if Israel escalated, and the PM called off a major strike on Iran with jets on the runway; the Lebanon truce stayed procedural after the IDF's June 8 Tyre evacuation order",
      summary:
        "Israel stayed out of the June 9-10 US-Iran exchange, with Netanyahu reaffirming Israel would respond 'with force' only if fire resumes against it. The Lebanon Health Ministry war-cumulative is now reported above 3,600 killed amid continued strikes.",
      impact:
        "Inverts the standing Israel-independence prior: this time Washington is striking and restraining Israel, not the reverse. Coalition cohesion strains as three Gulf hosts take Iranian fire and Trump publicly disciplines Netanyahu. The binding Lebanon test — LAF deployment un-fired-upon through the week of June 22 — carries; truce procedural.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (Apache crew recovered unharmed; Iran base salvo nearly all intercepted, no US casualties)',
      status:
        "No confirmed new US casualties despite the direct exchange. Iran downed a US Army Apache over Hormuz on June 9, but both crew were recovered by an uncrewed Navy boat unharmed; Iran's June 10 missile-and-drone salvo at US bases in Bahrain (Fifth Fleet), Kuwait (Ali Al Salem), and Jordan (Azraq) was, a US official said, nearly all intercepted with no US casualties or base damage, against the IRGC's claim of 21 targets struck and four destroyed including an F-35 hangar at Azraq. The $24B frozen-asset release stays conditioned on a ceasefire first; Sledgehammer operational.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 104 IDF KIA',
      status:
        "No confirmed new IDF KIA. Israel stayed out of the June 9-10 US-Iran exchange: Netanyahu called off a major strike on Iran with jets on the runway after Trump warned he would be 'on his own,' and reaffirmed Israel would respond 'with force' only if fire resumes against it. The Lebanon truce stayed procedural after the June 8 Tyre evacuation order and continued strikes on Hezbollah; no new confirmed IDF-Hezbollah kinetic exchange.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 verified new published Day 104 (no confirmed toll from the two-night US campaign)',
      status:
        "No verified new Iranian toll published. CENTCOM said the June 9 strikes near Hormuz were calibrated to avoid casualties; the June 10 strikes hit air defense, radars, drone command-and-control, ammunition depots, and warehouses across southern Iran. The IAEA Board adopted the E3 censure 21-3-10; Iran moved to expand enrichment with Russia and China opposing. ~440.9 kg of 60% HEU remains unverifiable at Isfahan since the June 2025 physical check; Hormuz past 100 days of effective closure now formalized; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH now reported above 3,600 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new confirmed Gulf-state casualties (Iran base strikes intercepted); Lebanon MOH carries and rising',
      status:
        "No new confirmed Gulf-state casualties: Iran's strikes on Bahrain, Kuwait, and Jordan were reported nearly all intercepted. The Lebanon Health Ministry war-cumulative is now reported above 3,600 killed since March 2 and rising after continued strikes around Tyre. Qatar's negotiating team reached Tehran in coordination with Washington, joining Pakistan's Sharif-to-Mojtaba channel. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 104 is the day the pause broke. The attack pause that held through Day 103 collapsed into direct US-Iran exchange: after Iran downed a US Army Apache over the Strait of Hormuz on June 9 — both crew recovered by an uncrewed Navy boat, no casualties — US Central Command struck Iranian air-defense and radar sites, Iran answered with missiles and drones against US bases in Bahrain, Kuwait, and Jordan, and the US struck Iran a second straight night across southern Iran (CENTCOM, NBC, Axios, Al Jazeera). The strikes were pitched as calibrated pressure rather than regime change — a US official described the targets as air defense, drone command-and-control, ammunition depots, and warehouses, and one option under consideration was 'big in scale but short in duration' to move Tehran in the talks (CBS, NPR). The IRGC then declared the Strait of Hormuz closed to all vessels, and Brent reversed Day 103's ease back above $96 (Trading Economics, EIA). The nuclear file hardened in parallel: the IAEA Board adopted the E3-drafted censure 21-3-10, Iran, Russia, and China issued a joint statement rejecting it and accusing Grossi of politicization, and Tehran moved to expand enrichment (IAEA, WANA). Against the escalation, Qatar sent a negotiating team to Tehran in coordination with Washington, joining Pakistan's channel, while Trump insisted a deal remains possible and warned Netanyahu he would be 'on his own' if Israel escalated — the PM having already called off a major strike with jets on the runway (Business Standard, Times of Israel). 30-day ceasefire probability eases to 8; direction holds escalating with seven-day risk raised to extreme.",
  implications: [
    {
      title:
        "The pause broke into a two-night exchange — but the strikes were engineered as deal-pressure, not regime change, and that distinction is the analytical content",
      body:
        "The attack pause that defined Days 100-103 ended when Iran downed a US Apache over Hormuz on June 9 and the US answered with strikes that drew an Iranian salvo on US bases in Bahrain, Kuwait, and Jordan and then a second US night against southern Iran (NBC, Al Jazeera, Axios). The shift Day 104 registers is the return of direct US-Iran kinetic exchange — the war's most dangerous mode — after six weeks displaced onto the energy and nuclear vectors. Yet the design cuts against a slide to all-out war: the June 9 strikes were calibrated to avoid casualties, the crew was recovered alive, Iran's base salvo was reported nearly all intercepted with no US casualties, and a US official framed the option as 'big in scale but short in duration' to move Tehran (CBS, NPR). Skeptical counter per §3.5.3: 'short in duration' and 'a deal is still possible' both originate Washington-side and are not matched by any Iranian principal — the IRGC's 'different and heavier' threat points the other way. Under the multi-clock framework the negotiation-capacity clock is now braided to a live kinetic clock: the same week can carry a Qatari delegation to Tehran and a second night of bombing. The binding question into Day 105 is whether the strikes coerce a signature or trigger the 'heavier' Iranian round that forecloses the mediation.",
    },
    {
      title:
        "Iran answered both the censure and the strikes the same way — base salvos, expanded enrichment, and a formal Hormuz closure — with Russia and China supplying the cover",
      body:
        "The censure the Board's record predicted Tehran answers with enrichment was adopted 21-3-10, and Iran's response matched the prediction across three vectors at once: it salvoed US bases, it moved to expand enrichment, and the IRGC declared the Strait of Hormuz formally closed to all vessels (IAEA, WANA, Al Jazeera). The great-power cover is now explicit — Russia, China, and Niger voted against the resolution, and Iran, Russia, and China issued a joint statement accusing Grossi of politicization and noting he had recommended no punitive action, fracturing the Board and handing Tehran a multilateral shield (WANA, Washington Institute). Skeptical counter: the closure is a declaration, not a demonstrated new capability — the Strait has sat under effective IRGC-controlled closure for over 100 days, and a 'closed to all vessels' announcement raises the enforcement question rather than settling it. But the direction is unambiguous: ~440.9 kg of 60% HEU stays unverifiable at Isfahan since the June 2025 physical check, and the Arms Control Association's reminder that 60% is ~90% of the separative work to weapons-grade now sits behind an expanded-enrichment decision rather than a frozen stockpile. Under the multi-clock framework the active-deadline clock and the energy clock fired together. The test into Day 105 is whether the enrichment move is an announcement or a verified new cascade — and whether the closure draws a CENTCOM enforcement strike.",
    },
    {
      title:
        "Taiwan: the Day 103 easing reversed within hours — Brent is back above $96 and the Strait is formally closed; the divergence resolved to the upside",
      body:
        "Day 103 flagged Brent's ease toward ~$91 on the energy secretary's 'Hormuz traffic rising' claim as a divergence from the political escalation, with the gap itself the information. Day 104 resolves it: the IRGC declared the Strait closed to all vessels, the US bombed Iran for a second night, and Brent reversed back above $96, with the EIA's June outlook near $105 for June-July (Trading Economics, EIA). The divergence closed to the upside: the energy vector re-priced the kinetic resumption Wright's traffic claim had briefly obscured. Skeptical counter, held both ways: the formal closure is a declaration over an already-closed Strait, so the move above $96 is a risk-premium re-rate rather than a new physical shock; but a 'closed to all vessels' regime backed by a live US-Iran exchange is exactly the configuration in which a single strike on a transiting vessel converts declaration into demonstrated closure. For Taiwan the standing assessment is unchanged in substance and worse in tail risk: the ~40-ship NCAGS Bahrain channel remains the only durable transit mechanism, PGSA $2M/transit yuan-billed continues, China still takes ~37.7% of Hormuz crude, and LNG cover through September with TSMC's 2026 CapEx framework near 8% carries. Analytical judgment: the energy-infrastructure clock worsened, and a signed MOU with an unrestricted-Hormuz clause remains the only catalyst that revises the LNG-cover dominant case. No fresh Taiwan-specific development; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. The downed Apache's crew was recovered unharmed by an uncrewed Navy boat; Iran's salvo at US bases in Bahrain, Kuwait, and Jordan was nearly all intercepted with no US casualties or damage, against the IRGC's claim of 21 targets and four destroyed including an F-35 hangar at Azraq. $24B asset release stays conditioned on a deal first; Sledgehammer operational.",
    israel:
      "No confirmed new IDF KIA. Netanyahu called off a runway-ready Iran strike after Trump's 'on your own' warning and stayed out of the US-Iran exchange, reaffirming Israel would respond 'with force' only if fire resumes. Lebanon truce procedural after the June 8 Tyre evacuation order; no new IDF-Hezbollah exchange confirmed.",
    iran:
      "No verified new toll from the two-night US campaign. June 9 strikes were calibrated to avoid casualties; June 10 hit air defense, radars, drone C2, ammunition depots, and warehouses across the south. IAEA censure adopted 21-3-10; Iran expanding enrichment with Russia and China opposing. ~440.9 kg 60% HEU unverifiable at Isfahan since June 2025.",
    other:
      "No new confirmed Gulf-state casualties; Iran's strikes on Bahrain, Kuwait, and Jordan were reported nearly all intercepted. Lebanon MOH now reported above 3,600 killed and rising after strikes around Tyre. Qatar's negotiating team reached Tehran, joining Pakistan's channel. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
