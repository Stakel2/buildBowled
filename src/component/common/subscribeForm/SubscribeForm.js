import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./SubscribeFormStyle.scss";
import { Formik, Form } from "formik";
import FormikControl from "../FormikControl";
import * as Yup from "yup";
import { userApiCallPost } from "../../../Axios/User";

const SubscribeForm = (props) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email.").required("Email is required*"),
  });
  const onSubmit = (values, { resetForm }) => {
    // console.log("Sign up Values", values);
    const newData = {
      email: values.email,
    };
    // console.log("object", newData);

    setLoading(true);
    userApiCallPost("/subscribe", newData, {}, "toastOn")
      .then(async (res) => {
        resetForm();
        setLoading(false);
      })
      .catch((err) => {
        resetForm();
        setLoading(false);
      });
  };
  return (
    <Col className="subscribe_formStyle">
      <h2 className="sub-title text-center">Never miss a drop!</h2>
      <p className="sub_desc">
        Subscribe to our ultra exclusive drop list and the first to know about
        upcoming EAST drops.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <Row className="subscribe_form">
                <Col className="subscribe_form_left">
                  <FormikControl
                    className="subscribe_form_input"
                    control="input"
                    type="email"
                    placeholder="Enter Your E-mail Address "
                    name="email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                </Col>
                <Col className="subscribe_form_right">
                  <Button
                    // disabled={!formik.isValid}
                    type="submit"
                    className="btn-trans"
                  >
                    <span>Subscribe</span>
                  </Button>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Col>
  );
};

export { SubscribeForm };
