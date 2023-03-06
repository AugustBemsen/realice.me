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
        btnText="Let’s Build"
        message="As a front-end developer, I develop user-friendly, visually appealing, 
      and responsive web interfaces using modern technologies. 
      I aim to create dynamic user experiences and enhance website functionality."
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
  }
`;
