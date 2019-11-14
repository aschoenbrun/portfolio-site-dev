import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = props => {
  return (
    <li id={props.key}>
      <NavLink onClick={props.changePage} to={`/${props.slug}`}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default MainNav;
