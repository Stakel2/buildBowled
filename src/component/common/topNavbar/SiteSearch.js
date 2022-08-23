import React from "react";
import { Formik, Form } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

const SiteSearch = () => {
  const initialValues = {
    search: "",
  };
  const validationSchema = Yup.object({
    search: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    // console.log("Search data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Row>
              <Col className="input_wrap">
                <FormikControl
                  control="input"
                  type="text"
                  placeholder="Serach for NFT"
                  name="search"
                />
              </Col>
              <Col className="input_btn">
                <Button disabled={!formik.isValid}>SEARCH</Button>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SiteSearch;
