module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#BF1E2E",
        essentialBtn: "#C3C3C3",
        testimonialsBg: "#f5f5f5",
        marketingBg: "#e0e0e0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
