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

const equHandler = () => {
  console.log("EQUALS! =");
};

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
        newNumArr = [...numInputs, el];
        setNumInputs(newNumArr);
        setNum(parseFloat(newNumArr.join("")));
      } else {
        setNum(0 - num);
      }
    },
    [numInputs, setNumInputs, num, setNum]
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
  numInputs,
  setNumInputs,
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
      operation: (x, y) => {
        return x + y;
      }
    },
    {
      name: "sub",
      icon: <FaMinus />,
      operation: (x, y) => {
        return x - y;
      }
    },
    {
      name: "mult",
      icon: <FaTimes />,
      operation: (x, y) => {
        return x * y;
      }
    },
    {
      name: "divd",
      icon: <FaDivide />,
      operation: (x, y) => {
        return x / y;
      }
    }
  ];

  // FIXME: If change res to neg then apply operator - setas umInputs, oldNum and num to 0
  const opButtonList = useCallback(
    opsArr.map(op => {
      const opHandler = (res, name) => {
        setRes(res);
        setOldNum(res);
        setNumInputs([0]);
        setNum(res);
        setOps(name);
      };
      return (
        <button
          className="btn op-btn"
          id={`op-btn--${op.name}`}
          key={op.name}
          onClick={() => {
            let opRes = op.operation(oldNum, num);
            opHandler(opRes, op.name);
          }}
        >
          {op.icon}
        </button>
      );
    }),
    [setRes, setOldNum, setNum, setNumInputs, setOps]
  );
  return (
    <OpButtonStyles calcDims={calcDims} id="op-buttons">
      {opButtonList}
    </OpButtonStyles>
  );
};

export const FnlButtons = ({
  props,
  calcDims,
  fnlActn,
  setFnlActn,
  res,
  setRes,
  setOldNum,
  setNumInputs,
  setNum,
  setOps
}) => {
  const FnlButtonStyles = styled(CalcButtonStyles)`
    grid-column: 1 / 3;
    grid-template-columns: repeat(2, 1fr);
    button {
      width: 100%;
    }
  `;

  const fnlArr = ["clr", "equ"];

  const fnlClrHandler = useCallback(() => {
    console.log("CLEAR!");
    setRes(0);
    setOldNum(0);
    setNumInputs([0]);
    setNum(0);
    setOps("");
  }, [setNum, setNumInputs, setOldNum, setOps, setRes]);

  const fnlEquHandler = useCallback(() => {
    console.log("Equals");
    setNum(res);
    setOps("");
  }, [setNum, setOps, res]);

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
