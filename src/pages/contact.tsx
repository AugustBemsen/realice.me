import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import ContactForm from "../parts/contact/form";
import Intro from "../parts/shared/intro";

const Contact: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <ContactStyled>
      <Intro
        btnFx={() => ""}
        btnText="Let’s Talk"
        message={
          <p>
            As a <span> Front-end Developer </span>, I develop user-friendly,
            visually appealing, and responsive web interfaces using{" "}
            <span> modern technologies </span>. I aim to create dynamic user
            experiences and <span> enhance </span> website functionality.
          </p>
        }
        title={
          <>
            <h1>
              Let’s
              <span> Build </span> That
            </h1>
            <h1>great idea</h1>
          </>
        }
        noBtn={windowWidth < 850}
      />
      <ContactForm />
    </ContactStyled>
  );
};

export default Contact;

const ContactStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1600px) {
    justify-content: center;
  }

  @media screen and (max-width: 850px) {
    display: block;
    margin-top: 7%;
  }
`;
