import React, { useState, useEffect, useContext } from "react";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { brandsApiCallGet, brandsApiCallPost } from "../../../../Axios/Brands";
import { context } from "../../../../Context/MainContext";
import {
  EventsBlock,
  Layout,
  LoaderAnimated,
  ModalCustom,
  SliderRaffles,
} from "../../../common";
import MysteryBoxDesc from "../../../common/mysteryBoxDesc/MysteryBoxDesc";
import PaypalButton from "../../../common/paypal/paypal";
import { toasts } from "../../../common/Toast/Toast";
import banner from "../../../../assets/images/home/home_banner.jpg";
import BreadcrumbCustom from "../../../common/breadcrumb/BreadcrumbCustom";
import MysteryBoxCard from "../../../common/mysteryBoxCard/MysteryBoxCard";
import './MyMysteryBoxNft.scss';
import LogoBanner from "../../../common/logoBanner/LogoBanner";

const MyMysteryBoxNft = (props) => {
  const [loading, setLoading] = useState(false);
  const [mysteryBox, setMysteryBox] = useState({});
  const params = useParams();
  const data = props.location.state.nft;
  console.log(data);
  return (
    <Layout style={{ paddingLeft: "0px", paddingRight: "0px" }}>
      <Container fluid className="mainBannerStyle">
      <LogoBanner />
      </Container>
      <Container>
        <Row>
          <Col lg={12} className="edit_page_headingStyle raffles_container">
            <h1>Nft's of the {data.title}</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          {data?.nft.length > 0 ? (
            data?.nft?.map((nft, index) => {
              return (
                <Col md={3}>
                  <Card className={`cardDrop_style mystryBox_card myMysteryBox_nft`}>
                    <Card.Header>
                      {nft.fileType === "Video" ? (
                        <Col>
                          <video
                            controls
                            width="100%"
                            controlsList="nodownload"
                            autoPlay={false}
                          >
                            <source
                              src={nft.logo}
                              type="video/mp4"
                            />
                          </video>
                        </Col>
                      ) : (
                        <Col>
                          <img src={`${nft.logo}?tr=h-250,w-250`}></img>
                        </Col>
                      )}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title title={nft.name}>{nft.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <p className="text-center noMystry_box">
              No MysteryBox available for now.
            </p>
          )}
        </Row>
      </Container>
    </Layout>
  );
};

export default MyMysteryBoxNft;
