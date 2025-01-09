/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E7D32",
          alt: "#1B5E20",
        },
        accent: {
          DEFAULT: "#A67F52",
          light: "#D2B48C",
        },
        background: {
          light: "#FAFAFA",
          alt: "#F8F8F8",
        },
        text: {
          DEFAULT: "#4A3F35",
          alt: "#333333",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
