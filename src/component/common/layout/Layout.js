import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { TopNavbar } from "../topNavbar/TopNavbar";
import { Footer } from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import "./Layout.scss";

const Layout = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container fluid className={`layoutStyle ${props.className}`}>
      {/* <TopNavbar /> */}
      <Container fluid className={`layoutInner ${props.innerClass}`}>
        {props.children}
      </Container>
      {/* <Footer /> */}
    </Container>
  );
};

export { Layout };
