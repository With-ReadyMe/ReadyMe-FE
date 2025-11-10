import React from "react";
import * as S from "./AuthStyles";
import { useState } from "react";

import Login from "./login/Login";
import Register from "./register/Register";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <S.BackgroundWrapper>
            <S.SlideWrapperLogin isLogin={isLogin}>
                <Login setIsLogin={setIsLogin} />
            </S.SlideWrapperLogin>
            <S.SlideWrapperRegister isLogin={isLogin}>
                <Register setIsReg={setIsLogin} />
            </S.SlideWrapperRegister>
        </S.BackgroundWrapper>
    );
};

export default Auth;
