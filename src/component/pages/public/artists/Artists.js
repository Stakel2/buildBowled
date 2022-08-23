import React, { useEffect, useState } from "react";
import {
  CardArtist,
  Layout,
  HeadingEditPage,
  LoaderAnimated,
} from "../../../common";
import "../drop/DropStyle.scss";
import "./Artists.scss";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { Col } from "react-bootstrap";

const Artists = () => {
  const [artistsList, setArtistsList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(`artists/api/v1/${limit}/${page}`)
      .then((res) => {
        if (res) {
          setTotalRecords(res.data.totalRecords);
          setArtistsList(res.data.details);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page]);

  return (
    <Layout innerClass="artist_block_main">
      <LoaderAnimated isLoading={loading} />
      <HeadingEditPage title={"All Artists"} />
      <CardArtist
        artists={artistsList}
        limit={limit}
        totalRecords={totalRecords}
        setPage={setPage}
      />
      <Col className="text-end"></Col>
    </Layout>
  );
};

export default Artists;
