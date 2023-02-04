import React, { FunctionComponent } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { RiScreenshot2Line } from "react-icons/ri";
import styled from "styled-components";

const WorkCard: FunctionComponent = () => (
  <WorkCardStyled>
    <h3>Movie</h3>
    <img src="https://via.placeholder.com/350x130.png" alt="work" />
    <h5>React + Styled-Components</h5>
    <p>An App Where The User Can see Latest Movies and More Info About Them.</p>
    <div className="cta">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <AiOutlineEye /> Live
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <BiGitBranch /> Code
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <RiScreenshot2Line /> Screenshots
      </a>
    </div>
  </WorkCardStyled>
);

export default WorkCard;

const WorkCardStyled = styled.form`
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
`;
