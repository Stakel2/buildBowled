import React, {useState} from 'react'
import {Form, Row, Col } from 'react-bootstrap'
import './MarketplaceAll.scss'

const SidebarCollapseWrap = (props) => {
  const [showItem, setShowItem]  =  useState(true)

  const sidebarItemHandler = () => {
    setShowItem(!showItem)
  }
  return (
    <Col className='col_marketSiderbar'>
        <Row className='col_mktSidebarHeader'>
            <Col><h2 className='cm_titleStyle'>{props.title}</h2></Col>
            <Col><button className={`btnCollapse ${showItem ? '' : 'collapsed'}`} onClick={sidebarItemHandler}></button></Col>
        </Row>
        <Row className={`sidebarContent ${showItem ? '' : 'hideItem'}`}>
            <Col>
                {props.children}
            </Col>
        </Row>
    </Col>
  )
}

export default SidebarCollapseWrap