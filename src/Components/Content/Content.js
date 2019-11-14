import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { PageMargin } from "../GlobalTheme/globalStyles";
import CoverLetter from "./CoverLetter";
import Resume from "./Resume";

const content = props => {
  return (
    <PageMargin id="site__content">
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/" exact>
          <CoverLetter />
        </Route>
      </Switch>
    </PageMargin>
  );
};

export default withRouter(content);
