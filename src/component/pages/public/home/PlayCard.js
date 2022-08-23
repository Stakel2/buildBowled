import React, { useEffect } from "react";
import Wankhede_Stadium from "../../../../assets/images/bowled-images/Wankhede_Stadium.png";
import Pbat from "../../../../assets/images/bowled-images/play_bat.png";
import Gtoken from "../../../../assets/images/bowled-images/golden-token.png";
import { BowledCard } from "../../../common/BowledCard/BowledCard";
import { Container, Row, Col } from "react-bootstrap";

const PlayCard = (props) => {
  return (
    <section className="ope_sec fix_bg padd_row">
      <Container>
        <div className="opeCard_wrap">
          <Row>
            <Col lg={4} md={12} className="mng">
              <BowledCard
                className="same_crd"
                title="OWN"
                subTitle="OWN"
                icon={Wankhede_Stadium}
                text="Buy cards of your favourite assets such as Cricket players and iconic stadiums."
              />
              <span className="verticl_line"></span>
            </Col>
            <Col lg={4} md={12} className="mng">
              <BowledCard
                className="ply_bat"
                title="PLAY"
                subTitle="PLAY"
                icon={Pbat}
                text="Compete with other fans and climb up the leaderboard."
              />
              <span className="verticl_line"></span>
            </Col>
            <Col lg={4} md={12} className="mng mb-0">
              <BowledCard
                className="earnCard"
                title="Earn"
                subTitle="Earn"
                icon={Gtoken}
                text="Generate income by winning matches, owning and trading assets."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PlayCard;
