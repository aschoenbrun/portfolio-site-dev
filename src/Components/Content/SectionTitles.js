import React from "react";
import styled from "styled-components";
import { globalColors } from "../GlobalTheme/globalStyles";

const SectionTitleStyles = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: lowercase;
  font-weight: 700;
  font-size: 25px;
  margin: 0 0 30px;
  color: ${globalColors.blue};
  @media screen and (min-width: 1024px) {
    margin: 0 0 30px -17px;
  }
  & span {
    line-height: 27px;
  }
  .title-tag {
    font-size: 17px;
    font-weight: 300;
    margin-top: 2px;
    color: ${globalColors.tan};
    &:first-child {
      margin-right: 5px;
    }
    &:last-child {
      margin-left: 5px;
    }
  }
`;

export const SectionTitle = props => {
  return (
    <SectionTitleStyles>
      <span className="title-tag">&lt; </span>
      <span>{props.children}</span>
      <span className="title-tag"> &#47;&gt;</span>
    </SectionTitleStyles>
  );
};

const SectionSubTitleStyles = styled.h4`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.2em;
  margin: 0 0 10px;
  color: ${globalColors.blue};
`;
export const SectionSubTitle = props => {
  return <SectionSubTitleStyles>{props.children}</SectionSubTitleStyles>;
};

const SectionSubTitleDescStyles = styled(SectionSubTitleStyles)`
  font-size: 13px;
  margin: 0 0 15px;
  font-weight: 400;
  color: ${globalColors.tan};
  span {
    display: block;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 760px) {
    margin: -8px 0 13px;
    span {
      display: inline;
    }
  }
`;
export const SectionSubTitleDesc = props => {
  return (
    <SectionSubTitleDescStyles>{props.children}</SectionSubTitleDescStyles>
  );
};

const SectionTitleDividerStyles = styled.span`
  display: none !important;
  @media screen and (min-width: 760px) {
    display: block;
  }
`;
export const SectionTitleDivider = () => {
  return (
    <SectionTitleDividerStyles className="divider">
      {" "}
      |{" "}
    </SectionTitleDividerStyles>
  );
};
