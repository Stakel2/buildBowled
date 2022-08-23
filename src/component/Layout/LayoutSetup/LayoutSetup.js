import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/images/bowled-images/Bowled-Logo.svg";
import "../layoutSignUp/LayoutSignUpStyle.scss";
import { Link } from "react-router-dom";
import { TopNavbar } from "../../common/topNavbar/TopNavbar";
import { Footer } from "../../common/Footer/Footer";

const LayoutSetup = ({ Component, ...props }) => {

  return (
    <Container fluid className={`layoutStyle ${props.className}`}>
      <TopNavbar />
      <Container fluid className="signup_section no_padd">
        <Row className="gx-0 align-items-start">
          <Col xl={4} lg={12} md={12} className="register_bg bg_image ">
          </Col>
          <Col xl={8} lg={12} md={12} className="manage_layout manage_layout_setup">
            <div className="heading"></div>
            <Component {...props} /> 
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default LayoutSetup;
