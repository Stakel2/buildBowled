import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import { CardFeaturedNft, CardNft, LoaderAnimated } from "../../../common";
import KWcard from "../../../../assets/market/images/cards/card-1.png";
import "./MarketplaceAll.scss";
import MarketSidebar from "./MarketSidebar";
import MarketPlaceAllHeader from "./MarketPlaceAllHeader";
import { context } from "../../../../Context/MainContext";
import { apiNftCallGet, apiNftCallPost } from "../../../../Axios/Nft";
import { useNavigate } from "react-router-dom";
import ShowcasePagintion from "../../public/showcase/ShowcasePagintion";
import { userApiCallPost } from "../../../../Axios/User";

const MarketplaceAll = (props) => {
  const navigate = useNavigate();
  const { userLocation } = useContext(context);
  const [nftList, setNftList] = useState([]);
  const [filterData, setFilterData] = useState();
  const [filtersData, setFiltersData] = useState();
  const [listCount, setListCount] = useState();
  const [mobileFilter, setMobileFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(12);
  const [totalRecords, setTotalRecords] = useState(0);
  const [filterPayload, setFilterPayload] = useState({
    cardType: "",
    rarity: "",
    country: "",
    nftIds: "",
    mintType: "",
    session: "",
    rangeFrom: "",
    rangeTo: "",
    orderBy: "",
    fileType: "",
    nftType: "",
    Collection: "",
    blockChainName: "",
  });

  const setFilterPayloaddata = (data) => {
    // debugger;

    setFilterPayload(data);
    setPage(1);
    nftFilterr(data);
  };

  useEffect(() => {
    nftFilterr(filterPayload, page);
  }, [page, userLocation, filterPayload]);

  useEffect(() => {
    nftFilterData();
  }, []);
  function getNFT() {
    setLoading(true);
    apiNftCallGet(`/featurednft/${limit}/${page}/desc?location=IN`)
      .then(async (res) => {
        setLoading(false);
        if (res.error) {
          navigate("/404");
        } else {
          setNftList(res?.data?.rows);
          setTotalRecords(res?.data?.count);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  console.log("DATA", filterPayload);

  const nftFilterData = () => {
    setLoading(true);

    apiNftCallGet(`/nftfiltersData`)
      .then(async (res) => {
        setLoading(false);
        if (res.error) {
          navigate("/404");
        } else {
          console.log("KANIKA", res);
          setFilterData(res?.data);
          // setTotalRecords(res?.data?.count);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const nftFilterr = (data) => {
    setLoading(true);
    apiNftCallPost(`/nft_filter/${limit}/${page}`, data, {})
      .then(async (res) => {
        setLoading(false);
        if (res.error) {
        } else {
          console.log("KANIKA1", res);
          setNftList(res?.data);
          setTotalRecords(res?.count);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  console.log("filterDataa", nftList);

  useLayoutEffect(() => {
    const setAllCount = () => {
      const windWidth = window.innerWidth;
      if (windWidth <= 900) {
        setListCount(2);
      } else {
        setListCount(6);
      }
    };

    window.addEventListener("resize", (e) => {
      setAllCount();
    });
    setAllCount();
  }, [listCount]);

  const filterHandler = () => {
    setMobileFilter(!mobileFilter);
  };

  return (
    <>
      <LoaderAnimated isLoading={loading} />
      <Container className="wrap_allMkt">
        <MarketPlaceAllHeader
          title="New Cards"
          onClick={() => filterHandler()}
          filterText={`${mobileFilter ? "Hide Filter" : "Show Filter"}`}
          filterData={filterData}
          filterPayload={filterPayload}
          setFilterPayload={setFilterPayloaddata}
        />
        <Row className="wrap_mktnew">
          <MarketSidebar
            sidebarMobile={`${mobileFilter && "showFilter"}`}
            filterData={filterData}
            setFilterPayload={setFilterPayloaddata}
            filterPayload={filterPayload}
          />

          <Col className="mkt_allList">
            {nftList.length === 0 ? (
              <h3 className="no_rec">No Record Found</h3>
            ) : (
              <Row>
                {nftList.map((item, index) => (
                  <Col xs={12} md={6} lg={4} xl={4} xxl={3} 
                  className="mb-4">
                    {" "}
                    <CardFeaturedNft
                      {...item}
                      nftIndex={index + 1}
                      totalNft={nftList.length}
                      btnVariant="outline-secondary"
                      btntext="BUY"
                      btntexxt="Sold"
                    />{" "}
                  </Col>
                ))}
                {/* {Array.from({ length: listCount }).map((_, index) => (
                <Col xs={12} lg={3}>
                  <CardNft
                    cardImage={KWcard}
                    pricevalue={"2.45"}
                    dd={"1"}
                    hh={"12"}
                    mm={"33"}
                    bid={"12"}
                    btnVariant="outline-primary"
                    btntext={"BID"}
                    btnLink="/"
                    onClick={() => alert("button")}
                  />
                </Col>
              ))} */}
              </Row>
            )}
            <Row className="marketPagination">
              <Col>
                {nftList.length > 0 && (
                  <ShowcasePagintion
                    limit={limit}
                    total={totalRecords}
                    nextPage={setPage}
                  />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MarketplaceAll;
