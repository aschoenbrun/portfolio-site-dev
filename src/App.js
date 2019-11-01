import React, { Component } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Content from "./Content/Content";

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
        link: "hmailto:aviy.sch@gmail.com",
        key: "email"
      },
      {
        info: "(732) 372-5102",
        key: "phone"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header roles={this.state.roles} />
        <Content contactInfo={this.state.contactInfo} />
      </div>
    );
  }
}

export default App;
