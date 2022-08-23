import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { TopNavbar } from "../../common/topNavbar/TopNavbar";
import { useLocation } from "react-router-dom";
import "./PageLayout.scss";
// import { Footer } from "../../common/Footer/Footer";
   import { Footer } from "../../common/Footer/Footer";

const PageLayout = ({ Component, ...props }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container fluid className={`layoutStyle ${props.className}`}>
      <TopNavbar />
      <Container fluid className={`layoutInner ${props.innerClass}`}>
      <Component {...props} /> 
      </Container>
      <Footer />
    </Container>
  );
};

export default  PageLayout



