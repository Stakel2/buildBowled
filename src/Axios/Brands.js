import axios from "axios";
import { toasts } from "../component/common/Toast/Toast";
import { REACT_APP_BRANDS } from "../constant";
import ClearUser from "../services/ClearUserData";

export const brandsApi = axios.create({
  baseURL: REACT_APP_BRANDS,
});

// console.log("tokennnnnn : ", localStorage.getItem("token"));
brandsApi.interceptors.request.use((config) => {
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
  } 
   if (error?.response?.status && error?.response?.status === 400) {
    toasts.error(error?.response?.data?.message);
    toasts.error(error?.response?.message);
  } else {
    error?.response?.data?.message && toasts.error(error.response.data.message);
  }
}

function handleSuccess(res) {
  console.log("API handle success");
  if (res.status === 200) {
    console.log("API 200");
    res.message && toasts.success(res.message);
    res?.data?.message && toasts.success(res.data.message);
  }
  if (res.status === 403) {
    console.log("API 403");
    res.message && toasts.warning(res.message);
  }
  if (res.status === 400) {
    console.log("API 400");
    res.message && toasts.warning(res.message);
  }
  if (res.error) {
    res.message && toasts.success(res.message);
    res?.data?.message && toasts.success(res.data.message);
  }
}

export const brandsApiCallPost = (url, data, params = {}, toastOn) =>
  new Promise((resolve, reject) => {
    brandsApi
      .post(formatUrl(url, params), data)
      .then(async (response) => {
        let resp =
          response?.response == undefined ? response : response?.response;
        console.log("API1");
        handleSuccess(resp);
        resolve(resp?.data);
      })
      .catch((error) => {
        console.log("API catch");
        handleError(error);
        reject(error);
      });
  });

export const brandsApiCallGet = (url, id, params = {}, toastOn) => {
  console.log(id,"id");
  return new Promise((resolve, reject) => {
    brandsApi
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
export const brandsApiCallPut = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    brandsApi
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

export const brandsApiCallPatch = (url, data, params = {}, toastOn) =>
  new Promise((resolve) => {
    brandsApi
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

export const brandsApiCallDelete = (url, params = {}, toastOn) => {
  return new Promise((resolve) => {
    brandsApi
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
