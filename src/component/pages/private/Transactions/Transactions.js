import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { Layout, LayoutSidebar, LoaderAnimated } from "../../../common";
import "./Transactions.scss";
import WithdrLow from "../../../../assets/images/WithdrLow.svg";
import Dispoincr from "../../../../assets/images/Dispoincr.svg";
import ShowcasePagintion from "../../public/showcase/ShowcasePagintion";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { calculateBal, limitCharacters } from "../../../../utils/utils";
import moment from "moment";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { TXN_URL_MATIC } from "../../../../constant";
function Transactions() {
  const [hiddSidebar, setHiddSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [txnData, setTxnData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("matic");
  const [txnType, setTxnType] = useState("Withdraw");
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(10);

  const tableContent = [
    {
      title: "Withdraw",
      subtitle: "AC Token Price",
      acc: "0xd8e5d..efg",
      trans: "Failed",
      profi: "-0.689 ETH",
      img: WithdrLow,
    },
    {
      title: "Deposit",
      subtitle: "AC Token Price",
      acc: "0xd8e5d..efg",
      trans: "Success",
      profi: "+0.689 ETH",
      img: Dispoincr,
    },
    {
      title: "Withdraw",
      subtitle: "AC Token Price",
      acc: "0xd8e5d..efg",
      trans: "Failed",
      profi: "-0.689 ETH",
      img: WithdrLow,
    },
    {
      title: "Deposit",
      subtitle: "AC Token Price",
      acc: "0xd8e5d..efg",
      trans: "Success",
      profi: "+0.689 ETH",
      img: Dispoincr,
    },
    {
      title: "Deposit",
      subtitle: "AC Token Price",
      acc: "0xd8e5d..efg",
      trans: "Success",
      profi: "+0.689 ETH",
      img: Dispoincr,
    },
  ];

  useEffect(() => {
    //debugger;
    txnType === "Withdraw" ? getWithdrawTransaction() : getDepositTransaction();
  }, [txnType, page]);

  function getDepositTransaction() {
    setLoading(true);
    brandsApiCallGet(`wallet/${selectedCoin}/get_deposit_transactions/${page}`)
      .then((res) => {
        if (res) {
          console.log("RESS--->", res);
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
    setLoading(true);
    brandsApiCallGet(`wallet/${selectedCoin}/get_withdraw_transactions/${page}`)
      .then((res) => {
        if (res) {
          console.log("RESS--->", res);
          setTxnData(res.data);
          setTotalRecords(res.totalRecords);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  const handleSelect = (e) => {
    setTxnType(e.target.value);
    setPage(1);
  };
  return (
    <Container>
      <LoaderAnimated isLoading={loading} />
      <div className="MainViewNft">
        <h2>Transactions</h2>
        <div className="TableDetails">
          <Row>
            <Col xl={10} lg={10} md={12}>
              <div className="transFilter">
                <select className="withdrawSelect" onChange={handleSelect}>
                  <option value="Withdraw" active={txnType === "Withdraw"}>
                    Withdraw
                  </option>
                  <option value="Deposit" active={txnType === "Deposit"}>
                    Deposit
                  </option>
                </select>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Txn Id</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {txnData && txnData.length > 0 ? (
                  <tbody>
                    {txnData.map((item, idx) => (
                      <tr className={txnType === "Withdraw" ? "red" : "green"}>
                        <td style={{ textAlign: "left" }}>
                          <div className="DetailsImg">
                            <img  
                              className="WithdrLow"
                              src={
                                txnType == "Withdraw" ? WithdrLow : Dispoincr
                              }
                            />{" "}
                            <div className="Headings">
                              {txnType}
                              <p>
                                {" "}
                                <OverlayTrigger
                                  overlay={
                                    <Tooltip id="tooltip-disabled">
                                      {txnType == "Withdraw"
                                        ? item.to_address
                                        : item.address_from}
                                    </Tooltip>
                                  }
                                >
                                  <span className="d-inline-block">
                                    {txnType == "Withdraw"
                                      ? `To: ${limitCharacters(
                                          item.to_address,
                                          12
                                        )}`
                                      : `From: ${limitCharacters(
                                          item.address_from,
                                          12
                                        )}`}
                                  </span>
                                </OverlayTrigger>{" "}
                              </p>
                              {/* <p
                                title={
                                  txnType == "Withdraw"
                                    ? item.to_address
                                    : item.address_from
                                }
                              >
                                {txnType == "Withdraw"
                                  ? `To: ${limitCharacters(
                                      item.to_address,
                                      12
                                    )}`
                                  : `From: ${limitCharacters(
                                      item.address_from,
                                      12
                                    )}`}
                              </p> */}
                            </div>
                          </div>
                        </td>
                        <td>
                          {item.tx_id.length > 0 ? (
                            <p
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                window.open(`${TXN_URL_MATIC}` + item.tx_id);
                              }}
                            >
                              {item.tx_id.substring(0, 10) + "..."}
                            </p>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td>{calculateBal(item.amount)}</td>
                        <td>
                          {moment(item.updated_at).format(
                            "MMMM DD, YYYY hh:mm a"
                          )}
                        </td>
                        <td>
                          {item.status === 0
                            ? "PENDING"
                            : item.status == 1
                            ? "UNCONFIRMED"
                            : item.status == 2
                            ? "CONFIRMED"
                            : item.status === 3
                            ? "DECLINED"
                            : item.status == 4
                            ? "FAILED"
                            : "PROCESSING"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      {" "}
                      <td colSpan={4} style={{ textAlign: "center" }}>
                        No Transaction Yet
                      </td>{" "}
                    </tr>
                  </tbody>
                )}
              </Table>
              {txnData.length > 0 && (
                <ShowcasePagintion
                  limit={limit}
                  total={totalRecords}
                  nextPage={setPage}
                />
              )}
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Transactions;
