import React from "react";
import { useField } from "formik";
import styled, { createGlobalStyle } from "styled-components/macro";
import { globalColors } from "../GlobalTheme/globalStyles";
import { FaAsterisk } from "react-icons/fa";

export const FormStyles = createGlobalStyle`
  form {
    width:600px;
    margin: 0 auto
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
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 30px;
`;

export const FormField = ({ fieldMainType, label, ...props }) => {
  const [field, meta] = useField(props);
  let errClass = meta.touched && meta.error ? "error " : "";
  let reqClass = props.required ? "required" : "";
  const FieldType = props => {
    if (fieldMainType === "input") {
      return <input {...field} {...props} />;
    } else if (fieldMainType === "textarea") {
      return <textarea {...field} {...props} />;
    }
  };
  return (
    <FieldStyles id={field.name} className={errClass + reqClass}>
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
      <FieldType />
    </FieldStyles>
  );
};
