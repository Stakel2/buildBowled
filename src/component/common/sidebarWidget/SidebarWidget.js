import React from 'react'
import { Col } from 'react-bootstrap'

const SidebarWidget = (props) => {
    const {title, children} = props
    return (
        <Col className='sw_style'>
            <h2 className='sw_header_style'>{title}</h2>
            <Col className='sw_body_style'>
            {children}
            </Col>
        </Col>
    )
}

export default SidebarWidget
