import React from "react";
import * as S from "./RegistInputStyles";

interface LoginInputProps {
    tag: string;
    placeholder: string;
    type?: string;
}

const LoginInput = ({ tag, placeholder, type = "text" }: LoginInputProps) => {
    return (
        <S.Wrapper>
            {tag && tag.length > 0 && <S.Tag>{tag}</S.Tag>}
            <S.InputWrapper>
                <S.Input type={type} placeholder=" " />
                <S.InputBackground />
                <S.PlaceHolder>{placeholder}</S.PlaceHolder>
            </S.InputWrapper>
        </S.Wrapper>
    );
};

export default LoginInput;
