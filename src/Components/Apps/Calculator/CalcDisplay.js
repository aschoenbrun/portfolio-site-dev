import React from "react";
import styled from "styled-components";
import { Display } from "../../GlobalTheme/globalStyles";
import WebFont from "webfontloader";

const CalcDisplay = props => {
  WebFont.load({
    google: {
      families: ["Fira Code"]
    }
  });

  const CalcDisplayStyles = styled(Display)`
    font-family: "Fira Code", Courier, monospace;
  `;

  return <CalcDisplayStyles>{props.children}</CalcDisplayStyles>;
};

export default CalcDisplay;
