/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...fontSize,
    },
    colors: {
      ...color,
      primary: '#1e75bb',
      secondary: '#f05a28',
      tertiary: '#ef5ba1',
      quaternary: '#00ab4e',
      quinary: '#ed1c24',
      backgroundColor: '#fff',
      textColor: '#111',
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
