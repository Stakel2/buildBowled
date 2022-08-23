import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./CardArtistStyle.scss";
import { Link } from "react-router-dom";
import ShowcasePagintion from "../../pages/public/showcase/ShowcasePagintion";

const CardArtist = (props) => {
  const {
    title,
    artImg,
    atristname,
    atristdes,
    artists,
    totalRecords,
    limit,
    setPage,
  } = props;
  return (
    <Container className="artist_block">
      {title && (
        <Row className="artist_block_header">
          <Col>
            <h2>{title}</h2>
          </Col>
        </Row>
      )}
      <Row className="artist_gallery">
        {artists.map((artist) => (
          <Col
            xs={16}
            md={6}
            sm={4}
            lg={3}
            className="artist_gallery_item"
            key={artist?.artistId}
          >
            <Link
              className="artist_links"
              to={`/artist-detail/${artist?.artistId}`}
            >
              <Col className="art_cardStyle">
                <Row
                  className="art_banner"
                  style={{
                    background: `url(${artist?.coverImage || artist?.artistCoverImage
                      })`,
                  }}
                >
                  <Col className="artImg">
                    <img
                      src={artist?.profileImage || artist?.artistImage}
                      alt={artist?.title || artist?.artistName}
                    />
                  </Col>
                </Row>
                <Col className="art_info">
                  <h3 className="art_title">
                    {artist?.title || artist?.artistName}
                  </h3>
                  <p className="art_desc">
                    {artist?.description?.substr(0, 40) ||
                      artist?.artistDescription?.substr(0, 40)}
                    ...
                  </p>
                </Col>
              </Col>
            </Link>
          </Col>
        ))}
      </Row>
      <Col className="text-end">
        {totalRecords > 12 && (
          <ShowcasePagintion
            limit={limit}
            total={totalRecords}
            nextPage={setPage}
          />
        )}
      </Col>
    </Container>
  );
};

export { CardArtist };
