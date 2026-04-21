import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx,md}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        accent: '#2E75B6',
        escalating: '#CC0000',
        'escalating-bg': '#FFE5E5',
        mixed: '#8A5A00',
        'mixed-bg': '#FFF5E5',
        deescalating: '#006600',
        'deescalating-bg': '#E5FFE5',
        body: '#333333',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};

export default config;
