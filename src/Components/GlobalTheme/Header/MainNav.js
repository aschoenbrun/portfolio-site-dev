import React from "react";
import { Link } from "react-router-dom";

const mainNav = props => {
  return (
    <li id={props.key}>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/${props.slug}`}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default mainNav;
