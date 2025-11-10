import React from "react";
import * as S from "./AuthStyles";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.BackgroundWrapper>
      <S.SlideWrapperLogin isLogin={isLogin}>
        <Login />
      </S.SlideWrapperLogin>
      <S.SlideWrapperRegister isLogin={isLogin}>
        <Register />
      </S.SlideWrapperRegister>
    </S.BackgroundWrapper>
  );
};

export default Auth;
