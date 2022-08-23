import React from "react";
import Card from "react-bootstrap/Card";
import './MysteryBoxCard.scss'

const MysteryBoxCard = (props) => {
  const { title, closed_box_image} = props;

  return (
      <Card className={`cardDrop_style mystryBox_card`} >
      <Card.Header>
          <img src={`${closed_box_image}?tr=h-180,w-180`} alt="" />
      </Card.Header>
      <Card.Body>
        <Card.Title title={props.title}>{title}</Card.Title>
      </Card.Body>      
      </Card>
  );
};

export default MysteryBoxCard;
