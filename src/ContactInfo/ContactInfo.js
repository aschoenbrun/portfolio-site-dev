import React from "react";

const contactInfo = props => {
  return (
    <p>
      {props.contactLink ? (
        <a href={props.contactLink}>{props.contactInfo}</a>
      ) : (
        props.contactInfo
      )}
    </p>
  );
};

export default contactInfo;
