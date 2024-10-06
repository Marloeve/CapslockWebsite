import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },

      backgroundImage: {
        'kart1-background': "url('/kart1.png')",
        'kart2-background': "url('/kart2.png')",
      },

      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '900',
        'extra-bold': '1000',
        black: '900',
      },

      screens: {
        'xxsm': '360px',
        'xsm': '414px',
      },
    }
  },
  plugins: [],
};

export default config;
