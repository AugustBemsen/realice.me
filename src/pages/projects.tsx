import React, { FunctionComponent } from "react";
import styled from "styled-components";
import WorkCard from "../parts/project/card";
import projectDataTypes from "../types/projectDataTypes";
import projectData from "../utils/projectsData";

const Projects: FunctionComponent = () => (
  <ProjectsStyled>
    <h1>
      Some Stuffs <span> I’ve</span>
    </h1>
    <h1>Built</h1>
    <div className="grid-box">
      {projectData.map((project: projectDataTypes) => (
        <WorkCard
          key={project.id}
          description={project.description}
          img={project.img}
          liveLink={project.liveLink}
          codeLink={project.codeLink}
          technologies={project.technologies}
          project={project.project}
          id={project.id}
        />
      ))}
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
      /* display: block; */
      width: 100%;
      overflow-x: hidden;
      padding: 0;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(46%, 1fr));
      grid-column-gap: 2rem;
      grid-auto-flow: dense;
      column-count: 2;
    }
  }
`;
