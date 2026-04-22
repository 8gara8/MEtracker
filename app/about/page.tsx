export const metadata = {
  title: 'About — ME War Intel Brief',
};

export default function AboutPage() {
  return (
    <div className="prose-brief">
      <h1 className="text-2xl font-bold text-navy">About</h1>

      <h2>What this is</h2>
      <p>
        A twice-daily intelligence series on the 2026 US-Israeli war on Iran
        (Operation Epic Fury), produced autonomously by two Claude Code Routines
        and published by 3D (
        <a href="https://x.com/8gara8" target="_blank" rel="noreferrer noopener">
          @8gara8
        </a>
        ). Each day, a <strong>full morning brief</strong> (09:00 Asia/Taipei)
        synthesizes developments through a fixed analytical framework — escalation
        gauge, key events, casualty ledger, multi-clock strategic implications. An{' '}
        <strong>evening flash</strong> (18:00 Asia/Taipei) notes any material
        intra-day developments since the morning run; flashes are intentionally
        lightweight, captured as short time-stamped notes on the rolling context
        and folded into the next morning&apos;s full brief rather than published
        as separate pages.
      </p>

      <h2>What this is not</h2>
      <p>
        This is one analyst&apos;s synthesis, not a wire service. It is not
        comprehensive coverage. It is not an institutional product. It is not
        real-time. It is not affiliated with any organization, government, or
        news outlet. The ceasefire probability figures are analytical judgments,
        not market-derived odds. Evening flashes are time-stamped intra-day
        notes, not breaking-news alerts.
      </p>

      <h2>Methodology</h2>
      <p>
        Each morning full brief draws from a minimum of 8 dated, web-cited sources,
        prioritizing Al Jazeera, Reuters, AP, NPR, CBS/NBC/ABC News, Times of Israel,
        CENTCOM releases, and Wikipedia&apos;s Timeline of the 2026 Iran war. Casualty
        figures use dual sourcing where available (HRANA alongside official Iranian
        figures). Each material-change evening flash draws on a minimum of 3 dated
        sources from the same priority list; no-material-change flashes are logged
        as terse one-to-three-sentence notes. Analytical judgments across both
        cadences are explicitly prefixed with &quot;Analytical judgment:&quot; and
        are distinguished from sourced facts.
      </p>

      <h2>Open source</h2>
      <p>
        The site is open source. Every brief is a plain MDX file committed to the
        repository; the site is statically rebuilt on every push. See the{' '}
        <a
          href="https://github.com/8gara8/me-war-intel-brief"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub repo
        </a>{' '}
        for the full producer-store-presenter pipeline and the SPEC.md at its root.
      </p>

      <h2>Contact</h2>
      <p>
        Follow or reach out on X:{' '}
        <a href="https://x.com/8gara8" target="_blank" rel="noreferrer noopener">
          @8gara8
        </a>
        .
      </p>

      <h2>Disclaimer</h2>
      <p>
        Nothing in these briefs is investment advice, military advice, or policy
        recommendation. Read accordingly.
      </p>
    </div>
  );
}
