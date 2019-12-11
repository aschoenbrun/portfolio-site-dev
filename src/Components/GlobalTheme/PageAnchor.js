import React from "react";
import styled from "styled-components/macro";

const PageAnchorStyles = styled.div`
  margin-top: -40px;
  padding-top: 40px;
`;

const PageAnchor = props => {
  return (
    <PageAnchorStyles
      id={props.component ? `page__anchor--${props.component}` : `page__anchor`}
    />
  );
};

export default PageAnchor;
