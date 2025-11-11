import { keyframes } from "styled-components";

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const WipeUptoDown = keyframes`
    from { transform: translateY(-100%);}
    to { transform: translateX(0);}
`;

export const WipeDowntoUp = keyframes`
    from { transform: translateY(100%);}
    to { transform: translateX(0);}
`;

export const WipeForWoman = keyframes`
    from {transform: translate(100%, 100%);}
    to{transform:translate(0,0)}
`;
