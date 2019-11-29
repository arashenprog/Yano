import { Platform } from "react-native";
module.exports = {
  colors: {
    transparent: "transparent",
    transparentFore: "#1caeed",

    primary: "#e12ae8",
    primaryLight: "#fb41f5",
    primaryDark: "#d120d7",
    primaryFore: "#fff",


    secondary: "#1caeed",
    secondaryLight: "#38c3ff",
    secondaryDark: "#54b0fe",
    secondaryFore: "#fff",

    danger: "#f44336",
    dangerLight: "#e57373",
    dangerDark: "#c62828",
    dangerFore: "#ffffff",

    success: "#4CAF50",
    successLight: "#81C784",
    successDark: "#2E7D32",
    successFore: "#ffffff",

    warning: "#FFC107",
    warningLight: "#FFD54F",
    warningDark: "#FF8F00",
    warningFore: "#212121",

    dark: "#000000",
    darkLight: "#2b2b2b",
    darkLight: "#4d4d4d",
    darkFore: "#ffffff",
    darkOpacity: "rgba(0, 0, 0, 0.80)",

    white: "#ffffff",
    black: "#000000",

    gray: "#9E9E9E",
    grayLight: "#E0E0E0",
    grayDark: "#424242",
    grayFore: "#ffffff",

    red: "#f44336",
    redLight: "#ef9a9a",
    redDark: "#c62828",

    green: "#4CAF50",
    greenLight: "#A5D6A7",
    greenDark: "#2E7D32",
    greenFore: "#ffffff",

    blue: "#03A9F4",
    blueLight: "#81D4FA",
    blueDark: "#0277BD",
    blueFore: "#ffffff",

    yellow: "#FFEB3B",
    yellowLight: "#FFF59D",
    yellowDark: "#F9A825"
  },

  sizes:{
    base: 50,
    radius: 15,
    xs: 7,
    sm: 15,
    md: 30,
    lg: 50
},
  type: {
    // fontFamily: Platform.OS == "ios" ? "Dana-Regular" : "DanaRegular",
    // fontFamilyLight: Platform.OS == "ios" ? "Dana-Light" : "DanaLight",
    // fontFamilyBold: Platform.OS == "ios" ? "Dana-Bold" : "DanaBold",
    // fontFamilyBolder: Platform.OS == "ios" ? "Dana-Black" : "DanaBlack",
    fontFamily: "Dana",
    fontFamilyBold: "DanaBold",
    fontFamilyBlack: "DanaBlack",
    direction: "rtl",
    textAlign: "right",
    titleSize: 20,
    textSize: 14
  }
};
