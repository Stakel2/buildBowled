import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FormikControl from "../../../common/FormikControl";
import { userApiCallGet } from "../../../../Axios/User";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./SignupStyle.scss";

const VerifyEmail = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [status, setStatus] = useState("Verifying your email...");
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    verifyEmail();
  }, [location]);

  const verifyEmail = () => {
    let queryParams = window.location.search
      .substr(1)
      .split("&")
      .reduce(function (q, query) {
        let chunks = query.split("=");
        let key = chunks[0];
        let value = decodeURIComponent(chunks[1]);
        value = isNaN(Number(value)) ? value : Number(value);
        return (q[key] = value), q;
      }, {});
    setToken(queryParams.token);
  };

  useEffect(() => {
    if (token) {
      setLoading(true);
      userApiCallGet(`/verifyemail?token=${token}`, {}, "toastOn")
        .then((resp) => {
          setLoading(false);
          setMessage(resp?.message);
          setStatus(resp?.message);
          // navigate("/login");
        })
        .catch((error) => {
          setLoading(false);
          navigate("/login");
        });
    }
  }, [token]);

  const [OTP, setOTP] = useState("");

  return (
    <>
       {/* ------------------------- Previous verifyemail page ------------------------- */}
        {/* <Col lg={6} className="m-auto mb-5 card_verifyEmail">
              <h1> {message}</h1>
              <a
                href=""
                onClick={() => {
                  navigate("/login");
                }}
              >
                Please Login
              </a>
            </Col> */}
        {/* ------------------------- Previous verifyemail page ------------------------- */}
        <div className="inner_pages_flow verify_page">
          <Row>
            <Col lg={12}>
              <div className="rg_title">
                <h2>Verify your Email</h2>
                <p>
                  We have sent a 6 digit code to your registered e-mail
                  bowled@gmail.com. Please enter OTP below to verify your e-mail
                  Id.
                </p>
              </div>
            </Col>
            <Row>
              <Col lg={12}>
                <div className="otp_area">
                  <OTPInput
                    className="otp_inputs"
                    value={OTP}
                    onChange={setOTP}
                    autoFocus
                    OTPLength={6}
                    otpType="text"
                    disabled={false}
                    secure
                  />
                  {/* <ResendOTP
                  onResendClick={() => console.log("Resend clicked")}
                /> */}
                  <div className="rg_title mb-0 mt-3 text-end">
                    <p>
                      Didn't receive the OTP? <Link to={"/"}>Resend</Link>
                    </p>
                  </div>
                </div>
              </Col>
              <div className="register_btn">
                <Button type="submit" className="">
                  Verify
                </Button>
              </div>
            </Row>
          </Row>
        </div>
    </>
  );
};

export default VerifyEmail;
