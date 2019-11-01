import React from "react";
import "./Header.scss";
import Role from "../Role/Role";

const header = props => {
  let roles = props.roles.map(role => {
    return <Role role={role.role} key={role.key} />;
  });
  return (
    <header id="site__header">
      <h1>Avi Schoenbrun</h1>
      <h2>{roles}</h2>
    </header>
  );
};

export default header;
