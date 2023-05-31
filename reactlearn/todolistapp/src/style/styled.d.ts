import "styled-components";
import { ColorsTypes, FontsTypes } from "./theme";

declare module "styled-components" {
  export interface IDefaultTheme {
    colors: {
        Blue: string;
        Black: string;
        White: string;
        Gray: string;
        BackgroundBlue: string;
        InputBlue: string;
      };
      fonts: {
        Title: SerializedStyles;
        SubTitle: SerializedStyles;
        Content: SerializedStyles;
      };
  }
}
