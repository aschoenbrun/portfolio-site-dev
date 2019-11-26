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
  const CalcAppStyles = styled.div`
    display: grid;
    justify-content: center;
  `;

  const CalcButtonsSectionStyles = styled.div`
    display: flex;
    align-items: flex-start;
  `;

  const [nums, setNums] = useState([0]);
  const [ops, setOps] = useState([]);
  const [display, setDisplay] = useState(0);

  return (
    <div id="app--calculator">
      <PageMeta />
      <PageTitle>Calculator</PageTitle>
      <CalcAppStyles id="calc-app">
        <CalcDisplay>{display}</CalcDisplay>
        <CalcButtonsSectionStyles id="buttons">
          <NumButtons />
          <OpButtons />
        </CalcButtonsSectionStyles>
      </CalcAppStyles>
    </div>
  );
};

export default CalculatorMain;
