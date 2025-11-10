import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 3em;
`;

export const Button = styled.button<{
    borderColor: string;
    bgColor: string;
    fontColor: string;
}>`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    background-color: ${(props) => props.bgColor};

    border: 1px solid ${(props) => props.borderColor};
    border-radius: 4px;

    outline: none;
    box-shadow: none;

    color: ${(props) => props.fontColor};
    font-weight: 500;
    font-size: 1em;

    transition: all ease 0.3s;

    padding: 4% 0;

    &:hover {
        font-size: 1.05em;

        cursor: pointer;
    }

    img {
        height: 100%;
        aspect-ratio: 1 / 1;
    }
`;
