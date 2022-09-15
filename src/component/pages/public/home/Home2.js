import React, { useState, useEffect, useContext } from "react";

import { Layout } from "../../../common";
import Tilt from "react-parallax-tilt";
import LogoBanner from "../../../common/logoBanner/LogoBanner";
import FeatureBrands from "./FeatureBrands";
import FeaturedArtist from "./FeaturedArtist";
import GetStarted from "./GetStarted";
import CategoryList from "./CategoryList";
import "./Home2.css";
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
import styled from "styled-components";
import Accordion from 'react-bootstrap/Accordion';
// import ground from "../../../../../public/ground.png";

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
import medium from "../../../../assets/images/mediumWhite.png";
import twitter from "../../../../assets/images/bowled-images/twitter.svg";
import telegram from "../../../../assets/images/bowled-images/telegram.svg";
import pvsp from "../../../../assets/images/bowled-images/pvsp.png";
import GetAssets from "./GetAssets";
import WaitlistModal from "../../private/Waitlist/WaitlistModal";
import { userApiCallGet } from "../../../../Axios/User";
// import img1 from "../../../../../src/assets/images/6.png";
import game1 from "../../../../assets/images/fig1.png";
import game2 from "../../../../assets/images/fig2.png";

import game3 from "../../../../assets/images/fig3.png";
import game4 from "../../../../assets/images/new1.png";
import linkedin from "../../../../assets/images/linkedin.svg";
import download from "../../../../assets/images/download1.svg";


import facebook from "../../../../assets/images/facebook.svg";
import logo_white from "../../../../assets/images/logo-white.svg";
import blog1 from "../../../../assets/images/blog1.png";
import discord_icon from "../../../../assets/images/discord_icon.svg";
import team1 from "../../../../assets/images/team1.png";
import token from "../../../../assets/images/token.png";
import orio_game from "../../../../assets/images/orio_game.png";
import game_bold from "../../../../assets/images/game_bold.png";
import game_npl from "../../../../assets/images/game_npl.png";
import gameTap from "../../../../assets/images/game_tap_tap.png";
import sixr from "../../../../assets/images/sixr.png";
import cach from "../../../../assets/images/game_cach.png";
import about1 from "../../../../assets/images/about1.png";
import about2 from "../../../../assets/images/about2.png";
import about3 from "../../../../assets/images/about3.png";
import about4 from "../../../../assets/images/6.png";
import about5 from "../../../../assets/images/7.png";
import about6 from "../../../../assets/images/8.png";

// import about1 from "../../../../assets/images/about1.png";
import team2 from "../../../../assets/images/team2.png";
import team3 from "../../../../assets/images/team3.png";
import team4 from "../../../../assets/images/team4.png";
import team5 from "../../../../assets/images/team5.png";
import team6 from "../../../../assets/images/team6.png";
import team7 from "../../../../assets/images/team7.png";
import team8 from "../../../../assets/images/team8.png";
import team9 from "../../../../assets/images/team9.png";
import logoWhite from "../../../../assets/images/logo-white.svg";
import shadow from "../../../../assets/images/shadow.svg";

import cachgame  from "../../../../assets/images/cachgame.png";
import boldgame  from "../../../../assets/images/boldgame.png";
import sixrgame  from "../../../../assets/images/sixrgame.png";
import taptapgame  from "../../../../assets/images/taptapgame.png";
import tipgame  from "../../../../assets/images/tipgame.png";
import nplgame  from "../../../../assets/images/nplgame.png";
import nplgameNew from "../../../../assets/images/nplNew.png";









