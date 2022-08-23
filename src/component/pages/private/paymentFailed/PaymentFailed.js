import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Layout } from "../../../common";

const PaymentFailed = () => {
  return (
    <Layout>
      <div className="align-items-center d-flex h-100 ">
        <Container className="text-center my-4">
          <div>
            <h1 style={{color:'#fff'}}>Sorry!</h1>
            <p style={{color:'#fff'}}>We were not able to process your payment.</p>
            <NavLink to="/" className="text-decoration-none text-white">
              <Button variant="danger" size="lg" className="mt-4 px-5">
              Back to Home
              </Button>
            </NavLink>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default PaymentFailed;
