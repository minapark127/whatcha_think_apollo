import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        
    }

    body{
        font-size: 16px;
        font-family: ${(props) => props.theme.fonts.main};
        color: ${(props) => props.theme.colors.black};
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
