import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { Row } from "react-bootstrap";

const ShowcasePagintion = (props) => {
  const [active, setActive] = useState(1);

  useEffect(() => {

    props.nextPage(active);
  }, [active]);

  return (
    <Row style={{ border: "0px" }}>
      <Pagination
        className="paginationStyle"
        activePage={props.activePage ? props.activePage : active}
        itemsCountPerPage={props?.limit}
        totalItemsCount={props?.total}
        pageRangeDisplayed={5}
        onChange={(e) => {
          setActive(e);
        }}
      />
    </Row>
  );
};

export default ShowcasePagintion;
