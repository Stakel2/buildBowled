import React, { useState } from "react";
import { Card, Button, Image, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { limitCharacters } from "../../../utils/utils";
import ShowcasePagintion from "../../pages/public/showcase/ShowcasePagintion";
import "./CardRefferal.scss";
function CardRefferals(props) {
  const { data, nextPage, page, count } = props;
  const navigate = useNavigate();
  const myRaffleClickHandler = (id, name) => {
    navigate(`/user/all-tickets/${id}`);
  };
  return (
    <>
      {data.length > 0 ? (
        <>
          <Row xs={1} md={2} lg={3} xl={4} className="g-3 cardRefferalsWrap">
            {data.map((item, idx) => (
              <Col>
                <Card className="cardRefferals">
                  <Card.Body>
                    <Card.Text className="d-flex align-items-end mb-4">
                      <Image
                        className="me-3"
                        src={
                          require("../../../assets/images/ticketIcon.svg")
                            .default
                        }
                      />
                      <h4 title={item.name} className="align-self-en">
                        {limitCharacters(item.name, 20)}
                        <strong>No. of tickets bought</strong>
                      </h4>
                      <h3 className="ms-auto align-self-en mb-0">
                        {item.totalTickets}
                      </h3>
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="float-end"
                      onClick={() => myRaffleClickHandler(item.raffleId, item.name)}
                    >
                      View
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {count > 8 && (
            <div>
              <ShowcasePagintion
                activePage={page}
                total={count}
                nextPage={nextPage}
                limit={8}
              />
            </div>
          )}
        </>
      ) : (
        <Row className="cardRefferalsWrap">
          <Col>
            <p className="text-center f-20">No Record found</p>
          </Col>
        </Row>
      )}
    </>
  );
}

export default CardRefferals;
