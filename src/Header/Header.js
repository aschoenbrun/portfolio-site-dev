import React, { Component } from "react";
import "./Header.scss";
import Role from "../Role/Role";

class Header extends Component {
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
    ]
  };
  render() {
    let roles = this.state.roles.map(role => {
      return <Role role={role.role} key={role.key} />;
    });
    return (
      <header id="site__header">
        <h1>Avi Schoenbrun</h1>
        <h2>{roles}</h2>
      </header>
    );
  }
}

export default Header;
