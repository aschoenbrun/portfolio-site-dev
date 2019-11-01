import React from "react";
import "./Content.scss";
import ContactInfo from "../ContactInfo/ContactInfo";

const content = props => {
  let contactList = props.contactInfo.map(info => {
    return (
      <ContactInfo
        contactInfo={info.info}
        contactLink={info.link}
        key={info.key}
      />
    );
  });

  let contactInfo = <section id="contact-info">{contactList}</section>;

  return <main id="site__content">{contactInfo}</main>;
};

export default content;
