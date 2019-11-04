import React from "react";
import "./Footer.scss";

const footer = props => {
  return (
    <footer id="site__footer" className="show">
      <p>&copy; Copyright {new Date().getFullYear()} Avi Schoenbrun</p>
    </footer>
  );
};

export default footer;
