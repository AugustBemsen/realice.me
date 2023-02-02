import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Skills: FunctionComponent = () => (
  <SkillsStyled>
    <h2>Skills</h2>
  </SkillsStyled>
);

export default Skills;

const SkillsStyled = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  z-index: 20;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;
