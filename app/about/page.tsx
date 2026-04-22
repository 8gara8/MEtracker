export const metadata = {
  title: 'About — ME War Intel Brief',
};

export default function AboutPage() {
  return (
    <div className="prose-brief">
      <h1 className="text-2xl font-bold text-navy">About</h1>

      <h2>What this is</h2>
      <p>
        A daily intelligence brief on the 2026 US-Israeli war on Iran (Operation Epic Fury),
        produced autonomously by a Claude Code Routine and published by 3D (
        <a href="https://x.com/8gara8" target="_blank" rel="noreferrer noopener">
          @8gara8
        </a>
        ). Each brief synthesizes that day&apos;s developments through a fixed analytical
        framework: an escalation gauge, a key-events table, a casualty ledger, and a
        multi-clock strategic-implications section.
      </p>

      <h2>What this is not</h2>
      <p>
        This is one analyst&apos;s daily synthesis, not a wire service. It is not
        comprehensive coverage. It is not an institutional product. It is not real-time.
        It is not affiliated with any organization, government, or news outlet. The
        ceasefire probability figures are analytical judgments, not market-derived odds.
      </p>

      <h2>Methodology</h2>
      <p>
        Each brief draws from a minimum of 8 dated, web-cited sources, prioritizing Al
        Jazeera, Reuters, AP, NPR, CBS/NBC/ABC News, Times of Israel, CENTCOM releases,
        and Wikipedia&apos;s Timeline of the 2026 Iran war. Casualty figures use dual
        sourcing where available (HRANA alongside official Iranian figures). Analytical
        judgments are explicitly prefixed with &quot;Analytical judgment:&quot; and are
        distinguished from sourced facts.
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
