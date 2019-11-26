import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from "react-icons/fa";

const CalcButtonStyles = styled.div`
  display: grid;
  grid-gap: 4px;
`;

export const NumButtons = () => {
  const numButtonNumArr = [];
  for (let i = 0; i < 10; i++) {
    numButtonNumArr.push(i);
  }
  const numButtonArr = [...numButtonNumArr, "posNeg", "dec"];

  // TODO: Figure out why "0" won't move properly
  const NumButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: repeat(3, 35px);
    justify-items: center;
    margin-right: 4px;
    & button:first-child {
      order: ${numButtonNumArr.length - 1};
      justify-self: center;
    }
    #num-btn--posNeg,
    #num-btn--dec {
      padding-right: 0;
      padding-left: 0;
      width: 35px;
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
  return <NumButtonStyles id="num-buttons">{numButtonList}</NumButtonStyles>;
};

export const OpButtons = () => {
  const OpButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: 35px;
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
  return <OpButtonStyles id="op-buttons">{opButtonList}</OpButtonStyles>;
};
