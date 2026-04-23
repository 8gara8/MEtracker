import type { Metadata } from 'next';
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Masthead } from '@/components/layout/Masthead';
import { SiteFooter } from '@/components/layout/SiteFooter';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000'),
  ),
  title: 'ME War Intel Brief',
  description:
    'Daily intelligence brief on the 2026 US-Israeli war on Iran (Operation Epic Fury).',
  openGraph: {
    title: 'ME War Intel Brief',
    description:
      'Daily intelligence brief on the 2026 US-Israeli war on Iran (Operation Epic Fury).',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-paper-bg text-paper-ink">
        <div className="mx-auto max-w-page px-[14px] py-4 md:px-6 md:py-[22px] xl:px-11 xl:py-7">
          <Masthead />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
