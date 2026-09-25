import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f0fdf4',
          100: '#dcfce7',
          300: '#86efac',
          500: '#22c55e',
          700: '#15803d',
          900: '#14532d',
        },
        soil: {
          50: '#f9f7f2',
          100: '#f2eadb',
          500: '#a87c52',
          700: '#6b4f3b',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(20, 83, 45, 0.08)',
        card: '0 14px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
