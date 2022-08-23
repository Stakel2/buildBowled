import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HeaderSign,
  Layout,
  LoaderAnimated,
  ModalCustom,
} from "../../../common";
import { Formik, Form, ErrorMessage } from "formik";
import "./SignupStyle.scss";
import SignUpImg from "../../../../assets/images/singup_img.png";
import FormikControl from "../../../common/FormikControl"
import * as Yup from "yup";
import { apiCallPost } from "../../../../Axios/Axios";
import { userApiCallPost } from "../../../../Axios/UserAuth";
import Loader from "../../../common/Loader/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import SocialButton from "../../../common/SocialBtns/SocialButton";
import google_icon from "../../../../assets/images/bowled-images/google_icon.svg";
import fb_icon from "../../../../assets/images/bowled-images/fb_icon.svg";
import OtpLayout from "../../../common/OtpLayout/OtpLayout";
import { userApiCallPostWithoutHeader } from "../../../../Axios/UserAuth";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { context } from "../../../../Context/MainContext";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import SocialLogin from "../../../common/socialLogin/SocialLogin";
import lock from "../../../../assets/images/lock-solid.svg";
import lockopen from "../../../../assets/images/lock-open-solid.svg";
import { jwtEncrypt } from "../../../../utils/utils";
import { brandsApiCallPost } from "../../../../Axios/Brands";


const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  termAndCondation: false,
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

  termAndCondation: Yup.boolean().oneOf(
    [true],
    "You must accept the privacy policy, terms and conditions"
  ),
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { signIn, responseFacebook, onFbFailure } = useContext(context);

  const [conPassVisible, setConPassVisible] = useState(false);
  const eye = (
    <img src={passVisible ? lockopen : lock} alt="icon" width="17px" />
  );
  const eyeCon = (
    <img src={conPassVisible ? lockopen : lock} alt="icon" width="17px" />
  );
  const hint = <FontAwesomeIcon icon={faInfoCircle} />;
  const [otpLayerVisibility, setOtpLayerVisibility] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const newData = {
      email: email,
      password: pass,
      confirmPassword: pass,
    };
  const finalData =jwtEncrypt(newData);

  
    console.log("OTP", values);
    let encoded = base64_encode(`email----signup----${email}----${values}`);
    console.log("CODE1", encoded);
    let decoded = base64_decode(encoded);
    console.log("CODE2", decoded);
    console.log("Sign up Values", values);
    await delete values["termAndCondation"];
    setLoading(true);
    userApiCallPost("/register",finalData, encoded, {}, "toastOn")
    
      .then((resp) => {
        if (!resp.error) {
          navigate("/login");
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  function resendOtp() {
    generateOtp(email);
  }

  function getOtp(value) {
    generateOtp(value.email);
    setEmail(value.email);
    setPass(value.password);
  }
  console.log("data", pass);
  function generateOtp(mail) {
    const newData = {
      type: "email",
      action: "signup",
      value: mail,
    };
    setLoading(true);
    brandsApiCallPost("/users/otp/api/v1/generate", newData, {}, "toastOn")
    // brandsApiCallPost(
      .then(async (res) => {
        console.log("DATA", res);
        if (!res.error) {
          setShowModal(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }
  const getCallBack = () => {
    setOtpLayerVisibility(true);
    setShowModal(false);
  };

  const handleKeyDown = (e, lengt) => {
    if (e?.key === " ") {
      e.preventDefault();
    }
    if (e?.target?.value?.length > lengt && e?.which !== 8) {
      e.preventDefault();
    }
  };

  return (
    <>
        <LoaderAnimated isLoading={loading} />
        <div className="inner_pages_flow">
          {!otpLayerVisibility ? (
            <Row>
              <Col lg={12}>
                <div className="rg_title">
                  <h2>Register</h2>
                  <p>
                    Already have an account? <Link to={"/login"}>Log In</Link>
                  </p>
                </div>
              </Col>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={getOtp}
              >
                {({ setFieldValue, isValid, dirty }) => {
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
                          <div className="password-input-style">
                            <div className="form-check checkbox">
                              <input
                                className="form-check-input east_form_input"
                                type="checkbox"
                                name="termAndCondation"
                                id="termAndCondation"
                                onChange={(e, d) => {
                                  setFieldValue(
                                    "termAndCondation",
                                    e.target.checked
                                  );
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="termAndCondation"
                              >
                                <span></span>I agree{" "}
                                <a href="/terms-of-service">
                                  Terms and conditions
                                </a>{" "}
                                and <a href="/privacy-policy">Privacy Policy</a>
                                .
                              </label>
                            </div>

                            <span style={{ color: "#ff2b6e" }}>
                              <ErrorMessage name="termAndCondation" />
                            </span>
                          </div>
                          <div className="register_btn">
                            <Button
                              disabled={!(isValid && dirty)}
                              type="submit"
                              className=""
                            >
                              Register
                            </Button>
                          </div>
                          <div className="or_divder">
                            <span>or</span>
                          </div>
                          <SocialLogin />
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
          ) : (
            <Row>
              <Col lg={12}>
                <OtpLayout
                  back={(onClick) => {
                    setOtpLayerVisibility(false);
                  }}
                  onclick={onSubmit}
                  resend={resendOtp}
                  showOtpLay={otpLayerVisibility}
                />
              </Col>
            </Row>
          )}
        </div>
       <ModalCustom
        show={showModal}
        size="modal-sm"
        title={"Email Verification"}
        customClass="signUp_style"
      >
        <p className="text-center mt-3 mb-5">
          We have sent a verification OTP on this email address{" "}
          <strong> {email} </strong> , Please verify OTP to complete your
          signup. If not received in Inbox, please check the Spam Folder.
        </p>
        <Col className="text-center">
          <Button
            className="large"
            style={{ width: "250px" }}
            onClick={() => getCallBack()}
          >
            Ok
          </Button>
        </Col>
      </ModalCustom>
    </>
  );
};

export default Signup;
