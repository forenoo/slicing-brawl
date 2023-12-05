/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A10E5",
        secondary: "#FACB3B",
        body: "#F0F3FF",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "3xl": "1680px",
    },
  },
  plugins: [],
};
