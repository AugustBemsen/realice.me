import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<Props> = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
);

export default Button;

const ButtonStyled = styled.button`
  width: 150px;
  height: 45px;
  background: none;
  outline: none;
  border: ${({ theme }) => theme.border.width.large} solid
    ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.md};
  position: relative;
  overflow: hidden;

  &::before {
    transition: all 0.4s;
    background: ${({ theme }) => theme.colors.primary};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 0%;
    height: 100%;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
  }
`;
