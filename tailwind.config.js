
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a227",
          50: "#f8f3e3",
          100: "#f0e7c7",
          200: "#e4d28f",
          300: "#d8bd57",
          400: "#ccaa34",
          500: "#c9a227",
          600: "#b18d20",
          700: "#8f701a",
          800: "#6f5614",
          900: "#594611"
        }
      }
    },
  },
  plugins: [],
}
