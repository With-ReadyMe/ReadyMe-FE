import styled from "styled-components";

export const BackgroundWrapper = styled.div`
    background-color: #b5ccf7;
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;
`;

export const SlideWrapperLogin = styled.div<{ isLogin: boolean }>`
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: ease all 0.3s;
    transform: translate(${({ isLogin }) => (isLogin ? "0" : "-100%")}, 0);
`;
export const SlideWrapperRegister = styled.div<{ isLogin: boolean }>`
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: ease all 0.3s;
    transform: translate(${({ isLogin }) => (isLogin ? "100%" : "0")}, 0);
`;

export const Wrapper = styled.div`
    width: 75%;
    height: 80%;
    background-color: #f4f4fe;
    border-radius: 40px;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    overflow: hidden;
`;

export const FormWrapper = styled.div`
    width: 35%;
    height: 80%;

    background-color: #ffffff;
    border-radius: 20px;

    padding: 5%;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
    width: 45%;
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`;

export const LogoWrapper = styled.div`
    width: 60%;
    height: 5rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 0.5em;
`;

export const GoRegisterWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1em 0;

    color: #ababab;

    p {
        font-size: 0.8em;
        font-weight: 400;
    }
`;
