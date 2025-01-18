import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#122c39",
          hover: "#0a1820",
        },
        secondary: {
          DEFAULT: "#a6dfb7",
          foreground: "#122c39",
        },
        accent: {
          DEFAULT: "#c331ff",
          hover: "#b01ee6",
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #122c39 0%, #a6dfb7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #a6dfb7 0%, #c331ff 100%)',
        'gradient-accent': 'linear-gradient(135deg, #c331ff 0%, #122c39 100%)',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
      boxShadow: {
        'button': '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
        'button-hover': '0 6px 20px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;