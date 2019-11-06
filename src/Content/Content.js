import React from "react";
import CoverLetter from "../Resume/CoverLetter";
import Resume from "../Resume/Resume";

const content = props => {
  const changePage = props.changePage;
  if (props.currentPage === "Cover Letter") {
    return (
      <CoverLetter
        pageLinkCoverLetter={() => {
          changePage("Resume");
        }}
      />
    );
  } else if (props.currentPage === "Resume") {
    return <Resume />;
  }
  return { content };
};

export default content;
