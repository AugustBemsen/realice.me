import React, { FC } from "react";
import styled from "styled-components";
import ArrowSvg from "../../assets/svgs/arrow";
import Button from "./button";

interface Props {
  title: React.ReactElement;
  message: React.ReactElement;
  btnText: string;
  btnFx: () => void;
  noBtn?: boolean;
}

const Intro: FC<Props> = ({ title, btnFx, btnText, message, noBtn }) => (
  <IntroStyled>
    {title}
    {message}
    <div className="cta-group">
      {!noBtn && <Button onClick={btnFx}>{btnText}</Button>}
      <ArrowSvg />
    </div>
  </IntroStyled>
);

export default Intro;

const IntroStyled = styled.div`
  width: 100%;
  height: 100%;

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.normal};
    color: ${({ theme }) => theme.colors.offwhite};
    letter-spacing: 0.05em;
    width: 390px;
    margin-top: 2rem;
    line-height: 172.5%;
    font-weight: ${({ theme }) => theme.fonts.weights.light};
    letter-spacing: 0.05em;

    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .cta-group {
    display: flex;
    align-items: flex-end;
    svg {
      margin-left: 2rem;
    }
  }

  @media screen and (min-width: 1600px) {
    height: auto;

    p {
      width: 500px;
    }
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    text-align: center;

    p {
      width: 80%;
      margin: 1.5rem auto;
    }
    .cta-group {
      justify-content: center;
    }
  }

  @media screen and (max-width: 500px) {
    p {
      width: 100%;
      line-height: 152.5%;
    }

    .cta-group {
      svg {
        display: none;
      }
    }
  }
`;
