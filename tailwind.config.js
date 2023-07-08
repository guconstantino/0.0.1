/** @type {import('tailwindcss').Config} */

// Global Variables
import * as borderRadius from "./src/style/globalVariables/borderRadius.js";
import * as borderWidth from "./src/style/globalVariables/borderWidth.js";
import * as opacity from "./src/style/globalVariables/opacity.js";
import * as spacing from "./src/style/globalVariables/spacing.js";

// Component Assets

// import { imgAvatar } from "./src/assets/img/avatar/assetsAvatar.js";

//Brand Variables
import * as brandColor from "./src/style/brandA/themes/colors/defaultLight.js";
import * as fontFamily from "./src/style/brandA/typography/fontFamily.js";
import * as fontSize from "./src/style/brandA/typography/fontSize.js";
import * as fontWeight from "./src/style/brandA/typography/fontWeight.js";
import * as lineHeight from "./src/style/brandA/typography/lineHeight.js";

//THEME DEFINITION

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    // Change
    borderRadius: {
      None: borderRadius.none,
      Micro: borderRadius.micro,
      Small: borderRadius.small,
      Medium: borderRadius.medium,
      Pill: borderRadius.pill,
    },

    borderWidth: {
      none: borderWidth.none,
      hairline: borderWidth.hairline,
      thin: borderWidth.thin,
      thick: borderWidth.thick,
      heavy: borderWidth.heavy,
    },
    colors: {
      Primary100: brandColor.Primary100,
      Primary300: brandColor.Primary300,
      Primary500: brandColor.Primary500,
      Primary700: brandColor.Primary700,
      Primary900: brandColor.Primary900,
      Secondary100: brandColor.Secondary100,
      Secondary300: brandColor.Secondary300,
      Secondary500: brandColor.Secondary500,
      Secondary700: brandColor.Secondary700,
      Secondary900: brandColor.Secondary900,
      Neutral100: brandColor.Neutral100,
      Neutral300: brandColor.Neutral300,
      Neutral500: brandColor.Neutral500,
      Neutral700: brandColor.Neutral700,
      Neutral900: brandColor.Neutral900,
      Positive300: brandColor.Positive300,
      Positive700: brandColor.Positive700,
      Warning300: brandColor.Warning300,
      Warning700: brandColor.Warning700,
      Negative300: brandColor.Negative300,
      Negative700: brandColor.Negative700,
      SupportSupport01: brandColor.Support01,
      Support02: brandColor.Support02,
      Support03: brandColor.Support03,
      Overlay700: brandColor.Overlay700,
    },

    fontSize: {
      quark: fontSize.quark,
      nano: fontSize.nano,
      extraSmall: fontSize.extraSmall,
      small: fontSize.small,
      medium: fontSize.medium,
      large: fontSize.large,
      extraLarge: fontSize.extraLarge,
      big: fontSize.big,
      display: fontSize.display,
      huge: fontSize.huge,
      giant: fontSize.giant,
      jumbo: fontSize.jumbo,
    },

    fontWeight: {
      light: fontWeight.light,
      regular: fontWeight.regular,
      medium: fontWeight.medium,
      bold: fontWeight.bold,
    },

    lineHeight: {
      small: lineHeight.small,
      medium: lineHeight.medium,
      large: lineHeight.large,
    },

    opacity: {
      Opaque: opacity.Opaque,
      Semiopaque: opacity.Semiopaque,
      Intense: opacity.Intense,
      Medium: opacity.Medium,
      Light: opacity.Light,
      Semitransparent: opacity.Semitransparent,
      Transparent: opacity.Transparent,
    },

    spacing: {
      None: spacing.None,
      Quark: spacing.Quark,
      Nano: spacing.Nano,
      ExtraSmall: spacing.ExtraSmall,
      Small: spacing.Small,
      Medium: spacing.Medium,
      Large: spacing.Large,
      ExtraLarge: spacing.ExtraLarge,
      Big: spacing.Big,
      Display: spacing.Display,
      Huge: spacing.Huge,
      Giant: spacing.Giant,
      Jumbo: spacing.Jumbo,
      Immense: spacing.Immense,
    },

    //Assets for components

    //Avatar
    backgroundImage: {
      "avatar-picture":
        "url('./src/assets/img/avatar/default-avatar-image.jpg')",
    },
    // ADD
    extend: {
      fontFamily: {
        sans: fontFamily.Default,
      },
    },
  },
  plugins: [],
};
