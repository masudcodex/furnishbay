/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        furnishbaytheme: {
          primary: "#339059",
          secondary: "#297347",
          accent: "#8DE4AF",
          neutral: "#05386B",
          error: "#E22D2D",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
