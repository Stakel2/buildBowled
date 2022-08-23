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
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../../../../Context/MainContext";
import OtpLayout from "../../../common/OtpLayout/OtpLayout";
// import "./LoginStyle.scss";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { brandsApiCallPost } from "../../../../Axios/Brands";
import { jwtEncrypt } from "../../../../utils/utils";
import Interceptors from "../../../../Axios/Interceptors";
import lock from "../../../../assets/images/lock-solid.svg";
import lockopen from "../../../../assets/images/lock-open-solid.svg";

// import { context } from "../../../../Context/MainContext";

const LinkEmail = (props) => {
  const [loading, setLoading] = useState(false);
  const [showOtpLay, setShowOtpLay] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [conPassVisible, setConPassVisible] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [resendVerification, setResendVerification] = useState(false);
  const { loginState, loginDispatch } = useContext(context);
  const [pass, setPass] = useState("");

  const eyeCon = (
    <img src={conPassVisible ? lockopen : lock} alt="icon" width="17px" />
  );
  const eye = (
    <img src={passVisible ? lockopen : lock} alt="icon" width="17px" />
  );
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required("Required")
      .max("60", "Max 60 characters are allowed"),

    password: Yup.string()
      .max(
        "20",
        "Password must be at least 8-20 characters or number, with at least 1 special character (#,$,%,...)"
      )
      .required("Required")
      .matches(
        /^(?=.*[a-z0-9])(?=.*[!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
        "Password must be at least 8-20 characters or number, with at least 1 special character (#,$,%,...)"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });

  function onSubmit(value) {
    console.log("TAG", value);
    // var email
    const newData = {
      type: "email",
      email: `${email}`,
      password: `${pass}`,
      confirmPassword: `${pass}`,
    };
    const finalData = jwtEncrypt(newData);

    setLoading(true);
    let encoded = base64_encode(`email----link----${email}----${value}`);

    userApiCallPost("/linkUserData", finalData, encoded, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        setLoading(false);
        if (data) {
          await localStorage.setItem("email", `+${email}`);
          await localStorage.setItem("isFromMobile", 2);
          navigate("/");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Email must be verified") {
          setResendVerification(true);
        }
        setLoading(false);
      });
  }
  const handleKeyDown = (e, lengt) => {
    if (e?.key === " ") {
      e.preventDefault();
    }
    if (e?.target?.value?.length > lengt && e?.which !== 8) {
      e.preventDefault();
    }
  };
  function resendOtp() {
    generateOtp(email);
  }
  function getOtp(value) {
    generateOtp(value.email);
    setEmail(value.email);
    setPass(value.password);
  }

  function generateOtp(email) {
    const newData = {
      type: "email",
      action: "link",
      value: email,
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
        if (err?.response?.data?.message === "email must be verified") {
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
                <h2>Enter Email</h2>
                <p>Enter email you want to linked</p>
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
                    <Row>
                      <Col lg={12}>
                        <FormikControl
                          className="east_form_input hasIcon"
                          control="input"
                          label="Email*"
                          type="email"
                          placeholder="e.g. bowled@gmail.com"
                          name="email"
                        />
                      </Col>
                      <Col lg={6}>
                        <div className="password-input-style">
                          <FormikControl
                            className="east_form_input hasIcon"
                            control="input"
                            type={passVisible ? "text" : "password"}
                            label="Password*"
                            name="password"
                            onKeyDown={(e) => handleKeyDown(e, 19)}
                            placeholder="**********"
                          />
                          <span
                            className="show-pw"
                            onClick={() => setPassVisible(!passVisible)}
                          >
                            {eye}
                          </span>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="password-input-style">
                          <FormikControl
                            className="east_form_input hasIcon"
                            control="input"
                            type={conPassVisible ? "text" : "password"}
                            label="Confirm password*"
                            name="confirmPassword"
                            onKeyDown={(e) => handleKeyDown(e, 19)}
                            placeholder="**********"
                          />
                          <span
                            className="show-pw"
                            onClick={() => setConPassVisible(!conPassVisible)}
                          >
                            {eyeCon}
                          </span>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="register_btn">
                          <Button
                            disabled={!(formik.isValid && formik.dirty)}
                            type="submit"
                            className=""
                          >
                            Add Email
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    {/* <Col className="passwordInst">
                      <p>
                         Password must have at least 8 characters, with at least 1 special character (!,#,$,&,@,_) or number
                      </p>
                    </Col> */}
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
              isMobile={false}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LinkEmail;
