import React from "react";
import CoverLetter from "../Resume/CoverLetter";
import Resume from "../Resume/Resume";

const content = props => {
  if (props.currentPage === "Cover Letter") {
    return <CoverLetter />;
  } else if (props.currentPage === "Resume") {
    return <Resume />;
  }
  return { content };
};

export default content;
