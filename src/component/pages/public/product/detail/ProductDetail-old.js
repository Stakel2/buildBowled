import React, { useState, useEffect, useContext } from "react";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Container,
  Image,
  ButtonGroup,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  EventsBlock,
  Layout,
  ListGateway,
  LoaderAnimated,
} from "../../../../common";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import FeaturedNFT from "../../home/FeaturedNFT";
import "./ProductDetail.scss";
import Countdown, { zeroPad } from "react-countdown";
import { date } from "yup/lib/locale";
import { useNavigate, useParams } from "react-router-dom";
import {
  brandsApiCallGet,
  brandsApiCallPost,
} from "../../../../../Axios/Brands";
import { userApiCallPost, userApiCallPut } from "../../../../../Axios/User";
import PaypalButton from "../../../../common/paypal/paypal";
import { toasts } from "../../../../common/Toast/Toast";
import { context } from "../../../../../Context/MainContext";
import moment from "moment";
import FormikControl from "../../../../common/FormikControl";
import { Formik } from "formik";
import * as Yup from "yup";
import Timer from "../../../../common/Timer/Timer";
import ShowcasePagintion from "../../showcase/ShowcasePagintion";
import { IMGKLAYTN, IMGPOLYGON } from "../../../../../constant";
import ReactTooltip from "react-tooltip";
import { calculateBal } from "../../../../../utils/utils";
import iconUser from "../../../../../assets/images/signup/icon_input_user.svg";

const images = [
  {
    original: require("../../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide4@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide3@2x.png").default,
  },

  {
    original: require("../../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide4@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide3@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide4@2x.png").default,
  },

  {
    original: require("../../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide3@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide4@2x.png").default,
  },

  {
    original: require("../../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide3@2x.png").default,
  },
  {
    original: require("../../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../../assets/images/slide4@2x.png").default,
  },
];
const Activitydata = [
  {
    image: require("../../../../../assets/images/activity1.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../../assets/images/activity2.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../../assets/images/activity3.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../../assets/images/activity4.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../../assets/images/activity5.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
];
const PurchaseHistorydata = [
  {
    historyImage: require("../../../../../assets/images/activity1.png").default,
    typeOf: "put",
    price: "$500.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../../assets/images/activity2.png").default,
    typeOf: "brought",
    price: "$200.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../../assets/images/activity3.png").default,
    typeOf: "put",
    price: "$500.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../../assets/images/activity4.png").default,
    typeOf: "brought",
    price: "$200.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../../assets/images/activity5.png").default,
    typeOf: "put",
    price: "$500.00",
    historyDate: "1 July 2021",
  },
];

