import axios from "axios";
import { toasts } from "../component/common/Toast/Toast.js";
import { REACT_APP_ADMIN } from "../constant";
export const BASE_URL = REACT_APP_ADMIN;
export const axiosApi = axios.create({
  baseURL: BASE_URL,
});

axiosApi.interceptors.request.use((config) => {
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
  if (
    error?.response?.status &&
    (error?.response?.status === 403 || error?.response?.status === 401)
  ) {
    toasts.error("Please re-login, last login session expired.");
    localStorage.clear();
  } else {
    error?.data?.message && toasts.error(error.data.message);
    error?.response?.data?.message && toasts.error(error.response.data.message);
  }
}

function handleSuccess(res) {
  if (res.status === 200) {
    res.message && toasts.success(res.message);
    res?.data?.message && toasts.success(res.data.message);
  }
  if (res.status === 403) {
    res.message && toasts.warning(res.message);
  }
}

export const apiCallPost = (url, data, params = {}, toastOn) =>
  new Promise((resolve, reject) => {
    axiosApi
      .post(formatUrl(url, params), data)
      .then((res) => {
        if (toastOn == "toastOn") {
          handleSuccess(res);
        }
        resolve(res.data);
      })
      .catch((error) => {
        handleError(error);
        reject(error);
      });
  });

export const apiCallGet = (url, params = {}, toastOn, isDataNeeded) => {
  return new Promise((resolve) => {
    axiosApi
      .get(formatUrl(url, params))
      .then((res) => {
        if (toastOn === "toastOn") {
          handleSuccess(res);
        }
        resolve(res?.data);
      })
      .catch((error) => {
        // handleError(error);
        resolve(isDataNeeded ? error?.response?.data : null);
      });
  });
};
export const apiCallPut = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    axiosApi
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

export const apiCallPatch = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    axiosApi
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

export const apiCallDelete = (url, params = {}, toastOn) => {
  return new Promise((resolve, reject) => {
    axiosApi
      .delete(formatUrl(url, params))
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
