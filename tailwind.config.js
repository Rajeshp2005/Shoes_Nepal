/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media440: "440px",
        media560: "560px",
        media1200: "1200px",
      },

      animation: {
        fadeIn: "fadeIn 3s ease-in forwards",
        fadeOut: "fadeOut 5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },

  plugins: [],
};
