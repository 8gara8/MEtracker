import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction stays mixed, and the mode is a mourning-week pause rather than an exchange. The kinetic standdown held a sixth day with no strike into the funeral processions, and Brent stayed off any spike, both de-escalatory (CNN, HDFCSky). But the day's freshest signal cut against cohesion — the new supreme leader Mojtaba will not attend his own father's funeral, citing security, still unseen and believed wounded since February 28 (NBC News) — and the substance did not move: the $6 billion stayed frozen amid a claim-versus-denial split, and Araghchi threatened an 'immediate powerful response' to any Israeli attack. The guns held through the mourning's opening, but the leader's absence and the unmoved money cap the calm.",
      risk7d:
        "Seven-day risk stays conditional and keeps the funeral shape. Iran's six-day state funeral for Ali Khamenei runs July 4–9 across five cities in Iran and Iraq, with 15–20 million mourners claimed and dozens of foreign delegations attending — at once a de-escalation pause that freezes the Doha track for a week and a discrete escalation tripwire (CNN, Al Jazeera). Foreign Minister Araghchi armed that tripwire explicitly, warning of an 'immediate powerful response' to any Israeli attack during the mourning and again demanding Washington restrain its ally (Al Jazeera). Beneath it the deadlines stack: the General License to August 21, a nearer July 19 blockade-lift-and-restore date, and zero transfers so far. The risk is whether a week of enforced quiet converts into transfers or curdles into a mourning-week misfire.",
      spillover:
        "Spillover holds conditional as the Gulf-base vector and Lebanon both stayed quiet on July 4 — no new strike was reported on either seam. The §3.5.6 Israel-independence prior carries intact but untested for the day: the Ali Taher ridge killing (Day 126) stands, Hezbollah still calls the framework 'null and void,' and Araghchi's threat frames any Israeli strike during the mourning as the most likely trigger for renewed escalation (Times of Israel, Al Jazeera). The Gulf is calm; Lebanon is quiet; the funeral week is the variable that could pull either way.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / Al Jazeera / Outlook India',
      event:
        "Iran opened the largest funeral in the Republic's history for assassinated supreme leader Ali Khamenei: the casket lay in state at Tehran's Mosalla on July 4 with organizers claiming 15 to 20 million mourners, ahead of a Tehran street procession July 6, a Qom ceremony July 7, processions in Najaf and Karbala in Iraq July 8, and burial in Mashhad on July 9, with dozens of foreign delegations attending",
      summary:
        "Per §3.1 the framing itself is contested: Iranian organizers presented the turnout as mass devotion while CNN cast the spectacle as a defiant message to Washington five months into the war — the same event read as mourning and as political theater (CNN, Al Jazeera).",
      impact:
        "The funeral is the week's organizing clock: a de-escalation pause that freezes the Doha track until after the July 9 burial, and a discrete escalation window in which any strike into the processions would collapse the standdown.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'NBC News / CNN',
      event:
        "The succession test resolved against cohesion: the new supreme leader Mojtaba Khamenei will not attend his own father's funeral, citing security after Israel's standing threat to assassinate him — he has not been seen or heard since the war's opening day on February 28, is believed seriously wounded in the strike that killed his father, mother, and wife, and communicates only through written statements, leaving a senior general to front the ceremonies",
      summary:
        "Quantify the gap per §3.5.5: the man who inherited the Republic's highest office four months ago cannot show his face at the largest funeral in its history — the regime-cohesion prior converting from a watch-item into evidence (NBC News).",
      impact:
        "A structurally brittle leadership cuts both ways for the ceasefire: an existentially exposed regime may cling harder to the standdown that buys recovery time, or may need a demonstration of strength to shore up legitimacy.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / Times of Israel',
      event:
        "The kinetic standdown held a sixth day with no strike into the funeral processions and no new Gulf or Lebanon strike reported, even as Foreign Minister Araghchi — who stayed away from the Doha table — threatened an 'immediate powerful response' to any Israeli attack during the mourning and repeated his demand that Washington restrain its ally",
      summary:
        "Dual framing per §3.1 and §3.5.6: the quiet is real and de-escalatory, but Araghchi's warning states the Israel-independence prior as a live tripwire — the standdown holds on mourning, not on a resolved corridor (Al Jazeera).",
      impact:
        "The coalition-cohesion clock stays strained and the mourning week raises the stakes of any misfire; Lebanon remains the vector most able to undo the Gulf standdown.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'HDFCSky / Trading Economics',
      event:
        "The energy tape firmed off its war-low rather than confirming calm: Brent ticked back above $72 to about $72.30, up roughly 0.6 percent, as traders cautiously bet the US–Iran peace would hold and eased fears of fresh supply disruption, with both benchmarks closing the week little changed",
      summary:
        "Per §3.5.3 the firming is a price of sentiment, not of transit — WTO data still puts Hormuz crude shipments down about 95 percent and LNG about 99 percent since late February, and no verified throughput recovery underwrote the move (HDFCSky, Trading Economics).",
      impact:
        "The energy-infrastructure clock reads calmer on price and unresolved on throughput; the July 19 blockade-lift-and-restore deadline is the binding near-term test of whether the corridor recovers off the floor or a toll hardens in.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Business Standard / Al Jazeera',
      event:
        "The Doha money dispute carried unmoved through the pause: Qatar's central bank reviewed a mechanism to spend part of Iran's $6 billion in frozen funds on goods based on Tehran's priorities and Iran said the purchases were agreed, while US officials again denied any funds had been released, and Vice President Vance said talks were 'going well' and the nuclear file would be taken up 'later'",
      summary:
        "The §3.5.3 claim-versus-denial split is intact: one side describes an agreed goods-purchase framework, the other denies any funds moved, and exactly zero dollars have transferred while the nuclear track is deferred again (Business Standard, Al Jazeera).",
      impact:
        "The active-deadline clock carries at the August 21 window with the nearer July 19 date beneath it; with strikes paused, the contest is funds and corridor governance, and the parties still dispute the basic facts of their own talks.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (kinetic standdown holds a sixth day; no new US strikes and no new Iranian strikes on US posture; Doha track paused for the funeral)',
      status:
        "No new US casualties. The mutual standdown held a sixth day with the Doha track paused for the funeral until after the July 9 burial; Vice President Vance said talks were 'going well' and the nuclear file would come later, while US officials denied any of the $6 billion had been released.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified (no new Israeli strike reported into the processions on July 4; the Ali Taher ridge killing from Day 126 carries)',
      status:
        "No verified new Israeli casualties on either front, and no new Israeli strike was reported on July 4. The §3.5.6 Israel-independence prior carries, with Foreign Minister Araghchi warning of an 'immediate powerful response' to any Israeli attack during the mourning and again demanding Washington restrain its ally.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (standdown; state funeral for the slain supreme leader opens July 4; nuclear file deferred — ~440.9 kg of 60% HEU unverified since June 2025)',
      status:
        "No verified new mass toll under the standdown. The largest funeral in the Republic's history opened July 4 at Tehran's Mosalla; successor Mojtaba will not attend, citing security. The nuclear file stayed deferred — Vance said 'later' — and ~440.9 kg of 60% HEU at the Esfahan tunnel complex stays unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,254 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera); Bahrain + Kuwait struck June 28 (Bahrain: residential building near airport damaged, no deaths; Kuwait: two ballistic missiles intercepted); Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+0 (no fresh Lebanon or Gulf strike reported July 4; the Ali Taher ridge killing from Day 126 carries)',
      status:
        "No new verified toll. No fresh Lebanon or Gulf-base strike was reported on July 4; the Ali Taher ridge killing (Day 126) and the cumulative Lebanon toll of ~4,254 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera) carry, as does the Gulf-base vector quiet under the standdown. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
    },
  },
  exec:
    "Day 127 opens the mourning week, and its defining image is an absence. Iran began the largest funeral in the Republic's history for assassinated supreme leader Ali Khamenei — the casket lay in state at Tehran's Mosalla, organizers claiming 15 to 20 million mourners, ahead of a Tehran procession July 6, Qom July 7, Najaf and Karbala July 8, and burial in Mashhad July 9 — and CNN cast the spectacle as a defiant message to Washington (CNN, Al Jazeera). But the succession test Day 126 flagged resolved the wrong way: his son and successor Mojtaba will not attend his own father's funeral, citing security after Israel's threat to kill him, still unseen and believed seriously wounded since the war's opening day, a general fronting the ceremonies in his place (NBC News). The kinetic standdown held a sixth day and no strike landed amid the processions, but Foreign Minister Araghchi — absent from Doha — threatened an 'immediate powerful response' to any Israeli attack, keeping the tripwire live (Al Jazeera). Skeptical counter per §3.5.3: the tape firmed rather than confirmed calm — Brent ticked back above $72 to about $72.30, up from the war-low, on cautious bets that peace holds, not on verified transit (HDFCSky). The Doha money dispute carried unmoved — Qatar's central bank reviewed a $6 billion goods-purchase mechanism while US officials denied any funds were released, and Vance said the nuclear file would come 'later' (Al Jazeera, Business Standard). 30-day ceasefire probability edges to 60 from 59; direction stays mixed — the guns held through the mourning's opening, but the leader's absence, the unmoved money, and Araghchi's threat cap the calm.",
  implications: [
    {
      title:
        "The succession answered — and the answer is a supreme leader who cannot attend his own father's funeral, a §3.5.6 cohesion signal made concrete",
      body:
        "Day 126 posed the open question: would Mojtaba appear to lead the prayers? Day 127 answered no. NBC News reports the new supreme leader will not attend the funeral at all, citing security following Israel's standing threat to assassinate him — and the surrounding facts are the story: Mojtaba has not been seen or heard since the war's opening day on February 28, is believed seriously wounded in the strike that killed his father, mother, and wife, communicates with supporters only through written statements, and has left a senior general to front the ceremonies (NBC News, CNN). Quantify the gap per §3.5.5: the man who inherited the Republic's highest office four months ago cannot show his face at the largest funeral in its history. Analytical judgment under the multi-clock framework: this is the regime-cohesion prior converting from a watch-item into evidence — a leadership that projects continuity through a grand public spectacle while its actual leader remains a written signature is structurally brittle, and brittleness cuts both ways for the ceasefire. A regime that feels existentially exposed may cling harder to the standdown that buys it recovery time, or it may need a demonstration of strength to shore up legitimacy. The absence is the datum; which way it bends the war is the open question.",
    },
    {
      title:
        "The funeral is a two-sided clock, and its opening day ran on the de-escalatory face — but the money stayed frozen and Araghchi armed the tripwire",
      body:
        "The event organizing the week is a burial, not a negotiation, and July 4 ran on its calmer face: the casket lay in state at Tehran's Mosalla, 15–20 million mourners were claimed, dozens of foreign delegations arrived, and the kinetic standdown held a sixth day with no strike into the processions (CNN, Al Jazeera, Outlook India). Read the other face too. Foreign Minister Araghchi — who pointedly stayed away from the Doha table — threatened an 'immediate powerful response' to any Israeli attack during the mourning and repeated his demand that Washington restrain its ally, the §3.5.6 prior stated as a live tripwire (Al Jazeera). Beneath the ceremony the substance did not move: Qatar's central bank reviewed a $6 billion goods-purchase mechanism and Iran said goods would be bought on its priorities, while US officials again denied any funds had been released, and Vice President Vance said the nuclear file would be taken up 'later' — the §3.5.3 claim-versus-denial split intact, with exactly zero dollars transferred (Business Standard, Al Jazeera). Analytical judgment: the negotiation-capacity clock is paused, not advancing, and the standdown's durability this week is a function of mourning, not of resolution. The signal to watch remains a wire transfer and a verified Hormuz count, not a peaceful procession.",
    },
    {
      title:
        "Taiwan: the tape firmed off its war-low on peace-hopes, not on a working corridor — the split that defines the island's exposure held",
      body:
        "For Taiwan the day sharpened, rather than eased, the divergence at the core of its exposure. The price signal turned mildly positive-looking: Brent ticked back above $72 to about $72.30, up from the war-low, as traders cautiously bet the US–Iran peace would hold, with the week closing little changed (HDFCSky, Trading Economics). Skeptical counter per §3.5.3: that is a price of sentiment, not of transit — WTO data still puts crude shipments through Hormuz down roughly 95% and LNG down roughly 99% since late February, and no verified throughput recovery underwrote the firming. §3.5.6 reasserts the exposure the tape hides: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas cover, no LNG cargo hit in 127 days, cover through September, and TSMC's 2026 CapEx near 8% — comfort that rests on a corridor whose governance Doha adjourned without settling. The mourning-week variable persists: a single misfire on the Lebanon or Gulf seam amid a grieving nation could reprice the corridor overnight, and Araghchi's threat makes that scenario explicit. Analytical judgment: the durable hedges remain the ones indifferent to a sentiment-driven barrel — diversification toward US and Australian cargoes (the 25%-US-LNG-by-2029 goal) and the Maanshan and Kuosheng restarts (2028–2029). A firmer price on peace-hopes buys sentiment; only non-Hormuz supply buys security.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown's sixth day. The Doha track stayed paused for the funeral; US officials denied any of the $6 billion had been released and Vance deferred the nuclear file to 'later.'",
    israel:
      "No verified new Israeli casualties and no new Israeli strike reported July 4. Araghchi's threat of an 'immediate powerful response' to any Israeli attack during the mourning is fresh §3.5.6 evidence.",
    iran:
      "No verified new mass toll under the standdown. Khamenei's state funeral opened July 4; successor Mojtaba will not attend, citing security. Nuclear file deferred; ~440.9 kg of 60% HEU unverified since June 2025.",
    other:
      "No fresh Lebanon or Gulf strike reported July 4. The Ali Taher killing (Day 126) and the cumulative Lebanon toll of ~4,254 killed / 12,190+ wounded (Lebanese Health Ministry) carry.",
  },
};

export default data;
