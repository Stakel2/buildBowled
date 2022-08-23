import React, { useState, useEffect, useContext } from "react";
import { CardDrops } from "../../../common";
import Slider from "react-slick";
import { context } from "../../../../Context/MainContext";
import nftImg from "../../../../assets/images/east_nft_img.gif";
import { Container, Row, Col } from "react-bootstrap";
import { apiNftCallGet } from "../../../../Axios/Nft";
import { toasts } from "../../../common/Toast/Toast";
import { userApiCallPost } from "../../../../Axios/User";
import { Link, useNavigate } from "react-router-dom";

const FeaturedDrops = (props) => {
  const { loginState, loginDispatch } = useContext(context);
  const { collectionData, dispatchCollectionData } = useContext(context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { gallery, showCollect, hw } = props;

  useEffect(() => {}, []);

  const activeNfts = gallery.filter((row) => {
    return row.expired !== true;
  });

  let settings = {
    dots: true,
    infinite: activeNfts.length < 4 ? false : true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clickedInDrop = (e, id) => {
    showCollect === "true"
      ? navigate("/product-detail/" + id)
      : // e.preventDefault()
        navigate("/drops/" + id);
  };

  const reduceTitle = function (rt) {
    return rt.split(" ").slice(0, 3).join(" ");
  };

  return (
    <Container fluid className="abs_left_lines">
      <Container className="featuredDrop_slider">
        <Row>
          <Col>
            <h2 className="title_style">Featured Drops</h2>
          </Col>
          <Col className="view_all_link">
            <Link to="/featuredrops/all">View All</Link>
          </Col>
        </Row>

        <Slider className="featuredDrops_slider" {...settings}>
          {activeNfts.map((gitem, index) => (
            <CardDrops
              onClick={(e) =>
                clickedInDrop(
                  e,
                  showCollect === "true" ? gitem?.nftId : gitem?.collectionId
                )
              }
              dropImg={
                showCollect == "true"
                  ? `${gitem?.nftLogo}?${hw ? "tr=w-524" : "tr=w-524,h-524"}`
                  : `${gitem?.logo}?${hw ? "tr=w-524" : "tr=w-524,h-524"}`
              }
              titletag={showCollect == "true" ? gitem.title : gitem.name}
              title={
                showCollect == "true"
                  ? reduceTitle(gitem.title)
                  : reduceTitle(gitem.name)
              }
              subTitle={gitem.brandName}
              desc={`${gitem.description.slice(0, 35)}...`}
              status={"Live"}
              timeTitle={"Ending in"}
              date={"24"}
              hour={"08"}
              month={"38"}
              cardDrop_style="featuredCardStyle"
            />
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default FeaturedDrops;
