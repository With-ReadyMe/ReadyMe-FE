import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 3em;
`;

export const Button = styled.button`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #2f5cff;

    border: 2px solid #3a56d1;
    border-radius: 20px;

    outline: none;
    box-shadow: none;

    color: #fff;
    font-weight: 600;
    font-size: 1em;

    transition: all ease 0.3s;

    &:hover {
        font-size: 1.05em;

        cursor: pointer;
    }
`;
