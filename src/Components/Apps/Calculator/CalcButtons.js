import React from "react";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from "react-icons/fa";

export const NumButtons = () => {
  const numButtonArr = [];
  for (let i = 0; i <= 9; i++) {
    numButtonArr.push(i);
  }
  const numButtonList = numButtonArr.map(numEl => {
    let btnID = `num-btn-${numEl}`;
    return (
      <button value={numEl} className="btn num-btn" id={btnID} key={btnID}>
        {numEl}
      </button>
    );
  });
  return <div id="num-buttons">{numButtonList}</div>;
};

export const OpButtons = () => {
  const ops = ["add", "sub", "mult", "divd", "equ"];
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
    } else if (op === "equ") {
      opIcon = <FaEquals />;
    }
    return (
      <button className="btn op-btn" id={`op-btn-${op}`} key={op}>
        {opIcon}
      </button>
    );
  });
  return <div id="op-buttons">{opButtonList}</div>;
};
