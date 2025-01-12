const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        palette: {
          // Add your color variables here
        },
      },
      fontFamily: {
        aspekta: ["Aspekta", "sans-serif"],
        eudoxus: ["Eudoxus", "sans-serif"],
      },
      fontWeight: {
        50: "50",
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
        1000: "1000",
      },
      fontSize: {},
      textColor: {
        palette: {
          // font colors
          black: "#0E0303",
          white: "#FFFFFF",
          gray: "#565656",
        },
      },
      backgroundColor: {
        palette: {
          // Add your background color variables here
          lightGray: "#F6F6F6",
        },
      },
      borderColor: {
        palette: {
          // Add your border color variables here
          red: "#DD1E24",
          gray: "#333333",
        },
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeSlideOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(10px)" },
        },
      },
      animation: {
        fadeSlideIn: "fadeSlideIn 0.3s ease-out",
        fadeSlideOut: "fadeSlideOut 0.3s ease-out",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
