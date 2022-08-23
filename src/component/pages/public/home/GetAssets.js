import React, { useEffect } from "react";
import Wankhede_Stadium from "../../../../assets/images/bowled-images/Wankhede_Stadium.png";
import Tilt from "react-parallax-tilt";
import { StylishButton } from "../../../common/stylishButton/StylishButton";
import NftCard from "../../../common/BowledCard/NftCard";
import stadium1 from "../../../../assets/images/bowled-images/small-stadium.png";
import articts from "../../../../assets/images/bowled-images/fireball.png";
import virat from "../../../../assets/images/bowled-images/Virat-pixell.png";
import { Container, Row, Col } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Home.scss";

const GetAssets = (props) => {
  const Market = () => (
    <a href="https://opensea.io/collection/bowled-genesis-players" target="_blank">
      <StylishButton className="link_btn" title="Opensea Marketplace" />
    </a>
  );

  return (
    <section className="getAsset_sec fix_bg">
      <Container>
        <Row>
          <Col lg={7} md={7} sm={12}>
            <div className="getAssetLeft_Sec">
              <div className="titleDiv">
                <h2 className="title_head">
                  <span>Get Your</span>
                  <br />
                  ASSETS
                </h2>
                <p>
                Get your favourite assets like Players and Stadiums, challenge others and win real money..!!
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5} md={5} sm={12} className="right_view">
            <div className="align_stylebtn">
              <Market />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="getNft_Sec">
              <Row>
                <Col lg={4} md={12} className="mng">
                  <Tilt>
                    <NftCard
                      title="stadium"
                      icon={stadium1}
                      name="Wankhade - Mumbai"
                      link="marketplace/"
                    />
                  </Tilt>
                </Col>
                <Col lg={4} md={12} className="mng">
                  <Tilt>
                    <NftCard title="player" icon={virat} name="VIRAT KOHLI"  link="marketplace/" />
                  </Tilt>
                </Col>
                <Col lg={4} md={12} className="mng">
                  <Tilt>
                    <NftCard title="Artefact" icon={articts} name="Fire"  link="marketplace/" />
                  </Tilt>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetAssets;
