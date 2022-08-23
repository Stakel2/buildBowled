import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../textError/TextError";

function Select(props) {
  const { label, name, className, ...rest } = props;
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        as="textarea"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Select;
