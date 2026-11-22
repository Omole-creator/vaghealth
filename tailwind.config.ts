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
        // /car (DUSKWAY) brand: ink black, W.H.O. blue for "day", amber for "night" + CTAs.
        dw: {
          ink: "#0A0B0D",
          panel: "#14171C",
          blue: "#009ADE",
          amber: "#FFB400",
          paper: "#F4F6F8",
        },
      },
      fontFamily: {
        heading: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
