import React, { useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  ButtonGroup,
  Button,
  Table,
  Form,
  Modal,
} from "react-bootstrap";
import { Layout, LayoutSidebar, LoaderAnimated } from "../../../common";
import Description from "../../../common/Description/Description";
import LastScore from "../../../common/LastScore/LastScore";
import "./ViewNFT.scss";
import KaneWilliamson from "../../../../assets/images/bowled-images/Kane Williamson.png";
import largeicon from "../../../../assets/images/largeicon.svg";
import share from "../../../../assets/images/share.svg";
// import viewIcon from "../../../../assets/images/eyeIcon.jpg";
import viewIcon from "../../../../assets/images/icon_view.svg";
import ether from "../../../../assets/images/ether.svg";
import kcindyProfile from "../../../../assets/images/artist/kcindy_profile.jpg";
import luisArtist from "../../../../assets/images/artist/luis_artist.jpg";
import toonBodyslam from "../../../../assets/images/artist/toon-bodyslam.jpg";
import artistBg from "../../../../assets/images/artist/artist_bg_b.jpg";
import togal from "../../../../assets/images/togal.png";
import { context } from "../../../../Context/MainContext";
import { useNavigate, useParams } from "react-router-dom";
import { zeroPad } from "react-countdown";
import { brandsApiCallGet, brandsApiCallPost } from "../../../../Axios/Brands";
import { calculateBal, jwtEncrypt } from "../../../../utils/utils";
import {
  userApiCallPatch,
  userApiCallPost,
  userApiCallPut,
} from "../../../../Axios/User";
import { toasts } from "../../../common/Toast/Toast";
import * as Yup from "yup";
import PaypalButton from "../../../common/paypal/paypal";
import { Formik } from "formik";
import FormikControl from "../../../common/FormikControl";
import { IMGKLAYTN, IMGPOLYGON } from "../../../../constant";
import profile_pic from "../../../../assets/images/dummyProfile.jpg";
import Cashfree from "../../../common/Cashfree/Cashfree";
import { WindowDesktop } from "react-bootstrap-icons";

const images = [
  {
    original: require("../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../assets/images/slide4@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../assets/images/slide3@2x.png").default,
  },

  {
    original: require("../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../assets/images/slide4@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../assets/images/slide3@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../assets/images/slide4@2x.png").default,
  },

  {
    original: require("../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../assets/images/slide3@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../assets/images/slide4@2x.png").default,
  },

  {
    original: require("../../../../assets/images/slide1@2x.png").default,
    thumbnail: require("../../../../assets/images/slide1@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide3@2x.png").default,
    thumbnail: require("../../../../assets/images/slide3@2x.png").default,
  },
  {
    original: require("../../../../assets/images/slide4@2x.png").default,
    thumbnail: require("../../../../assets/images/slide4@2x.png").default,
  },
];
const Activitydata = [
  {
    image: require("../../../../assets/images/activity1.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../assets/images/activity2.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../assets/images/activity3.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../assets/images/activity4.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
  {
    image: require("../../../../assets/images/activity5.png").default,
    headText: "Bid place by Ivan Lan",
    date: "1 July 2021",
    time: "10:00 am",
    coinInfo: "6 ETH ",
    amount: "$ 12,508.02",
  },
];
const PurchaseHistorydata = [
  {
    historyImage: require("../../../../assets/images/activity1.png").default,
    typeOf: "put",
    price: "$500.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../assets/images/activity2.png").default,
    typeOf: "brought",
    price: "$200.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../assets/images/activity3.png").default,
    typeOf: "put",
    price: "$500.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../assets/images/activity4.png").default,
    typeOf: "brought",
    price: "$200.00",
    historyDate: "1 July 2021",
  },
  {
    historyImage: require("../../../../assets/images/activity5.png").default,
    typeOf: "put",
    price: "$500.00",
    historyDate: "1 July 2021",
  },
];

