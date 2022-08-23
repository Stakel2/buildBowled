import React from "react";
import { Container } from "react-bootstrap/esm";
import { IMGBANNER } from "../../../constant";

const LogoBanner = () => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <img src={IMGBANNER} className="img-fluid w-100" />
    </Container>
  );
};

export default LogoBanner;
