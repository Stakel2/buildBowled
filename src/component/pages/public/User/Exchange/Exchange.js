import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ExchangeStyle.scss'
import BuySell from './BuySell'

const Exchange = () => {
    return(
        
                <div className="mainBox">
                <div className="chart">
                           <div className="boxc1">
                                <div className="chartIn">
                                <div className="boxcc1"> </div>
                                <div className="boxcc2">asdfasf</div>
                                </div>
                           </div>
                           <div className="boxc2"></div>
                           
                       </div>
                       <div className="orderbook">
                           <div className="box1"> 
                         asdf
                           </div>
                           <div className="box2">
                         asdf
                           </div>
                       </div>
                       
                       <div className="trade">
                           <div className="boxt1">
                              <BuySell />
                            </div>
                           <div className="boxt2"></div>
                       </div>
                </div>
    )
}

export default Exchange