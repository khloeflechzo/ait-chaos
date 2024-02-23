import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropFilter: ['blur(10px)'],
      colors: {
        dark: '#080808',
        background: '#252529',
        gray: '#424247',
        lightGray: '#73737A',
        primaryPurple: '#6363FF',
        cardBg: '#18181B',
        cardBg2: '#27272B',
      },
      screens: {
        xs: '0px',
        sm: '768px',
        md: '1024px',
        lg: '1200px',
        xl: '1600px',
        xxl: '1920px',
      },
      fontFamily: {
        goldman: ['var(--goldman)', 'sans-serif'],
        eightbits: ['var(--eight-bits)', 'sans-serif'],
        upheavel: ['var(--upheavel)', 'sans-serif'],
      },
      backgroundImage: {
        dots: 'url(\'data:image/svg+xml,<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0V4" stroke="white" stroke-opacity="0.1"/><path d="M0 2H4" stroke="white" stroke-opacity="0.1"/></svg>\')',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
};
export default config;
