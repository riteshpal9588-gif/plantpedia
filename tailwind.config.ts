import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50: '#faf9f6',
          100: '#f5f1e8',
          200: '#ece6da',
          300: '#d9cdbf',
          400: '#bfaa91',
          500: '#a68568',
          600: '#8b6f47',
          700: '#6d563f',
          800: '#574638',
          900: '#453931',
        },
        cream: '#fef8f3',
        leaf: '#2d5016',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'leaf-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 2c-2 1-3 3-3 5s1 4 3 5c2-1 3-3 3-5s-1-4-3-5z\' fill=\'%2315803d\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'card': '0 4px 15px rgba(34, 197, 94, 0.1)',
        'card-hover': '0 12px 25px rgba(34, 197, 94, 0.15)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

export default config
