import React, { FunctionComponent } from "react";
import styled from "styled-components";
import LargeAvatar from "../parts/home/avatar";
import Intro from "../parts/shared/intro";

const Home: FunctionComponent = () => (
  <HomeStyled>
    <Intro
      btnFx={() => window.location.assign("mailto:danireptor7@gmail.com")}
      btnText="Let’s Build"
      message={
        <p>
          I&apos;m a <span> Software Engineer </span>. I create interactive web
          experiences using <span> Frontend Technologies </span>. I am
          interested in bringing <span> ideas to life </span> from concept to
          deployment, <span> user experience </span>, accessibility, design
          systems, VR, AR and web3.
        </p>
      }
      title={
        <>
          <h1>
            <span>Hello, </span> I’m
          </h1>
          <h1>Daniel Bemsen</h1>
        </>
      }
    />
    <LargeAvatar />
  </HomeStyled>
);

export default Home;

const HomeStyled = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1600px) {
    justify-content: center;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 10%;
  }
`;
