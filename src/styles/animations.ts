import { keyframes } from "styled-components";

export const hiddenToShow = keyframes`
    0% {
    opacity: 0;
    }
    
    100% {
    opacity: 1;
    }
`;

export const loadingAnimation = keyframes`
    50% {
        opacity: 0.25;
    }

    100% {
        opacity: 1;
    }
`;
