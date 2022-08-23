import React, { useState } from "react";
import { Layout, AddSocialLinks, HeadingEditPage } from "../../../common";
import "./AboutUsStyle.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const Aboutus = () => {
  return (
    <Layout innerClass="editProfile_layout">
      <HeadingEditPage title={""} />
      <Container className="editContainerStyle">
        {/* <h2>Coming Soon!</h2> */}
        <Col className="aboutEast_section">
          <h2 className="sub-title text-center">Who We are</h2>
          <p className="text-center aboutEastTextStyle">
            EAST NFT is a premium licensed digital collectible trading platform.
            Owing to the tagline ‘love it, own it’, EAST NFT curates special
            NFTs from premier partnering brands and creators to bring out the
            tokens that art connoisseurs will love and want to own.
          </p>
        </Col>
      </Container>
    </Layout>
  );
};

export default Aboutus;
