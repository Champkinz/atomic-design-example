import React from "react";
import { default as BF } from "../components/molecules/basicform";
import "../css/tailwind.css";

export default {
  title: "Molecules /FormBuilder"
};

const structure = [
  { key: "email", placeholder: "Enter your Email" },
  { key: "password", placeholder: "Enter your Password" }
];

export const BasicForm = () => (
  <BF structure={structure} onChange={e => console.log(e)} />
);
