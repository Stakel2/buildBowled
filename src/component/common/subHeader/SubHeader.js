import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./SubHeaderStyle.scss";
import Countdown from "react-countdown";
import { context } from "../../../Context/MainContext";
import isLoggedIn from "../../../services/userService";
import { toasts } from "../Toast/Toast";
import { adminApiCallPost } from "../../../Axios/Admin";

const SubHeader = (props) => {
  const location = useLocation();
  const [socialLinkInfo, setSocialLinkInfo] = useState({});
  const {
    title,
    subTitle,
    edition,
    purchase,
    datePosted,
    like,
    view,
    facebook,
    instagram,
    twitter,
    socialInfo,
    bannerImageId,
  } = props;

  const isLogin = isLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    let facebookLink = socialInfo?.facebook;
    let instaLink = socialInfo?.instagram;
    let twitterLink = socialInfo?.twitter;
    let lnk = {
      facebook: facebookLink,
      insta: instaLink,
      twitter: twitterLink,
    };
    setSocialLinkInfo(lnk);
  }, [isLogin, socialInfo]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return "";
    } else {
      // Render a countdown
      return (
        <span className="countdownTimer">
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  const gotoRoute = (data) => {
    if (isLogin) {
      // navigate(`/${data}`);
      if (data === "like") {
        likeData();
      }
    } else {
      toasts.error("Please login.");
    }
  };

  const likeData = () => {
    let data = {};
    // adminApiCallPost("/social//likes/add", data, {}, "toastOn");
  };

  const onClickLike = () => {
    // if (isLogin) {
    //   let data = {
    //     imageId: bannerImageId,
    //   };
    //   adminApiCallPost("/social/likes/add", data, {}, "toastOn").then(
    //     (data) => {
    //       if (data) {
    //         props.getBannerData();
    //       }
    //     }
    //   );
    // } else {
    //   toasts.warn("Please login.");
    //   navigate("/");
    // }
  };

  return (
    <Container fluid className="subHeaderStyle">
      <Container>
        <Row>
          <Col className="col_firstStyle">
            <ul>
              <li className="titleStyle">
              {title ? title :""}
              </li>
              <li className="subtitleStyle">
                {subTitle ? subTitle :""}
              </li>
            </ul>
          </Col>
          <Col className="col_secStyle">
            <ul>
              <li className="editionStyle">{edition}</li>
              <li className="purchaseStyle">{purchase}</li>
            </ul>
          </Col>
          {/* <Col className="col_thirdStyle" style={{ color: "black" }}>
            <p class="text-center aboutEastTextStyle">
              <h3 class="gi_title_style hasLink">
                <a
                  href="https://eastnft.com/brand-detail/7c6580b6-18c9-4761-a0e7-a1f228018f0b"
                  className="hlink"
                >
                  The Biggest Japan Expo Event, Thailand
                </a>
              </h3>
            </p>
          </Col> */}
          <Col className="col_thirdStyle">
            {/* <Countdown date={datePosted} renderer={renderer} /> */}
          </Col>
          <Col className="col_forthstyle">
            <ul className="social_share_links">
              {location?.pathname !== "/drops" && (
                <li>
                  <a
                    onMouseEnter={() => {
                      props.getHover(true);
                    }}
                    onMouseLeave={() => {
                      props.getHover(false);
                    }}
                    onClick={onClickLike}
                    className="item_like"
                  ></a>
                  <span className="textStyle">{like}</span>
                </li>
              )}
              {location?.pathname !== "/drops" && (
                <li>
                  <a className="item_view"></a>
                  <span className="textStyle">{view}</span>
                </li>
              )}
              {socialLinkInfo?.facebook && (
                <li>
                  <a
                    href={socialLinkInfo?.facebook}
                    target={"_blank"}
                    className="item_facebook"
                  ></a>
                </li>
              )}
              {socialLinkInfo?.insta && (
                <li>
                  <a
                    href={socialLinkInfo?.insta}
                    target={"_blank"}
                    className="item_insta"
                  ></a>
                </li>
              )}
              {socialLinkInfo?.twitter && (
                <li>
                  <a
                    href={socialLinkInfo?.twitter}
                    target={"_blank"}
                    className="item_twitter"
                  ></a>
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export { SubHeader };
