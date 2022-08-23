import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import './CardDropsStyle.scss'

const CardDrops = (props) => {
  return (
    <Card onClick={props.onClick} className={`cardDrop_style ${props.cardDrop_style}`}>
      <Card.Header>
          <img src={props.dropImg} alt="" />
      </Card.Header>
      <Card.Body>
        <Card.Title title={props.titletag}>{props.title}</Card.Title>
        <Card.Text className="t-small">{props.subTitle} </Card.Text>
        <Card.Text>
            {props.desc}
        </Card.Text>        
      </Card.Body>
      <Card.Footer className="text-muted">
          {/* <Row>
              <Col>
                <p>{props.status}</p>
              </Col>
              <Col>
                <p>{props.timeTitle}</p>
                <ul className="timeDetails">
                    <li>
                        <strong>{props.date}</strong>
                        <span>DD</span>
                    </li>
                    <li>
                        <strong>{props.hour}</strong>
                        <span>HH</span>
                    </li>
                    <li>
                        <strong>{props.month}</strong>
                        <span>MM</span>
                    </li>
                </ul>
              </Col>
          </Row> */}
      </Card.Footer>
    </Card>
  );
};

export {CardDrops};
