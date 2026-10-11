import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: {
          50: "#f5f5f5",
          100: "#d4d4d4",
          200: "#a3a3a3",
          300: "#737373",
          400: "#525252",
          500: "#3d3d3d",
          600: "#2e2e2e",
          700: "#242424",
          800: "#1a1a1a",
          900: "#141414",
          950: "#0f0f0f",
        },
        gold: {
          300: "#e0c35a",
          400: "#d4af37",
          500: "#c9a227",
          600: "#a68620",
          700: "#846b1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "gold-sm": "0 0 0 1px rgba(201, 162, 39, 0.3)",
        "gold-md": "0 0 0 1px rgba(201, 162, 39, 0.4), 0 4px 12px rgba(201, 162, 39, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;

