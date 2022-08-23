import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import japanExpot from "../../../assets/images/eventBanner/eventBanner.jpg";
import { brandsApiCallGet } from "../../../Axios/Brands";
import "./EventsBlockStyle.scss";

let settings = {
  dots: true,
  // infinite: brandsList.length < 4 ? false : true,
  infinite: 1,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
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

const EventsBlock = (props) => {
  const { data } = props;
  const [eventsList, setEventsList] = useState(null);

  useEffect(() => {
    getEventList();
  }, []);

  const getEventList = () => {
    //events/api/v1/get/list/10/0
    brandsApiCallGet(`/events/api/v1/get/list/10/0`)
      .then(async (res) => {
        let data = await res?.data;
        setEventsList(data);
        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
      });
  };

  return (
    eventsList?.data?.length > 0 && (
      <Container fluid className="abs_right_solid">
        <Container>
          <Slider className="event_slider" {...settings}>
            {eventsList?.data.map((item, idx) => {
              return (
                <Container>
                  <Row>
                    <Col
                      lg={item.imageName.length === 1 ? 9 : 6}
                      className="event_blockLeft"
                    >
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <a
                        className="btn btn-default"
                        href={item.eventUrl}
                        target="_blank"
                      >
                        <span>Learn More</span>
                      </a>
                    </Col>

                    <Col
                      lg={item.imageName.length === 1 ? 3 : 3}
                      className="event_blockRight align-self-center"
                    >
                      <img
                        style={{ height: "500px", objectFit: "cover" }}
                        src={`${item.imageName[0]?.eventImage}?tr=w-100,h-100`}
                        alt={item.title}
                      />
                    </Col>
                    {item.imageName.length > 1 && (
                      <Col lg={3} className="event_blockRight">
                        <Col sm={12} className="my-3">
                          <img
                            style={
                              item.imageName.length === 2
                                ? { height: "500px", objectFit: "cover" }
                                : { height: "300px", objectFit: "cover" }
                            }
                            src={`${item.imageName[1]?.eventImage}?tr=w-524,h-524`}
                            alt={item.title}
                          />
                        </Col>
                        {item.imageName.length > 2 && (
                          <Col sm={12} className="my-3">
                            <img
                              style={{ height: "300px", objectFit: "cover" }}
                              src={`${item.imageName[2]?.eventImage}?tr=w-524,h-524`}
                              alt={item.title}
                            />
                          </Col>
                        )}
                      </Col>
                    )}
                  </Row>
                </Container>
              );
            })}
          </Slider>
        </Container>
      </Container>
    )
  );
};

export { EventsBlock };
