import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout, LoaderAnimated } from "../../../common";
import "./ProductStyle.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Form,
  Modal,
} from "react-bootstrap";
import { brandsApiCallGet, brandsApiCallPost } from "../../../../Axios/Brands";
import PaypalButton from "../../../common/paypal/paypal";
import { userApiCallPost, userApiCallPut } from "../../../../Axios/User";
import { toasts } from "../../../common/Toast/Toast";
import { context } from "../../../../Context/MainContext";
import moment from "moment";
import FormikControl from "../../../common/FormikControl";
import { Formik } from "formik";
import * as Yup from "yup";
import Timer from "../../../common/Timer/Timer";
import ShowcasePagintion from "../showcase/ShowcasePagintion";
import { IMGKLAYTN, IMGPOLYGON } from "../../../../constant";
import ReactTooltip from "react-tooltip";
import { calculateBal } from "../../../../utils/utils";

const Product = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [activityList, setActivityList] = useState([]);
  const [activityLimit, setActivityLimit] = useState(10);
  const [activityTotal, setActivityTotal] = useState(0);
  const [activityPage, setActivityPage] = useState(1);
  const [currBidPrice, setCurrBidPrice] = useState(0);
  const [nftToBuy, setNftToBuy] = useState({
    id: 0,
    price: 0,
  });

  const [showPaypal, setShowPaypal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { loginState } = useContext(context);
  const { userData } = useContext(context);
  const [isExpired, setExpired] = useState(false);
  const [auctionWiner, setAuctionWiner] = useState({});
  const [selectedPayOption, setSelectedPayOption] = useState("");
  const [balance, setBalance] = useState(0);
  const [show, setShow] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);
  useEffect(() => {
    setSelectedPayOption(
      productDetail?.blockName === "POLYGON"
        ? "PAYPAL"
        : +productDetail?.price >= 28
        ? "NP"
        : "PAYPAL"
    );
  }, [productDetail]);

  useEffect(() => {
    getProductDetails(param.id);
  }, []);

  const getProductDetails = (id) => {
    // debugger;
    setLoading(true);
    brandsApiCallGet(`/nft/api/v1/nft/` + id)
      .then((response) => {
        if (response?.message === "Invalid NFT Requested") {
          navigate("/404");
          setLoading(false);
        } else {
          if (response?.data?.detail.length !== 0) {
            setProductDetail(response?.data?.detail[0]);
            if (loginState.user.accessToken) { getBalance(response?.data?.detail[0]?.blockName);}
          } else {
            navigate("/404");
          }
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error?.response?.data?.message === "Invalid NFT Requested") {
          navigate("/404");
        }
      });
  };

  const getBalance = (selectedCoin) => {
    setLoading(true);
    brandsApiCallGet(
      `wallet/${selectedCoin === "KLAYTN" ? "klay" : "matic"}/get_balance`
    )
      .then((res) => {
        if (res) {
          console.log("RES--->", res);
          setBalance(calculateBal(res.data[0].balance));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("RES--->", error);
        setLoading(false);
      });
  };

  const collectNft = (id, price) => {
    setLoading(true);
    if (loginState.user.accessToken) {
      let newData = {
        nftId: id,
        price: price,
        paymentResponseId: "",
        paymentStatus: "COMPLETED",
        paymentGateway: "FREE",
      };
      userApiCallPost("/collectnft", newData, {}, "toastOn")
        .then(async (res) => {
          setLoading(false);
          getProductDetails(param.id);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      toasts.error("Please Login");
    }
  };

  const buyNft = (id, price) => {
    setLoading(true);
    // console.log("payment gatway", selectedPayOption)
    if (loginState.user.accessToken) {
      setNftToBuy({
        id: id,
        price: price,
      });

      userApiCallPost(
        "/nftStatus",
        { nftId: id, price: price, paymentGateway: selectedPayOption },
        {},
        "toastOn",
        "noSuccessToast"
      )
        .then(async (res) => {
          setLoading(false);
          if (res) {
            selectedPayOption === "PAYPAL"
              ? setShowPaypal(true)
              : buyNftWithNowPayments(id, price);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      toasts.error("Please Login");
      setLoading(false);
    }
  };

  const buyNftWithNowPayments = (id, price) => {
    setLoading(true);
    if (loginState.user.accessToken) {
      let newData = {
        nftId: id,
        price: price,
        paymentResponseId: "",
        paymentStatus: "PENDING",
        paymentGateway: selectedPayOption,
      };
      userApiCallPost("/collectnft", newData, {}).then(async (res) => {
        setLoading(false);
        if (res) {
          toasts.success(res.message);
          selectedPayOption === "NP" &&
            window.open(res.data, "_blank", "width=800,height=800");
        }
        getProductDetails(param.id);
      });
    } else {
      setLoading(false);
      toasts.error("Please Login");
    }
  };

  const onCreatePayment = (id, type) => {
    setLoading(true);
    if (loginState.user.accessToken) {
      let newData = {
        nftId: nftToBuy.id,
        price: nftToBuy.price,
        paymentResponseId: id,
        paymentStatus: "PENDING",
        paymentGateway: type,
      };

      userApiCallPost("/collectnft", newData, {}, "toastOff")
        .then(async (res) => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      toasts.error("Please Login");
    }
  };

  const onPaymentSucess = (res, type) => {
    setLoading(true);
    if (res.status === "COMPLETED") {
      setShowPaypal(false);
      userApiCallPut(
        "/nft/transactionStatus",
        { nftId: nftToBuy.id, paymentOrderId: res.id, status: "APPROVED" },
        {},
        "toastOff"
      )
        .then(async (res) => {
          setLoading(false);
          toasts.success("Nft purchased successfully");
          getProductDetails(param.id);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setShowPaypal(false);
      setLoading(false);
      toasts.success(
        "Payment is in progress will get back to you when its done."
      );
    }
  };

  const onPaymentError = () => {
    setShowPaypal(false);
    setLoading(false);
  };

  const onPaymentCancel = (res) => {
    setLoading(true);
    userApiCallPut(
      "/nft/transactionStatus",
      { nftId: nftToBuy.id, paymentOrderId: res?.orderID, status: "CANCELLED" },
      {},
      "toastOff"
    )
      .then(async (res) => {
        setLoading(false);
        setShowPaypal(false);
        getProductDetails(param.id);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    productDetail?.nftType === "AUCTION" && fetchActivities();
  }, [productDetail, activityPage]);

  const fetchActivities = () => {
    setLoading(true);
    productDetail?.nftType === "AUCTION" &&
      brandsApiCallGet(
        `nft/api/v1/bid/getNftById/${productDetail?.nftId}/${activityLimit}/${activityPage}`
      )
        .then((res) => {
          setLoading(false);
          if (res) {
            console.log("fetchActivities", res);
            setActivityList(res?.data);
            setActivityTotal(res?.count);
            res?.auctionWinner.auctionWinnerId !== null
              ? setCurrBidPrice(res?.auctionWinner.price)
              : setCurrBidPrice(res?.maxBid || 0);
            res?.auctionWinner.auctionWinnerId !== null &&
              setAuctionWiner(res?.auctionWinner || {});
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
  };

  const onSubmit = (e, price) => {
    e.preventDefault();
    setBidAmount(price);
    setShow(true);
  };

  const confirmBid = () => {
    setShow(false);
    setLoading(true);
    brandsApiCallPost(
      `nft/api/v1/bid/place_auction_bid`,
      { price: bidAmount, nftId: param.id },
      {},
      "toastOn"
    )
      .then((res) => {
        setLoading(false);
        fetchActivities();
      })
      .catch((error) => {
        if (error?.response?.data?.message === "You have to raise price ") {
          fetchActivities();
        }
        setLoading(false);
        console.log(error);
      });
  };

  const initialValues = {
    price:
      currBidPrice === 0
        ? +productDetail?.minBidCost + +productDetail?.price
        : currBidPrice + productDetail?.minBidCost,
  };
  const validationSchema = Yup.object({
    price: Yup.number()
      .required("Required")
      .min(
        currBidPrice === 0
          ? +productDetail?.minBidCost + +productDetail?.price
          : currBidPrice + productDetail?.minBidCost,
        `Minimum price for bid is ${
          currBidPrice === 0
            ? +productDetail?.minBidCost + +productDetail?.price
            : currBidPrice + productDetail?.minBidCost
        }`
      )
      .max(10000000, `Maximum price for bid is 10000000`),
  });

  return (
    <Layout>
      <LoaderAnimated isLoading={loading} />
      <Container className="product_wrap_style">
        <Row>
          <Col xs={12} lg={6}>
            {productDetail?.fileType === "video" ? (
              <Col className="product_img_style">
                <video controls width="100%" controlsList="nodownload">
                  <source src={productDetail?.logo} type="video/mp4" />
                </video>
              </Col>
            ) : (
              <Col className="product_img_style">
                <img
                  src={`${productDetail?.logo}?tr=w-524`}
                  alt={productDetail?.title}
                />
              </Col>
            )}
            <Col>
              <ul className="product_details_style">
                <li>{/* <strong>{product.title}</strong> */}</li>
                <li>
                  <div
                    style={{
                      marginBottom: "10px",
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <strong>{productDetail?.title}</strong>
                    <Col
                      style={{
                        justifyContent: "end",
                        display: "flex",
                        marginLeft: "10px",
                      }}
                    >
                      {productDetail?.blockName &&
                        productDetail?.blockName === "KLAYTN" && (
                          <img
                            src={IMGKLAYTN}
                            style={{
                              height: "50px",
                              width: "50px",
                            }}
                          />
                        )}
                      {productDetail?.blockName &&
                        productDetail?.blockName === "POLYGON" && (
                          <img
                            src={IMGPOLYGON}
                            style={{ height: "50px", width: "50px" }}
                          />
                        )}
                    </Col>
                  </div>
                </li>
                {/* <li>
                  <strong>Creator Name:</strong> {productDetail?.creatorName}
                </li> */}
                <li>
                  <strong>Collection Name:</strong>{" "}
                  {productDetail?.collectionName}
                </li>
              </ul>

              <h3 className="product_sub_title">Item Description:</h3>
              <p className="product_desc_style">{productDetail?.description}</p>
              {/* <ul className="social_share_links">
                <li>
                  <a href="like" className="item_like"></a>
                  <span className="textStyle">77</span>
                </li>
                <li>
                  <a href="like" className="item_view"></a>
                  <span className="textStyle">548</span>
                </li>
                <li>
                  <a href="like" className="item_facebook"></a>
                </li>
                <li>
                  <a href="like" className="item_insta"></a>
                </li>
                <li>
                  <a href="like" className="item_twitter"></a>
                </li>
                <li></li>
              </ul> */}
            </Col>
          </Col>
          <Col xs={12} lg={6} className="product_info_right_style">
            <Col>
              <Row className="product_value_style">
                <Col xs={12} lg={6}>
                  <h3>
                    {productDetail?.nftType === "AUCTION"
                      ? "Current Bid"
                      : "Current Price"}
                  </h3>
                  <ReactTooltip id="blockChainName" place="top" effect="solid">
                    {productDetail?.blockName}
                  </ReactTooltip>
                  {productDetail?.nftType === "AUCTION" ? (
                    <>
                      <p className="big_text">
                        {currBidPrice === 0
                          ? +productDetail?.price
                          : currBidPrice}{" "}
                        {productDetail?.currency}{" "}
                        <span
                          className="small coinPrice text-muted"
                          data-tip
                          data-for="blockChainName"
                        >
                          {Object.keys(auctionWiner)?.length > 0 &&
                              
                              <>
                                (
                                <img
                                  src={productDetail?.blockName === "KLAYTN"?IMGKLAYTN:IMGPOLYGON}
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                  }}
                                />

                                {productDetail?.coinValue})
                              </>
                            }
                        </span>
                      </p>
                      {!productDetail?.expired && (<p className="text-muted">
                        Minimum additional bid: {productDetail?.minBidCost} USD{" "}
                      </p>)}
                      
                    </>
                  ) : (
                    <p className="big_text">
                      {productDetail?.price} {productDetail?.currency}{" "}
                      <span
                        className="small coinPrice text-muted"
                        data-tip
                        data-for="blockChainName"
                      >
                        {productDetail?.blockName == "KLAYTN" && (
                          <>
                            (
                            <img
                              src={IMGKLAYTN}
                              style={{
                                height: "25px",
                                width: "25px",
                              }}
                            />
                            {productDetail?.coinValue})
                          </>
                        )}
                        {productDetail?.blockName == "POLYGON" && (
                          <>
                            ({" "}
                            <img
                              src={IMGPOLYGON}
                              style={{ height: "25px", width: "25px" }}
                            />{" "}
                            {productDetail?.coinValue})
                          </>
                        )}
                      </span>
                    </p>
                  )}
                  {!showPaypal &&
                    productDetail?.nftType === "AUCTION" &&
                    +productDetail?.price !== 0 &&
                    Object.keys(auctionWiner)?.length > 0 && (
                      <Form>
                        <div className="mb-3">
                          {productDetail?.blockName === "POLYGON" && (
                            <>
                              <Form.Check
                                inline
                                label="Paypal"
                                name="group1"
                                type="radio"
                                checked={
                                  selectedPayOption === "PAYPAL" ? true : false
                                }
                                id={"PAYPAL"}
                                onChange={(e) =>
                                  setSelectedPayOption(e.target.id)
                                }
                                disabled={
                                  productDetail?.sold === 1 ? true : false
                                }
                              />
                              <Form.Check
                                inline
                                label="Matic"
                                name="group1"
                                type="radio"
                                // checked={
                                //   selectedPayOption === "PAYPAL" ? true : false
                                // }
                                id={"MATIC"}
                                onChange={(e) =>
                                  setSelectedPayOption(e.target.id)
                                }
                                disabled={
                                  +productDetail?.coinValue > +balance ||
                                  productDetail?.sold === 1
                                    ? true
                                    : false
                                }
                              />
                            </>
                          )}
                          {productDetail?.blockName === "KLAYTN" && (
                            <Form.Check
                              inline
                              label={
                                +auctionWiner?.price >= 28
                                  ? "NOWPayments"
                                  : "Paypal"
                              }
                              name="group1"
                              type="radio"
                              checked={
                                selectedPayOption === "PAYPAL" ||
                                selectedPayOption === "NP"
                                  ? true
                                  : false
                              }
                              id={+productDetail?.price >= 28 ? "NP" : "PAYPAL"}
                              onChange={(e) =>
                                setSelectedPayOption(e.target.id)
                              }
                              disabled={
                                productDetail?.sold === 1 ? true : false
                              }
                            />
                          )}
                          {productDetail?.blockName === "KLAYTN" && (
                            <Form.Check
                              inline
                              label={
                                productDetail?.blockName === "POLYGON"
                                  ? "MATIC"
                                  : "KLAY"
                              }
                              checked={
                                selectedPayOption === "KLAY" ||
                                selectedPayOption === "MATIC"
                                  ? true
                                  : false
                              }
                              name="group1"
                              type="radio"
                              id={
                                productDetail?.blockName === "POLYGON"
                                  ? "MATIC"
                                  : "KLAY"
                              }
                              onChange={(e) =>
                                setSelectedPayOption(e.target.id)
                              }
                              disabled={
                                +productDetail?.coinValue > +balance ||
                                productDetail?.sold === 1
                                  ? true
                                  : false
                              }
                            />
                          )}
                        </div>
                      </Form>
                    )}
                  {!showPaypal &&
                    productDetail?.nftType !== "AUCTION" &&
                    +productDetail?.price !== 0 && (
                      <Form>
                        <div className="mb-3">
                          {productDetail?.blockName === "POLYGON" && (
                            <>
                              <Form.Check
                                inline
                                label="Paypal"
                                name="group1"
                                type="radio"
                                checked={
                                  selectedPayOption === "PAYPAL" ? true : false
                                }
                                id={"PAYPAL"}
                                onChange={(e) =>
                                  setSelectedPayOption(e.target.id)
                                }
                                disabled={
                                  productDetail?.sold === 1 ? true : false
                                }
                              />
                              <Form.Check
                                inline
                                label="Matic"
                                name="group1"
                                type="radio"
                                id={"MATIC"}
                                onChange={(e) =>
                                  setSelectedPayOption(e.target.id)
                                }
                                disabled={
                                  +productDetail?.coinValue > +balance ||
                                  productDetail?.sold === 1
                                    ? true
                                    : false
                                }
                              />
                            </>
                          )}
                          {productDetail?.blockName === "KLAYTN" && (
                            <Form.Check
                              inline
                              label={
                                +productDetail?.price >= 28
                                  ? "NOWPayments"
                                  : "Paypal"
                              }
                              name="group1"
                              type="radio"
                              checked={
                                selectedPayOption === "PAYPAL" ||
                                selectedPayOption === "NP"
                                  ? true
                                  : false
                              }
                              id={+productDetail?.price >= 28 ? "NP" : "PAYPAL"}
                              onChange={(e) =>
                                setSelectedPayOption(e.target.id)
                              }
                              disabled={
                                productDetail?.sold === 1 ? true : false
                              }
                            />
                          )}
                          {productDetail?.blockName === "KLAYTN" && (
                            <Form.Check
                              inline
                              label={
                                productDetail?.blockName === "POLYGON"
                                  ? "MATIC"
                                  : "KLAY"
                              }
                              checked={
                                selectedPayOption === "KLAY" ||
                                selectedPayOption === "MATIC"
                                  ? true
                                  : false
                              }
                              name="group1"
                              type="radio"
                              id={
                                productDetail?.blockName === "POLYGON"
                                  ? "MATIC"
                                  : "KLAY"
                              }
                              onChange={(e) =>
                                setSelectedPayOption(e.target.id)
                              }
                              disabled={
                                +productDetail?.coinValue > +balance ||
                                productDetail?.sold === 1
                                  ? true
                                  : false
                              }
                            />
                          )}
                        </div>
                      </Form>
                    )}
                </Col>
                <Col xs={12} lg={6}>
                  {productDetail?.nftType === "AUCTION" && (
                    // Object.keys(auctionWiner)?.length === 0 &&
                    <>
                      <h3>
                        Auction {productDetail?.expired ? "ended" : "ending in"}{" "}
                      </h3>
                      {!productDetail?.expired && (
                        <Timer
                          className="big_text light"
                          expiryTimestamp={
                            new Date(+productDetail.auctionExpireDate * 1000)
                          }
                          onExpire={() => {
                            setExpired(true);
                          }}
                        />
                      )}
                      <p className="big_text light"></p>
                    </>
                  )}
                </Col>
              </Row>
            </Col>
            <Col className="placeBidForm_style">
              {productDetail?.nftType === "AUCTION" ? (
                <>
                  {Object.keys(auctionWiner)?.length > 0 ? (
                    <>
                      {showPaypal ? (
                        <PaypalButton
                          amount={auctionWiner?.price}
                          currency="USD"
                          onCreatePayment={onCreatePayment}
                          onPaymentSucess={onPaymentSucess}
                          onPaymentError={onPaymentError}
                          onPaymentCancel={onPaymentCancel}
                        />
                      ) : (
                        <Button
                          type="button"
                          disabled={
                            +productDetail?.sold === 0
                              ? userData?.kyc?.userId !==
                                auctionWiner?.auctionWinnerId
                              : true
                          }
                          className="large"
                          onClick={() =>
                            buyNft(productDetail?.nftId, auctionWiner?.price)
                          }
                        >
                          {+productDetail?.sold === 0
                            ? userData?.kyc?.userId ===
                              auctionWiner?.auctionWinnerId
                              ? "Buy"
                              : "Auction not available"
                            : userData?.kyc?.userId ===
                              auctionWiner?.auctionWinnerId
                            ? "Sold Out"
                            : "Auction not available"}
                        </Button>
                      )}
                    </>
                  ) : (
                    <Formik
                      enableReinitialize={true}
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                    >
                      {(formik) => {
                        return (
                          <Form>
                            {!productDetail?.expired && (
                              <FormikControl
                                label="Please enter your bid (current bid + minimum additional bid)"
                                type="number"
                                className="east_form_input"
                                control="input"
                                name="price"
                                id="price"
                                value={formik.values.price}
                                placeholder="Please enter bid amount"
                              />
                            )}

                            <Button
                              onClick={(e) => onSubmit(e, formik.values.price)}
                              className="large"
                              disabled={
                                productDetail?.expired || !formik.isValid
                              }
                            >
                              {productDetail?.expired
                                ? "Bid expired"
                                : "Place a bid"}
                            </Button>
                          </Form>
                        );
                      }}
                    </Formik>
                  )}
                </>
              ) : (
                <>
                  {showPaypal ? (
                    <PaypalButton
                      amount={productDetail?.price}
                      currency="USD"
                      onCreatePayment={onCreatePayment}
                      onPaymentSucess={onPaymentSucess}
                      onPaymentError={onPaymentError}
                      onPaymentCancel={onPaymentCancel}
                    />
                  ) : (
                    <Button
                      disabled={
                        (+productDetail?.sold === 1 ? true : false) ||
                        selectedPayOption === "" ||
                        productDetail?.status === "PENDING" ||
                        productDetail?.nftType === "RAFFLE"
                      }
                      className="large"
                      onClick={() => {
                        if (productDetail?.blockName === "POLYGON") {
                          {
                            +productDetail.price === 0
                              ? collectNft(
                                  productDetail?.nftId,
                                  productDetail?.price
                                )
                              : buyNft(
                                  productDetail?.nftId,
                                  productDetail?.price
                                );
                          }
                        } else {
                          if (+productDetail?.price >= 28) {
                            buyNftWithNowPayments(
                              productDetail?.nftId,
                              productDetail?.price
                            );
                          } else {
                            +productDetail.price === 0
                              ? collectNft(
                                  productDetail?.nftId,
                                  productDetail?.price
                                )
                              : buyNft(
                                  productDetail?.nftId,
                                  productDetail?.price
                                );
                          }
                        }
                      }}
                    >
                      {/* {productDetail?.status !== "PENDING"
                        ?  */}
                      {+productDetail?.sold === 1
                        ? "Sold Out"
                        : +productDetail?.price >= 28
                        ? "Buy"
                        : +productDetail?.price === 0
                        ? "Collect"
                        : "Buy"}
                      {/* : "Processing"} */}
                    </Button>
                  )}
                </>
              )}
            </Col>
            {productDetail?.nftType === "SALE" &&
              productDetail?.blockName === "KLAYTN" && (
                <Col>
                  <Alert variant="light" className="product-note">
                    <p>
                      <b>Note</b>
                    </p>
                    <p>
                      - For Klay payment, the user will pay from the eastnft
                      central wallet. The user needs to have sufficient Klay
                      balance above the product price to make payment with Klay.
                    </p>
                    {/* <p>
                      - For products with prices below $28, you will be
                      redirected to pay via PayPal with either debit/credit card
                      or PayPal balance.
                    </p>
                    <p>
                      - For products with prices $28 and over, payment will be
                      through our partner (NOWPayments) via credit card, where
                      applicable, and debit card, with payment to be converted
                      to crypto currency.
                    </p> */}
                  </Alert>
                </Col>
              )}

            {productDetail?.nftType === "AUCTION" && (
              <>
                <Col className="activity_section">
                  <h3 className="product_sub_title">Activity</h3>
                  <ul className="activity_list_style">
                    {activityList.map((data) => (
                      <li className="row" key={data?.auctionId}>
                        <Col className="user_img"></Col>
                        <Col className="user_bid_info">
                          <h4>Bid place by {data?.fullname}</h4>
                          {/* <p>1 July 2021 at 10:00 am</p> */}
                          <p>
                            {data.updatedAt
                              ? moment(data?.updatedAt).format("Do MMM YYYY")
                              : ""}{" "}
                            at{" "}
                            {data.updatedAt
                              ? moment(data?.updatedAt).format("h:mm a")
                              : ""}{" "}
                          </p>
                        </Col>
                        <Col className="user_bid_value">
                          {/* <h4>6 ETH</h4> */}
                          <h4>${data?.price}</h4>
                          {/* <p>$12, 508.02</p> */}
                          {/* <a href="#" className="user_bid_info_link">
                          Link
                        </a> */}
                        </Col>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col className="text-end">
                  {activityTotal > 12 && (
                    <ShowcasePagintion
                      limit={activityLimit}
                      total={activityTotal}
                      nextPage={setActivityPage}
                    />
                  )}
                </Col>
              </>
            )}
          </Col>
        </Row>
        {/* {productDetail?.nftType === "AUCTION" && (
          <Row className="purchase_history_style">
            <Col>
              <h2 className="sub-title">Purchase History</h2>
              <ul className="purchaseHistroy_row_style">
                {Array.from({ length: 8 }).map((_, index) => (
                  <li className="row" key={index}>
                    <Col className="user_img"></Col>
                    <Col className="purchased_info_item">
                      Bowled NFT put NFT A on sale for $500.00
                    </Col>
                    <Col className="purchased_date_item">Jul 1, 2021</Col>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        )} */}
        <Modal
          show={show}
          centered
          onHide={() => setShow(false)}
          backdropClassName="customBackdrop"
        >
          <Modal.Header closeButton>
            <Modal.Title>Place Bid</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to place{" "}
            <span style={{ fontWeight: "bold" }}>
              {bidAmount} {productDetail?.currency}
            </span>{" "}
            bid?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              style={{ borderRadius: 0 }}
              onClick={() => confirmBid()}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>  
      </Container>
    </Layout>
  );
};

export default Product;
