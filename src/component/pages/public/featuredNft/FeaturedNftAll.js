import React, { useEffect, useState, useContext } from "react";
import {
  CardFeaturedNftOld,
  EventsBlock,
  HeadingEditPage,
  Layout,
  LoaderAnimated,
  SliderRaffles,
} from "../../../common";
import { useNavigate } from "react-router-dom";
import LayoutCard from "../../../common/layout/LayoutCard";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import banner from "../../../../assets/images/home/home_banner.jpg";
import ShowcasePagintion from "../showcase/ShowcasePagintion";
import { apiNftCallGet } from "../../../../Axios/Nft";
import { context } from "../../../../Context/MainContext";
import LogoBanner from "../../../common/logoBanner/LogoBanner";

const FeaturedNftAll = () => {
  const navigate = useNavigate();

  const [nftList, setNftList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { userLocation } = useContext(context);

  useEffect(() => {
     nftFilter();
  }, [page, userLocation]);


  function nftFilter() {
    setLoading(true);

    apiNftCallGet(`/featurednft/${limit}/${page}/desc?location=IN`)
      .then(async (res) => {
        if (res.error) {
          navigate("/404");
        } else {
          setNftList(res?.data?.rows);
          setTotalRecords(res?.data?.count);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }
 
  return (
    <>
      <LoaderAnimated isLoading={loading} />

      <Container fluid className="mainBannerStyle"></Container>
      <HeadingEditPage title={"Featured NFT's"} />
      <Container className="artistBrand_section mb-3">
        <Row className="featured_all">
          {nftList.map((item, index) => (
            <Col sm={3} key={index} className="featuredNFT_class">
              <CardFeaturedNftOld
                {...item}
                nftIndex={index + 1}
                totalNft={nftList.length}
              />
            </Col>
          ))}
        </Row>
        <Col className="text-end">
          {totalRecords > limit && (
            <ShowcasePagintion
              limit={limit}
              total={totalRecords}
              nextPage={setPage}
            />
          )}
        </Col>
      </Container>
    </>
  );
};

export default FeaturedNftAll;
