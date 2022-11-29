/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      screen600: "600px",
      ss: "620px",
      sm: "768px",
      screen950: "950px",
      screen960: "960px",
      md: "1060px",
      lg: "1200px",
      screen1280: "1280px",

      screen1300: "1300px",
      screen1440: "1440px",

      screen1600: "1600px",

      xl: "1700px",
    },
  },
  plugins: [],
};
