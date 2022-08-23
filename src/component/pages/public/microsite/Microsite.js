import React, { useEffect } from "react";
import {
  CardArtist,
  CardGallery,
  CardSocialPost,
  Layout,
  SubHeaderProfile,
} from "../../../common";
import "../drop/DropStyle.scss";
import "./MicrositeStyle.scss";
import slide1 from "../../../../assets/images/slide_1.jpg";

import ultimateRedWitch from "../../../../assets/images/gallery_1.jpg";
import abstract from "../../../../assets/images/gallery_2.jpg";
import girlInaBlueDress from "../../../../assets/images/gallery_3.jpg";
import smile from "../../../../assets/images/gallery_4.jpg";
import gallery5 from "../../../../assets/images/gallery_5.jpg";
import dancingDoll from "../../../../assets/images/gallery_6.jpg";
import bride from "../../../../assets/images/gallery_6.jpg";
import handsWithEyes from "../../../../assets/images/gallery_7.jpg";
import happyLady from "../../../../assets/images/gallery_8.jpg";
import rabbitHoleStreet from "../../../../assets/images/gallery_9.jpg";
import abstract01 from "../../../../assets/images/gallery_10.jpg";
import hands from "../../../../assets/images/gallery_11.jpg";
import ladyInBlue from "../../../../assets/images/gallery_3.jpg";
import twoRedHands from "../../../../assets/images/gallery_12.jpg";
import dark from "../../../../assets/images/gallery_13.jpg";
import laker from "../../../../assets/images/kobe-bryant-la.jpg";
import abstract21 from "../../../../assets/images/gallery_14.jpg";
import abstract22 from "../../../../assets/images/gallery_15.jpg";
import prism from "../../../../assets/images/gallery_16.jpg";
import banner_microsite from "../../../../assets/images/banner_microsite.jpg";
import grammy_img from "../../../../assets/images/grammy_img.png";
import { Container, Row, Col } from "react-bootstrap";

// socail media feed"

import socialImgA from "../../../../assets/images/social/social_a.jpg";
import socialImgB from "../../../../assets/images/social/social_b.jpg";
import socialImgC from "../../../../assets/images/social/social_c.jpg";
import postLogoImg from "../../../../assets/images/pos_logo.jpg";
import { useLocation } from "react-router-dom";
import { ArtistList } from "../../../../constant";

const SOCIALMEDIALIST = [
  {
    post_img: socialImgA,
    post_desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    post_logo: postLogoImg,
    post_auther: "GMM GRAMMY",
    post_slug: "@Da Endorphine",
    time: "8h ago",
  },
  {
    post_img: socialImgB,
    post_desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    post_logo: postLogoImg,
    post_auther: "GMM GRAMMY",
    post_slug: "@Da Endorphine",
    time: "8h ago",
  },
  {
    post_img: socialImgC,
    post_desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    post_logo: postLogoImg,
    post_auther: "GMM GRAMMY",
    post_slug: "@Da Endorphine",
    time: "8h ago",
  },
];

const BannerImage = [
  {
    id: 1,
    img: slide1,
    alt: "slide1",
  },
  {
    id: 2,
    img: slide1,
    alt: "slide2",
  },
  {
    id: 3,
    img: slide1,
    alt: "slide3",
  },
];

