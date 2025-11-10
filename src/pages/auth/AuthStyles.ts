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
    position: relative;
    width: 75%;
    height: 85%;

    background-color: #f4f4fe;
    border-radius: 40px;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;

    flex-direction: row;

    overflow: hidden;
`;

export const FormWrapper = styled.div`
    width: 38%;
    height: 80%;

    background-color: #ffffff;
    border-radius: 20px;

    padding: 5%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.7em;

    flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
    width: 45%;
    height: 80%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5em;

    padding: 4% 0;
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
export const InputRowWrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    gap: 0.5em;
`;

export const GoRegisterWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #ababab;

    p {
        font-size: 0.8em;
        font-weight: 400;
    }
    p:nth-of-type(2) {
        text-decoration: underline;
    }
    p:nth-of-type(2):hover {
        cursor: pointer;
    }
`;

export const SocialBtnWrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 0.6em;
`;

export const DescriptionH1 = styled.h1``;
export const Description = styled.p`
    width: 100%;
    font-weight: 200;
    letter-spacing: 0.3px;
`;
