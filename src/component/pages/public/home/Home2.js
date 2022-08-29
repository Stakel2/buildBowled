import React, { useState, useEffect, useContext } from "react";

import { Layout } from "../../../common";
import Tilt from "react-parallax-tilt";
import LogoBanner from "../../../common/logoBanner/LogoBanner";
import FeatureBrands from "./FeatureBrands";
import FeaturedArtist from "./FeaturedArtist";
import GetStarted from "./GetStarted";
import CategoryList from "./CategoryList";
import "./Home2.scss";
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
import ground from "../../../../assets/images/ground.png";

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
import Lat1 from "../../../../assets/images/lat1.png";

import Lat2 from "../../../../assets/images/lat2.png";
import Lat3 from "../../../../assets/images/lat3.png";
import Coin from "../../../../assets/images/coin.png";
import Point from "../../../../assets/images/points.png";
import disc from "../../../../assets/images/disc.png";
import logoBowled from "../../../../assets/images/mainbow.png";
import BowledLogo from "../../../../assets/images/Bowled.png";

import boll from "../../../../assets/images/Union.png";
import img1 from "../../../../assets/images/6.png";
import img2 from "../../../../assets/images/7.png";
import img3 from "../../../../assets/images/8.png";
import img4 from "../../../../assets/images/9.png";
import img5 from "../../../../assets/images/18.png";
import img6 from "../../../../assets/images/19.png";
import img7 from "../../../../assets/images/20.png";
import img8 from "../../../../assets/images/21.png";
import img9 from "../../../../assets/images/31.png";
import img10 from "../../../../assets/images/30.png";

