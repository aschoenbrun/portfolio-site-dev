import React, { useCallback } from "react";
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
  oldNum,
  setOldNum,
  res,
  setRes
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

  const entryClickHandler = useCallback(
    el => {
      let newNumArr = [0];
      if (el !== "+/-") {
        if (numInputs.length === 1 && numInputs[0] === 0) {
          setOldNum(0);
          newNumArr = [el];
        } else {
          newNumArr = [...numInputs, el];
        }
      } else {
        if (numPosNeg) {
          setNumPosNeg(false);
          newNumArr = ["-", ...numInputs];
        } else {
          setNumPosNeg(true);
          let removed = numInputs.splice(0, 1);
          newNumArr = numInputs;
        }
      }
      setNumInputs(newNumArr);
      setNum(parseFloat(newNumArr.join("")));
    },
    [numInputs, setNumInputs, setNum, numPosNeg, setNumPosNeg, setOldNum]
  );

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

export const OpButtons = ({
  props,
  calcDims,
  ops,
  setOps,
  num,
  setNum,
  oldNum,
  setOldNum,
  res,
  setRes
}) => {
  const OpButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: ${calcDims.buttonWidth};
  `;

  const opsArr = [
    {
      name: "add",
      icon: <FaPlus />,
      operation: () => {
        return oldNum + num;
      }
    },
    {
      name: "sub",
      icon: <FaMinus />,
      operation: () => {
        return oldNum - num;
      }
    },
    {
      name: "mult",
      icon: <FaTimes />,
      operation: () => {
        return oldNum * num;
      }
    },
    {
      name: "divd",
      icon: <FaDivide />,
      operation: () => {
        return oldNum / num;
      }
    }
  ];

  let opHandler = useCallback(
    op => {
      setRes(op.operation(num, oldNum));
      setOldNum(res);
      setNum(res);
    },
    [res, setRes, oldNum, setOldNum, num, setNum]
  );

  const opButtonList = opsArr.map(op => {
    return (
      <button
        className="btn op-btn"
        id={`op-btn--${op.name}`}
        key={op.name}
        onClick={() => opHandler(op)}
      >
        {op.icon}
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

  const fnlClrHandler = useCallback(e => {
    console.log("CLEAR!");
  }, []);

  const fnlEquHandler = useCallback(e => {
    console.log("Equals");
  }, []);

  const fnlButtonsList = fnlArr.map(fnl => {
    let fnlIcon, fnlHandler;
    if (fnl === "clr") {
      fnlIcon = <FaTrashAlt />;
      fnlHandler = fnlClrHandler;
    } else if (fnl === "equ") {
      fnlIcon = <FaEquals />;
      fnlHandler = fnlEquHandler;
    }
    return (
      <button
        className="btn fnl-btn"
        id={`fnl-btn--${fnl}`}
        key={fnl}
        onClick={fnlHandler}
      >
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
