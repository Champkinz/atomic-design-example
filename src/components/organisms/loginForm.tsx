import React, { FC } from "react";
import { P } from "../atoms/typography";
import BasicForm from "../molecules/basicform";
import Button from "../atoms/button";

const LoginForm: FC<LoginFormProps> = (props: LoginFormProps) => {
  const structure = [
    { key: "email", placeholder: "Enter your Email" },
    { key: "password", placeholder: "Enter your Password" }
  ];
  return (
    <div style={{ width: 400, height: 400, margin: 50 }}>
      <div className="flex flex-1 h-full flex-col justify-around">
        <P fontSize={22} bold>
          Welcome !
        </P>
        <div className="flex flex-1 flex-col justify-center items-center">
          <BasicForm structure={structure} onChange={e => console.log(e)} />
          <div className="flex w-full flex-row justify-end pr-8 cursor-pointer underline">
            Forgot Password ?
          </div>
        </div>
        <div className="px-6">
          <Button block>Login</Button>
        </div>
      </div>
    </div>
  );
};

export interface LoginFormProps {}

export default LoginForm;
