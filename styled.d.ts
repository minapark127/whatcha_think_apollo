import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      beige: string;
      warmGrey: string;
      lightGrey: string;
    };
    fonts: {
      title: string;
      main: string;
    };
  }
}
