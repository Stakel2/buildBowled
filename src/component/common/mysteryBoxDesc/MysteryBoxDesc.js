import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";

const MysteryBoxDesc = (props) => {
  const {
    title,
    open_box_image,
    closed_box_image,
    legendary,
    common,
    premium,
    rare,
    close,
    buy,
    super_rare,
    pricing,
    description,
    getAllMysteryBoxesCount,
    getSoldMysteryBoxes,
  } = props;
  return (
    <>
      <Row className="mystry_box_rowB">
        <Col lg={4} className="mystry_box_rowB--left m-auto">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">{title}</Card.Title>

              <Card.Body className="text-center">
                <Col className="mystry_box_rowB--left_img">
                  <Card.Img
                    variant="top"
                    src={`${closed_box_image}?tr=h-180,w-180`}
                  />
                  <h4 className="my-2">
                    Price: {pricing} USD (
                    {`${getAllMysteryBoxesCount - getSoldMysteryBoxes}/${getAllMysteryBoxesCount}`})
                  </h4>
                </Col>
                <Col className="mystry_box_rowB--left_btns mt-3 justify-content-center">
                  <Button
                    variant="primary"
                    className="mx-2"
                    onClick={buy}
                    disabled={
                      getAllMysteryBoxesCount - getSoldMysteryBoxes == 0
                        ? true
                        : false
                    }
                  >
                    {getAllMysteryBoxesCount - getSoldMysteryBoxes == 0
                      ? "Sold Out"
                      : "Buy"}
                  </Button>
                  {/* <Button variant="primary" className="mx-2" onClick={close}>
                  Close
                </Button> */}
                </Col>
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8} className="mystry_box_rowB--right align-self-center">
          <Row>
            <h2 className="s-title">Components of Pack</h2>
          </Row>
          <Row>
            {legendary > 0 && (
              <Col sm={12} lg={4} className="cPacks_style">
                <Card>
                  <Card.Body>
                    <Card.Title>Legendary - {legendary}%</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {common > 0 && (
              <Col sm={12} lg={4} className="cPacks_style">
                <Card>
                  <Card.Body>
                    <Card.Title>Common - {common}%</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {rare > 0 && (
              <Col sm={12} lg={4} className="cPacks_style">
                <Card>
                  <Card.Body>
                    <Card.Title>Rare - {rare}%</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {premium > 0 && (
              <Col sm={12} lg={4} className="cPacks_style">
                <Card>
                  <Card.Body>
                    <Card.Title>Premium - {premium}%</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {super_rare > 0 && (
              <Col sm={12} lg={4} className="cPacks_style">
                <Card>
                  <Card.Body>
                    <Card.Title>Super Rare - {super_rare}%</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="aboutEast_section">
          <h2 className="sub-title text-center">Description</h2>
          <p className="text-center aboutEastTextStyle">{description}</p>
        </Col>
      </Row>
    </>
  );
};

export default MysteryBoxDesc;
