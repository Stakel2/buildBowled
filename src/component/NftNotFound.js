import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderSign, Layout } from "./common";

function NftNotFound() {
  return (
    <Layout>
      <HeaderSign
      // avatar={SignUpImg}
      // title={"Login for Bowled NFT"}
      />
      <Container className="homeBorder_style">
        <Row className="mb-5">
          <Col className="m-auto text-center mb-5">
            <h1 className="text-light">NFT not available in your country</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NftNotFound;
