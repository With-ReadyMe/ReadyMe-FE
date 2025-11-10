import React from "react";
import * as S from "./SocialBtnStyles";

interface SocialLoginButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    type?: "submit" | "button" | "reset";
    borderColor: string;
    bgColor: string;
    fontColor: string;
    iconPath: string;
}

const SocialLoginButton = ({
    placeholder,
    iconPath,
    type = "button",
    ...props
}: SocialLoginButtonProps) => {
    return (
        <S.Wrapper>
            <S.Button type={type} {...props}>
                <img src={iconPath} alt="social_login_logo" />
                {placeholder}
            </S.Button>
        </S.Wrapper>
    );
};

export default SocialLoginButton;
