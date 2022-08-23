import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, HeadingEditPage, LoaderAnimated } from "../../../common";
import "./KycStyle.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";

import { brandsApiCallPost } from "../../../../Axios/Brands";

import FileUpload from "../../../common/FileUpload/FileUpload";
import TextError from "../../../common/textError/TextError";
import { context } from "../../../../Context/MainContext";
import { userApiCallPost } from "../../../../Axios/User";

const Kyc = () => {
  const navigate = useNavigate();
  const [maxDob, setMaxDob] = useState(new Date());
  const contextData = useContext(context);
  const [loading, setLoading] = useState(false);
  const [documentImagefile, setDocumentImagefile] = useState(null);

  const fileTypes = ["JPEG", "JPG", "PNG", "GIF"];
  let kycData = contextData.userData.kyc;

  const handleChange = (imageData, setFieldValue) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("image", imageData);
    userApiCallPost("/kycUpload", formData)
      .then((resp) => {
        if (resp) {
          let image_url = resp?.data[0]?.url;
          let key = resp?.data[0]?.key;
          setDocumentImagefile(image_url);
          setFieldValue("documentUrl", key);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
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
        /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
        "Full name must be between 2-40 characters and special characters are not allowed."
      ),
    dob: Yup.string().required("Required").nullable(),
    country: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "Please use number only"),
    address: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    documentType: Yup.string().required("Required"),
    documentUrl: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    userApiCallPost("/addKyc", values, {}, "toastOn")
      .then(async (res) => {
        if (res) {
          navigate("/user/profile");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    if (kycData) {
      setDocumentImagefile(kycData?.documentUrl || null);
    }
    getMaxDob();
  }, [kycData]);

  const documentType = [
    { key: "Select Document Type", value: "" },
    { key: "Passport", value: "Passport" },
    { key: "Id Card", value: "Id Card" },
  ];

  const getMaxDob = () => {
    let eighteenYearsAgo = new Date();
    eighteenYearsAgo = eighteenYearsAgo.setFullYear(
      eighteenYearsAgo.getFullYear() - 18
    );
    setMaxDob(new Date(eighteenYearsAgo));
  };

  return (
    <Layout innerClass="editProfile_layout">
      <LoaderAnimated isLoading={loading} />
      <HeadingEditPage title={"UPDATE YOUR KYC"} />
      {kycData?.kycStatus === "APPROVED" || kycData?.kycStatus === "PENDING" ? (
        <h3 style={{ textAlign: "center" }}>
          Your KYC{" "}
          {kycData?.kycStatus === "APPROVED"
            ? "has been Approved."
            : "is still Pending."}
        </h3>
      ) : kycData?.kycStatus === "FAILED" ||
        kycData?.kycStatus === "NOT_APPLIED" ? (
        <Container className="editContainerStyle">
          {kycData?.kycStatus === "FAILED" && (
            <h3 style={{ textAlign: "center", marginBottom: "100px" }}>
              Your KYC has been Rejected. Please Re-submit.
            </h3>
          )}
          <Formik
            enableReinitialize={true}
            initialValues={{
              fullName: kycData?.fullName || "",
              dob: kycData
                ? kycData.dob
                  ? new Date(kycData.dob)
                  : ""
                : "" || "",
              country: kycData?.country || "",
              phoneNumber: kycData?.phoneNumber || "",
              address: kycData?.address || "",
              postalCode: kycData?.postalCode || "",
              city: kycData?.city || "",
              documentType: kycData?.documentType || "",
              documentUrl: kycData?.documentUrl || "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue, errors, isValid, dirty }) => {
              return (
                <Form>
                  <Row>
                    <Col xs={12} lg={6}>
                      <p className="label_left_text_style">Enter your detail</p>
                    </Col>
                    <Col xs={12} lg={6}>
                      <FormikControl
                        className="east_form_input"
                        control="input"
                        label="Full Name"
                        type="text"
                        name="fullName"
                        maxLength={40}
                        value={values.fullName}
                        onChange={(e) =>
                          setFieldValue("fullName", e.target.value)
                        }
                      />
                      <FormikControl
                        className="east_form_input"
                        control="date"
                        label="Date of Birth"
                        type="text"
                        name="dob"
                        value={values.dob}
                        maxDate={maxDob}
                        onChange={(e) =>
                          setFieldValue(
                            "dob",
                            new Date(e.target.value).toString()
                          )
                        }
                      />
                      <FormikControl
                        className="east_form_input"
                        control="input"
                        label="Country of residence"
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={(e) =>
                          setFieldValue("country", e.target.value)
                        }
                      />
                      <FormikControl
                        className="east_form_input"
                        control="input"
                        label="Phone Number"
                        type="text"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        maxLength={15}
                        onChange={(e) =>
                          setFieldValue("phoneNumber", e.target.value)
                        }
                      />

                      <FormikControl
                        className="east_form_input"
                        control="input"
                        label="Residential address"
                        type="text"
                        name="address"
                        value={values.address}
                        onChange={(e) =>
                          setFieldValue("address", e.target.value)
                        }
                      />

                      <FormikControl
                        className="east_form_input"
                        control="input"
                        label="Postal Code"
                        type="text"
                        name="postalCode"
                        value={values.postalCode}
                        onChange={(e) =>
                          setFieldValue("postalCode", e.target.value)
                        }
                      />

                      <FormikControl
                        className="east_form_input"
                        control="input"
                        label="City"
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={(e) => setFieldValue("city", e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "25px" }}>
                    <Col xs={12} lg={6}>
                      {/* <p className="label_left_text_style">Document Type</p> */}
                    </Col>
                    <Col xs={12} lg={6}>
                      <FormikControl
                        className="selectStyle textLeft"
                        control="select"
                        label="Choose Document Type"
                        options={documentType}
                        name="documentType"
                      />
                    </Col>
                  </Row>
                  {values.documentType && (
                    <Row style={{ marginBottom: "25px" }}>
                      <Col>
                        <p className="label_left_text_style">
                          {values.documentType === "Passport"
                            ? "Upload Passport image"
                            : "Upload Document Id"}
                        </p>
                      </Col>
                      <Col>
                        {documentImagefile ? (
                          <div className="uploadedImg">
                            <span
                              className="close_img"
                              onClick={() => setDocumentImagefile(null)}
                            >
                              X
                            </span>
                            <img
                              id="passportImage"
                              src={documentImagefile}
                              alt=""
                            />
                          </div>
                        ) : (
                          <>
                            <FileUpload
                              className="uploadBox"
                              id="documentUrl"
                              onChange={(e) =>
                                handleChange(e.target?.files[0], setFieldValue)
                              }
                              accept="image/png, image/gif, image/jpeg , image/jpg "
                            >
                              <span> Browse image(Jpeg, Jpg, Png)</span>
                            </FileUpload>
                            <ErrorMessage
                              component={TextError}
                              name="documentUrl"
                            />
                          </>
                        )}
                      </Col>
                    </Row>
                  )}

                  <Col lg={6} className="m-auto edit_profile_btnStyle">
                    <Button
                      disabled={!(isValid && dirty)}
                      type="submit"
                      className="large"
                    >
                      SUBMIT
                    </Button>
                  </Col>
                </Form>
              );
            }}
          </Formik>
        </Container>
      ) : null}
    </Layout>
  );
};

export default Kyc;
