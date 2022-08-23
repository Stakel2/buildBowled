import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userApiCallGet } from "../../../Axios/User";
import "./ListGatewayStyle.scss";

const ListGateway = (props) => {
  const [randomArtists, setRandomArtists] = useState([]);
  useEffect(() => {
    getRandomArtist();
  }, []);

  const getRandomArtist = () => {
    // setLoading(true);
    userApiCallGet(`/randomArtist`)
      .then(async (res) => {
        let data = await res?.data;
        setRandomArtists(data);
        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
      });
  };
  // const { randomArtists } = props;
  return (
    randomArtists?.length > 0 && (
      <Container fluid>
        <Container className="listgateway_section mt-5">
          <Row>
            <Col className="listgateway_section_left">
              {randomArtists?.slice(0, 2).map((item) => {
                return (
                  <div className="artist_avatars">
                    <img src={item.profileImage} title="" />
                    <div className="artist_avatars_name">@{item.fullname}</div>
                  </div>
                );
              })}
            </Col>
            <Col className="listgateway_section_right">
              <h2>
                List your <br />
                NFTs on EAST gateway
              </h2>
              <p>
                Are you an artist or NFT project creator? <br />
                Get in touch with us to get your content on EAST NFT gateway!
              </p>
              <ul>
                <li>
                  <a
                  className="btn btn-default"
                //  target="_blank"
                 href="https://00kpjdadd0c.typeform.com/to/STDLsm7f"
                  // href="/signup-with-artist"
                >
                  <span>I am an Artist</span>
                </a>
                </li>
                <li>
                  <a
                  className="btn btn-default"
                 // target="_blank"
                 href="https://00kpjdadd0c.typeform.com/to/L31Ri3uG"
                  // href="/signup-with-brand"
                >
                  <span>I am a Brand</span>
                </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  );
};

export { ListGateway };
