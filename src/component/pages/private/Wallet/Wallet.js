import React, { useState, useEffect } from "react";
import {
  Layout,
  AddSocialLinks,
  HeadingEditPage,
  LoaderAnimated,
} from "../../../common";
import "./WalletStyle.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import Select from "../../../common/select/Select";
import QRCode from "react-qr-code";
import { brandsApiCallGet, brandsApiCallPost } from "../../../../Axios/Brands";
import { toasts } from "../../../common/Toast/Toast";
import { TransactionTable } from "./TransactionTable";
import ShowcasePagintion from "../../public/showcase/ShowcasePagintion";
import copy from "../../../../assets/images/copy.png";
import {
  calculateBal,
  noExponents,
  jwtEncrypt,
  encrypt,
} from "../../../../utils/utils";
import {
  checkProvider,
  depositTransaction,
  initKaikas,
  withdrawToKaikas,
} from "../../../../WalletClients/KaikasClient";
import { IMGKLAYTN, IMGPOLYGON } from "../../../../constant";
const Wallet = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedCoin, setSelectedCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState();
  const [royalty, setRoyalty] = useState("00.00");
  const [balance, setBalance] = useState("00.00");
  const [acAddrss, setACAddress] = useState();
  const [txnData, setTxnData] = useState([]);
  const [txnType, setTxnType] = useState("Deposit");
  const [totalRecords, setTotalRecords] = useState(0);
  // const [withdrawAmount, setWithdrawAmount] = useState(0.1);
  // const [withdrawAdd, setTxnWithdrawAdd] = useState("0x5C875AAF0D05ee627ACc2cF7C1454546df86c9c3");
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [withdrawAdd, setTxnWithdrawAdd] = useState("");
  // const[limit,setLimit]=useState(2)
  const [showWithdrawption, setShowWithdrawption] = useState(false);
  const [request, setRequest] = useState("");
  const addressReduced = acAddrss ? acAddrss.slice(0, 4) : "";
  const addressReducedLast = acAddrss ? acAddrss.slice(-4) : "";

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
  function getBalance() {
    setLoading(true);
    brandsApiCallGet(`wallet/${selectedCoin}/get_balance`)
      .then((res) => {
        if (res) {
          setBalance(calculateBal(res.data[0].balance));
          setACAddress(res.data[0].address);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

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
    // let encryptData = await encrypt(data);
    // let newData = {
    //   encrypted_data: encryptData,
    // };
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
    toasts.success("Copied Successfully!");
    return navigator.clipboard.writeText(text);
  };
  console.log("first lajsdflkas ", totalRecords);
  const coinsOption =
    coins &&
    coins.map((item) => {
      return (
        <option key={item.value} value={item}>
          {item == "matic" ? "MATIC" : item.toUpperCase()}
        </option>
      );
    });

  const withdrawModal = (
    <Modal
      show={showWithdrawption}
      onHide={() => {
        setShowWithdrawption(false);
        setWithdrawAmount("");
        setTxnWithdrawAdd("");
      }}
      centered
      className="dark"
    >       
      <Modal.Header closeButton>
        <Modal.Title>{request} Request</Modal.Title>
      </Modal.Header>
      <Modal.Body className="widthdraw_deposit_req">
        <div>
          <Form noValidate>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  Amount (
                  {selectedCoin &&
                    selectedCoin.charAt(0).toUpperCase() +
                      selectedCoin.slice(1)}
                  )
                </Form.Label>
                <Form.Control
                  type="number"
                  label="Amount"
                  name="amount"
                  placeholder="Amount"
                  value={withdrawAmount}
                  min={0.1}
                  max="1"
                  onChange={
                    (e) => setWithdrawAmount(e.target.value)
                    // e.target.value.length < 6
                    //   ? setWithdrawAmount(e.target.value)
                    //   : ""
                  }
                  isInvalid={
                    withdrawAmount < 0.1 ||
                    // withdrawAmount > 10000 ||
                    withdrawAmount === ""
                      ? true
                      : false
                  }
                  required
                />
                {withdrawAmount && (
                  <Form.Control.Feedback type="invalid">
                    Please Enter valid amount! Minimum amount is 0.1 and Maximum
                    is 10,000.
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              {request === "Withdraw" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      label="Address"
                      placeholder="Address"
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
            </Row>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-reverse"
          onClick={() => {
            setShowWithdrawption(false);
            setWithdrawAmount("");
            setTxnWithdrawAdd("");
          }}
        >
          <span>Close</span>
        </Button>
        <Button
          disabled={!withdrawAmount || withdrawAmount < 0.1}
          variant="primary"
          onClick={() => {
            request === "Withdraw"
              ? withdrawRequest()
              : depositeFormKaikas(withdrawAmount);
          }}
        >
          {request}
        </Button>
      </Modal.Footer>
    </Modal>
  );

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
            getBalance();
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  const connectWithWallet = () => {
    withdrawToKaikas(setTxnWithdrawAdd, "connect", setLoading).then((res) => {
      setTxnWithdrawAdd(res);
    });
  };
  return (
    <div innerClass="editProfile_layout">
      <LoaderAnimated isLoading={loading} />
      <HeadingEditPage className="wrap_heading" title={"WALLET"} />
      <Container>
        <Row className="main_containerbal">
          <Col className="wallet_bal_container">
            <div className="lable">Balance</div>
            <h3 className="balance">{balance}</h3>
            <br />

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
            <Col className="margin_top_btm wallet_button_section">
              {/* <Button variant={ "outline-primary"} onClick={ () => {
                    setTxnType("Dep")
                  }}>Deposit</Button> */}

              <span> </span>
              {selectedCoin === "klay" && (
                <Button
                  variant={"deposit"}
                  onClick={() => {
                    if (checkProvider()) {
                      setShowWithdrawption(true);
                      setRequest("Deposit");
                    }
                  }}
                >
                  Deposit Klay using Kaikas Wallet
                </Button>
              )}
              <Button
                variant={"withdraw"}
                onClick={() => {
                  // withdrawRequest()
                  setShowWithdrawption(true);
                  setRequest("Withdraw");
                }}
              >
                Withdraw
              </Button>

              {/* <Button variant={ txnType == "Dep" ? "outline-primary" :"outline-secondary"} onClick={ () => {
                    setTxnType("Dep")
                  }}>Deposit</Button>

                  <span> </span>

                  <Button variant={ txnType == "Wid" ? "outline-primary" :"outline-secondary"} onClick={ () => {
                    setTxnType("Wid")
                  }}>Withdraw</Button> */}
            </Col>
            {/* <Col>
              <div className="lable">Royalty</div>
              <h3 className="balance">{royalty}</h3>
            </Col> */}
          </Col>
          <Row className="wallet_address_container">
            <Row>
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
              </div>
              {/* {selectedCoin === "klay" && (
                <div className="kaikasWalletButton">
                  OR
                  <div style={{ marginTop: "5px" }}>
                    <Button
                      style={{ marginLeft: "10px" }}
                      variant={"outline-secondary"}
                      onClick={() => {
                        if (checkProvider()) {
                          setShowWithdrawption(true);
                          setRequest("Deposit");
                        }
                      }}
                    >
                      Deposit Klay using Kaikas Wallet
                    </Button>
                  </div>
                </div>
              )} */}
            </Row>
          </Row>
        </Row>

        <div className="balance margin_top50 row">Transaction</div>
        <div className="mt-4 row btns-transaction">
          <ButtonGroup
            size="lg"
            className="transactions_button"
            onClick={(e) => {
              setTxnType(e.target.value);
              setPage(1);
            }}
          >
            <Button
              className="btn btn-secondary btn-left"
              value="Deposit"
              active={txnType == "Deposit" ? true : false}
            >
              Deposit
            </Button>
            <Button
              className="btn btn-secondary btn-right"
              value="Withdraw"
              active={txnType == "Withdraw" ? true : false}
            >
              Withdraw
            </Button>
            {/* <Button className="btn btn-secondary" value="Roylty"
              active={ txnType=="Roylty" ? true :false }
              >
                Roylty
              </Button> */}
          </ButtonGroup>
        </div>
        <div></div>
        <Row className="main_containerbal">
          {txnData && txnData.length > 0 ? (
            <div>
              <Row>
                <TransactionTable
                  data={txnData}
                  type={txnType}
                  cancelApi={cancelTxn}
                  copyText={copyText}
                  selectedCoin={selectedCoin}
                />

                <div className="display: inline-block margin_top50">
                  <ShowcasePagintion
                    limit={10}
                    total={totalRecords}
                    nextPage={nextPage}
                  />
                  {/* )}  */}
                </div>
              </Row>
            </div>
          ) : (
            <div className="balance margin_top50 margin_left_right_auto">
              No Transaction
            </div>
          )}
        </Row>

        {withdrawModal}
      </Container>
    </div>
  );
};

export default Wallet;
