import { axiosApi } from "./Axios";

const axiosInterceptor = (
  loginState,
  loginDispatch,
  setRedirectToLogin,
  setLoading
) => {
  let axiosInterceptorRequest = axiosApi.interceptors.request.use(
    async (config) => {
      // console.log("interceptor=====>", loginState);
      setLoading(true);
      // console.log("loginapi=====> ", loginState);
      let tokens = await loginState?.user?.accessToken;
      if (tokens)
        // config.headers["auth_token"] = await tokens;
        config.headers["Authorization"] = await tokens;
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  let axiosInterceptorResponse = axiosApi.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    async (error) => {
      if (error.response.status === 403 || error.response.status === 401) {
        if (setRedirectToLogin) {
          setRedirectToLogin(true);
        }
        axiosApi.interceptors.response.eject(axiosInterceptorResponse);
        axiosApi.interceptors.request.eject(axiosInterceptorRequest);
        await loginDispatch({
          type: "userInfo",
          payload: {},
        });
      }
      setLoading(false);
      return Promise.reject(error);
    }
  );
};

export default { axiosInterceptor };
