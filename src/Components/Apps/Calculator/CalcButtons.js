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
  calcDims,
  numInputs,
  setNumInputs,
  op,
  setOp,
  num,
  setNum
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
      if (op === "equ") {
        setOp("");
      }
    },
    [numInputs, setNumInputs, num, setNum, op, setOp]
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
  calcDims,
  op,
  setOp,
  setOpIcon,
  setNumInputs,
  num,
  setNum,
  setOldNum
}) => {
  const OpButtonStyles = styled(CalcButtonStyles)`
    grid-template-columns: ${calcDims.buttonWidth};
  `;

  const opHandler = opIconProp => {
    setOldNum(num);
    setNumInputs([0]);
    setTimeout(() => {
      setOpIcon(opIconProp);
    }, 250);
    //setNum(0);
  };

  const opsArr = [
    {
      name: "add",
      icon: <FaPlus />,
      operation: () => {
        console.log("PLUS +");
        setOp("add");
      }
    },
    {
      name: "sub",
      icon: <FaMinus />,
      operation: () => {
        console.log("MINUS -");
        setOp("sub");
      }
    },
    {
      name: "mult",
      icon: <FaTimes />,
      operation: () => {
        console.log("MULTIPLY *");
        setOp("mult");
      }
    },
    {
      name: "divd",
      icon: <FaDivide />,
      operation: () => {
        console.log("DIVIDE /");
        setOp("divd");
      }
    }
  ];

  const opButtonList = useCallback(
    opsArr.map(opBtn => {
      return (
        <button
          className="btn op-btn"
          id={`op-btn--${opBtn.name}`}
          key={opBtn.name}
          onClick={() => {
            if (opBtn.name !== op) {
              opHandler(opBtn.icon);
              opBtn.operation();
            }
          }}
        >
          {opBtn.icon}
        </button>
      );
    }),
    [setOldNum, setNum, setNumInputs, setOp]
  );
  return (
    <OpButtonStyles calcDims={calcDims} id="op-buttons">
      {opButtonList}
    </OpButtonStyles>
  );
};

export const FnlButtons = ({
  calcDims,
  oldNum,
  setOldNum,
  setNumInputs,
  num,
  setNum,
  op,
  setOp,
  setOpIcon
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
    setOldNum(0);
    setNumInputs([0]);
    setNum(0);
    setOp("");
  }, [setNum, setNumInputs, setOldNum, setOp]);

  const fnlEquHandler = useCallback(
    op => {
      let numTotal;
      if (op === "add") {
        numTotal = oldNum + num;
      } else if (op === "sub") {
        numTotal = oldNum - num;
      } else if (op === "mult") {
        numTotal = oldNum * num;
      } else if (op === "divd") {
        numTotal = oldNum / num;
      } else {
        numTotal = num;
      }
      setNum(numTotal);
      setNumInputs([0]);
      setOp("equ");
    },
    [setNumInputs, setNum, num, oldNum, setOp]
  );

  const fnlButtonsList = fnlArr.map(fnl => {
    let fnlIcon, fnlHandler;
    if (fnl === "clr") {
      fnlIcon = <FaTrashAlt />;
      fnlHandler = () => {
        fnlClrHandler();
        setTimeout(() => {
          setOpIcon(fnlIcon);
        }, 250);
      };
    } else if (fnl === "equ") {
      fnlIcon = <FaEquals />;
      fnlHandler = () => {
        fnlEquHandler(op);
        setTimeout(() => {
          setOpIcon(fnlIcon);
        }, 250);
      };
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
