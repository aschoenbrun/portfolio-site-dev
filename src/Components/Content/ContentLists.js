import React from "react";
import styled from "styled-components";
import { globalColors } from "../GlobalTheme/globalStyles";

const TitleListStyles = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const TitleList = props => {
  return <TitleListStyles>{props.children}</TitleListStyles>;
};

const ListStyles = styled.ul`
  padding: 0;
  margin: 0 0 15px;
  list-style-type: none;
  li {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    &::before,
    &:before {
      content: "\x0005C\x0005C";
      color: ${globalColors.tan};
      letter-spacing: -1px;
      font-size: 11px;
      margin-top: 3px;
      margin-right: 10px;
    }
  }
`;
export const List = props => {
  return <ListStyles>{props.children}</ListStyles>;
};

const ListHorizStyles = styled(ListStyles)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  li {
    align-items: center;
    margin-right: 10px;
    margin-bottom: 5px;

    &::before,
    &:before {
      margin-top: 0;
    }
  }
`;

export const ListH = props => {
  return <ListHorizStyles>{props.children}</ListHorizStyles>;
};
