import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "A president who will deny a strike only for the day in front of him, a prime minister campaigning on an image of a nuclear blast over his own largest city, Iranian officials describing a plan to target American diplomats, and the single largest Hormuz-bypass pipeline added to a declared target list. The second day of the named weekend passed without a strike, which is the only de-escalatory fact on the board, and it expires tonight.",
      risk7d:
        "Two ballots inside nine days, a one-day permit in place of a dated pledge, unnamed American officials describing a joint strike as a matter of timing with the president “very close”, and ten ballistic missiles fired toward southern Saudi Arabia in a single day. The third carrier group and roughly 10,000 personnel are still in transit and still due after the midterms, so the force flow has not yet arrived to confirm or deny any of it.",
      spillover:
        "Missile debris in the Mecca region, interceptions over Riyadh, Aramco’s Yanbu and Rabigh plants and the East-West Pipeline named as targets, a fifth rendering of the Hormuz mining claim, oil still on three emirates’ beaches, and detailed Iranian plans against Gulf subsea cables drawing a sixth cycle of silence from every operator, regulator, insurer and Gulf government.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "Donald Trump via The Times of Israel and The Jerusalem Post",
      event: "Trump denies a strike for one day only, says he has not decided, and characterises the nuclear sites as quiet",
      summary:
        "Asked by a reporter on Sunday whether he would strike Iran, the president said “The answer is no” and “There will not be a strike today.” He did not rule out later action, said he had not decided whether to renew strikes, and framed the choice as finishing the job or reaching a deal. Asked about Iran’s nuclear sites he said “there isn’t much activity going on there”, and said Washington is monitoring Pickaxe Mountain and three sites reported destroyed in earlier strikes.",
      impact:
        "A one-day denial replaces the dated pledge voided on Day 240 and cannot be extended past the day it covers. Unnamed American officials told The Jerusalem Post that a joint US-Israeli strike is a matter of timing and that Trump was “very close” to escalating, with the prevailing Washington assessment that a final decision waits until after 3 November. The claim of quiet at the nuclear sites is unreconciled against Iran’s refusal of IAEA access since the war began.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Benjamin Netanyahu and Gadi Eisenkot via The Times of Israel and Haaretz",
      event: "On election eve the prime minister campaigns on an AI image of a nuclear strike on Tel Aviv",
      summary:
        "Netanyahu posted an AI-generated image of a nuclear blast over Tel Aviv and warned of a “second Holocaust” if he is not elected. Gadi Eisenkot, his main rival, called him “hysterical”. Netanyahu separately claimed Iran may try to disrupt Tuesday’s election and warned, “Don’t test us.” He was reported to be seeking further public backing from Trump before the vote.",
      impact:
        "The IDF announced a general closure for West Bank Palestinians on election day, adding to the highest state of alert, cancelled leave, closed crossings and the major drill recorded on Day 240. Zamir’s reported assessment that there is no operational need to strike Iran before the ballot was neither withdrawn nor tested this cycle, and the prime minister answered it with a campaign image rather than an operational argument.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Two Iranian officials via The New York Times, relayed by The Times of Israel",
      event: "Iranian officials confirm Tehran is preparing to target American diplomats and personnel",
      summary:
        "Two Iranian officials, one of them a member of the Revolutionary Guards, told The New York Times that Iran is preparing to target US diplomats and personnel. The remarks were reported on Saturday and carried into Sunday’s coverage.",
      impact:
        "This converts the Day 240 warning by Director of National Intelligence Jay Clayton that Iran had “substantially increased efforts to target U.S. personnel” abroad from an American threat assessment into the actors’ own account of their intent. It is still a statement of preparation rather than an attack, and no casualty follows from it, but it is the first time this file has recorded both sides describing the same targeting plan.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Abbas Araghchi via DAWN and Iran International",
      event: "Iran’s foreign minister says war or no war the positions do not change, and adds a regional condition",
      summary:
        "Speaking at a televised event in Tehran on Sunday, Araghchi said: “Whether there is war or not, our policies remain the same”, and of renewed attacks, “if they want to try again, they know they will achieve no different outcome from those of the past.” He added: “The current war has changed everything. We must accept that new realities are taking hold”, that “shipping routes through the Strait of Hormuz will no longer be the same”, and that the region must move towards “the complete absence of foreign forces”.",
      impact:
        "The three deal signals recorded on Day 240 have acquired no venue, no date and no named interlocutor within 24 hours, and the foreign minister has restated maximal positions and attached a regional condition no American administration has entertained. Under the mechanism-without-a-track prior the probability moves on a mechanism, not a sentence; the 30-day figure therefore returns to 3. Tehran’s call for a return to the Islamabad Memorandum of Understanding is not attributed to him.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Yahya Saree and the Saudi-led coalition via FinanceFeeds and Gulf News",
      event: "The Houthis name the East-West Pipeline and Aramco’s Yanbu and Rabigh plants, and missiles reach Riyadh and the Mecca region",
      summary:
        "Houthi spokesman Yahya Saree’s target list named Aramco facilities at Yanbu, the Rabigh refinery, crude pumping stations and the East-West Pipeline, along with airports at Riyadh, Dammam and Najran and the Khamis Mushait airbase. The Saudi-led coalition said it destroyed two ballistic missiles aimed at Yanbu and Taif, intercepted a ballistic missile aimed at Riyadh with explosions heard in the capital, reported a drone in the Riyadh region and a cruise missile at Khamis Mushait, and later reported ten ballistic missiles fired toward southern Saudi Arabia.",
      impact:
        "Saudi Civil Defence said debris from two intercepted missiles fell in Mecca’s Wadi Al Mughammas and other western locations; the Houthis denied targeting Mecca and Medina, calling the claim “a great and huge lie”. No Saudi official or independent source has confirmed a hit on oil infrastructure, and the coalition did not comment on damage. Naming the East-West Pipeline puts the single largest piece of Hormuz-bypass capacity in this file on the declared target list of the party already striking it.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "The IRGC Navy and UKMTO via Gulf News",
      event: "The hull claim arrives in a fifth rendering, and UKMTO logs the Limah projectile strike",
      summary:
        "The IRGC Navy said two supertankers struck naval mines on an “unauthorised southern route” in the Strait of Hormuz on Friday, carrying a combined “more than 4.5 million barrels” of crude, and said both were abandoned and left stranded. No vessel names were given. UKMTO reported a tanker hit by an unknown projectile at 5:15 pm UTC on 22 October about seven nautical miles north-east of Limah, Oman; the tanker continued its voyage and no casualties were reported.",
      impact:
        "This is a fifth distinct rendering of the hull claim in a fortnight, against the four-struck-and-three-mined version carried on Day 240 and the earlier seven-or-eight. None has been independently confirmed and CENTCOM has still issued no assessment. The claim-inflation prior is vindicated again; UKMTO’s warning numbers and coordinates remain the standard, and the Limah strike is still unattributed.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: "The Energy Department, Baker Hughes and Saudi Aramco via FinanceFeeds; Bloomberg via Energy Connects",
      event: "The reserve draw is named and dated, the SPR is at a 44-year low, and the Fed decides on Wednesday",
      summary:
        "The emergency Strategic Petroleum Reserve exchange of up to 400,000 barrels authorised on Day 240 is for Phillips 66’s Lake Charles refinery, and the SPR now stands at its lowest level since 1982. Markets were closed for the weekend, so Brent’s $116.72 settle of Friday 23 October and WTI’s $103.27 still stand, with Brent quoted near $117.30 late and up about 6 percent on the week. Aramco’s chief executive put East-West Pipeline throughput near 7 million barrels a day on a line of roughly 1,200 km from Abqaiq to Yanbu.",
      impact:
        "The Fed decides on Wednesday at 2 pm EDT with a hold priced above 90 percent, while Yardeni Research puts December hike odds at 84 percent and the 10-year yield sits near 5 percent. The Baker Hughes rig count held at 603 for a third consecutive reading. The five “highest since” dates carried for one week are still not differenced, and the throughput figure is a company claim with no commissioning date.",
    },
    {
      id: 8,
      direction: 'neutral',
      importance: 'medium',
      source: "Egyptian parliamentary parties via Egypt Independent; Reza Amiri Moghadam via Press TV",
      event: "Egypt’s authorisation vote falls due today with its parties split, and the Russia track keeps two dates",
      summary:
        "Egypt’s parliament is due to vote today, 26 October, on authorising military support to Saudi Arabia, after the 19 October postponement. Party positions run from approval to abstention, with the Egyptian Social Democratic Party instructing its members to abstain for lack of stated objectives, duration, cost or risk to Egyptian troops. A two-thirds majority is required and no Saudi request has been published.",
      impact:
        "The legislature-prices-the-deployment prior reaches its test in Cairo today. Separately, Pezeshkian’s Moscow meeting with Putin is reported on two calendars — one placing it on 25 October, another on Tuesday for a gas exporters’ summit — and Iranian state media frames it as economic and trade cooperation. The two dates are held apart and not differenced. Turkey’s parliament has still not acted on the Mecca Pact referral that Tehran said it would study.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Amir Hatami via Iranian state television; the Central Bank of Iran and Iran HRM via the NCRI",
      event: "The army commander shows an underground drone plant, and the inflation series splits by income decile",
      summary:
        "Iranian state television footage dated 22 October showed Army Commander-in-Chief Amir Hatami at a facility described as an underground drone factory, where he said: “We have expanded our production centers, and today we have very good reserves.” Reuters has put Iran’s pre-war potential at about 10,000 drones a month; current capacity has not been independently established. Pezeshkian called for a crackdown on fuel smugglers, including cancelling or blocking the fuel cards of violators.",
      impact:
        "Opposition-relayed Central Bank figures put overall monthly inflation for September at 4.24 percent, with the first income decile at 6.28 percent against the tenth at 7.52 percent. That sits beside the 83.8 percent and 89.8 percent point-to-point figures already carried as a sixth contested count, and none of the three is differenced. All of it is opposition-sourced or opposition-relayed and recorded as such.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators’ figure: up to 23 KIA / 861 WIA",
      delta: "+0 disclosed",
      status:
        "A twenty-sixth consecutive cycle with nothing disclosed, recorded as an absence of disclosure rather than a lull. Senator Warren’s 16 October letter to Admiral Brad Cooper carries unanswered with seven days to the 2 November deadline. Two Iranian officials have now told The New York Times that Tehran is preparing to target American diplomats and personnel, which is a statement of intent and not a casualty, and the senators’ fifth series is still neither merged nor differenced.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series on the eve of the ballot. The military holds its highest state of alert with leave cancelled, and the IDF has ordered a general closure of the West Bank for election day. Gaza deaths stay on their parallel series; the Palestinian Authority says 2,670 people have been displaced by the Hebron operation, which is recorded on that separate track.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll, and the denied Konarak claims stay held apart and unadded. A forty-seventh day with no confirmed Iranian attack on a host state’s territory. The internal ledger carries unchanged from Day 240, with the four unmerged execution series still unreconciled and Manouchehr Fallah’s upheld death sentence standing.",
    },
    other: {
      cumulative: "KIA: 3,701+ · WIA: 11,186+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 adopted",
      status:
        "No addition adopted. A Saudi airport worker, Sultan bin Ali Al Mastour Al Qahtani, is reported by his father to have died fighting a fire at King Fahd International Airport in Dammam after the 21 October strike; that is recorded as a named death on a family account and held as a detail, not an increment. Houthi media reported Saudi strikes killing 11 in Sanaa, three in Sanaa’s Asr district and five of one family in Hodeida, all held apart as that side’s figures. The claimed Yanbu, King Khalid and Abha strikes still carry no toll.",
    },
  },
  exec:
    "Asked on Sunday whether he would strike Iran, the president said: “The answer is no. There will not be a strike today.” He did not rule out action later, said he had not decided whether to renew strikes, and framed the choice as finishing the job or reaching a deal; of Iran’s nuclear sites he said “there isn’t much activity going on there”, adding that Washington is monitoring Pickaxe Mountain and three sites reported destroyed in earlier strikes. Unnamed American officials told The Jerusalem Post that a joint US-Israeli strike is a matter of timing and that Trump was “very close” to escalating. This is what the pledge voided on Day 240 has been replaced by: a calendar issued one day at a time. The second day of Barrack’s named weekend passed without a strike. On election eve Netanyahu posted an AI-generated image of a nuclear blast over Tel Aviv and warned of a “second Holocaust” if he is not returned; Eisenkot called him “hysterical”; the prime minister said Iran may try to disrupt the vote — “Don’t test us” — and the IDF ordered a general closure of the West Bank for election day. Two Iranian officials, one from the Revolutionary Guards, told The New York Times that Tehran is preparing to target American diplomats and personnel, converting the intelligence warning of Day 240 into the actors’ own account. Araghchi said in Tehran that “whether there is war or not, our policies remain the same” and that the region must move toward “the complete absence of foreign forces”. The Houthis named the East-West Pipeline itself. Thirty-day ceasefire probability falls to 3: three openings, still no mechanism. Direction holds escalating.",
  implications: [
    {
      title: "The voided pledge has been replaced by a one-day permit, which is the worst available instrument for forecasting",
      body:
        "Day 240 recorded the 9 October pledge as withdrawn by its author, who declared the question unanswerable. Day 241 shows what fills the vacuum: “The answer is no. There will not be a strike today.” A one-day denial is not a commitment; it is a renewable permit, and it has to be reissued every morning to mean anything. Analytical judgment: under the multi-clock framework the active-deadline clock now ticks in 24-hour increments, which makes the voided-deadline prior operational rather than merely descriptive. The same remarks carried the opposite signal — no decision taken, the choice framed as finishing the job or a deal, and unnamed officials telling The Jerusalem Post that a joint strike is a matter of timing with the president “very close”. The planning-is-not-decision prior still governs and the force flow still has not arrived: a third carrier strike group and roughly 10,000 sailors and Marines remain in transit, due after the midterms, and staffing at regional bases has been reduced rather than reinforced. Grade by tasking, munitions movement and carrier position. Note also that “there isn’t much activity going on there” is the first presidential characterisation of the nuclear sites’ condition this file has recorded, and it sits unreconciled against Iran’s refusal of IAEA access since the war began, which leaves roughly 440.9 kg of 60 percent material unverified. A claim of quiet at sites no inspector has entered is not an assessment.",
    },
    {
      title: "Both ballots are now being fought on the war, and in Jerusalem the campaign has reached the image of a mushroom cloud",
      body:
        "Netanyahu posted an AI-generated image of a nuclear blast over Tel Aviv and warned of a “second Holocaust” if he is not re-elected; Eisenkot called him “hysterical”. He claimed Iran may try to disrupt Tuesday’s vote and said “Don’t test us”, and the IDF ordered a general closure of the West Bank for election day on top of the highest alert, cancelled leave and closed crossings recorded on Day 240. Analytical judgment: the institution-against-principal prior holds and sharpens. Zamir’s reported “no indications of a need to strike Iran before the election” has not been withdrawn, and nothing this cycle tested it; the prime minister answered it not with an operational argument but with a campaign image. Ali Vaez of the International Crisis Group put the structure plainly: “Both Trump and Netanyahu may see war with Iran as a political escape hatch.” Against that, Pew found roughly two-thirds of Americans disapprove of the president’s handling of the conflict, and Bloomberg Economics described the region as feeling “eerily similar” to its pre-war state in February. The two-audience prior governs: the maximal voice is addressed to a ballot and the restraining voice to a general staff, and only one of them has to be right on Tuesday. What this file cannot yet grade is whether Zamir’s position survives the count, which remains the most consequential open question on the board.",
    },
    {
      title: "Taiwan: the Houthis named the bypass pipeline, and the asset class Taipei is most exposed to is a declared target on two fronts",
      body:
        "Houthi spokesman Yahya Saree’s target list named Aramco facilities at Yanbu, the Rabigh refinery, crude pumping stations and the East-West Pipeline itself — the roughly 1,200-kilometre Abqaiq-to-Yanbu line whose capacity Aramco had just put at 7 million barrels a day, and which a Houthi drone already shut once in September, suspending Yanbu loadings on 15 September. Analytical judgment: the bypass-as-target prior is no longer an inference. The largest piece of Hormuz-bypass capacity in this file has been named by the party already striking it, and the announced-capacity-is-not-moved-barrels prior gains its missing number from the wrong direction — Aramco’s chief executive put throughput near 7 million barrels a day, a company figure with no commissioning date and no independent verification. The coalition said it destroyed two ballistic missiles aimed at Yanbu and Taif and did not comment on damage; no Saudi official or independent source has confirmed a hit on oil infrastructure. For Taipei the exposure is unchanged in kind and worse in degree: Iran holds detailed plans against Gulf subsea cables, data centres and AI facilities, a sixth cycle with no response from any operator, regulator, insurer or Gulf government. No fresh Taiwan development: the DGBAS consultation answer and the NT$607.6 billion supplementary budget stand unchanged, nine weeks from the year-end lapse, and neither the Gem No.2’s Taiwanese owner nor any regulator in Taipei has answered the spill attribution.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-sixth consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The senators’ figure of up to 23 killed and 861 wounded is held as a fifth series with seven days to the 2 November deadline and no CENTCOM response.",
    israel:
      "No addition on the war series on the eve of the ballot, with the military at its highest state of alert, leave cancelled and a general West Bank closure ordered for election day. Gaza deaths stay on their parallel series.",
    iran:
      "No new official war toll, and the Konarak claims stay unadded. The internal-front ledger carries unchanged, and the four unmerged execution series stand unreconciled.",
    other:
      "No addition adopted. The named Dammam death is held as a family account and a detail rather than an increment, and the Houthi-run figures for Sanaa and Hodeida are held as that side’s claims.",
  },
};

export default data;
