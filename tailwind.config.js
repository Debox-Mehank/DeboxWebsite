const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#BF1E2E",
        secondary: "#D42133",
        darkRed: "#9F1926",
        essentialBtn: "#C3C3C3",
        testimonialsBg: "#f5f5f5",
        tableRowBg: "#F4F7F6",
        marketingBg: "#e0e0e0",
        greyButtonBg: "#afafaf",
        rose: colors.rose,
      },
      gridTemplateColumns: {
        essential: "70% 30%",
        contact: "60% 40%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
