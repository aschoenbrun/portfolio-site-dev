import React from "react";
import "./ContactInfo.scss";

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
