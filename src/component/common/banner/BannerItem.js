import React from "react";
import { Image, Shimmer } from "react-shimmer";

const BannerItem = (props) => {
  const { bannerImage, bannerAnimation } = props;
  return (
    <>
      <Image
        src={`${bannerImage}?tr=w-1920,h-726`}
        fallback={<Shimmer width={1920} height={726} />}
      />
    </>
  );
};

export default BannerItem;
