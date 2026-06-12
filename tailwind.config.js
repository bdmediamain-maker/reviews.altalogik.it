/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-hi": "var(--surface-hi)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        "line-bright": "var(--line-bright)",
        text: "var(--text)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        teal: "var(--teal)",
        "blue-mid": "var(--blue-mid)",
        blue: "var(--blue)",
        success: "var(--success)",
        warn: "var(--warn)",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        brand:
          "linear-gradient(115deg, #1ed8c6 0%, #4f8df7 48%, #2d5bff 100%)",
        "brand-soft":
          "linear-gradient(115deg, rgba(30,216,198,0.16), rgba(45,91,255,0.16))",
      },
      boxShadow: {
        glow: "0 8px 30px rgba(45, 91, 255, 0.32)",
        "glow-lg": "0 12px 40px rgba(45, 91, 255, 0.45)",
        card: "0 12px 40px rgba(45, 91, 255, 0.12)",
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};
