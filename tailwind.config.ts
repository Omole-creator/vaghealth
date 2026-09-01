import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16A6A3",
        background: "#FFF9F5",
        charcoal: "#252525",
        cta: "#087A78",
        accent: "#E87575",
      },
      fontFamily: {
        heading: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
