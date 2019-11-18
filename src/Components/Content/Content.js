import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { PageMargin } from "../GlobalTheme/globalStyles";
import CoverLetter from "./Pages/CoverLetter";
import Resume from "./Pages/Resume";

const Content = props => {
  const ContentStyles = styled(PageMargin)`
    position: relative;
    transition: opacity 0.5s;
    .header--fixed & {
      @media screen and (min-width: 960px) {
        margin-top: 250px;
      }
    }
    section {
      margin-bottom: 75px;
    }
    p {
      text-align: left;
    }
  `;
  return (
    <ContentStyles id="site__content">
      <Switch>
        <Route path="/about-me" component={CoverLetter} />
        <Route path="/resume" component={Resume} />
        <Redirect exact from="/" to="/about-me" />
      </Switch>
    </ContentStyles>
  );
};

export default Content;
