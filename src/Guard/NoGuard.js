import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NoGuard = () => {
  var isAuthenticated = false; //false;
  return !isAuthenticated ? <Outlet /> : ""
};

export default NoGuard;