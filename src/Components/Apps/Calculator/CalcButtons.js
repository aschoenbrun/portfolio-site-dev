import React from "react";
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
  grid-gap: ${props => props.calcDims[0].gridGap};
  & button {
    padding-right: 0;
    padding-left: 0;
    width: ${props => props.calcDims[0].buttonWidth};
  }
`;

export const NumButtons = props => {
  const numButtonNumArr = [];
  for (let i = 0; i < 10; i++) {
    numButtonNumArr.push(i);
  }
  const numButtonArr = [...numButtonNumArr, "posNeg", "dec"];

  // TODO: Figure out why "0" won't move properly
  const NumButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: repeat(3, ${props.calcDims[0].buttonWidth});
    justify-items: center;
    margin-right: ${props.calcDims[0].gridGap};
    & button:first-child {
      order: ${numButtonNumArr.length};
      justify-self: center;
    }
  `;

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
      <button value={numEl} className="btn num-btn" id={btnID} key={btnID}>
        {numElIcon}
      </button>
    );
  });

  return (
    <NumButtonStyles calcDims={props.calcDims} id="num-buttons">
      {numButtonList}
    </NumButtonStyles>
  );
};

export const OpButtons = props => {
  const OpButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: ${props.calcDims[0].buttonWidth};
  `;

  // TODO: Equals and Clr as sep under
  const ops = ["add", "sub", "mult", "divd"];
  const opButtonList = ops.map(op => {
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
    <OpButtonStyles calcDims={props.calcDims} id="op-buttons">
      {opButtonList}
    </OpButtonStyles>
  );
};

export const FnlButtons = props => {
  const FnlButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: repeat(2, 1fr);
    button {
      width: 100%;
    }
  `;

  const fnlArr = ["equ", "clr"];

  const fnlButtonsList = fnlArr.map(fnl => {
    let fnlIcon;
    if (fnl === "clr") {
      fnlIcon = <FaEquals />;
    } else if (fnl === "equ") {
      fnlIcon = <FaTrashAlt />;
    }
    return (
      <button className="btn fnl-btn" id={`fnl-btn--${fnl}`} key={fnl}>
        {fnlIcon}
      </button>
    );
  });
  return (
    <FnlButtonStyles calcDims={props.calcDims} id="fnl-buttons">
      {fnlButtonsList}
    </FnlButtonStyles>
  );
};
