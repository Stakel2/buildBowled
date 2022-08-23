import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./BreadcrumbCustom.scss";

const BreadcrumbCustom = ({ raffleName }) => {
  return (
    <Breadcrumb className="brdcum_Style">
      <Breadcrumb.Item href="/raffles">All Raffles</Breadcrumb.Item>
      <Breadcrumb.Item active>{raffleName}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbCustom;
