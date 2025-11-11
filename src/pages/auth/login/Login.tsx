import React from "react";
import * as A from "../AuthStyles";
import * as L from "./LoginStyles";
import Input from "../../../components/auth/input/LoginInput";
import Button from "../../../components/auth/button/LoginButton";
import SocialLoginBtn from "../../../components/auth/socialBtn/SocialBtn";
import OrLine from "../../../components/auth/orLine/OrLine";

const Login = ({ setIsLogin }) => {
    return (
        <A.Wrapper>
            <A.FormWrapper>
                <A.LogoWrapper>
                    <img src="/logo.svg" alt="logo" />
                </A.LogoWrapper>
                <A.InputWrapper>
                    <Input placeholder="ID" type="text" />
                    <Input placeholder="Password" type="password" />
                    <Button placeholder="Log in" />
                </A.InputWrapper>
                <A.GoRegisterWrapper>
                    <p>Don’t have an account?</p>
                    <p onClick={() => setIsLogin(false)}>Sign up</p>
                </A.GoRegisterWrapper>

                <OrLine />

                <A.SocialBtnWrapper>
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
                </A.SocialBtnWrapper>
            </A.FormWrapper>

            <A.DescriptionWrapper>
                <A.DescriptionH1>Hi, there 👋</A.DescriptionH1>
                <A.Description>
                    We’re <strong>ReadyMe</strong> - where your career journey
                    gets a bold start.
                    <br />
                    Show your work, sharpen your skills, and grow with AI by
                    your side.
                    <br />
                    <br />
                    Now’s the time to know yourself and show yourself off!
                </A.Description>
            </A.DescriptionWrapper>
            <L.PersonWrapper>
                <L.Person src="/img/woman.png" />
                <L.PersonBg src="/img/wave.png" />
            </L.PersonWrapper>
        </A.Wrapper>
    );
};

export default Login;
