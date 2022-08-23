import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrowList from "../../../../assets/images/arrow_list_sidebar.svg";
import flagIndia from "../../../../assets/images/flag_india_sidebar.png";
import flagEng from "../../../../assets/images/flag_england_sidebar.png";
import flagSouth from "../../../../assets/images/flag_southAfrica_sidebar.png";
import flagnewZealand from "../../../../assets/images/flag_newzeland_sidebar.png";
import batsmanSidebar from "../../../../assets/images/icon_batsman_sidebar.svg";
import bowlerSidebar from "../../../../assets/images/icon_bowled_sidebar.svg";
import RangeSliderFilter from "./RangeSliderFilter";
import SidebarCollapseWrap from "./SidebarCollapseWrap";
import SidebarCheckRadio from "./SidebarCheckRadio";
import SidebarCheckId from "./sidebarCheckId";

const SeasonList = [
  {
    id: "001",
    label: "2021",
    totalPlayer: "(190)",
    type: "checkbox",
    img: arrowList,
  },
  {
    id: "002",
    label: "2022",
    totalPlayer: "(339)",
    type: "checkbox",
    img: arrowList,
  },
];

const CategoryList = [
  {
    id: "003",
    label: "Common",
    type: "checkbox",
    img: arrowList,
  },
  {
    id: "004",
    label: "Rare",
    type: "checkbox",
    img: arrowList,
  },
  {
    id: "005",
    label: "Super Rare",
    type: "checkbox",
    img: arrowList,
  },
  {
    id: "006",
    label: "Epic",
    type: "checkbox",
    img: arrowList,
  },
];

const CountryList = [
  {
    id: "c1",
    label: "India",
    type: "checkbox",
    img: flagIndia,
  },
  {
    id: "c2",
    label: "England",
    type: "checkbox",
    img: flagEng,
  },
  {
    id: "c3",
    label: "South Africa",
    type: "checkbox",
    img: flagSouth,
  },
  {
    id: "c4",
    label: "New Zealand",
    type: "checkbox",
    img: flagnewZealand,
  },
];

const CardList = [
  {
    id: "cd1",
    label: "Batsman",
    type: "radio",
    name: "cardType",
    img: batsmanSidebar,
    isChecked: false,
  },
  {
    id: "cd2",
    label: "Bowler",
    type: "radio",
    name: "cardType",
    img: bowlerSidebar,
    isChecked: false,
  },
  {
    id: "cd3",
    label: "All Rounder",
    type: "radio",
    name: "cardType",
    isChecked: false,
  },
];

const MarketSidebar = (props) => {
  const { filterPayload, filterData, setFilterPayload } = props;
  const [priceRange, setPriceRange] = useState();
  const [runRate, setRunRate] = useState();
  const [strikeRange, setStrikeRange] = useState();
  const [cardRange, setCardRange] = useState("");

  console.log("first box", filterPayload)

  useEffect(() => {
    document.body.className = "landing";
    return () => (document.body.className = "");
  });

  const handleOnPriceChange = (priceRange) => {
    setPriceRange(priceRange);
  };
  const handleOnRunRateChange = (runRate) => {
    setRunRate(runRate);
  };

  const handleOnStrikeChange = (strikeRange) => {
    setStrikeRange(strikeRange);
  };
  const handleCardChange = (cardRangee) => {
    setCardRange(cardRangee);
  };
  console.log("first", cardRange);

  const PriceRangeLabels = {
    0: "0.0ETH",
    10: "10ETH",
  };
  const StrikeRangeLabels = {
    0: "0",
    100: "100",
  };
  const RunRateLabels = {
    0: "0",
    1000: "1000",
  };

  console.log("filter", filterData?.nftType);
  return (
    <>
      {filterData && (
        <Col className={`mkt_sidebarStyle ${props.sidebarMobile}`}>
          <SidebarCollapseWrap title="Season">
            <SidebarCheckRadio
              filterList={filterData?.session}
              filterPayload={filterPayload}
              setFilterPayload={setFilterPayload}
            />
          </SidebarCollapseWrap>

          <SidebarCollapseWrap title="Rarity">
            <SidebarCheckRadio
              filterList={filterData?.rarity}
              filterPayload={filterPayload}
              setFilterPayload={setFilterPayload}
              title="Rarity"
            />
          </SidebarCollapseWrap>

          {/* <SidebarCollapseWrap title="Price Range">
            <RangeSliderFilter
              rangeBarStyle="rangeExMargin"
              min={0.01}
              max={10}
              value={priceRange}
              onChange={handleOnPriceChange}
              labels={PriceRangeLabels}
            />
          </SidebarCollapseWrap> */}

          <SidebarCollapseWrap title="Country">
            <SidebarCheckRadio
              filterList={filterData?.country}
              listClass="exPaddLeft"
              filterPayload={filterPayload}
              setFilterPayload={setFilterPayload}
              title="Country"
            />
          </SidebarCollapseWrap>

          {/* <SidebarCollapseWrap title="Card">
            <SidebarCheckRadio
              filterList={filterData?.cardType}
              filterPayload={filterPayload}
              setFilterPayload={setFilterPayload}
              title="Card"
              //  value={cardRange}
              //  onChange={(e)=>setCardRange(e.target.value)
            />
          </SidebarCollapseWrap> */}
          <SidebarCollapseWrap title="Player Type">
            <SidebarCheckRadio
              filterList={filterData?.cardType}
              filterPayload={filterPayload}
              setFilterPayload={setFilterPayload}
              title="Player Type
              "
            />
          </SidebarCollapseWrap>
          <SidebarCollapseWrap title="Type">
            <SidebarCheckRadio
              filterList={filterData?.nftType}
              filterPayload={filterPayload}
              setFilterPayload={setFilterPayload}
              title="Type"
            />
          </SidebarCollapseWrap>


           <SidebarCollapseWrap title="Category">
            <SidebarCheckRadio
              filterList={filterData?.mintType}
              filterPayload={filterPayload}
              setFilterPayload={setFilterPayload}
              title="Category"
            />
          </SidebarCollapseWrap>

        </Col>
      )}
    </>
  );
};

export default MarketSidebar;
