import React, { useContext, useEffect } from "react";
import { userApiCallGet } from "./Axios/User";
import { context } from "./Context/MainContext";

const Location = () => {
  const { userLocation, dispatchUserLocation } = useContext(context);
  useEffect(() => {
    // https://api-stage.eastnft.com/users/api/v1/location
    //https://ipapi.co/json/?key=oLM4V3DMLGzvNjktRmIwkVJOYzanXDE0ntK7fUvjAaycWJvU4p
    userApiCallGet("https://ipapi.co/json/?key=oLM4V3DMLGzvNjktRmIwkVJOYzanXDE0ntK7fUvjAaycWJvU4p")
      .then(async (res) => {
        let data = await res;
        if (data) {
          await dispatchUserLocation({
            type: "userlocation",
            payload: data.country,
          });
        }
        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
      });
  }, []);

  return "";
};

export default Location;
