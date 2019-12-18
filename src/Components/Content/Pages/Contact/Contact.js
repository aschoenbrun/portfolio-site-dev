import React from "react";
import ContactForm from "./ContactForm";

const Contact = props => {
  // Get phone info from state in App.js
  return (
    <>
      <div id="phone">(732) 372-5102</div>
      <ContactForm />
    </>
  );
};

export default Contact;
