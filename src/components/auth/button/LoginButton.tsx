import React from "react";
import * as S from "./LoginButtonStyles";

interface LoginButtonProps {
    placeholder: string;
    type?: "submit" | "button" | "reset";
}

const LoginButton = ({ placeholder, type = "submit" }: LoginButtonProps) => {
    return (
        <S.Wrapper>
            <S.Button type={type}>{placeholder}</S.Button>
        </S.Wrapper>
    );
};

export default LoginButton;
