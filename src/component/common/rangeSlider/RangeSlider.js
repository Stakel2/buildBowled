import React from "react";
import { Field, ErrorMessage } from "formik";
import Slider from "react-rangeslider";
import TextError from "../textError/TextError";

const RangeSlider = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <Slider
              min={0}
              max={100}
              {...field}
              {...rest}
              // onChangeStart={this.handleChangeStart}
              onChange={setFieldValue}
              // onChangeComplete={this.handleChangeComplete}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default RangeSlider;
