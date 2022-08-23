import React, { useContext, useState } from "react";
import { userApiCallPost } from "../../../Axios/User";
import SocialButton from "../SocialBtns/SocialButton";
import google_icon from "../../../assets/images/bowled-images/google_icon.svg";
import fb_icon from "../../../assets/images/bowled-images/fb_icon.svg";
import phone_icon from "../../../assets/images/smartphone.png";
import { useNavigate } from "react-router-dom";
import { GOOGLE_CLIENT_ID } from "../../../constant";
import { useGoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { context } from "../../../Context/MainContext";
import Interceptors from "../../../Axios/Interceptors";
import { LoaderAnimated } from "../Loader/LoaderAnimated";
import { toasts } from "../Toast/Toast";
import Cookies from "js-cookie";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { loginDispatch } = useContext(context);
  const onGooleSuccess = async (res) => {
    debugger;
    setLoading(true);

    try {
      console.log("GOOGLE", res);
      userApiCallPost(
        "social/google",
        {
          access_token: res.accessToken,
          id_token: res.tokenObj.id_token,
        },
        {},
        "toastOn"
      )
        .then(async (res) => {
          let data = await res;
          console.log("DATA", res);
          console.log("DATA1", data);
          setLoading(false);
          if (data) {
            console.log("DATA2", data);
            await localStorage.setItem("token", data.data.accessToken);
            await localStorage.setItem("userId", data.data.userId);
            await localStorage.setItem("isFromMobile", 2);
            Cookies.set("token", data.data.accessToken, {
              path: "http://game-stage.bowled.io",
            });
            Cookies.set("token", data.data.accessToken, {
              path: "http://localhost:3000",
            });
            await loginDispatch({
              type: "userInfo",
              payload: { ...data.data },
            });
            await Interceptors.axiosInterceptor(
              { user: { ...data.data } },
              loginDispatch
            );

            if (localStorage.getItem("token")) {
              navigate("/");
            }
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("DATA", err);
        });
    } catch {
      setLoading(false);
      console.log("DATA", "catch");
    }
  };

  const onGoogleFailure = (error) => {
    console.log(error);
    error?.error === "popup_closed_by_user" ??
      toasts.error("Popup closed by user");
  };
  /*SignIn with Google */

  function LoginWithMobile() {
    navigate("/login-with-mobile");
  }
  const { signIn } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
    buttonText: "Signup with google",
    onSuccess: onGooleSuccess,
    onFailure: onGoogleFailure,
    cookiePolicy: "single_host_origin",
    prompt: "select_account",
    // uxMode: "redirect",
  });

  /*SignIn with facebook */

  const responseFacebook = async (response) => {
    setLoading(true);

    try {
      const results = await userApiCallPost(
        "social/facebook",
        {
          access_token: response.accessToken,
        },
        {},
        "toastOn"
      )
        .then(async (res) => {
          let data = await res;
          console.log("DATA", res);
          console.log("DATA1", data);
          setLoading(false);
          if (data) {
            console.log("DATA2", data);
            await localStorage.setItem("token", data.data.accessToken);
            await localStorage.setItem("userId", data.data.userId);
            await localStorage.setItem("isFromMobile", 2);
            Cookies.set("token", data.data.accessToken, {
              path: "http://game-stage.bowled.io",
            });
            Cookies.set("token", data.data.accessToken, {
              path: "http://localhost:3000",
            });
            await loginDispatch({
              type: "userInfo",
              payload: { ...data.data },
            });
            await Interceptors.axiosInterceptor(
              { user: { ...data.data } },
              loginDispatch
            );

            if (localStorage.getItem("token")) {
              navigate("/");
            }
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("DATA", err);
        });
    } catch {
      setLoading(false);
    }
  };

  const onFbFailure = (error) => {
    console.log(error);
    error?.error === "popup_closed_by_user" ??
      toasts.error("Popup closed by user");
  };
  return (
    <div className="social_btns">
      <LoaderAnimated isLoading={loading} />
      <SocialButton
        title="Continue with Google"
        type="button"
        icon={google_icon}
        onClick={signIn}
      />
      <FacebookLogin
        appId="351289473726616"
        callback={responseFacebook}
        onFailure={onFbFailure}
        authType={"reauthenticate"}
        fields="name,email,picture"
        render={(renderProps) => (
          <a className="socialLink" onClick={renderProps.onClick}>
            <SocialButton title="Continue with Facebook" icon={fb_icon} />
          </a>
        )}
      />
      <SocialButton
        title="Continue with Mobile"
        type="button"
        icon={phone_icon}
        onClick={LoginWithMobile}
      />
    </div>
  );
};

export default SocialLogin;
