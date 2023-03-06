import React, { FunctionComponent, useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../shared/button";

const ContactForm: FunctionComponent = () => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID as string;
  const templateId = import.meta.env.VITE_EMAIL_TEMP_ID as string;
  const publicKey = import.meta.env.VITE_EMAIL_PK as string;

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef<string | HTMLFormElement>("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (email && name && message) {
      setLoading(true);
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        (result) => {
          setLoading(false);
          setEmail("");
          setMessage("");
          setName("");
          toast("Thanks for reaching out, I'll get back to you soon", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "success",
          });
        },
        (error) => {
          setLoading(false);
          toast("Couldn't complete your request, try again", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "error",
          });
        }
      );
    } else {
      toast("Please fill out all fields", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "warning",
      });
    }
  };
  return (
    // @ts-ignore
    <ContactFormStyled onSubmit={sendEmail} ref={formRef}>
      <div className="input-group">
        <label htmlFor="name">
          Name*
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="email">
          Email*
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="message">
          Message*
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <Button type="submit" fullWidth isLoading={loading}>
        Submit
      </Button>
      <ToastContainer pauseOnHover />
    </ContactFormStyled>
  );
};

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
