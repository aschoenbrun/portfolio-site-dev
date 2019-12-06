import React from "react";
import { kebabCase } from "../../globalJS";
import styled from "styled-components";
import Headroom from "react-headroom";
import { globalColors } from "../globalStyles";
import Role from "./Role";
import ContactInfo from "./ContactInfo";
import MainNav from "./MainNav";

const header = props => {
  // STYLES
  const headerImgDims = "115px";
  const roleSpacing = "1.1rem";
  const fxdHeaderImgDims = "50px";
  const chevronDeg = 15;

  const SiteHeader = styled.header`
    color: white;
    padding: 0;
    position: relative;
    z-index: 3000;
    .headroom-wrapper {
      margin-bottom: 80px;
      @media screen and (min-width: 960px) {
        margin-bottom: 50px;
      }
      .headroom--unpinned,
      .headroom--scrolled {
        @media screen and (max-width: 960px) {
          position: static !important;
        }
      }
      .headroom--scrolled {
        @media screen and (min-width: 760px) {
          width: 100%;
          #header__top {
            #header-portrait {
              height: ${fxdHeaderImgDims};
              width: ${fxdHeaderImgDims};
              margin-bottom: -5px;
              margin-right: 15px;
              box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
            }
            h2,
            h3 {
              display: inline;
            }
            h2 {
              font-size: 20px;
              margin-right: 25px;
            }
            h3 {
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
      h2 {
        font-size: 27px;
        font-weight: 300;
        line-height: 1.1em;
        margin: 0 0 5px;
        @media screen and (min-width: 760px) {
          font-size: 45px;
          line-height: normal;
        }
      }
      h3 {
        font-size: 12px;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin: 0;
        color: ${globalColors.tanLT};
        opacity: 0.75;
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
    #header__bottom {
      background-color: ${globalColors.tan};
      position: relative;
      z-index: 900;
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
      align-items: flex-start;
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
        width: 100%;
        margin: 4px 0 0;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
        transition: 0.25s ease-out;
        cursor: pointer;
        @media screen and (min-width: 960px) {
          width: auto;
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
            margin-bottom: 0;
            box-shadow: 0px 0.25px 2px 0px rgba(0, 0, 0, 0.5);
          }
        }
        @media screen and (min-width: 960px) {
          &:active {
            margin-bottom: -1;
            box-shadow: 0px 0.1px 1px 0px rgba(0, 0, 0, 0.5);
          }
        }
        a,
        button {
          color: ${globalColors.tanDK};
          background-color: transparent;
          box-shadow: none;
          display: block;
          padding: 13px 0;
          font-size: 12px;
          line-height: 1em;
          font-weight: 900;
          text-align: center;
          text-shadow: none;
          transition: 0.5s;
          @media screen and (min-width: 960px) {
            padding: 13px 15px 10px;
          }
          &:hover,
          &:focus {
            @media screen and (min-width: 960px) {
              padding: 17px 15px 10px;
            }
          }
          &:active {
            @media screen and (min-width: 960px) {
              padding: 18px 15px 9px;
            }
          }
          &.active {
            &,
            &:hover,
            &:focus {
              @media screen and (min-width: 960px) {
                padding: 17px 15px 10px;
                background-color: ${globalColors.orangeGreyLT};
              }
            }
          }
        }
        button {
          width: 100%;
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
    #contact-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      @media screen and (min-width: 760px) {
        flex-direction: row;
      }
    }
  `;

  // LOGIC

  let roles = props.roles.map(role => {
    return <Role name={role.name} key={role.id} />;
  });

  let contactList = props.contactInfo.map(info => {
    return (
      <ContactInfo
        contactInfo={info.info}
        contactLink={info.link}
        key={info.id}
      />
    );
  });

  let contactInfo = <section id="contact-info">{contactList}</section>;

  const mobileNavDrawerToggle = () => {
    document.getElementById("main-nav").classList.toggle("nav--open");
    document.getElementById("site__content").classList.toggle("fade");
  };

  const mobileNavDrawerStow = () => {
    document.getElementById("main-nav").classList.remove("nav--open");
    document.getElementById("site__content").classList.remove("fade");
    window.scrollTo(0, 0);
  };

  const mainNav = props.pages.map((page, index) => {
    const elemID = kebabCase(page.name);
    return (
      <MainNav
        name={page.name}
        key={elemID}
        slug={elemID}
        index={index}
        changePage={() => {
          mobileNavDrawerStow();
        }}
      />
    );
  });

  return (
    <SiteHeader id="site__header">
      <Headroom pinStart={500}>
        <div id="header__top">
          <div
            id="header-portrait"
            style={{ backgroundImage: `url(${props.portrait})` }}
          ></div>
          <div>
            <h2>Avi Schoenbrun</h2>
            <h3>{roles}</h3>
          </div>
        </div>
        <div id="header__bottom">{contactInfo}</div>
        <ul id="main-nav">
          {mainNav}
          <li id="mobile-nav__toggle" onClick={() => mobileNavDrawerToggle()}>
            <button>
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
            </button>
          </li>
        </ul>
      </Headroom>
    </SiteHeader>
  );
};

export default header;
