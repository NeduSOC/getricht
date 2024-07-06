/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      container: {
        padding: "100px",
      },
    },
    fontFamily: {
      custom1: ['"Open Sans"'],
      // custom1: ['"Open Sans"', "sans-serif"],
      custom2: ["Cormorant Upright", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
