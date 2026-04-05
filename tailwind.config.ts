import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: "#f5e6e0",
        rose: "#b35c4b",
        berry: "#5b2d2f",
        sand: "#f6f0ea",
        gold: "#c59b6d",
        pine: "#1f3a36"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(91, 45, 47, 0.15)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(245, 230, 224, 0.95), transparent 40%), radial-gradient(circle at bottom right, rgba(197, 155, 109, 0.25), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
