import React from "react";
import Role from "../Role/Role";
import ContactInfo from "../ContactInfo/ContactInfo";
import MainNav from "../Header/MainNav";

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

  let changePage = props.changePage;
  let mainNav = props.mainNav.map((info, index) => {
    return (
      <MainNav
        name={info.name}
        key={info.key}
        index={index}
        changePage={() => {
          changePage(info.name);
        }}
      />
    );
  });

  return (
    <header id="site__header">
      <div id="header__top">
        <div
          id="header-portrait"
          style={{ backgroundImage: `url(${props.portrait})` }}
        ></div>
        <div>
          <h1>Avi Schoenbrun</h1>
          <h2>{roles}</h2>
        </div>
      </div>
      <div id="header__bottom">{contactInfo}</div>
      <ul id="main-nav">{mainNav}</ul>
    </header>
  );
};

export default header;
