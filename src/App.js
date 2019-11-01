import React, { Component } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Content from "./Content/Content";

// TODO
// 1. Style contact info
// 2. Site meta
// 3. Add "made with" section

class App extends Component {
  state = {
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
    ]
  };

  render() {
    return (
      <div className="App">
        <Header roles={this.state.roles} contactInfo={this.state.contactInfo} />
        <Content />
      </div>
    );
  }
}

export default App;
