import React, { useEffect, useContext, useState } from "react";
import {
  Layout,
  SubHeaderProfile,
  LoaderAnimated,
  CardGallery,
  ListGateway,
  SliderRaffles,
  SubscribeForm,
  ListNFTDetails,
  DetailsCTA,
} from "../../../common";
import "../drop/DropStyle.scss";
import "./ArtistDetailStyle.scss";
import { Container, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { apiNftCallGet } from "../../../../Axios/Nft";
import { context } from "../../../../Context/MainContext";
import FeaturedNFT from "../home/FeaturedNFT";
import FeaturedDrops from "../home/FeaturedDrops";

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

const ArtistDetail = () => {
  const params = useParams();
  const { collectionData, dispatchCollectionData } = useContext(context);
  const [artist, setArtist] = useState({});
  const [collectionList, setCollectionList] = useState([]);
  const [collectionTotal, setCollectionTotal] = useState(0);
  const [collectionPage, setCollectionPage] = useState(1);
  const [collectionLimit, setCollectionLimit] = useState(9);
  const [isLoading, setLoading] = useState(false);

  /* Fetch artist's details*/
  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(`artist/api/v1/${params.userId}`)
      .then((res) => {
        if (res) {
          setLoading(false);
          setArtist(res);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  /* Fetch artist's collection*/
  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(
      `nft/api/v1/collections/owner/${params.userId}/${collectionLimit}/${collectionPage}`
    )
      .then((res) => {
        console.log(res);
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

  return (
    <Layout innerClass="art_wrap">
      <LoaderAnimated isLoading={isLoading} />
      <Container className="noPadding banner_micrositeMain">
        <img
          className="img-fluid"
          src={`${artist?.data?.coverImage}?tr=w-1920,h-726`}
        />
      </Container>
      <SubHeaderProfile
        profileimg={artist?.data?.profileImage}
        title={artist?.data?.title}
        subtitle={artist?.data?.description}
      />
      {artist?.details  &&<ListNFTDetails NFTDETAILS={artist?.details} />}
      <DetailsCTA linkPaidMemeber="" liveStream="" basicLevelMembership="" />
      {collectionList.length === 0 ? (
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
        <Col style={{ marginTop: "100px" }}>
          <CardGallery
            galleryTitle={`Artist's Collection`}
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
      <SliderRaffles />
      <ListGateway />
    </Layout>
  );
};

export default ArtistDetail;
