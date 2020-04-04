import React from "react";
import Input from "../components/atoms/input";

export default {
  title: "Atoms /Input"
};

export const InputNormal = () => <Input placeholder="Enter Email" />;
export const InputWidth = () => <Input error="Wrong Email" placeholder="Enter Email" width={200} />;
export const InputBlock = () => <Input placeholder="Enter Email" block />;
