import axios from "axios";
import { toasts } from "../component/common/Toast/Toast";
import { REACT_APP_ADMIN } from "../constant";

export const adminApi = axios.create({
  baseURL: REACT_APP_ADMIN,
});

adminApi.interceptors.request.use((config) => {
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
  console.log("Error typedata Admin => ", error?.response);
  if (
    error?.response?.status &&
    (error?.response?.status === 403 || error?.response?.status === 401)
  ) {
    toasts.error("Please re-login, last login session expired.");
    localStorage.clear();
  } else {
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
  if (res.status === 400) {
    res.message && toasts.warning(res.message);
  }
}

export const adminApiCallPost = (url, data, params = {}, toastOn) =>
  new Promise((resolve, reject) => {
    adminApi
      .post(formatUrl(url, params), data)
      .then(async (response) => {
        let resp =
          response?.response == undefined ? response : response?.response;
        let errorToast = true;
        if (resp?.data?.data?.role == "user") {
          errorToast = await false;
          // handleError({ message: "User not allowed" });
          toasts.error("User not allowed");
          toastOn = "";
          reject(null);
        }
        if (toastOn == "toastOn") {
          if (resp?.data?.error == true) {
            // toastOn == "toastOn" && handleError(resp?.data);
            toastOn == "toastOn" && toasts.error(resp?.data);
            reject(null);
          } else {
            errorToast == true && toastOn == "toastOn" && handleSuccess(resp);
            resolve(resp?.data);
          }
        }
      })
      .catch((error) => {
        handleError(error);
        reject(null);
      });
  });

export const adminApiCallGet = (url, params = {}, toastOn) => {
  return new Promise((resolve) => {
    adminApi
      .get(formatUrl(url, params))
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
export const adminApiCallPut = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    adminApi
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

export const adminApiCallPatch = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    adminApi
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

export const adminApiCallDelete = (url, params = {}, toastOn) => {
  return new Promise((resolve) => {
    adminApi
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
