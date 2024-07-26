/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
    fontWeight: {
      semibold: "600",
      bold: "700",
      extrabold: "900",
    },
    extend: {
      colors: {
        "black-rgba": "rgba(140, 0, 173, 0.3)",
      },
    },
  },
  plugins: [],
};
