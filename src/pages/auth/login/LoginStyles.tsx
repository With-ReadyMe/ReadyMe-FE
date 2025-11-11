import styled from "styled-components";
import { WipeForWoman } from "../AuthAnimationStyles";

export const PersonWrapper = styled.div`
    position: absolute;

    right: 0;
    bottom: 0;
    width: 40%;
`;
export const Person = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;

    z-index: 101;

    width: 100%;
    aspect-ratio: 1277 / 1347;

    transform: translate(100%, 100%);

    animation: ${WipeForWoman} 0.8s cubic-bezier(0.25, 1.2, 0.5, 1) 0.5s
        forwards;
`;
export const PersonBg = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;

    z-index: 100;

    width: 100%;
    aspect-ratio: 1277 / 1347;

    transform: translate(100%, 100%);

    animation: ${WipeForWoman} 0.8s cubic-bezier(0.25, 1.2, 0.5, 1) 0.7s
        forwards;
`;
