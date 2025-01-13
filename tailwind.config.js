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
          "text-shadow": "0px 2px 4px rgba(255, 255, 255, 0.35)",
        },
        ".text-shadow": {
          "text-shadow": "0px 2px 4px rgba(255, 255, 255, 0.5)",
        },
        ".text-shadow-blue-sm": {
          "text-shadow": "0px 2.5px 4px rgba(103,17,164, 0.4)",
        }
      });
    }),
  ],
};
