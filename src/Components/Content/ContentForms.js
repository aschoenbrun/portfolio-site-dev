import React from "react";
import { useField } from "formik";
import styled, { createGlobalStyle } from "styled-components/macro";
import { globalColors } from "../GlobalTheme/globalStyles";

export const FormStyles = createGlobalStyle`
  form {
    width:600px;
    margin: 0 auto
  }
`;

const FieldStyles = styled.div`
  label {
    display: inline-block;
  }
  input,
  textarea,
  select {
    display: block;
    width: 100%;
    border: 1px solid ${globalColors.tan};
    transition: 0.5s;
  }
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 20px;
`;

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let errClass = meta.touched && meta.error ? "error " : "";
  let reqClass = props.required ? "required" : "";
  return (
    <FieldStyles id={field.name}>
      <label className={errClass + reqClass}>{label}</label>
      <input {...field} {...props} className={errClass + reqClass} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FieldStyles>
  );
};

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let errClass = meta.touched && meta.error ? "error " : "";
  let reqClass = props.required ? "required" : "";
  return (
    <FieldStyles id={field.name}>
      <label className={errClass + reqClass}>{label}</label>
      <textarea {...field} {...props} className={errClass + reqClass} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FieldStyles>
  );
};
