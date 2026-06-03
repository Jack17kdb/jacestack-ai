/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Core palette — ink to ivory journey
        void:    "#080808",
        carbon:  "#111111",
        graphite:"#1c1c1c",
        smoke:   "#2a2a2a",
        ash:     "#3d3d3d",
        stone:   "#5a5a5a",
        mist:    "#888888",
        silver:  "#b0b0b0",
        cloud:   "#d8d8d8",
        pearl:   "#efefef",
        ivory:   "#f8f6f2",
        // Transition accent — warm amber used ONLY during mid-page transition
        amber:   "#c8963e",
        amber2:  "#a07830",
        // Pure
        white:   "#ffffff",
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease forwards",
        "float":     "float 7s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
