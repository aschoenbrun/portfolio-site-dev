import React from "react";
import styled from "styled-components";
import { globalColors } from "../GlobalTheme/globalStyles";

const SectionTitleStyles = styled.h3`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: lowercase;
  font-weight: 700;
  font-size: 25px;
  margin: 0 0 20px;
  color: ${globalColors.blue};
  & span {
    line-height: 27px;
  }
  .title-tag {
    font-size: 17px;
    font-weight: 300;
    margin-top: 2px;
    color: ${globalColors.tanLT};
    &:first-child {
      margin-right: 5px;
    }
    &:last-child {
      margin-left: 5px;
    }
  }
`;
const SectionTitle = props => {
  return (
    <SectionTitleStyles>
      <span className="title-tag">&lt; </span>
      <span>{props.children}</span>
      <span className="title-tag"> &#47;&gt;</span>
    </SectionTitleStyles>
  );
};

export default SectionTitle;
