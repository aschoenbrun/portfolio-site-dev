import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components/macro";
import {
  globalColors,
  GlobalStyles
} from "./Components/GlobalTheme/globalStyles";
import { Helmet } from "react-helmet";
import Header from "./Components/GlobalTheme/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/GlobalTheme/Footer";
import Portrait from "./images/Headshots-Portrai---300x300t.jpg";
import iconHTML5 from "./images/Icon---Programming---HTML.png";
import iconCSS3 from "./images/Icon---Programming---CSS.png";
import iconJavascript from "./images/Icon---Programming---JavaScript-CROPPED.png";
import iconReact from "./images/Icon---Programming---React.png";
import iconReactRouter from "./images/Icon---Programming---React-Router.png";
import iconNode from "./images/Icon---Programming---Node-JS-ICON-ONLY.png";
import iconStyledComponents from "./images/icon---Programming---styled-components.png";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
console.log(process.env);

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
    box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
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
      background-color: ${globalColors.yellowLT};
      color: ${globalColors.tanDK};
      box-shadow: 0px 0.25px 2px 0px rgba(0, 0, 0, 0.5);
    }
    &:active {
      box-shadow: 0px 0.1px 1px 0px rgba(0, 0, 0, 0.5);
    }
  }

  .page__section {
    margin-bottom: 50px;
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
  constructor(props) {
    super(props);
    this.state = {
      portrait: Portrait,
      roles: [
        {
          name: "Front-End Developer",
          id: "fed"
        },
        {
          name: "UI/UX Designer",
          id: "uixd"
        }
      ],
      contactInfo: [
        {
          info: "linkedin.com/in/avischoenbrun",
          link: "https://www.linkedin.com/in/avischoenbrun",
          id: "lnkdin"
        },
        {
          info: "aviy.sch@gmail.com",
          link: "mailto:aviy.sch@gmail.com",
          id: "email"
        },
        {
          info: "(732) 372-5102",
          link: "tel:732-372-5102",
          id: "phone"
        }
      ],
      pages: [
        {
          name: "About me"
        },
        {
          name: "Resume"
        },
        {
          name: "My Apps"
        },
        {
          name: "Contact"
        }
      ],
      builtWith: [
        {
          name: "HTML5",
          image: iconHTML5,
          id: "html5"
        },
        {
          name: "CSS3",
          image: iconCSS3,
          id: "css3"
        },
        {
          name: "Javascript",
          image: iconJavascript,
          id: "javascript"
        },
        {
          name: "React",
          image: iconReact,
          id: "react"
        },
        {
          name: "React Router",
          image: iconReactRouter,
          id: "reactRouter"
        },
        {
          name: "Node JS",
          image: iconNode,
          id: "nodeJs"
        },
        {
          name: "Styled Components",
          image: iconStyledComponents,
          id: "styledComponents"
        }
      ],
      repo: "https://github.com/aschoenbrun/portfolio-site-dev/tree/master/src",
      headerClass: "App"
    };
  }

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

  render() {
    return (
      <>
        <GlobalStyles />
        <AppStyle className={this.state.headerClass}>
          <Helmet>
            <title>Portfolio - Avi Schoenbrun</title>
            <link rel="canonical" href="https://aysportfolio/" />
            <meta
              name="description"
              content="I am a creative Front-End Developer and UI/UX Designer with 6 years experience in designing and building web applications."
            />
          </Helmet>
          <Router>
            <Header
              portrait={this.state.portrait}
              roles={this.state.roles}
              contactInfo={this.state.contactInfo}
              pages={this.state.pages}
              changePage={newPage => this.navClickChange(newPage)}
              totop={() => {
                window.scrollTo(0, 0);
              }}
            />
            <Content
              pages={this.state.pages}
              contactInfo={this.state.contactInfo}
            />
            <Footer builtWith={this.state.builtWith} repo={this.state.repo} />
          </Router>
        </AppStyle>
      </>
    );
  }
}

export default App;
