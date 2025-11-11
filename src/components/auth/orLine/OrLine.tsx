import React from "react";
import * as S from "./OrLineStyles";

const SocialLoginButton = () => {
    return (
        <S.OrLineWrapper>
            <S.Line />
            <p>or</p>
            <S.Line />
        </S.OrLineWrapper>
    );
};

export default SocialLoginButton;
