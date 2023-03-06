import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaBriefcase, FaMicroblog } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

const MobileNav: FunctionComponent = () => (
  <MobileNavStyled>
    <NavLink
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      to="/"
    >
      <div className="iconContainer">
        <FaHome className="icon" />
      </div>
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      to="/projects"
    >
      <div className="iconContainer">
        <AiFillProject className="icon" />
      </div>
      Projects
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      to="/resume"
    >
      <div className="iconContainer">
        <FaBriefcase className="icon" />
      </div>
      Resume
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      to="/contact"
    >
      <div className="iconContainer">
        <FaMicroblog className="icon" />
      </div>
      Contact
    </NavLink>
  </MobileNavStyled>
);

export default MobileNav;

const MobileNavStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 68px;
  background: #000;
  padding: 0.6rem 1rem;
  border-top: 1px solid rgba(8, 253, 216, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 5000000000;

  .nav-link {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.offwhite};
    font-weight: 700;
    text-decoration: none;
    text-align: center;

    .iconContainer {
      display: flex;
      width: 24px;
      height: 24px;
      border-radius: 8px;
      border: 2px solid ${({ theme }) => theme.colors.offwhite};
      align-items: center;
      justify-content: center;
      margin-bottom: 6px;
      .icon {
        font-size: 10px;
        fill: ${({ theme }) => theme.colors.offwhite};
      }
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};

      .line {
        background: ${({ theme }) => theme.colors.primary};
      }

      .iconContainer {
        border-color: ${({ theme }) => theme.colors.primary};
        .icon {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  @media screen and (min-width: 850px) {
    display: none;
  }
`;
