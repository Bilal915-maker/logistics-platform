import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          plum: "#6B2737",
          "plum-dark": "#4A1B27",
          dark: "#2B2420",
          gold: "#C9A227",
          cream: "#FBF6EF",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
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