const Home2 = () => {
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
  const [windowSize, setWindowSize] = useState(getWindowSize());
  console.log(windowSize, "windowSize");
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    console.log("test");
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
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
  const [faqNumber, setFaqNumber] = useState(0);
  const openBox = (e) => {
    // alert("helllo")
    console.log("test", e);
    if (e == faqNumber) {
      setFaqNumber(0);
    } else {
      setFaqNumber(e);
    }
  };



  return (
    <>
     

<nav className="section_nav">
  <div className="ham-menu">
    <span className="line line1"></span>
    <span className="line line2"></span>
    <span className="line line3"></span>
  </div>
  <ul>
    <li><a href="#section1"><span className="circle"></span>Home</a></li>
    <li><a href="#section2"><span className="circle"></span>About Us</a></li>
    <li><a href="#section3"><span className="circle"></span>Our Games</a></li>
    <li><a href="#section4"><span className="circle"></span>BWLD Coins </a></li>
    <li><a href="#section5"><span className="circle"></span>Roadmap</a></li>
    <li><a href="#section6"><span className="circle"></span>The Team</a></li>
    <li><a href="#section7"><span className="circle"></span>Community</a></li>
    {/* <li><a href="#section8"><span className="circle"></span>Blog</a></li> */}
    <li><a href="#section9"><span className="circle"></span>FAQ</a></li>
  </ul>
</nav>

 <section id="section1" className="content-section main_section">
  <div className="shadow_abs">
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>

  </div>
  <div className="top_logo">
    <a href="#"><img src={logoWhite}/></a>
  </div>
  <div className="sc_container main_section_content text-center">
    <h1>OWN  PLAY  EARN</h1>
    <h2>World’s first Play-to-Earn Social Gaming Platform</h2>
    <div style={{marginLeft:"18px"}}>
    <a style={{marginTop:"28px"}} href="https://apps.apple.com/us/app/bowled-io/id1642708537" > <img style={{height:"50px"}} src={download}></img></a> 
    <a href='https://play.google.com/store/apps/details?id=com.bowled.Bowled&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{ height: "73px",
    width: "179px" , marginLeft:"4px"}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
    </div>
  </div>
</section>

 <section id="section2" className="content-section about_section">
  <div className="sc_container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="about_left">
          <div className="title">About Us</div>
  

          <p>

          Hi, I am Yorky from Bowled, to guide you through the rails of destiny :) 
          <br/>
          <br/>
          Welcome to the world’s first social gaming platform where you can own, play, trade and earn in fun games using your digital sporting assets.
 <br />
 <br />
               Join our community of gamers, traders, collectors and game developers. Live your passion of e-sports through your mobile phone.
               <br/><br/>
                Awesome, isn’t it?
             {/* <span>Hi, I am Yorky, a superior mascot, to guide you through the rails of destiny.</span>
            <br />
            <br />
              A superior mascot, to guide you through the rails of destiny. 
              Welcome to the world’s seasoned social gaming platform - A NFT ecosystem that allows players to OWN, PLAY, TRADE, EARN with their assets. 
              <br />
              <br />
              Overrule through a community of gamers, NFT Traders, Collectors and Web3 game developers, all in one platform. Live your passion of e-sports through your mobile phone.
              <br />
              <br />
              Awesome, isn’t it? */}
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="about_photos">
          <span><img src={about1 } /></span>
          <span><img src={about2 } /></span>
          <span><img src={about3 } /></span>
          <span><img src={about4 } /></span>
          <span><img src={about5 } /></span>
          <span><img src={about6 } /></span>
        </div>
      </div>
    </div>
    
  </div>
</section>

<section id="section3" className="content-section game_section">
  <div className="sc_container">
    <div className="title text-center">Game ONNN!</div>
    <div className="sub_title text-center">Let the games begin . . . .</div>
    <div className="row">
      <div className="col-md-4 col-sm-6 col-6">
        <div className="game_box">
          <a href="#">
            <img src={cachgame} />
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-6">
        <div className="game_box">
          <img src={boldgame} />
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-6">
        <div className="game_box">
          <img src={sixrgame} />
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-6">
        <div className="game_box">
          {/* <div className="comingsoon_label">Coming Soon</div> */}
          <img src={taptapgame} />
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-6">
        <div className="game_box">
          {/* <div className="comingsoon_label">Coming Soon</div> */}
          <img src={tipgame}/>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-6">
        {/* <div className="game_box">
          <div className="comingsoon_label">Coming Soon</div>
          <img src={nplgameNew} style={{borderRadius:"27px" , height:"250px" , width:"250px"}} />
        </div>  */}
      </div>
    </div>
    {/* <button className="button">Explore Upcoming Games
      <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
      </svg>
    </button> */}
  </div>
</section>

