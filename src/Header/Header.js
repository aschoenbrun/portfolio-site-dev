import React from "react";
import "./Header.scss";
import Role from "../Role/Role";
import ContactInfo from "../ContactInfo/ContactInfo";

const header = props => {
  let roles = props.roles.map(role => {
    return <Role role={role.role} key={role.key} />;
  });

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
  return (
    <header id="site__header">
      <div id="header__top">
        <div id="header-portrait"></div>
        <div>
          <h1>Avi Schoenbrun</h1>
          <h2>{roles}</h2>
        </div>
      </div>
      <div id="header__bottom">{contactInfo}</div>
    </header>
  );
};

export default header;
