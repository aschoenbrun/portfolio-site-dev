import React from "react";
import styled from "styled-components/macro";
import { HeaderFooterText } from "../globalStyles";

const ContactInfoStyles = styled(HeaderFooterText)`
  &:last-child {
    margin-right: 5px;
    margin-bottom: 0;
  }
`;

const contactInfo = props => {
  return (
    <ContactInfoStyles as="p">
      {props.contactLink ? (
        <a href={props.contactLink}>{props.contactInfo}</a>
      ) : (
        props.contactInfo
      )}
    </ContactInfoStyles>
  );
};

export default contactInfo;
