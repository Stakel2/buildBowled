// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const AuthGuard = () => {
//   var isAuthenticated = true;
//   return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
// };
// export default AuthGuard;



import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
const AuthGuard = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem("token")
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;  
};

export default AuthGuard;