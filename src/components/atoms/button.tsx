import React, { FC } from "react";
import styled, { css } from "styled-components";
import { colors } from "./theme";

const StyledButton = styled.button<ButtonProps>`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${colors.button_green};
  padding: 0.55rem 2rem;
  ${props =>
    props.secondary &&
    css`
      background-color: ${colors.secondary};
    `}
  ${props => {
    if (props.size === "large") {
      return css`
        padding: 0.7rem 6rem;
      `;
    }

    if (props.size === "small") {
      return css`
        padding: 0.4rem 1rem;
      `;
    }
  }}
  ${props =>
    props.block &&
    css`
      width: 100%;
    `}

  :hover {
    background-color: #009882;
  }

  :focus {
    outline: 0;
  }
`;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.onClick} {...props}>
      {props.children}
    </StyledButton>
  );
};

export interface ButtonProps {
  children?: any;
  secondary?: boolean;
  size?: "large" | "small";
  block?: boolean;
  onClick?: () => any;
}

export default Button;
