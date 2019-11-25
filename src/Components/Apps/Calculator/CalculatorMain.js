import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../GlobalTheme/globalStyles";
import { NumButtons, OpButtons } from "./CalcButtons";
import CalcDisplay from "./CalcDisplay";

const PageMeta = () => {
  return (
    <Helmet>
      <title>Calculator - My Apps - Avi Schoenbrun</title>
      <link rel="canonical" href="https://aysportfolio/my-apps/calculator" />
    </Helmet>
  );
};

const CalculatorMain = () => {
  const nums = useState([0]);
  const ops = useState([]);
  return (
    <div id="app--calculator">
      <PageMeta />
      <PageTitle>Calculator</PageTitle>
      <section id="display">
        <CalcDisplay />
      </section>
      <section id="buttons">
        <NumButtons />
        <OpButtons />
      </section>
    </div>
  );
};

export default CalculatorMain;
