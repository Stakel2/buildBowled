import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import mystery_box_1 from "../../../assets/images/eventBanner/mystery_box_1.jpg";
import mystery_box_2 from "../../../assets/images/eventBanner/mystery_box_2.jpg";
import { brandsApiCallGet } from "../../../Axios/Brands";
import "./SliderRafflesStyle.scss";

const RAFFLELIST = [
  {
    img: mystery_box_1,
    title: "Lorem Ipsum",
    subTitlle: "dolor sit amet consectetur",
    bgColor: "#532201",
  },
  {
    img: mystery_box_2,
    title: "Lorem Ipsum",
    subTitlle: "dolor sit amet consectetur",
    bgColor: "#07574B",
  },
  {
    img: mystery_box_1,
    title: "Lorem Ipsum",
    subTitlle: "dolor sit amet consectetur",
    bgColor: "#532201",
  },
  {
    img: mystery_box_2,
    title: "Lorem Ipsum",
    subTitlle: "dolor sit amet consectetur",
    bgColor: "#07574B",
  },
];

const SliderRaffles = () => {
  const [rafflesData, setRafflesData] = useState();
  let settings = {
    dots: true,
    infinite: rafflesData?.data.length < 4 ? false : true,
    // infinite: 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    getRafflesList();
  }, []);

  function getRafflesList() {
    // setLoading(true);
    brandsApiCallGet(`users/raffles/api/v1/list/10/1`)
      .then((res) => {
        if (res) {
          setRafflesData(res);
        }
        // setLoading(false);
      })
      .catch((error) => {
        console.log("RES--->", error);
        // setLoading(false);
      });
  }
  return (
    rafflesData?.data.length > 0 && (
      <Container fluid>
        <Container className="raffles_section slider_style">
          <h2>Mystery Box & Raffles</h2>
          <Slider className="mystery_slider" {...settings}>
            {rafflesData?.data?.map((item, index) => {
              return (
                <div className="raffles_items_main">
                  <Row className="raffles_items" key={index}>
                    <Col>
                      <img src={`${item.image}?tr=w-306,h-320`} alt={item.name} />
                    </Col>
                    <Col style={{ background: "#532201" } }className="p-4 m-1">
                      <h4>{item.name}</h4>
                      <p>{item.name}</p>
                      <Link
                        className="btn btn-default btn-reverse"
                        to={`/all-raffels/${item.raffleId}`}
                      >
                        <span>Purchase Tickets</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Slider>
        </Container>
      </Container>
    )
  );
};

export { SliderRaffles };
