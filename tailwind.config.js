/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        3000: "3000ms",
      },
      screens: {
        customsm: "400px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        themeBlack: "#191919",
        themeRed: "#750E21",
        themeOrange: "#E3651D",
        themeLightGreen: "#BED754",
      },
      fontFamily: {
        roboto: ["Roboto"],
        robotoCondensed: ["Roboto Condensed"],
        stint: "Stint Ultra Condensed",
        shoulder: "Big Shoulders Text",
        lato: "Lato",
        garamond: "EB Garamond",
        nepali: "Tiro Devanagari Hindi",
        truculenta:"Truculenta",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
