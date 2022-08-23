import React from 'react'
import { Col } from 'react-bootstrap'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const RangeSliderFilter = (props) => {
    
  return (
    <Col className={`marketRangeFilter ${props.rangeBarStyle && 'rangeBarStyle'}`}>
    <Slider 
        {...props}
        className="marketFilterRangeSlider"
    />
    </Col>
  )
}

export default RangeSliderFilter