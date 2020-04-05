import React, { FC } from "react";
import LoginForm from "../organisms/loginForm";

const LoginScreen: FC<LoginScreenProps> = (props: LoginScreenProps) => {
  return (
    <div className="flex flex-1 flex-row h-full">
      <div className="flex flex-col justify-center border-r">
        <LoginForm />
      </div>
      <div className="flex flex-1 justify-center flex-col">
        <img
          alt=""
          src={props.BackgroundImage}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export interface LoginScreenProps {
  BackgroundImage: any;
}

export default LoginScreen;
