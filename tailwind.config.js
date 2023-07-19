/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        footerbg: "#1D2130",
        gray: "#4B4B4C",
        Teal: "#2F6C6D",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        lightOrange: "#c8815f",
        HummingBird: "#d1f1ee",
      },
      // customUtilities: {
      //   // You can use any name you prefer for the class name
      //   '.custom-gradient': {
      //     backgroundImage: 'radial-gradient(2762.36% 537.65% at -49.50% -250.00%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)',
      //     filter: 'blur(200px)',
      //   },
      // },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        slide: 'slide 25s linear infinite',
      },
      keyframes: {
        slide: {
          '0%,100%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-120%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.custom-gradient': {
          backgroundImage: 'radial-gradient(2762.36% 537.65% at -49.50% -250.00%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)',
        },
        '.blur': {
          filter: 'blur(0.1px)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};