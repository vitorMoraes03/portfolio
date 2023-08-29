import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        light: ['PPMori-Extralight', 'sans-serif'],
        regular: ['PPMori-Regular', 'sans-serif'],
        bold: ['PPMori-SemiBold', 'sans-serif'],
        italic: ['PPMori-RegularItalic', 'sans-serif'],
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(.5,.7,.4,1)',
      },
    },
    plugins: [],
  },
};

export default config;
