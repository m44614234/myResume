import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        ShabnamMedium: ['ShabnamMedium' , 'sans-serif'],
        Steala: ['Steala', 'sans-serif'],
        EchelonRg: ['EchelonRg', 'sans-serif']
    },
  },
  plugins: [],
  darkMode: 'class'
});

export default config;
