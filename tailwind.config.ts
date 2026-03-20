import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        magenta: {
          DEFAULT: "#b0257e",
          light: "#d4409e",
          deep: "#7a1558",
          pale: "#fce4f5",
        },
        green: {
          DEFAULT: "#2d7a3a",
          dark: "#1e5c2a",
          light: "#4aad5e",
          pale: "#e8f7ec",
        },
        gold: {
          DEFAULT: "#e8a020",
          light: "#f5c842",
          pale: "#fdf3dc",
          dark: "#c88a1a",
        },
        cream: {
          DEFAULT: "#fdf8f2",
          dark: "#f2ede4",
        },
        ink: {
          DEFAULT: "#12100e",
          light: "#1a160e",
        },
        earth: "#3d2b1f",
        purple: {
          DEFAULT: "#7b1fa2",
          deep: "#4a148c",
          light: "#ab47bc",
          pale: "#f3e5f5",
        },
      },
      backgroundImage: {
        "magenta-gradient": "linear-gradient(135deg, #b0257e, #7a1558)",
        "hero-dark": "linear-gradient(150deg, #12001e 0%, #7a1558 45%, #b0257e 80%, #e05ab0 100%)",
        "dot-pattern": "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "counter": "counter 1.4s ease forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        magenta: "0 8px 40px rgba(176,37,126,0.15)",
        "magenta-lg": "0 20px 60px rgba(176,37,126,0.2)",
        green: "0 8px 32px rgba(45,122,58,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
