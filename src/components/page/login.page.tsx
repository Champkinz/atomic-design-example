import React, { FC } from "react";
import LoginScreen, { LoginScreenProps } from "../template/login.screen";
import BackgroundImage from "../../images/loginBackground.png";

const LoginPage: FC<LoginPageProps> = (props: LoginPageProps) => {
  const LoginScreenProps: LoginScreenProps = {
    BackgroundImage: BackgroundImage,
  };
  return (
    <div className="flex flex-1 flex-col" style={{ height: "100vh" }}>
      <LoginScreen {...LoginScreenProps} />
    </div>
  );
};

export interface LoginPageProps {}

export default LoginPage;
