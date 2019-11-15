import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { PageMargin } from "../GlobalTheme/globalStyles";
import CoverLetter from "./CoverLetter";
import Resume from "./Resume";

const Content = props => {
  const ContentStyles = styled(PageMargin)`
    position: relative;
    transition: opacity 0.5s;
    .header--fixed & {
      @media screen and (min-width: 960px) {
        margin-top: 250px;
      }
    }
    p {
      text-align: left;
    }
  `;
  return (
    <ContentStyles id="site__content">
      <Switch>
        <Route exact path="/" component={CoverLetter} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </ContentStyles>
  );
};

export default Content;
