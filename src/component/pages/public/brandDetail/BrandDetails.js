import React, { useEffect, useContext, useState } from "react";
import {
  CardArtist,
  CardGallery,
  DetailsCTA,
  Layout,
  ListGateway,
  ListNFTDetails,
  LoaderAnimated,
  SliderRaffles,
  SubHeaderProfile,
  SubscribeForm,
} from "../../../common";
import "../drop/DropStyle.scss";
import "./BrandDetailStyle.scss";
import { apiNftCallGet } from "../../../../Axios/Nft";
import { context } from "../../../../Context/MainContext";
import { Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import FeaturedDrops from "../home/FeaturedDrops";
import FeaturedNFT from "../home/FeaturedNFT";

const NFTDetailsList = [
  {
    title: "Items",
    value: "24.2K",
  },
  {
    title: "Owners",
    value: "42.2K",
  },
  {
    title: "Floor Price",
    value: "89",
  },
  {
    title: "Volume Traded",
    value: "265.7K",
  },
];

const BrandDetails = () => {
  const { collectionData, dispatchCollectionData } = useContext(context);
  const params = useParams();
  const [brands, setBrands] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [totalRecords, setTotalRecords] = useState(0);
  const [brandArtistList, setBrandArtistList] = useState([]);
  const [collectionList, setCollectionList] = useState([]);
  const [collectionTotal, setCollectionTotal] = useState(0);
  const [collectionPage, setCollectionPage] = useState(1);
  const [collectionLimit, setCollectionLimit] = useState(9);
  const [isLoading, setLoading] = useState(false);

  /* Fetch brand's details*/
  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(`brand/api/v1/${params.brandId}`)
      .then((res) => {
        if (res) {
          setLoading(false);
          setBrands(res);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    getBrandArtists();
  }, [page]);

  /* Fetch brand's Artist*/
  const getBrandArtists = () => {
    setLoading(true);
    brandsApiCallGet(`/brand/api/v1/artist/${params.brandId}/${limit}/${page}`)
      .then((res) => {
        if (res) {
          setBrandArtistList(res.data.rows);
          setTotalRecords(res.data.count);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  /* Fetch brand's collection*/
  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(
      `nft/api/v1/collections/owner/${params.brandId}/${collectionLimit}/${collectionPage}`
    )
      .then((res) => {
        if (res) {
          setLoading(false);
          setCollectionList(res?.data?.rows);
          setCollectionTotal(res?.data?.count);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    if (!collectionData?.rows?.length) {
      // GetCollectionList({
      //   setLoading,
      //   dispatchCollectionData,
      //   limit: -1,
      //   pageNo: 0,
      // });
      getCollectionList();
    }
  }, [collectionPage]);

  const getCollectionList = () => {
    setLoading(true);
    apiNftCallGet(`/collections/list/${-1}/${0}`, {}, "toastOff")
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
        setLoading(false);
      });
  };
  console.log("brands", brands);
  return (
    <Layout innerClass="art_wrap">
      <LoaderAnimated isLoading={isLoading} />
      <a href ={brands?.data?.coverLink} target="_blank">
        <Container className="noPadding banner_micrositeMain">
          <img
            className="img-fluid"
            src={`${brands?.data?.coverImage}?tr=w-1920,h-726`}
          />
        </Container>
      </a>
      <SubHeaderProfile
        profileimg={brands?.data?.profileImage}
        title={brands?.data?.title}
        subtitle={brands?.data?.description}
      />
      {brands?.details && <ListNFTDetails NFTDETAILS={brands?.details} />}

      <DetailsCTA linkPaidMemeber="" liveStream="" basicLevelMembership="" />

      {brandArtistList.length === 0 && collectionList.length === 0 ? (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            innerHeight: "300px",
            fontWeight: 800,
            fontSize: "30px",
            marginTop: "100px",
            color: "#747474",
          }}
        >
          Coming soon
        </div>
      ) : (
        <>
          {collectionList.length !== 0 && (
            <Col style={{ marginTop: "100px" }}>
              <CardGallery
                galleryTitle={`Brand's Collection`}
                gallery={collectionList}
                startItem={0}
                endItem={collectionList?.length}
                showCollect="false"
                limit={collectionLimit}
                total={collectionTotal}
                nextPage={setCollectionPage}
              />
            </Col>
          )}
          {brandArtistList.length !== 0 && (
            <Col className="brandArtist_BlockStyle">
              <h2
                className="sub-title"
                style={{ textAlign: "center" }}
              >{`${brands?.data?.title} Artist`}</h2>
              <CardArtist
                artists={brandArtistList}
                limit={limit}
                totalRecords={totalRecords}
                setPage={nextPage}
              />
            </Col>
          )}
        </>
      )}

      <SliderRaffles />
      <ListGateway />
    </Layout>
  );
};

export default BrandDetails;
