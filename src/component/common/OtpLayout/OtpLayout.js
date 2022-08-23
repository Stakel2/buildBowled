import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import OTPInput, { ResendOTP } from "otp-input-react";
import "./OtpLayout.scss";
import { toasts } from "../Toast/Toast";
import { StylishButton } from "../stylishButton/StylishButton";
import { Link } from "react-router-dom";

const OtpLayout = ({ onclick, resend, showOtpLay, back, isMobile }) => {
  const [OTP, setOTP] = useState("");

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (OTP.length > 5) {
      onclick(OTP);
      console.log("OTP", OTP);
    } else {
      toasts.error("OTP Required!");
    }
  };

  return (
    <>
      {showOtpLay && (
        <div className="inner_pages_flow verify_page forgot_pass">
          <Row>
            <Formik onSubmit={onclick}>
              {(formik) => {
                return (
                  <Form>
                    <div className="otp_area">
                      <div className="rg_title">
                        <StylishButton
                          title="Back"
                          className="backbtn"
                          onClick={() => {
                            back();
                            setOTP("");
                          }}
                        />
                        {isMobile ? (
                          <>
                            <h2>Verify your Mobile</h2>
                            <p className="text mb-4">
                              We have sent a 6 digit code to your given mobile
                              number. Please enter OTP below to verify your
                              mobile number.
                            </p>
                          </>
                        ) : (
                          <>
                            <h2>Verify your Email</h2>
                            <p className="text mb-4">
                              We have sent a 6 digit code to your registered
                              e-mail. Please enter OTP below to verify your
                              e-mail Id.
                            </p>
                          </>
                        )}
                       
                      </div>
                      <div className="otp_box">
                        <label>Enter OTP</label>
                        <OTPInput
                          name="OTP"
                          className="otp_inputs"
                          value={OTP}
                          onChange={setOTP}
                          autoFocus
                          OTPLength={6}
                          otpType="number"
                          disabled={false}
                        />
                        <div className="rg_title mb-0 mt-3 text-end">
                          <p>
                            Didn't receive the OTP?{" "}
                            <Link
                              to=""
                              onClick={() => {
                                resend();
                                setOTP("");
                              }}
                            >
                              Resend
                            </Link>
                          </p>{" "}
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="verify_btn">
                      <Button
                        // disabled={!(formik.isValid && formik.dirty)}
                        type="submit"
                        onClick={handleOtpSubmit}
                      >
                        Verify
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Row>
        </div>
      )}
    </>
  );
};

export default OtpLayout;
