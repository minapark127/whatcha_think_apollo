import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: mediaQuery,
  w1024: mediaQuery(1024),
  w768: mediaQuery(768),
  w576: mediaQuery(576),
};

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        
    }

    body{
        font-size: 16px;
        font-family: ${(props) => props.theme.fonts.main};
        color: ${(props) => props.theme.colors.black};
        background-color:${(props) => props.theme.colors.lightGrey};
        ${media.w768} {
            font-size: 14px;
        }
    }

    main{
        width: 100%;
        max-width: 1200px;
        min-height: 65vh;
        margin: 3rem auto;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }

    header, footer{
        padding: 0.5em 1.5rem;
    }
`;

export default GlobalStyles;
