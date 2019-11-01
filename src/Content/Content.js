import React from "react";
import "./Content.scss";
import CoverLetter from "../Resume/CoverLetter";

const content = props => {
  return (
    <main id="site__content">
      <CoverLetter />
    </main>
  );
};

export default content;
