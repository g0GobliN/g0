/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gotham-bold": ["GothamBold", "sans-serif"],
        "gotham-bold-italic": ["GothamBoldItalic", "sans-serif"],
        "gotham-book": ["GothamBook", "sans-serif"],
        "gotham-book-italic": ["GothamBookItalic", "sans-serif"],
        "gotham-medium": ["GothamMedium", "sans-serif"],
        "gotham-medium-italic": ["GothamMediumItalic", "sans-serif"],
        "ipa-gothic": ["IPAGothic", "sans-serif"],
      },
      screens: {
        xxs: "406px",
        xs: "670px",
        mid: "844px",
      },
      colors: {
        customCyan: "#00eaf9",
        customDarkCyan: "#6da8ad",
      },
    },
  },
  plugins: [],
};
