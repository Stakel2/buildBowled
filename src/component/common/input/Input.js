import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../textError/TextError";
import "./inputStyle.scss";

function Input(props) {
  const { label, className, inputClassName, name, value, ...rest } = props;
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        className={`form-control ${props.inputClassName}`}
        id={name}
        name={name}
        value={value}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
