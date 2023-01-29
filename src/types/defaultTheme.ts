// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      primary: string;
      white: string;
      grey: string;
      offwhite: string;
    };
    fonts: {
      sizes: {
        xxl: string;
        xl: string;
        lg: string;
        normal: string;
        small: string;
      };
      weights: {
        regular: number;
        large: number;
        bold: number;
        light: number;
      };
      FontFace: {
        primary: string;
      };
    };
    border: {
      width: {
        light: string;
        normal: string;
        large: string;
        xl: string;
      };
      radius: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
