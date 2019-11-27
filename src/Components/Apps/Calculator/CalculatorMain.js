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
  const [numInputs, setNumInputs] = useState([0]);
  const [numPosNeg, setNumPosNeg] = useState(true);
  const [num, setNum] = useState(0);
  const [ops, setOps] = useState([]);
  const [fnlActn, setFnlActn] = useState([]);
  const [display, setDisplay] = useState();
  const [res, setRes] = useState();

  const calcDims = {
    buttonWidth: "35px",
    gridGap: "4px"
  };

  const CalcAppStyles = styled.div`
    display: grid;
    justify-content: center;
    width: calc(${calcDims.buttonWidth} * 4 + ${calcDims.gridGap} * 3);
    margin: 0 auto;
  `;

  const CalcButtonsSectionStyles = styled.div`
    display: grid;
    grid-template-columns:
      calc(${calcDims.buttonWidth} * 3 + ${calcDims.gridGap} * 2)
      ${calcDims.buttonWidth};
    grid-gap: ${calcDims.gridGap};
    align-items: flex-start;
  `;

  return (
    <div id="app--calculator">
      <PageMeta />
      <PageTitle>Calculator</PageTitle>
      <CalcAppStyles calcDims={calcDims} id="calc-app">
        <CalcDisplay
          calcDims={calcDims}
          display={display}
          setDisplay={setDisplay}
        >
          {display}
        </CalcDisplay>
        <CalcButtonsSectionStyles id="buttons">
          <NumButtons
            calcDims={calcDims}
            numInputs={numInputs}
            setNumInputs={setNumInputs}
            display={display}
            setDisplay={setDisplay}
            numPosNeg={numPosNeg}
            setNumPosNeg={setNumPosNeg}
            num={num}
            setNum={setNum}
            res={res}
            setRes={setRes}
          />
          <OpButtons calcDims={calcDims} ops={ops} setOps={setOps} />
          <FnlButtons calcDims={calcDims} fnl={fnlActn} setFnl={setFnlActn} />
        </CalcButtonsSectionStyles>
      </CalcAppStyles>
    </div>
  );
};

export default CalculatorMain;
