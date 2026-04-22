import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBriefBySlug, listBriefFilenames } from '@/lib/briefs';
import { BriefView } from '@/components/BriefView';

export function generateStaticParams() {
  return listBriefFilenames().map((f) => ({
    slug: f.replace(/\.mdx?$/, ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brief = getBriefBySlug(slug);
  if (!brief) return { title: 'Brief not found' };
  const title = `Day ${brief.frontmatter.day} — ${brief.frontmatter.title}`;
  return {
    title,
    openGraph: {
      title,
      images: [{ url: `/api/og/${slug}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: [`/api/og/${slug}`],
    },
  };
}

export default async function BriefPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brief = getBriefBySlug(slug);
  if (!brief) notFound();
  return <BriefView brief={brief} />;
}
