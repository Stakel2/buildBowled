import React, { useState, useEffect, useContext } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { brandsApiCallGet, brandsApiCallPost } from "../../../../Axios/Brands";
import { context } from "../../../../Context/MainContext";
import {
  EventsBlock,
  Layout,
  LoaderAnimated,
  ModalCustom,
  SliderRaffles,
} from "../../../common";
import MysteryBoxDesc from "../../../common/mysteryBoxDesc/MysteryBoxDesc";
import PaypalButton from "../../../common/paypal/paypal";
import { toasts } from "../../../common/Toast/Toast";
import banner from "../../../../assets/images/home/home_banner.jpg";
import BreadcrumbCustom from "../../../common/breadcrumb/BreadcrumbCustom";
import LogoBanner from "../../../common/logoBanner/LogoBanner";

const Mysterybox = (props) => {
  const [loading, setLoading] = useState(false);
  const [mysteryBox, setMysteryBox] = useState({});
  const { loginState } = useContext(context);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const navigate = useNavigate();
  const params = useParams();

  const mysteryBoxData = props.location.state.mysteryBox;
  console.log("mysteryBoxData", mysteryBoxData);

  useEffect(() => {
    getMysteryBox(params.id);
  }, []);

  const getMysteryBox = (id) => {
    setLoading(true);
    brandsApiCallGet(`mysterybox/api/v1/${id}`)
      .then((res) => {
        setLoading(false);
        setMysteryBox(res?.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const buyHandler = () => {
    if (loginState.user.accessToken) {
      setShowModal(true);
    } else {
      toasts.error("Please Login");
    }
  };

  const onCreatePayment = (id, type) => {
    setLoading(true);
    if (loginState.user.accessToken) {
    } else {
      setLoading(false);
      toasts.error("Please Login");
    }
  };

  const onPaymentSucess = (res, type) => {
    setLoading(true);
    console.log("onPaymentSucess", res);
    let data = {
      order_id: res?.id,
      mystery_box_id: mysteryBox.id,
      payment_status: res?.status,
      payment_id: res.purchase_units[0].payments.captures[0].id,
      // payment_gateway_id: "PAYPAL",
      amount: res.purchase_units[0].amount.value,
    };
    brandsApiCallPost(`mysterybox/api/v1/buy-mysterybox`, data, {}, "toastOn")
      .then((res) => {
        setLoading(false);
        setShowModal(false);
        navigate.goBack();
        console.log("buyHandler", res);
      })
      .catch((error) => {
        setLoading(false);   
        setShowModal(false);
      });
  };
  const onPaymentError = () => {
    setLoading(false);
    navigate("/user/order/failed");
  };

  const onPaymentCancel = (res) => {
    navigate("/user/order/failed");
  };

  return (
    <Layout style={{ paddingLeft: "0px", paddingRight: "0px" }}>
      <LoaderAnimated isLoading={loading} />
      <Container fluid className="mainBannerStyle">
      <LogoBanner />
      </Container>
      <Container>
        <Row className="my-3">
          <Breadcrumb className="brdcum_Style">
            <Breadcrumb.Item href="/mystery-boxes">
              All Mystery Boxes
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{mysteryBox.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <MysteryBoxDesc {...mysteryBox} buy={() => buyHandler(mysteryBox.id)}/>
      </Container>
      <Container>
        {/* <SliderRaffles /> */}
        <EventsBlock />
      </Container>
      <ModalCustom
        show={showModal}
        size="modal-sm"
        customClass="buyToken_modalStyle"
        title={"BUY WITH"}
        onHide={handleClose}
      >
        <PaypalButton
          amount={mysteryBox.pricing}
          currency="USD"
          onCreatePayment={onCreatePayment}
          onPaymentSucess={onPaymentSucess}
          onPaymentError={onPaymentError}
          onPaymentCancel={onPaymentCancel}
        />
      </ModalCustom>
    </Layout>
  );
};

export default Mysterybox;
