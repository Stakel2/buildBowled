import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import neeraj from "../../../../assets/images/bowled-images/founder-neeraj.png";
import rahul from "../../../../assets/images/bowled-images/founder-rahul.png";
import akshay from "../../../../assets/images/bowled-images/founder-akshay.png";
import linkdin from "../../../../assets/images/bowled-images/linkdin.svg";
import "./Home.scss";

const TeamView = (props) => {
  const TeamData = [
    {
      title: "Akshay Khandelwal",
      position: "Co-Founder",
      img: akshay,
      link: "https://www.linkedin.com/in/akshaykhandelwal",
    },
    {
      title: "Rahul Singh",
      position: "Co-Founder",
      img: rahul,
      link: "https://www.linkedin.com/in/rahul-singh-626167b",
    },
    {
      title: "Neeraj Jhanji",
      position: "Co-Founder",
      img: neeraj,
      link: "https://www.linkedin.com/in/imahima",
    },
  ];

  return (
    <section className="team_sec fix_bg">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 className="title_head">Team</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {TeamData.map((item, index) => (
            <Col xl={3} lg={4}>
              <div className="team_card">
                <div className="team_member_pic">
                  <img src={item.img} alt="image_icon" />
                </div>
                <div className="membr_detail">
                  <h5 className="heading">{item.title}</h5>
                  <p>{item.position}</p>
                  <div className="linkdin">
                    <a href={item.link} target="_blank">
                      <img src={linkdin} alt="icon" className="lkn_icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamView;
