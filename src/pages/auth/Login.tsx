import React from "react";
import * as S from "./AuthStyles";
import Input from "../../components/auth/input/LoginInput";
import Button from "../../components/auth/button/LoginButton";
import SocialLoginBtn from "../../components/auth/socialBtn/SocialBtn";
import OrLine from "../../components/auth/orLine/OrLine";

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

                <OrLine />

                <S.InputWrapper>
                    <SocialLoginBtn
                        placeholder="Continue with Google"
                        iconPath="/img/google.png"
                        bgColor="#fff"
                        fontColor="#000"
                        borderColor="#000"
                    />
                    <SocialLoginBtn
                        placeholder="Sign in with Github"
                        iconPath="/img/github.png"
                        bgColor="#000"
                        fontColor="#fff"
                        borderColor="#000"
                    />
                    <SocialLoginBtn
                        placeholder="Login with Kakao"
                        iconPath="/img/kakao.png"
                        bgColor="#FEE500"
                        fontColor="#000"
                        borderColor="#FEE500"
                    />
                </S.InputWrapper>
            </S.FormWrapper>

            <S.DescriptionWrapper></S.DescriptionWrapper>
        </S.Wrapper>
    );
};

export default Login;
