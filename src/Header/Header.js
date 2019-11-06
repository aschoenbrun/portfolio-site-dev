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

  const mobileNavDrawerToggle = () => {
    document.getElementById("main-nav").classList.toggle("nav--open");
    document.getElementById("site__content").classList.toggle("fade");
  };

  const mobileNavDrawerStow = () => {
    document.getElementById("main-nav").classList.remove("nav--open");
  };

  const mainNav = props.mainNav.map((info, index) => {
    return (
      <MainNav
        name={info.name}
        key={info.key}
        index={index}
        selected={info.selected}
        changePage={() => {
          changePage(info.name);
          mobileNavDrawerStow();
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
      <ul id="main-nav">
        {mainNav}
        <li id="mobile-nav__toggle" onClick={() => mobileNavDrawerToggle()}>
          <div id="bar-1" className="menu-toggle__icon-bar">
            <div id="left-bar" className="bar--half"></div>
            <div id="right-bar" className="bar--half"></div>
          </div>
          <div id="bar-2" className="menu-toggle__icon-bar">
            <div id="left-bar" className="bar--half"></div>
            <div id="right-bar" className="bar--half"></div>
          </div>
          <div id="bar-3" className="menu-toggle__icon-bar">
            <div id="left-bar" className="bar--half"></div>
            <div id="right-bar" className="bar--half"></div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default header;
