import { ImageResponse } from 'next/og';
import { getBriefBySlug } from '@/lib/briefs';

export const runtime = 'nodejs';

const BADGE_COLORS: Record<string, { bg: string; fg: string }> = {
  escalating: { bg: '#F1D9D5', fg: '#B33A2E' },
  critical: { bg: '#F1D9D5', fg: '#B33A2E' },
  extreme: { bg: '#F1D9D5', fg: '#B33A2E' },
  pivotal: { bg: '#F1D9D5', fg: '#B33A2E' },
  mixed: { bg: '#F3E3C6', fg: '#C48416' },
  conditional: { bg: '#F3E3C6', fg: '#C48416' },
  moderate: { bg: '#F3E3C6', fg: '#C48416' },
  'de-escalating': { bg: '#D9E3D3', fg: '#3E6B3A' },
  low: { bg: '#D9E3D3', fg: '#3E6B3A' },
  contained: { bg: '#D9E3D3', fg: '#3E6B3A' },
};

function badgeStyle(value: string) {
  const c = BADGE_COLORS[value] ?? { bg: 'transparent', fg: '#6B6A62' };
  return {
    backgroundColor: c.bg,
    color: c.fg,
    border: `1px solid ${c.fg}40`,
    borderRadius: 0,
    padding: '8px 16px',
    fontSize: 22,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: 2,
    marginRight: 12,
    fontFamily: 'monospace',
  };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const brief = getBriefBySlug(slug);

  const title = brief?.frontmatter.title ?? 'ME War Intel Brief';
  const day = brief?.frontmatter.day ?? 0;
  const date = brief?.frontmatter.date ?? '';
  const direction = brief?.frontmatter.escalation_direction ?? 'mixed';
  const risk7d = brief?.frontmatter.escalation_risk_7d ?? 'conditional';
  const spillover = brief?.frontmatter.spillover_risk ?? 'conditional';

  const displayTitle = title.length > 110 ? `${title.slice(0, 107)}…` : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F3EEE3',
          padding: '56px 64px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            borderBottom: '3px double #14161A',
            paddingBottom: 14,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 40,
              fontWeight: 600,
              color: '#14161A',
              letterSpacing: -0.8,
            }}
          >
            <span style={{ fontStyle: 'italic', marginRight: 10 }}>ME</span> WAR
            — Intel Brief
          </div>
          <div
            style={{
              display: 'flex',
              marginLeft: 'auto',
              fontSize: 20,
              color: '#6B6A62',
              fontFamily: 'monospace',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Day {String(day).padStart(3, '0')} · {date}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 600,
            color: '#14161A',
            marginTop: 24,
            letterSpacing: -1.5,
          }}
        >
          {displayTitle}
        </div>

        <div style={{ display: 'flex', marginTop: 24 }}>
          <div style={badgeStyle(direction)}>{direction}</div>
          <div style={badgeStyle(risk7d)}>{risk7d}</div>
          <div style={badgeStyle(spillover)}>{spillover}</div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            color: '#6B6A62',
            borderTop: '1px solid #C9BFA8',
            paddingTop: 16,
            fontFamily: 'monospace',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex' }}>ME War Intel Brief · 3D</div>
          <div style={{ display: 'flex' }}>@8gara8</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
