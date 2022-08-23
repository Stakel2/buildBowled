import React, { useState } from "react";
import {
    Row,
    Col,
    Nav,
    Navbar,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BowledLogo from "../../../assets/images/bowled-images/Bowled-Logo.svg";
import "./SidebarWallet.scss";
import close from "../../../assets/images/close.svg";

const SidebarWallet = ({ hiddSidebar, setHiddSidebar }) => {

    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    return (
        <div className="SideBar">
            <button className="croseButton" onClick={() => setHiddSidebar(!hiddSidebar)}>
                <img src={close} alt="close" /></button>
            <Nav defaultActiveKey="/wallet" className="flex-column">
                <Navbar.Brand className=" pt-4 ps-3" href="/"><img className="BowledLogo" src={BowledLogo} /></Navbar.Brand>
                <div className="pt-4 sideLinks">
                    <NavLink to="/" href="play">Play</NavLink>
                    <NavLink to="/user/WalletNew" activeClassName="selected" eventKey=" wallet">Wallet</NavLink>
                    <NavLink to="/" eventKey="marketplace">Marketplace</NavLink>
                    <NavLink to="/" eventKey="account">Account</NavLink>
                </div>
            </Nav >
        </div >

    )
}

export default SidebarWallet