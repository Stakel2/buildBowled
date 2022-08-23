import React, { useState, useEffect, useContext, useReducer } from "react";
import {
  Navbar,
  NavDropdown,
  Dropdown,
  Container,
  Nav,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  Form,
} from "react-bootstrap";
import defaultUser from "../../../assets/images/dummyProfile.jpg";
import { context } from "../../../Context/MainContext";
import { GetBallance, GetUserData } from "../../Api/Actions";
import { toasts } from "../Toast/Toast";
import ReactTooltip from "react-tooltip";
import * as Yup from "yup";
import "./TopNavbarStyle.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/bowled-images/Bowled-Logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Wallet_icon from "../../../assets/images/bowled-images/wallet_icon.svg";
import IsLoggedIn from "../../../services/userService";
import {
  calculateBal,
  jwtEncryptToken,
  requestEncryption,
} from "../../../utils/utils";
import {
  initializer,
  initialLoginUser,
  LoginReducer,
} from "../../pages/public/login/LoginReducer";
import {
  UserDataInitializer,
  UserDataReducer,
} from "../../reducer/UserDataReducer";
import { WalletReducer, WalletReducerInit } from "../../reducer/WalletReducer";
import search from "../../../assets/images/search.svg";

const TopNavbar = () => {
  const [loading, setLoading] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const { loginState, loginDispatch } = useContext(context);
  const { userData, dispatchUserData } = useContext(context);
  const { walletData, walletDispatch } = useContext(context);
  const [searchBar, setSearchBar] = useState(false);
  // const [scroll, setScroll] = useState(0)
  const [show, setShow] = useState(false);
  console.log("TAG", localStorage.getItem("isFromMobile"));
  const showDropdown = (e) => {
    setShow(true);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    if (loginState?.user?.accessToken && !userData?.rows?.length) {
      setLoading(true);
      GetUserData({ setLoading, dispatchUserData });
      GetBallance({ setLoading, walletDispatch });
    }
    // console.log("DATA", userData);
    console.log("DATA", walletData);
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  const logOutUser = () => {
    localStorage.clear();
    loginDispatch({
      type: "reset",
      payload: {},
    });

    toasts.success("You logged out successfully.");
    navigate("/");
  };

  const gotoRoute = (e, rout) => {
    e.preventDefault();
    navigate(rout);
  };

  const initialValues = {
    searchInput: "",
  };

  const validationSchema = Yup.object({
    searchInput: Yup.string().required("Required"),
  });

  const onSubmit = () => {
    let abc = jwtEncryptToken(loginState?.user?.accessToken);
    console.log("DATATA", requestEncryption(abc));

    //${abc}
    // loginState.user.accessToken
    //   ? window.open(
    //       `http://game-stage.bowled.io?hash=${loginState?.user?.accessToken}`,
    //       "_blank"
    //     )
    //   : toasts.info("Please login to Play.");

    if (loginState.user.accessToken) {
      if (userData?.userDetails?.is_white_listed == 1) {
        window.open(
          `http://game-stage.bowled.io?hash=${loginState?.user?.accessToken}`,
          "_blank"
        );
      }
    } else toasts.info("Please login to Play.");
  };

  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const SmoothScroll = () => (
    <AnchorLink offset="0" href="#roadmap" className="hide_mob">
      Roadmap
    </AnchorLink>
  );
  const RegisterScroll = () => (
    <AnchorLink
      offset="200"
      href="#newsletter"
      className="cm_btn commonBtn hide_mob"
    >
      Register
    </AnchorLink>
  );
  console.log("kk", userData)
  return (
    <header className={scroll ? "header_fixed" : "header_style"}>
      <Container fluid>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src={Logo} alt={"logo-icon"} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* <Form className="d-flex serchSet">
                <button><img src={search} alt="search" /></button>
                <Form.Control
                  type="search"
                  placeholder="Serach for NFT"
                  className="serchEdit"
                  aria-label="Search"
                />
              </Form> */}
              <NavLink to="/">Home</NavLink>
              <a
                onClick={onSubmit}
                title={
                  userData?.userDetails?.is_white_listed == 0
                    ? "Coming soon"
                    : ""
                }
              >
                Play
              </a>
              {/* <NavLink to="play" target="_blank">
                Play
              </NavLink> */}
              <NavLink to="/marketplace">Marketplace</NavLink>
              {/* <NavLink to="/collection"></NavLink> */}
              {/* <NavLink to="/featurednft/all">Featured NFT</NavLink> */}
            </Nav>
          </Navbar.Collapse>
          {!loginState.user.accessToken ? (
            <div className="nav_side">
              <NavLink className="login_link cm_btn commonBtn me-3" to="/login">
                <span>Login</span>
              </NavLink>
              <NavLink className="signin_link cm_btn commonBtn " to="/signup">
                Register
              </NavLink>
            </div>
          ) : (
            <div className="nav_side">
              <div className="wallet_view">
                <div className="wallet_icon">
                  <a href="" onClick={(e) => gotoRoute(e, "/user/WalletNew")}>
                    {" "}
                    <img src={Wallet_icon} alt="icon" />
                  </a>
                </div>
                <div className="walet_amount">
                  {/* &#8377; */}
                  <span>${walletData?.balance}</span>{" "}
                  <span className="crx">({walletData?.crx} RUN)</span>
                </div>
              </div>
              <Dropdown
                className="userInfo_afterLogin"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Dropdown.Toggle className="userdrop">
                  <div className="userImg_name_style">
                    <span className="u_img">
                      <img
                        src={
                          userData?.userDetails?.profileImage != null &&
                            userData?.userDetails?.profileImage != ""
                            ? userData?.userDetails?.profileImage
                            : defaultUser
                        }
                        alt="PP"
                      />
                    </span>
                    {/* <span className="username">
                     {userData?.userDetails?.fullname.split(" ")[0]} 
                  </span> */}
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={(e) => gotoRoute(e, "/user/profile")}>
                    My Profile
                  </Dropdown.Item>
                  {/* <div className="divider_strip"></div>
                  <Dropdown.Item
                    onClick={(e) => gotoRoute(e, "/user/collection")}
                  >
                    My Collection
                  </Dropdown.Item> */}
                  <div className="divider_strip"></div>

                  {localStorage.getItem("isFromMobile") === "1" ? (
                    <>
                      {" "}
                      <Dropdown.Item
                        onClick={(e) => gotoRoute(e, "/user/add-email")}
                      >
                        Add Email
                      </Dropdown.Item>{" "}
                      <div className="divider_strip"></div>{" "}
                    </>
                  ) : localStorage.getItem("isFromMobile") === "2" ? (
                    <>
                      {/* <Dropdown.Item
                        onClick={(e) => gotoRoute(e, "/user/setup-password")}
                      >
                        Settings
                      </Dropdown.Item>{" "}
                      <div className="divider_strip"></div>{" "} */}
                      <Dropdown.Item
                        onClick={(e) => gotoRoute(e, "/user/add-phone")}
                      >
                        Add phone
                      </Dropdown.Item>{" "}
                      <div className="divider_strip"></div>{" "}
                    </>
                  ) : localStorage.getItem("isFromMobile") === "0" ? (
                    <>
                      {" "}
                      <Dropdown.Item
                        onClick={(e) => gotoRoute(e, "/user/add-email")}
                      >
                        Add Email
                      </Dropdown.Item>{" "}
                      <div className="divider_strip"></div>{" "}
                      <Dropdown.Item
                        onClick={(e) => gotoRoute(e, "/user/add-phone")}
                      >
                        Add phone
                      </Dropdown.Item>{" "}
                      <div className="divider_strip"></div>{" "}
                    </>
                  ) : (
                    localStorage.getItem("isFromMobile") === "0" ?? (
                      <>
                        <Dropdown.Item
                          onClick={(e) => gotoRoute(e, "/user/setup-password")}
                        >
                           
                        </Dropdown.Item>{" "}
                        <div className="divider_strip"></div>{" "}
                      </>
                    )
                  )}
                  <Dropdown.Item
                    onClick={(e) => gotoRoute(e, "/user/WalletNew")}
                  >
                    Wallet
                  </Dropdown.Item>
                  {/* <Dropdown.Item
                  onClick={(e) => gotoRoute(e, "/user/edit-profile")}
                >
                  My Account
                </Dropdown.Item>
                <div className="divider_strip"></div>
                <Dropdown.Item onClick={(e) => gotoRoute(e, "/user/kyc")}>
                  My KYC
                </Dropdown.Item>
                */}
                  <div className="divider_strip"></div>
                  <Dropdown.Item
                    className="logout_btn"
                    onClick={() => logOutUser()}
                  >
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </Navbar>
      </Container>
    </header>
  );
};

export { TopNavbar };
