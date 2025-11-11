import React from "react";
import * as S from "./LoginInputStyles";

interface LoginInputProps {
    placeholder: string;
    type?: string;
}

const LoginInput = ({ placeholder, type = "text" }: LoginInputProps) => {
    return (
        <S.Wrapper>
            <S.Input type={type} placeholder=" " />
            <S.InputBackground />
            <S.PlaceHolder>{placeholder}</S.PlaceHolder>
        </S.Wrapper>
    );
};

export default LoginInput;
