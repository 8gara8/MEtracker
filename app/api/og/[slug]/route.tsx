import { ImageResponse } from 'next/og';
import { getBriefBySlug } from '@/lib/briefs';

export const runtime = 'nodejs';

const BADGE_COLORS: Record<string, { bg: string; fg: string }> = {
  escalating: { bg: '#FFE5E5', fg: '#CC0000' },
  critical: { bg: '#FFE5E5', fg: '#CC0000' },
  extreme: { bg: '#FFE5E5', fg: '#CC0000' },
  mixed: { bg: '#FFF5E5', fg: '#8A5A00' },
  conditional: { bg: '#FFF5E5', fg: '#8A5A00' },
  'de-escalating': { bg: '#E5FFE5', fg: '#006600' },
  low: { bg: '#E5FFE5', fg: '#006600' },
  contained: { bg: '#E5FFE5', fg: '#006600' },
};

function badgeStyle(value: string) {
  const c = BADGE_COLORS[value] ?? { bg: '#f3f4f6', fg: '#333333' };
  return {
    backgroundColor: c.bg,
    color: c.fg,
    borderRadius: 6,
    padding: '8px 16px',
    fontSize: 22,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    marginRight: 12,
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
          backgroundColor: '#fafafa',
          padding: '56px 64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              backgroundColor: '#1B2A4A',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: 6,
              fontSize: 28,
              fontWeight: 700,
              fontFamily: 'monospace',
            }}
          >
            Day {day}
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#666' }}>{date}</div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 52,
            lineHeight: 1.1,
            fontWeight: 700,
            color: '#1B2A4A',
            marginTop: 24,
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
            fontSize: 22,
            color: '#666',
            borderTop: '2px solid #2E75B6',
            paddingTop: 16,
          }}
        >
          <div style={{ display: 'flex' }}>ME War Intel Brief</div>
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
