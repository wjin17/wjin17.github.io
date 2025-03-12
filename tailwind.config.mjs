/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#121212",
        },
        foreground: {
          DEFAULT: "#1a1a1a",
          dark: "#e0e0e0",
        },
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#60a5fa",
        },
      },
      fontFamily: {
        "libre-franklin": ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
