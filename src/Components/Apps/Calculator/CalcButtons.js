import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FaPlus,
  FaMinus,
  FaTimes,
  FaDivide,
  FaTrashAlt,
  FaEquals
} from "react-icons/fa";

const CalcButtonStyles = styled.div`
  display: grid;
  grid-gap: ${props => props.calcDims.gridGap};
  & button {
    padding-right: 0;
    padding-left: 0;
    width: ${props => props.calcDims.buttonWidth};
  }
`;

export const NumButtons = ({
  props,
  calcDims,
  numInputs,
  setNumInputs,
  numPosNeg,
  setNumPosNeg,
  num,
  setNum,
  res,
  setRes,
  display,
  setDisplay
}) => {
  const numButtonNumArr = [];
  for (let i = 0; i < 10; i++) {
    numButtonNumArr.push(i);
  }
  const numButtonArr = [...numButtonNumArr, "posNeg", "dec"];

  const NumButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: repeat(3, ${calcDims.buttonWidth});
    justify-items: center;
    margin-right: ${calcDims.gridGap};
    & button:first-child {
      order: ${numButtonNumArr.length};
      justify-self: center;
    }
  `;

  useEffect(() => {
    console.log(num);
    setDisplay(num);
  }, [num, setDisplay]);

  const entryClickHandler = el => {
    const numInputStr = arr => {
      return arr.join("");
    };

    if (el !== "+/-") {
      if (numInputs.length === 1 && numInputs[0] === 0) {
        setNumInputs([el]);
        setNum(el);
      } else {
        let numArr = [...numInputs, el];
        setNumInputs(numArr);
        setNum(numInputStr(numArr));
      }
    } else {
      // Find out why not updating until next num insert
      // Perhaps incorporate useEffect?
      if (numPosNeg) {
        setNumPosNeg(false);
        let posNumArr = ["-", ...numInputs];
        setNumInputs(posNumArr);
        numInputStr(posNumArr);
      } else {
        setNumPosNeg(true);
        numInputs = numInputs.shift();
        setNumInputs(numInputs);
        numInputStr(numInputs);
      }
    }
  };

  const numButtonList = numButtonArr.map(numEl => {
    let numElIcon;
    if (numEl === "posNeg") {
      numElIcon = "+/-";
    } else if (numEl === "dec") {
      numElIcon = ".";
    } else {
      numElIcon = numEl;
    }
    let btnID = `num-btn--${numEl}`;

    return (
      <button
        value={numEl}
        className="btn num-btn"
        id={btnID}
        key={btnID}
        onClick={() => entryClickHandler(numElIcon)}
      >
        {numElIcon}
      </button>
    );
  });

  return (
    <NumButtonStyles id="num-buttons" calcDims={calcDims}>
      {numButtonList}
    </NumButtonStyles>
  );
};

export const OpButtons = ({ props, calcDims, ops, setOps }) => {
  const OpButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: ${calcDims.buttonWidth};
  `;

  // TODO: Equals and Clr as sep under
  const opsArr = ["add", "sub", "mult", "divd"];
  const opButtonList = opsArr.map(op => {
    let opIcon;
    if (op === "add") {
      opIcon = <FaPlus />;
    } else if (op === "sub") {
      opIcon = <FaMinus />;
    } else if (op === "mult") {
      opIcon = <FaTimes />;
    } else if (op === "divd") {
      opIcon = <FaDivide />;
    }
    return (
      <button className="btn op-btn" id={`op-btn--${op}`} key={op}>
        {opIcon}
      </button>
    );
  });
  return (
    <OpButtonStyles calcDims={calcDims} id="op-buttons">
      {opButtonList}
    </OpButtonStyles>
  );
};

export const FnlButtons = ({ props, calcDims, fnlActn, setFnlActn }) => {
  const FnlButtonStyles = styled(CalcButtonStyles)`
    grid-column: 1 / 3;
    grid-template-columns: repeat(2, 1fr);
    button {
      width: 100%;
    }
  `;

  const fnlArr = ["clr", "equ"];

  const fnlButtonsList = fnlArr.map(fnl => {
    let fnlIcon;
    if (fnl === "clr") {
      fnlIcon = <FaTrashAlt />;
    } else if (fnl === "equ") {
      fnlIcon = <FaEquals />;
    }
    return (
      <button className="btn fnl-btn" id={`fnl-btn--${fnl}`} key={fnl}>
        {fnlIcon}
      </button>
    );
  });
  return (
    <FnlButtonStyles calcDims={calcDims} id="fnl-buttons">
      {fnlButtonsList}
    </FnlButtonStyles>
  );
};
