import React from "react";
import { Container } from "react-bootstrap";
import "./HeadingEditPageStyle.scss";

const HeadingEditPage = (props) => {
  return (
    <Container className={`edit_page_headingStyle ${props.className ?  props.className : ''}`}>
      <h1>{props.title}</h1>
    </Container>
  );
};

export { HeadingEditPage };
