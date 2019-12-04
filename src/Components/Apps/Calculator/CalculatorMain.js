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
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [op, setOp] = useState("");
  const [opClicked, setOpClicked] = useState(false);
  const [opIcon, setOpIcon] = useState(null);

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
        <CalcDisplay calcDims={calcDims} num={num} op={op} opIcon={opIcon} />
        <CalcButtonsSectionStyles id="buttons">
          <NumButtons
            calcDims={calcDims}
            numInputs={numInputs}
            setNumInputs={setNumInputs}
            op={op}
            setOp={setOp}
            num={num}
            setNum={setNum}
            oldNum={oldNum}
            setOldNum={setOldNum}
          />
          <OpButtons
            calcDims={calcDims}
            op={op}
            setOp={setOp}
            numInputs={numInputs}
            setNumInputs={setNumInputs}
            num={num}
            setNum={setNum}
            oldNum={oldNum}
            setOldNum={setOldNum}
            opClicked={opClicked}
            setOpClicked={setOpClicked}
            opIcon={opIcon}
            setOpIcon={setOpIcon}
          />
          <FnlButtons
            calcDims={calcDims}
            oldNum={oldNum}
            setOldNum={setOldNum}
            setNumInputs={setNumInputs}
            num={num}
            setNum={setNum}
            setOp={setOp}
            op={op}
            opIcon={opIcon}
            setOpIcon={setOpIcon}
          />
        </CalcButtonsSectionStyles>
      </CalcAppStyles>
    </div>
  );
};

export default CalculatorMain;
