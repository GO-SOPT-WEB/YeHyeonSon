import "styled-components";
import { ColorsTypes, FontsTypes } from "./theme";

declare module "styled-components" {
  export interface IDefaultTheme {
    colors: {
        Blue: string;
        Black: string;
        White: string;
      };
      fonts: {
        Title: SerializedStyles;
        SubTitle: SerializedStyles;
        Content: SerializedStyles;
      };
  }
}
