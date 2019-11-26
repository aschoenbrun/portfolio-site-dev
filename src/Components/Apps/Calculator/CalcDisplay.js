import React from "react";
import { Display } from "../../GlobalTheme/globalStyles";
import WebFont from "webfontloader";

const CalcDisplay = props => {
  WebFont.load({
    google: {
      families: ["Fira Code"]
    }
  });

  return <Display className="display--code">{props.children}</Display>;
};

export default CalcDisplay;
