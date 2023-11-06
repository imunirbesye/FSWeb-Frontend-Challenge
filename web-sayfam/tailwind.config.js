/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        190: "48rem",
      },
      height: {
        "1/12": "8.33333%",
        "2/12": "16.66666%",
        "3/12": "24.99999%",
        "9/12": "75%",
        "10/12": "83.3333%",
      },
      colors: {
        green: "#CAF181",
        grayOz: "#D9D9D9",
        pink: "#8F88FF",
        darkPink: "#6D67C2",
      },
    },
  },
  plugins: [],
};