function ProductDetail({ datePosted }) {
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

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return "";
    } else {
      return (
        <span className="Timer">
          <span>
            {zeroPad(hours)}
            <label>hours</label>
          </span>
          <span>
            {zeroPad(minutes)}
            <label>minutes</label>
          </span>
          <span>
            {zeroPad(seconds)}
            <label>seconds</label>
          </span>
        </span>
      );
    }
  };

  useEffect(() => {
    getProductDetails(param.id);
  }, []);

  useEffect(() => {
    setSelectedPayOption(
      productDetail?.blockName === "POLYGON"
        ? "PAYPAL"
        : +productDetail?.price >= 28
        ? "NP"
        : "PAYPAL"
    );
  }, [productDetail]);

  const getProductDetails = (id) => {
    setLoading(true);
    brandsApiCallGet(`/nft/api/v1/nft/` + id)
      .then((response) => {
        if (response?.message === "Invalid NFT Requested") {
          navigate("/404");
          setLoading(false);
        } else {
          if (response?.data?.detail.length !== 0) {
            setProductDetail(response?.data?.detail[0]);
            if (loginState.user.accessToken) {
            getBalance(response?.data?.detail[0]?.blockName);
            }
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
      userApiCallPost("/collectnft", newData, {})
        .then(async (res) => {
          setLoading(false);
          if (res) {
            toasts.success(res.message);
            selectedPayOption === "NP" &&
              window.open(res.data, "_blank", "width=800,height=800");
          }
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
    setLoading(true);
    brandsApiCallPost(
      `nft/api/v1/bid/place_auction_bid`,
      { price: price, nftId: param.id },
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

  console.log("product details ===>", productDetail);
  console.log("activity list ===>", activityList);
  const shortanCollectionName = productDetail?.collectionName
    ? productDetail?.collectionName.substring(0, 10)
    : "";
  return (
    <Layout className="productDetail">
      <Container>
        <Row xs={1} md={1} lg={2} className=" gx-lg-4 gx-xl-5  musicNftSec">
          <Col>
            {/* <ImageGallery
              items={images}
              thumbnailPosition={"left"}
              slideOnThumbnailOver={true}
              showPlayButton={false}
              // showFullscreenButton={false}
            /> */}

            {productDetail?.fileType === "video" ? (
              <Col className="product_img_style">
                <video controls width="100%">
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
          </Col>
          <Col className="musicNft">
            <h2>{productDetail?.title}</h2>
            <p className="product_desc_style">{productDetail?.description}</p>
            <Row
              xs={1}
              sm={3}
              md={3}
              lg={3}
              className="createdBy gx-lg-4 gx-xl-5 mb-md-3 mb-lg-5"
            >
              <Col className="nftBlock">
                <h5>Created by</h5>
                <div className="imgWrap">
                  <Image
                    src={
                      require("../../../../../assets/images/DP1.png").default
                    }
                    className="me-2"
                  />
                  @LOREM
                </div>
              </Col>
              <Col className="nftBlock">
                <h5>Collection</h5>
                <div title={productDetail?.collectionName} className="imgWrap">
                  <Image
                    className="me-2"
                    src={
                      require("../../../../../assets/images/DP2.png").default
                    }
                  />
                  {shortanCollectionName}...
                </div>
              </Col>
              <Col className="nftBlock">
                <h5>Editions</h5>

                <Form className="d-flex align-items-center  editionsForm">
                  <InputGroup.Text>#</InputGroup.Text>
                  <InputGroup>
                    <FormControl disabled placeholder="1" />

                    <InputGroup.Text>/ 1</InputGroup.Text>
                  </InputGroup>
                  <ButtonGroup vertical className="ms-2">
                    <button>
                      <Image
                        src={
                          require("../../../../../assets/images/arrowTop.svg")
                            .default
                        }
                      />
                    </button>
                    <button>
                      <Image
                        src={
                          require("../../../../../assets/images/arrowBtm.svg")
                            .default
                        }
                      />
                    </button>
                  </ButtonGroup>
                </Form>
              </Col>
            </Row>
            <Row className="createdBy gx-lg-4 gx-xl-5 mb-md-4 mb-lg-5 ">
              <Col xs={12} lg={4} className="nftBlock currentBird">
                <h5>
                  {" "}
                  Current
                  {productDetail?.nftType === "AUCTION" ? " Bid" : " Price"}
                </h5>
                {/* <h3 title={productDetail?.blockName &&  productDetail?.blockName === 'KLAYTN' ? 'Klaytn' : 'Polygon'}>1.20  
                  {productDetail?.blockName &&
                        productDetail?.blockName === 'KLAYTN' && (
                          <img
                            src={IMGKLAYTN}
                            title="KLAYTN"
                            data-tip
                            data-for="registerTip3"
                            style={{
                              height: '30px',
                              width: '30px'
                            }}
                          />
                        )}
                      {productDetail?.blockName &&
                        productDetail?.blockName === 'POLYGON' && (
                          <img
                            src={IMGPOLYGON}
                            title="Polygon"
                            data-tip
                            data-for="registerTip3"
                            style={{ height: '30px', width: '30px' }}
                          />
                        )}

                </h3> */}
                <h5 className="mb-0">
                  <p className="big_text">
                  {currBidPrice === 0 ? +productDetail?.price : currBidPrice}{" "}
                    {productDetail?.currency}
                    <span
                      className="small coinPrice text-muted"
                      data-tip
                      data-for="blockChainName"
                    >
                      <>({" "}
                        <img
                          src={
                            productDetail?.blockName == "KLAYTN"
                              ? IMGKLAYTN
                              : IMGPOLYGON
                          }
                          style={{
                            height: "25px",
                            width: "25px",
                          }}
                        />{" "}
                        {productDetail?.coinValue})
                      </>
                    </span>
                  </p>
                </h5>
              </Col>
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
                            onChange={(e) => setSelectedPayOption(e.target.id)}
                            disabled={productDetail?.sold === 1 ? true : false}
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
                            onChange={(e) => setSelectedPayOption(e.target.id)}
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
                          onChange={(e) => setSelectedPayOption(e.target.id)}
                          disabled={productDetail?.sold === 1 ? true : false}
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
                          onChange={(e) => setSelectedPayOption(e.target.id)}
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
                            onChange={(e) => setSelectedPayOption(e.target.id)}
                            disabled={productDetail?.sold === 1 ? true : false}
                          />
                          <Form.Check
                            inline
                            label="Matic"
                            name="group1"
                            type="radio"
                            id={"MATIC"}
                            onChange={(e) => setSelectedPayOption(e.target.id)}
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
                          onChange={(e) => setSelectedPayOption(e.target.id)}
                          disabled={productDetail?.sold === 1 ? true : false}
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
                          onChange={(e) => setSelectedPayOption(e.target.id)}
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
              <Col xs={12} lg={8} className="nftBlock currentBird timerSec">
                {productDetail?.nftType === "AUCTION" && (
                  // Object.keys(auctionWiner)?.length === 0 &&
                  <>
                    <h5>
                      Auction {productDetail?.expired ? "ended" : "ending in"}{" "}
                    </h5>
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
                              label="Price"
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
                            disabled={productDetail?.expired || !formik.isValid}
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
                      productDetail?.status === "PENDING"
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
                      ? "Pay"
                      : +productDetail?.price === 0
                      ? "Collect"
                      : "Buy"}
                    {/* : "Processing"} */}
                  </Button>
                )}
              </>
            )}
          </Col>
        </Row>
        <Tabs
          defaultActiveKey="Activity"
          className="profileTabStyle for_raffles productDetailTab mb-1"
        >
          <Tab eventKey="Activity" title="Activity">
            <ul>
              {activityList.map((data, i) => (
                <li key="i" className="d-flex align-items-center">
                  <Image roundedCircle fluid src={iconUser} className=" me-3" />
                  <p className="medText  medSec">
                    Bid place by {data?.fullname}
                    <span>
                      {data.updatedAt
                        ? moment(data?.updatedAt).format("Do MMM YYYY")
                        : ""}{" "}
                      at{" "}
                      {data.updatedAt
                        ? moment(data?.updatedAt).format("h:mm a")
                        : ""}{" "}
                    </span>
                  </p>
                  <p className="medText ms-auto text-end">
                    {data.coinInfo}
                    <span>${data?.price}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="purchaseHistory" title="Purchase History">
            <ul>
              {
                !PurchaseHistorydata.map((data, i) => (
                  <li key="i" className="d-flex align-items-center">
                    <Image
                      roundedCircle
                      fluid
                      src={data.historyImage}
                      className="me-3"
                    />
                    <p className="medText medSec">
                      Bowled NFT {data.typeOf} NFT A on sale for {data.price}
                    </p>
                    <p className="medText ms-auto text-end">
                      <span>{data.historyDate}</span>
                    </p>
                  </li>
                ))
              }
            </ul>
          </Tab>
        </Tabs>
      </Container>

      <FeaturedNFT />
      <ListGateway />

      <Container>
        <EventsBlock />
      </Container>
    </Layout>
  );
}

export default ProductDetail;
