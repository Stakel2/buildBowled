import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import "./LastScore.scss";
import founderAkshay from "../../../assets/images/bowled-images/founder-akshay.png";
import flag from "../../../assets/images/flag.png";
import moment from "moment";
const LastScore = (props) => {
  const { metaData } = props;
  console.log("metaData", metaData);
  const ScoringBoard = [
    {
      title: "Last 5 Average Score",
      subtitle: "61",
    },
    {
      title: "Last 10 Average Score",
      subtitle: "55",
    },
    {
      title: "Last 15 Average Score",
      subtitle: "52",
    },
  ];

  const PlayerCard = [
    {
      Conta: "Mar 6",
      acc: "ELC (A)",
      card: "56",
      pera: "CRIC TRUMP",
      img: founderAkshay,
    },
    {
      Conta: "Mar 6",
      acc: "ELC (A)",
      card: "56",
      pera: "CRIC TRUMP",
      img: founderAkshay,
    },
    {
      Conta: "Mar 6",
      acc: "ELC (A)",
      card: "56",
      pera: "CRIC TRUMP",
      img: founderAkshay,
    },
    {
      Conta: "Mar 6",
      acc: "ELC (A)",
      card: "56",
      pera: "CRIC TRUMP",
      img: founderAkshay,
    },
    {
      Conta: "Mar 6",
      acc: "ELC (A)",
      card: "56",
      pera: "CRIC TRUMP",
      img: founderAkshay,
    },
  ];

  const CardAttributes = [
    {
      country: "COUNTRY",
      trait: "New Trait",
      Brand: "INIDA",
      imgEdit: flag,
    },
    {
      country: "EDITION",
      trait: "New Trait",
      Brand: "T20",
      imgEdit: flag,
    },
    {
      country: "PLAYER NAME",
      trait: "New Trait",
      Brand: "MSD - 2/20",
      imgEdit: flag,
    },
    {
      country: "PLAYER TYPE",
      trait: "New Trait",
      Brand: "RHB",
      imgEdit: flag,
    },
    {
      country: "RARITY",
      trait: "New Trait",
      Brand: "Epic",
      imgEdit: flag,
    },

    {
      country: "SEASON",
      trait: "New Trait",
      Brand: "2022",
      imgEdit: flag,
    },
    {
      country: "SKILL",
      trait: "New Trait",
      Brand: "Batsman",
      imgEdit: flag,
    },
  ];
  return (
    <>
      <Col xl={12} lg={12}>
        <div className="lastScore">
          <div className="scoring">
            <h5>Last Scores</h5>
            <marquee width="100%" direction="left" height="30%">
              {ScoringBoard.map((item, idx) => (
                  <div className="Bloking">
                                  <div className="lastFive">
                                    <h4>{item.title}</h4>
                                    <span>{item.subtitle}</span>
                                  </div>
                     </div>
              ))}
            </marquee>
          </div>
          {PlayerCard.map((item, idx) => (
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Coming Soon!</Tooltip>}>
              <div className="PlayerCard">
                <h6>{item.Conta}</h6>
                <img className="founderAkshay" src={item.img} />
                <h5>{item.acc}</h5>
                <span>{item.card}</span>
                <p>{item.pera}</p>
              </div>
            </OverlayTrigger>
          ))}
        </div>
        <div className="attributes">
          <h5>Card Attributes</h5>
          <div className="attributesIn">
          {metaData.map(
            (item, idx) =>
              item.value && (
                <div className="CardAttributes">
                  <h6>{item.trait_type}</h6>
                  {/* <div className="COUNTRY">
                <img className="flag" src={item.imgEdit} />
                <p>{item.Brand}</p> 
              </div> */}
                  <h5>
                    {item.trait_type == "Minted On"
                      ? moment(item.value).format("MMM, DD, yyyy")
                      : item.value}
                  </h5>
                </div>
              )
          )}
        </div>
       </div>
        <div className="blockchain">
          <h5>Blockchain Details</h5>
          <div className="tokenID mb-5">
            <p>
              Token ID: <span>{props.token}</span>
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default LastScore;
