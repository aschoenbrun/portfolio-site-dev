import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./Components/GlobalTheme/globalStyles";
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
const contentful = require("contentful");

const client = contentful.createClient({
  space: "juya7hxyd5x0",
  environment: "master",
  accessToken: "0zlV_-AWBsMoopE2XY2faO7_OnLoU_KLXEHV03ywvlM"
});
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
        },
        {
          name: "UI/UX Gallery"
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
        <div className={this.state.headerClass}>
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
        </div>
      </>
    );
  }
}

export default App;
