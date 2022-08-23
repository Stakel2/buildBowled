import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./BannerStyle.scss";
import Shimmer from "react-shimmer-effect";
import BannerItem from "./BannerItem";

const Banner = (props) => {
  const { banners, setIdx, pauseCorousal } = props;

  useEffect(() => {
    // bannerHover
    ccc();
  }, [pauseCorousal]);

  const ccc = () => {
    console.log("WWWWWWWWWWW");
    console.log("pauseCorousalpauseCorousal ", pauseCorousal);
    // var element = document.getElementById("bannerHover");
    // pauseCorousal
    //   ? element.addEventListener("onmouseenter", function () {
    //       console.log("Event triggered enter");
    //     })
    //   : element.addEventListener("onmouseleave", function () {
    //       console.log("Event triggered leave");
    //     });
  };

  const onBannerClick = (item) => {
    // +id === 9 &&
    item?.socialInfo.website &&
      window.open(item?.socialInfo.website);
  };

  return (
    <Carousel
      id="bannerHover"
      indicators={false}
      className="banner_style"
      onSlide={setIdx}
      pause={pauseCorousal ? false : "hover"}
      // onMouseEnter={pauseCorousal}
    >
      {banners.length > 0 ? (
        banners.map((bannerItem, index) => {
          return (
            <Carousel.Item
              key={index}
              onClick={() => onBannerClick(bannerItem)}
              className={bannerItem?.socialInfo?.website  && "pointerClass"}
            >
              <BannerItem
                // bannerAnimation={bannerItem.gifImage}
                bannerImage={bannerItem.imageUrl}
              />
            </Carousel.Item>
          );
        })
      ) : (
        <Carousel.Item>
          <div className="banerShimerContainer">
            <Shimmer>
              <div className="bannerShimmer"></div>
            </Shimmer>
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export { Banner };
