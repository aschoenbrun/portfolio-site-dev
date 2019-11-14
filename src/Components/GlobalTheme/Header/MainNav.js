import React from "react";
import { Link } from "react-router-dom";

const MainNav = props => {
  return (
    <li id={props.key}>
      <Link onClick={props.changePage} to={`/${props.slug}`}>
        {props.name}
      </Link>
    </li>
  );
};

export default MainNav;
