import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { BriefFrontmatterSchema, type Brief, type BriefFrontmatter } from './types';

const BRIEFS_DIR = path.join(process.cwd(), 'content', 'briefs');

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

export function listBriefFilenames(): string[] {
  if (!fs.existsSync(BRIEFS_DIR)) return [];
  return fs
    .readdirSync(BRIEFS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
}

export function readBriefByFilename(filename: string): Brief {
  const filePath = path.join(BRIEFS_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const frontmatter = BriefFrontmatterSchema.parse(parsed.data) as BriefFrontmatter;
  return {
    slug: slugFromFilename(filename),
    filePath,
    content: parsed.content,
    frontmatter,
  };
}

export function getAllBriefs(): Brief[] {
  return listBriefFilenames()
    .map(readBriefByFilename)
    .sort((a, b) => b.frontmatter.day - a.frontmatter.day);
}

export function getBriefBySlug(slug: string): Brief | null {
  const mdx = `${slug}.mdx`;
  const md = `${slug}.md`;
  if (fs.existsSync(path.join(BRIEFS_DIR, mdx))) return readBriefByFilename(mdx);
  if (fs.existsSync(path.join(BRIEFS_DIR, md))) return readBriefByFilename(md);
  return null;
}

export function getLatestBrief(): Brief | null {
  const all = getAllBriefs();
  return all[0] ?? null;
}

export function getBriefByDay(day: number): Brief | null {
  return getAllBriefs().find((b) => b.frontmatter.day === day) ?? null;
}

export function getContinuityLinks(day: number): {
  previous: Brief | null;
  weekAgo: Brief | null;
} {
  return {
    previous: getBriefByDay(day - 1),
    weekAgo: getBriefByDay(day - 7),
  };
}
