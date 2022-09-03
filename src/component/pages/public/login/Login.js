import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { HeaderSign, LoaderAnimated } from "../../../common";
import { Formik, Form } from "formik";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import "./LoginStyle.scss";
import { Link } from "react-router-dom";
import { context } from "../../../../Context/MainContext";
import {
  userApiCallPost,
  userApiCallPostWithoutHeader,
} from "../../../../Axios/UserAuth";
import Interceptor from "../../../../Axios/Interceptors";
import { useNavigate } from "react-router-dom";
import { GetBanner } from "../../../Api/Actions";
import OtpLayout from "../../../common/OtpLayout/OtpLayout";
import { brandsApiCallPost } from "../../../../Axios/Brands";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import SocialLogin from "../../../common/socialLogin/SocialLogin";
import lock from "../../../../assets/images/lock-solid.svg";
import lockopen from "../../../../assets/images/lock-open-solid.svg";
import { jwtEncrypt } from "../../../../utils/utils";
import Cookies from "js-cookie";

const Login = (props) => {
  const [visibility, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [resendVerification, setResendVerification] = useState(false);
  const [otpLayerVisibility, setOtpLayerVisibility] = useState(false);

  const eye = (
    <img src={visibility ? lockopen : lock} alt="icon" width="17px" />
  );
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required("Required")
      .max("60", "Max 60 characters are allowed"),
    password: Yup.string()
      .required("Required")
      .max("20", "Max 20 characters are allowed")
      .matches(
        /^(?=.*[a-z0-9])(?=.*[!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
        "Password must be at least 8-20 characters or number, with atleast 1 special character (#,$,%,...)"
      ),
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { loginState, loginDispatch, bannerData, dispatchBannerData } =
    useContext(context);

  function onSubmit(value) {
    const newData = {
      email: value.email,
      password: value.password,
    };
    console.log(newData,"jjjjjjjj");
    const finalData = jwtEncrypt(newData);

    setLoading(true);
    let encoded = base64_encode(`email----login----${email}----${"0000"}`);

    userApiCallPost("/login", finalData, encoded, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        setLoading(false);
        if (data) {
          await localStorage.setItem("token", data.accessToken);
          await localStorage.setItem("email", email);
          await localStorage.setItem("isFromMobile", 2);
          await localStorage.setItem("userId", data.userId);
          Cookies.set("token", data.accessToken, { path: 'http://game-stage.bowled.io' });
          Cookies.set("token", data.accessToken, { path: 'http://localhost:3000' });          //  Cookies.remove("name"); // fail!
          //  Cookies.remove("name", { path: "" }); // removed!
          await loginDispatch({
            type: "userInfo",
            payload: { ...data },
          });

          await Interceptor.axiosInterceptor(
            { user: { ...data } },
            loginDispatch,
            props?.setRedirectToLogin,
            props?.setLoading
          );

          if (localStorage.getItem("token")) {
            navigate("/");
          }
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Email must be verified") {
          setResendVerification(true);
        }
        setLoading(false);
      });
  }

  function resendOtp() {
    generateOtp(email);
  }
  function getOtp(value) {
    generateOtp(value.email);
    setEmail(value.email);
    setPass(value.password);
  }

  function generateOtp(mail) {
    const newData = {
      type: "email",
      action: "login",
      value: mail,
    };
    setLoading(true);
    brandsApiCallPost("/users/otp/api/v1/generate", newData, {}, "toastOn")
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

  // useEffect(() => {
  //   checkLoggedIn();
  //   if (!bannerData?.rows?.length) {
  //     setLoading(true);
  //     GetBanner({ setLoading, dispatchBannerData });
  //   }
  // }, []);

  const checkLoggedIn = () => {
    let isLogin = loginState?.user?.accessToken ? true : false;
    if (isLogin) {
      navigate("/");
    }
  };

  return (
    <>
      <LoaderAnimated isLoading={loading} />
      {!otpLayerVisibility ? (
        <div className="inner_pages_flow">
          <Row>
            <Col lg={12}>
              <div className="rg_title">
                <h2>Login</h2>
                <p>
                  Don't have an account?{" "}
                  {resendVerification ? (
                    <Link className="resend" to="/resend-verification">
                      Resend verification link?
                    </Link>
                  ) : (
                    <Link to="/signup">Sign up</Link>
                  )}
                </p>
              </div>
            </Col>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <Row>
                      <Col lg={12}>
                        <FormikControl
                          className="east_form_input"
                          control="input"
                          type="email"
                          label="Email*"
                          placeholder="e.g. bowled@gmail.com"
                          name="email"
                        />
                      </Col>
                      <Col lg={12}>
                        <div className="password-input-style">
                          <FormikControl
                            className="east_form_input hasIcon mb-0"
                            control="input"
                            type={visibility ? "text" : "password"}
                            name="password"
                            label="Password*"
                            placeholder="**********"
                            onKeyDown={(e) => handleKeyDown(e, 19)}
                          />
                          <span
                            className="show-pw"
                            onClick={() => setVisibility(!visibility)}
                          >
                            {eye}
                          </span>
                          <Col className="text-end mt-2">
                            <Link to="/forget-password" className="link_text">
                              Forgot password?
                            </Link>
                          </Col>
                        </div>

                        <div className="register_btn">
                          <Button
                            disabled={!(formik.isValid && formik.dirty)}
                            type="submit"
                          >
                            Login
                          </Button>
                        </div>
                        <div className="or_divder">
                          <span>or</span>
                        </div>
                        <SocialLogin />
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Row>
        </div>
      ) : (
        <OtpLayout
          back={(onClick) => {
            setOtpLayerVisibility(false);
          }}
          onclick={onSubmit}
          resend={resendOtp}
          showOtpLay={otpLayerVisibility}
        />
      )}
    </>
  );
};

export default Login;
