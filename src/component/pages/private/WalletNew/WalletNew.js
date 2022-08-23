import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  Modal,
  DropdownButton,
  Dropdown,
  Form,
  ButtonGroup,
  OverlayTrigger,
  Tooltip,
  Table,
} from "react-bootstrap";
import { Layout, LayoutSidebar, LoaderAnimated } from "../../../common";
import "./WalletNew.scss";
import QRCode from "react-qr-code";
import topwith from "../../../../assets/images/topwith.svg";
import bottde from "../../../../assets/images/bottde.svg";
import inrpric from "../../../../assets/images/inrpric.svg";
import ether from "../../../../assets/images/ether.svg";
import smallStadium from "../../../../assets/images/bowled-images/small-stadium.png";
import morearrow from "../../../../assets/images/morearrow.svg";
import ViratPixell from "../../../../assets/images/bowled-images/Virat-pixell.png";
import togal from "../../../../assets/images/togal.png";
import { useNavigate, useParams } from "react-router-dom";
import { toasts } from "../../../common/Toast/Toast";
import copy from "../../../../assets/images/copy.png";
import { GetBallance } from "../../../Api/Actions";
import {
  checkProvider,
  depositTransaction,
  initKaikas,
  withdrawToKaikas,
} from "../../../../WalletClients/KaikasClient";
import Wallet_icon from "../../../../assets/images/bowled-images/wallet_icon.svg";
import {
  brandsApiCallGet,
  brandsApiCallPatch,
  brandsApiCallPost,
} from "../../../../Axios/Brands";
import { calculateBal, jwtEncrypt } from "../../../../utils/utils";
import { context } from "../../../../Context/MainContext";
import { IMGKLAYTN, IMGPOLYGON } from "../../../../constant";
import { userApiCallGet } from "../../../../Axios/User";
import Cashfree from "../../../common/Cashfree/Cashfree";
import moment from "moment";
// import ShowcasePagintion from '../../public/showcase/ShowcasePagintion';

