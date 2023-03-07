/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      main: "#2d2e32",
      second: "#25262a",
      details: "#62f3aa",
      secondL: "#6d6d6d",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
