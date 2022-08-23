import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AddSocialLinksStyle.scss";

const AddSocialLinks = (props) => {
  return (
    <Row className="addSocialLinkWrap">
      <Col sm={12} lg={6} className="social_link_left_column">
        <h3 className="as_iconTitle">
          <span className="addSocialLink_icon">
            <img src={props.icon} alt={props.title} />
          </span>
          <span className="addSocialLink_text">{props.title}</span>
        </h3>
        {/* <span className='addSocialRight_text'>{props.rightText}</span> */}
      </Col>
      <Col sm={12} lg={6} className="socialInput_block">{props.children}</Col>
    </Row>
  );
};

export { AddSocialLinks };
