import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Experience from "../parts/resume/experience";
import Skills from "../parts/resume/skills";

const Resume: FunctionComponent = () => (
  <ResumeStyled>
    <Experience />
    <Skills />
  </ResumeStyled>
);

export default Resume;

const ResumeStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    display: block;
    margin-top: 7%;
  }
`;
