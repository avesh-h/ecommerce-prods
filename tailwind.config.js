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
        serif: ["serif"],
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
    },
  },
  plugins: [flowbite.plugin()],
};
