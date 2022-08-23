import React from "react";
import "./BowledCard.scss";

const NftCard = (props) => {
  return (
    <div className="nftCard">
     <a href={props.link}>
      <div className="nftCard_head">
        <h3>{props.title}</h3>
        <h5>CARDS</h5>
      </div>
      <div className="mainNft">
        <div className="mainNft_img">
          <img src={props.icon} alt="nftImg" />
        </div>
       
        {/* <div className="divider_strip"></div>
        <h5>{props.name}</h5> */}
      </div> </a>
    </div>
  );
};

export default NftCard;
