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
          400: "#FFF0E4",
          600: "#EDD5C2",
        },
        "icons-pink": "#EB8671",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [],
} satisfies Config;
