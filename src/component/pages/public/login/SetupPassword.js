import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  HeaderSign,
  Layout,
  LayoutSetup,
  LoaderAnimated,
} from "../../../common";
import { Formik, Form } from "formik";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import "./LoginStyle.scss";
import { Link } from "react-router-dom";
import { context } from "../../../../Context/MainContext";
import { userApiCallPost,userApiCallPostWithoutHeader } from "../../../../Axios/UserAuth";
import { useNavigate } from "react-router-dom";
import OtpLayout from "../../../common/OtpLayout/OtpLayout";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { toasts } from "../../../common/Toast/Toast";
import lock from "../../../../assets/images/lock-solid.svg";
import lockopen from "../../../../assets/images/lock-open-solid.svg";

const SetupPassword = (props) => {
  const [visibility, setVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [newVisibility, setNewVisibility] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [pass, setPass] = useState("");
  const [resendVerification, setResendVerification] = useState(false);
  const [otpLayerVisibility, setOtpLayerVisibility] = useState(false);

  const eye = (
    <img src={visibility ? lockopen : lock} alt="icon" width="17px" />
  );
  const conEye = (
    <img src={confirmVisibility ? lockopen : lock} alt="icon" width="17px" />
  );
  const newEye = (
    <img src={newVisibility ? lockopen : lock} alt="icon" width="17px" />
  );

  const initialValues = {
    oldPassword: "",
    password: "",
  };
  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .required("Required")
      .max("20", "Max 20 characters are allowed")
      .matches(
        /^(?=.*[a-z0-9])(?=.*[!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
        "Password must be at least 8-20 characters or number, with atleast 1 special character (#,$,%,...)"
      ),
    password: Yup.string()
      .required("Required")
      .notOneOf([Yup.ref("oldPassword"), ""], "New password should be different")
      .matches(
        /^(?=.*[a-z0-9])(?=.*[!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
        "Password must be at least 8-20 characters or number, with at least 1 special character (#,$,%,...)"
        ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { loginState, loginDispatch, bannerData, dispatchBannerData } =
    useContext(context);

  function onSubmit(value) {
    const newData = {
      email: email,
      password: pass,
      oldPassword: oldPass,
    };
    setLoading(true);
    let encoded = base64_encode(
      `email----change_password----${email}----${value}`
    );
    console.log("data ", base64_decode(encoded));

    userApiCallPost("/update-user-credentials", newData, encoded, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        console.log("Password update", data);
        setLoading(false);
        if (!res.error) {
          localStorage.clear();
          loginDispatch({
            type: "reset",
            payload: {},
          });
          toasts.success("Password changed succesfully, Login again.");
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }
  function resendOtp() {
    generateOtp(email);
  }
  function getOtp(value) {
    console.log("values", value);
    generateOtp(email);
    setOldPass(value.oldPassword);
    setPass(value.password);
  }
  console.log("old pass", oldPass);
  console.log("new pass", pass);
 
  function generateOtp(mail) {
    const newData = {
      type: "email",
      action: "change_password",
      value: mail,
    };
    setLoading(true);
    userApiCallPostWithoutHeader("/otp/generate", newData, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        setLoading(false);
        setOtpLayerVisibility(true);
        if (data) {
        }
      })
      .catch((err) => {
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

  return (
    <>
      <>
          <LoaderAnimated isLoading={loading} />
          {!otpLayerVisibility ? (
            <div className="inner_pages_flow">
              <Row>
                <Col lg={12}>
                  <div className="rg_title">
                    <h2>Setup Password</h2>
                    <p>
                      Your new password must be different from previous used
                      passwords.
                    </p>
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
                            <div className="password-input-style mb-4">
                              <FormikControl
                                className="east_form_input hasIcon mb-2"
                                control="input"
                                type={visibility ? "text" : "password"}
                                name="oldPassword"
                                label="Old Password*"
                                placeholder="Enter old password"
                                onKeyDown={(e) => handleKeyDown(e, 19)}
                              />
                              <span
                                className="show-pw"
                                onClick={() => setVisibility(!visibility)}
                              >
                                {eye}
                              </span>
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="password-input-style mb-4">
                              <FormikControl
                                className="east_form_input hasIcon mb-2"
                                control="input"
                                type={newVisibility ? "text" : "password"}
                                name="password"
                                label="New Password*"
                                placeholder="Enter new password"
                                onKeyDown={(e) => handleKeyDown(e, 19)}
                              />
                              <span
                                className="show-pw"
                                onClick={() => setNewVisibility(!newVisibility)}
                              >
                                {newEye}
                              </span>
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="password-input-style">
                              <FormikControl
                                className="east_form_input hasIcon mb-2"
                                control="input"
                                type={confirmVisibility ? "text" : "password"}
                                name="confirmPassword"
                                label="Confirm Password*"
                                placeholder="Enter new password"
                                onKeyDown={(e) => handleKeyDown(e, 19)}
                              />
                              <span
                                className="show-pw"
                                onClick={() =>
                                  setConfirmVisibility(!confirmVisibility)
                                }
                              >
                                {conEye}
                              </span>
                            </div>

                            <div className="register_btn">
                              <Button type="submit">Confirm</Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    );
                  }}
                </Formik>
              </Row>
            </div>
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
       </>
    </>
  );
};

export { SetupPassword};
