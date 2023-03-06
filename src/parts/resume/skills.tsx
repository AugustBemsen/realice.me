import React, { FunctionComponent } from "react";
import { BiDownload } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";
import styled from "styled-components";
import skillsData from "../../utils/skillsData";

const Skills: FunctionComponent = () => (
  <SkillsStyled>
    <div className="skill-intro">
      <div className="person">
        <h2>Daniel Bemsen Akosu</h2>
        <a
          href="https://docs.google.com/document/d/1XgOTtULd609_9znaW1Vbq38KJbNKeS8avNTZjVWojeE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiDownload /> Download.pdf
        </a>
      </div>
      <h6>Software Engineer</h6>
    </div>
    <p className="note">
      I enjoy creating things that live on the internet, from websites to
      applications or anything in between. My goal is to always build products
      that provide pixel-perfect, performant experiences.
    </p>
    <div className="skill-set">
      <h3>Skills</h3>
      <div className="skills-wrapper">
        <hr />
        <div className="stuffs">
          {skillsData.map((skill) => (
            <div className="actions" key={skill}>
              <BsPlay />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
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
  padding: 1.5rem;
  position: relative;

  .skill-intro {
    .person {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: ${({ theme }) => theme.fonts.sizes.xl};
        color: ${({ theme }) => theme.colors.white};
      }

      a {
        display: inline-flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fonts.sizes.xsm};
        cursor: pointer;

        svg {
          font-size: ${({ theme }) => theme.fonts.sizes.sm};
          margin-right: 5px;
        }
      }
    }

    h6 {
      font-size: ${({ theme }) => theme.fonts.sizes.sm};
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.8;
    }
  }

  .note {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    line-height: 150%;
    margin-top: 1rem;
  }

  .skill-set {
    margin-top: 1.5rem;
    display: flex;
    align-items: flex-start;

    h3 {
      letter-spacing: 1px;
    }

    hr {
      border-style: dashed;
    }

    .skills-wrapper {
      width: 100%;
      margin-left: 1.5rem;
      padding-top: 1rem;
    }

    .stuffs {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }

    .actions {
      margin-bottom: 1rem;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-right: 1rem;

      p {
        font-size: ${({ theme }) => theme.fonts.sizes.sm};
        color: ${({ theme }) => theme.colors.white};
        width: calc(100% - ${({ theme }) => theme.fonts.sizes.normal} + 10px);
      }

      svg {
        font-size: ${({ theme }) => theme.fonts.sizes.normal};
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 7px;
      }
    }
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;

    .skill-intro {
      .person {
        flex-direction: column-reverse;
        align-items: flex-start;

        h2 {
          font-size: ${({ theme }) => theme.fonts.sizes.lg};
          margin: 10px 0;
        }

        a {
          font-size: ${({ theme }) => theme.fonts.sizes.normal};

          svg {
            font-size: ${({ theme }) => theme.fonts.sizes.normal};
          }
        }
      }
    }

    .skill-set .skills-wrapper {
      margin-left: 0;
    }
  }
`;
