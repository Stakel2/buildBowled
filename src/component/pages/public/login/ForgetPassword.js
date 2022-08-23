import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  HeaderSign,
  LoaderAnimated,
  StylishButton,
} from "../../../common";
import * as Yup from "yup";
import OTPInput, { ResendOTP } from "otp-input-react";
import FormikControl from "../../../common/FormikControl";
import { userApiCallPost,userApiCallPostWithoutHeader } from "../../../../Axios/UserAuth";
import { Link, useNavigate } from "react-router-dom";
import OtpLayout from "../../../common/OtpLayout/OtpLayout";
import "./LoginStyle.scss";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { brandsApiCallPost } from "../../../../Axios/Brands";

const ForgetPassword = ({back}) => {
  const [loading, setLoading] = useState(false);
  const [showOtpLay, setShowOtpLay] = useState(false);
  const [email, setEmail] = useState("");
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
      email: email,
    };
    let encoded = base64_encode(
      `email----forget_password----${email}----${value}`
    );

    setLoading(true);
    userApiCallPost("/forgot-password", newData, encoded, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        setLoading(false);
        navigate("/login");
        // if (data) {
        //   Interceptor.axiosInterceptor(
        //     { user: { ...data, userRole: data.role } },
        //     loginDispatch,
        //     props.setRedirectToLogin,
        //     props.setLoading
        //   );
        //   await loginDispatch({
        //     type: "userInfo",
        //     payload: { ...data, userRole: data.role },
        //   });
        //   setTimeout(() => {
        //     navigate("/marketplace");
        //   }, 500);
        // }
      })
      .catch((err) => {
        setLoading(false);
      });
  }
  
  function resendOtp() {
    generateOtp(email);
  }
  function getOtp(value) {
    generateOtp(value.email);
    setEmail(value.email);
  }

  function generateOtp(mail) {
    const newData = {
      type: "email",
      action: "forget_password",
      value: mail,
    };

    setLoading(true);
    //api-stage.bowled.io/otp/generate

    brandsApiCallPost("/users/otp/api/v1/generate", newData, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        // console.log("DATA ", data);
        // console.log("data.data.accessToken ", data.accessToken);
        setLoading(false);
        setShowOtpLay(true);
        if (data) {
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Email must be verified") {
          setShowOtpLay(true);
        }
        setLoading(false);
      });
  }

  return (
    <>
      <LoaderAnimated isLoading={loading} />
        <div className="inner_pages_flow verify_page forgot_pass">
          {!showOtpLay && (
            <Row>
              <Col lg={12}>
                <div className="rg_title">
                <StylishButton
                     title="Back"
                     className="backbtn"
                     onClick= {() => {
                      navigate("/login");
                      }}
                        />
                  <h2>Forgot your password?</h2>
                  <p>Enter your Email. We will e-mailed you a 6 digit code.</p>
                </div>
              </Col>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={getOtp}
              >
                {(formik) => {
                  return (
                    <Form>
                      <Col className="forgot_email">
                        <FormikControl
                          className="east_form_input"
                          control="input"
                          label="Enter your email*"
                          type="email"
                          placeholder="e.g. bowled@gmail.com"
                          name="email"
                        />

                        <button
                          className="get_otp_link btn_f"
                          disabled={!(formik.isValid && formik.dirty)}
                          type="submit"
                        >
                          Get OTP
                        </button>
                      </Col>
                    </Form>
                  );
                }}
              </Formik>
            </Row>
          )}
          <Row>
            <Col lg={12}>
              <OtpLayout
                back={(onClick) => {
                  setShowOtpLay(false);
                }}
                onclick={onSubmit}
                resend={resendOtp}
                showOtpLay={showOtpLay}
              />
            </Col>
          </Row>
        </div>
    </>
  );
};

export default ForgetPassword;
