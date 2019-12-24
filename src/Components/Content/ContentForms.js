import React, { useState, useEffect, useRef } from "react";
import { useField } from "formik";
import styled, { createGlobalStyle, keyframes } from "styled-components/macro";
import { globalColors } from "../GlobalTheme/globalStyles";
import { FaAsterisk } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

export const FormStyles = createGlobalStyle`
  form {
    width: 90%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 600px;
    }
  }
`;

const fieldPadding = "10px";
const fieldBorderWidth = "2px";

const FieldStyles = styled.div`
  margin-bottom: 20px;
  #label__wrapper {
    display: flex;
    justify-content: flex-start;
  }
  label,
  .error__message,
  .required__icon {
    display: inline-block;
    background-color: ${globalColors.tan};
    color: white;
    text-transform: uppercase;
    font-size: 0.65rem;
    line-height: 1em;
    font-weight: 700;
    margin-right: 1px;
    padding: 5px 7px;
  }
  label {
    transition: 0.5s;
  }
  &.focus label {
    background-color: ${globalColors.orange};
  }
  .error__message,
  .required__icon {
    background-color: ${globalColors.red};
    margin-bottom: 1px;
  }
  .error__message {
    padding-bottom: 4px;
  }
  .required__icon {
    font-size: 7px;
    padding: 7px 3px 3px;
  }
  input,
  textarea,
  select {
    display: block;
    width: calc(100% - (${fieldPadding} + ${fieldBorderWidth}) * 2);
    border: 2px solid ${globalColors.tan};
    transition: 0.5s;
    padding: ${fieldPadding};
  }
  &.focus {
    input,
    textarea,
    select {
      border-color: ${globalColors.orange};
    }
  }
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-gap: 30px;
  }
`;

// TODO: Set up WYSIWYG editor via Draft
// tutorial for toolbar with icons: https://ipenywis.com/tutorials/let%27s-create-a-rich-text-editor-with-draftjs-and-react-toolbar-and-inline-styles-02

// const WysiwygField = props => {};

export const FormField = ({ fieldMainType, label, ...props }) => {
  const [field, meta] = useField(props);

  let errClass = meta.touched && meta.error ? "error " : "";
  let reqClass = props.required ? "required" : "";

  let fieldType;
  if (fieldMainType === "input") {
    fieldType = <input {...field} {...props} />;
  } else if (fieldMainType === "textarea") {
    fieldType = <textarea {...field} {...props} />;
  } else if (fieldMainType === "wysiwyg") {
    fieldType = <textarea {...field} {...props} />;
  }

  const [formFocusClass, setFormFocusClass] = useState("");

  const fullFormClear = () => {
    props.handleReset();
    if (props.deliveryStat !== "") {
      props.setDeliveryStat("");
    }
  };

  return (
    <FieldStyles
      id={field.name}
      className={errClass + reqClass + formFocusClass}
      onFocus={() => {
        setFormFocusClass(" focus");
        fullFormClear();
      }}
      onBlur={() => setFormFocusClass("")}
    >
      <div id="label__wrapper">
        <label>{label}</label>
        {props.required ? (
          <div className="required__icon">
            <FaAsterisk />
          </div>
        ) : (
          ""
        )}
        {meta.touched && meta.error ? (
          <div className="error__message">{meta.error}</div>
        ) : null}
      </div>
      {fieldType}
    </FieldStyles>
  );
};

const formSubAnimation = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
`;

const FormSubmissionStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1em;
  font-weight: 700;
  color: white;
  button,
  #form__submission,
  #form__delivery-status {
    margin-right: 7px;
  }
  #form__submission,
  #form__delivery-status {
    text-align: center;
    box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
  }
  #form__submission {
    background-color: ${globalColors.green};
    padding: 8px 9px;
    display: none;
    svg {
      font-size: 18px;
      animation: ${formSubAnimation} 2s linear infinite;
    }
  }
  &.submitting #form__submission {
    display: block;
  }
  &.sent,
  &.failed {
    &.submitting #form__submission {
      display: none;
    }
  }
  #form__delivery-status {
    padding: 12px 13px 11px;
    display: none;
  }
  &.sent,
  &.failed {
    #form__delivery-status {
      display: block;
    }
  }
  &.sent #form__delivery-status {
    background-color: ${globalColors.green};
  }
  &.failed #form__delivery-status {
    background-color: ${globalColors.red};
  }
`;

export const FormSubmission = props => {
  const subStatusClass = useRef("");
  const subResultTxt = useRef("");
  useEffect(() => {
    if (props.isSubmitting) {
      subStatusClass.current.classList.add("submitting");
    } else {
      subStatusClass.current.classList.remove("submitting");
    }
  }, [props.isSubmitting]);
  useEffect(() => {
    // TODO: Set class on form instead of here
    if (props.deliveryStat === "success") {
      subStatusClass.current.classList.remove("failed");
      subStatusClass.current.classList.add("sent");
      subResultTxt.current.textContent = "sent";
    } else if (props.deliveryStat === "failed") {
      subStatusClass.current.classList.remove("sent");
      subStatusClass.current.classList.add("failed");
      subResultTxt.current.textContent = "failed";
    } else {
      subStatusClass.current.classList.remove("sent");
      subStatusClass.current.classList.remove("failed");
      subResultTxt.current.textContent = "";
    }
  }, [props.deliveryStat]);

  const fullFormClear = () => {
    props.handleReset();
    if (props.deliveryStat !== "") {
      props.setDeliveryStat("");
    }
  };

  const SubStatusIndicator = () => {
    return <div id="form__delivery-status" ref={subResultTxt}></div>;
  };

  return (
    <FormSubmissionStyles ref={subStatusClass}>
      <button type="submit" value="Send">
        Submit
      </button>
      <button type="button" value="Reset" onClick={fullFormClear}>
        Reset
      </button>
      <div id="form__submission">
        <FiLoader />
      </div>
      <SubStatusIndicator />
    </FormSubmissionStyles>
  );
};