import img11 from "../../../../assets/images/32.png";
import img12 from "../../../../assets/images/33.png";

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
      <div className="mainContainer">
        <div className="firstSection">
          <div className="firstContainer">
            <img src={ground}></img>
          </div>

          <div className="bowlLogo">
            <Union5 src={logoBowled} />
            {/* <Bowled src={`https://file.rendit.io/n/GSixZJOvRP2IGG8mnZtQ.svg`} /> */}
          </div>

          <div className="textElement">
            OWN
            {"  "}
            PLAY
            {"  "}
            EARN
            {/* <img src="https://file.rendit.io/n/ezMzQQ54DNFIJggqM0Ny.svg">  </img> */}
          </div>
          <div className="descSection">
            World’s first Play-to-Earn Social Gaming Platform
          </div>
          {/* <div className="logo">
            <img src="https://file.rendit.io/n/ezMzQQ54DNFIJggqM0Ny.svg">  </img>

          </div> */}
        </div>
        <div className="secondSection">
          <div className="secondInternal">
            {Number(windowSize.innerWidth) >= 880 ? (
              <div className="roadMapConatiner">
                <div className="dots">
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                </div>
                <div className="content">
                  <div className="conText"> About Us</div>
                  <div className="conText"> Our Games</div>
                  <div className="conText"> BWLD Tokens</div>
                  <div className="conText"> RoadMap</div>
                  <div className="conText"> The Team</div>
                  <div className="conText"> Community</div>
                  <div className="conText"> Blog</div>
                  <div className="conText"> FAQ</div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="aboutus">
              <div className="textData">
                <div className="mainText">ABOUT US</div>
                <div className="descText">
                  <p>
                    NFT PREMIER LEAGUE (NPL) IS A WEB3 GAMING APP IN WHICH YOU
                    OWN YOUR PLAYERS IN THE FORM OF NFTs. AND YOU CAN MAKE
                    HANDSOME EARNINGS BY PLAYING CRICKET MATCHES. IT'S A GAME TO
                    LIVE YOUR PASSION FOR CRICKET AGAIN WHILE GETTING REWARDED
                    FOR IT.
                  </p>
                </div>
              </div>
            </div>
            <div className="secondNfts">
              <img src={img1}></img>
              <img src={img2}></img>
              <img src={img3}></img>
              <img src={img4}></img>
              <img src={img5}></img>
              <img src={img6}></img>
              {Number(windowSize.innerWidth) <= 1170 &&
              Number(windowSize.innerWidth) >= 860 ? (
                <></>
              ) : (
                <>
                  <img src={img7}></img>
                  <img src={img8}></img>
                  <img src={img9}></img>
                </>
              )}

              {Number(windowSize.innerWidth) <= 1484 ? (
                <></>
              ) : (
                <>
                  <img src={img10}></img>
                  <img src={img11}></img>
                  <img src={img12}></img>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="section3Container">
            {Number(windowSize.innerWidth) >= 880 ? (
              <div className="roadMapConatiner">
                <div className="dots">
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                </div>
                <div className="content">
                  <div className="conText"> About Us</div>
                  <div className="conText"> Our Games</div>
                  <div className="conText"> BWLD Tokens</div>
                  <div className="conText"> RoadMap</div>
                  <div className="conText"> The Team</div>
                  <div className="conText"> Community</div>
                  <div className="conText"> Blog</div>
                  <div className="conText"> FAQ</div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="gameSection">
              <div className="mainText">
                <p>OUR GAMES</p>
              </div>
              <div className="descText">
                <p>World’s first Play-to-Earn Social Gaming Platform</p>
              </div>
              <div className="gameContainer">
                <div>
                  <img src={Lat1} />
                </div>

                <div>
                  <img src={Lat3} />
                </div>
                <div className="nplGame">
                  <img src={Lat2} />
                  <div>
                    <p className="main"> NPL</p>
                    <p className="desc"> NFT PREMIER LEAGUE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="section4Container">
            {Number(windowSize.innerWidth) >= 880 ? (
              <div className="roadMapConatiner">
                <div className="dots">
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                </div>
                <div className="content">
                  <div className="conText"> About Us</div>
                  <div className="conText"> Our Games</div>
                  <div className="conText"> BWLD Tokens</div>
                  <div className="conText"> RoadMap</div>
                  <div className="conText"> The Team</div>
                  <div className="conText"> Community</div>
                  <div className="conText"> Blog</div>
                  <div className="conText"> FAQ</div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="coinContainer">
              <div>
                <img src={Coin}></img>
              </div>
              <div>EARNINGS WITH</div>
              <div>BOWLED.IO</div>
            </div>
            <div className="points">
              <div className="pointsImg">
                <img src={Point} />
                <img src={Point} />
                <img src={Point} />
                <img src={Point} />
                <img src={Point} />
              </div>
              <div className="pointsText">
                <p> Selling player or stadium cards</p>
                <p> Generating sponsorship & ticketing income</p>
                <p>Renting your assets</p>
                <p> Winning matches against other fans</p>

                <p> Finishing tournaments in top positions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section5">
          <div className="section5Container">
            {Number(windowSize.innerWidth) >= 880 ? (
              <div className="roadMapConatiner">
                <div className="dots">
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                  <div className="dot"> </div>
                </div>
                <div className="content">
                  <div className="conText"> About Us</div>
                  <div className="conText"> Our Games</div>
                  <div className="conText"> BWLD Tokens</div>
                  <div className="conText"> RoadMap</div>
                  <div className="conText"> The Team</div>
                  <div className="conText"> Community</div>
                  <div className="conText"> Blog</div>
                  <div className="conText"> FAQ</div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="contRoadMap">
              <FlexColumn16>
                <Text40>Roadmap</Text40>
                <FlexRow6>
                  <FlexColumn17>
                    <Text41>q1</Text41>
                    <Text42>q2</Text42>
                    <Text43>q3</Text43>
                    <Text44>q4</Text44>
                    {/* <Text45>q1</Text45> */}
                  </FlexColumn17>
                  {/* <Element37>
                    <Image18
                      src={`https://file.rendit.io/n/cTsabbhtBTO1L0f64OqW.svg`}
                    />
                    <Text46>1</Text46>
                    <Text47>2</Text47>
                    <Text48>3</Text48>
                    <Text49>4</Text49>
                    <Text50>5</Text50>
                  </Element37> */}
                  <div className="lineVector">
                  <div className="vector1"></div>
                  <div className="quest">
                   
                    <div className="dot">  </div>
                    <div className="dot">  </div>

                    <div className="dot">  </div>
                    <div className="dot">  </div>
                  </div>
                  </div>
                  <div className="contentCon">
                    <div className="content">
                      <div className="maint"> CACH</div>
                   <p>   Catch to win the match!</p>

                      <p> - An exciting game to keep you on your gloves.</p>
                      <p>
                          - Catch every throw as the difficulty level increases.
                      </p>
                      <p> -  When you miss the spin, you miss the win.</p>
                      <p>
                        -  A Single player game that helps you build focus and
                        keeps you hooked for the win.
                      </p>
                    </div>
                    <div className="content">
                      <div className="maint"> CRIC5</div>
                 <p>     Pick your 5, and see who survives!</p>

                      <p> - An euphoric multiplayer game that takes you down the memory lane of your childhood.
.</p>
                      <p>
                      -  Each player gets to pick 5 NFT cards that will battle against your opponent.

                      </p>
                      <p>
                       - The win is based on the cards picked by each player.
.</p>
                      <p>
                       - Collect unique NFT character cards that are a virtual representation of strengths possessed by your real life cricket heroes.
                      </p>
                    </div>
                    <div className="content">
                      <div className="maint"> SIXR</div>
                     <p> Sixr is a ticker for all solo winners! / </p>

                      <p> - A relaxing game for solitary players.</p>
                      <p>
                      - The stronger you hit, the better you score.
                      </p>
                      <p> - Don’t forget to aim, don’t miss the shot, for you’ll lose the stump and the riches you got. 
</p>
                      {/* <p>
                        A Single player game that helps you build focus and
                        keeps you hooked for the win.
                      </p> */}
                    </div>
                    <div className="content">
                      <div className="maint"> NPL</div>
                 <p>     It’s so swell, you can’t foretell. Match with an opponent to play NPL!</p>


                      <p> - An interesting multiplayer turn-by-turn cricket game.
</p>
                      <p>
                     - Unique NFT characters with distinctive playstyle and strength.

                      </p>
                      <p> - Match with opponent to play-for-fun or pick NFT players to play and earn.
</p>
                      <p>
                       - Keep your wins aligned to rank in the tournament find. 

                      </p>
                    </div>
                  </div>
                </FlexRow6>
              </FlexColumn16>
            </div>
          </div>
        </div>
        {/* <div className="section6">
<div className="section6Container">

</div>
        </div> */}
        <div className="section7">
          <div className="section7Container">
            <div className="bowld">
              <p className="p1" style={{ opacity: "100%" }}>
                {" "}
                BWLD
              </p>
              <p className="p1" style={{ opacity: "70%" }}>
                {" "}
                BWLD
              </p>
              <p className="p1" style={{ opacity: "60%" }}>
                {" "}
                BWLD
              </p>
              <p className="p1" style={{ opacity: "40%" }}>
                {" "}
                BWLD
              </p>
              <p className="p1" style={{ opacity: "20%" }}>
                {" "}
                BWLD
              </p>
            </div>
            <div className="discordContainer">
              <div className="discCard">
              <a href="https://discord.gg/tcSrDWQTyj" target="_blank">
                <div className="discImg">
                
                  <img src="https://file.rendit.io/n/ZxnYjOoJstTuO7UiEINV.png"></img>
                
                  <div className="click"></div>
                
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <MacBookPro1>
            <BlackFlexColumn>
              <FlexRow20>
                <Element62>
                  <Element63>
                    <Paragraph20>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </Paragraph20>
                    <Text95>
                      Zeux
                      <br />
                      Portfolio
                      <br />
                      Careers
                      <br />
                      Contact us
                    </Text95>
                    <Text96>@Logo</Text96>
                    <Text97>About us</Text97>
                    <FlexColumn27>
                      <Text98>Contact us</Text98>
                      <Paragraph21>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </Paragraph21>
                      <Text99>+908 89097 890</Text99>
                    </FlexColumn27>
                  </Element63>
                  <Text100>LOGO</Text100>
                </Element62>
                <Image38
                  src={`https://file.rendit.io/n/nvs5NXPDqgNW9oW1mnqp.svg`}
                />
              </FlexRow20>
              <Line src={`https://file.rendit.io/n/bl5wyqjq9yKggoM5Ku4Z.svg`} />
              <Paragraph22>Copyright ® 2021 Lorem All rights Rcerved</Paragraph22>
            </BlackFlexColumn>
          </MacBookPro1> */}
        <div className="footerSec">
          <div className="footerContainer">
            <div className="logoSec">
              <div className="logo"><img src={logoBowled}></img></div>
              <div className="logodesc">
              Challenge millions of gamers around the world in various game formats, deploy your skills, knowledge & win big rewards!
              </div>
            </div>
            <div className="aboutSec">
              <div className="aboutdiv">
                <div className="aboutus">ABOUT US</div>
                <div className="decCont">
                  <div className="decText">
                    <p> Zeux</p>
                    <p> Portfolio</p>

                    <p> Careers</p>

                    <p> Contact us</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="contactSec">
              <div className="contact">CONTACT US</div>
              <div className="contactdesc">
                lorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsum
              </div>
            </div> */}
            <div className="socialSec">
              <div className="social">CONTACT US</div>
              <div className="socialdesc">
              <ul className="social_links">
            <li>
              <a href="https://twitter.com/Bowleddotio" target="_blank">
                <img src={twitter} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bowled.io/" target="_blank">
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
              </div>
            </div>
          </div>
          <div className="copyright">
            
          Copyright ® 2021 Lorem All rights Rcerved
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;

const Image4 = styled.img`
  width: 691.51px;
  height: 76.93px;
  mix-blend-mode: normal;
`;
const Element22 = styled.div`
  width: 334px;
  height: 437.36px;
  position: relative;
`;
const Ellipse3 = styled.img`
  width: 141px;
  height: 141px;
  mix-blend-mode: normal;
  position: absolute;
  top: -30px;
  left: 65px;
`;
const Union3 = styled.img`
  width: 334px;
  height: 537.36px;
  mix-blend-mode: normal;
  position: absolute;
  top: -50px;
`;
const Union2 = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/ZXcO3zVTIPDwE5YiUgxI.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 64px 20px 129px;
`;
const Ellipse2 = styled.img`
  width: 141px;
  height: 141px;
  mix-blend-mode: normal;
`;
const Union = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/HuF7zBel6QRvL9PPN6Tt.svg");
  background-size: cover;
  position: absolute;
  top: -50px;
  left: 778px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 128px 20px 129px;
`;
const Union1 = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/HuF7zBel6QRvL9PPN6Tt.svg");
  background-size: cover;
  position: absolute;
  top: -50px;
  left: -50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 128px 20px 129px;
`;
const MacBookPro1 = styled.div`
  mix-blend-mode: normal;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Element28 = styled.div`
  width: 15px;
  height: 332px;
  position: relative;
`;
const Image10 = styled.img`
  width: 2px;
  height: 324px;
  mix-blend-mode: normal;
  position: absolute;
  top: 8px;
  left: 7px;
`;
const Ellipse8 = styled.img`
  width: 7px;
  height: 7px;
  mix-blend-mode: normal;
  position: absolute;
  top: 5px;
  left: 4px;
`;
const Union6 = styled.img`
  width: 7px;
  height: 227px;
  mix-blend-mode: normal;
  position: absolute;
  top: 92px;
  left: 4px;
`;
const Ellipse9 = styled.div`
  height: 15px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/Z4DBjWrvpi8uYq0eLuOD.svg");
  background-size: cover;
  position: absolute;
  top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
`;
const Ellipse10 = styled.img`
  width: 7px;
  height: 7px;
  mix-blend-mode: normal;
`;
const FlexColumn1 = styled.div`
  width: 88px;
  height: 332px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 22px 0px;
`;
const Text2 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Jost;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 24px 0px;
`;
const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 27px 0px;
`;
const Text4 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 27px 0px;
`;
const Text8 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;
const FlexColumn3 = styled.div`
  width: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Element1 = styled.img`
  width: 175px;
  height: 206px;
  mix-blend-mode: normal;
`;
const Element5 = styled.img`
  width: 175px;
  height: 205px;
  mix-blend-mode: normal;
`;
const Element6 = styled.img`
  width: 176px;
  height: 205px;
  mix-blend-mode: normal;
`;
const Ellipse20 = styled.img`
  width: 38px;
  height: 38px;
  mix-blend-mode: normal;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;
const Text51 = styled.div`
  mix-blend-mode: normal;
  width: 134px;
  font-size: 24px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  align-self: flex-start;
  margin: 0px 0px 7px 19px;
`;
const Text53 = styled.div`
  mix-blend-mode: normal;
  width: 134px;
  font-size: 24px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  align-self: flex-start;
`;
const Paragraph6 = styled.div`
  mix-blend-mode: normal;
  width: 330px;
  font-size: 18px;
  font-family: Noto Sans;
  color: #ffffff;
  white-space: pre-wrap;
`;
const Element39 = styled.div`
  width: 1728px;
  height: 643.36px;
  position: absolute;
  top: 121px;
`;
const Element40 = styled.div`
  width: 1126px;
  height: 437.36px;
  position: absolute;
  top: 206px;
  left: 301px;
`;
const Text63 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0px 0px 27px 0px;
`;
const Text71 = styled.div`
  mix-blend-mode: normal;
  font-size: 220px;
  font-family: Product Sans;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
`;
const FlexRow9 = styled.div`
  width: 1728px;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Ellipse58 = styled.img`
  width: 7px;
  height: 7px;
  mix-blend-mode: normal;
  position: absolute;
  top: 49px;
  left: 4px;
`;
const Text77 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 23px 0px;
`;
const Text78 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 26px 0px;
`;
const Text82 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 24px 0px;
`;
const Text83 = styled.div`
  mix-blend-mode: normal;
  font-size: 20px;
  font-family: Jost;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 18px 0px;
`;
const Element53 = styled.div`
  width: 395.49px;
  height: 456px;
  position: relative;
`;
const Image1 = styled.img`
  width: 327px;
  height: 250px;
  mix-blend-mode: normal;
  position: absolute;
`;
const Paragraph9 = styled.div`
  mix-blend-mode: normal;
  width: 325px;
  font-size: 22px;
  font-family: Product Sans;
  font-weight: 700;
  color: #ffffff;
`;
const Element54 = styled.div`
  align-self: stretch;
  height: 75.06px;
  position: relative;
  min-width: 329.12px;
`;
const Paragraph10 = styled.div`
  mix-blend-mode: normal;
  width: 325px;
  font-size: 22px;
  font-family: Product Sans;
  color: #ffffff;
  position: absolute;
`;
const Image24 = styled.img`
  width: 15.18px;
  height: 26.12px;
  mix-blend-mode: normal;
  position: absolute;
  top: 48.94px;
  left: 313.94px;
`;
const TimberwolfFlexColumn = styled.div`
  border-style: solid;
  border-color: #ffffff;
  box-shadow: 0px 20px 70px 0px rgba(0, 0, 0, 0.1);
  width: 329.12px;
  height: 390.12px;
  mix-blend-mode: normal;
  background-color: rgba(217, 217, 217, 0.1);
  display: flex;
  position: absolute;
  top: -1px;
  left: -1px;
  flex-direction: column;
  justify-content: flex-end;
  gap: 19px;
  align-items: flex-start;
  border-radius: 20px;
  padding: 31.94px 33.37px 31.94px 31px;
  border-width: 2px;
`;
const FlexRow16 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 334px;
  min-width: 856px;
  align-items: center;
  padding: 0px 22px;
  margin: 0px 0px 19.5px 0px;
`;
const Paragraph15 = styled.div`
  mix-blend-mode: normal;
  font-size: 22px;
  font-family: Product Sans;
  font-weight: 700;
  color: #ffffff;
`;
const Image29 = styled.img`
  width: 900px;
  height: 1px;
  mix-blend-mode: normal;
  align-self: center;
  margin: 0px 0px 49.5px 0px;
`;
const Image30 = styled.img`
  width: 16px;
  height: 16px;
  mix-blend-mode: normal;
  align-self: flex-end;
`;
const RootRoot = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MacBookPro = styled.div`
  width: 1728px;
  height: 1117px;
  mix-blend-mode: normal;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
`;
const Element19 = styled.div`
  width: 1728px;
  height: 478px;
  mix-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    rgba(196, 208, 134, 0) 0%,
    #c4d086 10%,
    #8ead3a 24%,
    #5d710f 63%,
    #354200 100%
  );
  position: absolute;
  top: 639px;
`;
const Element20 = styled.div`
  width: -webkit-fill-available;
  height: 141px;
  mix-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 73%
  );
  position: absolute;
  top: 69px;
`;
const Union4 = styled.img`
  width: -webkit-fill-available;
  height: 429px;
  mix-blend-mode: normal;
  position: absolute;
  top: 49px;
`;
const FlexColumn = styled.div`
  height: 407.86px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/kygKpZy9rciY3eOOddF4.svg");
  background-size: cover;
  position: absolute;
  top: 568px;
  left: 300.69px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 70.57px 213.8px 70.57px 222.31px;
`;
const Element21 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: -webkit-fill-available;
  height: 650px;
  mix-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    #044266 0%,
    rgba(0, 98, 87, 0.9) 87%,
    rgba(0, 97, 86, 0.8) 102%
  );
  position: absolute;
`;
const FlexRow = styled.div`
  width: -webkit-fill-available;
  display: flex;
  position: absolute;
  top: 129px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Element23 = styled.div`
  filter: blur(8px);
  width: 382px;
  height: 490px;
  mix-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 154%
  );
  position: absolute;
  top: 218px;
  left: 673px;
`;
const Element24 = styled.div`
  width: -webkit-fill-available;
  height: 437.36px;
  position: absolute;
  top: 327px;
  left: 301px;
`;
const Image5 = styled.img`
  width: 452px;
  height: 46px;
  mix-blend-mode: normal;
  position: absolute;
  top: 390px;
  left: 337px;
`;
const Ellipse4 = styled.img`
  width: 304px;
  height: 304px;
  mix-blend-mode: normal;
  position: absolute;
  top: 77px;
  left: 598px;
`;
const Image6 = styled.img`
  width: 703.5px;
  height: 789.5px;
  mix-blend-mode: normal;
  position: absolute;
  top: 102.5px;
`;
const Image7 = styled.img`
  width: -webkit-fill-available;
  height: 789.5px;
  mix-blend-mode: normal;
  position: absolute;
  top: 102.5px;
  left: 1025px;
`;
const WhiteFlexColumn = styled.div`
  backdrop-filter: blur(0px);
  width: -webkit-fill-available;
  height: 596px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 72px 233px 72px 234px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15.82px;
  align-items: center;
  margin: 0px 0px 292px 0px;
`;
const Union5 = styled.img`
  width: 69.98px;
  height: 70px;
  mix-blend-mode: normal;
`;
const Bowled = styled.img`
  width: 209.81px;
  height: 35.68px;
  mix-blend-mode: normal;
  align-self: flex-end;
  margin: 0px 0px 0.32px 0px;
`;
const Element25 = styled.div`
  height: 120px;
  position: relative;
  min-width: 1261px;
  margin: 0px 0px 23px 0px;
`;
const OWNPLAYEARN = styled.div`
  mix-blend-mode: normal;
  font-size: 138px;
  font-family: Jost;
  font-weight: 700;
  line-height: 120px;
  text-transform: uppercase;
  color: #ffffff;
  bottom: 15px;

  position: absolute;
  white-space: pre-wrap;
`;
const Ellipse5 = styled.img`
  width: 21px;
  height: 21px;
  mix-blend-mode: normal;
  position: absolute;
  top: 46px;
  left: 389px;
`;
const Ellipse6 = styled.img`
  width: 21px;
  height: 21px;
  mix-blend-mode: normal;
  position: absolute;
  top: 46px;
  left: 810px;
`;
const Paragraph = styled.div`
  text-align: center;
  mix-blend-mode: normal;
  width: 967px;
  font-size: 34px;
  font-family: Product Sans;
  color: #ffffff;
  margin-bottom: -77px;
`;
const Image8 = styled.img`
  width: 366.77px;
  height: 433.74px;
  mix-blend-mode: normal;
  position: absolute;
  top: 395px;
  left: 681px;
`;
const Element26 = styled.div`
  width: -webkit-fill-available;
  height: 844px;
  mix-blend-mode: normal;
  background-image: linear-gradient(
    223deg,
    #fbcb50 0%,
    #d87297 36%,
    #e36658 85%
  );
  position: relative;
`;
const Image9 = styled.img`
  width: 847.84px;
  height: 661.29px;
  mix-blend-mode: normal;
  position: absolute;
  top: 455.71px;
  left: 880.16px;
`;
const Ellipse7 = styled.img`
  width: 378px;
  height: 286px;
  mix-blend-mode: normal;
  position: absolute;
  left: 1350px;
`;
const Element27 = styled.div`
  width: 471px;
  height: 471px;
  mix-blend-mode: normal;
  background-image: linear-gradient(118deg, #fff73e 0%, #bf6eff 98%);
  position: absolute;
  top: 424px;
  left: 864px;
  border-radius: 360px;
`;
const WhiteFlexRow = styled.div`
  backdrop-filter: blur(14px);
  width: -webkit-fill-available;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  position: absolute;
  top: -143px;
  margin-left: 56px;

  flex-direction: row;
  justify-content: flex-start;
  padding: 268px 50px 212px 50px;
`;
const FlexRow2 = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  margin: 103px 65px 0px 0px;
`;
const FlexColumn2 = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 46px;
  justify-content: center;
  align-items: center;
  margin: 51px 65px 0px 0px;
`;
const AboutUs1 = styled.div`
  mix-blend-mode: normal;
  width: 466px;
  font-size: 88px;
  font-family: Product Sans;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
  align-self: flex-start;
  white-space: pre-wrap;
`;
const Paragraph1 = styled.div`
  mix-blend-mode: normal;
  width: 576px;
  font-size: 26px;
  font-family: Product Sans;
  text-transform: lowercase;
  color: #ffffff;
`;
const FlexColumn4 = styled.div`
  width: 176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Element2 = styled.img`
  width: 176px;
  height: 206px;
  mix-blend-mode: normal;
`;
const MacBookPro2 = styled.div`
  mix-blend-mode: normal;
  background-image: linear-gradient(126deg, #6e027f 0%, #48ffff 109%);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Element29 = styled.div`
  width: -webkit-fill-available;

  height: 888px;
  position: relative;
`;
const Image11 = styled.img`
  width: 2px;
  height: 324px;
  mix-blend-mode: normal;
  position: absolute;
  top: 400px;
  left: 57px;
`;
const Image12 = styled.img`
  width: 514.29px;
  height: 484.17px;
  mix-blend-mode: normal;
  position: absolute;
  left: 1213.71px;
`;
const Ellipse11 = styled.img`
  width: 394px;
  height: 394px;
  mix-blend-mode: normal;
  position: absolute;
  top: 104.23px;
  left: 1202.18px;
`;
const Ellipse12 = styled.img`
  width: 431.6px;
  height: 326.12px;
  mix-blend-mode: normal;
  position: absolute;
  top: 790.88px;
`;
const WhiteFlexRow1 = styled.div`
  backdrop-filter: blur(14px);
  width: -webkit-fill-available;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  padding: 166px 50px 264px 50px;
`;
const FlexColumn7 = styled.div`
  width: 15px;
  height: 403.99px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 141.01px 0px;
  margin: 176px 3px 0px 0px;
`;
const Ellipse13 = styled.img`
  width: 7px;
  height: 7px;
  mix-blend-mode: normal;
  margin: 0px 0px 33px 0px;
`;
const Ellipse14 = styled.div`
  height: 15px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/C2ZpWncL604NfPZAIlcU.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  margin: 0px 0px 32px 0px;
`;
const Union7 = styled.img`
  width: 7px;
  height: 227px;
  mix-blend-mode: normal;
`;
const FlexColumn8 = styled.div`
  width: 88px;
  height: 411.98px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 137.01px 0px;

  margin: 196px 129px 0px 24px;
`;
const FlexColumn9 = styled.div`
  width: -webkit-fill-available;
  display: flex;
  margin-top: -49px;

  flex-direction: column;
  gap: 83px;
  justify-content: center;
  align-items: center;
`;
const FlexColumn10 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Text17 = styled.div`
  mix-blend-mode: normal;
  font-size: 88px;
  font-family: Product Sans;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
`;
const Paragraph2 = styled.div`
  mix-blend-mode: normal;
  font-size: 34px;
  font-family: Product Sans;
  color: #ffffff;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 60px;
  align-items: center;
`;
const Element30 = styled.div`
  width: 736px;
  height: 447px;
  align-self: flex-end;
  position: relative;
`;
const Image13 = styled.img`
  width: 799px;
  height: 907px;
  mix-blend-mode: normal;
  position: absolute;
  top: -226px;
  left: 167px;
`;
const Image14 = styled.img`
  width: 797px;
  height: 905px;
  mix-blend-mode: normal;
  position: absolute;
  top: -225px;
  left: -230px;
`;
const Element31 = styled.div`
  width: 336.56px;
  height: 468px;
  position: relative;
  align-items: center;
`;
const Element32 = styled.div`
  width: 336.56px;
  height: 447px;
  position: absolute;
  top: 21px;
`;
const ScreenshotAt = styled.div`
  height: 384.66px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/U67QHC1K2XDu8HUJp8LU.png");
  background-size: cover;
  position: absolute;
  left: 0.83px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 30.51px 99.97px 30.51px 49.98px;
`;
const Union8 = styled.img`
  width: 185.77px;
  height: 94.44px;
  mix-blend-mode: normal;
`;
const Element33 = styled.div`
  border-style: solid;
  border-color: #5b82c0;
  width: 328.51px;
  height: 439px;
  mix-blend-mode: normal;
  position: absolute;
  top: -4px;
  left: -4px;
  border-radius: 57px;
  border-width: 8px;
`;
const Text18 = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 28px;
  font-family: Product Sans;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  width: 275px;
  height: 64px;
  background-image: linear-gradient(180deg, #e7533c 0%, #9f1500 100%);
  position: absolute;
  left: 29px;
  flex-direction: row;
  border-radius: 10px;
  padding: 13px 21px 13px 24px;
`;
const MacBookPro3 = styled.div`
  width: -webkit-fill-available;
  height: 934px;
  mix-blend-mode: normal;
  background-image: linear-gradient(71deg, #ff00cc 0%, #333399 136%);
  overflow: hidden;
  position: relative;
`;
const Ellipse16 = styled.img`
  width: -webkit-fill-available;
  height: 336px;
  mix-blend-mode: normal;
  position: absolute;
  left: 1313px;
`;
const WhiteFlexRow2 = styled.div`
  backdrop-filter: blur(14px);
  width: 1576px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  position: absolute;
  top: 54px;
  left: 28px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 27px 62px 314px 62px;
`;
const FlexRow4 = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  margin: 0px 65px 182px 0px;
`;
const FlexColumn12 = styled.div`
  width: 531px;
  height: 722px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 99.74px;
  align-items: center;
  margin: 0px 109px 0px 0px;
`;
const Element35 = styled.div`
  box-shadow: -20px -16px 100px 0px #ffdd06, 10px 30px 100px 0px #eb2900;
  width: 339.26px;
  height: 339.26px;
  align-self: flex-start;
  position: relative;
`;
const Ellipse17 = styled.div`
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/tYrDSaXdEX7Ih1k9mm3z.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Ellipse18 = styled.div`
  height: 339.26px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/hBnvWGZOWrcVAd3392pH.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20.2px 0px 20.8px;
`;
const Ellipse19 = styled.div`
  width: 292.47px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/hQW4OD46uSSCA43ry9tE.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4.12px 2.9px 22.02px 2.9px;
`;
const Union9 = styled.img`
  width: 272.09px;
  height: 272.13px;
  mix-blend-mode: normal;
`;
const Image16 = styled.img`
  width: 115.1px;
  height: 129.07px;
  mix-blend-mode: normal;
  position: absolute;
  top: -9.39px;
  left: 7.59px;
`;
const Text27 = styled.div`
  mix-blend-mode: normal;
  width: 531px;
  font-size: 88px;
  font-family: Product Sans;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
`;
const FlexColumn13 = styled.div`
  width: 38px;
  height: 698px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 89px;
  align-items: center;
  padding: 12px 0px;
  margin: 0px 53px 0px 0px;
`;
const FlexColumn14 = styled.div`
  width: 444px;
  height: 722px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Text28 = styled.div`
  mix-blend-mode: normal;
  width: 444px;
  font-size: 34px;
  font-family: Product Sans;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 46px 0px;
`;
const Paragraph3 = styled.div`
  mix-blend-mode: normal;
  width: 403px;
  font-size: 34px;
  font-family: Product Sans;
  color: #ffffff;
  margin: 0px 0px 70px 0px;
`;
const Text29 = styled.div`
  mix-blend-mode: normal;
  width: 403px;
  font-size: 34px;
  font-family: Product Sans;
  color: #ffffff;
  margin: 0px 0px 63px 0px;
`;
const Text30 = styled.div`
  mix-blend-mode: normal;
  width: 403px;
  font-size: 34px;
  font-family: Product Sans;
  color: #ffffff;
  margin: 0px 0px 46px 0px;
`;
const Text31 = styled.div`
  mix-blend-mode: normal;
  width: 403px;
  font-size: 34px;
  font-family: Product Sans;
  color: #ffffff;
`;
const MacBookPro4 = styled.div`
  width: -webkit-fill-available;
  height: 1066px;

  mix-blend-mode: normal;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(68deg, #01a8c4 0%, #fbfe7f 147%);
  background-blend-mode: normal, normal;
  background-size: cover;
  background-position: center;
  position: relative;
`;
const Ellipse28 = styled.div`
  width: 241px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/UYGEbPWOeYPANtgGyLmV.svg");
  background-size: cover;
  position: absolute;
  top: 762px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 174px 143px 55px 143px;
`;
const Ellipse32 = styled.img`
  width: 126px;
  height: 126px;
  mix-blend-mode: normal;
`;
const Ellipse29 = styled.img`
  width: 126px;
  height: 126px;
  mix-blend-mode: normal;
  position: absolute;
  top: 127px;
  left: 1450px;
`;
const Ellipse30 = styled.img`
  width: 126px;
  height: 126px;
  mix-blend-mode: normal;
  position: absolute;
  top: 849px;
  left: 1190px;
`;
const Ellipse31 = styled.img`
  width: 126px;
  height: 126px;
  mix-blend-mode: normal;
  position: absolute;
  top: 42px;
  left: 108px;
`;
const WhiteFlexRow3 = styled.div`
  backdrop-filter: blur(14px);
  width: 1648px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  position: absolute;
  left: 20px;
  flex-direction: row;
  justify-content: flex-start;
  gap: 453px;
  align-items: center;
  padding: 161px 30px 127px 30px;
`;
const Union11 = styled.img`
  width: 7px;
  height: 270px;
  mix-blend-mode: normal;
  position: absolute;
  top: 49px;
  left: 4px;
`;
const Ellipse39 = styled.div`
  height: 15px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/Z4DBjWrvpi8uYq0eLuOD.svg");
  background-size: cover;
  position: absolute;
  top: 131px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
`;
const FlexColumn16 = styled.div`
  // width: 484px;
  display: flex;
  flex-direction: column;
  gap: 71px;
  justify-content: center;
  align-items: center;
`;
const Text40 = styled.div`
  mix-blend-mode: normal;
  font-size: 88px;
  font-family: Noto Sans;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
`;
const FlexRow6 = styled.div`
  // width: 484px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn17 = styled.div`
  width: 28px;
  height: 633px;
  display: grid;
  grid-gap: 50px;



  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 9px 0px;
  margin: 0px 27px 0px 0px;
`;
const Text41 = styled.div`
  mix-blend-mode: normal;
  width: 28px;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 108px 0px;
`;
const Text42 = styled.div`
  mix-blend-mode: normal;
  width: 28px;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 113px 0px;
`;
const Text43 = styled.div`
  mix-blend-mode: normal;
  width: 28px;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 111px 0px;
`;
const Text44 = styled.div`
  mix-blend-mode: normal;
  width: 28px;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 120px 0px;
`;
const Text45 = styled.div`
  mix-blend-mode: normal;
  width: 28px;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
`;
const Element37 = styled.div`
  width: 42px;
  height: 651px;
  position: relative;
  align-items: center;
  margin: 0px 18px 0px 0px;
`;
const Image18 = styled.img`
  width: 3px;
  height: 540px;
  mix-blend-mode: normal;
  position: absolute;
  top: -29px;

  left: 19.5px;
`;
const Text46 = styled.div`
mix-blend-mode: normal; */
display: -webkit-box;
/* display: -webkit-flex; */
display: -ms-flexbox;
display: flex;
font-size: 18px;
font-family: Noto Sans;
font-weight: 700;
text-transform: uppercase;
width: 42px;
border-radius: 50%;
height: 42px;
background-color: white;
/* background-image: url(https://file.rendit.io/n/LAK5fuBOV0Gi1S1sRj5Q.svg); */
background-size: cover;
position: absolute;
-webkit-flex-direction: row;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: center;
-webkit-justify-content: center;
border-radius: 50%;
-ms-flex-pack: center;
justify-content: center;

padding: 8px 0px 8px 0px;

`;
const Text47 = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  width: 42px;
  border-radius: 50%;
  height: 42px;
  background-color: white;
  // background-image: url("https://file.rendit.io/n/LAK5fuBOV0Gi1S1sRj5Q.svg");
  background-size: cover;
  position: absolute;
  top: 138px;
  flex-direction: row;
  justify-content: center;
  padding: 9px 0px 8px 0px;
`;
const Text48 = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  width: 42px;
  border-radius: 50%;
  height: 42px;
  background-color: white;
  background-size: cover;
  position: absolute;
  top: 276px;
  flex-direction: row;
  justify-content: center;
  padding: 9px 0px 8px 0px;
`;
const Text49 = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  width: 42px;
  border-radius: 50%;
  height: 42px;
  background-color: white;
  background-size: cover;
  position: absolute;
  top: 414px;
  flex-direction: row;
  justify-content: center;
  padding: 9px 0px 8px 0px;
`;
const Text50 = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  width: 42px;
  border-radius: 50%;
  height: 42px;
  background-color: white;
  background-size: cover;
  position: absolute;
  top: 552px;
  flex-direction: row;
  justify-content: center;
  padding: 9px 0px 8px 0px;
`;
const FlexColumn18 = styled.div`
  // width: 369px;
  height: 651px;
  display: grid;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Paragraph4 = styled.div`
  mix-blend-mode: normal;
  max-width: 573px;
  font-size: 18px;
  font-family: Noto Sans;
  color: #ffffff;
  margin: 0px 0px 43px 0px;
  white-space: pre-wrap;
`;
const Paragraph5 = styled.div`
  mix-blend-mode: normal;
  width: 330px;
  font-size: 18px;
  font-family: Noto Sans;
  color: #ffffff;
  margin: 0px 0px 44px 0px;
  white-space: pre-wrap;
`;
const WhiteFlexColumn1 = styled.div`
  border-style: solid;
  border-color: #ffffff;
  height: 101px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7px;
  align-items: center;
  border-radius: 10px;
  padding: 3px 19px 3px 18px;
  margin: 0px 0px 31px 0px;
  border-width: 1px;
`;
const Paragraph7 = styled.div`
  mix-blend-mode: normal;
  width: 330px;
  font-size: 18px;
  font-family: Noto Sans;
  color: #ffffff;
  margin: 0px 0px 55px 0px;
  white-space: pre-wrap;
`;
const MacBookPro5 = styled.div`
  width: 1728px;
  height: 1117px;
  mix-blend-mode: normal;
  background-image: linear-gradient(118deg, #fff73e 0%, #bf6eff 98%);
  overflow: hidden;
  position: relative;
`;
const FlexColumn19 = styled.div`
  height: 409px;
  mix-blend-mode: normal;
  background-image: linear-gradient(
    184deg,
    rgba(196, 208, 134, 0) 0%,
    #c4d086 12%,
    #8ead3a 28%,
    #5d710f 72%,
    #354200 114%
  );
  display: flex;
  position: absolute;
  top: 708px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Element38 = styled.div`
  width: 1728px;
  height: 141px;
  mix-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 73%
  );
`;
const FlexColumn20 = styled.div`
  height: 407.86px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/kygKpZy9rciY3eOOddF4.svg");
  background-size: cover;
  position: absolute;
  top: 568px;
  left: 300.69px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 206.5px;
  align-items: center;
  padding: 70.57px 213.8px 70.57px 222.31px;
`;
const Image19 = styled.img`
  width: 452px;
  height: 46px;
  mix-blend-mode: normal;
`;
const Union12 = styled.div`
  width: 1230px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/9eyI9y7VBv0yqXYbU2pr.svg");
  background-size: cover;
  position: absolute;
  top: 688px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 38px;
  align-items: center;
  padding: 116px 249px 288px 249px;
`;
const Union13 = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/5za8Ue30zOw6w8P6LJzi.svg");
  background-size: cover;
  position: absolute;
  top: -50px;
  left: 778px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 128px 20px 129px;
`;
const Union14 = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/mP5bomAUFx6JP6gRyKik.svg");
  background-size: cover;
  position: absolute;
  top: -50px;
  left: -50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 128px 20px 129px;
`;
const FlexRow7 = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  gap: 304px;
  justify-content: space-between;
  align-items: center;
`;
const Text59 = styled.div`
  mix-blend-mode: normal;
  font-size: 88px;
  font-family: Noto Sans;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
  align-self: flex-start;
  margin: 81px 0px 0px 0px;
`;
const FlexRow8 = styled.div`
  display: flex;
  position: absolute;
  top: 271px;
  left: 50px;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;
const Ellipse46 = styled.div`
  height: 15px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/lN3WEMxaA2f0uswkRkMO.svg");
  background-size: cover;
  position: absolute;
  top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
`;
const Text60 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0px 0px 22px 0px;
`;
const Text61 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Jost;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0px 0px 24px 0px;
`;
const Text62 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  align-self: center;
  margin: 0px 0px 27px 0px;
`;
const Text67 = styled.div`
  mix-blend-mode: normal;
  font-size: 12px;
  font-family: Jost;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const WhiteFlexColumn2 = styled.div`
  border-style: solid;
  border-color: #ffffff;
  height: 361px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  top: 434px;
  left: 390px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  align-items: center;
  border-radius: 20px;
  padding: 24px 19px 24px 20px;
  border-width: 3px;
`;
const Element43 = styled.div`
  width: 248px;
  height: 299px;
  mix-blend-mode: normal;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 72%, #000000 100%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 72%, #000000 100%),
    url(https://file.rendit.io/n/jXcyizxLdV88bP7F70k4.png);
  background-blend-mode: normal, normal;
  background-size: cover;
  background-position: center;
`;
const WhiteFlexColumn3 = styled.div`
  border-style: solid;
  border-color: #ffffff;
  height: 361px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  top: 434px;
  left: 758px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  align-items: center;
  border-radius: 20px;
  padding: 24px 20px;
  border-width: 3px;
`;
const Element44 = styled.div`
  width: 247px;
  height: 299px;
  mix-blend-mode: normal;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000000 100%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000000 100%),
    url(https://file.rendit.io/n/w09ZC9tZdGaX6K5G9kpT.png);
  background-blend-mode: normal, normal;
  background-size: cover;
  background-position: center;
`;
const WhiteFlexColumn4 = styled.div`
  border-style: solid;
  border-color: #ffffff;
  height: 361px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  top: 434px;
  left: 1126px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  align-items: center;
  border-radius: 20px;
  padding: 24px 19px 24px 20px;
  border-width: 3px;
`;
const Element45 = styled.div`
  width: 248px;
  height: 299px;
  mix-blend-mode: normal;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000000 100%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000000 100%),
    url(https://file.rendit.io/n/fdzjVy8z6DTK7mo0rC9C.png);
  background-blend-mode: normal, normal;
  background-size: cover;
  background-position: center;
`;
const MacBookPro6 = styled.div`
  width: -webkit-fill-available;
  height: 1117px;
  mix-blend-mode: normal;
  background-image: linear-gradient(71deg, #ffd4a2 0%, #fe0159 134%);
  overflow: hidden;
  position: relative;
`;
const FlexColumn22 = styled.div`
  display: flex;
  position: absolute;
  top: 68px;

  left: 177px;

  flex-direction: column;
  gap: 140px;
  justify-content: space-between;
  align-items: center;
`;
const Element46 = styled.div`
  width: 1728px;
  height: 724.36px;
  position: absolute;
  top: 121px;
`;
const Element47 = styled.div`
  width: 811px;
  height: 518.36px;
  position: absolute;
  top: 206px;
  left: 301px;
`;
const Union18 = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/3FNsS89t3S4E2F04PutO.svg");
  background-size: cover;
  position: absolute;
  top: 31px;
  left: 463px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 128px 20px 129px;
`;
const Union19 = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/BZi0rMCsbdVNqFNDvkbf.svg");
  background-size: cover;
  position: absolute;
  top: -50px;
  left: -50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 128px 20px 129px;
`;
const Union20 = styled.div`
  height: 497.36px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/9Jlr7ZE9iIIzlOzh7XcD.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 64px 20px 129px;
`;
const WhiteFlexColumn5 = styled.div`
  border-style: solid;
  border-color: #ffffff;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  top: 314px;
  left: 996px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 133px 129px 190px 130px;
  border-width: 3px;
`;
const FlexColumn23 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31.55px;
  justify-content: center;
  align-items: center;
`;
const Image22 = styled.img`
  width: 225px;
  height: 126.45px;
  mix-blend-mode: normal;
`;
const WhiteText = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 16px;
  font-family: Noto Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.1);
  border-style: solid;
  border-color: #ffffff;
  width: 280px;
  height: 22px;
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 16px 0px;
  border-width: 3px;
`;
const MacBookPro7 = styled.div`
  width: -webkit-fill-available;

  height: 903px;

  mix-blend-mode: normal;
  background-image: linear-gradient(
    111deg,
    #49ebf5 0%,
    rgba(4, 219, 25, 0.7) 188%
  );
  overflow: hidden;
  position: relative;
`;
const BlackSquare = styled.div`
  filter: blur(14px);
  width: 282px;
  height: 282px;
  mix-blend-mode: normal;
  background-color: rgba(0, 0, 0, 0.2);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(68deg, #01a8c4 0%, #fbfe7f 147%);
  background-blend-mode: normal, normal;
  background-size: cover;
  background-position: center;
  position: absolute;
  border-radius: 353px;
`;
const WhiteFlexColumn6 = styled.div`
  backdrop-filter: blur(14px);
  width: -webkit-fill-available;
  height: 735px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  position: absolute;
  top: 2px;
  flex-direction: column;
  padding: 158px 36.53px 222px 50px;
`;
const Text76 = styled.div`
  mix-blend-mode: normal;
  font-size: 88px;
  font-family: Product Sans;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
  align-self: center;
  margin-bottom: 109px;
`;
const FlexRow11 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
  justify-content: center;
  min-width: 1457.47px;
  align-items: center;
  margin: 0px 0px 95px 0px;
`;
const Ellipse57 = styled.div`
  height: 15px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/MN8DPjmhQLzkDDRGOtsT.svg");
  background-size: cover;
  position: absolute;
  top: 265px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
`;
const FlexRow13 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
`;
const WhiteFlexColumn7 = styled.div`
  border-style: solid;
  border-color: #ffffff;
  box-shadow: 0px 20px 70px 0px rgba(0, 0, 0, 0.1);
  width: 329.12px;
  height: 390.12px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  top: -1px;
  left: -1px;
  flex-direction: column;
  justify-content: flex-end;
  gap: 19px;
  align-items: flex-start;
  border-radius: 20px;
  padding: 31.94px 33.37px 31.94px 31px;
  border-width: 2px;
`;
const Element59 = styled.div`
  height: 14px;
  position: relative;
  min-width: 1457.47px;
`;
const WhiteRectangle = styled.div`
  width: 1112px;
  height: 10px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 258px;
  border-radius: 30px;
`;
const WhiteRectangle1 = styled.div`
  width: 200px;
  height: 14px;
  mix-blend-mode: normal;
  background-color: #ffffff;
  position: absolute;
  left: 258px;
  border-radius: 30px;
`;
const MacBookPro8 = styled.div`
  width: -webkit-fill-available;
  height: 1117px;
  mix-blend-mode: normal;
  background-image: linear-gradient(108deg, #ef060f 0%, #b60bf2 148%);
  overflow: hidden;
  position: relative;
`;
const Ellipse60 = styled.img`
  width: 486.6px;
  height: 476.93px;
  mix-blend-mode: normal;
  position: absolute;
  top: 640.07px;
`;
const Ellipse61 = styled.img`
  width: 467px;
  height: 380px;
  mix-blend-mode: normal;
  position: absolute;
  left: 1261px;
`;
const WhiteFlexColumn8 = styled.div`
  backdrop-filter: blur(14px);
  width: -webkit-fill-available;
  height: 761px;
  mix-blend-mode: normal;
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  padding: 192px 270px 80px 50px;
`;
const Text85 = styled.div`
  mix-blend-mode: normal;
  font-size: 88px;
  font-family: Product Sans;
  font-weight: 700;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px 0px 78px 67px;
`;
const FlexRow14 = styled.div`
  align-self: stretch;
  height: 494px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 1264px;
  align-items: flex-start;
  margin: 0px 0px 40px 0px;
`;
const Ellipse63 = styled.div`
  height: 15px;
  mix-blend-mode: normal;
  background-image: url("https://file.rendit.io/n/Z4DBjWrvpi8uYq0eLuOD.svg");
  background-size: cover;
  position: absolute;
  top: 265px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
`;
const FlexColumn26 = styled.div`
  height: 435px;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: flex-start;
`;
const Image28 = styled.img`
  width: 16px;
  height: 16px;
  mix-blend-mode: normal;
  align-self: flex-end;
  margin: 0px 0px 4px 0px;
`;
const Element61 = styled.div`
  height: 27px;
  position: relative;
  min-width: 900px;
`;
const Image36 = styled.img`
  width: 900px;
  height: 1px;
  mix-blend-mode: normal;
  position: absolute;
  top: 46.5px;
`;
const Image37 = styled.img`
  width: 16px;
  height: 16px;
  mix-blend-mode: normal;
  position: absolute;
  top: 11px;
  left: 825px;
`;
const Paragraph19 = styled.div`
  mix-blend-mode: normal;
  font-size: 22px;
  font-family: Product Sans;
  font-weight: 700;
  color: #ffffff;
  position: absolute;
  left: 22px;
`;
const Text94 = styled.div`
  mix-blend-mode: normal;
  font-size: 22px;
  font-family: Product Sans;
  color: #ffffff;
  margin: 0px 404px 0px 0px;
`;
const BlackFlexColumn = styled.div`
  height: 270px;
  mix-blend-mode: normal;
  background-color: #001112;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 0px;
  width: -webkit-fill-available;
`;
const FlexRow20 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 175px;
  min-width: 1524px;
  align-items: flex-end;
  padding: 0px 95px 0px 109px;
  margin: 0px 0px 16px 0px;
`;
const Element62 = styled.div`
  align-self: stretch;
  width: 1137px;
  height: 182px;
  position: relative;
`;
const Element63 = styled.div`
  width: 1137px;
  height: 158px;
  position: absolute;
  top: 6px;
`;
const Paragraph20 = styled.div`
  mix-blend-mode: normal;
  width: 355px;
  height: 58px;
  font-size: 16px;
  font-family: Noto Sans;
  color: #ffffff;
  position: absolute;
  top: 46px;
  white-space: pre-wrap;
`;
const Text95 = styled.div`
  mix-blend-mode: normal;
  width: 444.29px;
  height: 117px;
  font-size: 16px;
  font-family: Noto Sans;
  line-height: 29.81px;
  color: #ffffff;
  position: absolute;
  top: 41px;
  left: 537.45px;
`;
const Text96 = styled.div`
  mix-blend-mode: normal;
  width: 234.09px;
  height: 23px;
  font-size: 16px;
  font-family: Poppins;
  color: #ffffff;
  position: absolute;
  top: 129px;
`;
const Text97 = styled.div`
  mix-blend-mode: normal;
  width: 90.77px;
  font-size: 17px;
  font-family: Noto Sans;
  font-weight: 700;
  color: #ffffff;
  position: absolute;
  left: 537.45px;
`;
const FlexColumn27 = styled.div`
  height: 155px;
  display: flex;
  position: absolute;
  left: 800.2px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text98 = styled.div`
  mix-blend-mode: normal;
  width: 108.68px;
  font-size: 17px;
  font-family: Noto Sans;
  font-weight: 700;
  color: #ffffff;
  margin: 0px 0px 23px 0px;
`;
const Paragraph21 = styled.div`
  mix-blend-mode: normal;
  width: 336.8px;
  height: 76px;
  font-size: 16px;
  font-family: Noto Sans;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 11px 0px;
  white-space: pre-wrap;
`;
const Text99 = styled.div`
  mix-blend-mode: normal;
  width: 142.13px;
  font-size: 16px;
  font-family: Noto Sans;
  font-weight: 700;
  color: #ffffff;
`;
const Text100 = styled.div`
  mix-blend-mode: normal;
  width: 81px;
  font-size: 24px;
  font-family: Poppins;
  line-height: 36.84px;
  color: #ffffff;
  position: absolute;
`;
const Image38 = styled.img`
  width: 212px;
  height: 62px;
  mix-blend-mode: normal;
`;
const Line = styled.img`
  width: 1728px;
  height: 1px;
  mix-blend-mode: normal;
  margin: 0px 0px 18px 0px;
`;
const Paragraph22 = styled.div`
  mix-blend-mode: normal;
  width: 330px;
  font-size: 13px;
  font-family: Noto Sans;
  font-weight: 700;
  line-height: 24.78px;
  color: #ffffff;
`;
