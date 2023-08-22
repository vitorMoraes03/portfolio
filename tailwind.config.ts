import type { Config } from 'tailwindcss';

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
    },
  },
  plugins: [],
};

export default config;
