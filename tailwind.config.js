/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#00FF66",
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        arialUnicode: ['"Arial Unicode MS"', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          "text-shadow": "4px 4px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          "text-shadow": "none",
        },
      });
    }),
  ],
};