<section id="section4" className="content-section token_section">
  <div className="sc_container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="token_section_left">
          <img src={token} />
          <div className="title">EARNING WITH BOWLED.IO</div>
          <div className="sub_title">Bid adieu to score for fun.. It’s time to play and earn.</div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="token_section_right">
          <ul>
            <li>Win matches against other players.</li>
            <li>Get Pro-filed by ranking superior in tournaments.</li>
            <li>Generate sponsorship and earn by ticketing your stadium.</li>
            <li>Rent your assets for riches!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="section5" className="content-section roadmap_section">
  <div className="sc_container roadmap_content">
    <div className="title text-center">THE ROAD AHEAD</div>
    <ul>
      <li>
        <div className="span_date">Aug '22</div>
        <span>1</span>
        <div className="roadmap_box">
          <h5>Closed beta game app launch</h5>
        </div>
      </li>
      <li>
        <div className="span_date">Sep '22</div>
        <span>2</span>
        <div className="roadmap_box">
          <h5>Launch Native Marketplace</h5>
          <p>Primary asset sale</p>
        </div>
      </li>
      <li className="current">
        <div className="span_date">Q4 '22</div>
        <span>3</span>
        <div className="roadmap_box">
          <h5>Launch BWLD Coins</h5>
          <p>Multi-gaming platform with various game formats</p>
        </div>
      </li>
      <li>
        <div className="span_date">Q1 '23</div>
        <span>4</span>
        <div className="roadmap_box">
          <h5>Unified economy and rewards.</h5>
          <p>Tournaments and competitive reward system</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section id="section6" className="content-section team_section">
  <div className="shadow_abs">
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
  </div>
  <div className="sc_container">
    <div className="title text-center">THE OG SQUAD</div>
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team1} />
            <a href="https://www.linkedin.com/in/akshaykhandelwal/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Akshay Khandelwal</h6>
            <span>Strategy</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team2} />
            <a href="https://www.linkedin.com/in/rahul-singh-626167b/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Rahul   Singh</h6>
            <span>Marketing</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team3} />
            <a href="https://www.linkedin.com/in/imahima/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Neeraj   Jhanji</h6>
            <span>Product</span>
          </div>
        </div>
      </div>
      {/* <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team4}/>
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Shubham   Goyal</h6>
            <span>Corporate</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team5} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Sri   Vathsa</h6>
            <span>Role</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team6} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Ashank   Rajendran</h6>
            <span>Tech</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team7} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Harsh   Gudhka</h6>
            <span>Product & Growth</span>
          </div>
        </div>
      </div> */}
   
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team9} />
            <a href="https://www.linkedin.com/in/iamshylesh/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Shylesh monceey</h6>
            <span>Gaming</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team4}/>
            <a href="https://www.linkedin.com/in/harkirat-singh-lamba-591520b1/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Harkirat Singh</h6>
            <span>Tech</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="team_box">
          <div className="team_img">
            <img src={team5} />
            <a href="https://www.linkedin.com/in/varunmisar/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div className="team_detail">
            <h6>Varun Misar</h6>
            <span>Corporate</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="section7" className="content-section community_section">
  <div className="shadow_abs">
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
  </div>
  <div className="sc_container">
    <div className="joinCommunity">
      Join The Community
    </div>
    <div className="row align-items-center">
        <div className="col-md-6">
          <div className="discord_left">
            <span>BWLD</span>
            <span>BWLD</span>
            <span>BWLD</span>
            <span>BWLD</span>
            <span>BWLD</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="discord_box">
            <a href="https://discord.gg/auxtKBvf">
            <img src={discord_icon} />

            <button className="button">Discord
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </button>
            </a>
          </div>
        </div>
    </div>
  </div>
</section>

