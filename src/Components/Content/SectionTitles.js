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
  margin: 0 0 20px;
  color: ${globalColors.blue};
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
  margin: 0 0 5px;
  color: ${globalColors.blue};
`;
export const SectionSubTitle = props => {
  return <SectionSubTitleStyles>{props.children}</SectionSubTitleStyles>;
};

const SectionSubTitleDescStyles = styled(SectionSubTitleStyles)`
  color: ${globalColors.tan};
  font-size: 13px;
  margin: -5px 0 7px;
  font-weight: 400;
  color: ${globalColors.tan};
`;
export const SectionSubTitleDesc = props => {
  return (
    <SectionSubTitleDescStyles>{props.children}</SectionSubTitleDescStyles>
  );
};

export const SectionTitleDivider = () => {
  return <span className="divider">|</span>;
};
