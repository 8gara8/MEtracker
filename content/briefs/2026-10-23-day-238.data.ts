import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING. Trump said \"No, I think we're not negotiating\", the New York Times reported US and Israeli plans for renewed strikes after the midterms with energy, nuclear and missile targets named, and dozens of Israeli jets flew as far as the Iranian border on Monday.",
      risk7d:
        "Extreme and worsening. The IRGC declared an offensive and asymmetrical doctrine, claimed a 1.5-times missile stockpile and promised a \"father of all bombs\", while Rezaei named cables, data centres and AI facilities as targets. The Israeli ballot is four days out and the strike planning points past it.",
      spillover:
        "Critical. The State Department ordered non-emergency staff and families out of Saudi Arabia, Aramco evacuated its Dhahran headquarters, and Riyadh confirmed deaths at Shaybah and Dammam. Saree claims the Defence Ministry itself; Egypt's two-thirds vote is three days out.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump via Outlook India and Al Jazeera; Abbas Araghchi via IRNA",
      event: "Trump says the United States is not negotiating, and the claimed acceptance does not survive it",
      summary:
        "Asked by reporters on Wednesday whether talks with Tehran were under way, Trump said \"No, I think we're not negotiating\", adding the United States would have \"something one way or the other\" \"fairly soon\". At a South Carolina rally he said the war \"will end very soon\" and \"we could leave now, but we want to make sure it lasts for a long time\". It is the first American statement bearing on Araghchi's claim of 21 October that the Americans \"agreed to these conditions, but they wanted to add a few more clauses\", and it reverses Trump's own 8 October \"productive discussions\".",
      impact:
        "Not a point-by-point denial, and the seven-day proposal is still unaddressed in Washington, but it is the only American statement there is and it contradicts the premise that a negotiation exists. The claimed acceptance is retired from the active board and the thirty-day probability falls from 5 to 3.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "The New York Times via TIME and Just Security; Axios via Just Security",
      event: "The New York Times reports post-midterm strike plans with the target classes named",
      summary:
        "The New York Times reported on Wednesday, citing US officials and others familiar with the deliberations, that the United States and Israel have developed plans for renewed strikes on Iran after the 3 November midterms, with likely targets including energy infrastructure, nuclear facilities and the missile and drone arsenal, and that both militaries have stepped up exercises including flights over Iraq. Trump has not approved them. Hegseth discussed renewed strikes with Netanyahu in Israel the same week, and Axios reported dozens of Israeli Air Force jets flew as far as the Iranian border on Monday.",
      impact:
        "The pre-vote-force-flow prior is confirmed from the planning side as well as the force side: the decision window opens after 3 November, not before it. The last reported US strikes on Iran were on 8 September.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Hossein Mohebi and Esmail Baghaei via Al Jazeera and TIME; Mohsen Rezaei via bne IntelliNews",
      event: "The IRGC declares an offensive doctrine and Rezaei names cables and data centres as targets",
      summary:
        "IRGC spokesman Hossein Mohebi announced a shift to an \"offensive and asymmetrical\" defence doctrine, threatening to invade countries that attack Iran and to strike bases used in US operations, said the missile stockpile had grown 1.5 times since the June 2025 war without giving figures, said \"the quality of the missiles has improved significantly\", and said a new weapon called the \"father of all bombs\" would be unveiled. Rezaei said cables, data centres and AI facilities in the region could be targeted if war resumes. Baghaei said a strike on Pickaxe Mountain would draw a response \"just as hard\".",
      impact:
        "The subsea-cable threat carried unanswered for two cycles is now stated by the secretary of the Supreme National Security Council rather than a spokesman. The target class still has no interceptor and no instrument, and the \"father of all bombs\" is a direct rhetorical answer to the reported GBU-43 option.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Tommy Pigott and the State Department via Al Jazeera, CNN and Just Security",
      event: "The State Department orders non-emergency Americans out of Saudi Arabia",
      summary:
        "The Department of State ordered the departure of non-emergency US government employees and their family members from its mission in Saudi Arabia on Wednesday. Spokesman Tommy Pigott said \"Iranian-supported Houthis have increasingly engaged in hostilities against Saudi Arabia\", citing attacks on civilian airports and other critical infrastructure, and that \"the safety and security of Department personnel and their families remain our highest priority\". He called a report of a Gulf-wide drawdown \"inaccurate\"; four US officials told Reuters other Gulf missions would order family members out. The Riyadh embassy issued a security alert the same day.",
      impact:
        "The first ordered departure from the kingdom in this phase, and the American government pricing the Saudi theatre with its own staff rather than with a statement. Watch whether the other Gulf missions follow and whether Pigott's \"inaccurate\" survives the week.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Reuters and Bloomberg via The New Arab and the Cyprus Mail",
      event: "Aramco evacuates its Dhahran headquarters for the first time since the Yemen war resumed",
      summary:
        "Saudi Aramco ordered staff to leave its Dhahran headquarters and work remotely on Thursday, per Reuters citing six sources — the first such order since the Yemen war resumed in September. Bloomberg reported the evacuation followed an alarm inside the complex whose cause its sources could not identify. Aramco did not respond to either outlet, and nor did the Energy Ministry. There was no immediate indication of disruption to production or exports. The 13 October strike on the same headquarters remains unreconciled: Reuters reported extensive damage and a multi-floor fire, Bloomberg about three floors damaged, the Energy Ministry a limited fire with no casualties.",
      impact:
        "The national oil company has now priced the threat to its own head office, which is a harder signal than any ministry statement. The 13 October accounts stay held apart and are not differenced.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "The Saudi Ministry of Energy and the General Authority of Civil Aviation via House of Saud, The New Arab and Just Security",
      event: "Riyadh publishes casualty figures of its own and a three-cycle silence partly ends",
      summary:
        "The Saudi Ministry of Energy confirmed two foreign contract workers — a Filipino and a Nepali national — killed and a Pakistani and an Indian national injured at the Shaybah oil field when air defences intercepted a drone and debris struck a contractor's vehicle outside the perimeter, saying the incident \"did not affect operations at the oil field\" and naming no perpetrator. The General Authority of Civil Aviation attributed the Dammam airport attack to the Houthis and confirmed two killed and eight injured, having first reported one; the Wall Street Journal still carries one. Operations resumed.",
      impact:
        "The first Saudi-confirmed casualty figures attached to any Houthi-claimed target in this phase, and they are adopted. Riyadh has still said nothing on the claimed Yanbu, King Khalid or Abha strikes, nor answered Saree on the Shabwa camp.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "Yahya Saree and Turki al-Maliki via This Is Beirut and House of Saud",
      event: "Saree claims the Saudi Defence Ministry itself and the coalition answers with an interception count",
      summary:
        "Saree claimed four operations over 48 hours using ballistic missiles and drones: a direct hit on the Ministry of Defence headquarters in Riyadh, the office of Prince Khalid bin Salman; a strike disrupting air traffic at King Fahd International Airport in Dammam; a fire at Aramco facilities in Yanbu; and a direct hit on Abha International Airport. He alleged more than 2,900 Saudi air and missile strikes on Yemen over 100 days and more than 562 killed or wounded, most of them women and children, and said attacks would continue until operations end and the blockade is lifted.",
      impact:
        "Coalition spokesman Turki al-Maliki said four drones were intercepted over Riyadh and Madinah, named no targets, and neither confirmed nor denied the ministry strike; Saudi state media carried no Defence Ministry statement. None of Saree's figures are verified or adopted.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'high',
      source: "The IRGC Navy via Tasnim, Kurdistan24 and bne IntelliNews; UKMTO via SAFETY4SEA",
      event: "The IRGC claims seven or eight hulls in one statement and names none of them",
      summary:
        "The IRGC Navy said four oil tankers conducting ship-to-ship transfers in the northern Persian Gulf were identified, tracked and struck simultaneously and caught fire, and that further vessels struck naval mines west of the Strait of Hormuz overnight — three in one account, four in another, so the total claimed is seven or eight and is held apart. It said the vessels used \"unauthorised\" routes, that American insistence on transits is increasing incidents, and that it could widen the confrontation to American bases. No vessel was named, no position or timestamp given, no casualties reported.",
      impact:
        "Against that, UKMTO's two logged hulls remain the only named ones: the Kuwait-flagged 109,719-dwt KOTC tanker Al Dasma off Bukha at 0145 UTC on 21 October, previously attacked on 7 September, and the Liberia-flagged, Greek-owned Soyia off Al Faw at 1830 UTC on 20 October. CENTCOM's standing position is that the mine narrative is false; it has not answered this claim.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Walla, N12 and Channel 13 via The Times of Israel, The Jerusalem Post and The Jewish Chronicle; Reuters via Outlook India; ING via OilPrice.com; the US Treasury via Just Security",
      event: "Three fresh Israeli polls with no majority, Brent above $110, and a law firm sanctioned instead of a bank",
      summary:
        "Walla's 20 October poll gave Yashar 23 and Likud 19 with the anti-Netanyahu camp at 54 against 48; N12 gave 23 and 19 at 55 against 51; Channel 13 gave 20 and 19 at 52 against 49, and the two disagree on whether People of Israel or the Reservists clear the threshold. Brent rose $2.82, or 2.59 percent, to $111.64 at 0626 GMT with WTI at $99.39. The Treasury sanctioned the Greece- and Panama-based law firm Karnakis & Karnakis over Iranian shipping networks and FinCEN subpoenaed an unnamed Greek bank.",
      impact:
        "The polling file runs to eight unmerged series and not one produces 61 seats. ING's Warren Patterson and Ewa Manthey say the market is pricing a significant risk premium with no sign yet of it unwinding. The designation of an Iranian bank remains unfired.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: '+0 disclosed',
      status:
        "A twenty-third consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The senators' fifth series of up to 23 killed and 861 wounded, drawn from a classified CENTCOM briefing, carries unanswered with ten days to the 2 November deadline. About 10,000 further sailors and Marines arrive with the Theodore Roosevelt group by end-November, and the strike planning now reported sits on the far side of the midterms.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition on the war series, on the cycle dozens of Israeli fighter jets flew as far as the Iranian border and the New York Times reported joint post-midterm strike plans. Gaza deaths stay on their parallel series. The reported pledge not to strike Iran before the 27 October ballot is self-imposed, is not an instrument, and expires in four days.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll. The denied Konarak claims remain held apart and unadded. A forty-fourth day with no confirmed Iranian attack on a host state's territory. On the internal front, Iran Human Rights Monitor reports Amnesty's 16 October urgent action documenting at least twenty upheld death sentences from the January uprising, two of the condemned reportedly under eighteen at the time, with a further sentence served on 17 October and fifty arrests announced in Qazvin and Ilam; the upheld-sentence and executed series are not summed.",
    },
    other: {
      cumulative: "KIA: 3,701+ · WIA: 11,186+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+4 killed, +10 wounded',
      status:
        "The first additions adopted from Saudi state institutions in this phase: two contract workers killed and two injured at Shaybah per the Ministry of Energy, and two killed and eight injured at Dammam per the General Authority of Civil Aviation, the latter revised up from one and still rendered as one by the Wall Street Journal. The rolled-up line remains materially understated. Shabwa still runs six tolls from 18 to 73 killed with 14 missing; Saree's 562 killed or wounded in Yemen is a claim and is not adopted.",
    },
  },
  exec:
    "Donald Trump answered the highest-value open item on this board in seven words. Asked whether talks with Tehran were under way, he said: \"No, I think we're not negotiating.\" Abbas Araghchi had said a day earlier that the Americans \"agreed to these conditions\" and asked to add clauses. The president's answer is not a point-by-point denial of that account, and Washington has still not addressed the seven-day proposal directly, but it is the only American statement there is and it contradicts the premise that a negotiation exists. The thirty-day probability falls from 5 to 3. The New York Times reported that the United States and Israel have plans for renewed strikes after the 3 November midterms, with the target classes named — energy infrastructure, nuclear facilities, and the missile and drone arsenal — and Trump not yet having approved them; Axios reported dozens of Israeli fighter jets flew as far as the Iranian border on Monday. The IRGC declared an \"offensive and asymmetrical\" doctrine, claimed its missile stockpile had grown 1.5 times, and promised a \"father of all bombs\"; Mohsen Rezaei named cables, data centres and AI facilities as targets. The State Department ordered non-emergency staff and families out of Saudi Arabia. Aramco evacuated its Dhahran headquarters for the first time since the Yemen war resumed. Riyadh broke a three-cycle silence with figures of its own: two contract workers killed at Shaybah, two killed and eight injured at Dammam. The IRGC claimed seven or eight hulls and named none. Three fresh Israeli polls land and no bloc reaches 61. Direction holds escalating.",
  implications: [
    {
      title: "The answer arrived, and it was no. The claimed acceptance is retired and the probability moves for the first time in weeks",
      body:
        "Day 237 named one item as worth more than everything else on the board: whether Washington would confirm or deny Araghchi's claim that it had agreed to Iran's conditions and asked to add clauses. The answer came from the president himself — \"No, I think we're not negotiating\" — and it is the kind of answer this file has been waiting for, which is to say a named principal on the record rather than an unnamed official to one network. Analytical judgment: under the multi-clock framework the negotiation-capacity clock has not stalled, it has reversed. Trump described \"productive discussions\" on 8 October and denies a negotiation on 21 October, while Rubio calls a deal extremely difficult and rules out any arrangement creating a pathway to a weapon. Three Iranian officials told Reuters they believe Tehran is prolonging the stalemate to weaken Trump before the midterms — an Iranian reading of Iranian motive, not a strategy statement, but it is the first time this file has carried Tehran's own people describing delay as the plan. Araghchi's claimed acceptance survives only as a claim its counterparty will not stand behind, and it is retired from the active board. The probability falls to 3 because the only route by which it could have risen has now been closed from Washington.",
    },
    {
      title: "The war is being priced by the people who live in it: an embassy, an oil company, and a regulator's arithmetic",
      body:
        "Three institutions moved on one cycle without any belligerent announcing anything. The State Department ordered its non-emergency staff and their families out of Saudi Arabia. Aramco emptied its Dhahran headquarters and sent staff home, for the first time since the Yemen war resumed, after an alarm nobody will explain. And the Saudi Energy Ministry and the civil aviation authority published casualty figures — two contract workers dead at Shaybah from interception debris, two dead and eight injured at Dammam — the first Saudi-confirmed numbers attached to any Houthi-claimed target in this phase, and this file therefore adopts them. Analytical judgment: the state-declares-safe-market-disagrees prior has now inverted completely. For weeks the schedule and the insurer were the better risk estimate than the government's words; this cycle the American government, the Saudi national oil company and two Saudi regulators all moved in the same direction as the schedule. The energy-infrastructure clock is the one to watch, because Rezaei's naming of cables, data centres and AI facilities converts a two-cycle unanswered threat into declared policy from the secretary of the Supreme National Security Council, and there is still no interceptor and no instrument for that target class.",
    },
    {
      title: "Taiwan: the appropriation constraint hardens, and the number that matters is a credit rating",
      body:
        "Directorate-General of Budget, Accounting and Statistics minister Chen Shu-tzu told the Legislative Yuan's finance committee on Wednesday that without additional government funding CPC Corporation's cumulative losses could reach NT$127.6 billion by year-end, against paid-in capital of about NT$130.1 billion, \"potentially undermining its ability to maintain the current pricing policy\" and \"threatening domestic energy supplies and adding to inflationary pressures\". Taipower's accumulated losses since 2020 stand at NT$371.2 billion. The NT$607.6 billion supplementary budget lapses if the legislature does not pass it by the end of 2026, and the opposition majority has resisted funding it since 2016 on energy-policy grounds. Analytical judgment: the appropriation-is-the-constraint prior hardens, and the transmission mechanism is now explicit. A weaker CPC balance sheet means a lower credit rating, harder bank loans and disrupted crude purchases — which is how a Gulf chokepoint becomes a Taiwanese supply problem without a single ship changing course. Fossil fuels supplied over 85 percent of Taiwan's electricity in the first eight months of 2026, and the Alaska cargoes arrive in 2032 at the earliest. The non-response prior extends to a thirteenth cycle on the GEM NO.2.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-third consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The senators' figure of up to 23 killed and 861 wounded is held as a fifth series, neither merged into nor differenced against the disclosed 17 and 440, with ten days to the 2 November deadline and no CENTCOM response.",
    israel:
      "No addition on the war series. Gaza deaths stay on their parallel series; the Taybeh diplomat assault and the Levine attack remain under investigation. The pre-ballot pledge expires in four days, and the reported strike planning sits on the far side of 3 November rather than 27 October.",
    iran:
      "No new official war toll, and the Konarak claims stay unadded. The internal-front ledger grows instead: at least twenty upheld death sentences documented by Amnesty against at least 34 executed, reported through an NCRI-adjacent monitor and recorded as such, with HRANA's 2,003 annual count carried unmerged.",
    other:
      "The line rises for the first time in weeks, and it rises on Saudi state figures rather than claims: Shaybah two killed and two injured per the Ministry of Energy, Dammam two killed and eight injured per GACA. Shabwa still carries six tolls between 18 and 73 killed; the claimed Yanbu, King Khalid and Abha strikes still carry no figure at all.",
  },
};

export default data;
