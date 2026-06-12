import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 106 advances the diplomatic track and splits its substance the same day. Pakistani PM Sharif called a 'final, agreed-upon text' reached and FM Araghchi — the Iranian principal Day 105 said was missing — confirmed the 'Islamabad MOU has never been closer,' with a June 14 Geneva signing and Vance as signatory (RFE/RL, Washington Post). Brent fell over 4% below ~$86.50, the lowest since early March (Trading Economics). But §3.5.3 governs and has sharpened from optimism-vs-silence to optimism-vs-contradiction: Trump says the leaked terms 'bear no relation to the truth' and called Iran 'Dishonorable people,' while IRNA says Iran takes 'no new commitments.' Direction stays mixed — a finalized text its own principals describe two incompatible ways.",
      risk7d:
        "Seven-day risk stays critical and turns bimodal. The dated June 14 Geneva signing means the next week resolves toward either a ceasefire or a collapse on the terms the two sides aired in public. The negotiation-capacity clock improves sharply — broker and Iranian principal both confirm a final text, a venue and signatory are named. But a fresh Iranian drone attack on Hormuz shipping was intercepted, Araghchi said the 'pressure' stays indefinitely, Vance called signing 'still TBD,' and the framework has already broken three times. The binding test narrows to a single dated event.",
      spillover:
        "Spillover holds critical. The kinetic pause on Gulf bases held a second day, but the Strait stayed under fire and Netanyahu was kept out of the talks — praising Trump's anti-nuke 'commitment' while insisting all HEU 'has to leave Iran' and voicing concern the deal's Lebanon clause curbs Israeli action. The MOU reportedly folds Lebanon into a 60-day ceasefire with Israeli self-defense retained, a mild easing, but Israeli forces still hold parts of the south and traded cross-border fire with Hezbollah. A single strike on a transiting vessel remains the fastest path back to escalation.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Truth Social / RFE-RL / Washington Post / Al Jazeera / The Hill',
      event:
        "⭐ Pakistani PM Sharif announced a 'final, agreed-upon text' of the US-Iran peace deal, and FM Araghchi confirmed the 'Islamabad MOU has never been closer' — the named-Iranian-principal confirmation that was Day 105's binding test — with a signing proposed June 14 in Geneva and VP Vance as US signatory",
      summary:
        "Sharif posted that 'peace has never been this close' and that Pakistan is working both sides on next steps; Araghchi echoed the optimism, and a Trump administration official said a deal reopening Hormuz and dismantling Iran's nuclear program could be signed 'in the next few days,' though not '100%' certain (RFE/RL, Washington Post, CBS).",
      impact:
        "The most consequential single advance since the pause: for the first time an Iranian principal and the broker both call the text final, with a dated venue. Marked pivotal. Skeptical counter per §3.5.3: it arrived alongside its own contradiction (Event 2). The binding test into Day 107 narrows to one dated event — whether the June 14 Geneva signing happens or collapses as the framework did on Day 51.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'TIME / CNBC / The Hill',
      event:
        "Trump said Iran 'misrepresented' the deal — the leaked terms 'have NOTHING to do' with what was agreed 'in writing' and 'bear no relation to the truth' — and decried a fresh Iranian drone attack on Hormuz shipping by 'Dishonorable people'; VP Vance called the signing 'still TBD'",
      summary:
        "The accusation landed the same day as the 'final text' claim, turning the §3.5.3 gap from optimism-versus-silence into optimism-versus-contradiction; the new Hormuz drone launch was intercepted, extending Day 105's evening-flash pattern of blockade enforcement under the kinetic pause (Time, CNBC).",
      impact:
        "This is the Day 50 configuration with the volume up — 'final text' coexisting with both principals publicly disputing its contents. Analytical judgment: confirmation of a text is not agreement on terms. The drone launch shows the kinetic clock the diplomacy sits on is still live, and 'Dishonorable people' is not the register of a deal about to sign cleanly.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / IRNA / Mehr via Times of Israel / Gulf News / ANI',
      event:
        "The two sides published incompatible cores: Washington described dismantled enrichment, removed or blended-down HEU under UN supervision, a reopened Strait and no terror funding; IRNA said the current draft has Iran 'undertake no new commitments,' deferring the nuclear question to a 60-day post-signing negotiation, while Mehr's 14-point draft lifts oil sanctions and reopens Hormuz within 30 days",
      summary:
        "Even the US-Israel readings diverge — Trump reportedly accepted that uranium be blended down inside Iran while Netanyahu insists it 'has to leave.' Vance said no cash flows for 'simply signing,' tying the $24B frozen-asset release to performance metrics over a 60-day window; Iranian media framed the $24B as a release upon the deal taking effect (CNBC, IRNA, Gulf News, ANI).",
      impact:
        "§3.5.6 in the open: ~440.9 kg of 60% HEU — ~90% of the separative work to weapons-grade — stays unverifiable at Isfahan since June 2025, and a draft in which Iran takes 'no new commitments' does not touch it. Analytical judgment: a June 14 signing is plausible; a signing that resolves enrichment on Washington's stated terms is not yet evidenced — the active-deadline clock reset, the weaponization clock did not move.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / CNBC / EIA',
      event:
        "Brent crude fell more than 4% to below about $86.50 — the lowest since early March — pricing the 'final text' and the dated Geneva signing as de-escalation; US equities extended gains",
      summary:
        "Crude gave back the kinetic risk premium for a second straight day; the EIA's June Short-Term Energy Outlook still frames the June-July average near $105, and Mehr's draft would reopen Hormuz within 30 days of a signing — the first time a reopening is tied to a dated mechanism (Trading Economics, CNBC, EIA).",
      impact:
        "The energy market is pricing a deal whose own principals publicly dispute its terms. Skeptical counter: the IRGC's 'closed to all vessels' declaration, the >100-day structural closure, and the same-day Hormuz drone launch are unchanged. Analytical judgment: the energy-infrastructure clock is unchanged structurally — the price fell, the chokepoint did not open.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel / Axios / Gulf News',
      event:
        "Netanyahu, kept out of the talks, said Israel is not party to the deal but praised Trump's 'commitment' to thwarting Iran's nukes, insisted all enriched uranium 'has to leave Iran,' and Israeli officials warned the MOU's Lebanon clause could curb their operations against Hezbollah",
      summary:
        "A US official said the agreement 'includes Lebanon' in a 60-day ceasefire with Israel retaining self-defense; Israeli forces still hold parts of southern Lebanon and continued cross-border exchanges, and Axios framed the pending deal as a 'bitter pill' for a sidelined Netanyahu (Times of Israel, Axios).",
      impact:
        "Re-asserts the standing Israel-independence prior (§3.5.6): any deal that depends on Israeli compliance is structurally fragile, and Netanyahu — kept in the dark — has both praised and partly contradicted its terms. The Lebanon-in-MOU clause is a mild de-escalation signal; the binding LAF test through the week of June 22 and MOH above 3,600 carry.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (48-hour pause on bases held; new Hormuz drone attack intercepted, no US casualties)',
      status:
        "No new US casualties. The kinetic pause on Gulf bases held a second day; a fresh Iranian drone attack on Strait of Hormuz shipping was intercepted with no US casualties, though Trump decried it as the act of 'Dishonorable people.' VP Vance said no funds flow to Iran for 'simply signing a deal,' with the $24B frozen-asset release tied to performance metrics across a 60-day window. Sledgehammer remains operational; the Kharg Island option stays shelved.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 106 IDF KIA',
      status:
        "No new IDF KIA. Netanyahu — kept out of the talks — said Israel is not party to the deal but praised Trump's anti-nuke 'commitment' and insisted all enriched uranium 'has to leave Iran.' The MOU reportedly folds Lebanon into a 60-day ceasefire with Israeli self-defense retained; Israeli forces still hold parts of southern Lebanon and continued cross-border exchanges with Hezbollah, with officials concerned the clause could curb their freedom of action.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new published (day was diplomatic and rhetorical, not kinetic)',
      status:
        "No verified new mass toll; the kinetic pause on bases held and the day's escalation was diplomatic. Iran's account of the draft has Tehran 'undertake no new commitments' on its nuclear program, deferring the question to a 60-day post-signing negotiation; ~440.9 kg of 60% HEU remains unverifiable at Isfahan since June 2025. HRANA 3,636+ and Hengaw 6,620+ counts carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH above 3,600 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new confirmed Gulf-state casualties; Lebanon MOH carries',
      status:
        "No new confirmed Gulf-state casualties; the 48-hour pause on bases held. Sharif brokered the 'final text,' Qatar's team stayed engaged, and the widened mediation carried. The Lebanon Health Ministry war-cumulative carries above 3,600 killed / 10,044+ injured since March 2 amid a truce now braided into the MOU's 60-day clause. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 106 carries Day 105's call-off forward into the first finalized text — and the first open fight over what it says. Pakistani Prime Minister Shehbaz Sharif announced that a 'final, agreed-upon text' of the peace deal had been reached, and Foreign Minister Araghchi — the named Iranian principal whose confirmation was Day 105's binding test — said the 'Islamabad Memorandum of Understanding has never been closer,' with a signing proposed for June 14 in Geneva and Vice President Vance named as the US signatory (RFE/RL, Washington Post, Al Jazeera). Brent priced it, falling more than 4% to below about $86.50 — the lowest since early March (Trading Economics). Analytical judgment, per §3.5.3: the packaging advanced while the substance split in public. Trump said Iran 'misrepresented' the deal, that leaked terms 'have NOTHING to do' with what was agreed 'in writing,' and decried a fresh Hormuz drone attack by 'Dishonorable people' (Time, CNBC). The cores are incompatible: Washington describes dismantled enrichment, removed or blended-down HEU under UN supervision, and a reopened Strait; IRNA says the current draft has Iran 'undertake no new commitments,' with the nuclear question pushed to a 60-day post-signing negotiation, and Mehr's reported 14-point draft lifts oil sanctions and reopens Hormuz within 30 days (IRNA, Mehr, Gulf News). Vance called the signing 'still TBD' and said no funds flow for 'simply signing' (CBS, ANI). Araghchi said Hormuz 'pressure' stays indefinitely. The deal is closer than at any point in the war and described two contradictory ways by its own principals. 30-day ceasefire probability rises to 28 from 15; direction stays mixed.",
  implications: [
    {
      title:
        "Day 105's binding test was met — a named Iranian principal confirmed a finalized text — yet the same act produced the war's first open fight over what the deal says",
      body:
        "Day 105 set one explicit test into Day 106: whether a named Iranian principal would ratify the framework Trump announced. Araghchi did — calling the 'Islamabad Memorandum of Understanding' closer than ever — and the broker, Sharif, declared the text 'final, agreed upon,' with a June 14 Geneva signing and Vance as signatory (RFE/RL, Washington Post, Al Jazeera). That is the most consequential single advance since the pause and earns the day's one pivotal mark. Skeptical counter per §3.5.3, and it is the analytical core: the confirmation arrived alongside its own contradiction. Trump said Iran 'misrepresented' the deal, that the leaked terms 'have NOTHING to do' with what was agreed 'in writing,' called Iranians 'Dishonorable people,' and Vance called the signing 'still TBD' (Time, CNBC). This is the Day 50 configuration with the volume turned up — there, Dar's '80% complete' preceded the Day 51 collapse; here, 'final text' coexists with both principals publicly disputing its contents. Under the multi-clock framework the negotiation-capacity clock improves sharply, but sits on a kinetic clock the fresh Hormuz drone launch shows is still live. Analytical judgment: confirmation of a text is not agreement on its terms. The binding test into Day 107 narrows to a single dated event — whether the June 14 Geneva signing happens as described, or collapses as on Day 51.",
    },
    {
      title:
        "The fight is over the nuclear core — dismantle-and-remove versus no-new-commitments-for-60-days — and the two readings cannot both be the deal",
      body:
        "The contradiction is not about packaging; it is the substance. Washington's account, echoed in Netanyahu's readout, is maximal: dismantled enrichment infrastructure, all highly enriched uranium removed or blended down under UN supervision, missile limits, a reopened Strait, and an end to terror funding (CNBC, Gulf News). Iran's account is minimal: IRNA says the current draft has Tehran 'undertake no new commitments' on its nuclear program, deferring the question to a 60-day post-signing negotiation, while Mehr's reported 14-point draft lifts oil sanctions and reopens Hormuz within 30 days (IRNA, Mehr via Times of Israel). Even the US-Israel descriptions diverge — Trump reportedly accepted that uranium would be blended down inside Iran, while Netanyahu insists it 'has to leave.' Skeptical counter, held the other way: hard public maximalism is the normal backdrop to a signature, and Russia and China's cover gives Tehran room to concede without looking cornered. But §3.5.6 governs: ~440.9 kg of 60% HEU — ~90% of the separative work to weapons-grade — stays unverifiable at Isfahan since June 2025, and a draft that has Iran take 'no new commitments' does not touch it. Under the multi-clock framework the active-deadline clock reset to a dated signing window, but the weaponization clock did not move. Analytical judgment: a signing on June 14 is now plausible; a signing that resolves the enrichment question on the terms Washington describes is not yet evidenced.",
    },
    {
      title:
        "Taiwan: Brent hit a three-month low on signing hopes, but the Strait stays closed, the drones still fly, and the open terms war can reverse the relief overnight",
      body:
        "For Taiwan, Day 106 deepened Day 105's energy easing while leaving the structure untouched. Brent fell more than 4% to below about $86.50 — the lowest since early March — as the 'final text' and a dated Geneva signing pulled the war premium out of crude (Trading Economics, CNBC). The EIA's June outlook still frames the June-July average near $105. Skeptical counter, held both ways: the move is sentiment on a deal whose own principals publicly dispute its terms, and the same day carried a fresh Iranian drone attack on Hormuz shipping plus Araghchi's statement that the 'pressure' stays indefinitely. Structurally nothing opened: the IRGC's 'closed to all vessels' declaration stands, the >100-day effective closure persists, the ~40-ship NCAGS Bahrain channel remains the only durable transit mechanism, PGSA $2M/transit yuan-billed continues, and China still takes ~37.7% of Hormuz crude. Mehr's draft would reopen the Strait within 30 days of a signing — the first time a reopening has been tied to a dated mechanism — but it is unsigned and contested. Analytical judgment: the energy-infrastructure clock is unchanged — the price fell, the chokepoint did not open — and a signed MOU with an enforced Hormuz-reopening clause remains the only catalyst that revises the LNG-cover dominant case. LNG cover through September and TSMC's 2026 CapEx framework near 8% carry. No fresh Taiwan-specific development; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties; the 48-hour pause on bases held and a fresh Hormuz drone attack was intercepted. VP Vance said no funds flow for 'simply signing'; the $24B release is tied to performance metrics over a 60-day window. Sledgehammer operational; Kharg Island option shelved.",
    israel:
      "No new IDF KIA. Netanyahu, kept out of the talks, praised Trump's anti-nuke 'commitment' but insisted all HEU 'has to leave Iran' and warned the MOU's Lebanon clause could curb operations. Cross-border exchanges with Hezbollah continued; truce now braided into the 60-day MOU clause.",
    iran:
      "No verified new mass toll; the day was diplomatic, not kinetic. Iran's draft has Tehran 'undertake no new commitments,' deferring the nuclear file to a 60-day post-signing negotiation; ~440.9 kg 60% HEU unverifiable at Isfahan since June 2025. HRANA 3,636+ carries; 3.2M displaced.",
    other:
      "No new confirmed Gulf-state casualties; the 48-hour pause held. Sharif brokered the 'final text,' Qatar stayed engaged. Lebanon MOH carries above 3,600 killed / 10,044+ injured since March 2; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
