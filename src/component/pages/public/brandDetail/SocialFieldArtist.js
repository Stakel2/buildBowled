import React from 'react'
import fb_social from '../../../../assets/images/icon_footer_facebook.svg'
import in_social from '../../../../assets/images/icon_footer_instagram.svg'
import tw_social from '../../../../assets/images/icon_footer_twitter.svg'
import yb_social from '../../../../assets/images/icon_youtube_pe.svg'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { SocialGallery } from '../../../common'


import socialImgA from '../../../../assets/images/social/social_a.jpg'
import socialImgB from '../../../../assets/images/social/social_b.jpg'
import socialImgC from '../../../../assets/images/social/social_c.jpg'
import postLogoImg from '../../../../assets/images/pos_logo.jpg'

const SOCIALMEDIALIST = [
    {
        post_img:socialImgA,
        post_desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",        
        post_logo:postLogoImg,
        post_auther:"GMM GRAMMY",
        post_slug:"@Da Endorphine",
        time:"8h ago",
    },
    {
        post_img:socialImgB,
        post_desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",        
        post_logo:postLogoImg,
        post_auther:"GMM GRAMMY",
        post_slug:"@Da Endorphine",
        time:"8h ago",
    },
    {
        post_img:socialImgC,
        post_desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",        
        post_logo:postLogoImg,
        post_auther:"GMM GRAMMY",
        post_slug:"@Da Endorphine",
        time:"8h ago",
    },
]


const SocialFieldArtist = () => {
    return (
        <Container className='feeds_section'> 
                <Row>
                    <Col className='feeds_section_left'>
                        <Col className='feeds_section_left_header'>
                            <h2>social media feed</h2>
                            <ul className="profiles_socials noRightMargin">
                                <li>
                                    <a href="#">
                                        <img  src={fb_social} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={in_social} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={tw_social} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img style={{width:'24px'}} src={yb_social} />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <SocialGallery socialPost={SOCIALMEDIALIST}/>

                    </Col>
                    <Col className='feeds_section_right'>

                        
                    </Col>
                </Row>
            </Container> 
    )
}

export default SocialFieldArtist
