import React, { useEffect } from "react";
import Wankhede_Stadium from "../../../../assets/images/bowled-images/Wankhede_Stadium.png";
import count_1 from "../../../../assets/images/bowled-images/count_1.png";
import count_2 from "../../../../assets/images/bowled-images/count_2.png";
import count_3 from "../../../../assets/images/bowled-images/count_3.png";
import count_4 from "../../../../assets/images/bowled-images/count_4.png";
import count_5 from "../../../../assets/images/bowled-images/count_5.png";
import earn_coin from "../../../../assets/images/bowled-images/earn_coin.png";
import { Container, Row, Col } from "react-bootstrap";

const EarningWith = (props) => {
  return (
    <section className="earn_sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="titleDiv">
              <h2 className="title_head small_hd text-center">
                EARNING WITH <span>BOWLED.IO</span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="erndetail_area">
          <Col lg={12} className="arrangment_top">
            <div className="wrap_earn center_in text-center">
              <p>
                Selling player or <br />
                stadium cards
              </p>
              <img src={count_3} alt="icon" />
            </div>
          </Col>
          <Col lg={4} md={12} className="arrangment">
            <div className="wrap_earn left_in scnd_box">
              <p>
                Finishing tournaments <br />
                in top positions
              </p>
              <img src={count_2} alt="icon" />
            </div>
            <div className="wrap_earn left_in">
              <p>
                Winning matches <br />
                against other fans
              </p>
              <img src={count_1} alt="icon" />
            </div>
          </Col>
          <Col lg={4} md={12} className="object_cnter">
            <img src={earn_coin} alt="icon" className="earn_coin" />
          </Col>
          <Col lg={4} md={12} className="arrangment_btm">
            <div className="wrap_earn right_in forth_box">
              <p>
                Generating sponsorship & <br />
                ticketing income
              </p>
              <img src={count_4} alt="icon" />
            </div>
            <div className="wrap_earn right_in">
              <p>Renting your assets</p>
              <img src={count_5} alt="icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EarningWith;
