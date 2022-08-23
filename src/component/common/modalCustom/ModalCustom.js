import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalCustomStyle.scss";

const ModalCustom = (props) => {
  return (
    <Modal
      {...props}
      size={`lg ${props.size}`}
      backdropClassName="customBackdrop"
      dialogClassName={`customModal ${props.customClass}`}
      show={props.show}
    >
      <Modal.Header className={props.centerHeader}>
        <Modal.Title closeButton>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export { ModalCustom };
