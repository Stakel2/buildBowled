import React, { useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ModalCustom } from "..";
import { limitCharacters } from "../../../utils/utils";
import ShowcasePagintion from "../../pages/public/showcase/ShowcasePagintion";

const MyMysteryBox = (props) => {
  const { data, onClick, mbPage, nextMbPage, count, mbViewHandler } = props;
  const [showMbModal, setShowMbModal] = useState(false);
  const [pos, setPos] = useState(0);
  const handleMbClose = () => {
    setShowMbModal(false);
    mbViewHandler();
  };
  const navigate = useNavigate();
  const openHandler = (pos) => {
    navigate({
      pathname: "/user/my-mystery-box-nft",
      state: { nft: data[pos] },
    })
  };
  return (
    <>
      {data?.length > 0 ? (
        <Row xs={1} md={2} lg={3} xl={4} className="g-3 cardRefferalsWrap">
          {data?.map((item, idx) => (
            <>
              <Card className="cardDrop_style">
                <Card.Header>
                  <img src={`${item.closed_box_image}?tr=h-180,w-180`} alt="" />
                </Card.Header>
                <Card.Body>
                  <Card.Title title={props.titletag}>{item.title}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => openHandler(idx)}
                  >
                    Open
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
            </>
          ))}
          {/* <ModalCustom
            show={showMbModal}
            size="modal-sm"
            customClass="buyToken_modalStyle"
            title={data[pos].title}
            onHide={handleMbClose}
          >
            <Row>
              <Col>
                <h3 className="text-light">Nft's you got are:</h3>
                <Row className="text-center my-3">
                  {data[pos].nft.map((nft) => {
                    return nft.fileType === "Video" ? (
                      <Col xs={6}>
                        <video
                          controls
                          width="100%"
                          controlsList="nodownload"
                          autoPlay={false}
                        >
                          <source
                            src={`${nft.logo}?tr=h-150,w-150`}
                            type="video/mp4"
                          />
                        </video>
                      </Col>
                    ) : (
                      <Col xs={6}>
                        <img src={`${nft.logo}?tr=h-150,w-150`}></img>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            <Row className="my-4 text-center">
              <Col>
                <Button variant="primary" onClick={handleMbClose}>
                  Close
                </Button>
              </Col>
            </Row>
          </ModalCustom> */}
        </Row>
      ) : (
        <Row className="cardRefferalsWrap">
          <Col>
            <p className="text-center f-20">No Record found</p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MyMysteryBox;
