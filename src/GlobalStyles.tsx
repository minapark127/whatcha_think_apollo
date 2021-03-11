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
        background-color:${(props) => props.theme.colors.lightGrey};
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
