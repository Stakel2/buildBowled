import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { apiNftCallGet, apiNftCallPost } from "../../../../Axios/Nft";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CardFeaturedNft } from "../../../common";
import maticLogo from "../../../../assets/images/polygon-matic-logo.png";
import { context } from "../../../../Context/MainContext";

const FeaturedNFT = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [featuredNfts, setFeaturedNfts] = useState([]);
  const [selectBlockChainName, setselectBlockChainName] = useState("");
  const [collectionData, setCollectionData] = useState({});
  const { userLocation } = useContext(context);
  
  useEffect(() => {
    userLocation && nftFilter();
  }, [userLocation]);

  function nftFilter() {
    setLoading(true);
    apiNftCallGet(`/featurednft/10/0/random?location=${userLocation}`)
      .then(async (res) => {
        if (res.error) {
          navigate("/404");
        } else {
          setFeaturedNfts(res?.data?.rows);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  return (
    <>
    {featuredNfts?.length > 0 && (
      <Container fluid className="abs_right_lines">
        <Container className="featurednft_section">
          <Row>
            <Col>
              <h2 className="title_style">Featured NFT's</h2>
            </Col>
            <Col className="view_all_link">
              <Link to="/featurednft/all">View All</Link>
            </Col>
          </Row>
          <Container className="feature_nft_item">
            <Row>
              {featuredNfts?.map((item, index) => (
                <Col sm={2} key={index} className="featuredNFT_class">
                  <CardFeaturedNft
                    {...item}
                    nftIndex={index + 1}
                    totalNft={featuredNfts.length}
                    blockchanePrice="25.27"
                    date="24"
                    hour="08"
                    month="38"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </Container>
    )}
    </>
  );
};

export default FeaturedNFT;
