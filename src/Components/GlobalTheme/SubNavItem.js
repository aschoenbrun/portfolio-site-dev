import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useRouteMatch } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const SubNavItem = props => {
  let anchor = "";
  props.anchor ? (anchor = props.anchor) : (anchor = "");
  let match = useRouteMatch();
  return (
    <li id={props.slug} key={props.slug}>
      <NavLink smooth className="btn" to={`${match.url}/${props.slug}${anchor}`}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default SubNavItem;
