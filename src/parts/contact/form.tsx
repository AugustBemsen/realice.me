import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "../shared/button";

const ContactForm: FunctionComponent = () => (
  <ContactFormStyled>
    <div className="input-group">
      <label htmlFor="name">
        Name*
        <input type="text" name="name" />
      </label>
    </div>
    <div className="input-group">
      <label htmlFor="email">
        Email*
        <input type="email" name="email" />
      </label>
    </div>
    <div className="input-group">
      <label htmlFor="message">
        Message*
        <textarea name="name" />
      </label>
    </div>
    <Button fullWidth>Submit</Button>
  </ContactFormStyled>
);

export default ContactForm;

const ContactFormStyled = styled.form`
  width: 70%;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  z-index: 20;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem 3rem;

  .input-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      color: ${({ theme }) => theme.colors.white};
    }

    input,
    textarea {
      display: block;
      width: 100%;
      margin-top: 10px;
      height: 50px;
      border-radius: ${({ theme }) => theme.border.radius.md};
      border: ${({ theme }) => theme.border.width.normal} solid
        ${({ theme }) => theme.colors.white};
      background: none;
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem;
    }

    textarea {
      height: 100px;
      outline: none;
      margin-bottom: 2.2rem;
    }
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 1rem;
    margin-top: 2.5rem;
  }
`;
