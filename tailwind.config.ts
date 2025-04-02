import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-pink": {
          300: "#FFF8F5",
          400: "#FFF0E4",
          600: "#EDD5C2",
        },
        "secondary-pink": "#D7537A",
        "icons-pink": "#EB8671",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
      },
      fontSize: {
        xxs: ".7rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
