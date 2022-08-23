import React from "react";
import { Button } from "react-bootstrap";
import "./ButtonCommon.scss";

const ButtonCommon = (props) => {
  const { title, onClick, className } = props;
  return (
    <Button
      onClick={onClick}
      type={props.type}
      className={`commonBtn ${className}`}
    >
      {props.title}
    </Button>
  );
};

export { ButtonCommon };
