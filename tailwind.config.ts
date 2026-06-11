import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#262261",
          50:  "#eeedf9",
          100: "#d5d3f1",
          200: "#aaa7e3",
          300: "#7f7bd5",
          400: "#544fc7",
          500: "#3b37b0",
          600: "#2f2d8e",
          700: "#262261",
          800: "#1b1946",
          900: "#0f0e28",
        },
        secondary: {
          DEFAULT: "#5046E6",
          50:  "#eeecfd",
          100: "#d5d1fa",
          200: "#aba3f5",
          300: "#8175f0",
          400: "#5f56ec",
          500: "#5046E6",
          600: "#3d35cc",
          700: "#2e279a",
          800: "#1f1a68",
          900: "#100d36",
        },
        accent: {
          DEFAULT: "#F4B400",
          50:  "#fef9e7",
          100: "#fef0bf",
          200: "#fde07f",
          300: "#fccf3f",
          400: "#F4B400",
          500: "#e0a200",
          600: "#b88600",
          700: "#8a6400",
          800: "#5c4300",
          900: "#2e2100",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.4s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "slide-right":"slideRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "bounce-slow":"bounce 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #262261 0%, #5046E6 100%)",
        "gradient-accent": "linear-gradient(135deg, #F4B400 0%, #f97316 100%)",
        "hero-pattern": "radial-gradient(ellipse at 70% 50%, rgba(80,70,230,0.15) 0%, transparent 60%)",
      },
      boxShadow: {
        "brand": "0 4px 24px rgba(38,34,97,0.18)",
        "card":  "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(38,34,97,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
