import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./SocialGalleryStyle.scss";
import { CardSocialPost } from "..";

const SocialGallery = (props) => {
  const { socialPost } = props;
  return (
    <Container className="gallery_block">
      <Row className="list_gallery social_post_gallery">
        <Col>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry>
              {socialPost.map((gitem, index) => {
                return (
                  <Col
                    style={{ paddingRight: "20px", paddingLeft: "20px" }}
                    key={index}
                  >
                    <CardSocialPost
                      post_img={gitem.post_img}
                      post_desc={gitem.post_desc}
                      post_auther={gitem.post_auther}
                      post_logo={gitem.post_logo}
                      post_slug={gitem.post_slug}
                      time={gitem.time}
                    />
                  </Col>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>
    </Container>
  );
};

export { SocialGallery };
