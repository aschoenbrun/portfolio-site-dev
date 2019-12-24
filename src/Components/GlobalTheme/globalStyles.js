import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Fira Code"]
  }
});

export const globalColors = {
  blue: "rgb(0, 31, 43)",
  yellow: "rgb(255, 196, 0)",
  yellowLT: "rgb(255, 210, 61)",
  tan: "rgb(91, 88, 75)",
  tanLT: "rgb(151, 145, 126)",
  tanXLT: "rgb(236, 234, 223)",
  tanDK: "rgb(66, 65, 59)",
  green: "rgb(12, 145, 62)",
  orange: "rgb(67, 21, 7)",
  orangeGreyLT: "rgb(208, 194, 149);",
  red: "rgb(166, 29, 0)"
};

export const GlobalStyles = createGlobalStyle`
  body, textarea, input, select {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  
  /*** FIXED FOOTER***/
  html,
  body,
  #root,
  .App {
    height: 100%;
  }

  .App {
    display: flex;
    flex-direction: column;
  }

  #site__content {
    flex: 1 0 auto;
  }

  #site__footer {
    flex-shrink: 0;
  }
`;

export const PageMargin = styled.div`
  width: 95%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 960px;
  }
  @media screen and (min-width: 1350px) {
    width: 1150px;
  }
`;

export const PageTitle = styled.h1`
  color: ${globalColors.blue};
  margin: 0 0 40px;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  &:after {
    content: "";
    display: block;
    margin: 40px auto 0;
    width: 150px;
    border-bottom: 1px solid ${globalColors.tanLT};
  }
  span {
    display: block;
  }
`;

export const PageSubTitle = styled.h2`
  color: ${globalColors.tan};
  margin: 0 0 40px;
  text-align: center;
  font-weight: 700;
`;

export const HeaderFooterText = styled.span`
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1em;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 5px 10px 5px;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 760px) {
    margin: 0 10px 0 0;
    padding-right: 10px;
    border-right: 1px solid ${globalColors.blue};
    &:last-child {
      margin-right: 0;
      padding-right: 0;
      border-right: none;
    }
  }
`;

export const SubNavStyles = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 50px;
  display: flex;
  justify-content: center;
`;

const DisplayStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid ${globalColors.tanLT};
  padding: 10px;
  line-height: 1em;
  max-width: calc(100% - 22px);
  min-width: 0;
  margin-bottom: 20px;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  white-space: nowrap;
  &.display--code {
    font-family: "Fira Code", Courier, monospace;
  }
`;

export const Display = props => {
  return (
    <DisplayStyles className={props.className}>{props.children}</DisplayStyles>
  );
};
