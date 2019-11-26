import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
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
  const CalcButtonsSectionStyles = styled.section`
    display: flex;
    align-items: flex-start;
  `;

  const nums = useState([0]);
  const ops = useState([]);
  return (
    <div id="app--calculator">
      <PageMeta />
      <PageTitle>Calculator</PageTitle>
      <section id="display">
        <CalcDisplay />
      </section>
      <CalcButtonsSectionStyles id="buttons">
        <NumButtons />
        <OpButtons />
      </CalcButtonsSectionStyles>
    </div>
  );
};

export default CalculatorMain;
