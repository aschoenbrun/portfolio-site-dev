import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components/macro";
import { PageMargin, globalColors } from "../GlobalTheme/globalStyles";
import AboutMe from "./Pages/AboutMe";
import Resume from "./Pages/Resume";
import MyApps from "./Pages/MyApps";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";

const Content = props => {
  const ContentStyles = styled(PageMargin)`
    /*position: relative;*/
    transition: opacity 0.5s;
    background-color: white;
    .header--fixed & {
      @media screen and (min-width: 960px) {
        margin-top: 250px;
      }
    }
    section {
      margin-bottom: 75px;
    }
    p,
    li {
      color: ${globalColors.tanDK};
    }
    p {
      text-align: left;
      line-height: 1.5em;
      letter-spacing: 0.1em;
    }
    .repo-link {
      margin: 60px 0 20px;
    }
  `;

  return (
    <ContentStyles as="main" id="site__content">
      <Switch>
        <Route path="/about-me" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/my-apps" component={MyApps} /> />
        <Route
          path="/contact"
          render={props => <Contact contactInfo={props.contactInfo} />}
        />
        <Route path="/ui-ux-gallery" component={Gallery} />
        <Redirect exact from="/" to="/about-me" />
        <Redirect exact from="/gallery" to="/ui-ux-gallery" />
      </Switch>
    </ContentStyles>
  );
};

export default Content;
