import React from "react";

const mainNav = props => {
  return (
    <li onClick={props.changePage} id={props.key}>
      {props.name}
    </li>
  );
};

export default mainNav;
