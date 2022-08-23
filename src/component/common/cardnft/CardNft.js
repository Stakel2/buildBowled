import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardNftStyle.scss'

const CardNft = (props) => {
const {pricevalue, dd, hh, mm, bid, cardImage, btntext, btnLink, btnVariant} = props;
  return (
    <Card className="nftCard_style">
        <Card.Img variant="top" src={cardImage} />
            <Card.Body>
                <Row>
                    <Col lg={6} className="price_title t_left">Price</Col>
                    <Col lg={6} className="price_value t_right">{pricevalue}</Col>
                    <Col lg={6} className="timer t_left"><ul><li>{dd}d</li><li>{hh}h</li><li>{mm}m</li></ul></Col>
                    <Col lg={6} className="bid_text t_right">{bid} bids</Col>
                </Row>
                <div className="cardBtn">
                    <Link to={btnLink} className={`btn ${btnVariant}`}>{btntext}</Link>
                </div>
        </Card.Body>
    </Card>
  )
}

export {CardNft}