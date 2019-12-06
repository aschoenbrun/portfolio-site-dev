import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { kebabCase } from "../../globalJS";
import PageAnchor from "../../GlobalTheme/PageAnchor";
import { SubNavStyles, PageTitle } from "../../GlobalTheme/globalStyles";
import SubNavItem from "../../GlobalTheme/SubNavItem";
import CalculatorMain from "../../Apps/Calculator/CalculatorMain";

const MyApps = () => {
  let match = useRouteMatch();

  const subPages = [
    {
      name: "Calculator",
      component: CalculatorMain
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
        <Route path={`${match.path}/${elemID}`} component={subPage.component} />
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
