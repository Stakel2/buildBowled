import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Layout.scss";

const LayoutCard = (props) => {
  const navigate = useNavigate();
  return (
    <Row>
      {props.showcaselist.map((item) => (
        // <Col xs={16} sm={6} lg={3} className="showcase_item comingSoon">
        <Col
          xs={16}
          sm={6}
          lg={3}
          className="showcase_item"
          key={item?.brandId}
          onClick={() => navigate(`/brand-detail/${item?.brandId}`)}
        >
          <img
            className={props.borderClass}
            src={item?.showCase}
            alt={item?.brandId}
          />
        </Col>
      ))}
    </Row>
  );
};

export default LayoutCard;
