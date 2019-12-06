import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { globalColors, Display } from "../../GlobalTheme/globalStyles";

const CalcDisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  #display__icon-wrapper {
    margin-bottom: 20px;
    background-color: ${globalColors.tanLT};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${globalColors.tanXLT};
    font-size: 12px;
    padding-right: 0;
    width: 34px;
    svg {
      margin-left: 1px;
    }
  }
`;

const CalcDisplay = ({ op, setOp, num, opIcon }) => {
  const iconDrawer = useRef("");

  useEffect(() => {
    if (op !== "") {
      iconDrawer.current.classList.add("active");
    } else {
      iconDrawer.current.classList.remove("active");
    }
  }, [op, setOp]);

  return (
    <CalcDisplayWrapper id="display__wrapper">
      <div ref={iconDrawer} id="display__icon-wrapper">
        {opIcon}
      </div>
      <Display className="display--code">{num}</Display>
    </CalcDisplayWrapper>
  );
};

export default CalcDisplay;
