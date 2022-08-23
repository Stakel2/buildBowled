import React, { useEffect, useState } from "react";
import { EventsBlock, HeadingEditPage, Layout, LoaderAnimated, SliderRaffles } from "../../../common";
import "./ShowcaseStyle.scss";
import LayoutCard from "../../../common/layout/LayoutCard";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import ShowcasePagintion from "./ShowcasePagintion";
import ShowcaseArtist from "./ShowcaseArtist";
import ShowcaseBrand from "./ShowcaseBrand";
import banner from "../../../../assets/images/home/home_banner.jpg";
import { useParams } from "react-router-dom";
import LogoBanner from "../../../common/logoBanner/LogoBanner";

const Showcase = () => {
  const [brandsList, setBrandsList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [key, setKey] = useState(param?.cat);
  
 

  return (
    <Layout innerClass="showCaseLayout">
      <LoaderAnimated isLoading={loading} />
      {/* <HeadingEditPage title={"Showcase"} /> */}
      <Container fluid className="mainBannerStyle">
      <LogoBanner/>
      </Container>
      <Container className="artistBrand_section ">
          <Row className="artistBrand_section_header">
            <Col><h2>Showcase</h2></Col>            
          </Row>
          <Tabs            
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 showCase_tabs"
          >
            <Tab eventKey="artist" title="Artist">
              <ShowcaseArtist />
            </Tab>
            <Tab eventKey="brands" title="Brands">
              <ShowcaseBrand />
            </Tab>           
          </Tabs>
        </Container>

        <SliderRaffles />    
        <EventsBlock />    
    </Layout>
  );
};

export default Showcase;
