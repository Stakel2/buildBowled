import React, { useState, useEffect } from "react";
import "./RafflesStyle.scss";
import { EventsBlock, Layout, LoaderAnimated, RafflesCard, SliderRaffles } from "../../../common";
import { Container, Row, Tabs, Tab, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { useTimer } from "react-timer-hook";
import ShowcasePagintion from "../showcase/ShowcasePagintion";
import banner from "../../../../assets/images/home/home_banner.jpg";
import LogoBanner from "../../../common/logoBanner/LogoBanner";

const Raffles = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const [rafflesData, setRafflesData] = useState();
  const [key, setKey] = useState("ActiveRaffles");
  const navigate = useNavigate();

  const raffleDetailHandler = (id) => {
    navigate(`/all-raffels/${id}`);
  };

  useEffect(() => {
    console.log("useEffectpage", page);
    console.log("useEffectkey", key);
    key == "ActiveRaffles" ? getRafflesList() : getRafflesListExpired();
  }, [page, key]);

  console.log("rafflesData", rafflesData);
  function getRafflesListExpired() {
    setLoading(true);
    brandsApiCallGet(`users/raffles/api/v1/expire_raffle_list/${limit}/${page}`)
      .then((res) => {
        if (res) {
          setRafflesData(res);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("RES--->", error);
        setLoading(false);
      });
  }

  function getRafflesList() {
    setLoading(true);
    brandsApiCallGet(`users/raffles/api/v1/list/${limit}/${page}`)
      .then((res) => {
        if (res) {
          setRafflesData(res);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("RES--->", error);
        setLoading(false);
      });
  }
  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  const getList = (txt) => {
    setKey(txt);
    setPage(1);
  };
  return (
    <Layout innerClass="raffle_layout">
      <LoaderAnimated isLoading={loading} />
      <Container fluid className="mainBannerStyle">
      <LogoBanner/>
      </Container>
      <Container className="product_wrap_style">
        <Row>
          <Col lg={12} className="edit_page_headingStyle raffles_container">
            <h1>Raffles</h1>
          </Col>
          <Col lg={12} className="raffles_wrapper">
            <Tabs
              defaultActiveKey={key}
              onSelect={(k) => getList(k)}
              className="mb-3 profileTabStyle for_raffles"
            >
              <Tab eventKey="ActiveRaffles" title="Active Raffles">
                <Row className="raffles_list">
                  {rafflesData && rafflesData.data.length > 0 ? (
                    rafflesData.data.map((item, index) => (
                      <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <RafflesCard
                          title={"Time Remaining to Participate"}
                          expiryDate={item.expiryDate}
                          raffletitle={item.name}
                          totalTickets={item.tickets}
                          claimerNFT={item.winnerCount}
                          onClick={() => raffleDetailHandler(item.raffleId)}
                        />
                      </Col>
                    ))
                  ) : (
                    <p className="text-center"> No Active Raffles Found.</p>
                  )}
                </Row>
              </Tab>
              <Tab eventKey="Expired Raffles" title="Expired Raffles">
                <Row className="raffles_list">
                  {rafflesData && rafflesData.data.length > 0 ? (
                    rafflesData.data.map((item, index) => (
                      <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <RafflesCard
                          hasExpired
                          resulout
                          title={"Time Remaining to Participate"}
                          expiryDate={item.expiryDate}
                          raffletitle={item.name}
                          totalTickets={item.tickets}
                          claimerNFT={item.winnerCount}
                          onClick={() => raffleDetailHandler(item.raffleId)}
                        />
                      </Col>
                    ))
                  ) : (
                    <p className="text-center">No Expired Raffles Found.</p>
                  )}
                </Row>
              </Tab>
            </Tabs>
            {rafflesData && rafflesData.count > 12 && (
              <ShowcasePagintion
                activePage={page}
                total={rafflesData.count}
                nextPage={nextPage}
                limit={12}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <SliderRaffles />
        <EventsBlock />
      </Container>
    </Layout>
  );
};

export default Raffles;
