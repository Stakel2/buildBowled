import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Layout } from "../../../common";

const PaymentSuccess = () => {
  return (
    <Layout>
      <div className="align-items-center d-flex h-100">
        <Container className="text-center my-4">
          <div>
            <h1 className="text-light" >Thank You!</h1>
            <p className="text-light">Your Payment has been successfully made.</p>
            <NavLink to="/" className="text-decoration-none text-white">
              <Button variant="success" size="lg" className="mt-4 px-5">
                Back to Home
              </Button>
            </NavLink>
          </div>
        </Container>
      </div>
     </Layout>
  );
};

export default PaymentSuccess;
