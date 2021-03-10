import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        
    }

    body{
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${(props) => props.theme.colors.black};
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
