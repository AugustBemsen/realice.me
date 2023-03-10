import React, { FC, useEffect } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import styled from "styled-components";
import Rails from "../assets/svgs/rails";
import Media from "../parts/shared/media";
import MobileNav from "./mobileNav";
import SideBar from "./sideBar";

const HOC: FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <HOCStyled>
      <SideBar />
      <div className={location.pathname === "/" ? "rails" : "rails blur"}>
        <Rails />
      </div>
      <div className="content">
        <Outlet />
        <Media />
      </div>
      <MobileNav />
    </HOCStyled>
  );
};

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
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    &.blur {
      opacity: 0.3;
    }
  }

  .content {
    padding: 2.5rem 3rem;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1600px) {
    width: 85%;
    margin: auto;
    .rails {
      svg {
        height: 100%;
      }
    }

    .content {
      padding-left: 5rem;
    }
  }

  @media screen and (max-width: 850px) {
    display: block;
    height: auto;
    .rails {
      display: none;
    }

    .content {
      padding: 0;
      height: auto;
    }
  }
`;
