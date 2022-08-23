import axios from "axios";
import { toasts } from "../component/common/Toast/Toast";
import { REACT_APP_USER } from "../constant";

export const userApi = axios.create({
  baseURL: REACT_APP_USER,
});

// console.log("tokennnnnn : ", localStorage.getItem("token"));
userApi.interceptors.request.use((config) => {
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
});
function formatUrl(url, params) {
  params =
    params && Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : "";
  return `${url}${params}`;
}

function handleError(error) {
  // error?.message && toasts.error(error.message);
  
  if (
    error?.response?.status &&
    (error?.response?.status === 403 || error?.response?.status === 401)
  ) {
    console.log("===========> ", error?.response);
    if (error?.response?.data?.message === "Email must be verified") {
      toasts.error(error?.response?.data?.message);
    } else {
      toasts.error("Please re-login, last login session expired.");
    }
    localStorage.clear();
  }  if (error?.response?.status && error?.response?.status === 400) {
    toasts.error(error?.response?.data?.message);
    toasts.error(error?.response?.message);
  } else {
    error?.response?.data?.message && toasts.error(error.response.data.message);
  }
}

async function handleSuccess(res, noSuccessToasts) {
  console.log("API4", res);
  if (res.status === 200 && !noSuccessToasts) {
    console.log("API 200");
    res.message && toasts.success(res.message);
    res?.data?.message && toasts.success(res.data.message);
  }
  if (res.status === 403) {
    console.log("API 403");
    res.message && toasts.warning(res.message);
    res?.data?.message && toasts.warning(res.data.message);
  }
  if (res.status === 400) {
    console.log("API 400");
    res.message && toasts.warning(res.message);
    res?.data?.message && toasts.warning(res.data.message);
  }
}

export const userApiCallPost = (
  url,
  data,
  header,
  params = {},
  toastOn,
  noSuccessToast = false
) =>
  new Promise((resolve, reject) => {
    const options = {
      headers: {
        "X-CHECK-OTP": header,
      },
    };
    //  let config=config.headers["X-CHECK-OTP"] = header;
    userApi
      .post(formatUrl(url, params), data, options)
      .then(async (response) => {
        console.log("API1");
        let resp =
          response?.response == undefined ? response : response?.response;
        if (toastOn == "toastOn") {
          console.log("API2");
          await handleSuccess(resp, noSuccessToast);
        }
        resolve(resp?.data);
      })
      .catch((error) => {
        console.log("API3");
        handleError(error);
        reject(error);
      });
  });

  export const userApiCallPostWithoutHeader = (
    url,
    data,
    params = {},
    toastOn,
    noSuccessToast = false
  ) =>
    new Promise((resolve, reject) => {
    
      userApi
        .post(formatUrl(url, params), data)
        .then(async (response) => {
          console.log("API1");
          let resp =
            response?.response == undefined ? response : response?.response;
          if (toastOn == "toastOn") {
            console.log("API2");
            await handleSuccess(resp, noSuccessToast);
          }
          resolve(resp?.data);
        })
        .catch((error) => {
          console.log("API3");
          handleError(error);
          reject(error);
        });
    });

export const userApiCallGet = (url, params = {}, toastOn) => {
  return new Promise((resolve, reject) => {
    userApi
      .get(formatUrl(url, params))
      .then((res) => {
        if (toastOn === "toastOn") {
          handleSuccess(res);
        }
        resolve(res.data);
      })
      .catch((error) => {
        handleError(error);
        reject(error);
      });
  });
};
export const userApiCallPut = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    userApi
      .put(formatUrl(url, params), data)
      .then((res) => {
        if (toastOn === "toastOn") {
          handleSuccess(res);
        }
        resolve(res.data);
      })
      .catch((error) => {
        handleError(error);
        resolve(null);
      });
  });

export const userApiCallPatch = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    userApi
      .patch(formatUrl(url, params), data)
      .then((res) => {
        if (toastOn === "toastOn") {
          handleSuccess(res);
        }
        resolve(res.data);
      })
      .catch((error) => {
        handleError(error);
        resolve(null);
      });
  });

export const userApiCallDelete = (url, params = {}, toastOn) => {
  return new Promise((resolve) => {
    userApi
      .delete(formatUrl(url, params))
      .then((res) => {
        if (toastOn === "toastOn") {
          handleSuccess(res);
        }
        resolve(res.data);
      })
      .catch((error) => {
        handleError(error);
        resolve(null);
      });
  });
};
