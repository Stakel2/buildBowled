import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import eastLogo from "../../../assets/images/bowled-images/footerLogo.png";
import "./CardNftStyle.scss";
import nieoBg from "../../../assets/images/gif/nieo.jfif";
import maticLogo from "../../../assets/images/polygon-matic-logo.png";
import klaytnLogo from "../../../assets/images/klaytn-colored.svg";
import { useTimer } from "react-timer-hook";
import TimerFeaturedNft from "../Timer/TimerFeaturedNft";
import { Link, useNavigate } from "react-router-dom";
import { limitCharacters } from "../../../utils/utils";
const CardFeaturedNft = (props) => {
  const {
    nftLogo,
    title,
    brandName,
    nftIndex,
    totalNft,
    blockName,
    price,
    nftType,
    nftId,
    auctionExpireDate,
    fileType,
    basePriceType,
    basePriceCurrency,
    btnVariant,
    btntext,
    animatedUrl,
  } = props;

  let navigate = useNavigate();
  const clickedInDrop = (e, id) => {
    navigate("/viewnft/" + id);
    // navigate("/viewnft"+id)
  };
  return (
    <>
      <Card
      onClick={(e)=>clickedInDrop(e,nftId)}
        key={animatedUrl ? animatedUrl : nftLogo}

        className={`nftCard_style ${props.className ? props.className : ""} ` }
      >
        {/* <Card.Header className="featuredNftCard_img">
        <img src={nftLogo} alt={title} />
      </Card.Header> */}
        <Card.Header
          className="featuredNftCard_img"
          style={{ minHeight: fileType === "video" && "video" }}
        >
          {animatedUrl ? (
            <video controls width="100%" controlsList="nodownload" autoPlay={true} >
              <source src={animatedUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              style={{ cursor: "pointer" }}
              // src={nftLogo}
              src={`${nftLogo}?${"tr=w-242,h-250"}`}
              className="img-fluid"
              alt={title}
            />
          )}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <h4 title={`${title} ${brandName}`}>
                {limitCharacters(title, 12)}{" "}
                <span>{limitCharacters(brandName, 12)} </span>{" "}
              </h4>
            </Col>
            {/* <Col >
            <img src={eastLogo} style={{ width: "80px" }} alt={"Bowled NFT"} />
            <p>
              <span>
                {nftIndex}/{totalNft}
                1/1
              </span>{" "}
              <img
                src={blockName === "POLYGON" ? maticLogo : klaytnLogo}
                alt={"Matic"}
              />
            </p>
          </Col> */}
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            {basePriceType === "CURRENCY" && (
              <Col className="pricebox">
                <h6>Price</h6>
                <h4>{`${price} ${basePriceCurrency}`}</h4>
                {/* <h5>{props.blockchanePrice} MATIC</h5> */}
              </Col>
            )}

            {basePriceType === "CRYPTO" && (
              <Col className="pricebox">
                <h6>Price</h6>
                <h4>
                  {" "}
                  <img
                    src={blockName === "POLYGON" ? maticLogo : klaytnLogo}
                    alt={"Matic"}
                  />{" "}
                  {`${price} `}
                </h4>

                {/* <h5>{props.blockchanePrice} MATIC</h5> */}
              </Col>
            )}
          </Row>
          {nftType === "AUCTION" && (
            <Col className="timerbox">
              {/* <h6>{"Ending In"}</h6> */}
              {auctionExpireDate != null && auctionExpireDate != "0" && (
                <TimerFeaturedNft expiryTimestamp={+auctionExpireDate * 1000} />
              )}
            </Col>
          )}
          <div className="cardBtn">
            <a
              href=""
              onClick={(e) => clickedInDrop(e, nftId)}
              className={`btn ${btnVariant}`}
            >
              {btntext}
            </a>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export { CardFeaturedNft };
