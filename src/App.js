import React, { Component } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Portrait from "./images/Headshots-Portrai---300x300t.jpg";

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
    currentPage: "Cover Letter"
  };

  render() {
    const navClickChange = newPage => {
      document.getElementById("site__content").classList.remove("show");
      document.getElementById("site__content").classList.add("hide");
      document.getElementById("site__footer").classList.remove("show");
      document.getElementById("site__footer").classList.add("hide");
      setTimeout(() => {
        this.setState({ currentPage: newPage });
      }, 250);
      setTimeout(() => {
        document.getElementById("site__content").classList.add("show");
        document.getElementById("site__content").classList.remove("hide");
        document.getElementById("site__footer").classList.add("show");
        document.getElementById("site__footer").classList.remove("hide");
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
        <main id="site__content" className="show">
          <Content currentPage={this.state.currentPage} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
