import React, { useEffect } from "react";
import Slider from "react-slick";
import "./Fslider.scss";

import grammy_showcase from "../../../../assets/images/showcase/grammy_showcase.jpg";

import howto from "../../../../assets/images/getstarted/how_to_setup_img.jpg";
import whatis from "../../../../assets/images/getstarted/create_your_wallet.jpg";
import createyour from "../../../../assets/images/getstarted/what_is_setup_img.jpg";

import { Container, Row, Col } from "react-bootstrap";
import { apiCallGetWordpress } from "../../../../Axios/Base";
import { CardFeatured } from "../../../common";

const GETSTARTEDLIST = [
  {
    img: howto,
    title: "How to set up",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: whatis,
    title: "What is NFT",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: createyour,
    title: "Create your wallet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: whatis,
    title: "What is NFT",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: createyour,
    title: "Create your wallet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const GetStarted = (props) => {
  const { startData } = props;

  useEffect(() => {
    // console.log(startData);
    // document.addEventListener("contextmenu", (event) => event.preventDefault());
    let noRightClick = document.getElementById("abc");
     noRightClick?.addEventListener("contextmenu", (e) => e.preventDefault());
  }, [startData]);

  const removeHtmlTagsFromString = (item) => {
    return item.replace(/<(.|\n)*?>/g, "");
  };

  const openInNextTab = (item) => {
    window.open(item, "_blank");
  };

  var settings = {
    dots: true,
    infinite: startData.length < 4 ? false : true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
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
        breakpoint: 960,
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

  return (
    <Container className="slider_style blog_wrap">
      <h2 className="blogTitle">Get Started</h2>
      <Slider className="FeaturedSlider" {...settings}>
        {startData?.map((item, index) => (

<CardFeatured
 key={index}
  onClick={() => openInNextTab(item?.link)}
featured_banner_img={item?.better_featured_image?.source_url}
title={item?.title?.rendered}
description={removeHtmlTagsFromString(item?.excerpt?.rendered)}
blogBG="blog_img_style"
/>

        
        ))}
      </Slider>
    </Container>
  );
};

export default GetStarted;
