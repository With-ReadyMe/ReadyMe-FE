import React from "react";
import * as S from "./AuthStyles";
import Input from "../../components/auth/input/LoginInput";

const Login = () => {
    return (
        <S.Wrapper>
            <S.FormWrapper>
                <S.LogoWrapper>
                    <img src="/logo.svg" alt="logo" />
                </S.LogoWrapper>
                <S.InputWrapper>
                    <Input placeholder="ID" type="text" />
                    <Input placeholder="Password" type="password" />
                </S.InputWrapper>
            </S.FormWrapper>
            <S.DescriptionWrapper></S.DescriptionWrapper>
        </S.Wrapper>
    );
};

export default Login;
