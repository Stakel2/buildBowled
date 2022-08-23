import React from 'react'
import { ModalCustom } from '../../../common'
import qr_code from '../../../../assets/images/qr_code.png'
import { Row, Col } from 'react-bootstrap'

const ModalReceiveAssets = (props) => {
    return (
        <ModalCustom 
            title={"Receive Asset"}
            {...props}                             
        >
           <Row>
               <Col lg={12} className="text-center">
                <img src={qr_code} />
                </Col>
                <Col lg={12} className="text-center text-address">
                    <p>Address: 0000xxxxxxxxxxx0000</p>
                </Col>
           </Row>
        </ModalCustom>
    )
}

export default ModalReceiveAssets
