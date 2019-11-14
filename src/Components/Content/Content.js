import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { PageMargin } from "../GlobalTheme/globalStyles";
import CoverLetter from "./CoverLetter";
import Resume from "./Resume";

const Content = ({ location }) => {
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
    .fade-enter {
      opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit.fade-exit-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
    }
  `;
  return (
    <ContentStyles id="site__content">
      <TransitionGroup>
        <CSSTransition
          in
          id="css-transition"
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Switch location={location}>
            <Route exact path="/" component={CoverLetter} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </ContentStyles>
  );
};

export default withRouter(Content);
