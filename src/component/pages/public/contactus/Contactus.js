import React, { useState } from "react";
import {
  Layout,
  AddSocialLinks,
  HeadingEditPage,
  LoaderAnimated,
} from "../../../common";
import "./ContactusStyle.scss";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { userApiCallPost } from "../../../../Axios/User";

const Contactus = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    userName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    message: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .required("Required")
      .max(
        "40",
        "Full name must be between 2-40 characters and special characters are not allowed."
      )
      .min(
        "2",
        "Full name must be between 2-40 characters and special characters are not allowed."
      )
      .matches(
        /^[aA-zZ ]+$/,
        "Full name must be between 2-40 characters and special characters are not allowed."
      ),
    email: Yup.string().email().required("Required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Please use number only")
      .required("Required"),
    companyName: Yup.string().required("Required"),
    website: Yup.string()
      .required("Required")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    message: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    setLoading(true);
    userApiCallPost("/contact-us", values, {}, "toastOn")
      .then((data) => {
        resetForm();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div innerClass="main_layout layout_contact">
      <LoaderAnimated isLoading={loading} />
      <HeadingEditPage title={"CONTACT US"} />
      <Container className="mianLayout_inside">
        {/* <h2 className="text-center subtitle-contact">Let’s talk business</h2> */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form className="mb-5">
                <Row>
                  <Col>
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      label="Full Name"
                      type="text"
                      name="userName"
                      value={values.userName}
                      maxLength={40}
                      onChange={(e) =>
                        setFieldValue("userName", e.target.value)
                      }
                    />
                  </Col>
                </Row>
                <Row className="contact-horizontal-inputs">
                  <Col xs={12} lg={6} className="chi_left">
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      label="Email"
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={(e) => setFieldValue("email", e.target.value)}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="chi_right">
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      type="text"
                      label="Phone Number*"
                      name="phone"
                      maxLength={15}
                      value={values.phone}
                      onChange={(e) => setFieldValue("phone", e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="contact-horizontal-inputs">
                  <Col xs={12} lg={6} className="chi_left">
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      type="text"
                      label="Company Name"
                      name="companyName"
                      maxLength={100}
                      value={values.companyName}
                      onChange={(e) =>
                        setFieldValue("companyName", e.target.value)
                      }
                    />
                  </Col>
                  <Col xs={12} lg={6} className="chi_right">
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      type="text"
                      label="Website"
                      name="website"
                      maxLength={100}
                      value={values.website}
                      onChange={(e) => setFieldValue("website", e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormikControl
                      className="east_form_input textarea_style"
                      control="textarea"
                      type="text"
                      label="Message"
                      name="message"
                      value={values.message}
                      maxLength={1000}
                      onChange={(e) => setFieldValue("message", e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="m-auto contact_btn" lg={8}>
                    <Button type="submit" className="large">
                      SUBMIT
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
};

export default Contactus;
