import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../textError/TextError";

function RadioButtons(props) {
  const { label, className, redioCustomClass, name, options, ...rest } = props;
  console.log("asdfsfa", props );
  return (
    <div className={className}>
      {label && <label className="form-label">{label}</label>}
      <div className={redioCustomClass}>
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div  className={`form-check ${props.inputClassNameOut}`}  key={option?.key}>
                  <input
                    className={`form-check-input ${props.inputClassName}`}
                    type="radio"
                    id={option?.value}
                    {...field}
                    {...rest}
                    value={option?.value}
                    checked={field?.value === option?.value}
                  />
                  <label className="form-check-label" htmlFor={option?.value}>
                    {option?.key}
                  </label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButtons;
