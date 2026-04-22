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
        paper: {
          bg: '#F3EEE3',
          'bg-deep': '#EAE2D0',
          ink: '#14161A',
          'ink-soft': '#3B3E45',
          'ink-mute': '#6B6A62',
          rule: '#14161A',
          'rule-soft': '#C9BFA8',
          card: '#FBF8F0',
        },
        accent: {
          DEFAULT: '#B33A2E',
          amber: '#C48416',
          green: '#3E6B3A',
        },
        badge: {
          esc: '#F1D9D5',
          mix: '#F3E3C6',
          de: '#D9E3D3',
        },
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        section: '0.22em',
        label: '0.14em',
        metalabel: '0.12em',
        pill: '0.08em',
        stamp: '0.16em',
      },
      maxWidth: {
        page: '1280px',
        prose: '72ch',
      },
      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
};

export default config;
