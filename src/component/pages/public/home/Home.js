import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../../common";
import Tilt from "react-parallax-tilt";
import LogoBanner from "../../../common/logoBanner/LogoBanner";
import FeatureBrands from "./FeatureBrands";
import FeaturedArtist from "./FeaturedArtist";
import GetStarted from "./GetStarted";
import CategoryList from "./CategoryList";
import "./Home.scss";
import { context } from "../../../../Context/MainContext";
import { GetBanner, GetCollectionList } from "../../../Api/Actions";
import { apiCallGetWordpress } from "../../../../Axios/Base";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
// import { date } from "yup/lib/locale";
// import ZodaicCampaign from "./ZodaicCampaign";
// import { apiNftCallGet } from "../../../../Axios/Nft";
// import { SocialLinks } from "../../../common";
// import FeaturedDrops from "./FeaturedDrops";
// import FeaturedNFT from "./FeaturedNFT";
import { Link, useNavigate } from "react-router-dom";
// import { userApiCallGet } from "../../../../Axios/User";
// import { adminApiCallGet } from "../../../../Axios/Admin";
// import { brandsApiCallGet } from "../../../../Axios/Brands";
import { StylishButton } from "../../../common/stylishButton/StylishButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import RoadMap from "../../../common/RoadMap/RoadMap";
import Newsletter from "../../../common/Newsletter/Newsletter";
import PlayCard from "./PlayCard";
import EarningWith from "./EarningWith";
import Faq from "../../../common/Faq/Faq";
import TeamView from "./TeamView";
import plyer_stadium from "../../../../assets/images/bowled-images/plyer_stadium.png";
import discord from "../../../../assets/images/bowled-images/discord.svg";
import insta from "../../../../assets/images/bowled-images/insta.svg";
import medium from "../../../../assets/images/bowled-images/medium.svg";
import twitter from "../../../../assets/images/bowled-images/twitter.svg";
import telegram from "../../../../assets/images/bowled-images/telegram.svg";
import pvsp from "../../../../assets/images/bowled-images/pvsp.png";
import GetAssets from "./GetAssets";
import WaitlistModal from "../../private/Waitlist/WaitlistModal";
import { userApiCallGet } from "../../../../Axios/User";

const Home = () => {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [pauseCorousal, setPauseCorousal] = useState(false);
  // const [getStartData, setGetStartData] = useState([]);
  // const { bannerData, dispatchBannerData } = useContext(context);
  // const { collectionData, dispatchCollectionData } = useContext(context);
  // const [bannerIdx, setBannerIdx] = useState(0);
  // const [key, setKey] = useState("artist");
  // const [eventsList, setEventsList] = useState(null);
  // const [featuredNfts, setFeaturedNfts] = useState(null);

  // useEffect(() => {
  //   if (!bannerData?.rows?.length) {
  //     setLoading(true);
  //     GetBanner({ setLoading, dispatchBannerData });
  //   }

  //   if (!collectionData?.rows?.length) {
  //     getCollectionList();
  //   }

  //   getStartedData();
  // }, []);

  // const getCollectionList = () => {
  //   setLoading(true);
  //   apiNftCallGet(
  //     `/collections/featured/collection/10/0/random`,
  //     {},
  //     "toastOff"
  //   )
  //     .then(async (res) => {
  //       let data = await res?.data;
  //       if (data.rows.length) {
  //         await dispatchCollectionData({
  //           type: "collection",
  //           payload: { ...data },
  //         });
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //     });
  // };

  // const getStartedData = () => {
  //   apiCallGetWordpress()
  //     .then(async (res) => {
  //       setGetStartData(res);
  //     })
  //     .catch((err) => {});
  // };
  // const getCountdownTimer = (startD, endD) => {
  //   let start = new Date(startD).getTime();
  //   let end = new Date(endD).getTime();
  //   let current = new Date().getTime();

  //   if (start <= current) {
  //     return end;
  //   } else {
  //     return start;
  //   }
  // };
  document.body.className = "";

  const LinkDown = () => (
    <AnchorLink offset="200" href="#newsletter" className="d-none d-lg-block">
      <StylishButton className="link_btn" title="Claim early access" />
    </AnchorLink>
  );
  const Newslink = () => (
    <a href="#newsletter" className="d-block d-lg-none">
      <StylishButton className="link_btn" title="Claim early access" />
    </a>
  );

  const getIp = async () => {
    await userApiCallGet(`/newsletter/checkIP`, {}, "toastOff")
      .then(async (res) => {
        console.log("resp", res);
        if (res) {
          if (!res.error) {
            setShowModal(true);

            // console.log("kk");
          }
        }
      })
      .catch((error) => {
        setShowModal(false);
      });
  };
  useEffect(() => {
    // if(localStorage.getItem("count")<2){
    setTimeout(() => {
      getIp();
    }, 5000);
  }, []);

  return (
    <>
      {showModal && <WaitlistModal />}
      <section className="banner_sec">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div className="banner_content">
                <h1>
                  <span className="clrd">Own</span>
                  <br />
                  Play
                </h1>
                <h2 className="filled">Earn</h2>
                <p>
                  World’s first Play-to-Earn <br />
                  Cricket Game
                </p>

                {/* <LinkDown /> */}
                {/* <Newslink /> */}
              </div>
            </Col>
            <Col lg={6} md={12} className="banner-img"> 
              <Tilt>
                <img src={plyer_stadium} alt="banner_icon" />
              </Tilt>
            </Col>
            <Col lg={12}>
              <ul className="social_links">
                <li>
                  <a href="https://twitter.com/Bowleddotio" target="_blank">
                    <img src={twitter} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bowled.io/"
                    target="_blank"
                  >
                    {" "}
                    <img src={insta} alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/dfxcricverse" target="_blank">
                    {" "}
                    <img src={telegram} alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@bowled" target="_blank">
                    <img src={medium} alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/tcSrDWQTyj" target="_blank">
                    <img src={discord} alt="icon" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* challenge section */}

      <section className="chlgOther_sec fix_bg">
        <Container>
          <Row>
            <Col lg={7} md={12}>
              <Tilt>
                <div className="chlgOther_left">
                  <img src={pvsp} alt="img" />
                </div>
              </Tilt>
            </Col>
            <Col lg={5} md={12} className="d-flex align-items-center">
              <div className="chlgOther_right">
                <div className="titleDiv">
                  <h2 className="title_head">
                    challenge <br /> <span>others</span>
                  </h2>
                  <p>
                    Challenge millions of Cricket fans around the world, deploy
                    your game knowledge & win big rewards!
                  </p>
                </div>
                <div className="connect_btn">
                  <StylishButton
                    className="link_btn"
                    title="Arena coming Soon"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Homepage three play card section */}
      <PlayCard />
      <GetAssets />
      <EarningWith />
      <RoadMap />
      <TeamView />
      <Faq />
      {/* <Newsletter /> */}
    </>
  );
};

export default Home;
