import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import experienceDataTypes from "../../types/experienceDataTypes";
import experienceData from "../../utils/experienceData";

const Experience: FunctionComponent = () => {
  // handle active tabs
  const [activeTab, setActiveTab] = useState(1);

  return (
    <ExperienceStyled>
      <h1>
        Skills <span> &</span>
      </h1>
      <h1>Experiences</h1>

      <div className="experience-box">
        <div className="nav">
          {experienceData.map((experience: experienceDataTypes) => (
            <div
              className={activeTab === experience.id ? "active" : ""}
              onClick={() => setActiveTab(experience.id)}
              onKeyDown={() => setActiveTab(experience.id)}
              role="button"
              tabIndex={experience.id}
            >
              {experience.company_name}
            </div>
          ))}
        </div>
        <div className="job-content">
          <p>it goes here</p>
          <p>it goes here</p>
          <p>it goes here</p>
          <p>it goes here</p>
        </div>
      </div>
    </ExperienceStyled>
  );
};

export default Experience;

const ExperienceStyled = styled.div`
  width: 45%;

  .experience-box {
    display: flex;
    margin-top: 4rem;
  }

  .nav {
    margin-right: 1rem;
    /* border-left: ${({ theme }) => theme.border.width.xl} solid
      ${({ theme }) => theme.colors.grey}; */

    div {
      list-style: none;
      cursor: pointer;
      padding: 10px;
      font-size: ${({ theme }) => theme.fonts.sizes.sm};
      border-left: ${({ theme }) => theme.border.width.xl} solid
        ${({ theme }) => theme.colors.grey};
      transition: all 0.3s ease-in-out;

      &:not(&.active) {
        &:hover {
          color: ${({ theme }) => theme.colors.offwhite};
          border-left: ${({ theme }) => theme.border.width.xl} solid
            ${({ theme }) => theme.colors.offwhite};
        }
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
        border-left: ${({ theme }) => theme.border.width.xl} solid
          ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .job-content {
    padding: 10px;
  }
`;
