import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import discord from "../../../assets/images/bowled-images/discord.svg";
import insta from "../../../assets/images/bowled-images/insta.svg";
import medium from "../../../assets/images/bowled-images/medium.svg";
import twitter from "../../../assets/images/bowled-images/twitter.svg";
import telegram from "../../../assets/images/bowled-images/telegram.svg";
import Logo from "../../../assets/images/bowled-images/Bowled-Logo.svg";
import footer_line from "../../../assets/images/bowled-images/footer_line.png";
import "./FooterStyle.scss";

const Footer = () => {
  // const navigate = useNavigate();
  // const { loginState, loginDispatch } = useContext(context);

  // const redirectToUserProfile = () => {
  //   if (loginState.user.accessToken) {
  //     navigate("/user/profile");
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <>
      <section className="footer_style">
        <img src={footer_line} alt="line_img" className="ftr_line" />
        <p className="indiaslove">Made with ❤️ in India for the World</p>
        <Container>
          <Row>
            <Col lg={4}>
              <ul className="copyRight_Sec">
                <li className="footerTitle footerLogo">
                  <Link to="#">
                    <img src={Logo} alt="logo" />
                  </Link>
                </li>
                <li className="footer_txt">
                Challenge millions of gamers around the world in various game formats, deploy your skills, knowledge & win big rewards!
                </li>
              </ul>
            </Col>
            {/* <Col lg={3}>
              <ul>
                <li className="footerTitle">Quick Links</li>

                <li>
                  <Link to="#">Marketplace</Link>
                </li>
                <li>
                  <Link to="#">Resources</Link>
                </li>
                <li>
                  <Link to="#">How it Works</Link>
                </li>
              </ul>
            </Col> */}
            <Col lg={4}>
              <ul className="keepIntouch_sec">
                <li className="footerTitle">Legal</li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms & Conditions</Link>
                </li>
                {/* <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li> */}

                
              </ul>
            </Col>
            {/* <Col md={2}>
              <ul className="keepIntouch_sec">
                <li className="footerTitle">Download</li>
                <li>
                  <Link to="#" className="dwnldWhitepaper">
                    Whitepaper
                  </Link>
                </li>
              </ul>
            </Col> */}
          </Row>
        </Container>
        <div className="copyRight_sec">
          <p>Copyright © 2022 Bowled | All rights reserved.</p>
          <span className="divider">|</span>
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
      </section>
    </>
  );
};

export { Footer };
