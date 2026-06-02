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
        ink: {
          950: "#040408",
          900: "#0a0a12",
          800: "#12121e",
          700: "#1a1a2e",
        },
        electric: {
          DEFAULT: "#00f5ff",
          400: "#33f7ff",
          600: "#00c8d4",
        },
        ember: {
          DEFAULT: "#ff6b35",
          400: "#ff8a5c",
          600: "#e55a20",
        },
        mist: {
          100: "#f0f4ff",
          200: "#d4dcf5",
          400: "#8896c8",
          600: "#4a5680",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "slide-right": "slideRight 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,245,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,245,255,0.7)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
