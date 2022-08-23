import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Fslider.scss";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { LoaderAnimated, CardFeatured } from "../../../common";


const FeaturedArtist = () => {
  const [artistsList, setArtistsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: artistsList.length < 4 ? false : true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,    
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    brandsApiCallGet("artist/api/v1/featured/10/0")
      .then((res) => {
        if (res) {
          let list = res.data.details;
          // let featuredList = list.filter((val) => val.isFeatured === 1);
          setArtistsList(list);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    artistsList?.length > 0 ?
      <Container className="text-center slider_style ">
      <LoaderAnimated isLoading={loading} />
        <Slider 
        className="FeaturedSlider"
        {...settings}>
          {artistsList?.map((artist) => (
            <CardFeatured 
              key={artist.artistId}
              onClick={() => navigate(`/artist-detail/${artist.artistId}`)}
              profileimg={artist?.profileImage} 
              alt={artist?.atristname}
              featured_banner_img={artist?.coverImage}
              title={artist?.title}
              // subtitle={}
              description={`${artist?.description?.substring(0, 40)}...`}            
            />
          ))}
        </Slider>
      </Container>
      : (
        <Row>
          <Col>
            <p className="text-center" style={{color:"#848484"}}>
              No Featured Artist Found 
            </p>
          </Col>
        </Row>
      )
   
  );
};

export default FeaturedArtist;
