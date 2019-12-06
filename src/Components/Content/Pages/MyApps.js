import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { kebabCase } from "../../globalJS";
import PageAnchor from "../../GlobalTheme/PageAnchor";
import RepoLink from "../../GlobalTheme/RepoLink";
import {
  SubNavStyles,
  PageTitle,
  PageSubTitle
} from "../../GlobalTheme/globalStyles";
import SubNavItem from "../../GlobalTheme/SubNavItem";
import CalculatorMain from "../../Apps/Calculator/CalculatorMain";

const MyApps = () => {
  let match = useRouteMatch();

  const subPages = [
    {
      name: "Calculator",
      component: <CalculatorMain />,
      // prettier-ignore
      repo: "https://github.com/aschoenbrun/portfolio-site-dev/tree/master/src/Components/Apps/Calculator"
    }
  ];
  const subNav = subPages.map((subPage, index) => {
    const elemID = kebabCase(subPage.name);
    return (
      <SubNavItem
        name={subPage.name}
        slug={`${elemID}`}
        anchor={"#page__anchor--app"}
        key={`${elemID}-${index + 1}`}
      />
    );
  });

  const PfApp = () => {
    const subPageRouteList = subPages.map(subPage => {
      const elemID = kebabCase(subPage.name);
      return (
        <Route path={`${match.path}/${elemID}`}>
          <Helmet>
            <title>{subPage.name} - My Apps - Avi Schoenbrun</title>
            <link
              rel="canonical"
              href={`https://aysportfolio/my-apps/${elemID}`}
            />
          </Helmet>
          <PageSubTitle>{subPage.name}</PageSubTitle>
          {subPage.component}
          <RepoLink appBuilt="calculator" repo={subPage.repo} />
        </Route>
      );
    });
    return subPageRouteList;
  };

  return (
    <>
      <PageTitle>My Apps</PageTitle>
      <PageAnchor component="app" />
      <SubNavStyles>{subNav}</SubNavStyles>
      <Switch>
        <PfApp />
      </Switch>
    </>
  );
};
export default MyApps;
