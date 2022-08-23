import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { LoaderAnimated } from "../../../common/Loader/LoaderAnimated";
import { CardFeatured } from "../../../common/";
import ShowcasePagintion from "./ShowcasePagintion";

const ShowcaseBrand = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [brandsList, setBrandsList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(`brand/api/v1/${limit}/${page}`)
      .then((res) => {
        if (res) {
          let list = res.data.details;
          // let featuredList = list.filter((val) => val.isFeatured === 1);
          setBrandsList(list);
          setTotalRecords(res.data.totalRecords)
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [page]);

  console.log("showcase brand ++++++++", brandsList);

  return brandsList?.length > 0 ? (
    <Container className="showcase_list_style">
      <Row>
        {brandsList?.map((item) => (
          <Col className="showcasepage_item" xs={12} lg={3}>
            <CardFeatured
              key={item?.brandId}
              onClick={() => navigate(`/brand-detail/${item?.brandId}`)}
              profileimg={item?.profileImage}
              // alt={artist?.atristname}
              featured_banner_img={item?.showCase}
              title={item?.title.substring(0, 20)}
              // subtitle={}
              description={`${item?.description?.substring(0, 80)}...`}
            />
          </Col>
        ))}
      </Row>
      <Col className="text-end">
          {totalRecords > 16 && (
            <ShowcasePagintion
              limit={limit}
              total={totalRecords}
              nextPage={setPage}
            />
          )}
        </Col>
    </Container>
  ) : (
    <Row>
      <Col>
        <p className="text-center" style={{ color: "#848484" }}>
          No Brand Found
        </p>
      </Col>
    </Row>
  );
};

export default ShowcaseBrand;
