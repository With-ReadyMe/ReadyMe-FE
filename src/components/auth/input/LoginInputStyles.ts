import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;

    width: 100%;
    height: 3em;

    display: flex;
    justify-content: flex-end;
    align-items: center;
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
        left: 0%;
    }
    &:focus
        ~ ${InputBackground},
        &:not(:placeholder-shown)
        ~ ${InputBackground} {
        width: 70%;
    }
    &:focus,
    &:not(:placeholder-shown) {
        width: 70%;
    }
    z-index: 101;
`;
