import { css, DefaultTheme } from "styled-components";

const colors = {
  Blue: "#2565c4",
  White: "#FFFFFF",
  Black: "#000000",
  BackgroundBlue: "#c9dcfe",
  InputBlue: "#a7e5f3",
};

const fonts = {
  Title: css`
    font-family: "HSYuji-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 6rem;
    line-height: 4rem;
    letter-spacing: -0.05rem;
  `,
  SubTitle: css`
    font-family: "HSYuji-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: -0.05rem;
  `,
  Content: css`
    font-family: "HSYuji-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 2.5rem;
    letter-spacing: -0.05rem;
  `,
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};

