import React from "react";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../../GlobalTheme/globalStyles";

const Contact = props => {
  // Get phone info from state in App.js
  return (
    <>
      <Helmet>
        <title>Contact Me - Avi Schoenbrun</title>
        <link rel="canonical" href="https://aysportfolio/contact" />
      </Helmet>
      <PageTitle>Contact Me</PageTitle>
      <div id="phone">(732) 372-5102</div>
      <ContactForm />
    </>
  );
};

export default Contact;
