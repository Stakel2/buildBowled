import React from 'react'
import Slider from "react-slick";
import {Row, Col} from 'react-bootstrap'
import './PacksStyle.scss'
import { CardPack } from '../../../common/';
import packImgae from '../../../../assets/market/packImgae.png'

const Packs = () => {
    let settings = {
        dots: true,
        // infinite: brandsList.length < 4 ? false : true,
        infinite: 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        dots: false,

        responsive: [
          {
            breakpoint: 1220,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 900,
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
    <Row className="packWrap">
     <h2>Packs</h2>   
    <Slider className="packSliderStyle" {...settings}>
        { Array.from({length:12}).map((_, index) => (
        <Col>
        <CardPack
            src={packImgae}
            title={"T20 Edition"}
            value={"5.56"}
        />   
        </Col>    
        ))}        
    </Slider>
  </Row>  

  )
}

export default Packs