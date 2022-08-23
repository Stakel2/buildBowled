import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, Modal, Row } from "react-bootstrap";
import { userApiCallGet, userApiCallPost } from "../../../../Axios/User";
import { ModalCustom } from "../../../common";
import FormikControl from "../../../common/FormikControl";
import CustomModal from "../../../common/modalCustom/CustomModal";

import "./Waitlist.scss";

const WaitlistModal = (props) => {

  // const [count, setCount] = useState(0)
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [waitListNo, setWaitListNo] = useState();
 

  useEffect(() => {
    handleShow();
  }, []);
 

  const getValidationState =()=>{
  const length = email.length;

  if (length<9) return 'error';
  }

  const onSubmit = () => {
    let data = {
      email: email,
    };
    userApiCallPost("/newsletter/register", data, {}, "toastOn")
      .then(async (data) => {
        console.log("data", data.data);
        setWaitListNo(data.data);
        setShow(false);
        setEmail("");
        // openShow();
      })
      .catch((error) => {
        setShow(false);
      });
   
    console.log("email", data);
  };
  const handleShow = () => setShow(true);

  const [joinshow, setJoinshow] = useState(false);

  const croseClose = () => setJoinshow(false);
  const openShow = () => setJoinshow(true);
  localStorage.setItem("attempts",0);
  const onCancel=()=>{
    userApiCallGet("/newsletter/close")
    .then(async (data) => {
      console.log("data", data.data);
     
      setShow(false);
    
    })
    .catch((error) => {
      setShow(false);
    });
    
  //   var attempts = parseInt(localStorage.getItem("attempts"));
  //   localStorage.setItem("count", ++attempts);
  //   console.log(attempts);
  //  setCount(attempts)
  // debugger;
    }
    // console.log("count",count)
    // localStorage.setItem("count",count);
    

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
                Email Confirm
            </Button> */}

      <CustomModal
        show={show}
        onHide={onCancel}
        centered
        size="md"
        title={"JOIN THE WAITLIST"}
        {...props}
      >
        <Row>
          <Col lg={12}>
            <div className="Wait_Email">
              <div className="containt">
                <p>
                  To get the early access benefits
                  {/* <br /> & <br />
                  Stay in the loop */}
                </p>
               
                
             
                  <form>
                    
                <Form.Group className="groupForm"
                controlId={"id"}
                validationState={getValidationState}>
                                    {/* <Form.Label>Email ID</Form.Label> */}
                                    <Form.Control
                                        type="email"
                                        label="Email ID"
                                        placeholder=" Enter email Address"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        required  
                                        id="formControlsEmail" 
                                        // isInvalid={"kk"} /                                    
                                    />
                                </Form.Group>
                                {/* <FormGroup
          controlId="formBasicText"
          validationState={validationSchema}
        >
          {/* <ControlLabel>Working example with validation</ControlLabel> */}
                                {/* <FormControl
            type="text"
            value={email}
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <FormControl.Feedback />
          {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
        {/* </FormGroup>  */}

                {/* <Form   className="groupForm">
                  <Form.Control
                    value={email}
                    required
                    // onChange={handleChange}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="example@gmail.com"
                  /> */}

                  <Button
                    variant="primary"
                    disabled={email===""}
                   onClick={onSubmit}
                //    type="button"

                    className="confbtn"
                  >
                    Confirm
                  </Button>
                  </form>
               
                
              </div>
            </div>{" "}
          </Col>
        </Row>
      </CustomModal>

      {/* <Button variant="primary" onClick={openShow}>
                Joined
            </Button> */}

      <CustomModal
        show={joinshow}
        onHide={croseClose}
        centered
        size="md"
        title={"YOU ARE AWESOME, SERIOUSLY!"}
        {...props}
      >
        <Row>
          <Col lg={12}>
            <div className="Wait_Email">
              <div className="containt">
                <p>
                  You have joined the community of
                  <br /> {waitListNo} <br />
                  other members
                </p>
              </div>

              <Button
                variant="primary"
                onClick={croseClose}
                className="confbtn"
              >
                Close
              </Button>
            </div>
          </Col>
        </Row>
      </CustomModal>
    </>
  );
};

export default WaitlistModal;
