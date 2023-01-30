import React, { FC } from "react";
import { Outlet, useMatches } from "react-router-dom";
import styled from "styled-components";
import Rails from "../svgs/rails";
import SideBar from "./sideBar";

const HOC: FC = () => (
  <HOCStyled>
    <SideBar />
    <div className="rails">
      <Rails />
    </div>
    <div className="content">
      <Outlet />
    </div>
  </HOCStyled>
);

export default HOC;

const HOCStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  position: relative;

  .rails {
    position: absolute;
    top: 0;
    right: -25px;
  }

  .content {
    margin-left: 3rem;
  }
`;
