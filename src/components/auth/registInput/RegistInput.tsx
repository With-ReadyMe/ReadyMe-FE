import React from "react";
import * as S from "./RegistInputStyles";

interface LoginInputProps {
    tag?: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helpText?: string;
    width?: string;
}

const LoginInput = ({
    tag,
    placeholder,
    type = "text",
    value,
    onChange,
    helpText,
    width = "100%",
}: LoginInputProps) => {
    return (
        <S.Wrapper width={width}>
            {(tag || helpText) && (
                <S.LabelRow>
                    {tag && tag.length > 0 && <S.Tag>{tag}</S.Tag>}
                    {helpText && helpText.length > 0 && <S.HelpText>{helpText}</S.HelpText>}
                </S.LabelRow>
            )}
            <S.InputWrapper>
                <S.Input
                    type={type}
                    placeholder=" "
                    value={value}
                    onChange={onChange}
                />
                <S.InputBackground />
                <S.PlaceHolder>{placeholder}</S.PlaceHolder>
            </S.InputWrapper>
        </S.Wrapper>
    );
};

export default LoginInput;
