/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dae6ff",
          200: "#bcd2ff",
          300: "#8eb3ff",
          400: "#5a8aff",
          500: "#3563f6",
          600: "#1f44e5",
          700: "#1936c2",
          800: "#1a319a",
          900: "#1a2f7a",
        },
        ink: {
          50: "#f6f8fb",
          100: "#eef2f7",
          200: "#dbe2ec",
          300: "#b9c4d3",
          400: "#8997ac",
          500: "#5d6b82",
          600: "#3f4b60",
          700: "#2b3447",
          800: "#1c2233",
          900: "#0f1422",
          950: "#070a14",
        },
        risk: {
          critical: "#ef4444",
          high: "#f97316",
          medium: "#eab308",
          low: "#22c55e",
          info: "#3b82f6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(15, 20, 34, 0.04), 0 4px 16px -4px rgba(15, 20, 34, 0.08)",
        glow: "0 0 0 4px rgba(53, 99, 246, 0.18)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(15,20,34,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,20,34,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
