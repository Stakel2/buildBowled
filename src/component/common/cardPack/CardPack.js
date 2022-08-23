import React from 'react'
import { Col } from 'react-bootstrap'
import './CardPackStyle.scss'
import ethi from "../../../assets/market/images/icon_eth.png"

const CardPack = (props) => {
  return (
    <Col className='cardPackStyle'>
        <div className='cardImage'>
        <img {...props} />
        </div>
        <div>
            <h3 className='titleStyle'>{props.title}</h3>
            <p className='valueStyle'><img src={ethi} alt={"eth"} /> {props.value}</p>
        </div>
    </Col>
  )
}

export {CardPack}