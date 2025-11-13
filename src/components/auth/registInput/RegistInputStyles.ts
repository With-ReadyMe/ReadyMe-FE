import styled from "styled-components";

export const Wrapper = styled.div<{ width?: string }>`
    width: ${(props) => props.width || "100%"};

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const LabelRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.5em;
    margin: 0.3em 0 0.1em 0;
    padding: 0 0.5em;
`;
export const InputWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 3em;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const InputBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    border: solid 2px #ececec;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    transition: all ease 0.3s;

    z-index: 100;
`;

export const PlaceHolder = styled.p`
    position: absolute;

    transition: all ease 0.3s;

    font-size: 1rem;
    font-weight: 600;
    color: #d9d9d9;

    left: 5%;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;

    border: none;
    outline: none;

    font-weight: 500;
    font-size: 1rem;

    background-color: transparent;

    padding: 0 5%;

    transition: all ease 0.3s;

    &:focus ~ ${PlaceHolder}, &:not(:placeholder-shown) ~ ${PlaceHolder} {
        opacity: 0;
    }
    z-index: 101;
`;

export const Tag = styled.h4`
    margin: 0;
    padding: 0;
    font-weight: 600;
`;

export const HelpText = styled.span`
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    font-weight: 400;
    color: #9ca3af;
`;
