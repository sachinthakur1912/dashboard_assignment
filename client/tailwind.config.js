/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#841A5D",
        customPurple2: "#C35866",
        customOrange: "#E1756A",
        customOr: "#FF914D",
        customOra: "#FF904E",
        customBlue: "#0175C4",
        customGreen: "#4D8E2A",
        customProgressBlue: "#583469",
        customBorder: "#AC4A78",
        customButton: "#AC4A78",
        customTime: "#E6691A",
        customBorder2: "#CB8DAA",
      },
      backgroundImage: {
        "custom-bg": "url('/bg_image.png')",
      },
    },
  },
  plugins: [],
};
