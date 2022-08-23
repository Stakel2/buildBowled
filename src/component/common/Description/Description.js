import React from "react";
import { Col, Row, Accordion } from "react-bootstrap";
import "./Description.scss";
import proper from "../../../assets/images/proper.svg";
import Stats from "../../../assets/images/Stats.svg";
import Levels from "../../../assets/images/Levels.svg";
import Dates from "../../../assets/images/Dates.svg";
import About from "../../../assets/images/About.svg";
import Details from "../../../assets/images/Details.svg";
// import ProductDetail from '../../pages/public/product/detail/ProductDetail';

const Description = (props) => {
  const { productDetail } = props;
  console.log("DATA", props);
  return (
    <>
      <Col xl={4} lg={4}>
        <div className="Description">
          <h5>Description</h5>
          <div className="Createdby">
            <h6>
              Created by <span>{productDetail.creator}</span>
            </h6>
            <p>{productDetail.description}</p>
          </div>
          <div className="accord">
            <Accordion defaultActiveKey="#">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img src={proper} alt="proper" /> &nbsp;Properties
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img src={Stats} alt="Stats" /> &nbsp;Stats
                </Accordion.Header>
                <Accordion.Body>{productDetail.status}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <img src={Levels} alt="Levels" /> &nbsp;Levels
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <img src={Dates} alt="Dates" /> &nbsp;Dates
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <img src={About} alt="About" /> &nbsp;About Bowled.io
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header className="editborder">
                  <img src={Details} alt="Details" /> &nbsp;Details
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Col>
 
      <Col xl={8} lg={8}>
        <div className="Offiers">
          <Accordion defaultActiveKey="0">
            {/* <Accordion.Item eventKey="0">
              <Accordion.Header className="ShowOffier">
                Offers
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nost
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
        </div>
      </Col>
    </>
  );
};

export default Description;
