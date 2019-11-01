import React from "react";
import "./Content.scss";
import ContactInfo from "../ContactInfo/ContactInfo";

const content = props => {
  return (
    <main id="site__content">
      <ContactInfo />
    </main>
  );
};

export default content;
