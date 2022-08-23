import React, { useState } from "react";
import { Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

const MarketPlaceAllHeader = (props) => {
  const [selectValue, setSelectValue] = useState(" Select");
  const { filterList, filterPayload, setFilterPayload, title } = props;

  const valueOption = props.filterData?.orderBy.map((item, idx) => {
    return (
      <option key={idx} value={item.value}>
        {item.label}
      </option>
    );
  });

  const abc = (value) => {
    let newState = Object.assign({}, filterPayload);
    newState.orderBy = value;
    setFilterPayload(newState);
    setSelectValue(value);
  };

  console.log("first", selectValue);

  return (
    <Row className="mkp_headerStyle">
      <Col className="mkp_hdr_left">
        <button className="mkt_title_button_style"> {props.title} </button>
      </Col>
      <Col className="mkp_hdr_right">
        <div className="AssetsNetworkas">
          <h4 style={{ color: "white" }}> Filter</h4>
          <select
            className="form-control withdrawSelect"
            value={selectValue}
            onChange={(e) => abc(e.target.value)}
          >
            <div className="walletIcon" style={{ color: "white" }}></div>
            {valueOption}
          </select>
        </div>
        <button onClick={props.onClick} className="mFilter">
          {props.filterText}
        </button>
      </Col>
    </Row>
  );
};

export default MarketPlaceAllHeader;
