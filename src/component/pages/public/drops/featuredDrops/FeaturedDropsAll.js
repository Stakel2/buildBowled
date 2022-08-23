import React, { useEffect, useState, useContext } from "react";
import {
  CardFeaturedNft,
  EventsBlock,
  HeadingEditPage,
  Layout,
  LoaderAnimated,
  SliderRaffles,
  CardGallery,
  CardDrops,
} from "../../../../common";
import { useNavigate } from "react-router-dom";
import LayoutCard from "../../../../common/layout/LayoutCard";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import banner from "../../../../../assets/images/home/home_banner.jpg";
import ShowcasePagintion from "../../showcase/ShowcasePagintion";

import { apiNftCallGet } from "../../../../../Axios/Nft";
import { limitCharacters } from "../../../../../utils/utils";
import "./FeaturedDropsAllStyle.scss";
import LogoBanner from "../../../../common/logoBanner/LogoBanner";

const FeaturedDropsAll = () => {
  const navigate = useNavigate();

  const [collectionData, setCollectionData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCollectionList();
  }, [page]);

  const nextPage = (pageNo) => {
    //nftCollectionData(pageNo);
    setPage(pageNo);
  };

  const getCollectionList = () => {
    setLoading(true);
    apiNftCallGet(
      `/collections/featured/collection/${limit}/${page}/desc`,
      {},
      "toastOff"
    )
      .then(async (res) => {
        let data = await res?.data;
        setCollectionData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const clickedInDrop = (e, id) => {
    navigate("/drops/" + id);
  };

  console.log("collectionData", collectionData);

  return (
    <Layout innerClass="showCaseLayout">
      <LoaderAnimated isLoading={loading} />

      <Container fluid className="mainBannerStyle">
        <LogoBanner />
      </Container>
      <HeadingEditPage title={"Featured Drops"} />
      <Container className="artistBrand_section ">
        <Row className="featured_all">
          {collectionData?.rows?.map((gitem, index) => (
            <CardDrops
              key={index}
              onClick={(e) => clickedInDrop(e, gitem?.collectionId)}
              dropImg={`${gitem?.logo}?tr=w-524,h-524`}
              titletag={gitem.name}
              title={limitCharacters(gitem.name, 20)}
              subTitle={gitem.brandName}
              desc={`${gitem.description.slice(0, 35)}...`}
              status={"Live"}
              timeTitle={"Ending in"}
              cardDrop_style="featuredCardStyle"
            />
          ))}
        </Row>
        <Col className="text-end">
          {collectionData?.count > limit && (
            <ShowcasePagintion
              limit={limit}
              total={collectionData?.count}
              nextPage={setPage}
            />
          )}
        </Col>
      </Container>

      <SliderRaffles />
      <EventsBlock />
    </Layout>
  );
};

export default FeaturedDropsAll;
