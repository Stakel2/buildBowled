import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./LayoutSidebar.scss";
import SidebarWallet from "../SidebarWallet/SidebarWallet";
import FooterWallet from "../FooterWallet/FooterWallet";

const LayoutSidebar = ({ children, className, showHIddClass, hiddSidebar, setHiddSidebar }) => {

    return (
        <Container fluid className={`layoutStyle ${className}`}>
            <Container fluid className="signup_section no_padd">
                <Row className="gx-0 mainboxnew">
                    <Col className={`SidebarCo bg_image ${showHIddClass}`}>
                        <SidebarWallet hiddSidebar={hiddSidebar} setHiddSidebar={setHiddSidebar} />
                    </Col>
                    <Col className="WalletCon manage_layout_setup">
                        {children}
                    </Col>

                    <FooterWallet />
                </Row>
            </Container>
        </Container>
    );
};

export { LayoutSidebar };