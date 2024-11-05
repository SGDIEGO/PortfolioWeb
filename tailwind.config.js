/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette_950: "#030712",
        palette_900: "#111827",
        palette_800: "#1f2937",
        palette_700: "#374151",
        palette_600: "#4B5563",
        palette_500: "#6B7280",
        palette_400: "#9CA3AF",
        palette_300: "#D1D5DB",
        palette_200: "#E5E7EB",
        palette_100: "#F3F4F6",
        palette_50: "#F9FAFB",
        palette: "#FFFFFF",

      },
      fontSize: {
        h1_desktop: "60px",
        h1_tablet: "48px",
        h1_mobile: "36px",

        h2_desktop: "36px",
        h2_tablet: "18px",
        h2_mobile: "18px",

        h3_desktop: "30px",
        h3_tablet: "24px",
        h3_mobile: "24px",

        subtitle: "20px",

        body1: "18px",
        body2: "16px",
        body3: "14px",
      },
      fontFamily: {
        poppins: ["Poppins"],
        tiny5: ["Tiny5"]
      },
      screens: {
        tablet: "680px",
        desktop: "1024px"
      }
    },
  },
  plugins: [],
}