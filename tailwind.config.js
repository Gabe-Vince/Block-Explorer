/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#557153",
        base2: "#7D8F69",
        base3: "#A9AF7E",
        primary: "#E6E5A3",
        drkgrey: "#111826",
        mdgrey: "#1F2937",
      },
    },
    backgroundImage: {
      leaf: "url('../public/dash-bg.jpeg')",
    },
  },
  plugins: [],
};
