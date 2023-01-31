import React, { FC } from "react";
import styled from "styled-components";
import ArrowSvg from "../../assets/svgs/arrow";
import Button from "./button";

const Intro: FC = () => (
  <IntroStyled>
    <h1>
      <span>Hello, </span> I’m
    </h1>
    <h1>Daniel Bemsen</h1>
    <p>
      I&apos;m a software engineer. I create interactive web experiences using
      frontend technology. I am interested in bringing ideas to life From
      concept to deployment, user experience, accessibility, design systems, VR,
      AR and web3.
    </p>
    <div className="cta-group">
      <Button>Let’s Build</Button>
      <ArrowSvg />
    </div>
  </IntroStyled>
);

export default Intro;

const IntroStyled = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.xxl};
    color: ${({ theme }) => theme.colors.white};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.normal};
    color: ${({ theme }) => theme.colors.offwhite};
    letter-spacing: 0.05em;
    width: 390px;
    margin-top: 2rem;
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
`;
