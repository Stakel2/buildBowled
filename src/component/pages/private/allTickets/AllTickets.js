import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container, Breadcrumb } from "react-bootstrap";
import { Layout, LoaderAnimated } from "../../../common";
import "./AllTickets.scss";
import banner from "../../../../assets/images/home/home_banner.jpg";
import card_gradient from "../../../../assets/images/card_gradient.svg";
import iconStar from "../../../../assets/images/icon_star.svg";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { useParams } from "react-router-dom";
import BreadcrumbCustom from "../../../common/breadcrumb/BreadcrumbCustom";
import ShowcasePagintion from "../../public/showcase/ShowcasePagintion";
import LogoBanner from "../../../common/logoBanner/LogoBanner";

function AllTickets() {
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const [userRaffleTickets, setUserRaffleTickets] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  useEffect(() => {
    getUserRaffleTickets(param.raffleId);
  }, [page]);

  const getUserRaffleTickets = (id) => {
    setLoading(true);
    brandsApiCallGet(
      `/users/raffles/api/v1/tickets/${id}?limit=${limit}&offset=${page}`
    )
      .then(async (res) => {
        let data = await res?.data;
        setUserRaffleTickets(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <Layout>
      <LoaderAnimated isLoading={loading} />
      <Container fluid className="mainBannerStyle">
      <LogoBanner />
      </Container>
      <Container className="allTickets">
        <Breadcrumb className="brdcum_Style">
          <Breadcrumb.Item>All Tickets</Breadcrumb.Item>
          <Breadcrumb.Item active>{userRaffleTickets?.rows[0].raffleTitle}</Breadcrumb.Item>
        </Breadcrumb>
        {/* <h3 className="heading">{userRaffleTickets?.rows[0].raffleTitle}</h3> */}
        {/* <h4 className="heading">All Tickets</h4> */}
        <Row xs={1} md={2} lg={3} xl={4} className="TicketRow gx-5 gy-4">
          {userRaffleTickets?.rows.map((item, idx) => (
            <Col>
              <div className="Tickets">
                <img src={card_gradient} />
                <div className="tickedInfo">
                  <ul className="d-flex starts">
                    {Array.from({ length: 11 }).map((_, idx) => (
                      <li>
                        <Image src={iconStar} />
                      </li>
                    ))}
                  </ul>
                  <h4 className="text-center">Ticket No. </h4>
                  <span>{item.raffleTicketId}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {userRaffleTickets?.count > 12 && (
          <div>
            <ShowcasePagintion
              activePage={page}
              total={userRaffleTickets.count}
              nextPage={nextPage}
              limit={12}
            />
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default AllTickets;
