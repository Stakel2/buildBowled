import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import playButtonImg from "../../../assets/images/play-button-icon.png";
import "./TicketHistoryTable.scss";

const TicketHistoryTable = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const nftRowHandler = (id) => {
   // navigate(`/product-detail/${id}`);
  };
  return (
    <div className="tktHistory_table">
      <Table responsive="lg">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>NFT Name</th>
            <th>Username</th>
            <th>Ticket Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 && (
            data?.map((item, index) => {
              return (
                <tr key={index} onClick={() => nftRowHandler(item.nftId)}>
                  <td>{index + 1}</td>
                  <td>
                    {item.nftType === "video" ? (
                      <img src={playButtonImg} className="userImg"></img>
                    ) : (
                      <img src={item.nftImage} className="userImg" />
                    )}
                    {item.title}
                  </td>
                  <td>{item.owner}</td>
                  <td>{item.raffleTicketId}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TicketHistoryTable;
