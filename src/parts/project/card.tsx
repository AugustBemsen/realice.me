import React, { FunctionComponent } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { RiScreenshot2Line } from "react-icons/ri";
import styled from "styled-components";
import projectDataTypes from "../../types/projectDataTypes";

const WorkCard: FunctionComponent<projectDataTypes> = ({
  description,
  img,
  liveLink,
  project,
  technologies,
  codeLink,
}) => (
  <WorkCardStyled>
    <h3>{project}</h3>
    <img src={img} alt={project} />
    <h5>
      {technologies[0]} + {technologies[1]}
    </h5>
    <p>{description}</p>
    <div className="cta">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <AiOutlineEye /> Live
      </a>
      {codeLink && (
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <BiGitBranch /> Code
        </a>
      )}
      {/* <a href="http://" target="_blank" rel="noopener noreferrer">
        <RiScreenshot2Line /> Screenshots
      </a> */}
    </div>
  </WorkCardStyled>
);

export default WorkCard;

const WorkCardStyled = styled.div`
  min-width: 380px;
  width: 380px;
  background: ${({ theme }) => theme.colors.black};
  margin-right: 3rem;
  padding: 1.5rem 2rem;

  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.normal};
    font-weight: ${({ theme }) => theme.fonts.weights.large};
    color: ${({ theme }) => theme.colors.white};
  }
  img {
    display: block;
    width: 100%;
    height: 120px;
    object-fit: cover;
    margin: 0.85rem 0;
  }

  h5 {
    font-size: ${({ theme }) => theme.fonts.sizes.xsm};
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.xsm};
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
    color: ${({ theme }) => theme.colors.offwhite};
    margin: 10px 0;
    letter-spacing: 0.05em;
  }

  .cta {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      font-size: ${({ theme }) => theme.fonts.sizes.xsm};

      svg {
        margin-right: 5px;
        font-size: ${({ theme }) => theme.fonts.sizes.sm};
      }
    }
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    min-width: 100%;
    margin-bottom: 2.5rem;
    margin-right: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;
