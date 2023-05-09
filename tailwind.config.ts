import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'grey': '#5D5D5D',
      'black': '#000000',
      'lightA': '#D9D9D9',
      'darkA': '#0E1316',
      'darkB': '#161C20'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
