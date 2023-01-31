import React, { FC } from "react";
import styled from "styled-components";

import Avatar from "../../assets/imgs/large_daniel.png";

const LargeAvatar: FC = () => (
  <LargeAvatarStyled>
    <img src={Avatar} alt="Daniel Avatar" />
  </LargeAvatarStyled>
);

export default LargeAvatar;

const LargeAvatarStyled = styled.div`
  img {
    display: block;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  @media screen and (min-width: 1600px) {
    img {
      width: 500px;
      height: auto;
    }
  }
`;