{/* <section id="section8" className="content-section blog_section">
  <div className="shadow_abs">
    <span><img src={shadow}/></span>
    <span><img src={shadow}/></span>
    <span><img src={shadow}/></span>
    <span><img src={shadow}/></span>
  </div>
  <div className="sc_container">
    <div className="title">FOR BLOG’S SAKE!</div>
    <div className="row" style={{dislay:"flex" , justifyContent:"center"}}>
     <a href="https://medium.com/@bowled"> <img style={{width:"50%"}} src={medium}></img></a>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
            <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog_box">
          <div className="blog_img">
          <img src={blog1}/>    
          </div>
          <div className="blog_content">
            <div className="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div className="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section id="section9" className="content-section faq_section">
  <div className="sc_container">
    <div className="title text-center">WHAT THE FAQ!</div>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>CACH</Accordion.Header>
        <Accordion.Body>
        Catch to win the match!<br></br>

  -An exciting game to keep you on your gloves.<br></br>
 -Catch every throw as the difficulty level increases.<br></br>
 -When you miss the spin, you miss the win. <br></br>
 -A Single player game that helps you build focus and keeps you hooked for the win.<br></br>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>CRIC5</Accordion.Header>
        <Accordion.Body>
        Pick your 5, and see who survives!<br></br>

-An euphoric multiplayer game that takes you down the memory lane of your childhood.<br></br>
-Each player gets to pick 5  cards that will battle against your opponent.<br></br>
-The win is based on the cards picked by each player.<br></br>
-Collect unique  character cards that are a virtual representation of strengths possessed by your real life cricket heroes.<br></br>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>SIXR</Accordion.Header>
        <Accordion.Body>
        Sixr is a ticker for all solo winners!  <br></br>

 -A relaxing game for solitary players.<br></br>
-The stronger you hit, the better you score.<br></br>
-Don’t forget to aim, don’t miss the shot, for you’ll lose the stump and the riches you got. <br></br>

        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="3">
        <Accordion.Header> NPL</Accordion.Header>
        <Accordion.Body>
       
It’s so swell, you can’t foretell. Match with an opponent to play NPL!<br></br>

-An interesting multiplayer turn-by-turn cricket game.<br></br>
-Unique NFT characters with distinctive playstyle and strength.<br></br>
-Match with opponent to play-for-fun or pick NFT players to play and earn.<br></br>
-Keep your wins aligned to rank in the tournament find. <br></br>

        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>

    {/* <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is Bowled.io and what does it do?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Do I need multiple logins to access different games?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Is Bowled.io a safe social gaming platform?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Can I access the game from any device?
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
            How are the various games on Bowled.io platform interconnected?
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
            Can I Free-to-Play VS Play-to-Earn on Bowled.io?
          </button>
        </h2>
        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </d
      
      
      
      
      
      
      
      jiv>
    </div> */}
  </div>
</section>

<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="footer_col">
          <a href="#"><img src={logo_white} /></a>
          <p>                Challenge millions of gamers around the world in various game formats, deploy your skills, knowledge & win big rewards!
 </p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="footer_col">
          <h6>About us</h6>
          <ul>
            <li><a href="#section6">Team</a></li>
            <li><a href="#section3">Portfolio</a></li>
            <li><a href="https://bowled-io.gitbook.io/bowled.io-light-paper/">Litepaper</a></li>
            <li><a href="https://www.linkedin.com/company/bowleddotio/posts/?feedView=all">Careers</a></li>
            <li><a href="mailto:hello@bowled.io?subject=Hey Bowled">Contact us
            </a></li>
  5845847

          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="footer_col">
          <h6>Download</h6>
          {/* <p>                Challenge millions of gamers around the world in various game formats, deploy your skills, knowledge & win big rewards!
 </p> */}
<div style={{display:"inline-grid"}}>
 <a href="https://apps.apple.com/us/app/bowled-io/id1642708537" > <img style={{
    width: "86%",
    marginLeft: "11px"
}} src={download}></img></a> 
 <a href='https://play.google.com/store/apps/details?id=com.bowled.Bowled&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{     width: "104%",
    height: "76%"}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
</div>
          <a  href="tel:+908 89097 890">
            {/* +908 89097 890 */}
          </a>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="social_icons">
          <a href="https://www.facebook.com/bowleddotio"><img src={facebook} /></a>
          <a href="https://www.instagram.com/bowled.io/"><img src={insta} /></a>
          <a href="https://twitter.com/bowleddotio"><img src={twitter} /></a>
          <a href="https://www.linkedin.com/company/bowleddotio/posts/?feedView=all"><img src={linkedin} /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright">
  Copyright 2002 FanEngage Pte. Ltd., All Rights Reserved
  </div>
</footer>





    </>
  );
};

export default Home2;
