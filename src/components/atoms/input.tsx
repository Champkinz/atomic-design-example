import React, { FC } from "react";
import styled, { css } from "styled-components";
import { colors } from "./theme";
import { P } from "./typography";

const StyledInput = styled.input<InputProps>`
  background-color: ${colors.input_background};
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 0px;
  border-radius: 5px;
  font-size: 16px;
  padding: 0.5rem 1rem;

  :focus {
    outline: 0;
  }

  ::placeholder {
    color: #c0c0c0;
    opacity: 1; /* Firefox */
    font-size: 16px;
    letter-spacing: 1px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c0c0c0;
    font-size: 16px;
    letter-spacing: 1px;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #c0c0c0;
    font-size: 16px;
    letter-spacing: 1px;
  }

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${props =>
    props.block &&
    css`
      width: calc(100% - 3%);
    `}
`;

const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <div>
      <StyledInput onChange={props.onChange} {...props} />
      <div style={{ fontSize: 12, paddingLeft: 4, color: "#EB5757" }}>
        {props.error}
      </div>
    </div>
  );
};

export interface InputProps {
  placeholder?: string;
  width?: number;
  block?: boolean;
  error?: string;
  onChange?: (e: any) => any;
}

export default Input;
