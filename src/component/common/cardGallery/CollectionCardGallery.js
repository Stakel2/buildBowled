import React, { useState } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";
import { LoaderAnimated } from "..";
import { userApiCallPost } from "../../../Axios/User";
import ShowcasePagintion from "../../pages/public/showcase/ShowcasePagintion";
import "./CardGalleryStyle.scss";

const CollectionCardGallery = (props) => {
  const {
    gallery,
    startItem,
    endItem,
    galleryTitle,
    showCollect,
    gallary,
    noRedirection,
    limit,
    totalRecords,
    nextPage,
    isProfile,
  } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const clickedInDrop = (id) => {
    if (!noRedirection) {
      navigate("/drops/" + id);
    }
  };

  const collectNft = (id, price) => {
    setLoading(true);
    let newData = {
      nftId: id,
      price: price,
      paymentResponseId: "",
      paymentStatus: "COMPLETED",
      paymentGateway: "FREE",
    };
    userApiCallPost("/collectnft", newData, {}, "toastOn")
      .then(async (res) => {
        let data = await res?.data;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Container className="gallery_block">
      <LoaderAnimated isLoading={loading} />
      {galleryTitle && (
        <Row className="heading_gallery">
          <Col>
            <h2>{galleryTitle}</h2>
          </Col>
        </Row>
      )}
      {Array.isArray(gallery) && gallery.length > 0 ? (
        <Container
          className={`feature_nft_item  ${
            props.isProfile && "profileCollectionCard"
          }`}
        >
          <Row>
            {Array.isArray(gallery) &&
              gallery.slice(startItem, endItem).map((gitem, index) => {
                return (
                  <Col lg={3} key={index} className="featuredNFT_class">
                    <Card
                      onClick={(e) =>
                        clickedInDrop(
                          e,
                          showCollect === "true"
                            ? gitem?.nftId
                            : gitem?.collectionId
                        )
                      }
                      className={`featuredNftCard ${
                        props.className ? props.className : ""
                      }`}
                    >
                      <Card.Header
                        className="featuredNftCard_img"
                        style={{
                          minHeight: gitem.fileType.toLowerCase() === "video" && "auto",
                        }}
                      >
                        <div className="head-text">
                          {gitem.nftType === "MB" && (
                            <div class="text-on-image">
                              <hi>Mystery Box-Nft</hi>
                            </div>
                          )}
                          {gitem.fileType.toLowerCase() === "video" ? (
                            <video
                              controls
                              width="100%"
                              controlsList="nodownload"
                            >
                              <source
                                src={
                                  showCollect == "true"
                                    ? `${gitem?.nftLogo}`
                                    : `${gitem?.logo}`
                                }
                                type="video/mp4"
                              />
                            </video>
                          ) : (
                            <img
                              src={`${gitem?.logo}?tr=h-250,w-250`}
                              className="img-fluid"
                              alt={gitem?.name}
                            />
                          )}
                        </div>
                      </Card.Header>
                      <Card.Body
                        className={
                          showCollect === "true" ? null : "drop_card_style"
                        }
                      >
                        <Row onClick={() => clickedInDrop(gitem?.collectionId)}>
                          <Col>
                            <h4 className="gi_title_style">{gitem?.title}</h4>
                            <h5>{gitem.subHeading}</h5>
                            <h5>{gitem.brandName}</h5>
                          </Col>
                        </Row>
                      </Card.Body>
                      {/* <Card.Footer className="drop_bg_footer">
                            <Row onClick={() => clickedInDrop(gitem?.collectionId)}>
                              <Col>
                                  <h6>Purchase for ${gitem?.price || "0.00"}</h6>
                              </Col>
                              <Col>
                                  {showCollect == "true" && (                                    
                                      <Button
                                        className="bidButton"
                                        disabled={gitem?.sold == 1 ? true : false}
                                        onClick={() =>
                                          collectNft(gitem?.nftId, gitem?.price)
                                        }
                                      >
                                        Collect
                                      </Button>                                   
                                  )}
                              </Col>
                            </Row>
                          </Card.Footer> */}
                    </Card>
                  </Col>
                );
              })}

           
          </Row>
          {totalRecords > limit && (
              <div className="display: inline-block;">
                <ShowcasePagintion
                  total={+totalRecords}
                  nextPage={nextPage}
                  limit={limit}
                />
              </div>
            )}
        </Container>
      ) : (
        <Row>
          <Col>
            <p className="text-center">
              {gallary === "myCollection" ? "No Record found" : "Coming Soon"}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CollectionCardGallery;
