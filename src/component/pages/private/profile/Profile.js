import React, { useState, useEffect, useContext } from "react";
import Loader from "../../../common/Loader/index";
import {
  CardGallery,
  ArtCollectionInfo,
  Layout,
  SubHeaderProfile,
  LoaderAnimated,
  ModalCustom,
} from "../../../common";
import "./ProfileStyle.scss";
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userApiCallGet } from "../../../../Axios/User";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import profile_pic from "../../../../assets/images/dummyProfile.jpg";
import moment from "moment";
import { context } from "../../../../Context/MainContext";
import Cookies from "js-cookie";

const Profile = () => {
  const cog = <FontAwesomeIcon icon={faCog} />;
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [rafflePage, setRafflePage] = useState(1);
  const [mbPage, setMbPage] = useState(0);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();
  const [key, setKey] = useState("myCollection");
  const [myProfile, setMyProfile] = useState({});
  const [mintedNft, setMintedNft] = useState({});
  const [myCollection, setMyCollection] = useState([]);
  const [favourite, setFavourite] = useState({});
  const [showMintModal, setshowMintModal] = useState(false);
  const [myRafflesData, setMyRafflesData] = useState([]);
  const [myRafflesCount, setMyRafflesCount] = useState(null);
  const [myMysteryBoxes, setMyMysteryBoxes] = useState(null);
  const [myMysteryBoxesCount, setMyMysteryBoxesCount] = useState(null);
  const { userData, dispatchUserData } = useContext(context);
  console.log("userDataaaaa", userData);
  const handleCloseMintModal = () => {
    setshowMintModal(false);
  };

  useEffect(() => {
    // myProfileData();
    // nftListData();
    // key === "My Raffles" && getMyRafflesData();
    // key === "myMysteryBoxes" && getMyMysteryBoxes();
    console.log("TAG", Cookies.get("token"));
  }, [page, key, rafflePage]);

  const nftListData = () => {
    setLoading(true);
    userApiCallGet(`/nftlist/${limit}/${page}`)
      .then((data) => {
        setLoading(false);
        if (data?.error === false) {
          setFavourite(data?.data?.favourite);
          setMintedNft(data?.data?.mintedNft);
          setMyCollection(data?.data?.myCollection?.data);
          setTotalRecords(data?.data?.myCollection?.totalNFT);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const myProfileData = () => {
    setLoading(true);
    userApiCallGet("/profile")
      .then((data) => {
        setLoading(false);
        if (Object.keys(data).length > 0) {
          setMyProfile(data.data);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const getMyRafflesData = () => {
    setLoading(true);
    brandsApiCallGet(`/users/raffles/api/v1/user/list/8/${rafflePage}`)
      .then((res) => {
        // console.log("getMyRafflesData", res.data.rows);
        setLoading(false);
        if (res?.error === false) {
          setMyRafflesData(res.data.rows);
          setMyRafflesCount(res.data.count);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const getMyMysteryBoxes = () => {
    setLoading(true);
    brandsApiCallGet(`/mysterybox/api/v1/myboxes/8/${mbPage}`)
      .then((res) => {
        setLoading(false);
        if (res?.error === false) {
          setMyMysteryBoxes(res?.data);
          setMyMysteryBoxesCount(res?.totalCount);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const onClickEdit = () => {
    navigate("/user/edit-profile");
  };

  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  const nextRafflePage = (pageNo) => {
    setRafflePage(pageNo);
  };

  const nextMbPage = (pageNo) => {
    setMbPage(pageNo);
  };

  return (
    <>
      {/* <LoaderAnimated isLoading={loading} /> */}

      <SubHeaderProfile
        profileimg={
          userData?.userDetails?.profileImage
            ? userData?.userDetails?.profileImage
            : profile_pic
        } //{singup_img}
        title={
          userData?.userDetails?.fullname
            ? userData?.userDetails?.fullname
            : "Update Profile"
        }
        subtitle={userData?.userDetails?.bio ? userData?.userDetails?.bio : ""}
        kycDetails={userData?.kyc}
        socialInfo={userData?.socialInfo}
        onClickEdit={() => onClickEdit("Working!")}
      ></SubHeaderProfile>
      <div className="profile_detail">
        <Row className="justify-content-center">
          <Col lg={8} md={10} className="mx-auto profile_wrapper">
            <Row>
              <Col md={12}>
                <ul>
                  <li className="user_detail_box">
                    <span className="user_label">Email</span>
                    <p> {userData?.userDetails?.email} </p>
                  </li>
                  <li className="user_detail_box">
                    <span className="user_label">Date of Birth</span>

                    <p>
                      {" "}
                      {userData?.userDetails?.dob &&
                        moment(userData?.userDetails?.dob).format("DD/MM/YYYY")}
                    </p>
                  </li>
                </ul>
              </Col>
              <Col md={12}>
                <ul className="mb-0">
                  <li className="user_detail_box">
                    <span className="user_label">Gender</span>
                    <p>{userData?.userDetails?.gender}</p>
                  </li>
                  <li className="user_detail_box mb-0">
                    <span className="user_label">Mobile</span>
                    <p>
                      {userData?.userDetails?.phone_no_code
                        ? userData?.userDetails?.phone_no_code +
                          userData?.userDetails?.phone_no
                        : "Mobile number not linked yet!"}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* <NFTMintingModal show={showMintModal} onHide={handleCloseMintModal} /> */}
    </>
  );
};

export default Profile;
