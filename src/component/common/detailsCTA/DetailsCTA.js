import React from 'react'
import './DetailsCtaStyle.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DetailsCTA = (props) => {
  return (
    <Container>
         <Container>
       {/* <ul className="details_support_btns">
          <li>
            <Link to={props.linkPaidMemeber} className="btn btn-default"><span>Paid Membership</span></Link>
          </li>
          <li>
            <Link to={props.liveStream} className="btn btn-default btn-reverse"><span> Live Stream</span></Link>
          </li>
          <li>
            <Link to={props.basicLevelMembership} className="btn btn-default"><span> Basic Level Membership</span></Link>
          </li>
        </ul> */}
      </Container>
    </Container>
  )
}
export {DetailsCTA}