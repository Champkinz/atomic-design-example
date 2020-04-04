import React from "react";
import Button from "../components/atoms/button";

export default {
  title: "Atoms /Button"
};

export const ButtonNormal = () => <Button>Login</Button>;
export const ButtonSmall = () => <Button size="small">Login</Button>;
export const ButtonLarge = () => <Button size="large">Login</Button>;
export const ButtonBlock = () => <Button block>Login</Button>;