function ViewNFT({ datePosted }) {
  const { userLocation } = useContext(context);
  const param = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [activityList, setActivityList] = useState([]);
  const [activityLimit, setActivityLimit] = useState(5);
  const [activityTotal, setActivityTotal] = useState(0);
  const [activityPage, setActivityPage] = useState(1);
  const [currBidPrice, setCurrBidPrice] = useState(0);
  const [nftToBuy, setNftToBuy] = useState({
    id: 0,
    price: 0,
  });

  const [showPaypal, setShowPaypal] = useState(false);
  const [dataa, setDataa] = useState("");
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
        // paymentGateway: "FREE",
        paymentGateway: selectedPayOption,
      };

      console.log("collectdata", newData);
      const endata = jwtEncrypt(newData);
      userApiCallPost("/collectnft", endata, {}, "toastOn").then(
        async (res) => {
          setLoading(false);
          getProductDetails(param.id);
          //  if(selectedPayOption==="cashfree")
          //   window.open(res.data)
          //   if(res.status===200)
          //   debugger;
          //  {
          //   navigate("/user/order/success")
          //  }
        }
      );
      console.log("collectdata", newData).catch((err) => {
        setLoading(false);
      });
    } else {
      setLoading(false);
      toasts.error("Please Login");
    }
  };

  const buyHandler = () => {
    if (productDetail?.price < balance) {
      setShowBuyModal(true);
    } else {
      toasts.error("insuffient wallet balance");
    }
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
        // selectedPayOption ==="cashfree"?
        // collectNft(productDetail?.nftId, productDetail?.price)
        // :
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
            // selectedPayOption === "cashfree"
            // ?
            // collectNft(productDetail?.nftId, productDetail?.price)
            // window.open(res.data)
            // setShowPaypal(true)
            buyNftWithNowPayments(id, price);
          }
          // let data =res.data;
          // console.log("check",data);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      toasts.error("Please Login");
      setLoading(false);
    }
  };

  useEffect(() => {
    viewedNft(param.id);
  }, [param.id]);

  const viewedNft = (id) => {
    userApiCallPatch(`/nftViewed/${id}`, {})
      .then(async (res) => {
        console.log("response", res);
        setLoading(false);
        if (res) {
          console.log("collectData");
          // if(  selectedPayOption === "cashfree" && res.error===false){

          //     window.open(res.data, "_blank", "width=800,height=800");
          // }
          //     else{
          //       toasts.success(res.message)
          //     }
        }
      })
      .catch((err) => {
        setLoading(false);
      });
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
      console.log("dataaa", newData);

      userApiCallPost("/collectnft", endata, {})
        .then(async (res) => {
          console.log("response", res);
          setLoading(false);
          if (res) {
            console.log("collectData", newData);
            if (selectedPayOption === "cashfree" && res.error === false) {
              window.open(res.data, "_self");
            } else {
              toasts.success(res.message);
              getProductDetails(param.id);
            }
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      toasts.error("Please Login");
    }
    // getProductDetails(param.id);
    // toasts.success("Order place  sucessfully");
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
    if (productDetail?.nftType === "AUCTION") {
      const interval = setInterval(function () {
        fetchActivities();
      }, 10000);
    }
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
            console.log("fetchActivities", res.data);
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
    // if(e){
    e.preventDefault();
    setBidAmount(price);
    setShowBidModal(
      price < balance ? true : toasts.error("insuffient balance")
    );
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
  console.log("TAG", selectedPayOption);
  // console.log("product details ===>", productDetail);
  // console.log("activity list ===>", activityList);
  const shortanCollectionName = productDetail?.collectionName
    ? productDetail?.collectionName.substring(0, 10)
    : "";

  // const [hiddSidebar, setHiddSidebar] = useState(false);
  const tableContent = [
    {
      title: "810.39",
      subtitle: "Lorenzo Lorenzi",
      img: ether,
      imgedit: kcindyProfile,
    },
    {
      title: "736.85",
      subtitle: "87562",
      img: ether,
      imgedit: luisArtist,
    },
    {
      title: "691.78",
      subtitle: "FM2LGE",
      img: ether,
      imgedit: toonBodyslam,
    },
    {
      title: "236.54",
      subtitle: "JR-Duke",
      img: ether,
      imgedit: artistBg,
    },
  ];

  return (
    <Container>
      {/* <Cashfree/> */}
      <div className="Viewnft">
        <Row>
          <h2 className="titleStyle">View NFT</h2>
          {productDetail?.animatedUrl ? (
            <Col xl={4} lg={4} md={12}>
              <div className="Kanewil">
                {/* <img src={KaneWilliamson} alt="KaneWilliamson" /> */}
                <video
                  controls
                  width="100%"
                  controlsList="nodownload"
                  autoPlay={true}
                >
                  <source src={productDetail?.animatedUrl} type="video/mp4" />
                </video>
              </div>
            </Col>
          ) : (
            <Col xl={4} lg={4} md={12}>
              <div className="Kanewil">
                {/* <img src={KaneWilliamson} alt="KaneWilliamson" /> */}
                <img
                  src={`${productDetail?.logo}?tr=w-524`}
                  alt={productDetail?.title}
                />
              </div>
            </Col>
          )}
          <Col xl={8} lg={8} md={12}>
            <div className="boiBox">
              <div className="kanetext">
                <h2>
                  {productDetail?.title} <span>(2021-2022)</span>
                </h2>

                <ButtonGroup className="iconsgr" aria-label="Basic example">
                  <Button className="largeic" title="Comming soon">
                    <img src={largeicon} alt="largeicon" />
                  </Button>
                  <Button className="Share" title="Comming soon">
                    <img src={share} alt="share" />
                  </Button>
                </ButtonGroup>
              </div>
              {/* <div className="viewBox">
              <h3 >Owned by {productDetail?.owner}</h3>
             
              <img src={viewIcon} style={{height:"25px", width:"35px"}}/>
              {productDetail?.viewed} views
            
              </div> */}
              <p className=" mb-2">
                Price{" "}
                <img
                  className="smallcoin_icon"
                  src={
                    productDetail?.blockName == "KLAYTN"
                      ? IMGKLAYTN
                      : IMGPOLYGON
                  }
                />{" "}
                {productDetail?.price}
              </p>
              <Row>
                <Col>
                  {productDetail?.nftType === "AUCTION" &&
                    !productDetail?.expired && (
                      <p className=" mb-2" style={{ color: "#ffffffb3" }}>
                        Minimum additional bid:{" "}
                        <img
                          className="smallcoin_icon"
                          src={
                            productDetail?.blockName == "KLAYTN"
                              ? IMGKLAYTN
                              : IMGPOLYGON
                          }
                        />{" "}
                        {productDetail?.minBidCost}
                      </p>
                    )}
                </Col>
              </Row>
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
                            checked={
                              selectedPayOption === "MATIC" ? true : false
                            }
                            onChange={(e) => setSelectedPayOption(e.target.id)}
                            disabled={
                              +productDetail?.coinValue > +balance ||
                              productDetail?.sold === 1
                                ? true
                                : false
                            }
                          />
                          <Form.Check
                            inline
                            label="CASHFREE"
                            name="group2"
                            type="radio"
                            checked={
                              selectedPayOption === "cashfree" ? true : false
                            }
                            id={"cashfree"}
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

              {/* {productDetail?.owner===userData?.userDetails?.userId?  (<></>)
             
             :  */}

              <>
                {productDetail?.nftType === "AUCTION" ? (
                  <>
                    {Object.keys(auctionWiner)?.length > 0 ? (
                      <>
                        {showPaypal ? (
                          <Cashfree
                            data={dataa}
                            //  amount={auctionWiner?.price}
                            // currency="USD"
                            // onCreatePayment={onCreatePayment}
                            // onPaymentSucess={onPaymentSucess}
                            // onPaymentError={onPaymentError}
                            // onPaymentCancel={onPaymentCancel}
                          />
                        ) : (
                          // <PaypalButton
                          //   amount={auctionWiner?.price}
                          //   currency="USD"
                          //   onCreatePayment={onCreatePayment}
                          //   onPaymentSucess={onPaymentSucess}
                          //   onPaymentError={onPaymentError}
                          //   onPaymentCancel={onPaymentCancel}
                          // />
                          <Button
                            className="btnbuynft"
                            type="button"
                            disabled={
                              +productDetail?.coinValue > +balance ||
                              +productDetail?.sold === 0
                                ? userData?.kyc?.userId !==
                                  auctionWiner?.auctionWinnerId
                                : true
                            }
                            onClick={() =>
                              // buyHandler()
                              buyNft(productDetail?.nftId, auctionWiner?.price)
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
                                onClick={(e) =>
                                  onSubmit(e, formik.values.price)
                                }
                                disabled={
                                  productDetail?.expired || !formik.isValid
                                }
                                className="btnbuynft"
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
                      <Cashfree data={dataa} />
                    ) : (
                      // <PaypalButton
                      //   amount={productDetail?.price}
                      //   currency="USD"
                      //   onCreatePayment={onCreatePayment}
                      //   onPaymentSucess={onPaymentSucess}
                      //   onPaymentError={onPaymentError}
                      //   onPaymentCancel={onPaymentCancel}
                      // />
                      <>
                        <Button
                          className="btnbuynft"
                          disabled={
                            +productDetail?.sold === 1 ||
                            +productDetail?.coinValue > +balance ||
                            selectedPayOption === ""
                          }
                          //   (+productDetail?.sold === 1 ? true : false) ||
                          //   selectedPayOption === "" ||
                          //   +productDetail?.coinValue > +balance ||
                          //   productDetail?.status === "PENDING"
                          // }
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
                          {productDetail?.sold === 1
                            ? "Sold Out"
                            : +productDetail?.price >= 28
                            ? "Pay"
                            : +productDetail?.price === 0
                            ? "Collect"
                            : "Buy NFT"}
                          {/* : "Processing"} */}
                        </Button>
                      </>
                    )}
                  </>
                )}
              </>

              {/* {productDetail?.nftType === "AUCTION" && (
                <div className="bides">
                  <h5>{activityList?.length} Bids</h5>
                  <Table responsive>
                    <tbody>
                      {activityList.map((item, idx) => (
                        <tr>
                          <td>
                            <div className="DetailsImg">
                              <div className="ethertitle">
                                <img
                                  className="ether"
                                  src={
                                    item?.blockName == "KLAYTN"
                                      ? IMGKLAYTN
                                      : IMGPOLYGON
                                  }
                                />{" "}
                                {item.price}
                              </div>
                              <div className="Headings">
                                <p>{item.fullname}</p>{" "}
                                <img
                                  className="kcindyProfile"
                                  src={
                                    item.profileImage
                                      ? item.profileImage
                                      : profile_pic
                                  }
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )} */}
            </div>
          </Col>
        </Row>
        <Row>
          {productDetail && <Description productDetail={productDetail} />}
          {productDetail?.metadata && (
            <LastScore
              metaData={JSON.parse(productDetail?.metadata)}
              token={productDetail.tokenId}
            />
          )}
        </Row>
      </div>
      <Modal
        show={showBuyModal}
        className="ModalDeposit"
        centered
        onHide={() => setShowBuyModal(false)}
        // backdropClassName="customBackdrop"
      >
        <Modal.Header closeButton>
          <h4>Buy Nft</h4>
        </Modal.Header>
        <Modal.Body className="placebid">
          <p>
            Are you sure you want to buy{" "}
            <span style={{ fontWeight: "bold" }}>{productDetail?.title}</span> ?{" "}
          </p>
        </Modal.Body>
        <Modal.Footer className="placebidbtn">
          <Button variant="primary gray" onClick={() => setShowBuyModal(false)}>
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
        className="ModalDeposit"
      >
        <Modal.Header closeButton>
          <h4>Place Bid</h4>
        </Modal.Header>
        <Modal.Body className="placebid">
          <p>
            {" "}
            Are you sure you want to place{" "}
            <span style={{ fontWeight: "bold" }}>
              {productDetail?.basePriceType == "CRYPTO" ? (
                <>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={
                      productDetail?.blockName == "KLAYTN"
                        ? IMGKLAYTN
                        : IMGPOLYGON
                    }
                  />{" "}
                  {bidAmount}{" "}
                </>
              ) : (
                <>{bidAmount} "USD"</>
              )}
            </span>{" "}
            bid?
          </p>
        </Modal.Body>
        <Modal.Footer className="placebidbtn">
          <Button variant="primary gray" onClick={() => setShowBidModal(false)}>
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
  );
}

export default ViewNFT;
