import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./SubHeaderProfileStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { SocialLinks } from "..";
import edit_pen from "../../../assets/images/bowled-images/edit_profile.svg";

const SubHeaderProfile = (props) => {
  const navigate = useNavigate();
  const { socialInfo } = props;
  const gotoRoute = (data) => {
    navigate(`${data}`);
  };
console.log("profileimg",props.profileimg)
  return (
    <Container className="subHeaderProfile">
      <Row>
        <Col lg={12}>
          <div className="subHeaderProfile_img text-center">
            {props.profileimg === "" ? (
              <a onClick={() => gotoRoute("/user/edit-profile")}>
                Update profile
              </a>
            ) : (
              <img src={props.profileimg} />
            )}
          </div>
        </Col>
        {socialInfo && (
          <SocialLinks
            className="artists_socialLinks"
            soc_website={socialInfo[0]?.value} 
            soc_discord={socialInfo[1]?.value}
            soc_youtube={socialInfo[2]?.value}
            soc_facebook={socialInfo[3]?.value}
            soc_twicth={socialInfo[4]?.value}
            soc_tiktok={socialInfo[5]?.value}
            soc_snapchat={socialInfo[6]?.value}
            // soc_twitter={"https://twitter.com/"}
            // soc_linkedIn={"https://www.linkedin.com/"}
            // soc_telegram={"https://web.telegram.org/"}
            // soc_instagram={"https://www.instagram.com/"}
          />
        )}
        <Col className="subHeaderProfile_content">
          <h2 className="subHeaderProfile_content_title">
            {props.title}
            {props.onClickEdit && (
              <a
                href="javascript:void(0)"
                onClick={props.onClickEdit}
                className="edit_profile_icon"
              >
             <img src={edit_pen} alt="icon" />
              </a>
            )}
           {/* <p>{props.onUpdateEdit && (`${props.onUpdateEdit} <input type="file" />`) }</p> */}
          </h2>
          {/* {props.kycDetails && (
            <>
              {props?.kycDetails?.kycStatus === "FAILED" ||
              props?.kycDetails?.kycStatus === "NOT_APPLIED" ? (
                <p onClick={() => navigate("/user/kyc")}>
                  {props?.kycDetails?.kycStatus === "FAILED"
                    ? `${props?.kycDetails?.remark}! RE-APPLY `
                    : "ADD "}
                  KYC
                </p>
              ) : (
                <p>
                  Your KYC{" "}
                  {props?.kycDetails?.kycStatus === "APPROVED"
                    ? "has been approved"
                    : "is Pending"}
                  .
                </p>
              )}
            </>
          )} */}

          <p className="subHeaderProfile_content_subtitle">{props.subtitle}</p>
          {props.children}
        </Col>
        
      </Row>
    </Container>
  );
};

export { SubHeaderProfile };
