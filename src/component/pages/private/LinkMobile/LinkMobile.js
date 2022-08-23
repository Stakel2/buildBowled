import { Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { HeaderSign, LoaderAnimated, StylishButton } from "../../../common";
import * as Yup from "yup";
import OTPInput, { ResendOTP } from "otp-input-react";
import FormikControl from "../../../common/FormikControl";
import {
  userApiCallPost,
  userApiCallPostWithoutHeader,
} from "../../../../Axios/UserAuth";
import { Link, useNavigate } from "react-router-dom";
import OtpLayout from "../../../common/OtpLayout/OtpLayout";
// import "./LoginStyle.scss";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { brandsApiCallPost } from "../../../../Axios/Brands";
import { jwtEncrypt } from "../../../../utils/utils";
import Interceptors from "../../../../Axios/Interceptors";
import { context } from "../../../../Context/MainContext";
import PhoneInput from "react-phone-input-2";

const LinkMobile = (props) => {
  const [loading, setLoading] = useState(false);
  const [showOtpLay, setShowOtpLay] = useState(false);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  const [isValidMobile, setIsValidMobile] = useState(false);
  const navigate = useNavigate();
  const [resendVerification, setResendVerification] = useState(false);
  const { loginState, loginDispatch } = useContext(context);
  const phoneRegExp = /^\+?\d{10,14}$/;
  const initialValues = {
    mobile: "",
  };
  function onSubmit(value) {
  
    console.log("TAG", mobile);
    var num = mobile.toString().replace(code, "");
    const newData = {
      type: "mobile",
      phone_no: num,
      phone_no_code: `+${code}`,
    };

     console.log('TAG',newData)
    const finalData = jwtEncrypt(newData);

    setLoading(true);
    let encoded = base64_encode(`mobile----link----+${mobile}----${value}`);

    userApiCallPost("/linkUserData", finalData, encoded, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        setLoading(false);
        if (data) {
          await localStorage.setItem("mobile", `+${mobile}`);
          await localStorage.setItem("isFromMobile", 3);
          navigate("/");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Mobile must be verified") {
          setResendVerification(true);
        }
        setLoading(false);
      });
  }
  // console.log('kkkkk',newData)
  function resendOtp() {
    generateOtp(mobile);
  }
  function getOtp() {
    generateOtp(mobile);
  }

  function generateOtp(mobile) {
    const newData = {
      type: "mobile",
      action: "link",
      value: `+${mobile}`,
    };

    setLoading(true);
    // https://api-stage.bowled.io/users/otp/api/v1/generate
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
        if (err?.response?.data?.message === "Mobile must be verified") {
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
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <h2> Add mobile number</h2>
                <p>
                  Enter your Mobile number with country code. We will send you a
                  6 digit code on given mobile number.
                </p>
              </div>
            </Col>
            <Col className="forgot_email">
              <Col lg={12}>
                <PhoneInput
                  countryCodeEditable={false}
                  autoFormat={false}
                  enableSearch={true}
                  country={"in"}
                  name="email"
                  onChange={(phone, data) => {
                    setMobile(phone);
                    setCode(data.dialCode);
                    console.log("TAG", data.dialCode);
                    console.log("TAG", phone);
                  }}
                  isValid={(value, country) => {
                    if (!value.match(phoneRegExp)) {
                      setIsValidMobile(false);
                      return "Enter valid phone number";
                    } else {
                      setIsValidMobile(true);
                      return true;
                    }
                  }}
                />
                <button
                  onClick={getOtp}
                  className="get_otp_link get_phone_otp btn_f"
                  disabled={!isValidMobile}
                  type="submit"
                >
                  Get OTP
                </button>
              </Col>
            </Col>
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
              isMobile={2}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LinkMobile;
