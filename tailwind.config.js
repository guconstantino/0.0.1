/** @type {import('tailwindcss').Config} */
import "./src/style/brandA/themes/default/brandA-color.js";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    // Change
    borderRadius: {
      None: "0px",
      Micro: "0.25em",
      Small: "0.5em",
      Medium: "1em",
      Pill: "500em",
    },

    borderWidth: {
      none: 0,
      hairline: "0.0625em",
      thin: "0.125em",
      thick: "0.25em",
      heavy: "0.5em",
    },
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

    fontSize: {
      quark: "0.75em",
      nano: "0.875em",
      extraSmall: "1em",
      small: "1.25em",
      medium: "1.5em",
      large: "2em",
      extraLarge: "2.5em",
      big: "3em",
      display: "3.5em",
      huge: "4em",
      giant: "4.5em",
      jumbo: "5em",
    },

    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },

    lineHeight: {
      small: "100%",
      medium: "150%",
      large: "200%",
    },

    opacity: {
      Opaque: "1",
      Semiopaque: "0.8",
      Intense: "0.64",
      Medium: "0.4",
      Light: "0.32",
      Semitransparent: "0.16",
      Transparent: "0",
    },

    space: {
      None: "0",
      Quark: "0.25em",
      Nano: "0.5em",
      ExtraSmall: "1em",
      Small: "1.5em",
      Medium: "2em",
      Large: "2.5em",
      ExtraLarge: "3em",
      Big: "3.5em",
      Display: "4em",
      Huge: "5em",
      Giant: "7.5em",
      Jumbo: "10em",
      Immense: "12.5em",
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
