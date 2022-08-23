import React from "react";
import "./SocialButton.scss";

const SocialButton = (props) => {
  const { title, onClick, className, linktext, icon,type,id} = props;


  console.log(props,'here the props =============')
  return (
    <a
      href={props.linktext}
      className={`social_btn ${className}`}
      target="_blank"
      onClick={props.onClick}
      id={props.id}
    >
      <span>
        <img style={{height:"30px",width:"30px"}} src={props.icon} alt="icon" />
      </span>
      {props.title}
    </a>
  );
};

export default SocialButton;
