import React, { useEffect, useState, useContext } from "react";
import { FilterBlock, Layout, LoaderAnimated } from "../../../common";
import "./DropStyle.scss";

import Loader from "../../../common/Loader/index";
import { context } from "../../../../Context/MainContext";
import { useLocation, useParams } from "react-router-dom";
import { apiNftCallGet } from "../../../../Axios/Nft";
import { Col, Row } from "react-bootstrap";

const DropDetails = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    getDropDetail(params?.id);
  }, []);

  const getDropDetail = (id) => {
    apiNftCallGet(`/collections/` + id, {}, "toastOff")
      .then(async (res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <Layout>
      {/* <Loader isLoading={loading} /> */}
      <LoaderAnimated isLoading={loading} />

      <FilterBlock title={"Drops"} />

      <Row>
        <Col>
          {" "}
          <h1>works</h1>
        </Col>
      </Row>
    </Layout>
  );
};

export default DropDetails;
