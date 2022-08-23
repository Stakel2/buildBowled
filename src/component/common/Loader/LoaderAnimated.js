import React, { createRef, useEffect, useState } from "react";
import logoAnimate from "./logo.json";
import Lottie from "lottie-web";
import "./LoaderAnimatedStyle.scss";
const LoaderAnimated = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  let animationContainer = createRef();

  useEffect(() => {
    // console.log(props);

    Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: logoAnimate,
    });
    // document.body.className = 'hasLoader';
    //  return () => { document.body.className = ''; }
  }, [props.isLoading]);

  return (
    <>
      {props.isLoading ? (
        <div className="loaderOverlay">
          <div
            style={{ width: "250px", height: "250px" }}
            ref={animationContainer}
          ></div>
        </div>
      ) : null}
    </>
  );
};

export { LoaderAnimated };
