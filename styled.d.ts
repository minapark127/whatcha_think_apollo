import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
    };
    fonts: {
      title: string;
      main: string;
    };
  }
}
