import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1a1a1a",
        brand: {
          red: "#D32F2F",
          gold: "#D4AF37",
          "gold-hover": "#C5A028",
        },
      },
    },
  },
  plugins: [],
};
export default config;
