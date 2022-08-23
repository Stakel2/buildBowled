import React, { useState } from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FilterBlockStyle.scss";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

import icon_filter_open from "../../../assets/images/icon_filter_show.svg";
import icon_filter_close from "../../../assets/images/icon_filter_show.svg";
import PriceFilter from "./PriceFilter";
import SearchBarFilter from "./SearchBarFilter";

const FilterBlock = (props) => {
  const [showfilter, setSshowfilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);

  const tagsOptions = [
    { key: "Tag", value: "" },
    { key: "Option 2", value: "Option 2" },
    { key: "Option 3", value: "Option 3" },
    { key: "Option 4", value: "Option 4" },
  ];



  const initialValues = {
    tag: "",
    fileType: "",
    artCategory: "",
    miniRate: "",
    startDate: null,
    endDate: null,
    selectRange: [],
  };

  const validationSchema = Yup.object({
    tag: Yup.string().required("Required"),
    fileType: Yup.string().required("Required"),
    artCategory: Yup.string().required("Required"),
    minRate: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
    endDate: Yup.date().required("Required").nullable(),
    selectRange: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    // console.log('Form', values)
  };

  const fliterHandler = () => {
      setSshowfilter(!showfilter)
  }

  return (
    <Container className={`filter-row-style`}>
      <Container>
        <Row className="filterHeader">
          <SearchBarFilter />
          <Col className="fd_link">
            <button className="filterButton_style" onClick={() => fliterHandler()}>
              <img src={showfilter ? icon_filter_close : icon_filter_open} />
            </button>
          </Col>
        </Row>
      </Container>
      <Container className={`filter_wrap ${ showfilter ? "" : "hideBlock"}`}>
        <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Status</Accordion.Header>
            <Accordion.Body className="filter_status">
              <Row>
                {["Buy Now", "On Auction", "New", "Has Offers"].map(
                  (item, index) => {
                    console.log("filter Button ==>", filterStatus);
                    return (
                      <Col xs={12} lg={6}>
                        <Button
                          key={index}
                          variant="filter"
                          className={filterStatus === index ? "isActive" : ""}
                          onClick={(e) => setFilterStatus(index)}
                        >
                          <span>{item}</span>
                        </Button>
                      </Col>
                    );
                  }
                )}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
              <PriceFilter />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Collections</Accordion.Header>
            <Accordion.Body>
              <p className="text-center">Collections</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Chains</Accordion.Header>
            <Accordion.Body>
              <p className="text-center">Chains</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Categories</Accordion.Header>
            <Accordion.Body>
              <p className="text-center">Categories</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>On Sale In</Accordion.Header>
            <Accordion.Body>
              <p className="text-center">On Sale In</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};

export { FilterBlock };
