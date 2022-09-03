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
import medium from "../../../../assets/images/bowled-images/medium.svg";
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
import about4 from "../../../../assets/images/about4.png";
import about5 from "../../../../assets/images/about5.png";
import about6 from "../../../../assets/images/about6.png";

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
     

<nav class="section_nav">
  <div class="ham-menu">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>
  <ul>
    <li><a href="#section1"><span class="circle"></span>Home</a></li>
    <li><a href="#section2"><span class="circle"></span>About Us</a></li>
    <li><a href="#section3"><span class="circle"></span>Our Games</a></li>
    <li><a href="#section4"><span class="circle"></span>BWLD Tokens </a></li>
    <li><a href="#section5"><span class="circle"></span>Roadmap</a></li>
    <li><a href="#section6"><span class="circle"></span>The Team</a></li>
    <li><a href="#section7"><span class="circle"></span>Community</a></li>
    <li><a href="#section8"><span class="circle"></span>Blog</a></li>
    <li><a href="#section9"><span class="circle"></span>FAQ</a></li>
  </ul>
</nav>

 <section id="section1" class="content-section main_section">
  <div class="shadow_abs">
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>

  </div>
  <div class="top_logo">
    <a href="#"><img src={logoWhite}/></a>
  </div>
  <div class="sc_container main_section_content text-center">
    <h1>OWN  PLAY  EARN</h1>
    <h2>World’s first Play-to-Earn Social Gaming Platform</h2>
  </div>
</section>

 <section id="section2" class="content-section about_section">
  <div class="sc_container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="about_left">
          <div class="title">About Us</div>
          <p>
             <span> Hi! I am Yorky</span>
            
              A superior mascot, to guide you through the rails of destiny. 
              Welcome to the world’s seasoned social gaming platform - A NFT ecosystem that allows players to OWN, PLAY, TRADE, EARN with their assets. 
              
              Kowtow/Overrule through a community of gamers, NFT Traders, Collectors and Web3 game developers, all in one platform. Live your passion of e-sports through your mobile phone.
            
              Awesome, isn’t it?
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="about_photos">
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

<section id="section3" class="content-section game_section">
  <div class="sc_container">
    <div class="title text-center">Game ONNN!</div>
    <div class="sub_title text-center">Let the games begin . . . .</div>
    <div class="row">
      <div class="col-md-4 col-sm-6 col-6">
        <div class="game_box">
          <a href="#">
            <img src={cach} />
          </a>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <div class="game_box">
          <img src={sixr} />
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <div class="game_box">
          <img src={gameTap} />
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <div class="game_box">
          <div class="comingsoon_label">Coming Soon</div>
          <img src={game_npl} />
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <div class="game_box">
          <div class="comingsoon_label">Coming Soon</div>
          <img src={game_bold}/>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-6">
        <div class="game_box">
          <div class="comingsoon_label">Coming Soon</div>
          <img src={orio_game} />
        </div> 
      </div>
    </div>
    <button class="button">Explore Upcoming Games
      <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
      </svg>
    </button>
  </div>
</section>

<section id="section4" class="content-section token_section">
  <div class="sc_container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="token_section_left">
          <img src={token} />
          <div class="title">EARNING WITH BOWLED.IO</div>
          <div class="sub_title">Bid adieu to score for fun.. It’s time to play and earn.</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="token_section_right">
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

<section id="section5" class="content-section roadmap_section">
  <div class="sc_container roadmap_content">
    <div class="title text-center">THE ROAD AHEAD</div>
    <ul>
      <li>
        <div class="span_date">Aug '22</div>
        <span>1</span>
        <div class="roadmap_box">
          <h5>Closed beta game app launch</h5>
        </div>
      </li>
      <li>
        <div class="span_date">Sep '22</div>
        <span>2</span>
        <div class="roadmap_box">
          <h5>Launch Native Marketplace</h5>
          <p>Primary asset sale</p>
        </div>
      </li>
      <li class="current">
        <div class="span_date">Q4 '22</div>
        <span>3</span>
        <div class="roadmap_box">
          <h5>Launch BWLD Tokens</h5>
          <p>Multi-gaming platform with various game formats</p>
        </div>
      </li>
      <li>
        <div class="span_date">Q1 '23</div>
        <span>4</span>
        <div class="roadmap_box">
          <h5>Unified economy and rewards.</h5>
          <p>Tournaments and competitive reward system</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section id="section6" class="content-section team_section">
  <div class="shadow_abs">
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
  </div>
  <div class="sc_container">
    <div class="title text-center">THE OG SQUAD</div>
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team1} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Akshay Khandelwal</h6>
            <span>Founder</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team2} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Rahul   Singh</h6>
            <span>Founder</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team3} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Neeraj   Jhanji</h6>
            <span>Founder</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team4}/>
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Shubham   Goyal</h6>
            <span>Corporate</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team5} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Sri   Vathsa</h6>
            <span>Role</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team6} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Ashank   Rajendran</h6>
            <span>Tech</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team7} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Harsh   Gudhka</h6>
            <span>Product & Growth</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team8} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Vikesh</h6>
            <span>Product & Growth</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="team_box">
          <div class="team_img">
            <img src={team9} />
            <a href="https://www.linkedin.com/" target="_blank"><img src=  {linkedin}/></a>
          </div>
          <div class="team_detail">
            <h6>Shylesh monceey</h6>
            <span>Design</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="section7" class="content-section community_section">
  <div class="shadow_abs">
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
    <span><img src={shadow} /></span>
  </div>
  <div class="sc_container">
    <div class="row align-items-center">
        <div class="col-md-6">
          <div class="discord_left">
            <span>BWLD</span>
            <span>BWLD</span>
            <span>BWLD</span>
            <span>BWLD</span>
            <span>BWLD</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="discord_box">
            <img src={discord_icon} />
            <button class="button">Discord
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </button>
          </div>
        </div>
    </div>
  </div>
</section>

<section id="section8" class="content-section blog_section">
  <div class="shadow_abs">
    <span><img src={shadow}/></span>
    <span><img src={shadow}/></span>
    <span><img src={shadow}/></span>
    <span><img src={shadow}/></span>
  </div>
  <div class="sc_container">
    <div class="title">FOR BLOG’S SAKE!</div>
    <div class="row">
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
            <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog_box">
          <div class="blog_img">
          <img src={blog1}/>    
          </div>
          <div class="blog_content">
            <div class="blog_title">What is Bowled.io and what does it exactly do?</div>
            <div class="blog_desc">What is Bowled.io and what does it exactly do?</div>
            <a href="#">
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99975 2.00025L13.9995 14L1.99975 25.9998" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="section9" class="content-section faq_section">
  <div class="sc_container">
    <div class="title text-center">WHAT THE FAQ!</div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is Bowled.io and what does it do?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Do I need multiple logins to access different games?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Is Bowled.io a safe social gaming platform?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Can I access the game from any device?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
            How are the various games on Bowled.io platform interconnected?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
            Can I Free-to-Play VS Play-to-Earn on Bowled.io?
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="footer_col">
          <a href="#"><img src={logo_white} /></a>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer_col">
          <h6>About us</h6>
          <ul>
            <li><a href="#">Zeux</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer_col">
          <h6>Contact us</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <a  href="tel:+908 89097 890">+908 89097 890</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="social_icons">
          <a href="#"><img src={facebook} /></a>
          <a href="#"><img src={insta} /></a>
          <a href="#"><img src={twitter} /></a>
          <a href="#"><img src={linkedin} /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
    Copyright ® 2022 Lorem All rights Rcerved
  </div>
</footer>





    </>
  );
};

export default Home2;
