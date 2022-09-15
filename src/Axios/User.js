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
  } else if (error?.response?.status && error?.response?.status === 400) {
    toasts.error(error?.response?.data?.message);
    toasts.error(error?.response?.message);
  } else {
    error?.response?.data?.message && toasts.error(error.response.data.message);
  }
}

function handleSuccess(res, noSuccessToasts) {
  console.log("API1");
  if (res.status === 200 && !noSuccessToasts) {
    res.message && toasts.success(res.message);
    res?.data?.message && toasts.success(res.data.message);
  }
  if (res.status === 403) {
    res.message && toasts.warning(res.message);
  }
  if (res.status === 400) {
    res.message && toasts.warning(res.message);
  }
}

export const userApiCallPost = (
  url,
  data,
  params = {},
  toastOn,
  noSuccessToast
) =>
  new Promise((resolve, reject) => {
    userApi
      .post(formatUrl(url, params), data)
      .then(async (response) => {
        let resp =
          response?.response == undefined ? response : response?.response;
        let errorToast = true;

        if (resp?.data?.error == true) {
          toastOn == "toastOn" && toasts.error(resp?.data);
          reject(resp?.data?.error);
        } else {
          if (errorToast == true && toastOn == "toastOn") {
            handleSuccess(resp, noSuccessToast);
          }
          resolve(resp?.data);
        }
      })
      .catch((error) => {
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
        if (toastOn === "toastOff") {
          console.log("error", error);
        } else {
          handleError(error);
        }
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
    console.log("data >>>>>>>>0 " ,data);
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
