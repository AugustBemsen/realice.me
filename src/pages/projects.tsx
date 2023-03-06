import React, { FunctionComponent } from "react";
import styled from "styled-components";
import WorkCard from "../parts/project/card";

const Projects: FunctionComponent = () => (
  <ProjectsStyled>
    <h1>
      Some Things <span> I’ve</span>
    </h1>
    <h1>Built</h1>
    <div className="grid-box">
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  </ProjectsStyled>
);

export default Projects;

const ProjectsStyled = styled.div`
  width: 100%;

  .grid-box {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem;
    overflow-x: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 850px) {
    margin-top: 7%;

    .grid-box {
      display: block;
      width: 100%;
      overflow-x: hidden;
      padding: 0;
    }
  }
`;
