import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Fslider.scss";
import { Container, Col, Row } from "react-bootstrap";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { useNavigate } from "react-router-dom";
import { LoaderAnimated } from "../../../common/Loader/LoaderAnimated";
import { CardFeatured } from "../../../common";

const FeatureBrands = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [brandsList, setBrandsList] = useState([]);

  let settings = {
    dots: true,
    infinite: brandsList.length < 4 ? false : true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  useEffect(() => {
    setLoading(true);
    brandsApiCallGet("brand/api/v1/featured/10/0")
      .then((res) => {
        if (res) {
          let list = res.data.details;
          // let featuredList = list.filter((val) => val.isFeatured === 1);
          setBrandsList(list);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return brandsList?.length > 0 ? (
    <Container className="text-center slider_style sliderBrand">
      <LoaderAnimated isLoading={loading} />
      <Slider className="FeaturedSlider" {...settings}>
        {brandsList?.map((item) => (
          <CardFeatured
            key={item?.brandId}
            onClick={() => navigate(`/brand-detail/${item?.brandId}`)}
            profileimg={item?.profileImage}
            // alt={artist?.atristname}
            featured_banner_img={item?.showCase}
            title={item?.title.substring(0, 20)}
            // subtitle={}
            description={`${item?.description?.substring(0, 80)}...`}
          />
        ))}
      </Slider>
    </Container>
  ) : (
    <Row>
      <Col>
        <p className="text-center" style={{ color: "#848484" }}>
          No Featured Brand Found
        </p>
      </Col>
    </Row>
  );
};

export default FeatureBrands;
