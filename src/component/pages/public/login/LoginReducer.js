export const initialLoginUser = {
  user: {
    userRole: "",
    accessToken: "",
    refreshToken: "",
  },
};
export const initializer = (initialValue = initialLoginUser) =>
  JSON.parse(localStorage.getItem("login")) || initialValue;

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case "userInfo":
      return {
        user: { ...action.payload },
      };
    case "reset":
      return initialLoginUser;
    default:
      return state;
  }
};
