/** @type {import('tailwindcss').Config} */
import "./src/style/Brand/Themes/Default/color.js";
import "./src/style/Brand/Themes/Default/color.css";
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    // Change
    colors: {
      Primary100: "#D9FFB3FF",
      Primary300: "#60C000FF",
      Primary500: "#3A7400FF",
      Primary700: "#2E5D00FF",
      Primary900: "#214200FF",
      Secondary100: "#FFE7D1FF",
      Secondary300: "#FF9F47FF",
      Secondary500: "#B15500FF",
      Secondary700: "#914500FF",
      Secondary900: "#663100FF",
      Neutral100: "#FFFFFFFF",
      Neutral300: "#F2F2F2FF",
      Neutral500: "#C7C7C7FF",
      Neutral700: "#525252FF",
      Neutral900: "#1C1C1CFF",
      Positive300: "#5DE59CFF",
      Positive700: "#00421FFF",
      Warning300: "#FFEFD6FF",
      Warning700: "#B64D07FF",
      Negative300: "#FF9494FF",
      Negative700: "#8B0E0EFF",
      SupportSupport01: "#9429FFFF",
      Support02: "#FFFFFFFF",
      Support03: "#FFE7D1FF",
      Overlay700: "#000000B7",
    },
    // ADD
    extend: {
      fontFamily: {
        sans: "Ubuntu, sans-serif",
      },
    },
  },
  plugins: [],
};
