import moment from "moment";
import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import { limitCharacters } from "../../../utils/utils";
import TimerRaffle from "../Timer/TimerRaffle";
import "./RafflesCardStyle.scss";

function toTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum;
}

const RafflesCard = (props) => {
  return (
    <Card className="raffles_card_style">
      <Card.Header className={props.hasExpired ? "hasExpired" : ""}>
        {props.hasExpired ? (
          <>
            {props.resulout && <div className="resultOut">Results Are Out</div>}
          </>
        ) : (
          <>
            <h2>{props.title}</h2>
            <TimerRaffle expiryTimestamp={toTimestamp(props.expiryDate)} />
          </>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Title title={props.raffletitle}>
          {limitCharacters(props.raffletitle, 20)}
        </Card.Title>
        <Card.Text>
          <ul>
            <li>
              <span>Total Tickets:</span>
              <strong>{props.totalTickets}</strong>
            </li>
            <li>
              <span>NFTs to be claimed:</span>
              <strong>{props.claimerNFT}</strong>
            </li>
            <li>
              <span>Result Declaration:</span>
              <strong>
                {props.expiryDate
                  ? moment(props.expiryDate).format("MM/DD/yyyy")
                  : ""}
                {/* {props.expiryDate
                  ? moment(props.expiryDate * 1000).format("DD/MM/YYYY")
                  : ""} */}
              </strong>
            </li>
          </ul>
        </Card.Text>
        {/* {!props.hasExpired && ( */}
        <Col className="text-center">
          <Button onClick={props.onClick} variant="primary">
            View
          </Button>
        </Col>
        {/* )} */}
      </Card.Body>
    </Card>
  );
};

export { RafflesCard };
