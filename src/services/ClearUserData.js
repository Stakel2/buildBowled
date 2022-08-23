import react, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../Context/MainContext";
// import { VIEWER, ADMIN, SUPER_ADMIN } from "../Constant/index";

const ClearUser = () => {
  const { loginState, loginDispatch } = useContext(context);
  const navigate = useNavigate();
  localStorage.clear();
  loginDispatch({
    type: "reset",
    payload: {},
  });
  navigate("/");
  console.log("LOGOUT");
  return "";
};

export default ClearUser;
