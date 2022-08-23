import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './InviteFriendStyle.scss'

const InviteFriend = (props) => {
    const{linkForShare} = props;

    const btncopy = () => {
        alert('copy')
    }
    const btnshare = () => {
        alert('copy')
    }
  return (    
        <Container className='inviteSection'>
            <Row>
                <Col>
                    <h2>Invite a friend to Bowled <span>You'll both get a free card</span></h2>
                    <p className='subTitle'>Know someone passionate about cricket? When your friend collects 5 new cards on <br /> auction, you'll both win a free card.</p>
                    <div className='shareBlock'>
                        <p className="linkStyle">{linkForShare}</p>
                        <ul className='btns_shareCopy'>
                            <li>
                            <button className='btn-copy' onClick={btncopy} />
                            </li>
                            <li>
                            <button className='btn-share'onClick={btnshare} />
                            </li>
                        </ul>
                    </div>

                </Col>
            </Row>
        </Container>
  )
}

export {InviteFriend}
