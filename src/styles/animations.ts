import { keyframes } from "styled-components";

export const slideLeft = keyframes`
    0% {
    transform: translateX(300px);
    transform-origin: 0% 0%;
    opacity: 0;
    }
    
    100% {
    transform: translateX(0) ;
    transform-origin: 50% 50%;
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
