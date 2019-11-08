import React, { Component } from "react";
import { PageMargin } from "./globalStyles";
import "./App.scss";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Portrait from "./images/Headshots-Portrai---300x300t.jpg";
import iconHTML5 from "./images/Icon - Programming - HTML.png";
import iconCSS3 from "./images/Icon - Programming - CSS.png";
import iconSASS from "./images/Sass-Logo---Seal-(Color).png";
import iconJavascript from "./images/Icon---Programming---JavaScript-CROPPED.png";
import iconReact from "./images/Icon - Programming - React.png";

// TODO
// 1. Style contact info
// 2. Site meta
// 3. Add "made with" section

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
        key: "coverLetter"
      },
      {
        name: "Resume",
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
    repo: "https://github.com/aschoenbrun/portfolio-site-dev/tree/master/src"
  };

  render() {
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

    const navClickChange = newPage => {
      const visElems = ["site__content", "site__footer"];
      const doVis = () => {
        visElems.forEach(el => {
          document.getElementById(el).classList.toggle("hide");
        });
      };

      doVis();

      // 1. copy mainNav arr & mutate COPY to selected: false for all elems
      // 2. mutate elem with current index in COPY to selected:true
      // 3. setStaet oldArr: newArr
      // 4. add selected class to current elem
      // 5. call funct

      setTimeout(() => {
        this.setState({ currentPage: newPage });
        window.scrollTo(0, 0);
        doVis();
        document.getElementById("site__content").classList.remove("fade");
      }, 250);
    };

    return (
      <div className="App">
        <Header
          portrait={this.state.portrait}
          roles={this.state.roles}
          contactInfo={this.state.contactInfo}
          mainNav={this.state.mainNav}
          changePage={newPage => navClickChange(newPage)}
        />
        <PageMargin id="site__content">
          <Content
            currentPage={this.state.currentPage}
            changePage={newPage => navClickChange(newPage)}
            resumeFile={this.state.resumeFile}
          />
        </PageMargin>
        <Footer builtWith={this.state.builtWith} repo={this.state.repo} />
      </div>
    );
  }
}

export default App;
