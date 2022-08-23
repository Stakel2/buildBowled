import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/images/bowled-images/Bowled-Logo.svg";
import "./LayoutSignUpStyle.scss";
import { Link } from "react-router-dom";

const LayoutSignUp =  ({ Component, ...props }) => {
  document.body.className = "register_pages";

  return (
    <Container fluid className="signup_section no_padd">
      <Row className="gx-0 align-items-start">
        <Col xl={4} lg={12} md={12} className="register_bg bg_image">
          <div className="signup_title">
            <Link className="bowled_logo" to="/">
              <img src={logo} alt="bowled-logo" />
            </Link>
            {/* <img src={SignupBG} alt="" className="img-fluid" /> */}
          </div>
        </Col>
        <Col xl={8} lg={12} md={12} className="manage_layout">
          <div className="heading"></div>
            <Component {...props} /> 
          <div className="layout_footer">
            <p>Bowled © 2022 All rights reserved</p>
            <span className="pipeline d-none d-md-block">|</span>
            <div className="footer_links">
              <Link to="/privacy-policy">
                Privacy
              </Link>
              <span className="pipeline">|</span>
              <Link to="/terms-of-service" >
                Terms of service
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default  LayoutSignUp

