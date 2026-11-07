/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every page is prerendered, so ship plain static files instead of
  // serverless functions. Keeps each Vercel deployment small (see PR notes).
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'mdx', 'md'],
  experimental: {
    mdxRs: false,
  },
};

export default nextConfig;
