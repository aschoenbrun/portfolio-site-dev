import React from "react";
import { Display } from "../../GlobalTheme/globalStyles";

const CalcDisplay = props => {
  /*
  const [display, setDisplay] = useState();
  */

  return <Display className="display--code">{props.children}</Display>;
};

export default CalcDisplay;
