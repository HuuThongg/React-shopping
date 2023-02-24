/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      transitionTimingFunction: {
        "ease": "cubic-bezier(0.25,0.1,0.25,1)",
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
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
