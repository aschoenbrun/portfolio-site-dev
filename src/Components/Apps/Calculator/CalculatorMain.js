import React, { useState, useEffect } from "react";
import { create, all } from "mathjs";
import styled from "styled-components";
import { NumButtons, OpButtons, FnlButtons } from "./CalcButtons";
import CalcDisplay from "./CalcDisplay";

const math = create(all);

const CalculatorMain = () => {
  const [numInputs, setNumInputs] = useState([0]);
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [op, setOp] = useState("");
  const [opClicked, setOpClicked] = useState(false);
  const [opIcon, setOpIcon] = useState(null);
  const [keyTypeClicked, setKeyTypeClicked] = useState("");

  useEffect(() => {
    console.log(`Old Number: ${oldNum}`);
    console.log(`Op: ${op}`);
    console.log(`Number: ${num}`);
  }, [num, oldNum, op]);

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
      <CalcAppStyles calcDims={calcDims} id="calc-app">
        <CalcDisplay
          calcDims={calcDims}
          num={math.format(num, { precision: 14 })}
          op={op}
          opIcon={opIcon}
        />
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
            setKeyTypeClicked={setKeyTypeClicked}
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
            keyTypeClicked={keyTypeClicked}
            setKeyTypeClicked={setKeyTypeClicked}
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
            setKeyTypeClicked={setKeyTypeClicked}
          />
        </CalcButtonsSectionStyles>
      </CalcAppStyles>
    </div>
  );
};

export default CalculatorMain;
