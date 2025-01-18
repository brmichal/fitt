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
          DEFAULT: "#0a1820", // Darkened from #122c39
          hover: "#050c10", // Darkened accordingly
        },
        secondary: {
          DEFAULT: "#84b292", // Darkened from #a6dfb7
          foreground: "#0a1820",
        },
        accent: {
          DEFAULT: "#9f27cc", // Darkened from #c331ff
          hover: "#8d22b8", // Darkened accordingly
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0a1820 0%, #84b292 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #84b292 0%, #9f27cc 100%)',
        'gradient-accent': 'linear-gradient(135deg, #9f27cc 0%, #0a1820 100%)',
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;