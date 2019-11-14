import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { globalColors } from "./Components/GlobalTheme/globalStyles";
import Header from "./Components/GlobalTheme/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/GlobalTheme/Footer";
import Portrait from "./images/Headshots-Portrai---300x300t.jpg";
import iconHTML5 from "./images/Icon - Programming - HTML.png";
import iconCSS3 from "./images/Icon - Programming - CSS.png";
import iconSASS from "./images/Sass-Logo---Seal-(Color).png";
import iconJavascript from "./images/Icon---Programming---JavaScript-CROPPED.png";
import iconReact from "./images/Icon - Programming - React.png";

// TODO
// 1. Site meta

const AppStyle = styled.div`
  a {
    color: ${globalColors.yellow};
    text-decoration: none;
    text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.75);
    transition: color 0.5s ease;
    &:hover,
    &:focus {
      color: ${globalColors.yellowLT};
    }
  }

  button,
  .btn {
    color: ${globalColors.tanDK};
    background-color: ${globalColors.yellow};
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1em;
    font-weight: 900;
    text-align: center;
    padding: 13px 13px 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
    text-shadow: none;
    cursor: pointer;
    transition: 0.25s ease-out;
    &.btn-img {
      padding: 10px 13px;
    }
    img {
      height: 20px;
      width: auto;
      margin-right: 7px;
    }
    &:hover,
    &:focus {
      background-color: ${globalColors.yellow};
      color: ${globalColors.tanDK};
      box-shadow: 0px 0.25px 2px 0px rgba(0, 0, 0, 0.5);
    }
  }

  .page__title {
    color: ${globalColors.blue};
    margin: 0 0 40px;
    font-size: 40px;
    font-weight: 100;
    text-align: center;
    &:after {
      content: "";
      display: block;
      margin: 40px auto 0;
      width: 150px;
      border-bottom: 1px solid ${globalColors.tanLT};
    }
    span {
      display: block;
    }
  }

  .page__section {
    margin-bottom: 50px;
  }

  .section__intro {
    width: 95%;
    margin: 0 auto 75px;
    @media screen and (min-width: 760px) {
      width: 750px;
    }
    h3 {
      @include section-title;
    }
    p {
      font-size: 18px;
      line-height: 1.8em;
      letter-spacing: 0.07em;
    }
  }

  .title-list {
    padding: 0;
    margin: 0 0 40px;
    & > li {
      list-style: none;
    }
    & .title-list {
      @media screen and (min-width: 760px) {
        margin-left: 20px;
      }
    }
    & ul {
      list-style-type: square;
    }
  }

  #site__content {
    position: relative;
    transition: opacity 0.5s;
    .header--fixed & {
      @media screen and (min-width: 960px) {
        margin-top: 250px;
      }
    }
    p {
      text-align: justify;
    }
  }

  .show,
  .hide,
  .fade {
    transition: opacity 0.4s ease;
  }
  .show {
    opacity: 1;
  }
  .hide {
    opacity: 0;
  }
  .fade {
    @media screen and (max-width: 960px) {
      opacity: 0.25;
    }
  }
`;

class App extends Component {
  state = {
    portrait: Portrait,
    roles: [
      {
        role: "Front-End Developer",
        key: "fed"
      },
      {
        role: "UI/UX Designer",
        key: "uixd"
      }
    ],
    contactInfo: [
      {
        info: "linkedin.com/in/avischoenbrun",
        link: "https://www.linkedin.com/in/avischoenbrun",
        key: "lnkdin"
      },
      {
        info: "aviy.sch@gmail.com",
        link: "mailto:aviy.sch@gmail.com",
        key: "email"
      },
      {
        info: "(732) 372-5102",
        link: "tel:732-372-5102",
        key: "phone"
      }
    ],
    mainNav: [
      {
        name: "Cover Letter",
        slug: "",
        key: "coverLetter"
      },
      {
        name: "Resume",
        slug: "resume",
        key: "resume"
      }
    ],
    currentPage: "Cover Letter",
    builtWith: [
      {
        name: "HTML5",
        image: iconHTML5,
        key: "html5"
      },
      {
        name: "CSS3",
        image: iconCSS3,
        key: "css3"
      },
      {
        name: "SASS",
        image: iconSASS,
        key: "sass"
      },
      {
        name: "Javascript",
        image: iconJavascript,
        key: "javascript"
      },
      {
        name: "React",
        image: iconReact,
        key: "react"
      }
    ],
    repo: "https://github.com/aschoenbrun/portfolio-site-dev/tree/master/src",
    headerClass: "App"
  };

  // TODO: Switch to React Transition Group
  // https://reactcommunity.org/react-transition-group/
  // https://github.com/reactjs/react-transition-group
  // https://blog.bitsrc.io/how-to-implement-smooth-transitions-in-react-bd0497b06b8
  //  https://css-tricks.com/animating-between-views-in-react/
  navClickChange = newPage => {
    const visElems = ["site__content", "site__footer"];
    const doVis = () => {
      visElems.forEach(el => {
        document.getElementById(el).classList.toggle("hide");
      });
    };

    doVis();

    setTimeout(() => {
      this.setState({ currentPage: newPage });
      window.scrollTo(0, 0);
      doVis();
    }, 250);
  };

  componentDidMount() {
    //document.addEventListener("scroll", this.headerClassToggleHandler);
  }

  componentWillUnmount() {
    //window.removeEventListener("scroll", this.headerClassToggleHandler);
  }

  render() {
    return (
      <AppStyle className={this.state.headerClass}>
        <Router>
          <Header
            portrait={this.state.portrait}
            roles={this.state.roles}
            contactInfo={this.state.contactInfo}
            mainNav={this.state.mainNav}
            changePage={newPage => this.navClickChange(newPage)}
            totop={() => {
              window.scrollTo(0, 0);
            }}
          />
          <Content />
          <Footer builtWith={this.state.builtWith} repo={this.state.repo} />
        </Router>
      </AppStyle>
    );
  }
}

export default App;
