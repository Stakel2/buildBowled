import React, { useEffect, useState, useContext } from "react";
import {
  Banner,
  CardGallery,
  SubHeader,
  FilterBlock,
  Layout,
  LoaderAnimated,
  SliderRaffles,
  EventsBlock,
} from "../../../common";
import "./DropStyle.scss";

import { apiNftCallGet, apiNftCallPost } from "../../../../Axios/Nft";

import { context } from "../../../../Context/MainContext";
import { GetBanner, GetCollectionList } from "../../../Api/Actions";
import { Col, Container } from "react-bootstrap";
import ShowcasePagintion from "../showcase/ShowcasePagintion";
import banner from "../../../../assets/images/home/home_banner.jpg";
import LogoBanner from "../../../common/logoBanner/LogoBanner";

const Drop = () => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(15);
  const [pageNo, setPageNo] = useState(0);
  const [filterData, setFilterData] = useState(false);
  const { collectionData, dispatchCollectionData } = useContext(context);
  const { bannerData, dispatchBannerData } = useContext(context);
  const [bannerIdx, setBannerIdx] = useState(0);

  useEffect(() => {
    // if (!bannerData.rows.length) {
    //   setLoading(true);
    //   GetBanner({ setLoading, dispatchBannerData });
    // }
    // filterDropPage();
  }, []);

  const filterDropPage = (id) => {
    let newData = {
      filter: "all",
      limit: 10,
      page: 1,
    };
    apiNftCallPost("/filter", newData, {}, "toastOff")
      .then(async (res) => {
        let data = await res?.data;
        setFilterData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const nextPage = (pageNo) => {
    setPageNo(pageNo);
  };

  useEffect(() => {
    setLoading(true);
    apiNftCallGet(`/collections/list/${limit}/${pageNo}`, {}, "toastOff")
      .then(async (res) => {
        let data = await res?.data;
        if (data.rows.length) {
          await dispatchCollectionData({
            type: "collection",
            payload: { ...data },
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        // console.log("Getting collection error", err);
        setLoading(false);
      });
  }, [pageNo]);

  return (
    <Layout innerClass="drops_page">
      <LoaderAnimated isLoading={loading} />
      <Container fluid className="no-padding">
        <LogoBanner />
      </Container>
      {/* <FilterBlock title={"POPULAR DROPS"} /> */}
      {/* <Banner banners={bannerData.rows} setIdx={setBannerIdx} /> */}
      {/* {bannerData.rows.length ? (
        <SubHeader
          title={bannerData.rows[bannerIdx].title}
          subTitle={bannerData.rows[bannerIdx].subTitle}
          // like={bannerData.rows[bannerIdx].likes}
          // view={bannerData.rows[bannerIdx].views}
          // datePosted={Date.now() + 200000000}
          like=""
          view=""
          datePosted=""
        />
      ) : (
        ""
      )} */}
      <Container style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <CardGallery
          galleryTitle={"Today’s Pick"}
          gallery={collectionData?.rows}
          startItem={0}
          endItem={collectionData?.rows?.length}
          showCollect="false"
          limit={limit}
          total={collectionData?.count}
          nextPage={nextPage}
        />
      </Container>
      <Container>
        <SliderRaffles />
        <EventsBlock />
      </Container>
    </Layout>
  );
};

export default Drop;
