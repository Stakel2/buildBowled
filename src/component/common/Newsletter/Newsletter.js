import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import "./Newsletter.scss";
import AxiosConfig from "../../../Axios/AxiosConfig";
import { LoaderAnimated } from "../Loader/LoaderAnimated";
import { toasts } from "../Toast/Toast";

const Newsletter = (props) => {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const a = e.target.value;
    setEmail(a);
  };

  const handleSubmit = (e) => {
    console.log("email", email);
    const data = { email: email };
    setLoading(true);
    AxiosConfig.post("/user/earlyAccess", data)
      .then((res) => {
        console.log("ress", res);
        setEmail("");
        setLoading(false);
        res.data.success
          ? toasts.success(res.data.message)
          : toasts.error(res.data.message);
      })
      .catch((err) => setLoading(false));
    e.preventDefault();
  };
  return (
    <>
      <section className="newsletter_sec padd_row" id="newsletter">
        <LoaderAnimated isLoading={loading} />
        <Container>
          <Row>
            <Col lg={12}>
              <div className="newsletter_area">
                <h2 className="title_head">Claim Early Access</h2>
                <Form onSubmit={handleSubmit} className="nwsltr_form">
                  <Form.Control
                    className="text-light"
                    value={email}
                    onChange={handleChange}
                    type="email"
                    placeholder="example@gmail.com"
                  />
                  {/* <p className="error_msg">This is no valid email</p> */}
                  <ButtonCommon
                    onClick={""}
                    className="cm_btn"
                    title="Submit"
                  />
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Newsletter;
