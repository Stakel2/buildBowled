import React from "react";
import { Card } from "react-bootstrap";
import EastNft from "../../../assets/images/eastNft.png";
import {IMGKLAYTN,IMGPOLYGON} from "../../../constant"
import { stampToDate } from "../../../utils/utils";
import "./ClaimCard.scss";

const ClaimCard = (props) => {
  const {
    nftImage,
    expiryDate,
    title,
    creator,
    nftType,
    blockChainName,
    toDeclared,
    isRaffleActive,

  } = props;
  // let blockchain_icon = [{ polygun: MaticIcon, Matic: MaticIcon }];
   console.log("blockchain_icon", blockChainName);
  return (
    <Card className="nftClaim_card">
      <div className="nftImage">
        {nftType === "video" ? (
          <video controls width="100%" controlsList="nodownload">
            <source src={nftImage} type="video/mp4" />
          </video>
        ) : (
          <img src={`${nftImage}?tr=w-180,h-220`} alt="nft_img" className="innerImage" />
        )}
      </div>
      <Card.Body>
        <div className="card-author-wrap d-flex justify-content-between align-items-center">
          <div className="me-5 me-sm-2">
            <span className="artist-title">{creator}</span>
            <span className="artist-name">{title}</span>
          </div>
          <div className="text-sm-end">
            <span className="bowled-nft">
              <img src={EastNft} alt="east_nft" />
            </span>
            <span className="artist-name nft-blockchain">
              {/* 1/1{" "} */}
              <img
                src={blockChainName === "POLYGON" ? IMGPOLYGON : IMGKLAYTN}
                alt="icon"
              />
            </span>
          </div>
        </div>
        
          <div className="card-status-wrap">
            <>
              <h4>{isRaffleActive ? "Result to be declared on:" : "Results declared on:"}</h4>
              <h2>{stampToDate(expiryDate)}</h2>
            </>
            {/* <>
              <h4>Claimed by:</h4>
              <h2>China China</h2>
              <h4># x02sg45sf88r6nj4fdsdfs256456</h4>
            </> */}
          </div>
        
      </Card.Body>
    </Card>
  );
};

export { ClaimCard };
