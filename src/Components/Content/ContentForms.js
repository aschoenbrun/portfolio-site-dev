import React from "react";
import { useField } from "formik";
import styled from "styled-components/macro";
import { globalColors } from "../GlobalTheme/globalStyles";

const GlobalFieldStyles = styled.div`
  input,
  textarea,
  select {
    border: 1px solid ${globalColors.tan};
    transition: 0.5s;
  }
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
`;

export const TextInput = ({ mainType, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <GlobalFieldStyles id={field.name}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </GlobalFieldStyles>
  );
};

export const TextArea = ({ mainType, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <GlobalFieldStyles id={field.name}>
      <label>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </GlobalFieldStyles>
  );
};
