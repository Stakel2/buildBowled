import React from 'react'
import {Row, Col } from 'react-bootstrap'
import './CardSocialPostStyle.scss'

const CardSocialPost = (props) => {
    const {post_img, post_desc, post_auther, post_logo, post_slug, time} = props
    return (
        <Col className='ca_wrap_style'>
            <Row className='ca_wrap_style_img'>
                <img src={post_img} alt={post_auther}/>
            </Row>
            <Col className="post_desc_style">
                <p>{post_desc}</p>
            </Col>
            <Row className="postInfo_style">
                <Col className="postLogo_style"><img src={post_logo} /></Col>
                <Col className="postInfo_Text_style">
                    <h4 className='post_auther_text_style'>{post_auther}</h4>   
                    <p className='post_slug_text_style'>{post_slug} {time}</p>
                </Col>
            </Row>
            
            <Col className='cs_footer'>
                <ul className='cs_footer_share'>
                    <li>
                        <a href='javascript:void(0)' className='social_like'><span>like</span> <strong>411</strong> </a>
                    </li>
                    <li>
                        <a href='javascript:void(0)' className='social_share'><span>share</span> <strong>35</strong> </a>
                    </li>
                    <li>
                        <a href='javascript:void(0)' className='social_comment'><span>comment</span> <strong>15</strong> </a>
                    </li>
                </ul>
                <a className='cs_footer_upload' href='javascript:void(0)'><span>upload</span></a>
            </Col>
            
        </Col>
    )
}

export {CardSocialPost}
