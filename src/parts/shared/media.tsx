import React, { FC } from "react";
import styled from "styled-components";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import SmallD from "../../assets/imgs/small_daniel.png";

const Media: FC = () => (
  <MediaStyled>
    <img src={SmallD} alt="daniel" />
    <div>
      <a
        href="https://github.com/augustbemsen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
        Github
      </a>

      <a
        href="https://twitter.com/Dani_reptor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle />
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-bemsen-960b60171/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
        LinkedIn
      </a>
    </div>
  </MediaStyled>
);

export default Media;

const MediaStyled = styled.div`
  width: 100%;
  position: absolute;
  bottom: 3rem;
  display: flex;
  align-items: center;

  img {
    display: block;
    width: 35px;
    height: 35px;
  }

  div {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      font-size: ${({ theme }) => theme.fonts.sizes.small};
      color: ${({ theme }) => theme.colors.white};

      svg {
        font-size: ${({ theme }) => theme.fonts.sizes.normal};
        margin-right: 4px;
      }
    }
  }

  @media screen and (max-height: 500px) {
    bottom: 0;
  }
`;