function WalletNew() {
  const [hiddSidebar, setHiddSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unstake, setUnstake] = useState(false);
  const [show, setShow] = useState(false);
  const [acAddrss, setACAddress] = useState();
  const [txnType, setTxnType] = useState("Deposit");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showHandle = () => setShow(true);
  const closeHandle = () => setShow(false);
  const [showWithdrawption, setShowWithdrawption] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState();
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("tokens");
  const [limit, setLimit] = useState(10);
  const [newIndex, setNewIndex] = useState();
  const [nftRecord, setNftRecords] = useState([]);
  const [myCollection, setMyCollection] = useState([]);
  const [coins, setCoins] = useState();
  const [royalty, setRoyalty] = useState("00.00");
  const [balance, setBalance] = useState("00.00");
  const [request, setRequest] = useState("");
  const [txnData, setTxnData] = useState([]);
  const [nftData, setNftData] = useState([]);
  const [showResaleModal, setShowResaleModal] = useState(false);
  const [resaleId, setResaleID] = useState("");
  const [resaleNftId, setResaleNftID] = useState();
  const [nftType, setNftType] = useState("HOLD");
  const [totalRecords, setTotalRecords] = useState(0);
  // const [withdrawAmount, setWithdrawAmount] = useState(0.1);
  // const [withdrawAdd, setTxnWithdrawAdd] = useState("0x5C875AAF0D05ee627ACc2cF7C1454546df86c9c3");
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [withdrawAdd, setTxnWithdrawAdd] = useState("");
  const [resalePrice, setResalePrice] = useState("");
  const [resaleCurrency, setResaleCurrency] = useState("USD");
  const [coinList, setCoinList] = useState([]);
  const [totalBalance, setTotalBalance] = useState();
  const [selectedCoinBalance, setSelectedCoinBalance] = useState();
  const [totalAmmount, setTotalAmomount] = useState();
  const [rupee, setRupee] = useState();
  console.log("resalePrice", resalePrice, resaleCurrency, resaleId);
  const params = useParams();
  const { walletData, walletDispatch } = useContext(context);

  const addressReduced = acAddrss ? acAddrss.slice(0, 4) : "";
  const addressReducedLast = acAddrss ? acAddrss.slice(-4) : "";

  // // useEffect(() => {
  // //   //debugger;
  // //   if (acAddrss) {
  // //     txnType === "Deposit"
  // //       ? getDepositTransaction()
  // //       : getWithdrawTransaction();
  // //   }
  // // }, [txnType, page, acAddrss]);

  let navigate = useNavigate();
  const clickedInDrop = (e) => {
    navigate("/user/Transactions");
  };

  const clickedInOut = (id) => {
    navigate("/viewnft/" + id);
  };

  // function getBalance() {
  //   setLoading(true);
  //   brandsApiCallGet(`wallet/${selectedCoin}/get_balance`)
  //     .then((res) => {
  //       if (res) {
  //         setBalance(calculateBal(res.data[0].balance));
  //         setACAddress(res.data[0].address);
  //       }
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //     });
  // }

  useEffect(() => {
    getNftRecords();
  }, [nftType]);

  const getNftRecords = () => {
    setLoading(true);
    userApiCallGet(`/nftRecordList/${limit}/${page}/${nftType}`)
      .then((data) => {
        setLoading(false);
        if (data?.error === false) {
          setNftRecords(data.data);
          setNftData(data.data.rows);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  const sael = (k) => {
    setKey(k);
    if (key !== "nft") {
      setLoading(true);
      userApiCallGet(`/nftlist/${limit}/${page}`)
        .then((data) => {
          setLoading(false);
          if (data?.error === false) {
            // setFavourite(data?.data?.favourite);
            // setMintedNft(data?.data?.mintedNft);
            setMyCollection(data?.data?.myCollection?.data);
            setTotalRecords(data?.data?.myCollection?.totalNFT);
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };

  // useEffect(() => {
  //   setLoading(true);
  //   userApiCallGet(`/nftlist/${limit}/${page}`)
  //     .then((data) => {
  //       setLoading(false);
  //       if (data?.error === false) {
  //         // setFavourite(data?.data?.favourite);
  //         // setMintedNft(data?.data?.mintedNft);
  //         setMyCollection(data?.data?.myCollection?.data);
  //         setTotalRecords(data?.data?.myCollection?.totalNFT);
  //       }
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //     });
  // }, [page]);
  const depositeFormKaikas = (amount) => {
    if (amount) {
      setLoading(true);
      setShowWithdrawption(false);
      depositTransaction(amount, acAddrss, setLoading)
        .then((res) => {
          setLoading(false);
          if (res) {
            setWithdrawAmount(undefined);
            toasts.success("Transaction successful.");
            GetBallance();
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  console.log(selectedCoin);

  useEffect(() => {
    //debugger;
    if (acAddrss) {
      txnType === "Deposit"
        ? getDepositTransaction()
        : getWithdrawTransaction();
    }
  }, [txnType, page, acAddrss]);

  useEffect(() => {
    if (selectedCoin) {
      getBalance();
    }
  }, [selectedCoin]);

  function getCoins() {
    setLoading(true);
    brandsApiCallGet("wallet/active-all-coins")
      .then((res) => {
        if (res) {
          setSelectedCoin(res.coins[0]);
          setCoins(res.coins);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  const addToResale = () => {
    let data = {
      resalePrice: resalePrice,
      resaleCurrency: resaleCurrency,
    };
    console.log("data", data);
    setLoading(true);
    brandsApiCallPatch(
      `/users/api/v1/resaleNFT/${resaleId}/${resaleNftId}`,
      data,
      {},
      "toastOn"
    )
      .then((res) => {
        if (res) {
          console.log("data");
        }
        setShowResaleModal(false);
        setLoading(false);
        setResalePrice("");
        setResaleCurrency("");
      })
      .catch((error) => {
        setShowResaleModal(false);
        setLoading(false);
      });
  };

  function getBalance() {
    setLoading(true);
    brandsApiCallGet(`wallet/get_balancev1/${localStorage.getItem("userId")}`)
      .then((res) => {
        if (res) {
          setBalance(calculateBal(res.data[0].balance));
          setACAddress(res.data[0].address);
          setCoinList(res.data);
          let amnt = 0;
          let balnc = 0;
          let rupeee = 0;
          setSelectedCoinBalance(res.data[0].currentBalance);
          res.data.map((e) => {
            {
              amnt += parseFloat(e.amountToPay);
              balnc += parseFloat(e.currentBalance);
              rupeee = e.nft_base_price_symbol;
              setTotalAmomount(amnt);
              setTotalBalance(balnc);

              setRupee(rupeee);
            }
          });
        }
        console.log("coinList", coinList);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  console.log("setSelectedCoinBalance", selectedCoinBalance);

  function getDepositTransaction() {
    setLoading(true);
    brandsApiCallGet(`wallet/${selectedCoin}/get_deposit_transactions/${page}`)
      .then((res) => {
        if (res) {
          console.log("RESS--->", res);
          // setTxnData([]);
          setTxnData(res.data);
          setTotalRecords(res.totalRecords);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function getWithdrawTransaction() {
    // console.log(data,"kkkkkkkkk")
    setLoading(true);
    brandsApiCallGet(`wallet/${selectedCoin}/get_withdraw_transactions/${page}`)
      .then((res) => {
        if (res) {
          console.log("RESS--->", res);
          // setTxnData([]);
          setTxnData(res.data);
          setTotalRecords(res.totalRecords);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  console.log("DATA", localStorage.getItem("email"));
  async function withdrawRequest() {
    let data = {
      amount: withdrawAmount,
      address: withdrawAdd,
      email: localStorage.getItem("email"),
    };
    const finalData = jwtEncrypt(data);
    console.log("DATA", data);

    setLoading(true);
    brandsApiCallPost(
      `wallet/${selectedCoin}/withdraw_request`,
      finalData,
      {},
      "toastOn"
    )
      .then((res) => {
        if (res) {
          setWithdrawAmount(undefined);
          setTxnWithdrawAdd("");
        }
        setShowWithdrawption(false);
        setLoading(false);
      })
      .catch((error) => {
        setShowWithdrawption(false);
        setLoading(false);
      });
  }
  const nextPage = (pageNo) => {
    // debugger;
    setPage(pageNo);
  };
  const calculatePercentage = (a) => {
    // console.log("a",a)
    // alert('hi kk')
    setWithdrawAmount((parseFloat(selectedCoinBalance) * parseFloat(a)) / 100);
    console.log(a, "%", withdrawAmount);
    // return parseFloat(c);
  };

  const cancelTxn = (data) => {
    // let data = { amount: withdrawAmount, address: withdrawAdd };
    // setLoading(true);
    // brandsApiCallPost(`wallet/${selectedCoin}/withdraw_request`, data)
    //   .then((res) => {
    //     if (res) {
    //
    //     }
    //     setShowWithdrawption(false);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setShowWithdrawption(false);
    //     ;
    //     setLoading(false);
    //   });
  };
  const copyText = (text) => {
    toasts.success("Copied!");
    return navigator.clipboard.writeText(text);
  };
  console.log("first lajsdflkas ", totalRecords);

  const coinsOption =
    coinList &&
    coinList.map((item, idx) => {
      {
        if (item.is_fiat == 0) {
          return (
            <option key={idx} value={item.id}>
              {item.coin.toUpperCase()}
            </option>
          );
        }
      }
    });
  const connectWithWallet = () => {
    withdrawToKaikas(setTxnWithdrawAdd, "connect", setLoading).then((res) => {
      setTxnWithdrawAdd(res);
    });
  };

  const buyNft = () => {
    navigate("/marketplace");
  };
  const ResaleModal = (e) => {
    setShowResaleModal(true);
    setResaleID(e.id);
    setResaleNftID(e.nftId);
  };
  const details = (id) => {
    navigate(`/viewNft/${id}`);
  };

  const crxcoin = [...coinList].filter((a) => a.coin === "crx");
  const coinlist = [...coinList].filter((a) => a.coin !== "crx");
  const coinlistfull = crxcoin.concat(coinlist);

  // const listofcoins = crxlist.concat[coinlist];
  // console.log('list of', listofcoins)

  //   const index = coinList?.findIndex(x => x.coinName === "crx");
  //   console.log('asdfasdf', index)
  //   if (index !== -10) {
  //     coinList[index] = 0;
  //     console.log('list of index', coinList[index])
  // }

  console.log("TAG", resalePrice);
  const handleSelect = (e) => {
    setNftType(e.target.value);
    setPage(1);
  };
  return (
    <Container>
      {/* <Cashfree/> */}
      <div className="MainViewNft">
        <h2>Wallet</h2>
        <div className="TableDetails">
          <Row>
            <Col xl={8} lg={8} md={12}>
              <Tabs
                activeKey={key}
                // onSelect={(k) => setKey(k)}
                // defaultActiveKey="tokens"
                id="uncontrolled-tab-example"
                className="mb-3 tabsedit"
                onSelect={sael}
              >
                <Tab eventKey="tokens" title="Tokens">
                  <Row>
                    <Col xl={12} lg={12} md={12}>
                      <div className="walletsTa">
                        <h2>
                          {" "}
                          {rupee}
                          {+totalAmmount}
                        </h2>
                        {/* <h2> INR {currentBalance}</h2> */}
                        <p>Total Value</p>
                        <div className="buttons">
                          <Button
                            className="depos"
                            onClick={() => {
                              setUnstake(true);
                            }}
                          >
                            <img src={bottde} alt="bottde" /> &nbsp;Deposit
                          </Button>
                          <Button
                            className="withd"
                            // onClick={handleShow}
                            // variant={"withdraw"}
                            onClick={() => {
                              handleShow();
                              setShowWithdrawption(true);
                              setRequest("Withdraw");
                            }}
                          >
                            <img src={topwith} alt="topwith" /> &nbsp;Withdraw
                          </Button>
                        </div>
                        <span onClick={(e) => clickedInDrop(e)}>
                          Transaction History
                        </span>
                      </div>
                    </Col>
                    <Col xl={12} lg={12} md={12}>
                      <div className="mainPrice">
                        <ul className="price">
                          {/* {crxlist && 
                               <li>
                                    <div className="inrdetails">
                                      <div className="d-flex">
                                        <img src={crxlist?.coin_image} />
                                        <div className="balncing ms-3">
                                          <h6>
                                            {crxlist?.blockchain_name}{" "}
                                            <span>
                                              ({crxlist?.coinNamcrxlist?.toUpperCase()})
                                            </span>
                                          </h6>
                                          <h6>
                                            <span className="detain">
                                              {crxlist?.is_fiat == 0 &&
                                                `${crxlist?.conversionAmount}`}
                                            </span>
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="amount">
                                        <h6>{crxlist?.currentBalance} </h6>
                                        <p>
                                          {/* {crxlist?.nft_base_price_symbol}{" "}
                                          {crxlist?.is_fiat == 0 &&
                                            `${crxlist?.nft_base_price_symbol}${crxlist?.amountToPay}`}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                } */}

                          {coinlistfull &&
                            coinlistfull.map((e) => {
                              // if(e.is_fiat==0)
                              return (
                                <>
                                  <li>
                                    <div className="inrdetails">
                                      <div className="d-flex">
                                        <img src={e.coin_image} />
                                        <div className="balncing ms-3">
                                          <h6>
                                            {e.blockchain_name}{" "}
                                            {e.is_fiat == 0 && (
                                              <span>
                                                ({e?.coinName?.toUpperCase()})
                                              </span>
                                            )}
                                          </h6>
                                          <h6>
                                            <span className="detain">
                                              {e.is_fiat == 0 &&
                                                `${e.conversionAmount}`}
                                            </span>
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="amount">
                                        <h6>{e.currentBalance} </h6>
                                        <p>
                                          {/* {e.nft_base_price_symbol} */}{" "}
                                          {e.is_fiat == 0 &&
                                            `${e.nft_base_price_symbol}${e.amountToPay}`}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                </>
                              );
                            })}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="nft" title="NFT">
                  <Row>
                    <Col xl={12} lg={12} md={12}>
                      <div className="walletsTa">
                        <h2>INR 000</h2>
                        <p>Total Value</p>
                        <div className="buttons">
                          <Button className="depos" onClick={buyNft}>
                            <img src={bottde} alt="bottde" /> &nbsp;Buy
                          </Button>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                Coming Soon!
                              </Tooltip>
                            }
                          >
                          <span className="d-inline-block">
                            <Button
                              disabled
                              style={{ pointerEvents: "none" }}
                              className="withd"
                            >
                              <img src={topwith} alt="topwith" /> &nbsp;Sell
                            </Button>
                          </span>
                          </OverlayTrigger>
                          {/* <Button className="withd" alt="coming soon" >
                            <img src={topwith} alt="topwith" /> &nbsp;Sell
                          </Button> */}
                        </div>
                      </div>
                    </Col>
                    <Col xl={12} lg={12} md={12}>
                      <div className="mainPrice">
                    
                        <ul className="price"> 
                        {myCollection &&
                            myCollection.map((e) => (
                              <li>
                                <div className="inrdetails">
                                  <div className="d-flex">
                                    {/* <img
                                  src={ViratPixell}
                                 
                                /> */}
                                    <img
                                      src={e.logo}
                                      alt="ViratPixell"
                                      className="ViratPixell"
                                    />
                                    <div className="balncing ms-3">
                                      <h6>
                                        {/* {/ NFT Name /} */}
                                        {e.title}
                                      </h6>
                                      <div className="StadiumRare">
                                        <h6>
                                          {e.mintType} Nft {e.nftId}
                                        </h6>
                                        {/* {/ <h5>Rare</h5> /} */}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="MoreIcon"
                                    onClick={(m) => clickedInOut(e.nftId)}
                                  >
                                    <p>More</p>
                                    <img src={morearrow} alt="morearrow" />
                                  </div>
                                </div>
                              </li>
                            ))}
                         </ul> 

                       

                      </div>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>

          {key === "nft" && (
            <>
              {/* <div className="transFilter">
              <select
                className="withdrawSelect"
                onChange={handleSelect}
              >
                <option value="HOLD" active={nftType === "HOLD"}>
                  HOLD
                </option>
                <option
                  value="RESALE"
                  active={nftType === "RESALE"}
                >
                  RESALE
                </option>
                <option value="SOLD" active={nftType === "SOLD"}>
                  SOLD
                </option>
              </select>
            </div> */}
            {/* <Row>
              <Col xs={26} lg={16} md={16}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>NFT</th>
                      {/* <th>Nft Id</th>
                                  <th>Logo</th> */}
                      {/* <th>Buy Price</th>
                      <th>Resale price</th>
                      <th>Royalty%</th>
                      <th>Royalty Amt</th>
                      <th>Credit</th>
                      <th>Created at</th>
                      <th>Status</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  {nftData && nftData.length > 0 ? (
                    <tbody>
                      {nftData.map((item, idx) => (
                        <tr>
                          <td>
                            <>

                              <div className="inrdetails">
                                <div className="d-flex">
                                  <img
                                    style={{
                                      height: "53px",
                                      width: "43px",
                                    }}
                                    src={item.logo}
                                    alt="ViratPixell"
                                    className="ViratPixell"
                                  />
                                  <div className="balncing ms-3">
                                    <h6> */}
                                      {/* NFT Name */}
                                      {/* {item.title}
                                    </h6>
                                    <div className="StadiumRare">
                                      <h6>Nft {item.nftId}</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          </td> */}
                          {/* <td>
                            <div className="inrdetails">
                              <div className="d-flex">
                                <img
                                  src={item.logo}
                                  alt="smallStadium"
                                  className="smallStadium"
                                />
                                <div className="balncing ms-3">
                                  <h6>{item.title}</h6>
                                  <div className="StadiumRare">
                                    <h6>{item.nftId}</h6>
                                    {/* <h5>Rare</h5> */}
                                  {/* </div>
                                </div>
                              </div>
                              </div>
                        </td> */} 
                          {/* <td>
                            <>
                            {item.buyPrice===0?("-"):(
                            item.buyPrice +" "+item.buyCurrency)}
                         </>
                          </td>
                          <td>
                          {nftType=="HOLD"?("_"):(
                            item.resalePrice+" "+
                            item.resaleCurrency)}
                          </td>
                          
                          <td>
                          {nftType=="HOLD" || nftType=="RESALE"?("_"):(
                          item.royaltyPercent)}</td>
                          <td>
                          {nftType=="HOLD" || nftType=="RESALE"?("_"):(
                            item.royaltyAmount+' '+
                            item.resaleCurrency)}
                          </td>
                          <td>
                          {nftType=="HOLD" || nftType=="RESALE"?("_"):(
                            item.balanceAmount+' '+
                            item.resaleCurrency)}
                          </td>
                          <td>
                            {moment(item.createdAt).format("DD-MM-yyyy HH:mm")}
                          </td>
                          <td>{item.status}</td>
                          <td>
                            {nftType === "HOLD" ? (
                              <>
                                <p
                                  style={{ cursor: "pointer" }}
                                  onClick={() => ResaleModal(item)}
                                >
                                  Resale  <p onClick={() => details(item.nftId)}>
                                View <img src={morearrow} alt="morearrow" /></p>
                                </p>
                              </>
                            ) : (
                              <p onClick={() => details(item.nftId)}>
                                View {' '}
                                 <img src={morearrow} alt="morearrow" />
                              </p>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        {" "}
                        <td colSpan={16} style={{ textAlign: "center" }}>
                          No Nft Yet
                        </td>{" "}
                      </tr>
                    </tbody>
                  )}
                </Table>
              </Col>
            </Row> */} 
            </>
          )}
        </div>
      </div>
      <Modal
        className="ModalDeposit"
        // show={showWithdrawption}
        // onHide={() => {
        //   setShowWithdrawption(false);
        //   setWithdrawAmount("");
        //   setTxnWithdrawAdd("");
        // }}
        show={unstake}
        // {showWithdrawption}
        centered={true}
        onHide={() => {
          setShowWithdrawption(false);
          setWithdrawAmount("");
          setTxnWithdrawAdd("");
          setUnstake(false);
        }}
      >
        <Modal.Header closeButton>
          <h4>Deposit</h4>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <div className="DepositModal">
                <div className="qrdetails">
                  <div className="margin_left_right_auto">
                    <div className="qr">
                      {acAddrss && <QRCode value={acAddrss} />}
                    </div>
                  </div>
                  <div
                    className="address"
                    title={acAddrss}
                    onClick={() => {
                      acAddrss && copyText(acAddrss);
                    }}
                  >
                    <span>
                      {addressReduced}....{addressReducedLast}
                    </span>
                    <img className="copyImg" src={copy} />
                    {/* <QRCode value={"today"} size={150} className="webscre" /> */}
                  </div>
                  {/* 
                   <div className="AssetsNetwork">
                 <Form.Label >Assets</Form.Label> 
                   <div className="filter_input_style selectStyle"> 
               <div className="walletIcon">
                <img src={selectedCoin === "klay" ? IMGKLAYTN : IMGPOLYGON} />
              </div> 
              <label className="form-label">Select Coin</label>
              <select
                className="form-control"
                onChange={(e) => {
                  setSelectedCoin(e.target.value);
                }}
              >
                {coinsOption}
              </select>
            </div>
                </div>   */}
                  {/* <div className="AssetsNetwork"> */}

                  <div
                    className="AssetsNetwork"
                    style={{ "text-align": "left" }}
                  >
                    <Form.Label>Assets</Form.Label>

                    <select
                      className="form-control withdrawSelect"
                      // name="select"
                      value={selectedCoin}
                      onChange={(e, index) => {
                        setSelectedCoin(e.target.value);
                        setTotalBalance();
                      }}
                    >
                      <div
                        className="walletIcon"
                        style={{ color: "white" }}
                      ></div>
                      {coinsOption}
                    </select>
                  </div>
                  {/* <div className="AssetsNetwork">
                  <Form.Label>Network</Form.Label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                  >
                    <Dropdown.Item href="#/action-1">BEP-20</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">INR-30</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">USD-40</Dropdown.Item>
                  </DropdownButton>
                </div> */}
                  <Button
                    onClick={() => {
                      acAddrss && copyText(acAddrss);
                    }}
                  >
                    Copy
                  </Button>
                  {/* <Button
                  // variant={"deposit"}
                  onClick={() => {
                    if (checkProvider()) {
                      setShowWithdrawption(true);
                      setRequest("Deposit");
                    }
                  }}
                >
                  Deposit Klay using Kaikas Wallet
                </Button> */}
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal
        className="ModalDeposit"
        // show={show}
        centered={true}
        // onHide={handleClose}
        show={showWithdrawption}
        onHide={() => {
          setShowWithdrawption(false);
          setWithdrawAmount("");
          setTxnWithdrawAdd("");
        }}
      >
        <Modal.Header closeButton>
          <h4>Withdraw</h4>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate>
            <Row>
              <Col lg={12}>
                <div className="DepositModal">
                  <div className="addres">
                    {request === "Withdraw" && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            label="Address"
                            placeholder=" Enter Address"
                            value={withdrawAdd}
                            onChange={(e) => setTxnWithdrawAdd(e.target.value)}
                          />
                        </Form.Group>
                        {!withdrawAdd && selectedCoin === "klay" && (
                          <p
                            className="connectWallet"
                            onClick={() => connectWithWallet()}
                          >
                            Withdraw to Kaikas wallet
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="AssetsNetwork">
                    <Form.Group className="mb-3">
                      <Form.Label>Assets</Form.Label>

                      <select
                        className="form-control withdrawSelect"
                        // name="select"
                        value={selectedCoin}
                        onChange={(e, index) => {
                          setSelectedCoin(e.target.value);
                          // setSelectedCoin(coinList[index]);
                        }}
                      >
                        {coinsOption}
                      </select>
                    </Form.Group>
                    {/* <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                  >
                    <Dropdown.Item href="#/action-1">
                      <img src={ether} alt="ether" /> BNB
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <img src={inrpric} alt="inrpric" /> INR
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <img src={ether} alt="ether" /> USD
                    </Dropdown.Item>
                  </DropdownButton> */}
                  </div>
                  {/* <div className="AssetsNetwork">
                  <Form.Label>Network</Form.Label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                  >
                    <Dropdown.Item href="#/action-1">BEP-20</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">INR-30</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">USD-40</Dropdown.Item>
                  </DropdownButton>
                </div> */}
                  <div className="balanceAmount">
                    <Form.Label className="amountBal">
                      Amount
                      {/* <span>INR</span> */}
                      <div className="wallet_view">
                        <div className="wallet_icon">
                          {/* {/* <a href="" onClick={(e) => gotoRoute(e, "/user/wallet")}> */}{" "}
                          {/* <img src={Wallet_icon} alt="icon" />  */}
                        </div>
                        <div className="walet_amount">
                          <span>Bal:{selectedCoinBalance}</span>
                          {""}
                          {/* <span className="crx"> (0 CRCX)</span> */}
                        </div>
                      </div>
                    </Form.Label>

                    {/* <Form.Control type="text" placeholder="Enter Amount" */}
                    <Form.Control
                      type="number"
                      label="Amount"
                      name="amount"
                      placeholder="Amount"
                      value={withdrawAmount}
                      min={0}
                      max="1"
                      onChange={
                        (e) => setWithdrawAmount(e.target.value)
                        // e.target.value.length < 6
                        //   ? setWithdrawAmount(e.target.value)
                        //   : ""
                      }
                      isInvalid={
                        withdrawAmount <= 0 ||
                        withdrawAmount > 10000 ||
                        withdrawAmount === ""
                          ? true
                          : false
                      }
                      required
                    />
                    {withdrawAmount && (
                      <Form.Control.Feedback type="invalid">
                        Please Enter valid amount! Minimum amount should be more
                        than 0 and Maximum is 10,000.
                      </Form.Control.Feedback>
                    )}
                  </div>

                  <div className="amountwithPres">
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        className="percentage"
                        onClick={() => calculatePercentage(25)}
                      >
                        25%
                      </Button>
                      <Button
                        className="percentage"
                        onClick={() => calculatePercentage(50)}
                      >
                        50%
                      </Button>
                      <Button
                        className="percentage"
                        onClick={() => calculatePercentage(75)}
                      >
                        75%
                      </Button>
                      <Button
                        className="percentage"
                        onClick={() => calculatePercentage(100)}
                      >
                        100%
                      </Button>
                    </ButtonGroup>
                  </div>

                  {/* <Button>send</Button> */}
                  <Button
                    disabled={!withdrawAmount || withdrawAmount < 0}
                    variant="primary"
                    onClick={() => {
                      request === "Withdraw"
                        ? withdrawRequest()
                        : depositeFormKaikas(withdrawAmount);
                    }}
                  >
                    Send
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal
        className="ModalDeposit"
        // show={show}
        centered={true}
        // onHide={handleClose}
        show={showResaleModal}
        onHide={() => {
          setShowResaleModal(false);
        }}
      >
        <Modal.Header closeButton>
          <h4>Resale</h4>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate>
            <Row>
              <Col lg={12}>
                <div className="DepositModal">
                  <div className="addres">
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>Resale Price</Form.Label>
                        <div>
                          <Form.Control
                            type="number"
                            label="price"
                            placeholder=" Enter Price"
                            value={resalePrice}
                            min={0}
                            max="1"
                            onChange={(e) => setResalePrice(e.target.value)}
                            isInvalid={resalePrice == "" ? true : false}
                            required
                          />
                          {resalePrice && (
                            <Form.Control.Feedback type="invalid">
                              Please Enter Price
                            </Form.Control.Feedback>
                          )}
                        </div>
                      </Form.Group>
                      {/* <Form.Group className="mb-3">
                          <Form.Label>Resale Currency</Form.Label>
                          <Form.Control
                            type="text"
                            label="currency"
                            placeholder=" Enter currency"
                            value={resaleCurrency}
                            onChange={(e) => setResaleCurrency(e.target.value)}
                          />
                        </Form.Group> */}
                      <Form.Group className="mb-3">
                        <Form.Label>Resale Currency</Form.Label>

                        <select
                          className="form-control withdrawSelect"
                          // name="select"
                          value={resaleCurrency}
                          onChange={(e, index) => {
                            setResaleCurrency(e.target.value);
                            // setSelectedCoin(coinList[index]);
                          }}
                        >
                          {/* {coinsOption} */}

                          <option value="USD" active={nftType === "USD"}>
                            USD
                          </option>
                          {/* <option value="ETH" active={nftType === "ETH"}>
                            ETH
                          </option>
                          <option value="INR" active={nftType === "INR"}>
                            INR
                          </option> */}
                        </select>
                      </Form.Group>
                    </>
                  </div>
                </div>
                .
                <Button
                  disabled={resalePrice < 0 || resalePrice == ""}
                  variant="primary"
                  onClick={() => addToResale()}
                >
                  submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
}

export default WalletNew;
