import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { PageTitle } from "../../GlobalTheme/globalStyles";
import { NumButtons, OpButtons, FnlButtons } from "./CalcButtons";
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
  const [nums, setNums] = useState([0]);
  const [ops, setOps] = useState([]);
  const [display, setDisplay] = useState(42);
  const calcDims = useState({
    buttonWidth: "35px",
    gridGap: "4px"
  });

  const CalcAppStyles = styled.div`
    display: grid;
    justify-content: center;
    width: calc(${calcDims[0].buttonWidth} * 4 + ${calcDims[0].gridGap} * 3);
    margin: 0 auto;
  `;

  const CalcButtonsSectionStyles = styled.div`
    display: grid;
    grid-template-columns:
      calc(${calcDims[0].buttonWidth} * 3 + ${calcDims[0].gridGap} * 2)
      ${calcDims[0].buttonWidth};
    grid-gap: ${calcDims[0].gridGap};
    align-items: flex-start;
    & #fnl-buttons {
      grid-column: 1 / 3;
    }
  `;

  return (
    <div id="app--calculator">
      <PageMeta />
      <PageTitle>Calculator</PageTitle>
      <CalcAppStyles calcDims={calcDims} id="calc-app">
        <CalcDisplay calcDims={calcDims}>{display}</CalcDisplay>
        <CalcButtonsSectionStyles id="buttons">
          <NumButtons calcDims={calcDims} />
          <OpButtons calcDims={calcDims} />
          <FnlButtons calcDims={calcDims} />
        </CalcButtonsSectionStyles>
      </CalcAppStyles>
    </div>
  );
};

export default CalculatorMain;
