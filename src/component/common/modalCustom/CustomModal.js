import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./CustomModal.scss";

const CustomModal = (props) => {
  const { size, customClass, title, children, centerHeader, show } = props;
  return (
    <>
      <Modal
        {...props}
        size={`md ${size}`}
        backdropClassName="customBackdrop_edit"
        dialogClassName={`waitlist ${customClass}`}
        show={show}
        backdrop={false}
        
      >
        <Modal.Header className={centerHeader} closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
