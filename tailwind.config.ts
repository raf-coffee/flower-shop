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
        "hover-pink": "#FD4F79",
        "icons-pink": "#EB8671",
        "active-pink": "#FB7E98",
        "soft-olive": "#8E8D6F",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        lato: "var(--font-lato)",
      },
      fontSize: {
        xxs: ".7rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
