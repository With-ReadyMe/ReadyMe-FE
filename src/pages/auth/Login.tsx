import React from "react";
import * as S from "./AuthStyles";
import Input from "../../components/auth/input/LoginInput";
import Button from "../../components/auth/button/LoginButton";

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
                    <Button placeholder="Log in" />
                </S.InputWrapper>
                <S.GoRegisterWrapper>
                    <p>Don’t have an account?</p>
                    <p>Sign up</p>
                </S.GoRegisterWrapper>
            </S.FormWrapper>

            <S.DescriptionWrapper></S.DescriptionWrapper>
        </S.Wrapper>
    );
};

export default Login;
