import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating. Day 203's legal finding was met on Day 204 not with a rebuttal but with a refusal: a State Department official said the United States does not give credibility to the UN Fact-Finding Mission's findings, and the White House dismissed the Human Rights Council outright. Alongside it Trump told Axios he faces a decision on whether to go in and annihilate the Iranian regime, ahead of a Tuesday meeting with all six Gulf Cooperation Council leaders on the UN General Assembly sidelines. In Hormuz the IRGC claimed a strike on a Togo-flagged tanker and UKMTO reported a vessel hit by an unidentified projectile. Nothing de-escalated; the only improving variable is Saudi export volume.",
      risk7d:
        "Seven-day risk holds extreme, and its centre of gravity has moved. Five days without an active deadline ended when Trump put a return to mass strikes on the table and set Tuesday's GCC meeting in New York as the venue. Beneath that the physical position is mixed: Petroline offline since September 10 with Riyadh now promising half of capacity within days against Kpler's four-to-six-week estimate, Salalah dormant for a sixth day, Bab al-Mandeb held without formal closure. The corridor itself is the sharpest risk. Roughly 40 vessels a day transit under US escort carrying about 14 million barrels, Saudi shuttle tankers are now among them, and Iran has begun claiming rather than denying strikes on merchant hulls inside it.",
      spillover:
        "Spillover holds critical. Washington's rejection of a UN-mandated finding removes the diplomatic value of Monday's Geneva session while leaving the finding on the record and citable in international proceedings including at the ICC. The Gulf axis is being consolidated instead: six GCC heads meet Trump on Tuesday, days after Wang Yi publicly asked Iran to reopen the strait and a week before the September 24 US-China summit at which a major Chinese bank designation is pinned. The humanitarian axis widened again — IOM put displacement inside Yemen at 112,000 people in two weeks with nearly 3,000 arrivals in Djibouti, and its Yemen mission chief said agency stocks would be depleted very soon.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Time / NBC News / Stars and Stripes / Al Jazeera',
      event:
        "The United States rejected the UN Independent International Fact-Finding Mission's war-crime finding outright. A State Department official said Washington does not give credibility to the report's findings, and White House spokeswoman Anna Kelly said the Human Rights Council had accomplished nothing for human rights while spouting unserious nonsense for decades. That is a hardening from Day 203, when the Pentagon said only that it was reviewing the report and the State Department declined to comment. The Mission had found reasonable grounds to believe US forces committed the war crime of launching indiscriminate attacks in the February 28 strikes on the Shajareh Tayyebeh Primary School in Minab and a sports complex in Lamerd — 178 civilians — and said the failure to verify the target went beyond negligence. The Mission presents to the 47-member Council in Geneva on Monday, and its findings could be cited before international courts including the ICC.",
      summary:
        "Per §3.5.3 the response is cited as the administration's position and noted for what it does not do: it contests the Council's standing rather than the Mission's evidence, and the elevated Pentagon probe into Minab remains unpublished. Per §3.1 the report's parallel finding of crimes against humanity by Iran is carried alongside.",
      impact:
        "The finding is now on the record and rejected rather than answered, which forecloses the Geneva session as a pressure point and pushes the war's live decision to New York.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Axios / Common Dreams / Breitbart',
      event:
        "Trump told Axios he was nearing a decision on whether to restart mass strikes to end the war, framing it as a big decision coming up and asking whether he wants to go in and annihilate the Iranian regime or not. The remarks were made Thursday and land days before a Tuesday meeting with the leaders of Saudi Arabia, the UAE, Qatar, Bahrain, Kuwait and Oman on the sidelines of the UN General Assembly in New York — a session reported as shaping whether the next phase is another diplomatic push or intensified military action. No deadline, target set or decision date was attached.",
      summary:
        "Per §3.5.3 the framing is carried as the President's own and not as a stated intention: it is simultaneously a threat, a negotiating posture before a Gulf summit, and an admission that no current track is delivering an end state. Per §3.1 no corroborating military-preparation reporting accompanied it.",
      impact:
        "The active-deadline clock restarts after five days without one, set by the belligerent holding escalation dominance rather than by any mediator, with Tuesday in New York as the venue.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'UKMTO / Washington Times / Al Jazeera / IRGC via Iranian state media',
      event:
        "UKMTO reported that an oil tanker was struck by an unidentified projectile while transiting the Strait of Hormuz, that a fire broke out aboard and that all crew were safe; it withheld the vessel's name, flag and position, and the environmental impact and perpetrator remained under investigation. The report came hours after Iran said its forces had struck a ship attempting to pass illegally through the waterway, with the Revolutionary Guard separately claiming a Togo-flagged tanker was hit during what it called an illegal crossing. The blockade ledger moved by one vessel, to 105 commercial ships redirected from Iranian ports.",
      summary:
        "Per §3.1 the UKMTO advisory and the IRGC claim are carried as separate accounts with attribution unsettled; the analytically significant element is that Tehran is asserting the strike rather than leaving it deniable, as it did through most of the tanker war.",
      impact:
        "Claimed attacks inside a corridor that now carries Saudi shuttle cargo raise the war-risk cost of every transit and shorten the distance between a shipping incident and a state-to-state one.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Kpler / Baird Maritime / AGBI / Rapidan / Trading Economics',
      event:
        "The Saudi Hormuz workaround scaled sharply. Aramco has sold roughly 60 million barrels of Ras Tanura crude for loading by ship-to-ship transfer at Oman's Sohar across September and October — triple the volume reported a day earlier — with Chinese, South Korean, Indian and Japanese refiners among the buyers. Kpler put ship-to-ship transfers in the Gulf of Oman at 2.7 million barrels a day against 1.5 million in August, with Saudi loadings at Mideast Gulf ports up on the month. Riyadh is targeting recovery of about half of East-West pipeline capacity within days and full operations within six weeks, while Rapidan Energy expects Saudi exports down 400,000 barrels a day this month. Brent fell 1.46% to $103.29.",
      summary:
        "Per §3.5.5 the volume recovery is real and measurable — 2.7 against 1.5 million barrels a day of transfers, a third consecutive session of falling crude — and per §3.5.3 Riyadh's within-days claim is cited as an official figure against Kpler's four-to-six-week repair estimate and its month-to-half-exports assessment.",
      impact:
        "Volume is being restored by concentrating Saudi cargo in the single waterway Iran is now claiming to attack, trading an infrastructure problem for an escalation-exposure problem.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'IOM / UN News / US News / Arab News / Al Jazeera',
      event:
        "IOM said at least 112,000 people had been displaced inside Yemen within two weeks as fighting continued along the west coast, up from 104,796 reported on September 16, with nearly 3,000 having fled by sea to Djibouti and landing at scattered points near Obock. Djiboutian authorities are leading the response with the navy, army, police and health services mobilised, but IOM's chief of mission for Yemen, Abdusattor Esoev, said the agency's resources were very limited and its stocks would be depleted very soon. Saudi air tempo fell to 26 strikes in 24 hours from 40 the day before per the Houthi military spokesman, against a claimed 300 raids over five days; Sanaa was not struck and tens of thousands marched there against Riyadh.",
      summary:
        "Per §3.5.5 the displacement series has run from roughly 46,000 to 112,000 in five days of reporting while the receiving capacity has not moved, and the binding constraint is now stated by the responding agency as stock depletion rather than access. Per §3.1 the strike counts are the Houthi spokesman's and Riyadh has published none.",
      impact:
        "Saudi tempo halving while displacement keeps climbing separates the air campaign from the humanitarian curve, which is now driven by ground fighting on the west coast rather than by sorties.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7 alone.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 204 — a seventeenth consecutive day with no verified new US combat casualty. Day 204's US developments were political and legal: Washington rejected the Fact-Finding Mission's findings through a State Department official and White House spokeswoman Anna Kelly, and Trump told Axios he faces a decision on whether to annihilate the Iranian regime ahead of Tuesday's meeting with six Gulf leaders at the UN General Assembly.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the combat series against DCAS 18 / 687 all-cause and The Intercept's Pentagon figure of 410 killed or wounded since July 7; per §3.5.3 keep the combat figure and flag both divergences. The war's legal exposure hardened rather than resolved: the administration disputed the Human Rights Council's credibility rather than the Mission's evidence, the elevated Pentagon probe into Minab remains unpublished, and Trump's June statement that nobody purposefully attacked a girls' school still stands against a Reuters-reported internal finding of likely US responsibility. Roughly 40 ships a day transit Hormuz under US protection carrying about 14 million barrels. The Senate has not taken up the House's 220-204 war powers resolution, the $67B supplemental is unresolved, and AAA's record diesel print of $6.23 a gallon — up nearly 69% year on year — carries into the midterm cycle.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel stayed offstage for a sixth consecutive day, absent from Washington's rejection of the Fact-Finding Mission report, from Trump's annihilation framing, from the Hormuz tanker incident and from the Gulf leaders' meeting set for Tuesday. Katz's Lebanon position carries unchanged; the Gaza ceasefire holds broadly with sporadic strikes.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. The notable Israeli fact is again an absence, and it remains consequential: the Mission's indiscriminate-attack finding attaches to the United States alone on the coalition side, so Washington is now carrying a legal exposure and a rejection of it that Israel does not share. Lebanon's toll continues to accumulate outside the Iran-front ledger at roughly 4,300 killed and over 12,200 wounded since March. Katz has tied withdrawal from the roughly 700 sq km security belt and the Ali al-Taher ridge to nationwide Hezbollah disarmament, with no territorial ambitions claimed. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and are reinforced by a sixth quiet day.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official Iranian war toll on Day 204. The IRGC claimed a strike on a Togo-flagged tanker making an illegal crossing of Hormuz, hours before UKMTO reported a vessel hit by an unidentified projectile with a fire aboard and all crew safe; per §3.1 both accounts are carried and attribution is unsettled. Tasnim gave the UN Mission's US war-crime finding prominent play; the same report's crimes-against-humanity finding against Tehran has not received comparable Iranian coverage. Silence on the Taeb report ran to a sixth day.",
      status:
        "Tehran is running the half-report strategy the symmetric-indictment prior anticipated: amplify the US war-crime finding, ignore the finding that its own repression of the 2025-26 protests amounts to crimes against humanity including murder, imprisonment and torture as part of a systematic attack on civilians. The rights thread carries: HRW and the Abdorrahman Boroumand Center document at least 59 men arbitrarily executed between March 18 and the end of August, including at least 29 arrested over the December 2025-January 2026 protests and three from 2022, several aged 18 or 19, five in public; Iran Human Rights Monitor counted 23 executions between August 23 and 26. Araghchi's conditions on any Hormuz reopening carry — conditional, and subject to compensation for the violation of the June memorandum — now against both a public Chinese request to reopen and an American threat to escalate. The IAEA Board referral (23-3, eight abstentions) carries, with the Security Council still unable to seat a 1737 Committee chair or appoint a Panel of Experts over Russian and Chinese objections. The Supreme Leader has not been seen in roughly six months.",
    },
    other: {
      cumulative:
        'Yemen/Houthi-Saudi ~3,598 KIA · 10,804+ WIA across Lebanon (~4,300+/12,200+), Gulf states (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+)',
      delta:
        "+0 confirmed on either side of the Saudi-Houthi exchange for a second consecutive day, with no tally from Riyadh and none from Sanaa. Saudi air tempo fell to 26 strikes in 24 hours from 40 per the Houthi military spokesman, against a claimed 300 raids over five days; Sanaa was not struck. Displacement is again the delta: IOM put displacement inside Yemen at 112,000 people over two weeks, up from 104,796, with arrivals in Djibouti at nearly 3,000 and IOM's Yemen mission chief warning stocks would be depleted very soon. The IOM shipwreck toll of 13 dead and 14 missing stays held pending confirmation and out of the cumulative.",
      status:
        "Yemen remains the war's independent escalation generator, and on Day 204 its air campaign and its displacement curve moved in opposite directions — sorties down by roughly a third while displacement rose another 7,000 in two days, which locates the humanitarian driver in west-coast ground fighting rather than in Saudi airpower. The Houthis hold Mokha, Mayun and the Hanish islands and the length of Yemen's Red Sea coast; Bab al-Mandeb carries about 12% of global trade, 11% of seaborne oil and 8% of LNG, with no formal closure declared and that rung still in reserve. Petroline stays offline since September 10 — 1,200 km, 7 mb/d nameplate — with Riyadh now promising half of capacity within days and full operations within six weeks against Kpler's four-to-six-week estimate. Aramco's Sohar ship-to-ship arrangement has tripled to roughly 60 million barrels, moving through Hormuz under US naval protection. Iraq's reopening of two of three Iran crossings remains the theatre's only active de-escalation.",
    },
  },
  exec:
    "Day 204 answered Day 203's legal finding with a flat rejection and a threat. Washington refused the UN Fact-Finding Mission's conclusions outright: a State Department official said the United States does not give credibility to the findings, and White House spokeswoman Anna Kelly said the Human Rights Council had accomplished nothing for human rights while spouting unserious nonsense for decades (CNBC, Time, NBC News) — a hardening from the Pentagon's reviewing of the day before. Trump told Axios he had a big decision coming up, framed as whether he wants to go in and annihilate the Iranian regime or not, days before a Tuesday meeting with the leaders of Saudi Arabia, the UAE, Qatar, Bahrain, Kuwait and Oman on the UN General Assembly sidelines. Hormuz supplied the counterpoint: UKMTO said a tanker was struck by an unidentified projectile and caught fire, all crew safe, hours after the IRGC claimed it had hit a Togo-flagged vessel making an illegal crossing — Iran now claiming attacks in a corridor where roughly 40 ships a day move under American escort. The Saudi workaround scaled rather than stalled: Aramco has sold about 60 million barrels of Ras Tanura crude for ship-to-ship transfer off Sohar across September and October, triple the volume reported a day earlier, and Kpler put Gulf of Oman transfers at 2.7 million barrels a day against 1.5 million in August. Brent fell 1.46% to $103.29. Saudi air tempo over Yemen dropped to 26 strikes in 24 hours from 40, Sanaa still unstruck, while IOM put displacement inside Yemen at 112,000. Direction escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'The rejection was the tell, and the deadline moved from Geneva to New York',
      body:
        "Washington did not contest the Fact-Finding Mission's evidence; it contested the Mission's standing. A State Department official said the US does not give credibility to the findings and the White House called the Council's output unserious nonsense (CNBC, Time, NBC News). Per §3.5.3 that is an institutional argument, not a factual rebuttal, and it is cited as the administration's position: the Minab intelligence failure the Mission described as beyond negligence remains unanswered, and the Pentagon probe Reuters reported as finding US forces likely responsible remains unpublished. Per §3.1 the report's other half — crimes against humanity in Iran's protest crackdown — is carried, and Tehran's media has amplified one half while ignoring the other, exactly as the symmetric-indictment prior predicted on Day 203. The more consequential shift is calendrical. Monday's Geneva session is now a formality against a rejected report, while Tuesday's meeting between Trump and the leaders of all six GCC states in New York becomes the war's live decision point, against Trump's own framing of a choice between annihilation and something else. Analytical judgment: under the multi-clock framework the active-deadline clock has restarted after five days without one, and it is being run by the belligerent with escalation dominance rather than by a mediator.",
    },
    {
      title: 'Iran has begun claiming the attacks it used to leave unattributed, inside the corridor Riyadh just entered',
      body:
        "UKMTO reported a tanker struck by an unidentified projectile with a fire aboard and all crew safe; hours earlier the IRGC said it had struck a Togo-flagged vessel attempting an illegal crossing (UKMTO, Washington Times, Al Jazeera). Per §3.1 the two accounts are carried separately and attribution is unsettled, but the claim itself is the development: for most of the tanker war Tehran left strikes deniable, and it is now asserting them in the same week its principal customer publicly asked it to reopen the strait. That lands against a corridor whose composition changed on Day 203. Aramco's Sohar arrangement has tripled to roughly 60 million barrels across September and October, and Kpler puts Gulf of Oman ship-to-ship transfers at 2.7 million barrels a day against 1.5 million in August (Kpler, AGBI, Baird Maritime). Per §3.5.5 the energy-infrastructure clock is improving on volume — Mideast Gulf loadings up, Brent down 1.46% to $103.29 — while the risk concentration worsens: more Saudi-origin cargo now moves through the one waterway Iran is claiming to attack. Analytical judgment: the escort-dependency prior is strengthening, and a claimed rather than deniable strike on a laden hull in that corridor is now the single cheapest path to repricing both oil and the Saudi position.",
    },
    {
      title: 'Taiwan: the corridor works, but the queue is longer and the claim is louder',
      body:
        "No fresh Taiwan-specific development today; the exposure moves through the Saudi and Hormuz numbers instead. Taipei's Red Sea crude arrangement stays dark with Petroline offline since September 10 and Riyadh now promising half of capacity within days and full operations within six weeks — an official claim that per §3.5.3 sits against Kpler's four-to-six-week repair estimate and a month to restore half of exports. Meanwhile the route that does work has filled up with better-placed buyers: Chinese, South Korean, Indian and Japanese refiners are the named takers of the 60 million barrels transferring at Sohar, and Taiwanese-chartered cargoes have no standing claim on the American escort that makes those transfers possible. Exposure holds: roughly 96% of energy imported, LNG about half of generation, nearly 40% of long-term contracted LNG from Qatar, reserves near twelve days against a statutory fourteen-day floor not due until 2027. Analytical judgment: Taiwan's problem on Day 204 is not price but priority — the substitution chain now has a visible queue, Taipei is not near the front of it, and an IRGC that claims its tanker strikes raises the war-risk cost of every cargo Taipei must buy spot.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 killed or wounded since July 7 carries. Per §3.5.3 keep the combat series and flag both divergences. Seventeenth consecutive quiet day. Day 204's US developments were legal and political: Washington rejected the Fact-Finding Mission's findings — State Department official, White House spokeswoman Anna Kelly — contesting the Council's standing rather than the evidence, with the elevated Pentagon probe into Minab still unpublished. Trump told Axios he faces a decision on whether to annihilate the Iranian regime, ahead of Tuesday's meeting with six Gulf leaders at the UNGA. Escort corridor holds at ~40 ships/day and ~14 mb/d. Senate has not taken up the 220-204 House resolution; AAA diesel record $6.23/gal carries.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll. Israel stayed offstage for a sixth day and remains outside the Fact-Finding Mission's indiscriminate-attack finding, which attaches to the United States alone — and therefore outside the rejection Washington issued on Day 204. Katz carries: no withdrawal from the ~700 sq km belt or the Ali al-Taher ridge until Hezbollah is disarmed nationwide, with no territorial ambitions claimed. Lebanon's separate ledger runs ~4,300+ killed / 12,200+ wounded. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries unchanged; Day 204 produced no new count. The IRGC claimed a strike on a Togo-flagged tanker making an illegal Hormuz crossing, hours before UKMTO reported a vessel hit by an unidentified projectile with a fire aboard and all crew safe — both carried per §3.1 with attribution unsettled. Tasnim amplified the UN Mission's US war-crime finding; the same report's crimes-against-humanity finding against Tehran did not receive comparable coverage, which is the symmetric-indictment prior operating as expected. Sixth day of silence on the Taeb report. Rights thread carries: HRW and the Boroumand Center ≥59 arbitrary executions March 18-end August, ≥29 arrested over the December 2025-January 2026 protests, three from 2022, several aged 18-19, five in public; Iran HRM 23 executions August 23-26. Araghchi's reopening conditions carry against both a Chinese request and an American threat. IAEA UNSC referral (23-3) carries; the Council still cannot seat a 1737 Committee chair. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "+0 confirmed casualties on either side of the Saudi-Houthi exchange for a second day, with no tally published by Riyadh or Sanaa. Saudi tempo fell to 26 strikes in 24 hours from 40 per the Houthi spokesman, against a claimed 300 raids over five days; Sanaa unstruck, with tens of thousands marching there against Riyadh. Displacement is the delta: IOM put displacement inside Yemen at 112,000 over two weeks, up from 104,796, with nearly 3,000 arrivals in Djibouti and IOM's Yemen mission chief saying stocks would be depleted very soon. The IOM shipwreck toll of 13 dead / 14 missing stays held pending confirmation and excluded. Petroline offline since September 10; Riyadh targets half of capacity within days and full operations within six weeks against Kpler's four-to-six-week estimate. Aramco's Sohar STS arrangement tripled to ~60 mb; Gulf of Oman transfers 2.7 mb/d vs 1.5 mb/d in August. Lebanon (~4,300+/12,200+), Gulf (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