const GALLERYITEM = [
  {
    id: "001",
    img: ultimateRedWitch,
    title: "Ultimate Red Witch",
    subTitle: "The Visionary",
    edition: "Edition 1 of 10",
    purchase: "180.00",
  },
  {
    id: "002",
    img: abstract,
    title: "Abstract",
    subTitle: "Balloon boy",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "003",
    img: girlInaBlueDress,
    title: "Girl in a Blue Dress",
    subTitle: "Thomas Moon",
    edition: "Edition of one",
    purchase: "Accepting Offers",
  },
  {
    id: "004",
    img: smile,
    title: "Smile",
    subTitle: "Happy Lady",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "005",
    img: gallery5,
    title: "Ultimate Red Witch",
    subTitle: "The Visionary",
    edition: "Edition 1 of 10",
    purchase: "180.00",
  },
  {
    id: "006",
    img: dancingDoll,
    title: "Dancing Doll",
    subTitle: "Edition of one",
    edition: "Artist",
    purchase: "180.00",
  },
  {
    id: "007",
    img: abstract,
    title: "Abstract",
    subTitle: "Balloon boy",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "008",
    img: bride,
    title: "Bride",
    subTitle: "Photo",
    edition: "Edition of one",
    purchase: "180.00",
  },
  {
    id: "009",
    img: handsWithEyes,
    title: "Two Red Hands with Eyes",
    subTitle: "John Wick",
    edition: "Edition of one",
    purchase: "180.00",
  },
  {
    id: "0010",
    img: happyLady,
    title: "Smile",
    subTitle: "Happy Lady",
    edition: "Edition of one",
    purchase: "180.00",
  },
  {
    id: "0011",
    img: rabbitHoleStreet,
    title: "Rabbit Hole Street",
    subTitle: "The Visionary",
    edition: "Edition 1 of 10",
    purchase: "180.00",
  },
  {
    id: "0012",
    img: abstract01,
    title: "Abstract 01",
    subTitle: "Artist",
    edition: "Edition of one",
    purchase: "180.00",
  },
  {
    id: "0013",
    img: hands,
    title: "Hands",
    subTitle: "Balloon boy",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "0014",
    img: ladyInBlue,
    title: "Lady in Blue",
    subTitle: "Photo",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "0015",
    img: twoRedHands,
    title: "Two Red Hands with Eyes",
    subTitle: "John Wick",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "0016",
    img: dark,
    title: "Dark",
    subTitle: "Scarlet",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "0017",
    img: laker,
    title: "Laker’s Kobe",
    subTitle: "Scarlet",
    edition: "The Visionary",
    purchase: "180.00",
  },
  {
    id: "0018",
    img: dancingDoll,
    title: "Dancing Doll",
    subTitle: "Artist",
    edition: "Edition of one",
    purchase: "180.00",
  },
  {
    id: "0019",
    img: abstract21,
    title: "Abstract",
    subTitle: "Balloon boy",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "0020",
    img: abstract22,
    title: "Abstract",
    subTitle: "Photo",
    edition: "Edition of one",
    purchase: "80.00",
  },
  {
    id: "0021",
    img: prism,
    title: "Prism",
    subTitle: "John Wick",
    edition: "Edition of one",
    purchase: "80.00",
  },
];

const Microsite = () => {
  const location = useLocation();

  useEffect(() => {
    // console.log("locationlocationlocation", location);
  }, []);

  return (
    <Layout>
      <Container fluid className="noPadding banner_micrositeMain">
        <img className="img-fluid" src={location?.state?.data?.img} />
      </Container>
      <SubHeaderProfile
        profileimg={grammy_img}
        title={"BIO"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
      ></SubHeaderProfile>
      <CardGallery
        galleryTitle={"GMM NFT"}
        gallery={GALLERYITEM}
        startItem={0}
        endItem={6}
      />
      {/* <CardArtist title={"GMM ARTISTS"} artists={ArtistList} /> */}

      <Col className="socailMediaFeedHeader">
        <h2 className="smf_title">Social Media Feed</h2>
        <ul className="smf_list">
          <li className="social_fb">
            <a href="#"></a>
          </li>
          <li className="social_insta">
            <a href="#"></a>
          </li>
          <li className="social_twitter">
            <a href="#"></a>
          </li>
          <li className="social_yt">
            <a href="#"></a>
          </li>
        </ul>
      </Col>

      <Container>
        <Row>
          {SOCIALMEDIALIST.map((socialItem, index) => {
            return (
              <Col xs={16} lg={4} key={index}>
                <CardSocialPost
                  post_img={socialItem.post_img}
                  post_desc={socialItem.post_desc}
                  post_auther={socialItem.post_auther}
                  post_logo={socialItem.post_logo}
                  post_slug={socialItem.post_slug}
                  time={socialItem.time}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default Microsite;
