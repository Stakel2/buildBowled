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
  Modal,
  Alert,
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
import {
  calculateBal,
  limitCharacters,
  encrypt,
  jwtEncrypt,
} from "../../../../../utils/utils";
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
  const { userLocation } = useContext(context);
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
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);
  const [showBidModal, setShowBidModal] = useState(false);

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
  console.log("DATAID", param.id);
  useEffect(() => {
  
    getProductDetails(param.id);
  }, [param.id]);

  useEffect(() => {
    setSelectedPayOption(
      productDetail?.blockName === "POLYGON"
        ? "MATIC"
        : +productDetail?.price >= 28
        ? "MATIC"
        : "MATIC"
    );
  }, [productDetail]);

  const getProductDetails = (id) => {
    setLoading(true);
    brandsApiCallGet(`/nft/api/v1/nft/${id}?location=IN`)
      .then((response) => {
        if (response?.message === "This nft is not available in your country") {
          navigate.replace("/nft-not-found");
          return;
        }

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
          // console.log("RES--->", res);
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
      const endata = jwtEncrypt(newData);
      userApiCallPost("/collectnft", endata, {}, "toastOn")
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

  const buyHandler = () => {
    setShowBuyModal(true);
    // userData?.kyc?.kycStatus === "APPROVED"
    //   ? setShowBuyModal(true)
    //   : toasts.error("Please verify your Kyc.");
  };

  const confirmBuyCall = () => {
    setShowBuyModal(false);
    if (productDetail?.nftType === "AUCTION") {
      if (productDetail?.blockName === "KLAYTN") {
        if (+productDetail?.price >= 28) {
          buyNftWithNowPayments(productDetail?.nftId, productDetail?.price);
        }
        buyNft(productDetail?.nftId, productDetail?.price);
      }
      buyNft(productDetail?.nftId, auctionWiner?.price);
    } else {
      if (productDetail?.blockName === "POLYGON") {
        console.log("I have reached to confirmBuyCall");
        +productDetail.price === 0
          ? collectNft(productDetail?.nftId, productDetail?.price)
          : buyNft(productDetail?.nftId, productDetail?.price);
      } else {
        if (+productDetail?.price >= 28) {
          buyNftWithNowPayments(productDetail?.nftId, productDetail?.price);
        } else {
          +productDetail.price === 0
            ? collectNft(productDetail?.nftId, productDetail?.price)
            : buyNft(productDetail?.nftId, productDetail?.price);
        }
      }
    }
  };

  const buyNft = (id, price) => {
    setLoading(true);
    if (loginState.user.accessToken) {
      setNftToBuy({
        id: id,
        price: price,
      });
      const finalData = {
        nftId: id,
        price: price,
        paymentGateway: selectedPayOption,
      };
      const endata = jwtEncrypt(finalData);

      userApiCallPost("/nftStatus", endata, {}, "toastOn", "noSuccessToast")
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

      const endata = jwtEncrypt(newData);

      userApiCallPost("/collectnft", endata, {})
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
          navigate("/user/order/success");
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
    navigate("/user/order/failed");
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
        navigate("/user/order/failed");
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
            // console.log("fetchActivities", res);
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
    setShowBidModal(true);
  };

  const confirmBid = () => {
    setShowBidModal(false);
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

  // console.log("product details ===>", productDetail);
  // console.log("activity list ===>", activityList);
  const shortanCollectionName = productDetail?.collectionName
    ? productDetail?.collectionName.substring(0, 10)
    : "";
  return (
    <div className="productDetail">
      <LoaderAnimated isLoading={loading} />
      {/* {console.log("selectedPayOption", selectedPayOption)} */}
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

            {productDetail?.animatedUrl ? (
              <Col className="product_img_style">
                {/* <ReactPlayer
                  controls
                  url={productDetail?.logo}
                  config={{
                    file: { attributes: { controlsList: "nodownload" } },
                  }}
                /> */}
                <video
                  controls
                  width="100%"
                  controlsList="nodownload"
                  autoPlay={true}
                >
                  <source src={productDetail?.animatedUrl} type="video/mp4" />
                </video>
              </Col>
            ) : (
              <Col className="product_img_style">
                <img
                  src={`${productDetail?.logo}?tr=w-524`}
                  alt={productDetail?.title}
                  className="img-fluid"
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
                  @{limitCharacters(productDetail?.creator?.toLowerCase())}
                </div>
              </Col>
              <Col className="nftBlock">
                <h5>Collection</h5>
                <Link to="" className="text-decoration-none">
                  <div
                    title={productDetail?.collectionName}
                    className="imgWrap"
                  >
                    <Image
                      className="me-2"
                      src={
                        require("../../../../../assets/images/DP2.png").default
                      }
                    />
                    @{productDetail?.collectionName?.toLowerCase()}
                  </div>
                </Link>
              </Col>
              <Col className="nftBlock">
                <h5>Editions</h5>

                <Form className="d-flex align-items-center  editionsForm">
                  <InputGroup.Text>#</InputGroup.Text>
                  <InputGroup>
                    <FormControl disabled placeholder="1" />

                    <InputGroup.Text>/ 1</InputGroup.Text>
                  </InputGroup>
                  {/* <ButtonGroup vertical className="ms-2">
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
                  </ButtonGroup> */}
                </Form>
              </Col>
            </Row>
            <Row className="createdBy gx-lg-4 gx-xl-5 mb-md-4 mb-lg-5 ">
              <Col xs={12} lg={4} className="nftBlock currentBird">
                <h5>
                  {" "}
                  Current
                  {productDetail?.nftType === "AUCTION"
                    ? " Bid Price"
                    : " Price"}
                </h5>

                {productDetail?.basePriceType === "CRYPTO" && (
                  <h5 className="mb-0">
                    <p className="big_text">
                      <img
                      alt=""
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
                      {currBidPrice === 0
                        ? +productDetail?.price
                        : currBidPrice}{" "}
                      <span
                        className="small coinPrice text-muted"
                        data-tip
                        data-for="blockChainName"
                      >
                        <>
                          ({productDetail?.coinValue}{" "}
                          {productDetail?.basePriceCurrency})
                        </>
                      </span>
                    </p>
                  </h5>
                )}

                {productDetail?.basePriceType === "CURRENCY" && (
                  <h5 className="mb-0">
                    <p className="big_text">
                      {currBidPrice === 0
                        ? +productDetail?.price
                        : currBidPrice}{" "}
                      {productDetail?.basePriceCurrency}
                      <span
                        className="small coinPrice text-muted"
                        data-tip
                        data-for="blockChainName"
                      >
                        <>
                          ({productDetail?.coinValue}
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
                          )
                        </>
                      </span>
                    </p>
                  </h5>
                )}
              </Col>
              {/* {!showPaypal &&
                productDetail?.nftType === "AUCTION" &&
                +productDetail?.price !== 0 &&
                Object.keys(auctionWiner)?.length > 0 && (
                  <Form>
                    <div className="mb-3 input_check_product">
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
                            checked={
                              selectedPayOption === "MATIC" ? true : false
                            }
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
                )} */}
              {!showPaypal &&
                productDetail?.nftType !== "AUCTION" &&
                +productDetail?.price !== 0 && (
                  <Form>
                    <div className="mb-3 input_check_product">
                      {productDetail?.blockName === "POLYGON" && (
                        <>
                          <Form.Check
                            inline
                            label="MATIC"
                            name="group1"
                            type="radio"
                            id={"MATIC"}
                            checked
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
                  </>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {productDetail?.nftType === "AUCTION" &&
                  !productDetail?.expired && (
                    <p className=" mb-2" style={{ color: "#ffffffb3" }}>
                      Minimum additional bid: {productDetail?.minBidCost} USD{" "}
                    </p>
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
                          +productDetail?.coinValue > +balance ||
                          +productDetail?.sold === 0
                            ? userData?.kyc?.userId !==
                              auctionWiner?.auctionWinnerId
                            : true
                        }
                        className="large"
                        onClick={
                          () => buyHandler()
                          // buyNft(productDetail?.nftId, auctionWiner?.price)
                        }
                      >
                        {+productDetail?.sold === 0
                          ? userData?.kyc?.userId ===
                            auctionWiner?.auctionWinnerId
                            ? "Buy NFT"
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
                              className="east_form_input forplaceBid"
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
                      +productDetail?.coinValue > +balance ||
                      productDetail?.status === "PENDING"
                    }
                    className="large"
                    onClick={
                      productDetail?.nftType === "FREE"
                        ? () =>
                            collectNft(
                              productDetail?.nftId,
                              productDetail?.price
                            )
                        : buyHandler
                    }
                  >
                    {/* {productDetail?.status !== "PENDING"
                        ?  */}
                    {+productDetail?.sold === 1
                      ? "Sold Out"
                      : +productDetail?.price >= 28
                      ? "Pay"
                      : +productDetail?.price === 0
                      ? "Collect"
                      : "Buy NFT"}
                    {/* : "Processing"} */}
                  </Button>
                )}
              </>
            )}
            {productDetail?.nftType === "SALE" &&
              productDetail?.blockName === "KLAYTN" && (
                <Col>
                  <Alert variant="dark" className="product-note">
                    <h6>Note</h6>
                    <p>
                      - For Klay payment, the user will pay from the eastnft
                      central wallet. The user needs to have sufficient Klay
                      balance above the product price to make payment with Klay.
                    </p>
                  </Alert>
                </Col>
              )}
          </Col>
        </Row>
        {productDetail?.nftType === "AUCTION" && (
          <Tabs
            defaultActiveKey="Activity"
            className="profileTabStyle for_raffles productDetailTab mb-1"
          >
            <Tab eventKey="Activity" title="Activity">
              <ul className="mt-4">
                {activityList.map((data, i) => (
                  <li key="i" className="d-flex align-items-center">
                    <Image
                      roundedCircle
                      fluid
                      src={iconUser}
                      className=" me-3"
                    />
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
            {/* <Tab eventKey="purchaseHistory" title="Purchase History">
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
          </Tab> */}
          </Tabs>
        )}
        <Modal
          show={showBuyModal}
          centered
          onHide={() => setShowBuyModal(false)}
          backdropClassName="customBackdrop"
        >
          <Modal.Header closeButton>
            <Modal.Title>Buy Nft</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to buy{" "}
            <span style={{ fontWeight: "bold" }}>{productDetail?.title}</span> ?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowBuyModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              style={{ borderRadius: 0 }}
              onClick={() => confirmBuyCall()}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showBidModal}
          centered
          onHide={() => setShowBidModal(false)}
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
            <Button variant="secondary" onClick={() => setShowBidModal(false)}>
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
      <FeaturedNFT />
    </div>
  );
}

export default ProductDetail;
