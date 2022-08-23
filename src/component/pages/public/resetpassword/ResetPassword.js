import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {  LoaderAnimated, } from "../../../common";
import FormikControl from "../../../common/FormikControl";
import Loader from "../../../common/Loader/index";
import * as Yup from "yup";
import { userApiCallGet, userApiCallPost } from "../../../../Axios/User";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toasts } from "../../../common/Toast/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import "../login/LoginStyle.scss";

const ResetPassword = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [loading, setLoading] = useState(false);
  const [showPage, setShowPage] = useState(false);

  const [passVisible, setPassVisible] = useState(false);
  const [conPassVisible, setConPassVisible] = useState(false);

  const eye = <FontAwesomeIcon icon={passVisible ? faEye : faEyeSlash} />;
  const eyeCon = <FontAwesomeIcon icon={conPassVisible ? faEye : faEyeSlash} />;

  useEffect(() => {
    verifyToken();
  }, [location]);

  const verifyToken = () => {
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

    localStorage.setItem("token", queryParams.token);

    userApiCallGet("/verifyToken", {}, "toastoff")
      .then(async (res) => {
        setLoading(false);

        // console.log(res);
        if (res.error === false) {
          setShowPage(true);
        }
        if (res.error === true) {
          setShowPage(false);

          toasts.warn("The link you followed has expired.");
          navigate("/login");
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const initialValues = {
    passWord: "",
    confirmpassWord: "",
  };
  const validationSchema = Yup.object({
    passWord: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[a-z0-9])(?=.*[!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
        "Password must be at least 8-20 characters or number, with at least 1 special character (#,$,%,...)"
      ),
    confirmpassWord: Yup.string()
      .oneOf([Yup.ref("passWord"), ""], "Password must match")
      .required("Required"),
  });

  function onSubmit(value) {
    const newData = {
      password: value.passWord,
      confirmPassword: value.confirmpassWord,
    };
    setLoading(true);
    userApiCallPost("/update-password", newData, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        localStorage.clear();

        navigate("/login");
        setLoading(false);
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
      {showPage && (
        <>
            <LoaderAnimated isLoading={loading} />
            <div className="inner_pages_flow">
              <Row>
                <Col lg={12}>
                  <div className="rg_title">
                    <h2>Reset your password</h2>
                  </div>
                </Col>
              </Row>
              <Row>
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
                            <div className="password-input-style">
                              <FormikControl
                                control="input"
                                type={passVisible ? "text" : "password"}
                                className="fa fa-eye east_form_input"
                                label="New Password*"
                                name="passWord"
                                onKeyDown={(e) => handleKeyDown(e, 19)}
                              />
                              <span
                                className="show-pw"
                                onClick={() => setPassVisible(!passVisible)}
                              >
                                {eye}
                              </span>
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="password-input-style">
                              <FormikControl
                                control="input"
                                type={conPassVisible ? "text" : "password"}
                                label="Confirm Password*"
                                className="fa fa-eye east_form_input mb-0"
                                name="confirmpassWord"
                                onKeyDown={(e) => handleKeyDown(e, 19)}
                              />
                              <span
                                className="show-pw"
                                onClick={() =>
                                  setConPassVisible(!conPassVisible)
                                }
                              >
                                {eyeCon}
                              </span>
                            </div>
                          </Col>
                          <div className="register_btn">
                            <Button
                              disabled={!(formik.isValid && formik.dirty)}
                              type="submit"
                            >
                              Update
                            </Button>
                          </div>
                        </Row>
                      </Form>
                    );
                  }}
                </Formik>
              </Row>
            </div>
        </>
      )}
    </>
  );
};

export default ResetPassword;
