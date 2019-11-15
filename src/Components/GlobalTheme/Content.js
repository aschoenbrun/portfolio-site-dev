import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PageMargin } from "./globalStyles";
import CoverLetter from "CoverLetter";
import Resume from "Resume";

const content = location => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={"fade"}
      >
        <PageMargin id="site__content">
          <Switch location={location}>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/" exact>
              <CoverLetter />
            </Route>
          </Switch>
        </PageMargin>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(content);
