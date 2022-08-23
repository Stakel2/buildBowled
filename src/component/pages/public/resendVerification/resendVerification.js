import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { HeaderSign, Layout, LoaderAnimated } from "../../../common";
import { userApiCallPost } from "../../../../Axios/User";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormikControl from "../../../common/FormikControl";

export default function ResendVerification() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    passWord: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email must be a valid Email")
      .required(" Email address is required."),
  });

  function onSubmit(value) {
    const newData = {
      email: value.email,
    };
    setLoading(true);
    userApiCallPost("/verification-email", newData, {}, "toastOn")
      .then(async (res) => {
        console.log(res);
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  return (
    <>
         <LoaderAnimated isLoading={loading} />
        <div className="inner_pages_flow">
        <Row>
          <Col lg={12} >
          <div className="rg_title">
                  <h2>Resend Verification Link</h2>
            <p>
              Enter your e-mail address and we'll send you a link to verify your
              email.
            </p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      label="Email*"
                      type="email"
                      placeholder="e.g. bowled@gmail.com"
                      name="email"
                    />

                    <Button
                      disabled={!(formik.isValid && formik.dirty)}
                      type="submit"
                    >
                      Send
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
        </div>
    </>
  );
}
