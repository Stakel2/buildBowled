import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";
import { CardFeaturedNft, LoaderAnimated } from "..";
import { userApiCallPost } from "../../../Axios/User";
import { context } from "../../../Context/MainContext";
import ShowcasePagintion from "../../pages/public/showcase/ShowcasePagintion";
import Timer from "../Timer/Timer";
import { toasts } from "../Toast/Toast";
import "./CardGalleryStyle.scss";
import { IMGKLAYTN, IMGPOLYGON } from "../../../constant";
import { useTimer } from "react-timer-hook";
import eastLogo from '../../../assets/images/bowled-images/footerLogo.png'

const CardGallery = (props) => {
  const {
    gallery,
    startItem,
    endItem,
    galleryTitle,
    showCollect,
    hw,
    total,
    limit,
    nextPage,
    count
  } = props
  const [loading, setLoading] = useState(false)
  const { loginState, loginDispatch } = useContext(context)

  const {expiryTimestamp, onExpire} = props


  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  const navigate = useNavigate();
  console.log("GALLERY", gallery);
  const clickedInDrop = (e, id) => {
    showCollect === 'true'
      ? navigate('/product-detail/' + id)
      : // e.preventDefault()
        navigate('/drops/' + id)
  }

  const collectNft = (id, price) => {
    setLoading(true)
    if (loginState.user.accessToken) {
      let newData = {
        nftId: id,
        price: price,
        paymentResponseId: '',
        paymentStatus: 'COMPLETED',
        paymentGateway: 'FREE',
      }
      userApiCallPost('/collectnft', newData, {}, 'toastOn')
        .then(async (res) => {
          let data = await res?.data;
          console.log("CollectionData---->", data);
          setLoading(false);
          props.collectData();
        })
        .catch((err) => {
          setLoading(false)
        })
    } else {
      setLoading(false)
      toasts.error('Please Login')
    }
  }

  return (
    <Container className={`gallery_block ${props.className}`}>
      <LoaderAnimated isLoading={loading} />
      {galleryTitle && (
        <Row className="heading_gallery">
          <h2>{galleryTitle}</h2>
        </Row>
      )}

      <Container className='feature_nft_item'>
        {Object.values(gallery).length > 0 ? (
        <Row>
          {gallery.slice(startItem, endItem).map((gitem, index) => {
            return (
              
          <Col key={index} className='featuredNFT_class'>
            
            <Card onClick={(e) =>
                    clickedInDrop(
                      e,
                      showCollect === 'true'
                        ? gitem?.nftId
                        : gitem?.collectionId,
                    )
                  }
            className={`featuredNftCard ${props.className ? props.className : ''}`}>
            <Card.Header className='featuredNftCard_img' style={{minHeight: gitem.fileType === 'video' && 'video'}} >      
                    {gitem.fileType === 'video' ? (                        
                          <video controls width="100%" controlsList="nodownload">
                            <source
                              src={
                                showCollect == 'true'
                                  ? `${gitem?.nftLogo}`
                                  : `${gitem?.logo}`
                              }
                              type="video/mp4"
                            />
                          </video>                        
                      ) : (
                          <img
                            style={{ cursor: 'pointer' }}
                            src={
                              showCollect == 'true'
                                ? `${gitem?.nftLogo}?${
                                    hw ? 'tr=w-524' : 'tr=w-524,h-524'
                                  }`
                                : `${gitem?.logo}?${
                                    hw ? 'tr=w-524' : 'tr=w-524,h-524'
                                  }`
                            }
                            className="img-fluid"
                            alt={gitem?.name}
                          />
                       
                      )}

            </Card.Header>
            <Card.Body className={showCollect === 'true' ? null : 'drop_card_style'}>
                <Row>
                {showCollect === 'true' ? (
                    <Col>
                        <h4 title={showCollect == 'true' ? gitem.title : gitem.name}>{showCollect == 'true' ? gitem.title.slice(0, 11) : (`${gitem.name.slice(0, 11)}...`) } </ h4>
                        <h5 title={gitem?.brandName}>{`${gitem?.brandName.slice(0,10)}...`}</h5>
                    </Col>
                ):(
                    <Col>
                        <h4 title={showCollect == 'true' ? gitem.title : gitem.name}>{showCollect == 'true' ? gitem.title.slice(0, 11) : (`${gitem.name.slice(0, 11)}`) } </ h4>
                        <h5 title={gitem?.brandName}>{`${gitem?.brandName}`}</h5>
                        <button className="btn btn-default small" onClick={(e) => clickedInDrop(e, showCollect === 'true' ? gitem?.nftId : gitem?.collectionId, )}>
                          <span>View</span>  
                        </button>
                    </Col>
                )}

                    {showCollect === 'true' && (
                    <Col>
                    <img src={eastLogo} style={{width:'80px'}}  alt={"Bowled NFT"} />
                    <p><span>{"1"}/{"1"}</span><img src={gitem.blockChainName && 
                       gitem.blockChainName === "KLAYTN" ? IMGKLAYTN : IMGPOLYGON} 
                       alt={gitem.blockChainName &&  gitem.blockChainName == "KLAYTN" ? "KLAYTN" : "Polygon"}/>
                    </p>
                    </Col>
                    )}

                </Row>                     
            </Card.Body>
            {showCollect === "true" && (
            <Card.Footer>
              <Row>
                  <Col>
                      <h6>{showCollect === "true" && 'Price'}</h6>
                      <h4>{showCollect === "true" && (`${gitem.price} USD`)}</h4>
                      <h5>{showCollect === "true"  &&  gitem.blockChainName && 
                       gitem.blockChainName === "KLAYTN" ? "KLAY" : "MATIC"} </h5>
                  </Col>
                  <Col>
                  
                    {gitem?.nftType === 'AUCTION' && (
                      <>
                      <h6>{"Ending In"}</h6>
                      {console.log("Date",gitem?.auctionExpireDate)}
                        {!gitem?.expired && (
                          <Timer
                            expiryTimestamp={
                              new Date(+gitem?.auctionExpireDate * 1000)
                            }
                            className="timer-style"
                          />
                        )}
                      </>
                    )}

                    {showCollect === "true" && (
                      <>
                       {gitem?.nftType === "AUCTION" ? (
                                <>
                                  <Button
                                    className="bidButton"
                                    onClick={() =>
                                      navigate("/product-detail/" + gitem.nftId)
                                    }
                                    disabled={gitem?.expired}
                                  >
                                    {gitem?.expired
                                      ? "Bid Expired"
                                      : "Place Bid"}
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button
                                    className="bidButton"
                                    disabled={gitem?.sold === 1 ? true : false}
                                    onClick={() =>
                                      +gitem.price === 0
                                        ? collectNft(gitem?.nftId, gitem?.price)
                                        : navigate(
                                            "/product-detail/" + gitem.nftId
                                          )
                                    }
                                  >
                                    
                                    {gitem?.sold === 1
                                      ? "Sold Out"
                                      : +gitem.price === 0
                                      ? "Collect"
                                      : "Buy"}
                                      
                                  </Button>
                                </>
                              )}
                       </>
                    )}
                  </Col>
              </Row>
            </Card.Footer>
            )}
            
          </Card>
        </Col>
          )
        })}
        
      </Row>
      
      ) : (
        <Row>
          <Col>
            <p className="text-center" style={{marginTop:'25px'}}>No record found</p>
          </Col>
        </Row>
      )}
      {total > limit && (
        <ShowcasePagintion limit={limit} total={total} nextPage={nextPage} />
      )}
    </Container>
        
      
    </Container>
  )
}

export { CardGallery }
