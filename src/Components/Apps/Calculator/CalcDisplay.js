import React from "react";
import styled from "styled-components";
import { globalColors, Display } from "../../GlobalTheme/globalStyles";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from "react-icons/fa";

const CalcDisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
  #display__icon-wrapper {
    margin-bottom: 20px;
    background-color: ${globalColors.tanLT};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${globalColors.tanXLT};
    font-size: 12px;
  }
  .display--code {
    border-left: none;
  }
`;

const CalcDisplay = ({ op, num }) => {
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
  console.log(opIcon);
  return (
    <CalcDisplayWrapper id="display__wrapper">
      <div id="display__icon-wrapper">{opIcon}</div>
      <Display className="display--code">{num}</Display>
    </CalcDisplayWrapper>
  );
};

export default CalcDisplay;
