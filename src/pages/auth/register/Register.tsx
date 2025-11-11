import React from "react";
import * as A from "../AuthStyles";
import * as R from "./RegisterStyles";
import Input from "../../../components/auth/registInput/RegistInput";
import Button from "../../../components/auth/button/LoginButton";

const Register = ({ setIsReg }) => {
    return (
        <A.Wrapper>
            <A.DescriptionWrapper>
                <A.DescriptionH1>Create your own Account!</A.DescriptionH1>
                <A.Description>
                    No account yet?
                    <br />
                    This is your sign - hop on and join
                    <strong>ReadyMe!</strong>
                    <br />
                    <br />
                    <strong>
                        Find yourself, own your future, and shine brighter with
                        us.
                    </strong>
                </A.Description>
            </A.DescriptionWrapper>

            <A.FormWrapper>
                <A.LogoWrapper>
                    <img src="/logo.svg" alt="logo" />
                </A.LogoWrapper>
                <A.InputWrapper>
                    <Input
                        tag="Name"
                        placeholder="Hello! What's your name?"
                        type="text"
                    />
                    <Input
                        tag="ID"
                        placeholder="example: example@gmail.com"
                        type="text"
                    />
                    <Input
                        tag="Password"
                        placeholder="Enter your password"
                        type="password"
                    />
                    <Input
                        tag=""
                        placeholder="Confirm Password"
                        type="password"
                    />
                    <A.InputRowWrapper>
                        <Input tag="Birth" placeholder="Birth" type="date" />
                        <Input
                            tag="Gender"
                            placeholder="Gender"
                            type="selector"
                        />
                    </A.InputRowWrapper>
                    <R.SignUpBtnWrapper>
                        <Button placeholder="Sign Up" />
                    </R.SignUpBtnWrapper>
                </A.InputWrapper>
                <A.GoRegisterWrapper>
                    <p>Already have an account?</p>
                    <p onClick={() => setIsReg(true)}>Log in</p>
                </A.GoRegisterWrapper>
            </A.FormWrapper>
            <R.PersonWrapper>
                <R.Person src="/img/man.png" />
                <R.PersonBg src="/img/wave-1.png" />
            </R.PersonWrapper>
        </A.Wrapper>
    );
};

export default Register;
