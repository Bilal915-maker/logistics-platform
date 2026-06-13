import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E4032E",
          "red-dark": "#B5021F",
          dark: "#1A1A1A",
          gold: "#F5B400",
          cream: "#FFF8EE",
        },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
