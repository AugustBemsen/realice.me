import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { keyframes } from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button: FC<Props> = ({ children, fullWidth, isLoading }) => (
  <ButtonStyled className={fullWidth ? "fw" : ""} disabled={isLoading}>
    {isLoading ? <div className="loader" /> : children}
  </ButtonStyled>
);

export default Button;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

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
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    border: 3px solid ${({ theme }) => theme.colors.offwhite};
    border-top: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: 23px;
    height: 23px;
    animation: ${spin} 0.6s linear infinite;
  }

  &.fw {
    width: 100%;
  }

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

  &:disabled::before {
    width: 0%;
    cursor: not-allowed;
  }
`;
