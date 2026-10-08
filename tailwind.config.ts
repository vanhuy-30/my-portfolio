import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-ink": "var(--accent-ink)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
      borderRadius: {
        control: "12px",
        panel: "16px",
      },
      boxShadow: {
        soft: "0 18px 50px -28px rgba(28, 25, 23, 0.35)",
        panel: "0 24px 60px -32px rgba(28, 25, 23, 0.28)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        content: "1120px",
        wide: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
