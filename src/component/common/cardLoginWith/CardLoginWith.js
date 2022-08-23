import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardLoginWith.scss';
import { useNavigate } from "react-router-dom";



const CardLoginWith = ( props ) => {
    const navigate = useNavigate()
  return (
      <Card onClick={!props.redirect?()=>navigate(props.link):()=>window.open(props.link, "_blank")} className='cardLoginWith_style'>
        <Card.Header>
            <div className='loginWithAvatar'>
                <img src={props.img} alt={props.title} />
            </div>
        </Card.Header>
          <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
              {props.subtitle}
              </Card.Text>
             {!props.redirect ? <Link className='loginwithLink' to={props.link} ></Link>:<a className='loginwithLink' href={props.link} target="_blank"></a>}
          </Card.Body>
      </Card>
  )
}

export { CardLoginWith }