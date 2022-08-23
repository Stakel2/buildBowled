import React, { useState } from "react";
import { Layout, HeadingEditPage } from "../../../common";
import "./ManageWalletStyle.scss";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import ModalReceiveAssets from "./ModalReceiveAssets";
import ModalAddAssetWithCard from "./ModalAddAssetWithCard";

const ASSETSLIST = [
  {
    asset: "ETH",
    price: "$2,000",
    allocation: "50%",
    amount: "2.5",
    value: "$5,000",
  },
  {
    asset: "BTC",
    price: "$30,000",
    allocation: "50%",
    amount: "0.166667",
    value: "$5,000",
  },
  {
    asset: "ETH",
    price: "$2,000",
    allocation: "50%",
    amount: "2.5",
    value: "$5,000",
  },
  {
    asset: "BTC",
    price: "$30,000",
    allocation: "50%",
    amount: "0.166667",
    value: "$5,000",
  },
  {
    asset: "ETH",
    price: "$2,000",
    allocation: "50%",
    amount: "2.5",
    value: "$5,000",
  },
  {
    asset: "BTC",
    price: "$30,000",
    allocation: "50%",
    amount: "0.166667",
    value: "$5,000",
  },
  {
    asset: "ETH",
    price: "$2,000",
    allocation: "50%",
    amount: "2.5",
    value: "$5,000",
  },
];

const ManageWallet = () => {
  const [showReceiveAssetModal, setShowReceiveAssetModal] = useState(false);
  const [showAddAssetModal, setShowAddAssetModal] = useState(true);

  const handleClose = () => {
    setShowReceiveAssetModal(false);
  };

  const addAssetHandleClose = () => {
    setShowAddAssetModal(false);
  };
  return (
    <Layout innerClass="editProfile_layout">
      <HeadingEditPage title={"MANAGE YOUR WALLET"} />
      <Container className="editContainerStyle">
        <Row className="manageWallet">
          <Col className="manageWallet_left">
            <h4>NAME</h4>
            <p className="manageWallet_left_address_text_style">
              Address: 0000….0000
            </p>
            <h5>Total Assest</h5>
            <p className="manageWallet_left_total_asset_style">≈ 1000.00 USD</p>
          </Col>
          <Col className="manageWallet_right">
            <h4>Add money to your wallet</h4>
            <Button
              onClick={() => setShowReceiveAssetModal(true)}
              className="full_width receiveAsset"
            >
              RECEIVE ASSET
            </Button>
            <Button
              onClick={() => setShowAddAssetModal(true)}
              className="full_width addAssets"
            >
              Add asset with credit card
            </Button>
            <p className="back_btns">
              <a className="back_to_myAccount" href="#">
                Back to My Account
              </a>
            </p>
          </Col>
        </Row>

        <Row className="assets_table">
          <Col lg={12} className="assets_table_header">
            <h2>Assets</h2>
          </Col>
          <Col>
            <Table responsive hover className="assetTableStyle">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Price</th>
                  <th>Allocation</th>
                  <th>Amount</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {ASSETSLIST.map((item, index) => (
                  <tr key={index}>
                    <td>{item.asset}</td>
                    <td>{item.price}</td>
                    <td>{item.allocation}</td>
                    <td>
                      {item.amount} {item.asset}
                    </td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <ModalReceiveAssets show={showReceiveAssetModal} onHide={handleClose} />
        <ModalAddAssetWithCard
          show={showAddAssetModal}
          onHide={addAssetHandleClose}
        />
      </Container>
    </Layout>
  );
};

export default ManageWallet;
