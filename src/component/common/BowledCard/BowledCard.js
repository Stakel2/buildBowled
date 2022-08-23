import React from "react";
import { Card } from "react-bootstrap";
import "./BowledCard.scss";

const BowledCard = (props) => {
  const { subTitle, title, text, icon } = props;
  return (
    <>
      <Card className={`opeCard ${props.className}`}>
        <div className="card_img">
          <img src={props.icon} alt="img" className="opeImg" />
        </div>
        <div className="head-on">
          <h2>
            {props.title}
            <span className="subTitle">{props.subTitle}</span>
          </h2>
        </div>
        <p>{props.text}</p>
      </Card>
    </>
  );
};

export { BowledCard };
