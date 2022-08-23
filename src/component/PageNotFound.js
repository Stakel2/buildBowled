import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderSign, Layout } from "./common";

function PageNotFound() {
  return (
    <Layout>
      <HeaderSign
      // avatar={SignUpImg}
      // title={"Login for Bowled NFT"}
      />
      <Container className="homeBorder_style">
        <Row className="mt-5 align-items-center">
          <Col className="m-auto text-center mt-5">
            <h2 className="title_head">
              404 <br />
              Oops, Page Not Found
            </h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default PageNotFound;
