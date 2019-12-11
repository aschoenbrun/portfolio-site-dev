import React from "react";
import styled from "styled-components/macro";
import { globalColors } from "../GlobalTheme/globalStyles";

const SectionIntroStyles = styled.div`
  .section-header__slashes {
    float: left;
    margin-top: 2px;
    margin-right: 10px;
    letter-spacing: 0.01em;
    color: ${globalColors.tanLT};
    font-weight: 300;
  }
  p {
    font-size: 18px;
    line-height: 1.8em;
    letter-spacing: 0.07em;
    margin-top: 0;
  }
`;

const SectionIntro = props => {
  return (
    <SectionIntroStyles>
      <span className="section-header__slashes">&#47;&#47; </span>
      {props.children}
    </SectionIntroStyles>
  );
};

export default SectionIntro;
