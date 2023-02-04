import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";

import experienceDataTypes from "../../types/experienceDataTypes";
import experienceData from "../../utils/experienceData";

const Experience: FunctionComponent = () => {
  // states
  const [activeTab, setActiveTab] = useState(1);
  const [activeActions, setActiveActions] = useState<experienceDataTypes>();

  // handle selected company

  useEffect(() => {
    setActiveActions(
      experienceData.filter(
        (experience: experienceDataTypes) => experience.id === activeTab
      )[0]
    );
  }, [activeTab]);

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
          <h3>{activeActions?.role}</h3>
          <p className="date">{`${activeActions?.start_date} - ${activeActions?.end_date}`}</p>
          {activeActions?.actions.map((action) => (
            <div className="actions">
              <BsPlay />
              <p>{action}</p>
            </div>
          ))}
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

    h3 {
      font-weight: ${({ theme }) => theme.fonts.weights.large};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: 1.5px;
    }

    .date {
      font-size: ${({ theme }) => theme.fonts.sizes.xsm};
      margin: 5px 0 1rem;
    }

    .actions {
      margin-bottom: 1rem;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      p {
        font-size: ${({ theme }) => theme.fonts.sizes.sm};
        color: ${({ theme }) => theme.colors.white};
        width: calc(100% - ${({ theme }) => theme.fonts.sizes.normal} + 10px);
      }

      svg {
        font-size: ${({ theme }) => theme.fonts.sizes.normal};
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 10px;
      }
    }
  }
`;
