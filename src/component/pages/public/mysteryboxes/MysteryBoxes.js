import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  EventsBlock,
  Layout,
  LoaderAnimated,
  ModalCustom,
  SliderRaffles,
} from "../../../common";
import Slider from "react-slick";
import MysteryBoxCard from "../../../common/mysteryBoxCard/MysteryBoxCard";
import "./MysteryBoxes.scss";
import { brandsApiCallGet, brandsApiCallPost } from "../../../../Axios/Brands";
import MysteryBoxDesc from "../../../common/mysteryBoxDesc/MysteryBoxDesc";
import banner from "../../../../assets/images/home/home_banner.jpg";
import { toasts } from "../../../common/Toast/Toast";
import { context } from "../../../../Context/MainContext";
import { useNavigate } from "react-router-dom";
import PaypalButton from "../../../common/paypal/paypal";
import ShowcasePagintion from "../showcase/ShowcasePagintion";
import BreadcrumbCustom from "../../../common/breadcrumb/BreadcrumbCustom";
import LogoBanner from "../../../common/logoBanner/LogoBanner";

const MysteryBoxes = () => {
  const navigate = useNavigate();
  const [mysteryBoxes, setMysteryBoxes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(0);


  const getMysteryBoxes = () => {
    setLoading(true);
    brandsApiCallGet(`mysterybox/api/v1/mysteryboxes/${limit}/${page}`)
      .then((res) => {
        setLoading(false);
        setMysteryBoxes(res?.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const mysteryBoxClickHandler = (item) => {
    navigate({
      pathname: `/mystery-box/${item.id}`,
      state: { mysteryBox: item },
    })
  };

  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  useEffect(() => {
    getMysteryBoxes();
  }, [page]);

  return (
    <Layout style={{ paddingLeft: "0px", paddingRight: "0px" }}>
      <LoaderAnimated isLoading={loading} />
      <Container fluid className="mainBannerStyle">
      <LogoBanner />
      </Container>
      <Container>
        <Row>
          <Col lg={12} className="edit_page_headingStyle raffles_container">
            <h1>Mystery Boxes</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          {mysteryBoxes?.rows?.length > 0 ? (
            mysteryBoxes?.rows?.map((item, index) => {
              return (
                <Col md={3} onClick={() => mysteryBoxClickHandler(item)}>
                  <MysteryBoxCard key={index} {...item} />
                </Col>
              );
            })
          ) : (
            <p className="text-center noMystry_box">
              No MysteryBox available for now.
            </p>
          )}
        </Row>
        {mysteryBoxes?.count > limit && (
          <ShowcasePagintion
            activePage={page}
            total={mysteryBoxes?.count}
            nextPage={nextPage}
            limit={limit}
          />
        )}
      </Container>
      <Container>
        {/* <SliderRaffles /> */}
        <EventsBlock />
      </Container>
    </Layout>
  );
};

export default MysteryBoxes;
