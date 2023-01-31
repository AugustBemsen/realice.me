import React, { FunctionComponent } from "react";
import styled from "styled-components";
import LargeAvatar from "../parts/home/avatar";
import Intro from "../parts/shared/intro";

const Home: FunctionComponent = () => (
  <HomeStyled>
    <Intro />
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
`;
