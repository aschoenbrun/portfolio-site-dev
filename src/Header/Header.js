import React from "react";
import styled, { keyframes } from "styled-components";
import { globalColors } from "../globalStyles";
import Role from "../Role/Role";
import ContactInfo from "../ContactInfo/ContactInfo";
import MainNav from "../Header/MainNav";

const header = props => {
  // STYLES
  const headerImgDims = "115px";
  const roleSpacing = "1.1rem";
  const fxdHeaderImgDims = "50px";
  const chevronDeg = 15;

  const headerFadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const headerFadeOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;

  const SiteHeader = styled.header`
    color: white;
    padding: 0;
    margin-bottom: 80px;
    position: relative;
    z-index: 3000;
    @media screen and (min-width: 960px) {
      margin-bottom: 50px;
    }
    #header__top {
      position: relative;
      z-index: 1000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      background-color: ${globalColors.blue};
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
      @media screen and (min-width: 420px) {
        justify-content: center;
      }
      #header-portrait {
        height: ${headerImgDims};
        width: ${headerImgDims};
        margin-bottom: -7px;
        margin-right: 15px;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
        background-color: ${globalColors.tan};
        background-size: contain;
        background-repeat: no-repeat;
        background-blend-mode: luminosity;
        @media screen and (min-width: 760px) {
          margin-right: 20px;
        }
      }
      h1 {
        font-size: 27px;
        font-weight: 300;
        line-height: 1.1em;
        margin: 0 0 5px;
        @media screen and (min-width: 760px) {
          font-size: 45px;
          line-height: normal;
        }
      }
      h2 {
        font-size: 12px;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin: 0;
        color: ${globalColors.tan};
        @media screen and (min-width: 760px) {
          font-size: 14px;
        }
        span {
          display: block;
          @media screen and (min-width: 760px) {
            display: inline;
            &:first-child {
              padding-right: ${roleSpacing};
              margin-right: ${roleSpacing};
              border-right: 1px solid ${globalColors.tan};
            }
          }
        }
      }
    }
    .header--fixed & {
      @media screen and (min-width: 760px) {
        position: fixed;
        width: 100%;
        #header__top {
          #header-portrait {
            height: ${fxdHeaderImgDims};
            width: ${fxdHeaderImgDims};
            margin-bottom: -5px;
            margin-right: 15px;
            box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
          }
          h1,
          h2 {
            display: inline;
          }
          h1 {
            font-size: 20px;
            margin-right: 25px;
          }
          h2 {
            font-size: 12px;
          }
        }
        #header__bottom {
          #contact-info {
            padding: 13px;
            p {
              font-size: 10px;
            }
          }
        }
      }
    }
    .header--fixed.fadeIn & {
      @media screen and (min-width: 760px) {
        animation: ${headerFadeIn} 0.5s ease-out forwards;
      }
    }
    .header--fixed.fadeOut & {
      @media screen and (min-width: 760px) {
        animation: ${headerFadeOut} 0.5s ease-out forwards;
      }
    }
    #header__bottom {
      background-color: ${globalColors.tanDK};
      position: relative;
      z-index: 900;
      //border-top: 2px solid #fff;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
    }
    #main-nav {
      position: absolute;
      bottom: -38px;
      transform: translateY(0);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 0;
      width: 200px;
      transition: 0.5s;
      @media screen and (min-width: 960px) {
        flex-direction: row;
        box-shadow: none;
        position: relative;
        width: 100%;
        bottom: auto;
      }
      li {
        display: block;
        text-transform: uppercase;
        background-color: ${globalColors.yellow};
        color: ${globalColors.tanDK};
        font-size: 12px;
        line-height: 1em;
        font-weight: 900;
        text-align: center;
        width: 100%;
        padding: 13px 0;
        margin: 4px 0 0;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
        transition: 0.25s ease-out;
        cursor: pointer;
        @media screen and (min-width: 960px) {
          width: auto;
          padding: 13px 15px 10px;
          margin: 0 6px 4px 0;
          box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
        }
        &:last-child {
          margin-right: 0;
          border-bottom-width: 4px;
        }
        &:hover,
        &:focus {
          background-color: ${globalColors.yellowLT};
          @media screen and (min-width: 960px) {
            padding: 17px 15px 10px;
            margin-bottom: 0;
            box-shadow: 0px 0.25px 2px 0px rgba(0, 0, 0, 0.5);
          }
        }
        @media screen and (min-width: 960px) {
          &:active {
            padding: 18px 15px 9px;
            margin-bottom: -1;
            box-shadow: 0px 0.1px 1px 0px rgba(0, 0, 0, 0.5);
          }
        }
        &#mobile-nav__toggle {
          .menu-toggle__icon-bar {
            display: flex;
            justify-content: space-between;
            width: 20px;
            margin: 0 auto 3px;
            &:last-child {
              margin: 0 auto;
            }
          }
          @media screen and (min-width: 960px) {
            display: none;
          }
          .bar--half {
            width: 50%;
            height: 2px;
            background-color: ${globalColors.tanDK};
            transition: transform 0.25s;
            &#left-bar {
              transform: rotate(${chevronDeg}deg) translateX(0.5px);
            }
            &#right-bar {
              transform: rotate(-${chevronDeg}deg) translateX(-0.5px);
            }
          }
        }
      }
      &.nav--open {
        transform: translate(-50%, calc(100% - 36px));
        li#mobile-nav__toggle .bar--half {
          &#left-bar {
            transform: rotate(-${chevronDeg}deg) translateX(0.5px);
          }
          &#right-bar {
            transform: rotate(${chevronDeg}deg) translateX(-0.5px);
          }
        }
      }
    }
  `;

  // LOGIC

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

  document.addEventListener("scroll", () => {
    const bodyElem = document.querySelector(".App");
    if (window.scrollY > 500) {
      bodyElem.classList.remove("header--static");
      bodyElem.classList.add("header--fixed");
      bodyElem.classList.remove("fadeOut");
      bodyElem.classList.add("fadeIn");
    } else if (window.scrollY <= 500 && window.scrollY > 250) {
      bodyElem.classList.remove("fadeIn");
      bodyElem.classList.add("fadeOut");
    } else {
      bodyElem.classList.remove("fadeOut");
      bodyElem.classList.remove("header--fixed");
      bodyElem.classList.add("header--static");
    }
  });

  return (
    <SiteHeader id="site__header">
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
    </SiteHeader>
  );
};

export default header;
