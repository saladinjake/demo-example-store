
import {  DefaultTheme } from "styled-components";

/*add media queries pluggins as pluggables passed in to theme components*/

export const colors = {
  White: "#FFFFFF",
  Blue: "#1DCBEF",
  Yellow: "#FFC83E",
  Green: "#48D38A",
  Purple: "#40196D",
  DarkPurple: "#EFF1FF",
  Black: "#000000",
  Red: "#FFDBDB",
  DarkRed: "#FFDBDB",
  Grey: "#CACACA",
  DarkGrey: "#979797",
  LightGrey: "#F9F9F9",
  LighterGrey: "#F4F4F4",
  LightPurple: "#8369A0",
  InactivePurple: "#EFF1FF",
  LightBlue: "#DBF8FF",
};

const fontSizes = {
  small: "1em",
  medium: "2em",
  large: "3em",
};

const radiuses = {
  sm: "5px",
};

const breakPoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  radiuses,
  breakPoints,
};


export default theme