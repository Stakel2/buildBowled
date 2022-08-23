import { useContext } from "react";
import { context } from "../Context/MainContext";
// import { VIEWER, ADMIN, SUPER_ADMIN } from "../Constant/index";

const IsLoggedIn = () => {
  const { loginState } = useContext(context);
  const loginToken = loginState?.user?.accessToken;
  return loginToken;
};

export default IsLoggedIn;
