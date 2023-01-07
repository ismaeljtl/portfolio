/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "light-quote": "url('/img/quote-light.svg')",
        "dark-quote": "url('/img/quote-dark.svg')",
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
        serif: ["var(--font-lora)"],
      },
      colors: {
        customBlue: {
          50: "#ffffff",
          100: "#EEF5FF",
          200: "#D8E7FF",
          300: "#98C0FF",
          400: "#5496FF",
          500: "#2E7FFF",
          600: "#014EC7",
          700: "#0A3676",
          800: "#082A5B",
          900: "#042149",
        },
      },
    },
  },
  plugins: [],
};
