import React from "react";
import { Button } from "react-bootstrap";
import "./StylishButton.scss";

const StylishButton = (props) => {
  const { title, onClick, className } = props;
  return (
    <a
      onClick={onClick}
      type={props.type}
      className={`stylish_btn ${className}`}
    >
      <div className="wrap_btn">
        <span className="btn_text">{props.title}</span>
        <span className="the-arrow">
          <span className="shaft"></span>
        </span>
      </div>
    </a>
  );
};

export { StylishButton };
