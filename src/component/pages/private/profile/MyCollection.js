import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { userApiCallGet } from "../../../../Axios/User";
import { HeadingEditPage, Layout, LoaderAnimated } from "../../../common";
import CollectionCardGallery from "../../../common/cardGallery/CollectionCardGallery";
// import "./ButtonCommon.scss";

export default function MyCollection() {
  const [key, setKey] = useState("myCollection");
  const [myCollection, setMyCollection] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [rafflePage, setRafflePage] = useState(1);

  useEffect(() => {
    setLoading(true);
    userApiCallGet(`/nftlist/${limit}/${page}`)
      .then((data) => {
        setLoading(false);
        if (data?.error === false) {
          // setFavourite(data?.data?.favourite);
          // setMintedNft(data?.data?.mintedNft);
          setMyCollection(data?.data?.myCollection?.data);
          setTotalRecords(data?.data?.myCollection?.totalNFT);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [page]);

  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  // const nftListData = () => {
  // setLoading(true);
  // userApiCallGet(`/nftlist/${limit}/${page}`)
  // .then((data) => {
  // setLoading(false);
  // if (data?.error === false) {
  // // setFavourite(data?.data?.favourite);
  // // setMintedNft(data?.data?.mintedNft);
  // setMyCollection(data?.data?.myCollection?.data);
  // setTotalRecords(data?.data?.myCollection?.totalNFT);
  // }
  // })
  // .catch((error) => {
  // setLoading(false);
  // });
  // };
  return (
    <>
      {/* <Layout>
<Tabs
id="controlled-tab-example"
activeKey={key}
onSelect={(k) => setKey(k)}
className="profileTabStyle"
// className="featured_all"
>
<Tab eventKey="myCollection" title="My Collection">
<CollectionCardGallery
gallery={myCollection}
startItem={0}
endItem={myCollection?.length}
gallary="myCollection"
showCollect="false"
noRedirection={true}
limit={limit}
totalRecords={totalRecords}
nextPage={nextPage}
isProfile={true}
/>
</Tab>
</Tabs>
</Layout>  */}

     
        <LoaderAnimated isLoading={loading} />
        <HeadingEditPage title={"MY Collection"} />
        <Container className="artistBrand_section mb-3">
          <Row className="featured_all">
            <CollectionCardGallery
              gallery={myCollection}
              startItem={0}
              endItem={myCollection?.length}
              gallary="myCollection"
              showCollect="false"
              noRedirection={true}
              limit={limit}
              totalRecords={totalRecords}
              nextPage={nextPage}
              isProfile={true}
            />
          </Row>
        </Container>
      
    </>
  );
}
