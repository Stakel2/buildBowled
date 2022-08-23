import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./RoadMap.scss";

const RoadMap = () => {
  return (
    <>
      <section className="timeline" id="roadmap">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="titleDiv">
                <h2 className="title_head">
                  ROAD<span>Map</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="timeline_area">
            <Col lg="5">
              <div className="raod_view">
                <div className="right">
                  <div className="content achived">
                    <h4>Q1</h4>
                    <h2>2022</h2>
                    <p>
                      <span></span>Launch Assets Sale On Opensea
                    </p>
                    <p>
                      <span></span>Community Building
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <h4>Q2</h4>
                    <h2>2022</h2>
                    <p>
                      <span></span>Launch Native Marketplace
                    </p>
                    <p>
                      <span></span>Release Game Arena (Freemium)
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <h4>Q4</h4>
                    <h2>2022</h2>
                    <p>
                      <span></span>Launch ‘$BWLD’ Tokens


                    </p>
                    <p>
                      <span></span>Launch Play-to-Earn Game Arena
                    </p>
                  </div>
                </div>
                <div className="right last_one">
                  <div className="content">
                    <h4>And then</h4>
                    <p>
                      <span></span>Various game formats
                     

                    </p>
                    <p>
                    <span></span>  Unified economy & reward system
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RoadMap;
