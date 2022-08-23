import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HeaderSign.scss";

const HeaderSign = (props) => {
  return (
    <Container className="headerSignStyle">
      <Row>
        <Col className="avatar_img_style">
          <img src={props.avatar} />
        </Col>
        <h2 className="titleStyle">{props.title}</h2>
      </Row>
    </Container>
  );
};

export { HeaderSign };
