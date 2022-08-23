import React from 'react';
import { Card } from 'react-bootstrap';
import './CardFeaturedStyle.scss'

const CardFeatured = (props) => {
  return (
    <Card onClick={props.onClick} className="featured_section_style">
        <Card.Header className={`featured_banner ${props?.blogBG}`}  style={{background:`url(${props.featured_banner_img})`}}>
          {props.profileimg &&
            <div className='propfile_pic'>
              <img src={props.profileimg} alt={props.alt} />
            </div>
          }
        </Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <h6>{props.subtitle}</h6>
            <Card.Text>
                {props.description}
            </Card.Text>            
        </Card.Body>        
    </Card>
  );
};

export {CardFeatured}