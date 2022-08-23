import React from "react";
import { Table } from "react-bootstrap";
import copy from "../../../../assets/images/copy.png";
import { TXN_URL_KLAYTN, TXN_URL_MATIC } from "../../../../constant";
import { calculateBal, noExponents } from "../../../../utils/utils";

export function TransactionTable({
  data,
  type,
  cancelApi,
  copyText,
  selectedCoin,
}) {
  console.log("selectedCoin-------->", selectedCoin);
  const txnList = data
    ? data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{calculateBal(item.amount)}</td>
            <td> {type == "Withdraw" ? item.to_address : item.address_from}</td>
            <td>
              {item.status === 0
                ? "PENDING"
                : item.status == 1
                ? "UNCONFIRMED"
                : item.status == 2
                ? "CONFIRMED"
                : item.status === 3
                ? "DECLINED"
                : item.status === 4
                ? "FAILED"
                : "PROCESSING"}
            </td>
            <td>
              {item.tx_id && (
                <div
                  style={{ flexDirection: "row", display: "flex" }}
                  title={item.tx_id}
                >
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        `${
                          selectedCoin == "klay"
                            ? TXN_URL_KLAYTN
                            : TXN_URL_MATIC
                        }` + item.tx_id
                      );
                    }}
                  >
                    {item.tx_id.substring(0, 10) + "..."}
                  </p>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      copyText(item.tx_id);
                    }}
                  >
                    <img className="copyImg" src={copy} />
                  </div>
                </div>
              )}
            </td>
            {/* {type == "Withdraw" && item.status === 0 && (
              <td>
                <div
                  onClick={() => {
                    cancelApi("Cancel");
                  }}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  Cancel
                </div>
              </td>
            )} */}
          </tr>
        );
      })
    : console.log("Nothing");

  return (
    <>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>Amount</th>
            <th>{type == "Withdraw" ? "To Address" : "From Address"}</th>
            <th>Status</th>
            <th>Txn ID</th>
            {/* {type === "Withdraw" && <th>Action</th>} */}
          </tr>
        </thead>
        <tbody>{txnList}</tbody>
      </Table>
    </>
  );
}
