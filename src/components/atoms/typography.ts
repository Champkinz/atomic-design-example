import styled, { css } from "styled-components";

export const P = styled.p<StyledProps>`
  font-size: 16px;
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
      letter-spacing: 1px;
    `}
`;

export interface StyledProps {
  fontSize?: number;
  bold?: boolean;
}
