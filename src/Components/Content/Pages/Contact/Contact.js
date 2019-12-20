import React from "react";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import { PageTitle, globalColors } from "../../../GlobalTheme/globalStyles";

const Contact = props => {
  // Get phone info from state in App.js

  const Phone = props => {
    const PhoneStyles = styled.div`
      font-size: 30px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 50px;
      color: ${globalColors.blue};
    `;

    return <PhoneStyles>{props.children}</PhoneStyles>;
  };

  return (
    <>
      <Helmet>
        <title>Contact Me - Avi Schoenbrun</title>
        <link rel="canonical" href="https://aysportfolio/contact" />
      </Helmet>
      <PageTitle>Contact Me</PageTitle>
      <Phone>(732) 372-5102</Phone>
      <ContactForm />
    </>
  );
};

export default Contact;
